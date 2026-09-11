# @perawallet/react-ui-toolkit 🧩

Pera Wallet's React based UI Toolkit.

A fork of [studiobakers/react-ui-toolkit](https://github.com/studiobakers/react-ui-toolkit)
by [Studio Bakers](https://github.com/studiobakers) (formerly Hipo), published upstream as
[@hipo/react-ui-toolkit](https://www.npmjs.com/package/@hipo/react-ui-toolkit). See
[Credits](#credits).

## Getting started

First, install the package via npm:

```bash
npm install @perawallet/react-ui-toolkit
```

After installing the package you should import the main CSS file to gather the initial styles of the components, and then import the components you want to use in your project.:

```javascript
import {FormField, Input} from "@perawallet/react-ui-toolkit/dist/Input";

// This import required to gather the initial styles of the components
// You can do it while bootstrapping your app
import "@perawallet/react-ui-toolkit/dist/main.css";

function LoginForm() {
  return (
    <form>
      <FormField label="E-mail">
        <Input name="email" />
      </FormField>

      <FormField label="Password">
        <Input name="password" type="password" />
      </FormField>

      <Button type="submit">Login</Button>
    </form>
  );
}
```

### How to style components?

Every component holds a minimum amount of CSS. You can modify them via the CSS variables. See `_colors.scss` and `_measurement.scss`

Here is a simple example that shows how to customize `Button` and `Input` styles by overriding the default CSS variables:

```scss
.button {
  // Override the default button styles using CSS variables

  --button-bg: #989898;
  --button-color: black;
}

.input {
  // Override the default input styles using CSS variables

  --default-border-color: black;
}
```

## Development

[Storybook](#storybook) is suggested for the development environment. It allows you to see the components in isolation and interact with them. It also supports hot-reloading, i.e. when you change the component, it automatically reloads the component in the browser.

First of all, you need to install the dependencies, in the project root folder, run:

```bash
npm install
```

> ⚠️ Make sure you are using the exact version of `node` and `npm` that are specified in the `engines` field of [package.json](/package.json) file. Otherwise, you may face some unexpected issues.

### Storybook

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

To run the Storybook development server on your local environment, you can use the following command:

```bash
npm run storybook
```

To generate a static build of the Storybook (usually, you don't need this. This is only necessary when you want to publish it to somewhere), you can use the following command:

```bash
npm run storybook:build
```

### Production Build

Releases are automated by GitHub Actions. Pushing a `v*` tag whose version matches
`package.json` runs the gates (lint, type-check, tests, build, production audit) and publishes to
npm with provenance. See [.github/workflows/release.yml](/.github/workflows/release.yml).

```bash
# after the version bump is merged
git tag v2.0.0 && git push origin v2.0.0
```

A tag ending in a hyphenated prerelease (`v2.1.0-beta.1`) publishes under the `beta` dist-tag
instead of `latest`.

---

If you need to generate a production ready build for some reason, use:

```bash
npm run build
```

This will generate a `dist` folder that contains the compiled components.

## Credits

This project is a fork of [**studiobakers/react-ui-toolkit**](https://github.com/studiobakers/react-ui-toolkit),
created and maintained by [Studio Bakers](https://github.com/studiobakers) (formerly Hipo) and
published on npm as [@hipo/react-ui-toolkit](https://www.npmjs.com/package/@hipo/react-ui-toolkit).
Every component here originates from their work.

The fork exists so Pera Wallet can ship changes it needs on its own schedule — currently React 19,
date-fns 4, Storybook 10 and Biome. It is published under the `@perawallet` scope because the
`@hipo` scope belongs to the upstream authors.

The original MIT licence and copyright notice are retained verbatim in [LICENSE](/LICENSE).
