(this.webpackJsonptwain=this.webpackJsonptwain||[]).push([[0],{89:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(1),r=n.n(c),s=n(31),i=n.n(s),o=n(17),l=n.n(o),j=n(22),u=n(14),d=n(67),b=(n(83),d.a.initializeApp({apiKey:"AIzaSyA47WLJAi0wOetRZjrwjrhh1mA-Mg-GEg8",authDomain:"twain-e482e.firebaseapp.com",projectId:"twain-e482e",storageBucket:"twain-e482e.appspot.com",messagingSenderId:"170611662014",appId:"1:170611662014:web:40817da3b18789761a12ef",measurementId:"G-85YSKZ7M1P"}).auth()),h=d.a,p=r.a.createContext();function O(){return Object(c.useContext)(p)}function x(e){var t=e.children,n=Object(c.useState)(),r=Object(u.a)(n,2),s=r[0],i=r[1];function o(){return d.apply(this,arguments)}function d(){return(d=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.setPersistence(h.auth.Auth.Persistence.SESSION);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),t=e.t0.message,console.log("in setPersistence "+t);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function O(){return(O=Object(j.a)(l.a.mark((function e(t,n,a){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o();case 3:return e.next=5,b.signInWithEmailAndPassword(t,n);case 5:console.log("sign-in complete"),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),c=e.t0.message,a(c),console.log("in login"+c);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){i(e)}))}),[]);var x={currentUser:s,signup:function(e,t,n){return b.createUserWithEmailAndPassword(e,t).catch((function(e){var t=e.message;n(t)}))},login:function(e,t,n){return O.apply(this,arguments)},logout:function(){return b.signOut()},resetPassword:function(e,t){return b.sendPasswordResetEmail(e).catch((function(e){var n=e.message;t(n)}))},updateEmail:function(e,t){s.updateEmail(e).catch((function(e){var n=e.message;t(n)}))},updatePassword:function(e,t){s.updatePassword(e).catch((function(e){var n=e.message;t(n)}))}};return Object(a.jsx)(p.Provider,{value:x,children:t})}var f=n(21),m=n(16),v=n.p+"static/media/logo.9fbe981f.png",w=n(71),g=n(98),y=n(106),S=n(97),k=n(103),C=n(72);n(51);function N(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),s=O().signup,i=Object(c.useState)(""),o=Object(u.a)(i,2),d=o[0],b=o[1],h=Object(c.useState)(!1),p=Object(u.a)(h,2),x=p[0],m=p[1],v=function(e){b(e)};function w(){return(w=Object(j.a)(l.a.mark((function a(c){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),n.current.value===r.current.value){a.next=3;break}return a.abrupt("return",b("Passwords do not match"));case 3:return a.prev=3,b(""),m(!0),a.next=8,s(t.current.value,n.current.value,v);case 8:e.onSwitch("login"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),b(d);case 14:m(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(a.jsx)("div",{children:Object(a.jsxs)(y.a,{className:"p-2 shadow",children:[Object(a.jsxs)(y.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),d&&Object(a.jsx)(S.a,{variant:"danger",children:d}),Object(a.jsxs)(k.a,{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(a.jsxs)(k.a.Group,{id:"email",children:[Object(a.jsx)(k.a.Label,{children:"Email"}),Object(a.jsx)(k.a.Control,{type:"email",ref:t,required:!0})]}),Object(a.jsxs)(k.a.Group,{id:"password",children:[Object(a.jsx)(k.a.Label,{children:"Password"}),Object(a.jsx)(k.a.Control,{type:"password",ref:n,required:!0})]}),Object(a.jsxs)(k.a.Group,{id:"password-confrim",children:[Object(a.jsx)(k.a.Label,{children:"Password Confrimation"}),Object(a.jsx)(k.a.Control,{type:"password",ref:r,required:!0})]}),Object(a.jsx)(C.a,{disable:x,className:"w-100",type:"submit",children:"Sign Up"})]})]}),Object(a.jsxs)("div",{className:"w-100 text-center mb-2",children:["Already have an account?",Object(a.jsx)(f.b,{to:"/twain",onClick:function(){e.onSwitch("login")},children:"Log In"})]})]})})}n(89);function P(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=O().login,s=Object(c.useState)(""),i=Object(u.a)(s,2),o=i[0],d=i[1],b=Object(c.useState)(!1),h=Object(u.a)(b,2),p=h[0],x=h[1],v=Object(m.g)(),w=function(e){d(e)};function g(){return(g=Object(j.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,d(""),x(!0),e.next=6,r(t.current.value,n.current.value,w);case 6:v.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),d(o);case 12:x(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(a.jsx)("div",{children:Object(a.jsxs)(y.a,{className:"p-2 shadow",children:[Object(a.jsxs)(y.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),o&&Object(a.jsx)(S.a,{variant:"danger",children:o}),Object(a.jsxs)(k.a,{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(a.jsxs)(k.a.Group,{id:"email",children:[Object(a.jsx)(k.a.Label,{children:"Email"}),Object(a.jsx)(k.a.Control,{type:"email",ref:t,required:!0})]}),Object(a.jsxs)(k.a.Group,{id:"password",children:[Object(a.jsx)(k.a.Label,{children:"Password"}),Object(a.jsx)(k.a.Control,{type:"password",ref:n,required:!0})]}),Object(a.jsx)(C.a,{disable:p,className:"w-100",type:"submit",children:"Log In"})]})]}),Object(a.jsxs)("div",{className:"w-100 text-center ",children:["Don't have an account?"," ",Object(a.jsx)(f.b,{to:"/twain",onClick:function(){e.onSwitch("signup")},children:"Sign up"})]}),Object(a.jsx)("div",{className:"w-100 text-center mb-2",children:Object(a.jsx)(f.b,{to:"/twain",onClick:function(){e.onSwitch("forgotpassword")},children:"Forgot Password?"})})]})})}function L(e){var t=Object(c.useRef)(),n=O().resetPassword,r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)(!1),b=Object(u.a)(d,2),h=b[0],p=b[1],x=Object(c.useState)(""),m=Object(u.a)(x,2),v=m[0],w=m[1],g=function(e){o(e)};function N(){return(N=Object(j.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,w(""),o(""),p(!0),e.next=7,n(t.current.value,g);case 7:w("Check your inbox for further information"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),o(i);case 13:p(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(a.jsx)("div",{children:Object(a.jsxs)(y.a,{className:"p-2 shadow",children:[Object(a.jsxs)(y.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),i&&Object(a.jsx)(S.a,{variant:"danger",children:i}),v&&Object(a.jsx)(S.a,{variant:"success",children:v}),Object(a.jsxs)(k.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(a.jsxs)(k.a.Group,{id:"email",children:[Object(a.jsx)(k.a.Label,{children:"Email"}),Object(a.jsx)(k.a.Control,{type:"email",ref:t,required:!0})]}),Object(a.jsx)(C.a,{disable:h,className:"w-100",type:"submit",children:"Reset Password"})]})]}),Object(a.jsx)("div",{className:"w-100 text-center mb-2",children:Object(a.jsx)(f.b,{to:"/twain",onClick:function(){e.onSwitch("login")},children:"Back to Log in"})})]})})}function R(){var e=function(e){s(e)},t=Object(c.useState)("signup"),n=Object(u.a)(t,2),r=n[0],s=n[1];return Object(a.jsxs)("div",{className:"row justify-content-center align-items-center",style:{backgroundColor:"#FDF4F1",height:"100vh"},children:[Object(a.jsx)(w.a,{md:5,children:Object(a.jsx)(g.a,{src:v,className:"mx-auto d-block Logo",alt:"Logo",fluid:!0})}),Object(a.jsxs)(w.a,{md:{span:5,offset:1},className:"Signup p-4",children:["signup"===r&&Object(a.jsx)(N,{onSwitch:e}),"login"===r&&Object(a.jsx)(P,{onSwitch:e}),"forgotpassword"===r&&Object(a.jsx)(L,{onSwitch:e})]})]})}var E=n(104),B=n(105),F=n(101),G=n.p+"static/media/logo.128cc170.svg";function I(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),r=n[0],s=n[1],i=O().logout,o=Object(m.g)();function d(){return(d=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),e.prev=1,e.next=4,i();case 4:console.log(r),o.push("/twain"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s("Failed to log out");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(a.jsxs)(E.a,{bg:"light",expand:"lg",sticky:"top",children:[Object(a.jsx)(E.a.Brand,{href:"",onClick:function(){e.onSceneSwitch("visionboard")},children:Object(a.jsx)("img",{src:G,width:"60",height:"30",className:"d-inline-block align-top ml-2\t",alt:"Twain logo"})}),Object(a.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(E.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsx)(B.a,{className:"ml-auto",children:Object(a.jsxs)(F.a,{drop:"left",title:"User",children:[Object(a.jsx)(F.a.Item,{href:"",onClick:function(){return d.apply(this,arguments)},children:"Log Out"}),Object(a.jsx)(F.a.Item,{href:"",onClick:function(){e.onSceneSwitch("updatepassword")},children:"Change Password"})]})})})]})}var A=n(102),U=n(46),q=n(100),D=n(99);var H=function(e){return Object(a.jsx)(y.a,{className:"p-2 rounded-pill",children:Object(a.jsxs)(y.a.Body,{className:"d-flex p-2 align-items-center",style:{justifyContent:"space-between"},children:[e.plan.title,Object(a.jsx)(D.a,{pill:!0,variant:"secondary",children:e.plan.catagory})]})})};n(91);function J(){var e=O().currentUser,t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=e.uid;h.database().ref("visionboard/"+t).on("value",(function(e){var t=e.val();console.log(t);var n=[];for(var a in t)n.push(Object(U.a)({id:a},t[a]));s(n)}))}),[]),console.log(r),Object(a.jsx)(q.a,{className:"mt-5 PlanList",children:r?r.map((function(e){return Object(a.jsx)(H,{plan:e},e.id)})):""})}function T(){var e=O().currentUser,t=Object(c.useState)(!1),n=Object(u.a)(t,2),r=n[0],s=n[1],i=function(){return s(!1)},o=Object(c.useRef)(),l=Object(c.useRef)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(k.a,{className:"col-md-6 mx-auto mt-5",children:Object(a.jsx)(k.a.Control,{size:"lg",type:"text",onClick:function(){return s(!0)},className:"rounded-pill",placeholder:"Any new idea ? Jog it down!"})}),Object(a.jsx)(J,{}),Object(a.jsxs)(A.a,{show:r,onHide:i,children:[Object(a.jsx)(A.a.Header,{closeButton:!0,children:Object(a.jsx)(A.a.Title,{children:"New Plan"})}),Object(a.jsx)(A.a.Body,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsxs)(k.a.Group,{children:[Object(a.jsx)(k.a.Label,{children:"Plan"}),Object(a.jsx)(k.a.Control,{name:"title",ref:o,type:"text",placeholder:"What's your plan",required:!0})]}),Object(a.jsxs)(k.a.Group,{children:[Object(a.jsx)(k.a.Label,{children:"Category"}),Object(a.jsxs)(k.a.Control,{as:"select",ref:l,required:!0,children:[Object(a.jsx)("option",{value:"Health",children:"Health,Fitness and Beauty"}),Object(a.jsx)("option",{value:"Romance",children:"Family,Friends and Romance"}),Object(a.jsx)("option",{value:"Career",children:"Career,Bussiness and Study"}),Object(a.jsx)("option",{value:"Financial",children:"Financial"}),Object(a.jsx)("option",{value:"Recreation",children:"Fun, Recreation and Travel"})]})]})]})}),Object(a.jsxs)(A.a.Footer,{children:[Object(a.jsx)(C.a,{variant:"secondary",onClick:i,children:"Close"}),Object(a.jsx)(C.a,{variant:"primary",onClick:function(t){t.preventDefault();var n=e.uid,a=h.database().ref("visionboard/"+n),c={title:o.current.value,catagory:l.current.value};a.push(c),i()},children:"Submit"})]})]})]})}function W(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),s=O(),i=s.currentUser,o=s.updatePassword,d=s.updateEmail,b=Object(c.useState)(""),h=Object(u.a)(b,2),p=h[0],x=h[1],m=Object(c.useState)(!1),v=Object(u.a)(m,2),w=v[0],g=v[1],N=function(e){x(e)};function P(){return(P=Object(j.a)(l.a.mark((function a(c){var s;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),n.current.value===r.current.value){a.next=3;break}return a.abrupt("return",x("Passwords do not match"));case 3:s=[],x(""),g(!0),t.current.value!==i.email&&s.push(d(t.current.value)),n.current.value,N&&s.push(o(n.current.value,N)),Promise.all(s).then((function(){e.onSceneSwitch("visionboard")})).catch((function(){x(p)})).finally((function(){x(""),g(!0)}));case 9:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(a.jsx)(q.a,{className:"d-flex justify-content-center align-items-center",children:Object(a.jsxs)(y.a,{className:"p-2 shadow col-md-5 m-5",children:[Object(a.jsxs)(y.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Change Password"}),p&&Object(a.jsx)(S.a,{variant:"danger",children:p}),Object(a.jsxs)(k.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(a.jsxs)(k.a.Group,{id:"email",children:[Object(a.jsx)(k.a.Label,{children:"Email"}),Object(a.jsx)(k.a.Control,{type:"email",ref:t,defaultValue:i.email})]}),Object(a.jsxs)(k.a.Group,{id:"password",children:[Object(a.jsx)(k.a.Label,{children:"Password"}),Object(a.jsx)(k.a.Control,{type:"password",ref:n,placeholder:"Leave blank to keep the same"})]}),Object(a.jsxs)(k.a.Group,{id:"password-confrim",children:[Object(a.jsx)(k.a.Label,{children:"Password Confrimation"}),Object(a.jsx)(k.a.Control,{type:"password",ref:r,required:!0,placeholder:"Leave blank to keep the same"})]}),Object(a.jsx)(C.a,{disable:w,className:"w-100",type:"submit",children:"Update"})]})]}),Object(a.jsx)("div",{className:"w-100 text-center mb-2",children:Object(a.jsx)(f.b,{to:"/",onClick:function(){e.onSceneSwitch("visionboard")},children:"Cancel"})})]})})}function z(){var e=Object(c.useState)("visionboard"),t=Object(u.a)(e,2),n=t[0],r=t[1],s=function(e){r(e)};return Object(a.jsxs)("div",{style:{height:"100vh"},children:[Object(a.jsx)(I,{onSceneSwitch:s}),"visionboard"===n&&Object(a.jsx)(T,{}),"updatepassword"===n&&Object(a.jsx)(W,{onSceneSwitch:s})]})}var M=n(74);function K(e){var t=e.component,n=Object(M.a)(e,["component"]),c=O().currentUser;return Object(a.jsx)(m.b,Object(U.a)(Object(U.a)({},n),{},{render:function(e){return c?Object(a.jsx)(t,Object(U.a)({},e)):Object(a.jsx)(m.a,{to:"/twain"})}}))}var Z=function(){return Object(a.jsx)(f.a,{children:Object(a.jsx)(x,{children:Object(a.jsxs)(m.d,{children:[Object(a.jsx)(K,{exact:!0,path:"/",component:z}),Object(a.jsx)(m.b,{path:"/twain",component:R})]})})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.f1e3bfad.chunk.js.map