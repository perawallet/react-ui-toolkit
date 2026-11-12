import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{t as i}from"./classnames-DQoS6hca.js";import{n as a,t as o}from"./ListItem-C6drpBP_.js";import{n as s,t as c}from"./List-Cgo_p2SQ.js";import{n as l,t as u}from"./StoryFragment-DvkySDgK.js";import{a as d,c as f,r as p,s as m,t as h}from"./timeUtils-tlvzPCno.js";function g({range:e,cadence:t=m,timerType:n=`down`,onEnd:r}){let i=(0,_.useRef)(0),a=(0,_.useRef)(void 0),[o,s]=(0,_.useState)(h(e,i.current,n)),[c,l]=e,u=(0,_.useRef)(void 0);return(0,_.useLayoutEffect)(()=>{u.current=r},[r]),(0,_.useLayoutEffect)(()=>(a.current=setInterval(()=>{l&&(i.current+=t);let e=h([c,l],i.current,n);e.delta>=1e3?s(e):(clearInterval(a.current),s({delta:0,days:0,hours:0,minutes:0,seconds:0}))},t),()=>{clearInterval(a.current)}),[t,c,l,n]),(0,_.useEffect)(()=>{o.delta<=0&&(clearInterval(a.current),u.current&&u.current())},[o.delta]),o}var _;function v(){return(v=t((()=>{_=n(),f(),p()})))()}function y({titleMap:e,alwaysShowSeconds:t},n){let r=[];return r=n.days>=1?[`days`,`hours`,`minutes`]:n.hours>=1?[`hours`,`minutes`]:[`minutes`,`seconds`],t&&n.hours>=1&&r.push(`seconds`),r.map(t=>({id:t,count:n[t].toString().padStart(2,`0`),title:(e?e[t]:void 0)||t}))}function b({testid:e,range:t,timerInterval:n=1,timerType:r=`down`,alwaysShowSeconds:i=!1,titleMap:a,onEnd:s,customClassName:l}){let u=g({range:t,cadence:n*m,timerType:r,onEnd:s}),f=y({titleMap:a,alwaysShowSeconds:i},u);return(0,S.useEffect)(()=>{let[e]=d([t[0],t[1]||new Date]);r===`up`&&e.getTime()>new Date().getTime()&&console.error("`timerType` is `up` but `range` is not in the past",t),r===`down`&&e.getTime()<new Date().getTime()&&console.error("`timerType` is `down` but `range` is not in the future",t)},[t,r]),(0,C.jsx)(c,{customClassName:(0,x.default)(`date-timer`,l),testid:e,items:f,children:(e,t)=>(0,C.jsxs)(o,{customClassName:`date-timer-box`,children:[(0,C.jsx)(`p`,{"data-testid":`${t}.${e.id}.count`,className:`date-timer-box__count`,children:e.count}),(0,C.jsx)(`p`,{"data-testid":`${t}.${e.id}.title`,className:`date-timer-box__title`,children:e.title})]})})}var x,S,C;function w(){return(w=t((()=>{x=e(i()),S=n(),v(),f(),p(),a(),s(),C=r(),b.__docgenInfo={description:``,methods:[],displayName:`DateTimer`,props:{range:{required:!0,tsType:{name:`tuple`,raw:`[Date, Date?]`,elements:[{name:`Date`},{name:`unknown`}]},description:``},testid:{required:!1,tsType:{name:`string`},description:``},titleMap:{required:!1,tsType:{name:`Record`,elements:[{name:`Omit`,elements:[{name:`RemainingTimeBreakdown`},{name:`literal`,value:`"delta"`}],raw:`Omit<RemainingTimeBreakdown, "delta">`},{name:`union`,raw:`undefined | string`,elements:[{name:`undefined`},{name:`string`}]}],raw:`Record<DateTimerItemID, undefined | string>`},description:``},timerInterval:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},timerType:{required:!1,tsType:{name:`union`,raw:`"down" | "up"`,elements:[{name:`literal`,value:`"down"`},{name:`literal`,value:`"up"`}]},description:``,defaultValue:{value:`"down"`,computed:!1}},alwaysShowSeconds:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onEnd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},customClassName:{required:!1,tsType:{name:`string`},description:``}}}})))()}function T(e,t){let n=new Date;return t===`day`?n.setDate(n.getDate()+e):t===`hour`?n.setHours(n.getHours()+e):t===`minute`?n.setMinutes(n.getMinutes()+e):n.setSeconds(n.getSeconds()+e),new Date(n)}function E(){console.log(`onEnd function triggered`)}var D,O,k,A;function j(){return(j=t((()=>{w(),l(),D=r(),O={title:`DateTimer`},k={name:`DateTimer`,render:()=>(0,D.jsxs)(u,{children:[(0,D.jsx)(`span`,{children:`Between Tomorrow and 3 Days Later`}),(0,D.jsx)(b,{range:[T(1,`day`),T(3,`day`)],alwaysShowSeconds:!0,onEnd:E}),(0,D.jsx)(b,{range:[T(1,`day`),T(3,`day`)],titleMap:{days:`d`,hours:`h`,minutes:`m`,seconds:`s`},alwaysShowSeconds:!0,onEnd:E}),(0,D.jsx)(`hr`,{}),(0,D.jsx)(`span`,{children:"Since `Jan 10 2022` - timerType=`up`"}),(0,D.jsx)(b,{range:[new Date(`Jan 10 2022`)],alwaysShowSeconds:!0,onEnd:E,timerType:`up`}),(0,D.jsx)(`hr`,{}),(0,D.jsx)(`span`,{children:"1 Day Later - Show Seconds - timerInterval=`5`"}),(0,D.jsx)(b,{range:[T(1,`day`)],alwaysShowSeconds:!0,onEnd:E,timerInterval:5}),(0,D.jsx)(`hr`,{}),(0,D.jsx)(`span`,{children:`17 Hours Later`}),(0,D.jsx)(b,{range:[T(17,`hour`)],alwaysShowSeconds:!0,onEnd:E}),(0,D.jsx)(`hr`,{}),(0,D.jsx)(`span`,{children:`1 Minute Later`}),(0,D.jsx)(b,{range:[T(1,`minute`)],onEnd:E}),(0,D.jsx)(`hr`,{}),(0,D.jsx)(`span`,{children:`10 Seconds Later`}),(0,D.jsx)(b,{range:[T(10,`second`)],onEnd:E}),(0,D.jsx)(`span`,{children:`10 Seconds Later with 5s timer interval`}),(0,D.jsx)(b,{range:[T(10,`second`)],onEnd:E,timerInterval:5})]})},A=[`DateTimerStory`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "DateTimer",
  render: () => <StoryFragment>
      <span>{"Between Tomorrow and 3 Days Later"}</span>

      <DateTimer range={[calculateFutureDate(1, "day"), calculateFutureDate(3, "day")]} alwaysShowSeconds={true} onEnd={handleDateTimerEnd} />

      <DateTimer range={[calculateFutureDate(1, "day"), calculateFutureDate(3, "day")]} titleMap={{
      days: "d",
      hours: "h",
      minutes: "m",
      seconds: "s"
    }} alwaysShowSeconds={true} onEnd={handleDateTimerEnd} />

      <hr />

      <span>{"Since \`Jan 10 2022\` - timerType=\`up\`"}</span>

      <DateTimer range={[new Date("Jan 10 2022")]} alwaysShowSeconds={true} onEnd={handleDateTimerEnd} timerType={"up"} />

      <hr />

      <span>{"1 Day Later - Show Seconds - timerInterval=\`5\`"}</span>

      <DateTimer range={[calculateFutureDate(1, "day")]} alwaysShowSeconds={true} onEnd={handleDateTimerEnd} timerInterval={5} />

      <hr />

      <span>{"17 Hours Later"}</span>

      <DateTimer range={[calculateFutureDate(17, "hour")]} alwaysShowSeconds={true} onEnd={handleDateTimerEnd} />

      <hr />

      <span>{"1 Minute Later"}</span>

      <DateTimer range={[calculateFutureDate(1, "minute")]} onEnd={handleDateTimerEnd} />

      <hr />

      <span>{"10 Seconds Later"}</span>

      <DateTimer range={[calculateFutureDate(10, "second")]} onEnd={handleDateTimerEnd} />

      <span>{"10 Seconds Later with 5s timer interval"}</span>

      <DateTimer range={[calculateFutureDate(10, "second")]} onEnd={handleDateTimerEnd} timerInterval={5} />
    </StoryFragment>
}`,...k.parameters?.docs?.source}}}})))()}j();export{k as DateTimerStory,A as __namedExportsOrder,O as default};