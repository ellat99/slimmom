"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[584],{8624:function(n,e,t){var i=t(9055),r=t(184);e.Z=function(n){var e=n.type,t=n.id,o=n.onClick,a=n.text,s=n.isOpen;return(0,r.jsx)(i.z,{type:e,id:t,onClick:o,minW:"181px",w:"min-content",py:"13px",px:"25px",open:s,background:"#FC842D",color:"#FFFFFF",boxShadow:"0px 4px 10px rgba(252, 132, 45, 0.5)",rounded:"30px",_hover:{background:"#c0580f"},children:a})}},5492:function(n,e,t){t.d(e,{Z:function(){return I}});var i,r,o,a,s,l,d,x=t(824),c=t(2831),p=t(8624),h=t(168),u=t(225),m=u.Z.form(i||(i=(0,h.Z)(["\n z-index:0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n\n  width: 100%;\n  padding-bottom: 41px;\n\n  @media screen and (min-width: 768px) {\n    align-items: start;\n\n    width: 512px;\n    padding-bottom: 48px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    align-items: end;\n    /* padding-bottom: 111px; */\n  }\n"]))),g=u.Z.h1(r||(r=(0,h.Z)(["\n  width: 100%;\n  margin-top: 72px;\n  margin-bottom: 10px;\n\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.44;\n\n  color: #212121;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin-top: 140px;\n    margin-bottom: 48px;\n\n    font-size: 34px;\n    line-height: 1.2;\n  }\n"]))),f=u.Z.p(o||(o=(0,h.Z)(["\n\n  margin-top: 5px;\n  margin-bottom: 8px;\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n\n  color: #fc842d;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 12px;\n  }\n"]))),b=u.Z.label(a||(a=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  @media screen and (min-width: 768px) {\n    gap: 4px;\n  }\n"]))),j=u.Z.input(s||(s=(0,h.Z)(["\n  /* display: none; */\n  position: absolute;\n  width: 0px;\n  height: 0px;\n\n  &&:checked ~ span {\n    font-weight: 700;\n\n    color: #fc842d;\n  }\n  &&:checked + div div {\n    background-color: #fc842d;\n  }\n"]))),y=u.Z.span(l||(l=(0,h.Z)(["\n  font-size: 14px;\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n\n  color: #9b9faa;\n  transition: color 300ms ease, font-size 300ms ease, font-weight 300ms ease;\n"]))),w=u.Z.div(d||(d=(0,h.Z)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50px;\n\n  background-color: transparent;\n\n  transition: background-color 300ms ease;\n"]))),v=t(2949),Z=t(6848),k=t(1463),F=t(3959),C="CalculatorAddProductForm_alert_box__ZY1oT",_="CalculatorAddProductForm_alert_title__dmR1c",E=t(184);function N(){return(0,E.jsxs)(v.b,{status:"error",className:C,position:"absolute",top:{xs:"calc(-100% - 30px)",md:"calc(-100% - 10px)"},left:{xs:"calc(100% - 30px)",md:"calc(100% + 5px)"},display:"flex",flexDirection:"column",gap:"4px",w:{xs:"100px",lg:"120px"},p:{xs:"5px",lg:"7px"},fontSize:{xs:"8px",lg:"10px"},background:"#ffffff",rounded:"10px",boxShadow:"0px 4px 10px rgba(252, 132, 45, 0.5)",children:[(0,E.jsxs)("div",{className:_,children:[(0,E.jsx)(Z.z,{m:"0"}),(0,E.jsx)(k.C,{lineHeight:"10px",m:"0",children:"Input fields are empty!"})]}),(0,E.jsx)(F.X,{lineHeight:"10px",fontSize:"8px",textAlign:"center",children:"Enter your details and try again."})]})}var S=t(2715);t(2791);function z(n){var e=n.text;return(0,E.jsx)(S.x,{fontSize:"8px",m:"0",position:"absolute",top:{xs:"48px",md:"63px"},color:"red",children:e})}function I(n){var e=n.handleSubmit,t=n.handleChange,i=n.handleInputBlur,r=n.renderAlert,o=n.showValidationInput,a=n.blurOnInput,s=n.dataUser,l=n.bloodTypeUser;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{children:"Calculate your daily calorie intake right now"}),(0,E.jsxs)(m,{onSubmit:e,children:[(0,E.jsxs)(x.xu,{display:"flex",gap:{md:"32px"},flexDirection:{xs:"column",md:"row"},width:{xs:"100%"},children:[(0,E.jsxs)(x.xu,{display:"flex",flexDirection:"column",gap:"10px",minWidth:{xs:"100%",md:"240px"},pb:{xs:"10px",md:"0px"},children:[(0,E.jsxs)(x.xu,{position:"relative",children:[(0,E.jsx)(c.Z,{labelName:"Height *",type:"number",name:"heightUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&o&&(0===s.height||null===s.height)&&(0,E.jsx)(z,{text:"Please, enter your height"}),o&&0!==s.height&&null!==s.height&&(s.height<140||s.height>220)&&(0,E.jsx)(z,{text:"The height must be between 140cm and 220cm."})]}),(0,E.jsxs)(x.xu,{position:"relative",children:[(0,E.jsx)(c.Z,{labelName:"Age *",type:"number",name:"ageUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&o&&(0===s.age||null===s.age)&&(0,E.jsx)(z,{text:"Please enter your age"}),o&&0!==s.age&&null!==s.age&&(s.age<16||s.age>120)&&(0,E.jsx)(z,{text:"The age should be between 16 years and 120 years."})]}),(0,E.jsxs)(x.xu,{position:"relative",children:[(0,E.jsx)(c.Z,{labelName:"Current weight *",type:"number",name:"currentWeightUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&o&&(0===s.weight||null===s.weight)&&(0,E.jsx)(z,{text:"Please enter your current weight"}),o&&0!==s.weight&&null!==s.weight&&(s.weight<40||s.weight>150)&&(0,E.jsx)(z,{text:"The current weight should be between 40kg and 150kg."})]})]}),(0,E.jsxs)(x.xu,{display:"flex",flexDirection:"column",gap:"10px",minWidth:{xs:"100%",md:"240px"},children:[(0,E.jsxs)(x.xu,{position:"relative",children:[(0,E.jsx)(c.Z,{labelName:"Desired weight *",type:"number",name:"desiredWeightUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&o&&(0===s.desiredWeight||null===s.desiredWeight)&&(0,E.jsx)(z,{text:"Please enter your desired weight"}),o&&0!==s.desiredWeight&&null!==s.desiredWeight&&(s.desiredWeight<40||s.desiredWeight>150)&&(0,E.jsx)(z,{text:"The desired weight should be between 40kg and 150kg."})]}),(0,E.jsxs)(x.xu,{children:[(0,E.jsx)(f,{children:"Blood type *"}),(0,E.jsxs)(x.xu,{display:"flex",gap:{xs:"24px",md:"28px"},children:[(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"1",checked:1===l,onChange:t}),(0,E.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,E.jsx)(w,{})}),(0,E.jsx)(y,{children:"1"})]}),(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"2",onChange:t,checked:2===l}),(0,E.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,E.jsx)(w,{})}),(0,E.jsx)(y,{children:"2"})]}),(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"3",onChange:t,checked:3===l}),(0,E.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,E.jsx)(w,{})}),(0,E.jsx)(y,{children:"3"})]}),(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"4",onChange:t,checked:4===l}),(0,E.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,E.jsx)(w,{})}),(0,E.jsx)(y,{children:"4"})]})]})]})]})]}),(0,E.jsxs)(x.xu,{position:"relative",children:[(0,E.jsx)(p.Z,{type:"submit",text:"Start losing weight"}),r&&(0,E.jsx)(N,{})]})]})]})}},2831:function(n,e,t){t.d(e,{Z:function(){return m}});var i,r,o,a=t(1413),s=t(5987),l=t(168),d=t(225),x=d.Z.label(i||(i=(0,l.Z)(["\n  display: block;\n  position: relative;\n  height: 46px;\n\n  &:focus-within span {\n    bottom: 25px;\n\n    font-size: 12px;\n    color: #fc842d;\n\n    @media screen and (min-width: 768px) {\n      bottom: 32px;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    height: 60px;\n  }\n"]))),c=d.Z.span(r||(r=(0,l.Z)(["\n  position: absolute;\n  bottom: 8px;\n\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n\n  color: #9b9faa;\n\n  transition: bottom 300ms ease, color 300ms ease, font-size 300ms ease;\n  z-index: 10;\n  @media screen and (min-width: 768px) {\n    bottom: 20px;\n  }\n"]))),p=d.Z.input(o||(o=(0,l.Z)(["\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  /* padding-bottom: 0px; */\n\n  letter-spacing: 0.04em;\n\n  border-bottom: 1px solid #e0e0e0;\n\n  transition: border-color 300ms ease;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 5px;\n  }\n\n  &:focus-within {\n    border-bottom: 1px solid #fc842d;\n    outline: none;\n  }\n\n  &:not(:placeholder-shown) {\n    border-bottom: 1px solid #fc842d;\n  }\n\n  &:not(:placeholder-shown) ~ span {\n    bottom: 25px;\n    color: #fc842d;\n\n    font-size: 12px;\n    @media screen and (min-width: 768px) {\n      bottom: 32px;\n    }\n  }\n"]))),h=t(184),u=["labelName","handlerEvent","width","right"];function m(n){var e=n.labelName,t=n.handlerEvent,i=n.width,r=n.right,o=(0,s.Z)(n,u);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(x,{style:i={width:i},children:[(0,h.jsx)(p,(0,a.Z)((0,a.Z)({onChange:t},o),{},{placeholder:" "})),(0,h.jsx)(c,{style:{right:r},children:e})]})})}},1584:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var i=t(9439),r=t(2791),o=t(4420),a=t(7872),s=t(1413),l=t(5987),d=t(990),x=t(6992),c=t(1665),p=t(5597),h=t(9669),u=t(3791),m=t(6874),g=t(184),f=["unmountOnExit","in","className","transition","transitionEnd","delay"],b={enter:function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.transition,i=e.transitionEnd,r=e.delay;return{opacity:1,transition:null!=(n=null==t?void 0:t.enter)?n:h.p$.enter(h.Sh.enter,r),transitionEnd:null==i?void 0:i.enter}},exit:function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.transition,i=e.transitionEnd,r=e.delay;return{opacity:0,transition:null!=(n=null==t?void 0:t.exit)?n:h.p$.exit(h.Sh.exit,r),transitionEnd:null==i?void 0:i.exit}}},j={initial:"exit",animate:"enter",exit:"exit",variants:b};(0,r.forwardRef)((function(n,e){var t=n.unmountOnExit,i=n.in,r=n.className,o=n.transition,a=n.transitionEnd,d=n.delay,c=(0,l.Z)(n,f),p=i||t?"enter":"exit",h=!t||i&&t,b={transition:o,transitionEnd:a,delay:d};return(0,g.jsx)(u.M,{custom:b,children:h&&(0,g.jsx)(m.E.div,(0,s.Z)((0,s.Z)({ref:e,className:(0,x.cx)("chakra-fade",r),custom:b},j),{},{animate:p},c))})})).displayName="Fade";var y=["className","transition","motionProps"],w=(0,c.m)(m.E.div),v=(0,p.G)((function(n,e){var t=n.className,i=(n.transition,n.motionProps),r=(0,l.Z)(n,y),o=(0,x.cx)("chakra-modal__overlay",t),a=(0,d.I_)(),c=(0,s.Z)({pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh"},a.overlay),p=(0,d.vR)().motionPreset,h=i||("none"===p?{}:j);return(0,g.jsx)(w,(0,s.Z)((0,s.Z)({},h),{},{__css:c,ref:e,className:o},r))}));v.displayName="ModalOverlay";var Z=t(1022),k=t(1087),F=t(4883),C=t(824),_=t(3080),E=t(5473),N=t(4934),S=["onClick","className"],z=(0,p.G)((function(n,e){var t=n.onClick,i=n.className,r=(0,l.Z)(n,S),o=(0,d.vR)().onClose,a=(0,x.cx)("chakra-modal__close-btn",i),c=(0,d.I_)();return(0,g.jsx)(N.P,(0,s.Z)({ref:e,__css:c.closeButton,className:a,onClick:(0,x.v0)(t,(function(n){n.stopPropagation(),o()}))},r))}));z.displayName="ModalCloseButton";var I=t(6241),U=t(2715),O=t(8675),W=["className"],R=(0,p.G)((function(n,e){var t=n.className,i=(0,l.Z)(n,W),r=(0,x.cx)("chakra-modal__footer",t),o=(0,d.I_)(),a=(0,s.Z)({display:"flex",alignItems:"center",justifyContent:"flex-end"},o.footer);return(0,g.jsx)(c.m.footer,(0,s.Z)((0,s.Z)({ref:e},i),{},{__css:a,className:r}))}));R.displayName="ModalFooter";var T,P,A,B,D=t(8624),V=t(8327),M=t(5948),G=t(168),H=t(225),L=H.Z.ul(T||(T=(0,G.Z)(["\ndisplay:none;\n  width: 100%;\n  height: 150px;\n\n  color: #9b9faa;\n  overflow: hidden;\n  overflow-y: scroll;\n  &&::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  &&::-webkit-scrollbar-track {\n    background: #f0f1f3;\n  }\n\n  &&::-webkit-scrollbar-thumb {\n    background: #264061;\n  }\n\n  &&::-webkit-scrollbar-thumb:hover {\n    background: #101a28;\n  }\n"]))),Y=H.Z.div(P||(P=(0,G.Z)(["\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 20px;\n\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.1) 0%,\n    #ffffff 100%\n  );\n"]))),$=H.Z.div(A||(A=(0,G.Z)(["\n  position: absolute;\n  top: 56px;\n\n  width: 100%;\n  height: 15px;\n\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, #ffffff 100%);\n"]))),q=t(7689),X=t(4928),J=t(854),K=function(n){var e=n.overlay,t=n.isOpen,i=n.onClose,r=(0,o.v9)(M.vO),a=(0,o.v9)(M.Vc),s=(0,o.v9)(M.U6),l=(0,q.s0)(),x=(0,o.I0)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(d.u_,{isOpen:t,onClose:i,isCentered:!0,size:{xs:"full",md:"2xl"},children:[e,(0,g.jsxs)(F.h,{children:[(0,g.jsxs)(C.xu,{display:"flex",justifyContent:"space-between",alignItems:"center",p:"20px",children:[(0,g.jsx)(V.Z,{}),(0,g.jsxs)(C.xu,{display:{md:"none"},children:[(0,g.jsx)(_.r,{_hover:{textDecor:"none"},fontFamily:"-moz-initial",fontSize:"14px",as:k.OL,to:"/login",mr:"16px",children:"SIGIN IN"}),(0,g.jsx)(_.r,{_hover:{textDecor:"none"},fontFamily:"-moz-initial",fontSize:"14px",as:k.OL,to:"/registration",children:"REGISTRATION"})]})]}),t&&(0,g.jsx)(X.Z,{onClick:i}),(0,g.jsx)(C.xu,{maxW:"409px",mx:"auto",children:(0,g.jsx)(E.x,{fontSize:"26px",textAlign:"center",children:"Your recommended daily calorie intake is"})}),(0,g.jsx)(z,{size:"sm",display:{xs:"none",md:"block"}}),(0,g.jsx)(I.f,{h:"100%",children:(0,g.jsx)(C.xu,{minH:"279px",children:a?(0,g.jsx)(C.xu,{display:"flex",justifyContent:"center",alignItems:"center",minH:"279px",w:"100%",children:(0,g.jsx)(J.Z,{height:20,width:20})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(C.xu,{display:"flex",justifyContent:"center",children:(0,g.jsxs)(U.x,{as:"b",fontSize:"48px",display:"flex",alignItems:"baseline",justifyContent:"center",color:"#264061",children:[r,(0,g.jsx)(U.x,{fontSize:"24px",ml:"1",children:"kcal"})]})}),(0,g.jsx)(O.i,{w:{xs:"none",md:"330px"},mx:"auto"}),(0,g.jsxs)(C.xu,{position:"relative",w:{xs:"none",md:"330px"},mx:"auto",display:"flex",flexDirection:"column",alignItems:"start",children:[(0,g.jsx)(U.x,{as:"h3",color:"#212121",textAlign:"center",w:"100%",mt:"12px",mb:"20px",children:"Foods you should not eat"}),(0,g.jsx)($,{}),(0,g.jsx)(L,{display:"none",children:s.map((function(n,e){return(0,g.jsxs)("li",{children:[e+1,". ",n]},e)}))}),(0,g.jsx)(Y,{})]})]})})}),(0,g.jsx)(R,{display:"flex",justifyContent:"center",mb:"81px",children:(0,g.jsx)(D.Z,{text:"Start losing weight",onClick:function(){l("/registration"),x((0,M.vO)(null))}})})]})]})})},Q=t(5492),nn=t(1795),en=t(5289),tn=H.Z.div(B||(B=(0,G.Z)(["\n  @media screen and (min-width: 768px) {\n    position: fixed;\n    top: 0;\n    right: 0;\n    z-index: -1;\n\n    width: 100vw;\n    height: 100vh;\n\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: right bottom;\n    background-size: contain;\n  }\n\n  @media screen and (min-width: 1280px) {\n    background-image: url(",");\n\n  }\n"])),en,nn),rn=t(341),on=function(){var n=(0,o.I0)(),e=function(){return(0,g.jsx)(v,{bg:"blackAlpha.300",backdropFilter:"blur(10px) hue-rotate(90deg)"})},t=(0,r.useState)((0,g.jsx)(e,{})),s=(0,i.Z)(t,2),l=s[0],d=s[1],x=(0,Z.q)(),c=x.isOpen,p=x.onOpen,h=x.onClose,u=(0,r.useState)(null),m=(0,i.Z)(u,2),f=m[0],b=m[1],j=(0,r.useState)(null),y=(0,i.Z)(j,2),w=y[0],k=y[1],F=(0,r.useState)(null),C=(0,i.Z)(F,2),_=C[0],E=C[1],N=(0,r.useState)(null),S=(0,i.Z)(N,2),z=S[0],I=S[1],U=(0,r.useState)(1),O=(0,i.Z)(U,2),W=O[0],R=O[1],T=(0,r.useState)(!1),P=(0,i.Z)(T,2),A=P[0],B=P[1],D=(0,r.useState)(!1),V=(0,i.Z)(D,2),M=V[0],G=V[1],H=(0,r.useState)(!1),L=(0,i.Z)(H,2),Y=L[0],$=L[1],q={weight:_,height:f,age:w,desiredWeight:z,bloodType:W};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(tn,{}),(0,g.jsx)(Q.Z,{handleSubmit:function(t){if(t.preventDefault(),G(!0),$(!0),B(!1),Object.values(q).some((function(n){return 0===n||null===n})))return B(!0),void setTimeout((function(){B(!1)}),3500);f<140||f>220||w<16||w>120||_<40||_>150||z<40||z>150||(n((0,rn.VW)(q)),n((0,a.sW)(q)),d((0,g.jsx)(e,{})),p())},handleChange:function(n){var e=n.target.name,t=Number(n.target.value);switch(B(!1),e){case"heightUser":b(t);break;case"ageUser":k(t);break;case"currentWeightUser":E(t);break;case"desiredWeightUser":I(t);break;case"bloodTypeUser":R(t)}},handleInputBlur:function(){$(!1)},bloodTypeUser:W,renderAlert:A,showValidationInput:M,blurOnInput:Y,dataUser:q}),(0,g.jsx)(K,{overlay:l,isOpen:c,onClose:h})]})}},5948:function(n,e,t){t.d(e,{U6:function(){return r},Vc:function(){return s},_3:function(){return a},g4:function(){return o},vO:function(){return i}});var i=function(n){return n.dailyRate.dailyRate},r=function(n){return n.dailyRate.notAllowedProducts},o=function(n){return n.dailyRate.summaries},a=function(n){return n.dailyRate.currentDate},s=function(n){return n.dailyRate.loading}},1795:function(n,e,t){n.exports=t.p+"static/media/desktopMainBg.7d6024134020ef14c78a.png"},5289:function(n,e,t){n.exports=t.p+"static/media/tabletMainBg.6d52e5c9ba4340bdc1b0.png"}}]);
//# sourceMappingURL=584.8ab0b074.chunk.js.map