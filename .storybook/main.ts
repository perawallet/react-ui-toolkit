import type {StorybookConfig} from "@storybook/react-vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: ["../stories/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal(viteConfig) {
    viteConfig.plugins = [...(viteConfig.plugins ?? []), svgr({include: "**/*.svg"})];

    return viteConfig;
  }
};

export default config;
