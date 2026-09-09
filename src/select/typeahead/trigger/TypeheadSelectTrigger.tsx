import "./_typehead-select-trigger.scss";

import classNames from "classnames";
import type React from "react";

import ListItem from "../../../list/item/ListItem";
import List from "../../../list/List";
import type {TagShape} from "../../../tag/Tag";
import Tag from "../../../tag/Tag";
import Select from "../../Select";

export interface TypeheadSelectTriggerProps {
  tags: TagShape[];
  handleTagRemove: (tag: TagShape) => void;
  customClassName?: string;
  input?: React.ReactNode;
}
function TypeheadSelectTrigger({
  handleTagRemove,
  tags,
  customClassName,
  input
}: TypeheadSelectTriggerProps) {
  return (
    <Select.Trigger customClassName={"typeahead-select-trigger"}>
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
    </Select.Trigger>
  );
}

export default TypeheadSelectTrigger;
