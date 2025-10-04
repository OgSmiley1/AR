(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xh={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function vy(){if(Xv)return El;Xv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:d,ref:l!==void 0?l:null,props:c}}return El.Fragment=t,El.jsx=i,El.jsxs=i,El}var jv;function _y(){return jv||(jv=1,Xh.exports=vy()),Xh.exports}var Tt=_y(),jh={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function xy(){if(Wv)return De;Wv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,P={};function b(I,rt,bt){this.props=I,this.context=rt,this.refs=P,this.updater=bt||A}b.prototype.isReactComponent={},b.prototype.setState=function(I,rt){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,rt,"setState")},b.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function y(){}y.prototype=b.prototype;function Z(I,rt,bt){this.props=I,this.context=rt,this.refs=P,this.updater=bt||A}var X=Z.prototype=new y;X.constructor=Z,D(X,b.prototype),X.isPureReactComponent=!0;var z=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},Q=Object.prototype.hasOwnProperty;function K(I,rt,bt,Mt,Nt,jt){return bt=jt.ref,{$$typeof:s,type:I,key:rt,ref:bt!==void 0?bt:null,props:jt}}function W(I,rt){return K(I.type,rt,void 0,void 0,void 0,I.props)}function O(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function T(I){var rt={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(bt){return rt[bt]})}var L=/\/+/g;function J(I,rt){return typeof I=="object"&&I!==null&&I.key!=null?T(""+I.key):rt.toString(36)}function nt(){}function dt(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(nt,nt):(I.status="pending",I.then(function(rt){I.status==="pending"&&(I.status="fulfilled",I.value=rt)},function(rt){I.status==="pending"&&(I.status="rejected",I.reason=rt)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function ot(I,rt,bt,Mt,Nt){var jt=typeof I;(jt==="undefined"||jt==="boolean")&&(I=null);var ct=!1;if(I===null)ct=!0;else switch(jt){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(I.$$typeof){case s:case t:ct=!0;break;case _:return ct=I._init,ot(ct(I._payload),rt,bt,Mt,Nt)}}if(ct)return Nt=Nt(I),ct=Mt===""?"."+J(I,0):Mt,z(Nt)?(bt="",ct!=null&&(bt=ct.replace(L,"$&/")+"/"),ot(Nt,rt,bt,"",function(re){return re})):Nt!=null&&(O(Nt)&&(Nt=W(Nt,bt+(Nt.key==null||I&&I.key===Nt.key?"":(""+Nt.key).replace(L,"$&/")+"/")+ct)),rt.push(Nt)),1;ct=0;var St=Mt===""?".":Mt+":";if(z(I))for(var It=0;It<I.length;It++)Mt=I[It],jt=St+J(Mt,It),ct+=ot(Mt,rt,bt,jt,Nt);else if(It=M(I),typeof It=="function")for(I=It.call(I),It=0;!(Mt=I.next()).done;)Mt=Mt.value,jt=St+J(Mt,It++),ct+=ot(Mt,rt,bt,jt,Nt);else if(jt==="object"){if(typeof I.then=="function")return ot(dt(I),rt,bt,Mt,Nt);throw rt=String(I),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function N(I,rt,bt){if(I==null)return I;var Mt=[],Nt=0;return ot(I,Mt,"","",function(jt){return rt.call(bt,jt,Nt++)}),Mt}function H(I){if(I._status===-1){var rt=I._result;rt=rt(),rt.then(function(bt){(I._status===0||I._status===-1)&&(I._status=1,I._result=bt)},function(bt){(I._status===0||I._status===-1)&&(I._status=2,I._result=bt)}),I._status===-1&&(I._status=0,I._result=rt)}if(I._status===1)return I._result.default;throw I._result}var B=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function lt(){}return De.Children={map:N,forEach:function(I,rt,bt){N(I,function(){rt.apply(this,arguments)},bt)},count:function(I){var rt=0;return N(I,function(){rt++}),rt},toArray:function(I){return N(I,function(rt){return rt})||[]},only:function(I){if(!O(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},De.Component=b,De.Fragment=i,De.Profiler=l,De.PureComponent=Z,De.StrictMode=a,De.Suspense=v,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,De.__COMPILER_RUNTIME={__proto__:null,c:function(I){return q.H.useMemoCache(I)}},De.cache=function(I){return function(){return I.apply(null,arguments)}},De.cloneElement=function(I,rt,bt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Mt=D({},I.props),Nt=I.key,jt=void 0;if(rt!=null)for(ct in rt.ref!==void 0&&(jt=void 0),rt.key!==void 0&&(Nt=""+rt.key),rt)!Q.call(rt,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&rt.ref===void 0||(Mt[ct]=rt[ct]);var ct=arguments.length-2;if(ct===1)Mt.children=bt;else if(1<ct){for(var St=Array(ct),It=0;It<ct;It++)St[It]=arguments[It+2];Mt.children=St}return K(I.type,Nt,void 0,void 0,jt,Mt)},De.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},De.createElement=function(I,rt,bt){var Mt,Nt={},jt=null;if(rt!=null)for(Mt in rt.key!==void 0&&(jt=""+rt.key),rt)Q.call(rt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Nt[Mt]=rt[Mt]);var ct=arguments.length-2;if(ct===1)Nt.children=bt;else if(1<ct){for(var St=Array(ct),It=0;It<ct;It++)St[It]=arguments[It+2];Nt.children=St}if(I&&I.defaultProps)for(Mt in ct=I.defaultProps,ct)Nt[Mt]===void 0&&(Nt[Mt]=ct[Mt]);return K(I,jt,void 0,void 0,null,Nt)},De.createRef=function(){return{current:null}},De.forwardRef=function(I){return{$$typeof:p,render:I}},De.isValidElement=O,De.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:H}},De.memo=function(I,rt){return{$$typeof:m,type:I,compare:rt===void 0?null:rt}},De.startTransition=function(I){var rt=q.T,bt={};q.T=bt;try{var Mt=I(),Nt=q.S;Nt!==null&&Nt(bt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(lt,B)}catch(jt){B(jt)}finally{q.T=rt}},De.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},De.use=function(I){return q.H.use(I)},De.useActionState=function(I,rt,bt){return q.H.useActionState(I,rt,bt)},De.useCallback=function(I,rt){return q.H.useCallback(I,rt)},De.useContext=function(I){return q.H.useContext(I)},De.useDebugValue=function(){},De.useDeferredValue=function(I,rt){return q.H.useDeferredValue(I,rt)},De.useEffect=function(I,rt,bt){var Mt=q.H;if(typeof bt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(I,rt)},De.useId=function(){return q.H.useId()},De.useImperativeHandle=function(I,rt,bt){return q.H.useImperativeHandle(I,rt,bt)},De.useInsertionEffect=function(I,rt){return q.H.useInsertionEffect(I,rt)},De.useLayoutEffect=function(I,rt){return q.H.useLayoutEffect(I,rt)},De.useMemo=function(I,rt){return q.H.useMemo(I,rt)},De.useOptimistic=function(I,rt){return q.H.useOptimistic(I,rt)},De.useReducer=function(I,rt,bt){return q.H.useReducer(I,rt,bt)},De.useRef=function(I){return q.H.useRef(I)},De.useState=function(I){return q.H.useState(I)},De.useSyncExternalStore=function(I,rt,bt){return q.H.useSyncExternalStore(I,rt,bt)},De.useTransition=function(){return q.H.useTransition()},De.version="19.1.0",De}var qv;function bp(){return qv||(qv=1,jh.exports=xy()),jh.exports}var He=bp(),Wh={exports:{}},bl={},qh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function yy(){return Yv||(Yv=1,function(s){function t(N,H){var B=N.length;N.push(H);t:for(;0<B;){var lt=B-1>>>1,I=N[lt];if(0<l(I,H))N[lt]=H,N[B]=I,B=lt;else break t}}function i(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var H=N[0],B=N.pop();if(B!==H){N[0]=B;t:for(var lt=0,I=N.length,rt=I>>>1;lt<rt;){var bt=2*(lt+1)-1,Mt=N[bt],Nt=bt+1,jt=N[Nt];if(0>l(Mt,B))Nt<I&&0>l(jt,Mt)?(N[lt]=jt,N[Nt]=B,lt=Nt):(N[lt]=Mt,N[bt]=B,lt=bt);else if(Nt<I&&0>l(jt,B))N[lt]=jt,N[Nt]=B,lt=Nt;else break t}}return H}function l(N,H){var B=N.sortIndex-H.sortIndex;return B!==0?B:N.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var v=[],m=[],_=1,S=null,M=3,A=!1,D=!1,P=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function z(N){for(var H=i(m);H!==null;){if(H.callback===null)a(m);else if(H.startTime<=N)a(m),H.sortIndex=H.expirationTime,t(v,H);else break;H=i(m)}}function q(N){if(P=!1,z(N),!D)if(i(v)!==null)D=!0,Q||(Q=!0,J());else{var H=i(m);H!==null&&ot(q,H.startTime-N)}}var Q=!1,K=-1,W=5,O=-1;function T(){return b?!0:!(s.unstable_now()-O<W)}function L(){if(b=!1,Q){var N=s.unstable_now();O=N;var H=!0;try{t:{D=!1,P&&(P=!1,Z(K),K=-1),A=!0;var B=M;try{e:{for(z(N),S=i(v);S!==null&&!(S.expirationTime>N&&T());){var lt=S.callback;if(typeof lt=="function"){S.callback=null,M=S.priorityLevel;var I=lt(S.expirationTime<=N);if(N=s.unstable_now(),typeof I=="function"){S.callback=I,z(N),H=!0;break e}S===i(v)&&a(v),z(N)}else a(v);S=i(v)}if(S!==null)H=!0;else{var rt=i(m);rt!==null&&ot(q,rt.startTime-N),H=!1}}break t}finally{S=null,M=B,A=!1}H=void 0}}finally{H?J():Q=!1}}}var J;if(typeof X=="function")J=function(){X(L)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,dt=nt.port2;nt.port1.onmessage=L,J=function(){dt.postMessage(null)}}else J=function(){y(L,0)};function ot(N,H){K=y(function(){N(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return M},s.unstable_next=function(N){switch(M){case 1:case 2:case 3:var H=3;break;default:H=M}var B=M;M=H;try{return N()}finally{M=B}},s.unstable_requestPaint=function(){b=!0},s.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=M;M=N;try{return H()}finally{M=B}},s.unstable_scheduleCallback=function(N,H,B){var lt=s.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?lt+B:lt):B=lt,N){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=B+I,N={id:_++,callback:H,priorityLevel:N,startTime:B,expirationTime:I,sortIndex:-1},B>lt?(N.sortIndex=B,t(m,N),i(v)===null&&N===i(m)&&(P?(Z(K),K=-1):P=!0,ot(q,B-lt))):(N.sortIndex=I,t(v,N),D||A||(D=!0,Q||(Q=!0,J()))),N},s.unstable_shouldYield=T,s.unstable_wrapCallback=function(N){var H=M;return function(){var B=M;M=H;try{return N.apply(this,arguments)}finally{M=B}}}}(Yh)),Yh}var Zv;function Sy(){return Zv||(Zv=1,qh.exports=yy()),qh.exports}var Zh={exports:{}},oi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function My(){if(Kv)return oi;Kv=1;var s=bp();function t(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(v,m,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:v,containerInfo:m,implementation:_}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return oi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,oi.createPortal=function(v,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(v,m,null,_)},oi.flushSync=function(v){var m=d.T,_=a.p;try{if(d.T=null,a.p=2,v)return v()}finally{d.T=m,a.p=_,a.d.f()}},oi.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(v,m))},oi.prefetchDNS=function(v){typeof v=="string"&&a.d.D(v)},oi.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var _=m.as,S=p(_,m.crossOrigin),M=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?a.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:M,fetchPriority:A}):_==="script"&&a.d.X(v,{crossOrigin:S,integrity:M,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},oi.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=p(m.as,m.crossOrigin);a.d.M(v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(v)},oi.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,S=p(_,m.crossOrigin);a.d.L(v,_,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},oi.preloadModule=function(v,m){if(typeof v=="string")if(m){var _=p(m.as,m.crossOrigin);a.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(v)},oi.requestFormReset=function(v){a.d.r(v)},oi.unstable_batchedUpdates=function(v,m){return v(m)},oi.useFormState=function(v,m,_){return d.H.useFormState(v,m,_)},oi.useFormStatus=function(){return d.H.useHostTransitionStatus()},oi.version="19.1.0",oi}var Qv;function Ey(){if(Qv)return Zh.exports;Qv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Zh.exports=My(),Zh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function by(){if(Jv)return bl;Jv=1;var s=Sy(),t=bp(),i=Ey();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function v(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=h;else{for(var E=!1,C=u.child;C;){if(C===r){E=!0,r=u,o=h;break}if(C===o){E=!0,o=u,r=h;break}C=C.sibling}if(!E){for(C=h.child;C;){if(C===r){E=!0,r=h,o=u;break}if(C===o){E=!0,o=h,r=u;break}C=C.sibling}if(!E)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),X=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case b:return"Profiler";case P:return"StrictMode";case q:return"Suspense";case Q:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case X:return(e.displayName||"Context")+".Provider";case Z:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ot=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},lt=[],I=-1;function rt(e){return{current:e}}function bt(e){0>I||(e.current=lt[I],lt[I]=null,I--)}function Mt(e,n){I++,lt[I]=e.current,e.current=n}var Nt=rt(null),jt=rt(null),ct=rt(null),St=rt(null);function It(e,n){switch(Mt(ct,n),Mt(jt,e),Mt(Nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_v(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_v(n),e=xv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}bt(Nt),Mt(Nt,e)}function re(){bt(Nt),bt(jt),bt(ct)}function Kt(e){e.memoizedState!==null&&Mt(St,e);var n=Nt.current,r=xv(n,e.type);n!==r&&(Mt(jt,e),Mt(Nt,r))}function ge(e){jt.current===e&&(bt(Nt),bt(jt)),St.current===e&&(bt(St),_l._currentValue=B)}var tn=Object.prototype.hasOwnProperty,j=s.unstable_scheduleCallback,Ae=s.unstable_cancelCallback,Ee=s.unstable_shouldYield,he=s.unstable_requestPaint,qt=s.unstable_now,Ke=s.unstable_getCurrentPriorityLevel,ie=s.unstable_ImmediatePriority,ve=s.unstable_UserBlockingPriority,on=s.unstable_NormalPriority,rn=s.unstable_LowPriority,G=s.unstable_IdlePriority,w=s.log,ft=s.unstable_setDisableYieldValue,Et=null,Rt=null;function yt(e){if(typeof w=="function"&&ft(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Et,e)}catch{}}var Wt=Math.clz32?Math.clz32:ne,Bt=Math.log,Qt=Math.LN2;function ne(e){return e>>>=0,e===0?32:31-(Bt(e)/Qt|0)|0}var Lt=256,kt=4194304;function ce(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ae(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?u=ce(o):(E&=C,E!==0?u=ce(E):r||(r=C&~e,r!==0&&(u=ce(r))))):(C=o&~h,C!==0?u=ce(C):E!==0?u=ce(E):r||(r=o&~e,r!==0&&(u=ce(r)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Te(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $(){var e=Lt;return Lt<<=1,(Lt&4194048)===0&&(Lt=256),e}function Ot(){var e=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),e}function Ft(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Jt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pt(e,n,r,o,u,h){var E=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,Y=e.expirationTimes,ht=e.hiddenUpdates;for(r=E&~r;0<r;){var At=31-Wt(r),Dt=1<<At;C[At]=0,Y[At]=-1;var mt=ht[At];if(mt!==null)for(ht[At]=null,At=0;At<mt.length;At++){var vt=mt[At];vt!==null&&(vt.lane&=-536870913)}r&=~Dt}o!==0&&Ct(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(E&~n))}function Ct(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&4194090}function $t(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Wt(r),u=1<<o;u&n|e[o]&n&&(e[o]|=n),r&=~u}}function _e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function je(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ze(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Bv(e.type))}function ri(e,n){var r=H.p;try{return H.p=e,n()}finally{H.p=r}}var wn=Math.random().toString(36).slice(2),vn="__reactFiber$"+wn,yn="__reactProps$"+wn,On="__reactContainer$"+wn,mi="__reactEvents$"+wn,Na="__reactListeners$"+wn,ln="__reactHandles$"+wn,ai="__reactResources$"+wn,gi="__reactMarker$"+wn;function qr(e){delete e[vn],delete e[yn],delete e[mi],delete e[Na],delete e[ln]}function vi(e){var n=e[vn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[On]||r[vn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Ev(e);e!==null;){if(r=e[vn])return r;e=Ev(e)}return n}e=r,r=e.parentNode}return null}function Fi(e){if(e=e[vn]||e[On]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Hi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function _i(e){var n=e[ai];return n||(n=e[ai]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Mn(e){e[gi]=!0}var Yr=new Set,Zr={};function U(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(Zr[e]=n,e=0;e<n.length;e++)Yr.add(n[e])}var pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_t={},st={};function zt(e){return tn.call(st,e)?!0:tn.call(_t,e)?!1:pt.test(e)?st[e]=!0:(_t[e]=!0,!1)}function Xt(e,n,r){if(zt(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function te(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Ht(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}var de,me;function ee(e){if(de===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);de=n&&n[1]||"",me=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+de+e+me}var Re=!1;function ke(e,n){if(!e||Re)return"";Re=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Dt=function(){throw Error()};if(Object.defineProperty(Dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Dt,[])}catch(vt){var mt=vt}Reflect.construct(e,[],Dt)}else{try{Dt.call()}catch(vt){mt=vt}e.call(Dt.prototype)}}else{try{throw Error()}catch(vt){mt=vt}(Dt=e())&&typeof Dt.catch=="function"&&Dt.catch(function(){})}}catch(vt){if(vt&&mt&&typeof vt.stack=="string")return[vt.stack,mt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),E=h[0],C=h[1];if(E&&C){var Y=E.split(`
`),ht=C.split(`
`);for(u=o=0;o<Y.length&&!Y[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ht.length&&!ht[u].includes("DetermineComponentFrameRoot");)u++;if(o===Y.length||u===ht.length)for(o=Y.length-1,u=ht.length-1;1<=o&&0<=u&&Y[o]!==ht[u];)u--;for(;1<=o&&0<=u;o--,u--)if(Y[o]!==ht[u]){if(o!==1||u!==1)do if(o--,u--,0>u||Y[o]!==ht[u]){var At=`
`+Y[o].replace(" at new "," at ");return e.displayName&&At.includes("<anonymous>")&&(At=At.replace("<anonymous>",e.displayName)),At}while(1<=o&&0<=u);break}}}finally{Re=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ee(r):""}function mn(e){switch(e.tag){case 26:case 27:case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return ke(e.type,!1);case 11:return ke(e.type.render,!1);case 1:return ke(e.type,!0);case 31:return ee("Activity");default:return""}}function qe(e){try{var n="";do n+=mn(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Ce(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(e){var n=pe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,h=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,h.call(this,E)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ne(e){e._valueTracker||(e._valueTracker=cn(e))}function Fn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=pe(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var en=/[\n"\\]/g;function Cn(e){return e.replace(en,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function nn(e,n,r,o,u,h,E,C){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),n!=null?E==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ce(n)):e.value!==""+Ce(n)&&(e.value=""+Ce(n)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),n!=null?Hn(e,E,Ce(n)):r!=null?Hn(e,E,Ce(r)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Ce(C):e.removeAttribute("name")}function Pn(e,n,r,o,u,h,E,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;r=r!=null?""+Ce(r):"",n=n!=null?""+Ce(n):r,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Hn(e,n,r){n==="number"&&xi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function xn(e,n,r,o){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Ce(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Gn(e,n,r){if(n!=null&&(n=""+Ce(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Ce(r):""}function Kr(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(ot(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Ce(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o)}function Jn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var kl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function La(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||kl.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Do(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&La(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&La(e,h,n[h])}function vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oa=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _s(e){return Fu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uo=null;function No(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lr=null,Gi=null;function Xl(e){var n=Fi(e);if(n&&(e=n.stateNode)){var r=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(nn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Cn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(a(90));nn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&Fn(o)}break t;case"textarea":Gn(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&xn(e,!!r.multiple,n,!1)}}}var Lo=!1;function jl(e,n,r){if(Lo)return e(n,r);Lo=!0;try{var o=e(n);return o}finally{if(Lo=!1,(lr!==null||Gi!==null)&&(Ic(),lr&&(n=lr,e=Gi,Gi=lr=null,Xl(n),e)))for(n=0;n<e.length;n++)Xl(e[n])}}function Pa(e,n){var r=e.stateNode;if(r===null)return null;var o=r[yn]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xs=!1;if(wi)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{xs=!1}var yi=null,fi=null,ys=null;function Wl(){if(ys)return ys;var e,n=fi,r=n.length,o,u="value"in yi?yi.value:yi.textContent,h=u.length;for(e=0;e<r&&n[e]===u[e];e++);var E=r-e;for(o=1;o<=E&&n[r-o]===u[h-o];o++);return ys=u.slice(e,1<o?1-o:void 0)}function za(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ia(){return!0}function Ss(){return!1}function qn(e){function n(r,o,u,h,E){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ia:Ss,this.isPropagationStopped=Ss,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),n}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=qn(Si),Mr=_({},Si,{view:0,detail:0}),Hu=qn(Mr),Ms,cr,Jr,Fa=_({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ms=e.screenX-Jr.screenX,cr=e.screenY-Jr.screenY):cr=Ms=0,Jr=e),Ms)},movementY:function(e){return"movementY"in e?e.movementY:cr}}),ql=qn(Fa),Yl=_({},Fa,{dataTransfer:0}),Es=qn(Yl),Zl=_({},Mr,{relatedTarget:0}),Oo=qn(Zl),Kl=_({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),Ql=qn(Kl),Jl=_({},Si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$l=qn(Jl),Po=_({},Si,{data:0}),zo=qn(Po),Gu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ku[e])?!!n[e]:!1}function bs(){return Xu}var ju=_({},Mr,{key:function(e){if(e.key){var n=Gu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=za(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(e){return e.type==="keypress"?za(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?za(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wu=qn(ju),Io=_({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tc=qn(Io),qu=_({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),Yu=qn(qu),Ts=_({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zu=qn(Ts),Ku=_({},Fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qu=qn(Ku),ec=_({},Si,{newState:0,oldState:0}),nc=qn(ec),f=[9,13,27,32],g=wi&&"CompositionEvent"in window,x=null;wi&&"documentMode"in document&&(x=document.documentMode);var R=wi&&"TextEvent"in window&&!x,F=wi&&(!g||x&&8<x&&11>=x),k=" ",V=!1;function tt(e,n){switch(e){case"keyup":return f.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Vt(e,n){switch(e){case"compositionend":return gt(n);case"keypress":return n.which!==32?null:(V=!0,k);case"textInput":return e=n.data,e===k&&V?null:e;default:return null}}function Se(e,n){if(Ut)return e==="compositionend"||!g&&tt(e,n)?(e=Wl(),ys=fi=yi=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return F&&n.locale!=="ko"?null:n.data;default:return null}}var ue={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yt(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ue[e.type]:n==="textarea"}function xe(e,n,r,o){lr?Gi?Gi.push(o):Gi=[o]:lr=o,n=kc(n,"onChange"),0<n.length&&(r=new Ba("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var we=null,Qe=null;function un(e){dv(e,0)}function bn(e){var n=Hi(e);if(Fn(n))return e}function hi(e,n){if(e==="change")return n}var $n=!1;if(wi){var Ge;if(wi){var Dn="oninput"in document;if(!Dn){var Ji=document.createElement("div");Ji.setAttribute("oninput","return;"),Dn=typeof Ji.oninput=="function"}Ge=Dn}else Ge=!1;$n=Ge&&(!document.documentMode||9<document.documentMode)}function ic(){we&&(we.detachEvent("onpropertychange",rc),Qe=we=null)}function rc(e){if(e.propertyName==="value"&&bn(Qe)){var n=[];xe(n,Qe,e,No(e)),jl(un,n)}}function Ju(e,n,r){e==="focusin"?(ic(),we=n,Qe=r,we.attachEvent("onpropertychange",rc)):e==="focusout"&&ic()}function $u(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bn(Qe)}function tf(e,n){if(e==="click")return bn(n)}function As(e,n){if(e==="input"||e==="change")return bn(n)}function Q_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ci=typeof Object.is=="function"?Object.is:Q_;function Bo(e,n){if(Ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!tn.call(n,u)||!Ci(e[u],n[u]))return!1}return!0}function Fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,n){var r=Fp(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Fp(r)}}function Gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xi(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=xi(e.document)}return n}function ef(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var J_=wi&&"documentMode"in document&&11>=document.documentMode,Rs=null,nf=null,Fo=null,rf=!1;function kp(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;rf||Rs==null||Rs!==xi(o)||(o=Rs,"selectionStart"in o&&ef(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fo&&Bo(Fo,o)||(Fo=o,o=kc(nf,"onSelect"),0<o.length&&(n=new Ba("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=Rs)))}function Ha(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var ws={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},af={},Xp={};wi&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Ga(e){if(af[e])return af[e];if(!ws[e])return e;var n=ws[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Xp)return af[e]=n[r];return e}var jp=Ga("animationend"),Wp=Ga("animationiteration"),qp=Ga("animationstart"),$_=Ga("transitionrun"),tx=Ga("transitionstart"),ex=Ga("transitioncancel"),Yp=Ga("transitionend"),Zp=new Map,sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sf.push("scrollEnd");function $i(e,n){Zp.set(e,n),U(n,[e])}var Kp=new WeakMap;function Vi(e,n){if(typeof e=="object"&&e!==null){var r=Kp.get(e);return r!==void 0?r:(n={value:e,source:n,stack:qe(n)},Kp.set(e,n),n)}return{value:e,source:n,stack:qe(n)}}var ki=[],Cs=0,of=0;function ac(){for(var e=Cs,n=of=Cs=0;n<e;){var r=ki[n];ki[n++]=null;var o=ki[n];ki[n++]=null;var u=ki[n];ki[n++]=null;var h=ki[n];if(ki[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}h!==0&&Qp(r,u,h)}}function sc(e,n,r,o){ki[Cs++]=e,ki[Cs++]=n,ki[Cs++]=r,ki[Cs++]=o,of|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function lf(e,n,r,o){return sc(e,n,r,o),oc(e)}function Ds(e,n){return sc(e,null,null,n),oc(e)}function Qp(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=e.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Wt(r),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=r|536870912),h):null}function oc(e){if(50<ul)throw ul=0,ph=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Us={};function nx(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(e,n,r,o){return new nx(e,n,r,o)}function cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Er(e,n){var r=e.alternate;return r===null?(r=Di(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Jp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function lc(e,n,r,o,u,h){var E=0;if(o=e,typeof e=="function")cf(e)&&(E=1);else if(typeof e=="string")E=ry(e,r,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=Di(31,r,n,u),e.elementType=O,e.lanes=h,e;case D:return Va(r.children,u,h,n);case P:E=8,u|=24;break;case b:return e=Di(12,r,n,u|2),e.elementType=b,e.lanes=h,e;case q:return e=Di(13,r,n,u),e.elementType=q,e.lanes=h,e;case Q:return e=Di(19,r,n,u),e.elementType=Q,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case X:E=10;break t;case Z:E=9;break t;case z:E=11;break t;case K:E=14;break t;case W:E=16,o=null;break t}E=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Di(E,r,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Va(e,n,r,o){return e=Di(7,e,o,n),e.lanes=r,e}function uf(e,n,r){return e=Di(6,e,null,n),e.lanes=r,e}function ff(e,n,r){return n=Di(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ns=[],Ls=0,cc=null,uc=0,Xi=[],ji=0,ka=null,br=1,Tr="";function Xa(e,n){Ns[Ls++]=uc,Ns[Ls++]=cc,cc=e,uc=n}function $p(e,n,r){Xi[ji++]=br,Xi[ji++]=Tr,Xi[ji++]=ka,ka=e;var o=br;e=Tr;var u=32-Wt(o)-1;o&=~(1<<u),r+=1;var h=32-Wt(n)+u;if(30<h){var E=u-u%5;h=(o&(1<<E)-1).toString(32),o>>=E,u-=E,br=1<<32-Wt(n)+u|r<<u|o,Tr=h+e}else br=1<<h|r<<u|o,Tr=e}function hf(e){e.return!==null&&(Xa(e,1),$p(e,1,0))}function df(e){for(;e===cc;)cc=Ns[--Ls],Ns[Ls]=null,uc=Ns[--Ls],Ns[Ls]=null;for(;e===ka;)ka=Xi[--ji],Xi[ji]=null,Tr=Xi[--ji],Xi[ji]=null,br=Xi[--ji],Xi[ji]=null}var di=null,Tn=null,Je=!1,ja=null,ur=!1,pf=Error(a(519));function Wa(e){var n=Error(a(418,""));throw Vo(Vi(n,e)),pf}function tm(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[vn]=e,n[yn]=o,r){case"dialog":Fe("cancel",n),Fe("close",n);break;case"iframe":case"object":case"embed":Fe("load",n);break;case"video":case"audio":for(r=0;r<hl.length;r++)Fe(hl[r],n);break;case"source":Fe("error",n);break;case"img":case"image":case"link":Fe("error",n),Fe("load",n);break;case"details":Fe("toggle",n);break;case"input":Fe("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ne(n);break;case"select":Fe("invalid",n);break;case"textarea":Fe("invalid",n),Kr(n,o.value,o.defaultValue,o.children),Ne(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||vv(n.textContent,r)?(o.popover!=null&&(Fe("beforetoggle",n),Fe("toggle",n)),o.onScroll!=null&&Fe("scroll",n),o.onScrollEnd!=null&&Fe("scrollend",n),o.onClick!=null&&(n.onclick=Xc),n=!0):n=!1,n||Wa(e)}function em(e){for(di=e.return;di;)switch(di.tag){case 5:case 13:ur=!1;return;case 27:case 3:ur=!0;return;default:di=di.return}}function Ho(e){if(e!==di)return!1;if(!Je)return em(e),Je=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Dh(e.type,e.memoizedProps)),r=!r),r&&Tn&&Wa(e),em(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){Tn=er(e.nextSibling);break t}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}Tn=null}}else n===27?(n=Tn,pa(e.type)?(e=Oh,Oh=null,Tn=e):Tn=n):Tn=di?er(e.stateNode.nextSibling):null;return!0}function Go(){Tn=di=null,Je=!1}function nm(){var e=ja;return e!==null&&(bi===null?bi=e:bi.push.apply(bi,e),ja=null),e}function Vo(e){ja===null?ja=[e]:ja.push(e)}var mf=rt(null),qa=null,Ar=null;function $r(e,n,r){Mt(mf,n._currentValue),n._currentValue=r}function Rr(e){e._currentValue=mf.current,bt(mf)}function gf(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function vf(e,n,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var E=u.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=u;for(var Y=0;Y<n.length;Y++)if(C.context===n[Y]){h.lanes|=r,C=h.alternate,C!==null&&(C.lanes|=r),gf(h.return,r,e),o||(E=null);break t}h=C.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(a(341));E.lanes|=r,h=E.alternate,h!==null&&(h.lanes|=r),gf(E,r,e),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===e){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function ko(e,n,r,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var C=u.type;Ci(u.pendingProps.value,E.value)||(e!==null?e.push(C):e=[C])}}else if(u===St.current){if(E=u.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(_l):e=[_l])}u=u.return}e!==null&&vf(n,e,r,o),n.flags|=262144}function fc(e){for(e=e.firstContext;e!==null;){if(!Ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){qa=e,Ar=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function si(e){return im(qa,e)}function hc(e,n){return qa===null&&Ya(e),im(e,n)}function im(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ar===null){if(e===null)throw Error(a(308));Ar=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ar=Ar.next=n;return r}var ix=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},rx=s.unstable_scheduleCallback,ax=s.unstable_NormalPriority,Vn={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _f(){return{controller:new ix,data:new Map,refCount:0}}function Xo(e){e.refCount--,e.refCount===0&&rx(ax,function(){e.controller.abort()})}var jo=null,xf=0,Os=0,Ps=null;function sx(e,n){if(jo===null){var r=jo=[];xf=0,Os=Sh(),Ps={status:"pending",value:void 0,then:function(o){r.push(o)}}}return xf++,n.then(rm,rm),n}function rm(){if(--xf===0&&jo!==null){Ps!==null&&(Ps.status="fulfilled");var e=jo;jo=null,Os=0,Ps=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ox(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var am=N.S;N.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&sx(e,n),am!==null&&am(e,n)};var Za=rt(null);function yf(){var e=Za.current;return e!==null?e:_n.pooledCache}function dc(e,n){n===null?Mt(Za,Za.current):Mt(Za,n.pool)}function sm(){var e=yf();return e===null?null:{parent:Vn._currentValue,pool:e}}var Wo=Error(a(460)),om=Error(a(474)),pc=Error(a(542)),Sf={then:function(){}};function lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mc(){}function cm(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(mc,mc),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fm(e),e;default:if(typeof n.status=="string")n.then(mc,mc);else{if(e=_n,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fm(e),e}throw qo=n,Wo}}var qo=null;function um(){if(qo===null)throw Error(a(459));var e=qo;return qo=null,e}function fm(e){if(e===Wo||e===pc)throw Error(a(483))}var ta=!1;function Mf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ef(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(an&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=oc(e),Qp(e,null,r),n}return sc(e,o,n,r),oc(e)}function Yo(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,$t(e,r)}}function bf(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=E:h=h.next=E,r=r.next}while(r!==null);h===null?u=h=n:h=h.next=n}else u=h=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Tf=!1;function Zo(){if(Tf){var e=Ps;if(e!==null)throw e}}function Ko(e,n,r,o){Tf=!1;var u=e.updateQueue;ta=!1;var h=u.firstBaseUpdate,E=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var Y=C,ht=Y.next;Y.next=null,E===null?h=ht:E.next=ht,E=Y;var At=e.alternate;At!==null&&(At=At.updateQueue,C=At.lastBaseUpdate,C!==E&&(C===null?At.firstBaseUpdate=ht:C.next=ht,At.lastBaseUpdate=Y))}if(h!==null){var Dt=u.baseState;E=0,At=ht=Y=null,C=h;do{var mt=C.lane&-536870913,vt=mt!==C.lane;if(vt?(Xe&mt)===mt:(o&mt)===mt){mt!==0&&mt===Os&&(Tf=!0),At!==null&&(At=At.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var be=e,ye=C;mt=n;var dn=r;switch(ye.tag){case 1:if(be=ye.payload,typeof be=="function"){Dt=be.call(dn,Dt,mt);break t}Dt=be;break t;case 3:be.flags=be.flags&-65537|128;case 0:if(be=ye.payload,mt=typeof be=="function"?be.call(dn,Dt,mt):be,mt==null)break t;Dt=_({},Dt,mt);break t;case 2:ta=!0}}mt=C.callback,mt!==null&&(e.flags|=64,vt&&(e.flags|=8192),vt=u.callbacks,vt===null?u.callbacks=[mt]:vt.push(mt))}else vt={lane:mt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},At===null?(ht=At=vt,Y=Dt):At=At.next=vt,E|=mt;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;vt=C,C=vt.next,vt.next=null,u.lastBaseUpdate=vt,u.shared.pending=null}}while(!0);At===null&&(Y=Dt),u.baseState=Y,u.firstBaseUpdate=ht,u.lastBaseUpdate=At,h===null&&(u.shared.lanes=0),ua|=E,e.lanes=E,e.memoizedState=Dt}}function hm(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function dm(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)hm(r[e],n)}var zs=rt(null),gc=rt(0);function pm(e,n){e=Or,Mt(gc,e),Mt(zs,n),Or=e|n.baseLanes}function Af(){Mt(gc,Or),Mt(zs,zs.current)}function Rf(){Or=gc.current,bt(zs),bt(gc)}var ia=0,Oe=null,fn=null,zn=null,vc=!1,Is=!1,Ka=!1,_c=0,Qo=0,Bs=null,lx=0;function Un(){throw Error(a(321))}function wf(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Ci(e[r],n[r]))return!1;return!0}function Cf(e,n,r,o,u,h){return ia=h,Oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Qm:Jm,Ka=!1,h=r(o,u),Ka=!1,Is&&(h=gm(n,r,o,u)),mm(e),h}function mm(e){N.H=bc;var n=fn!==null&&fn.next!==null;if(ia=0,zn=fn=Oe=null,vc=!1,Qo=0,Bs=null,n)throw Error(a(300));e===null||Yn||(e=e.dependencies,e!==null&&fc(e)&&(Yn=!0))}function gm(e,n,r,o){Oe=e;var u=0;do{if(Is&&(Bs=null),Qo=0,Is=!1,25<=u)throw Error(a(301));if(u+=1,zn=fn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}N.H=mx,h=n(r,o)}while(Is);return h}function cx(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Jo(n):n,e=e.useState()[0],(fn!==null?fn.memoizedState:null)!==e&&(Oe.flags|=1024),n}function Df(){var e=_c!==0;return _c=0,e}function Uf(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Nf(e){if(vc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vc=!1}ia=0,zn=fn=Oe=null,Is=!1,Qo=_c=0,Bs=null}function Mi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zn===null?Oe.memoizedState=zn=e:zn=zn.next=e,zn}function In(){if(fn===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=fn.next;var n=zn===null?Oe.memoizedState:zn.next;if(n!==null)zn=n,fn=e;else{if(e===null)throw Oe.alternate===null?Error(a(467)):Error(a(310));fn=e,e={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},zn===null?Oe.memoizedState=zn=e:zn=zn.next=e}return zn}function Lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(e){var n=Qo;return Qo+=1,Bs===null&&(Bs=[]),e=cm(Bs,e,n),n=Oe,(zn===null?n.memoizedState:zn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Qm:Jm),e}function xc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jo(e);if(e.$$typeof===X)return si(e)}throw Error(a(438,String(e)))}function Of(e){var n=null,r=Oe.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=Oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Lf(),Oe.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=T;return n.index++,r}function wr(e,n){return typeof n=="function"?n(e):n}function yc(e){var n=In();return Pf(n,fn,e)}function Pf(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var E=u.next;u.next=h.next,h.next=E}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var C=E=null,Y=null,ht=n,At=!1;do{var Dt=ht.lane&-536870913;if(Dt!==ht.lane?(Xe&Dt)===Dt:(ia&Dt)===Dt){var mt=ht.revertLane;if(mt===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null}),Dt===Os&&(At=!0);else if((ia&mt)===mt){ht=ht.next,mt===Os&&(At=!0);continue}else Dt={lane:0,revertLane:ht.revertLane,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},Y===null?(C=Y=Dt,E=h):Y=Y.next=Dt,Oe.lanes|=mt,ua|=mt;Dt=ht.action,Ka&&r(h,Dt),h=ht.hasEagerState?ht.eagerState:r(h,Dt)}else mt={lane:Dt,revertLane:ht.revertLane,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},Y===null?(C=Y=mt,E=h):Y=Y.next=mt,Oe.lanes|=Dt,ua|=Dt;ht=ht.next}while(ht!==null&&ht!==n);if(Y===null?E=h:Y.next=C,!Ci(h,e.memoizedState)&&(Yn=!0,At&&(r=Ps,r!==null)))throw r;e.memoizedState=h,e.baseState=E,e.baseQueue=Y,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function zf(e){var n=In(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,h=n.memoizedState;if(u!==null){r.pending=null;var E=u=u.next;do h=e(h,E.action),E=E.next;while(E!==u);Ci(h,n.memoizedState)||(Yn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function vm(e,n,r){var o=Oe,u=In(),h=Je;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=n();var E=!Ci((fn||u).memoizedState,r);E&&(u.memoizedState=r,Yn=!0),u=u.queue;var C=ym.bind(null,o,u,e);if($o(2048,8,C,[e]),u.getSnapshot!==n||E||zn!==null&&zn.memoizedState.tag&1){if(o.flags|=2048,Fs(9,Sc(),xm.bind(null,o,u,r,n),null),_n===null)throw Error(a(349));h||(ia&124)!==0||_m(o,n,r)}return r}function _m(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Oe.updateQueue,n===null?(n=Lf(),Oe.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function xm(e,n,r,o){n.value=r,n.getSnapshot=o,Sm(n)&&Mm(e)}function ym(e,n,r){return r(function(){Sm(n)&&Mm(e)})}function Sm(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Ci(e,r)}catch{return!0}}function Mm(e){var n=Ds(e,2);n!==null&&Pi(n,e,2)}function If(e){var n=Mi();if(typeof e=="function"){var r=e;if(e=r(),Ka){yt(!0);try{r()}finally{yt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},n}function Em(e,n,r,o){return e.baseState=r,Pf(e,fn,typeof o=="function"?o:wr)}function ux(e,n,r,o,u){if(Ec(e))throw Error(a(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};N.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,bm(n,h)):(h.next=r.next,n.pending=r.next=h)}}function bm(e,n){var r=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=N.T,E={};N.T=E;try{var C=r(u,o),Y=N.S;Y!==null&&Y(E,C),Tm(e,n,C)}catch(ht){Bf(e,n,ht)}finally{N.T=h}}else try{h=r(u,o),Tm(e,n,h)}catch(ht){Bf(e,n,ht)}}function Tm(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Am(e,n,o)},function(o){return Bf(e,n,o)}):Am(e,n,r)}function Am(e,n,r){n.status="fulfilled",n.value=r,Rm(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,bm(e,r)))}function Bf(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Rm(n),n=n.next;while(n!==o)}e.action=null}function Rm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wm(e,n){return n}function Cm(e,n){if(Je){var r=_n.formState;if(r!==null){t:{var o=Oe;if(Je){if(Tn){e:{for(var u=Tn,h=ur;u.nodeType!==8;){if(!h){u=null;break e}if(u=er(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Tn=er(u.nextSibling),o=u.data==="F!";break t}}Wa(o)}o=!1}o&&(n=r[0])}}return r=Mi(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wm,lastRenderedState:n},r.queue=o,r=Ym.bind(null,Oe,o),o.dispatch=r,o=If(!1),h=kf.bind(null,Oe,!1,o.queue),o=Mi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,r=ux.bind(null,Oe,u,h,r),u.dispatch=r,o.memoizedState=e,[n,r,!1]}function Dm(e){var n=In();return Um(n,fn,e)}function Um(e,n,r){if(n=Pf(e,n,wm)[0],e=yc(wr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Jo(n)}catch(E){throw E===Wo?pc:E}else o=n;n=In();var u=n.queue,h=u.dispatch;return r!==n.memoizedState&&(Oe.flags|=2048,Fs(9,Sc(),fx.bind(null,u,r),null)),[o,h,e]}function fx(e,n){e.action=n}function Nm(e){var n=In(),r=fn;if(r!==null)return Um(n,r,e);In(),n=n.memoizedState,r=In();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function Fs(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=Oe.updateQueue,n===null&&(n=Lf(),Oe.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function Sc(){return{destroy:void 0,resource:void 0}}function Lm(){return In().memoizedState}function Mc(e,n,r,o){var u=Mi();o=o===void 0?null:o,Oe.flags|=e,u.memoizedState=Fs(1|n,Sc(),r,o)}function $o(e,n,r,o){var u=In();o=o===void 0?null:o;var h=u.memoizedState.inst;fn!==null&&o!==null&&wf(o,fn.memoizedState.deps)?u.memoizedState=Fs(n,h,r,o):(Oe.flags|=e,u.memoizedState=Fs(1|n,h,r,o))}function Om(e,n){Mc(8390656,8,e,n)}function Pm(e,n){$o(2048,8,e,n)}function zm(e,n){return $o(4,2,e,n)}function Im(e,n){return $o(4,4,e,n)}function Bm(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fm(e,n,r){r=r!=null?r.concat([e]):null,$o(4,4,Bm.bind(null,n,e),r)}function Ff(){}function Hm(e,n){var r=In();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&wf(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function Gm(e,n){var r=In();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&wf(n,o[1]))return o[0];if(o=e(),Ka){yt(!0);try{e()}finally{yt(!1)}}return r.memoizedState=[o,n],o}function Hf(e,n,r){return r===void 0||(ia&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=Xg(),Oe.lanes|=e,ua|=e,r)}function Vm(e,n,r,o){return Ci(r,n)?r:zs.current!==null?(e=Hf(e,r,o),Ci(e,n)||(Yn=!0),e):(ia&42)===0?(Yn=!0,e.memoizedState=r):(e=Xg(),Oe.lanes|=e,ua|=e,n)}function km(e,n,r,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var E=N.T,C={};N.T=C,kf(e,!1,n,r);try{var Y=u(),ht=N.S;if(ht!==null&&ht(C,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var At=ox(Y,o);tl(e,n,At,Oi(e))}else tl(e,n,o,Oi(e))}catch(Dt){tl(e,n,{then:function(){},status:"rejected",reason:Dt},Oi())}finally{H.p=h,N.T=E}}function hx(){}function Gf(e,n,r,o){if(e.tag!==5)throw Error(a(476));var u=Xm(e).queue;km(e,u,n,B,r===null?hx:function(){return jm(e),r(o)})}function Xm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:B},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jm(e){var n=Xm(e).next.queue;tl(e,n,{},Oi())}function Vf(){return si(_l)}function Wm(){return In().memoizedState}function qm(){return In().memoizedState}function dx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Oi();e=ea(r);var o=na(n,e,r);o!==null&&(Pi(o,n,r),Yo(o,n,r)),n={cache:_f()},e.payload=n;return}n=n.return}}function px(e,n,r){var o=Oi();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Ec(e)?Zm(n,r):(r=lf(e,n,r,o),r!==null&&(Pi(r,e,o),Km(r,n,o)))}function Ym(e,n,r){var o=Oi();tl(e,n,r,o)}function tl(e,n,r,o){var u={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))Zm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var E=n.lastRenderedState,C=h(E,r);if(u.hasEagerState=!0,u.eagerState=C,Ci(C,E))return sc(e,n,u,0),_n===null&&ac(),!1}catch{}finally{}if(r=lf(e,n,u,o),r!==null)return Pi(r,e,o),Km(r,n,o),!0}return!1}function kf(e,n,r,o){if(o={lane:2,revertLane:Sh(),action:o,hasEagerState:!1,eagerState:null,next:null},Ec(e)){if(n)throw Error(a(479))}else n=lf(e,r,o,2),n!==null&&Pi(n,e,2)}function Ec(e){var n=e.alternate;return e===Oe||n!==null&&n===Oe}function Zm(e,n){Is=vc=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Km(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,$t(e,r)}}var bc={readContext:si,use:xc,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useLayoutEffect:Un,useInsertionEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useSyncExternalStore:Un,useId:Un,useHostTransitionStatus:Un,useFormState:Un,useActionState:Un,useOptimistic:Un,useMemoCache:Un,useCacheRefresh:Un},Qm={readContext:si,use:xc,useCallback:function(e,n){return Mi().memoizedState=[e,n===void 0?null:n],e},useContext:si,useEffect:Om,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Mc(4194308,4,Bm.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Mc(4194308,4,e,n)},useInsertionEffect:function(e,n){Mc(4,2,e,n)},useMemo:function(e,n){var r=Mi();n=n===void 0?null:n;var o=e();if(Ka){yt(!0);try{e()}finally{yt(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=Mi();if(r!==void 0){var u=r(n);if(Ka){yt(!0);try{r(n)}finally{yt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=px.bind(null,Oe,e),[o.memoizedState,e]},useRef:function(e){var n=Mi();return e={current:e},n.memoizedState=e},useState:function(e){e=If(e);var n=e.queue,r=Ym.bind(null,Oe,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Ff,useDeferredValue:function(e,n){var r=Mi();return Hf(r,e,n)},useTransition:function(){var e=If(!1);return e=km.bind(null,Oe,e.queue,!0,!1),Mi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=Oe,u=Mi();if(Je){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),_n===null)throw Error(a(349));(Xe&124)!==0||_m(o,n,r)}u.memoizedState=r;var h={value:r,getSnapshot:n};return u.queue=h,Om(ym.bind(null,o,h,e),[e]),o.flags|=2048,Fs(9,Sc(),xm.bind(null,o,h,r,n),null),r},useId:function(){var e=Mi(),n=_n.identifierPrefix;if(Je){var r=Tr,o=br;r=(o&~(1<<32-Wt(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=_c++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=lx++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Vf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e){var n=Mi();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=kf.bind(null,Oe,!0,r),r.dispatch=n,[e,n]},useMemoCache:Of,useCacheRefresh:function(){return Mi().memoizedState=dx.bind(null,Oe)}},Jm={readContext:si,use:xc,useCallback:Hm,useContext:si,useEffect:Pm,useImperativeHandle:Fm,useInsertionEffect:zm,useLayoutEffect:Im,useMemo:Gm,useReducer:yc,useRef:Lm,useState:function(){return yc(wr)},useDebugValue:Ff,useDeferredValue:function(e,n){var r=In();return Vm(r,fn.memoizedState,e,n)},useTransition:function(){var e=yc(wr)[0],n=In().memoizedState;return[typeof e=="boolean"?e:Jo(e),n]},useSyncExternalStore:vm,useId:Wm,useHostTransitionStatus:Vf,useFormState:Dm,useActionState:Dm,useOptimistic:function(e,n){var r=In();return Em(r,fn,e,n)},useMemoCache:Of,useCacheRefresh:qm},mx={readContext:si,use:xc,useCallback:Hm,useContext:si,useEffect:Pm,useImperativeHandle:Fm,useInsertionEffect:zm,useLayoutEffect:Im,useMemo:Gm,useReducer:zf,useRef:Lm,useState:function(){return zf(wr)},useDebugValue:Ff,useDeferredValue:function(e,n){var r=In();return fn===null?Hf(r,e,n):Vm(r,fn.memoizedState,e,n)},useTransition:function(){var e=zf(wr)[0],n=In().memoizedState;return[typeof e=="boolean"?e:Jo(e),n]},useSyncExternalStore:vm,useId:Wm,useHostTransitionStatus:Vf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var r=In();return fn!==null?Em(r,fn,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Of,useCacheRefresh:qm},Hs=null,el=0;function Tc(e){var n=el;return el+=1,Hs===null&&(Hs=[]),cm(Hs,e,n)}function nl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ac(e,n){throw n.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function $m(e){var n=e._init;return n(e._payload)}function tg(e){function n(at,et){if(e){var ut=at.deletions;ut===null?(at.deletions=[et],at.flags|=16):ut.push(et)}}function r(at,et){if(!e)return null;for(;et!==null;)n(at,et),et=et.sibling;return null}function o(at){for(var et=new Map;at!==null;)at.key!==null?et.set(at.key,at):et.set(at.index,at),at=at.sibling;return et}function u(at,et){return at=Er(at,et),at.index=0,at.sibling=null,at}function h(at,et,ut){return at.index=ut,e?(ut=at.alternate,ut!==null?(ut=ut.index,ut<et?(at.flags|=67108866,et):ut):(at.flags|=67108866,et)):(at.flags|=1048576,et)}function E(at){return e&&at.alternate===null&&(at.flags|=67108866),at}function C(at,et,ut,wt){return et===null||et.tag!==6?(et=uf(ut,at.mode,wt),et.return=at,et):(et=u(et,ut),et.return=at,et)}function Y(at,et,ut,wt){var se=ut.type;return se===D?At(at,et,ut.props.children,wt,ut.key):et!==null&&(et.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===W&&$m(se)===et.type)?(et=u(et,ut.props),nl(et,ut),et.return=at,et):(et=lc(ut.type,ut.key,ut.props,null,at.mode,wt),nl(et,ut),et.return=at,et)}function ht(at,et,ut,wt){return et===null||et.tag!==4||et.stateNode.containerInfo!==ut.containerInfo||et.stateNode.implementation!==ut.implementation?(et=ff(ut,at.mode,wt),et.return=at,et):(et=u(et,ut.children||[]),et.return=at,et)}function At(at,et,ut,wt,se){return et===null||et.tag!==7?(et=Va(ut,at.mode,wt,se),et.return=at,et):(et=u(et,ut),et.return=at,et)}function Dt(at,et,ut){if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return et=uf(""+et,at.mode,ut),et.return=at,et;if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return ut=lc(et.type,et.key,et.props,null,at.mode,ut),nl(ut,et),ut.return=at,ut;case A:return et=ff(et,at.mode,ut),et.return=at,et;case W:var wt=et._init;return et=wt(et._payload),Dt(at,et,ut)}if(ot(et)||J(et))return et=Va(et,at.mode,ut,null),et.return=at,et;if(typeof et.then=="function")return Dt(at,Tc(et),ut);if(et.$$typeof===X)return Dt(at,hc(at,et),ut);Ac(at,et)}return null}function mt(at,et,ut,wt){var se=et!==null?et.key:null;if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return se!==null?null:C(at,et,""+ut,wt);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case M:return ut.key===se?Y(at,et,ut,wt):null;case A:return ut.key===se?ht(at,et,ut,wt):null;case W:return se=ut._init,ut=se(ut._payload),mt(at,et,ut,wt)}if(ot(ut)||J(ut))return se!==null?null:At(at,et,ut,wt,null);if(typeof ut.then=="function")return mt(at,et,Tc(ut),wt);if(ut.$$typeof===X)return mt(at,et,hc(at,ut),wt);Ac(at,ut)}return null}function vt(at,et,ut,wt,se){if(typeof wt=="string"&&wt!==""||typeof wt=="number"||typeof wt=="bigint")return at=at.get(ut)||null,C(et,at,""+wt,se);if(typeof wt=="object"&&wt!==null){switch(wt.$$typeof){case M:return at=at.get(wt.key===null?ut:wt.key)||null,Y(et,at,wt,se);case A:return at=at.get(wt.key===null?ut:wt.key)||null,ht(et,at,wt,se);case W:var Ie=wt._init;return wt=Ie(wt._payload),vt(at,et,ut,wt,se)}if(ot(wt)||J(wt))return at=at.get(ut)||null,At(et,at,wt,se,null);if(typeof wt.then=="function")return vt(at,et,ut,Tc(wt),se);if(wt.$$typeof===X)return vt(at,et,ut,hc(et,wt),se);Ac(et,wt)}return null}function be(at,et,ut,wt){for(var se=null,Ie=null,fe=et,Me=et=0,Kn=null;fe!==null&&Me<ut.length;Me++){fe.index>Me?(Kn=fe,fe=null):Kn=fe.sibling;var Ye=mt(at,fe,ut[Me],wt);if(Ye===null){fe===null&&(fe=Kn);break}e&&fe&&Ye.alternate===null&&n(at,fe),et=h(Ye,et,Me),Ie===null?se=Ye:Ie.sibling=Ye,Ie=Ye,fe=Kn}if(Me===ut.length)return r(at,fe),Je&&Xa(at,Me),se;if(fe===null){for(;Me<ut.length;Me++)fe=Dt(at,ut[Me],wt),fe!==null&&(et=h(fe,et,Me),Ie===null?se=fe:Ie.sibling=fe,Ie=fe);return Je&&Xa(at,Me),se}for(fe=o(fe);Me<ut.length;Me++)Kn=vt(fe,at,Me,ut[Me],wt),Kn!==null&&(e&&Kn.alternate!==null&&fe.delete(Kn.key===null?Me:Kn.key),et=h(Kn,et,Me),Ie===null?se=Kn:Ie.sibling=Kn,Ie=Kn);return e&&fe.forEach(function(xa){return n(at,xa)}),Je&&Xa(at,Me),se}function ye(at,et,ut,wt){if(ut==null)throw Error(a(151));for(var se=null,Ie=null,fe=et,Me=et=0,Kn=null,Ye=ut.next();fe!==null&&!Ye.done;Me++,Ye=ut.next()){fe.index>Me?(Kn=fe,fe=null):Kn=fe.sibling;var xa=mt(at,fe,Ye.value,wt);if(xa===null){fe===null&&(fe=Kn);break}e&&fe&&xa.alternate===null&&n(at,fe),et=h(xa,et,Me),Ie===null?se=xa:Ie.sibling=xa,Ie=xa,fe=Kn}if(Ye.done)return r(at,fe),Je&&Xa(at,Me),se;if(fe===null){for(;!Ye.done;Me++,Ye=ut.next())Ye=Dt(at,Ye.value,wt),Ye!==null&&(et=h(Ye,et,Me),Ie===null?se=Ye:Ie.sibling=Ye,Ie=Ye);return Je&&Xa(at,Me),se}for(fe=o(fe);!Ye.done;Me++,Ye=ut.next())Ye=vt(fe,at,Me,Ye.value,wt),Ye!==null&&(e&&Ye.alternate!==null&&fe.delete(Ye.key===null?Me:Ye.key),et=h(Ye,et,Me),Ie===null?se=Ye:Ie.sibling=Ye,Ie=Ye);return e&&fe.forEach(function(gy){return n(at,gy)}),Je&&Xa(at,Me),se}function dn(at,et,ut,wt){if(typeof ut=="object"&&ut!==null&&ut.type===D&&ut.key===null&&(ut=ut.props.children),typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case M:t:{for(var se=ut.key;et!==null;){if(et.key===se){if(se=ut.type,se===D){if(et.tag===7){r(at,et.sibling),wt=u(et,ut.props.children),wt.return=at,at=wt;break t}}else if(et.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===W&&$m(se)===et.type){r(at,et.sibling),wt=u(et,ut.props),nl(wt,ut),wt.return=at,at=wt;break t}r(at,et);break}else n(at,et);et=et.sibling}ut.type===D?(wt=Va(ut.props.children,at.mode,wt,ut.key),wt.return=at,at=wt):(wt=lc(ut.type,ut.key,ut.props,null,at.mode,wt),nl(wt,ut),wt.return=at,at=wt)}return E(at);case A:t:{for(se=ut.key;et!==null;){if(et.key===se)if(et.tag===4&&et.stateNode.containerInfo===ut.containerInfo&&et.stateNode.implementation===ut.implementation){r(at,et.sibling),wt=u(et,ut.children||[]),wt.return=at,at=wt;break t}else{r(at,et);break}else n(at,et);et=et.sibling}wt=ff(ut,at.mode,wt),wt.return=at,at=wt}return E(at);case W:return se=ut._init,ut=se(ut._payload),dn(at,et,ut,wt)}if(ot(ut))return be(at,et,ut,wt);if(J(ut)){if(se=J(ut),typeof se!="function")throw Error(a(150));return ut=se.call(ut),ye(at,et,ut,wt)}if(typeof ut.then=="function")return dn(at,et,Tc(ut),wt);if(ut.$$typeof===X)return dn(at,et,hc(at,ut),wt);Ac(at,ut)}return typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint"?(ut=""+ut,et!==null&&et.tag===6?(r(at,et.sibling),wt=u(et,ut),wt.return=at,at=wt):(r(at,et),wt=uf(ut,at.mode,wt),wt.return=at,at=wt),E(at)):r(at,et)}return function(at,et,ut,wt){try{el=0;var se=dn(at,et,ut,wt);return Hs=null,se}catch(fe){if(fe===Wo||fe===pc)throw fe;var Ie=Di(29,fe,null,at.mode);return Ie.lanes=wt,Ie.return=at,Ie}finally{}}}var Gs=tg(!0),eg=tg(!1),Wi=rt(null),fr=null;function ra(e){var n=e.alternate;Mt(kn,kn.current&1),Mt(Wi,e),fr===null&&(n===null||zs.current!==null||n.memoizedState!==null)&&(fr=e)}function ng(e){if(e.tag===22){if(Mt(kn,kn.current),Mt(Wi,e),fr===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(fr=e)}}else aa()}function aa(){Mt(kn,kn.current),Mt(Wi,Wi.current)}function Cr(e){bt(Wi),fr===e&&(fr=null),bt(kn)}var kn=rt(0);function Rc(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Lh(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Xf(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:_({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var jf={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=Oi(),u=ea(o);u.payload=n,r!=null&&(u.callback=r),n=na(e,u,o),n!==null&&(Pi(n,e,o),Yo(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=Oi(),u=ea(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=na(e,u,o),n!==null&&(Pi(n,e,o),Yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Oi(),o=ea(r);o.tag=2,n!=null&&(o.callback=n),n=na(e,o,r),n!==null&&(Pi(n,e,r),Yo(n,e,r))}};function ig(e,n,r,o,u,h,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,E):n.prototype&&n.prototype.isPureReactComponent?!Bo(r,o)||!Bo(u,h):!0}function rg(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&jf.enqueueReplaceState(n,n.state,null)}function Qa(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=_({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var wc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ag(e){wc(e)}function sg(e){console.error(e)}function og(e){wc(e)}function Cc(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function lg(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Wf(e,n,r){return r=ea(r),r.tag=3,r.payload={element:null},r.callback=function(){Cc(e,n)},r}function cg(e){return e=ea(e),e.tag=3,e}function ug(e,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){lg(n,r,o)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){lg(n,r,o),typeof u!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function gx(e,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&ko(n,r,u,!0),r=Wi.current,r!==null){switch(r.tag){case 13:return fr===null?gh():r.alternate===null&&An===0&&(An=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Sf?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),_h(e,o,u)),!1;case 22:return r.flags|=65536,o===Sf?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),_h(e,o,u)),!1}throw Error(a(435,r.tag))}return _h(e,o,u),gh(),!1}if(Je)return n=Wi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==pf&&(e=Error(a(422),{cause:o}),Vo(Vi(e,r)))):(o!==pf&&(n=Error(a(423),{cause:o}),Vo(Vi(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Vi(o,r),u=Wf(e.stateNode,o,u),bf(e,u),An!==4&&(An=2)),!1;var h=Error(a(520),{cause:o});if(h=Vi(h,r),cl===null?cl=[h]:cl.push(h),An!==4&&(An=2),n===null)return!0;o=Vi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=Wf(r.stateNode,o,e),bf(r,e),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(fa===null||!fa.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=cg(u),ug(u,e,r,o),bf(r,u),!1}r=r.return}while(r!==null);return!1}var fg=Error(a(461)),Yn=!1;function ti(e,n,r,o){n.child=e===null?eg(n,null,r,o):Gs(n,e.child,r,o)}function hg(e,n,r,o,u){r=r.render;var h=n.ref;if("ref"in o){var E={};for(var C in o)C!=="ref"&&(E[C]=o[C])}else E=o;return Ya(n),o=Cf(e,n,r,E,h,u),C=Df(),e!==null&&!Yn?(Uf(e,n,u),Dr(e,n,u)):(Je&&C&&hf(n),n.flags|=1,ti(e,n,o,u),n.child)}function dg(e,n,r,o,u){if(e===null){var h=r.type;return typeof h=="function"&&!cf(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,pg(e,n,h,o,u)):(e=lc(r.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!th(e,u)){var E=h.memoizedProps;if(r=r.compare,r=r!==null?r:Bo,r(E,o)&&e.ref===n.ref)return Dr(e,n,u)}return n.flags|=1,e=Er(h,o),e.ref=n.ref,e.return=n,n.child=e}function pg(e,n,r,o,u){if(e!==null){var h=e.memoizedProps;if(Bo(h,o)&&e.ref===n.ref)if(Yn=!1,n.pendingProps=o=h,th(e,u))(e.flags&131072)!==0&&(Yn=!0);else return n.lanes=e.lanes,Dr(e,n,u)}return qf(e,n,r,o,u)}function mg(e,n,r){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|r:r,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return gg(e,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dc(n,h!==null?h.cachePool:null),h!==null?pm(n,h):Af(),ng(n);else return n.lanes=n.childLanes=536870912,gg(e,n,h!==null?h.baseLanes|r:r,r)}else h!==null?(dc(n,h.cachePool),pm(n,h),aa(),n.memoizedState=null):(e!==null&&dc(n,null),Af(),aa());return ti(e,n,u,r),n.child}function gg(e,n,r,o){var u=yf();return u=u===null?null:{parent:Vn._currentValue,pool:u},n.memoizedState={baseLanes:r,cachePool:u},e!==null&&dc(n,null),Af(),ng(n),e!==null&&ko(e,n,o,!0),null}function Dc(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function qf(e,n,r,o,u){return Ya(n),r=Cf(e,n,r,o,void 0,u),o=Df(),e!==null&&!Yn?(Uf(e,n,u),Dr(e,n,u)):(Je&&o&&hf(n),n.flags|=1,ti(e,n,r,u),n.child)}function vg(e,n,r,o,u,h){return Ya(n),n.updateQueue=null,r=gm(n,o,r,u),mm(e),o=Df(),e!==null&&!Yn?(Uf(e,n,h),Dr(e,n,h)):(Je&&o&&hf(n),n.flags|=1,ti(e,n,r,h),n.child)}function _g(e,n,r,o,u){if(Ya(n),n.stateNode===null){var h=Us,E=r.contextType;typeof E=="object"&&E!==null&&(h=si(E)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=jf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Mf(n),E=r.contextType,h.context=typeof E=="object"&&E!==null?si(E):Us,h.state=n.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Xf(n,r,E,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&jf.enqueueReplaceState(h,h.state,null),Ko(n,o,h,u),Zo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,Y=Qa(r,C);h.props=Y;var ht=h.context,At=r.contextType;E=Us,typeof At=="object"&&At!==null&&(E=si(At));var Dt=r.getDerivedStateFromProps;At=typeof Dt=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,At||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||ht!==E)&&rg(n,h,o,E),ta=!1;var mt=n.memoizedState;h.state=mt,Ko(n,o,h,u),Zo(),ht=n.memoizedState,C||mt!==ht||ta?(typeof Dt=="function"&&(Xf(n,r,Dt,o),ht=n.memoizedState),(Y=ta||ig(n,r,Y,o,mt,ht,E))?(At||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ht),h.props=o,h.state=ht,h.context=E,o=Y):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Ef(e,n),E=n.memoizedProps,At=Qa(r,E),h.props=At,Dt=n.pendingProps,mt=h.context,ht=r.contextType,Y=Us,typeof ht=="object"&&ht!==null&&(Y=si(ht)),C=r.getDerivedStateFromProps,(ht=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==Dt||mt!==Y)&&rg(n,h,o,Y),ta=!1,mt=n.memoizedState,h.state=mt,Ko(n,o,h,u),Zo();var vt=n.memoizedState;E!==Dt||mt!==vt||ta||e!==null&&e.dependencies!==null&&fc(e.dependencies)?(typeof C=="function"&&(Xf(n,r,C,o),vt=n.memoizedState),(At=ta||ig(n,r,At,o,mt,vt,Y)||e!==null&&e.dependencies!==null&&fc(e.dependencies))?(ht||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,vt,Y),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,vt,Y)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&mt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&mt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=vt),h.props=o,h.state=vt,h.context=Y,o=At):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&mt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&mt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Dc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Gs(n,e.child,null,u),n.child=Gs(n,null,r,u)):ti(e,n,r,u),n.memoizedState=h.state,e=n.child):e=Dr(e,n,u),e}function xg(e,n,r,o){return Go(),n.flags|=256,ti(e,n,r,o),n.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(e){return{baseLanes:e,cachePool:sm()}}function Kf(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=qi),e}function yg(e,n,r){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,E;if((E=h)||(E=e!==null&&e.memoizedState===null?!1:(kn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,e===null){if(Je){if(u?ra(n):aa(),Je){var C=Tn,Y;if(Y=C){t:{for(Y=C,C=ur;Y.nodeType!==8;){if(!C){C=null;break t}if(Y=er(Y.nextSibling),Y===null){C=null;break t}}C=Y}C!==null?(n.memoizedState={dehydrated:C,treeContext:ka!==null?{id:br,overflow:Tr}:null,retryLane:536870912,hydrationErrors:null},Y=Di(18,null,null,0),Y.stateNode=C,Y.return=n,n.child=Y,di=n,Tn=null,Y=!0):Y=!1}Y||Wa(n)}if(C=n.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return Lh(C)?n.lanes=32:n.lanes=536870912,null;Cr(n)}return C=o.children,o=o.fallback,u?(aa(),u=n.mode,C=Uc({mode:"hidden",children:C},u),o=Va(o,u,r,null),C.return=n,o.return=n,C.sibling=o,n.child=C,u=n.child,u.memoizedState=Zf(r),u.childLanes=Kf(e,E,r),n.memoizedState=Yf,o):(ra(n),Qf(n,C))}if(Y=e.memoizedState,Y!==null&&(C=Y.dehydrated,C!==null)){if(h)n.flags&256?(ra(n),n.flags&=-257,n=Jf(e,n,r)):n.memoizedState!==null?(aa(),n.child=e.child,n.flags|=128,n=null):(aa(),u=o.fallback,C=n.mode,o=Uc({mode:"visible",children:o.children},C),u=Va(u,C,r,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Gs(n,e.child,null,r),o=n.child,o.memoizedState=Zf(r),o.childLanes=Kf(e,E,r),n.memoizedState=Yf,n=u);else if(ra(n),Lh(C)){if(E=C.nextSibling&&C.nextSibling.dataset,E)var ht=E.dgst;E=ht,o=Error(a(419)),o.stack="",o.digest=E,Vo({value:o,source:null,stack:null}),n=Jf(e,n,r)}else if(Yn||ko(e,n,r,!1),E=(r&e.childLanes)!==0,Yn||E){if(E=_n,E!==null&&(o=r&-r,o=(o&42)!==0?1:_e(o),o=(o&(E.suspendedLanes|r))!==0?0:o,o!==0&&o!==Y.retryLane))throw Y.retryLane=o,Ds(e,o),Pi(E,e,o),fg;C.data==="$?"||gh(),n=Jf(e,n,r)}else C.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=Y.treeContext,Tn=er(C.nextSibling),di=n,Je=!0,ja=null,ur=!1,e!==null&&(Xi[ji++]=br,Xi[ji++]=Tr,Xi[ji++]=ka,br=e.id,Tr=e.overflow,ka=n),n=Qf(n,o.children),n.flags|=4096);return n}return u?(aa(),u=o.fallback,C=n.mode,Y=e.child,ht=Y.sibling,o=Er(Y,{mode:"hidden",children:o.children}),o.subtreeFlags=Y.subtreeFlags&65011712,ht!==null?u=Er(ht,u):(u=Va(u,C,r,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,C=e.child.memoizedState,C===null?C=Zf(r):(Y=C.cachePool,Y!==null?(ht=Vn._currentValue,Y=Y.parent!==ht?{parent:ht,pool:ht}:Y):Y=sm(),C={baseLanes:C.baseLanes|r,cachePool:Y}),u.memoizedState=C,u.childLanes=Kf(e,E,r),n.memoizedState=Yf,o):(ra(n),r=e.child,e=r.sibling,r=Er(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(E=n.deletions,E===null?(n.deletions=[e],n.flags|=16):E.push(e)),n.child=r,n.memoizedState=null,r)}function Qf(e,n){return n=Uc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Uc(e,n){return e=Di(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Jf(e,n,r){return Gs(n,e.child,null,r),e=Qf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sg(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),gf(e.return,n,r)}function $f(e,n,r,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=r,h.tailMode=u)}function Mg(e,n,r){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(ti(e,n,o.children,r),o=kn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,r,n);else if(e.tag===19)Sg(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Mt(kn,o),u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&Rc(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),$f(n,!1,u,r,h);break;case"backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Rc(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}$f(n,!0,r,null,h);break;case"together":$f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Dr(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),ua|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(ko(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Er(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Er(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function th(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fc(e)))}function vx(e,n,r){switch(n.tag){case 3:It(n,n.stateNode.containerInfo),$r(n,Vn,e.memoizedState.cache),Go();break;case 27:case 5:Kt(n);break;case 4:It(n,n.stateNode.containerInfo);break;case 10:$r(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ra(n),n.flags|=128,null):(r&n.child.childLanes)!==0?yg(e,n,r):(ra(n),e=Dr(e,n,r),e!==null?e.sibling:null);ra(n);break;case 19:var u=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(ko(e,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return Mg(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(kn,kn.current),o)break;return null;case 22:case 23:return n.lanes=0,mg(e,n,r);case 24:$r(n,Vn,e.memoizedState.cache)}return Dr(e,n,r)}function Eg(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)Yn=!0;else{if(!th(e,r)&&(n.flags&128)===0)return Yn=!1,vx(e,n,r);Yn=(e.flags&131072)!==0}else Yn=!1,Je&&(n.flags&1048576)!==0&&$p(n,uc,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")cf(o)?(e=Qa(o,e),n.tag=1,n=_g(null,n,o,e,r)):(n.tag=0,n=qf(null,n,o,e,r));else{if(o!=null){if(u=o.$$typeof,u===z){n.tag=11,n=hg(null,n,o,e,r);break t}else if(u===K){n.tag=14,n=dg(null,n,o,e,r);break t}}throw n=dt(o)||o,Error(a(306,n,""))}}return n;case 0:return qf(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=Qa(o,n.pendingProps),_g(e,n,o,u,r);case 3:t:{if(It(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Ef(e,n),Ko(n,o,null,r);var E=n.memoizedState;if(o=E.cache,$r(n,Vn,o),o!==h.cache&&vf(n,[Vn],r,!0),Zo(),o=E.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=xg(e,n,o,r);break t}else if(o!==u){u=Vi(Error(a(424)),n),Vo(u),n=xg(e,n,o,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Tn=er(e.firstChild),di=n,Je=!0,ja=null,ur=!0,r=eg(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Go(),o===u){n=Dr(e,n,r);break t}ti(e,n,o,r)}n=n.child}return n;case 26:return Dc(e,n),e===null?(r=Rv(n.type,null,n.pendingProps,null))?n.memoizedState=r:Je||(r=n.type,e=n.pendingProps,o=jc(ct.current).createElement(r),o[vn]=n,o[yn]=e,ni(o,r,e),Mn(o),n.stateNode=o):n.memoizedState=Rv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Je&&(o=n.stateNode=bv(n.type,n.pendingProps,ct.current),di=n,ur=!0,u=Tn,pa(n.type)?(Oh=u,Tn=er(o.firstChild)):Tn=u),ti(e,n,n.pendingProps.children,r),Dc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Je&&((u=o=Tn)&&(o=jx(o,n.type,n.pendingProps,ur),o!==null?(n.stateNode=o,di=n,Tn=er(o.firstChild),ur=!1,u=!0):u=!1),u||Wa(n)),Kt(n),u=n.type,h=n.pendingProps,E=e!==null?e.memoizedProps:null,o=h.children,Dh(u,h)?o=null:E!==null&&Dh(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=Cf(e,n,cx,null,null,r),_l._currentValue=u),Dc(e,n),ti(e,n,o,r),n.child;case 6:return e===null&&Je&&((e=r=Tn)&&(r=Wx(r,n.pendingProps,ur),r!==null?(n.stateNode=r,di=n,Tn=null,e=!0):e=!1),e||Wa(n)),null;case 13:return yg(e,n,r);case 4:return It(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Gs(n,null,o,r):ti(e,n,o,r),n.child;case 11:return hg(e,n,n.type,n.pendingProps,r);case 7:return ti(e,n,n.pendingProps,r),n.child;case 8:return ti(e,n,n.pendingProps.children,r),n.child;case 12:return ti(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,$r(n,n.type,o.value),ti(e,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ya(n),u=si(u),o=o(u),n.flags|=1,ti(e,n,o,r),n.child;case 14:return dg(e,n,n.type,n.pendingProps,r);case 15:return pg(e,n,n.type,n.pendingProps,r);case 19:return Mg(e,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},e===null?(r=Uc(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Er(e.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return mg(e,n,r);case 24:return Ya(n),o=si(Vn),e===null?(u=yf(),u===null&&(u=_n,h=_f(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),n.memoizedState={parent:o,cache:u},Mf(n),$r(n,Vn,u)):((e.lanes&r)!==0&&(Ef(e,n),Ko(n,null,null,r),Zo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),$r(n,Vn,o)):(o=h.cache,$r(n,Vn,o),o!==u.cache&&vf(n,[Vn],r,!0))),ti(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Ur(e){e.flags|=4}function bg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Nv(n)){if(n=Wi.current,n!==null&&((Xe&4194048)===Xe?fr!==null:(Xe&62914560)!==Xe&&(Xe&536870912)===0||n!==fr))throw qo=Sf,om;e.flags|=8192}}function Nc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ot():536870912,e.lanes|=n,js|=n)}function il(e,n){if(!Je)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function En(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function _x(e,n,r){var o=n.pendingProps;switch(df(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(n),null;case 1:return En(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Rr(Vn),re(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ho(n)?Ur(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,nm())),En(n),null;case 26:return r=n.memoizedState,e===null?(Ur(n),r!==null?(En(n),bg(n,r)):(En(n),n.flags&=-16777217)):r?r!==e.memoizedState?(Ur(n),En(n),bg(n,r)):(En(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ur(n),En(n),n.flags&=-16777217),null;case 27:ge(n),r=ct.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ur(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return En(n),null}e=Nt.current,Ho(n)?tm(n):(e=bv(u,o,r),n.stateNode=e,Ur(n))}return En(n),null;case 5:if(ge(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ur(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return En(n),null}if(e=Nt.current,Ho(n))tm(n);else{switch(u=jc(ct.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(r,{is:o.is}):u.createElement(r)}}e[vn]=n,e[yn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(ni(e,r,o),r){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ur(n)}}return En(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ur(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=ct.current,Ho(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,u=di,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[vn]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||vv(e.nodeValue,r)),e||Wa(n)}else e=jc(e).createTextNode(o),e[vn]=n,n.stateNode=e}return En(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ho(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[vn]=n}else Go(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;En(n),u=!1}else u=nm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Cr(n),n):(Cr(n),null)}if(Cr(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,e=e!==null&&e.memoizedState!==null,r){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Nc(n,n.updateQueue),En(n),null;case 4:return re(),e===null&&Th(n.stateNode.containerInfo),En(n),null;case 10:return Rr(n.type),En(n),null;case 19:if(bt(kn),u=n.memoizedState,u===null)return En(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)il(u,!1);else{if(An!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Rc(e),h!==null){for(n.flags|=128,il(u,!1),e=h.updateQueue,n.updateQueue=e,Nc(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)Jp(r,e),r=r.sibling;return Mt(kn,kn.current&1|2),n.child}e=e.sibling}u.tail!==null&&qt()>Pc&&(n.flags|=128,o=!0,il(u,!1),n.lanes=4194304)}else{if(!o)if(e=Rc(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Nc(n,e),il(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Je)return En(n),null}else 2*qt()-u.renderingStartTime>Pc&&r!==536870912&&(n.flags|=128,o=!0,il(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=qt(),n.sibling=null,e=kn.current,Mt(kn,o?e&1|2:e&1),n):(En(n),null);case 22:case 23:return Cr(n),Rf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(En(n),n.subtreeFlags&6&&(n.flags|=8192)):En(n),r=n.updateQueue,r!==null&&Nc(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&bt(Za),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Rr(Vn),En(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function xx(e,n){switch(df(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Rr(Vn),re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ge(n),null;case 13:if(Cr(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Go()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return bt(kn),null;case 4:return re(),null;case 10:return Rr(n.type),null;case 22:case 23:return Cr(n),Rf(),e!==null&&bt(Za),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Rr(Vn),null;case 25:return null;default:return null}}function Tg(e,n){switch(df(n),n.tag){case 3:Rr(Vn),re();break;case 26:case 27:case 5:ge(n);break;case 4:re();break;case 13:Cr(n);break;case 19:bt(kn);break;case 10:Rr(n.type);break;case 22:case 23:Cr(n),Rf(),e!==null&&bt(Za);break;case 24:Rr(Vn)}}function rl(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var h=r.create,E=r.inst;o=h(),E.destroy=o}r=r.next}while(r!==u)}}catch(C){gn(n,n.return,C)}}function sa(e,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var E=o.inst,C=E.destroy;if(C!==void 0){E.destroy=void 0,u=n;var Y=r,ht=C;try{ht()}catch(At){gn(u,Y,At)}}}o=o.next}while(o!==h)}}catch(At){gn(n,n.return,At)}}function Ag(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{dm(n,r)}catch(o){gn(e,e.return,o)}}}function Rg(e,n,r){r.props=Qa(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){gn(e,n,o)}}function al(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){gn(e,n,u)}}function hr(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){gn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){gn(e,n,u)}else r.current=null}function wg(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){gn(e,e.return,u)}}function eh(e,n,r){try{var o=e.stateNode;Hx(o,e.type,r,n),o[yn]=n}catch(u){gn(e,e.return,u)}}function Cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ih(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Xc));else if(o!==4&&(o===27&&pa(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(ih(e,n,r),e=e.sibling;e!==null;)ih(e,n,r),e=e.sibling}function Lc(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&(o===27&&pa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Lc(e,n,r),e=e.sibling;e!==null;)Lc(e,n,r),e=e.sibling}function Dg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ni(n,o,r),n[vn]=e,n[yn]=r}catch(h){gn(e,e.return,h)}}var Nr=!1,Nn=!1,rh=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,Zn=null;function yx(e,n){if(e=e.containerInfo,wh=Qc,e=Vp(e),ef(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break t}var E=0,C=-1,Y=-1,ht=0,At=0,Dt=e,mt=null;e:for(;;){for(var vt;Dt!==r||u!==0&&Dt.nodeType!==3||(C=E+u),Dt!==h||o!==0&&Dt.nodeType!==3||(Y=E+o),Dt.nodeType===3&&(E+=Dt.nodeValue.length),(vt=Dt.firstChild)!==null;)mt=Dt,Dt=vt;for(;;){if(Dt===e)break e;if(mt===r&&++ht===u&&(C=E),mt===h&&++At===o&&(Y=E),(vt=Dt.nextSibling)!==null)break;Dt=mt,mt=Dt.parentNode}Dt=vt}r=C===-1||Y===-1?null:{start:C,end:Y}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ch={focusedElem:e,selectionRange:r},Qc=!1,Zn=n;Zn!==null;)if(n=Zn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Zn=e;else for(;Zn!==null;){switch(n=Zn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,r=n,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var be=Qa(r.type,u,r.elementType===r.type);e=o.getSnapshotBeforeUpdate(be,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ye){gn(r,r.return,ye)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Nh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Zn=e;break}Zn=n.return}}function Ng(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:oa(e,r),o&4&&rl(5,r);break;case 1:if(oa(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(E){gn(r,r.return,E)}else{var u=Qa(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){gn(r,r.return,E)}}o&64&&Ag(r),o&512&&al(r,r.return);break;case 3:if(oa(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{dm(e,n)}catch(E){gn(r,r.return,E)}}break;case 27:n===null&&o&4&&Dg(r);case 26:case 5:oa(e,r),n===null&&o&4&&wg(r),o&512&&al(r,r.return);break;case 12:oa(e,r);break;case 13:oa(e,r),o&4&&Pg(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Cx.bind(null,r),qx(e,r))));break;case 22:if(o=r.memoizedState!==null||Nr,!o){n=n!==null&&n.memoizedState!==null||Nn,u=Nr;var h=Nn;Nr=o,(Nn=n)&&!h?la(e,r,(r.subtreeFlags&8772)!==0):oa(e,r),Nr=u,Nn=h}break;case 30:break;default:oa(e,r)}}function Lg(e){var n=e.alternate;n!==null&&(e.alternate=null,Lg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Sn=null,Ei=!1;function Lr(e,n,r){for(r=r.child;r!==null;)Og(e,n,r),r=r.sibling}function Og(e,n,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Et,r)}catch{}switch(r.tag){case 26:Nn||hr(r,n),Lr(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Nn||hr(r,n);var o=Sn,u=Ei;pa(r.type)&&(Sn=r.stateNode,Ei=!1),Lr(e,n,r),pl(r.stateNode),Sn=o,Ei=u;break;case 5:Nn||hr(r,n);case 6:if(o=Sn,u=Ei,Sn=null,Lr(e,n,r),Sn=o,Ei=u,Sn!==null)if(Ei)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(r.stateNode)}catch(h){gn(r,n,h)}else try{Sn.removeChild(r.stateNode)}catch(h){gn(r,n,h)}break;case 18:Sn!==null&&(Ei?(e=Sn,Mv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Ml(e)):Mv(Sn,r.stateNode));break;case 4:o=Sn,u=Ei,Sn=r.stateNode.containerInfo,Ei=!0,Lr(e,n,r),Sn=o,Ei=u;break;case 0:case 11:case 14:case 15:Nn||sa(2,r,n),Nn||sa(4,r,n),Lr(e,n,r);break;case 1:Nn||(hr(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Rg(r,n,o)),Lr(e,n,r);break;case 21:Lr(e,n,r);break;case 22:Nn=(o=Nn)||r.memoizedState!==null,Lr(e,n,r),Nn=o;break;default:Lr(e,n,r)}}function Pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(r){gn(n,n.return,r)}}function Sx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ug),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ug),n;default:throw Error(a(435,e.tag))}}function ah(e,n){var r=Sx(e);n.forEach(function(o){var u=Dx.bind(null,e,o);r.has(o)||(r.add(o),o.then(u,u))})}function Ui(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=e,E=n,C=E;t:for(;C!==null;){switch(C.tag){case 27:if(pa(C.type)){Sn=C.stateNode,Ei=!1;break t}break;case 5:Sn=C.stateNode,Ei=!1;break t;case 3:case 4:Sn=C.stateNode.containerInfo,Ei=!0;break t}C=C.return}if(Sn===null)throw Error(a(160));Og(h,E,u),Sn=null,Ei=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)zg(n,e),n=n.sibling}var tr=null;function zg(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ui(n,e),Ni(e),o&4&&(sa(3,e,e.return),rl(3,e),sa(5,e,e.return));break;case 1:Ui(n,e),Ni(e),o&512&&(Nn||r===null||hr(r,r.return)),o&64&&Nr&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=tr;if(Ui(n,e),Ni(e),o&512&&(Nn||r===null||hr(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[gi]||h[vn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),ni(h,o,r),h[vn]=e,Mn(h),o=h;break t;case"link":var E=Dv("link","href",u).get(o+(r.href||""));if(E){for(var C=0;C<E.length;C++)if(h=E[C],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(C,1);break e}}h=u.createElement(o),ni(h,o,r),u.head.appendChild(h);break;case"meta":if(E=Dv("meta","content",u).get(o+(r.content||""))){for(C=0;C<E.length;C++)if(h=E[C],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(C,1);break e}}h=u.createElement(o),ni(h,o,r),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[vn]=e,Mn(h),o=h}e.stateNode=o}else Uv(u,e.type,e.stateNode);else e.stateNode=Cv(u,o,e.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?Uv(u,e.type,e.stateNode):Cv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&eh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Ui(n,e),Ni(e),o&512&&(Nn||r===null||hr(r,r.return)),r!==null&&o&4&&eh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Ui(n,e),Ni(e),o&512&&(Nn||r===null||hr(r,r.return)),e.flags&32){u=e.stateNode;try{Jn(u,"")}catch(vt){gn(e,e.return,vt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,eh(e,u,r!==null?r.memoizedProps:u)),o&1024&&(rh=!0);break;case 6:if(Ui(n,e),Ni(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(vt){gn(e,e.return,vt)}}break;case 3:if(Yc=null,u=tr,tr=Wc(n.containerInfo),Ui(n,e),tr=u,Ni(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Ml(n.containerInfo)}catch(vt){gn(e,e.return,vt)}rh&&(rh=!1,Ig(e));break;case 4:o=tr,tr=Wc(e.stateNode.containerInfo),Ui(n,e),Ni(e),tr=o;break;case 12:Ui(n,e),Ni(e);break;case 13:Ui(n,e),Ni(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fh=qt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ah(e,o)));break;case 22:u=e.memoizedState!==null;var Y=r!==null&&r.memoizedState!==null,ht=Nr,At=Nn;if(Nr=ht||u,Nn=At||Y,Ui(n,e),Nn=At,Nr=ht,Ni(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||Y||Nr||Nn||Ja(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){Y=r=n;try{if(h=Y.stateNode,u)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{C=Y.stateNode;var Dt=Y.memoizedProps.style,mt=Dt!=null&&Dt.hasOwnProperty("display")?Dt.display:null;C.style.display=mt==null||typeof mt=="boolean"?"":(""+mt).trim()}}catch(vt){gn(Y,Y.return,vt)}}}else if(n.tag===6){if(r===null){Y=n;try{Y.stateNode.nodeValue=u?"":Y.memoizedProps}catch(vt){gn(Y,Y.return,vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,ah(e,r))));break;case 19:Ui(n,e),Ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ah(e,o)));break;case 30:break;case 21:break;default:Ui(n,e),Ni(e)}}function Ni(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(Cg(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,h=nh(e);Lc(e,h,u);break;case 5:var E=r.stateNode;r.flags&32&&(Jn(E,""),r.flags&=-33);var C=nh(e);Lc(e,C,E);break;case 3:case 4:var Y=r.stateNode.containerInfo,ht=nh(e);ih(e,ht,Y);break;default:throw Error(a(161))}}catch(At){gn(e,e.return,At)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ng(e,n.alternate,n),n=n.sibling}function Ja(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:sa(4,n,n.return),Ja(n);break;case 1:hr(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Rg(n,n.return,r),Ja(n);break;case 27:pl(n.stateNode);case 26:case 5:hr(n,n.return),Ja(n);break;case 22:n.memoizedState===null&&Ja(n);break;case 30:Ja(n);break;default:Ja(n)}e=e.sibling}}function la(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,E=h.flags;switch(h.tag){case 0:case 11:case 15:la(u,h,r),rl(4,h);break;case 1:if(la(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ht){gn(o,o.return,ht)}if(o=h,u=o.updateQueue,u!==null){var C=o.stateNode;try{var Y=u.shared.hiddenCallbacks;if(Y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Y.length;u++)hm(Y[u],C)}catch(ht){gn(o,o.return,ht)}}r&&E&64&&Ag(h),al(h,h.return);break;case 27:Dg(h);case 26:case 5:la(u,h,r),r&&o===null&&E&4&&wg(h),al(h,h.return);break;case 12:la(u,h,r);break;case 13:la(u,h,r),r&&E&4&&Pg(u,h);break;case 22:h.memoizedState===null&&la(u,h,r),al(h,h.return);break;case 30:break;default:la(u,h,r)}n=n.sibling}}function sh(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Xo(r))}function oh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xo(e))}function dr(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bg(e,n,r,o),n=n.sibling}function Bg(e,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:dr(e,n,r,o),u&2048&&rl(9,n);break;case 1:dr(e,n,r,o);break;case 3:dr(e,n,r,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xo(e)));break;case 12:if(u&2048){dr(e,n,r,o),e=n.stateNode;try{var h=n.memoizedProps,E=h.id,C=h.onPostCommit;typeof C=="function"&&C(E,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Y){gn(n,n.return,Y)}}else dr(e,n,r,o);break;case 13:dr(e,n,r,o);break;case 23:break;case 22:h=n.stateNode,E=n.alternate,n.memoizedState!==null?h._visibility&2?dr(e,n,r,o):sl(e,n):h._visibility&2?dr(e,n,r,o):(h._visibility|=2,Vs(e,n,r,o,(n.subtreeFlags&10256)!==0)),u&2048&&sh(E,n);break;case 24:dr(e,n,r,o),u&2048&&oh(n.alternate,n);break;default:dr(e,n,r,o)}}function Vs(e,n,r,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,E=n,C=r,Y=o,ht=E.flags;switch(E.tag){case 0:case 11:case 15:Vs(h,E,C,Y,u),rl(8,E);break;case 23:break;case 22:var At=E.stateNode;E.memoizedState!==null?At._visibility&2?Vs(h,E,C,Y,u):sl(h,E):(At._visibility|=2,Vs(h,E,C,Y,u)),u&&ht&2048&&sh(E.alternate,E);break;case 24:Vs(h,E,C,Y,u),u&&ht&2048&&oh(E.alternate,E);break;default:Vs(h,E,C,Y,u)}n=n.sibling}}function sl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,u=o.flags;switch(o.tag){case 22:sl(r,o),u&2048&&sh(o.alternate,o);break;case 24:sl(r,o),u&2048&&oh(o.alternate,o);break;default:sl(r,o)}n=n.sibling}}var ol=8192;function ks(e){if(e.subtreeFlags&ol)for(e=e.child;e!==null;)Fg(e),e=e.sibling}function Fg(e){switch(e.tag){case 26:ks(e),e.flags&ol&&e.memoizedState!==null&&sy(tr,e.memoizedState,e.memoizedProps);break;case 5:ks(e);break;case 3:case 4:var n=tr;tr=Wc(e.stateNode.containerInfo),ks(e),tr=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ol,ol=16777216,ks(e),ol=n):ks(e));break;default:ks(e)}}function Hg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Zn=o,Vg(o,e)}Hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gg(e),e=e.sibling}function Gg(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&sa(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Oc(e)):ll(e);break;default:ll(e)}}function Oc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Zn=o,Vg(o,e)}Hg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:sa(8,n,n.return),Oc(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Oc(n));break;default:Oc(n)}e=e.sibling}}function Vg(e,n){for(;Zn!==null;){var r=Zn;switch(r.tag){case 0:case 11:case 15:sa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Zn=o;else t:for(r=e;Zn!==null;){o=Zn;var u=o.sibling,h=o.return;if(Lg(o),o===r){Zn=null;break t}if(u!==null){u.return=h,Zn=u;break t}Zn=h}}}var Mx={getCacheForType:function(e){var n=si(Vn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},Ex=typeof WeakMap=="function"?WeakMap:Map,an=0,_n=null,Be=null,Xe=0,sn=0,Li=null,ca=!1,Xs=!1,lh=!1,Or=0,An=0,ua=0,$a=0,ch=0,qi=0,js=0,cl=null,bi=null,uh=!1,fh=0,Pc=1/0,zc=null,fa=null,ei=0,ha=null,Ws=null,qs=0,hh=0,dh=null,kg=null,ul=0,ph=null;function Oi(){if((an&2)!==0&&Xe!==0)return Xe&-Xe;if(N.T!==null){var e=Os;return e!==0?e:Sh()}return ze()}function Xg(){qi===0&&(qi=(Xe&536870912)===0||Je?$():536870912);var e=Wi.current;return e!==null&&(e.flags|=32),qi}function Pi(e,n,r){(e===_n&&(sn===2||sn===9)||e.cancelPendingCommit!==null)&&(Ys(e,0),da(e,Xe,qi,!1)),Jt(e,r),((an&2)===0||e!==_n)&&(e===_n&&((an&2)===0&&($a|=r),An===4&&da(e,Xe,qi,!1)),pr(e))}function jg(e,n,r){if((an&6)!==0)throw Error(a(327));var o=!r&&(n&124)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=o?Ax(e,n):vh(e,n,!0),h=o;do{if(u===0){Xs&&!o&&da(e,n,0,!1);break}else{if(r=e.current.alternate,h&&!bx(r)){u=vh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;t:{var C=e;u=cl;var Y=C.current.memoizedState.isDehydrated;if(Y&&(Ys(C,E).flags|=256),E=vh(C,E,!1),E!==2){if(lh&&!Y){C.errorRecoveryDisabledLanes|=h,$a|=h,u=4;break t}h=bi,bi=u,h!==null&&(bi===null?bi=h:bi.push.apply(bi,h))}u=E}if(h=!1,u!==2)continue}}if(u===1){Ys(e,0),da(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:da(o,n,qi,!ca);break t;case 2:bi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=fh+300-qt(),10<u)){if(da(o,n,qi,!ca),ae(o,0,!0)!==0)break t;o.timeoutHandle=yv(Wg.bind(null,o,r,bi,zc,uh,n,qi,$a,js,ca,h,2,-0,0),u);break t}Wg(o,r,bi,zc,uh,n,qi,$a,js,ca,h,0,-0,0)}}break}while(!0);pr(e)}function Wg(e,n,r,o,u,h,E,C,Y,ht,At,Dt,mt,vt){if(e.timeoutHandle=-1,Dt=n.subtreeFlags,(Dt&8192||(Dt&16785408)===16785408)&&(vl={stylesheets:null,count:0,unsuspend:ay},Fg(n),Dt=oy(),Dt!==null)){e.cancelPendingCommit=Dt($g.bind(null,e,n,h,r,o,u,E,C,Y,At,1,mt,vt)),da(e,h,E,!ht);return}$g(e,n,h,r,o,u,E,C,Y)}function bx(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!Ci(h(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function da(e,n,r,o){n&=~ch,n&=~$a,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Wt(u),E=1<<h;o[h]=-1,u&=~E}r!==0&&Ct(e,r,n)}function Ic(){return(an&6)===0?(fl(0),!1):!0}function mh(){if(Be!==null){if(sn===0)var e=Be.return;else e=Be,Ar=qa=null,Nf(e),Hs=null,el=0,e=Be;for(;e!==null;)Tg(e.alternate,e),e=e.return;Be=null}}function Ys(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Vx(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),mh(),_n=e,Be=r=Er(e.current,null),Xe=n,sn=0,Li=null,ca=!1,Xs=Gt(e,n),lh=!1,js=qi=ch=$a=ua=An=0,bi=cl=null,uh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Wt(o),h=1<<u;n|=e[u],o&=~h}return Or=n,ac(),r}function qg(e,n){Oe=null,N.H=bc,n===Wo||n===pc?(n=um(),sn=3):n===om?(n=um(),sn=4):sn=n===fg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Li=n,Be===null&&(An=1,Cc(e,Vi(n,e.current)))}function Yg(){var e=N.H;return N.H=bc,e===null?bc:e}function Zg(){var e=N.A;return N.A=Mx,e}function gh(){An=4,ca||(Xe&4194048)!==Xe&&Wi.current!==null||(Xs=!0),(ua&134217727)===0&&($a&134217727)===0||_n===null||da(_n,Xe,qi,!1)}function vh(e,n,r){var o=an;an|=2;var u=Yg(),h=Zg();(_n!==e||Xe!==n)&&(zc=null,Ys(e,n)),n=!1;var E=An;t:do try{if(sn!==0&&Be!==null){var C=Be,Y=Li;switch(sn){case 8:mh(),E=6;break t;case 3:case 2:case 9:case 6:Wi.current===null&&(n=!0);var ht=sn;if(sn=0,Li=null,Zs(e,C,Y,ht),r&&Xs){E=0;break t}break;default:ht=sn,sn=0,Li=null,Zs(e,C,Y,ht)}}Tx(),E=An;break}catch(At){qg(e,At)}while(!0);return n&&e.shellSuspendCounter++,Ar=qa=null,an=o,N.H=u,N.A=h,Be===null&&(_n=null,Xe=0,ac()),E}function Tx(){for(;Be!==null;)Kg(Be)}function Ax(e,n){var r=an;an|=2;var o=Yg(),u=Zg();_n!==e||Xe!==n?(zc=null,Pc=qt()+500,Ys(e,n)):Xs=Gt(e,n);t:do try{if(sn!==0&&Be!==null){n=Be;var h=Li;e:switch(sn){case 1:sn=0,Li=null,Zs(e,n,h,1);break;case 2:case 9:if(lm(h)){sn=0,Li=null,Qg(n);break}n=function(){sn!==2&&sn!==9||_n!==e||(sn=7),pr(e)},h.then(n,n);break t;case 3:sn=7;break t;case 4:sn=5;break t;case 7:lm(h)?(sn=0,Li=null,Qg(n)):(sn=0,Li=null,Zs(e,n,h,7));break;case 5:var E=null;switch(Be.tag){case 26:E=Be.memoizedState;case 5:case 27:var C=Be;if(!E||Nv(E)){sn=0,Li=null;var Y=C.sibling;if(Y!==null)Be=Y;else{var ht=C.return;ht!==null?(Be=ht,Bc(ht)):Be=null}break e}}sn=0,Li=null,Zs(e,n,h,5);break;case 6:sn=0,Li=null,Zs(e,n,h,6);break;case 8:mh(),An=6;break t;default:throw Error(a(462))}}Rx();break}catch(At){qg(e,At)}while(!0);return Ar=qa=null,N.H=o,N.A=u,an=r,Be!==null?0:(_n=null,Xe=0,ac(),An)}function Rx(){for(;Be!==null&&!Ee();)Kg(Be)}function Kg(e){var n=Eg(e.alternate,e,Or);e.memoizedProps=e.pendingProps,n===null?Bc(e):Be=n}function Qg(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=vg(r,n,n.pendingProps,n.type,void 0,Xe);break;case 11:n=vg(r,n,n.pendingProps,n.type.render,n.ref,Xe);break;case 5:Nf(n);default:Tg(r,n),n=Be=Jp(n,Or),n=Eg(r,n,Or)}e.memoizedProps=e.pendingProps,n===null?Bc(e):Be=n}function Zs(e,n,r,o){Ar=qa=null,Nf(n),Hs=null,el=0;var u=n.return;try{if(gx(e,u,n,r,Xe)){An=1,Cc(e,Vi(r,e.current)),Be=null;return}}catch(h){if(u!==null)throw Be=u,h;An=1,Cc(e,Vi(r,e.current)),Be=null;return}n.flags&32768?(Je||o===1?e=!0:Xs||(Xe&536870912)!==0?e=!1:(ca=e=!0,(o===2||o===9||o===3||o===6)&&(o=Wi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Jg(n,e)):Bc(n)}function Bc(e){var n=e;do{if((n.flags&32768)!==0){Jg(n,ca);return}e=n.return;var r=_x(n.alternate,n,Or);if(r!==null){Be=r;return}if(n=n.sibling,n!==null){Be=n;return}Be=n=e}while(n!==null);An===0&&(An=5)}function Jg(e,n){do{var r=xx(e.alternate,e);if(r!==null){r.flags&=32767,Be=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){Be=e;return}Be=e=r}while(e!==null);An=6,Be=null}function $g(e,n,r,o,u,h,E,C,Y){e.cancelPendingCommit=null;do Fc();while(ei!==0);if((an&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(h=n.lanes|n.childLanes,h|=of,Pt(e,r,h,E,C,Y),e===_n&&(Be=_n=null,Xe=0),Ws=n,ha=e,qs=r,hh=h,dh=u,kg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ux(on,function(){return rv(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=H.p,H.p=2,E=an,an|=4;try{yx(e,n,r)}finally{an=E,H.p=u,N.T=o}}ei=1,tv(),ev(),nv()}}function tv(){if(ei===1){ei=0;var e=ha,n=Ws,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null;var o=H.p;H.p=2;var u=an;an|=4;try{zg(n,e);var h=Ch,E=Vp(e.containerInfo),C=h.focusedElem,Y=h.selectionRange;if(E!==C&&C&&C.ownerDocument&&Gp(C.ownerDocument.documentElement,C)){if(Y!==null&&ef(C)){var ht=Y.start,At=Y.end;if(At===void 0&&(At=ht),"selectionStart"in C)C.selectionStart=ht,C.selectionEnd=Math.min(At,C.value.length);else{var Dt=C.ownerDocument||document,mt=Dt&&Dt.defaultView||window;if(mt.getSelection){var vt=mt.getSelection(),be=C.textContent.length,ye=Math.min(Y.start,be),dn=Y.end===void 0?ye:Math.min(Y.end,be);!vt.extend&&ye>dn&&(E=dn,dn=ye,ye=E);var at=Hp(C,ye),et=Hp(C,dn);if(at&&et&&(vt.rangeCount!==1||vt.anchorNode!==at.node||vt.anchorOffset!==at.offset||vt.focusNode!==et.node||vt.focusOffset!==et.offset)){var ut=Dt.createRange();ut.setStart(at.node,at.offset),vt.removeAllRanges(),ye>dn?(vt.addRange(ut),vt.extend(et.node,et.offset)):(ut.setEnd(et.node,et.offset),vt.addRange(ut))}}}}for(Dt=[],vt=C;vt=vt.parentNode;)vt.nodeType===1&&Dt.push({element:vt,left:vt.scrollLeft,top:vt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Dt.length;C++){var wt=Dt[C];wt.element.scrollLeft=wt.left,wt.element.scrollTop=wt.top}}Qc=!!wh,Ch=wh=null}finally{an=u,H.p=o,N.T=r}}e.current=n,ei=2}}function ev(){if(ei===2){ei=0;var e=ha,n=Ws,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=N.T,N.T=null;var o=H.p;H.p=2;var u=an;an|=4;try{Ng(e,n.alternate,n)}finally{an=u,H.p=o,N.T=r}}ei=3}}function nv(){if(ei===4||ei===3){ei=0,he();var e=ha,n=Ws,r=qs,o=kg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ei=5:(ei=0,Ws=ha=null,iv(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(fa=null),je(r),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=H.p,H.p=2,N.T=null;try{for(var h=e.onRecoverableError,E=0;E<o.length;E++){var C=o[E];h(C.value,{componentStack:C.stack})}}finally{N.T=n,H.p=u}}(qs&3)!==0&&Fc(),pr(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===ph?ul++:(ul=0,ph=e):ul=0,fl(0)}}function iv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xo(n)))}function Fc(e){return tv(),ev(),nv(),rv()}function rv(){if(ei!==5)return!1;var e=ha,n=hh;hh=0;var r=je(qs),o=N.T,u=H.p;try{H.p=32>r?32:r,N.T=null,r=dh,dh=null;var h=ha,E=qs;if(ei=0,Ws=ha=null,qs=0,(an&6)!==0)throw Error(a(331));var C=an;if(an|=4,Gg(h.current),Bg(h,h.current,E,r),an=C,fl(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Et,h)}catch{}return!0}finally{H.p=u,N.T=o,iv(e,n)}}function av(e,n,r){n=Vi(r,n),n=Wf(e.stateNode,n,2),e=na(e,n,2),e!==null&&(Jt(e,2),pr(e))}function gn(e,n,r){if(e.tag===3)av(e,e,r);else for(;n!==null;){if(n.tag===3){av(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(fa===null||!fa.has(o))){e=Vi(r,e),r=cg(2),o=na(n,r,2),o!==null&&(ug(r,o,n,e),Jt(o,2),pr(o));break}}n=n.return}}function _h(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Ex;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(lh=!0,u.add(r),e=wx.bind(null,e,n,r),n.then(e,e))}function wx(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,_n===e&&(Xe&r)===r&&(An===4||An===3&&(Xe&62914560)===Xe&&300>qt()-fh?(an&2)===0&&Ys(e,0):ch|=r,js===Xe&&(js=0)),pr(e)}function sv(e,n){n===0&&(n=Ot()),e=Ds(e,n),e!==null&&(Jt(e,n),pr(e))}function Cx(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),sv(e,r)}function Dx(e,n){var r=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),sv(e,r)}function Ux(e,n){return j(e,n)}var Hc=null,Ks=null,xh=!1,Gc=!1,yh=!1,ts=0;function pr(e){e!==Ks&&e.next===null&&(Ks===null?Hc=Ks=e:Ks=Ks.next=e),Gc=!0,xh||(xh=!0,Lx())}function fl(e,n){if(!yh&&Gc){yh=!0;do for(var r=!1,o=Hc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var E=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-Wt(42|e)+1)-1,h&=u&~(E&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,uv(o,h))}else h=Xe,h=ae(o,o===_n?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Gt(o,h)||(r=!0,uv(o,h));o=o.next}while(r);yh=!1}}function Nx(){ov()}function ov(){Gc=xh=!1;var e=0;ts!==0&&(Gx()&&(e=ts),ts=0);for(var n=qt(),r=null,o=Hc;o!==null;){var u=o.next,h=lv(o,n);h===0?(o.next=null,r===null?Hc=u:r.next=u,u===null&&(Ks=r)):(r=o,(e!==0||(h&3)!==0)&&(Gc=!0)),o=u}fl(e)}function lv(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var E=31-Wt(h),C=1<<E,Y=u[E];Y===-1?((C&r)===0||(C&o)!==0)&&(u[E]=Te(C,n)):Y<=n&&(e.expiredLanes|=C),h&=~C}if(n=_n,r=Xe,r=ae(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(sn===2||sn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Gt(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),je(r)){case 2:case 8:r=ve;break;case 32:r=on;break;case 268435456:r=G;break;default:r=on}return o=cv.bind(null,e),r=j(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function cv(e,n){if(ei!==0&&ei!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Fc()&&e.callbackNode!==r)return null;var o=Xe;return o=ae(e,e===_n?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(jg(e,o,n),lv(e,qt()),e.callbackNode!=null&&e.callbackNode===r?cv.bind(null,e):null)}function uv(e,n){if(Fc())return null;jg(e,n,!0)}function Lx(){kx(function(){(an&6)!==0?j(ie,Nx):ov()})}function Sh(){return ts===0&&(ts=$()),ts}function fv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_s(""+e)}function hv(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function Ox(e,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var h=fv((u[yn]||null).action),E=o.submitter;E&&(n=(n=E[yn]||null)?fv(n.formAction):E.getAttribute("formAction"),n!==null&&(h=n,E=null));var C=new Ba("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ts!==0){var Y=E?hv(u,E):new FormData(u);Gf(r,{pending:!0,data:Y,method:u.method,action:h},null,Y)}}else typeof h=="function"&&(C.preventDefault(),Y=E?hv(u,E):new FormData(u),Gf(r,{pending:!0,data:Y,method:u.method,action:h},h,Y))},currentTarget:u}]})}}for(var Mh=0;Mh<sf.length;Mh++){var Eh=sf[Mh],Px=Eh.toLowerCase(),zx=Eh[0].toUpperCase()+Eh.slice(1);$i(Px,"on"+zx)}$i(jp,"onAnimationEnd"),$i(Wp,"onAnimationIteration"),$i(qp,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i($_,"onTransitionRun"),$i(tx,"onTransitionStart"),$i(ex,"onTransitionCancel"),$i(Yp,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function dv(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var E=o.length-1;0<=E;E--){var C=o[E],Y=C.instance,ht=C.currentTarget;if(C=C.listener,Y!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ht;try{h(u)}catch(At){wc(At)}u.currentTarget=null,h=Y}else for(E=0;E<o.length;E++){if(C=o[E],Y=C.instance,ht=C.currentTarget,C=C.listener,Y!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ht;try{h(u)}catch(At){wc(At)}u.currentTarget=null,h=Y}}}}function Fe(e,n){var r=n[mi];r===void 0&&(r=n[mi]=new Set);var o=e+"__bubble";r.has(o)||(pv(n,e,2,!1),r.add(o))}function bh(e,n,r){var o=0;n&&(o|=4),pv(r,e,o,n)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Th(e){if(!e[Vc]){e[Vc]=!0,Yr.forEach(function(r){r!=="selectionchange"&&(Ix.has(r)||bh(r,!1,e),bh(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vc]||(n[Vc]=!0,bh("selectionchange",!1,n))}}function pv(e,n,r,o){switch(Bv(n)){case 2:var u=uy;break;case 8:u=fy;break;default:u=Fh}r=u.bind(null,n,r,e),u=void 0,!xs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function Ah(e,n,r,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var C=o.stateNode.containerInfo;if(C===u)break;if(E===4)for(E=o.return;E!==null;){var Y=E.tag;if((Y===3||Y===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;C!==null;){if(E=vi(C),E===null)return;if(Y=E.tag,Y===5||Y===6||Y===26||Y===27){o=h=E;continue t}C=C.parentNode}}o=o.return}jl(function(){var ht=h,At=No(r),Dt=[];t:{var mt=Zp.get(e);if(mt!==void 0){var vt=Ba,be=e;switch(e){case"keypress":if(za(r)===0)break t;case"keydown":case"keyup":vt=Wu;break;case"focusin":be="focus",vt=Oo;break;case"focusout":be="blur",vt=Oo;break;case"beforeblur":case"afterblur":vt=Oo;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":vt=ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":vt=Es;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":vt=Yu;break;case jp:case Wp:case qp:vt=Ql;break;case Yp:vt=Zu;break;case"scroll":case"scrollend":vt=Hu;break;case"wheel":vt=Qu;break;case"copy":case"cut":case"paste":vt=$l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":vt=tc;break;case"toggle":case"beforetoggle":vt=nc}var ye=(n&4)!==0,dn=!ye&&(e==="scroll"||e==="scrollend"),at=ye?mt!==null?mt+"Capture":null:mt;ye=[];for(var et=ht,ut;et!==null;){var wt=et;if(ut=wt.stateNode,wt=wt.tag,wt!==5&&wt!==26&&wt!==27||ut===null||at===null||(wt=Pa(et,at),wt!=null&&ye.push(dl(et,wt,ut))),dn)break;et=et.return}0<ye.length&&(mt=new vt(mt,be,null,r,At),Dt.push({event:mt,listeners:ye}))}}if((n&7)===0){t:{if(mt=e==="mouseover"||e==="pointerover",vt=e==="mouseout"||e==="pointerout",mt&&r!==Uo&&(be=r.relatedTarget||r.fromElement)&&(vi(be)||be[On]))break t;if((vt||mt)&&(mt=At.window===At?At:(mt=At.ownerDocument)?mt.defaultView||mt.parentWindow:window,vt?(be=r.relatedTarget||r.toElement,vt=ht,be=be?vi(be):null,be!==null&&(dn=c(be),ye=be.tag,be!==dn||ye!==5&&ye!==27&&ye!==6)&&(be=null)):(vt=null,be=ht),vt!==be)){if(ye=ql,wt="onMouseLeave",at="onMouseEnter",et="mouse",(e==="pointerout"||e==="pointerover")&&(ye=tc,wt="onPointerLeave",at="onPointerEnter",et="pointer"),dn=vt==null?mt:Hi(vt),ut=be==null?mt:Hi(be),mt=new ye(wt,et+"leave",vt,r,At),mt.target=dn,mt.relatedTarget=ut,wt=null,vi(At)===ht&&(ye=new ye(at,et+"enter",be,r,At),ye.target=ut,ye.relatedTarget=dn,wt=ye),dn=wt,vt&&be)e:{for(ye=vt,at=be,et=0,ut=ye;ut;ut=Qs(ut))et++;for(ut=0,wt=at;wt;wt=Qs(wt))ut++;for(;0<et-ut;)ye=Qs(ye),et--;for(;0<ut-et;)at=Qs(at),ut--;for(;et--;){if(ye===at||at!==null&&ye===at.alternate)break e;ye=Qs(ye),at=Qs(at)}ye=null}else ye=null;vt!==null&&mv(Dt,mt,vt,ye,!1),be!==null&&dn!==null&&mv(Dt,dn,be,ye,!0)}}t:{if(mt=ht?Hi(ht):window,vt=mt.nodeName&&mt.nodeName.toLowerCase(),vt==="select"||vt==="input"&&mt.type==="file")var se=hi;else if(Yt(mt))if($n)se=As;else{se=$u;var Ie=Ju}else vt=mt.nodeName,!vt||vt.toLowerCase()!=="input"||mt.type!=="checkbox"&&mt.type!=="radio"?ht&&vs(ht.elementType)&&(se=hi):se=tf;if(se&&(se=se(e,ht))){xe(Dt,se,r,At);break t}Ie&&Ie(e,mt,ht),e==="focusout"&&ht&&mt.type==="number"&&ht.memoizedProps.value!=null&&Hn(mt,"number",mt.value)}switch(Ie=ht?Hi(ht):window,e){case"focusin":(Yt(Ie)||Ie.contentEditable==="true")&&(Rs=Ie,nf=ht,Fo=null);break;case"focusout":Fo=nf=Rs=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,kp(Dt,r,At);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":kp(Dt,r,At)}var fe;if(g)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Ut?tt(e,r)&&(Me="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Me="onCompositionStart");Me&&(F&&r.locale!=="ko"&&(Ut||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Ut&&(fe=Wl()):(yi=At,fi="value"in yi?yi.value:yi.textContent,Ut=!0)),Ie=kc(ht,Me),0<Ie.length&&(Me=new zo(Me,e,null,r,At),Dt.push({event:Me,listeners:Ie}),fe?Me.data=fe:(fe=gt(r),fe!==null&&(Me.data=fe)))),(fe=R?Vt(e,r):Se(e,r))&&(Me=kc(ht,"onBeforeInput"),0<Me.length&&(Ie=new zo("onBeforeInput","beforeinput",null,r,At),Dt.push({event:Ie,listeners:Me}),Ie.data=fe)),Ox(Dt,e,ht,r,At)}dv(Dt,n)})}function dl(e,n,r){return{instance:e,listener:n,currentTarget:r}}function kc(e,n){for(var r=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Pa(e,r),u!=null&&o.unshift(dl(e,u,h)),u=Pa(e,n),u!=null&&o.push(dl(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mv(e,n,r,o,u){for(var h=n._reactName,E=[];r!==null&&r!==o;){var C=r,Y=C.alternate,ht=C.stateNode;if(C=C.tag,Y!==null&&Y===o)break;C!==5&&C!==26&&C!==27||ht===null||(Y=ht,u?(ht=Pa(r,h),ht!=null&&E.unshift(dl(r,ht,Y))):u||(ht=Pa(r,h),ht!=null&&E.push(dl(r,ht,Y)))),r=r.return}E.length!==0&&e.push({event:n,listeners:E})}var Bx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function gv(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(Fx,"")}function vv(e,n){return n=gv(n),gv(e)===n}function Xc(){}function hn(e,n,r,o,u,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Jn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Jn(e,""+o);break;case"className":te(e,"class",o);break;case"tabIndex":te(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":te(e,r,o);break;case"style":Do(e,o,h);break;case"data":if(n!=="object"){te(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=_s(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&hn(e,n,"name",u.name,u,null),hn(e,n,"formEncType",u.formEncType,u,null),hn(e,n,"formMethod",u.formMethod,u,null),hn(e,n,"formTarget",u.formTarget,u,null)):(hn(e,n,"encType",u.encType,u,null),hn(e,n,"method",u.method,u,null),hn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=_s(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Xc);break;case"onScroll":o!=null&&Fe("scroll",e);break;case"onScrollEnd":o!=null&&Fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=_s(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":Fe("beforetoggle",e),Fe("toggle",e),Xt(e,"popover",o);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Oa.get(r)||r,Xt(e,r,o))}}function Rh(e,n,r,o,u,h){switch(r){case"style":Do(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof o=="string"?Jn(e,o):(typeof o=="number"||typeof o=="bigint")&&Jn(e,""+o);break;case"onScroll":o!=null&&Fe("scroll",e);break;case"onScrollEnd":o!=null&&Fe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zr.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),h=e[yn]||null,h=h!=null?h[r]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,u);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Xt(e,r,o)}}}function ni(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",e),Fe("load",e);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var E=r[h];if(E!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:hn(e,n,h,E,r,null)}}u&&hn(e,n,"srcSet",r.srcSet,r,null),o&&hn(e,n,"src",r.src,r,null);return;case"input":Fe("invalid",e);var C=h=E=u=null,Y=null,ht=null;for(o in r)if(r.hasOwnProperty(o)){var At=r[o];if(At!=null)switch(o){case"name":u=At;break;case"type":E=At;break;case"checked":Y=At;break;case"defaultChecked":ht=At;break;case"value":h=At;break;case"defaultValue":C=At;break;case"children":case"dangerouslySetInnerHTML":if(At!=null)throw Error(a(137,n));break;default:hn(e,n,o,At,r,null)}}Pn(e,h,C,Y,ht,E,u,!1),Ne(e);return;case"select":Fe("invalid",e),o=E=h=null;for(u in r)if(r.hasOwnProperty(u)&&(C=r[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":E=C;break;case"multiple":o=C;default:hn(e,n,u,C,r,null)}n=h,r=E,e.multiple=!!o,n!=null?xn(e,!!o,n,!1):r!=null&&xn(e,!!o,r,!0);return;case"textarea":Fe("invalid",e),h=u=o=null;for(E in r)if(r.hasOwnProperty(E)&&(C=r[E],C!=null))switch(E){case"value":o=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:hn(e,n,E,C,r,null)}Kr(e,o,u,h),Ne(e);return;case"option":for(Y in r)if(r.hasOwnProperty(Y)&&(o=r[Y],o!=null))switch(Y){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:hn(e,n,Y,o,r,null)}return;case"dialog":Fe("beforetoggle",e),Fe("toggle",e),Fe("cancel",e),Fe("close",e);break;case"iframe":case"object":Fe("load",e);break;case"video":case"audio":for(o=0;o<hl.length;o++)Fe(hl[o],e);break;case"image":Fe("error",e),Fe("load",e);break;case"details":Fe("toggle",e);break;case"embed":case"source":case"link":Fe("error",e),Fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ht in r)if(r.hasOwnProperty(ht)&&(o=r[ht],o!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:hn(e,n,ht,o,r,null)}return;default:if(vs(n)){for(At in r)r.hasOwnProperty(At)&&(o=r[At],o!==void 0&&Rh(e,n,At,o,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(o=r[C],o!=null&&hn(e,n,C,o,r,null))}function Hx(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,E=null,C=null,Y=null,ht=null,At=null;for(vt in r){var Dt=r[vt];if(r.hasOwnProperty(vt)&&Dt!=null)switch(vt){case"checked":break;case"value":break;case"defaultValue":Y=Dt;default:o.hasOwnProperty(vt)||hn(e,n,vt,null,o,Dt)}}for(var mt in o){var vt=o[mt];if(Dt=r[mt],o.hasOwnProperty(mt)&&(vt!=null||Dt!=null))switch(mt){case"type":h=vt;break;case"name":u=vt;break;case"checked":ht=vt;break;case"defaultChecked":At=vt;break;case"value":E=vt;break;case"defaultValue":C=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(a(137,n));break;default:vt!==Dt&&hn(e,n,mt,vt,o,Dt)}}nn(e,E,C,Y,ht,At,h,u);return;case"select":vt=E=C=mt=null;for(h in r)if(Y=r[h],r.hasOwnProperty(h)&&Y!=null)switch(h){case"value":break;case"multiple":vt=Y;default:o.hasOwnProperty(h)||hn(e,n,h,null,o,Y)}for(u in o)if(h=o[u],Y=r[u],o.hasOwnProperty(u)&&(h!=null||Y!=null))switch(u){case"value":mt=h;break;case"defaultValue":C=h;break;case"multiple":E=h;default:h!==Y&&hn(e,n,u,h,o,Y)}n=C,r=E,o=vt,mt!=null?xn(e,!!r,mt,!1):!!o!=!!r&&(n!=null?xn(e,!!r,n,!0):xn(e,!!r,r?[]:"",!1));return;case"textarea":vt=mt=null;for(C in r)if(u=r[C],r.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:hn(e,n,C,null,o,u)}for(E in o)if(u=o[E],h=r[E],o.hasOwnProperty(E)&&(u!=null||h!=null))switch(E){case"value":mt=u;break;case"defaultValue":vt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&hn(e,n,E,u,o,h)}Gn(e,mt,vt);return;case"option":for(var be in r)if(mt=r[be],r.hasOwnProperty(be)&&mt!=null&&!o.hasOwnProperty(be))switch(be){case"selected":e.selected=!1;break;default:hn(e,n,be,null,o,mt)}for(Y in o)if(mt=o[Y],vt=r[Y],o.hasOwnProperty(Y)&&mt!==vt&&(mt!=null||vt!=null))switch(Y){case"selected":e.selected=mt&&typeof mt!="function"&&typeof mt!="symbol";break;default:hn(e,n,Y,mt,o,vt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in r)mt=r[ye],r.hasOwnProperty(ye)&&mt!=null&&!o.hasOwnProperty(ye)&&hn(e,n,ye,null,o,mt);for(ht in o)if(mt=o[ht],vt=r[ht],o.hasOwnProperty(ht)&&mt!==vt&&(mt!=null||vt!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,n));break;default:hn(e,n,ht,mt,o,vt)}return;default:if(vs(n)){for(var dn in r)mt=r[dn],r.hasOwnProperty(dn)&&mt!==void 0&&!o.hasOwnProperty(dn)&&Rh(e,n,dn,void 0,o,mt);for(At in o)mt=o[At],vt=r[At],!o.hasOwnProperty(At)||mt===vt||mt===void 0&&vt===void 0||Rh(e,n,At,mt,o,vt);return}}for(var at in r)mt=r[at],r.hasOwnProperty(at)&&mt!=null&&!o.hasOwnProperty(at)&&hn(e,n,at,null,o,mt);for(Dt in o)mt=o[Dt],vt=r[Dt],!o.hasOwnProperty(Dt)||mt===vt||mt==null&&vt==null||hn(e,n,Dt,mt,o,vt)}var wh=null,Ch=null;function jc(e){return e.nodeType===9?e:e.ownerDocument}function _v(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Dh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uh=null;function Gx(){var e=window.event;return e&&e.type==="popstate"?e===Uh?!1:(Uh=e,!0):(Uh=null,!1)}var yv=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(e){return Sv.resolve(null).then(e).catch(Xx)}:yv;function Xx(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function Mv(e,n){var r=n,o=0,u=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"){if(0<o&&8>o){r=o;var E=e.ownerDocument;if(r&1&&pl(E.documentElement),r&2&&pl(E.body),r&4)for(r=E.head,pl(r),E=r.firstChild;E;){var C=E.nextSibling,Y=E.nodeName;E[gi]||Y==="SCRIPT"||Y==="STYLE"||Y==="LINK"&&E.rel.toLowerCase()==="stylesheet"||r.removeChild(E),E=C}}if(u===0){e.removeChild(h),Ml(n);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:o=r.charCodeAt(0)-48;else o=0;r=h}while(r);Ml(n)}function Nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Nh(r),qr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function jx(e,n,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[gi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=er(e.nextSibling),e===null)break}return null}function Wx(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=er(e.nextSibling),e===null))return null;return e}function Lh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function qx(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function er(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Oh=null;function Ev(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function bv(e,n,r){switch(n=jc(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function pl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qr(e)}var Yi=new Map,Tv=new Set;function Wc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pr=H.d;H.d={f:Yx,r:Zx,D:Kx,C:Qx,L:Jx,m:$x,X:ey,S:ty,M:ny};function Yx(){var e=Pr.f(),n=Ic();return e||n}function Zx(e){var n=Fi(e);n!==null&&n.tag===5&&n.type==="form"?jm(n):Pr.r(e)}var Js=typeof document>"u"?null:document;function Av(e,n,r){var o=Js;if(o&&typeof n=="string"&&n){var u=Cn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Tv.has(u)||(Tv.add(u),e={rel:e,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),ni(n,"link",e),Mn(n),o.head.appendChild(n)))}}function Kx(e){Pr.D(e),Av("dns-prefetch",e,null)}function Qx(e,n){Pr.C(e,n),Av("preconnect",e,n)}function Jx(e,n,r){Pr.L(e,n,r);var o=Js;if(o&&e&&n){var u='link[rel="preload"][as="'+Cn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Cn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Cn(r.imageSizes)+'"]')):u+='[href="'+Cn(e)+'"]';var h=u;switch(n){case"style":h=$s(e);break;case"script":h=to(e)}Yi.has(h)||(e=_({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),Yi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(ml(h))||n==="script"&&o.querySelector(gl(h))||(n=o.createElement("link"),ni(n,"link",e),Mn(n),o.head.appendChild(n)))}}function $x(e,n){Pr.m(e,n);var r=Js;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Cn(o)+'"][href="'+Cn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=to(e)}if(!Yi.has(h)&&(e=_({rel:"modulepreload",href:e},n),Yi.set(h,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(gl(h)))return}o=r.createElement("link"),ni(o,"link",e),Mn(o),r.head.appendChild(o)}}}function ty(e,n,r){Pr.S(e,n,r);var o=Js;if(o&&e){var u=_i(o).hoistableStyles,h=$s(e);n=n||"default";var E=u.get(h);if(!E){var C={loading:0,preload:null};if(E=o.querySelector(ml(h)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},r),(r=Yi.get(h))&&Ph(e,r);var Y=E=o.createElement("link");Mn(Y),ni(Y,"link",e),Y._p=new Promise(function(ht,At){Y.onload=ht,Y.onerror=At}),Y.addEventListener("load",function(){C.loading|=1}),Y.addEventListener("error",function(){C.loading|=2}),C.loading|=4,qc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:C},u.set(h,E)}}}function ey(e,n){Pr.X(e,n);var r=Js;if(r&&e){var o=_i(r).hoistableScripts,u=to(e),h=o.get(u);h||(h=r.querySelector(gl(u)),h||(e=_({src:e,async:!0},n),(n=Yi.get(u))&&zh(e,n),h=r.createElement("script"),Mn(h),ni(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function ny(e,n){Pr.M(e,n);var r=Js;if(r&&e){var o=_i(r).hoistableScripts,u=to(e),h=o.get(u);h||(h=r.querySelector(gl(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=Yi.get(u))&&zh(e,n),h=r.createElement("script"),Mn(h),ni(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Rv(e,n,r,o){var u=(u=ct.current)?Wc(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=$s(r.href),r=_i(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=$s(r.href);var h=_i(u).hoistableStyles,E=h.get(e);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,E),(h=u.querySelector(ml(e)))&&!h._p&&(E.instance=h,E.state.loading=5),Yi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Yi.set(e,r),h||iy(u,e,r,E.state))),n&&o===null)throw Error(a(528,""));return E}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=to(r),r=_i(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function $s(e){return'href="'+Cn(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function wv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function iy(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ni(n,"link",r),Mn(n),e.head.appendChild(n))}function to(e){return'[src="'+Cn(e)+'"]'}function gl(e){return"script[async]"+e}function Cv(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Cn(r.href)+'"]');if(o)return n.instance=o,Mn(o),o;var u=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Mn(o),ni(o,"style",u),qc(o,r.precedence,e),n.instance=o;case"stylesheet":u=$s(r.href);var h=e.querySelector(ml(u));if(h)return n.state.loading|=4,n.instance=h,Mn(h),h;o=wv(r),(u=Yi.get(u))&&Ph(o,u),h=(e.ownerDocument||e).createElement("link"),Mn(h);var E=h;return E._p=new Promise(function(C,Y){E.onload=C,E.onerror=Y}),ni(h,"link",o),n.state.loading|=4,qc(h,r.precedence,e),n.instance=h;case"script":return h=to(r.src),(u=e.querySelector(gl(h)))?(n.instance=u,Mn(u),u):(o=r,(u=Yi.get(h))&&(o=_({},r),zh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Mn(u),ni(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,qc(o,r.precedence,e));return n.instance}function qc(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,E=0;E<o.length;E++){var C=o[E];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function zh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yc=null;function Dv(e,n,r){if(Yc===null){var o=new Map,u=Yc=new Map;u.set(r,o)}else u=Yc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var h=r[u];if(!(h[gi]||h[vn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(n)||"";E=e+E;var C=o.get(E);C?C.push(h):o.set(E,[h])}}return o}function Uv(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function ry(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Nv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vl=null;function ay(){}function sy(e,n,r){if(vl===null)throw Error(a(475));var o=vl;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=$s(r.href),h=e.querySelector(ml(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Zc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,Mn(h);return}h=e.ownerDocument||e,r=wv(r),(u=Yi.get(u))&&Ph(r,u),h=h.createElement("link"),Mn(h);var E=h;E._p=new Promise(function(C,Y){E.onload=C,E.onerror=Y}),ni(h,"link",r),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Zc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function oy(){if(vl===null)throw Error(a(475));var e=vl;return e.stylesheets&&e.count===0&&Ih(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&Ih(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Zc(){if(this.count--,this.count===0){if(this.stylesheets)Ih(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kc=null;function Ih(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kc=new Map,n.forEach(ly,e),Kc=null,Zc.call(e))}function ly(e,n){if(!(n.state.loading&4)){var r=Kc.get(e);if(r)var o=r.get(null);else{r=new Map,Kc.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var E=u[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),o=E)}o&&r.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),h=r.get(E)||o,h===o&&r.set(null,u),r.set(E,u),this.count++,o=Zc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var _l={$$typeof:X,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function cy(e,n,r,o,u,h,E,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ft(0),this.hiddenUpdates=Ft(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Lv(e,n,r,o,u,h,E,C,Y,ht,At,Dt){return e=new cy(e,n,r,E,C,Y,ht,Dt),n=1,h===!0&&(n|=24),h=Di(3,null,null,n),e.current=h,h.stateNode=e,n=_f(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Mf(h),e}function Ov(e){return e?(e=Us,e):Us}function Pv(e,n,r,o,u,h){u=Ov(u),o.context===null?o.context=u:o.pendingContext=u,o=ea(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=na(e,o,n),r!==null&&(Pi(r,e,n),Yo(r,e,n))}function zv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Bh(e,n){zv(e,n),(e=e.alternate)&&zv(e,n)}function Iv(e){if(e.tag===13){var n=Ds(e,67108864);n!==null&&Pi(n,e,67108864),Bh(e,67108864)}}var Qc=!0;function uy(e,n,r,o){var u=N.T;N.T=null;var h=H.p;try{H.p=2,Fh(e,n,r,o)}finally{H.p=h,N.T=u}}function fy(e,n,r,o){var u=N.T;N.T=null;var h=H.p;try{H.p=8,Fh(e,n,r,o)}finally{H.p=h,N.T=u}}function Fh(e,n,r,o){if(Qc){var u=Hh(o);if(u===null)Ah(e,n,o,Jc,r),Fv(e,o);else if(dy(u,e,n,r,o))o.stopPropagation();else if(Fv(e,o),n&4&&-1<hy.indexOf(e)){for(;u!==null;){var h=Fi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=ce(h.pendingLanes);if(E!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;E;){var Y=1<<31-Wt(E);C.entanglements[1]|=Y,E&=~Y}pr(h),(an&6)===0&&(Pc=qt()+500,fl(0))}}break;case 13:C=Ds(h,2),C!==null&&Pi(C,h,2),Ic(),Bh(h,2)}if(h=Hh(o),h===null&&Ah(e,n,o,Jc,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else Ah(e,n,o,null,r)}}function Hh(e){return e=No(e),Gh(e)}var Jc=null;function Gh(e){if(Jc=null,e=vi(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=d(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jc=e,null}function Bv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ke()){case ie:return 2;case ve:return 8;case on:case rn:return 32;case G:return 268435456;default:return 32}default:return 32}}var Vh=!1,ma=null,ga=null,va=null,xl=new Map,yl=new Map,_a=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(e,n){switch(e){case"focusin":case"focusout":ma=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":xl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(n.pointerId)}}function Sl(e,n,r,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Fi(n),n!==null&&Iv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function dy(e,n,r,o,u){switch(n){case"focusin":return ma=Sl(ma,e,n,r,o,u),!0;case"dragenter":return ga=Sl(ga,e,n,r,o,u),!0;case"mouseover":return va=Sl(va,e,n,r,o,u),!0;case"pointerover":var h=u.pointerId;return xl.set(h,Sl(xl.get(h)||null,e,n,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,yl.set(h,Sl(yl.get(h)||null,e,n,r,o,u)),!0}return!1}function Hv(e){var n=vi(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=d(r),n!==null){e.blockedOn=n,ri(e.priority,function(){if(r.tag===13){var o=Oi();o=_e(o);var u=Ds(r,o);u!==null&&Pi(u,r,o),Bh(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Hh(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Uo=o,r.target.dispatchEvent(o),Uo=null}else return n=Fi(r),n!==null&&Iv(n),e.blockedOn=r,!1;n.shift()}return!0}function Gv(e,n,r){$c(e)&&r.delete(n)}function py(){Vh=!1,ma!==null&&$c(ma)&&(ma=null),ga!==null&&$c(ga)&&(ga=null),va!==null&&$c(va)&&(va=null),xl.forEach(Gv),yl.forEach(Gv)}function tu(e,n){e.blockedOn===n&&(e.blockedOn=null,Vh||(Vh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,py)))}var eu=null;function Vv(e){eu!==e&&(eu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){eu===e&&(eu=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Gh(o||r)===null)continue;break}var h=Fi(r);h!==null&&(e.splice(n,3),n-=3,Gf(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Ml(e){function n(Y){return tu(Y,e)}ma!==null&&tu(ma,e),ga!==null&&tu(ga,e),va!==null&&tu(va,e),xl.forEach(n),yl.forEach(n);for(var r=0;r<_a.length;r++){var o=_a[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<_a.length&&(r=_a[0],r.blockedOn===null);)Hv(r),r.blockedOn===null&&_a.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],E=u[yn]||null;if(typeof h=="function")E||Vv(r);else if(E){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,E=h[yn]||null)C=E.formAction;else if(Gh(u)!==null)continue}else C=E.action;typeof C=="function"?r[o+1]=C:(r.splice(o,3),o-=3),Vv(r)}}}function kh(e){this._internalRoot=e}nu.prototype.render=kh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=Oi();Pv(r,o,e,n,null,null)},nu.prototype.unmount=kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pv(e.current,2,null,e,null,null),Ic(),n[On]=null}};function nu(e){this._internalRoot=e}nu.prototype.unstable_scheduleHydration=function(e){if(e){var n=ze();e={blockedOn:null,target:e,priority:n};for(var r=0;r<_a.length&&n!==0&&n<_a[r].priority;r++);_a.splice(r,0,e),r===0&&Hv(e)}};var kv=t.version;if(kv!=="19.1.0")throw Error(a(527,kv,"19.1.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=v(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var my={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Et=iu.inject(my),Rt=iu}catch{}}return bl.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,o="",u=ag,h=sg,E=og,C=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(C=n.unstable_transitionCallbacks)),n=Lv(e,1,!1,null,null,r,o,u,h,E,C,null),e[On]=n.current,Th(e),new kh(n)},bl.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var o=!1,u="",h=ag,E=sg,C=og,Y=null,ht=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(Y=r.unstable_transitionCallbacks),r.formState!==void 0&&(ht=r.formState)),n=Lv(e,1,!0,n,r??null,o,u,h,E,C,Y,ht),n.context=Ov(null),r=n.current,o=Oi(),o=_e(o),u=ea(o),u.callback=null,na(r,u,o),r=o,n.current.lanes=r,Jt(n,r),pr(n),e[On]=n.current,Th(e),new nu(n)},bl.version="19.1.0",bl}var $v;function Ty(){if($v)return Wh.exports;$v=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Wh.exports=by(),Wh.exports}var Ay=Ty();function t0(s,t){if(typeof s=="function")return s(t);s!=null&&(s.current=t)}function Ry(...s){return t=>{let i=!1;const a=s.map(l=>{const c=t0(l,t);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<a.length;l++){const c=a[l];typeof c=="function"?c():t0(s[l],null)}}}}function wy(...s){return He.useCallback(Ry(...s),s)}function Cy(s){const t=Uy(s),i=He.forwardRef((a,l)=>{const{children:c,...d}=a,p=He.Children.toArray(c),v=p.find(Ly);if(v){const m=v.props.children,_=p.map(S=>S===v?He.Children.count(m)>1?He.Children.only(null):He.isValidElement(m)?m.props.children:null:S);return Tt.jsx(t,{...d,ref:l,children:He.isValidElement(m)?He.cloneElement(m,void 0,_):null})}return Tt.jsx(t,{...d,ref:l,children:c})});return i.displayName=`${s}.Slot`,i}var Dy=Cy("Slot");function Uy(s){const t=He.forwardRef((i,a)=>{const{children:l,...c}=i,d=He.isValidElement(l)?Py(l):void 0,p=wy(d,a);if(He.isValidElement(l)){const v=Oy(c,l.props);return l.type!==He.Fragment&&(v.ref=p),He.cloneElement(l,v)}return He.Children.count(l)>1?He.Children.only(null):null});return t.displayName=`${s}.SlotClone`,t}var Ny=Symbol("radix.slottable");function Ly(s){return He.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===Ny}function Oy(s,t){const i={...t};for(const a in t){const l=s[a],c=t[a];/^on[A-Z]/.test(a)?l&&c?i[a]=(...p)=>{const v=c(...p);return l(...p),v}:l&&(i[a]=l):a==="style"?i[a]={...l,...c}:a==="className"&&(i[a]=[l,c].filter(Boolean).join(" "))}return{...s,...i}}function Py(s){var a,l;let t=(a=Object.getOwnPropertyDescriptor(s.props,"ref"))==null?void 0:a.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?s.ref:(t=(l=Object.getOwnPropertyDescriptor(s,"ref"))==null?void 0:l.get,i=t&&"isReactWarning"in t&&t.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function o_(s){var t,i,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(t=0;t<l;t++)s[t]&&(i=o_(s[t]))&&(a&&(a+=" "),a+=i)}else for(i in s)s[i]&&(a&&(a+=" "),a+=i);return a}function l_(){for(var s,t,i=0,a="",l=arguments.length;i<l;i++)(s=arguments[i])&&(t=o_(s))&&(a&&(a+=" "),a+=t);return a}const e0=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,n0=l_,zy=(s,t)=>i=>{var a;if((t==null?void 0:t.variants)==null)return n0(s,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:c}=t,d=Object.keys(l).map(m=>{const _=i==null?void 0:i[m],S=c==null?void 0:c[m];if(_===null)return null;const M=e0(_)||e0(S);return l[m][M]}),p=i&&Object.entries(i).reduce((m,_)=>{let[S,M]=_;return M===void 0||(m[S]=M),m},{}),v=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((m,_)=>{let{class:S,className:M,...A}=_;return Object.entries(A).every(D=>{let[P,b]=D;return Array.isArray(b)?b.includes({...c,...p}[P]):{...c,...p}[P]===b})?[...m,S,M]:m},[]);return n0(s,d,v,i==null?void 0:i.class,i==null?void 0:i.className)},Tp="-",Iy=s=>{const t=Fy(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:a}=s;return{getClassGroupId:d=>{const p=d.split(Tp);return p[0]===""&&p.length!==1&&p.shift(),c_(p,t)||By(d)},getConflictingClassGroupIds:(d,p)=>{const v=i[d]||[];return p&&a[d]?[...v,...a[d]]:v}}},c_=(s,t)=>{var d;if(s.length===0)return t.classGroupId;const i=s[0],a=t.nextPart.get(i),l=a?c_(s.slice(1),a):void 0;if(l)return l;if(t.validators.length===0)return;const c=s.join(Tp);return(d=t.validators.find(({validator:p})=>p(c)))==null?void 0:d.classGroupId},i0=/^\[(.+)\]$/,By=s=>{if(i0.test(s)){const t=i0.exec(s)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},Fy=s=>{const{theme:t,classGroups:i}=s,a={nextPart:new Map,validators:[]};for(const l in i)Nd(i[l],a,l,t);return a},Nd=(s,t,i,a)=>{s.forEach(l=>{if(typeof l=="string"){const c=l===""?t:r0(t,l);c.classGroupId=i;return}if(typeof l=="function"){if(Hy(l)){Nd(l(a),t,i,a);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,d])=>{Nd(d,r0(t,c),i,a)})})},r0=(s,t)=>{let i=s;return t.split(Tp).forEach(a=>{i.nextPart.has(a)||i.nextPart.set(a,{nextPart:new Map,validators:[]}),i=i.nextPart.get(a)}),i},Hy=s=>s.isThemeGetter,Gy=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,a=new Map;const l=(c,d)=>{i.set(c,d),t++,t>s&&(t=0,a=i,i=new Map)};return{get(c){let d=i.get(c);if(d!==void 0)return d;if((d=a.get(c))!==void 0)return l(c,d),d},set(c,d){i.has(c)?i.set(c,d):l(c,d)}}},Ld="!",Od=":",Vy=Od.length,ky=s=>{const{prefix:t,experimentalParseClassName:i}=s;let a=l=>{const c=[];let d=0,p=0,v=0,m;for(let D=0;D<l.length;D++){let P=l[D];if(d===0&&p===0){if(P===Od){c.push(l.slice(v,D)),v=D+Vy;continue}if(P==="/"){m=D;continue}}P==="["?d++:P==="]"?d--:P==="("?p++:P===")"&&p--}const _=c.length===0?l:l.substring(v),S=Xy(_),M=S!==_,A=m&&m>v?m-v:void 0;return{modifiers:c,hasImportantModifier:M,baseClassName:S,maybePostfixModifierPosition:A}};if(t){const l=t+Od,c=a;a=d=>d.startsWith(l)?c(d.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(i){const l=a;a=c=>i({className:c,parseClassName:l})}return a},Xy=s=>s.endsWith(Ld)?s.substring(0,s.length-1):s.startsWith(Ld)?s.substring(1):s,jy=s=>{const t=Object.fromEntries(s.orderSensitiveModifiers.map(a=>[a,!0]));return a=>{if(a.length<=1)return a;const l=[];let c=[];return a.forEach(d=>{d[0]==="["||t[d]?(l.push(...c.sort(),d),c=[]):c.push(d)}),l.push(...c.sort()),l}},Wy=s=>({cache:Gy(s.cacheSize),parseClassName:ky(s),sortModifiers:jy(s),...Iy(s)}),qy=/\s+/,Yy=(s,t)=>{const{parseClassName:i,getClassGroupId:a,getConflictingClassGroupIds:l,sortModifiers:c}=t,d=[],p=s.trim().split(qy);let v="";for(let m=p.length-1;m>=0;m-=1){const _=p[m],{isExternal:S,modifiers:M,hasImportantModifier:A,baseClassName:D,maybePostfixModifierPosition:P}=i(_);if(S){v=_+(v.length>0?" "+v:v);continue}let b=!!P,y=a(b?D.substring(0,P):D);if(!y){if(!b){v=_+(v.length>0?" "+v:v);continue}if(y=a(D),!y){v=_+(v.length>0?" "+v:v);continue}b=!1}const Z=c(M).join(":"),X=A?Z+Ld:Z,z=X+y;if(d.includes(z))continue;d.push(z);const q=l(y,b);for(let Q=0;Q<q.length;++Q){const K=q[Q];d.push(X+K)}v=_+(v.length>0?" "+v:v)}return v};function Zy(){let s=0,t,i,a="";for(;s<arguments.length;)(t=arguments[s++])&&(i=u_(t))&&(a&&(a+=" "),a+=i);return a}const u_=s=>{if(typeof s=="string")return s;let t,i="";for(let a=0;a<s.length;a++)s[a]&&(t=u_(s[a]))&&(i&&(i+=" "),i+=t);return i};function Ky(s,...t){let i,a,l,c=d;function d(v){const m=t.reduce((_,S)=>S(_),s());return i=Wy(m),a=i.cache.get,l=i.cache.set,c=p,p(v)}function p(v){const m=a(v);if(m)return m;const _=Yy(v,i);return l(v,_),_}return function(){return c(Zy.apply(null,arguments))}}const Xn=s=>{const t=i=>i[s]||[];return t.isThemeGetter=!0,t},f_=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,h_=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Qy=/^\d+\/\d+$/,Jy=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$y=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,tS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,eS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,nS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,eo=s=>Qy.test(s),Pe=s=>!!s&&!Number.isNaN(Number(s)),ya=s=>!!s&&Number.isInteger(Number(s)),Kh=s=>s.endsWith("%")&&Pe(s.slice(0,-1)),zr=s=>Jy.test(s),iS=()=>!0,rS=s=>$y.test(s)&&!tS.test(s),d_=()=>!1,aS=s=>eS.test(s),sS=s=>nS.test(s),oS=s=>!oe(s)&&!le(s),lS=s=>Ao(s,g_,d_),oe=s=>f_.test(s),es=s=>Ao(s,v_,rS),Qh=s=>Ao(s,dS,Pe),a0=s=>Ao(s,p_,d_),cS=s=>Ao(s,m_,sS),ru=s=>Ao(s,__,aS),le=s=>h_.test(s),Tl=s=>Ro(s,v_),uS=s=>Ro(s,pS),s0=s=>Ro(s,p_),fS=s=>Ro(s,g_),hS=s=>Ro(s,m_),au=s=>Ro(s,__,!0),Ao=(s,t,i)=>{const a=f_.exec(s);return a?a[1]?t(a[1]):i(a[2]):!1},Ro=(s,t,i=!1)=>{const a=h_.exec(s);return a?a[1]?t(a[1]):i:!1},p_=s=>s==="position"||s==="percentage",m_=s=>s==="image"||s==="url",g_=s=>s==="length"||s==="size"||s==="bg-size",v_=s=>s==="length",dS=s=>s==="number",pS=s=>s==="family-name",__=s=>s==="shadow",mS=()=>{const s=Xn("color"),t=Xn("font"),i=Xn("text"),a=Xn("font-weight"),l=Xn("tracking"),c=Xn("leading"),d=Xn("breakpoint"),p=Xn("container"),v=Xn("spacing"),m=Xn("radius"),_=Xn("shadow"),S=Xn("inset-shadow"),M=Xn("text-shadow"),A=Xn("drop-shadow"),D=Xn("blur"),P=Xn("perspective"),b=Xn("aspect"),y=Xn("ease"),Z=Xn("animate"),X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],q=()=>[...z(),le,oe],Q=()=>["auto","hidden","clip","visible","scroll"],K=()=>["auto","contain","none"],W=()=>[le,oe,v],O=()=>[eo,"full","auto",...W()],T=()=>[ya,"none","subgrid",le,oe],L=()=>["auto",{span:["full",ya,le,oe]},ya,le,oe],J=()=>[ya,"auto",le,oe],nt=()=>["auto","min","max","fr",le,oe],dt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ot=()=>["start","end","center","stretch","center-safe","end-safe"],N=()=>["auto",...W()],H=()=>[eo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...W()],B=()=>[s,le,oe],lt=()=>[...z(),s0,a0,{position:[le,oe]}],I=()=>["no-repeat",{repeat:["","x","y","space","round"]}],rt=()=>["auto","cover","contain",fS,lS,{size:[le,oe]}],bt=()=>[Kh,Tl,es],Mt=()=>["","none","full",m,le,oe],Nt=()=>["",Pe,Tl,es],jt=()=>["solid","dashed","dotted","double"],ct=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],St=()=>[Pe,Kh,s0,a0],It=()=>["","none",D,le,oe],re=()=>["none",Pe,le,oe],Kt=()=>["none",Pe,le,oe],ge=()=>[Pe,le,oe],tn=()=>[eo,"full",...W()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[zr],breakpoint:[zr],color:[iS],container:[zr],"drop-shadow":[zr],ease:["in","out","in-out"],font:[oS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[zr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[zr],shadow:[zr],spacing:["px",Pe],text:[zr],"text-shadow":[zr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",eo,oe,le,b]}],container:["container"],columns:[{columns:[Pe,oe,le,p]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:q()}],overflow:[{overflow:Q()}],"overflow-x":[{"overflow-x":Q()}],"overflow-y":[{"overflow-y":Q()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:O()}],"inset-x":[{"inset-x":O()}],"inset-y":[{"inset-y":O()}],start:[{start:O()}],end:[{end:O()}],top:[{top:O()}],right:[{right:O()}],bottom:[{bottom:O()}],left:[{left:O()}],visibility:["visible","invisible","collapse"],z:[{z:[ya,"auto",le,oe]}],basis:[{basis:[eo,"full","auto",p,...W()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Pe,eo,"auto","initial","none",oe]}],grow:[{grow:["",Pe,le,oe]}],shrink:[{shrink:["",Pe,le,oe]}],order:[{order:[ya,"first","last","none",le,oe]}],"grid-cols":[{"grid-cols":T()}],"col-start-end":[{col:L()}],"col-start":[{"col-start":J()}],"col-end":[{"col-end":J()}],"grid-rows":[{"grid-rows":T()}],"row-start-end":[{row:L()}],"row-start":[{"row-start":J()}],"row-end":[{"row-end":J()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":nt()}],"auto-rows":[{"auto-rows":nt()}],gap:[{gap:W()}],"gap-x":[{"gap-x":W()}],"gap-y":[{"gap-y":W()}],"justify-content":[{justify:[...dt(),"normal"]}],"justify-items":[{"justify-items":[...ot(),"normal"]}],"justify-self":[{"justify-self":["auto",...ot()]}],"align-content":[{content:["normal",...dt()]}],"align-items":[{items:[...ot(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ot(),{baseline:["","last"]}]}],"place-content":[{"place-content":dt()}],"place-items":[{"place-items":[...ot(),"baseline"]}],"place-self":[{"place-self":["auto",...ot()]}],p:[{p:W()}],px:[{px:W()}],py:[{py:W()}],ps:[{ps:W()}],pe:[{pe:W()}],pt:[{pt:W()}],pr:[{pr:W()}],pb:[{pb:W()}],pl:[{pl:W()}],m:[{m:N()}],mx:[{mx:N()}],my:[{my:N()}],ms:[{ms:N()}],me:[{me:N()}],mt:[{mt:N()}],mr:[{mr:N()}],mb:[{mb:N()}],ml:[{ml:N()}],"space-x":[{"space-x":W()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":W()}],"space-y-reverse":["space-y-reverse"],size:[{size:H()}],w:[{w:[p,"screen",...H()]}],"min-w":[{"min-w":[p,"screen","none",...H()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[d]},...H()]}],h:[{h:["screen","lh",...H()]}],"min-h":[{"min-h":["screen","lh","none",...H()]}],"max-h":[{"max-h":["screen","lh",...H()]}],"font-size":[{text:["base",i,Tl,es]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,le,Qh]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Kh,oe]}],"font-family":[{font:[uS,oe,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,le,oe]}],"line-clamp":[{"line-clamp":[Pe,"none",le,Qh]}],leading:[{leading:[c,...W()]}],"list-image":[{"list-image":["none",le,oe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",le,oe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:B()}],"text-color":[{text:B()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...jt(),"wavy"]}],"text-decoration-thickness":[{decoration:[Pe,"from-font","auto",le,es]}],"text-decoration-color":[{decoration:B()}],"underline-offset":[{"underline-offset":[Pe,"auto",le,oe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:W()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",le,oe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",le,oe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:lt()}],"bg-repeat":[{bg:I()}],"bg-size":[{bg:rt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ya,le,oe],radial:["",le,oe],conic:[ya,le,oe]},hS,cS]}],"bg-color":[{bg:B()}],"gradient-from-pos":[{from:bt()}],"gradient-via-pos":[{via:bt()}],"gradient-to-pos":[{to:bt()}],"gradient-from":[{from:B()}],"gradient-via":[{via:B()}],"gradient-to":[{to:B()}],rounded:[{rounded:Mt()}],"rounded-s":[{"rounded-s":Mt()}],"rounded-e":[{"rounded-e":Mt()}],"rounded-t":[{"rounded-t":Mt()}],"rounded-r":[{"rounded-r":Mt()}],"rounded-b":[{"rounded-b":Mt()}],"rounded-l":[{"rounded-l":Mt()}],"rounded-ss":[{"rounded-ss":Mt()}],"rounded-se":[{"rounded-se":Mt()}],"rounded-ee":[{"rounded-ee":Mt()}],"rounded-es":[{"rounded-es":Mt()}],"rounded-tl":[{"rounded-tl":Mt()}],"rounded-tr":[{"rounded-tr":Mt()}],"rounded-br":[{"rounded-br":Mt()}],"rounded-bl":[{"rounded-bl":Mt()}],"border-w":[{border:Nt()}],"border-w-x":[{"border-x":Nt()}],"border-w-y":[{"border-y":Nt()}],"border-w-s":[{"border-s":Nt()}],"border-w-e":[{"border-e":Nt()}],"border-w-t":[{"border-t":Nt()}],"border-w-r":[{"border-r":Nt()}],"border-w-b":[{"border-b":Nt()}],"border-w-l":[{"border-l":Nt()}],"divide-x":[{"divide-x":Nt()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Nt()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...jt(),"hidden","none"]}],"divide-style":[{divide:[...jt(),"hidden","none"]}],"border-color":[{border:B()}],"border-color-x":[{"border-x":B()}],"border-color-y":[{"border-y":B()}],"border-color-s":[{"border-s":B()}],"border-color-e":[{"border-e":B()}],"border-color-t":[{"border-t":B()}],"border-color-r":[{"border-r":B()}],"border-color-b":[{"border-b":B()}],"border-color-l":[{"border-l":B()}],"divide-color":[{divide:B()}],"outline-style":[{outline:[...jt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Pe,le,oe]}],"outline-w":[{outline:["",Pe,Tl,es]}],"outline-color":[{outline:B()}],shadow:[{shadow:["","none",_,au,ru]}],"shadow-color":[{shadow:B()}],"inset-shadow":[{"inset-shadow":["none",S,au,ru]}],"inset-shadow-color":[{"inset-shadow":B()}],"ring-w":[{ring:Nt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:B()}],"ring-offset-w":[{"ring-offset":[Pe,es]}],"ring-offset-color":[{"ring-offset":B()}],"inset-ring-w":[{"inset-ring":Nt()}],"inset-ring-color":[{"inset-ring":B()}],"text-shadow":[{"text-shadow":["none",M,au,ru]}],"text-shadow-color":[{"text-shadow":B()}],opacity:[{opacity:[Pe,le,oe]}],"mix-blend":[{"mix-blend":[...ct(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ct()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":St()}],"mask-image-linear-to-pos":[{"mask-linear-to":St()}],"mask-image-linear-from-color":[{"mask-linear-from":B()}],"mask-image-linear-to-color":[{"mask-linear-to":B()}],"mask-image-t-from-pos":[{"mask-t-from":St()}],"mask-image-t-to-pos":[{"mask-t-to":St()}],"mask-image-t-from-color":[{"mask-t-from":B()}],"mask-image-t-to-color":[{"mask-t-to":B()}],"mask-image-r-from-pos":[{"mask-r-from":St()}],"mask-image-r-to-pos":[{"mask-r-to":St()}],"mask-image-r-from-color":[{"mask-r-from":B()}],"mask-image-r-to-color":[{"mask-r-to":B()}],"mask-image-b-from-pos":[{"mask-b-from":St()}],"mask-image-b-to-pos":[{"mask-b-to":St()}],"mask-image-b-from-color":[{"mask-b-from":B()}],"mask-image-b-to-color":[{"mask-b-to":B()}],"mask-image-l-from-pos":[{"mask-l-from":St()}],"mask-image-l-to-pos":[{"mask-l-to":St()}],"mask-image-l-from-color":[{"mask-l-from":B()}],"mask-image-l-to-color":[{"mask-l-to":B()}],"mask-image-x-from-pos":[{"mask-x-from":St()}],"mask-image-x-to-pos":[{"mask-x-to":St()}],"mask-image-x-from-color":[{"mask-x-from":B()}],"mask-image-x-to-color":[{"mask-x-to":B()}],"mask-image-y-from-pos":[{"mask-y-from":St()}],"mask-image-y-to-pos":[{"mask-y-to":St()}],"mask-image-y-from-color":[{"mask-y-from":B()}],"mask-image-y-to-color":[{"mask-y-to":B()}],"mask-image-radial":[{"mask-radial":[le,oe]}],"mask-image-radial-from-pos":[{"mask-radial-from":St()}],"mask-image-radial-to-pos":[{"mask-radial-to":St()}],"mask-image-radial-from-color":[{"mask-radial-from":B()}],"mask-image-radial-to-color":[{"mask-radial-to":B()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":z()}],"mask-image-conic-pos":[{"mask-conic":[Pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":St()}],"mask-image-conic-to-pos":[{"mask-conic-to":St()}],"mask-image-conic-from-color":[{"mask-conic-from":B()}],"mask-image-conic-to-color":[{"mask-conic-to":B()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:lt()}],"mask-repeat":[{mask:I()}],"mask-size":[{mask:rt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",le,oe]}],filter:[{filter:["","none",le,oe]}],blur:[{blur:It()}],brightness:[{brightness:[Pe,le,oe]}],contrast:[{contrast:[Pe,le,oe]}],"drop-shadow":[{"drop-shadow":["","none",A,au,ru]}],"drop-shadow-color":[{"drop-shadow":B()}],grayscale:[{grayscale:["",Pe,le,oe]}],"hue-rotate":[{"hue-rotate":[Pe,le,oe]}],invert:[{invert:["",Pe,le,oe]}],saturate:[{saturate:[Pe,le,oe]}],sepia:[{sepia:["",Pe,le,oe]}],"backdrop-filter":[{"backdrop-filter":["","none",le,oe]}],"backdrop-blur":[{"backdrop-blur":It()}],"backdrop-brightness":[{"backdrop-brightness":[Pe,le,oe]}],"backdrop-contrast":[{"backdrop-contrast":[Pe,le,oe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Pe,le,oe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Pe,le,oe]}],"backdrop-invert":[{"backdrop-invert":["",Pe,le,oe]}],"backdrop-opacity":[{"backdrop-opacity":[Pe,le,oe]}],"backdrop-saturate":[{"backdrop-saturate":[Pe,le,oe]}],"backdrop-sepia":[{"backdrop-sepia":["",Pe,le,oe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":W()}],"border-spacing-x":[{"border-spacing-x":W()}],"border-spacing-y":[{"border-spacing-y":W()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",le,oe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Pe,"initial",le,oe]}],ease:[{ease:["linear","initial",y,le,oe]}],delay:[{delay:[Pe,le,oe]}],animate:[{animate:["none",Z,le,oe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[P,le,oe]}],"perspective-origin":[{"perspective-origin":q()}],rotate:[{rotate:re()}],"rotate-x":[{"rotate-x":re()}],"rotate-y":[{"rotate-y":re()}],"rotate-z":[{"rotate-z":re()}],scale:[{scale:Kt()}],"scale-x":[{"scale-x":Kt()}],"scale-y":[{"scale-y":Kt()}],"scale-z":[{"scale-z":Kt()}],"scale-3d":["scale-3d"],skew:[{skew:ge()}],"skew-x":[{"skew-x":ge()}],"skew-y":[{"skew-y":ge()}],transform:[{transform:[le,oe,"","none","gpu","cpu"]}],"transform-origin":[{origin:q()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:tn()}],"translate-x":[{"translate-x":tn()}],"translate-y":[{"translate-y":tn()}],"translate-z":[{"translate-z":tn()}],"translate-none":["translate-none"],accent:[{accent:B()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:B()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",le,oe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",le,oe]}],fill:[{fill:["none",...B()]}],"stroke-w":[{stroke:[Pe,Tl,es,Qh]}],stroke:[{stroke:["none",...B()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},gS=Ky(mS);function vS(...s){return gS(l_(s))}const _S=zy("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function _o({className:s,variant:t,size:i,asChild:a=!1,...l}){const c=a?Dy:"button";return Tt.jsx(c,{"data-slot":"button",className:vS(_S({variant:t,size:i,className:s})),...l})}const xS=[{id:"overseas-chronograph-steel",name:"OVERSEAS CHRONOGRAPH",material:"Stainless steel with blue dial",reference:"5500V/110A-B481",price:"$37,100",image:"/api/placeholder/300/300",description:"42.5mm case, integrated bracelet, chronograph movement"},{id:"overseas-selfwinding-steel",name:"OVERSEAS SELF-WINDING",material:"Stainless steel with blue dial",reference:"4500V/110A-B483",price:"$26,800",image:"/api/placeholder/300/300",description:"41mm case, integrated bracelet, automatic movement"},{id:"overseas-dualtime-steel",name:"OVERSEAS DUAL TIME",material:"Stainless steel with dark gray dial",reference:"7900V/100A-B334",price:"$32,300",image:"/api/placeholder/300/300",description:"41mm case, dual time zone, integrated bracelet"},{id:"overseas-chronograph-gold",name:"OVERSEAS CHRONOGRAPH",material:"18K Pink Gold with green lacquered dial",reference:"5500R/000R-B074",price:"$84,500",image:"/api/placeholder/300/300",description:"42.5mm case, pink gold integrated bracelet"},{id:"overseas-selfwinding-gold",name:"OVERSEAS SELF-WINDING",material:"18K Pink Gold with brown dial",reference:"4500R/000R-B205",price:"$65,000",image:"/api/placeholder/300/300",description:"41mm case, pink gold integrated bracelet"},{id:"overseas-quartz-steel",name:"OVERSEAS QUARTZ",material:"Stainless steel with white dial",reference:"25150/000A-9745",price:"$17,700",image:"/api/placeholder/300/300",description:"33mm case, quartz movement, integrated bracelet"}];function yS({onSelectWatch:s,selectedWatch:t}){return Tt.jsxs("div",{className:"watch-selector",children:[Tt.jsxs("div",{className:"selector-header",children:[Tt.jsx("h2",{className:"collection-title",children:"OVERSEAS COLLECTION"}),Tt.jsx("p",{className:"collection-subtitle",children:"Select a timepiece to experience in AR"})]}),Tt.jsx("div",{className:"watches-grid",children:xS.map(i=>Tt.jsxs("div",{className:`watch-card ${(t==null?void 0:t.id)===i.id?"selected":""}`,onClick:()=>s(i),children:[Tt.jsx("div",{className:"watch-image-container",children:Tt.jsx("div",{className:"watch-placeholder",children:Tt.jsx("div",{className:"watch-icon",children:"⌚"})})}),Tt.jsxs("div",{className:"watch-info",children:[Tt.jsx("h3",{className:"watch-name",children:i.name}),Tt.jsx("p",{className:"watch-material",children:i.material}),Tt.jsxs("p",{className:"watch-reference",children:["Ref. ",i.reference]}),Tt.jsx("p",{className:"watch-description",children:i.description}),Tt.jsx("div",{className:"watch-price",children:i.price})]}),Tt.jsx("div",{className:"watch-actions",children:Tt.jsx(_o,{className:"select-button",variant:(t==null?void 0:t.id)===i.id?"default":"outline",children:(t==null?void 0:t.id)===i.id?"Selected":"Select"})})]},i.id))}),t&&Tt.jsx("div",{className:"selected-watch-info",children:Tt.jsxs("div",{className:"selected-details",children:[Tt.jsx("h3",{children:t.name}),Tt.jsx("p",{children:t.material}),Tt.jsx("span",{className:"selected-price",children:t.price})]})}),Tt.jsx("style",{jsx:!0,children:`
        .watch-selector {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .selector-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .collection-title {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 3px;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .collection-subtitle {
          font-size: 1.1rem;
          color: #666;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .watches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .watch-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
        }

        .watch-card:hover {
          border-color: #8B4513;
          box-shadow: 0 4px 12px rgba(139, 69, 19, 0.1);
          transform: translateY(-2px);
        }

        .watch-card.selected {
          border-color: #8B4513;
          box-shadow: 0 4px 12px rgba(139, 69, 19, 0.2);
          background: #fafafa;
        }

        .watch-image-container {
          margin-bottom: 1.5rem;
        }

        .watch-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd;
        }

        .watch-icon {
          font-size: 4rem;
          color: #8B4513;
          opacity: 0.7;
        }

        .watch-info {
          margin-bottom: 1.5rem;
        }

        .watch-name {
          font-size: 1.3rem;
          font-weight: 500;
          letter-spacing: 1px;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .watch-material {
          font-size: 1rem;
          color: #666;
          margin-bottom: 0.25rem;
          font-weight: 300;
        }

        .watch-reference {
          font-size: 0.9rem;
          color: #888;
          margin-bottom: 0.75rem;
          font-family: monospace;
        }

        .watch-description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.4;
          margin-bottom: 1rem;
        }

        .watch-price {
          font-size: 1.4rem;
          font-weight: 600;
          color: #8B4513;
          letter-spacing: 1px;
        }

        .watch-actions {
          display: flex;
          justify-content: center;
        }

        .select-button {
          width: 100%;
          padding: 0.75rem;
          font-weight: 500;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .selected-watch-info {
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
          color: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          margin-top: 2rem;
        }

        .selected-details h3 {
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }

        .selected-details p {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .selected-price {
          font-size: 1.8rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .watches-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .collection-title {
            font-size: 2rem;
          }
          
          .watch-selector {
            padding: 1rem;
          }
        }
      `})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ap="180",SS=0,o0=1,MS=2,x_=1,ES=2,Vr=3,Da=0,Ai=1,kr=2,wa=0,xo=1,l0=2,c0=3,u0=4,bS=5,fs=100,TS=101,AS=102,RS=103,wS=104,CS=200,DS=201,US=202,NS=203,Pd=204,zd=205,LS=206,OS=207,PS=208,zS=209,IS=210,BS=211,FS=212,HS=213,GS=214,Id=0,Bd=1,Fd=2,So=3,Hd=4,Gd=5,Vd=6,kd=7,y_=0,VS=1,kS=2,Ca=0,XS=1,jS=2,WS=3,qS=4,YS=5,ZS=6,KS=7,S_=300,Mo=301,Eo=302,Xd=303,jd=304,zu=306,Wd=1e3,ds=1001,qd=1002,or=1003,QS=1004,su=1005,vr=1006,Jh=1007,ps=1008,yr=1009,M_=1010,E_=1011,Ll=1012,Rp=1013,ms=1014,Xr=1015,Bl=1016,wp=1017,Cp=1018,Ol=1020,b_=35902,T_=35899,A_=1021,R_=1022,sr=1023,Pl=1026,zl=1027,w_=1028,Dp=1029,C_=1030,Up=1031,Np=1033,Ru=33776,wu=33777,Cu=33778,Du=33779,Yd=35840,Zd=35841,Kd=35842,Qd=35843,Jd=36196,$d=37492,tp=37496,ep=37808,np=37809,ip=37810,rp=37811,ap=37812,sp=37813,op=37814,lp=37815,cp=37816,up=37817,fp=37818,hp=37819,dp=37820,pp=37821,mp=36492,gp=36494,vp=36495,_p=36283,xp=36284,yp=36285,Sp=36286,JS=3200,$S=3201,D_=0,tM=1,Ra="",Ki="srgb",bo="srgb-linear",Lu="linear",pn="srgb",no=7680,f0=519,eM=512,nM=513,iM=514,U_=515,rM=516,aM=517,sM=518,oM=519,h0=35044,d0="300 es",_r=2e3,Ou=2001;class wo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$h=Math.PI/180,Mp=180/Math.PI;function Fl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(li[s&255]+li[s>>8&255]+li[s>>16&255]+li[s>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[i&63|128]+li[i>>8&255]+"-"+li[i>>16&255]+li[i>>24&255]+li[a&255]+li[a>>8&255]+li[a>>16&255]+li[a>>24&255]).toLowerCase()}function Ve(s,t,i){return Math.max(t,Math.min(i,s))}function lM(s,t){return(s%t+t)%t}function td(s,t,i){return(1-i)*s+i*t}function Al(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ti(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class We{constructor(t=0,i=0){We.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,l=t.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ve(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*a-d*l+t.x,this.y=c*l+d*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hl{constructor(t=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=l}static slerpFlat(t,i,a,l,c,d,p){let v=a[l+0],m=a[l+1],_=a[l+2],S=a[l+3];const M=c[d+0],A=c[d+1],D=c[d+2],P=c[d+3];if(p===0){t[i+0]=v,t[i+1]=m,t[i+2]=_,t[i+3]=S;return}if(p===1){t[i+0]=M,t[i+1]=A,t[i+2]=D,t[i+3]=P;return}if(S!==P||v!==M||m!==A||_!==D){let b=1-p;const y=v*M+m*A+_*D+S*P,Z=y>=0?1:-1,X=1-y*y;if(X>Number.EPSILON){const q=Math.sqrt(X),Q=Math.atan2(q,y*Z);b=Math.sin(b*Q)/q,p=Math.sin(p*Q)/q}const z=p*Z;if(v=v*b+M*z,m=m*b+A*z,_=_*b+D*z,S=S*b+P*z,b===1-p){const q=1/Math.sqrt(v*v+m*m+_*_+S*S);v*=q,m*=q,_*=q,S*=q}}t[i]=v,t[i+1]=m,t[i+2]=_,t[i+3]=S}static multiplyQuaternionsFlat(t,i,a,l,c,d){const p=a[l],v=a[l+1],m=a[l+2],_=a[l+3],S=c[d],M=c[d+1],A=c[d+2],D=c[d+3];return t[i]=p*D+_*S+v*A-m*M,t[i+1]=v*D+_*M+m*S-p*A,t[i+2]=m*D+_*A+p*M-v*S,t[i+3]=_*D-p*S-v*M-m*A,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,l){return this._x=t,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,v=Math.sin,m=p(a/2),_=p(l/2),S=p(c/2),M=v(a/2),A=v(l/2),D=v(c/2);switch(d){case"XYZ":this._x=M*_*S+m*A*D,this._y=m*A*S-M*_*D,this._z=m*_*D+M*A*S,this._w=m*_*S-M*A*D;break;case"YXZ":this._x=M*_*S+m*A*D,this._y=m*A*S-M*_*D,this._z=m*_*D-M*A*S,this._w=m*_*S+M*A*D;break;case"ZXY":this._x=M*_*S-m*A*D,this._y=m*A*S+M*_*D,this._z=m*_*D+M*A*S,this._w=m*_*S-M*A*D;break;case"ZYX":this._x=M*_*S-m*A*D,this._y=m*A*S+M*_*D,this._z=m*_*D-M*A*S,this._w=m*_*S+M*A*D;break;case"YZX":this._x=M*_*S+m*A*D,this._y=m*A*S+M*_*D,this._z=m*_*D-M*A*S,this._w=m*_*S-M*A*D;break;case"XZY":this._x=M*_*S-m*A*D,this._y=m*A*S-M*_*D,this._z=m*_*D+M*A*S,this._w=m*_*S+M*A*D;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],l=i[4],c=i[8],d=i[1],p=i[5],v=i[9],m=i[2],_=i[6],S=i[10],M=a+p+S;if(M>0){const A=.5/Math.sqrt(M+1);this._w=.25/A,this._x=(_-v)*A,this._y=(c-m)*A,this._z=(d-l)*A}else if(a>p&&a>S){const A=2*Math.sqrt(1+a-p-S);this._w=(_-v)/A,this._x=.25*A,this._y=(l+d)/A,this._z=(c+m)/A}else if(p>S){const A=2*Math.sqrt(1+p-a-S);this._w=(c-m)/A,this._x=(l+d)/A,this._y=.25*A,this._z=(v+_)/A}else{const A=2*Math.sqrt(1+S-a-p);this._w=(d-l)/A,this._x=(c+m)/A,this._y=(v+_)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,l=t._y,c=t._z,d=t._w,p=i._x,v=i._y,m=i._z,_=i._w;return this._x=a*_+d*p+l*m-c*v,this._y=l*_+d*v+c*p-a*m,this._z=c*_+d*m+a*v-l*p,this._w=d*_-a*p-l*v-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,d=this._w;let p=d*t._w+a*t._x+l*t._y+c*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=d,this._x=a,this._y=l,this._z=c,this;const v=1-p*p;if(v<=Number.EPSILON){const A=1-i;return this._w=A*d+i*this._w,this._x=A*a+i*this._x,this._y=A*l+i*this._y,this._z=A*c+i*this._z,this.normalize(),this}const m=Math.sqrt(v),_=Math.atan2(m,p),S=Math.sin((1-i)*_)/m,M=Math.sin(i*_)/m;return this._w=d*S+this._w*M,this._x=a*S+this._x*M,this._y=l*S+this._y*M,this._z=c*S+this._z*M,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class xt{constructor(t=0,i=0,a=0){xt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(p0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(p0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,a=this.y,l=this.z,c=t.x,d=t.y,p=t.z,v=t.w,m=2*(d*l-p*a),_=2*(p*i-c*l),S=2*(c*a-d*i);return this.x=i+v*m+d*S-p*_,this.y=a+v*_+p*m-c*S,this.z=l+v*S+c*_-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this.z=Ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this.z=Ve(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ve(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,l=t.y,c=t.z,d=i.x,p=i.y,v=i.z;return this.x=l*v-c*p,this.y=c*d-a*v,this.z=a*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return ed.copy(this).projectOnVector(t),this.sub(ed)}reflect(t){return this.sub(ed.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return i*i+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const l=Math.sin(i)*t;return this.x=l*Math.sin(a),this.y=Math.cos(i)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new xt,p0=new Hl;class Ue{constructor(t,i,a,l,c,d,p,v,m){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,d,p,v,m)}set(t,i,a,l,c,d,p,v,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=v,_[6]=a,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,d=a[0],p=a[3],v=a[6],m=a[1],_=a[4],S=a[7],M=a[2],A=a[5],D=a[8],P=l[0],b=l[3],y=l[6],Z=l[1],X=l[4],z=l[7],q=l[2],Q=l[5],K=l[8];return c[0]=d*P+p*Z+v*q,c[3]=d*b+p*X+v*Q,c[6]=d*y+p*z+v*K,c[1]=m*P+_*Z+S*q,c[4]=m*b+_*X+S*Q,c[7]=m*y+_*z+S*K,c[2]=M*P+A*Z+D*q,c[5]=M*b+A*X+D*Q,c[8]=M*y+A*z+D*K,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],d=t[4],p=t[5],v=t[6],m=t[7],_=t[8];return i*d*_-i*p*m-a*c*_+a*p*v+l*c*m-l*d*v}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],d=t[4],p=t[5],v=t[6],m=t[7],_=t[8],S=_*d-p*m,M=p*v-_*c,A=m*c-d*v,D=i*S+a*M+l*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/D;return t[0]=S*P,t[1]=(l*m-_*a)*P,t[2]=(p*a-l*d)*P,t[3]=M*P,t[4]=(_*i-l*v)*P,t[5]=(l*c-p*i)*P,t[6]=A*P,t[7]=(a*v-m*i)*P,t[8]=(d*i-a*c)*P,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,l,c,d,p){const v=Math.cos(c),m=Math.sin(c);return this.set(a*v,a*m,-a*(v*d+m*p)+d+t,-l*m,l*v,-l*(-m*d+v*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(nd.makeScale(t,i)),this}rotate(t){return this.premultiply(nd.makeRotation(-t)),this}translate(t,i){return this.premultiply(nd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new Ue;function N_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Pu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cM(){const s=Pu("canvas");return s.style.display="block",s}const m0={};function Il(s){s in m0||(m0[s]=!0,console.warn(s))}function uM(s,t,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const g0=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v0=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){const s={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===pn&&(l.r=jr(l.r),l.g=jr(l.g),l.b=jr(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===pn&&(l.r=yo(l.r),l.g=yo(l.g),l.b=yo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ra?Lu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Il("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Il("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[bo]:{primaries:t,whitePoint:a,transfer:Lu,toXYZ:g0,fromXYZ:v0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ki},outputColorSpaceConfig:{drawingBufferColorSpace:Ki}},[Ki]:{primaries:t,whitePoint:a,transfer:pn,toXYZ:g0,fromXYZ:v0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ki}}}),s}const Ze=fM();function jr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let io;class hM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{io===void 0&&(io=Pu("canvas")),io.width=t.width,io.height=t.height;const l=io.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=io}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pu("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=jr(c[d]/255)*255;return a.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(jr(i[a]/255)*255):i[a]=jr(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dM=0;class Lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Fl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(id(l[d].image)):c.push(id(l[d]))}else c=id(l);a.url=c}return i||(t.images[this.uuid]=a),a}}function id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pM=0;const rd=new xt;class Ri extends wo{constructor(t=Ri.DEFAULT_IMAGE,i=Ri.DEFAULT_MAPPING,a=ds,l=ds,c=vr,d=ps,p=sr,v=yr,m=Ri.DEFAULT_ANISOTROPY,_=Ra){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Fl(),this.name="",this.source=new Lp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=v,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==S_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wd:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wd:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=S_;Ri.DEFAULT_ANISOTROPY=1;class Rn{constructor(t=0,i=0,a=0,l=1){Rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,l){return this.x=t,this.y=i,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*a+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*a+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*a+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*a+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,l,c;const v=t.elements,m=v[0],_=v[4],S=v[8],M=v[1],A=v[5],D=v[9],P=v[2],b=v[6],y=v[10];if(Math.abs(_-M)<.01&&Math.abs(S-P)<.01&&Math.abs(D-b)<.01){if(Math.abs(_+M)<.1&&Math.abs(S+P)<.1&&Math.abs(D+b)<.1&&Math.abs(m+A+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const X=(m+1)/2,z=(A+1)/2,q=(y+1)/2,Q=(_+M)/4,K=(S+P)/4,W=(D+b)/4;return X>z&&X>q?X<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(X),l=Q/a,c=K/a):z>q?z<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(z),a=Q/l,c=W/l):q<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(q),a=K/c,l=W/c),this.set(a,l,c,i),this}let Z=Math.sqrt((b-D)*(b-D)+(S-P)*(S-P)+(M-_)*(M-_));return Math.abs(Z)<.001&&(Z=1),this.x=(b-D)/Z,this.y=(S-P)/Z,this.z=(M-_)/Z,this.w=Math.acos((m+A+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this.z=Ve(this.z,t.z,i.z),this.w=Ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this.z=Ve(this.z,t,i),this.w=Ve(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ve(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends wo{constructor(t=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=a.depth,this.scissor=new Rn(0,0,t,i),this.scissorTest=!1,this.viewport=new Rn(0,0,t,i);const l={width:t,height:i,depth:a.depth},c=new Ri(l);this.textures=[];const d=a.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const i={minFilter:vr,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Lp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends mM{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class L_ extends Ri{constructor(t=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=or,this.minFilter=or,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gM extends Ri{constructor(t=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=or,this.minFilter=or,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gl{constructor(t=new xt(1/0,1/0,1/0),i=new xt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(nr.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(nr.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=nr.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,nr):nr.fromBufferAttribute(c,d),nr.applyMatrix4(t.matrixWorld),this.expandByPoint(nr);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ou.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ou.copy(a.boundingBox)),ou.applyMatrix4(t.matrixWorld),this.union(ou)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nr),nr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rl),lu.subVectors(this.max,Rl),ro.subVectors(t.a,Rl),ao.subVectors(t.b,Rl),so.subVectors(t.c,Rl),Sa.subVectors(ao,ro),Ma.subVectors(so,ao),ns.subVectors(ro,so);let i=[0,-Sa.z,Sa.y,0,-Ma.z,Ma.y,0,-ns.z,ns.y,Sa.z,0,-Sa.x,Ma.z,0,-Ma.x,ns.z,0,-ns.x,-Sa.y,Sa.x,0,-Ma.y,Ma.x,0,-ns.y,ns.x,0];return!ad(i,ro,ao,so,lu)||(i=[1,0,0,0,1,0,0,0,1],!ad(i,ro,ao,so,lu))?!1:(cu.crossVectors(Sa,Ma),i=[cu.x,cu.y,cu.z],ad(i,ro,ao,so,lu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nr).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nr).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ir),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ir=[new xt,new xt,new xt,new xt,new xt,new xt,new xt,new xt],nr=new xt,ou=new Gl,ro=new xt,ao=new xt,so=new xt,Sa=new xt,Ma=new xt,ns=new xt,Rl=new xt,lu=new xt,cu=new xt,is=new xt;function ad(s,t,i,a,l){for(let c=0,d=s.length-3;c<=d;c+=3){is.fromArray(s,c);const p=l.x*Math.abs(is.x)+l.y*Math.abs(is.y)+l.z*Math.abs(is.z),v=t.dot(is),m=i.dot(is),_=a.dot(is);if(Math.max(-Math.max(v,m,_),Math.min(v,m,_))>p)return!1}return!0}const vM=new Gl,wl=new xt,sd=new xt;class Op{constructor(t=new xt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):vM.setFromPoints(t).getCenter(a);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wl.subVectors(t,this.center);const i=wl.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(wl,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wl.copy(t.center).add(sd)),this.expandByPoint(wl.copy(t.center).sub(sd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Br=new xt,od=new xt,uu=new xt,Ea=new xt,ld=new xt,fu=new xt,cd=new xt;class _M{constructor(t=new xt,i=new xt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Br)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Br.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Br.copy(this.origin).addScaledVector(this.direction,i),Br.distanceToSquared(t))}distanceSqToSegment(t,i,a,l){od.copy(t).add(i).multiplyScalar(.5),uu.copy(i).sub(t).normalize(),Ea.copy(this.origin).sub(od);const c=t.distanceTo(i)*.5,d=-this.direction.dot(uu),p=Ea.dot(this.direction),v=-Ea.dot(uu),m=Ea.lengthSq(),_=Math.abs(1-d*d);let S,M,A,D;if(_>0)if(S=d*v-p,M=d*p-v,D=c*_,S>=0)if(M>=-D)if(M<=D){const P=1/_;S*=P,M*=P,A=S*(S+d*M+2*p)+M*(d*S+M+2*v)+m}else M=c,S=Math.max(0,-(d*M+p)),A=-S*S+M*(M+2*v)+m;else M=-c,S=Math.max(0,-(d*M+p)),A=-S*S+M*(M+2*v)+m;else M<=-D?(S=Math.max(0,-(-d*c+p)),M=S>0?-c:Math.min(Math.max(-c,-v),c),A=-S*S+M*(M+2*v)+m):M<=D?(S=0,M=Math.min(Math.max(-c,-v),c),A=M*(M+2*v)+m):(S=Math.max(0,-(d*c+p)),M=S>0?c:Math.min(Math.max(-c,-v),c),A=-S*S+M*(M+2*v)+m);else M=d>0?-c:c,S=Math.max(0,-(d*M+p)),A=-S*S+M*(M+2*v)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(od).addScaledVector(uu,M),A}intersectSphere(t,i){Br.subVectors(t.center,this.origin);const a=Br.dot(this.direction),l=Br.dot(Br)-a*a,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=a-d,v=a+d;return v<0?null:p<0?this.at(v,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,l,c,d,p,v;const m=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,M=this.origin;return m>=0?(a=(t.min.x-M.x)*m,l=(t.max.x-M.x)*m):(a=(t.max.x-M.x)*m,l=(t.min.x-M.x)*m),_>=0?(c=(t.min.y-M.y)*_,d=(t.max.y-M.y)*_):(c=(t.max.y-M.y)*_,d=(t.min.y-M.y)*_),a>d||c>l||((c>a||isNaN(a))&&(a=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(t.min.z-M.z)*S,v=(t.max.z-M.z)*S):(p=(t.max.z-M.z)*S,v=(t.min.z-M.z)*S),a>v||p>l)||((p>a||a!==a)&&(a=p),(v<l||l!==l)&&(l=v),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(t){return this.intersectBox(t,Br)!==null}intersectTriangle(t,i,a,l,c){ld.subVectors(i,t),fu.subVectors(a,t),cd.crossVectors(ld,fu);let d=this.direction.dot(cd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Ea.subVectors(this.origin,t);const v=p*this.direction.dot(fu.crossVectors(Ea,fu));if(v<0)return null;const m=p*this.direction.dot(ld.cross(Ea));if(m<0||v+m>d)return null;const _=-p*Ea.dot(cd);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ln{constructor(t,i,a,l,c,d,p,v,m,_,S,M,A,D,P,b){Ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,d,p,v,m,_,S,M,A,D,P,b)}set(t,i,a,l,c,d,p,v,m,_,S,M,A,D,P,b){const y=this.elements;return y[0]=t,y[4]=i,y[8]=a,y[12]=l,y[1]=c,y[5]=d,y[9]=p,y[13]=v,y[2]=m,y[6]=_,y[10]=S,y[14]=M,y[3]=A,y[7]=D,y[11]=P,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ln().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,l=1/oo.setFromMatrixColumn(t,0).length(),c=1/oo.setFromMatrixColumn(t,1).length(),d=1/oo.setFromMatrixColumn(t,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*d,i[9]=a[9]*d,i[10]=a[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,l=t.y,c=t.z,d=Math.cos(a),p=Math.sin(a),v=Math.cos(l),m=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const M=d*_,A=d*S,D=p*_,P=p*S;i[0]=v*_,i[4]=-v*S,i[8]=m,i[1]=A+D*m,i[5]=M-P*m,i[9]=-p*v,i[2]=P-M*m,i[6]=D+A*m,i[10]=d*v}else if(t.order==="YXZ"){const M=v*_,A=v*S,D=m*_,P=m*S;i[0]=M+P*p,i[4]=D*p-A,i[8]=d*m,i[1]=d*S,i[5]=d*_,i[9]=-p,i[2]=A*p-D,i[6]=P+M*p,i[10]=d*v}else if(t.order==="ZXY"){const M=v*_,A=v*S,D=m*_,P=m*S;i[0]=M-P*p,i[4]=-d*S,i[8]=D+A*p,i[1]=A+D*p,i[5]=d*_,i[9]=P-M*p,i[2]=-d*m,i[6]=p,i[10]=d*v}else if(t.order==="ZYX"){const M=d*_,A=d*S,D=p*_,P=p*S;i[0]=v*_,i[4]=D*m-A,i[8]=M*m+P,i[1]=v*S,i[5]=P*m+M,i[9]=A*m-D,i[2]=-m,i[6]=p*v,i[10]=d*v}else if(t.order==="YZX"){const M=d*v,A=d*m,D=p*v,P=p*m;i[0]=v*_,i[4]=P-M*S,i[8]=D*S+A,i[1]=S,i[5]=d*_,i[9]=-p*_,i[2]=-m*_,i[6]=A*S+D,i[10]=M-P*S}else if(t.order==="XZY"){const M=d*v,A=d*m,D=p*v,P=p*m;i[0]=v*_,i[4]=-S,i[8]=m*_,i[1]=M*S+P,i[5]=d*_,i[9]=A*S-D,i[2]=D*S-A,i[6]=p*_,i[10]=P*S+M}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xM,t,yM)}lookAt(t,i,a){const l=this.elements;return zi.subVectors(t,i),zi.lengthSq()===0&&(zi.z=1),zi.normalize(),ba.crossVectors(a,zi),ba.lengthSq()===0&&(Math.abs(a.z)===1?zi.x+=1e-4:zi.z+=1e-4,zi.normalize(),ba.crossVectors(a,zi)),ba.normalize(),hu.crossVectors(zi,ba),l[0]=ba.x,l[4]=hu.x,l[8]=zi.x,l[1]=ba.y,l[5]=hu.y,l[9]=zi.y,l[2]=ba.z,l[6]=hu.z,l[10]=zi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,d=a[0],p=a[4],v=a[8],m=a[12],_=a[1],S=a[5],M=a[9],A=a[13],D=a[2],P=a[6],b=a[10],y=a[14],Z=a[3],X=a[7],z=a[11],q=a[15],Q=l[0],K=l[4],W=l[8],O=l[12],T=l[1],L=l[5],J=l[9],nt=l[13],dt=l[2],ot=l[6],N=l[10],H=l[14],B=l[3],lt=l[7],I=l[11],rt=l[15];return c[0]=d*Q+p*T+v*dt+m*B,c[4]=d*K+p*L+v*ot+m*lt,c[8]=d*W+p*J+v*N+m*I,c[12]=d*O+p*nt+v*H+m*rt,c[1]=_*Q+S*T+M*dt+A*B,c[5]=_*K+S*L+M*ot+A*lt,c[9]=_*W+S*J+M*N+A*I,c[13]=_*O+S*nt+M*H+A*rt,c[2]=D*Q+P*T+b*dt+y*B,c[6]=D*K+P*L+b*ot+y*lt,c[10]=D*W+P*J+b*N+y*I,c[14]=D*O+P*nt+b*H+y*rt,c[3]=Z*Q+X*T+z*dt+q*B,c[7]=Z*K+X*L+z*ot+q*lt,c[11]=Z*W+X*J+z*N+q*I,c[15]=Z*O+X*nt+z*H+q*rt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],l=t[8],c=t[12],d=t[1],p=t[5],v=t[9],m=t[13],_=t[2],S=t[6],M=t[10],A=t[14],D=t[3],P=t[7],b=t[11],y=t[15];return D*(+c*v*S-l*m*S-c*p*M+a*m*M+l*p*A-a*v*A)+P*(+i*v*A-i*m*M+c*d*M-l*d*A+l*m*_-c*v*_)+b*(+i*m*S-i*p*A-c*d*S+a*d*A+c*p*_-a*m*_)+y*(-l*p*_-i*v*S+i*p*M+l*d*S-a*d*M+a*v*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],d=t[4],p=t[5],v=t[6],m=t[7],_=t[8],S=t[9],M=t[10],A=t[11],D=t[12],P=t[13],b=t[14],y=t[15],Z=S*b*m-P*M*m+P*v*A-p*b*A-S*v*y+p*M*y,X=D*M*m-_*b*m-D*v*A+d*b*A+_*v*y-d*M*y,z=_*P*m-D*S*m+D*p*A-d*P*A-_*p*y+d*S*y,q=D*S*v-_*P*v-D*p*M+d*P*M+_*p*b-d*S*b,Q=i*Z+a*X+l*z+c*q;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/Q;return t[0]=Z*K,t[1]=(P*M*c-S*b*c-P*l*A+a*b*A+S*l*y-a*M*y)*K,t[2]=(p*b*c-P*v*c+P*l*m-a*b*m-p*l*y+a*v*y)*K,t[3]=(S*v*c-p*M*c-S*l*m+a*M*m+p*l*A-a*v*A)*K,t[4]=X*K,t[5]=(_*b*c-D*M*c+D*l*A-i*b*A-_*l*y+i*M*y)*K,t[6]=(D*v*c-d*b*c-D*l*m+i*b*m+d*l*y-i*v*y)*K,t[7]=(d*M*c-_*v*c+_*l*m-i*M*m-d*l*A+i*v*A)*K,t[8]=z*K,t[9]=(D*S*c-_*P*c-D*a*A+i*P*A+_*a*y-i*S*y)*K,t[10]=(d*P*c-D*p*c+D*a*m-i*P*m-d*a*y+i*p*y)*K,t[11]=(_*p*c-d*S*c-_*a*m+i*S*m+d*a*A-i*p*A)*K,t[12]=q*K,t[13]=(_*P*l-D*S*l+D*a*M-i*P*M-_*a*b+i*S*b)*K,t[14]=(D*p*l-d*P*l-D*a*v+i*P*v+d*a*b-i*p*b)*K,t[15]=(d*S*l-_*p*l+_*a*v-i*S*v-d*a*M+i*p*M)*K,this}scale(t){const i=this.elements,a=t.x,l=t.y,c=t.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,d=t.x,p=t.y,v=t.z,m=c*d,_=c*p;return this.set(m*d+a,m*p-l*v,m*v+l*p,0,m*p+l*v,_*p+a,_*v-l*d,0,m*v-l*p,_*v+l*d,c*v*v+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,l,c,d){return this.set(1,a,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,a){const l=this.elements,c=i._x,d=i._y,p=i._z,v=i._w,m=c+c,_=d+d,S=p+p,M=c*m,A=c*_,D=c*S,P=d*_,b=d*S,y=p*S,Z=v*m,X=v*_,z=v*S,q=a.x,Q=a.y,K=a.z;return l[0]=(1-(P+y))*q,l[1]=(A+z)*q,l[2]=(D-X)*q,l[3]=0,l[4]=(A-z)*Q,l[5]=(1-(M+y))*Q,l[6]=(b+Z)*Q,l[7]=0,l[8]=(D+X)*K,l[9]=(b-Z)*K,l[10]=(1-(M+P))*K,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,a){const l=this.elements;let c=oo.set(l[0],l[1],l[2]).length();const d=oo.set(l[4],l[5],l[6]).length(),p=oo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],ir.copy(this);const m=1/c,_=1/d,S=1/p;return ir.elements[0]*=m,ir.elements[1]*=m,ir.elements[2]*=m,ir.elements[4]*=_,ir.elements[5]*=_,ir.elements[6]*=_,ir.elements[8]*=S,ir.elements[9]*=S,ir.elements[10]*=S,i.setFromRotationMatrix(ir),a.x=c,a.y=d,a.z=p,this}makePerspective(t,i,a,l,c,d,p=_r,v=!1){const m=this.elements,_=2*c/(i-t),S=2*c/(a-l),M=(i+t)/(i-t),A=(a+l)/(a-l);let D,P;if(v)D=c/(d-c),P=d*c/(d-c);else if(p===_r)D=-(d+c)/(d-c),P=-2*d*c/(d-c);else if(p===Ou)D=-d/(d-c),P=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=_,m[4]=0,m[8]=M,m[12]=0,m[1]=0,m[5]=S,m[9]=A,m[13]=0,m[2]=0,m[6]=0,m[10]=D,m[14]=P,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,a,l,c,d,p=_r,v=!1){const m=this.elements,_=2/(i-t),S=2/(a-l),M=-(i+t)/(i-t),A=-(a+l)/(a-l);let D,P;if(v)D=1/(d-c),P=d/(d-c);else if(p===_r)D=-2/(d-c),P=-(d+c)/(d-c);else if(p===Ou)D=-1/(d-c),P=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=_,m[4]=0,m[8]=0,m[12]=M,m[1]=0,m[5]=S,m[9]=0,m[13]=A,m[2]=0,m[6]=0,m[10]=D,m[14]=P,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const oo=new xt,ir=new Ln,xM=new xt(0,0,0),yM=new xt(1,1,1),ba=new xt,hu=new xt,zi=new xt,_0=new Ln,x0=new Hl;class Sr{constructor(t=0,i=0,a=0,l=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,l=this._order){return this._x=t,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],v=l[1],m=l[5],_=l[9],S=l[2],M=l[6],A=l[10];switch(i){case"XYZ":this._y=Math.asin(Ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,A),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(M,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,A),this._z=Math.atan2(v,m)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-S,A),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(v,c));break;case"ZYX":this._y=Math.asin(-Ve(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(M,A),this._z=Math.atan2(v,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,A));break;case"XZY":this._z=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(M,m),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return _0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_0,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return x0.setFromEuler(this),this.setFromQuaternion(x0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class O_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SM=0;const y0=new xt,lo=new Hl,Fr=new Ln,du=new xt,Cl=new xt,MM=new xt,EM=new Hl,S0=new xt(1,0,0),M0=new xt(0,1,0),E0=new xt(0,0,1),b0={type:"added"},bM={type:"removed"},co={type:"childadded",child:null},ud={type:"childremoved",child:null};class ui extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const t=new xt,i=new Sr,a=new Hl,l=new xt(1,1,1);function c(){a.setFromEuler(i,!1)}function d(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ln},normalMatrix:{value:new Ue}}),this.matrix=new Ln,this.matrixWorld=new Ln,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return lo.setFromAxisAngle(t,i),this.quaternion.multiply(lo),this}rotateOnWorldAxis(t,i){return lo.setFromAxisAngle(t,i),this.quaternion.premultiply(lo),this}rotateX(t){return this.rotateOnAxis(S0,t)}rotateY(t){return this.rotateOnAxis(M0,t)}rotateZ(t){return this.rotateOnAxis(E0,t)}translateOnAxis(t,i){return y0.copy(t).applyQuaternion(this.quaternion),this.position.add(y0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(S0,t)}translateY(t){return this.translateOnAxis(M0,t)}translateZ(t){return this.translateOnAxis(E0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?du.copy(t):du.set(t,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(Cl,du,this.up):Fr.lookAt(du,Cl,this.up),this.quaternion.setFromRotationMatrix(Fr),l&&(Fr.extractRotation(l.matrixWorld),lo.setFromRotationMatrix(Fr),this.quaternion.premultiply(lo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(b0),co.child=t,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bM),ud.child=t,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(b0),co.child=t,this.dispatchEvent(co),co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const d=this.children[a].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,t,MM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,EM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,v){return p[v.uuid]===void 0&&(p[v.uuid]=v.toJSON(t)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const v=p.shapes;if(Array.isArray(v))for(let m=0,_=v.length;m<_;m++){const S=v[m];c(t.shapes,S)}else c(t.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let v=0,m=this.material.length;v<m;v++)p.push(c(t.materials,this.material[v]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const v=this.animations[p];l.animations.push(c(t.animations,v))}}if(i){const p=d(t.geometries),v=d(t.materials),m=d(t.textures),_=d(t.images),S=d(t.shapes),M=d(t.skeletons),A=d(t.animations),D=d(t.nodes);p.length>0&&(a.geometries=p),v.length>0&&(a.materials=v),m.length>0&&(a.textures=m),_.length>0&&(a.images=_),S.length>0&&(a.shapes=S),M.length>0&&(a.skeletons=M),A.length>0&&(a.animations=A),D.length>0&&(a.nodes=D)}return a.object=l,a;function d(p){const v=[];for(const m in p){const _=p[m];delete _.metadata,v.push(_)}return v}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}ui.DEFAULT_UP=new xt(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new xt,Hr=new xt,fd=new xt,Gr=new xt,uo=new xt,fo=new xt,T0=new xt,hd=new xt,dd=new xt,pd=new xt,md=new Rn,gd=new Rn,vd=new Rn;class ar{constructor(t=new xt,i=new xt,a=new xt){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,l){l.subVectors(a,i),rr.subVectors(t,i),l.cross(rr);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,a,l,c){rr.subVectors(l,i),Hr.subVectors(a,i),fd.subVectors(t,i);const d=rr.dot(rr),p=rr.dot(Hr),v=rr.dot(fd),m=Hr.dot(Hr),_=Hr.dot(fd),S=d*m-p*p;if(S===0)return c.set(0,0,0),null;const M=1/S,A=(m*v-p*_)*M,D=(d*_-p*v)*M;return c.set(1-A-D,D,A)}static containsPoint(t,i,a,l){return this.getBarycoord(t,i,a,l,Gr)===null?!1:Gr.x>=0&&Gr.y>=0&&Gr.x+Gr.y<=1}static getInterpolation(t,i,a,l,c,d,p,v){return this.getBarycoord(t,i,a,l,Gr)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(c,Gr.x),v.addScaledVector(d,Gr.y),v.addScaledVector(p,Gr.z),v)}static getInterpolatedAttribute(t,i,a,l,c,d){return md.setScalar(0),gd.setScalar(0),vd.setScalar(0),md.fromBufferAttribute(t,i),gd.fromBufferAttribute(t,a),vd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(md,c.x),d.addScaledVector(gd,c.y),d.addScaledVector(vd,c.z),d}static isFrontFacing(t,i,a,l){return rr.subVectors(a,i),Hr.subVectors(t,i),rr.cross(Hr).dot(l)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,l){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,a,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rr.subVectors(this.c,this.b),Hr.subVectors(this.a,this.b),rr.cross(Hr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ar.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ar.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,l,c){return ar.getInterpolation(t,this.a,this.b,this.c,i,a,l,c)}containsPoint(t){return ar.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ar.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,l=this.b,c=this.c;let d,p;uo.subVectors(l,a),fo.subVectors(c,a),hd.subVectors(t,a);const v=uo.dot(hd),m=fo.dot(hd);if(v<=0&&m<=0)return i.copy(a);dd.subVectors(t,l);const _=uo.dot(dd),S=fo.dot(dd);if(_>=0&&S<=_)return i.copy(l);const M=v*S-_*m;if(M<=0&&v>=0&&_<=0)return d=v/(v-_),i.copy(a).addScaledVector(uo,d);pd.subVectors(t,c);const A=uo.dot(pd),D=fo.dot(pd);if(D>=0&&A<=D)return i.copy(c);const P=A*m-v*D;if(P<=0&&m>=0&&D<=0)return p=m/(m-D),i.copy(a).addScaledVector(fo,p);const b=_*D-A*S;if(b<=0&&S-_>=0&&A-D>=0)return T0.subVectors(c,l),p=(S-_)/(S-_+(A-D)),i.copy(l).addScaledVector(T0,p);const y=1/(b+P+M);return d=P*y,p=M*y,i.copy(a).addScaledVector(uo,d).addScaledVector(fo,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ta={h:0,s:0,l:0},pu={h:0,s:0,l:0};function _d(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class $e{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ki){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ze.colorSpaceToWorking(this,i),this}setRGB(t,i,a,l=Ze.workingColorSpace){return this.r=t,this.g=i,this.b=a,Ze.colorSpaceToWorking(this,l),this}setHSL(t,i,a,l=Ze.workingColorSpace){if(t=lM(t,1),i=Ve(i,0,1),a=Ve(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,d=2*a-c;this.r=_d(d,c,t+1/3),this.g=_d(d,c,t),this.b=_d(d,c,t-1/3)}return Ze.colorSpaceToWorking(this,l),this}setStyle(t,i=Ki){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ki){const a=P_[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ki){return Ze.workingToColorSpace(ci.copy(this),t),Math.round(Ve(ci.r*255,0,255))*65536+Math.round(Ve(ci.g*255,0,255))*256+Math.round(Ve(ci.b*255,0,255))}getHexString(t=Ki){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ze.workingColorSpace){Ze.workingToColorSpace(ci.copy(this),i);const a=ci.r,l=ci.g,c=ci.b,d=Math.max(a,l,c),p=Math.min(a,l,c);let v,m;const _=(p+d)/2;if(p===d)v=0,m=0;else{const S=d-p;switch(m=_<=.5?S/(d+p):S/(2-d-p),d){case a:v=(l-c)/S+(l<c?6:0);break;case l:v=(c-a)/S+2;break;case c:v=(a-l)/S+4;break}v/=6}return t.h=v,t.s=m,t.l=_,t}getRGB(t,i=Ze.workingColorSpace){return Ze.workingToColorSpace(ci.copy(this),i),t.r=ci.r,t.g=ci.g,t.b=ci.b,t}getStyle(t=Ki){Ze.workingToColorSpace(ci.copy(this),t);const i=ci.r,a=ci.g,l=ci.b;return t!==Ki?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,i,a){return this.getHSL(Ta),this.setHSL(Ta.h+t,Ta.s+i,Ta.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Ta),t.getHSL(pu);const a=td(Ta.h,pu.h,i),l=td(Ta.s,pu.s,i),c=td(Ta.l,pu.l,i);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ci=new $e;$e.NAMES=P_;let TM=0;class Vl extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Fl(),this.name="",this.type="Material",this.blending=xo,this.side=Da,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=zd,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(a.blending=this.blending),this.side!==Da&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Pd&&(a.blendSrc=this.blendSrc),this.blendDst!==zd&&(a.blendDst=this.blendDst),this.blendEquation!==fs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(a.stencilFail=this.stencilFail),this.stencilZFail!==no&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const d=[];for(const p in c){const v=c[p];delete v.metadata,d.push(v)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(a.textures=c),d.length>0&&(a.images=d)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class z_ extends Vl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bn=new xt,mu=new We;let AM=0;class xr{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=h0,this.updateRanges=[],this.gpuType=Xr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)mu.fromBufferAttribute(this,i),mu.applyMatrix3(t),this.setXY(i,mu.x,mu.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix3(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=Al(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=Ti(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Al(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Al(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Al(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Al(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=Ti(i,this.array),a=Ti(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,l){return t*=this.itemSize,this.normalized&&(i=Ti(i,this.array),a=Ti(a,this.array),l=Ti(l,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,i,a,l,c){return t*=this.itemSize,this.normalized&&(i=Ti(i,this.array),a=Ti(a,this.array),l=Ti(l,this.array),c=Ti(c,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==h0&&(t.usage=this.usage),t}}class I_ extends xr{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class B_ extends xr{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class Bi extends xr{constructor(t,i,a){super(new Float32Array(t),i,a)}}let RM=0;const Zi=new Ln,xd=new ui,ho=new xt,Ii=new Gl,Dl=new Gl,Qn=new xt;class Wr extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(N_(t)?B_:I_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Ue().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zi.makeRotationFromQuaternion(t),this.applyMatrix4(Zi),this}rotateX(t){return Zi.makeRotationX(t),this.applyMatrix4(Zi),this}rotateY(t){return Zi.makeRotationY(t),this.applyMatrix4(Zi),this}rotateZ(t){return Zi.makeRotationZ(t),this.applyMatrix4(Zi),this}translate(t,i,a){return Zi.makeTranslation(t,i,a),this.applyMatrix4(Zi),this}scale(t,i,a){return Zi.makeScale(t,i,a),this.applyMatrix4(Zi),this}lookAt(t){return xd.lookAt(t),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];a.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Bi(a,3))}else{const a=Math.min(t.length,i.count);for(let l=0;l<a;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new xt(-1/0,-1/0,-1/0),new xt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];Ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Qn.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(Qn),Qn.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(Qn)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Op);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new xt,1/0);return}if(t){const a=this.boundingSphere.center;if(Ii.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Dl.setFromBufferAttribute(p),this.morphTargetsRelative?(Qn.addVectors(Ii.min,Dl.min),Ii.expandByPoint(Qn),Qn.addVectors(Ii.max,Dl.max),Ii.expandByPoint(Qn)):(Ii.expandByPoint(Dl.min),Ii.expandByPoint(Dl.max))}Ii.getCenter(a);let l=0;for(let c=0,d=t.count;c<d;c++)Qn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(Qn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],v=this.morphTargetsRelative;for(let m=0,_=p.count;m<_;m++)Qn.fromBufferAttribute(p,m),v&&(ho.fromBufferAttribute(t,m),Qn.add(ho)),l=Math.max(l,a.distanceToSquared(Qn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xr(new Float32Array(4*a.count),4));const d=this.getAttribute("tangent"),p=[],v=[];for(let W=0;W<a.count;W++)p[W]=new xt,v[W]=new xt;const m=new xt,_=new xt,S=new xt,M=new We,A=new We,D=new We,P=new xt,b=new xt;function y(W,O,T){m.fromBufferAttribute(a,W),_.fromBufferAttribute(a,O),S.fromBufferAttribute(a,T),M.fromBufferAttribute(c,W),A.fromBufferAttribute(c,O),D.fromBufferAttribute(c,T),_.sub(m),S.sub(m),A.sub(M),D.sub(M);const L=1/(A.x*D.y-D.x*A.y);isFinite(L)&&(P.copy(_).multiplyScalar(D.y).addScaledVector(S,-A.y).multiplyScalar(L),b.copy(S).multiplyScalar(A.x).addScaledVector(_,-D.x).multiplyScalar(L),p[W].add(P),p[O].add(P),p[T].add(P),v[W].add(b),v[O].add(b),v[T].add(b))}let Z=this.groups;Z.length===0&&(Z=[{start:0,count:t.count}]);for(let W=0,O=Z.length;W<O;++W){const T=Z[W],L=T.start,J=T.count;for(let nt=L,dt=L+J;nt<dt;nt+=3)y(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const X=new xt,z=new xt,q=new xt,Q=new xt;function K(W){q.fromBufferAttribute(l,W),Q.copy(q);const O=p[W];X.copy(O),X.sub(q.multiplyScalar(q.dot(O))).normalize(),z.crossVectors(Q,O);const L=z.dot(v[W])<0?-1:1;d.setXYZW(W,X.x,X.y,X.z,L)}for(let W=0,O=Z.length;W<O;++W){const T=Z[W],L=T.start,J=T.count;for(let nt=L,dt=L+J;nt<dt;nt+=3)K(t.getX(nt+0)),K(t.getX(nt+1)),K(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new xr(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let M=0,A=a.count;M<A;M++)a.setXYZ(M,0,0,0);const l=new xt,c=new xt,d=new xt,p=new xt,v=new xt,m=new xt,_=new xt,S=new xt;if(t)for(let M=0,A=t.count;M<A;M+=3){const D=t.getX(M+0),P=t.getX(M+1),b=t.getX(M+2);l.fromBufferAttribute(i,D),c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,b),_.subVectors(d,c),S.subVectors(l,c),_.cross(S),p.fromBufferAttribute(a,D),v.fromBufferAttribute(a,P),m.fromBufferAttribute(a,b),p.add(_),v.add(_),m.add(_),a.setXYZ(D,p.x,p.y,p.z),a.setXYZ(P,v.x,v.y,v.z),a.setXYZ(b,m.x,m.y,m.z)}else for(let M=0,A=i.count;M<A;M+=3)l.fromBufferAttribute(i,M+0),c.fromBufferAttribute(i,M+1),d.fromBufferAttribute(i,M+2),_.subVectors(d,c),S.subVectors(l,c),_.cross(S),a.setXYZ(M+0,_.x,_.y,_.z),a.setXYZ(M+1,_.x,_.y,_.z),a.setXYZ(M+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)Qn.fromBufferAttribute(t,i),Qn.normalize(),t.setXYZ(i,Qn.x,Qn.y,Qn.z)}toNonIndexed(){function t(p,v){const m=p.array,_=p.itemSize,S=p.normalized,M=new m.constructor(v.length*_);let A=0,D=0;for(let P=0,b=v.length;P<b;P++){p.isInterleavedBufferAttribute?A=v[P]*p.data.stride+p.offset:A=v[P]*_;for(let y=0;y<_;y++)M[D++]=m[A++]}return new xr(M,_,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wr,a=this.index.array,l=this.attributes;for(const p in l){const v=l[p],m=t(v,a);i.setAttribute(p,m)}const c=this.morphAttributes;for(const p in c){const v=[],m=c[p];for(let _=0,S=m.length;_<S;_++){const M=m[_],A=t(M,a);v.push(A)}i.morphAttributes[p]=v}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,v=d.length;p<v;p++){const m=d[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const m in v)v[m]!==void 0&&(t[m]=v[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const v in a){const m=a[v];t.data.attributes[v]=m.toJSON(t.data)}const l={};let c=!1;for(const v in this.morphAttributes){const m=this.morphAttributes[v],_=[];for(let S=0,M=m.length;S<M;S++){const A=m[S];_.push(A.toJSON(t.data))}_.length>0&&(l[v]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],S=c[m];for(let M=0,A=S.length;M<A;M++)_.push(S[M].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,_=d.length;m<_;m++){const S=d[m];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const v=t.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A0=new Ln,rs=new _M,gu=new Op,R0=new xt,vu=new xt,_u=new xt,xu=new xt,yd=new xt,yu=new xt,w0=new xt,Su=new xt;class ii extends ui{constructor(t=new Wr,i=new z_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,d=a.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){yu.set(0,0,0);for(let v=0,m=c.length;v<m;v++){const _=p[v],S=c[v];_!==0&&(yd.fromBufferAttribute(S,t),d?yu.addScaledVector(yd,_):yu.addScaledVector(yd.sub(i),_))}i.add(yu)}return i}raycast(t,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),gu.copy(a.boundingSphere),gu.applyMatrix4(c),rs.copy(t.ray).recast(t.near),!(gu.containsPoint(rs.origin)===!1&&(rs.intersectSphere(gu,R0)===null||rs.origin.distanceToSquared(R0)>(t.far-t.near)**2))&&(A0.copy(c).invert(),rs.copy(t.ray).applyMatrix4(A0),!(a.boundingBox!==null&&rs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,rs)))}_computeIntersections(t,i,a){let l;const c=this.geometry,d=this.material,p=c.index,v=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,M=c.groups,A=c.drawRange;if(p!==null)if(Array.isArray(d))for(let D=0,P=M.length;D<P;D++){const b=M[D],y=d[b.materialIndex],Z=Math.max(b.start,A.start),X=Math.min(p.count,Math.min(b.start+b.count,A.start+A.count));for(let z=Z,q=X;z<q;z+=3){const Q=p.getX(z),K=p.getX(z+1),W=p.getX(z+2);l=Mu(this,y,t,a,m,_,S,Q,K,W),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const D=Math.max(0,A.start),P=Math.min(p.count,A.start+A.count);for(let b=D,y=P;b<y;b+=3){const Z=p.getX(b),X=p.getX(b+1),z=p.getX(b+2);l=Mu(this,d,t,a,m,_,S,Z,X,z),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(d))for(let D=0,P=M.length;D<P;D++){const b=M[D],y=d[b.materialIndex],Z=Math.max(b.start,A.start),X=Math.min(v.count,Math.min(b.start+b.count,A.start+A.count));for(let z=Z,q=X;z<q;z+=3){const Q=z,K=z+1,W=z+2;l=Mu(this,y,t,a,m,_,S,Q,K,W),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const D=Math.max(0,A.start),P=Math.min(v.count,A.start+A.count);for(let b=D,y=P;b<y;b+=3){const Z=b,X=b+1,z=b+2;l=Mu(this,d,t,a,m,_,S,Z,X,z),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function wM(s,t,i,a,l,c,d,p){let v;if(t.side===Ai?v=a.intersectTriangle(d,c,l,!0,p):v=a.intersectTriangle(l,c,d,t.side===Da,p),v===null)return null;Su.copy(p),Su.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Su);return m<i.near||m>i.far?null:{distance:m,point:Su.clone(),object:s}}function Mu(s,t,i,a,l,c,d,p,v,m){s.getVertexPosition(p,vu),s.getVertexPosition(v,_u),s.getVertexPosition(m,xu);const _=wM(s,t,i,a,vu,_u,xu,w0);if(_){const S=new xt;ar.getBarycoord(w0,vu,_u,xu,S),l&&(_.uv=ar.getInterpolatedAttribute(l,p,v,m,S,new We)),c&&(_.uv1=ar.getInterpolatedAttribute(c,p,v,m,S,new We)),d&&(_.normal=ar.getInterpolatedAttribute(d,p,v,m,S,new xt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const M={a:p,b:v,c:m,normal:new xt,materialIndex:0};ar.getNormal(vu,_u,xu,M.normal),_.face=M,_.barycoord=S}return _}class gr extends Wr{constructor(t=1,i=1,a=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const v=[],m=[],_=[],S=[];let M=0,A=0;D("z","y","x",-1,-1,a,i,t,d,c,0),D("z","y","x",1,-1,a,i,-t,d,c,1),D("x","z","y",1,1,t,a,i,l,d,2),D("x","z","y",1,-1,t,a,-i,l,d,3),D("x","y","z",1,-1,t,i,a,l,c,4),D("x","y","z",-1,-1,t,i,-a,l,c,5),this.setIndex(v),this.setAttribute("position",new Bi(m,3)),this.setAttribute("normal",new Bi(_,3)),this.setAttribute("uv",new Bi(S,2));function D(P,b,y,Z,X,z,q,Q,K,W,O){const T=z/K,L=q/W,J=z/2,nt=q/2,dt=Q/2,ot=K+1,N=W+1;let H=0,B=0;const lt=new xt;for(let I=0;I<N;I++){const rt=I*L-nt;for(let bt=0;bt<ot;bt++){const Mt=bt*T-J;lt[P]=Mt*Z,lt[b]=rt*X,lt[y]=dt,m.push(lt.x,lt.y,lt.z),lt[P]=0,lt[b]=0,lt[y]=Q>0?1:-1,_.push(lt.x,lt.y,lt.z),S.push(bt/K),S.push(1-I/W),H+=1}}for(let I=0;I<W;I++)for(let rt=0;rt<K;rt++){const bt=M+rt+ot*I,Mt=M+rt+ot*(I+1),Nt=M+(rt+1)+ot*(I+1),jt=M+(rt+1)+ot*I;v.push(bt,Mt,jt),v.push(Mt,Nt,jt),B+=6}p.addGroup(A,B,O),A+=B,M+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function To(s){const t={};for(const i in s){t[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=l.clone():Array.isArray(l)?t[i][a]=l.slice():t[i][a]=l}}return t}function pi(s){const t={};for(let i=0;i<s.length;i++){const a=To(s[i]);for(const l in a)t[l]=a[l]}return t}function CM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function F_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ze.workingColorSpace}const DM={clone:To,merge:pi};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ua extends Vl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=NM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=To(t.uniforms),this.uniformsGroups=CM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class H_ extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ln,this.projectionMatrix=new Ln,this.projectionMatrixInverse=new Ln,this.coordinateSystem=_r,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Aa=new xt,C0=new We,D0=new We;class Qi extends H_{constructor(t=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Mp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($h*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mp*2*Math.atan(Math.tan($h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){Aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z),Aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z)}getViewSize(t,i){return this.getViewBounds(t,C0,D0),i.subVectors(D0,C0)}setViewOffset(t,i,a,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan($h*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const v=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/v,i-=d.offsetY*a/m,l*=d.width/v,a*=d.height/m}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const po=-90,mo=1;class LM extends ui{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qi(po,mo,t,i);l.layers=this.layers,this.add(l);const c=new Qi(po,mo,t,i);c.layers=this.layers,this.add(c);const d=new Qi(po,mo,t,i);d.layers=this.layers,this.add(d);const p=new Qi(po,mo,t,i);p.layers=this.layers,this.add(p);const v=new Qi(po,mo,t,i);v.layers=this.layers,this.add(v);const m=new Qi(po,mo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,l,c,d,p,v]=i;for(const m of i)this.remove(m);if(t===_r)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(t===Ou)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,v,m,_]=this.children,S=t.getRenderTarget(),M=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),D=t.xr.enabled;t.xr.enabled=!1;const P=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(i,c),t.setRenderTarget(a,1,l),t.render(i,d),t.setRenderTarget(a,2,l),t.render(i,p),t.setRenderTarget(a,3,l),t.render(i,v),t.setRenderTarget(a,4,l),t.render(i,m),a.texture.generateMipmaps=P,t.setRenderTarget(a,5,l),t.render(i,_),t.setRenderTarget(S,M,A),t.xr.enabled=D,a.texture.needsPMREMUpdate=!0}}class G_ extends Ri{constructor(t=[],i=Mo,a,l,c,d,p,v,m,_){super(t,i,a,l,c,d,p,v,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class OM extends gs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new G_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new gr(5,5,5),c=new Ua({name:"CubemapFromEquirect",uniforms:To(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Ai,blending:wa});c.uniforms.tEquirect.value=i;const d=new ii(l,c),p=i.minFilter;return i.minFilter===ps&&(i.minFilter=vr),new LM(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,a,l);t.setRenderTarget(c)}}class Ul extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PM={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new xt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new xt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new xt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new xt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let l=null,c=null,d=null;const p=this._targetRay,v=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const P of t.hand.values()){const b=i.getJointPose(P,a),y=this._getHandJoint(m,P);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const _=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],M=_.position.distanceTo(S.position),A=.02,D=.005;m.inputState.pinching&&M>A+D?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&M<=A-D&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else v!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,a),c!==null&&(v.matrix.fromArray(c.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,c.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(c.linearVelocity)):v.hasLinearVelocity=!1,c.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(c.angularVelocity)):v.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(PM)))}return p!==null&&(p.visible=l!==null),v!==null&&(v.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new Ul;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class zM extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Md=new xt,IM=new xt,BM=new Ue;class cs{constructor(t=new xt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,l){return this.normal.set(t,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const l=Md.subVectors(a,i).cross(IM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(Md),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||BM.getNormalMatrix(t),l=this.coplanarPoint(Md).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Op,FM=new We(.5,.5),Eu=new xt;class Pp{constructor(t=new cs,i=new cs,a=new cs,l=new cs,c=new cs,d=new cs){this.planes=[t,i,a,l,c,d]}set(t,i,a,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(a),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=_r,a=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],v=c[2],m=c[3],_=c[4],S=c[5],M=c[6],A=c[7],D=c[8],P=c[9],b=c[10],y=c[11],Z=c[12],X=c[13],z=c[14],q=c[15];if(l[0].setComponents(m-d,A-_,y-D,q-Z).normalize(),l[1].setComponents(m+d,A+_,y+D,q+Z).normalize(),l[2].setComponents(m+p,A+S,y+P,q+X).normalize(),l[3].setComponents(m-p,A-S,y-P,q-X).normalize(),a)l[4].setComponents(v,M,b,z).normalize(),l[5].setComponents(m-v,A-M,y-b,q-z).normalize();else if(l[4].setComponents(m-v,A-M,y-b,q-z).normalize(),i===_r)l[5].setComponents(m+v,A+M,y+b,q+z).normalize();else if(i===Ou)l[5].setComponents(v,M,b,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);const i=FM.distanceTo(t.center);return as.radius=.7071067811865476+i,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const i=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Eu.x=l.normal.x>0?t.max.x:t.min.x,Eu.y=l.normal.y>0?t.max.y:t.min.y,Eu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V_ extends Ri{constructor(t,i,a=ms,l,c,d,p=or,v=or,m,_=Pl,S=1){if(_!==Pl&&_!==zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const M={width:t,height:i,depth:S};super(M,l,c,d,p,v,_,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class k_ extends Ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zp extends Wr{constructor(t=1,i=32,a=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:a,thetaLength:l},i=Math.max(3,i);const c=[],d=[],p=[],v=[],m=new xt,_=new We;d.push(0,0,0),p.push(0,0,1),v.push(.5,.5);for(let S=0,M=3;S<=i;S++,M+=3){const A=a+S/i*l;m.x=t*Math.cos(A),m.y=t*Math.sin(A),d.push(m.x,m.y,m.z),p.push(0,0,1),_.x=(d[M]/t+1)/2,_.y=(d[M+1]/t+1)/2,v.push(_.x,_.y)}for(let S=1;S<=i;S++)c.push(S,S+1,0);this.setIndex(c),this.setAttribute("position",new Bi(d,3)),this.setAttribute("normal",new Bi(p,3)),this.setAttribute("uv",new Bi(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ip extends Wr{constructor(t=1,i=1,a=1,l=32,c=1,d=!1,p=0,v=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:v};const m=this;l=Math.floor(l),c=Math.floor(c);const _=[],S=[],M=[],A=[];let D=0;const P=[],b=a/2;let y=0;Z(),d===!1&&(t>0&&X(!0),i>0&&X(!1)),this.setIndex(_),this.setAttribute("position",new Bi(S,3)),this.setAttribute("normal",new Bi(M,3)),this.setAttribute("uv",new Bi(A,2));function Z(){const z=new xt,q=new xt;let Q=0;const K=(i-t)/a;for(let W=0;W<=c;W++){const O=[],T=W/c,L=T*(i-t)+t;for(let J=0;J<=l;J++){const nt=J/l,dt=nt*v+p,ot=Math.sin(dt),N=Math.cos(dt);q.x=L*ot,q.y=-T*a+b,q.z=L*N,S.push(q.x,q.y,q.z),z.set(ot,K,N).normalize(),M.push(z.x,z.y,z.z),A.push(nt,1-T),O.push(D++)}P.push(O)}for(let W=0;W<l;W++)for(let O=0;O<c;O++){const T=P[O][W],L=P[O+1][W],J=P[O+1][W+1],nt=P[O][W+1];(t>0||O!==0)&&(_.push(T,L,nt),Q+=3),(i>0||O!==c-1)&&(_.push(L,J,nt),Q+=3)}m.addGroup(y,Q,0),y+=Q}function X(z){const q=D,Q=new We,K=new xt;let W=0;const O=z===!0?t:i,T=z===!0?1:-1;for(let J=1;J<=l;J++)S.push(0,b*T,0),M.push(0,T,0),A.push(.5,.5),D++;const L=D;for(let J=0;J<=l;J++){const dt=J/l*v+p,ot=Math.cos(dt),N=Math.sin(dt);K.x=O*N,K.y=b*T,K.z=O*ot,S.push(K.x,K.y,K.z),M.push(0,T,0),Q.x=ot*.5+.5,Q.y=N*.5*T+.5,A.push(Q.x,Q.y),D++}for(let J=0;J<l;J++){const nt=q+J,dt=L+J;z===!0?_.push(dt,dt+1,nt):_.push(dt+1,dt,nt),W+=3}m.addGroup(y,W,z===!0?1:2),y+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ip(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Iu extends Wr{constructor(t=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(a),v=Math.floor(l),m=p+1,_=v+1,S=t/p,M=i/v,A=[],D=[],P=[],b=[];for(let y=0;y<_;y++){const Z=y*M-d;for(let X=0;X<m;X++){const z=X*S-c;D.push(z,-Z,0),P.push(0,0,1),b.push(X/p),b.push(1-y/v)}}for(let y=0;y<v;y++)for(let Z=0;Z<p;Z++){const X=Z+m*y,z=Z+m*(y+1),q=Z+1+m*(y+1),Q=Z+1+m*y;A.push(X,z,Q),A.push(z,q,Q)}this.setIndex(A),this.setAttribute("position",new Bi(D,3)),this.setAttribute("normal",new Bi(P,3)),this.setAttribute("uv",new Bi(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Iu(t.width,t.height,t.widthSegments,t.heightSegments)}}class ss extends Vl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D_,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class HM extends Vl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GM extends Vl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class X_ extends ui{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ed=new Ln,U0=new xt,N0=new xt;class VM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=yr,this.map=null,this.mapPass=null,this.matrix=new Ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pp,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,a=this.matrix;U0.setFromMatrixPosition(t.matrixWorld),i.position.copy(U0),N0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(N0),i.updateMatrixWorld(),Ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed,i.coordinateSystem,i.reversedDepth),i.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class j_ extends H_{constructor(t=-1,i=1,a=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,d=a+t,p=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,p-=_*this.view.offsetY,v=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kM extends VM{constructor(){super(new j_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XM extends X_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ui.DEFAULT_UP),this.updateMatrix(),this.target=new ui,this.shadow=new kM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jM extends X_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class WM extends Qi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function L0(s,t,i,a){const l=qM(a);switch(i){case A_:return s*t;case w_:return s*t/l.components*l.byteLength;case Dp:return s*t/l.components*l.byteLength;case C_:return s*t*2/l.components*l.byteLength;case Up:return s*t*2/l.components*l.byteLength;case R_:return s*t*3/l.components*l.byteLength;case sr:return s*t*4/l.components*l.byteLength;case Np:return s*t*4/l.components*l.byteLength;case Ru:case wu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cu:case Du:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zd:case Qd:return Math.max(s,16)*Math.max(t,8)/4;case Yd:case Kd:return Math.max(s,8)*Math.max(t,8)/2;case Jd:case $d:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ep:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case np:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ip:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case rp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ap:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case sp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case op:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case lp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case cp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case up:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case hp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case dp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case mp:case gp:case vp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case _p:case xp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case yp:case Sp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qM(s){switch(s){case yr:case M_:return{byteLength:1,components:1};case Ll:case E_:case Bl:return{byteLength:2,components:1};case wp:case Cp:return{byteLength:2,components:4};case ms:case Rp:case Xr:return{byteLength:4,components:1};case b_:case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W_(){let s=null,t=!1,i=null,a=null;function l(c,d){i(c,d),a=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(a=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function YM(s){const t=new WeakMap;function i(p,v){const m=p.array,_=p.usage,S=m.byteLength,M=s.createBuffer();s.bindBuffer(v,M),s.bufferData(v,m,_),p.onUploadCallback();let A;if(m instanceof Float32Array)A=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)A=s.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?A=s.HALF_FLOAT:A=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)A=s.SHORT;else if(m instanceof Uint32Array)A=s.UNSIGNED_INT;else if(m instanceof Int32Array)A=s.INT;else if(m instanceof Int8Array)A=s.BYTE;else if(m instanceof Uint8Array)A=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)A=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:M,type:A,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:S}}function a(p,v,m){const _=v.array,S=v.updateRanges;if(s.bindBuffer(m,p),S.length===0)s.bufferSubData(m,0,_);else{S.sort((A,D)=>A.start-D.start);let M=0;for(let A=1;A<S.length;A++){const D=S[M],P=S[A];P.start<=D.start+D.count+1?D.count=Math.max(D.count,P.start+P.count-D.start):(++M,S[M]=P)}S.length=M+1;for(let A=0,D=S.length;A<D;A++){const P=S[A];s.bufferSubData(m,P.start*_.BYTES_PER_ELEMENT,_,P.start,P.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const v=t.get(p);v&&(s.deleteBuffer(v.buffer),t.delete(p))}function d(p,v){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=t.get(p);if(m===void 0)t.set(p,i(p,v));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,p,v),m.version=p.version}}return{get:l,remove:c,update:d}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_E=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",AE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,db=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,e1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,n1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,A1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:$M,alphatest_pars_fragment:tE,aomap_fragment:eE,aomap_pars_fragment:nE,batching_pars_vertex:iE,batching_vertex:rE,begin_vertex:aE,beginnormal_vertex:sE,bsdfs:oE,iridescence_fragment:lE,bumpmap_pars_fragment:cE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:fE,clipping_planes_pars_vertex:hE,clipping_planes_vertex:dE,color_fragment:pE,color_pars_fragment:mE,color_pars_vertex:gE,color_vertex:vE,common:_E,cube_uv_reflection_fragment:xE,defaultnormal_vertex:yE,displacementmap_pars_vertex:SE,displacementmap_vertex:ME,emissivemap_fragment:EE,emissivemap_pars_fragment:bE,colorspace_fragment:TE,colorspace_pars_fragment:AE,envmap_fragment:RE,envmap_common_pars_fragment:wE,envmap_pars_fragment:CE,envmap_pars_vertex:DE,envmap_physical_pars_fragment:GE,envmap_vertex:UE,fog_vertex:NE,fog_pars_vertex:LE,fog_fragment:OE,fog_pars_fragment:PE,gradientmap_pars_fragment:zE,lightmap_pars_fragment:IE,lights_lambert_fragment:BE,lights_lambert_pars_fragment:FE,lights_pars_begin:HE,lights_toon_fragment:VE,lights_toon_pars_fragment:kE,lights_phong_fragment:XE,lights_phong_pars_fragment:jE,lights_physical_fragment:WE,lights_physical_pars_fragment:qE,lights_fragment_begin:YE,lights_fragment_maps:ZE,lights_fragment_end:KE,logdepthbuf_fragment:QE,logdepthbuf_pars_fragment:JE,logdepthbuf_pars_vertex:$E,logdepthbuf_vertex:tb,map_fragment:eb,map_pars_fragment:nb,map_particle_fragment:ib,map_particle_pars_fragment:rb,metalnessmap_fragment:ab,metalnessmap_pars_fragment:sb,morphinstance_vertex:ob,morphcolor_vertex:lb,morphnormal_vertex:cb,morphtarget_pars_vertex:ub,morphtarget_vertex:fb,normal_fragment_begin:hb,normal_fragment_maps:db,normal_pars_fragment:pb,normal_pars_vertex:mb,normal_vertex:gb,normalmap_pars_fragment:vb,clearcoat_normal_fragment_begin:_b,clearcoat_normal_fragment_maps:xb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:Sb,opaque_fragment:Mb,packing:Eb,premultiplied_alpha_fragment:bb,project_vertex:Tb,dithering_fragment:Ab,dithering_pars_fragment:Rb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Cb,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Ub,shadowmap_vertex:Nb,shadowmask_pars_fragment:Lb,skinbase_vertex:Ob,skinning_pars_vertex:Pb,skinning_vertex:zb,skinnormal_vertex:Ib,specularmap_fragment:Bb,specularmap_pars_fragment:Fb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Gb,transmission_fragment:Vb,transmission_pars_fragment:kb,uv_pars_fragment:Xb,uv_pars_vertex:jb,uv_vertex:Wb,worldpos_vertex:qb,background_vert:Yb,background_frag:Zb,backgroundCube_vert:Kb,backgroundCube_frag:Qb,cube_vert:Jb,cube_frag:$b,depth_vert:t1,depth_frag:e1,distanceRGBA_vert:n1,distanceRGBA_frag:i1,equirect_vert:r1,equirect_frag:a1,linedashed_vert:s1,linedashed_frag:o1,meshbasic_vert:l1,meshbasic_frag:c1,meshlambert_vert:u1,meshlambert_frag:f1,meshmatcap_vert:h1,meshmatcap_frag:d1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:v1,meshphysical_vert:_1,meshphysical_frag:x1,meshtoon_vert:y1,meshtoon_frag:S1,points_vert:M1,points_frag:E1,shadow_vert:b1,shadow_frag:T1,sprite_vert:A1,sprite_frag:R1},Zt={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},mr={basic:{uniforms:pi([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:pi([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new $e(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:pi([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:pi([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:pi([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new $e(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:pi([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:pi([Zt.points,Zt.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:pi([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:pi([Zt.common,Zt.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:pi([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:pi([Zt.sprite,Zt.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:pi([Zt.common,Zt.displacementmap,{referencePosition:{value:new xt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:pi([Zt.lights,Zt.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};mr.physical={uniforms:pi([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const bu={r:0,b:0,g:0},os=new Sr,w1=new Ln;function C1(s,t,i,a,l,c,d){const p=new $e(0);let v=c===!0?0:1,m,_,S=null,M=0,A=null;function D(X){let z=X.isScene===!0?X.background:null;return z&&z.isTexture&&(z=(X.backgroundBlurriness>0?i:t).get(z)),z}function P(X){let z=!1;const q=D(X);q===null?y(p,v):q&&q.isColor&&(y(q,1),z=!0);const Q=s.xr.getEnvironmentBlendMode();Q==="additive"?a.buffers.color.setClear(0,0,0,1,d):Q==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,d),(s.autoClear||z)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(X,z){const q=D(z);q&&(q.isCubeTexture||q.mapping===zu)?(_===void 0&&(_=new ii(new gr(1,1,1),new Ua({name:"BackgroundCubeMaterial",uniforms:To(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Q,K,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),os.copy(z.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),_.material.uniforms.envMap.value=q,_.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(os)),_.material.toneMapped=Ze.getTransfer(q.colorSpace)!==pn,(S!==q||M!==q.version||A!==s.toneMapping)&&(_.material.needsUpdate=!0,S=q,M=q.version,A=s.toneMapping),_.layers.enableAll(),X.unshift(_,_.geometry,_.material,0,0,null)):q&&q.isTexture&&(m===void 0&&(m=new ii(new Iu(2,2),new Ua({name:"BackgroundMaterial",uniforms:To(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:Da,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=q,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Ze.getTransfer(q.colorSpace)!==pn,q.matrixAutoUpdate===!0&&q.updateMatrix(),m.material.uniforms.uvTransform.value.copy(q.matrix),(S!==q||M!==q.version||A!==s.toneMapping)&&(m.material.needsUpdate=!0,S=q,M=q.version,A=s.toneMapping),m.layers.enableAll(),X.unshift(m,m.geometry,m.material,0,0,null))}function y(X,z){X.getRGB(bu,F_(s)),a.buffers.color.setClear(bu.r,bu.g,bu.b,z,d)}function Z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return p},setClearColor:function(X,z=1){p.set(X),v=z,y(p,v)},getClearAlpha:function(){return v},setClearAlpha:function(X){v=X,y(p,v)},render:P,addToRenderList:b,dispose:Z}}function D1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=M(null);let c=l,d=!1;function p(T,L,J,nt,dt){let ot=!1;const N=S(nt,J,L);c!==N&&(c=N,m(c.object)),ot=A(T,nt,J,dt),ot&&D(T,nt,J,dt),dt!==null&&t.update(dt,s.ELEMENT_ARRAY_BUFFER),(ot||d)&&(d=!1,z(T,L,J,nt),dt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function v(){return s.createVertexArray()}function m(T){return s.bindVertexArray(T)}function _(T){return s.deleteVertexArray(T)}function S(T,L,J){const nt=J.wireframe===!0;let dt=a[T.id];dt===void 0&&(dt={},a[T.id]=dt);let ot=dt[L.id];ot===void 0&&(ot={},dt[L.id]=ot);let N=ot[nt];return N===void 0&&(N=M(v()),ot[nt]=N),N}function M(T){const L=[],J=[],nt=[];for(let dt=0;dt<i;dt++)L[dt]=0,J[dt]=0,nt[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:J,attributeDivisors:nt,object:T,attributes:{},index:null}}function A(T,L,J,nt){const dt=c.attributes,ot=L.attributes;let N=0;const H=J.getAttributes();for(const B in H)if(H[B].location>=0){const I=dt[B];let rt=ot[B];if(rt===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(rt=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(rt=T.instanceColor)),I===void 0||I.attribute!==rt||rt&&I.data!==rt.data)return!0;N++}return c.attributesNum!==N||c.index!==nt}function D(T,L,J,nt){const dt={},ot=L.attributes;let N=0;const H=J.getAttributes();for(const B in H)if(H[B].location>=0){let I=ot[B];I===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(I=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(I=T.instanceColor));const rt={};rt.attribute=I,I&&I.data&&(rt.data=I.data),dt[B]=rt,N++}c.attributes=dt,c.attributesNum=N,c.index=nt}function P(){const T=c.newAttributes;for(let L=0,J=T.length;L<J;L++)T[L]=0}function b(T){y(T,0)}function y(T,L){const J=c.newAttributes,nt=c.enabledAttributes,dt=c.attributeDivisors;J[T]=1,nt[T]===0&&(s.enableVertexAttribArray(T),nt[T]=1),dt[T]!==L&&(s.vertexAttribDivisor(T,L),dt[T]=L)}function Z(){const T=c.newAttributes,L=c.enabledAttributes;for(let J=0,nt=L.length;J<nt;J++)L[J]!==T[J]&&(s.disableVertexAttribArray(J),L[J]=0)}function X(T,L,J,nt,dt,ot,N){N===!0?s.vertexAttribIPointer(T,L,J,dt,ot):s.vertexAttribPointer(T,L,J,nt,dt,ot)}function z(T,L,J,nt){P();const dt=nt.attributes,ot=J.getAttributes(),N=L.defaultAttributeValues;for(const H in ot){const B=ot[H];if(B.location>=0){let lt=dt[H];if(lt===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(lt=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(lt=T.instanceColor)),lt!==void 0){const I=lt.normalized,rt=lt.itemSize,bt=t.get(lt);if(bt===void 0)continue;const Mt=bt.buffer,Nt=bt.type,jt=bt.bytesPerElement,ct=Nt===s.INT||Nt===s.UNSIGNED_INT||lt.gpuType===Rp;if(lt.isInterleavedBufferAttribute){const St=lt.data,It=St.stride,re=lt.offset;if(St.isInstancedInterleavedBuffer){for(let Kt=0;Kt<B.locationSize;Kt++)y(B.location+Kt,St.meshPerAttribute);T.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Kt=0;Kt<B.locationSize;Kt++)b(B.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Kt=0;Kt<B.locationSize;Kt++)X(B.location+Kt,rt/B.locationSize,Nt,I,It*jt,(re+rt/B.locationSize*Kt)*jt,ct)}else{if(lt.isInstancedBufferAttribute){for(let St=0;St<B.locationSize;St++)y(B.location+St,lt.meshPerAttribute);T.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let St=0;St<B.locationSize;St++)b(B.location+St);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let St=0;St<B.locationSize;St++)X(B.location+St,rt/B.locationSize,Nt,I,rt*jt,rt/B.locationSize*St*jt,ct)}}else if(N!==void 0){const I=N[H];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(B.location,I);break;case 3:s.vertexAttrib3fv(B.location,I);break;case 4:s.vertexAttrib4fv(B.location,I);break;default:s.vertexAttrib1fv(B.location,I)}}}}Z()}function q(){W();for(const T in a){const L=a[T];for(const J in L){const nt=L[J];for(const dt in nt)_(nt[dt].object),delete nt[dt];delete L[J]}delete a[T]}}function Q(T){if(a[T.id]===void 0)return;const L=a[T.id];for(const J in L){const nt=L[J];for(const dt in nt)_(nt[dt].object),delete nt[dt];delete L[J]}delete a[T.id]}function K(T){for(const L in a){const J=a[L];if(J[T.id]===void 0)continue;const nt=J[T.id];for(const dt in nt)_(nt[dt].object),delete nt[dt];delete J[T.id]}}function W(){O(),d=!0,c!==l&&(c=l,m(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:W,resetDefaultState:O,dispose:q,releaseStatesOfGeometry:Q,releaseStatesOfProgram:K,initAttributes:P,enableAttribute:b,disableUnusedAttributes:Z}}function U1(s,t,i){let a;function l(m){a=m}function c(m,_){s.drawArrays(a,m,_),i.update(_,a,1)}function d(m,_,S){S!==0&&(s.drawArraysInstanced(a,m,_,S),i.update(_,a,S))}function p(m,_,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,_,0,S);let A=0;for(let D=0;D<S;D++)A+=_[D];i.update(A,a,1)}function v(m,_,S,M){if(S===0)return;const A=t.get("WEBGL_multi_draw");if(A===null)for(let D=0;D<m.length;D++)d(m[D],_[D],M[D]);else{A.multiDrawArraysInstancedWEBGL(a,m,0,_,0,M,0,S);let D=0;for(let P=0;P<S;P++)D+=_[P]*M[P];i.update(D,a,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function N1(s,t,i,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const K=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(K.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(K){return!(K!==sr&&a.convert(K)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(K){const W=K===Bl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(K!==yr&&a.convert(K)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&K!==Xr&&!W)}function v(K){if(K==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";K="mediump"}return K==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=v(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const S=i.logarithmicDepthBuffer===!0,M=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),A=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),Z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),X=s.getParameter(s.MAX_VARYING_VECTORS),z=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=D>0,Q=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:v,textureFormatReadable:d,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:M,maxTextures:A,maxVertexTextures:D,maxTextureSize:P,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:Z,maxVaryings:X,maxFragmentUniforms:z,vertexTextures:q,maxSamples:Q}}function L1(s){const t=this;let i=null,a=0,l=!1,c=!1;const d=new cs,p=new Ue,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(S,M){const A=S.length!==0||M||a!==0||l;return l=M,a=S.length,A},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,M){i=_(S,M,0)},this.setState=function(S,M,A){const D=S.clippingPlanes,P=S.clipIntersection,b=S.clipShadows,y=s.get(S);if(!l||D===null||D.length===0||c&&!b)c?_(null):m();else{const Z=c?0:a,X=Z*4;let z=y.clippingState||null;v.value=z,z=_(D,M,X,A);for(let q=0;q!==X;++q)z[q]=i[q];y.clippingState=z,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=Z}};function m(){v.value!==i&&(v.value=i,v.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(S,M,A,D){const P=S!==null?S.length:0;let b=null;if(P!==0){if(b=v.value,D!==!0||b===null){const y=A+P*4,Z=M.matrixWorldInverse;p.getNormalMatrix(Z),(b===null||b.length<y)&&(b=new Float32Array(y));for(let X=0,z=A;X!==P;++X,z+=4)d.copy(S[X]).applyMatrix4(Z,p),d.normal.toArray(b,z),b[z+3]=d.constant}v.value=b,v.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,b}}function O1(s){let t=new WeakMap;function i(d,p){return p===Xd?d.mapping=Mo:p===jd&&(d.mapping=Eo),d}function a(d){if(d&&d.isTexture){const p=d.mapping;if(p===Xd||p===jd)if(t.has(d)){const v=t.get(d).texture;return i(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const m=new OM(v.height);return m.fromEquirectangularTexture(s,d),t.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const p=d.target;p.removeEventListener("dispose",l);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const vo=4,O0=[.125,.215,.35,.446,.526,.582],hs=20,bd=new j_,P0=new $e;let Td=null,Ad=0,Rd=0,wd=!1;const us=(1+Math.sqrt(5))/2,go=1/us,z0=[new xt(-us,go,0),new xt(us,go,0),new xt(-go,0,us),new xt(go,0,us),new xt(0,us,-go),new xt(0,us,go),new xt(-1,1,-1),new xt(1,1,-1),new xt(-1,1,1),new xt(1,1,1)],P1=new xt;class I0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,l=100,c={}){const{size:d=256,position:p=P1}=c;Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(t,a,l,v,p),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Td,Ad,Rd),this._renderer.xr.enabled=wd,t.scissorTest=!1,Tu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Mo||t.mapping===Eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:vr,minFilter:vr,generateMipmaps:!1,type:Bl,format:sr,colorSpace:bo,depthBuffer:!1},l=B0(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B0(t,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z1(c)),this._blurMaterial=I1(c,t,i)}return l}_compileMaterial(t){const i=new ii(this._lodPlanes[0],t);this._renderer.compile(i,bd)}_sceneToCubeUV(t,i,a,l,c){const v=new Qi(90,1,i,a),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,M=S.autoClear,A=S.toneMapping;S.getClearColor(P0),S.toneMapping=Ca,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null));const P=new z_({name:"PMREM.Background",side:Ai,depthWrite:!1,depthTest:!1}),b=new ii(new gr,P);let y=!1;const Z=t.background;Z?Z.isColor&&(P.color.copy(Z),t.background=null,y=!0):(P.color.copy(P0),y=!0);for(let X=0;X<6;X++){const z=X%3;z===0?(v.up.set(0,m[X],0),v.position.set(c.x,c.y,c.z),v.lookAt(c.x+_[X],c.y,c.z)):z===1?(v.up.set(0,0,m[X]),v.position.set(c.x,c.y,c.z),v.lookAt(c.x,c.y+_[X],c.z)):(v.up.set(0,m[X],0),v.position.set(c.x,c.y,c.z),v.lookAt(c.x,c.y,c.z+_[X]));const q=this._cubeSize;Tu(l,z*q,X>2?q:0,q,q),S.setRenderTarget(l),y&&S.render(b,v),S.render(t,v)}b.geometry.dispose(),b.material.dispose(),S.toneMapping=A,S.autoClear=M,t.background=Z}_textureToCubeUV(t,i){const a=this._renderer,l=t.mapping===Mo||t.mapping===Eo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=H0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F0());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new ii(this._lodPlanes[0],c),p=c.uniforms;p.envMap.value=t;const v=this._cubeSize;Tu(i,0,0,3*v,2*v),a.setRenderTarget(i),a.render(d,bd)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),p=z0[(l-c-1)%z0.length];this._blur(t,c-1,c,d,p)}i.autoClear=a}_blur(t,i,a,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,a,l,"latitudinal",c),this._halfBlur(d,t,a,a,l,"longitudinal",c)}_halfBlur(t,i,a,l,c,d,p){const v=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,S=new ii(this._lodPlanes[l],m),M=m.uniforms,A=this._sizeLods[a]-1,D=isFinite(c)?Math.PI/(2*A):2*Math.PI/(2*hs-1),P=c/D,b=isFinite(c)?1+Math.floor(_*P):hs;b>hs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${hs}`);const y=[];let Z=0;for(let K=0;K<hs;++K){const W=K/P,O=Math.exp(-W*W/2);y.push(O),K===0?Z+=O:K<b&&(Z+=2*O)}for(let K=0;K<y.length;K++)y[K]=y[K]/Z;M.envMap.value=t.texture,M.samples.value=b,M.weights.value=y,M.latitudinal.value=d==="latitudinal",p&&(M.poleAxis.value=p);const{_lodMax:X}=this;M.dTheta.value=D,M.mipInt.value=X-a;const z=this._sizeLods[l],q=3*z*(l>X-vo?l-X+vo:0),Q=4*(this._cubeSize-z);Tu(i,q,Q,3*z,2*z),v.setRenderTarget(i),v.render(S,bd)}}function z1(s){const t=[],i=[],a=[];let l=s;const c=s-vo+1+O0.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);i.push(p);let v=1/p;d>s-vo?v=O0[d-s+vo-1]:d===0&&(v=0),a.push(v);const m=1/(p-2),_=-m,S=1+m,M=[_,_,S,_,S,S,_,_,S,S,_,S],A=6,D=6,P=3,b=2,y=1,Z=new Float32Array(P*D*A),X=new Float32Array(b*D*A),z=new Float32Array(y*D*A);for(let Q=0;Q<A;Q++){const K=Q%3*2/3-1,W=Q>2?0:-1,O=[K,W,0,K+2/3,W,0,K+2/3,W+1,0,K,W,0,K+2/3,W+1,0,K,W+1,0];Z.set(O,P*D*Q),X.set(M,b*D*Q);const T=[Q,Q,Q,Q,Q,Q];z.set(T,y*D*Q)}const q=new Wr;q.setAttribute("position",new xr(Z,P)),q.setAttribute("uv",new xr(X,b)),q.setAttribute("faceIndex",new xr(z,y)),t.push(q),l>vo&&l--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function B0(s,t,i){const a=new gs(s,t,i);return a.texture.mapping=zu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Tu(s,t,i,a,l){s.viewport.set(t,i,a,l),s.scissor.set(t,i,a,l)}function I1(s,t,i){const a=new Float32Array(hs),l=new xt(0,1,0);return new Ua({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function F0(){return new Ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function H0(){return new Ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Bp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B1(s){let t=new WeakMap,i=null;function a(p){if(p&&p.isTexture){const v=p.mapping,m=v===Xd||v===jd,_=v===Mo||v===Eo;if(m||_){let S=t.get(p);const M=S!==void 0?S.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==M)return i===null&&(i=new I0(s)),S=m?i.fromEquirectangular(p,S):i.fromCubemap(p,S),S.texture.pmremVersion=p.pmremVersion,t.set(p,S),S.texture;if(S!==void 0)return S.texture;{const A=p.image;return m&&A&&A.height>0||_&&A&&l(A)?(i===null&&(i=new I0(s)),S=m?i.fromEquirectangular(p):i.fromCubemap(p),S.texture.pmremVersion=p.pmremVersion,t.set(p,S),p.addEventListener("dispose",c),S.texture):null}}}return p}function l(p){let v=0;const m=6;for(let _=0;_<m;_++)p[_]!==void 0&&v++;return v===m}function c(p){const v=p.target;v.removeEventListener("dispose",c);const m=t.get(v);m!==void 0&&(t.delete(v),m.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function F1(s){const t={};function i(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(a)}return t[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&Il("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function H1(s,t,i,a){const l={},c=new WeakMap;function d(S){const M=S.target;M.index!==null&&t.remove(M.index);for(const D in M.attributes)t.remove(M.attributes[D]);M.removeEventListener("dispose",d),delete l[M.id];const A=c.get(M);A&&(t.remove(A),c.delete(M)),a.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,i.memory.geometries--}function p(S,M){return l[M.id]===!0||(M.addEventListener("dispose",d),l[M.id]=!0,i.memory.geometries++),M}function v(S){const M=S.attributes;for(const A in M)t.update(M[A],s.ARRAY_BUFFER)}function m(S){const M=[],A=S.index,D=S.attributes.position;let P=0;if(A!==null){const Z=A.array;P=A.version;for(let X=0,z=Z.length;X<z;X+=3){const q=Z[X+0],Q=Z[X+1],K=Z[X+2];M.push(q,Q,Q,K,K,q)}}else if(D!==void 0){const Z=D.array;P=D.version;for(let X=0,z=Z.length/3-1;X<z;X+=3){const q=X+0,Q=X+1,K=X+2;M.push(q,Q,Q,K,K,q)}}else return;const b=new(N_(M)?B_:I_)(M,1);b.version=P;const y=c.get(S);y&&t.remove(y),c.set(S,b)}function _(S){const M=c.get(S);if(M){const A=S.index;A!==null&&M.version<A.version&&m(S)}else m(S);return c.get(S)}return{get:p,update:v,getWireframeAttribute:_}}function G1(s,t,i){let a;function l(M){a=M}let c,d;function p(M){c=M.type,d=M.bytesPerElement}function v(M,A){s.drawElements(a,A,c,M*d),i.update(A,a,1)}function m(M,A,D){D!==0&&(s.drawElementsInstanced(a,A,c,M*d,D),i.update(A,a,D))}function _(M,A,D){if(D===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,A,0,c,M,0,D);let b=0;for(let y=0;y<D;y++)b+=A[y];i.update(b,a,1)}function S(M,A,D,P){if(D===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let y=0;y<M.length;y++)m(M[y]/d,A[y],P[y]);else{b.multiDrawElementsInstancedWEBGL(a,A,0,c,M,0,P,0,D);let y=0;for(let Z=0;Z<D;Z++)y+=A[Z]*P[Z];i.update(y,a,1)}}this.setMode=l,this.setIndex=p,this.render=v,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function V1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:a}}function k1(s,t,i){const a=new WeakMap,l=new Rn;function c(d,p,v){const m=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=_!==void 0?_.length:0;let M=a.get(p);if(M===void 0||M.count!==S){let T=function(){W.dispose(),a.delete(p),p.removeEventListener("dispose",T)};var A=T;M!==void 0&&M.texture.dispose();const D=p.morphAttributes.position!==void 0,P=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],Z=p.morphAttributes.normal||[],X=p.morphAttributes.color||[];let z=0;D===!0&&(z=1),P===!0&&(z=2),b===!0&&(z=3);let q=p.attributes.position.count*z,Q=1;q>t.maxTextureSize&&(Q=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const K=new Float32Array(q*Q*4*S),W=new L_(K,q,Q,S);W.type=Xr,W.needsUpdate=!0;const O=z*4;for(let L=0;L<S;L++){const J=y[L],nt=Z[L],dt=X[L],ot=q*Q*4*L;for(let N=0;N<J.count;N++){const H=N*O;D===!0&&(l.fromBufferAttribute(J,N),K[ot+H+0]=l.x,K[ot+H+1]=l.y,K[ot+H+2]=l.z,K[ot+H+3]=0),P===!0&&(l.fromBufferAttribute(nt,N),K[ot+H+4]=l.x,K[ot+H+5]=l.y,K[ot+H+6]=l.z,K[ot+H+7]=0),b===!0&&(l.fromBufferAttribute(dt,N),K[ot+H+8]=l.x,K[ot+H+9]=l.y,K[ot+H+10]=l.z,K[ot+H+11]=dt.itemSize===4?l.w:1)}}M={count:S,texture:W,size:new We(q,Q)},a.set(p,M),p.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)v.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let D=0;for(let b=0;b<m.length;b++)D+=m[b];const P=p.morphTargetsRelative?1:1-D;v.getUniforms().setValue(s,"morphTargetBaseInfluence",P),v.getUniforms().setValue(s,"morphTargetInfluences",m)}v.getUniforms().setValue(s,"morphTargetsTexture",M.texture,i),v.getUniforms().setValue(s,"morphTargetsTextureSize",M.size)}return{update:c}}function X1(s,t,i,a){let l=new WeakMap;function c(v){const m=a.render.frame,_=v.geometry,S=t.get(v,_);if(l.get(S)!==m&&(t.update(S),l.set(S,m)),v.isInstancedMesh&&(v.hasEventListener("dispose",p)===!1&&v.addEventListener("dispose",p),l.get(v)!==m&&(i.update(v.instanceMatrix,s.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,s.ARRAY_BUFFER),l.set(v,m))),v.isSkinnedMesh){const M=v.skeleton;l.get(M)!==m&&(M.update(),l.set(M,m))}return S}function d(){l=new WeakMap}function p(v){const m=v.target;m.removeEventListener("dispose",p),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:d}}const q_=new Ri,G0=new V_(1,1),Y_=new L_,Z_=new gM,K_=new G_,V0=[],k0=[],X0=new Float32Array(16),j0=new Float32Array(9),W0=new Float32Array(4);function Co(s,t,i){const a=s[0];if(a<=0||a>0)return s;const l=t*i;let c=V0[l];if(c===void 0&&(c=new Float32Array(l),V0[l]=c),t!==0){a.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,s[d].toArray(c,p)}return c}function jn(s,t){if(s.length!==t.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==t[i])return!1;return!0}function Wn(s,t){for(let i=0,a=t.length;i<a;i++)s[i]=t[i]}function Bu(s,t){let i=k0[t];i===void 0&&(i=new Int32Array(t),k0[t]=i);for(let a=0;a!==t;++a)i[a]=s.allocateTextureUnit();return i}function j1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function W1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(jn(i,t))return;s.uniform2fv(this.addr,t),Wn(i,t)}}function q1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(jn(i,t))return;s.uniform3fv(this.addr,t),Wn(i,t)}}function Y1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(jn(i,t))return;s.uniform4fv(this.addr,t),Wn(i,t)}}function Z1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(jn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Wn(i,t)}else{if(jn(i,a))return;W0.set(a),s.uniformMatrix2fv(this.addr,!1,W0),Wn(i,a)}}function K1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(jn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Wn(i,t)}else{if(jn(i,a))return;j0.set(a),s.uniformMatrix3fv(this.addr,!1,j0),Wn(i,a)}}function Q1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(jn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Wn(i,t)}else{if(jn(i,a))return;X0.set(a),s.uniformMatrix4fv(this.addr,!1,X0),Wn(i,a)}}function J1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function $1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(jn(i,t))return;s.uniform2iv(this.addr,t),Wn(i,t)}}function tT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(jn(i,t))return;s.uniform3iv(this.addr,t),Wn(i,t)}}function eT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(jn(i,t))return;s.uniform4iv(this.addr,t),Wn(i,t)}}function nT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function iT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(jn(i,t))return;s.uniform2uiv(this.addr,t),Wn(i,t)}}function rT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(jn(i,t))return;s.uniform3uiv(this.addr,t),Wn(i,t)}}function aT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(jn(i,t))return;s.uniform4uiv(this.addr,t),Wn(i,t)}}function sT(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(G0.compareFunction=U_,c=G0):c=q_,i.setTexture2D(t||c,l)}function oT(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(t||Z_,l)}function lT(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(t||K_,l)}function cT(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(t||Y_,l)}function uT(s){switch(s){case 5126:return j1;case 35664:return W1;case 35665:return q1;case 35666:return Y1;case 35674:return Z1;case 35675:return K1;case 35676:return Q1;case 5124:case 35670:return J1;case 35667:case 35671:return $1;case 35668:case 35672:return tT;case 35669:case 35673:return eT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(s,t){s.uniform1fv(this.addr,t)}function hT(s,t){const i=Co(t,this.size,2);s.uniform2fv(this.addr,i)}function dT(s,t){const i=Co(t,this.size,3);s.uniform3fv(this.addr,i)}function pT(s,t){const i=Co(t,this.size,4);s.uniform4fv(this.addr,i)}function mT(s,t){const i=Co(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function gT(s,t){const i=Co(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function vT(s,t){const i=Co(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function _T(s,t){s.uniform1iv(this.addr,t)}function xT(s,t){s.uniform2iv(this.addr,t)}function yT(s,t){s.uniform3iv(this.addr,t)}function ST(s,t){s.uniform4iv(this.addr,t)}function MT(s,t){s.uniform1uiv(this.addr,t)}function ET(s,t){s.uniform2uiv(this.addr,t)}function bT(s,t){s.uniform3uiv(this.addr,t)}function TT(s,t){s.uniform4uiv(this.addr,t)}function AT(s,t,i){const a=this.cache,l=t.length,c=Bu(i,l);jn(a,c)||(s.uniform1iv(this.addr,c),Wn(a,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||q_,c[d])}function RT(s,t,i){const a=this.cache,l=t.length,c=Bu(i,l);jn(a,c)||(s.uniform1iv(this.addr,c),Wn(a,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Z_,c[d])}function wT(s,t,i){const a=this.cache,l=t.length,c=Bu(i,l);jn(a,c)||(s.uniform1iv(this.addr,c),Wn(a,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||K_,c[d])}function CT(s,t,i){const a=this.cache,l=t.length,c=Bu(i,l);jn(a,c)||(s.uniform1iv(this.addr,c),Wn(a,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Y_,c[d])}function DT(s){switch(s){case 5126:return fT;case 35664:return hT;case 35665:return dT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return vT;case 5124:case 35670:return _T;case 35667:case 35671:return xT;case 35668:case 35672:return yT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return ET;case 36295:return bT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return CT}}class UT{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=uT(i.type)}}class NT{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DT(i.type)}}class LT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],a)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function q0(s,t){s.seq.push(t),s.map[t.id]=t}function OT(s,t,i){const a=s.name,l=a.length;for(Cd.lastIndex=0;;){const c=Cd.exec(a),d=Cd.lastIndex;let p=c[1];const v=c[2]==="]",m=c[3];if(v&&(p=p|0),m===void 0||m==="["&&d+2===l){q0(i,m===void 0?new UT(p,s,t):new NT(p,s,t));break}else{let S=i.map[p];S===void 0&&(S=new LT(p),q0(i,S)),i=S}}}class Uu{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);OT(c,d,this)}}setValue(t,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(t,a,l)}setOptional(t,i,a){const l=i[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,i,a,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],v=a[p.id];v.needsUpdate!==!1&&p.setValue(t,v.value,l)}}static seqWithValue(t,i){const a=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&a.push(d)}return a}}function Y0(s,t,i){const a=s.createShader(t);return s.shaderSource(a,i),s.compileShader(a),a}const PT=37297;let zT=0;function IT(s,t){const i=s.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;a.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return a.join(`
`)}const Z0=new Ue;function BT(s){Ze._getMatrix(Z0,Ze.workingColorSpace,s);const t=`mat3( ${Z0.elements.map(i=>i.toFixed(4))} )`;switch(Ze.getTransfer(s)){case Lu:return[t,"LinearTransferOETF"];case pn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function K0(s,t,i){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+IT(s.getShaderSource(t),p)}else return c}function FT(s,t){const i=BT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function HT(s,t){let i;switch(t){case XS:i="Linear";break;case jS:i="Reinhard";break;case WS:i="Cineon";break;case qS:i="ACESFilmic";break;case ZS:i="AgX";break;case KS:i="Neutral";break;case YS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Au=new xt;function GT(){Ze.getLuminanceCoefficients(Au);const s=Au.x.toFixed(4),t=Au.y.toFixed(4),i=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function kT(s){const t=[];for(const i in s){const a=s[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function XT(s,t){const i={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(t,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:p}}return i}function Nl(s){return s!==""}function Q0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function J0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(s){return s.replace(jT,qT)}const WT=new Map;function qT(s,t){let i=Le[t];if(i===void 0){const a=WT.get(t);if(a!==void 0)i=Le[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Ep(i)}const YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $0(s){return s.replace(YT,ZT)}function ZT(s,t,i,a){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function KT(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===x_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ES?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vr&&(t="SHADOWMAP_TYPE_VSM"),t}function QT(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mo:case Eo:t="ENVMAP_TYPE_CUBE";break;case zu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function JT(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Eo:t="ENVMAP_MODE_REFRACTION";break}return t}function $T(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case y_:t="ENVMAP_BLENDING_MULTIPLY";break;case VS:t="ENVMAP_BLENDING_MIX";break;case kS:t="ENVMAP_BLENDING_ADD";break}return t}function tA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:a,maxMip:i}}function eA(s,t,i,a){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const v=KT(i),m=QT(i),_=JT(i),S=$T(i),M=tA(i),A=VT(i),D=kT(c),P=l.createProgram();let b,y,Z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Nl).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Nl).join(`
`),y.length>0&&(y+=`
`)):(b=[t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),y=[t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ca?"#define TONE_MAPPING":"",i.toneMapping!==Ca?Le.tonemapping_pars_fragment:"",i.toneMapping!==Ca?HT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,FT("linearToOutputTexel",i.outputColorSpace),GT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Nl).join(`
`)),d=Ep(d),d=Q0(d,i),d=J0(d,i),p=Ep(p),p=Q0(p,i),p=J0(p,i),d=$0(d),p=$0(p),i.isRawShaderMaterial!==!0&&(Z=`#version 300 es
`,b=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===d0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===d0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const X=Z+b+d,z=Z+y+p,q=Y0(l,l.VERTEX_SHADER,X),Q=Y0(l,l.FRAGMENT_SHADER,z);l.attachShader(P,q),l.attachShader(P,Q),i.index0AttributeName!==void 0?l.bindAttribLocation(P,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(P,0,"position"),l.linkProgram(P);function K(L){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(P)||"",nt=l.getShaderInfoLog(q)||"",dt=l.getShaderInfoLog(Q)||"",ot=J.trim(),N=nt.trim(),H=dt.trim();let B=!0,lt=!0;if(l.getProgramParameter(P,l.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,P,q,Q);else{const I=K0(l,q,"vertex"),rt=K0(l,Q,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(P,l.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ot+`
`+I+`
`+rt)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(N===""||H==="")&&(lt=!1);lt&&(L.diagnostics={runnable:B,programLog:ot,vertexShader:{log:N,prefix:b},fragmentShader:{log:H,prefix:y}})}l.deleteShader(q),l.deleteShader(Q),W=new Uu(l,P),O=XT(l,P)}let W;this.getUniforms=function(){return W===void 0&&K(this),W};let O;this.getAttributes=function(){return O===void 0&&K(this),O};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(P,PT)),T},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(P),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zT++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=q,this.fragmentShader=Q,this}let nA=0;class iA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new rA(t),i.set(t,a)),a}}class rA{constructor(t){this.id=nA++,this.code=t,this.usedTimes=0}}function aA(s,t,i,a,l,c,d){const p=new O_,v=new iA,m=new Set,_=[],S=l.logarithmicDepthBuffer,M=l.vertexTextures;let A=l.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(O){return m.add(O),O===0?"uv":`uv${O}`}function b(O,T,L,J,nt){const dt=J.fog,ot=nt.geometry,N=O.isMeshStandardMaterial?J.environment:null,H=(O.isMeshStandardMaterial?i:t).get(O.envMap||N),B=H&&H.mapping===zu?H.image.height:null,lt=D[O.type];O.precision!==null&&(A=l.getMaxPrecision(O.precision),A!==O.precision&&console.warn("THREE.WebGLProgram.getParameters:",O.precision,"not supported, using",A,"instead."));const I=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,rt=I!==void 0?I.length:0;let bt=0;ot.morphAttributes.position!==void 0&&(bt=1),ot.morphAttributes.normal!==void 0&&(bt=2),ot.morphAttributes.color!==void 0&&(bt=3);let Mt,Nt,jt,ct;if(lt){const ze=mr[lt];Mt=ze.vertexShader,Nt=ze.fragmentShader}else Mt=O.vertexShader,Nt=O.fragmentShader,v.update(O),jt=v.getVertexShaderID(O),ct=v.getFragmentShaderID(O);const St=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),re=nt.isInstancedMesh===!0,Kt=nt.isBatchedMesh===!0,ge=!!O.map,tn=!!O.matcap,j=!!H,Ae=!!O.aoMap,Ee=!!O.lightMap,he=!!O.bumpMap,qt=!!O.normalMap,Ke=!!O.displacementMap,ie=!!O.emissiveMap,ve=!!O.metalnessMap,on=!!O.roughnessMap,rn=O.anisotropy>0,G=O.clearcoat>0,w=O.dispersion>0,ft=O.iridescence>0,Et=O.sheen>0,Rt=O.transmission>0,yt=rn&&!!O.anisotropyMap,Wt=G&&!!O.clearcoatMap,Bt=G&&!!O.clearcoatNormalMap,Qt=G&&!!O.clearcoatRoughnessMap,ne=ft&&!!O.iridescenceMap,Lt=ft&&!!O.iridescenceThicknessMap,kt=Et&&!!O.sheenColorMap,ce=Et&&!!O.sheenRoughnessMap,ae=!!O.specularMap,Gt=!!O.specularColorMap,Te=!!O.specularIntensityMap,$=Rt&&!!O.transmissionMap,Ot=Rt&&!!O.thicknessMap,Ft=!!O.gradientMap,Jt=!!O.alphaMap,Pt=O.alphaTest>0,Ct=!!O.alphaHash,$t=!!O.extensions;let _e=Ca;O.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(_e=s.toneMapping);const je={shaderID:lt,shaderType:O.type,shaderName:O.name,vertexShader:Mt,fragmentShader:Nt,defines:O.defines,customVertexShaderID:jt,customFragmentShaderID:ct,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:A,batching:Kt,batchingColor:Kt&&nt._colorsTexture!==null,instancing:re,instancingColor:re&&nt.instanceColor!==null,instancingMorph:re&&nt.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:bo,alphaToCoverage:!!O.alphaToCoverage,map:ge,matcap:tn,envMap:j,envMapMode:j&&H.mapping,envMapCubeUVHeight:B,aoMap:Ae,lightMap:Ee,bumpMap:he,normalMap:qt,displacementMap:M&&Ke,emissiveMap:ie,normalMapObjectSpace:qt&&O.normalMapType===tM,normalMapTangentSpace:qt&&O.normalMapType===D_,metalnessMap:ve,roughnessMap:on,anisotropy:rn,anisotropyMap:yt,clearcoat:G,clearcoatMap:Wt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Qt,dispersion:w,iridescence:ft,iridescenceMap:ne,iridescenceThicknessMap:Lt,sheen:Et,sheenColorMap:kt,sheenRoughnessMap:ce,specularMap:ae,specularColorMap:Gt,specularIntensityMap:Te,transmission:Rt,transmissionMap:$,thicknessMap:Ot,gradientMap:Ft,opaque:O.transparent===!1&&O.blending===xo&&O.alphaToCoverage===!1,alphaMap:Jt,alphaTest:Pt,alphaHash:Ct,combine:O.combine,mapUv:ge&&P(O.map.channel),aoMapUv:Ae&&P(O.aoMap.channel),lightMapUv:Ee&&P(O.lightMap.channel),bumpMapUv:he&&P(O.bumpMap.channel),normalMapUv:qt&&P(O.normalMap.channel),displacementMapUv:Ke&&P(O.displacementMap.channel),emissiveMapUv:ie&&P(O.emissiveMap.channel),metalnessMapUv:ve&&P(O.metalnessMap.channel),roughnessMapUv:on&&P(O.roughnessMap.channel),anisotropyMapUv:yt&&P(O.anisotropyMap.channel),clearcoatMapUv:Wt&&P(O.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&P(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&P(O.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&P(O.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&P(O.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&P(O.sheenColorMap.channel),sheenRoughnessMapUv:ce&&P(O.sheenRoughnessMap.channel),specularMapUv:ae&&P(O.specularMap.channel),specularColorMapUv:Gt&&P(O.specularColorMap.channel),specularIntensityMapUv:Te&&P(O.specularIntensityMap.channel),transmissionMapUv:$&&P(O.transmissionMap.channel),thicknessMapUv:Ot&&P(O.thicknessMap.channel),alphaMapUv:Jt&&P(O.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(qt||rn),vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ot.attributes.uv&&(ge||Jt),fog:!!dt,useFog:O.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:O.flatShading===!0&&O.wireframe===!1,sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:It,skinning:nt.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:bt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:O.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:ge&&O.map.isVideoTexture===!0&&Ze.getTransfer(O.map.colorSpace)===pn,decodeVideoTextureEmissive:ie&&O.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(O.emissiveMap.colorSpace)===pn,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===kr,flipSided:O.side===Ai,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:$t&&O.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&O.extensions.multiDraw===!0||Kt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function y(O){const T=[];if(O.shaderID?T.push(O.shaderID):(T.push(O.customVertexShaderID),T.push(O.customFragmentShaderID)),O.defines!==void 0)for(const L in O.defines)T.push(L),T.push(O.defines[L]);return O.isRawShaderMaterial===!1&&(Z(T,O),X(T,O),T.push(s.outputColorSpace)),T.push(O.customProgramCacheKey),T.join()}function Z(O,T){O.push(T.precision),O.push(T.outputColorSpace),O.push(T.envMapMode),O.push(T.envMapCubeUVHeight),O.push(T.mapUv),O.push(T.alphaMapUv),O.push(T.lightMapUv),O.push(T.aoMapUv),O.push(T.bumpMapUv),O.push(T.normalMapUv),O.push(T.displacementMapUv),O.push(T.emissiveMapUv),O.push(T.metalnessMapUv),O.push(T.roughnessMapUv),O.push(T.anisotropyMapUv),O.push(T.clearcoatMapUv),O.push(T.clearcoatNormalMapUv),O.push(T.clearcoatRoughnessMapUv),O.push(T.iridescenceMapUv),O.push(T.iridescenceThicknessMapUv),O.push(T.sheenColorMapUv),O.push(T.sheenRoughnessMapUv),O.push(T.specularMapUv),O.push(T.specularColorMapUv),O.push(T.specularIntensityMapUv),O.push(T.transmissionMapUv),O.push(T.thicknessMapUv),O.push(T.combine),O.push(T.fogExp2),O.push(T.sizeAttenuation),O.push(T.morphTargetsCount),O.push(T.morphAttributeCount),O.push(T.numDirLights),O.push(T.numPointLights),O.push(T.numSpotLights),O.push(T.numSpotLightMaps),O.push(T.numHemiLights),O.push(T.numRectAreaLights),O.push(T.numDirLightShadows),O.push(T.numPointLightShadows),O.push(T.numSpotLightShadows),O.push(T.numSpotLightShadowsWithMaps),O.push(T.numLightProbes),O.push(T.shadowMapType),O.push(T.toneMapping),O.push(T.numClippingPlanes),O.push(T.numClipIntersection),O.push(T.depthPacking)}function X(O,T){p.disableAll(),T.supportsVertexTextures&&p.enable(0),T.instancing&&p.enable(1),T.instancingColor&&p.enable(2),T.instancingMorph&&p.enable(3),T.matcap&&p.enable(4),T.envMap&&p.enable(5),T.normalMapObjectSpace&&p.enable(6),T.normalMapTangentSpace&&p.enable(7),T.clearcoat&&p.enable(8),T.iridescence&&p.enable(9),T.alphaTest&&p.enable(10),T.vertexColors&&p.enable(11),T.vertexAlphas&&p.enable(12),T.vertexUv1s&&p.enable(13),T.vertexUv2s&&p.enable(14),T.vertexUv3s&&p.enable(15),T.vertexTangents&&p.enable(16),T.anisotropy&&p.enable(17),T.alphaHash&&p.enable(18),T.batching&&p.enable(19),T.dispersion&&p.enable(20),T.batchingColor&&p.enable(21),T.gradientMap&&p.enable(22),O.push(p.mask),p.disableAll(),T.fog&&p.enable(0),T.useFog&&p.enable(1),T.flatShading&&p.enable(2),T.logarithmicDepthBuffer&&p.enable(3),T.reversedDepthBuffer&&p.enable(4),T.skinning&&p.enable(5),T.morphTargets&&p.enable(6),T.morphNormals&&p.enable(7),T.morphColors&&p.enable(8),T.premultipliedAlpha&&p.enable(9),T.shadowMapEnabled&&p.enable(10),T.doubleSided&&p.enable(11),T.flipSided&&p.enable(12),T.useDepthPacking&&p.enable(13),T.dithering&&p.enable(14),T.transmission&&p.enable(15),T.sheen&&p.enable(16),T.opaque&&p.enable(17),T.pointsUvs&&p.enable(18),T.decodeVideoTexture&&p.enable(19),T.decodeVideoTextureEmissive&&p.enable(20),T.alphaToCoverage&&p.enable(21),O.push(p.mask)}function z(O){const T=D[O.type];let L;if(T){const J=mr[T];L=DM.clone(J.uniforms)}else L=O.uniforms;return L}function q(O,T){let L;for(let J=0,nt=_.length;J<nt;J++){const dt=_[J];if(dt.cacheKey===T){L=dt,++L.usedTimes;break}}return L===void 0&&(L=new eA(s,T,O,c),_.push(L)),L}function Q(O){if(--O.usedTimes===0){const T=_.indexOf(O);_[T]=_[_.length-1],_.pop(),O.destroy()}}function K(O){v.remove(O)}function W(){v.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:z,acquireProgram:q,releaseProgram:Q,releaseShaderCache:K,programs:_,dispose:W}}function sA(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function a(d){s.delete(d)}function l(d,p,v){s.get(d)[p]=v}function c(){s=new WeakMap}return{has:t,get:i,remove:a,update:l,dispose:c}}function oA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function e_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function n_(){const s=[];let t=0;const i=[],a=[],l=[];function c(){t=0,i.length=0,a.length=0,l.length=0}function d(S,M,A,D,P,b){let y=s[t];return y===void 0?(y={id:S.id,object:S,geometry:M,material:A,groupOrder:D,renderOrder:S.renderOrder,z:P,group:b},s[t]=y):(y.id=S.id,y.object=S,y.geometry=M,y.material=A,y.groupOrder=D,y.renderOrder=S.renderOrder,y.z=P,y.group=b),t++,y}function p(S,M,A,D,P,b){const y=d(S,M,A,D,P,b);A.transmission>0?a.push(y):A.transparent===!0?l.push(y):i.push(y)}function v(S,M,A,D,P,b){const y=d(S,M,A,D,P,b);A.transmission>0?a.unshift(y):A.transparent===!0?l.unshift(y):i.unshift(y)}function m(S,M){i.length>1&&i.sort(S||oA),a.length>1&&a.sort(M||e_),l.length>1&&l.sort(M||e_)}function _(){for(let S=t,M=s.length;S<M;S++){const A=s[S];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:p,unshift:v,finish:_,sort:m}}function lA(){let s=new WeakMap;function t(a,l){const c=s.get(a);let d;return c===void 0?(d=new n_,s.set(a,[d])):l>=c.length?(d=new n_,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function cA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new xt,color:new $e};break;case"SpotLight":i={position:new xt,direction:new xt,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new xt,color:new $e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new xt,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":i={color:new $e,position:new xt,halfWidth:new xt,halfHeight:new xt};break}return s[t.id]=i,i}}}function uA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let fA=0;function hA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function dA(s){const t=new cA,i=uA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new xt);const l=new xt,c=new Ln,d=new Ln;function p(m){let _=0,S=0,M=0;for(let O=0;O<9;O++)a.probe[O].set(0,0,0);let A=0,D=0,P=0,b=0,y=0,Z=0,X=0,z=0,q=0,Q=0,K=0;m.sort(hA);for(let O=0,T=m.length;O<T;O++){const L=m[O],J=L.color,nt=L.intensity,dt=L.distance,ot=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)_+=J.r*nt,S+=J.g*nt,M+=J.b*nt;else if(L.isLightProbe){for(let N=0;N<9;N++)a.probe[N].addScaledVector(L.sh.coefficients[N],nt);K++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,B=i.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,a.directionalShadow[A]=B,a.directionalShadowMap[A]=ot,a.directionalShadowMatrix[A]=L.shadow.matrix,Z++}a.directional[A]=N,A++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(J).multiplyScalar(nt),N.distance=dt,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,a.spot[P]=N;const H=L.shadow;if(L.map&&(a.spotLightMap[q]=L.map,q++,H.updateMatrices(L),L.castShadow&&Q++),a.spotLightMatrix[P]=H.matrix,L.castShadow){const B=i.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,a.spotShadow[P]=B,a.spotShadowMap[P]=ot,z++}P++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(J).multiplyScalar(nt),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),a.rectArea[b]=N,b++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const H=L.shadow,B=i.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,a.pointShadow[D]=B,a.pointShadowMap[D]=ot,a.pointShadowMatrix[D]=L.shadow.matrix,X++}a.point[D]=N,D++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(nt),N.groundColor.copy(L.groundColor).multiplyScalar(nt),a.hemi[y]=N,y++}}b>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Zt.LTC_FLOAT_1,a.rectAreaLTC2=Zt.LTC_FLOAT_2):(a.rectAreaLTC1=Zt.LTC_HALF_1,a.rectAreaLTC2=Zt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=S,a.ambient[2]=M;const W=a.hash;(W.directionalLength!==A||W.pointLength!==D||W.spotLength!==P||W.rectAreaLength!==b||W.hemiLength!==y||W.numDirectionalShadows!==Z||W.numPointShadows!==X||W.numSpotShadows!==z||W.numSpotMaps!==q||W.numLightProbes!==K)&&(a.directional.length=A,a.spot.length=P,a.rectArea.length=b,a.point.length=D,a.hemi.length=y,a.directionalShadow.length=Z,a.directionalShadowMap.length=Z,a.pointShadow.length=X,a.pointShadowMap.length=X,a.spotShadow.length=z,a.spotShadowMap.length=z,a.directionalShadowMatrix.length=Z,a.pointShadowMatrix.length=X,a.spotLightMatrix.length=z+q-Q,a.spotLightMap.length=q,a.numSpotLightShadowsWithMaps=Q,a.numLightProbes=K,W.directionalLength=A,W.pointLength=D,W.spotLength=P,W.rectAreaLength=b,W.hemiLength=y,W.numDirectionalShadows=Z,W.numPointShadows=X,W.numSpotShadows=z,W.numSpotMaps=q,W.numLightProbes=K,a.version=fA++)}function v(m,_){let S=0,M=0,A=0,D=0,P=0;const b=_.matrixWorldInverse;for(let y=0,Z=m.length;y<Z;y++){const X=m[y];if(X.isDirectionalLight){const z=a.directional[S];z.direction.setFromMatrixPosition(X.matrixWorld),l.setFromMatrixPosition(X.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(b),S++}else if(X.isSpotLight){const z=a.spot[A];z.position.setFromMatrixPosition(X.matrixWorld),z.position.applyMatrix4(b),z.direction.setFromMatrixPosition(X.matrixWorld),l.setFromMatrixPosition(X.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(b),A++}else if(X.isRectAreaLight){const z=a.rectArea[D];z.position.setFromMatrixPosition(X.matrixWorld),z.position.applyMatrix4(b),d.identity(),c.copy(X.matrixWorld),c.premultiply(b),d.extractRotation(c),z.halfWidth.set(X.width*.5,0,0),z.halfHeight.set(0,X.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),D++}else if(X.isPointLight){const z=a.point[M];z.position.setFromMatrixPosition(X.matrixWorld),z.position.applyMatrix4(b),M++}else if(X.isHemisphereLight){const z=a.hemi[P];z.direction.setFromMatrixPosition(X.matrixWorld),z.direction.transformDirection(b),P++}}}return{setup:p,setupView:v,state:a}}function i_(s){const t=new dA(s),i=[],a=[];function l(_){m.camera=_,i.length=0,a.length=0}function c(_){i.push(_)}function d(_){a.push(_)}function p(){t.setup(i)}function v(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:p,setupLightsView:v,pushLight:c,pushShadow:d}}function pA(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new i_(s),t.set(l,[p])):c>=d.length?(p=new i_(s),d.push(p)):p=d[c],p}function a(){t=new WeakMap}return{get:i,dispose:a}}const mA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vA(s,t,i){let a=new Pp;const l=new We,c=new We,d=new Rn,p=new HM({depthPacking:$S}),v=new GM,m={},_=i.maxTextureSize,S={[Da]:Ai,[Ai]:Da,[kr]:kr},M=new Ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:mA,fragmentShader:gA}),A=M.clone();A.defines.HORIZONTAL_PASS=1;const D=new Wr;D.setAttribute("position",new xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new ii(D,M),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_;let y=this.type;this.render=function(Q,K,W){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||Q.length===0)return;const O=s.getRenderTarget(),T=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),J=s.state;J.setBlending(wa),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const nt=y!==Vr&&this.type===Vr,dt=y===Vr&&this.type!==Vr;for(let ot=0,N=Q.length;ot<N;ot++){const H=Q[ot],B=H.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const lt=B.getFrameExtents();if(l.multiply(lt),c.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/lt.x),l.x=c.x*lt.x,B.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/lt.y),l.y=c.y*lt.y,B.mapSize.y=c.y)),B.map===null||nt===!0||dt===!0){const rt=this.type!==Vr?{minFilter:or,magFilter:or}:{};B.map!==null&&B.map.dispose(),B.map=new gs(l.x,l.y,rt),B.map.texture.name=H.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const I=B.getViewportCount();for(let rt=0;rt<I;rt++){const bt=B.getViewport(rt);d.set(c.x*bt.x,c.y*bt.y,c.x*bt.z,c.y*bt.w),J.viewport(d),B.updateMatrices(H,rt),a=B.getFrustum(),z(K,W,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===Vr&&Z(B,W),B.needsUpdate=!1}y=this.type,b.needsUpdate=!1,s.setRenderTarget(O,T,L)};function Z(Q,K){const W=t.update(P);M.defines.VSM_SAMPLES!==Q.blurSamples&&(M.defines.VSM_SAMPLES=Q.blurSamples,A.defines.VSM_SAMPLES=Q.blurSamples,M.needsUpdate=!0,A.needsUpdate=!0),Q.mapPass===null&&(Q.mapPass=new gs(l.x,l.y)),M.uniforms.shadow_pass.value=Q.map.texture,M.uniforms.resolution.value=Q.mapSize,M.uniforms.radius.value=Q.radius,s.setRenderTarget(Q.mapPass),s.clear(),s.renderBufferDirect(K,null,W,M,P,null),A.uniforms.shadow_pass.value=Q.mapPass.texture,A.uniforms.resolution.value=Q.mapSize,A.uniforms.radius.value=Q.radius,s.setRenderTarget(Q.map),s.clear(),s.renderBufferDirect(K,null,W,A,P,null)}function X(Q,K,W,O){let T=null;const L=W.isPointLight===!0?Q.customDistanceMaterial:Q.customDepthMaterial;if(L!==void 0)T=L;else if(T=W.isPointLight===!0?v:p,s.localClippingEnabled&&K.clipShadows===!0&&Array.isArray(K.clippingPlanes)&&K.clippingPlanes.length!==0||K.displacementMap&&K.displacementScale!==0||K.alphaMap&&K.alphaTest>0||K.map&&K.alphaTest>0||K.alphaToCoverage===!0){const J=T.uuid,nt=K.uuid;let dt=m[J];dt===void 0&&(dt={},m[J]=dt);let ot=dt[nt];ot===void 0&&(ot=T.clone(),dt[nt]=ot,K.addEventListener("dispose",q)),T=ot}if(T.visible=K.visible,T.wireframe=K.wireframe,O===Vr?T.side=K.shadowSide!==null?K.shadowSide:K.side:T.side=K.shadowSide!==null?K.shadowSide:S[K.side],T.alphaMap=K.alphaMap,T.alphaTest=K.alphaToCoverage===!0?.5:K.alphaTest,T.map=K.map,T.clipShadows=K.clipShadows,T.clippingPlanes=K.clippingPlanes,T.clipIntersection=K.clipIntersection,T.displacementMap=K.displacementMap,T.displacementScale=K.displacementScale,T.displacementBias=K.displacementBias,T.wireframeLinewidth=K.wireframeLinewidth,T.linewidth=K.linewidth,W.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const J=s.properties.get(T);J.light=W}return T}function z(Q,K,W,O,T){if(Q.visible===!1)return;if(Q.layers.test(K.layers)&&(Q.isMesh||Q.isLine||Q.isPoints)&&(Q.castShadow||Q.receiveShadow&&T===Vr)&&(!Q.frustumCulled||a.intersectsObject(Q))){Q.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,Q.matrixWorld);const nt=t.update(Q),dt=Q.material;if(Array.isArray(dt)){const ot=nt.groups;for(let N=0,H=ot.length;N<H;N++){const B=ot[N],lt=dt[B.materialIndex];if(lt&&lt.visible){const I=X(Q,lt,O,T);Q.onBeforeShadow(s,Q,K,W,nt,I,B),s.renderBufferDirect(W,null,nt,I,Q,B),Q.onAfterShadow(s,Q,K,W,nt,I,B)}}}else if(dt.visible){const ot=X(Q,dt,O,T);Q.onBeforeShadow(s,Q,K,W,nt,ot,null),s.renderBufferDirect(W,null,nt,ot,Q,null),Q.onAfterShadow(s,Q,K,W,nt,ot,null)}}const J=Q.children;for(let nt=0,dt=J.length;nt<dt;nt++)z(J[nt],K,W,O,T)}function q(Q){Q.target.removeEventListener("dispose",q);for(const W in m){const O=m[W],T=Q.target.uuid;T in O&&(O[T].dispose(),delete O[T])}}}const _A={[Id]:Bd,[Fd]:Vd,[Hd]:kd,[So]:Gd,[Bd]:Id,[Vd]:Fd,[kd]:Hd,[Gd]:So};function xA(s,t){function i(){let $=!1;const Ot=new Rn;let Ft=null;const Jt=new Rn(0,0,0,0);return{setMask:function(Pt){Ft!==Pt&&!$&&(s.colorMask(Pt,Pt,Pt,Pt),Ft=Pt)},setLocked:function(Pt){$=Pt},setClear:function(Pt,Ct,$t,_e,je){je===!0&&(Pt*=_e,Ct*=_e,$t*=_e),Ot.set(Pt,Ct,$t,_e),Jt.equals(Ot)===!1&&(s.clearColor(Pt,Ct,$t,_e),Jt.copy(Ot))},reset:function(){$=!1,Ft=null,Jt.set(-1,0,0,0)}}}function a(){let $=!1,Ot=!1,Ft=null,Jt=null,Pt=null;return{setReversed:function(Ct){if(Ot!==Ct){const $t=t.get("EXT_clip_control");Ct?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Ot=Ct;const _e=Pt;Pt=null,this.setClear(_e)}},getReversed:function(){return Ot},setTest:function(Ct){Ct?St(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(Ct){Ft!==Ct&&!$&&(s.depthMask(Ct),Ft=Ct)},setFunc:function(Ct){if(Ot&&(Ct=_A[Ct]),Jt!==Ct){switch(Ct){case Id:s.depthFunc(s.NEVER);break;case Bd:s.depthFunc(s.ALWAYS);break;case Fd:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case Hd:s.depthFunc(s.EQUAL);break;case Gd:s.depthFunc(s.GEQUAL);break;case Vd:s.depthFunc(s.GREATER);break;case kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Jt=Ct}},setLocked:function(Ct){$=Ct},setClear:function(Ct){Pt!==Ct&&(Ot&&(Ct=1-Ct),s.clearDepth(Ct),Pt=Ct)},reset:function(){$=!1,Ft=null,Jt=null,Pt=null,Ot=!1}}}function l(){let $=!1,Ot=null,Ft=null,Jt=null,Pt=null,Ct=null,$t=null,_e=null,je=null;return{setTest:function(ze){$||(ze?St(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(ze){Ot!==ze&&!$&&(s.stencilMask(ze),Ot=ze)},setFunc:function(ze,ri,wn){(Ft!==ze||Jt!==ri||Pt!==wn)&&(s.stencilFunc(ze,ri,wn),Ft=ze,Jt=ri,Pt=wn)},setOp:function(ze,ri,wn){(Ct!==ze||$t!==ri||_e!==wn)&&(s.stencilOp(ze,ri,wn),Ct=ze,$t=ri,_e=wn)},setLocked:function(ze){$=ze},setClear:function(ze){je!==ze&&(s.clearStencil(ze),je=ze)},reset:function(){$=!1,Ot=null,Ft=null,Jt=null,Pt=null,Ct=null,$t=null,_e=null,je=null}}}const c=new i,d=new a,p=new l,v=new WeakMap,m=new WeakMap;let _={},S={},M=new WeakMap,A=[],D=null,P=!1,b=null,y=null,Z=null,X=null,z=null,q=null,Q=null,K=new $e(0,0,0),W=0,O=!1,T=null,L=null,J=null,nt=null,dt=null;const ot=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=H>=2);let lt=null,I={};const rt=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),Mt=new Rn().fromArray(rt),Nt=new Rn().fromArray(bt);function jt($,Ot,Ft,Jt){const Pt=new Uint8Array(4),Ct=s.createTexture();s.bindTexture($,Ct),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $t=0;$t<Ft;$t++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Ot,0,s.RGBA,1,1,Jt,0,s.RGBA,s.UNSIGNED_BYTE,Pt):s.texImage2D(Ot+$t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pt);return Ct}const ct={};ct[s.TEXTURE_2D]=jt(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),St(s.DEPTH_TEST),d.setFunc(So),he(!1),qt(o0),St(s.CULL_FACE),Ae(wa);function St($){_[$]!==!0&&(s.enable($),_[$]=!0)}function It($){_[$]!==!1&&(s.disable($),_[$]=!1)}function re($,Ot){return S[$]!==Ot?(s.bindFramebuffer($,Ot),S[$]=Ot,$===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Ot),$===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Kt($,Ot){let Ft=A,Jt=!1;if($){Ft=M.get(Ot),Ft===void 0&&(Ft=[],M.set(Ot,Ft));const Pt=$.textures;if(Ft.length!==Pt.length||Ft[0]!==s.COLOR_ATTACHMENT0){for(let Ct=0,$t=Pt.length;Ct<$t;Ct++)Ft[Ct]=s.COLOR_ATTACHMENT0+Ct;Ft.length=Pt.length,Jt=!0}}else Ft[0]!==s.BACK&&(Ft[0]=s.BACK,Jt=!0);Jt&&s.drawBuffers(Ft)}function ge($){return D!==$?(s.useProgram($),D=$,!0):!1}const tn={[fs]:s.FUNC_ADD,[TS]:s.FUNC_SUBTRACT,[AS]:s.FUNC_REVERSE_SUBTRACT};tn[RS]=s.MIN,tn[wS]=s.MAX;const j={[CS]:s.ZERO,[DS]:s.ONE,[US]:s.SRC_COLOR,[Pd]:s.SRC_ALPHA,[IS]:s.SRC_ALPHA_SATURATE,[PS]:s.DST_COLOR,[LS]:s.DST_ALPHA,[NS]:s.ONE_MINUS_SRC_COLOR,[zd]:s.ONE_MINUS_SRC_ALPHA,[zS]:s.ONE_MINUS_DST_COLOR,[OS]:s.ONE_MINUS_DST_ALPHA,[BS]:s.CONSTANT_COLOR,[FS]:s.ONE_MINUS_CONSTANT_COLOR,[HS]:s.CONSTANT_ALPHA,[GS]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae($,Ot,Ft,Jt,Pt,Ct,$t,_e,je,ze){if($===wa){P===!0&&(It(s.BLEND),P=!1);return}if(P===!1&&(St(s.BLEND),P=!0),$!==bS){if($!==b||ze!==O){if((y!==fs||z!==fs)&&(s.blendEquation(s.FUNC_ADD),y=fs,z=fs),ze)switch($){case xo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case l0:s.blendFunc(s.ONE,s.ONE);break;case c0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case u0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case l0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case c0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case u0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}Z=null,X=null,q=null,Q=null,K.set(0,0,0),W=0,b=$,O=ze}return}Pt=Pt||Ot,Ct=Ct||Ft,$t=$t||Jt,(Ot!==y||Pt!==z)&&(s.blendEquationSeparate(tn[Ot],tn[Pt]),y=Ot,z=Pt),(Ft!==Z||Jt!==X||Ct!==q||$t!==Q)&&(s.blendFuncSeparate(j[Ft],j[Jt],j[Ct],j[$t]),Z=Ft,X=Jt,q=Ct,Q=$t),(_e.equals(K)===!1||je!==W)&&(s.blendColor(_e.r,_e.g,_e.b,je),K.copy(_e),W=je),b=$,O=!1}function Ee($,Ot){$.side===kr?It(s.CULL_FACE):St(s.CULL_FACE);let Ft=$.side===Ai;Ot&&(Ft=!Ft),he(Ft),$.blending===xo&&$.transparent===!1?Ae(wa):Ae($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),d.setFunc($.depthFunc),d.setTest($.depthTest),d.setMask($.depthWrite),c.setMask($.colorWrite);const Jt=$.stencilWrite;p.setTest(Jt),Jt&&(p.setMask($.stencilWriteMask),p.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),p.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ie($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function he($){T!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),T=$)}function qt($){$!==SS?(St(s.CULL_FACE),$!==L&&($===o0?s.cullFace(s.BACK):$===MS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),L=$}function Ke($){$!==J&&(N&&s.lineWidth($),J=$)}function ie($,Ot,Ft){$?(St(s.POLYGON_OFFSET_FILL),(nt!==Ot||dt!==Ft)&&(s.polygonOffset(Ot,Ft),nt=Ot,dt=Ft)):It(s.POLYGON_OFFSET_FILL)}function ve($){$?St(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function on($){$===void 0&&($=s.TEXTURE0+ot-1),lt!==$&&(s.activeTexture($),lt=$)}function rn($,Ot,Ft){Ft===void 0&&(lt===null?Ft=s.TEXTURE0+ot-1:Ft=lt);let Jt=I[Ft];Jt===void 0&&(Jt={type:void 0,texture:void 0},I[Ft]=Jt),(Jt.type!==$||Jt.texture!==Ot)&&(lt!==Ft&&(s.activeTexture(Ft),lt=Ft),s.bindTexture($,Ot||ct[$]),Jt.type=$,Jt.texture=Ot)}function G(){const $=I[lt];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ft(){try{s.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Et(){try{s.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Rt(){try{s.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function yt(){try{s.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Wt(){try{s.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Bt(){try{s.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Qt(){try{s.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ne(){try{s.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Lt(){try{s.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function kt($){Mt.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),Mt.copy($))}function ce($){Nt.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),Nt.copy($))}function ae($,Ot){let Ft=m.get(Ot);Ft===void 0&&(Ft=new WeakMap,m.set(Ot,Ft));let Jt=Ft.get($);Jt===void 0&&(Jt=s.getUniformBlockIndex(Ot,$.name),Ft.set($,Jt))}function Gt($,Ot){const Jt=m.get(Ot).get($);v.get(Ot)!==Jt&&(s.uniformBlockBinding(Ot,Jt,$.__bindingPointIndex),v.set(Ot,Jt))}function Te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},lt=null,I={},S={},M=new WeakMap,A=[],D=null,P=!1,b=null,y=null,Z=null,X=null,z=null,q=null,Q=null,K=new $e(0,0,0),W=0,O=!1,T=null,L=null,J=null,nt=null,dt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Nt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:St,disable:It,bindFramebuffer:re,drawBuffers:Kt,useProgram:ge,setBlending:Ae,setMaterial:Ee,setFlipSided:he,setCullFace:qt,setLineWidth:Ke,setPolygonOffset:ie,setScissorTest:ve,activeTexture:on,bindTexture:rn,unbindTexture:G,compressedTexImage2D:w,compressedTexImage3D:ft,texImage2D:ne,texImage3D:Lt,updateUBOMapping:ae,uniformBlockBinding:Gt,texStorage2D:Bt,texStorage3D:Qt,texSubImage2D:Et,texSubImage3D:Rt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Wt,scissor:kt,viewport:ce,reset:Te}}function yA(s,t,i,a,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new We,_=new WeakMap;let S;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(G,w){return A?new OffscreenCanvas(G,w):Pu("canvas")}function P(G,w,ft){let Et=1;const Rt=rn(G);if((Rt.width>ft||Rt.height>ft)&&(Et=ft/Math.max(Rt.width,Rt.height)),Et<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const yt=Math.floor(Et*Rt.width),Wt=Math.floor(Et*Rt.height);S===void 0&&(S=D(yt,Wt));const Bt=w?D(yt,Wt):S;return Bt.width=yt,Bt.height=Wt,Bt.getContext("2d").drawImage(G,0,0,yt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Rt.width+"x"+Rt.height+") to ("+yt+"x"+Wt+")."),Bt}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Rt.width+"x"+Rt.height+")."),G;return G}function b(G){return G.generateMipmaps}function y(G){s.generateMipmap(G)}function Z(G){return G.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?s.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function X(G,w,ft,Et,Rt=!1){if(G!==null){if(s[G]!==void 0)return s[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let yt=w;if(w===s.RED&&(ft===s.FLOAT&&(yt=s.R32F),ft===s.HALF_FLOAT&&(yt=s.R16F),ft===s.UNSIGNED_BYTE&&(yt=s.R8)),w===s.RED_INTEGER&&(ft===s.UNSIGNED_BYTE&&(yt=s.R8UI),ft===s.UNSIGNED_SHORT&&(yt=s.R16UI),ft===s.UNSIGNED_INT&&(yt=s.R32UI),ft===s.BYTE&&(yt=s.R8I),ft===s.SHORT&&(yt=s.R16I),ft===s.INT&&(yt=s.R32I)),w===s.RG&&(ft===s.FLOAT&&(yt=s.RG32F),ft===s.HALF_FLOAT&&(yt=s.RG16F),ft===s.UNSIGNED_BYTE&&(yt=s.RG8)),w===s.RG_INTEGER&&(ft===s.UNSIGNED_BYTE&&(yt=s.RG8UI),ft===s.UNSIGNED_SHORT&&(yt=s.RG16UI),ft===s.UNSIGNED_INT&&(yt=s.RG32UI),ft===s.BYTE&&(yt=s.RG8I),ft===s.SHORT&&(yt=s.RG16I),ft===s.INT&&(yt=s.RG32I)),w===s.RGB_INTEGER&&(ft===s.UNSIGNED_BYTE&&(yt=s.RGB8UI),ft===s.UNSIGNED_SHORT&&(yt=s.RGB16UI),ft===s.UNSIGNED_INT&&(yt=s.RGB32UI),ft===s.BYTE&&(yt=s.RGB8I),ft===s.SHORT&&(yt=s.RGB16I),ft===s.INT&&(yt=s.RGB32I)),w===s.RGBA_INTEGER&&(ft===s.UNSIGNED_BYTE&&(yt=s.RGBA8UI),ft===s.UNSIGNED_SHORT&&(yt=s.RGBA16UI),ft===s.UNSIGNED_INT&&(yt=s.RGBA32UI),ft===s.BYTE&&(yt=s.RGBA8I),ft===s.SHORT&&(yt=s.RGBA16I),ft===s.INT&&(yt=s.RGBA32I)),w===s.RGB&&(ft===s.UNSIGNED_INT_5_9_9_9_REV&&(yt=s.RGB9_E5),ft===s.UNSIGNED_INT_10F_11F_11F_REV&&(yt=s.R11F_G11F_B10F)),w===s.RGBA){const Wt=Rt?Lu:Ze.getTransfer(Et);ft===s.FLOAT&&(yt=s.RGBA32F),ft===s.HALF_FLOAT&&(yt=s.RGBA16F),ft===s.UNSIGNED_BYTE&&(yt=Wt===pn?s.SRGB8_ALPHA8:s.RGBA8),ft===s.UNSIGNED_SHORT_4_4_4_4&&(yt=s.RGBA4),ft===s.UNSIGNED_SHORT_5_5_5_1&&(yt=s.RGB5_A1)}return(yt===s.R16F||yt===s.R32F||yt===s.RG16F||yt===s.RG32F||yt===s.RGBA16F||yt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function z(G,w){let ft;return G?w===null||w===ms||w===Ol?ft=s.DEPTH24_STENCIL8:w===Xr?ft=s.DEPTH32F_STENCIL8:w===Ll&&(ft=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ms||w===Ol?ft=s.DEPTH_COMPONENT24:w===Xr?ft=s.DEPTH_COMPONENT32F:w===Ll&&(ft=s.DEPTH_COMPONENT16),ft}function q(G,w){return b(G)===!0||G.isFramebufferTexture&&G.minFilter!==or&&G.minFilter!==vr?Math.log2(Math.max(w.width,w.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?w.mipmaps.length:1}function Q(G){const w=G.target;w.removeEventListener("dispose",Q),W(w),w.isVideoTexture&&_.delete(w)}function K(G){const w=G.target;w.removeEventListener("dispose",K),T(w)}function W(G){const w=a.get(G);if(w.__webglInit===void 0)return;const ft=G.source,Et=M.get(ft);if(Et){const Rt=Et[w.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&O(G),Object.keys(Et).length===0&&M.delete(ft)}a.remove(G)}function O(G){const w=a.get(G);s.deleteTexture(w.__webglTexture);const ft=G.source,Et=M.get(ft);delete Et[w.__cacheKey],d.memory.textures--}function T(G){const w=a.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),a.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let Et=0;Et<6;Et++){if(Array.isArray(w.__webglFramebuffer[Et]))for(let Rt=0;Rt<w.__webglFramebuffer[Et].length;Rt++)s.deleteFramebuffer(w.__webglFramebuffer[Et][Rt]);else s.deleteFramebuffer(w.__webglFramebuffer[Et]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Et])}else{if(Array.isArray(w.__webglFramebuffer))for(let Et=0;Et<w.__webglFramebuffer.length;Et++)s.deleteFramebuffer(w.__webglFramebuffer[Et]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Et=0;Et<w.__webglColorRenderbuffer.length;Et++)w.__webglColorRenderbuffer[Et]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Et]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ft=G.textures;for(let Et=0,Rt=ft.length;Et<Rt;Et++){const yt=a.get(ft[Et]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),d.memory.textures--),a.remove(ft[Et])}a.remove(G)}let L=0;function J(){L=0}function nt(){const G=L;return G>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+l.maxTextures),L+=1,G}function dt(G){const w=[];return w.push(G.wrapS),w.push(G.wrapT),w.push(G.wrapR||0),w.push(G.magFilter),w.push(G.minFilter),w.push(G.anisotropy),w.push(G.internalFormat),w.push(G.format),w.push(G.type),w.push(G.generateMipmaps),w.push(G.premultiplyAlpha),w.push(G.flipY),w.push(G.unpackAlignment),w.push(G.colorSpace),w.join()}function ot(G,w){const ft=a.get(G);if(G.isVideoTexture&&ve(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&ft.__version!==G.version){const Et=G.image;if(Et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(ft,G,w);return}}else G.isExternalTexture&&(ft.__webglTexture=G.sourceTexture?G.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ft.__webglTexture,s.TEXTURE0+w)}function N(G,w){const ft=a.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&ft.__version!==G.version){ct(ft,G,w);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ft.__webglTexture,s.TEXTURE0+w)}function H(G,w){const ft=a.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&ft.__version!==G.version){ct(ft,G,w);return}i.bindTexture(s.TEXTURE_3D,ft.__webglTexture,s.TEXTURE0+w)}function B(G,w){const ft=a.get(G);if(G.version>0&&ft.__version!==G.version){St(ft,G,w);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture,s.TEXTURE0+w)}const lt={[Wd]:s.REPEAT,[ds]:s.CLAMP_TO_EDGE,[qd]:s.MIRRORED_REPEAT},I={[or]:s.NEAREST,[QS]:s.NEAREST_MIPMAP_NEAREST,[su]:s.NEAREST_MIPMAP_LINEAR,[vr]:s.LINEAR,[Jh]:s.LINEAR_MIPMAP_NEAREST,[ps]:s.LINEAR_MIPMAP_LINEAR},rt={[eM]:s.NEVER,[oM]:s.ALWAYS,[nM]:s.LESS,[U_]:s.LEQUAL,[iM]:s.EQUAL,[sM]:s.GEQUAL,[rM]:s.GREATER,[aM]:s.NOTEQUAL};function bt(G,w){if(w.type===Xr&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===vr||w.magFilter===Jh||w.magFilter===su||w.magFilter===ps||w.minFilter===vr||w.minFilter===Jh||w.minFilter===su||w.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(G,s.TEXTURE_WRAP_S,lt[w.wrapS]),s.texParameteri(G,s.TEXTURE_WRAP_T,lt[w.wrapT]),(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)&&s.texParameteri(G,s.TEXTURE_WRAP_R,lt[w.wrapR]),s.texParameteri(G,s.TEXTURE_MAG_FILTER,I[w.magFilter]),s.texParameteri(G,s.TEXTURE_MIN_FILTER,I[w.minFilter]),w.compareFunction&&(s.texParameteri(G,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(G,s.TEXTURE_COMPARE_FUNC,rt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===or||w.minFilter!==su&&w.minFilter!==ps||w.type===Xr&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const ft=t.get("EXT_texture_filter_anisotropic");s.texParameterf(G,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function Mt(G,w){let ft=!1;G.__webglInit===void 0&&(G.__webglInit=!0,w.addEventListener("dispose",Q));const Et=w.source;let Rt=M.get(Et);Rt===void 0&&(Rt={},M.set(Et,Rt));const yt=dt(w);if(yt!==G.__cacheKey){Rt[yt]===void 0&&(Rt[yt]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ft=!0),Rt[yt].usedTimes++;const Wt=Rt[G.__cacheKey];Wt!==void 0&&(Rt[G.__cacheKey].usedTimes--,Wt.usedTimes===0&&O(w)),G.__cacheKey=yt,G.__webglTexture=Rt[yt].texture}return ft}function Nt(G,w,ft){return Math.floor(Math.floor(G/ft)/w)}function jt(G,w,ft,Et){const yt=G.updateRanges;if(yt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,ft,Et,w.data);else{yt.sort((Lt,kt)=>Lt.start-kt.start);let Wt=0;for(let Lt=1;Lt<yt.length;Lt++){const kt=yt[Wt],ce=yt[Lt],ae=kt.start+kt.count,Gt=Nt(ce.start,w.width,4),Te=Nt(kt.start,w.width,4);ce.start<=ae+1&&Gt===Te&&Nt(ce.start+ce.count-1,w.width,4)===Gt?kt.count=Math.max(kt.count,ce.start+ce.count-kt.start):(++Wt,yt[Wt]=ce)}yt.length=Wt+1;const Bt=s.getParameter(s.UNPACK_ROW_LENGTH),Qt=s.getParameter(s.UNPACK_SKIP_PIXELS),ne=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Lt=0,kt=yt.length;Lt<kt;Lt++){const ce=yt[Lt],ae=Math.floor(ce.start/4),Gt=Math.ceil(ce.count/4),Te=ae%w.width,$=Math.floor(ae/w.width),Ot=Gt,Ft=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),s.pixelStorei(s.UNPACK_SKIP_ROWS,$),i.texSubImage2D(s.TEXTURE_2D,0,Te,$,Ot,Ft,ft,Et,w.data)}G.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Bt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ne)}}function ct(G,w,ft){let Et=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Et=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Et=s.TEXTURE_3D);const Rt=Mt(G,w),yt=w.source;i.bindTexture(Et,G.__webglTexture,s.TEXTURE0+ft);const Wt=a.get(yt);if(yt.version!==Wt.__version||Rt===!0){i.activeTexture(s.TEXTURE0+ft);const Bt=Ze.getPrimaries(Ze.workingColorSpace),Qt=w.colorSpace===Ra?null:Ze.getPrimaries(w.colorSpace),ne=w.colorSpace===Ra||Bt===Qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Lt=P(w.image,!1,l.maxTextureSize);Lt=on(w,Lt);const kt=c.convert(w.format,w.colorSpace),ce=c.convert(w.type);let ae=X(w.internalFormat,kt,ce,w.colorSpace,w.isVideoTexture);bt(Et,w);let Gt;const Te=w.mipmaps,$=w.isVideoTexture!==!0,Ot=Wt.__version===void 0||Rt===!0,Ft=yt.dataReady,Jt=q(w,Lt);if(w.isDepthTexture)ae=z(w.format===zl,w.type),Ot&&($?i.texStorage2D(s.TEXTURE_2D,1,ae,Lt.width,Lt.height):i.texImage2D(s.TEXTURE_2D,0,ae,Lt.width,Lt.height,0,kt,ce,null));else if(w.isDataTexture)if(Te.length>0){$&&Ot&&i.texStorage2D(s.TEXTURE_2D,Jt,ae,Te[0].width,Te[0].height);for(let Pt=0,Ct=Te.length;Pt<Ct;Pt++)Gt=Te[Pt],$?Ft&&i.texSubImage2D(s.TEXTURE_2D,Pt,0,0,Gt.width,Gt.height,kt,ce,Gt.data):i.texImage2D(s.TEXTURE_2D,Pt,ae,Gt.width,Gt.height,0,kt,ce,Gt.data);w.generateMipmaps=!1}else $?(Ot&&i.texStorage2D(s.TEXTURE_2D,Jt,ae,Lt.width,Lt.height),Ft&&jt(w,Lt,kt,ce)):i.texImage2D(s.TEXTURE_2D,0,ae,Lt.width,Lt.height,0,kt,ce,Lt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$&&Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Jt,ae,Te[0].width,Te[0].height,Lt.depth);for(let Pt=0,Ct=Te.length;Pt<Ct;Pt++)if(Gt=Te[Pt],w.format!==sr)if(kt!==null)if($){if(Ft)if(w.layerUpdates.size>0){const $t=L0(Gt.width,Gt.height,w.format,w.type);for(const _e of w.layerUpdates){const je=Gt.data.subarray(_e*$t/Gt.data.BYTES_PER_ELEMENT,(_e+1)*$t/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Pt,0,0,_e,Gt.width,Gt.height,1,kt,je)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Pt,0,0,0,Gt.width,Gt.height,Lt.depth,kt,Gt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Pt,ae,Gt.width,Gt.height,Lt.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?Ft&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Pt,0,0,0,Gt.width,Gt.height,Lt.depth,kt,ce,Gt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Pt,ae,Gt.width,Gt.height,Lt.depth,0,kt,ce,Gt.data)}else{$&&Ot&&i.texStorage2D(s.TEXTURE_2D,Jt,ae,Te[0].width,Te[0].height);for(let Pt=0,Ct=Te.length;Pt<Ct;Pt++)Gt=Te[Pt],w.format!==sr?kt!==null?$?Ft&&i.compressedTexSubImage2D(s.TEXTURE_2D,Pt,0,0,Gt.width,Gt.height,kt,Gt.data):i.compressedTexImage2D(s.TEXTURE_2D,Pt,ae,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?Ft&&i.texSubImage2D(s.TEXTURE_2D,Pt,0,0,Gt.width,Gt.height,kt,ce,Gt.data):i.texImage2D(s.TEXTURE_2D,Pt,ae,Gt.width,Gt.height,0,kt,ce,Gt.data)}else if(w.isDataArrayTexture)if($){if(Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Jt,ae,Lt.width,Lt.height,Lt.depth),Ft)if(w.layerUpdates.size>0){const Pt=L0(Lt.width,Lt.height,w.format,w.type);for(const Ct of w.layerUpdates){const $t=Lt.data.subarray(Ct*Pt/Lt.data.BYTES_PER_ELEMENT,(Ct+1)*Pt/Lt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ct,Lt.width,Lt.height,1,kt,ce,$t)}w.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Lt.width,Lt.height,Lt.depth,kt,ce,Lt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ae,Lt.width,Lt.height,Lt.depth,0,kt,ce,Lt.data);else if(w.isData3DTexture)$?(Ot&&i.texStorage3D(s.TEXTURE_3D,Jt,ae,Lt.width,Lt.height,Lt.depth),Ft&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Lt.width,Lt.height,Lt.depth,kt,ce,Lt.data)):i.texImage3D(s.TEXTURE_3D,0,ae,Lt.width,Lt.height,Lt.depth,0,kt,ce,Lt.data);else if(w.isFramebufferTexture){if(Ot)if($)i.texStorage2D(s.TEXTURE_2D,Jt,ae,Lt.width,Lt.height);else{let Pt=Lt.width,Ct=Lt.height;for(let $t=0;$t<Jt;$t++)i.texImage2D(s.TEXTURE_2D,$t,ae,Pt,Ct,0,kt,ce,null),Pt>>=1,Ct>>=1}}else if(Te.length>0){if($&&Ot){const Pt=rn(Te[0]);i.texStorage2D(s.TEXTURE_2D,Jt,ae,Pt.width,Pt.height)}for(let Pt=0,Ct=Te.length;Pt<Ct;Pt++)Gt=Te[Pt],$?Ft&&i.texSubImage2D(s.TEXTURE_2D,Pt,0,0,kt,ce,Gt):i.texImage2D(s.TEXTURE_2D,Pt,ae,kt,ce,Gt);w.generateMipmaps=!1}else if($){if(Ot){const Pt=rn(Lt);i.texStorage2D(s.TEXTURE_2D,Jt,ae,Pt.width,Pt.height)}Ft&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,kt,ce,Lt)}else i.texImage2D(s.TEXTURE_2D,0,ae,kt,ce,Lt);b(w)&&y(Et),Wt.__version=yt.version,w.onUpdate&&w.onUpdate(w)}G.__version=w.version}function St(G,w,ft){if(w.image.length!==6)return;const Et=Mt(G,w),Rt=w.source;i.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+ft);const yt=a.get(Rt);if(Rt.version!==yt.__version||Et===!0){i.activeTexture(s.TEXTURE0+ft);const Wt=Ze.getPrimaries(Ze.workingColorSpace),Bt=w.colorSpace===Ra?null:Ze.getPrimaries(w.colorSpace),Qt=w.colorSpace===Ra||Wt===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const ne=w.isCompressedTexture||w.image[0].isCompressedTexture,Lt=w.image[0]&&w.image[0].isDataTexture,kt=[];for(let Ct=0;Ct<6;Ct++)!ne&&!Lt?kt[Ct]=P(w.image[Ct],!0,l.maxCubemapSize):kt[Ct]=Lt?w.image[Ct].image:w.image[Ct],kt[Ct]=on(w,kt[Ct]);const ce=kt[0],ae=c.convert(w.format,w.colorSpace),Gt=c.convert(w.type),Te=X(w.internalFormat,ae,Gt,w.colorSpace),$=w.isVideoTexture!==!0,Ot=yt.__version===void 0||Et===!0,Ft=Rt.dataReady;let Jt=q(w,ce);bt(s.TEXTURE_CUBE_MAP,w);let Pt;if(ne){$&&Ot&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Jt,Te,ce.width,ce.height);for(let Ct=0;Ct<6;Ct++){Pt=kt[Ct].mipmaps;for(let $t=0;$t<Pt.length;$t++){const _e=Pt[$t];w.format!==sr?ae!==null?$?Ft&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,$t,0,0,_e.width,_e.height,ae,_e.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,$t,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,$t,0,0,_e.width,_e.height,ae,Gt,_e.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,$t,Te,_e.width,_e.height,0,ae,Gt,_e.data)}}}else{if(Pt=w.mipmaps,$&&Ot){Pt.length>0&&Jt++;const Ct=rn(kt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Jt,Te,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(Lt){$?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,kt[Ct].width,kt[Ct].height,ae,Gt,kt[Ct].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Te,kt[Ct].width,kt[Ct].height,0,ae,Gt,kt[Ct].data);for(let $t=0;$t<Pt.length;$t++){const je=Pt[$t].image[Ct].image;$?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,$t+1,0,0,je.width,je.height,ae,Gt,je.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,$t+1,Te,je.width,je.height,0,ae,Gt,je.data)}}else{$?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,ae,Gt,kt[Ct]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Te,ae,Gt,kt[Ct]);for(let $t=0;$t<Pt.length;$t++){const _e=Pt[$t];$?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,$t+1,0,0,ae,Gt,_e.image[Ct]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,$t+1,Te,ae,Gt,_e.image[Ct])}}}b(w)&&y(s.TEXTURE_CUBE_MAP),yt.__version=Rt.version,w.onUpdate&&w.onUpdate(w)}G.__version=w.version}function It(G,w,ft,Et,Rt,yt){const Wt=c.convert(ft.format,ft.colorSpace),Bt=c.convert(ft.type),Qt=X(ft.internalFormat,Wt,Bt,ft.colorSpace),ne=a.get(w),Lt=a.get(ft);if(Lt.__renderTarget=w,!ne.__hasExternalTextures){const kt=Math.max(1,w.width>>yt),ce=Math.max(1,w.height>>yt);Rt===s.TEXTURE_3D||Rt===s.TEXTURE_2D_ARRAY?i.texImage3D(Rt,yt,Qt,kt,ce,w.depth,0,Wt,Bt,null):i.texImage2D(Rt,yt,Qt,kt,ce,0,Wt,Bt,null)}i.bindFramebuffer(s.FRAMEBUFFER,G),ie(w)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Et,Rt,Lt.__webglTexture,0,Ke(w)):(Rt===s.TEXTURE_2D||Rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Et,Rt,Lt.__webglTexture,yt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function re(G,w,ft){if(s.bindRenderbuffer(s.RENDERBUFFER,G),w.depthBuffer){const Et=w.depthTexture,Rt=Et&&Et.isDepthTexture?Et.type:null,yt=z(w.stencilBuffer,Rt),Wt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Bt=Ke(w);ie(w)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt,yt,w.width,w.height):ft?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,yt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,yt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Wt,s.RENDERBUFFER,G)}else{const Et=w.textures;for(let Rt=0;Rt<Et.length;Rt++){const yt=Et[Rt],Wt=c.convert(yt.format,yt.colorSpace),Bt=c.convert(yt.type),Qt=X(yt.internalFormat,Wt,Bt,yt.colorSpace),ne=Ke(w);ft&&ie(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Qt,w.width,w.height):ie(w)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,Qt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Qt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Kt(G,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,G),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=a.get(w.depthTexture);Et.__renderTarget=w,(!Et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ot(w.depthTexture,0);const Rt=Et.__webglTexture,yt=Ke(w);if(w.depthTexture.format===Pl)ie(w)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Rt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Rt,0);else if(w.depthTexture.format===zl)ie(w)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Rt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Rt,0);else throw new Error("Unknown depthTexture format")}function ge(G){const w=a.get(G),ft=G.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==G.depthTexture){const Et=G.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Et){const Rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Et.removeEventListener("dispose",Rt)};Et.addEventListener("dispose",Rt),w.__depthDisposeCallback=Rt}w.__boundDepthTexture=Et}if(G.depthTexture&&!w.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");const Et=G.texture.mipmaps;Et&&Et.length>0?Kt(w.__webglFramebuffer[0],G):Kt(w.__webglFramebuffer,G)}else if(ft){w.__webglDepthbuffer=[];for(let Et=0;Et<6;Et++)if(i.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Et]),w.__webglDepthbuffer[Et]===void 0)w.__webglDepthbuffer[Et]=s.createRenderbuffer(),re(w.__webglDepthbuffer[Et],G,!1);else{const Rt=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=w.__webglDepthbuffer[Et];s.bindRenderbuffer(s.RENDERBUFFER,yt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,yt)}}else{const Et=G.texture.mipmaps;if(Et&&Et.length>0?i.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),re(w.__webglDepthbuffer,G,!1);else{const Rt=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,yt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,yt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function tn(G,w,ft){const Et=a.get(G);w!==void 0&&It(Et.__webglFramebuffer,G,G.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ft!==void 0&&ge(G)}function j(G){const w=G.texture,ft=a.get(G),Et=a.get(w);G.addEventListener("dispose",K);const Rt=G.textures,yt=G.isWebGLCubeRenderTarget===!0,Wt=Rt.length>1;if(Wt||(Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture()),Et.__version=w.version,d.memory.textures++),yt){ft.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(w.mipmaps&&w.mipmaps.length>0){ft.__webglFramebuffer[Bt]=[];for(let Qt=0;Qt<w.mipmaps.length;Qt++)ft.__webglFramebuffer[Bt][Qt]=s.createFramebuffer()}else ft.__webglFramebuffer[Bt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ft.__webglFramebuffer=[];for(let Bt=0;Bt<w.mipmaps.length;Bt++)ft.__webglFramebuffer[Bt]=s.createFramebuffer()}else ft.__webglFramebuffer=s.createFramebuffer();if(Wt)for(let Bt=0,Qt=Rt.length;Bt<Qt;Bt++){const ne=a.get(Rt[Bt]);ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture(),d.memory.textures++)}if(G.samples>0&&ie(G)===!1){ft.__webglMultisampledFramebuffer=s.createFramebuffer(),ft.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let Bt=0;Bt<Rt.length;Bt++){const Qt=Rt[Bt];ft.__webglColorRenderbuffer[Bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ft.__webglColorRenderbuffer[Bt]);const ne=c.convert(Qt.format,Qt.colorSpace),Lt=c.convert(Qt.type),kt=X(Qt.internalFormat,ne,Lt,Qt.colorSpace,G.isXRRenderTarget===!0),ce=Ke(G);s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,kt,G.width,G.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[Bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),G.depthBuffer&&(ft.__webglDepthRenderbuffer=s.createRenderbuffer(),re(ft.__webglDepthRenderbuffer,G,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(yt){i.bindTexture(s.TEXTURE_CUBE_MAP,Et.__webglTexture),bt(s.TEXTURE_CUBE_MAP,w);for(let Bt=0;Bt<6;Bt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Qt=0;Qt<w.mipmaps.length;Qt++)It(ft.__webglFramebuffer[Bt][Qt],G,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Qt);else It(ft.__webglFramebuffer[Bt],G,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);b(w)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Bt=0,Qt=Rt.length;Bt<Qt;Bt++){const ne=Rt[Bt],Lt=a.get(ne);let kt=s.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(kt=G.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(kt,Lt.__webglTexture),bt(kt,ne),It(ft.__webglFramebuffer,G,ne,s.COLOR_ATTACHMENT0+Bt,kt,0),b(ne)&&y(kt)}i.unbindTexture()}else{let Bt=s.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Bt=G.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Bt,Et.__webglTexture),bt(Bt,w),w.mipmaps&&w.mipmaps.length>0)for(let Qt=0;Qt<w.mipmaps.length;Qt++)It(ft.__webglFramebuffer[Qt],G,w,s.COLOR_ATTACHMENT0,Bt,Qt);else It(ft.__webglFramebuffer,G,w,s.COLOR_ATTACHMENT0,Bt,0);b(w)&&y(Bt),i.unbindTexture()}G.depthBuffer&&ge(G)}function Ae(G){const w=G.textures;for(let ft=0,Et=w.length;ft<Et;ft++){const Rt=w[ft];if(b(Rt)){const yt=Z(G),Wt=a.get(Rt).__webglTexture;i.bindTexture(yt,Wt),y(yt),i.unbindTexture()}}}const Ee=[],he=[];function qt(G){if(G.samples>0){if(ie(G)===!1){const w=G.textures,ft=G.width,Et=G.height;let Rt=s.COLOR_BUFFER_BIT;const yt=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Wt=a.get(G),Bt=w.length>1;if(Bt)for(let ne=0;ne<w.length;ne++)i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Qt=G.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let ne=0;ne<w.length;ne++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(Rt|=s.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(Rt|=s.STENCIL_BUFFER_BIT)),Bt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Wt.__webglColorRenderbuffer[ne]);const Lt=a.get(w[ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Lt,0)}s.blitFramebuffer(0,0,ft,Et,0,0,ft,Et,Rt,s.NEAREST),v===!0&&(Ee.length=0,he.length=0,Ee.push(s.COLOR_ATTACHMENT0+ne),G.depthBuffer&&G.resolveDepthBuffer===!1&&(Ee.push(yt),he.push(yt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,he)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Bt)for(let ne=0;ne<w.length;ne++){i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,Wt.__webglColorRenderbuffer[ne]);const Lt=a.get(w[ne]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,Lt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&v){const w=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ke(G){return Math.min(l.maxSamples,G.samples)}function ie(G){const w=a.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ve(G){const w=d.render.frame;_.get(G)!==w&&(_.set(G,w),G.update())}function on(G,w){const ft=G.colorSpace,Et=G.format,Rt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||ft!==bo&&ft!==Ra&&(Ze.getTransfer(ft)===pn?(Et!==sr||Rt!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),w}function rn(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(m.width=G.naturalWidth||G.width,m.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(m.width=G.displayWidth,m.height=G.displayHeight):(m.width=G.width,m.height=G.height),m}this.allocateTextureUnit=nt,this.resetTextureUnits=J,this.setTexture2D=ot,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=tn,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=It,this.useMultisampledRTT=ie}function SA(s,t){function i(a,l=Ra){let c;const d=Ze.getTransfer(l);if(a===yr)return s.UNSIGNED_BYTE;if(a===wp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Cp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===b_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===T_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===M_)return s.BYTE;if(a===E_)return s.SHORT;if(a===Ll)return s.UNSIGNED_SHORT;if(a===Rp)return s.INT;if(a===ms)return s.UNSIGNED_INT;if(a===Xr)return s.FLOAT;if(a===Bl)return s.HALF_FLOAT;if(a===A_)return s.ALPHA;if(a===R_)return s.RGB;if(a===sr)return s.RGBA;if(a===Pl)return s.DEPTH_COMPONENT;if(a===zl)return s.DEPTH_STENCIL;if(a===w_)return s.RED;if(a===Dp)return s.RED_INTEGER;if(a===C_)return s.RG;if(a===Up)return s.RG_INTEGER;if(a===Np)return s.RGBA_INTEGER;if(a===Ru||a===wu||a===Cu||a===Du)if(d===pn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===wu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Du)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Yd||a===Zd||a===Kd||a===Qd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Zd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Kd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Qd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Jd||a===$d||a===tp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Jd||a===$d)return d===pn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===tp)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ep||a===np||a===ip||a===rp||a===ap||a===sp||a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===ep)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===np)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ip)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===rp)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ap)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===sp)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===op)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===lp)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===cp)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===up)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===fp)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===hp)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===dp)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===pp)return d===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===mp||a===gp||a===vp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===mp)return d===pn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===vp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_p||a===xp||a===yp||a===Sp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===_p)return c.COMPRESSED_RED_RGTC1_EXT;if(a===xp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===yp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ol?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const MA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const a=new k_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new Ua({vertexShader:MA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ii(new Iu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TA extends wo{constructor(t,i){super();const a=this;let l=null,c=1,d=null,p="local-floor",v=1,m=null,_=null,S=null,M=null,A=null,D=null;const P=typeof XRWebGLBinding<"u",b=new bA,y={},Z=i.getContextAttributes();let X=null,z=null;const q=[],Q=[],K=new We;let W=null;const O=new Qi;O.viewport=new Rn;const T=new Qi;T.viewport=new Rn;const L=[O,T],J=new WM;let nt=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let St=q[ct];return St===void 0&&(St=new Sd,q[ct]=St),St.getTargetRaySpace()},this.getControllerGrip=function(ct){let St=q[ct];return St===void 0&&(St=new Sd,q[ct]=St),St.getGripSpace()},this.getHand=function(ct){let St=q[ct];return St===void 0&&(St=new Sd,q[ct]=St),St.getHandSpace()};function ot(ct){const St=Q.indexOf(ct.inputSource);if(St===-1)return;const It=q[St];It!==void 0&&(It.update(ct.inputSource,ct.frame,m||d),It.dispatchEvent({type:ct.type,data:ct.inputSource}))}function N(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",H);for(let ct=0;ct<q.length;ct++){const St=Q[ct];St!==null&&(Q[ct]=null,q[ct].disconnect(St))}nt=null,dt=null,b.reset();for(const ct in y)delete y[ct];t.setRenderTarget(X),A=null,M=null,S=null,l=null,z=null,jt.stop(),a.isPresenting=!1,t.setPixelRatio(W),t.setSize(K.width,K.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){c=ct,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){p=ct,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ct){m=ct},this.getBaseLayer=function(){return M!==null?M:A},this.getBinding=function(){return S===null&&P&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return D},this.getSession=function(){return l},this.setSession=async function(ct){if(l=ct,l!==null){if(X=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",N),l.addEventListener("inputsourceschange",H),Z.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(K),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,re=null,Kt=null;Z.depth&&(Kt=Z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,It=Z.stencil?zl:Pl,re=Z.stencil?Ol:ms);const ge={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:c};S=this.getBinding(),M=S.createProjectionLayer(ge),l.updateRenderState({layers:[M]}),t.setPixelRatio(1),t.setSize(M.textureWidth,M.textureHeight,!1),z=new gs(M.textureWidth,M.textureHeight,{format:sr,type:yr,depthTexture:new V_(M.textureWidth,M.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:Z.stencil,colorSpace:t.outputColorSpace,samples:Z.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}else{const It={antialias:Z.antialias,alpha:!0,depth:Z.depth,stencil:Z.stencil,framebufferScaleFactor:c};A=new XRWebGLLayer(l,i,It),l.updateRenderState({baseLayer:A}),t.setPixelRatio(1),t.setSize(A.framebufferWidth,A.framebufferHeight,!1),z=new gs(A.framebufferWidth,A.framebufferHeight,{format:sr,type:yr,colorSpace:t.outputColorSpace,stencilBuffer:Z.stencil,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(v),m=null,d=await l.requestReferenceSpace(p),jt.setContext(l),jt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function H(ct){for(let St=0;St<ct.removed.length;St++){const It=ct.removed[St],re=Q.indexOf(It);re>=0&&(Q[re]=null,q[re].disconnect(It))}for(let St=0;St<ct.added.length;St++){const It=ct.added[St];let re=Q.indexOf(It);if(re===-1){for(let ge=0;ge<q.length;ge++)if(ge>=Q.length){Q.push(It),re=ge;break}else if(Q[ge]===null){Q[ge]=It,re=ge;break}if(re===-1)break}const Kt=q[re];Kt&&Kt.connect(It)}}const B=new xt,lt=new xt;function I(ct,St,It){B.setFromMatrixPosition(St.matrixWorld),lt.setFromMatrixPosition(It.matrixWorld);const re=B.distanceTo(lt),Kt=St.projectionMatrix.elements,ge=It.projectionMatrix.elements,tn=Kt[14]/(Kt[10]-1),j=Kt[14]/(Kt[10]+1),Ae=(Kt[9]+1)/Kt[5],Ee=(Kt[9]-1)/Kt[5],he=(Kt[8]-1)/Kt[0],qt=(ge[8]+1)/ge[0],Ke=tn*he,ie=tn*qt,ve=re/(-he+qt),on=ve*-he;if(St.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(on),ct.translateZ(ve),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Kt[10]===-1)ct.projectionMatrix.copy(St.projectionMatrix),ct.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const rn=tn+ve,G=j+ve,w=Ke-on,ft=ie+(re-on),Et=Ae*j/G*rn,Rt=Ee*j/G*rn;ct.projectionMatrix.makePerspective(w,ft,Et,Rt,rn,G),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function rt(ct,St){St===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(St.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(l===null)return;let St=ct.near,It=ct.far;b.texture!==null&&(b.depthNear>0&&(St=b.depthNear),b.depthFar>0&&(It=b.depthFar)),J.near=T.near=O.near=St,J.far=T.far=O.far=It,(nt!==J.near||dt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),nt=J.near,dt=J.far),J.layers.mask=ct.layers.mask|6,O.layers.mask=J.layers.mask&3,T.layers.mask=J.layers.mask&5;const re=ct.parent,Kt=J.cameras;rt(J,re);for(let ge=0;ge<Kt.length;ge++)rt(Kt[ge],re);Kt.length===2?I(J,O,T):J.projectionMatrix.copy(O.projectionMatrix),bt(ct,J,re)};function bt(ct,St,It){It===null?ct.matrix.copy(St.matrixWorld):(ct.matrix.copy(It.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(St.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(St.projectionMatrix),ct.projectionMatrixInverse.copy(St.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Mp*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(M===null&&A===null))return v},this.setFoveation=function(ct){v=ct,M!==null&&(M.fixedFoveation=ct),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=ct)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(J)},this.getCameraTexture=function(ct){return y[ct]};let Mt=null;function Nt(ct,St){if(_=St.getViewerPose(m||d),D=St,_!==null){const It=_.views;A!==null&&(t.setRenderTargetFramebuffer(z,A.framebuffer),t.setRenderTarget(z));let re=!1;It.length!==J.cameras.length&&(J.cameras.length=0,re=!0);for(let j=0;j<It.length;j++){const Ae=It[j];let Ee=null;if(A!==null)Ee=A.getViewport(Ae);else{const qt=S.getViewSubImage(M,Ae);Ee=qt.viewport,j===0&&(t.setRenderTargetTextures(z,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(z))}let he=L[j];he===void 0&&(he=new Qi,he.layers.enable(j),he.viewport=new Rn,L[j]=he),he.matrix.fromArray(Ae.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Ae.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),j===0&&(J.matrix.copy(he.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),re===!0&&J.cameras.push(he)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&P){S=a.getBinding();const j=S.getDepthInformation(It[0]);j&&j.isValid&&j.texture&&b.init(j,l.renderState)}if(Kt&&Kt.includes("camera-access")&&P){t.state.unbindTexture(),S=a.getBinding();for(let j=0;j<It.length;j++){const Ae=It[j].camera;if(Ae){let Ee=y[Ae];Ee||(Ee=new k_,y[Ae]=Ee);const he=S.getCameraImage(Ae);Ee.sourceTexture=he}}}}for(let It=0;It<q.length;It++){const re=Q[It],Kt=q[It];re!==null&&Kt!==void 0&&Kt.update(re,St,m||d)}Mt&&Mt(ct,St),St.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:St}),D=null}const jt=new W_;jt.setAnimationLoop(Nt),this.setAnimationLoop=function(ct){Mt=ct},this.dispose=function(){}}}const ls=new Sr,AA=new Ln;function RA(s,t){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function a(b,y){y.color.getRGB(b.fogColor.value,F_(s)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,Z,X,z){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(b,y):y.isMeshToonMaterial?(c(b,y),S(b,y)):y.isMeshPhongMaterial?(c(b,y),_(b,y)):y.isMeshStandardMaterial?(c(b,y),M(b,y),y.isMeshPhysicalMaterial&&A(b,y,z)):y.isMeshMatcapMaterial?(c(b,y),D(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),P(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(d(b,y),y.isLineDashedMaterial&&p(b,y)):y.isPointsMaterial?v(b,y,Z,X):y.isSpriteMaterial?m(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===Ai&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===Ai&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const Z=t.get(y),X=Z.envMap,z=Z.envMapRotation;X&&(b.envMap.value=X,ls.copy(z),ls.x*=-1,ls.y*=-1,ls.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),b.envMapRotation.value.setFromMatrix4(AA.makeRotationFromEuler(ls)),b.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function d(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function p(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function v(b,y,Z,X){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*Z,b.scale.value=X*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function m(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function _(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function S(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function M(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function A(b,y,Z){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ai&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=Z.texture,b.transmissionSamplerSize.value.set(Z.width,Z.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function D(b,y){y.matcap&&(b.matcap.value=y.matcap)}function P(b,y){const Z=t.get(y).light;b.referencePosition.value.setFromMatrixPosition(Z.matrixWorld),b.nearDistance.value=Z.shadow.camera.near,b.farDistance.value=Z.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function wA(s,t,i,a){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function v(Z,X){const z=X.program;a.uniformBlockBinding(Z,z)}function m(Z,X){let z=l[Z.id];z===void 0&&(D(Z),z=_(Z),l[Z.id]=z,Z.addEventListener("dispose",b));const q=X.program;a.updateUBOMapping(Z,q);const Q=t.render.frame;c[Z.id]!==Q&&(M(Z),c[Z.id]=Q)}function _(Z){const X=S();Z.__bindingPointIndex=X;const z=s.createBuffer(),q=Z.__size,Q=Z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,z),s.bufferData(s.UNIFORM_BUFFER,q,Q),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,X,z),z}function S(){for(let Z=0;Z<p;Z++)if(d.indexOf(Z)===-1)return d.push(Z),Z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(Z){const X=l[Z.id],z=Z.uniforms,q=Z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,X);for(let Q=0,K=z.length;Q<K;Q++){const W=Array.isArray(z[Q])?z[Q]:[z[Q]];for(let O=0,T=W.length;O<T;O++){const L=W[O];if(A(L,Q,O,q)===!0){const J=L.__offset,nt=Array.isArray(L.value)?L.value:[L.value];let dt=0;for(let ot=0;ot<nt.length;ot++){const N=nt[ot],H=P(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,J+dt,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function A(Z,X,z,q){const Q=Z.value,K=X+"_"+z;if(q[K]===void 0)return typeof Q=="number"||typeof Q=="boolean"?q[K]=Q:q[K]=Q.clone(),!0;{const W=q[K];if(typeof Q=="number"||typeof Q=="boolean"){if(W!==Q)return q[K]=Q,!0}else if(W.equals(Q)===!1)return W.copy(Q),!0}return!1}function D(Z){const X=Z.uniforms;let z=0;const q=16;for(let K=0,W=X.length;K<W;K++){const O=Array.isArray(X[K])?X[K]:[X[K]];for(let T=0,L=O.length;T<L;T++){const J=O[T],nt=Array.isArray(J.value)?J.value:[J.value];for(let dt=0,ot=nt.length;dt<ot;dt++){const N=nt[dt],H=P(N),B=z%q,lt=B%H.boundary,I=B+lt;z+=lt,I!==0&&q-I<H.storage&&(z+=q-I),J.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=z,z+=H.storage}}}const Q=z%q;return Q>0&&(z+=q-Q),Z.__size=z,Z.__cache={},this}function P(Z){const X={boundary:0,storage:0};return typeof Z=="number"||typeof Z=="boolean"?(X.boundary=4,X.storage=4):Z.isVector2?(X.boundary=8,X.storage=8):Z.isVector3||Z.isColor?(X.boundary=16,X.storage=12):Z.isVector4?(X.boundary=16,X.storage=16):Z.isMatrix3?(X.boundary=48,X.storage=48):Z.isMatrix4?(X.boundary=64,X.storage=64):Z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",Z),X}function b(Z){const X=Z.target;X.removeEventListener("dispose",b);const z=d.indexOf(X.__bindingPointIndex);d.splice(z,1),s.deleteBuffer(l[X.id]),delete l[X.id],delete c[X.id]}function y(){for(const Z in l)s.deleteBuffer(l[Z]);d=[],l={},c={}}return{bind:v,update:m,dispose:y}}class CA{constructor(t={}){const{canvas:i=cM(),context:a=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:M=!1}=t;this.isWebGLRenderer=!0;let A;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=a.getContextAttributes().alpha}else A=d;const D=new Uint32Array(4),P=new Int32Array(4);let b=null,y=null;const Z=[],X=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let q=!1;this._outputColorSpace=Ki;let Q=0,K=0,W=null,O=-1,T=null;const L=new Rn,J=new Rn;let nt=null;const dt=new $e(0);let ot=0,N=i.width,H=i.height,B=1,lt=null,I=null;const rt=new Rn(0,0,N,H),bt=new Rn(0,0,N,H);let Mt=!1;const Nt=new Pp;let jt=!1,ct=!1;const St=new Ln,It=new xt,re=new Rn,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function tn(){return W===null?B:1}let j=a;function Ae(U,it){return i.getContext(U,it)}try{const U={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:v,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ap}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",Jt,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),j===null){const it="webgl2";if(j=Ae(it,U),j===null)throw Ae(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Ee,he,qt,Ke,ie,ve,on,rn,G,w,ft,Et,Rt,yt,Wt,Bt,Qt,ne,Lt,kt,ce,ae,Gt,Te;function $(){Ee=new F1(j),Ee.init(),ae=new SA(j,Ee),he=new N1(j,Ee,t,ae),qt=new xA(j,Ee),he.reversedDepthBuffer&&M&&qt.buffers.depth.setReversed(!0),Ke=new V1(j),ie=new sA,ve=new yA(j,Ee,qt,ie,he,ae,Ke),on=new O1(z),rn=new B1(z),G=new YM(j),Gt=new D1(j,G),w=new H1(j,G,Ke,Gt),ft=new X1(j,w,G,Ke),Lt=new k1(j,he,ve),Bt=new L1(ie),Et=new aA(z,on,rn,Ee,he,Gt,Bt),Rt=new RA(z,ie),yt=new lA,Wt=new pA(Ee),ne=new C1(z,on,rn,qt,ft,A,v),Qt=new vA(z,ft,he),Te=new wA(j,Ke,he,qt),kt=new U1(j,Ee,Ke),ce=new G1(j,Ee,Ke),Ke.programs=Et.programs,z.capabilities=he,z.extensions=Ee,z.properties=ie,z.renderLists=yt,z.shadowMap=Qt,z.state=qt,z.info=Ke}$();const Ot=new TA(z,j);this.xr=Ot,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const U=Ee.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Ee.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(U){U!==void 0&&(B=U,this.setSize(N,H,!1))},this.getSize=function(U){return U.set(N,H)},this.setSize=function(U,it,pt=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=U,H=it,i.width=Math.floor(U*B),i.height=Math.floor(it*B),pt===!0&&(i.style.width=U+"px",i.style.height=it+"px"),this.setViewport(0,0,U,it)},this.getDrawingBufferSize=function(U){return U.set(N*B,H*B).floor()},this.setDrawingBufferSize=function(U,it,pt){N=U,H=it,B=pt,i.width=Math.floor(U*pt),i.height=Math.floor(it*pt),this.setViewport(0,0,U,it)},this.getCurrentViewport=function(U){return U.copy(L)},this.getViewport=function(U){return U.copy(rt)},this.setViewport=function(U,it,pt,_t){U.isVector4?rt.set(U.x,U.y,U.z,U.w):rt.set(U,it,pt,_t),qt.viewport(L.copy(rt).multiplyScalar(B).round())},this.getScissor=function(U){return U.copy(bt)},this.setScissor=function(U,it,pt,_t){U.isVector4?bt.set(U.x,U.y,U.z,U.w):bt.set(U,it,pt,_t),qt.scissor(J.copy(bt).multiplyScalar(B).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(U){qt.setScissorTest(Mt=U)},this.setOpaqueSort=function(U){lt=U},this.setTransparentSort=function(U){I=U},this.getClearColor=function(U){return U.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(U=!0,it=!0,pt=!0){let _t=0;if(U){let st=!1;if(W!==null){const zt=W.texture.format;st=zt===Np||zt===Up||zt===Dp}if(st){const zt=W.texture.type,Xt=zt===yr||zt===ms||zt===Ll||zt===Ol||zt===wp||zt===Cp,te=ne.getClearColor(),Ht=ne.getClearAlpha(),de=te.r,me=te.g,ee=te.b;Xt?(D[0]=de,D[1]=me,D[2]=ee,D[3]=Ht,j.clearBufferuiv(j.COLOR,0,D)):(P[0]=de,P[1]=me,P[2]=ee,P[3]=Ht,j.clearBufferiv(j.COLOR,0,P))}else _t|=j.COLOR_BUFFER_BIT}it&&(_t|=j.DEPTH_BUFFER_BIT),pt&&(_t|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",Jt,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),ne.dispose(),yt.dispose(),Wt.dispose(),ie.dispose(),on.dispose(),rn.dispose(),ft.dispose(),Gt.dispose(),Te.dispose(),Et.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",wn),Ot.removeEventListener("sessionend",vn),yn.stop()};function Ft(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Jt(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const U=Ke.autoReset,it=Qt.enabled,pt=Qt.autoUpdate,_t=Qt.needsUpdate,st=Qt.type;$(),Ke.autoReset=U,Qt.enabled=it,Qt.autoUpdate=pt,Qt.needsUpdate=_t,Qt.type=st}function Pt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Ct(U){const it=U.target;it.removeEventListener("dispose",Ct),$t(it)}function $t(U){_e(U),ie.remove(U)}function _e(U){const it=ie.get(U).programs;it!==void 0&&(it.forEach(function(pt){Et.releaseProgram(pt)}),U.isShaderMaterial&&Et.releaseShaderCache(U))}this.renderBufferDirect=function(U,it,pt,_t,st,zt){it===null&&(it=Kt);const Xt=st.isMesh&&st.matrixWorld.determinant()<0,te=Fi(U,it,pt,_t,st);qt.setMaterial(_t,Xt);let Ht=pt.index,de=1;if(_t.wireframe===!0){if(Ht=w.getWireframeAttribute(pt),Ht===void 0)return;de=2}const me=pt.drawRange,ee=pt.attributes.position;let Re=me.start*de,ke=(me.start+me.count)*de;zt!==null&&(Re=Math.max(Re,zt.start*de),ke=Math.min(ke,(zt.start+zt.count)*de)),Ht!==null?(Re=Math.max(Re,0),ke=Math.min(ke,Ht.count)):ee!=null&&(Re=Math.max(Re,0),ke=Math.min(ke,ee.count));const mn=ke-Re;if(mn<0||mn===1/0)return;Gt.setup(st,_t,te,pt,Ht);let qe,Ce=kt;if(Ht!==null&&(qe=G.get(Ht),Ce=ce,Ce.setIndex(qe)),st.isMesh)_t.wireframe===!0?(qt.setLineWidth(_t.wireframeLinewidth*tn()),Ce.setMode(j.LINES)):Ce.setMode(j.TRIANGLES);else if(st.isLine){let pe=_t.linewidth;pe===void 0&&(pe=1),qt.setLineWidth(pe*tn()),st.isLineSegments?Ce.setMode(j.LINES):st.isLineLoop?Ce.setMode(j.LINE_LOOP):Ce.setMode(j.LINE_STRIP)}else st.isPoints?Ce.setMode(j.POINTS):st.isSprite&&Ce.setMode(j.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)Il("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Ce.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const pe=st._multiDrawStarts,cn=st._multiDrawCounts,Ne=st._multiDrawCount,Fn=Ht?G.get(Ht).bytesPerElement:1,xi=ie.get(_t).currentProgram.getUniforms();for(let en=0;en<Ne;en++)xi.setValue(j,"_gl_DrawID",en),Ce.render(pe[en]/Fn,cn[en])}else if(st.isInstancedMesh)Ce.renderInstances(Re,mn,st.count);else if(pt.isInstancedBufferGeometry){const pe=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,cn=Math.min(pt.instanceCount,pe);Ce.renderInstances(Re,mn,cn)}else Ce.render(Re,mn)};function je(U,it,pt){U.transparent===!0&&U.side===kr&&U.forceSinglePass===!1?(U.side=Ai,U.needsUpdate=!0,gi(U,it,pt),U.side=Da,U.needsUpdate=!0,gi(U,it,pt),U.side=kr):gi(U,it,pt)}this.compile=function(U,it,pt=null){pt===null&&(pt=U),y=Wt.get(pt),y.init(it),X.push(y),pt.traverseVisible(function(st){st.isLight&&st.layers.test(it.layers)&&(y.pushLight(st),st.castShadow&&y.pushShadow(st))}),U!==pt&&U.traverseVisible(function(st){st.isLight&&st.layers.test(it.layers)&&(y.pushLight(st),st.castShadow&&y.pushShadow(st))}),y.setupLights();const _t=new Set;return U.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const zt=st.material;if(zt)if(Array.isArray(zt))for(let Xt=0;Xt<zt.length;Xt++){const te=zt[Xt];je(te,pt,st),_t.add(te)}else je(zt,pt,st),_t.add(zt)}),y=X.pop(),_t},this.compileAsync=function(U,it,pt=null){const _t=this.compile(U,it,pt);return new Promise(st=>{function zt(){if(_t.forEach(function(Xt){ie.get(Xt).currentProgram.isReady()&&_t.delete(Xt)}),_t.size===0){st(U);return}setTimeout(zt,10)}Ee.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let ze=null;function ri(U){ze&&ze(U)}function wn(){yn.stop()}function vn(){yn.start()}const yn=new W_;yn.setAnimationLoop(ri),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(U){ze=U,Ot.setAnimationLoop(U),U===null?yn.stop():yn.start()},Ot.addEventListener("sessionstart",wn),Ot.addEventListener("sessionend",vn),this.render=function(U,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(it),it=Ot.getCamera()),U.isScene===!0&&U.onBeforeRender(z,U,it,W),y=Wt.get(U,X.length),y.init(it),X.push(y),St.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),Nt.setFromProjectionMatrix(St,_r,it.reversedDepth),ct=this.localClippingEnabled,jt=Bt.init(this.clippingPlanes,ct),b=yt.get(U,Z.length),b.init(),Z.push(b),Ot.enabled===!0&&Ot.isPresenting===!0){const zt=z.xr.getDepthSensingMesh();zt!==null&&On(zt,it,-1/0,z.sortObjects)}On(U,it,0,z.sortObjects),b.finish(),z.sortObjects===!0&&b.sort(lt,I),ge=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,ge&&ne.addToRenderList(b,U),this.info.render.frame++,jt===!0&&Bt.beginShadows();const pt=y.state.shadowsArray;Qt.render(pt,U,it),jt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const _t=b.opaque,st=b.transmissive;if(y.setupLights(),it.isArrayCamera){const zt=it.cameras;if(st.length>0)for(let Xt=0,te=zt.length;Xt<te;Xt++){const Ht=zt[Xt];Na(_t,st,U,Ht)}ge&&ne.render(U);for(let Xt=0,te=zt.length;Xt<te;Xt++){const Ht=zt[Xt];mi(b,U,Ht,Ht.viewport)}}else st.length>0&&Na(_t,st,U,it),ge&&ne.render(U),mi(b,U,it);W!==null&&K===0&&(ve.updateMultisampleRenderTarget(W),ve.updateRenderTargetMipmap(W)),U.isScene===!0&&U.onAfterRender(z,U,it),Gt.resetDefaultState(),O=-1,T=null,X.pop(),X.length>0?(y=X[X.length-1],jt===!0&&Bt.setGlobalState(z.clippingPlanes,y.state.camera)):y=null,Z.pop(),Z.length>0?b=Z[Z.length-1]:b=null};function On(U,it,pt,_t){if(U.visible===!1)return;if(U.layers.test(it.layers)){if(U.isGroup)pt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(it);else if(U.isLight)y.pushLight(U),U.castShadow&&y.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Nt.intersectsSprite(U)){_t&&re.setFromMatrixPosition(U.matrixWorld).applyMatrix4(St);const Xt=ft.update(U),te=U.material;te.visible&&b.push(U,Xt,te,pt,re.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Nt.intersectsObject(U))){const Xt=ft.update(U),te=U.material;if(_t&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),re.copy(U.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),re.copy(Xt.boundingSphere.center)),re.applyMatrix4(U.matrixWorld).applyMatrix4(St)),Array.isArray(te)){const Ht=Xt.groups;for(let de=0,me=Ht.length;de<me;de++){const ee=Ht[de],Re=te[ee.materialIndex];Re&&Re.visible&&b.push(U,Xt,Re,pt,re.z,ee)}}else te.visible&&b.push(U,Xt,te,pt,re.z,null)}}const zt=U.children;for(let Xt=0,te=zt.length;Xt<te;Xt++)On(zt[Xt],it,pt,_t)}function mi(U,it,pt,_t){const st=U.opaque,zt=U.transmissive,Xt=U.transparent;y.setupLightsView(pt),jt===!0&&Bt.setGlobalState(z.clippingPlanes,pt),_t&&qt.viewport(L.copy(_t)),st.length>0&&ln(st,it,pt),zt.length>0&&ln(zt,it,pt),Xt.length>0&&ln(Xt,it,pt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Na(U,it,pt,_t){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[_t.id]===void 0&&(y.state.transmissionRenderTarget[_t.id]=new gs(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Bl:yr,minFilter:ps,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const zt=y.state.transmissionRenderTarget[_t.id],Xt=_t.viewport||L;zt.setSize(Xt.z*z.transmissionResolutionScale,Xt.w*z.transmissionResolutionScale);const te=z.getRenderTarget(),Ht=z.getActiveCubeFace(),de=z.getActiveMipmapLevel();z.setRenderTarget(zt),z.getClearColor(dt),ot=z.getClearAlpha(),ot<1&&z.setClearColor(16777215,.5),z.clear(),ge&&ne.render(pt);const me=z.toneMapping;z.toneMapping=Ca;const ee=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),y.setupLightsView(_t),jt===!0&&Bt.setGlobalState(z.clippingPlanes,_t),ln(U,pt,_t),ve.updateMultisampleRenderTarget(zt),ve.updateRenderTargetMipmap(zt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ke=0,mn=it.length;ke<mn;ke++){const qe=it[ke],Ce=qe.object,pe=qe.geometry,cn=qe.material,Ne=qe.group;if(cn.side===kr&&Ce.layers.test(_t.layers)){const Fn=cn.side;cn.side=Ai,cn.needsUpdate=!0,ai(Ce,pt,_t,pe,cn,Ne),cn.side=Fn,cn.needsUpdate=!0,Re=!0}}Re===!0&&(ve.updateMultisampleRenderTarget(zt),ve.updateRenderTargetMipmap(zt))}z.setRenderTarget(te,Ht,de),z.setClearColor(dt,ot),ee!==void 0&&(_t.viewport=ee),z.toneMapping=me}function ln(U,it,pt){const _t=it.isScene===!0?it.overrideMaterial:null;for(let st=0,zt=U.length;st<zt;st++){const Xt=U[st],te=Xt.object,Ht=Xt.geometry,de=Xt.group;let me=Xt.material;me.allowOverride===!0&&_t!==null&&(me=_t),te.layers.test(pt.layers)&&ai(te,it,pt,Ht,me,de)}}function ai(U,it,pt,_t,st,zt){U.onBeforeRender(z,it,pt,_t,st,zt),U.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),st.onBeforeRender(z,it,pt,_t,U,zt),st.transparent===!0&&st.side===kr&&st.forceSinglePass===!1?(st.side=Ai,st.needsUpdate=!0,z.renderBufferDirect(pt,it,_t,st,U,zt),st.side=Da,st.needsUpdate=!0,z.renderBufferDirect(pt,it,_t,st,U,zt),st.side=kr):z.renderBufferDirect(pt,it,_t,st,U,zt),U.onAfterRender(z,it,pt,_t,st,zt)}function gi(U,it,pt){it.isScene!==!0&&(it=Kt);const _t=ie.get(U),st=y.state.lights,zt=y.state.shadowsArray,Xt=st.state.version,te=Et.getParameters(U,st.state,zt,it,pt),Ht=Et.getProgramCacheKey(te);let de=_t.programs;_t.environment=U.isMeshStandardMaterial?it.environment:null,_t.fog=it.fog,_t.envMap=(U.isMeshStandardMaterial?rn:on).get(U.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&U.envMap===null?it.environmentRotation:U.envMapRotation,de===void 0&&(U.addEventListener("dispose",Ct),de=new Map,_t.programs=de);let me=de.get(Ht);if(me!==void 0){if(_t.currentProgram===me&&_t.lightsStateVersion===Xt)return vi(U,te),me}else te.uniforms=Et.getUniforms(U),U.onBeforeCompile(te,z),me=Et.acquireProgram(te,Ht),de.set(Ht,me),_t.uniforms=te.uniforms;const ee=_t.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(ee.clippingPlanes=Bt.uniform),vi(U,te),_t.needsLights=_i(U),_t.lightsStateVersion=Xt,_t.needsLights&&(ee.ambientLightColor.value=st.state.ambient,ee.lightProbe.value=st.state.probe,ee.directionalLights.value=st.state.directional,ee.directionalLightShadows.value=st.state.directionalShadow,ee.spotLights.value=st.state.spot,ee.spotLightShadows.value=st.state.spotShadow,ee.rectAreaLights.value=st.state.rectArea,ee.ltc_1.value=st.state.rectAreaLTC1,ee.ltc_2.value=st.state.rectAreaLTC2,ee.pointLights.value=st.state.point,ee.pointLightShadows.value=st.state.pointShadow,ee.hemisphereLights.value=st.state.hemi,ee.directionalShadowMap.value=st.state.directionalShadowMap,ee.directionalShadowMatrix.value=st.state.directionalShadowMatrix,ee.spotShadowMap.value=st.state.spotShadowMap,ee.spotLightMatrix.value=st.state.spotLightMatrix,ee.spotLightMap.value=st.state.spotLightMap,ee.pointShadowMap.value=st.state.pointShadowMap,ee.pointShadowMatrix.value=st.state.pointShadowMatrix),_t.currentProgram=me,_t.uniformsList=null,me}function qr(U){if(U.uniformsList===null){const it=U.currentProgram.getUniforms();U.uniformsList=Uu.seqWithValue(it.seq,U.uniforms)}return U.uniformsList}function vi(U,it){const pt=ie.get(U);pt.outputColorSpace=it.outputColorSpace,pt.batching=it.batching,pt.batchingColor=it.batchingColor,pt.instancing=it.instancing,pt.instancingColor=it.instancingColor,pt.instancingMorph=it.instancingMorph,pt.skinning=it.skinning,pt.morphTargets=it.morphTargets,pt.morphNormals=it.morphNormals,pt.morphColors=it.morphColors,pt.morphTargetsCount=it.morphTargetsCount,pt.numClippingPlanes=it.numClippingPlanes,pt.numIntersection=it.numClipIntersection,pt.vertexAlphas=it.vertexAlphas,pt.vertexTangents=it.vertexTangents,pt.toneMapping=it.toneMapping}function Fi(U,it,pt,_t,st){it.isScene!==!0&&(it=Kt),ve.resetTextureUnits();const zt=it.fog,Xt=_t.isMeshStandardMaterial?it.environment:null,te=W===null?z.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:bo,Ht=(_t.isMeshStandardMaterial?rn:on).get(_t.envMap||Xt),de=_t.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,me=!!pt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),ee=!!pt.morphAttributes.position,Re=!!pt.morphAttributes.normal,ke=!!pt.morphAttributes.color;let mn=Ca;_t.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(mn=z.toneMapping);const qe=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Ce=qe!==void 0?qe.length:0,pe=ie.get(_t),cn=y.state.lights;if(jt===!0&&(ct===!0||U!==T)){const xn=U===T&&_t.id===O;Bt.setState(_t,U,xn)}let Ne=!1;_t.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==cn.state.version||pe.outputColorSpace!==te||st.isBatchedMesh&&pe.batching===!1||!st.isBatchedMesh&&pe.batching===!0||st.isBatchedMesh&&pe.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&pe.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&pe.instancing===!1||!st.isInstancedMesh&&pe.instancing===!0||st.isSkinnedMesh&&pe.skinning===!1||!st.isSkinnedMesh&&pe.skinning===!0||st.isInstancedMesh&&pe.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&pe.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&pe.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&pe.instancingMorph===!1&&st.morphTexture!==null||pe.envMap!==Ht||_t.fog===!0&&pe.fog!==zt||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Bt.numPlanes||pe.numIntersection!==Bt.numIntersection)||pe.vertexAlphas!==de||pe.vertexTangents!==me||pe.morphTargets!==ee||pe.morphNormals!==Re||pe.morphColors!==ke||pe.toneMapping!==mn||pe.morphTargetsCount!==Ce)&&(Ne=!0):(Ne=!0,pe.__version=_t.version);let Fn=pe.currentProgram;Ne===!0&&(Fn=gi(_t,it,st));let xi=!1,en=!1,Cn=!1;const nn=Fn.getUniforms(),Pn=pe.uniforms;if(qt.useProgram(Fn.program)&&(xi=!0,en=!0,Cn=!0),_t.id!==O&&(O=_t.id,en=!0),xi||T!==U){qt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),nn.setValue(j,"projectionMatrix",U.projectionMatrix),nn.setValue(j,"viewMatrix",U.matrixWorldInverse);const Gn=nn.map.cameraPosition;Gn!==void 0&&Gn.setValue(j,It.setFromMatrixPosition(U.matrixWorld)),he.logarithmicDepthBuffer&&nn.setValue(j,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&nn.setValue(j,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,en=!0,Cn=!0)}if(st.isSkinnedMesh){nn.setOptional(j,st,"bindMatrix"),nn.setOptional(j,st,"bindMatrixInverse");const xn=st.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),nn.setValue(j,"boneTexture",xn.boneTexture,ve))}st.isBatchedMesh&&(nn.setOptional(j,st,"batchingTexture"),nn.setValue(j,"batchingTexture",st._matricesTexture,ve),nn.setOptional(j,st,"batchingIdTexture"),nn.setValue(j,"batchingIdTexture",st._indirectTexture,ve),nn.setOptional(j,st,"batchingColorTexture"),st._colorsTexture!==null&&nn.setValue(j,"batchingColorTexture",st._colorsTexture,ve));const Hn=pt.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Lt.update(st,pt,Fn),(en||pe.receiveShadow!==st.receiveShadow)&&(pe.receiveShadow=st.receiveShadow,nn.setValue(j,"receiveShadow",st.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(Pn.envMap.value=Ht,Pn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&it.environment!==null&&(Pn.envMapIntensity.value=it.environmentIntensity),en&&(nn.setValue(j,"toneMappingExposure",z.toneMappingExposure),pe.needsLights&&Hi(Pn,Cn),zt&&_t.fog===!0&&Rt.refreshFogUniforms(Pn,zt),Rt.refreshMaterialUniforms(Pn,_t,B,H,y.state.transmissionRenderTarget[U.id]),Uu.upload(j,qr(pe),Pn,ve)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(Uu.upload(j,qr(pe),Pn,ve),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&nn.setValue(j,"center",st.center),nn.setValue(j,"modelViewMatrix",st.modelViewMatrix),nn.setValue(j,"normalMatrix",st.normalMatrix),nn.setValue(j,"modelMatrix",st.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){const xn=_t.uniformsGroups;for(let Gn=0,Kr=xn.length;Gn<Kr;Gn++){const Jn=xn[Gn];Te.update(Jn,Fn),Te.bind(Jn,Fn)}}return Fn}function Hi(U,it){U.ambientLightColor.needsUpdate=it,U.lightProbe.needsUpdate=it,U.directionalLights.needsUpdate=it,U.directionalLightShadows.needsUpdate=it,U.pointLights.needsUpdate=it,U.pointLightShadows.needsUpdate=it,U.spotLights.needsUpdate=it,U.spotLightShadows.needsUpdate=it,U.rectAreaLights.needsUpdate=it,U.hemisphereLights.needsUpdate=it}function _i(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(U,it,pt){const _t=ie.get(U);_t.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,_t.__autoAllocateDepthBuffer===!1&&(_t.__useRenderToTexture=!1),ie.get(U.texture).__webglTexture=it,ie.get(U.depthTexture).__webglTexture=_t.__autoAllocateDepthBuffer?void 0:pt,_t.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,it){const pt=ie.get(U);pt.__webglFramebuffer=it,pt.__useDefaultFramebuffer=it===void 0};const Mn=j.createFramebuffer();this.setRenderTarget=function(U,it=0,pt=0){W=U,Q=it,K=pt;let _t=!0,st=null,zt=!1,Xt=!1;if(U){const Ht=ie.get(U);if(Ht.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(j.FRAMEBUFFER,null),_t=!1;else if(Ht.__webglFramebuffer===void 0)ve.setupRenderTarget(U);else if(Ht.__hasExternalTextures)ve.rebindTextures(U,ie.get(U.texture).__webglTexture,ie.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const ee=U.depthTexture;if(Ht.__boundDepthTexture!==ee){if(ee!==null&&ie.has(ee)&&(U.width!==ee.image.width||U.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(U)}}const de=U.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(Xt=!0);const me=ie.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(me[it])?st=me[it][pt]:st=me[it],zt=!0):U.samples>0&&ve.useMultisampledRTT(U)===!1?st=ie.get(U).__webglMultisampledFramebuffer:Array.isArray(me)?st=me[pt]:st=me,L.copy(U.viewport),J.copy(U.scissor),nt=U.scissorTest}else L.copy(rt).multiplyScalar(B).floor(),J.copy(bt).multiplyScalar(B).floor(),nt=Mt;if(pt!==0&&(st=Mn),qt.bindFramebuffer(j.FRAMEBUFFER,st)&&_t&&qt.drawBuffers(U,st),qt.viewport(L),qt.scissor(J),qt.setScissorTest(nt),zt){const Ht=ie.get(U.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ht.__webglTexture,pt)}else if(Xt){const Ht=it;for(let de=0;de<U.textures.length;de++){const me=ie.get(U.textures[de]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+de,me.__webglTexture,pt,Ht)}}else if(U!==null&&pt!==0){const Ht=ie.get(U.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ht.__webglTexture,pt)}O=-1},this.readRenderTargetPixels=function(U,it,pt,_t,st,zt,Xt,te=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=ie.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xt!==void 0&&(Ht=Ht[Xt]),Ht){qt.bindFramebuffer(j.FRAMEBUFFER,Ht);try{const de=U.textures[te],me=de.format,ee=de.type;if(!he.textureFormatReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=U.width-_t&&pt>=0&&pt<=U.height-st&&(U.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+te),j.readPixels(it,pt,_t,st,ae.convert(me),ae.convert(ee),zt))}finally{const de=W!==null?ie.get(W).__webglFramebuffer:null;qt.bindFramebuffer(j.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(U,it,pt,_t,st,zt,Xt,te=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=ie.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xt!==void 0&&(Ht=Ht[Xt]),Ht)if(it>=0&&it<=U.width-_t&&pt>=0&&pt<=U.height-st){qt.bindFramebuffer(j.FRAMEBUFFER,Ht);const de=U.textures[te],me=de.format,ee=de.type;if(!he.textureFormatReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Re),j.bufferData(j.PIXEL_PACK_BUFFER,zt.byteLength,j.STREAM_READ),U.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+te),j.readPixels(it,pt,_t,st,ae.convert(me),ae.convert(ee),0);const ke=W!==null?ie.get(W).__webglFramebuffer:null;qt.bindFramebuffer(j.FRAMEBUFFER,ke);const mn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await uM(j,mn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Re),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,zt),j.deleteBuffer(Re),j.deleteSync(mn),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,it=null,pt=0){const _t=Math.pow(2,-pt),st=Math.floor(U.image.width*_t),zt=Math.floor(U.image.height*_t),Xt=it!==null?it.x:0,te=it!==null?it.y:0;ve.setTexture2D(U,0),j.copyTexSubImage2D(j.TEXTURE_2D,pt,0,0,Xt,te,st,zt),qt.unbindTexture()};const Yr=j.createFramebuffer(),Zr=j.createFramebuffer();this.copyTextureToTexture=function(U,it,pt=null,_t=null,st=0,zt=null){zt===null&&(st!==0?(Il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),zt=st,st=0):zt=0);let Xt,te,Ht,de,me,ee,Re,ke,mn;const qe=U.isCompressedTexture?U.mipmaps[zt]:U.image;if(pt!==null)Xt=pt.max.x-pt.min.x,te=pt.max.y-pt.min.y,Ht=pt.isBox3?pt.max.z-pt.min.z:1,de=pt.min.x,me=pt.min.y,ee=pt.isBox3?pt.min.z:0;else{const Hn=Math.pow(2,-st);Xt=Math.floor(qe.width*Hn),te=Math.floor(qe.height*Hn),U.isDataArrayTexture?Ht=qe.depth:U.isData3DTexture?Ht=Math.floor(qe.depth*Hn):Ht=1,de=0,me=0,ee=0}_t!==null?(Re=_t.x,ke=_t.y,mn=_t.z):(Re=0,ke=0,mn=0);const Ce=ae.convert(it.format),pe=ae.convert(it.type);let cn;it.isData3DTexture?(ve.setTexture3D(it,0),cn=j.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(ve.setTexture2DArray(it,0),cn=j.TEXTURE_2D_ARRAY):(ve.setTexture2D(it,0),cn=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,it.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,it.unpackAlignment);const Ne=j.getParameter(j.UNPACK_ROW_LENGTH),Fn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),xi=j.getParameter(j.UNPACK_SKIP_PIXELS),en=j.getParameter(j.UNPACK_SKIP_ROWS),Cn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,qe.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,qe.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,de),j.pixelStorei(j.UNPACK_SKIP_ROWS,me),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ee);const nn=U.isDataArrayTexture||U.isData3DTexture,Pn=it.isDataArrayTexture||it.isData3DTexture;if(U.isDepthTexture){const Hn=ie.get(U),xn=ie.get(it),Gn=ie.get(Hn.__renderTarget),Kr=ie.get(xn.__renderTarget);qt.bindFramebuffer(j.READ_FRAMEBUFFER,Gn.__webglFramebuffer),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let Jn=0;Jn<Ht;Jn++)nn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ie.get(U).__webglTexture,st,ee+Jn),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ie.get(it).__webglTexture,zt,mn+Jn)),j.blitFramebuffer(de,me,Xt,te,Re,ke,Xt,te,j.DEPTH_BUFFER_BIT,j.NEAREST);qt.bindFramebuffer(j.READ_FRAMEBUFFER,null),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(st!==0||U.isRenderTargetTexture||ie.has(U)){const Hn=ie.get(U),xn=ie.get(it);qt.bindFramebuffer(j.READ_FRAMEBUFFER,Yr),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Zr);for(let Gn=0;Gn<Ht;Gn++)nn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Hn.__webglTexture,st,ee+Gn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Hn.__webglTexture,st),Pn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,xn.__webglTexture,zt,mn+Gn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,xn.__webglTexture,zt),st!==0?j.blitFramebuffer(de,me,Xt,te,Re,ke,Xt,te,j.COLOR_BUFFER_BIT,j.NEAREST):Pn?j.copyTexSubImage3D(cn,zt,Re,ke,mn+Gn,de,me,Xt,te):j.copyTexSubImage2D(cn,zt,Re,ke,de,me,Xt,te);qt.bindFramebuffer(j.READ_FRAMEBUFFER,null),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pn?U.isDataTexture||U.isData3DTexture?j.texSubImage3D(cn,zt,Re,ke,mn,Xt,te,Ht,Ce,pe,qe.data):it.isCompressedArrayTexture?j.compressedTexSubImage3D(cn,zt,Re,ke,mn,Xt,te,Ht,Ce,qe.data):j.texSubImage3D(cn,zt,Re,ke,mn,Xt,te,Ht,Ce,pe,qe):U.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,zt,Re,ke,Xt,te,Ce,pe,qe.data):U.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,zt,Re,ke,qe.width,qe.height,Ce,qe.data):j.texSubImage2D(j.TEXTURE_2D,zt,Re,ke,Xt,te,Ce,pe,qe);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ne),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Fn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,xi),j.pixelStorei(j.UNPACK_SKIP_ROWS,en),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Cn),zt===0&&it.generateMipmaps&&j.generateMipmap(cn),qt.unbindTexture()},this.initRenderTarget=function(U){ie.get(U).__webglFramebuffer===void 0&&ve.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?ve.setTextureCube(U,0):U.isData3DTexture?ve.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ve.setTexture2DArray(U,0):ve.setTexture2D(U,0),qt.unbindTexture()},this.resetState=function(){Q=0,K=0,W=null,qt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ze._getUnpackColorSpace()}}var Dd={},r_;function DA(){return r_||(r_=1,(function(){var s;function t(f){var g=0;return function(){return g<f.length?{done:!1,value:f[g++]}:{done:!0}}}var i=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,g,x){return f==Array.prototype||f==Object.prototype||(f[g]=x.value),f};function a(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nu=="object"&&Nu];for(var g=0;g<f.length;++g){var x=f[g];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var l=a(this);function c(f,g){if(g)t:{var x=l;f=f.split(".");for(var R=0;R<f.length-1;R++){var F=f[R];if(!(F in x))break t;x=x[F]}f=f[f.length-1],R=x[f],g=g(R),g!=R&&g!=null&&i(x,f,{configurable:!0,writable:!0,value:g})}}c("Symbol",function(f){function g(k){if(this instanceof g)throw new TypeError("Symbol is not a constructor");return new x(R+(k||"")+"_"+F++,k)}function x(k,V){this.h=k,i(this,"description",{configurable:!0,writable:!0,value:V})}if(f)return f;x.prototype.toString=function(){return this.h};var R="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",F=0;return g}),c("Symbol.iterator",function(f){if(f)return f;f=Symbol("Symbol.iterator");for(var g="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),x=0;x<g.length;x++){var R=l[g[x]];typeof R=="function"&&typeof R.prototype[f]!="function"&&i(R.prototype,f,{configurable:!0,writable:!0,value:function(){return d(t(this))}})}return f});function d(f){return f={next:f},f[Symbol.iterator]=function(){return this},f}function p(f){var g=typeof Symbol<"u"&&Symbol.iterator&&f[Symbol.iterator];return g?g.call(f):{next:t(f)}}function v(f){if(!(f instanceof Array)){f=p(f);for(var g,x=[];!(g=f.next()).done;)x.push(g.value);f=x}return f}var m=typeof Object.assign=="function"?Object.assign:function(f,g){for(var x=1;x<arguments.length;x++){var R=arguments[x];if(R)for(var F in R)Object.prototype.hasOwnProperty.call(R,F)&&(f[F]=R[F])}return f};c("Object.assign",function(f){return f||m});var _=typeof Object.create=="function"?Object.create:function(f){function g(){}return g.prototype=f,new g},S;if(typeof Object.setPrototypeOf=="function")S=Object.setPrototypeOf;else{var M;t:{var A={a:!0},D={};try{D.__proto__=A,M=D.a;break t}catch{}M=!1}S=M?function(f,g){if(f.__proto__=g,f.__proto__!==g)throw new TypeError(f+" is not extensible");return f}:null}var P=S;function b(f,g){if(f.prototype=_(g.prototype),f.prototype.constructor=f,P)P(f,g);else for(var x in g)if(x!="prototype")if(Object.defineProperties){var R=Object.getOwnPropertyDescriptor(g,x);R&&Object.defineProperty(f,x,R)}else f[x]=g[x];f.ya=g.prototype}function y(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function Z(f){if(f.m)throw new TypeError("Generator is already running");f.m=!0}y.prototype.u=function(f){this.i=f};function X(f,g){f.l={ma:g,na:!0},f.h=f.s||f.v}y.prototype.return=function(f){this.l={return:f},this.h=this.v};function z(f,g,x){return f.h=x,{value:g}}function q(f){this.h=new y,this.i=f}function Q(f,g){Z(f.h);var x=f.h.j;return x?K(f,"return"in x?x.return:function(R){return{value:R,done:!0}},g,f.h.return):(f.h.return(g),W(f))}function K(f,g,x,R){try{var F=g.call(f.h.j,x);if(!(F instanceof Object))throw new TypeError("Iterator result "+F+" is not an object");if(!F.done)return f.h.m=!1,F;var k=F.value}catch(V){return f.h.j=null,X(f.h,V),W(f)}return f.h.j=null,R.call(f.h,k),W(f)}function W(f){for(;f.h.h;)try{var g=f.i(f.h);if(g)return f.h.m=!1,{value:g.value,done:!1}}catch(x){f.h.i=void 0,X(f.h,x)}if(f.h.m=!1,f.h.l){if(g=f.h.l,f.h.l=null,g.na)throw g.ma;return{value:g.return,done:!0}}return{value:void 0,done:!0}}function O(f){this.next=function(g){return Z(f.h),f.h.j?g=K(f,f.h.j.next,g,f.h.u):(f.h.u(g),g=W(f)),g},this.throw=function(g){return Z(f.h),f.h.j?g=K(f,f.h.j.throw,g,f.h.u):(X(f.h,g),g=W(f)),g},this.return=function(g){return Q(f,g)},this[Symbol.iterator]=function(){return this}}function T(f){function g(R){return f.next(R)}function x(R){return f.throw(R)}return new Promise(function(R,F){function k(V){V.done?R(V.value):Promise.resolve(V.value).then(g,x).then(k,F)}k(f.next())})}function L(f){return T(new O(new q(f)))}c("Promise",function(f){function g(V){this.i=0,this.j=void 0,this.h=[],this.u=!1;var tt=this.l();try{V(tt.resolve,tt.reject)}catch(gt){tt.reject(gt)}}function x(){this.h=null}function R(V){return V instanceof g?V:new g(function(tt){tt(V)})}if(f)return f;x.prototype.i=function(V){if(this.h==null){this.h=[];var tt=this;this.j(function(){tt.m()})}this.h.push(V)};var F=l.setTimeout;x.prototype.j=function(V){F(V,0)},x.prototype.m=function(){for(;this.h&&this.h.length;){var V=this.h;this.h=[];for(var tt=0;tt<V.length;++tt){var gt=V[tt];V[tt]=null;try{gt()}catch(Ut){this.l(Ut)}}}this.h=null},x.prototype.l=function(V){this.j(function(){throw V})},g.prototype.l=function(){function V(Ut){return function(Vt){gt||(gt=!0,Ut.call(tt,Vt))}}var tt=this,gt=!1;return{resolve:V(this.I),reject:V(this.m)}},g.prototype.I=function(V){if(V===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(V instanceof g)this.L(V);else{t:switch(typeof V){case"object":var tt=V!=null;break t;case"function":tt=!0;break t;default:tt=!1}tt?this.F(V):this.s(V)}},g.prototype.F=function(V){var tt=void 0;try{tt=V.then}catch(gt){this.m(gt);return}typeof tt=="function"?this.M(tt,V):this.s(V)},g.prototype.m=function(V){this.v(2,V)},g.prototype.s=function(V){this.v(1,V)},g.prototype.v=function(V,tt){if(this.i!=0)throw Error("Cannot settle("+V+", "+tt+"): Promise already settled in state"+this.i);this.i=V,this.j=tt,this.i===2&&this.K(),this.H()},g.prototype.K=function(){var V=this;F(function(){if(V.D()){var tt=l.console;typeof tt<"u"&&tt.error(V.j)}},1)},g.prototype.D=function(){if(this.u)return!1;var V=l.CustomEvent,tt=l.Event,gt=l.dispatchEvent;return typeof gt>"u"?!0:(typeof V=="function"?V=new V("unhandledrejection",{cancelable:!0}):typeof tt=="function"?V=new tt("unhandledrejection",{cancelable:!0}):(V=l.document.createEvent("CustomEvent"),V.initCustomEvent("unhandledrejection",!1,!0,V)),V.promise=this,V.reason=this.j,gt(V))},g.prototype.H=function(){if(this.h!=null){for(var V=0;V<this.h.length;++V)k.i(this.h[V]);this.h=null}};var k=new x;return g.prototype.L=function(V){var tt=this.l();V.T(tt.resolve,tt.reject)},g.prototype.M=function(V,tt){var gt=this.l();try{V.call(tt,gt.resolve,gt.reject)}catch(Ut){gt.reject(Ut)}},g.prototype.then=function(V,tt){function gt(ue,Yt){return typeof ue=="function"?function(xe){try{Ut(ue(xe))}catch(we){Vt(we)}}:Yt}var Ut,Vt,Se=new g(function(ue,Yt){Ut=ue,Vt=Yt});return this.T(gt(V,Ut),gt(tt,Vt)),Se},g.prototype.catch=function(V){return this.then(void 0,V)},g.prototype.T=function(V,tt){function gt(){switch(Ut.i){case 1:V(Ut.j);break;case 2:tt(Ut.j);break;default:throw Error("Unexpected state: "+Ut.i)}}var Ut=this;this.h==null?k.i(gt):this.h.push(gt),this.u=!0},g.resolve=R,g.reject=function(V){return new g(function(tt,gt){gt(V)})},g.race=function(V){return new g(function(tt,gt){for(var Ut=p(V),Vt=Ut.next();!Vt.done;Vt=Ut.next())R(Vt.value).T(tt,gt)})},g.all=function(V){var tt=p(V),gt=tt.next();return gt.done?R([]):new g(function(Ut,Vt){function Se(xe){return function(we){ue[xe]=we,Yt--,Yt==0&&Ut(ue)}}var ue=[],Yt=0;do ue.push(void 0),Yt++,R(gt.value).T(Se(ue.length-1),Vt),gt=tt.next();while(!gt.done)})},g});function J(f,g){f instanceof String&&(f+="");var x=0,R=!1,F={next:function(){if(!R&&x<f.length){var k=x++;return{value:g(k,f[k]),done:!1}}return R=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}c("Array.prototype.keys",function(f){return f||function(){return J(this,function(g){return g})}}),c("Array.prototype.fill",function(f){return f||function(g,x,R){var F=this.length||0;for(0>x&&(x=Math.max(0,F+x)),(R==null||R>F)&&(R=F),R=Number(R),0>R&&(R=Math.max(0,F+R)),x=Number(x||0);x<R;x++)this[x]=g;return this}});function nt(f){return f||Array.prototype.fill}c("Int8Array.prototype.fill",nt),c("Uint8Array.prototype.fill",nt),c("Uint8ClampedArray.prototype.fill",nt),c("Int16Array.prototype.fill",nt),c("Uint16Array.prototype.fill",nt),c("Int32Array.prototype.fill",nt),c("Uint32Array.prototype.fill",nt),c("Float32Array.prototype.fill",nt),c("Float64Array.prototype.fill",nt),c("Object.is",function(f){return f||function(g,x){return g===x?g!==0||1/g===1/x:g!==g&&x!==x}}),c("Array.prototype.includes",function(f){return f||function(g,x){var R=this;R instanceof String&&(R=String(R));var F=R.length;for(x=x||0,0>x&&(x=Math.max(x+F,0));x<F;x++){var k=R[x];if(k===g||Object.is(k,g))return!0}return!1}}),c("String.prototype.includes",function(f){return f||function(g,x){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(g instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(g,x||0)!==-1}});var dt=this||self;function ot(f,g){f=f.split(".");var x=dt;f[0]in x||typeof x.execScript>"u"||x.execScript("var "+f[0]);for(var R;f.length&&(R=f.shift());)f.length||g===void 0?x[R]&&x[R]!==Object.prototype[R]?x=x[R]:x=x[R]={}:x[R]=g}function N(f){var g;t:{if((g=dt.navigator)&&(g=g.userAgent))break t;g=""}return g.indexOf(f)!=-1}var H=Array.prototype.map?function(f,g){return Array.prototype.map.call(f,g,void 0)}:function(f,g){for(var x=f.length,R=Array(x),F=typeof f=="string"?f.split(""):f,k=0;k<x;k++)k in F&&(R[k]=g.call(void 0,F[k],k,f));return R},B={},lt=null;function I(f){var g=f.length,x=3*g/4;x%3?x=Math.floor(x):"=.".indexOf(f[g-1])!=-1&&(x="=.".indexOf(f[g-2])!=-1?x-2:x-1);var R=new Uint8Array(x),F=0;return rt(f,function(k){R[F++]=k}),F!==x?R.subarray(0,F):R}function rt(f,g){function x(gt){for(;R<f.length;){var Ut=f.charAt(R++),Vt=lt[Ut];if(Vt!=null)return Vt;if(!/^[\s\xa0]*$/.test(Ut))throw Error("Unknown base64 encoding at char: "+Ut)}return gt}bt();for(var R=0;;){var F=x(-1),k=x(0),V=x(64),tt=x(64);if(tt===64&&F===-1)break;g(F<<2|k>>4),V!=64&&(g(k<<4&240|V>>2),tt!=64&&g(V<<6&192|tt))}}function bt(){if(!lt){lt={};for(var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],x=0;5>x;x++){var R=f.concat(g[x].split(""));B[x]=R;for(var F=0;F<R.length;F++){var k=R[F];lt[k]===void 0&&(lt[k]=F)}}}}var Mt=typeof Uint8Array<"u",Nt=!(N("Trident")||N("MSIE"))&&typeof dt.btoa=="function";function jt(f){if(!Nt){var g;g===void 0&&(g=0),bt(),g=B[g];for(var x=Array(Math.floor(f.length/3)),R=g[64]||"",F=0,k=0;F<f.length-2;F+=3){var V=f[F],tt=f[F+1],gt=f[F+2],Ut=g[V>>2];V=g[(V&3)<<4|tt>>4],tt=g[(tt&15)<<2|gt>>6],gt=g[gt&63],x[k++]=Ut+V+tt+gt}switch(Ut=0,gt=R,f.length-F){case 2:Ut=f[F+1],gt=g[(Ut&15)<<2]||R;case 1:f=f[F],x[k]=g[f>>2]+g[(f&3)<<4|Ut>>4]+gt+R}return x.join("")}for(g="";10240<f.length;)g+=String.fromCharCode.apply(null,f.subarray(0,10240)),f=f.subarray(10240);return g+=String.fromCharCode.apply(null,f),btoa(g)}var ct=RegExp("[-_.]","g");function St(f){switch(f){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function It(f){if(!Nt)return I(f);ct.test(f)&&(f=f.replace(ct,St)),f=atob(f);for(var g=new Uint8Array(f.length),x=0;x<f.length;x++)g[x]=f.charCodeAt(x);return g}var re;function Kt(){return re||(re=new Uint8Array(0))}var ge={},tn=typeof Uint8Array.prototype.slice=="function",j=0,Ae=0;function Ee(f){var g=0>f;f=Math.abs(f);var x=f>>>0;f=Math.floor((f-x)/4294967296),g&&(x=p(qt(x,f)),g=x.next().value,f=x.next().value,x=g),j=x>>>0,Ae=f>>>0}var he=typeof BigInt=="function";function qt(f,g){return g=~g,f?f=~f+1:g+=1,[f,g]}function Ke(f,g){this.i=f>>>0,this.h=g>>>0}function ie(f){if(!f)return ve||(ve=new Ke(0,0));if(!/^-?\d+$/.test(f))return null;if(16>f.length)Ee(Number(f));else if(he)f=BigInt(f),j=Number(f&BigInt(4294967295))>>>0,Ae=Number(f>>BigInt(32)&BigInt(4294967295));else{var g=+(f[0]==="-");Ae=j=0;for(var x=f.length,R=g,F=(x-g)%6+g;F<=x;R=F,F+=6)R=Number(f.slice(R,F)),Ae*=1e6,j=1e6*j+R,4294967296<=j&&(Ae+=j/4294967296|0,j%=4294967296);g&&(g=p(qt(j,Ae)),f=g.next().value,g=g.next().value,j=f,Ae=g)}return new Ke(j,Ae)}var ve;function on(f,g){return Error("Invalid wire type: "+f+" (at position "+g+")")}function rn(){return Error("Failed to read varint, encoding is invalid.")}function G(f,g){return Error("Tried to read past the end of the data "+g+" > "+f)}function w(){throw Error("Invalid UTF8")}function ft(f,g){return g=String.fromCharCode.apply(null,g),f==null?g:f+g}var Et=void 0,Rt,yt=typeof TextDecoder<"u",Wt,Bt=typeof TextEncoder<"u",Qt;function ne(f){if(f!==ge)throw Error("illegal external caller")}function Lt(f,g){if(ne(g),this.V=f,f!=null&&f.length===0)throw Error("ByteString should be constructed with non-empty values")}function kt(){return Qt||(Qt=new Lt(null,ge))}function ce(f){ne(ge);var g=f.V;return g=g==null||Mt&&g!=null&&g instanceof Uint8Array?g:typeof g=="string"?It(g):null,g==null?g:f.V=g}function ae(f){if(typeof f=="string")return{buffer:It(f),C:!1};if(Array.isArray(f))return{buffer:new Uint8Array(f),C:!1};if(f.constructor===Uint8Array)return{buffer:f,C:!1};if(f.constructor===ArrayBuffer)return{buffer:new Uint8Array(f),C:!1};if(f.constructor===Lt)return{buffer:ce(f)||Kt(),C:!0};if(f instanceof Uint8Array)return{buffer:new Uint8Array(f.buffer,f.byteOffset,f.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Gt(f,g){this.i=null,this.m=!1,this.h=this.j=this.l=0,Te(this,f,g)}function Te(f,g,x){x=x===void 0?{}:x,f.S=x.S===void 0?!1:x.S,g&&(g=ae(g),f.i=g.buffer,f.m=g.C,f.l=0,f.j=f.i.length,f.h=f.l)}Gt.prototype.reset=function(){this.h=this.l};function $(f,g){if(f.h=g,g>f.j)throw G(f.j,g)}function Ot(f){var g=f.i,x=f.h,R=g[x++],F=R&127;if(R&128&&(R=g[x++],F|=(R&127)<<7,R&128&&(R=g[x++],F|=(R&127)<<14,R&128&&(R=g[x++],F|=(R&127)<<21,R&128&&(R=g[x++],F|=R<<28,R&128&&g[x++]&128&&g[x++]&128&&g[x++]&128&&g[x++]&128&&g[x++]&128)))))throw rn();return $(f,x),F}function Ft(f,g){if(0>g)throw Error("Tried to read a negative byte length: "+g);var x=f.h,R=x+g;if(R>f.j)throw G(g,f.j-x);return f.h=R,x}var Jt=[];function Pt(){this.h=[]}Pt.prototype.length=function(){return this.h.length},Pt.prototype.end=function(){var f=this.h;return this.h=[],f};function Ct(f,g,x){for(;0<x||127<g;)f.h.push(g&127|128),g=(g>>>7|x<<25)>>>0,x>>>=7;f.h.push(g)}function $t(f,g){for(;127<g;)f.h.push(g&127|128),g>>>=7;f.h.push(g)}function _e(f,g){if(Jt.length){var x=Jt.pop();Te(x,f,g),f=x}else f=new Gt(f,g);this.h=f,this.j=this.h.h,this.i=this.l=-1,this.setOptions(g)}_e.prototype.setOptions=function(f){f=f===void 0?{}:f,this.ca=f.ca===void 0?!1:f.ca},_e.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function je(f){var g=f.h;if(g.h==g.j)return!1;f.j=f.h.h;var x=Ot(f.h)>>>0;if(g=x>>>3,x&=7,!(0<=x&&5>=x))throw on(x,f.j);if(1>g)throw Error("Invalid field number: "+g+" (at position "+f.j+")");return f.l=g,f.i=x,!0}function ze(f){switch(f.i){case 0:if(f.i!=0)ze(f);else t:{f=f.h;for(var g=f.h,x=g+10,R=f.i;g<x;)if((R[g++]&128)===0){$(f,g);break t}throw rn()}break;case 1:f=f.h,$(f,f.h+8);break;case 2:f.i!=2?ze(f):(g=Ot(f.h)>>>0,f=f.h,$(f,f.h+g));break;case 5:f=f.h,$(f,f.h+4);break;case 3:g=f.l;do{if(!je(f))throw Error("Unmatched start-group tag: stream EOF");if(f.i==4){if(f.l!=g)throw Error("Unmatched end-group tag");break}ze(f)}while(!0);break;default:throw on(f.i,f.j)}}var ri=[];function wn(){this.j=[],this.i=0,this.h=new Pt}function vn(f,g){g.length!==0&&(f.j.push(g),f.i+=g.length)}function yn(f,g){if(g=g.R){vn(f,f.h.end());for(var x=0;x<g.length;x++)vn(f,ce(g[x])||Kt())}}var On=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function mi(f,g){return On?f[On]|=g:f.A!==void 0?f.A|=g:(Object.defineProperties(f,{A:{value:g,configurable:!0,writable:!0,enumerable:!1}}),g)}function Na(f,g){On?f[On]&&(f[On]&=~g):f.A!==void 0&&(f.A&=~g)}function ln(f){var g;return On?g=f[On]:g=f.A,g??0}function ai(f,g){On?f[On]=g:f.A!==void 0?f.A=g:Object.defineProperties(f,{A:{value:g,configurable:!0,writable:!0,enumerable:!1}})}function gi(f){return mi(f,1),f}function qr(f,g){ai(g,(f|0)&-51)}function vi(f,g){ai(g,(f|18)&-41)}var Fi={};function Hi(f){return f!==null&&typeof f=="object"&&!Array.isArray(f)&&f.constructor===Object}var _i,Mn=[];ai(Mn,23),_i=Object.freeze(Mn);function Yr(f){if(ln(f.o)&2)throw Error("Cannot mutate an immutable Message")}function Zr(f){var g=f.length;(g=g?f[g-1]:void 0)&&Hi(g)?g.g=1:(g={},f.push((g.g=1,g)))}function U(f){var g=f.i+f.G;return f.B||(f.B=f.o[g]={})}function it(f,g){return g===-1?null:g>=f.i?f.B?f.B[g]:void 0:f.o[g+f.G]}function pt(f,g,x,R){Yr(f),_t(f,g,x,R)}function _t(f,g,x,R){f.j&&(f.j=void 0),g>=f.i||R?U(f)[g]=x:(f.o[g+f.G]=x,(f=f.B)&&g in f&&delete f[g])}function st(f,g,x,R){var F=it(f,g);Array.isArray(F)||(F=_i);var k=ln(F);if(k&1||gi(F),R)k&2||mi(F,2),x&1||Object.freeze(F);else{R=!(x&2);var V=k&2;x&1||!V?R&&k&16&&!V&&Na(F,16):(F=gi(Array.prototype.slice.call(F)),_t(f,g,F))}return F}function zt(f,g){var x=it(f,g),R=x==null?x:typeof x=="number"||x==="NaN"||x==="Infinity"||x==="-Infinity"?Number(x):void 0;return R!=null&&R!==x&&_t(f,g,R),R}function Xt(f,g,x,R,F){f.h||(f.h={});var k=f.h[x],V=st(f,x,3,F);if(!k){var tt=V;k=[];var gt=!!(ln(f.o)&16);V=!!(ln(tt)&2);var Ut=tt;!F&&V&&(tt=Array.prototype.slice.call(tt));for(var Vt=V,Se=0;Se<tt.length;Se++){var ue=tt[Se],Yt=g,xe=!1;if(xe=xe===void 0?!1:xe,ue=Array.isArray(ue)?new Yt(ue):xe?new Yt:void 0,ue!==void 0){Yt=ue.o;var we=xe=ln(Yt);V&&(we|=2),gt&&(we|=16),we!=xe&&ai(Yt,we),Yt=we,Vt=Vt||!!(2&Yt),k.push(ue)}}return f.h[x]=k,gt=ln(tt),g=gt|33,g=Vt?g&-9:g|8,gt!=g&&(Vt=tt,Object.isFrozen(Vt)&&(Vt=Array.prototype.slice.call(Vt)),ai(Vt,g),tt=Vt),Ut!==tt&&_t(f,x,tt),(F||R&&V)&&mi(k,2),R&&Object.freeze(k),k}return F||(F=Object.isFrozen(k),R&&!F?Object.freeze(k):!R&&F&&(k=Array.prototype.slice.call(k),f.h[x]=k)),k}function te(f,g,x){var R=!!(ln(f.o)&2);if(g=Xt(f,g,x,R,R),f=st(f,x,3,R),!(R||ln(f)&8)){for(R=0;R<g.length;R++){if(x=g[R],ln(x.o)&2){var F=xi(x,!1);F.j=x}else F=x;x!==F&&(g[R]=F,f[R]=F.o)}mi(f,8)}return g}function Ht(f,g,x){if(x!=null&&typeof x!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof x+": "+x);pt(f,g,x)}function de(f,g,x,R,F){Yr(f);var k=Xt(f,x,g,!1,!1);return x=R??new x,f=st(f,g,2,!1),F!=null?(k.splice(F,0,x),f.splice(F,0,x.o)):(k.push(x),f.push(x.o)),x.C()&&Na(f,8),x}function me(f,g){return f??g}function ee(f,g,x){return x=x===void 0?0:x,me(zt(f,g),x)}var Re;function ke(f){switch(typeof f){case"number":return isFinite(f)?f:String(f);case"object":if(f)if(Array.isArray(f)){if((ln(f)&128)!==0)return f=Array.prototype.slice.call(f),Zr(f),f}else{if(Mt&&f!=null&&f instanceof Uint8Array)return jt(f);if(f instanceof Lt){var g=f.V;return g==null?"":typeof g=="string"?g:f.V=jt(g)}}}return f}function mn(f,g,x,R){if(f!=null){if(Array.isArray(f))f=qe(f,g,x,R!==void 0);else if(Hi(f)){var F={},k;for(k in f)F[k]=mn(f[k],g,x,R);f=F}else f=g(f,R);return f}}function qe(f,g,x,R){var F=ln(f);R=R?!!(F&16):void 0,f=Array.prototype.slice.call(f);for(var k=0;k<f.length;k++)f[k]=mn(f[k],g,x,R);return x(F,f),f}function Ce(f){return f.ja===Fi?f.toJSON():ke(f)}function pe(f,g){f&128&&Zr(g)}function cn(f,g,x){if(x=x===void 0?vi:x,f!=null){if(Mt&&f instanceof Uint8Array)return f.length?new Lt(new Uint8Array(f),ge):kt();if(Array.isArray(f)){var R=ln(f);return R&2?f:g&&!(R&32)&&(R&16||R===0)?(ai(f,R|2),f):(f=qe(f,cn,R&4?vi:x,!0),g=ln(f),g&4&&g&2&&Object.freeze(f),f)}return f.ja===Fi?Fn(f):f}}function Ne(f,g,x,R,F,k,V){if(f=f.h&&f.h[x]){if(R=ln(f),R&2?R=f:(k=H(f,Fn),vi(R,k),Object.freeze(k),R=k),Yr(g),V=R==null?_i:gi([]),R!=null){for(k=!!R.length,f=0;f<R.length;f++){var tt=R[f];k=k&&!(ln(tt.o)&2),V[f]=tt.o}k=(k?8:0)|1,f=ln(V),(f&k)!==k&&(Object.isFrozen(V)&&(V=Array.prototype.slice.call(V)),ai(V,f|k)),g.h||(g.h={}),g.h[x]=R}else g.h&&(g.h[x]=void 0);_t(g,x,V,F)}else pt(g,x,cn(R,k,V),F)}function Fn(f){return ln(f.o)&2||(f=xi(f,!0),mi(f.o,2)),f}function xi(f,g){var x=f.o,R=[];mi(R,16);var F=f.constructor.h;if(F&&R.push(F),F=f.B,F){R.length=x.length,R.fill(void 0,R.length,x.length);var k={};R[R.length-1]=k}(ln(x)&128)!==0&&Zr(R),g=g||f.C()?vi:qr,k=f.constructor,Re=R,R=new k(R),Re=void 0,f.R&&(R.R=f.R.slice()),k=!!(ln(x)&16);for(var V=F?x.length-1:x.length,tt=0;tt<V;tt++)Ne(f,R,tt-f.G,x[tt],!1,k,g);if(F)for(var gt in F)Ne(f,R,+gt,F[gt],!0,k,g);return R}function en(f,g,x){f==null&&(f=Re),Re=void 0;var R=this.constructor.i||0,F=0<R,k=this.constructor.h,V=!1;if(f==null){f=k?[k]:[];var tt=48,gt=!0;F&&(R=0,tt|=128),ai(f,tt)}else{if(!Array.isArray(f)||k&&k!==f[0])throw Error();var Ut=tt=mi(f,0);if((gt=(16&Ut)!==0)&&((V=(32&Ut)!==0)||(Ut|=32)),F){if(128&Ut)R=0;else if(0<f.length){var Vt=f[f.length-1];if(Hi(Vt)&&"g"in Vt){R=0,Ut|=128,delete Vt.g;var Se=!0,ue;for(ue in Vt){Se=!1;break}Se&&f.pop()}}}else if(128&Ut)throw Error();tt!==Ut&&ai(f,Ut)}this.G=(k?0:-1)-R,this.h=void 0,this.o=f;t:{if(k=this.o.length,R=k-1,k&&(k=this.o[R],Hi(k))){this.B=k,this.i=R-this.G;break t}g!==void 0&&-1<g?(this.i=Math.max(g,R+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!F&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(x){g=gt&&!V&&!0,F=this.i;var Yt;for(gt=0;gt<x.length;gt++)V=x[gt],V<F?(V+=this.G,(R=f[V])?Cn(R,g):f[V]=_i):(Yt||(Yt=U(this)),(R=Yt[V])?Cn(R,g):Yt[V]=_i)}}en.prototype.toJSON=function(){return qe(this.o,Ce,pe)},en.prototype.C=function(){return!!(ln(this.o)&2)};function Cn(f,g){if(Array.isArray(f)){var x=ln(f),R=1;!g||x&2||(R|=16),(x&R)!==R&&ai(f,x|R)}}en.prototype.ja=Fi,en.prototype.toString=function(){return this.o.toString()};function nn(f,g,x){if(x){var R={},F;for(F in x){var k=x[F],V=k.qa;V||(R.J=k.wa||k.oa.W,k.ia?(R.aa=Do(k.ia),V=function(tt){return function(gt,Ut,Vt){return tt.J(gt,Ut,Vt,tt.aa)}}(R)):k.ka?(R.Z=vs(k.da.P,k.ka),V=function(tt){return function(gt,Ut,Vt){return tt.J(gt,Ut,Vt,tt.Z)}}(R)):V=R.J,k.qa=V),V(g,f,k.da),R={J:R.J,aa:R.aa,Z:R.Z}}}yn(g,f)}var Pn=Symbol();function Hn(f,g,x){return f[Pn]||(f[Pn]=function(R,F){return g(R,F,x)})}function xn(f){var g=f[Pn];if(!g){var x=wi(f);g=function(R,F){return xs(R,F,x)},f[Pn]=g}return g}function Gn(f){var g=f.ia;if(g)return xn(g);if(g=f.va)return Hn(f.da.P,g,f.ka)}function Kr(f){var g=Gn(f),x=f.da,R=f.oa.U;return g?function(F,k){return R(F,k,x,g)}:function(F,k){return R(F,k,x)}}function Jn(f,g){var x=f[g];return typeof x=="function"&&x.length===0&&(x=x(),f[g]=x),Array.isArray(x)&&(Gi in x||Oa in x||0<x.length&&typeof x[0]=="function")?x:void 0}function kl(f,g,x,R,F,k){g.P=f[0];var V=1;if(f.length>V&&typeof f[V]!="number"){var tt=f[V++];x(g,tt)}for(;V<f.length;){x=f[V++];for(var gt=V+1;gt<f.length&&typeof f[gt]!="number";)gt++;switch(tt=f[V++],gt-=V,gt){case 0:R(g,x,tt);break;case 1:(gt=Jn(f,V))?(V++,F(g,x,tt,gt)):R(g,x,tt,f[V++]);break;case 2:gt=V++,gt=Jn(f,gt),F(g,x,tt,gt,f[V++]);break;case 3:k(g,x,tt,f[V++],f[V++],f[V++]);break;case 4:k(g,x,tt,f[V++],f[V++],f[V++],f[V++]);break;default:throw Error("unexpected number of binary field arguments: "+gt)}}return g}var La=Symbol();function Do(f){var g=f[La];if(!g){var x=lr(f);g=function(R,F){return Qr(R,F,x)},f[La]=g}return g}function vs(f,g){var x=f[La];return x||(x=function(R,F){return nn(R,F,g)},f[La]=x),x}var Oa=Symbol();function Fu(f,g){f.push(g)}function _s(f,g,x){f.push(g,x.W)}function Uo(f,g,x,R){var F=Do(R),k=lr(R).P,V=x.W;f.push(g,function(tt,gt,Ut){return V(tt,gt,Ut,k,F)})}function No(f,g,x,R,F,k){var V=vs(R,k),tt=x.W;f.push(g,function(gt,Ut,Vt){return tt(gt,Ut,Vt,R,V)})}function lr(f){var g=f[Oa];return g||(g=kl(f,f[Oa]=[],Fu,_s,Uo,No),Gi in f&&Oa in f&&(f.length=0),g)}var Gi=Symbol();function Xl(f,g){f[0]=g}function Lo(f,g,x,R){var F=x.U;f[g]=R?function(k,V,tt){return F(k,V,tt,R)}:F}function jl(f,g,x,R,F){var k=x.U,V=xn(R),tt=wi(R).P;f[g]=function(gt,Ut,Vt){return k(gt,Ut,Vt,tt,V,F)}}function Pa(f,g,x,R,F,k,V){var tt=x.U,gt=Hn(R,F,k);f[g]=function(Ut,Vt,Se){return tt(Ut,Vt,Se,R,gt,V)}}function wi(f){var g=f[Gi];return g||(g=kl(f,f[Gi]={},Xl,Lo,jl,Pa),Gi in f&&Oa in f&&(f.length=0),g)}function xs(f,g,x){for(;je(g)&&g.i!=4;){var R=g.l,F=x[R];if(!F){var k=x[0];k&&(k=k[R])&&(F=x[R]=Kr(k))}if(!F||!F(g,f,R)){F=g,R=f,k=F.j,ze(F);var V=F;if(!V.ca){if(F=V.h.h-k,V.h.h=k,V=V.h,F==0)F=kt();else{if(k=Ft(V,F),V.S&&V.m)F=V.i.subarray(k,k+F);else{V=V.i;var tt=k;F=k+F,F=tt===F?Kt():tn?V.slice(tt,F):new Uint8Array(V.subarray(tt,F))}F=F.length==0?kt():new Lt(F,ge)}(k=R.R)?k.push(F):R.R=[F]}}}return f}function Qr(f,g,x){for(var R=x.length,F=R%2==1,k=F?1:0;k<R;k+=2)(0,x[k+1])(g,f,x[k]);nn(f,g,F?x[0]:void 0)}function yi(f,g){return{U:f,W:g}}var fi=yi(function(f,g,x){if(f.i!==5)return!1;f=f.h;var R=f.i,F=f.h,k=R[F],V=R[F+1],tt=R[F+2];return R=R[F+3],$(f,f.h+4),V=(k<<0|V<<8|tt<<16|R<<24)>>>0,f=2*(V>>31)+1,k=V>>>23&255,V&=8388607,pt(g,x,k==255?V?NaN:1/0*f:k==0?f*Math.pow(2,-149)*V:f*Math.pow(2,k-150)*(V+Math.pow(2,23))),!0},function(f,g,x){if(g=zt(g,x),g!=null){$t(f.h,8*x+5),f=f.h;var R=+g;R===0?0<1/R?j=Ae=0:(Ae=0,j=2147483648):isNaN(R)?(Ae=0,j=2147483647):(R=(x=0>R?-2147483648:0)?-R:R,34028234663852886e22<R?(Ae=0,j=(x|2139095040)>>>0):11754943508222875e-54>R?(R=Math.round(R/Math.pow(2,-149)),Ae=0,j=(x|R)>>>0):(g=Math.floor(Math.log(R)/Math.LN2),R*=Math.pow(2,-g),R=Math.round(8388608*R),16777216<=R&&++g,Ae=0,j=(x|g+127<<23|R&8388607)>>>0)),x=j,f.h.push(x>>>0&255),f.h.push(x>>>8&255),f.h.push(x>>>16&255),f.h.push(x>>>24&255)}}),ys=yi(function(f,g,x){if(f.i!==0)return!1;var R=f.h,F=0,k=f=0,V=R.i,tt=R.h;do{var gt=V[tt++];F|=(gt&127)<<k,k+=7}while(32>k&&gt&128);for(32<k&&(f|=(gt&127)>>4),k=3;32>k&&gt&128;k+=7)gt=V[tt++],f|=(gt&127)<<k;if($(R,tt),128>gt)R=F>>>0,gt=f>>>0,(f=gt&2147483648)&&(R=~R+1>>>0,gt=~gt>>>0,R==0&&(gt=gt+1>>>0)),R=4294967296*gt+(R>>>0);else throw rn();return pt(g,x,f?-R:R),!0},function(f,g,x){g=it(g,x),g!=null&&(typeof g=="string"&&ie(g),g!=null&&($t(f.h,8*x),typeof g=="number"?(f=f.h,Ee(g),Ct(f,j,Ae)):(x=ie(g),Ct(f.h,x.i,x.h))))}),Wl=yi(function(f,g,x){return f.i!==0?!1:(pt(g,x,Ot(f.h)),!0)},function(f,g,x){if(g=it(g,x),g!=null&&g!=null)if($t(f.h,8*x),f=f.h,x=g,0<=x)$t(f,x);else{for(g=0;9>g;g++)f.h.push(x&127|128),x>>=7;f.h.push(1)}}),za=yi(function(f,g,x){if(f.i!==2)return!1;var R=Ot(f.h)>>>0;f=f.h;var F=Ft(f,R);if(f=f.i,yt){var k=f,V;(V=Rt)||(V=Rt=new TextDecoder("utf-8",{fatal:!0})),f=F+R,k=F===0&&f===k.length?k:k.subarray(F,f);try{var tt=V.decode(k)}catch(Se){if(Et===void 0){try{V.decode(new Uint8Array([128]))}catch{}try{V.decode(new Uint8Array([97])),Et=!0}catch{Et=!1}}throw!Et&&(Rt=void 0),Se}}else{tt=F,R=tt+R,F=[];for(var gt=null,Ut,Vt;tt<R;)Ut=f[tt++],128>Ut?F.push(Ut):224>Ut?tt>=R?w():(Vt=f[tt++],194>Ut||(Vt&192)!==128?(tt--,w()):F.push((Ut&31)<<6|Vt&63)):240>Ut?tt>=R-1?w():(Vt=f[tt++],(Vt&192)!==128||Ut===224&&160>Vt||Ut===237&&160<=Vt||((k=f[tt++])&192)!==128?(tt--,w()):F.push((Ut&15)<<12|(Vt&63)<<6|k&63)):244>=Ut?tt>=R-2?w():(Vt=f[tt++],(Vt&192)!==128||(Ut<<28)+(Vt-144)>>30!==0||((k=f[tt++])&192)!==128||((V=f[tt++])&192)!==128?(tt--,w()):(Ut=(Ut&7)<<18|(Vt&63)<<12|(k&63)<<6|V&63,Ut-=65536,F.push((Ut>>10&1023)+55296,(Ut&1023)+56320))):w(),8192<=F.length&&(gt=ft(gt,F),F.length=0);tt=ft(gt,F)}return pt(g,x,tt),!0},function(f,g,x){if(g=it(g,x),g!=null){var R=!1;if(R=R===void 0?!1:R,Bt){if(R&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(g))throw Error("Found an unpaired surrogate");g=(Wt||(Wt=new TextEncoder)).encode(g)}else{for(var F=0,k=new Uint8Array(3*g.length),V=0;V<g.length;V++){var tt=g.charCodeAt(V);if(128>tt)k[F++]=tt;else{if(2048>tt)k[F++]=tt>>6|192;else{if(55296<=tt&&57343>=tt){if(56319>=tt&&V<g.length){var gt=g.charCodeAt(++V);if(56320<=gt&&57343>=gt){tt=1024*(tt-55296)+gt-56320+65536,k[F++]=tt>>18|240,k[F++]=tt>>12&63|128,k[F++]=tt>>6&63|128,k[F++]=tt&63|128;continue}else V--}if(R)throw Error("Found an unpaired surrogate");tt=65533}k[F++]=tt>>12|224,k[F++]=tt>>6&63|128}k[F++]=tt&63|128}}g=F===k.length?k:k.subarray(0,F)}$t(f.h,8*x+2),$t(f.h,g.length),vn(f,f.h.end()),vn(f,g)}}),Ia=yi(function(f,g,x,R,F){if(f.i!==2)return!1;g=de(g,x,R),x=f.h.j,R=Ot(f.h)>>>0;var k=f.h.h+R,V=k-x;if(0>=V&&(f.h.j=k,F(g,f,void 0,void 0,void 0),V=k-f.h.h),V)throw Error("Message parsing ended unexpectedly. Expected to read "+(R+" bytes, instead read "+(R-V)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return f.h.h=k,f.h.j=x,!0},function(f,g,x,R,F){if(g=te(g,R,x),g!=null)for(R=0;R<g.length;R++){var k=f;$t(k.h,8*x+2);var V=k.h.end();vn(k,V),V.push(k.i),k=V,F(g[R],f),V=f;var tt=k.pop();for(tt=V.i+V.h.length()-tt;127<tt;)k.push(tt&127|128),tt>>>=7,V.i++;k.push(tt),V.i++}});function Ss(f){return function(g,x){t:{if(ri.length){var R=ri.pop();R.setOptions(x),Te(R.h,g,x),g=R}else g=new _e(g,x);try{var F=wi(f),k=xs(new F.P,g,F);break t}finally{F=g.h,F.i=null,F.m=!1,F.l=0,F.j=0,F.h=0,F.S=!1,g.l=-1,g.i=-1,100>ri.length&&ri.push(g)}k=void 0}return k}}function qn(f){return function(){var g=new wn;Qr(this,g,lr(f)),vn(g,g.h.end());for(var x=new Uint8Array(g.i),R=g.j,F=R.length,k=0,V=0;V<F;V++){var tt=R[V];x.set(tt,k),k+=tt.length}return g.j=[x],x}}function Si(f){en.call(this,f)}b(Si,en);var Ba=[Si,1,Wl,2,fi,3,za,4,za];Si.prototype.l=qn(Ba);function Mr(f){en.call(this,f,-1,Hu)}b(Mr,en),Mr.prototype.addClassification=function(f,g){return de(this,1,Si,f,g),this};var Hu=[1],Ms=Ss([Mr,1,Ia,Ba]);function cr(f){en.call(this,f)}b(cr,en);var Jr=[cr,1,fi,2,fi,3,fi,4,fi,5,fi];cr.prototype.l=qn(Jr);function Fa(f){en.call(this,f,-1,ql)}b(Fa,en);var ql=[1],Yl=Ss([Fa,1,Ia,Jr]);function Es(f){en.call(this,f)}b(Es,en);var Zl=[Es,1,fi,2,fi,3,fi,4,fi,5,fi,6,ys],Oo=Ss(Zl);Es.prototype.l=qn(Zl);function Kl(f,g,x){if(x=f.createShader(x===0?f.VERTEX_SHADER:f.FRAGMENT_SHADER),f.shaderSource(x,g),f.compileShader(x),!f.getShaderParameter(x,f.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+f.getShaderInfoLog(x));return x}function Ql(f){return te(f,Si,1).map(function(g){var x=it(g,1);return{index:x??0,score:ee(g,2),label:it(g,3)!=null?me(it(g,3),""):void 0,displayName:it(g,4)!=null?me(it(g,4),""):void 0}})}function Jl(f){return{x:ee(f,1),y:ee(f,2),z:ee(f,3),visibility:zt(f,4)!=null?ee(f,4):void 0}}function $l(f){return f.map(function(g){return te(Yl(g),cr,1).map(Jl)})}function Po(f,g){this.i=f,this.h=g,this.m=0}function zo(f,g,x){return Gu(f,g),typeof f.h.canvas.transferToImageBitmap=="function"?Promise.resolve(f.h.canvas.transferToImageBitmap()):x?Promise.resolve(f.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(f.h.canvas):(f.j===void 0&&(f.j=document.createElement("canvas")),new Promise(function(R){f.j.height=f.h.canvas.height,f.j.width=f.h.canvas.width,f.j.getContext("2d",{}).drawImage(f.h.canvas,0,0,f.h.canvas.width,f.h.canvas.height),R(f.j)}))}function Gu(f,g){var x=f.h;if(f.s===void 0){var R=Kl(x,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),F=Kl(x,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),k=x.createProgram();if(x.attachShader(k,R),x.attachShader(k,F),x.linkProgram(k),!x.getProgramParameter(k,x.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+x.getProgramInfoLog(k));R=f.s=k,x.useProgram(R),F=x.getUniformLocation(R,"sampler0"),f.l={O:x.getAttribLocation(R,"aVertex"),N:x.getAttribLocation(R,"aTex"),xa:F},f.v=x.createBuffer(),x.bindBuffer(x.ARRAY_BUFFER,f.v),x.enableVertexAttribArray(f.l.O),x.vertexAttribPointer(f.l.O,2,x.FLOAT,!1,0,0),x.bufferData(x.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),x.STATIC_DRAW),x.bindBuffer(x.ARRAY_BUFFER,null),f.u=x.createBuffer(),x.bindBuffer(x.ARRAY_BUFFER,f.u),x.enableVertexAttribArray(f.l.N),x.vertexAttribPointer(f.l.N,2,x.FLOAT,!1,0,0),x.bufferData(x.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),x.STATIC_DRAW),x.bindBuffer(x.ARRAY_BUFFER,null),x.uniform1i(F,0)}R=f.l,x.useProgram(f.s),x.canvas.width=g.width,x.canvas.height=g.height,x.viewport(0,0,g.width,g.height),x.activeTexture(x.TEXTURE0),f.i.bindTexture2d(g.glName),x.enableVertexAttribArray(R.O),x.bindBuffer(x.ARRAY_BUFFER,f.v),x.vertexAttribPointer(R.O,2,x.FLOAT,!1,0,0),x.enableVertexAttribArray(R.N),x.bindBuffer(x.ARRAY_BUFFER,f.u),x.vertexAttribPointer(R.N,2,x.FLOAT,!1,0,0),x.bindFramebuffer(x.DRAW_FRAMEBUFFER?x.DRAW_FRAMEBUFFER:x.FRAMEBUFFER,null),x.clearColor(0,0,0,0),x.clear(x.COLOR_BUFFER_BIT),x.colorMask(!0,!0,!0,!0),x.drawArrays(x.TRIANGLE_FAN,0,4),x.disableVertexAttribArray(R.O),x.disableVertexAttribArray(R.N),x.bindBuffer(x.ARRAY_BUFFER,null),f.i.bindTexture2d(0)}function Vu(f){this.h=f}var ku=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Xu(f,g){return g+f}function bs(f,g){window[f]=g}function ju(f){var g=document.createElement("script");return g.setAttribute("src",f),g.setAttribute("crossorigin","anonymous"),new Promise(function(x){g.addEventListener("load",function(){x()},!1),g.addEventListener("error",function(){x()},!1),document.body.appendChild(g)})}function Wu(){return L(function(f){switch(f.h){case 1:return f.s=2,z(f,WebAssembly.instantiate(ku),4);case 4:f.h=3,f.s=0;break;case 2:return f.s=0,f.l=null,f.return(!1);case 3:return f.return(!0)}})}function Io(f){if(this.h=f,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=f&&f.locateFile||Xu,typeof window=="object")var g=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")g=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=g,f.options){g=p(Object.keys(f.options));for(var x=g.next();!x.done;x=g.next()){x=x.value;var R=f.options[x].default;R!==void 0&&(this.l[x]=typeof R=="function"?R():R)}}}s=Io.prototype,s.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function tc(f){var g,x,R,F,k,V,tt,gt,Ut,Vt,Se;return L(function(ue){switch(ue.h){case 1:return f.ga?(g=f.h.files===void 0?[]:typeof f.h.files=="function"?f.h.files(f.l):f.h.files,z(ue,Wu(),2)):ue.return();case 2:if(x=ue.i,typeof window=="object")return bs("createMediapipeSolutionsWasm",{locateFile:f.locateFile}),bs("createMediapipeSolutionsPackedAssets",{locateFile:f.locateFile}),V=g.filter(function(Yt){return Yt.data!==void 0}),tt=g.filter(function(Yt){return Yt.data===void 0}),gt=Promise.all(V.map(function(Yt){var xe=Ts(f,Yt.url);if(Yt.path!==void 0){var we=Yt.path;xe=xe.then(function(Qe){return f.overrideFile(we,Qe),Promise.resolve(Qe)})}return xe})),Ut=Promise.all(tt.map(function(Yt){return Yt.simd===void 0||Yt.simd&&x||!Yt.simd&&!x?ju(f.locateFile(Yt.url,f.ha)):Promise.resolve()})).then(function(){var Yt,xe,we;return L(function(Qe){if(Qe.h==1)return Yt=window.createMediapipeSolutionsWasm,xe=window.createMediapipeSolutionsPackedAssets,we=f,z(Qe,Yt(xe),2);we.i=Qe.i,Qe.h=0})}),Vt=function(){return L(function(Yt){return f.h.graph&&f.h.graph.url?Yt=z(Yt,Ts(f,f.h.graph.url),0):(Yt.h=0,Yt=void 0),Yt})}(),z(ue,Promise.all([Ut,gt,Vt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return R=g.filter(function(Yt){return Yt.simd===void 0||Yt.simd&&x||!Yt.simd&&!x}).map(function(Yt){return f.locateFile(Yt.url,f.ha)}),importScripts.apply(null,v(R)),F=f,z(ue,createMediapipeSolutionsWasm(Module),6);case 6:F.i=ue.i,f.m=new OffscreenCanvas(1,1),f.i.canvas=f.m,k=f.i.GL.createContext(f.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),f.i.GL.makeContextCurrent(k),ue.h=4;break;case 7:if(f.m=document.createElement("canvas"),Se=f.m.getContext("webgl2",{}),!Se&&(Se=f.m.getContext("webgl",{}),!Se))return alert("Failed to create WebGL canvas context when passing video frame."),ue.return();f.K=Se,f.i.canvas=f.m,f.i.createContext(f.m,!0,!0,{});case 4:f.j=new f.i.SolutionWasm,f.ga=!1,ue.h=0}})}function qu(f){var g,x,R,F,k,V,tt,gt;return L(function(Ut){if(Ut.h==1){if(f.h.graph&&f.h.graph.url&&f.fa===f.h.graph.url)return Ut.return();if(f.u=!0,!f.h.graph||!f.h.graph.url){Ut.h=2;return}return f.fa=f.h.graph.url,z(Ut,Ts(f,f.h.graph.url),3)}for(Ut.h!=2&&(g=Ut.i,f.j.loadGraph(g)),x=p(Object.keys(f.D)),R=x.next();!R.done;R=x.next())F=R.value,f.j.overrideFile(F,f.D[F]);if(f.D={},f.h.listeners)for(k=p(f.h.listeners),V=k.next();!V.done;V=k.next())tt=V.value,Qu(f,tt);gt=f.l,f.l={},f.setOptions(gt),Ut.h=0})}s.reset=function(){var f=this;return L(function(g){f.j&&(f.j.reset(),f.s={},f.v={}),g.h=0})},s.setOptions=function(f,g){var x=this;if(g=g||this.h.options){for(var R=[],F=[],k={},V=p(Object.keys(f)),tt=V.next();!tt.done;k={X:k.X,Y:k.Y},tt=V.next())if(tt=tt.value,!(tt in this.l&&this.l[tt]===f[tt])){this.l[tt]=f[tt];var gt=g[tt];gt!==void 0&&(gt.onChange&&(k.X=gt.onChange,k.Y=f[tt],R.push(function(Ut){return function(){var Vt;return L(function(Se){if(Se.h==1)return z(Se,Ut.X(Ut.Y),2);Vt=Se.i,Vt===!0&&(x.u=!0),Se.h=0})}}(k))),gt.graphOptionXref&&(tt=Object.assign({},{calculatorName:"",calculatorIndex:0},gt.graphOptionXref,{valueNumber:gt.type===1?f[tt]:0,valueBoolean:gt.type===0?f[tt]:!1,valueString:gt.type===2?f[tt]:""}),F.push(tt)))}(R.length!==0||F.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(F),this.F=(this.F===void 0?[]:this.F).concat(R))}};function Yu(f){var g,x,R,F,k,V,tt;return L(function(gt){switch(gt.h){case 1:if(!f.u)return gt.return();if(!f.F){gt.h=2;break}g=p(f.F),x=g.next();case 3:if(x.done){gt.h=5;break}return R=x.value,z(gt,R(),4);case 4:x=g.next(),gt.h=3;break;case 5:f.F=void 0;case 2:if(f.H){for(F=new f.i.GraphOptionChangeRequestList,k=p(f.H),V=k.next();!V.done;V=k.next())tt=V.value,F.push_back(tt);f.j.changeOptions(F),F.delete(),f.H=void 0}f.u=!1,gt.h=0}})}s.initialize=function(){var f=this;return L(function(g){return g.h==1?z(g,tc(f),2):g.h!=3?z(g,qu(f),3):z(g,Yu(f),0)})};function Ts(f,g){var x,R;return L(function(F){return g in f.L?F.return(f.L[g]):(x=f.locateFile(g,""),R=fetch(x).then(function(k){return k.arrayBuffer()}),f.L[g]=R,F.return(R))})}s.overrideFile=function(f,g){this.j?this.j.overrideFile(f,g):this.D[f]=g},s.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},s.send=function(f,g){var x=this,R,F,k,V,tt,gt,Ut,Vt,Se;return L(function(ue){switch(ue.h){case 1:return x.h.inputs?(R=1e3*(g??performance.now()),z(ue,x.I,2)):ue.return();case 2:return z(ue,x.initialize(),3);case 3:for(F=new x.i.PacketDataList,k=p(Object.keys(f)),V=k.next();!V.done;V=k.next())if(tt=V.value,gt=x.h.inputs[tt]){t:{var Yt=f[tt];switch(gt.type){case"video":var xe=x.s[gt.stream];if(xe||(xe=new Po(x.i,x.K),x.s[gt.stream]=xe),xe.m===0&&(xe.m=xe.i.createTexture()),typeof HTMLVideoElement<"u"&&Yt instanceof HTMLVideoElement)var we=Yt.videoWidth,Qe=Yt.videoHeight;else typeof HTMLImageElement<"u"&&Yt instanceof HTMLImageElement?(we=Yt.naturalWidth,Qe=Yt.naturalHeight):(we=Yt.width,Qe=Yt.height);Qe={glName:xe.m,width:we,height:Qe},we=xe.h,we.canvas.width=Qe.width,we.canvas.height=Qe.height,we.activeTexture(we.TEXTURE0),xe.i.bindTexture2d(xe.m),we.texImage2D(we.TEXTURE_2D,0,we.RGBA,we.RGBA,we.UNSIGNED_BYTE,Yt),xe.i.bindTexture2d(0),xe=Qe;break t;case"detections":for(xe=x.s[gt.stream],xe||(xe=new Vu(x.i),x.s[gt.stream]=xe),xe.data||(xe.data=new xe.h.DetectionListData),xe.data.reset(Yt.length),Qe=0;Qe<Yt.length;++Qe){we=Yt[Qe];var un=xe.data,bn=un.setBoundingBox,hi=Qe,$n=we.la,Ge=new Es;if(Ht(Ge,1,$n.ra),Ht(Ge,2,$n.sa),Ht(Ge,3,$n.height),Ht(Ge,4,$n.width),Ht(Ge,5,$n.rotation),pt(Ge,6,$n.pa),$n=Ge.l(),bn.call(un,hi,$n),we.ea)for(un=0;un<we.ea.length;++un){Ge=we.ea[un],bn=xe.data,hi=bn.addNormalizedLandmark,$n=Qe,Ge=Object.assign({},Ge,{visibility:Ge.visibility?Ge.visibility:0});var Dn=new cr;Ht(Dn,1,Ge.x),Ht(Dn,2,Ge.y),Ht(Dn,3,Ge.z),Ge.visibility&&Ht(Dn,4,Ge.visibility),Ge=Dn.l(),hi.call(bn,$n,Ge)}if(we.ba)for(un=0;un<we.ba.length;++un)bn=xe.data,hi=bn.addClassification,$n=Qe,Ge=we.ba[un],Dn=new Si,Ht(Dn,2,Ge.score),Ge.index&&pt(Dn,1,Ge.index),Ge.label&&pt(Dn,3,Ge.label),Ge.displayName&&pt(Dn,4,Ge.displayName),Ge=Dn.l(),hi.call(bn,$n,Ge)}xe=xe.data;break t;default:xe={}}}switch(Ut=xe,Vt=gt.stream,gt.type){case"video":F.pushTexture2d(Object.assign({},Ut,{stream:Vt,timestamp:R}));break;case"detections":Se=Ut,Se.stream=Vt,Se.timestamp=R,F.pushDetectionList(Se);break;default:throw Error("Unknown input config type: '"+gt.type+"'")}}return x.j.send(F),z(ue,x.I,4);case 4:F.delete(),ue.h=0}})};function Zu(f,g,x){var R,F,k,V,tt,gt,Ut,Vt,Se,ue,Yt,xe,we,Qe;return L(function(un){switch(un.h){case 1:if(!x)return un.return(g);for(R={},F=0,k=p(Object.keys(x)),V=k.next();!V.done;V=k.next())tt=V.value,gt=x[tt],typeof gt!="string"&&gt.type==="texture"&&g[gt.stream]!==void 0&&++F;1<F&&(f.M=!1),Ut=p(Object.keys(x)),V=Ut.next();case 2:if(V.done){un.h=4;break}if(Vt=V.value,Se=x[Vt],typeof Se=="string")return we=R,Qe=Vt,z(un,Ku(f,Vt,g[Se]),14);if(ue=g[Se.stream],Se.type==="detection_list"){if(ue){for(var bn=ue.getRectList(),hi=ue.getLandmarksList(),$n=ue.getClassificationsList(),Ge=[],Dn=0;Dn<bn.size();++Dn){var Ji=Oo(bn.get(Dn)),ic=ee(Ji,1),rc=ee(Ji,2),Ju=ee(Ji,3),$u=ee(Ji,4),tf=ee(Ji,5,0),As=void 0;As=As===void 0?0:As,Ji={la:{ra:ic,sa:rc,height:Ju,width:$u,rotation:tf,pa:me(it(Ji,6),As)},ea:te(Yl(hi.get(Dn)),cr,1).map(Jl),ba:Ql(Ms($n.get(Dn)))},Ge.push(Ji)}bn=Ge}else bn=[];R[Vt]=bn,un.h=7;break}if(Se.type==="proto_list"){if(ue){for(bn=Array(ue.size()),hi=0;hi<ue.size();hi++)bn[hi]=ue.get(hi);ue.delete()}else bn=[];R[Vt]=bn,un.h=7;break}if(ue===void 0){un.h=3;break}if(Se.type==="float_list"){R[Vt]=ue,un.h=7;break}if(Se.type==="proto"){R[Vt]=ue,un.h=7;break}if(Se.type!=="texture")throw Error("Unknown output config type: '"+Se.type+"'");return Yt=f.v[Vt],Yt||(Yt=new Po(f.i,f.K),f.v[Vt]=Yt),z(un,zo(Yt,ue,f.M),13);case 13:xe=un.i,R[Vt]=xe;case 7:Se.transform&&R[Vt]&&(R[Vt]=Se.transform(R[Vt])),un.h=3;break;case 14:we[Qe]=un.i;case 3:V=Ut.next(),un.h=2;break;case 4:return un.return(R)}})}function Ku(f,g,x){var R;return L(function(F){return typeof x=="number"||x instanceof Uint8Array||x instanceof f.i.Uint8BlobList?F.return(x):x instanceof f.i.Texture2dDataOut?(R=f.v[g],R||(R=new Po(f.i,f.K),f.v[g]=R),F.return(zo(R,x,f.M))):F.return(void 0)})}function Qu(f,g){for(var x=g.name||"$",R=[].concat(v(g.wants)),F=new f.i.StringList,k=p(g.wants),V=k.next();!V.done;V=k.next())F.push_back(V.value);k=f.i.PacketListener.implement({onResults:function(tt){for(var gt={},Ut=0;Ut<g.wants.length;++Ut)gt[R[Ut]]=tt.get(Ut);var Vt=f.listeners[x];Vt&&(f.I=Zu(f,gt,g.outs).then(function(Se){Se=Vt(Se);for(var ue=0;ue<g.wants.length;++ue){var Yt=gt[R[ue]];typeof Yt=="object"&&Yt.hasOwnProperty&&Yt.hasOwnProperty("delete")&&Yt.delete()}Se&&(f.I=Se)}))}}),f.j.attachMultiListener(F,k),F.delete()}s.onResults=function(f,g){this.listeners[g||"$"]=f},ot("Solution",Io),ot("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function ec(f){return f===void 0&&(f=0),f===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function nc(f){var g=this;f=f||{},this.h=new Io({locateFile:f.locateFile,files:function(x){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:ec(x.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:$l},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:$l},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(x){return x.map(function(R){return Ql(Ms(R))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(x){var R,F,k;return L(function(V){return V.h==1?(R=ec(x),F="third_party/mediapipe/modules/hand_landmark/"+R,z(V,Ts(g.h,R),2)):(k=V.i,g.h.overrideFile(F,k),V.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}s=nc.prototype,s.close=function(){return this.h.close(),Promise.resolve()},s.onResults=function(f){this.h.onResults(f)},s.initialize=function(){var f=this;return L(function(g){return z(g,f.h.initialize(),0)})},s.reset=function(){this.h.reset()},s.send=function(f){var g=this;return L(function(x){return z(x,g.h.send(f),0)})},s.setOptions=function(f){this.h.setOptions(f)},ot("Hands",nc),ot("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),ot("VERSION","0.4.1675469240")}).call(Dd)),Dd}var a_=DA(),Ud={},s_;function UA(){return s_||(s_=1,(function(){function s(T){var L=0;return function(){return L<T.length?{done:!1,value:T[L++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(T,L,J){return T==Array.prototype||T==Object.prototype||(T[L]=J.value),T};function i(T){T=[typeof globalThis=="object"&&globalThis,T,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nu=="object"&&Nu];for(var L=0;L<T.length;++L){var J=T[L];if(J&&J.Math==Math)return J}throw Error("Cannot find global object")}var a=i(this);function l(T,L){if(L)t:{var J=a;T=T.split(".");for(var nt=0;nt<T.length-1;nt++){var dt=T[nt];if(!(dt in J))break t;J=J[dt]}T=T[T.length-1],nt=J[T],L=L(nt),L!=nt&&L!=null&&t(J,T,{configurable:!0,writable:!0,value:L})}}l("Symbol",function(T){function L(ot){if(this instanceof L)throw new TypeError("Symbol is not a constructor");return new J(nt+(ot||"")+"_"+dt++,ot)}function J(ot,N){this.g=ot,t(this,"description",{configurable:!0,writable:!0,value:N})}if(T)return T;J.prototype.toString=function(){return this.g};var nt="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",dt=0;return L}),l("Symbol.iterator",function(T){if(T)return T;T=Symbol("Symbol.iterator");for(var L="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),J=0;J<L.length;J++){var nt=a[L[J]];typeof nt=="function"&&typeof nt.prototype[T]!="function"&&t(nt.prototype,T,{configurable:!0,writable:!0,value:function(){return c(s(this))}})}return T});function c(T){return T={next:T},T[Symbol.iterator]=function(){return this},T}function d(T){var L=typeof Symbol<"u"&&Symbol.iterator&&T[Symbol.iterator];return L?L.call(T):{next:s(T)}}function p(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function v(T){if(T.i)throw new TypeError("Generator is already running");T.i=!0}p.prototype.l=function(T){this.o=T};function m(T,L){T.h={F:L,G:!0},T.j=T.m}p.prototype.return=function(T){this.h={return:T},this.j=this.m};function _(T){this.g=new p,this.h=T}function S(T,L){v(T.g);var J=T.g.g;return J?M(T,"return"in J?J.return:function(nt){return{value:nt,done:!0}},L,T.g.return):(T.g.return(L),A(T))}function M(T,L,J,nt){try{var dt=L.call(T.g.g,J);if(!(dt instanceof Object))throw new TypeError("Iterator result "+dt+" is not an object");if(!dt.done)return T.g.i=!1,dt;var ot=dt.value}catch(N){return T.g.g=null,m(T.g,N),A(T)}return T.g.g=null,nt.call(T.g,ot),A(T)}function A(T){for(;T.g.j;)try{var L=T.h(T.g);if(L)return T.g.i=!1,{value:L.value,done:!1}}catch(J){T.g.o=void 0,m(T.g,J)}if(T.g.i=!1,T.g.h){if(L=T.g.h,T.g.h=null,L.G)throw L.F;return{value:L.return,done:!0}}return{value:void 0,done:!0}}function D(T){this.next=function(L){return v(T.g),T.g.g?L=M(T,T.g.g.next,L,T.g.l):(T.g.l(L),L=A(T)),L},this.throw=function(L){return v(T.g),T.g.g?L=M(T,T.g.g.throw,L,T.g.l):(m(T.g,L),L=A(T)),L},this.return=function(L){return S(T,L)},this[Symbol.iterator]=function(){return this}}function P(T){function L(nt){return T.next(nt)}function J(nt){return T.throw(nt)}return new Promise(function(nt,dt){function ot(N){N.done?nt(N.value):Promise.resolve(N.value).then(L,J).then(ot,dt)}ot(T.next())})}l("Promise",function(T){function L(N){this.h=0,this.i=void 0,this.g=[],this.o=!1;var H=this.j();try{N(H.resolve,H.reject)}catch(B){H.reject(B)}}function J(){this.g=null}function nt(N){return N instanceof L?N:new L(function(H){H(N)})}if(T)return T;J.prototype.h=function(N){if(this.g==null){this.g=[];var H=this;this.i(function(){H.l()})}this.g.push(N)};var dt=a.setTimeout;J.prototype.i=function(N){dt(N,0)},J.prototype.l=function(){for(;this.g&&this.g.length;){var N=this.g;this.g=[];for(var H=0;H<N.length;++H){var B=N[H];N[H]=null;try{B()}catch(lt){this.j(lt)}}}this.g=null},J.prototype.j=function(N){this.i(function(){throw N})},L.prototype.j=function(){function N(lt){return function(I){B||(B=!0,lt.call(H,I))}}var H=this,B=!1;return{resolve:N(this.A),reject:N(this.l)}},L.prototype.A=function(N){if(N===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(N instanceof L)this.C(N);else{t:switch(typeof N){case"object":var H=N!=null;break t;case"function":H=!0;break t;default:H=!1}H?this.v(N):this.m(N)}},L.prototype.v=function(N){var H=void 0;try{H=N.then}catch(B){this.l(B);return}typeof H=="function"?this.D(H,N):this.m(N)},L.prototype.l=function(N){this.u(2,N)},L.prototype.m=function(N){this.u(1,N)},L.prototype.u=function(N,H){if(this.h!=0)throw Error("Cannot settle("+N+", "+H+"): Promise already settled in state"+this.h);this.h=N,this.i=H,this.h===2&&this.B(),this.H()},L.prototype.B=function(){var N=this;dt(function(){if(N.I()){var H=a.console;typeof H<"u"&&H.error(N.i)}},1)},L.prototype.I=function(){if(this.o)return!1;var N=a.CustomEvent,H=a.Event,B=a.dispatchEvent;return typeof B>"u"?!0:(typeof N=="function"?N=new N("unhandledrejection",{cancelable:!0}):typeof H=="function"?N=new H("unhandledrejection",{cancelable:!0}):(N=a.document.createEvent("CustomEvent"),N.initCustomEvent("unhandledrejection",!1,!0,N)),N.promise=this,N.reason=this.i,B(N))},L.prototype.H=function(){if(this.g!=null){for(var N=0;N<this.g.length;++N)ot.h(this.g[N]);this.g=null}};var ot=new J;return L.prototype.C=function(N){var H=this.j();N.s(H.resolve,H.reject)},L.prototype.D=function(N,H){var B=this.j();try{N.call(H,B.resolve,B.reject)}catch(lt){B.reject(lt)}},L.prototype.then=function(N,H){function B(bt,Mt){return typeof bt=="function"?function(Nt){try{lt(bt(Nt))}catch(jt){I(jt)}}:Mt}var lt,I,rt=new L(function(bt,Mt){lt=bt,I=Mt});return this.s(B(N,lt),B(H,I)),rt},L.prototype.catch=function(N){return this.then(void 0,N)},L.prototype.s=function(N,H){function B(){switch(lt.h){case 1:N(lt.i);break;case 2:H(lt.i);break;default:throw Error("Unexpected state: "+lt.h)}}var lt=this;this.g==null?ot.h(B):this.g.push(B),this.o=!0},L.resolve=nt,L.reject=function(N){return new L(function(H,B){B(N)})},L.race=function(N){return new L(function(H,B){for(var lt=d(N),I=lt.next();!I.done;I=lt.next())nt(I.value).s(H,B)})},L.all=function(N){var H=d(N),B=H.next();return B.done?nt([]):new L(function(lt,I){function rt(Nt){return function(jt){bt[Nt]=jt,Mt--,Mt==0&&lt(bt)}}var bt=[],Mt=0;do bt.push(void 0),Mt++,nt(B.value).s(rt(bt.length-1),I),B=H.next();while(!B.done)})},L});var b=typeof Object.assign=="function"?Object.assign:function(T,L){for(var J=1;J<arguments.length;J++){var nt=arguments[J];if(nt)for(var dt in nt)Object.prototype.hasOwnProperty.call(nt,dt)&&(T[dt]=nt[dt])}return T};l("Object.assign",function(T){return T||b});var y=this||self,Z={facingMode:"user",width:640,height:480};function X(T,L){this.video=T,this.i=0,this.h=Object.assign(Object.assign({},Z),L)}X.prototype.stop=function(){var T=this,L,J,nt,dt;return P(new D(new _(function(ot){if(T.g){for(L=T.g.getTracks(),J=d(L),nt=J.next();!nt.done;nt=J.next())dt=nt.value,dt.stop();T.g=void 0}ot.j=0})))},X.prototype.start=function(){var T=this,L;return P(new D(new _(function(J){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),L=T.h,J.return(navigator.mediaDevices.getUserMedia({video:{facingMode:L.facingMode,width:L.width,height:L.height}}).then(function(nt){q(T,nt)}).catch(function(nt){var dt="Failed to acquire camera feed: "+nt;throw console.error(dt),alert(dt),nt}))})))};function z(T){window.requestAnimationFrame(function(){Q(T)})}function q(T,L){T.g=L,T.video.srcObject=L,T.video.onloadedmetadata=function(){T.video.play(),z(T)}}function Q(T){var L=null;T.video.paused||T.video.currentTime===T.i||(T.i=T.video.currentTime,L=T.h.onFrame()),L?L.then(function(){z(T)}):z(T)}var K=["Camera"],W=y;K[0]in W||typeof W.execScript>"u"||W.execScript("var "+K[0]);for(var O;K.length&&(O=K.shift());)K.length||X===void 0?W[O]&&W[O]!==Object.prototype[O]?W=W[O]:W=W[O]={}:W[O]=X}).call(Ud)),Ud}var NA=UA();function LA({watchModel:s,onClose:t}){const[i,a]=He.useState(!0),[l,c]=He.useState(null),[d,p]=He.useState(!1),[v,m]=He.useState(!1),[_,S]=He.useState(!1),M=He.useRef(null),A=He.useRef(null),D=He.useRef(null),P=He.useRef(null),b=He.useRef(null),y=He.useRef(null),Z=He.useRef(null),X=He.useRef(null),z=He.useRef(null),q=He.useRef(null),Q=He.useRef({x:0,y:0,z:0});He.useEffect(()=>(W(),()=>{K()}),[]);const K=()=>{q.current&&cancelAnimationFrame(q.current),z.current&&z.current.stop(),X.current&&X.current.close(),y.current&&y.current.dispose(),M.current&&M.current.srcObject&&M.current.srcObject.getTracks().forEach(B=>B.stop())},W=async()=>{try{a(!0),c(null),await O(),await T(),dt(),a(!1)}catch(H){console.error("AR initialization error:",H),c(`Failed to initialize AR: ${H.message}`),a(!1)}},O=async()=>new Promise(async(H,B)=>{try{const lt={video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}}},I=await navigator.mediaDevices.getUserMedia(lt);M.current&&(M.current.srcObject=I,M.current.onloadedmetadata=()=>{M.current.play(),m(!0),H()})}catch(lt){B(new Error(`Camera access failed: ${lt.message}`))}}),T=async()=>new Promise((H,B)=>{try{const lt=new a_.Hands({locateFile:I=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${I}`});if(lt.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),lt.onResults(L),X.current=lt,M.current){const I=new NA.Camera(M.current,{onFrame:async()=>{M.current&&X.current&&await X.current.send({image:M.current})},width:1280,height:720});I.start(),z.current=I,S(!0),H()}}catch(lt){B(new Error(`Hand tracking initialization failed: ${lt.message}`))}}),L=H=>{if(!A.current)return;const B=A.current,lt=B.getContext("2d");if(B.width=H.image.width,B.height=H.image.height,lt.save(),lt.clearRect(0,0,B.width,B.height),lt.drawImage(H.image,0,0,B.width,B.height),H.multiHandLandmarks&&H.multiHandLandmarks.length>0){p(!0);for(const I of H.multiHandLandmarks){J(lt,I,B.width,B.height);const rt=I[0];nt(rt,B.width,B.height)}}else p(!1);lt.restore()},J=(H,B,lt,I)=>{H.strokeStyle="rgba(0, 255, 0, 0.5)",H.lineWidth=2;for(const rt of a_.HAND_CONNECTIONS){const bt=B[rt[0]],Mt=B[rt[1]];H.beginPath(),H.moveTo(bt.x*lt,bt.y*I),H.lineTo(Mt.x*lt,Mt.y*I),H.stroke()}B.forEach((rt,bt)=>{H.beginPath(),H.arc(rt.x*lt,rt.y*I,bt===0?8:4,0,2*Math.PI),H.fillStyle=bt===0?"#FFD700":"rgba(255, 255, 255, 0.8)",H.fill(),H.strokeStyle="#000",H.lineWidth=1,H.stroke()})},nt=(H,B,lt)=>{Q.current={x:(H.x-.5)*2,y:-(H.y-.5)*2,z:-H.z*2}},dt=()=>{if(!D.current)return;const H=new zM;P.current=H;const B=new Qi(75,D.current.clientWidth/D.current.clientHeight,.1,1e3);B.position.z=2,b.current=B;const lt=new CA({canvas:D.current,alpha:!0,antialias:!0});lt.setSize(D.current.clientWidth,D.current.clientHeight),lt.setClearColor(0,0),y.current=lt,ot(H);const I=new jM(16777215,.6);H.add(I);const rt=new XM(16777215,.8);rt.position.set(5,5,5),H.add(rt),N()},ot=H=>{var Bt;const B=new Ul,lt=(Bt=s==null?void 0:s.material)==null?void 0:Bt.toLowerCase().includes("gold"),I=lt?16766720:12632256,rt=new Ip(.15,.15,.03,6),bt=new ss({color:I,metalness:.9,roughness:.1}),Mt=new ii(rt,bt);Mt.rotation.x=Math.PI/2,B.add(Mt);let Nt=128;if(s!=null&&s.dial){const Qt=s.dial.toLowerCase();Qt.includes("green")?Nt=25600:Qt.includes("brown")?Nt=9127187:Qt.includes("white")?Nt=16316671:Qt.includes("gray")&&(Nt=6908265)}const jt=new zp(.13,32),ct=new ss({color:Nt,metalness:.3,roughness:.7}),St=new ii(jt,ct);St.position.z=.016,B.add(St);const It=new gr(.01,.03,.005),re=new ss({color:lt?16766720:16777215,metalness:.8,roughness:.2});for(let Qt=0;Qt<12;Qt++){const ne=new ii(It,re),Lt=Qt*Math.PI/6;ne.position.x=Math.cos(Lt)*.11,ne.position.y=Math.sin(Lt)*.11,ne.position.z=.018,ne.rotation.z=Lt+Math.PI/2,B.add(ne)}const Kt=new Date,ge=Kt.getHours()%12,tn=Kt.getMinutes(),j=Kt.getSeconds(),Ae=new gr(.008,.06,.003),Ee=new ss({color:lt?16766720:16777215}),he=new ii(Ae,Ee),qt=ge*Math.PI/6+tn*Math.PI/360;he.position.y=.03,he.position.z=.02,he.rotation.z=-qt,B.add(he);const Ke=new gr(.006,.09,.003),ie=new ss({color:lt?16766720:16777215}),ve=new ii(Ke,ie),on=tn*Math.PI/30;ve.position.y=.045,ve.position.z=.021,ve.rotation.z=-on,B.add(ve);const rn=new gr(.004,.1,.002),G=new ss({color:16711680}),w=new ii(rn,G),ft=j*Math.PI/30;w.position.y=.05,w.position.z=.022,w.rotation.z=-ft,B.add(w);const Et=new gr(.18,.05,.02),Rt=new ss({color:lt?14329120:10526880,metalness:.8,roughness:.3}),yt=new ii(Et,Rt);yt.position.x=-.2,yt.rotation.z=Math.PI/12,B.add(yt);const Wt=new ii(Et,Rt);Wt.position.x=.2,Wt.rotation.z=-Math.PI/12,B.add(Wt),B.scale.set(1.5,1.5,1.5),H.add(B),Z.current=B},N=()=>{if(!(!y.current||!P.current||!b.current)){if(Z.current&&d?(Z.current.position.x=Q.current.x,Z.current.position.y=Q.current.y,Z.current.position.z=Q.current.z,Z.current.visible=!0):Z.current&&(Z.current.visible=!1),Z.current){const H=new Date,lt=(H.getSeconds()+H.getMilliseconds()/1e3)*Math.PI/30,I=Z.current.children.find(rt=>rt.material&&rt.material.color.getHex()===16711680);I&&(I.rotation.z=-lt)}y.current.render(P.current,b.current),q.current=requestAnimationFrame(N)}};return l?Tt.jsx("div",{className:"real-ar-viewer",children:Tt.jsxs("div",{className:"ar-error",children:[Tt.jsx("button",{className:"close-btn",onClick:t,children:"← Back"}),Tt.jsxs("div",{className:"error-content",children:[Tt.jsx("h3",{children:"AR Initialization Failed"}),Tt.jsx("p",{children:l}),Tt.jsx("button",{className:"retry-btn",onClick:W,children:"Try Again"})]})]})}):Tt.jsxs("div",{className:"real-ar-viewer",children:[Tt.jsxs("div",{className:"ar-header",children:[Tt.jsx("button",{className:"close-btn",onClick:t,children:"← Back"}),Tt.jsx("h2",{children:(s==null?void 0:s.name)||"VACHERON CONSTANTIN"}),Tt.jsxs("div",{className:"status",children:[Tt.jsx("span",{className:`status-dot ${d?"active":""}`}),d?"Hand Detected":"Searching..."]})]}),i&&Tt.jsxs("div",{className:"loading-overlay",children:[Tt.jsx("div",{className:"spinner"}),Tt.jsx("p",{children:"Initializing AR Experience..."}),Tt.jsxs("div",{className:"progress",children:[Tt.jsxs("div",{className:"step",children:[v?"✓":"○"," Camera"]}),Tt.jsxs("div",{className:"step",children:[_?"✓":"○"," Hand Tracking"]}),Tt.jsx("div",{className:"step",children:"○ 3D Rendering"})]})]}),Tt.jsxs("div",{className:"ar-container",children:[Tt.jsx("video",{ref:M,className:"video-feed",playsInline:!0,muted:!0,style:{display:"none"}}),Tt.jsx("canvas",{ref:A,className:"hand-canvas"}),Tt.jsx("canvas",{ref:D,className:"three-canvas"})]}),!d&&!i&&Tt.jsxs("div",{className:"instructions",children:[Tt.jsx("div",{className:"hand-icon",children:"✋"}),Tt.jsx("p",{children:"Show your wrist to the camera"})]}),Tt.jsxs("div",{className:"watch-info",children:[Tt.jsx("h3",{children:s==null?void 0:s.name}),Tt.jsxs("p",{children:[s==null?void 0:s.material," • ",s==null?void 0:s.size]}),Tt.jsx("p",{className:"price",children:s==null?void 0:s.price})]}),Tt.jsx("style",{jsx:!0,children:`
        .real-ar-viewer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 1000;
        }

        .ar-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
        }

        .close-btn {
          background: rgba(0,0,0,0.7);
          border: 1px solid #FFD700;
          color: #FFD700;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
        }

        .ar-header h2 {
          color: #FFD700;
          font-size: 1.2rem;
          margin: 0;
          letter-spacing: 2px;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-size: 0.9rem;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ff4444;
        }

        .status-dot.active {
          background: #44ff44;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255, 215, 0, 0.3);
          border-top: 4px solid #FFD700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 2rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-overlay p {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .progress {
          display: flex;
          gap: 2rem;
        }

        .step {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .ar-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hand-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .three-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .instructions {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 5;
        }

        .hand-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }

        .instructions p {
          font-size: 1.2rem;
          color: #FFD700;
        }

        .watch-info {
          position: absolute;
          top: 100px;
          left: 20px;
          background: rgba(0, 0, 0, 0.8);
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          z-index: 10;
        }

        .watch-info h3 {
          color: #FFD700;
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
        }

        .watch-info p {
          color: white;
          margin: 0.25rem 0;
          font-size: 0.9rem;
        }

        .price {
          color: #FFD700 !important;
          font-weight: 600;
        }

        .ar-error {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .error-content {
          background: rgba(20, 20, 20, 0.95);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          max-width: 400px;
          border: 1px solid #333;
        }

        .error-content h3 {
          color: #FFD700;
          margin-bottom: 1rem;
        }

        .error-content p {
          color: #ccc;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .retry-btn {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #000;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
        }

        .retry-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
        }
      `})]})}function OA({onAccept:s,onRefuse:t}){return Tt.jsxs("div",{className:"privacy-consent-overlay",children:[Tt.jsxs("div",{className:"consent-modal",children:[Tt.jsxs("div",{className:"consent-content",children:[Tt.jsxs("p",{className:"consent-text",children:["I acknowledge that any personal data, including data contained in any photographs or sizing information, which I upload into the Vacheron Constantin Virtual Try On, as well as any data relating to my usage of the Vacheron Constantin Virtual Try On, will be processed by Vacheron Constantin in accordance with the"," ",Tt.jsx("a",{href:"https://www.vacheron-constantin.com/us/en/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",className:"privacy-link",children:"Privacy Policy"}),"."]}),Tt.jsx("p",{className:"consent-note",children:"This consent will apply to all VTO sessions for any products on this device."})]}),Tt.jsxs("div",{className:"consent-actions",children:[Tt.jsx(_o,{onClick:t,variant:"outline",className:"refuse-button",children:"Refuse"}),Tt.jsx(_o,{onClick:s,className:"accept-button",children:"Accept"})]})]}),Tt.jsx("style",{jsx:!0,children:`
        .privacy-consent-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }

        .consent-modal {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .consent-content {
          margin-bottom: 2rem;
        }

        .consent-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 1rem;
        }

        .consent-note {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }

        .privacy-link {
          color: #8B4513;
          text-decoration: underline;
        }

        .privacy-link:hover {
          color: #A0522D;
        }

        .consent-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .refuse-button {
          background: #333;
          color: white;
          border: 1px solid #333;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .refuse-button:hover {
          background: #555;
          border-color: #555;
        }

        .accept-button {
          background: #8B4513;
          color: white;
          border: 1px solid #8B4513;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .accept-button:hover {
          background: #A0522D;
          border-color: #A0522D;
        }

        @media (max-width: 600px) {
          .consent-modal {
            padding: 1.5rem;
            margin: 1rem;
          }

          .consent-actions {
            flex-direction: column;
          }

          .refuse-button,
          .accept-button {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})}function PA(){const[s,t]=He.useState("home"),[i,a]=He.useState(null),[l,c]=He.useState(!1),d=()=>{t("selector")},p=A=>{a(A)},v=()=>{t(l?"ar":"privacy")},m=()=>{c(!0),t("ar")},_=()=>{t("selector")},S=()=>{t("selector")},M=()=>{t("home"),a(null)};return s==="ar"?Tt.jsx(LA,{watchModel:i,onClose:S}):s==="privacy"?Tt.jsx(OA,{onAccept:m,onRefuse:_}):Tt.jsxs("div",{className:"app",children:[Tt.jsx("header",{className:"app-header",children:Tt.jsxs("div",{className:"header-content",children:[Tt.jsxs("div",{className:"logo-section",children:[Tt.jsx("h1",{className:"brand-name",children:"VACHERON CONSTANTIN"}),Tt.jsx("p",{className:"brand-tagline",children:"Swiss Haute Horlogerie since 1755"})]}),s==="selector"&&Tt.jsx(_o,{onClick:M,variant:"outline",className:"back-button",children:"← Back to Home"})]})}),Tt.jsxs("main",{className:"main-content",children:[s==="home"&&Tt.jsxs("div",{className:"home-view",children:[Tt.jsxs("div",{className:"hero-section",children:[Tt.jsxs("div",{className:"hero-content",children:[Tt.jsxs("h2",{className:"hero-title",children:["Experience Overseas Collection",Tt.jsx("br",{}),Tt.jsx("span",{className:"hero-subtitle",children:"in Augmented Reality"})]}),Tt.jsx("p",{className:"hero-description",children:"Discover the iconic Overseas collection through our immersive AR experience. Try on authentic Vacheron Constantin timepieces virtually and explore the perfect harmony of tradition and innovation."}),Tt.jsxs("div",{className:"hero-features",children:[Tt.jsxs("div",{className:"feature",children:[Tt.jsx("div",{className:"feature-icon",children:"📱"}),Tt.jsx("span",{children:"Real-time AR Experience"})]}),Tt.jsxs("div",{className:"feature",children:[Tt.jsx("div",{className:"feature-icon",children:"⌚"}),Tt.jsx("span",{children:"6 Overseas Models"})]}),Tt.jsxs("div",{className:"feature",children:[Tt.jsx("div",{className:"feature-icon",children:"🎯"}),Tt.jsx("span",{children:"Precise Wrist Tracking"})]})]}),Tt.jsx(_o,{onClick:d,size:"lg",className:"cta-button",children:"Begin AR Experience"})]}),Tt.jsx("div",{className:"hero-visual",children:Tt.jsxs("div",{className:"watch-showcase",children:[Tt.jsx("div",{className:"showcase-watch",children:"⌚"}),Tt.jsx("div",{className:"showcase-glow"})]})})]}),Tt.jsx("div",{className:"info-section",children:Tt.jsxs("div",{className:"info-grid",children:[Tt.jsxs("div",{className:"info-card",children:[Tt.jsx("h3",{children:"Overseas Collection"}),Tt.jsx("p",{children:"Inspired by the Maltese cross, the Overseas collection embodies the spirit of travel and adventure with its distinctive integrated bracelet and hexagonal bezel."})]}),Tt.jsxs("div",{className:"info-card",children:[Tt.jsx("h3",{children:"AR Technology"}),Tt.jsx("p",{children:"Our advanced augmented reality technology provides an authentic try-on experience, allowing you to see how each timepiece looks and feels on your wrist."})]}),Tt.jsxs("div",{className:"info-card",children:[Tt.jsx("h3",{children:"Swiss Craftsmanship"}),Tt.jsx("p",{children:"Each Overseas timepiece represents over 265 years of Swiss watchmaking excellence, combining traditional craftsmanship with contemporary design."})]})]})})]}),s==="selector"&&Tt.jsxs("div",{className:"selector-view",children:[Tt.jsx(yS,{onSelectWatch:p,selectedWatch:i}),i&&Tt.jsx("div",{className:"ar-launch-section",children:Tt.jsxs("div",{className:"launch-content",children:[Tt.jsxs("h3",{children:["Ready to try on ",i.name,"?"]}),Tt.jsx("p",{children:"Experience this timepiece in augmented reality"}),Tt.jsx(_o,{onClick:v,size:"lg",className:"ar-launch-button",children:"Start AR Try-On"})]})})]})]}),Tt.jsx("footer",{className:"app-footer",children:Tt.jsxs("div",{className:"footer-content",children:[Tt.jsx("p",{children:"© 2024 Vacheron Constantin. All rights reserved."}),Tt.jsx("p",{children:"Experience Swiss Haute Horlogerie in AR"})]})}),Tt.jsx("style",{jsx:!0,children:`
        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          flex-direction: column;
        }

        .app-header {
          background: white;
          border-bottom: 1px solid #e0e0e0;
          padding: 1rem 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand-name {
          font-size: 1.8rem;
          font-weight: 300;
          letter-spacing: 3px;
          color: #1a1a1a;
          margin: 0;
        }

        .brand-tagline {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
          font-style: italic;
        }

        .back-button {
          border-color: #8B4513;
          color: #8B4513;
        }

        .back-button:hover {
          background: #8B4513;
          color: white;
        }

        .main-content {
          flex: 1;
          padding: 2rem 0;
        }

        .home-view {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
          min-height: 60vh;
        }

        .hero-content {
          max-width: 500px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 300;
          line-height: 1.2;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .hero-subtitle {
          color: #8B4513;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 2rem;
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          color: #333;
        }

        .feature-icon {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
        }

        .cta-button {
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
          color: white;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 1px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 69, 19, 0.3);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .watch-showcase {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .showcase-watch {
          font-size: 8rem;
          color: #8B4513;
          z-index: 2;
          position: relative;
        }

        .showcase-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }

        .info-section {
          background: white;
          border-radius: 12px;
          padding: 3rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .info-card {
          text-align: center;
        }

        .info-card h3 {
          font-size: 1.4rem;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .info-card p {
          font-size: 1rem;
          line-height: 1.6;
          color: #666;
        }

        .selector-view {
          background: white;
          border-radius: 12px;
          margin: 0 2rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .ar-launch-section {
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
          color: white;
          padding: 3rem;
          text-align: center;
        }

        .launch-content h3 {
          font-size: 1.8rem;
          font-weight: 300;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .launch-content p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .ar-launch-button {
          background: white;
          color: #8B4513;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 1px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ar-launch-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .app-footer {
          background: #1a1a1a;
          color: white;
          padding: 2rem 0;
          text-align: center;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content p {
          margin: 0.5rem 0;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .header-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .home-view,
          .selector-view {
            margin: 0 1rem;
          }
        }
      `})]})}Ay.createRoot(document.getElementById("root")).render(Tt.jsx(He.StrictMode,{children:Tt.jsx(PA,{})}));
