import type {Meta, StoryObj} from "@storybook/react-vite";
import {Fragment} from "react";
import FormField from "../src/form/field/FormField";
import PasswordInput from "../src/form/password-input/PasswordInput";

const meta: Meta = {
  title: "Password Input"
};

export default meta;

export const PasswordInputStory: StoryObj = {
  name: "Password Input",
  render: () => (
    <Fragment>
      <FormField label={"Password"}>
        <PasswordInput
          testid={"LoginForm.input"}
          name={"password"}
          placeholder={"Enter password"}
          onChange={(e) => console.log(e.currentTarget.value)}
        />
      </FormField>
    </Fragment>
  )
};
