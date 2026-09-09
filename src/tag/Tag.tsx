import "./_tag.scss";

import classNames from "classnames";

import type React from "react";
import {KEYBOARD_EVENT_KEY} from "../core/utils/keyboard/keyboardEventConstants";
import CloseIcon from "../ui/icons/close.svg";

export interface TagShape<Context = any> {
  id: string;
  content: React.ReactNode;
  context?: Context;
}

interface TagProps {
  tag: TagShape;
  testid?: string;
  customClassName?: string;
  onRemove?: (tag: TagShape) => void;
}

function Tag({testid, tag, onRemove, customClassName}: TagProps) {
  const containerClassName = classNames("tag", customClassName, {
    "tag--is-removable": onRemove
  });

  return (
    <div
      role={"button"}
      tabIndex={0}
      data-testid={testid}
      onKeyDown={handleKeyPress}
      className={containerClassName}
      onClick={handleRemove}>
      <div className={"tag__body"}>{tag.content}</div>

      {onRemove && (
        <CloseIcon
          // @ts-ignore
          className={"tag__close-icon"}
          aria-hidden={true}
        />
      )}
    </div>
  );

  function handleRemove(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();

    if (onRemove) {
      onRemove(tag);
    }
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    event.stopPropagation();

    switch (event.key) {
      case KEYBOARD_EVENT_KEY.ENTER:
      case KEYBOARD_EVENT_KEY.BACKSPACE:
        if (onRemove) {
          onRemove(tag);
        }
        break;

      default:
        break;
    }
  }
}

export default Tag;
