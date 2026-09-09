import type {Meta, StoryObj} from "@storybook/react-vite";
import {Fragment} from "react";
import FormField from "../src/form/field/FormField";
import Input from "../src/form/input/Input";

const meta: Meta = {
  title: "Color Input"
};

export default meta;

export const ColorInput: StoryObj = {
  name: "Color Input",
  render: () => (
    <Fragment>
      <FormField labelledBy={"Color Picker"} label={"Color Picker"}>
        <Input
          name={"colorPicker"}
          type={"color"}
          onChange={(e) => console.log(e.currentTarget.value)}
        />
      </FormField>
    </Fragment>
  )
};
