import {fireEvent, render, screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import {testA11y} from "../../core/utils/test/testUtils";
import type {TypeaheadSelectProps} from "./TypeaheadSelect";
import TypeaheadSelect from "./TypeaheadSelect";

describe("<TypeaheadSelect />", () => {
  const defaultTypeaheadSelectProps: TypeaheadSelectProps = {
    testid: "typeahead-select",
    options: [
      {id: "1", title: "first-dropdown-option"},
      {id: "2", title: "second-dropdown-option"},
      {id: "3", title: "third-dropdown-option"}
    ],
    selectedOptions: [{id: "1", title: "test"}],
    onSelect: jest.fn(),
    onKeywordChange: jest.fn(),
    onTagRemove: jest.fn(),
    typeaheadProps: {
      placeholder: "test placeholder",
      name: "test typeahead"
    }
  };

  it("should render correctly", () => {
    render(<TypeaheadSelect {...defaultTypeaheadSelectProps} />);
  });

  it("should pass a11y test", async () => {
    const {container} = render(<TypeaheadSelect {...defaultTypeaheadSelectProps} />);

    await testA11y(container, {
      rules: {
        "aria-required-parent": {enabled: false},
        "aria-required-children": {enabled: false},
        list: {enabled: false},
        "aria-input-field-name": {enabled: false}
      }
    });
  });

  it("should update value on change", async () => {
    render(<TypeaheadSelect {...defaultTypeaheadSelectProps} />);

    const typeaheadSelect = screen.getByRole("textbox");

    await userEvent.type(typeaheadSelect, "test");

    expect(typeaheadSelect).toHaveValue("test");
  });

  it("should add disabled attribute when isDisabled is true", () => {
    render(<TypeaheadSelect isDisabled={true} {...defaultTypeaheadSelectProps} />);

    const typeaheadSelect = screen.getByRole("textbox");

    expect(typeaheadSelect).toBeDisabled();
  });

  it("should set initialValue and remove when set new value", async () => {
    render(
      <TypeaheadSelect initialKeyword={"initial"} {...defaultTypeaheadSelectProps} />
    );

    const typeaheadSelect = screen.getByRole("textbox") as HTMLInputElement;

    expect(typeaheadSelect).toHaveValue("initial");

    await userEvent.type(typeaheadSelect, "test", {
      initialSelectionStart: 0,
      initialSelectionEnd: typeaheadSelect.value.length
    });

    expect(typeaheadSelect).toHaveValue("test");
  });

  it("should render custom spinner correctly", () => {
    const customSpinner = <p data-testid={"spinner"}>{"Spinner"}</p>;

    const {container} = render(
      <TypeaheadSelect
        customSpinner={customSpinner}
        areOptionsFetching={true}
        {...defaultTypeaheadSelectProps}
      />
    );

    const spinner = screen.getByText("Spinner");

    expect(container).toContainElement(spinner);
  });

  it("should render option menu when focused", async () => {
    render(
      <TypeaheadSelect
        {...defaultTypeaheadSelectProps}
        testid={"test-dropdown-visibility"}
      />
    );

    const dropdownList = screen.getByTestId("test-dropdown-visibility");

    expect(dropdownList).not.toHaveClass("select-content--is-visible");

    await userEvent.click(screen.getByRole("textbox"));

    expect(dropdownList).toHaveClass("select-content--is-visible");
  });

  it("should run click event handle when option is selected", async () => {
    render(
      <TypeaheadSelect
        {...defaultTypeaheadSelectProps}
        testid={"test-dropdown-visibility"}
        selectedOptions={[]}
      />
    );

    const selectedOptionList = screen.getByRole("list");

    const dropdownList = screen.getByTestId("test-dropdown-visibility");

    const firstOption = within(dropdownList).getByTestId(
      "test-dropdown-visibility.item-0"
    );

    await userEvent.click(firstOption);

    expect(defaultTypeaheadSelectProps.onSelect).toHaveBeenCalledTimes(1);

    const secondOption = within(dropdownList).getByTestId(
      "test-dropdown-visibility.item-1"
    );

    await userEvent.click(secondOption);

    expect(selectedOptionList).not.toContainElement(secondOption);
  });

  it("should not render option menu when selectedOptionLimit is reached", async () => {
    render(
      <TypeaheadSelect
        {...defaultTypeaheadSelectProps}
        testid={"test-dropdown-visibility"}
        selectedOptionLimit={1}
      />
    );

    const selectedOptionList = screen.getByRole("list");

    const dropdownList = screen.getByTestId("test-dropdown-visibility");

    const secondOption = within(dropdownList).getByTestId(
      "test-dropdown-visibility.item-1"
    );

    await userEvent.click(secondOption);

    expect(selectedOptionList).not.toContainElement(secondOption);
  });

  it("should render when select an option flow correctly", async () => {
    render(
      <TypeaheadSelect
        {...defaultTypeaheadSelectProps}
        testid={"test-dropdown-visibility"}
        selectedOptions={[]}
        selectedOptionLimit={1}
      />
    );

    await userEvent.click(screen.getByRole("textbox"));

    const dropdownList = screen.getByTestId("test-dropdown-visibility");

    expect(dropdownList).toHaveClass("select-content--is-visible");

    const typeaheadInput = screen.getByRole("textbox");

    await userEvent.type(typeaheadInput, "second-dropdown");

    const searchedOption = screen.getByTestId("test-dropdown-visibility.item-1");

    expect(dropdownList).toContainElement(searchedOption);

    fireEvent.focus(searchedOption);

    await userEvent.click(searchedOption);

    expect(dropdownList).not.toHaveClass("select-content--is-visible");

    expect(defaultTypeaheadSelectProps.onSelect).toHaveBeenCalledTimes(1);
  });

  it("should not render selected option on dropdown list", async () => {
    const {rerender} = render(
      <TypeaheadSelect
        {...defaultTypeaheadSelectProps}
        testid={"test-dropdown-visibility"}
        selectedOptions={[]}
        selectedOptionLimit={2}
      />
    );

    await userEvent.click(screen.getByRole("textbox"));

    const dropdownList = screen.getByTestId("test-dropdown-visibility");

    expect(dropdownList).toHaveClass("select-content--is-visible");

    const typeaheadInput = screen.getByRole("textbox");

    await userEvent.type(typeaheadInput, "second-dropdown");

    const searchedOption = screen.getByTestId("test-dropdown-visibility.item-1");

    expect(dropdownList).toContainElement(searchedOption);

    fireEvent.focus(searchedOption);

    await userEvent.click(searchedOption);

    expect(defaultTypeaheadSelectProps.onSelect).toHaveBeenCalledTimes(1);

    expect(dropdownList).toHaveClass("select-content--is-visible");

    rerender(
      <TypeaheadSelect
        {...defaultTypeaheadSelectProps}
        testid={"test-dropdown-visibility"}
        selectedOptions={[{id: "2", title: "second-dropdown-option"}]}
        selectedOptionLimit={2}
      />
    );

    const selectedOptionList = screen.getByRole("list");

    expect(dropdownList.children.length).toBe(2);

    // The selected option leaves the dropdown and becomes the one tag; the input sits beside
    // the tag list, not inside it.
    expect(selectedOptionList.children.length).toBe(1);
    expect(selectedOptionList).toHaveTextContent("second-dropdown-option");
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
/* eslint
      no-magic-numbers: "off",
      testing-library/no-node-access: "off"
*/
