import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./ListItem-CbSrYWoy.js";import{n as s,t as c}from"./List-a7vz7HxA.js";import{n as l,t as u}from"./StateProvider-PTu5tZQn.js";import{n as d,t as f}from"./Button-BhnGa3bo.js";function p({testid:e,tab:t,onClick:n,index:r,isActive:i}){return(0,h.jsxs)(o,{customClassName:(0,m.default)(`tab-header-item`,{"tab-header-item--is-active":i,"tab-header-item--is-disabled":t.isDisabled}),clickableListItemProps:{onClick:a},testid:e,children:[t.icon&&(0,h.jsx)(`span`,{className:`tab-header-item__icon`,children:t.icon}),t.content]});function a(){t.isDisabled||n(r)}}var m,h;function g(){return(g=t((()=>{m=e(i()),a(),h=r(),p.__docgenInfo={description:``,methods:[],displayName:`TabHeaderItem`,props:{tab:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  id: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  isDisabled?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`content`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`isDisabled`,value:{name:`boolean`,required:!1}}]}},description:``},onClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},isActive:{required:!0,tsType:{name:`boolean`},description:``},index:{required:!0,tsType:{name:`number`},description:``},testid:{required:!1,tsType:{name:`string`},description:``}}}})))()}function _({testid:e,items:t,initialActiveTabIndex:n=0,activeTabIndex:r,children:i,customClassName:a,onTabChange:o,wrapperId:s}){let[l,u]=(0,y.useState)(n),d=(0,v.default)(`tab`,a);return(0,b.jsxs)(`div`,{id:s,className:d,children:[(0,b.jsx)(c,{testid:`${e}.header`,customClassName:`tab__header`,items:t,children:(e,t,n)=>(0,b.jsx)(p,{testid:t,onClick:f,tab:e,isActive:r===void 0?l===n:r===n,index:n})}),(0,b.jsx)(`div`,{className:`tab__body`,"data-testid":`${e}.body`,children:i[r===void 0?l:r]})]});function f(e){o&&e!==r&&o(e),r===void 0&&u(e)}}var v,y,b;function x(){return(x=t((()=>{v=e(i()),y=n(),s(),g(),b=r(),_.__docgenInfo={description:``,methods:[],displayName:`Tab`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  isDisabled?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`content`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`isDisabled`,value:{name:`boolean`,required:!1}}]}}],raw:`TabItem[]`},description:``},children:{required:!0,tsType:{name:`Array`,elements:[{name:`ReactReactNode`,raw:`React.ReactNode`}],raw:`React.ReactNode[]`},description:``},testid:{required:!1,tsType:{name:`string`},description:``},initialActiveTabIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},customClassName:{required:!1,tsType:{name:`string`},description:``},wrapperId:{required:!1,tsType:{name:`string`},description:``}}}})))()}var S,C,w,T,E,D;function O(){return(O=t((()=>{S=n(),d(),x(),l(),C=r(),w=[{id:`home`,content:`Home`},{id:`following`,content:`Following`},{id:`disabled-tab`,content:`Disabled`,isDisabled:!0}],T={title:`Tab`},E={name:`Tab`,render:()=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(`p`,{children:(0,C.jsx)(`b`,{children:`Uncontrolled Tab`})}),(0,C.jsx)(_,{items:w,initialActiveTabIndex:1,children:[(0,C.jsx)(`div`,{children:`Home tab`},0),(0,C.jsx)(`div`,{children:`Following tab`},1),(0,C.jsx)(`div`,{children:`Disabled tab`},2)]}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),(0,C.jsx)(u,{initialState:0,children:(e,t)=>(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{children:(0,C.jsx)(`b`,{children:`Controlled Tab`})}),(0,C.jsxs)(`div`,{style:{display:`flex`},children:[(0,C.jsx)(f,{onClick:()=>t(Math.max(0,(e-1)%2)),isDisabled:e===0,children:`Previous Tab`}),(0,C.jsx)(f,{onClick:()=>t((e+1)%2),isDisabled:e===1,children:`Next Tab`})]}),(0,C.jsx)(_,{items:w,activeTabIndex:e,onTabChange:e=>{console.log(`tab changed to index: `,e),t(e)},children:[(0,C.jsx)(`div`,{children:`Home tab`},0),(0,C.jsx)(`div`,{children:`Following tab`},1)]})]})})]})},D=[`TabStory`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Tab",
  render: () => <Fragment>
      <p>
        <b>Uncontrolled Tab</b>
      </p>
      <Tab items={tabItems} initialActiveTabIndex={1}>
        {[<div key={0}>{"Home tab"}</div>, <div key={1}>{"Following tab"}</div>, <div key={2}>{"Disabled tab"}</div>]}
      </Tab>

      <br />
      <br />
      <StateProvider initialState={0}>
        {(state, setState) => <div>
            <p>
              <b>Controlled Tab</b>
            </p>

            <div style={{
          display: "flex"
        }}>
              <Button onClick={() => setState(Math.max(0, (state - 1) % 2))} isDisabled={state === 0}>
                Previous Tab
              </Button>
              <Button onClick={() => setState((state + 1) % 2)} isDisabled={state === 1}>
                Next Tab
              </Button>
            </div>

            <Tab items={tabItems} activeTabIndex={state} onTabChange={index => {
          console.log("tab changed to index: ", index);
          setState(index);
        }}>
              {[<div key={0}>{"Home tab"}</div>, <div key={1}>{"Following tab"}</div>]}
            </Tab>
          </div>}
      </StateProvider>
    </Fragment>
}`,...E.parameters?.docs?.source}}}})))()}O();export{E as TabStory,D as __namedExportsOrder,T as default};