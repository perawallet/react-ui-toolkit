import type {JSX} from "react";
import "./_select.scss";
import type {ForwardedRef, Ref} from "react";
import {forwardRef, useImperativeHandle, useReducer, useRef} from "react";
import useOnClickOutside from "../core/utils/hooks/useOnClickOutside";
import SelectContent from "./content/SelectContent";
import SelectGroup from "./group/SelectGroup";
import SelectItem from "./item/SelectItem";
import SelectItemList from "./item-list/SelectItemList";
import SelectTrigger from "./trigger/SelectTrigger";
import {SelectContext, SelectDispatchContext} from "./util/context/SelectContext";
import {selectStateReducer} from "./util/context/SelectContext.reducer";
import useSelectClassName from "./util/hook/useSelectClassName";
import useSelectKeyDown from "./util/hook/useSelectKeyDown";
import type {Option, SelectProps} from "./util/selectTypes";
import {generateSelectState} from "./util/selectUtils";

function SelectComponent<T extends Option = Option>(
  props: SelectProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const {children, role = "listbox", customClassName, value} = props;
  const [selectOwnState, dispatchSelectStateAction] = useReducer(selectStateReducer, {
    focusedOptionIndex: -1,
    isMenuOpen: false,
    options: props.options || []
  });
  const selectRef = useRef<HTMLDivElement | null>(null);
  const selectState = generateSelectState(selectOwnState, props);
  const {handleSelectKeyDown} = useSelectKeyDown(selectState, dispatchSelectStateAction);
  const selectClassName = useSelectClassName(selectState, customClassName);

  useOnClickOutside(selectRef?.current, handleCloseMenu);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    ref,
    () => selectRef.current
  );

  return (
    <div
      ref={selectRef}
      className={selectClassName}
      role={role}
      onKeyDown={handleSelectKeyDown}
      aria-multiselectable={Array.isArray(value)}>
      <SelectContext.Provider value={selectState}>
        <SelectDispatchContext.Provider value={dispatchSelectStateAction}>
          {children}
        </SelectDispatchContext.Provider>
      </SelectContext.Provider>
    </div>
  );

  function handleCloseMenu() {
    if (selectOwnState.isMenuOpen) {
      dispatchSelectStateAction({type: "TOGGLE_MENU_VISIBILITY"});
    }
  }
}

const Select = Object.assign(forwardRef(SelectComponent), {
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Trigger: SelectTrigger,
  ItemList: SelectItemList
});

export default Select as (<T extends Option = Option>(
  props: SelectProps<T> & {ref?: Ref<HTMLDivElement>}
) => JSX.Element) & {
  Content: typeof SelectContent;
  Group: typeof SelectGroup;
  Item: typeof SelectItem;
  Trigger: typeof SelectTrigger;
  ItemList: typeof SelectItemList;
};
