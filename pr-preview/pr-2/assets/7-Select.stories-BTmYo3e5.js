import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./ListItem-CbSrYWoy.js";import{n as a,t as o}from"./List-a7vz7HxA.js";import{n as s,t as c}from"./StateProvider-PTu5tZQn.js";import{i as l,n as u,r as d,t as f}from"./Tag-CswnN7XS.js";function p({id:e,iconSrc:t,price:n,change:r}){return(0,m.jsxs)(`div`,{className:`coin-dropdown-option-custom-content`,children:[(0,m.jsx)(`img`,{src:t}),(0,m.jsx)(`small`,{children:e}),(0,m.jsx)(`span`,{children:n}),(0,m.jsxs)(`span`,{children:[r,`%`]})]})}var m,h;function g(){return(g=e((()=>{m=n(),h={basic:{options:[{id:`turkish`,title:`Turkish`},{id:`english`,title:`English`},{id:`spanish`,title:`Spanish`},{id:`french`,title:`French - Disabled`,isDisabled:!0}],selectedOption:null},multiSelect:{options:[{id:`turkish`,title:`Turkish`},{id:`english`,title:`English`},{id:`spanish`,title:`Spanish`},{id:`french`,title:`French - Disabled`,isDisabled:!0}],value:[]},withSubtitle:{options:[{id:`html`,title:`HTML`,subtitle:`HyperText Markup Language`},{id:`css`,title:`CSS`,subtitle:`Cascading Style Sheets`},{id:`js`,title:`JS`,subtitle:`JavaScript`}],selectedOption:null},withCustomContent:{options:[{id:`btc`,title:`Bitcoin`,CustomContent:(0,m.jsx)(p,{id:`BTC`,iconSrc:`https://img.icons8.com/metro/26/000000/bitcoin.png`,price:`$58,223`,change:`12.4`})},{id:`eth`,title:`Ethereum`,CustomContent:(0,m.jsx)(p,{id:`ETH`,iconSrc:`https://img.icons8.com/fluent-systems-filled/26/000000/ethereum.png`,price:`$18.064`,change:`8.52`})},{id:`ltc`,title:`Litecoin`,CustomContent:(0,m.jsx)(p,{id:`LTC`,iconSrc:`https://img.icons8.com/ios-filled/26/000000/litecoin.png`,price:`$224.498`,change:`34.26`})}],selectedOption:null}}})))()}function _(e,t,n){let r=e.value.findIndex(e=>e.id===n.id)>-1,i=[];i=r?e.value.filter(e=>e.id!==n.id):[...e.value,n],t({...e,value:i})}var v,y,b,x,S,C;function w(){return(w=e((()=>{v=t(),r(),a(),l(),u(),g(),s(),y=n(),b={title:`Select`},x={name:`Select - Single Select`,render:()=>(0,y.jsxs)(v.Fragment,{children:[(0,y.jsx)(`p`,{children:`Single Select - Basic`}),(0,y.jsx)(c,{initialState:h.basic,children:(e,t)=>(0,y.jsxs)(d,{role:`listbox`,options:e.options,onSelect:n=>t({...e,selectedOption:n}),value:e.selectedOption,children:[(0,y.jsxs)(d.Trigger,{style:{justifyContent:`space-between`},children:[(0,y.jsx)(`div`,{children:e.selectedOption?e.selectedOption.title:`Select Item`}),(0,y.jsx)(`span`,{style:{marginTop:`8px`,marginLeft:`50px`},children:`ˇ`})]}),(0,y.jsx)(d.Content,{children:(0,y.jsx)(o,{items:e.options,children:e=>(0,y.jsx)(d.Item,{option:e,as:`li`,children:e.title})})})]})}),(0,y.jsx)(`p`,{children:`Single Select - Usage with <List />`}),(0,y.jsx)(c,{initialState:h.basic,children:(e,t)=>(0,y.jsxs)(d,{role:`listbox`,options:e.options,onSelect:n=>t({...e,selectedOption:n}),value:e.selectedOption,children:[(0,y.jsxs)(d.Trigger,{style:{justifyContent:`space-between`},children:[(0,y.jsx)(`div`,{children:e.selectedOption?e.selectedOption.title:`Select Item`}),(0,y.jsx)(`span`,{style:{marginTop:`8px`,marginLeft:`50px`},children:`ˇ`})]}),(0,y.jsx)(d.Content,{children:(0,y.jsx)(o,{items:e.options,children:e=>(0,y.jsx)(d.Item,{option:e,as:`li`,children:e.title})})})]})}),(0,y.jsx)(`p`,{children:`Single Select - Usage with <Select.OptionList />`}),(0,y.jsx)(c,{initialState:h.basic,children:(e,t)=>(0,y.jsxs)(d,{role:`listbox`,options:e.options,onSelect:n=>t({...e,selectedOption:n}),value:e.selectedOption,children:[(0,y.jsxs)(d.Trigger,{style:{justifyContent:`space-between`},children:[(0,y.jsx)(`div`,{children:e.selectedOption?e.selectedOption.title:`Select Item`}),(0,y.jsx)(`span`,{style:{marginTop:`8px`,marginLeft:`50px`},children:`ˇ`})]}),(0,y.jsx)(d.Content,{children:(0,y.jsx)(d.ItemList,{contentRenderer:e=>e.title,options:e.options})})]})}),(0,y.jsx)(`p`,{children:`Single Select - Grouped`}),(0,y.jsx)(c,{initialState:h.basic,children:(e,t)=>(0,y.jsxs)(d,{role:`listbox`,options:e.options,onSelect:n=>t({...e,selectedOption:n}),value:e.selectedOption,children:[(0,y.jsxs)(d.Trigger,{style:{justifyContent:`space-between`},children:[(0,y.jsx)(`div`,{children:e.selectedOption?e.selectedOption.title:`Select Item`}),(0,y.jsx)(`span`,{style:{marginTop:`8px`,marginLeft:`50px`},children:`ˇ`})]}),(0,y.jsxs)(d.Content,{children:[(0,y.jsxs)(d.Group,{children:[(0,y.jsx)(`div`,{className:`select-story__group__title`,children:`Group 1`}),e.options.slice(0,2).map(e=>(0,y.jsx)(d.Item,{option:e,children:e.title}))]}),(0,y.jsxs)(d.Group,{children:[(0,y.jsx)(`div`,{className:`select-story__group__title`,children:`Group 2`}),e.options.slice(2,e.options.length).map(e=>(0,y.jsx)(d.Item,{option:e,children:e.title}))]})]})]})}),(0,y.jsx)(`p`,{children:`Single Select - Custom Content`}),(0,y.jsx)(c,{initialState:h.withCustomContent,children:(e,t)=>(0,y.jsxs)(d,{role:`listbox`,options:e.options,onSelect:n=>t({...e,selectedOption:n}),value:e.selectedOption,children:[(0,y.jsxs)(d.Trigger,{style:{justifyContent:`space-between`},children:[(0,y.jsx)(`div`,{children:e.selectedOption?e.selectedOption.title:`Select Item`}),(0,y.jsx)(`span`,{style:{marginTop:`8px`,marginLeft:`50px`},children:`ˇ`})]}),(0,y.jsx)(d.Content,{children:e.options.map(e=>(0,y.jsx)(d.Item,{option:e,children:e.CustomContent}))})]})})]})},S={name:`Select - Multi Select`,render:()=>(0,y.jsxs)(v.Fragment,{children:[(0,y.jsx)(`p`,{children:`Multi Select - Basic`}),(0,y.jsx)(c,{initialState:h.multiSelect,children:(e,t)=>(0,y.jsxs)(d,{role:`listbox`,options:e.options,onSelect:n=>n&&_(e,t,n),value:e.value,children:[(0,y.jsxs)(d.Trigger,{style:{justifyContent:`space-between`},children:[(0,y.jsx)(`div`,{children:e.value.length?`${e.value.length} selected`:`Select Items`}),(0,y.jsx)(`span`,{style:{marginTop:`8px`,marginLeft:`50px`},children:`ˇ`})]}),(0,y.jsx)(d.Content,{children:(0,y.jsx)(o,{items:e.options,children:e=>(0,y.jsx)(d.Item,{option:e,as:`li`,children:e.title})})})]})}),(0,y.jsx)(`p`,{children:`Multi Select - With Tags`}),(0,y.jsx)(c,{initialState:h.multiSelect,children:(e,t)=>(0,y.jsxs)(d,{role:`listbox`,options:e.options,onSelect:n=>n&&_(e,t,n),value:e.value,children:[(0,y.jsxs)(d.Trigger,{style:{justifyContent:`space-between`},children:[(0,y.jsx)(`div`,{children:e.value.length?(0,y.jsx)(o,{customClassName:`select-story__tag-list`,items:e.value,children:n=>(0,y.jsx)(i,{customClassName:`select-story__tag-list__item`,children:(0,y.jsx)(f,{tag:{content:n.title,id:n.id},onRemove:n=>t({...e,value:e.value.filter(e=>e.id!==n.id)})})})}):`Select Items`}),(0,y.jsx)(`span`,{style:{marginTop:`8px`,marginLeft:`50px`},children:`ˇ`})]}),(0,y.jsxs)(d.Content,{children:[(0,y.jsxs)(d.Group,{children:[(0,y.jsx)(`div`,{className:`select-story__group__title`,children:`Group 1`}),e.options.slice(0,2).map(e=>(0,y.jsx)(d.Item,{option:e,children:e.title}))]}),(0,y.jsxs)(d.Group,{children:[(0,y.jsx)(`div`,{className:`select-story__group__title`,children:`Group 2`}),e.options.slice(2,e.options.length).map(e=>(0,y.jsx)(d.Item,{option:e,children:e.title}))]})]})]})})]})},C=[`SelectSingleSelect`,`SelectMultiSelect`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Select - Single Select",
  render: () => <Fragment>
      <p>{"Single Select - Basic"}</p>
      <StateProvider initialState={initialState.basic}>
        {(state, setState) => <Select role={"listbox"} options={state.options} onSelect={option => setState({
        ...state,
        selectedOption: option
      })} value={state.selectedOption}>
            <Select.Trigger style={{
          justifyContent: "space-between"
        }}>
              <div>
                {state.selectedOption ? state.selectedOption.title : "Select Item"}
              </div>

              <span style={{
            marginTop: "8px",
            marginLeft: "50px"
          }}>{"ˇ"}</span>
            </Select.Trigger>

            <Select.Content>
              <List items={state.options}>
                {option => <Select.Item option={option} as={"li"}>
                    {option.title}
                  </Select.Item>}
              </List>
            </Select.Content>
          </Select>}
      </StateProvider>

      <p>{"Single Select - Usage with <List />"}</p>
      <StateProvider initialState={initialState.basic}>
        {(state, setState) => <Select role={"listbox"} options={state.options} onSelect={option => setState({
        ...state,
        selectedOption: option
      })} value={state.selectedOption}>
            <Select.Trigger style={{
          justifyContent: "space-between"
        }}>
              <div>
                {state.selectedOption ? state.selectedOption.title : "Select Item"}
              </div>

              <span style={{
            marginTop: "8px",
            marginLeft: "50px"
          }}>{"ˇ"}</span>
            </Select.Trigger>
            <Select.Content>
              <List items={state.options}>
                {option => <Select.Item option={option} as={"li"}>
                    {option.title}
                  </Select.Item>}
              </List>
            </Select.Content>
          </Select>}
      </StateProvider>

      <p>{"Single Select - Usage with <Select.OptionList />"}</p>
      <StateProvider initialState={initialState.basic}>
        {(state, setState) => <Select role={"listbox"} options={state.options} onSelect={option => setState({
        ...state,
        selectedOption: option
      })} value={state.selectedOption}>
            <Select.Trigger style={{
          justifyContent: "space-between"
        }}>
              <div>
                {state.selectedOption ? state.selectedOption.title : "Select Item"}
              </div>

              <span style={{
            marginTop: "8px",
            marginLeft: "50px"
          }}>{"ˇ"}</span>
            </Select.Trigger>

            <Select.Content>
              <Select.ItemList contentRenderer={option => option.title} options={state.options} />
            </Select.Content>
          </Select>}
      </StateProvider>

      <p>{"Single Select - Grouped"}</p>
      <StateProvider initialState={initialState.basic}>
        {(state, setState) => <Select role={"listbox"} options={state.options} onSelect={option => setState({
        ...state,
        selectedOption: option
      })} value={state.selectedOption}>
            <Select.Trigger style={{
          justifyContent: "space-between"
        }}>
              <div>
                {state.selectedOption ? state.selectedOption.title : "Select Item"}
              </div>

              <span style={{
            marginTop: "8px",
            marginLeft: "50px"
          }}>{"ˇ"}</span>
            </Select.Trigger>

            <Select.Content>
              <Select.Group>
                <div className={"select-story__group__title"}>{"Group 1"}</div>
                {state.options.slice(0, 2).map(option => <Select.Item option={option}>{option.title}</Select.Item>)}
              </Select.Group>

              <Select.Group>
                <div className={"select-story__group__title"}>{"Group 2"}</div>
                {state.options.slice(2, state.options.length).map(option => <Select.Item option={option}>{option.title}</Select.Item>)}
              </Select.Group>
            </Select.Content>
          </Select>}
      </StateProvider>

      <p>{"Single Select - Custom Content"}</p>

      <StateProvider initialState={initialState.withCustomContent}>
        {(state, setState) => <Select role={"listbox"} options={state.options} onSelect={option => setState({
        ...state,
        selectedOption: option
      })} value={state.selectedOption}>
            <Select.Trigger style={{
          justifyContent: "space-between"
        }}>
              <div>
                {state.selectedOption ? state.selectedOption.title : "Select Item"}
              </div>

              <span style={{
            marginTop: "8px",
            marginLeft: "50px"
          }}>{"ˇ"}</span>
            </Select.Trigger>

            <Select.Content>
              {state.options.map(option => <Select.Item option={option}>{option.CustomContent}</Select.Item>)}
            </Select.Content>
          </Select>}
      </StateProvider>
    </Fragment>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Select - Multi Select",
  render: () => <Fragment>
      <p>{"Multi Select - Basic"}</p>

      <StateProvider initialState={initialState.multiSelect}>
        {(state, setState) => <Select role={"listbox"} options={state.options} onSelect={option => option && handleMultiSelect(state, setState, option)} value={state.value}>
            <Select.Trigger style={{
          justifyContent: "space-between"
        }}>
              <div>
                {state.value.length ? \`\${state.value.length} selected\` : "Select Items"}
              </div>

              <span style={{
            marginTop: "8px",
            marginLeft: "50px"
          }}>{"ˇ"}</span>
            </Select.Trigger>

            <Select.Content>
              {<List items={state.options}>
                  {option => <Select.Item option={option} as={"li"}>
                      {option.title}
                    </Select.Item>}
                </List>}
            </Select.Content>
          </Select>}
      </StateProvider>

      <p>{"Multi Select - With Tags"}</p>

      <StateProvider initialState={initialState.multiSelect}>
        {(state, setState) => <Select role={"listbox"} options={state.options} onSelect={option => option && handleMultiSelect(state, setState, option)} value={state.value}>
            <Select.Trigger style={{
          justifyContent: "space-between"
        }}>
              <div>
                {state.value.length ? <List customClassName={"select-story__tag-list"} items={state.value}>
                    {option => <ListItem customClassName={"select-story__tag-list__item"}>
                        <Tag tag={{
                  content: option.title,
                  id: option.id
                }} onRemove={tag => setState({
                  ...state,
                  value: state.value.filter(option => option.id !== tag.id)
                })}></Tag>
                      </ListItem>}
                  </List> : "Select Items"}
              </div>

              <span style={{
            marginTop: "8px",
            marginLeft: "50px"
          }}>{"ˇ"}</span>
            </Select.Trigger>

            <Select.Content>
              <Select.Group>
                <div className={"select-story__group__title"}>{"Group 1"}</div>
                {state.options.slice(0, 2).map(option => <Select.Item option={option}>{option.title}</Select.Item>)}
              </Select.Group>

              <Select.Group>
                <div className={"select-story__group__title"}>{"Group 2"}</div>
                {state.options.slice(2, state.options.length).map(option => <Select.Item option={option}>{option.title}</Select.Item>)}
              </Select.Group>
            </Select.Content>
          </Select>}
      </StateProvider>
    </Fragment>
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as SelectMultiSelect,x as SelectSingleSelect,C as __namedExportsOrder,b as default};