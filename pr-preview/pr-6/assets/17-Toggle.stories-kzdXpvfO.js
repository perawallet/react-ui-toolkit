import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{t as i}from"./classnames-DQoS6hca.js";import{n as a,t as o}from"./ListItem-C6drpBP_.js";import{n as s,t as c}from"./StateProvider-BFdhvQQQ.js";function l(){let e=(0,u.useContext)(d);if(!e)throw Error(`Trying to consume ToggleContext outside of its provider.`);return e}var u,d;function f(){return(f=t((()=>{u=n(),d=(0,u.createContext)({selectedItems:[],onToggle:()=>void 0,canSelectMultiple:!1}),d.displayName=`ToggleContext`})))()}function p({children:e,dataId:t,customClassName:n,isDisabled:r,testid:i}){let{selectedItems:a,onToggle:s,canSelectMultiple:c}=l(),u=a.includes(t),d=(0,m.default)(`toggle-item`,n,{"toggle-item--is-selected":u,"toggle-item--is-disabled":r});return(0,h.jsx)(o,{testid:i,customClassName:d,children:(0,h.jsxs)(`label`,{className:`toggle-item__label`,children:[(0,h.jsx)(`input`,{type:`checkbox`,className:`toggle-input`,checked:u,disabled:r,onChange:f}),e]})});function f(){let e;e=u?a.filter(e=>e!==t):c?[...a,t]:[t],s(e)}}var m,h;function g(){return(g=t((()=>{m=e(i()),a(),f(),h=r(),p.__docgenInfo={description:``,methods:[],displayName:`ToggleItem`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},dataId:{required:!0,tsType:{name:`string`},description:``},customClassName:{required:!1,tsType:{name:`string`},description:``},isDisabled:{required:!1,tsType:{name:`boolean`},description:``},testid:{required:!1,tsType:{name:`string`},description:``}}}})))()}function _({children:e,onToggle:t,selectedItems:n=[],canSelectMultiple:r=!1,position:i=`horizontal`,isDisabled:a,customClassName:o}){let s=(0,v.default)(`toggle`,o,{"toggle--is-horizontal":i===`horizontal`,"toggle--is-vertical":i===`vertical`,"toggle--is-disabled":a});return(0,y.jsx)(`ul`,{className:s,children:(0,y.jsx)(d.Provider,{value:{selectedItems:n,onToggle:t,canSelectMultiple:r},children:e})})}var v,y;function b(){return(b=t((()=>{v=e(i()),g(),f(),y=r(),_.Item=p,_.__docgenInfo={description:``,methods:[{name:`Item`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  dataId,
  customClassName,
  isDisabled,
  testid
}: ToggleItemProps`,optional:!1,type:{name:`ToggleItemProps`,alias:`ToggleItemProps`}}],returns:null}],displayName:`Toggle`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onToggle:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(selectedItems: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`selectedItems`}],return:{name:`void`}}},description:``},selectedItems:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},canSelectMultiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},position:{required:!1,tsType:{name:`union`,raw:`"vertical" | "horizontal"`,elements:[{name:`literal`,value:`"vertical"`},{name:`literal`,value:`"horizontal"`}]},description:``,defaultValue:{value:`"horizontal"`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:``},customClassName:{required:!1,tsType:{name:`string`},description:``}}}})))()}var x;function S(){return(S=t((()=>{x={switch:[],devices:[],frameworks:[]}})))()}var C,w,T,E,D;function O(){return(O=t((()=>{b(),S(),s(),C=r(),w={title:`Toggle`},T={name:`Toggle`,render:()=>(0,C.jsxs)(`div`,{style:{width:`500px`},children:[(0,C.jsx)(`span`,{children:`Switch Toggle - 2 Options`}),(0,C.jsx)(c,{initialState:x.switch,children:(e,t)=>(0,C.jsxs)(_,{selectedItems:e,onToggle:e=>t(e),children:[(0,C.jsx)(_.Item,{dataId:`on`,children:`On`}),(0,C.jsx)(_.Item,{dataId:`off`,children:`Off`})]})}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`span`,{children:`Switch Toggle - 2 Options - Force to have 1 selected item`}),(0,C.jsx)(c,{initialState:x.switch,children:(e,t)=>(0,C.jsxs)(_,{selectedItems:e,onToggle:e=>t(e),children:[(0,C.jsx)(_.Item,{isDisabled:e[0]===`dark`,dataId:`dark`,children:`Dark`}),(0,C.jsx)(_.Item,{isDisabled:e[0]===`light`,dataId:`light`,children:`Light`})]})}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`span`,{children:`Swtich Toggle - Disabled`}),(0,C.jsxs)(_,{selectedItems:[],onToggle:e=>console.log(e),isDisabled:!0,children:[(0,C.jsx)(_.Item,{dataId:`mobile`,children:`Mobile`}),(0,C.jsx)(_.Item,{dataId:`tablet`,children:`Tablet`}),(0,C.jsx)(_.Item,{dataId:`notebook`,children:`Notebook`}),(0,C.jsx)(_.Item,{dataId:`desktop`,children:`Desktop`})]}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`span`,{children:`Toggle - Disabled Item`}),(0,C.jsx)(c,{initialState:x.devices,children:(e,t)=>(0,C.jsxs)(_,{selectedItems:e,onToggle:e=>t(e),children:[(0,C.jsx)(_.Item,{dataId:`mobile`,children:`Mobile`}),(0,C.jsx)(_.Item,{isDisabled:!0,dataId:`tablet`,children:`Tablet`}),(0,C.jsx)(_.Item,{dataId:`notebook`,children:`Notebook`}),(0,C.jsx)(_.Item,{dataId:`desktop`,children:`Desktop`})]})})]})},E={name:`Toggle Multiple`,render:()=>(0,C.jsxs)(`div`,{style:{width:`500px`},children:[(0,C.jsx)(`span`,{children:`Toggle - Multiple`}),(0,C.jsx)(c,{initialState:x.frameworks,children:(e,t)=>(0,C.jsxs)(_,{selectedItems:e,canSelectMultiple:!0,onToggle:e=>t(e),children:[(0,C.jsx)(_.Item,{dataId:`react`,children:`React`}),(0,C.jsx)(_.Item,{dataId:`vue`,children:`Vue`}),(0,C.jsx)(_.Item,{dataId:`angular`,children:`Angular`})]})}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`span`,{children:`Toggle - Vertically`}),(0,C.jsx)(c,{initialState:x.devices,children:(e,t)=>(0,C.jsxs)(_,{selectedItems:e,canSelectMultiple:!0,onToggle:e=>t(e),customClassName:`toggle-vertically`,position:`vertical`,children:[(0,C.jsx)(_.Item,{dataId:`mobile`,children:`Mobile`}),(0,C.jsx)(_.Item,{dataId:`tablet`,children:`Tablet`}),(0,C.jsx)(_.Item,{dataId:`notebook`,children:`Notebook`}),(0,C.jsx)(_.Item,{dataId:`desktop`,children:`Desktop`})]})}),(0,C.jsx)(`style`,{children:`
        .toggle-vertically {
          height: 500px;
        }
      `})]})},D=[`ToggleStory`,`ToggleMultiple`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Toggle",
  render: () => {
    return <div style={{
      width: "500px"
    }}>
        <span>{"Switch Toggle - 2 Options"}</span>

        <StateProvider initialState={initialState.switch}>
          {(state, setState) => <Toggle selectedItems={state} onToggle={e => setState(e)}>
              <Toggle.Item dataId={"on"}>{"On"}</Toggle.Item>
              <Toggle.Item dataId={"off"}>{"Off"}</Toggle.Item>
            </Toggle>}
        </StateProvider>

        <br />

        <span>{"Switch Toggle - 2 Options - Force to have 1 selected item"}</span>

        <StateProvider initialState={initialState.switch}>
          {(state, setState) => <Toggle selectedItems={state} onToggle={e => setState(e)}>
              <Toggle.Item isDisabled={state[0] === "dark"} dataId={"dark"}>
                {"Dark"}
              </Toggle.Item>
              <Toggle.Item isDisabled={state[0] === "light"} dataId={"light"}>
                {"Light"}
              </Toggle.Item>
            </Toggle>}
        </StateProvider>

        <br />

        <span>{"Swtich Toggle - Disabled"}</span>

        <Toggle selectedItems={[]} onToggle={e => console.log(e)} isDisabled={true}>
          <Toggle.Item dataId={"mobile"}>{"Mobile"}</Toggle.Item>
          <Toggle.Item dataId={"tablet"}>{"Tablet"}</Toggle.Item>
          <Toggle.Item dataId={"notebook"}>{"Notebook"}</Toggle.Item>
          <Toggle.Item dataId={"desktop"}>{"Desktop"}</Toggle.Item>
        </Toggle>

        <br />

        <span>{"Toggle - Disabled Item"}</span>

        <StateProvider initialState={initialState.devices}>
          {(state, setState) => <Toggle selectedItems={state} onToggle={e => setState(e)}>
              <Toggle.Item dataId={"mobile"}>{"Mobile"}</Toggle.Item>
              <Toggle.Item isDisabled={true} dataId={"tablet"}>
                {"Tablet"}
              </Toggle.Item>
              <Toggle.Item dataId={"notebook"}>{"Notebook"}</Toggle.Item>
              <Toggle.Item dataId={"desktop"}>{"Desktop"}</Toggle.Item>
            </Toggle>}
        </StateProvider>
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Toggle Multiple",
  render: () => <div style={{
    width: "500px"
  }}>
      <span>{"Toggle - Multiple"}</span>

      <StateProvider initialState={initialState.frameworks}>
        {(state, setState) => <Toggle selectedItems={state} canSelectMultiple={true} onToggle={e => setState(e)}>
            <Toggle.Item dataId="react">{"React"}</Toggle.Item>
            <Toggle.Item dataId="vue">{"Vue"}</Toggle.Item>
            <Toggle.Item dataId="angular">{"Angular"}</Toggle.Item>
          </Toggle>}
      </StateProvider>

      <br />

      <span>{"Toggle - Vertically"}</span>

      <StateProvider initialState={initialState.devices}>
        {(state, setState) => <Toggle selectedItems={state} canSelectMultiple={true} onToggle={e => setState(e)} customClassName={"toggle-vertically"} position={"vertical"}>
            <Toggle.Item dataId={"mobile"}>{"Mobile"}</Toggle.Item>
            <Toggle.Item dataId={"tablet"}>{"Tablet"}</Toggle.Item>
            <Toggle.Item dataId={"notebook"}>{"Notebook"}</Toggle.Item>
            <Toggle.Item dataId={"desktop"}>{"Desktop"}</Toggle.Item>
          </Toggle>}
      </StateProvider>

      <style>{\`
        .toggle-vertically {
          height: 500px;
        }
      \`}</style>
    </div>
}`,...E.parameters?.docs?.source}}}})))()}O();export{E as ToggleMultiple,T as ToggleStory,D as __namedExportsOrder,w as default};