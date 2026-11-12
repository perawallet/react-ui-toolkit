import svgr from "@svgr/rollup";
import {defineConfig} from "tsdown";

export default defineConfig({
  entry: {
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
  format: "cjs",
  platform: "browser",
  target: "es2020",
  fixedExtension: false,
  minify: true,
  dts: false,
  css: {fileName: "main.css"},
  plugins: [svgr()]
});
