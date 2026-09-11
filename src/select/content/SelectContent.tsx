import "./_select-content.scss";

import classNames from "classnames";
import type React from "react";
import {forwardRef} from "react";

import {useSelectContext} from "../util/context/SelectContext";

export interface SelectContentProps {
  children: React.ReactNode;
  customClassName?: string;
  testid?: string;
}

function SelectContentComponent(
  {children, customClassName, testid}: SelectContentProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {isMenuOpen} = useSelectContext();
  const selectContentClassName = classNames("select-content", customClassName, {
    "select-content--is-visible": isMenuOpen
  });

  return (
    <div
      ref={ref}
      hidden={!isMenuOpen}
      className={selectContentClassName}
      data-testid={testid}>
      {children}
    </div>
  );
}

const SelectContent = forwardRef(SelectContentComponent);

export default SelectContent;
