import "./ui/reference/_colors.scss";
import "./ui/reference/_measurement.scss";

import type {ButtonProps as ButtonComponentProps} from "./button/Button";
import Button from "./button/Button";
import type {FileUploadButtonProps as FileUploadButtonComponentProps} from "./button/file-upload/FileUploadButton";
import FileUploadButton from "./button/file-upload/FileUploadButton";
import useDateTimer from "./core/utils/hooks/useDateTimer";
import DateTimer from "./date-timer/DateTimer";
import type {DateTimerProps as DateTimerComponentProps} from "./date-timer/util/dateTimerTypes";
import type {FormFieldProps as FormFieldComponentProps} from "./form/field/FormField";
import FormField from "./form/field/FormField";
import type {CheckboxInputProps as CheckboxInputComponentProps} from "./form/input/checkbox/CheckboxInput";
import CheckboxInput from "./form/input/checkbox/CheckboxInput";
import type {FileInputProps as FileInputComponentProps} from "./form/input/file/FileInput";
import FileInput from "./form/input/file/FileInput";
import Input from "./form/input/Input";
import NumberInput from "./form/input/number/NumberInput";
import type {NumberInputProps as NumberInputComponentProps} from "./form/input/number/util/numberInputTypes";
import type {RadioGroupProps as RadioGroupComponentProps} from "./form/input/radio/group/RadioGroup";
import RadioGroup from "./form/input/radio/group/RadioGroup";
import type {
  RadioInputItem as RadioInputComponentItem,
  RadioInputProps as RadioInputComponentProps
} from "./form/input/radio/RadioInput";
import RadioInput from "./form/input/radio/RadioInput";
import type {TypeaheadInputProps as TypeaheadInputComponentProps} from "./form/input/typeahead/TypeaheadInput";
import TypeaheadInput from "./form/input/typeahead/TypeaheadInput";
import type {InputProps as InputComponentProps} from "./form/input/util/inputTypes";
import type {PasswordInputProps as PasswordInputComponentProps} from "./form/password-input/PasswordInput";
import PasswordInput from "./form/password-input/PasswordInput";
import type {TextareaProps as TextareaComponentProps} from "./form/textarea/Textarea";
import Textarea from "./form/textarea/Textarea";
import type {TimeInputProps as TimeInputComponentProps} from "./form/time-input/TimeInput";
import TimeInput from "./form/time-input/TimeInput";
import type {DescriptionTermProps as DescriptionTermComponentProps} from "./list/description-term/DescriptionTerm";
import DescriptionTerm from "./list/description-term/DescriptionTerm";
import type {ListItemProps as ListItemComponentProps} from "./list/item/ListItem";
import ListItem from "./list/item/ListItem";
import type {ListProps as ListComponentProps} from "./list/List";
import List from "./list/List";
import type {ProgressBarProps as ProgressBarComponentProps} from "./progress-bar/ProgressBar";
import ProgressBar from "./progress-bar/ProgressBar";
import type {SelectContentProps as SelectContentComponentProps} from "./select/content/SelectContent";
import type {SelectGroupProps as SelectGroupComponentProps} from "./select/group/SelectGroup";
import type {SelectItemProps as SelectItemComponentProps} from "./select/item/SelectItem";
import Select from "./select/Select";
import type {SelectTriggerProps as SelectTriggerComponentProps} from "./select/trigger/SelectTrigger";
import type {TypeaheadSelectProps as TypeaheadSelectComponentProps} from "./select/typeahead/TypeaheadSelect";
import TypeaheadSelect from "./select/typeahead/TypeaheadSelect";
import useMultiSelect from "./select/util/hook/useMultiSelect";
import useSingleSelect from "./select/util/hook/useSingleSelect";
import type {SelectProps as SelectComponentProps} from "./select/util/selectTypes";
import type {SpinnerProps as SpinnerComponentProps} from "./spinner/Spinner";
import Spinner from "./spinner/Spinner";
import type {SwitchProps as SwitchComponentProps} from "./switch/Switch";
import Switch from "./switch/Switch";
import type {TabItem as TabComponentItem, TabProps as TabComponentProps} from "./tab/Tab";
import Tab from "./tab/Tab";
import type {ToastProps as ToastComponentProps} from "./toast/Toast";
import Toast from "./toast/Toast";
import {
  ToastContextProvider,
  ToastDispatchContext,
  ToastStateContext
} from "./toast/ToastProvider";
import {useToastContextState, useToaster} from "./toast/util/toastHooks";
import type {ToggleProps as ToggleComponentProps} from "./toggle/Toggle";
import {Toggle} from "./toggle/Toggle";

export {
  Button,
  CheckboxInput,
  DateTimer,
  DescriptionTerm,
  FileInput,
  FileUploadButton,
  // Components
  FormField,
  Input,
  List,
  ListItem,
  NumberInput,
  PasswordInput,
  ProgressBar,
  RadioGroup,
  RadioInput,
  Select,
  Spinner,
  Switch,
  Tab,
  Textarea,
  TimeInput,
  Toast,
  ToastContextProvider,
  // Contexts
  ToastDispatchContext,
  ToastStateContext,
  Toggle,
  TypeaheadInput,
  TypeaheadSelect,
  useDateTimer,
  useMultiSelect,
  useSingleSelect,
  // Hooks
  useToastContextState,
  useToaster
};

// Types
export type FormFieldProps = FormFieldComponentProps;
export type InputProps = InputComponentProps;
export type NumberInputProps = NumberInputComponentProps;
export type FileInputProps = FileInputComponentProps;
export type PasswordInputProps = PasswordInputComponentProps;
export type CheckboxInputProps = CheckboxInputComponentProps;
export type RadioInputProps<Id = string, Context = any> = RadioInputComponentProps<
  Id,
  Context
>;
export type RadioInputItem<Id = string, Context = any> = RadioInputComponentItem<
  Id,
  Context
>;
export type RadioGroupProps<Id = string, Context = any> = RadioGroupComponentProps<
  Id,
  Context
>;
export type TypeaheadInputProps = TypeaheadInputComponentProps;
export type TypeaheadSelectProps = TypeaheadSelectComponentProps;
export type ListProps<Item = any> = ListComponentProps<Item>;
export type ButtonProps = ButtonComponentProps;
export type DescriptionTermProps = DescriptionTermComponentProps;
export type FileUploadButtonProps = FileUploadButtonComponentProps;
export type SpinnerProps = SpinnerComponentProps;
export type TabItem = TabComponentItem;
export type TabProps = TabComponentProps;
export type ProgressBarProps = ProgressBarComponentProps;
export type TextareaProps = TextareaComponentProps;
export type ToggleProps = ToggleComponentProps;
export type SwitchProps = SwitchComponentProps;
export type TimeInputProps = TimeInputComponentProps;
export type DateTimerProps = DateTimerComponentProps;
export type ListItemProps = ListItemComponentProps;
export type ToastProps = ToastComponentProps;
export type SelectProps = SelectComponentProps;
export type SelectGroupProps = SelectGroupComponentProps;
export type SelectTriggerProps = SelectTriggerComponentProps;
export type SelectContentProps = SelectContentComponentProps;
export type SelectItemProps = SelectItemComponentProps;
