import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{t as i}from"./classnames-DQoS6hca.js";import{n as a,t as o}from"./ListItem-C6drpBP_.js";import{n as s,t as c}from"./List-Cgo_p2SQ.js";import{n as l,t as u}from"./StateProvider-BFdhvQQQ.js";import{n as d,t as f}from"./Button-DkvQVobz.js";var p,m,h,g;function _(){return(_=t((()=>{p=e(i()),m=e(n()),h=r(),g=m.forwardRef(({id:e,title:t,description:n,customClassNames:r,testid:i,role:a},o)=>{let{container:s,title:c,description:l}=r||{};return(0,h.jsxs)(`div`,{ref:o,className:s,"data-testid":i,id:e,role:a,children:[(0,h.jsx)(`dt`,{className:(0,p.default)(`description-term__title`,c),children:t}),(0,h.jsx)(`dd`,{className:(0,p.default)(`description-term__description`,l),children:n})]})}),g.__docgenInfo={description:``,methods:[],displayName:`DescriptionTerm`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},id:{required:!1,tsType:{name:`string`},description:``},customClassNames:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{container?: string; title?: string; description?: string}`,signature:{properties:[{key:`container`,value:{name:`string`,required:!1}},{key:`title`,value:{name:`string`,required:!1}},{key:`description`,value:{name:`string`,required:!1}}]}},description:``},role:{required:!1,tsType:{name:`string`},description:``},testid:{required:!1,tsType:{name:`string`},description:``}}}})))()}function v(){return(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(o,{customClassName:`list-item-placeholder`}),(0,C.jsx)(o,{customClassName:`list-item-placeholder`}),(0,C.jsx)(o,{customClassName:`list-item-placeholder`}),(0,C.jsx)(`style`,{children:`
          .list-item-placeholder {
            height: 60px;

            margin-bottom: 20px;

            background: lightgrey;

            animation: opacityAnimation 1s infinite;
          }

          @keyframes opacityAnimation {
            0% {
              opacity: 1;
            }
          
            50% {
              opacity: 0.7;
            }
          
            100% {
              opacity: 1;
            }
          }
          
        `})]})}function y({user:e}){return(0,C.jsxs)(o,{children:[e.name,` `,(0,C.jsx)(`small`,{children:e.email})]})}function b({user:e}){return(0,C.jsx)(u,{initialState:{displayEmail:!1},children:(t,n)=>(0,C.jsxs)(o,{clickableListItemProps:{onClick:()=>{n({displayEmail:!t.displayEmail})}},children:[`Click to toggle `,(0,C.jsx)(`em`,{children:e.name}),"`s email address",t.displayEmail&&(0,C.jsx)(`strong`,{children:` ${e.email}`})]})})}function x({user:e,onRemove:t}){return(0,C.jsxs)(o,{children:[(0,C.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[e.name,(0,C.jsx)(f,{onClick:t,children:`Remove`})]}),D]})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{S=n(),d(),_(),a(),s(),l(),C=r(),w=[{id:1,name:`John Doe`,email:`john@doe.com`},{id:2,name:`Jane Doe`,email:`jane@doe.com`},{id:3,name:`Harry Doe`,email:`harry@doe.com`}],T=[],E=[{id:`1`,title:`Apple`,description:`The round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.`},{id:`2`,title:`Orange`,description:`A large round juicy citrus fruit with a tough bright reddish-yellow rind.`},{id:`3`,title:`Lemon`,description:`A pale yellow oval citrus fruit with thick skin and fragrant, acidic juice`}],D=(0,C.jsx)(`style`,{children:`
      .list-item {
        margin-bottom: 20px;
        padding: 20px;

        border: 1px solid lightgrey;
      }
    `}),O={title:`List`},k={name:`Has Items`,render:()=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(c,{items:w,children:e=>(0,C.jsx)(y,{user:e})}),D]})},A={name:`Has Placeholder`,render:()=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(c,{items:T,placeholderProps:{shouldDisplayPlaceholder:!0,placeholder:v()},children:e=>(0,C.jsx)(y,{user:e})}),D]})},j={name:`Empty State`,render:()=>(0,C.jsx)(S.Fragment,{children:(0,C.jsx)(c,{items:T,emptyStateProps:{shouldDisplayEmptyState:!0,emptyState:`Sorry, there are no users`},children:e=>(0,C.jsx)(y,{user:e})})})},M={name:`Clickable Items`,render:()=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(c,{items:w,children:e=>(0,C.jsx)(b,{user:e})}),D]})},N={name:`Ordered List`,render:()=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(c,{items:w,type:`ordered`,children:e=>(0,C.jsx)(y,{user:e})}),D]})},P={name:`Description List`,render:()=>(0,C.jsx)(S.Fragment,{children:(0,C.jsx)(c,{items:E,type:`description`,children:e=>(0,C.jsx)(g,{title:e.title,description:e.description})})})},F={name:`Removable Items`,render:()=>(0,C.jsx)(u,{initialState:w,children:(e,t)=>(0,C.jsx)(c,{items:e,children:n=>(0,C.jsx)(x,{user:n,onRemove:()=>t(e.filter(e=>e.id!==n.id))})})})},I=[`HasItems`,`HasPlaceholder`,`EmptyState`,`ClickableItems`,`OrderedList`,`DescriptionList`,`RemovableItems`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Has Items",
  render: () => <Fragment>
      <List items={users}>{item => <UserListItem user={item} />}</List>

      {style}
    </Fragment>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Has Placeholder",
  render: () => <Fragment>
      <List items={emptyUsers} placeholderProps={{
      shouldDisplayPlaceholder: true,
      placeholder: renderPlaceholders()
    }}>
        {item => <UserListItem user={item} />}
      </List>

      {style}
    </Fragment>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Empty State",
  render: () => <Fragment>
      <List items={emptyUsers} emptyStateProps={{
      shouldDisplayEmptyState: true,
      emptyState: "Sorry, there are no users"
    }}>
        {item => <UserListItem user={item} />}
      </List>
    </Fragment>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Clickable Items",
  render: () => <Fragment>
      <List items={users}>{item => <ClickableUserListItem user={item} />}</List>

      {style}
    </Fragment>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Ordered List",
  render: () => <Fragment>
      <List items={users} type={"ordered"}>
        {item => <UserListItem user={item} />}
      </List>

      {style}
    </Fragment>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Description List",
  render: () => <Fragment>
      <List items={terms} type={"description"}>
        {item => <DescriptionTerm title={item.title} description={item.description} />}
      </List>
    </Fragment>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Removable Items",
  render: () => <StateProvider initialState={users}>
      {(state, setState) => <List items={state}>
          {user => <RemovableUserListItem user={user} onRemove={() => setState(state.filter(item => item.id !== user.id))} />}
        </List>}
    </StateProvider>
}`,...F.parameters?.docs?.source}}}})))()}L();export{M as ClickableItems,P as DescriptionList,j as EmptyState,k as HasItems,A as HasPlaceholder,N as OrderedList,F as RemovableItems,I as __namedExportsOrder,O as default};