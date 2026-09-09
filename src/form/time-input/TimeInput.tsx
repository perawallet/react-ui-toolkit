import classNames from "classnames";
import type React from "react";
import useDebounce from "../../core/utils/hooks/useDebounce";
import {DATE_FORMAT} from "../../core/utils/time/timeConstants";
import {formatDateWithOptions, parseTime} from "../../core/utils/time/timeUtils";
import Input from "../input/Input";
import type {InputProps} from "../input/util/inputTypes";

export type TimeInputProps = Omit<
  InputProps,
  "localizationOptions" | "onChange" | "value" | "type" | "name"
> & {
  onChange: (timeString: string) => void;
  value: string;
  initialDateTime?: Date | null;
  name?: string;
};

const timeFormatter = formatDateWithOptions({
  format: DATE_FORMAT.LONG_TIME_FORMAT,
  shouldShiftDateToCompensateForTimezone: false
});

const DEFAULT_DEBOUNCE_TIMEOUT = 100;

function TimeInput({
  testid,
  initialDateTime,
  value,
  onChange,
  placeholder = "03:30 PM",
  name = "TimeInput",
  customClassName,
  ...rest
}: TimeInputProps) {
  const [inputValue, setInputValue] = useDebounce(
    onChange,
    initialDateTime ? timeFormatter(initialDateTime) : null,
    DEFAULT_DEBOUNCE_TIMEOUT
  );

  return (
    <Input
      type={"text"}
      testid={`${testid}.input`}
      customClassName={classNames("time-input", customClassName)}
      name={name}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      {...rest}
    />
  );

  function handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    setInputValue(event.currentTarget.value);
  }

  function handleBlur() {
    let finalTimeString = parseTime(value);

    if (initialDateTime && value.length < 1) {
      finalTimeString = timeFormatter(initialDateTime);
    }

    setInputValue(finalTimeString);
  }
}

export default TimeInput;
