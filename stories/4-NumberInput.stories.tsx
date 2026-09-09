import type {Meta, StoryObj} from "@storybook/react-vite";
import {Fragment} from "react";

import FormField from "../src/form/field/FormField";
import NumberInput from "../src/form/input/number/NumberInput";
import StateProvider from "./utils/StateProvider";

const meta: Meta = {
  title: "Number Input"
};

export default meta;

export const NumberInputStory: StoryObj = {
  name: "Number Input",
  render: () => (
    <Fragment>
      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <Fragment>
            <FormField label={"Price – maximumFractionDigits={2}"}>
              <NumberInput
                maximumFractionDigits={2}
                name={"price"}
                onChange={(e) => setState({value: e.currentTarget.value})}
                value={state.value}
                placeholder={"$ 10"}
              />
            </FormField>

            <p>{`event.currentTarget.value: ${state.value}`}</p>
          </Fragment>
        )}
      </StateProvider>

      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <Fragment>
            <br />

            <FormField
              label={"Price - Has Error"}
              errorMessages={["Please enter a valid price"]}>
              <NumberInput
                maximumFractionDigits={2}
                name={"price"}
                onChange={(e) => setState({value: e.currentTarget.value})}
                value={state.value}
                placeholder={"$ 10"}
                hasError={true}
              />
            </FormField>

            <p>{`event.currentTarget.value: ${state.value}`}</p>
          </Fragment>
        )}
      </StateProvider>
    </Fragment>
  )
};
export const NumberInputWithMaximumFractionDigit: StoryObj = {
  name: "Number Input with maximumFractionDigit",
  render: () => (
    <Fragment>
      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <Fragment>
            <FormField label={"Price (BTC) – maximumFractionDigits={8}"}>
              <NumberInput
                maximumFractionDigits={8}
                name={"price"}
                onChange={(e) => setState({value: e.currentTarget.value})}
                value={state.value}
                placeholder={"Min. ₿ 0.00000001"}
              />
            </FormField>

            <p>{`event.currentTarget.value: ${state.value}`}</p>
          </Fragment>
        )}
      </StateProvider>

      <br />

      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <Fragment>
            <FormField
              label={
                "ID or Passport Number – maxFractionDigits={0} - Can have leading zeros"
              }>
              <NumberInput
                name={"id-number"}
                onChange={(e) => setState({value: e.currentTarget.value})}
                value={state.value}
              />
            </FormField>

            <p>{`event.currentTarget.value: ${state.value}`}</p>
          </Fragment>
        )}
      </StateProvider>
    </Fragment>
  )
};
export const NumberInputWithShouldFormatToLocaleString: StoryObj = {
  name: "Number Input with shouldFormatToLocaleString",
  render: () => (
    <Fragment>
      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <Fragment>
            <FormField
              label={
                "Wallet ($) – maximumFractionDigits={2} - shouldFormatToLocaleString={true}"
              }>
              <NumberInput
                name={"wallet"}
                formatProps={{
                  shouldFormatToLocaleString: true
                }}
                maximumFractionDigits={2}
                placeholder={"$ 1,000"}
                onChange={(e) => setState({value: e.currentTarget.value})}
                value={state.value}
              />
            </FormField>

            <p>{`event.currentTarget.value: ${state.value}`}</p>
          </Fragment>
        )}
      </StateProvider>

      <br />

      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <Fragment>
            <FormField
              label={
                "World Population – maximumFractionDigits={0} - shouldFormatToLocaleString={true}"
              }>
              <NumberInput
                name={"world-population"}
                placeholder={"7,794,798,739"}
                formatProps={{shouldFormatToLocaleString: true}}
                onChange={(e) => setState({value: e.currentTarget.value})}
                value={state.value}
              />
            </FormField>

            <p>{`event.currentTarget.value: ${state.value}`}</p>
          </Fragment>
        )}
      </StateProvider>
    </Fragment>
  )
};
export const NumberInputWithLocale: StoryObj = {
  name: "Number Input with locale",
  render: () => (
    <Fragment>
      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <Fragment>
            <FormField
              label={
                'Budget (Locale) – maximumFractionDigits={4} - shouldFormatToLocaleString={true} - locale={"zh-Hans-CN-u-nu-hanidec"}'
              }>
              <NumberInput
                name={"world-population"}
                maximumFractionDigits={4}
                formatProps={{
                  shouldFormatToLocaleString: true,
                  locale: "zh-Hans-CN-u-nu-hanidec"
                }}
                onChange={(e) => setState({value: e.currentTarget.value})}
                value={state.value}
              />
            </FormField>

            <p>{`event.currentTarget.value: ${state.value}`}</p>
          </Fragment>
        )}
      </StateProvider>

      <br />

      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <Fragment>
            <FormField
              label={
                'Budget (Locale) – maximumFractionDigits={4} - shouldFormatToLocaleString={true} - locale={"tr"}'
              }>
              <NumberInput
                name={"world-population"}
                maximumFractionDigits={4}
                formatProps={{
                  shouldFormatToLocaleString: true,
                  locale: "tr"
                }}
                onChange={(e) => setState({value: e.currentTarget.value})}
                value={state.value}
              />
            </FormField>

            <p>{`event.currentTarget.value: ${state.value}`}</p>
          </Fragment>
        )}
      </StateProvider>
    </Fragment>
  )
};
