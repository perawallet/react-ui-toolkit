import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,t as a}from"./StoryFragment-_dt8Q2_a.js";import{n as o,t as s}from"./StateProvider-PTu5tZQn.js";function c({onToggle:e,isToggledOn:t,isDisabled:n,customClassName:r,testid:i}){let a=(0,l.default)(`switch`,r,{"switch--is-disabled":n});return(0,u.jsxs)(`label`,{"data-testid":i,className:a,children:[(0,u.jsx)(`input`,{className:`switch__controller`,type:`checkbox`,checked:t,disabled:n,onChange:e,role:`switch`,"aria-checked":t,"aria-readonly":n}),(0,u.jsx)(`span`,{className:`switch__slider`})]})}var l,u;function d(){return(d=t((()=>{l=e(r()),u=n(),c.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{onToggle:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isToggledOn:{required:!0,tsType:{name:`boolean`},description:``},isDisabled:{required:!1,tsType:{name:`boolean`},description:``},customClassName:{required:!1,tsType:{name:`string`},description:``},testid:{required:!1,tsType:{name:`string`},description:``}}}})))()}var f,p,m,h;function g(){return(g=t((()=>{d(),o(),i(),f=n(),p={title:`Switch`},m={name:`Switch`,render:()=>{let e={isSwitchOn:!0,isDisabled:!1},t=(0,f.jsx)(`style`,{children:`
        .sb-show-main {
          background-color: gray;
          color: white;
        }
      `});return(0,f.jsx)(s,{initialState:e,children:(e,n)=>(0,f.jsxs)(a,{children:[(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,f.jsx)(`span`,{children:`Dark`}),(0,f.jsx)(c,{isToggledOn:e.isSwitchOn,onToggle:()=>n({...e,isSwitchOn:!e.isSwitchOn})}),(0,f.jsx)(`span`,{children:`Light`}),!e.isSwitchOn&&t]}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`span`,{children:`Disabled Switch`}),(0,f.jsx)(`br`,{}),(0,f.jsx)(c,{isToggledOn:e.isDisabled,onToggle:()=>n({...e,isDisabled:!e.isDisabled}),isDisabled:!0})]})})}},h=[`SwitchStory`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Switch",
  render: () => {
    const initialState = {
      isSwitchOn: true,
      isDisabled: false
    };
    const darkTheme = <style>
        {\`
        .sb-show-main {
          background-color: gray;
          color: white;
        }
      \`}
      </style>;
    return <StateProvider initialState={initialState}>
        {(state, setState) => <StoryFragment>
            <div style={{
          display: "flex",
          gap: "8px"
        }}>
              <span>{"Dark"}</span>

              <Switch isToggledOn={state.isSwitchOn} onToggle={() => setState({
            ...state,
            isSwitchOn: !state.isSwitchOn
          })} />

              <span>{"Light"}</span>

              {!state.isSwitchOn && darkTheme}
            </div>

            <br />

            <br />

            <span>{"Disabled Switch"}</span>

            <br />

            <Switch isToggledOn={state.isDisabled} onToggle={() => setState({
          ...state,
          isDisabled: !state.isDisabled
        })} isDisabled={true} />
          </StoryFragment>}
      </StateProvider>;
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as SwitchStory,h as __namedExportsOrder,p as default};