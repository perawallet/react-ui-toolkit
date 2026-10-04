import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./FormField-O-X_RDXd.js";import{n as a,t as o}from"./Input-TCIT_Y0o.js";import{n as s,t as c}from"./StoryFragment-_dt8Q2_a.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),r(),a(),s(),u=n(),d={title:`Input`},f={name:`Input`,render:()=>(0,u.jsxs)(l.Fragment,{children:[(0,u.jsx)(o,{name:`fullName`,onChange:e=>console.log(e.currentTarget.value),placeholder:`Input`}),(0,u.jsx)(`br`,{}),(0,u.jsx)(o,{name:`fullName`,onChange:e=>console.log(e.currentTarget.value),placeholder:`Disabled Input`,isDisabled:!0})]})},p={name:`Input with FormField`,render:()=>(0,u.jsxs)(c,{children:[(0,u.jsx)(i,{labelledBy:`Full Name`,label:`Full Name`,children:(0,u.jsx)(o,{name:`fullName`,placeholder:`Input with FormField`,onChange:e=>console.log(e.currentTarget.value)})}),(0,u.jsx)(`br`,{}),(0,u.jsx)(i,{labelledBy:`Full Name`,label:`Full Name`,helperMessages:[`You can include your middle name`],children:(0,u.jsx)(o,{name:`fullName`,placeholder:`Input hasHelperMessage with FormField`,onChange:e=>console.log(e.currentTarget.value)})}),(0,u.jsx)(`br`,{}),(0,u.jsx)(i,{labelledBy:`Full Name`,label:`Full Name`,errorMessages:[`Please enter a full name`],children:(0,u.jsx)(o,{name:`fullName`,placeholder:`Input errorMessage with FormField`,hasError:!0,onChange:e=>console.log(e.currentTarget.value)})})]})},m=[`InputStory`,`InputWithFormField`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Input",
  render: () => <Fragment>
      <Input name={"fullName"} onChange={e => console.log(e.currentTarget.value)} placeholder={"Input"} />

      <br />

      <Input name={"fullName"} onChange={e => console.log(e.currentTarget.value)} placeholder={"Disabled Input"} isDisabled={true} />
    </Fragment>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Input with FormField",
  render: () => <StoryFragment>
      <FormField labelledBy={"Full Name"} label={"Full Name"}>
        <Input name={"fullName"} placeholder={"Input with FormField"} onChange={e => console.log(e.currentTarget.value)} />
      </FormField>

      <br />

      <FormField labelledBy={"Full Name"} label={"Full Name"} helperMessages={["You can include your middle name"]}>
        <Input name="fullName" placeholder={"Input hasHelperMessage with FormField"} onChange={e => console.log(e.currentTarget.value)} />
      </FormField>

      <br />

      <FormField labelledBy={"Full Name"} label={"Full Name"} errorMessages={["Please enter a full name"]}>
        <Input name={"fullName"} placeholder={"Input errorMessage with FormField"} hasError={true} onChange={e => console.log(e.currentTarget.value)} />
      </FormField>
    </StoryFragment>
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as InputStory,p as InputWithFormField,m as __namedExportsOrder,d as default};