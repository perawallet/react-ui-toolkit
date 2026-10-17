import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./StoryFragment-_dt8Q2_a.js";import{n as s,t as c}from"./StateProvider-PTu5tZQn.js";import{n as l,t as u}from"./Spinner-Bnvmp-Yf.js";import{n as d,t as f}from"./Button-BhnGa3bo.js";var p,m,h,g;function _(){return(_=t((()=>{p=e(i()),m=e(n()),l(),h=r(),g=m.forwardRef(function(e,t){let{onChange:n,children:r,testid:i,name:a,htmlFor:o,acceptedFileTypes:s=`image/png, image/jpeg, .pdf`,customSpinner:c,customClassName:l,customLabelClassName:d,isPending:f,isDisabled:m,isMultiple:g}=e,_=(0,p.default)(`file-input__container`,l),v=f||m,y=(0,p.default)(`file-input__label`,d,{"file-input__label--is-disabled":v}),b=c||(0,h.jsx)(u,{customClassName:`file-input__spinner`});return(0,h.jsxs)(`div`,{className:_,children:[(0,h.jsx)(`input`,{"data-testid":i,type:`file`,value:``,name:a,className:`file-input`,onChange:n,id:o,disabled:v,accept:s,multiple:g}),(0,h.jsxs)(`label`,{ref:t,htmlFor:o,className:y,"data-testid":`${i}.label`,children:[r,f&&b]})]})}),g.__docgenInfo={description:``,methods:[],displayName:`FileInput`,props:{htmlFor:{required:!0,tsType:{name:`string`},description:``},name:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onChange:{required:!0,tsType:{name:`ReactReactEventHandler`,raw:`React.ReactEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:``},testid:{required:!1,tsType:{name:`string`},description:``},isDisabled:{required:!1,tsType:{name:`boolean`},description:``},isPending:{required:!1,tsType:{name:`boolean`},description:``},customSpinner:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},customClassName:{required:!1,tsType:{name:`string`},description:``},customLabelClassName:{required:!1,tsType:{name:`string`},description:``},acceptedFileTypes:{required:!1,tsType:{name:`string`},description:``},ref:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLLabelElement>`,elements:[{name:`HTMLLabelElement`}]},description:``},isMultiple:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}var v,y,b,x;function S(){return(S=t((()=>{v=e(i()),y=e(n()),_(),b=r(),x=y.forwardRef(function(e,t){let{onFileSelect:n,children:r,customClassName:i,customLabelClassName:a,...o}=e;return(0,b.jsx)(g,{...o,ref:t,customClassName:(0,v.default)(`file-upload-button`,i),customLabelClassName:(0,v.default)(`file-upload-button__label`,`button`,a),onChange:s,children:r});function s(e){let{files:t}=e.currentTarget;n&&t?.length&&n(t)}}),x.__docgenInfo={description:``,methods:[],displayName:`FileUploadButton`,props:{customLabelClassName:{required:!1,tsType:{name:`string`},description:``},ref:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLLabelElement>`,elements:[{name:`HTMLLabelElement`}]},description:``},onFileSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  files: React.SyntheticEvent<HTMLInputElement>["currentTarget"]["files"]
) => void`,signature:{arguments:[{type:{name:`ReactSyntheticEvent["currentTarget"]["files"]`,raw:`React.SyntheticEvent<HTMLInputElement>["currentTarget"]["files"]`},name:`files`}],return:{name:`void`}}},description:``}}}})))()}function C(){return(0,w.jsx)(`div`,{className:`spinner-story-sample file-input__spinner`})}var w;function T(){return(T=t((()=>{w=r(),C.__docgenInfo={description:``,methods:[],displayName:`SpinnerStorySample`}})))()}var E,D,O,k,A,j;function M(){return(M=t((()=>{E=n(),d(),S(),T(),s(),a(),D=r(),O={title:`Button`},k={name:`Button`,render:()=>{let e=(0,E.useRef)(null);return(0,D.jsxs)(o,{children:[(0,D.jsx)(f,{type:`button`,onClick:()=>alert(`Thank You!`),children:`Click Me`}),(0,D.jsx)(`br`,{}),(0,D.jsx)(f,{type:`button`,onClick:()=>alert(`Thank You!`),isDisabled:!0,children:`Click Me - isDisabled`}),(0,D.jsx)(`br`,{}),(0,D.jsx)(c,{initialState:!1,children:(e,t)=>(0,D.jsx)(f,{type:`button`,onClick:()=>t(!0),shouldDisplaySpinner:e,children:`Click Me - shouldDisplaySpinner`})}),(0,D.jsx)(`br`,{}),(0,D.jsx)(f,{type:`button`,onClick:()=>alert(`Thank You!`),shouldDisplaySpinner:!0,customSpinner:(0,D.jsx)(C,{}),children:`Click Me - shouldDisplaySpinner - customSpinner`}),(0,D.jsx)(`br`,{}),(0,D.jsx)(f,{ref:e,type:`button`,onClick:()=>alert(`Button width: ${e.current.getBoundingClientRect().width}`),children:`Get Button Width`})]})}},A={name:`Upload Button`,render:()=>{let e=(0,E.useRef)(null);return(0,E.useEffect)(()=>{console.log(`FileUploadButton: `,e.current)},[]),(0,D.jsxs)(o,{children:[(0,D.jsx)(x,{onFileSelect:e=>alert(Array.from(e).map(e=>e.name).join(`, `)),name:`photos`,htmlFor:`photos`,children:`Upload your photos`}),(0,D.jsx)(`br`,{}),(0,D.jsx)(x,{onFileSelect:e=>alert(Array.from(e).map(e=>e.name).join(`, `)),name:`second-photos`,htmlFor:`second-photos`,isDisabled:!0,children:`Upload your photos - isDisabled`}),(0,D.jsx)(`br`,{}),(0,D.jsx)(x,{onFileSelect:e=>alert(Array.from(e).map(e=>e.name).join(`, `)),name:`second-photos`,htmlFor:`second-photos`,isPending:!0,children:`Upload your photos - isPending`}),(0,D.jsx)(`br`,{}),(0,D.jsx)(x,{onFileSelect:e=>alert(Array.from(e).map(e=>e.name).join(`, `)),name:`second-photos`,htmlFor:`second-photos`,isPending:!0,customSpinner:(0,D.jsx)(C,{}),children:`Upload your photos - isPending - customSpinner`}),(0,D.jsx)(`br`,{}),(0,D.jsx)(x,{ref:e,onFileSelect:e=>alert(Array.from(e).map(e=>e.name).join(`, `)),name:`photos`,htmlFor:`photos`,children:`Get FileUploadButton Ref`})]})}},j=[`ButtonStory`,`UploadButton`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Button",
  render: () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    return <StoryFragment>
        <Button type={"button"} onClick={() => alert("Thank You!")}>
          {"Click Me"}
        </Button>

        <br />

        <Button type={"button"} onClick={() => alert("Thank You!")} isDisabled={true}>
          {"Click Me - isDisabled"}
        </Button>

        <br />

        <StateProvider initialState={false}>
          {(state, setState) => <Button type={"button"} onClick={() => setState(true)} shouldDisplaySpinner={state}>
              {"Click Me - shouldDisplaySpinner"}
            </Button>}
        </StateProvider>

        <br />

        <Button type={"button"} onClick={() => alert("Thank You!")} shouldDisplaySpinner={true} customSpinner={<SpinnerStorySample />}>
          {"Click Me - shouldDisplaySpinner - customSpinner"}
        </Button>

        <br />

        <Button ref={buttonRef} type={"button"} onClick={() => alert(\`Button width: \${buttonRef.current.getBoundingClientRect().width}\`)}>
          {"Get Button Width"}
        </Button>
      </StoryFragment>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Upload Button",
  render: () => {
    const fileUploadButtonRef = useRef<HTMLLabelElement | null>(null);
    useEffect(() => {
      console.log("FileUploadButton: ", fileUploadButtonRef.current);
    }, []);
    return <StoryFragment>
        <FileUploadButton onFileSelect={(files: FileList) => alert(Array.from(files).map(file => file.name).join(", "))} name={"photos"} htmlFor={"photos"}>
          {"Upload your photos"}
        </FileUploadButton>

        <br />

        <FileUploadButton onFileSelect={(files: FileList) => alert(Array.from(files).map(file => file.name).join(", "))} name={"second-photos"} htmlFor={"second-photos"} isDisabled={true}>
          {"Upload your photos - isDisabled"}
        </FileUploadButton>

        <br />

        <FileUploadButton onFileSelect={(files: FileList) => alert(Array.from(files).map(file => file.name).join(", "))} name={"second-photos"} htmlFor={"second-photos"} isPending={true}>
          {"Upload your photos - isPending"}
        </FileUploadButton>

        <br />

        <FileUploadButton onFileSelect={(files: FileList) => alert(Array.from(files).map(file => file.name).join(", "))} name={"second-photos"} htmlFor={"second-photos"} isPending={true} customSpinner={<SpinnerStorySample />}>
          {"Upload your photos - isPending - customSpinner"}
        </FileUploadButton>

        <br />

        <FileUploadButton ref={fileUploadButtonRef} onFileSelect={(files: FileList) => alert(Array.from(files).map(file => file.name).join(", "))} name={"photos"} htmlFor={"photos"}>
          {"Get FileUploadButton Ref"}
        </FileUploadButton>
      </StoryFragment>;
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{k as ButtonStory,A as UploadButton,j as __namedExportsOrder,O as default};