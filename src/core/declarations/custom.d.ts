declare module "*.svg" {
  import type {FunctionComponent, SVGProps} from "react";

  // Both the rollup build (@svgr/rollup) and Storybook (vite-plugin-svgr) turn an
  // imported SVG into a React component, not a URL string.
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & {title?: string}>;

  export default ReactComponent;
}
