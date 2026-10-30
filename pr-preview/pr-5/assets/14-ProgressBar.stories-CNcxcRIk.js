import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";function i(e){let{ariaLabelledBy:t,ariaLabel:n,title:r,ariaValueText:i,ariaDescribedBy:c,testid:l}=e,{percentage:u,style:d,children:f,customClassName:p}=e,m=(0,a.default)(`progress-bar`,p),h=u>=s?s:u,{trackColor:g=`blue`,backgroundColor:_=`gray`,completedColor:v=`green`}=d||{};return(0,o.jsxs)(`div`,{className:m,style:{backgroundColor:_},role:`progressbar`,"aria-valuenow":h,"aria-valuemin":0,"aria-valuemax":s,"aria-labelledby":t,"aria-label":n,title:r,"aria-valuetext":i,"aria-describedby":c,"data-testid":l,children:[(0,o.jsx)(`div`,{className:`progress-bar__track`,style:{width:`${h}%`,backgroundColor:h===s?v:g},"data-testid":`${l}.track`}),f&&(0,o.jsx)(`div`,{className:`progress-bar__content`,children:f})]})}var a,o,s;function c(){return(c=t((()=>{a=e(r()),o=n(),s=100,i.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{percentage:{required:!0,tsType:{name:`number`},description:``},style:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  trackColor?: string;
  backgroundColor?: string;
  completedColor?: string;
}`,signature:{properties:[{key:`trackColor`,value:{name:`string`,required:!1}},{key:`backgroundColor`,value:{name:`string`,required:!1}},{key:`completedColor`,value:{name:`string`,required:!1}}]}},description:``},ariaLabelledBy:{required:!1,tsType:{name:`string`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:``},ariaValueText:{required:!1,tsType:{name:`string`},description:``},ariaDescribedBy:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},customClassName:{required:!1,tsType:{name:`string`},description:``},testid:{required:!1,tsType:{name:`string`},description:``}}}})))()}var l,u,d,f,p,m,h,g;function _(){return(_=t((()=>{c(),l=n(),u={background:`#A6A6A6`,track:`#2F76FF`,completed:`#00B300`},d=(0,l.jsx)(`style`,{children:`
  .progress-bar-story {
    height: 51.2px;
  }
`}),f={title:`Progress Bar`},p={name:`Progress Bar With Different Percentages`,render:()=>(0,l.jsxs)(`div`,{style:{maxWidth:`350px`},children:[(0,l.jsx)(`span`,{children:`Empty`}),(0,l.jsx)(i,{percentage:0,style:{backgroundColor:u.background,trackColor:u.track}}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`span`,{children:`Incompleted`}),(0,l.jsx)(i,{percentage:33,style:{backgroundColor:u.background,trackColor:u.track}}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`span`,{children:`Completed`}),(0,l.jsx)(i,{percentage:100,style:{backgroundColor:u.background,trackColor:u.track,completedColor:u.completed}})]})},m={name:`Progress Bar With Height Overridden by CSS`,render:()=>(0,l.jsxs)(`div`,{style:{maxWidth:`350px`},children:[(0,l.jsx)(`span`,{children:`Empty`}),(0,l.jsx)(i,{percentage:0,style:{backgroundColor:u.background,trackColor:u.track,completedColor:u.completed},customClassName:`progress-bar-story`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`span`,{children:`Incompleted`}),(0,l.jsx)(i,{percentage:50,style:{backgroundColor:u.background,trackColor:u.track,completedColor:u.completed},customClassName:`progress-bar-story`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`span`,{children:`Completed`}),(0,l.jsx)(i,{percentage:100,style:{backgroundColor:u.background,trackColor:u.track,completedColor:u.completed},customClassName:`progress-bar-story`}),d]})},h={name:`Progress Bar With Children`,render:()=>(0,l.jsxs)(`div`,{style:{maxWidth:`350px`},children:[(0,l.jsx)(i,{percentage:0,style:{backgroundColor:u.background,trackColor:u.track,completedColor:u.completed},children:(0,l.jsx)(`p`,{children:`0 %`})}),(0,l.jsx)(`br`,{}),(0,l.jsx)(i,{percentage:85,style:{backgroundColor:u.background,trackColor:u.track,completedColor:u.completed},children:(0,l.jsx)(`p`,{children:`85 %`})}),(0,l.jsx)(`br`,{}),(0,l.jsx)(i,{percentage:100,style:{backgroundColor:u.background,trackColor:u.track,completedColor:u.completed},children:(0,l.jsx)(`p`,{children:`Completed!`})}),d]})},g=[`ProgressBarWithDifferentPercentages`,`ProgressBarWithHeightOverriddenByCSS`,`ProgressBarWithChildren`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Progress Bar With Different Percentages",
  render: () => <div style={{
    maxWidth: "350px"
  }}>
      <span>{"Empty"}</span>

      <ProgressBar percentage={0} style={{
      backgroundColor: colors.background,
      trackColor: colors.track
    }} />

      <br />

      <span>{"Incompleted"}</span>

      <ProgressBar percentage={33} style={{
      backgroundColor: colors.background,
      trackColor: colors.track
    }} />

      <br />

      <span>{"Completed"}</span>

      <ProgressBar percentage={100} style={{
      backgroundColor: colors.background,
      trackColor: colors.track,
      completedColor: colors.completed
    }} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Progress Bar With Height Overridden by CSS",
  render: () => <div style={{
    maxWidth: "350px"
  }}>
      <span>{"Empty"}</span>

      <ProgressBar percentage={0} style={{
      backgroundColor: colors.background,
      trackColor: colors.track,
      completedColor: colors.completed
    }} customClassName={"progress-bar-story"} />

      <br />

      <span>{"Incompleted"}</span>

      <ProgressBar percentage={50} style={{
      backgroundColor: colors.background,
      trackColor: colors.track,
      completedColor: colors.completed
    }} customClassName={"progress-bar-story"} />

      <br />

      <span>{"Completed"}</span>

      <ProgressBar percentage={100} style={{
      backgroundColor: colors.background,
      trackColor: colors.track,
      completedColor: colors.completed
    }} customClassName={"progress-bar-story"} />

      {progressBarStory}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Progress Bar With Children",
  render: () => <div style={{
    maxWidth: "350px"
  }}>
      <ProgressBar percentage={0} style={{
      backgroundColor: colors.background,
      trackColor: colors.track,
      completedColor: colors.completed
    }}>
        {<p>{"0 %"}</p>}
      </ProgressBar>

      <br />

      <ProgressBar percentage={85} style={{
      backgroundColor: colors.background,
      trackColor: colors.track,
      completedColor: colors.completed
    }}>
        {<p>{"85 %"}</p>}
      </ProgressBar>

      <br />

      <ProgressBar percentage={100} style={{
      backgroundColor: colors.background,
      trackColor: colors.track,
      completedColor: colors.completed
    }}>
        {<p>{"Completed!"}</p>}
      </ProgressBar>

      {progressBarStory}
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as ProgressBarWithChildren,p as ProgressBarWithDifferentPercentages,m as ProgressBarWithHeightOverriddenByCSS,g as __namedExportsOrder,f as default};