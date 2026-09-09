import type {Meta, StoryObj} from "@storybook/react-vite";
import {Fragment} from "react";
import FormField from "../src/form/field/FormField";
import TimeInput from "../src/form/time-input/TimeInput";
import StateProvider from "./utils/StateProvider";

const meta: Meta = {
  title: "Time Input"
};

export default meta;

export const TimeInputStory: StoryObj = {
  name: "Time Input",
  render: () => (
    <Fragment>
      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <FormField label={"Appointment Time - Controlled"}>
            <TimeInput
              testid={"appointment-time"}
              initialDateTime={new Date()}
              value={state.value}
              onChange={(e) => setState({value: e})}
            />
          </FormField>
        )}
      </StateProvider>

      <br />

      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <FormField label={"Appointment Time - Controlled - without initialDateTime"}>
            <TimeInput
              testid={"appointment-time"}
              value={state.value}
              onChange={(e) => setState({value: e})}
            />
          </FormField>
        )}
      </StateProvider>

      <br />

      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <FormField
            label={"Appointment Time - hasError"}
            errorMessages={["Please enter a valid time"]}>
            <TimeInput
              testid={"appointment-time-has-error"}
              value={state.value}
              onChange={() => setState({value: ""})}
              hasError={true}
            />
          </FormField>
        )}
      </StateProvider>

      <br />

      <StateProvider initialState={{value: ""}}>
        {(state, setState) => (
          <FormField label={"Appointment Time - isDisabled"}>
            <TimeInput
              testid={"appointment-time-is-disabled"}
              isDisabled={true}
              value={state.value}
              onChange={() => setState({value: ""})}
            />
          </FormField>
        )}
      </StateProvider>
    </Fragment>
  )
};
