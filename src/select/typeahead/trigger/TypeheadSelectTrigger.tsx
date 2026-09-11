import "./_typehead-select-trigger.scss";

import classNames from "classnames";
import type React from "react";

import ListItem from "../../../list/item/ListItem";
import List from "../../../list/List";
import type {TagShape} from "../../../tag/Tag";
import Tag from "../../../tag/Tag";
import {
  useSelectContext,
  useSelectDispatchContext
} from "../../util/context/SelectContext";

export interface TypeheadSelectTriggerProps {
  tags: TagShape[];
  handleTagRemove: (tag: TagShape) => void;
  customClassName?: string;
  input?: React.ReactNode;
  canOpenMenu?: boolean;
}

/**
 * Not a `Select.Trigger`: that renders a `<button>`, and this trigger contains the search
 * `<input>` and the tags' remove buttons. Interactive controls cannot be nested, and the
 * button's click toggle meant clicking into the input while the menu was open closed it. The
 * menu opens when the input inside gains focus (React's onFocus bubbles) and only ever opens —
 * closing is the `Select`'s job (outside click, selection, keyboard). Deliberately no onClick:
 * a click on a tag's remove button would bubble here too, and the input already fills the row.
 */
function TypeheadSelectTrigger({
  handleTagRemove,
  tags,
  customClassName,
  input,
  canOpenMenu = true
}: TypeheadSelectTriggerProps) {
  const {isDisabled} = useSelectContext();
  const dispatchSelectStateAction = useSelectDispatchContext();

  return (
    <div
      className={classNames(
        "select-trigger",
        "typeahead-select-trigger",
        customClassName
      )}
      onFocus={openMenu}>
      <List
        customClassName={classNames(
          "typeahead-select-trigger__tag-list",
          customClassName
        )}
        testid={"TypeaheadSelectTrigger.list"}
        items={tags}>
        {(tag: TagShape) => (
          <ListItem
            key={tag.id}
            customClassName={"typeahead-select-trigger__tag-list__item"}>
            <Tag
              onRemove={handleTagRemove}
              customClassName={"typeahead-select-trigger__tag-list__item__tag"}
              tag={tag}
            />
          </ListItem>
        )}
      </List>
      {input}
    </div>
  );

  function openMenu() {
    if (canOpenMenu && !isDisabled) {
      dispatchSelectStateAction({type: "OPEN_MENU"});
    }
  }
}

export default TypeheadSelectTrigger;
