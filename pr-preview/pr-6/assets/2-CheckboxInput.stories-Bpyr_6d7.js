import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-BGJ90fIb.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./StateProvider-BFdhvQQQ.js";import{n as a,t as o}from"./CheckboxInput-PyHEEv-S.js";var s,c,l,u,d;function f(){return(f=e((()=>{s=t(),a(),r(),c=n(),l={title:`Checkbox`},u={name:`Checkbox`,render:()=>(0,c.jsx)(i,{initialState:{rememberMe:!0,termsAndConditions:!1,privacyPolicy:!0},children:(e,t)=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(o,{onSelect:()=>t({...e,rememberMe:!e.rememberMe}),isSelected:e.rememberMe,item:{id:`rememberMe`,content:`Remember Me`,inputProps:{name:`rememberMe`,htmlFor:`rememberMe`,value:`yes`}}}),(0,c.jsx)(`br`,{}),(0,c.jsx)(o,{onSelect:()=>t({...e,termsAndConditions:!e.termsAndConditions}),isSelected:e.termsAndConditions,item:{id:`termsAndConditions`,content:`Terms and Conditions`,inputProps:{name:`termsAndConditions`,htmlFor:`termsAndConditions`,value:`yes`}}}),(0,c.jsx)(`br`,{}),(0,c.jsx)(o,{onSelect:()=>t({...e,privacyPolicy:!e.privacyPolicy}),isSelected:e.privacyPolicy,isDisabled:!0,item:{id:`privacyPolicy`,content:`Privacy Policy`,inputProps:{name:`privacyPolicy`,htmlFor:`privacyPolicy`,value:`yes`}}})]})})},d=[`CheckboxStory`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Checkbox",
  render: () => {
    const initialState = {
      rememberMe: true,
      termsAndConditions: false,
      privacyPolicy: true
    };
    return <StateProvider initialState={initialState}>
        {(state, setState) => <Fragment>
            <CheckboxInput onSelect={() => setState({
          ...state,
          rememberMe: !state.rememberMe
        })} isSelected={state.rememberMe} item={{
          id: "rememberMe",
          content: "Remember Me",
          inputProps: {
            name: "rememberMe",
            htmlFor: "rememberMe",
            value: "yes"
          }
        }} />

            <br />

            <CheckboxInput onSelect={() => setState({
          ...state,
          termsAndConditions: !state.termsAndConditions
        })} isSelected={state.termsAndConditions} item={{
          id: "termsAndConditions",
          content: "Terms and Conditions",
          inputProps: {
            name: "termsAndConditions",
            htmlFor: "termsAndConditions",
            value: "yes"
          }
        }} />

            <br />

            <CheckboxInput onSelect={() => setState({
          ...state,
          privacyPolicy: !state.privacyPolicy
        })} isSelected={state.privacyPolicy} isDisabled={true} item={{
          id: "privacyPolicy",
          content: "Privacy Policy",
          inputProps: {
            name: "privacyPolicy",
            htmlFor: "privacyPolicy",
            value: "yes"
          }
        }} />
          </Fragment>}
      </StateProvider>;
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as CheckboxStory,d as __namedExportsOrder,l as default};