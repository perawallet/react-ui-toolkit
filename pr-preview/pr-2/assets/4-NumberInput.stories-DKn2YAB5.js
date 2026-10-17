import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./FormField-O-X_RDXd.js";import{t as o}from"./classnames-D09xBJOL.js";import{n as s,t as c}from"./Input-TCIT_Y0o.js";import{n as l,t as u}from"./StateProvider-PTu5tZQn.js";import{a as d,c as f,i as p,l as m,n as h,o as g,r as _,t as v,u as y}from"./numberUtils-C1EtYoku.js";function b(){let e=typeof navigator<`u`?navigator.userAgent||navigator.vendor:``;return[/Android/i,/iPhone/i,/iPad/i].some(t=>e.match(t))}function x(){try{return!b()&&g()}catch{return!1}}function S(e){return x()?{...e,..._(e.locale),...h(e.locale)}:{locale:void 0,shouldFormatToLocaleString:!1,DECIMAL_NUMBER_SEPARATOR:void 0,MINUS_SIGN:void 0,LOCALE_NEGATIVE_ZERO:void 0}}function C(e){return x()?e:{...e,locale:`en-US`}}function w({eventValue:e,formattedValue:t}){return t===``||e!==`-`&&Number.isNaN(Number(t))}function T({maximumFractionDigits:e}){return Number.isInteger(e)&&e>=0}function E({value:e,formatProps:t,signProps:n,maximumFractionDigits:r}){let{locale:i,shouldFormatToLocaleString:a}=t,{decimalSeparatorForLocale:o,minusSignForLocale:s,negativeZeroForLocale:c}=n,l=e;if(typeof e==`string`&&a){let[t,n]=String(e).split(`.`),a=v({maximumFractionDigits:r,locale:i});e.match(/\.$/)?.length||n?l=`${a(parseInt(t))}${o}${f({locale:i},n)}`:t&&(l=t!==s&&t!==c?a(parseInt(t)):`${s}${f({locale:i},t)}`)}return l}function D({value:e,event:t,formatProps:n,parseNumberOptions:r,maximumFractionDigits:i}){let{locale:a,shouldFormatToLocaleString:o}=S(n),s=t.currentTarget.value,c=m(r,s),l=c?String(c):``,u=!w({eventValue:s,formattedValue:c});if(u&&c.match(/./)?.length?l=String(c):u||(l=e),u&&(o||i>0||l.includes(`-`))&&(l=y(a,l)),i===0&&l===`-0`&&(l=`0`),o){let n=p(l),r=p(e),i=t.currentTarget,a=t.currentTarget.selectionStart||0;l&&(String(e).length===l.length+1||String(e).length===l.length-1)&&(r===n+1?--a:r===n-1&&(a+=1),window.requestAnimationFrame(()=>{i.selectionStart=a,i.selectionEnd=a}))}return l}function O(){return(O=t((()=>{d()})))()}var k,A,j,M;function N(){return(N=t((()=>{k=e(o()),A=e(n()),s(),O(),j=r(),M=A.forwardRef((e,t)=>{let{formatProps:n={},maximumFractionDigits:r=0,value:i,onChange:a,inputMode:o=`decimal`,customClassName:s,...l}=e;if(!T({maximumFractionDigits:r}))throw Error(`maximumFractionDigits should be zero or a positive integer.`);let{locale:u,shouldFormatToLocaleString:d,DECIMAL_NUMBER_SEPARATOR:f,MINUS_SIGN:p,LOCALE_NEGATIVE_ZERO:m}=S(n),h=C({locale:u,maximumFractionDigits:r}),g=E({value:i,formatProps:{locale:u,shouldFormatToLocaleString:d},signProps:{decimalSeparatorForLocale:f,minusSignForLocale:p,negativeZeroForLocale:m},maximumFractionDigits:r});return(0,j.jsx)(c,{ref:t,customClassName:(0,k.default)(s,`number-input`),type:`text`,onChange:_,value:g,...l});function _(e){e.currentTarget.value&&(e.currentTarget.value=D({value:i,event:e,formatProps:n,parseNumberOptions:h,maximumFractionDigits:r})),a(e)}}),M.__docgenInfo={description:``,methods:[],displayName:`NumberInput`,props:{formatProps:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  locale?: string;
  shouldFormatToLocaleString?: boolean;
}`,signature:{properties:[{key:`locale`,value:{name:`string`,required:!1}},{key:`shouldFormatToLocaleString`,value:{name:`boolean`,required:!1}}]}},description:``},maximumFractionDigits:{required:!1,tsType:{name:`number`},description:``}}}})))()}var P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{P=n(),i(),N(),l(),F=r(),I={title:`Number Input`},L={name:`Number Input`,render:()=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(a,{label:`Price – maximumFractionDigits={2}`,children:(0,F.jsx)(M,{maximumFractionDigits:2,name:`price`,onChange:e=>t({value:e.currentTarget.value}),value:e.value,placeholder:`$ 10`})}),(0,F.jsx)(`p`,{children:`event.currentTarget.value: ${e.value}`})]})}),(0,F.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(`br`,{}),(0,F.jsx)(a,{label:`Price - Has Error`,errorMessages:[`Please enter a valid price`],children:(0,F.jsx)(M,{maximumFractionDigits:2,name:`price`,onChange:e=>t({value:e.currentTarget.value}),value:e.value,placeholder:`$ 10`,hasError:!0})}),(0,F.jsx)(`p`,{children:`event.currentTarget.value: ${e.value}`})]})})]})},R={name:`Number Input with maximumFractionDigit`,render:()=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(a,{label:`Price (BTC) – maximumFractionDigits={8}`,children:(0,F.jsx)(M,{maximumFractionDigits:8,name:`price`,onChange:e=>t({value:e.currentTarget.value}),value:e.value,placeholder:`Min. ₿ 0.00000001`})}),(0,F.jsx)(`p`,{children:`event.currentTarget.value: ${e.value}`})]})}),(0,F.jsx)(`br`,{}),(0,F.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(a,{label:`ID or Passport Number – maxFractionDigits={0} - Can have leading zeros`,children:(0,F.jsx)(M,{name:`id-number`,onChange:e=>t({value:e.currentTarget.value}),value:e.value})}),(0,F.jsx)(`p`,{children:`event.currentTarget.value: ${e.value}`})]})})]})},z={name:`Number Input with shouldFormatToLocaleString`,render:()=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(a,{label:`Wallet ($) – maximumFractionDigits={2} - shouldFormatToLocaleString={true}`,children:(0,F.jsx)(M,{name:`wallet`,formatProps:{shouldFormatToLocaleString:!0},maximumFractionDigits:2,placeholder:`$ 1,000`,onChange:e=>t({value:e.currentTarget.value}),value:e.value})}),(0,F.jsx)(`p`,{children:`event.currentTarget.value: ${e.value}`})]})}),(0,F.jsx)(`br`,{}),(0,F.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(a,{label:`World Population – maximumFractionDigits={0} - shouldFormatToLocaleString={true}`,children:(0,F.jsx)(M,{name:`world-population`,placeholder:`7,794,798,739`,formatProps:{shouldFormatToLocaleString:!0},onChange:e=>t({value:e.currentTarget.value}),value:e.value})}),(0,F.jsx)(`p`,{children:`event.currentTarget.value: ${e.value}`})]})})]})},B={name:`Number Input with locale`,render:()=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(a,{label:`Budget (Locale) – maximumFractionDigits={4} - shouldFormatToLocaleString={true} - locale={"zh-Hans-CN-u-nu-hanidec"}`,children:(0,F.jsx)(M,{name:`world-population`,maximumFractionDigits:4,formatProps:{shouldFormatToLocaleString:!0,locale:`zh-Hans-CN-u-nu-hanidec`},onChange:e=>t({value:e.currentTarget.value}),value:e.value})}),(0,F.jsx)(`p`,{children:`event.currentTarget.value: ${e.value}`})]})}),(0,F.jsx)(`br`,{}),(0,F.jsx)(u,{initialState:{value:``},children:(e,t)=>(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(a,{label:`Budget (Locale) – maximumFractionDigits={4} - shouldFormatToLocaleString={true} - locale={"tr"}`,children:(0,F.jsx)(M,{name:`world-population`,maximumFractionDigits:4,formatProps:{shouldFormatToLocaleString:!0,locale:`tr`},onChange:e=>t({value:e.currentTarget.value}),value:e.value})}),(0,F.jsx)(`p`,{children:`event.currentTarget.value: ${e.value}`})]})})]})},V=[`NumberInputStory`,`NumberInputWithMaximumFractionDigit`,`NumberInputWithShouldFormatToLocaleString`,`NumberInputWithLocale`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Number Input",
  render: () => <Fragment>
      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <Fragment>
            <FormField label={"Price – maximumFractionDigits={2}"}>
              <NumberInput maximumFractionDigits={2} name={"price"} onChange={e => setState({
            value: e.currentTarget.value
          })} value={state.value} placeholder={"$ 10"} />
            </FormField>

            <p>{\`event.currentTarget.value: \${state.value}\`}</p>
          </Fragment>}
      </StateProvider>

      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <Fragment>
            <br />

            <FormField label={"Price - Has Error"} errorMessages={["Please enter a valid price"]}>
              <NumberInput maximumFractionDigits={2} name={"price"} onChange={e => setState({
            value: e.currentTarget.value
          })} value={state.value} placeholder={"$ 10"} hasError={true} />
            </FormField>

            <p>{\`event.currentTarget.value: \${state.value}\`}</p>
          </Fragment>}
      </StateProvider>
    </Fragment>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Number Input with maximumFractionDigit",
  render: () => <Fragment>
      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <Fragment>
            <FormField label={"Price (BTC) – maximumFractionDigits={8}"}>
              <NumberInput maximumFractionDigits={8} name={"price"} onChange={e => setState({
            value: e.currentTarget.value
          })} value={state.value} placeholder={"Min. ₿ 0.00000001"} />
            </FormField>

            <p>{\`event.currentTarget.value: \${state.value}\`}</p>
          </Fragment>}
      </StateProvider>

      <br />

      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <Fragment>
            <FormField label={"ID or Passport Number – maxFractionDigits={0} - Can have leading zeros"}>
              <NumberInput name={"id-number"} onChange={e => setState({
            value: e.currentTarget.value
          })} value={state.value} />
            </FormField>

            <p>{\`event.currentTarget.value: \${state.value}\`}</p>
          </Fragment>}
      </StateProvider>
    </Fragment>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Number Input with shouldFormatToLocaleString",
  render: () => <Fragment>
      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <Fragment>
            <FormField label={"Wallet ($) – maximumFractionDigits={2} - shouldFormatToLocaleString={true}"}>
              <NumberInput name={"wallet"} formatProps={{
            shouldFormatToLocaleString: true
          }} maximumFractionDigits={2} placeholder={"$ 1,000"} onChange={e => setState({
            value: e.currentTarget.value
          })} value={state.value} />
            </FormField>

            <p>{\`event.currentTarget.value: \${state.value}\`}</p>
          </Fragment>}
      </StateProvider>

      <br />

      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <Fragment>
            <FormField label={"World Population – maximumFractionDigits={0} - shouldFormatToLocaleString={true}"}>
              <NumberInput name={"world-population"} placeholder={"7,794,798,739"} formatProps={{
            shouldFormatToLocaleString: true
          }} onChange={e => setState({
            value: e.currentTarget.value
          })} value={state.value} />
            </FormField>

            <p>{\`event.currentTarget.value: \${state.value}\`}</p>
          </Fragment>}
      </StateProvider>
    </Fragment>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Number Input with locale",
  render: () => <Fragment>
      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <Fragment>
            <FormField label={'Budget (Locale) – maximumFractionDigits={4} - shouldFormatToLocaleString={true} - locale={"zh-Hans-CN-u-nu-hanidec"}'}>
              <NumberInput name={"world-population"} maximumFractionDigits={4} formatProps={{
            shouldFormatToLocaleString: true,
            locale: "zh-Hans-CN-u-nu-hanidec"
          }} onChange={e => setState({
            value: e.currentTarget.value
          })} value={state.value} />
            </FormField>

            <p>{\`event.currentTarget.value: \${state.value}\`}</p>
          </Fragment>}
      </StateProvider>

      <br />

      <StateProvider initialState={{
      value: ""
    }}>
        {(state, setState) => <Fragment>
            <FormField label={'Budget (Locale) – maximumFractionDigits={4} - shouldFormatToLocaleString={true} - locale={"tr"}'}>
              <NumberInput name={"world-population"} maximumFractionDigits={4} formatProps={{
            shouldFormatToLocaleString: true,
            locale: "tr"
          }} onChange={e => setState({
            value: e.currentTarget.value
          })} value={state.value} />
            </FormField>

            <p>{\`event.currentTarget.value: \${state.value}\`}</p>
          </Fragment>}
      </StateProvider>
    </Fragment>
}`,...B.parameters?.docs?.source}}}})))()}H();export{L as NumberInputStory,B as NumberInputWithLocale,R as NumberInputWithMaximumFractionDigit,z as NumberInputWithShouldFormatToLocaleString,V as __namedExportsOrder,I as default};