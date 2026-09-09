const path = require("path");
const typescript = require("rollup-plugin-typescript2");
const terser = require("@rollup/plugin-terser");
const postcss = require("rollup-plugin-postcss");
const svgr = require("@svgr/rollup");

module.exports = [
  {
    external: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "classnames",
      "react-textarea-autosize",
      "uuid",
      "date-fns",
      "date-fns/fp",
      "date-fns/locale",
      "date-fns-tz"
    ],
    input: {
      index: "src/index.ts",
      FormField: "src/form/field/FormField.tsx",
      Input: "src/form/input/Input.tsx",
      NumberInput: "src/form/input/number/NumberInput.tsx",
      PasswordInput: "src/form/password-input/PasswordInput.tsx",
      Select: "src/select/Select.tsx",
      FileInput: "src/form/input/file/FileInput.tsx",
      Checkbox: "src/form/input/checkbox/CheckboxInput.tsx",
      Radio: "src/form/input/radio/RadioInput.tsx",
      RadioGroup: "src/form/input/radio/group/RadioGroup.tsx",
      TypeaheadInput: "src/form/input/typeahead/TypeaheadInput.tsx",
      TypeaheadSelect: "src/select/typeahead/TypeaheadSelect.tsx",
      List: "src/list/List.tsx",
      ListItem: "src/list/item/ListItem.tsx",
      Button: "src/button/Button.tsx",
      FileUploadButton: "src/button/file-upload/FileUploadButton.tsx",
      Spinner: "src/spinner/Spinner.tsx",
      Toast: "src/toast/Toast.tsx",
      Textarea: "src/form/textarea/Textarea.tsx",
      Toggle: "src/toggle/Toggle.tsx",
      Switch: "src/switch/Switch.tsx",
      ProgressBar: "src/progress-bar/ProgressBar.tsx",
      TimeInput: "src/form/time-input/TimeInput.tsx",
      DateTimer: "src/date-timer/DateTimer.tsx"
    },
    output: {
      dir: "dist",
      format: "cjs"
    },
    plugins: [
      (svgr.default || svgr)(),
      postcss({extract: path.resolve("dist/main.css")}),
      typescript({
        exclude: ["**/*.test.ts", "**/*.test.tsx", "**/__mocks__/**", "node_modules"],
        clean: true
      }),
      terser()
    ]
  }
];
