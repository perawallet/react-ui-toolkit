import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./FormField-O-X_RDXd.js";import{t as o}from"./classnames-D09xBJOL.js";import{n as s,t as c}from"./Input-TCIT_Y0o.js";import{n as l,t as u}from"./StateProvider-PTu5tZQn.js";import{n as d,t as f}from"./useDebounce-DVMkK8GR.js";import{c as p,i as m,n as h,o as g,r as _}from"./timeUtils-DGNi0NYe.js";function v({testid:e,initialDateTime:t,value:n,onChange:r,placeholder:i=`03:30 PM`,name:a=`TimeInput`,customClassName:o,...s}){let[l,u]=d(r,t?x(t):null,S);return(0,b.jsx)(c,{type:`text`,testid:`${e}.input`,customClassName:(0,y.default)(`time-input`,o),name:a,value:l,placeholder:i,onChange:f,onBlur:p,...s});function f(e){u(e.currentTarget.value)}function p(){let e=m(n);t&&n.length<1&&(e=x(t)),u(e)}}var y,b,x,S;function C(){return(C=t((()=>{y=e(o()),f(),p(),_(),s(),b=r(),x=h({format:g.LONG_TIME_FORMAT,shouldShiftDateToCompensateForTimezone:!1}),S=100,v.__docgenInfo={description:``,methods:[],displayName:`TimeInput`,props:{onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(timeString: string) => void`,signature:{arguments:[{type:{name:`string`},name:`timeString`}],return:{name:`void`}}},description:``},value:{required:!0,tsType:{name:`string`},description:``},initialDateTime:{required:!1,tsType:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},description:``},name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"TimeInput"`,computed:!1}},placeholder:{defaultValue:{value:`"03:30 PM"`,computed:!1},required:!1}}}})))()}var w,T,E,D,O;function k(){return(k=t((()=>{w=n(),i(),C(),l(),T=r(),E={title:`Time Input`},D={name:`Time Input`,render:()=>(0,T.jsxs)(w.Fragment,{children:[(0,T.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,T.jsx)(a,{label:`Appointment Time - Controlled`,children:(0,T.jsx)(v,{testid:`appointment-time`,initialDateTime:new Date,value:e.value,onChange:e=>t({value:e})})})}),(0,T.jsx)(`br`,{}),(0,T.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,T.jsx)(a,{label:`Appointment Time - Controlled - without initialDateTime`,children:(0,T.jsx)(v,{testid:`appointment-time`,value:e.value,onChange:e=>t({value:e})})})}),(0,T.jsx)(`br`,{}),(0,T.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,T.jsx)(a,{label:`Appointment Time - hasError`,errorMessages:[`Please enter a valid time`],children:(0,T.jsx)(v,{testid:`appointment-time-has-error`,value:e.value,onChange:()=>t({value:``}),hasError:!0})})}),(0,T.jsx)(`br`,{}),(0,T.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,T.jsx)(a,{label:`Appointment Time - isDisabled`,children:(0,T.jsx)(v,{testid:`appointment-time-is-disabled`,isDisabled:!0,value:e.value,onChange:()=>t({value:``})})})})]})},O=[`TimeInputStory`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Time Input",
  render: () => <Fragment>
      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <FormField label={"Appointment Time - Controlled"}>
            <TimeInput testid={"appointment-time"} initialDateTime={new Date()} value={state.value} onChange={e => setState({
          value: e
        })} />
          </FormField>}
      </StateProvider>

      <br />

      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <FormField label={"Appointment Time - Controlled - without initialDateTime"}>
            <TimeInput testid={"appointment-time"} value={state.value} onChange={e => setState({
          value: e
        })} />
          </FormField>}
      </StateProvider>

      <br />

      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <FormField label={"Appointment Time - hasError"} errorMessages={["Please enter a valid time"]}>
            <TimeInput testid={"appointment-time-has-error"} value={state.value} onChange={() => setState({
          value: ""
        })} hasError={true} />
          </FormField>}
      </StateProvider>

      <br />

      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <FormField label={"Appointment Time - isDisabled"}>
            <TimeInput testid={"appointment-time-is-disabled"} isDisabled={true} value={state.value} onChange={() => setState({
          value: ""
        })} />
          </FormField>}
      </StateProvider>
    </Fragment>
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as TimeInputStory,O as __namedExportsOrder,E as default};