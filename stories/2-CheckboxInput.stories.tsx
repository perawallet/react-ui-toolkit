import type {Meta, StoryObj} from "@storybook/react-vite";
import {Fragment} from "react";

import CheckboxInput from "../src/form/input/checkbox/CheckboxInput";
import StateProvider from "./utils/StateProvider";

const meta: Meta = {
  title: "Checkbox"
};

export default meta;

export const CheckboxStory: StoryObj = {
  name: "Checkbox",
  render: () => {
    const initialState = {
      rememberMe: true,
      termsAndConditions: false,
      privacyPolicy: true
    };

    return (
      <StateProvider initialState={initialState}>
        {(state, setState) => (
          <Fragment>
            <CheckboxInput
              onSelect={() => setState({...state, rememberMe: !state.rememberMe})}
              isSelected={state.rememberMe}
              item={{
                id: "rememberMe",
                content: "Remember Me",
                inputProps: {
                  name: "rememberMe",
                  htmlFor: "rememberMe",
                  value: "yes"
                }
              }}
            />

            <br />

            <CheckboxInput
              onSelect={() =>
                setState({...state, termsAndConditions: !state.termsAndConditions})
              }
              isSelected={state.termsAndConditions}
              item={{
                id: "termsAndConditions",
                content: "Terms and Conditions",
                inputProps: {
                  name: "termsAndConditions",
                  htmlFor: "termsAndConditions",
                  value: "yes"
                }
              }}
            />

            <br />

            <CheckboxInput
              onSelect={() => setState({...state, privacyPolicy: !state.privacyPolicy})}
              isSelected={state.privacyPolicy}
              isDisabled={true}
              item={{
                id: "privacyPolicy",
                content: "Privacy Policy",
                inputProps: {
                  name: "privacyPolicy",
                  htmlFor: "privacyPolicy",
                  value: "yes"
                }
              }}
            />
          </Fragment>
        )}
      </StateProvider>
    );
  }
};
