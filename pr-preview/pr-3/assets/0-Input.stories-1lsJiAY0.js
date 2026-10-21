import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-BGJ90fIb.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./FormField-BD4AWzmH.js";import{n as a,t as o}from"./Input-Df-RT8dL.js";import{n as s,t as c}from"./StoryFragment-DvkySDgK.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),r(),a(),s(),u=n(),d={title:`Input`},f={name:`Input`,render:()=>(0,u.jsxs)(l.Fragment,{children:[(0,u.jsx)(o,{name:`fullName`,onChange:e=>console.log(e.currentTarget.value),placeholder:`Input`}),(0,u.jsx)(`br`,{}),(0,u.jsx)(o,{name:`fullName`,onChange:e=>console.log(e.currentTarget.value),placeholder:`Disabled Input`,isDisabled:!0})]})},p={name:`Input with FormField`,render:()=>(0,u.jsxs)(c,{children:[(0,u.jsx)(i,{labelledBy:`Full Name`,label:`Full Name`,children:(0,u.jsx)(o,{name:`fullName`,placeholder:`Input with FormField`,onChange:e=>console.log(e.currentTarget.value)})}),(0,u.jsx)(`br`,{}),(0,u.jsx)(i,{labelledBy:`Full Name`,label:`Full Name`,helperMessages:[`You can include your middle name`],children:(0,u.jsx)(o,{name:`fullName`,placeholder:`Input hasHelperMessage with FormField`,onChange:e=>console.log(e.currentTarget.value)})}),(0,u.jsx)(`br`,{}),(0,u.jsx)(i,{labelledBy:`Full Name`,label:`Full Name`,errorMessages:[`Please enter a full name`],children:(0,u.jsx)(o,{name:`fullName`,placeholder:`Input errorMessage with FormField`,hasError:!0,onChange:e=>console.log(e.currentTarget.value)})})]})},m=[`InputStory`,`InputWithFormField`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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