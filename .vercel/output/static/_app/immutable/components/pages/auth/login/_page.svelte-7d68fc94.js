import{S as K,i as X,s as Y,k as n,q as A,a as I,l as i,m as p,r as P,h as u,c as L,n as e,b as Z,D as t,V as x,O as $,W as ee,B as J,Q as te}from"../../../../chunks/index-051b0af1.js";import{g as ae}from"../../../../chunks/navigation-32dd3d19.js";import{A as se}from"../../../../chunks/Auth-6e4c2b4f.js";function le(v){let c,m,l,h,a,f,_,D,E,S,V,b,q,B,o,T,g,N,O,s,U,w,k,H,C;return{c(){c=n("div"),m=n("div"),l=n("div"),h=n("form"),a=n("div"),f=n("h1"),_=A("Log in"),D=I(),E=n("h4"),S=A("Sign in to my demo app"),V=I(),b=n("label"),q=A("Email Address"),B=I(),o=n("input"),T=I(),g=n("label"),N=A("Password"),O=I(),s=n("input"),U=I(),w=n("button"),k=A("Log In"),this.h()},l(d){c=i(d,"DIV",{class:!0});var y=p(c);m=i(y,"DIV",{class:!0});var F=p(m);l=i(F,"DIV",{class:!0});var M=p(l);h=i(M,"FORM",{class:!0});var Q=p(h);a=i(Q,"DIV",{class:!0});var r=p(a);f=i(r,"H1",{class:!0});var R=p(f);_=P(R,"Log in"),R.forEach(u),D=L(r),E=i(r,"H4",{class:!0});var W=p(E);S=P(W,"Sign in to my demo app"),W.forEach(u),V=L(r),b=i(r,"LABEL",{class:!0,for:!0});var j=p(b);q=P(j,"Email Address"),j.forEach(u),B=L(r),o=i(r,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,autocomplete:!0}),T=L(r),g=i(r,"LABEL",{class:!0,for:!0});var z=p(g);N=P(z,"Password"),z.forEach(u),O=L(r),s=i(r,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,autocomplete:!0,minlength:!0,maxlength:!0}),U=L(r),w=i(r,"BUTTON",{class:!0,type:!0});var G=p(w);k=P(G,"Log In"),G.forEach(u),r.forEach(u),Q.forEach(u),M.forEach(u),F.forEach(u),y.forEach(u),this.h()},h(){e(f,"class","text-4xl font-bold m-4 text-primary-content"),e(E,"class","m-2 text-primary-focus"),e(b,"class","label"),e(b,"for","email"),e(o,"class","input input-bordered input-lg w-96"),e(o,"type","email"),e(o,"name","email"),e(o,"placeholder","Email"),o.required=!0,e(o,"autocomplete","email"),e(g,"class","label"),e(g,"for","password"),e(s,"class","input input-bordered input-lg w-96"),e(s,"type","password"),e(s,"name","password"),e(s,"placeholder","Password"),s.required=!0,e(s,"autocomplete","password"),e(s,"minlength","8"),e(s,"maxlength","80"),e(w,"class","btn btn-primary btn-lg mt-8"),e(w,"type","submit"),e(a,"class","form-control"),e(h,"class","card-body"),e(l,"class","card shadow-xl bg-slate-400"),e(m,"class","hero-content text-center"),e(c,"class","hero min-h-screen bg-base-200")},m(d,y){Z(d,c,y),t(c,m),t(m,l),t(l,h),t(h,a),t(a,f),t(f,_),t(a,D),t(a,E),t(E,S),t(a,V),t(a,b),t(b,q),t(a,B),t(a,o),x(o,v[0].email),t(a,T),t(a,g),t(g,N),t(a,O),t(a,s),x(s,v[0].password),t(a,U),t(a,w),t(w,k),H||(C=[$(o,"input",v[2]),$(s,"input",v[3]),$(h,"submit",ee(v[1]))],H=!0)},p(d,[y]){y&1&&o.value!==d[0].email&&x(o,d[0].email),y&1&&s.value!==d[0].password&&x(s,d[0].password)},i:J,o:J,d(d){d&&u(c),H=!1,te(C)}}}function re(v,c,m){const l={email:"",password:""},h=async()=>{try{const _=await se.signIn(l.email,l.password);console.log("Login appears to have worked...",_),ae("/avatars")}catch(_){console.log(_)}};function a(){l.email=this.value,m(0,l)}function f(){l.password=this.value,m(0,l)}return[l,h,a,f]}class ue extends K{constructor(c){super(),X(this,c,re,le,Y,{})}}export{ue as default};
