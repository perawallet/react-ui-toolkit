import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./FormField-BD4AWzmH.js";import{t as o}from"./classnames-DQoS6hca.js";import{i as s,n as c,r as l,t as u}from"./ListItem-C6drpBP_.js";import{n as d,t as f}from"./List-Cgo_p2SQ.js";import{n as p,t as m}from"./Input-Df-RT8dL.js";import{n as h,t as g}from"./StoryFragment-DvkySDgK.js";import{n as _,t as v}from"./StateProvider-BFdhvQQQ.js";import{n as y,t as b}from"./Spinner-CfA3VQ1R.js";import{n as x,t as S}from"./arrayUtils-DUEtuORa.js";import{n as C,t as w}from"./useDebounce-BwUVq14M.js";import{a as T,i as E,n as D,o as O,r as k,s as A,t as j}from"./Tag-CEX3ZZC2.js";var M,N,P,F,I;function L(){return(L=t((()=>{M=e(o()),N=e(n()),w(),p(),P=r(),F=250,I=N.forwardRef((e,t)=>{let{testid:n,placeholder:r,name:i,type:a=`text`,customClassName:o,onFocus:s,onBlur:c,id:l,onKeyDown:u,onQueryChange:d,isDisabled:f=!1,leftIcon:p,rightIcon:h,initialValue:g=``,value:_,queryChangeDebounceTimeout:v=F,...y}=e,[b,x]=C(d,g,v);return(0,N.useEffect)(()=>{typeof _==`string`&&x(_)},[_,x]),(0,P.jsx)(m,{ref:t,customClassName:(0,M.default)(`typeahead-input`,o),id:l,testid:n,name:i,type:a,placeholder:r,onChange:S,onFocus:s,onBlur:c,onKeyDown:u,value:b,isDisabled:f,leftIcon:p,rightIcon:h,...y});function S(e){x(e.currentTarget.value)}}),I.__docgenInfo={description:``,methods:[],displayName:`TypeaheadInput`,props:{onQueryChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},type:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`| "checkbox"
| "button"
| "color"
| "date"
| "datetime-local"
| "email"
| "file"
| "hidden"
| "image"
| "month"
| "number"
| "password"
| "radio"
| "range"
| "reset"
| "search"
| "submit"
| "tel"
| "text"
| "time"
| "url"
| "week"`,elements:[{name:`literal`,value:`"checkbox"`},{name:`literal`,value:`"button"`},{name:`literal`,value:`"color"`},{name:`literal`,value:`"date"`},{name:`literal`,value:`"datetime-local"`},{name:`literal`,value:`"email"`},{name:`literal`,value:`"file"`},{name:`literal`,value:`"hidden"`},{name:`literal`,value:`"image"`},{name:`literal`,value:`"month"`},{name:`literal`,value:`"number"`},{name:`literal`,value:`"password"`},{name:`literal`,value:`"radio"`},{name:`literal`,value:`"range"`},{name:`literal`,value:`"reset"`},{name:`literal`,value:`"search"`},{name:`literal`,value:`"submit"`},{name:`literal`,value:`"tel"`},{name:`literal`,value:`"text"`},{name:`literal`,value:`"time"`},{name:`literal`,value:`"url"`},{name:`literal`,value:`"week"`}]},{name:`union`,raw:`"text" | "number"`,elements:[{name:`literal`,value:`"text"`},{name:`literal`,value:`"number"`}]}],raw:`Extract<InputTypes, "text" | "number">`},description:``},initialValue:{required:!1,tsType:{name:`string`},description:``},queryChangeDebounceTimeout:{required:!1,tsType:{name:`number`},description:``},onFocus:{required:!1,tsType:{name:`ReactReactEventHandler`,raw:`React.ReactEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:``},onBlur:{required:!1,tsType:{name:`ReactReactEventHandler`,raw:`React.ReactEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:``},onKeyDown:{required:!1,tsType:{name:`ReactKeyboardEventHandler`,raw:`React.KeyboardEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:``},leftIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}function R(e){return{id:e.id,content:e.title,context:e}}function ee(e){return e.map(R)}var z,te;function B(){return(B=t((()=>{n(),z=r(),te=e=>(0,z.jsx)(`svg`,{width:10,height:5,viewBox:`0 0 10 5`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,z.jsx)(`path`,{d:`M5 5L10 0H0L5 5Z`,fill:`#222222`})})})))()}function V({handleTagRemove:e,tags:t,customClassName:n,input:r,canOpenMenu:i=!0}){let{isDisabled:a}=O(),o=A();return(0,U.jsxs)(`div`,{className:(0,H.default)(`select-trigger`,`typeahead-select-trigger`,n),onFocus:s,children:[(0,U.jsx)(f,{customClassName:(0,H.default)(`typeahead-select-trigger__tag-list`,n),testid:`TypeaheadSelectTrigger.list`,items:t,children:t=>(0,U.jsx)(u,{customClassName:`typeahead-select-trigger__tag-list__item`,children:(0,U.jsx)(j,{onRemove:e,customClassName:`typeahead-select-trigger__tag-list__item__tag`,tag:t})},t.id)}),r]});function s(){i&&!a&&o({type:`OPEN_MENU`})}}var H,U;function W(){return(W=t((()=>{H=e(o()),c(),d(),D(),T(),U=r(),V.__docgenInfo={description:"Not a `Select.Trigger`: that renders a `<button>`, and this trigger contains the search\n`<input>` and the tags' remove buttons. Interactive controls cannot be nested, and the\nbutton's click toggle meant clicking into the input while the menu was open closed it. The\nmenu opens when the input inside gains focus (React's onFocus bubbles) and only ever opens —\nclosing is the `Select`'s job (outside click, selection, keyboard). Deliberately no onClick:\na click on a tag's remove button would bubble here too, and the input already fills the row.",methods:[],displayName:`TypeheadSelectTrigger`,props:{tags:{required:!0,tsType:{name:`Array`,elements:[{name:`TagShape`}],raw:`TagShape[]`},description:``},handleTagRemove:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tag: TagShape) => void`,signature:{arguments:[{type:{name:`TagShape`},name:`tag`}],return:{name:`void`}}},description:``},customClassName:{required:!1,tsType:{name:`string`},description:``},input:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},canOpenMenu:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})))()}function ne(e,t){let n=e;return t&&(n=e.filter(e=>!e.title||e.title.toLowerCase().includes(t.toLowerCase()))),n}function G({testid:e,options:t,selectedOptions:n,typeaheadProps:r,onTagRemove:i,onKeywordChange:a,onSelect:o,customClassName:s,selectedOptionLimit:c,shouldDisplaySelectedOptions:u=!0,shouldFilterOptionsByKeyword:d=!0,isDisabled:f,shouldShowEmptyOptions:p=!0,canOpenDropdownMenu:m=!0,areOptionsFetching:h,customSpinner:g,initialKeyword:_=``,controlledKeyword:v}){let y=(0,q.useRef)(null),[x,C]=(0,q.useState)(t),[w,T]=(0,q.useState)(!1),[E,D]=(0,q.useState)(_),O=typeof v==`string`?v:E,A=ee(n),j=!!(c&&n.length>=c),M=!c||c>1,N=!M||!!(c&&n.length>=c-1),P=(0,K.default)(`typeahead-select`,s,{"typeahead-select--has-selected-options":!!n.length,"typeahead-select--can-select-multiple":M}),F=g||(0,J.jsx)(b,{customClassName:`typeahead-select__spinner`});return(0,q.useEffect)(()=>{C(t)},[t]),(0,q.useEffect)(()=>{let e;return w&&(e=setTimeout(()=>{y.current&&(y.current.focus(),T(!1))})),()=>{clearTimeout(e)}},[w]),(0,q.useEffect)(()=>{C(S(t,`id`,n))},[t,n]),(0,J.jsxs)(k,{role:`listbox`,onSelect:L,options:x,customClassName:P,value:n,isDisabled:f,shouldCloseOnSelect:N,children:[(0,J.jsx)(V,{tags:u?A:[],handleTagRemove:R,canOpenMenu:m,input:!j&&(0,J.jsx)(I,{testid:`${e}.search`,customClassName:`typeahead-select__input`,id:r.id,name:r.name,type:r.type,placeholder:r.placeholder,value:O,onQueryChange:z,onKeyDown:B,rightIcon:h?F:(0,J.jsx)(te,{"aria-hidden":!0}),onFocus:r.onFocus,isDisabled:f})}),(0,J.jsxs)(k.Content,{testid:e,children:[x.map((t,n)=>(0,J.jsx)(k.Item,{option:t,testid:`${e}.item-${n}`,children:t.title},t.id)),p&&!x.length&&(0,J.jsx)(`p`,{"data-testid":`${e}.empty-message`,className:`dropdown-list__empty-message`,children:`No available options`})]})]});function L(e){!j&&!f&&(o(e),C(t),D(``),T(!0))}function R(e){i&&(i(e.context),T(!0))}function z(e){if(d){let r=t.filter(e=>n.indexOf(e)<0);C(ne(r,e))}a&&a(e),v===void 0&&D(e)}function B(e){let{key:t}=e;t===l.BACKSPACE&&!O&&i&&n.length&&(e.stopPropagation(),i(n[n.length-1]))}}var K,q,J;function Y(){return(Y=t((()=>{K=e(o()),q=n(),x(),s(),L(),y(),B(),E(),W(),J=r(),G.__docgenInfo={description:``,methods:[],displayName:`TypeaheadSelect`,props:{selectedOptions:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(option: T, event?: React.SyntheticEvent<SelectItemElement>) => void`,signature:{arguments:[{type:{name:`T`},name:`option`},{type:{name:`ReactSyntheticEvent`,raw:`React.SyntheticEvent<SelectItemElement>`,elements:[{name:`union`,raw:`HTMLLIElement | HTMLDivElement`,elements:[{name:`HTMLLIElement`},{name:`HTMLDivElement`}]}]},name:`event`}],return:{name:`void`}}},description:``},typeaheadProps:{required:!0,tsType:{name:`Pick`,elements:[{name:`intersection`,raw:`Omit<InputProps, "onChange" | "type"> & {
  onQueryChange: (value: string) => void;
  type?: Extract<InputTypes, "text" | "number">;
  initialValue?: string;
  queryChangeDebounceTimeout?: number;
  onFocus?: React.ReactEventHandler<HTMLInputElement>;
  onBlur?: React.ReactEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}`,elements:[{name:`Omit`,elements:[{name:`intersection`,raw:`Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "disabled" | "name" | "className"
> & {
  name: string;
  onChange: React.ReactEventHandler<HTMLInputElement>;
  type?: InputTypes;
  testid?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  hasError?: boolean;
  customClassName?: string;
}`,elements:[{name:`Omit`,elements:[{name:`ReactInputHTMLAttributes`,raw:`React.InputHTMLAttributes<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},{name:`union`,raw:`"disabled" | "name" | "className"`,elements:[{name:`literal`,value:`"disabled"`},{name:`literal`,value:`"name"`},{name:`literal`,value:`"className"`}]}],raw:`Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "disabled" | "name" | "className"
>`},{name:`signature`,type:`object`,raw:`{
  name: string;
  onChange: React.ReactEventHandler<HTMLInputElement>;
  type?: InputTypes;
  testid?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  hasError?: boolean;
  customClassName?: string;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`onChange`,value:{name:`ReactReactEventHandler`,raw:`React.ReactEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}],required:!0}},{key:`type`,value:{name:`union`,raw:`| "checkbox"
| "button"
| "color"
| "date"
| "datetime-local"
| "email"
| "file"
| "hidden"
| "image"
| "month"
| "number"
| "password"
| "radio"
| "range"
| "reset"
| "search"
| "submit"
| "tel"
| "text"
| "time"
| "url"
| "week"`,elements:[{name:`literal`,value:`"checkbox"`},{name:`literal`,value:`"button"`},{name:`literal`,value:`"color"`},{name:`literal`,value:`"date"`},{name:`literal`,value:`"datetime-local"`},{name:`literal`,value:`"email"`},{name:`literal`,value:`"file"`},{name:`literal`,value:`"hidden"`},{name:`literal`,value:`"image"`},{name:`literal`,value:`"month"`},{name:`literal`,value:`"number"`},{name:`literal`,value:`"password"`},{name:`literal`,value:`"radio"`},{name:`literal`,value:`"range"`},{name:`literal`,value:`"reset"`},{name:`literal`,value:`"search"`},{name:`literal`,value:`"submit"`},{name:`literal`,value:`"tel"`},{name:`literal`,value:`"text"`},{name:`literal`,value:`"time"`},{name:`literal`,value:`"url"`},{name:`literal`,value:`"week"`}],required:!1}},{key:`testid`,value:{name:`string`,required:!1}},{key:`leftIcon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`rightIcon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`isDisabled`,value:{name:`boolean`,required:!1}},{key:`hasError`,value:{name:`boolean`,required:!1}},{key:`customClassName`,value:{name:`string`,required:!1}}]}}]},{name:`union`,raw:`"onChange" | "type"`,elements:[{name:`literal`,value:`"onChange"`},{name:`literal`,value:`"type"`}]}],raw:`Omit<InputProps, "onChange" | "type">`},{name:`signature`,type:`object`,raw:`{
  onQueryChange: (value: string) => void;
  type?: Extract<InputTypes, "text" | "number">;
  initialValue?: string;
  queryChangeDebounceTimeout?: number;
  onFocus?: React.ReactEventHandler<HTMLInputElement>;
  onBlur?: React.ReactEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}`,signature:{properties:[{key:`onQueryChange`,value:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}},required:!0}},{key:`type`,value:{name:`Extract`,elements:[{name:`union`,raw:`| "checkbox"
| "button"
| "color"
| "date"
| "datetime-local"
| "email"
| "file"
| "hidden"
| "image"
| "month"
| "number"
| "password"
| "radio"
| "range"
| "reset"
| "search"
| "submit"
| "tel"
| "text"
| "time"
| "url"
| "week"`,elements:[{name:`literal`,value:`"checkbox"`},{name:`literal`,value:`"button"`},{name:`literal`,value:`"color"`},{name:`literal`,value:`"date"`},{name:`literal`,value:`"datetime-local"`},{name:`literal`,value:`"email"`},{name:`literal`,value:`"file"`},{name:`literal`,value:`"hidden"`},{name:`literal`,value:`"image"`},{name:`literal`,value:`"month"`},{name:`literal`,value:`"number"`},{name:`literal`,value:`"password"`},{name:`literal`,value:`"radio"`},{name:`literal`,value:`"range"`},{name:`literal`,value:`"reset"`},{name:`literal`,value:`"search"`},{name:`literal`,value:`"submit"`},{name:`literal`,value:`"tel"`},{name:`literal`,value:`"text"`},{name:`literal`,value:`"time"`},{name:`literal`,value:`"url"`},{name:`literal`,value:`"week"`}],required:!1},{name:`union`,raw:`"text" | "number"`,elements:[{name:`literal`,value:`"text"`},{name:`literal`,value:`"number"`}]}],raw:`Extract<InputTypes, "text" | "number">`,required:!1}},{key:`initialValue`,value:{name:`string`,required:!1}},{key:`queryChangeDebounceTimeout`,value:{name:`number`,required:!1}},{key:`onFocus`,value:{name:`ReactReactEventHandler`,raw:`React.ReactEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}],required:!1}},{key:`onBlur`,value:{name:`ReactReactEventHandler`,raw:`React.ReactEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}],required:!1}},{key:`onKeyDown`,value:{name:`ReactKeyboardEventHandler`,raw:`React.KeyboardEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}],required:!1}},{key:`leftIcon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`rightIcon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`children`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}}]}}]},{name:`union`,raw:`"id" | "placeholder" | "name" | "onFocus" | "type"`,elements:[{name:`literal`,value:`"id"`},{name:`literal`,value:`"placeholder"`},{name:`literal`,value:`"name"`},{name:`literal`,value:`"onFocus"`},{name:`literal`,value:`"type"`}]}],raw:`Pick<
  TypeaheadInputProps,
  "id" | "placeholder" | "name" | "onFocus" | "type"
>`},description:``},testid:{required:!1,tsType:{name:`string`},description:``},onKeywordChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},initialKeyword:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},controlledKeyword:{required:!1,tsType:{name:`string`},description:``},onTagRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(option: Option) => void`,signature:{arguments:[{type:{name:`Option`},name:`option`}],return:{name:`void`}}},description:``},selectedOptionLimit:{required:!1,tsType:{name:`number`},description:``},customClassName:{required:!1,tsType:{name:`string`},description:``},shouldDisplaySelectedOptions:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},shouldFilterOptionsByKeyword:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:``},customSpinner:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},shouldShowEmptyOptions:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},canOpenDropdownMenu:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},areOptionsFetching:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}var X,Z,Q,$,re;function ie(){return(ie=t((()=>{i(),Y(),_(),h(),X=r(),Z=(e=1e3)=>new Promise(t=>setTimeout(t,e)),Q={title:`Typeahead`},$={name:`Typeahead`,render:()=>{let e={options:[{id:`turkish`,title:`Turkish`},{id:`english`,title:`English`},{id:`spanish`,title:`Spanish`}],thirdOptions:[],selectedOptions:[],secondSelectedOptions:[],thirdSelectedOptions:[],areOptionsFetching:!1,keyword:``},t={options:[{id:`2005`,title:`2005`},{id:`2015`,title:`2015`},{id:`2021`,title:`2021`}],thirdOptions:[],selectedOptions:[],secondSelectedOptions:[],thirdSelectedOptions:[],areOptionsFetching:!1,keyword:``};return(0,X.jsx)(g,{children:(0,X.jsxs)(`div`,{style:{maxWidth:`500px`},children:[(0,X.jsx)(v,{initialState:e,children:(t,r)=>(0,X.jsx)(a,{label:`Select Languages`,children:(0,X.jsx)(G,{options:e.options,selectedOptions:t.selectedOptions,onSelect:e=>r({...t,selectedOptions:[...t.selectedOptions,e]}),onTagRemove:n(t,r),typeaheadProps:{placeholder:`Select Languages`,name:`language`}})})}),(0,X.jsx)(v,{initialState:e,children:(t,r)=>(0,X.jsx)(a,{label:`Select Languages (Max selectable 2)`,children:(0,X.jsx)(G,{selectedOptionLimit:2,options:e.options,selectedOptions:t.secondSelectedOptions,onSelect:e=>r({...t,secondSelectedOptions:[...t.secondSelectedOptions,e]}),onTagRemove:n(t,r,`secondSelectedOptions`),typeaheadProps:{placeholder:`Select Languages`,name:`language`}})})}),(0,X.jsx)(v,{initialState:e,children:(t,r)=>(0,X.jsx)(a,{label:`Select Languages (Max selectable 2) - Disabled`,children:(0,X.jsx)(G,{selectedOptionLimit:2,isDisabled:!0,options:e.options,selectedOptions:t.secondSelectedOptions,onSelect:e=>r({...t,secondSelectedOptions:[...t.secondSelectedOptions,e]}),onTagRemove:n(t,r),typeaheadProps:{placeholder:`Select Languages`,name:`language`}})})}),(0,X.jsx)(v,{initialState:e,children:(e,t)=>(0,X.jsx)(a,{label:`Select Languages (API Fetch Simulation) - with keyword by TypeaheadSelect`,children:(0,X.jsx)(G,{shouldFilterOptionsByKeyword:!1,areOptionsFetching:e.areOptionsFetching,options:e.thirdOptions,selectedOptions:e.thirdSelectedOptions,onSelect:n=>t({...e,thirdSelectedOptions:[...e.thirdSelectedOptions,n]}),onKeywordChange:r(t),onTagRemove:n(e,t,`thirdSelectedOptions`),typeaheadProps:{placeholder:`Select Languages`,name:`language-test`}})})}),(0,X.jsx)(v,{initialState:e,children:(e,t)=>(0,X.jsx)(a,{label:`Select Languages (API Fetch Simulation) - with keyword by parent`,children:(0,X.jsx)(G,{shouldFilterOptionsByKeyword:!1,areOptionsFetching:e.areOptionsFetching,options:e.thirdOptions,selectedOptions:e.thirdSelectedOptions,onSelect:n=>t({...e,thirdSelectedOptions:[...e.thirdSelectedOptions,n],keyword:``}),onKeywordChange:r(t),controlledKeyword:e.keyword,onTagRemove:n(e,t,`thirdSelectedOptions`),typeaheadProps:{placeholder:`Select Languages`,name:`language-test`}})})}),(0,X.jsx)(v,{initialState:t,children:(e,r)=>(0,X.jsx)(a,{label:`Select Model Year`,children:(0,X.jsx)(G,{options:t.options,selectedOptions:e.selectedOptions,onSelect:t=>r({...e,selectedOptions:[...e.selectedOptions,t]}),onTagRemove:n(e,r),typeaheadProps:{placeholder:`Select Model`,name:`model`,type:`number`}})})})]})});function n(e,t,n=`selectedOptions`){return r=>t({...e,[n]:e[n].filter(e=>e.id!==r.id)})}function r(e){return async t=>{t&&(e(e=>({...e,areOptionsFetching:!0,keyword:t})),await Z(),e(e=>({...e,areOptionsFetching:!1,thirdOptions:[{id:t,title:t}]})))}}}},re=[`TypeaheadStory`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Typeahead",
  render: () => {
    const initialState = {
      options: [{
        id: "turkish",
        title: "Turkish"
      }, {
        id: "english",
        title: "English"
      }, {
        id: "spanish",
        title: "Spanish"
      }],
      thirdOptions: [],
      selectedOptions: [] as TypeaheadSelectOption[],
      secondSelectedOptions: [] as TypeaheadSelectOption[],
      thirdSelectedOptions: [] as TypeaheadSelectOption[],
      areOptionsFetching: false,
      keyword: ""
    };
    const modelInitialState = {
      options: [{
        id: "2005",
        title: "2005"
      }, {
        id: "2015",
        title: "2015"
      }, {
        id: "2021",
        title: "2021"
      }],
      thirdOptions: [] as TypeaheadSelectOption[],
      selectedOptions: [] as TypeaheadSelectOption[],
      secondSelectedOptions: [] as TypeaheadSelectOption[],
      thirdSelectedOptions: [] as TypeaheadSelectOption[],
      areOptionsFetching: false,
      keyword: ""
    };
    return <StoryFragment>
        <div style={{
        maxWidth: "500px"
      }}>
          <StateProvider initialState={initialState}>
            {(state, setState) => <FormField label={"Select Languages"}>
                <TypeaheadSelect options={initialState.options} selectedOptions={state.selectedOptions} onSelect={option => setState({
              ...state,
              selectedOptions: [...state.selectedOptions, option]
            })} onTagRemove={handleRemoveTag(state, setState)} typeaheadProps={{
              placeholder: "Select Languages",
              name: "language"
            }} />
              </FormField>}
          </StateProvider>

          <StateProvider initialState={initialState}>
            {(state, setState) => <FormField label={"Select Languages (Max selectable 2)"}>
                <TypeaheadSelect selectedOptionLimit={2} options={initialState.options} selectedOptions={state.secondSelectedOptions} onSelect={option => setState({
              ...state,
              secondSelectedOptions: [...state.secondSelectedOptions, option]
            })} onTagRemove={handleRemoveTag(state, setState, "secondSelectedOptions")} typeaheadProps={{
              placeholder: "Select Languages",
              name: "language"
            }} />
              </FormField>}
          </StateProvider>

          <StateProvider initialState={initialState}>
            {(state, setState) => <FormField label={"Select Languages (Max selectable 2) - Disabled"}>
                <TypeaheadSelect selectedOptionLimit={2} isDisabled={true} options={initialState.options} selectedOptions={state.secondSelectedOptions} onSelect={option => setState({
              ...state,
              secondSelectedOptions: [...state.secondSelectedOptions, option]
            })} onTagRemove={handleRemoveTag(state, setState)} typeaheadProps={{
              placeholder: "Select Languages",
              name: "language"
            }} />
              </FormField>}
          </StateProvider>

          <StateProvider initialState={initialState}>
            {(state, setState) => <FormField label={"Select Languages (API Fetch Simulation) - with keyword by TypeaheadSelect"}>
                <TypeaheadSelect shouldFilterOptionsByKeyword={false} areOptionsFetching={state.areOptionsFetching} options={state.thirdOptions} selectedOptions={state.thirdSelectedOptions} onSelect={option => setState({
              ...state,
              thirdSelectedOptions: [...state.thirdSelectedOptions, option]
            })} onKeywordChange={handleKeywordChange(setState)} onTagRemove={handleRemoveTag(state, setState, "thirdSelectedOptions")} typeaheadProps={{
              placeholder: "Select Languages",
              name: "language-test"
            }} />
              </FormField>}
          </StateProvider>

          <StateProvider initialState={initialState}>
            {(state, setState) => <FormField label={"Select Languages (API Fetch Simulation) - with keyword by parent"}>
                <TypeaheadSelect shouldFilterOptionsByKeyword={false} areOptionsFetching={state.areOptionsFetching} options={state.thirdOptions} selectedOptions={state.thirdSelectedOptions} onSelect={option => setState({
              ...state,
              thirdSelectedOptions: [...state.thirdSelectedOptions, option],
              keyword: ""
            })} onKeywordChange={handleKeywordChange(setState)} controlledKeyword={state.keyword} onTagRemove={handleRemoveTag(state, setState, "thirdSelectedOptions")} typeaheadProps={{
              placeholder: "Select Languages",
              name: "language-test"
            }} />
              </FormField>}
          </StateProvider>

          <StateProvider initialState={modelInitialState}>
            {(state, setState) => <FormField label={"Select Model Year"}>
                <TypeaheadSelect options={modelInitialState.options} selectedOptions={state.selectedOptions} onSelect={option => setState({
              ...state,
              selectedOptions: [...state.selectedOptions, option]
            })} onTagRemove={handleRemoveTag(state, setState)} typeaheadProps={{
              placeholder: "Select Model",
              name: "model",
              type: "number"
            }} />
              </FormField>}
          </StateProvider>
        </div>
      </StoryFragment>;
    function handleRemoveTag(state, setState, optionsArrayName = "selectedOptions") {
      return tag => setState({
        ...state,
        [optionsArrayName]: state[optionsArrayName].filter(options => options.id !== tag.id)
      });
    }
    function handleKeywordChange(setState) {
      return async keyword => {
        if (keyword) {
          setState(prevState => ({
            ...prevState,
            areOptionsFetching: true,
            keyword
          }));
          await simulateAPICall();
          setState(prevState => ({
            ...prevState,
            areOptionsFetching: false,
            thirdOptions: [{
              id: keyword,
              title: keyword
            }]
          }));
        }
      };
    }
  }
}`,...$.parameters?.docs?.source}}}})))()}ie();export{$ as TypeaheadStory,re as __namedExportsOrder,Q as default};