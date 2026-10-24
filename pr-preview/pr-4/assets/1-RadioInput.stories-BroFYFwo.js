import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./FormField-O-X_RDXd.js";import{t as o}from"./classnames-D09xBJOL.js";import{n as s,t as c}from"./ListItem-CbSrYWoy.js";import{n as l,t as u}from"./List-a7vz7HxA.js";import{n as d,t as f}from"./StateProvider-PTu5tZQn.js";function p({testid:e,item:t,onSelect:n,isSelected:r,isDisabled:i}){let{inputProps:{name:a,value:o,htmlFor:s},customClassName:c,content:l}=t,u=(0,m.default)(`radio-input-label`,c,{"radio-input-label--is-selected":r,"radio-input-label--is-disabled":i});return(0,h.jsxs)(`label`,{"data-testid":e,htmlFor:s,className:u,children:[(0,h.jsx)(`input`,{type:`radio`,id:s,name:a,value:o,className:`radio-input`,onChange:d,checked:r,disabled:i}),(0,h.jsx)(`span`,{className:`radio-input-label__icon`}),l]});function d(e){n(t,e)}}var m,h;function g(){return(g=t((()=>{m=e(o()),h=r(),p.__docgenInfo={description:``,methods:[],displayName:`RadioInput`,props:{item:{required:!0,tsType:{name:`RadioInputItem`,elements:[{name:`Id`},{name:`Context`}],raw:`RadioInputItem<Id, Context>`},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(
  item: RadioInputItem<Id, Context>,
  event?: React.SyntheticEvent<HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:`RadioInputItem`,elements:[{name:`Id`},{name:`Context`}],raw:`RadioInputItem<Id, Context>`},name:`item`},{type:{name:`ReactSyntheticEvent`,raw:`React.SyntheticEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:``},isSelected:{required:!0,tsType:{name:`boolean`},description:``},testid:{required:!1,tsType:{name:`string`},description:``},isDisabled:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}function _({items:e,testid:t,onSelect:n,selectedItem:r,customClassName:i,isDisabled:a}){return(0,y.jsx)(u,{testid:t,items:e,customClassName:(0,v.default)(`radio-group`,i),children:(e,t)=>(0,y.jsx)(c,{customClassName:(0,v.default)(`radio-group__item`,e.customClassName),children:(0,y.jsx)(p,{testid:t,isDisabled:a||e.isDisabled,item:e,onSelect:n,isSelected:!!(r&&r.id===e.id)})})})}var v,y;function b(){return(b=t((()=>{v=e(o()),s(),l(),g(),y=r(),_.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`RadioInputItem`,elements:[{name:`Id`},{name:`Context`}],raw:`RadioInputItem<Id, Context>`}],raw:`RadioInputItem<Id, Context>[]`},description:``},selectedItem:{required:!0,tsType:{name:`union`,raw:`null | RadioInputItem<Id, Context>`,elements:[{name:`null`},{name:`RadioInputItem`,elements:[{name:`Id`},{name:`Context`}],raw:`RadioInputItem<Id, Context>`}]},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(
  item: RadioInputItem<Id, Context>,
  event?: React.SyntheticEvent<HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:`RadioInputItem`,elements:[{name:`Id`},{name:`Context`}],raw:`RadioInputItem<Id, Context>`},name:`item`},{type:{name:`ReactSyntheticEvent`,raw:`React.SyntheticEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:``},customClassName:{required:!1,tsType:{name:`string`},description:``},isDisabled:{required:!1,tsType:{name:`boolean`},description:``},testid:{required:!1,tsType:{name:`string`},description:``}}}})))()}var x,S,C,w,T;function E(){return(E=t((()=>{x=n(),i(),b(),d(),S=r(),C={title:`Radio Input`},w={name:`Radio Input`,render:()=>(0,S.jsx)(f,{initialState:{firstInput:{choices:[{content:`Large`,id:`Size, Large`,inputProps:{htmlFor:`size-large`,value:`size-large`,name:`size`}},{content:`Medium`,id:`Size, Medium`,inputProps:{htmlFor:`size-medium`,value:`size-medium`,name:`size`}},{content:`All of them`,id:`All of them`,isDisabled:!0,inputProps:{htmlFor:`all-of-them`,value:`all-of-them`,name:`size`}}],selectedItem:null},secondInput:{choices:[{content:`Mac OSX`,id:`Mac OSX`,inputProps:{htmlFor:`mac-osx`,value:`mac-osx`,name:`os`}},{content:`Windows`,id:`Windows`,inputProps:{htmlFor:`windows`,value:`windows`,name:`os`}},{content:`Linux`,id:`Linux`,inputProps:{htmlFor:`linux`,value:`linux`,name:`os`}}],selectedItem:null}},children:(e,t)=>(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(a,{label:`Partially Disabled`,children:(0,S.jsx)(_,{items:e.firstInput.choices,selectedItem:e.firstInput.selectedItem,onSelect:n=>t({...e,firstInput:{...e.firstInput,selectedItem:n}})})}),(0,S.jsx)(a,{label:`Fully Disabled`,children:(0,S.jsx)(_,{items:e.secondInput.choices,selectedItem:e.secondInput.selectedItem,isDisabled:!0,onSelect:n=>t({...e,secondInput:{...e.secondInput,selectedItem:n}})})})]})})},T=[`RadioInput`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Radio Input",
  render: () => {
    const initialState = {
      firstInput: {
        choices: [{
          content: "Large",
          id: "Size, Large",
          inputProps: {
            htmlFor: "size-large",
            value: "size-large",
            name: "size"
          }
        }, {
          content: "Medium",
          id: "Size, Medium",
          inputProps: {
            htmlFor: "size-medium",
            value: "size-medium",
            name: "size"
          }
        }, {
          content: "All of them",
          id: "All of them",
          isDisabled: true,
          inputProps: {
            htmlFor: "all-of-them",
            value: "all-of-them",
            name: "size"
          }
        }],
        selectedItem: null
      },
      secondInput: {
        choices: [{
          content: "Mac OSX",
          id: "Mac OSX",
          inputProps: {
            htmlFor: "mac-osx",
            value: "mac-osx",
            name: "os"
          }
        }, {
          content: "Windows",
          id: "Windows",
          inputProps: {
            htmlFor: "windows",
            value: "windows",
            name: "os"
          }
        }, {
          content: "Linux",
          id: "Linux",
          inputProps: {
            htmlFor: "linux",
            value: "linux",
            name: "os"
          }
        }],
        selectedItem: null
      }
    };
    return <StateProvider initialState={initialState}>
        {(state, setState) => <Fragment>
            <FormField label={"Partially Disabled"}>
              <RadioGroup items={state.firstInput.choices} selectedItem={state.firstInput.selectedItem} onSelect={item => setState({
            ...state,
            firstInput: {
              ...state.firstInput,
              selectedItem: item
            }
          })} />
            </FormField>

            <FormField label={"Fully Disabled"}>
              <RadioGroup items={state.secondInput.choices} selectedItem={state.secondInput.selectedItem} isDisabled={true} onSelect={item => setState({
            ...state,
            secondInput: {
              ...state.secondInput,
              selectedItem: item
            }
          })} />
            </FormField>
          </Fragment>}
      </StateProvider>;
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as RadioInput,T as __namedExportsOrder,C as default};