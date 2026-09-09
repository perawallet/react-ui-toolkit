import type {Meta, StoryObj} from "@storybook/react-vite";
import {Fragment} from "react";
import Spinner from "../src/spinner/Spinner";

const meta: Meta = {
  title: "Spinner"
};

export default meta;

export const SpinnerStory: StoryObj = {
  name: "Spinner",
  render: () => (
    <Fragment>
      <Spinner />

      <style>
        {`
        .spinner {
          width: 50px;
          height: 50px;
        }
      `}
      </style>
    </Fragment>
  )
};
