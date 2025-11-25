(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=i(l);fetch(l.href,s)}})();var sx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function K_(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var kf={exports:{}},Mo={};var ox;function Q_(){if(ox)return Mo;ox=1;var c=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,s){var f=null;if(s!==void 0&&(f=""+s),l.key!==void 0&&(f=""+l.key),"key"in l){s={};for(var u in l)u!=="key"&&(s[u]=l[u])}else s=l;return l=s.ref,{$$typeof:c,type:r,key:f,ref:l!==void 0?l:null,props:s}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var lx;function J_(){return lx||(lx=1,kf.exports=Q_()),kf.exports}var tn=J_(),Xf={exports:{}},ue={};var cx;function $_(){if(cx)return ue;cx=1;var c=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function d(V){return V===null||typeof V!="object"?null:(V=g&&V[g]||V["@@iterator"],typeof V=="function"?V:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function b(V,tt,ht){this.props=V,this.context=tt,this.refs=y,this.updater=ht||S}b.prototype.isReactComponent={},b.prototype.setState=function(V,tt){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,tt,"setState")},b.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function D(){}D.prototype=b.prototype;function U(V,tt,ht){this.props=V,this.context=tt,this.refs=y,this.updater=ht||S}var N=U.prototype=new D;N.constructor=U,M(N,b.prototype),N.isPureReactComponent=!0;var E=Array.isArray;function T(){}var w={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function R(V,tt,ht){var pt=ht.ref;return{$$typeof:c,type:V,key:tt,ref:pt!==void 0?pt:null,props:ht}}function A(V,tt){return R(V.type,tt,V.props)}function O(V){return typeof V=="object"&&V!==null&&V.$$typeof===c}function P(V){var tt={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ht){return tt[ht]})}var H=/\/+/g;function W(V,tt){return typeof V=="object"&&V!==null&&V.key!=null?P(""+V.key):tt.toString(36)}function X(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(T,T):(V.status="pending",V.then(function(tt){V.status==="pending"&&(V.status="fulfilled",V.value=tt)},function(tt){V.status==="pending"&&(V.status="rejected",V.reason=tt)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function I(V,tt,ht,pt,bt){var Q=typeof V;(Q==="undefined"||Q==="boolean")&&(V=null);var nt=!1;if(V===null)nt=!0;else switch(Q){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(V.$$typeof){case c:case e:nt=!0;break;case x:return nt=V._init,I(nt(V._payload),tt,ht,pt,bt)}}if(nt)return bt=bt(V),nt=pt===""?"."+W(V,0):pt,E(bt)?(ht="",nt!=null&&(ht=nt.replace(H,"$&/")+"/"),I(bt,tt,ht,"",function(Ot){return Ot})):bt!=null&&(O(bt)&&(bt=A(bt,ht+(bt.key==null||V&&V.key===bt.key?"":(""+bt.key).replace(H,"$&/")+"/")+nt)),tt.push(bt)),1;nt=0;var yt=pt===""?".":pt+":";if(E(V))for(var Nt=0;Nt<V.length;Nt++)pt=V[Nt],Q=yt+W(pt,Nt),nt+=I(pt,tt,ht,Q,bt);else if(Nt=d(V),typeof Nt=="function")for(V=Nt.call(V),Nt=0;!(pt=V.next()).done;)pt=pt.value,Q=yt+W(pt,Nt++),nt+=I(pt,tt,ht,Q,bt);else if(Q==="object"){if(typeof V.then=="function")return I(X(V),tt,ht,pt,bt);throw tt=String(V),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return nt}function k(V,tt,ht){if(V==null)return V;var pt=[],bt=0;return I(V,pt,"","",function(Q){return tt.call(ht,Q,bt++)}),pt}function Z(V){if(V._status===-1){var tt=V._result;tt=tt(),tt.then(function(ht){(V._status===0||V._status===-1)&&(V._status=1,V._result=ht)},function(ht){(V._status===0||V._status===-1)&&(V._status=2,V._result=ht)}),V._status===-1&&(V._status=0,V._result=tt)}if(V._status===1)return V._result.default;throw V._result}var it=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},lt={map:k,forEach:function(V,tt,ht){k(V,function(){tt.apply(this,arguments)},ht)},count:function(V){var tt=0;return k(V,function(){tt++}),tt},toArray:function(V){return k(V,function(tt){return tt})||[]},only:function(V){if(!O(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return ue.Activity=_,ue.Children=lt,ue.Component=b,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=U,ue.StrictMode=r,ue.Suspense=h,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,ue.__COMPILER_RUNTIME={__proto__:null,c:function(V){return w.H.useMemoCache(V)}},ue.cache=function(V){return function(){return V.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(V,tt,ht){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var pt=M({},V.props),bt=V.key;if(tt!=null)for(Q in tt.key!==void 0&&(bt=""+tt.key),tt)!L.call(tt,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&tt.ref===void 0||(pt[Q]=tt[Q]);var Q=arguments.length-2;if(Q===1)pt.children=ht;else if(1<Q){for(var nt=Array(Q),yt=0;yt<Q;yt++)nt[yt]=arguments[yt+2];pt.children=nt}return R(V.type,bt,pt)},ue.createContext=function(V){return V={$$typeof:f,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:s,_context:V},V},ue.createElement=function(V,tt,ht){var pt,bt={},Q=null;if(tt!=null)for(pt in tt.key!==void 0&&(Q=""+tt.key),tt)L.call(tt,pt)&&pt!=="key"&&pt!=="__self"&&pt!=="__source"&&(bt[pt]=tt[pt]);var nt=arguments.length-2;if(nt===1)bt.children=ht;else if(1<nt){for(var yt=Array(nt),Nt=0;Nt<nt;Nt++)yt[Nt]=arguments[Nt+2];bt.children=yt}if(V&&V.defaultProps)for(pt in nt=V.defaultProps,nt)bt[pt]===void 0&&(bt[pt]=nt[pt]);return R(V,Q,bt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(V){return{$$typeof:u,render:V}},ue.isValidElement=O,ue.lazy=function(V){return{$$typeof:x,_payload:{_status:-1,_result:V},_init:Z}},ue.memo=function(V,tt){return{$$typeof:p,type:V,compare:tt===void 0?null:tt}},ue.startTransition=function(V){var tt=w.T,ht={};w.T=ht;try{var pt=V(),bt=w.S;bt!==null&&bt(ht,pt),typeof pt=="object"&&pt!==null&&typeof pt.then=="function"&&pt.then(T,it)}catch(Q){it(Q)}finally{tt!==null&&ht.types!==null&&(tt.types=ht.types),w.T=tt}},ue.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},ue.use=function(V){return w.H.use(V)},ue.useActionState=function(V,tt,ht){return w.H.useActionState(V,tt,ht)},ue.useCallback=function(V,tt){return w.H.useCallback(V,tt)},ue.useContext=function(V){return w.H.useContext(V)},ue.useDebugValue=function(){},ue.useDeferredValue=function(V,tt){return w.H.useDeferredValue(V,tt)},ue.useEffect=function(V,tt){return w.H.useEffect(V,tt)},ue.useEffectEvent=function(V){return w.H.useEffectEvent(V)},ue.useId=function(){return w.H.useId()},ue.useImperativeHandle=function(V,tt,ht){return w.H.useImperativeHandle(V,tt,ht)},ue.useInsertionEffect=function(V,tt){return w.H.useInsertionEffect(V,tt)},ue.useLayoutEffect=function(V,tt){return w.H.useLayoutEffect(V,tt)},ue.useMemo=function(V,tt){return w.H.useMemo(V,tt)},ue.useOptimistic=function(V,tt){return w.H.useOptimistic(V,tt)},ue.useReducer=function(V,tt,ht){return w.H.useReducer(V,tt,ht)},ue.useRef=function(V){return w.H.useRef(V)},ue.useState=function(V){return w.H.useState(V)},ue.useSyncExternalStore=function(V,tt,ht){return w.H.useSyncExternalStore(V,tt,ht)},ue.useTransition=function(){return w.H.useTransition()},ue.version="19.2.0",ue}var ux;function xh(){return ux||(ux=1,Xf.exports=$_()),Xf.exports}var Pe=xh(),Wf={exports:{}},bo={},qf={exports:{}},Yf={};var fx;function tS(){return fx||(fx=1,(function(c){function e(I,k){var Z=I.length;I.push(k);t:for(;0<Z;){var it=Z-1>>>1,lt=I[it];if(0<l(lt,k))I[it]=k,I[Z]=lt,Z=it;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var k=I[0],Z=I.pop();if(Z!==k){I[0]=Z;t:for(var it=0,lt=I.length,V=lt>>>1;it<V;){var tt=2*(it+1)-1,ht=I[tt],pt=tt+1,bt=I[pt];if(0>l(ht,Z))pt<lt&&0>l(bt,ht)?(I[it]=bt,I[pt]=Z,it=pt):(I[it]=ht,I[tt]=Z,it=tt);else if(pt<lt&&0>l(bt,Z))I[it]=bt,I[pt]=Z,it=pt;else break t}}return k}function l(I,k){var Z=I.sortIndex-k.sortIndex;return Z!==0?Z:I.id-k.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;c.unstable_now=function(){return s.now()}}else{var f=Date,u=f.now();c.unstable_now=function(){return f.now()-u}}var h=[],p=[],x=1,_=null,g=3,d=!1,S=!1,M=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(I){for(var k=i(p);k!==null;){if(k.callback===null)r(p);else if(k.startTime<=I)r(p),k.sortIndex=k.expirationTime,e(h,k);else break;k=i(p)}}function E(I){if(M=!1,N(I),!S)if(i(h)!==null)S=!0,T||(T=!0,P());else{var k=i(p);k!==null&&X(E,k.startTime-I)}}var T=!1,w=-1,L=5,R=-1;function A(){return y?!0:!(c.unstable_now()-R<L)}function O(){if(y=!1,T){var I=c.unstable_now();R=I;var k=!0;try{t:{S=!1,M&&(M=!1,D(w),w=-1),d=!0;var Z=g;try{e:{for(N(I),_=i(h);_!==null&&!(_.expirationTime>I&&A());){var it=_.callback;if(typeof it=="function"){_.callback=null,g=_.priorityLevel;var lt=it(_.expirationTime<=I);if(I=c.unstable_now(),typeof lt=="function"){_.callback=lt,N(I),k=!0;break e}_===i(h)&&r(h),N(I)}else r(h);_=i(h)}if(_!==null)k=!0;else{var V=i(p);V!==null&&X(E,V.startTime-I),k=!1}}break t}finally{_=null,g=Z,d=!1}k=void 0}}finally{k?P():T=!1}}}var P;if(typeof U=="function")P=function(){U(O)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,W=H.port2;H.port1.onmessage=O,P=function(){W.postMessage(null)}}else P=function(){b(O,0)};function X(I,k){w=b(function(){I(c.unstable_now())},k)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(I){I.callback=null},c.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},c.unstable_getCurrentPriorityLevel=function(){return g},c.unstable_next=function(I){switch(g){case 1:case 2:case 3:var k=3;break;default:k=g}var Z=g;g=k;try{return I()}finally{g=Z}},c.unstable_requestPaint=function(){y=!0},c.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=g;g=I;try{return k()}finally{g=Z}},c.unstable_scheduleCallback=function(I,k,Z){var it=c.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?it+Z:it):Z=it,I){case 1:var lt=-1;break;case 2:lt=250;break;case 5:lt=1073741823;break;case 4:lt=1e4;break;default:lt=5e3}return lt=Z+lt,I={id:x++,callback:k,priorityLevel:I,startTime:Z,expirationTime:lt,sortIndex:-1},Z>it?(I.sortIndex=Z,e(p,I),i(h)===null&&I===i(p)&&(M?(D(w),w=-1):M=!0,X(E,Z-it))):(I.sortIndex=lt,e(h,I),S||d||(S=!0,T||(T=!0,P()))),I},c.unstable_shouldYield=A,c.unstable_wrapCallback=function(I){var k=g;return function(){var Z=g;g=k;try{return I.apply(this,arguments)}finally{g=Z}}}})(Yf)),Yf}var dx;function eS(){return dx||(dx=1,qf.exports=tS()),qf.exports}var Zf={exports:{}},wn={};var hx;function nS(){if(hx)return wn;hx=1;var c=xh();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function s(h,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:h,containerInfo:p,implementation:x}}var f=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(h,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return s(h,p,null,x)},wn.flushSync=function(h){var p=f.T,x=r.p;try{if(f.T=null,r.p=2,h)return h()}finally{f.T=p,r.p=x,r.d.f()}},wn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(h,p))},wn.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},wn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var x=p.as,_=u(x,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,d=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:d}):x==="script"&&r.d.X(h,{crossOrigin:_,integrity:g,fetchPriority:d,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=u(p.as,p.crossOrigin);r.d.M(h,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(h)},wn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=u(x,p.crossOrigin);r.d.L(h,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(h,p){if(typeof h=="string")if(p){var x=u(p.as,p.crossOrigin);r.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(h)},wn.requestFormReset=function(h){r.d.r(h)},wn.unstable_batchedUpdates=function(h,p){return h(p)},wn.useFormState=function(h,p,x){return f.H.useFormState(h,p,x)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var px;function iS(){if(px)return Zf.exports;px=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(e){console.error(e)}}return c(),Zf.exports=nS(),Zf.exports}var mx;function aS(){if(mx)return bo;mx=1;var c=eS(),e=xh(),i=iS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function s(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function u(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(s(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=s(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var m=a.return;if(m===null)break;var v=m.alternate;if(v===null){if(o=m.return,o!==null){a=o;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===a)return h(m),t;if(v===o)return h(m),n;v=v.sibling}throw Error(r(188))}if(a.return!==o.return)a=m,o=v;else{for(var C=!1,z=m.child;z;){if(z===a){C=!0,a=m,o=v;break}if(z===o){C=!0,o=m,a=v;break}z=z.sibling}if(!C){for(z=v.child;z;){if(z===a){C=!0,a=v,o=m;break}if(z===o){C=!0,o=v,a=m;break}z=z.sibling}if(!C)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var H=Symbol.for("react.client.reference");function W(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===H?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case b:return"Profiler";case y:return"StrictMode";case E:return"Suspense";case T:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case U:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case w:return n=t.displayName||null,n!==null?n:W(t.type)||"Memo";case L:n=t._payload,t=t._init;try{return W(t(n))}catch{}}return null}var X=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},it=[],lt=-1;function V(t){return{current:t}}function tt(t){0>lt||(t.current=it[lt],it[lt]=null,lt--)}function ht(t,n){lt++,it[lt]=t.current,t.current=n}var pt=V(null),bt=V(null),Q=V(null),nt=V(null);function yt(t,n){switch(ht(Q,n),ht(bt,t),ht(pt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?wm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=wm(n),t=Dm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(pt),ht(pt,t)}function Nt(){tt(pt),tt(bt),tt(Q)}function Ot(t){t.memoizedState!==null&&ht(nt,t);var n=pt.current,a=Dm(n,t.type);n!==a&&(ht(bt,t),ht(pt,a))}function Xt(t){bt.current===t&&(tt(pt),tt(bt)),nt.current===t&&(tt(nt),vo._currentValue=Z)}var ce,Zt;function ne(t){if(ce===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ce=n&&n[1]||"",Zt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ce+t+Zt}var q=!1;function Vt(t,n){if(!t||q)return"";q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ft){var ct=ft}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ft){ct=ft}t.call(_t.prototype)}}else{try{throw Error()}catch(ft){ct=ft}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ft){if(ft&&ct&&typeof ft.stack=="string")return[ft.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var m=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");m&&m.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var v=o.DetermineComponentFrameRoot(),C=v[0],z=v[1];if(C&&z){var Y=C.split(`
`),st=z.split(`
`);for(m=o=0;o<Y.length&&!Y[o].includes("DetermineComponentFrameRoot");)o++;for(;m<st.length&&!st[m].includes("DetermineComponentFrameRoot");)m++;if(o===Y.length||m===st.length)for(o=Y.length-1,m=st.length-1;1<=o&&0<=m&&Y[o]!==st[m];)m--;for(;1<=o&&0<=m;o--,m--)if(Y[o]!==st[m]){if(o!==1||m!==1)do if(o--,m--,0>m||Y[o]!==st[m]){var xt=`
`+Y[o].replace(" at new "," at ");return t.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",t.displayName)),xt}while(1<=o&&0<=m);break}}}finally{q=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ne(a):""}function le(t,n){switch(t.tag){case 26:case 27:case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return t.child!==n&&n!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return Vt(t.type,!1);case 11:return Vt(t.type.render,!1);case 1:return Vt(t.type,!0);case 31:return ne("Activity");default:return""}}function ge(t){try{var n="",a=null;do n+=le(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Pt=Object.prototype.hasOwnProperty,Re=c.unstable_scheduleCallback,Wt=c.unstable_cancelCallback,ae=c.unstable_shouldYield,G=c.unstable_requestPaint,B=c.unstable_now,at=c.unstable_getCurrentPriorityLevel,gt=c.unstable_ImmediatePriority,Mt=c.unstable_UserBlockingPriority,dt=c.unstable_NormalPriority,qt=c.unstable_LowPriority,Dt=c.unstable_IdlePriority,$t=c.log,jt=c.unstable_setDisableYieldValue,Et=null,At=null;function Kt(t){if(typeof $t=="function"&&jt(t),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Et,t)}catch{}}var kt=Math.clz32?Math.clz32:j,zt=Math.log,se=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(zt(t)/se|0)|0}var Ut=256,Ct=262144,wt=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function St(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var m=0,v=t.suspendedLanes,C=t.pingedLanes;t=t.warmLanes;var z=o&134217727;return z!==0?(o=z&~v,o!==0?m=Tt(o):(C&=z,C!==0?m=Tt(C):a||(a=z&~t,a!==0&&(m=Tt(a))))):(z=o&~v,z!==0?m=Tt(z):C!==0?m=Tt(C):a||(a=o&~t,a!==0&&(m=Tt(a)))),m===0?0:n!==0&&n!==m&&(n&v)===0&&(v=m&-m,a=n&-n,v>=a||v===32&&(a&4194048)!==0)?n:m}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function oe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var t=wt;return wt<<=1,(wt&62914560)===0&&(wt=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wn(t,n,a,o,m,v){var C=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var z=t.entanglements,Y=t.expirationTimes,st=t.hiddenUpdates;for(a=C&~a;0<a;){var xt=31-kt(a),_t=1<<xt;z[xt]=0,Y[xt]=-1;var ct=st[xt];if(ct!==null)for(st[xt]=null,xt=0;xt<ct.length;xt++){var ft=ct[xt];ft!==null&&(ft.lane&=-536870913)}a&=~_t}o!==0&&Vo(t,o,0),v!==0&&m===0&&t.tag!==0&&(t.suspendedLanes|=v&~(C&~n))}function Vo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-kt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-kt(a),m=1<<o;m&n|t[o]&n&&(t[o]|=n),a&=~m}}function Ds(t,n){var a=n&-n;return a=(a&42)!==0?1:pi(a),(a&(t.suspendedLanes|n))!==0?0:a}function pi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ka(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Us(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:$m(t.type))}function Ls(t,n){var a=k.p;try{return k.p=t,n()}finally{k.p=a}}var qn=Math.random().toString(36).slice(2),sn="__reactFiber$"+qn,hn="__reactProps$"+qn,Ni="__reactContainer$"+qn,Rr="__reactEvents$"+qn,Bc="__reactListeners$"+qn,zc="__reactHandles$"+qn,Go="__reactResources$"+qn,Qa="__reactMarker$"+qn;function Ns(t){delete t[sn],delete t[hn],delete t[Rr],delete t[Bc],delete t[zc]}function pa(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ni]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=zm(t);t!==null;){if(a=t[sn])return a;t=zm(t)}return n}t=a,a=t.parentNode}return null}function F(t){if(t=t[sn]||t[Ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function J(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ut(t){var n=t[Go];return n||(n=t[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ot(t){t[Qa]=!0}var et=new Set,Rt={};function Lt(t,n){Ft(t,n),Ft(t+"Capture",n)}function Ft(t,n){for(Rt[t]=n,t=0;t<n.length;t++)et.add(n[t])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},re={};function Qt(t){return Pt.call(re,t)?!0:Pt.call(ee,t)?!1:Ht.test(t)?re[t]=!0:(ee[t]=!0,!1)}function he(t,n,a){if(Qt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function we(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function te(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var m=o.get,v=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return m.call(this)},set:function(C){a=""+C,v.call(this,C)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(C){a=""+C},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=Oe(t)?"checked":"value";t._valueTracker=te(t,n,""+t[n])}}function be(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Oe(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ma=/[\n"\\]/g;function Ye(t){return t.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(t,n,a,o,m,v,C,z){t.name="",C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.type=C:t.removeAttribute("type"),n!=null?C==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Me(n)):t.value!==""+Me(n)&&(t.value=""+Me(n)):C!=="submit"&&C!=="reset"||t.removeAttribute("value"),n!=null?_n(t,C,Me(n)):a!=null?_n(t,C,Me(a)):o!=null&&t.removeAttribute("value"),m==null&&v!=null&&(t.defaultChecked=!!v),m!=null&&(t.checked=m&&typeof m!="function"&&typeof m!="symbol"),z!=null&&typeof z!="function"&&typeof z!="symbol"&&typeof z!="boolean"?t.name=""+Me(z):t.removeAttribute("name")}function Ze(t,n,a,o,m,v,C,z){if(v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.type=v),n!=null||a!=null){if(!(v!=="submit"&&v!=="reset"||n!=null)){We(t);return}a=a!=null?""+Me(a):"",n=n!=null?""+Me(n):a,z||n===t.value||(t.value=n),t.defaultValue=n}o=o??m,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=z?t.checked:!!o,t.defaultChecked=!!o,C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"&&(t.name=C),We(t)}function _n(t,n,a){n==="number"&&vn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function pn(t,n,a,o){if(t=t.options,n){n={};for(var m=0;m<a.length;m++)n["$"+a[m]]=!0;for(a=0;a<t.length;a++)m=n.hasOwnProperty("$"+t[a].value),t[a].selected!==m&&(t[a].selected=m),m&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Me(a),n=null,m=0;m<t.length;m++){if(t[m].value===a){t[m].selected=!0,o&&(t[m].defaultSelected=!0);return}n!==null||t[m].disabled||(n=t[m])}n!==null&&(n.selected=!0)}}function Sn(t,n,a){if(n!=null&&(n=""+Me(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Me(a):""}function bn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(X(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Me(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),We(t)}function Ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ah(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Rh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var m in n)o=n[m],n.hasOwnProperty(m)&&a[m]!==o&&Ah(t,m,o)}else for(var v in n)n.hasOwnProperty(v)&&Ah(t,v,n[v])}function Fc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return Yg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var Ic=null;function Hc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,wr=null;function Ch(t){var n=F(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Oi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var m=o[hn]||null;if(!m)throw Error(r(90));Oi(o,m.value,m.defaultValue,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&be(o)}break t;case"textarea":Sn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&pn(t,!!a.multiple,n,!1)}}}var Vc=!1;function wh(t,n,a){if(Vc)return t(n,a);Vc=!0;try{var o=t(n);return o}finally{if(Vc=!1,(Cr!==null||wr!==null)&&(Dl(),Cr&&(n=Cr,t=wr,wr=Cr=null,Ch(n),t)))for(n=0;n<t.length;n++)Ch(t[n])}}function Os(t,n){var a=t.stateNode;if(a===null)return null;var o=a[hn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(zi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Gc=!1}var xa=null,kc=null,Xo=null;function Dh(){if(Xo)return Xo;var t,n=kc,a=n.length,o,m="value"in xa?xa.value:xa.textContent,v=m.length;for(t=0;t<a&&n[t]===m[t];t++);var C=a-t;for(o=1;o<=C&&n[a-o]===m[v-o];o++);return Xo=m.slice(t,1<o?1-o:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Uh(){return!1}function Pn(t){function n(a,o,m,v,C){this._reactName=a,this._targetInst=m,this.type=o,this.nativeEvent=v,this.target=C,this.currentTarget=null;for(var z in t)t.hasOwnProperty(z)&&(a=t[z],this[z]=a?a(v):v[z]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?qo:Uh,this.isPropagationStopped=Uh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Pn(Ja),Bs=_({},Ja,{view:0,detail:0}),Zg=Pn(Bs),Xc,Wc,zs,Zo=_({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Xc=t.screenX-zs.screenX,Wc=t.screenY-zs.screenY):Wc=Xc=0,zs=t),Xc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),Lh=Pn(Zo),jg=_({},Zo,{dataTransfer:0}),Kg=Pn(jg),Qg=_({},Bs,{relatedTarget:0}),qc=Pn(Qg),Jg=_({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=Pn(Jg),tv=_({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ev=Pn(tv),nv=_({},Ja,{data:0}),Nh=Pn(nv),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=rv[t])?!!n[t]:!1}function Yc(){return sv}var ov=_({},Bs,{key:function(t){if(t.key){var n=iv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?av[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lv=Pn(ov),cv=_({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=Pn(cv),uv=_({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),fv=Pn(uv),dv=_({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=Pn(dv),pv=_({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=Pn(pv),xv=_({},Ja,{newState:0,oldState:0}),gv=Pn(xv),vv=[9,13,27,32],Zc=zi&&"CompositionEvent"in window,Fs=null;zi&&"documentMode"in document&&(Fs=document.documentMode);var _v=zi&&"TextEvent"in window&&!Fs,Ph=zi&&(!Zc||Fs&&8<Fs&&11>=Fs),Bh=" ",zh=!1;function Fh(t,n){switch(t){case"keyup":return vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function Sv(t,n){switch(t){case"compositionend":return Ih(n);case"keypress":return n.which!==32?null:(zh=!0,Bh);case"textInput":return t=n.data,t===Bh&&zh?null:t;default:return null}}function yv(t,n){if(Dr)return t==="compositionend"||!Zc&&Fh(t,n)?(t=Dh(),Xo=kc=xa=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ph&&n.locale!=="ko"?null:n.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Mv[t.type]:n==="textarea"}function Vh(t,n,a,o){Cr?wr?wr.push(o):wr=[o]:Cr=o,n=zl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Is=null,Hs=null;function bv(t){bm(t,0)}function jo(t){var n=J(t);if(be(n))return t}function Gh(t,n){if(t==="change")return n}var kh=!1;if(zi){var jc;if(zi){var Kc="oninput"in document;if(!Kc){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),Kc=typeof Xh.oninput=="function"}jc=Kc}else jc=!1;kh=jc&&(!document.documentMode||9<document.documentMode)}function Wh(){Is&&(Is.detachEvent("onpropertychange",qh),Hs=Is=null)}function qh(t){if(t.propertyName==="value"&&jo(Hs)){var n=[];Vh(n,Hs,t,Hc(t)),wh(bv,n)}}function Ev(t,n,a){t==="focusin"?(Wh(),Is=n,Hs=a,Is.attachEvent("onpropertychange",qh)):t==="focusout"&&Wh()}function Tv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Hs)}function Av(t,n){if(t==="click")return jo(n)}function Rv(t,n){if(t==="input"||t==="change")return jo(n)}function Cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Cv;function Vs(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var m=a[o];if(!Pt.call(n,m)||!Yn(t[m],n[m]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,n){var a=Yh(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yh(a)}}function jh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?jh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Kh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vn(t.document)}return n}function Qc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var wv=zi&&"documentMode"in document&&11>=document.documentMode,Ur=null,Jc=null,Gs=null,$c=!1;function Qh(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||Ur==null||Ur!==vn(o)||(o=Ur,"selectionStart"in o&&Qc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gs&&Vs(Gs,o)||(Gs=o,o=zl(Jc,"onSelect"),0<o.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ur)))}function $a(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Lr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},tu={},Jh={};zi&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function tr(t){if(tu[t])return tu[t];if(!Lr[t])return t;var n=Lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jh)return tu[t]=n[a];return t}var $h=tr("animationend"),tp=tr("animationiteration"),ep=tr("animationstart"),Dv=tr("transitionrun"),Uv=tr("transitionstart"),Lv=tr("transitioncancel"),np=tr("transitionend"),ip=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function mi(t,n){ip.set(t,n),Lt(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Nr=0,nu=0;function Qo(){for(var t=Nr,n=nu=Nr=0;n<t;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var m=ii[n];ii[n++]=null;var v=ii[n];if(ii[n++]=null,o!==null&&m!==null){var C=o.pending;C===null?m.next=m:(m.next=C.next,C.next=m),o.pending=m}v!==0&&ap(a,m,v)}}function Jo(t,n,a,o){ii[Nr++]=t,ii[Nr++]=n,ii[Nr++]=a,ii[Nr++]=o,nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function iu(t,n,a,o){return Jo(t,n,a,o),$o(t)}function er(t,n){return Jo(t,null,null,n),$o(t)}function ap(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var m=!1,v=t.return;v!==null;)v.childLanes|=a,o=v.alternate,o!==null&&(o.childLanes|=a),v.tag===22&&(t=v.stateNode,t===null||t._visibility&1||(m=!0)),t=v,v=v.return;return t.tag===3?(v=t.stateNode,m&&n!==null&&(m=31-kt(a),t=v.hiddenUpdates,o=t[m],o===null?t[m]=[n]:o.push(n),n.lane=a|536870912),v):null}function $o(t){if(50<uo)throw uo=0,hf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Or={};function Nv(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new Nv(t,n,a,o)}function au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function rp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,o,m,v){var C=0;if(o=t,typeof t=="function")au(t)&&(C=1);else if(typeof t=="string")C=F_(t,a,pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=Zn(31,a,n,m),t.elementType=R,t.lanes=v,t;case M:return nr(a.children,m,v,n);case y:C=8,m|=24;break;case b:return t=Zn(12,a,n,m|2),t.elementType=b,t.lanes=v,t;case E:return t=Zn(13,a,n,m),t.elementType=E,t.lanes=v,t;case T:return t=Zn(19,a,n,m),t.elementType=T,t.lanes=v,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:C=10;break t;case D:C=9;break t;case N:C=11;break t;case w:C=14;break t;case L:C=16,o=null;break t}C=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Zn(C,a,n,m),n.elementType=t,n.type=o,n.lanes=v,n}function nr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function ru(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function sp(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function su(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var op=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=op.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ge(n)},op.set(t,n),n)}return{value:t,source:n,stack:ge(n)}}var Pr=[],Br=0,el=null,ks=0,ri=[],si=0,ga=null,Ai=1,Ri="";function Ii(t,n){Pr[Br++]=ks,Pr[Br++]=el,el=t,ks=n}function lp(t,n,a){ri[si++]=Ai,ri[si++]=Ri,ri[si++]=ga,ga=t;var o=Ai;t=Ri;var m=32-kt(o)-1;o&=~(1<<m),a+=1;var v=32-kt(n)+m;if(30<v){var C=m-m%5;v=(o&(1<<C)-1).toString(32),o>>=C,m-=C,Ai=1<<32-kt(n)+m|a<<m|o,Ri=v+t}else Ai=1<<v|a<<m|o,Ri=t}function ou(t){t.return!==null&&(Ii(t,1),lp(t,1,0))}function lu(t){for(;t===el;)el=Pr[--Br],Pr[Br]=null,ks=Pr[--Br],Pr[Br]=null;for(;t===ga;)ga=ri[--si],ri[si]=null,Ri=ri[--si],ri[si]=null,Ai=ri[--si],ri[si]=null}function cp(t,n){ri[si++]=Ai,ri[si++]=Ri,ri[si++]=ga,Ai=n.id,Ri=n.overflow,ga=t}var En=null,je=null,Ee=!1,va=null,oi=!1,cu=Error(r(519));function _a(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xs(ai(n,t)),cu}function up(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[hn]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)_e(ho[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Ze(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),bn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Rm(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||_a(t,!0)}function fp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:En=En.return}}function zr(t){if(t!==En)return!1;if(!Ee)return fp(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Cf(t.type,t.memoizedProps)),a=!a),a&&je&&_a(t),fp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=Bm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=Bm(t)}else n===27?(n=je,Na(t.type)?(t=Nf,Nf=null,je=t):je=n):je=En?ci(t.stateNode.nextSibling):null;return!0}function ir(){je=En=null,Ee=!1}function uu(){var t=va;return t!==null&&(In===null?In=t:In.push.apply(In,t),va=null),t}function Xs(t){va===null?va=[t]:va.push(t)}var fu=V(null),ar=null,Hi=null;function Sa(t,n,a){ht(fu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=fu.current,tt(fu)}function du(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function hu(t,n,a,o){var m=t.child;for(m!==null&&(m.return=t);m!==null;){var v=m.dependencies;if(v!==null){var C=m.child;v=v.firstContext;t:for(;v!==null;){var z=v;v=m;for(var Y=0;Y<n.length;Y++)if(z.context===n[Y]){v.lanes|=a,z=v.alternate,z!==null&&(z.lanes|=a),du(v.return,a,t),o||(C=null);break t}v=z.next}}else if(m.tag===18){if(C=m.return,C===null)throw Error(r(341));C.lanes|=a,v=C.alternate,v!==null&&(v.lanes|=a),du(C,a,t),C=null}else C=m.child;if(C!==null)C.return=m;else for(C=m;C!==null;){if(C===t){C=null;break}if(m=C.sibling,m!==null){m.return=C.return,C=m;break}C=C.return}m=C}}function Fr(t,n,a,o){t=null;for(var m=n,v=!1;m!==null;){if(!v){if((m.flags&524288)!==0)v=!0;else if((m.flags&262144)!==0)break}if(m.tag===10){var C=m.alternate;if(C===null)throw Error(r(387));if(C=C.memoizedProps,C!==null){var z=m.type;Yn(m.pendingProps.value,C.value)||(t!==null?t.push(z):t=[z])}}else if(m===nt.current){if(C=m.alternate,C===null)throw Error(r(387));C.memoizedState.memoizedState!==m.memoizedState.memoizedState&&(t!==null?t.push(vo):t=[vo])}m=m.return}t!==null&&hu(n,t,a,o),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ar=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return dp(ar,t)}function il(t,n){return ar===null&&rr(t),dp(t,n)}function dp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var Ov=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Pv=c.unstable_scheduleCallback,Bv=c.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new Ov,data:new Map,refCount:0}}function Ws(t){t.refCount--,t.refCount===0&&Pv(Bv,function(){t.controller.abort()})}var qs=null,mu=0,Ir=0,Hr=null;function zv(t,n){if(qs===null){var a=qs=[];mu=0,Ir=_f(),Hr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return mu++,n.then(hp,hp),n}function hp(){if(--mu===0&&qs!==null){Hr!==null&&(Hr.status="fulfilled");var t=qs;qs=null,Ir=0,Hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Fv(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(m){a.push(m)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var m=0;m<a.length;m++)(0,a[m])(n)},function(m){for(o.status="rejected",o.reason=m,m=0;m<a.length;m++)(0,a[m])(void 0)}),o}var pp=I.S;I.S=function(t,n){Q0=B(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zv(t,n),pp!==null&&pp(t,n)};var sr=V(null);function xu(){var t=sr.current;return t!==null?t:qe.pooledCache}function al(t,n){n===null?ht(sr,sr.current):ht(sr,n.pool)}function mp(){var t=xu();return t===null?null:{parent:on._currentValue,pool:t}}var Vr=Error(r(460)),gu=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_p(t),t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var m=n;m.status="fulfilled",m.value=o}},function(o){if(n.status==="pending"){var m=n;m.status="rejected",m.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_p(t),t}throw lr=n,Vr}}function or(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(lr=a,Vr):a}}var lr=null;function vp(){if(lr===null)throw Error(r(459));var t=lr;return lr=null,t}function _p(t){if(t===Vr||t===rl)throw Error(r(483))}var Gr=null,Ys=0;function ol(t){var n=Ys;return Ys+=1,Gr===null&&(Gr=[]),gp(Gr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sp(t){function n($,K){if(t){var rt=$.deletions;rt===null?($.deletions=[K],$.flags|=16):rt.push(K)}}function a($,K){if(!t)return null;for(;K!==null;)n($,K),K=K.sibling;return null}function o($){for(var K=new Map;$!==null;)$.key!==null?K.set($.key,$):K.set($.index,$),$=$.sibling;return K}function m($,K){return $=Fi($,K),$.index=0,$.sibling=null,$}function v($,K,rt){return $.index=rt,t?(rt=$.alternate,rt!==null?(rt=rt.index,rt<K?($.flags|=67108866,K):rt):($.flags|=67108866,K)):($.flags|=1048576,K)}function C($){return t&&$.alternate===null&&($.flags|=67108866),$}function z($,K,rt,vt){return K===null||K.tag!==6?(K=ru(rt,$.mode,vt),K.return=$,K):(K=m(K,rt),K.return=$,K)}function Y($,K,rt,vt){var Jt=rt.type;return Jt===M?xt($,K,rt.props.children,vt,rt.key):K!==null&&(K.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===L&&or(Jt)===K.type)?(K=m(K,rt.props),Zs(K,rt),K.return=$,K):(K=tl(rt.type,rt.key,rt.props,null,$.mode,vt),Zs(K,rt),K.return=$,K)}function st($,K,rt,vt){return K===null||K.tag!==4||K.stateNode.containerInfo!==rt.containerInfo||K.stateNode.implementation!==rt.implementation?(K=su(rt,$.mode,vt),K.return=$,K):(K=m(K,rt.children||[]),K.return=$,K)}function xt($,K,rt,vt,Jt){return K===null||K.tag!==7?(K=nr(rt,$.mode,vt,Jt),K.return=$,K):(K=m(K,rt),K.return=$,K)}function _t($,K,rt){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=ru(""+K,$.mode,rt),K.return=$,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case d:return rt=tl(K.type,K.key,K.props,null,$.mode,rt),Zs(rt,K),rt.return=$,rt;case S:return K=su(K,$.mode,rt),K.return=$,K;case L:return K=or(K),_t($,K,rt)}if(X(K)||P(K))return K=nr(K,$.mode,rt,null),K.return=$,K;if(typeof K.then=="function")return _t($,ol(K),rt);if(K.$$typeof===U)return _t($,il($,K),rt);ll($,K)}return null}function ct($,K,rt,vt){var Jt=K!==null?K.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return Jt!==null?null:z($,K,""+rt,vt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case d:return rt.key===Jt?Y($,K,rt,vt):null;case S:return rt.key===Jt?st($,K,rt,vt):null;case L:return rt=or(rt),ct($,K,rt,vt)}if(X(rt)||P(rt))return Jt!==null?null:xt($,K,rt,vt,null);if(typeof rt.then=="function")return ct($,K,ol(rt),vt);if(rt.$$typeof===U)return ct($,K,il($,rt),vt);ll($,rt)}return null}function ft($,K,rt,vt,Jt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return $=$.get(rt)||null,z(K,$,""+vt,Jt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case d:return $=$.get(vt.key===null?rt:vt.key)||null,Y(K,$,vt,Jt);case S:return $=$.get(vt.key===null?rt:vt.key)||null,st(K,$,vt,Jt);case L:return vt=or(vt),ft($,K,rt,vt,Jt)}if(X(vt)||P(vt))return $=$.get(rt)||null,xt(K,$,vt,Jt,null);if(typeof vt.then=="function")return ft($,K,rt,ol(vt),Jt);if(vt.$$typeof===U)return ft($,K,rt,il(K,vt),Jt);ll(K,vt)}return null}function Gt($,K,rt,vt){for(var Jt=null,De=null,Yt=K,pe=K=0,ye=null;Yt!==null&&pe<rt.length;pe++){Yt.index>pe?(ye=Yt,Yt=null):ye=Yt.sibling;var Ue=ct($,Yt,rt[pe],vt);if(Ue===null){Yt===null&&(Yt=ye);break}t&&Yt&&Ue.alternate===null&&n($,Yt),K=v(Ue,K,pe),De===null?Jt=Ue:De.sibling=Ue,De=Ue,Yt=ye}if(pe===rt.length)return a($,Yt),Ee&&Ii($,pe),Jt;if(Yt===null){for(;pe<rt.length;pe++)Yt=_t($,rt[pe],vt),Yt!==null&&(K=v(Yt,K,pe),De===null?Jt=Yt:De.sibling=Yt,De=Yt);return Ee&&Ii($,pe),Jt}for(Yt=o(Yt);pe<rt.length;pe++)ye=ft(Yt,$,pe,rt[pe],vt),ye!==null&&(t&&ye.alternate!==null&&Yt.delete(ye.key===null?pe:ye.key),K=v(ye,K,pe),De===null?Jt=ye:De.sibling=ye,De=ye);return t&&Yt.forEach(function(Fa){return n($,Fa)}),Ee&&Ii($,pe),Jt}function ie($,K,rt,vt){if(rt==null)throw Error(r(151));for(var Jt=null,De=null,Yt=K,pe=K=0,ye=null,Ue=rt.next();Yt!==null&&!Ue.done;pe++,Ue=rt.next()){Yt.index>pe?(ye=Yt,Yt=null):ye=Yt.sibling;var Fa=ct($,Yt,Ue.value,vt);if(Fa===null){Yt===null&&(Yt=ye);break}t&&Yt&&Fa.alternate===null&&n($,Yt),K=v(Fa,K,pe),De===null?Jt=Fa:De.sibling=Fa,De=Fa,Yt=ye}if(Ue.done)return a($,Yt),Ee&&Ii($,pe),Jt;if(Yt===null){for(;!Ue.done;pe++,Ue=rt.next())Ue=_t($,Ue.value,vt),Ue!==null&&(K=v(Ue,K,pe),De===null?Jt=Ue:De.sibling=Ue,De=Ue);return Ee&&Ii($,pe),Jt}for(Yt=o(Yt);!Ue.done;pe++,Ue=rt.next())Ue=ft(Yt,$,pe,Ue.value,vt),Ue!==null&&(t&&Ue.alternate!==null&&Yt.delete(Ue.key===null?pe:Ue.key),K=v(Ue,K,pe),De===null?Jt=Ue:De.sibling=Ue,De=Ue);return t&&Yt.forEach(function(j_){return n($,j_)}),Ee&&Ii($,pe),Jt}function Ge($,K,rt,vt){if(typeof rt=="object"&&rt!==null&&rt.type===M&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case d:t:{for(var Jt=rt.key;K!==null;){if(K.key===Jt){if(Jt=rt.type,Jt===M){if(K.tag===7){a($,K.sibling),vt=m(K,rt.props.children),vt.return=$,$=vt;break t}}else if(K.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===L&&or(Jt)===K.type){a($,K.sibling),vt=m(K,rt.props),Zs(vt,rt),vt.return=$,$=vt;break t}a($,K);break}else n($,K);K=K.sibling}rt.type===M?(vt=nr(rt.props.children,$.mode,vt,rt.key),vt.return=$,$=vt):(vt=tl(rt.type,rt.key,rt.props,null,$.mode,vt),Zs(vt,rt),vt.return=$,$=vt)}return C($);case S:t:{for(Jt=rt.key;K!==null;){if(K.key===Jt)if(K.tag===4&&K.stateNode.containerInfo===rt.containerInfo&&K.stateNode.implementation===rt.implementation){a($,K.sibling),vt=m(K,rt.children||[]),vt.return=$,$=vt;break t}else{a($,K);break}else n($,K);K=K.sibling}vt=su(rt,$.mode,vt),vt.return=$,$=vt}return C($);case L:return rt=or(rt),Ge($,K,rt,vt)}if(X(rt))return Gt($,K,rt,vt);if(P(rt)){if(Jt=P(rt),typeof Jt!="function")throw Error(r(150));return rt=Jt.call(rt),ie($,K,rt,vt)}if(typeof rt.then=="function")return Ge($,K,ol(rt),vt);if(rt.$$typeof===U)return Ge($,K,il($,rt),vt);ll($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,K!==null&&K.tag===6?(a($,K.sibling),vt=m(K,rt),vt.return=$,$=vt):(a($,K),vt=ru(rt,$.mode,vt),vt.return=$,$=vt),C($)):a($,K)}return function($,K,rt,vt){try{Ys=0;var Jt=Ge($,K,rt,vt);return Gr=null,Jt}catch(Yt){if(Yt===Vr||Yt===rl)throw Yt;var De=Zn(29,Yt,null,$.mode);return De.lanes=vt,De.return=$,De}finally{}}}var cr=Sp(!0),yp=Sp(!1),ya=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var m=o.pending;return m===null?n.next=n:(n.next=m.next,m.next=n),o.pending=n,n=$o(t),ap(t,null,a),n}return Jo(t,o,n,a),$o(t)}function js(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ws(t,a)}}function Su(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var m=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var C={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};v===null?m=v=C:v=v.next=C,a=a.next}while(a!==null);v===null?m=v=n:v=v.next=n}else m=v=n;a={baseState:o.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var yu=!1;function Ks(){if(yu){var t=Hr;if(t!==null)throw t}}function Qs(t,n,a,o){yu=!1;var m=t.updateQueue;ya=!1;var v=m.firstBaseUpdate,C=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var Y=z,st=Y.next;Y.next=null,C===null?v=st:C.next=st,C=Y;var xt=t.alternate;xt!==null&&(xt=xt.updateQueue,z=xt.lastBaseUpdate,z!==C&&(z===null?xt.firstBaseUpdate=st:z.next=st,xt.lastBaseUpdate=Y))}if(v!==null){var _t=m.baseState;C=0,xt=st=Y=null,z=v;do{var ct=z.lane&-536870913,ft=ct!==z.lane;if(ft?(Se&ct)===ct:(o&ct)===ct){ct!==0&&ct===Ir&&(yu=!0),xt!==null&&(xt=xt.next={lane:0,tag:z.tag,payload:z.payload,callback:null,next:null});t:{var Gt=t,ie=z;ct=n;var Ge=a;switch(ie.tag){case 1:if(Gt=ie.payload,typeof Gt=="function"){_t=Gt.call(Ge,_t,ct);break t}_t=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ie.payload,ct=typeof Gt=="function"?Gt.call(Ge,_t,ct):Gt,ct==null)break t;_t=_({},_t,ct);break t;case 2:ya=!0}}ct=z.callback,ct!==null&&(t.flags|=64,ft&&(t.flags|=8192),ft=m.callbacks,ft===null?m.callbacks=[ct]:ft.push(ct))}else ft={lane:ct,tag:z.tag,payload:z.payload,callback:z.callback,next:null},xt===null?(st=xt=ft,Y=_t):xt=xt.next=ft,C|=ct;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;ft=z,z=ft.next,ft.next=null,m.lastBaseUpdate=ft,m.shared.pending=null}}while(!0);xt===null&&(Y=_t),m.baseState=Y,m.firstBaseUpdate=st,m.lastBaseUpdate=xt,v===null&&(m.shared.lanes=0),Ca|=C,t.lanes=C,t.memoizedState=_t}}function Mp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function bp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Mp(a[t],n)}var kr=V(null),cl=V(0);function Ep(t,n){t=Ki,ht(cl,t),ht(kr,n),Ki=t|n.baseLanes}function Mu(){ht(cl,Ki),ht(kr,kr.current)}function bu(){Ki=cl.current,tt(kr),tt(cl)}var jn=V(null),li=null;function Ea(t){var n=t.alternate;ht(en,en.current&1),ht(jn,t),li===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(li=t)}function Eu(t){ht(en,en.current),ht(jn,t),li===null&&(li=t)}function Tp(t){t.tag===22?(ht(en,en.current),ht(jn,t),li===null&&(li=t)):Ta()}function Ta(){ht(en,en.current),ht(jn,jn.current)}function Kn(t){tt(jn),li===t&&(li=null),tt(en)}var en=V(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Uf(a)||Lf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,fe=null,He=null,ln=null,fl=!1,Xr=!1,ur=!1,dl=0,Js=0,Wr=null,Iv=0;function Je(){throw Error(r(321))}function Tu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Au(t,n,a,o,m,v){return Gi=v,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?l0:Vu,ur=!1,v=a(o,m),ur=!1,Xr&&(v=Rp(n,a,o,m)),Ap(t),v}function Ap(t){I.H=eo;var n=He!==null&&He.next!==null;if(Gi=0,ln=He=fe=null,fl=!1,Js=0,Wr=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&nl(t)&&(cn=!0))}function Rp(t,n,a,o){fe=t;var m=0;do{if(Xr&&(Wr=null),Js=0,Xr=!1,25<=m)throw Error(r(301));if(m+=1,ln=He=null,t.updateQueue!=null){var v=t.updateQueue;v.lastEffect=null,v.events=null,v.stores=null,v.memoCache!=null&&(v.memoCache.index=0)}I.H=c0,v=n(a,o)}while(Xr);return v}function Hv(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?$s(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(fe.flags|=1024),n}function Ru(){var t=dl!==0;return dl=0,t}function Cu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function wu(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Gi=0,ln=He=fe=null,Xr=!1,Js=dl=0,Wr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?fe.memoizedState=ln=t:ln=ln.next=t,ln}function nn(){if(He===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=ln===null?fe.memoizedState:ln.next;if(n!==null)ln=n,He=t;else{if(t===null)throw fe.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},ln===null?fe.memoizedState=ln=t:ln=ln.next=t}return ln}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(t){var n=Js;return Js+=1,Wr===null&&(Wr=[]),t=gp(Wr,t,n),n=fe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?l0:Vu),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $s(t);if(t.$$typeof===U)return Tn(t)}throw Error(r(438,String(t)))}function Du(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(m){return m.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=A;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=nn();return Uu(n,He,t)}function Uu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var m=t.baseQueue,v=o.pending;if(v!==null){if(m!==null){var C=m.next;m.next=v.next,v.next=C}n.baseQueue=m=v,o.pending=null}if(v=t.baseState,m===null)t.memoizedState=v;else{n=m.next;var z=C=null,Y=null,st=n,xt=!1;do{var _t=st.lane&-536870913;if(_t!==st.lane?(Se&_t)===_t:(Gi&_t)===_t){var ct=st.revertLane;if(ct===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),_t===Ir&&(xt=!0);else if((Gi&ct)===ct){st=st.next,ct===Ir&&(xt=!0);continue}else _t={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},Y===null?(z=Y=_t,C=v):Y=Y.next=_t,fe.lanes|=ct,Ca|=ct;_t=st.action,ur&&a(v,_t),v=st.hasEagerState?st.eagerState:a(v,_t)}else ct={lane:_t,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},Y===null?(z=Y=ct,C=v):Y=Y.next=ct,fe.lanes|=_t,Ca|=_t;st=st.next}while(st!==null&&st!==n);if(Y===null?C=v:Y.next=z,!Yn(v,t.memoizedState)&&(cn=!0,xt&&(a=Hr,a!==null)))throw a;t.memoizedState=v,t.baseState=C,t.baseQueue=Y,o.lastRenderedState=v}return m===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Lu(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,m=a.pending,v=n.memoizedState;if(m!==null){a.pending=null;var C=m=m.next;do v=t(v,C.action),C=C.next;while(C!==m);Yn(v,n.memoizedState)||(cn=!0),n.memoizedState=v,n.baseQueue===null&&(n.baseState=v),a.lastRenderedState=v}return[v,o]}function Cp(t,n,a){var o=fe,m=nn(),v=Ee;if(v){if(a===void 0)throw Error(r(407));a=a()}else a=n();var C=!Yn((He||m).memoizedState,a);if(C&&(m.memoizedState=a,cn=!0),m=m.queue,Pu(Up.bind(null,o,m,t),[t]),m.getSnapshot!==n||C||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,qr(9,{destroy:void 0},Dp.bind(null,o,m,a,n),null),qe===null)throw Error(r(349));v||(Gi&127)!==0||wp(o,n,a)}return a}function wp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=hl(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Dp(t,n,a,o){n.value=a,n.getSnapshot=o,Lp(n)&&Np(t)}function Up(t,n,a){return a(function(){Lp(n)&&Np(t)})}function Lp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Np(t){var n=er(t,2);n!==null&&Hn(n,t,2)}function Nu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ur){Kt(!0);try{a()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Op(t,n,a,o){return t.baseState=a,Uu(t,He,typeof o=="function"?o:ki)}function Vv(t,n,a,o,m){if(vl(t))throw Error(r(485));if(t=n.action,t!==null){var v={payload:m,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(C){v.listeners.push(C)}};I.T!==null?a(!0):v.isTransition=!1,o(v),a=n.pending,a===null?(v.next=n.pending=v,Pp(n,v)):(v.next=a.next,n.pending=a.next=v)}}function Pp(t,n){var a=n.action,o=n.payload,m=t.state;if(n.isTransition){var v=I.T,C={};I.T=C;try{var z=a(m,o),Y=I.S;Y!==null&&Y(C,z),Bp(t,n,z)}catch(st){Ou(t,n,st)}finally{v!==null&&C.types!==null&&(v.types=C.types),I.T=v}}else try{v=a(m,o),Bp(t,n,v)}catch(st){Ou(t,n,st)}}function Bp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zp(t,n,o)},function(o){return Ou(t,n,o)}):zp(t,n,a)}function zp(t,n,a){n.status="fulfilled",n.value=a,Fp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Pp(t,a)))}function Ou(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Fp(n),n=n.next;while(n!==o)}t.action=null}function Fp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ip(t,n){return n}function Hp(t,n){if(Ee){var a=qe.formState;if(a!==null){t:{var o=fe;if(Ee){if(je){e:{for(var m=je,v=oi;m.nodeType!==8;){if(!v){m=null;break e}if(m=ci(m.nextSibling),m===null){m=null;break e}}v=m.data,m=v==="F!"||v==="F"?m:null}if(m){je=ci(m.nextSibling),o=m.data==="F!";break t}}_a(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:n},a.queue=o,a=r0.bind(null,fe,o),o.dispatch=a,o=Nu(!1),v=Hu.bind(null,fe,!1,o.queue),o=Ln(),m={state:n,dispatch:null,action:t,pending:null},o.queue=m,a=Vv.bind(null,fe,m,v,a),m.dispatch=a,o.memoizedState=t,[n,a,!1]}function Vp(t){var n=nn();return Gp(n,He,t)}function Gp(t,n,a){if(n=Uu(t,n,Ip)[0],t=ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=$s(n)}catch(C){throw C===Vr?rl:C}else o=n;n=nn();var m=n.queue,v=m.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,qr(9,{destroy:void 0},Gv.bind(null,m,a),null)),[o,v,t]}function Gv(t,n){t.action=n}function kp(t){var n=nn(),a=He;if(a!==null)return Gp(n,a,t);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function qr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=hl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Xp(){return nn().memoizedState}function xl(t,n,a,o){var m=Ln();fe.flags|=t,m.memoizedState=qr(1|n,{destroy:void 0},a,o===void 0?null:o)}function gl(t,n,a,o){var m=nn();o=o===void 0?null:o;var v=m.memoizedState.inst;He!==null&&o!==null&&Tu(o,He.memoizedState.deps)?m.memoizedState=qr(n,v,a,o):(fe.flags|=t,m.memoizedState=qr(1|n,v,a,o))}function Wp(t,n){xl(8390656,8,t,n)}function Pu(t,n){gl(2048,8,t,n)}function kv(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=hl(),fe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function qp(t){var n=nn().memoizedState;return kv({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Yp(t,n){return gl(4,2,t,n)}function Zp(t,n){return gl(4,4,t,n)}function jp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Kp(t,n,a){a=a!=null?a.concat([t]):null,gl(4,4,jp.bind(null,n,t),a)}function Bu(){}function Qp(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Tu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Jp(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Tu(n,o[1]))return o[0];if(o=t(),ur){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[o,n],o}function zu(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(Se&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=$0(),fe.lanes|=t,Ca|=t,a)}function $p(t,n,a,o){return Yn(a,n)?a:kr.current!==null?(t=zu(t,a,o),Yn(t,n)||(cn=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(Se&261930)===0?(cn=!0,t.memoizedState=a):(t=$0(),fe.lanes|=t,Ca|=t,n)}function t0(t,n,a,o,m){var v=k.p;k.p=v!==0&&8>v?v:8;var C=I.T,z={};I.T=z,Hu(t,!1,n,a);try{var Y=m(),st=I.S;if(st!==null&&st(z,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var xt=Fv(Y,o);to(t,n,xt,$n(t))}else to(t,n,o,$n(t))}catch(_t){to(t,n,{then:function(){},status:"rejected",reason:_t},$n())}finally{k.p=v,C!==null&&z.types!==null&&(C.types=z.types),I.T=C}}function Xv(){}function Fu(t,n,a,o){if(t.tag!==5)throw Error(r(476));var m=e0(t).queue;t0(t,m,n,Z,a===null?Xv:function(){return n0(t),a(o)})}function e0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function n0(t){var n=e0(t);n.next===null&&(n=t.alternate.memoizedState),to(t,n.next.queue,{},$n())}function Iu(){return Tn(vo)}function i0(){return nn().memoizedState}function a0(){return nn().memoizedState}function Wv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Ma(a);var o=ba(n,t,a);o!==null&&(Hn(o,n,a),js(o,n,a)),n={cache:pu()},t.payload=n;return}n=n.return}}function qv(t,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?s0(n,a):(a=iu(t,n,a,o),a!==null&&(Hn(a,t,o),o0(a,n,o)))}function r0(t,n,a){var o=$n();to(t,n,a,o)}function to(t,n,a,o){var m={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))s0(n,m);else{var v=t.alternate;if(t.lanes===0&&(v===null||v.lanes===0)&&(v=n.lastRenderedReducer,v!==null))try{var C=n.lastRenderedState,z=v(C,a);if(m.hasEagerState=!0,m.eagerState=z,Yn(z,C))return Jo(t,n,m,0),qe===null&&Qo(),!1}catch{}finally{}if(a=iu(t,n,m,o),a!==null)return Hn(a,t,o),o0(a,n,o),!0}return!1}function Hu(t,n,a,o){if(o={lane:2,revertLane:_f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(r(479))}else n=iu(t,a,o,2),n!==null&&Hn(n,t,2)}function vl(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function s0(t,n){Xr=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function o0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ws(t,a)}}var eo={readContext:Tn,use:pl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};eo.useEffectEvent=Je;var l0={readContext:Tn,use:pl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Wp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xl(4194308,4,jp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xl(4194308,4,t,n)},useInsertionEffect:function(t,n){xl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var o=t();if(ur){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Ln();if(a!==void 0){var m=a(n);if(ur){Kt(!0);try{a(n)}finally{Kt(!1)}}}else m=n;return o.memoizedState=o.baseState=m,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:m},o.queue=t,t=t.dispatch=qv.bind(null,fe,t),[o.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Nu(t);var n=t.queue,a=r0.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bu,useDeferredValue:function(t,n){var a=Ln();return zu(a,t,n)},useTransition:function(){var t=Nu(!1);return t=t0.bind(null,fe,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=fe,m=Ln();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(Se&127)!==0||wp(o,n,a)}m.memoizedState=a;var v={value:a,getSnapshot:n};return m.queue=v,Wp(Up.bind(null,o,v,t),[t]),o.flags|=2048,qr(9,{destroy:void 0},Dp.bind(null,o,v,a,n),null),a},useId:function(){var t=Ln(),n=qe.identifierPrefix;if(Ee){var a=Ri,o=Ai;a=(o&~(1<<32-kt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Iv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Iu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hu.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Du,useCacheRefresh:function(){return Ln().memoizedState=Wv.bind(null,fe)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Vu={readContext:Tn,use:pl,useCallback:Qp,useContext:Tn,useEffect:Pu,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:Zp,useMemo:Jp,useReducer:ml,useRef:Xp,useState:function(){return ml(ki)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=nn();return $p(a,He.memoizedState,t,n)},useTransition:function(){var t=ml(ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Cp,useId:i0,useHostTransitionStatus:Iu,useFormState:Vp,useActionState:Vp,useOptimistic:function(t,n){var a=nn();return Op(a,He,t,n)},useMemoCache:Du,useCacheRefresh:a0};Vu.useEffectEvent=qp;var c0={readContext:Tn,use:pl,useCallback:Qp,useContext:Tn,useEffect:Pu,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:Zp,useMemo:Jp,useReducer:Lu,useRef:Xp,useState:function(){return Lu(ki)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=nn();return He===null?zu(a,t,n):$p(a,He.memoizedState,t,n)},useTransition:function(){var t=Lu(ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Cp,useId:i0,useHostTransitionStatus:Iu,useFormState:kp,useActionState:kp,useOptimistic:function(t,n){var a=nn();return He!==null?Op(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Du,useCacheRefresh:a0};c0.useEffectEvent=qp;function Gu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=$n(),m=Ma(o);m.payload=n,a!=null&&(m.callback=a),n=ba(t,m,o),n!==null&&(Hn(n,t,o),js(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=$n(),m=Ma(o);m.tag=1,m.payload=n,a!=null&&(m.callback=a),n=ba(t,m,o),n!==null&&(Hn(n,t,o),js(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),o=Ma(a);o.tag=2,n!=null&&(o.callback=n),n=ba(t,o,a),n!==null&&(Hn(n,t,a),js(n,t,a))}};function u0(t,n,a,o,m,v,C){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,v,C):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,o)||!Vs(m,v):!0}function f0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&ku.enqueueReplaceState(n,n.state,null)}function fr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var m in t)a[m]===void 0&&(a[m]=t[m])}return a}function d0(t){Ko(t)}function h0(t){console.error(t)}function p0(t){Ko(t)}function _l(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function m0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(m){setTimeout(function(){throw m})}}function Xu(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(t,n)},a}function x0(t){return t=Ma(t),t.tag=3,t}function g0(t,n,a,o){var m=a.type.getDerivedStateFromError;if(typeof m=="function"){var v=o.value;t.payload=function(){return m(v)},t.callback=function(){m0(n,a,o)}}var C=a.stateNode;C!==null&&typeof C.componentDidCatch=="function"&&(t.callback=function(){m0(n,a,o),typeof m!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var z=o.stack;this.componentDidCatch(o.value,{componentStack:z!==null?z:""})})}function Yv(t,n,a,o,m){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Fr(n,a,m,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Ul():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=m,o===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),xf(t,o,m)),!1;case 22:return a.flags|=65536,o===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),xf(t,o,m)),!1}throw Error(r(435,a.tag))}return xf(t,o,m),Ul(),!1}if(Ee)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=m,o!==cu&&(t=Error(r(422),{cause:o}),Xs(ai(t,a)))):(o!==cu&&(n=Error(r(423),{cause:o}),Xs(ai(n,a))),t=t.current.alternate,t.flags|=65536,m&=-m,t.lanes|=m,o=ai(o,a),m=Xu(t.stateNode,o,m),Su(t,m),$e!==4&&($e=2)),!1;var v=Error(r(520),{cause:o});if(v=ai(v,a),co===null?co=[v]:co.push(v),$e!==4&&($e=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=m&-m,a.lanes|=t,t=Xu(a.stateNode,o,t),Su(a,t),!1;case 1:if(n=a.type,v=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(wa===null||!wa.has(v))))return a.flags|=65536,m&=-m,a.lanes|=m,m=x0(m),g0(m,t,a,o),Su(a,m),!1}a=a.return}while(a!==null);return!1}var Wu=Error(r(461)),cn=!1;function An(t,n,a,o){n.child=t===null?yp(n,null,a,o):cr(n,t.child,a,o)}function v0(t,n,a,o,m){a=a.render;var v=n.ref;if("ref"in o){var C={};for(var z in o)z!=="ref"&&(C[z]=o[z])}else C=o;return rr(n),o=Au(t,n,a,C,v,m),z=Ru(),t!==null&&!cn?(Cu(t,n,m),Xi(t,n,m)):(Ee&&z&&ou(n),n.flags|=1,An(t,n,o,m),n.child)}function _0(t,n,a,o,m){if(t===null){var v=a.type;return typeof v=="function"&&!au(v)&&v.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=v,S0(t,n,v,o,m)):(t=tl(a.type,null,o,n,n.mode,m),t.ref=n.ref,t.return=n,n.child=t)}if(v=t.child,!$u(t,m)){var C=v.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(C,o)&&t.ref===n.ref)return Xi(t,n,m)}return n.flags|=1,t=Fi(v,o),t.ref=n.ref,t.return=n,n.child=t}function S0(t,n,a,o,m){if(t!==null){var v=t.memoizedProps;if(Vs(v,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=v,$u(t,m))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,Xi(t,n,m)}return qu(t,n,a,o,m)}function y0(t,n,a,o){var m=o.children,v=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(v=v!==null?v.baseLanes|a:a,t!==null){for(o=n.child=t.child,m=0;o!==null;)m=m|o.lanes|o.childLanes,o=o.sibling;o=m&~v}else o=0,n.child=null;return M0(t,n,v,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,v!==null?v.cachePool:null),v!==null?Ep(n,v):Mu(),Tp(n);else return o=n.lanes=536870912,M0(t,n,v!==null?v.baseLanes|a:a,a,o)}else v!==null?(al(n,v.cachePool),Ep(n,v),Ta(),n.memoizedState=null):(t!==null&&al(n,null),Mu(),Ta());return An(t,n,m,a),n.child}function no(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function M0(t,n,a,o,m){var v=xu();return v=v===null?null:{parent:on._currentValue,pool:v},n.memoizedState={baseLanes:a,cachePool:v},t!==null&&al(n,null),Mu(),Tp(n),t!==null&&Fr(t,n,o,!0),n.childLanes=m,null}function Sl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function b0(t,n,a){return cr(n,t.child,null,a),t=Sl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Zv(t,n,a){var o=n.pendingProps,m=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ee){if(o.mode==="hidden")return t=Sl(n,o),n.lanes=536870912,no(null,t);if(Eu(n),(t=je)?(t=Pm(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=sp(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw _a(n);return n.lanes=536870912,null}return Sl(n,o)}var v=t.memoizedState;if(v!==null){var C=v.dehydrated;if(Eu(n),m)if(n.flags&256)n.flags&=-257,n=b0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Fr(t,n,a,!1),m=(a&t.childLanes)!==0,cn||m){if(o=qe,o!==null&&(C=Ds(o,a),C!==0&&C!==v.retryLane))throw v.retryLane=C,er(t,C),Hn(o,t,C),Wu;Ul(),n=b0(t,n,a)}else t=v.treeContext,je=ci(C.nextSibling),En=n,Ee=!0,va=null,oi=!1,t!==null&&cp(n,t),n=Sl(n,o),n.flags|=4096;return n}return t=Fi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function qu(t,n,a,o,m){return rr(n),a=Au(t,n,a,o,void 0,m),o=Ru(),t!==null&&!cn?(Cu(t,n,m),Xi(t,n,m)):(Ee&&o&&ou(n),n.flags|=1,An(t,n,a,m),n.child)}function E0(t,n,a,o,m,v){return rr(n),n.updateQueue=null,a=Rp(n,o,a,m),Ap(t),o=Ru(),t!==null&&!cn?(Cu(t,n,v),Xi(t,n,v)):(Ee&&o&&ou(n),n.flags|=1,An(t,n,a,v),n.child)}function T0(t,n,a,o,m){if(rr(n),n.stateNode===null){var v=Or,C=a.contextType;typeof C=="object"&&C!==null&&(v=Tn(C)),v=new a(o,v),n.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,v.updater=ku,n.stateNode=v,v._reactInternals=n,v=n.stateNode,v.props=o,v.state=n.memoizedState,v.refs={},vu(n),C=a.contextType,v.context=typeof C=="object"&&C!==null?Tn(C):Or,v.state=n.memoizedState,C=a.getDerivedStateFromProps,typeof C=="function"&&(Gu(n,a,C,o),v.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(C=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),C!==v.state&&ku.enqueueReplaceState(v,v.state,null),Qs(n,o,v,m),Ks(),v.state=n.memoizedState),typeof v.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){v=n.stateNode;var z=n.memoizedProps,Y=fr(a,z);v.props=Y;var st=v.context,xt=a.contextType;C=Or,typeof xt=="object"&&xt!==null&&(C=Tn(xt));var _t=a.getDerivedStateFromProps;xt=typeof _t=="function"||typeof v.getSnapshotBeforeUpdate=="function",z=n.pendingProps!==z,xt||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(z||st!==C)&&f0(n,v,o,C),ya=!1;var ct=n.memoizedState;v.state=ct,Qs(n,o,v,m),Ks(),st=n.memoizedState,z||ct!==st||ya?(typeof _t=="function"&&(Gu(n,a,_t,o),st=n.memoizedState),(Y=ya||u0(n,a,Y,o,ct,st,C))?(xt||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),v.props=o,v.state=st,v.context=C,o=Y):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{v=n.stateNode,_u(t,n),C=n.memoizedProps,xt=fr(a,C),v.props=xt,_t=n.pendingProps,ct=v.context,st=a.contextType,Y=Or,typeof st=="object"&&st!==null&&(Y=Tn(st)),z=a.getDerivedStateFromProps,(st=typeof z=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(C!==_t||ct!==Y)&&f0(n,v,o,Y),ya=!1,ct=n.memoizedState,v.state=ct,Qs(n,o,v,m),Ks();var ft=n.memoizedState;C!==_t||ct!==ft||ya||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof z=="function"&&(Gu(n,a,z,o),ft=n.memoizedState),(xt=ya||u0(n,a,xt,o,ct,ft,Y)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(st||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(o,ft,Y),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(o,ft,Y)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||C===t.memoizedProps&&ct===t.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&ct===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),v.props=o,v.state=ft,v.context=Y,o=xt):(typeof v.componentDidUpdate!="function"||C===t.memoizedProps&&ct===t.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&ct===t.memoizedState||(n.flags|=1024),o=!1)}return v=o,yl(t,n),o=(n.flags&128)!==0,v||o?(v=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:v.render(),n.flags|=1,t!==null&&o?(n.child=cr(n,t.child,null,m),n.child=cr(n,null,a,m)):An(t,n,a,m),n.memoizedState=v.state,t=n.child):t=Xi(t,n,m),t}function A0(t,n,a,o){return ir(),n.flags|=256,An(t,n,a,o),n.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(t){return{baseLanes:t,cachePool:mp()}}function ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function R0(t,n,a){var o=n.pendingProps,m=!1,v=(n.flags&128)!==0,C;if((C=v)||(C=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),C&&(m=!0,n.flags&=-129),C=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(m?Ea(n):Ta(),(t=je)?(t=Pm(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=sp(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw _a(n);return Lf(t)?n.lanes=32:n.lanes=536870912,null}var z=o.children;return o=o.fallback,m?(Ta(),m=n.mode,z=Ml({mode:"hidden",children:z},m),o=nr(o,m,a,null),z.return=n,o.return=n,z.sibling=o,n.child=z,o=n.child,o.memoizedState=Zu(a),o.childLanes=ju(t,C,a),n.memoizedState=Yu,no(null,o)):(Ea(n),Ku(n,z))}var Y=t.memoizedState;if(Y!==null&&(z=Y.dehydrated,z!==null)){if(v)n.flags&256?(Ea(n),n.flags&=-257,n=Qu(t,n,a)):n.memoizedState!==null?(Ta(),n.child=t.child,n.flags|=128,n=null):(Ta(),z=o.fallback,m=n.mode,o=Ml({mode:"visible",children:o.children},m),z=nr(z,m,a,null),z.flags|=2,o.return=n,z.return=n,o.sibling=z,n.child=o,cr(n,t.child,null,a),o=n.child,o.memoizedState=Zu(a),o.childLanes=ju(t,C,a),n.memoizedState=Yu,n=no(null,o));else if(Ea(n),Lf(z)){if(C=z.nextSibling&&z.nextSibling.dataset,C)var st=C.dgst;C=st,o=Error(r(419)),o.stack="",o.digest=C,Xs({value:o,source:null,stack:null}),n=Qu(t,n,a)}else if(cn||Fr(t,n,a,!1),C=(a&t.childLanes)!==0,cn||C){if(C=qe,C!==null&&(o=Ds(C,a),o!==0&&o!==Y.retryLane))throw Y.retryLane=o,er(t,o),Hn(C,t,o),Wu;Uf(z)||Ul(),n=Qu(t,n,a)}else Uf(z)?(n.flags|=192,n.child=t.child,n=null):(t=Y.treeContext,je=ci(z.nextSibling),En=n,Ee=!0,va=null,oi=!1,t!==null&&cp(n,t),n=Ku(n,o.children),n.flags|=4096);return n}return m?(Ta(),z=o.fallback,m=n.mode,Y=t.child,st=Y.sibling,o=Fi(Y,{mode:"hidden",children:o.children}),o.subtreeFlags=Y.subtreeFlags&65011712,st!==null?z=Fi(st,z):(z=nr(z,m,a,null),z.flags|=2),z.return=n,o.return=n,o.sibling=z,n.child=o,no(null,o),o=n.child,z=t.child.memoizedState,z===null?z=Zu(a):(m=z.cachePool,m!==null?(Y=on._currentValue,m=m.parent!==Y?{parent:Y,pool:Y}:m):m=mp(),z={baseLanes:z.baseLanes|a,cachePool:m}),o.memoizedState=z,o.childLanes=ju(t,C,a),n.memoizedState=Yu,no(t.child,o)):(Ea(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(C=n.deletions,C===null?(n.deletions=[t],n.flags|=16):C.push(t)),n.child=a,n.memoizedState=null,a)}function Ku(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function Qu(t,n,a){return cr(n,t.child,null,a),t=Ku(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function C0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),du(t.return,n,a)}function Ju(t,n,a,o,m,v){var C=t.memoizedState;C===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:m,treeForkCount:v}:(C.isBackwards=n,C.rendering=null,C.renderingStartTime=0,C.last=o,C.tail=a,C.tailMode=m,C.treeForkCount=v)}function w0(t,n,a){var o=n.pendingProps,m=o.revealOrder,v=o.tail;o=o.children;var C=en.current,z=(C&2)!==0;if(z?(C=C&1|2,n.flags|=128):C&=1,ht(en,C),An(t,n,o,a),o=Ee?ks:0,!z&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&C0(t,a,n);else if(t.tag===19)C0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(m){case"forwards":for(a=n.child,m=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(m=a),a=a.sibling;a=m,a===null?(m=n.child,n.child=null):(m=a.sibling,a.sibling=null),Ju(n,!1,m,a,v,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,m=n.child,n.child=null;m!==null;){if(t=m.alternate,t!==null&&ul(t)===null){n.child=m;break}t=m.sibling,m.sibling=a,a=m,m=t}Ju(n,!0,a,null,v,o);break;case"together":Ju(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function $u(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function jv(t,n,a){switch(n.tag){case 3:yt(n,n.stateNode.containerInfo),Sa(n,on,t.memoizedState.cache),ir();break;case 27:case 5:Ot(n);break;case 4:yt(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Eu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?R0(t,n,a):(Ea(n),t=Xi(t,n,a),t!==null?t.sibling:null);Ea(n);break;case 19:var m=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Fr(t,n,a,!1),o=(a&n.childLanes)!==0),m){if(o)return w0(t,n,a);n.flags|=128}if(m=n.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),ht(en,en.current),o)break;return null;case 22:return n.lanes=0,y0(t,n,a,n.pendingProps);case 24:Sa(n,on,t.memoizedState.cache)}return Xi(t,n,a)}function D0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!$u(t,a)&&(n.flags&128)===0)return cn=!1,jv(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Ee&&(n.flags&1048576)!==0&&lp(n,ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=or(n.elementType),n.type=t,typeof t=="function")au(t)?(o=fr(t,o),n.tag=1,n=T0(null,n,t,o,a)):(n.tag=0,n=qu(null,n,t,o,a));else{if(t!=null){var m=t.$$typeof;if(m===N){n.tag=11,n=v0(null,n,t,o,a);break t}else if(m===w){n.tag=14,n=_0(null,n,t,o,a);break t}}throw n=W(t)||t,Error(r(306,n,""))}}return n;case 0:return qu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,m=fr(o,n.pendingProps),T0(t,n,o,m,a);case 3:t:{if(yt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var v=n.memoizedState;m=v.element,_u(t,n),Qs(n,o,null,a);var C=n.memoizedState;if(o=C.cache,Sa(n,on,o),o!==v.cache&&hu(n,[on],a,!0),Ks(),o=C.element,v.isDehydrated)if(v={element:o,isDehydrated:!1,cache:C.cache},n.updateQueue.baseState=v,n.memoizedState=v,n.flags&256){n=A0(t,n,o,a);break t}else if(o!==m){m=ai(Error(r(424)),n),Xs(m),n=A0(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=ci(t.firstChild),En=n,Ee=!0,va=null,oi=!0,a=yp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ir(),o===m){n=Xi(t,n,a);break t}An(t,n,o,a)}n=n.child}return n;case 26:return yl(t,n),t===null?(a=Vm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,o=Fl(Q.current).createElement(a),o[sn]=n,o[hn]=t,Rn(o,a,t),ot(o),n.stateNode=o):n.memoizedState=Vm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ot(n),t===null&&Ee&&(o=n.stateNode=Fm(n.type,n.pendingProps,Q.current),En=n,oi=!0,m=je,Na(n.type)?(Nf=m,je=ci(o.firstChild)):je=m),An(t,n,n.pendingProps.children,a),yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((m=o=je)&&(o=T_(o,n.type,n.pendingProps,oi),o!==null?(n.stateNode=o,En=n,je=ci(o.firstChild),oi=!1,m=!0):m=!1),m||_a(n)),Ot(n),m=n.type,v=n.pendingProps,C=t!==null?t.memoizedProps:null,o=v.children,Cf(m,v)?o=null:C!==null&&Cf(m,C)&&(n.flags|=32),n.memoizedState!==null&&(m=Au(t,n,Hv,null,null,a),vo._currentValue=m),yl(t,n),An(t,n,o,a),n.child;case 6:return t===null&&Ee&&((t=a=je)&&(a=A_(a,n.pendingProps,oi),a!==null?(n.stateNode=a,En=n,je=null,t=!0):t=!1),t||_a(n)),null;case 13:return R0(t,n,a);case 4:return yt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=cr(n,null,o,a):An(t,n,o,a),n.child;case 11:return v0(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),An(t,n,o.children,a),n.child;case 9:return m=n.type._context,o=n.pendingProps.children,rr(n),m=Tn(m),o=o(m),n.flags|=1,An(t,n,o,a),n.child;case 14:return _0(t,n,n.type,n.pendingProps,a);case 15:return S0(t,n,n.type,n.pendingProps,a);case 19:return w0(t,n,a);case 31:return Zv(t,n,a);case 22:return y0(t,n,a,n.pendingProps);case 24:return rr(n),o=Tn(on),t===null?(m=xu(),m===null&&(m=qe,v=pu(),m.pooledCache=v,v.refCount++,v!==null&&(m.pooledCacheLanes|=a),m=v),n.memoizedState={parent:o,cache:m},vu(n),Sa(n,on,m)):((t.lanes&a)!==0&&(_u(t,n),Qs(n,null,null,a),Ks()),m=t.memoizedState,v=n.memoizedState,m.parent!==o?(m={parent:o,cache:o},n.memoizedState=m,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=m),Sa(n,on,o)):(o=v.cache,Sa(n,on,o),o!==m.cache&&hu(n,[on],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(t){t.flags|=4}function tf(t,n,a,o,m){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(m&335544128)===m)if(t.stateNode.complete)t.flags|=8192;else if(im())t.flags|=8192;else throw lr=sl,gu}else t.flags&=-16777217}function U0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qm(n))if(im())t.flags|=8192;else throw lr=sl,gu}function bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,Kr|=n)}function io(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var m=t.child;m!==null;)a|=m.lanes|m.childLanes,o|=m.subtreeFlags&65011712,o|=m.flags&65011712,m.return=t,m=m.sibling;else for(m=t.child;m!==null;)a|=m.lanes|m.childLanes,o|=m.subtreeFlags,o|=m.flags,m.return=t,m=m.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Kv(t,n,a){var o=n.pendingProps;switch(lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(on),Nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zr(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uu())),Ke(n),null;case 26:var m=n.type,v=n.memoizedState;return t===null?(Wi(n),v!==null?(Ke(n),U0(n,v)):(Ke(n),tf(n,m,null,o,a))):v?v!==t.memoizedState?(Wi(n),Ke(n),U0(n,v)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Wi(n),Ke(n),tf(n,m,t,o,a)),null;case 27:if(Xt(n),a=Q.current,m=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}t=pt.current,zr(n)?up(n):(t=Fm(m,o,a),n.stateNode=t,Wi(n))}return Ke(n),null;case 5:if(Xt(n),m=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(v=pt.current,zr(n))up(n);else{var C=Fl(Q.current);switch(v){case 1:v=C.createElementNS("http://www.w3.org/2000/svg",m);break;case 2:v=C.createElementNS("http://www.w3.org/1998/Math/MathML",m);break;default:switch(m){case"svg":v=C.createElementNS("http://www.w3.org/2000/svg",m);break;case"math":v=C.createElementNS("http://www.w3.org/1998/Math/MathML",m);break;case"script":v=C.createElement("div"),v.innerHTML="<script><\/script>",v=v.removeChild(v.firstChild);break;case"select":v=typeof o.is=="string"?C.createElement("select",{is:o.is}):C.createElement("select"),o.multiple?v.multiple=!0:o.size&&(v.size=o.size);break;default:v=typeof o.is=="string"?C.createElement(m,{is:o.is}):C.createElement(m)}}v[sn]=n,v[hn]=o;t:for(C=n.child;C!==null;){if(C.tag===5||C.tag===6)v.appendChild(C.stateNode);else if(C.tag!==4&&C.tag!==27&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===n)break t;for(;C.sibling===null;){if(C.return===null||C.return===n)break t;C=C.return}C.sibling.return=C.return,C=C.sibling}n.stateNode=v;t:switch(Rn(v,m,o),m){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Wi(n)}}return Ke(n),tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Q.current,zr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,m=En,m!==null)switch(m.tag){case 27:case 5:o=m.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Rm(t.nodeValue,a)),t||_a(n,!0)}else t=Fl(t).createTextNode(o),t[sn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=zr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(m=zr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!m)throw Error(r(318));if(m=n.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(r(317));m[sn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),m=!1}else m=uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=m),m=!0;if(!m)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,m=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(m=o.alternate.memoizedState.cachePool.pool),v=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(v=o.memoizedState.cachePool.pool),v!==m&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),bl(n,n.updateQueue),Ke(n),null);case 4:return Nt(),t===null&&bf(n.stateNode.containerInfo),Ke(n),null;case 10:return Vi(n.type),Ke(n),null;case 19:if(tt(en),o=n.memoizedState,o===null)return Ke(n),null;if(m=(n.flags&128)!==0,v=o.rendering,v===null)if(m)io(o,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(v=ul(t),v!==null){for(n.flags|=128,io(o,!1),t=v.updateQueue,n.updateQueue=t,bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)rp(a,t),a=a.sibling;return ht(en,en.current&1|2),Ee&&Ii(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&B()>Cl&&(n.flags|=128,m=!0,io(o,!1),n.lanes=4194304)}else{if(!m)if(t=ul(v),t!==null){if(n.flags|=128,m=!0,t=t.updateQueue,n.updateQueue=t,bl(n,t),io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!v.alternate&&!Ee)return Ke(n),null}else 2*B()-o.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,m=!0,io(o,!1),n.lanes=4194304);o.isBackwards?(v.sibling=n.child,n.child=v):(t=o.last,t!==null?t.sibling=v:n.child=v,o.last=v)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=B(),t.sibling=null,a=en.current,ht(en,m?a&1|2:a&1),Ee&&Ii(n,o.treeForkCount),t):(Ke(n),null);case 22:case 23:return Kn(n),bu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&tt(sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(on),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Qv(t,n){switch(lu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(on),Nt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(en),null;case 4:return Nt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Kn(n),bu(),t!==null&&tt(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(on),null;case 25:return null;default:return null}}function L0(t,n){switch(lu(n),n.tag){case 3:Vi(on),Nt();break;case 26:case 27:case 5:Xt(n);break;case 4:Nt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:tt(en);break;case 10:Vi(n.type);break;case 22:case 23:Kn(n),bu(),t!==null&&tt(sr);break;case 24:Vi(on)}}function ao(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var m=o.next;a=m;do{if((a.tag&t)===t){o=void 0;var v=a.create,C=a.inst;o=v(),C.destroy=o}a=a.next}while(a!==m)}}catch(z){Fe(n,n.return,z)}}function Aa(t,n,a){try{var o=n.updateQueue,m=o!==null?o.lastEffect:null;if(m!==null){var v=m.next;o=v;do{if((o.tag&t)===t){var C=o.inst,z=C.destroy;if(z!==void 0){C.destroy=void 0,m=n;var Y=a,st=z;try{st()}catch(xt){Fe(m,Y,xt)}}}o=o.next}while(o!==v)}}catch(xt){Fe(n,n.return,xt)}}function N0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bp(n,a)}catch(o){Fe(t,t.return,o)}}}function O0(t,n,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(t,n,o)}}function ro(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(m){Fe(t,n,m)}}function Ci(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(m){Fe(t,n,m)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(m){Fe(t,n,m)}else a.current=null}function P0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(m){Fe(t,t.return,m)}}function ef(t,n,a){try{var o=t.stateNode;__(o,t.type,a,n),o[hn]=n}catch(m){Fe(t,t.return,m)}}function B0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function nf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||B0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(o!==4&&(o===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(af(t,n,a),t=t.sibling;t!==null;)af(t,n,a),t=t.sibling}function El(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function z0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,m=n.attributes;m.length;)n.removeAttributeNode(m[0]);Rn(n,o,a),n[sn]=t,n[hn]=a}catch(v){Fe(t,t.return,v)}}var qi=!1,un=!1,rf=!1,F0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Jv(t,n){if(t=t.containerInfo,Af=Wl,t=Kh(t),Qc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var m=o.anchorOffset,v=o.focusNode;o=o.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break t}var C=0,z=-1,Y=-1,st=0,xt=0,_t=t,ct=null;e:for(;;){for(var ft;_t!==a||m!==0&&_t.nodeType!==3||(z=C+m),_t!==v||o!==0&&_t.nodeType!==3||(Y=C+o),_t.nodeType===3&&(C+=_t.nodeValue.length),(ft=_t.firstChild)!==null;)ct=_t,_t=ft;for(;;){if(_t===t)break e;if(ct===a&&++st===m&&(z=C),ct===v&&++xt===o&&(Y=C),(ft=_t.nextSibling)!==null)break;_t=ct,ct=_t.parentNode}_t=ft}a=z===-1||Y===-1?null:{start:z,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:t,selectionRange:a},Wl=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,v=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)m=t[a],m.ref.impl=m.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&v!==null){t=void 0,a=n,m=v.memoizedProps,v=v.memoizedState,o=a.stateNode;try{var Gt=fr(a.type,m);t=o.getSnapshotBeforeUpdate(Gt,v),o.__reactInternalSnapshotBeforeUpdate=t}catch(ie){Fe(a,a.return,ie)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Df(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Df(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function I0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),o&4&&ao(5,a);break;case 1:if(Zi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(C){Fe(a,a.return,C)}else{var m=fr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(m,n,t.__reactInternalSnapshotBeforeUpdate)}catch(C){Fe(a,a.return,C)}}o&64&&N0(a),o&512&&ro(a,a.return);break;case 3:if(Zi(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bp(t,n)}catch(C){Fe(a,a.return,C)}}break;case 27:n===null&&o&4&&z0(a);case 26:case 5:Zi(t,a),n===null&&o&4&&P0(a),o&512&&ro(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),o&4&&G0(t,a);break;case 13:Zi(t,a),o&4&&k0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=o_.bind(null,a),R_(t,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||un,m=qi;var v=un;qi=o,(un=n)&&!v?ji(t,a,(a.subtreeFlags&8772)!==0):Zi(t,a),qi=m,un=v}break;case 30:break;default:Zi(t,a)}}function H0(t){var n=t.alternate;n!==null&&(t.alternate=null,H0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ns(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Bn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)V0(t,n,a),a=a.sibling}function V0(t,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:un||Ci(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ci(a,n);var o=Qe,m=Bn;Na(a.type)&&(Qe=a.stateNode,Bn=!1),Yi(t,n,a),mo(a.stateNode),Qe=o,Bn=m;break;case 5:un||Ci(a,n);case 6:if(o=Qe,m=Bn,Qe=null,Yi(t,n,a),Qe=o,Bn=m,Qe!==null)if(Bn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(v){Fe(a,n,v)}else try{Qe.removeChild(a.stateNode)}catch(v){Fe(a,n,v)}break;case 18:Qe!==null&&(Bn?(t=Qe,Nm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),as(t)):Nm(Qe,a.stateNode));break;case 4:o=Qe,m=Bn,Qe=a.stateNode.containerInfo,Bn=!0,Yi(t,n,a),Qe=o,Bn=m;break;case 0:case 11:case 14:case 15:Aa(2,a,n),un||Aa(4,a,n),Yi(t,n,a);break;case 1:un||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&O0(a,n,o)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,Yi(t,n,a),un=o;break;default:Yi(t,n,a)}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{as(t)}catch(a){Fe(n,n.return,a)}}}function k0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{as(t)}catch(a){Fe(n,n.return,a)}}function $v(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new F0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new F0),n;default:throw Error(r(435,t.tag))}}function Tl(t,n){var a=$v(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var m=l_.bind(null,t,o);o.then(m,m)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var m=a[o],v=t,C=n,z=C;t:for(;z!==null;){switch(z.tag){case 27:if(Na(z.type)){Qe=z.stateNode,Bn=!1;break t}break;case 5:Qe=z.stateNode,Bn=!1;break t;case 3:case 4:Qe=z.stateNode.containerInfo,Bn=!0;break t}z=z.return}if(Qe===null)throw Error(r(160));V0(v,C,m),Qe=null,Bn=!1,v=m.alternate,v!==null&&(v.return=null),m.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)X0(n,t),n=n.sibling}var xi=null;function X0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Fn(t),o&4&&(Aa(3,t,t.return),ao(3,t),Aa(5,t,t.return));break;case 1:zn(n,t),Fn(t),o&512&&(un||a===null||Ci(a,a.return)),o&64&&qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var m=xi;if(zn(n,t),Fn(t),o&512&&(un||a===null||Ci(a,a.return)),o&4){var v=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,m=m.ownerDocument||m;e:switch(o){case"title":v=m.getElementsByTagName("title")[0],(!v||v[Qa]||v[sn]||v.namespaceURI==="http://www.w3.org/2000/svg"||v.hasAttribute("itemprop"))&&(v=m.createElement(o),m.head.insertBefore(v,m.querySelector("head > title"))),Rn(v,o,a),v[sn]=t,ot(v),o=v;break t;case"link":var C=Xm("link","href",m).get(o+(a.href||""));if(C){for(var z=0;z<C.length;z++)if(v=C[z],v.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&v.getAttribute("rel")===(a.rel==null?null:a.rel)&&v.getAttribute("title")===(a.title==null?null:a.title)&&v.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){C.splice(z,1);break e}}v=m.createElement(o),Rn(v,o,a),m.head.appendChild(v);break;case"meta":if(C=Xm("meta","content",m).get(o+(a.content||""))){for(z=0;z<C.length;z++)if(v=C[z],v.getAttribute("content")===(a.content==null?null:""+a.content)&&v.getAttribute("name")===(a.name==null?null:a.name)&&v.getAttribute("property")===(a.property==null?null:a.property)&&v.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&v.getAttribute("charset")===(a.charSet==null?null:a.charSet)){C.splice(z,1);break e}}v=m.createElement(o),Rn(v,o,a),m.head.appendChild(v);break;default:throw Error(r(468,o))}v[sn]=t,ot(v),o=v}t.stateNode=o}else Wm(m,t.type,t.stateNode);else t.stateNode=km(m,o,t.memoizedProps);else v!==o?(v===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):v.count--,o===null?Wm(m,t.type,t.stateNode):km(m,o,t.memoizedProps)):o===null&&t.stateNode!==null&&ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Fn(t),o&512&&(un||a===null||Ci(a,a.return)),a!==null&&o&4&&ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Fn(t),o&512&&(un||a===null||Ci(a,a.return)),t.flags&32){m=t.stateNode;try{Ti(m,"")}catch(Gt){Fe(t,t.return,Gt)}}o&4&&t.stateNode!=null&&(m=t.memoizedProps,ef(t,m,a!==null?a.memoizedProps:m)),o&1024&&(rf=!0);break;case 6:if(zn(n,t),Fn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Gt){Fe(t,t.return,Gt)}}break;case 3:if(Vl=null,m=xi,xi=Il(n.containerInfo),zn(n,t),xi=m,Fn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{as(n.containerInfo)}catch(Gt){Fe(t,t.return,Gt)}rf&&(rf=!1,W0(t));break;case 4:o=xi,xi=Il(t.stateNode.containerInfo),zn(n,t),Fn(t),xi=o;break;case 12:zn(n,t),Fn(t);break;case 31:zn(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tl(t,o)));break;case 13:zn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=B()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tl(t,o)));break;case 22:m=t.memoizedState!==null;var Y=a!==null&&a.memoizedState!==null,st=qi,xt=un;if(qi=st||m,un=xt||Y,zn(n,t),un=xt,qi=st,Fn(t),o&8192)t:for(n=t.stateNode,n._visibility=m?n._visibility&-2:n._visibility|1,m&&(a===null||Y||qi||un||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){Y=a=n;try{if(v=Y.stateNode,m)C=v.style,typeof C.setProperty=="function"?C.setProperty("display","none","important"):C.display="none";else{z=Y.stateNode;var _t=Y.memoizedProps.style,ct=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;z.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Gt){Fe(Y,Y.return,Gt)}}}else if(n.tag===6){if(a===null){Y=n;try{Y.stateNode.nodeValue=m?"":Y.memoizedProps}catch(Gt){Fe(Y,Y.return,Gt)}}}else if(n.tag===18){if(a===null){Y=n;try{var ft=Y.stateNode;m?Om(ft,!0):Om(Y.stateNode,!1)}catch(Gt){Fe(Y,Y.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Tl(t,a))));break;case 19:zn(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tl(t,o)));break;case 30:break;case 21:break;default:zn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(B0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var m=a.stateNode,v=nf(t);El(t,v,m);break;case 5:var C=a.stateNode;a.flags&32&&(Ti(C,""),a.flags&=-33);var z=nf(t);El(t,z,C);break;case 3:case 4:var Y=a.stateNode.containerInfo,st=nf(t);af(t,st,Y);break;default:throw Error(r(161))}}catch(xt){Fe(t,t.return,xt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function W0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;W0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),dr(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&O0(n,n.return,a),dr(n);break;case 27:mo(n.stateNode);case 26:case 5:Ci(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,m=t,v=n,C=v.flags;switch(v.tag){case 0:case 11:case 15:ji(m,v,a),ao(4,v);break;case 1:if(ji(m,v,a),o=v,m=o.stateNode,typeof m.componentDidMount=="function")try{m.componentDidMount()}catch(st){Fe(o,o.return,st)}if(o=v,m=o.updateQueue,m!==null){var z=o.stateNode;try{var Y=m.shared.hiddenCallbacks;if(Y!==null)for(m.shared.hiddenCallbacks=null,m=0;m<Y.length;m++)Mp(Y[m],z)}catch(st){Fe(o,o.return,st)}}a&&C&64&&N0(v),ro(v,v.return);break;case 27:z0(v);case 26:case 5:ji(m,v,a),a&&o===null&&C&4&&P0(v),ro(v,v.return);break;case 12:ji(m,v,a);break;case 31:ji(m,v,a),a&&C&4&&G0(m,v);break;case 13:ji(m,v,a),a&&C&4&&k0(m,v);break;case 22:v.memoizedState===null&&ji(m,v,a),ro(v,v.return);break;case 30:break;default:ji(m,v,a)}n=n.sibling}}function sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ws(a))}function of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t))}function gi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)q0(t,n,a,o),n=n.sibling}function q0(t,n,a,o){var m=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,o),m&2048&&ao(9,n);break;case 1:gi(t,n,a,o);break;case 3:gi(t,n,a,o),m&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t)));break;case 12:if(m&2048){gi(t,n,a,o),t=n.stateNode;try{var v=n.memoizedProps,C=v.id,z=v.onPostCommit;typeof z=="function"&&z(C,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Y){Fe(n,n.return,Y)}}else gi(t,n,a,o);break;case 31:gi(t,n,a,o);break;case 13:gi(t,n,a,o);break;case 23:break;case 22:v=n.stateNode,C=n.alternate,n.memoizedState!==null?v._visibility&2?gi(t,n,a,o):so(t,n):v._visibility&2?gi(t,n,a,o):(v._visibility|=2,Yr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),m&2048&&sf(C,n);break;case 24:gi(t,n,a,o),m&2048&&of(n.alternate,n);break;default:gi(t,n,a,o)}}function Yr(t,n,a,o,m){for(m=m&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var v=t,C=n,z=a,Y=o,st=C.flags;switch(C.tag){case 0:case 11:case 15:Yr(v,C,z,Y,m),ao(8,C);break;case 23:break;case 22:var xt=C.stateNode;C.memoizedState!==null?xt._visibility&2?Yr(v,C,z,Y,m):so(v,C):(xt._visibility|=2,Yr(v,C,z,Y,m)),m&&st&2048&&sf(C.alternate,C);break;case 24:Yr(v,C,z,Y,m),m&&st&2048&&of(C.alternate,C);break;default:Yr(v,C,z,Y,m)}n=n.sibling}}function so(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,m=o.flags;switch(o.tag){case 22:so(a,o),m&2048&&sf(o.alternate,o);break;case 24:so(a,o),m&2048&&of(o.alternate,o);break;default:so(a,o)}n=n.sibling}}var oo=8192;function Zr(t,n,a){if(t.subtreeFlags&oo)for(t=t.child;t!==null;)Y0(t,n,a),t=t.sibling}function Y0(t,n,a){switch(t.tag){case 26:Zr(t,n,a),t.flags&oo&&t.memoizedState!==null&&I_(a,xi,t.memoizedState,t.memoizedProps);break;case 5:Zr(t,n,a);break;case 3:case 4:var o=xi;xi=Il(t.stateNode.containerInfo),Zr(t,n,a),xi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=oo,oo=16777216,Zr(t,n,a),oo=o):Zr(t,n,a));break;default:Zr(t,n,a)}}function Z0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,K0(o,t)}Z0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)j0(t),t=t.sibling}function j0(t){switch(t.tag){case 0:case 11:case 15:lo(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:lo(t);break;case 12:lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):lo(t);break;default:lo(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,K0(o,t)}Z0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function K0(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=t;yn!==null;){o=yn;var m=o.sibling,v=o.return;if(H0(o),o===a){yn=null;break t}if(m!==null){m.return=v,yn=m;break t}yn=v}}}var t_={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},e_=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,ve=null,Se=0,ze=0,Qn=null,Ra=!1,jr=!1,lf=!1,Ki=0,$e=0,Ca=0,hr=0,cf=0,Jn=0,Kr=0,co=null,In=null,uf=!1,Rl=0,Q0=0,Cl=1/0,wl=null,wa=null,mn=0,Da=null,Qr=null,Qi=0,ff=0,df=null,J0=null,uo=0,hf=null;function $n(){return(Ne&2)!==0&&Se!==0?Se&-Se:I.T!==null?_f():Us()}function $0(){if(Jn===0)if((Se&536870912)===0||Ee){var t=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),Jn=t}else Jn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Jn}function Hn(t,n,a){(t===qe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(Jr(t,0),Ua(t,Se,Jn,!1)),Cn(t,a),((Ne&2)===0||t!==qe)&&(t===qe&&((Ne&2)===0&&(hr|=a),$e===4&&Ua(t,Se,Jn,!1)),wi(t))}function tm(t,n,a){if((Ne&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),m=o?a_(t,n):mf(t,n,!0),v=o;do{if(m===0){jr&&!o&&Ua(t,n,0,!1);break}else{if(a=t.current.alternate,v&&!n_(a)){m=mf(t,n,!1),v=!1;continue}if(m===2){if(v=n,t.errorRecoveryDisabledLanes&v)var C=0;else C=t.pendingLanes&-536870913,C=C!==0?C:C&536870912?536870912:0;if(C!==0){n=C;t:{var z=t;m=co;var Y=z.current.memoizedState.isDehydrated;if(Y&&(Jr(z,C).flags|=256),C=mf(z,C,!1),C!==2){if(lf&&!Y){z.errorRecoveryDisabledLanes|=v,hr|=v,m=4;break t}v=In,In=m,v!==null&&(In===null?In=v:In.push.apply(In,v))}m=C}if(v=!1,m!==2)continue}}if(m===1){Jr(t,0),Ua(t,n,0,!0);break}t:{switch(o=t,v=m,v){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,Jn,!Ra);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(m=Rl+300-B(),10<m)){if(Ua(o,n,Jn,!Ra),St(o,0,!0)!==0)break t;Qi=n,o.timeoutHandle=Um(em.bind(null,o,a,In,wl,uf,n,Jn,hr,Kr,Ra,v,"Throttled",-0,0),m);break t}em(o,a,In,wl,uf,n,Jn,hr,Kr,Ra,v,null,-0,0)}}break}while(!0);wi(t)}function em(t,n,a,o,m,v,C,z,Y,st,xt,_t,ct,ft){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Y0(n,v,_t);var Gt=(v&62914560)===v?Rl-B():(v&4194048)===v?Q0-B():0;if(Gt=H_(_t,Gt),Gt!==null){Qi=v,t.cancelPendingCommit=Gt(cm.bind(null,t,n,v,a,o,m,C,z,Y,xt,_t,null,ct,ft)),Ua(t,v,C,!st);return}}cm(t,n,v,a,o,m,C,z,Y)}function n_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var m=a[o],v=m.getSnapshot;m=m.value;try{if(!Yn(v(),m))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(t,n,a,o){n&=~cf,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var m=n;0<m;){var v=31-kt(m),C=1<<v;o[v]=-1,m&=~C}a!==0&&Vo(t,a,n)}function Dl(){return(Ne&6)===0?(fo(0),!1):!0}function pf(){if(ve!==null){if(ze===0)var t=ve.return;else t=ve,Hi=ar=null,wu(t),Gr=null,Ys=0,t=ve;for(;t!==null;)L0(t.alternate,t),t=t.return;ve=null}}function Jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,M_(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,pf(),qe=t,ve=a=Fi(t.current,null),Se=n,ze=0,Qn=null,Ra=!1,jr=It(t,n),lf=!1,Kr=Jn=cf=hr=Ca=$e=0,In=co=null,uf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var m=31-kt(o),v=1<<m;n|=t[m],o&=~v}return Ki=n,Qo(),a}function nm(t,n){fe=null,I.H=eo,n===Vr||n===rl?(n=vp(),ze=3):n===gu?(n=vp(),ze=4):ze=n===Wu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,ve===null&&($e=1,_l(t,ai(n,t.current)))}function im(){var t=jn.current;return t===null?!0:(Se&4194048)===Se?li===null:(Se&62914560)===Se||(Se&536870912)!==0?t===li:!1}function am(){var t=I.H;return I.H=eo,t===null?eo:t}function rm(){var t=I.A;return I.A=t_,t}function Ul(){$e=4,Ra||(Se&4194048)!==Se&&jn.current!==null||(jr=!0),(Ca&134217727)===0&&(hr&134217727)===0||qe===null||Ua(qe,Se,Jn,!1)}function mf(t,n,a){var o=Ne;Ne|=2;var m=am(),v=rm();(qe!==t||Se!==n)&&(wl=null,Jr(t,n)),n=!1;var C=$e;t:do try{if(ze!==0&&ve!==null){var z=ve,Y=Qn;switch(ze){case 8:pf(),C=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var st=ze;if(ze=0,Qn=null,$r(t,z,Y,st),a&&jr){C=0;break t}break;default:st=ze,ze=0,Qn=null,$r(t,z,Y,st)}}i_(),C=$e;break}catch(xt){nm(t,xt)}while(!0);return n&&t.shellSuspendCounter++,Hi=ar=null,Ne=o,I.H=m,I.A=v,ve===null&&(qe=null,Se=0,Qo()),C}function i_(){for(;ve!==null;)sm(ve)}function a_(t,n){var a=Ne;Ne|=2;var o=am(),m=rm();qe!==t||Se!==n?(wl=null,Cl=B()+500,Jr(t,n)):jr=It(t,n);t:do try{if(ze!==0&&ve!==null){n=ve;var v=Qn;e:switch(ze){case 1:ze=0,Qn=null,$r(t,n,v,1);break;case 2:case 9:if(xp(v)){ze=0,Qn=null,om(n);break}n=function(){ze!==2&&ze!==9||qe!==t||(ze=7),wi(t)},v.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:xp(v)?(ze=0,Qn=null,om(n)):(ze=0,Qn=null,$r(t,n,v,7));break;case 5:var C=null;switch(ve.tag){case 26:C=ve.memoizedState;case 5:case 27:var z=ve;if(C?qm(C):z.stateNode.complete){ze=0,Qn=null;var Y=z.sibling;if(Y!==null)ve=Y;else{var st=z.return;st!==null?(ve=st,Ll(st)):ve=null}break e}}ze=0,Qn=null,$r(t,n,v,5);break;case 6:ze=0,Qn=null,$r(t,n,v,6);break;case 8:pf(),$e=6;break t;default:throw Error(r(462))}}r_();break}catch(xt){nm(t,xt)}while(!0);return Hi=ar=null,I.H=o,I.A=m,Ne=a,ve!==null?0:(qe=null,Se=0,Qo(),$e)}function r_(){for(;ve!==null&&!ae();)sm(ve)}function sm(t){var n=D0(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Ll(t):ve=n}function om(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=E0(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=E0(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:wu(n);default:L0(a,n),n=ve=rp(n,Ki),n=D0(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Ll(t):ve=n}function $r(t,n,a,o){Hi=ar=null,wu(n),Gr=null,Ys=0;var m=n.return;try{if(Yv(t,m,n,a,Se)){$e=1,_l(t,ai(a,t.current)),ve=null;return}}catch(v){if(m!==null)throw ve=m,v;$e=1,_l(t,ai(a,t.current)),ve=null;return}n.flags&32768?(Ee||o===1?t=!0:jr||(Se&536870912)!==0?t=!1:(Ra=t=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),lm(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){lm(n,Ra);return}t=n.return;var a=Kv(n.alternate,n,Ki);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=t}while(n!==null);$e===0&&($e=5)}function lm(t,n){do{var a=Qv(t.alternate,t);if(a!==null){a.flags&=32767,ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ve=t;return}ve=t=a}while(t!==null);$e=6,ve=null}function cm(t,n,a,o,m,v,C,z,Y){t.cancelPendingCommit=null;do Nl();while(mn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(v=n.lanes|n.childLanes,v|=nu,Wn(t,a,v,C,z,Y),t===qe&&(ve=qe=null,Se=0),Qr=n,Da=t,Qi=a,ff=v,df=m,J0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,c_(dt,function(){return pm(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,m=k.p,k.p=2,C=Ne,Ne|=4;try{Jv(t,n,a)}finally{Ne=C,k.p=m,I.T=o}}mn=1,um(),fm(),dm()}}function um(){if(mn===1){mn=0;var t=Da,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=k.p;k.p=2;var m=Ne;Ne|=4;try{X0(n,t);var v=Rf,C=Kh(t.containerInfo),z=v.focusedElem,Y=v.selectionRange;if(C!==z&&z&&z.ownerDocument&&jh(z.ownerDocument.documentElement,z)){if(Y!==null&&Qc(z)){var st=Y.start,xt=Y.end;if(xt===void 0&&(xt=st),"selectionStart"in z)z.selectionStart=st,z.selectionEnd=Math.min(xt,z.value.length);else{var _t=z.ownerDocument||document,ct=_t&&_t.defaultView||window;if(ct.getSelection){var ft=ct.getSelection(),Gt=z.textContent.length,ie=Math.min(Y.start,Gt),Ge=Y.end===void 0?ie:Math.min(Y.end,Gt);!ft.extend&&ie>Ge&&(C=Ge,Ge=ie,ie=C);var $=Zh(z,ie),K=Zh(z,Ge);if($&&K&&(ft.rangeCount!==1||ft.anchorNode!==$.node||ft.anchorOffset!==$.offset||ft.focusNode!==K.node||ft.focusOffset!==K.offset)){var rt=_t.createRange();rt.setStart($.node,$.offset),ft.removeAllRanges(),ie>Ge?(ft.addRange(rt),ft.extend(K.node,K.offset)):(rt.setEnd(K.node,K.offset),ft.addRange(rt))}}}}for(_t=[],ft=z;ft=ft.parentNode;)ft.nodeType===1&&_t.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof z.focus=="function"&&z.focus(),z=0;z<_t.length;z++){var vt=_t[z];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Wl=!!Af,Rf=Af=null}finally{Ne=m,k.p=o,I.T=a}}t.current=n,mn=2}}function fm(){if(mn===2){mn=0;var t=Da,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=k.p;k.p=2;var m=Ne;Ne|=4;try{I0(t,n.alternate,n)}finally{Ne=m,k.p=o,I.T=a}}mn=3}}function dm(){if(mn===4||mn===3){mn=0,G();var t=Da,n=Qr,a=Qi,o=J0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,Qr=Da=null,hm(t,t.pendingLanes));var m=t.pendingLanes;if(m===0&&(wa=null),Ka(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,m=k.p,k.p=2,I.T=null;try{for(var v=t.onRecoverableError,C=0;C<o.length;C++){var z=o[C];v(z.value,{componentStack:z.stack})}}finally{I.T=n,k.p=m}}(Qi&3)!==0&&Nl(),wi(t),m=t.pendingLanes,(a&261930)!==0&&(m&42)!==0?t===hf?uo++:(uo=0,hf=t):uo=0,fo(0)}}function hm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ws(n)))}function Nl(){return um(),fm(),dm(),pm()}function pm(){if(mn!==5)return!1;var t=Da,n=ff;ff=0;var a=Ka(Qi),o=I.T,m=k.p;try{k.p=32>a?32:a,I.T=null,a=df,df=null;var v=Da,C=Qi;if(mn=0,Qr=Da=null,Qi=0,(Ne&6)!==0)throw Error(r(331));var z=Ne;if(Ne|=4,j0(v.current),q0(v,v.current,C,a),Ne=z,fo(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Et,v)}catch{}return!0}finally{k.p=m,I.T=o,hm(t,n)}}function mm(t,n,a){n=ai(a,n),n=Xu(t.stateNode,n,2),t=ba(t,n,2),t!==null&&(Cn(t,2),wi(t))}function Fe(t,n,a){if(t.tag===3)mm(t,t,a);else for(;n!==null;){if(n.tag===3){mm(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){t=ai(a,t),a=x0(2),o=ba(n,a,2),o!==null&&(g0(a,o,n,t),Cn(o,2),wi(o));break}}n=n.return}}function xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new e_;var m=new Set;o.set(n,m)}else m=o.get(n),m===void 0&&(m=new Set,o.set(n,m));m.has(a)||(lf=!0,m.add(a),t=s_.bind(null,t,n,a),n.then(t,t))}function s_(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Se&a)===a&&($e===4||$e===3&&(Se&62914560)===Se&&300>B()-Rl?(Ne&2)===0&&Jr(t,0):cf|=a,Kr===Se&&(Kr=0)),wi(t)}function xm(t,n){n===0&&(n=Ie()),t=er(t,n),t!==null&&(Cn(t,n),wi(t))}function o_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),xm(t,a)}function l_(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,m=t.memoizedState;m!==null&&(a=m.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),xm(t,a)}function c_(t,n){return Re(t,n)}var Ol=null,ts=null,gf=!1,Pl=!1,vf=!1,La=0;function wi(t){t!==ts&&t.next===null&&(ts===null?Ol=ts=t:ts=ts.next=t),Pl=!0,gf||(gf=!0,f_())}function fo(t,n){if(!vf&&Pl){vf=!0;do for(var a=!1,o=Ol;o!==null;){if(t!==0){var m=o.pendingLanes;if(m===0)var v=0;else{var C=o.suspendedLanes,z=o.pingedLanes;v=(1<<31-kt(42|t)+1)-1,v&=m&~(C&~z),v=v&201326741?v&201326741|1:v?v|2:0}v!==0&&(a=!0,Sm(o,v))}else v=Se,v=St(o,o===qe?v:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(v&3)===0||It(o,v)||(a=!0,Sm(o,v));o=o.next}while(a);vf=!1}}function u_(){gm()}function gm(){Pl=gf=!1;var t=0;La!==0&&y_()&&(t=La);for(var n=B(),a=null,o=Ol;o!==null;){var m=o.next,v=vm(o,n);v===0?(o.next=null,a===null?Ol=m:a.next=m,m===null&&(ts=a)):(a=o,(t!==0||(v&3)!==0)&&(Pl=!0)),o=m}mn!==0&&mn!==5||fo(t),La!==0&&(La=0)}function vm(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,m=t.expirationTimes,v=t.pendingLanes&-62914561;0<v;){var C=31-kt(v),z=1<<C,Y=m[C];Y===-1?((z&a)===0||(z&o)!==0)&&(m[C]=oe(z,n)):Y<=n&&(t.expiredLanes|=z),v&=~z}if(n=qe,a=Se,a=St(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Wt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Wt(o),Ka(a)){case 2:case 8:a=Mt;break;case 32:a=dt;break;case 268435456:a=Dt;break;default:a=dt}return o=_m.bind(null,t),a=Re(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Wt(o),t.callbackPriority=2,t.callbackNode=null,2}function _m(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var o=Se;return o=St(t,t===qe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(tm(t,o,n),vm(t,B()),t.callbackNode!=null&&t.callbackNode===a?_m.bind(null,t):null)}function Sm(t,n){if(Nl())return null;tm(t,n,!0)}function f_(){b_(function(){(Ne&6)!==0?Re(gt,u_):gm()})}function _f(){if(La===0){var t=Ir;t===0&&(t=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),La=t}return La}function ym(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function Mm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function d_(t,n,a,o,m){if(n==="submit"&&a&&a.stateNode===m){var v=ym((m[hn]||null).action),C=o.submitter;C&&(n=(n=C[hn]||null)?ym(n.formAction):C.getAttribute("formAction"),n!==null&&(v=n,C=null));var z=new Yo("action","action",null,o,m);t.push({event:z,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(La!==0){var Y=C?Mm(m,C):new FormData(m);Fu(a,{pending:!0,data:Y,method:m.method,action:v},null,Y)}}else typeof v=="function"&&(z.preventDefault(),Y=C?Mm(m,C):new FormData(m),Fu(a,{pending:!0,data:Y,method:m.method,action:v},v,Y))},currentTarget:m}]})}}for(var Sf=0;Sf<eu.length;Sf++){var yf=eu[Sf],h_=yf.toLowerCase(),p_=yf[0].toUpperCase()+yf.slice(1);mi(h_,"on"+p_)}mi($h,"onAnimationEnd"),mi(tp,"onAnimationIteration"),mi(ep,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Dv,"onTransitionRun"),mi(Uv,"onTransitionStart"),mi(Lv,"onTransitionCancel"),mi(np,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function bm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],m=o.event;o=o.listeners;t:{var v=void 0;if(n)for(var C=o.length-1;0<=C;C--){var z=o[C],Y=z.instance,st=z.currentTarget;if(z=z.listener,Y!==v&&m.isPropagationStopped())break t;v=z,m.currentTarget=st;try{v(m)}catch(xt){Ko(xt)}m.currentTarget=null,v=Y}else for(C=0;C<o.length;C++){if(z=o[C],Y=z.instance,st=z.currentTarget,z=z.listener,Y!==v&&m.isPropagationStopped())break t;v=z,m.currentTarget=st;try{v(m)}catch(xt){Ko(xt)}m.currentTarget=null,v=Y}}}}function _e(t,n){var a=n[Rr];a===void 0&&(a=n[Rr]=new Set);var o=t+"__bubble";a.has(o)||(Em(n,t,2,!1),a.add(o))}function Mf(t,n,a){var o=0;n&&(o|=4),Em(a,t,o,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function bf(t){if(!t[Bl]){t[Bl]=!0,et.forEach(function(a){a!=="selectionchange"&&(m_.has(a)||Mf(a,!1,t),Mf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,Mf("selectionchange",!1,n))}}function Em(t,n,a,o){switch($m(n)){case 2:var m=k_;break;case 8:m=X_;break;default:m=Ff}a=m.bind(null,n,a,t),m=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(m=!0),o?m!==void 0?t.addEventListener(n,a,{capture:!0,passive:m}):t.addEventListener(n,a,!0):m!==void 0?t.addEventListener(n,a,{passive:m}):t.addEventListener(n,a,!1)}function Ef(t,n,a,o,m){var v=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var C=o.tag;if(C===3||C===4){var z=o.stateNode.containerInfo;if(z===m)break;if(C===4)for(C=o.return;C!==null;){var Y=C.tag;if((Y===3||Y===4)&&C.stateNode.containerInfo===m)return;C=C.return}for(;z!==null;){if(C=pa(z),C===null)return;if(Y=C.tag,Y===5||Y===6||Y===26||Y===27){o=v=C;continue t}z=z.parentNode}}o=o.return}wh(function(){var st=v,xt=Hc(a),_t=[];t:{var ct=ip.get(t);if(ct!==void 0){var ft=Yo,Gt=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":ft=lv;break;case"focusin":Gt="focus",ft=qc;break;case"focusout":Gt="blur",ft=qc;break;case"beforeblur":case"afterblur":ft=qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=fv;break;case $h:case tp:case ep:ft=$g;break;case np:ft=hv;break;case"scroll":case"scrollend":ft=Zg;break;case"wheel":ft=mv;break;case"copy":case"cut":case"paste":ft=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Oh;break;case"toggle":case"beforetoggle":ft=gv}var ie=(n&4)!==0,Ge=!ie&&(t==="scroll"||t==="scrollend"),$=ie?ct!==null?ct+"Capture":null:ct;ie=[];for(var K=st,rt;K!==null;){var vt=K;if(rt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||rt===null||$===null||(vt=Os(K,$),vt!=null&&ie.push(po(K,vt,rt))),Ge)break;K=K.return}0<ie.length&&(ct=new ft(ct,Gt,null,a,xt),_t.push({event:ct,listeners:ie}))}}if((n&7)===0){t:{if(ct=t==="mouseover"||t==="pointerover",ft=t==="mouseout"||t==="pointerout",ct&&a!==Ic&&(Gt=a.relatedTarget||a.fromElement)&&(pa(Gt)||Gt[Ni]))break t;if((ft||ct)&&(ct=xt.window===xt?xt:(ct=xt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ft?(Gt=a.relatedTarget||a.toElement,ft=st,Gt=Gt?pa(Gt):null,Gt!==null&&(Ge=s(Gt),ie=Gt.tag,Gt!==Ge||ie!==5&&ie!==27&&ie!==6)&&(Gt=null)):(ft=null,Gt=st),ft!==Gt)){if(ie=Lh,vt="onMouseLeave",$="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(ie=Oh,vt="onPointerLeave",$="onPointerEnter",K="pointer"),Ge=ft==null?ct:J(ft),rt=Gt==null?ct:J(Gt),ct=new ie(vt,K+"leave",ft,a,xt),ct.target=Ge,ct.relatedTarget=rt,vt=null,pa(xt)===st&&(ie=new ie($,K+"enter",Gt,a,xt),ie.target=rt,ie.relatedTarget=Ge,vt=ie),Ge=vt,ft&&Gt)e:{for(ie=x_,$=ft,K=Gt,rt=0,vt=$;vt;vt=ie(vt))rt++;vt=0;for(var Jt=K;Jt;Jt=ie(Jt))vt++;for(;0<rt-vt;)$=ie($),rt--;for(;0<vt-rt;)K=ie(K),vt--;for(;rt--;){if($===K||K!==null&&$===K.alternate){ie=$;break e}$=ie($),K=ie(K)}ie=null}else ie=null;ft!==null&&Tm(_t,ct,ft,ie,!1),Gt!==null&&Ge!==null&&Tm(_t,Ge,Gt,ie,!0)}}t:{if(ct=st?J(st):window,ft=ct.nodeName&&ct.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ct.type==="file")var De=Gh;else if(Hh(ct))if(kh)De=Rv;else{De=Tv;var Yt=Ev}else ft=ct.nodeName,!ft||ft.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?st&&Fc(st.elementType)&&(De=Gh):De=Av;if(De&&(De=De(t,st))){Vh(_t,De,a,xt);break t}Yt&&Yt(t,ct,st),t==="focusout"&&st&&ct.type==="number"&&st.memoizedProps.value!=null&&_n(ct,"number",ct.value)}switch(Yt=st?J(st):window,t){case"focusin":(Hh(Yt)||Yt.contentEditable==="true")&&(Ur=Yt,Jc=st,Gs=null);break;case"focusout":Gs=Jc=Ur=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Qh(_t,a,xt);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":Qh(_t,a,xt)}var pe;if(Zc)t:{switch(t){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Dr?Fh(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Ph&&a.locale!=="ko"&&(Dr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Dr&&(pe=Dh()):(xa=xt,kc="value"in xa?xa.value:xa.textContent,Dr=!0)),Yt=zl(st,ye),0<Yt.length&&(ye=new Nh(ye,t,null,a,xt),_t.push({event:ye,listeners:Yt}),pe?ye.data=pe:(pe=Ih(a),pe!==null&&(ye.data=pe)))),(pe=_v?Sv(t,a):yv(t,a))&&(ye=zl(st,"onBeforeInput"),0<ye.length&&(Yt=new Nh("onBeforeInput","beforeinput",null,a,xt),_t.push({event:Yt,listeners:ye}),Yt.data=pe)),d_(_t,t,st,a,xt)}bm(_t,n)})}function po(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zl(t,n){for(var a=n+"Capture",o=[];t!==null;){var m=t,v=m.stateNode;if(m=m.tag,m!==5&&m!==26&&m!==27||v===null||(m=Os(t,a),m!=null&&o.unshift(po(t,m,v)),m=Os(t,n),m!=null&&o.push(po(t,m,v))),t.tag===3)return o;t=t.return}return[]}function x_(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tm(t,n,a,o,m){for(var v=n._reactName,C=[];a!==null&&a!==o;){var z=a,Y=z.alternate,st=z.stateNode;if(z=z.tag,Y!==null&&Y===o)break;z!==5&&z!==26&&z!==27||st===null||(Y=st,m?(st=Os(a,v),st!=null&&C.unshift(po(a,st,Y))):m||(st=Os(a,v),st!=null&&C.push(po(a,st,Y)))),a=a.return}C.length!==0&&t.push({event:n,listeners:C})}var g_=/\r\n?/g,v_=/\u0000|\uFFFD/g;function Am(t){return(typeof t=="string"?t:""+t).replace(g_,`
`).replace(v_,"")}function Rm(t,n){return n=Am(n),Am(t)===n}function Ve(t,n,a,o,m,v){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ti(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ti(t,""+o);break;case"className":Ae(t,"class",o);break;case"tabIndex":Ae(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(t,a,o);break;case"style":Rh(t,o,v);break;case"data":if(n!=="object"){Ae(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ko(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof v=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",m.name,m,null),Ve(t,n,"formEncType",m.formEncType,m,null),Ve(t,n,"formMethod",m.formMethod,m,null),Ve(t,n,"formTarget",m.formTarget,m,null)):(Ve(t,n,"encType",m.encType,m,null),Ve(t,n,"method",m.method,m,null),Ve(t,n,"target",m.target,m,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ko(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Bi);break;case"onScroll":o!=null&&_e("scroll",t);break;case"onScrollEnd":o!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(m.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_e("beforetoggle",t),_e("toggle",t),he(t,"popover",o);break;case"xlinkActuate":we(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":we(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":we(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":we(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":we(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":we(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":we(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":we(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":we(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":he(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qg.get(a)||a,he(t,a,o))}}function Tf(t,n,a,o,m,v){switch(a){case"style":Rh(t,o,v);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(m.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ti(t,o):(typeof o=="number"||typeof o=="bigint")&&Ti(t,""+o);break;case"onScroll":o!=null&&_e("scroll",t);break;case"onScrollEnd":o!=null&&_e("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(m=a.endsWith("Capture"),n=a.slice(2,m?a.length-7:void 0),v=t[hn]||null,v=v!=null?v[a]:null,typeof v=="function"&&t.removeEventListener(n,v,m),typeof o=="function")){typeof v!="function"&&v!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,m);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):he(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var o=!1,m=!1,v;for(v in a)if(a.hasOwnProperty(v)){var C=a[v];if(C!=null)switch(v){case"src":o=!0;break;case"srcSet":m=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,v,C,a,null)}}m&&Ve(t,n,"srcSet",a.srcSet,a,null),o&&Ve(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var z=v=C=m=null,Y=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var xt=a[o];if(xt!=null)switch(o){case"name":m=xt;break;case"type":C=xt;break;case"checked":Y=xt;break;case"defaultChecked":st=xt;break;case"value":v=xt;break;case"defaultValue":z=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:Ve(t,n,o,xt,a,null)}}Ze(t,v,z,Y,st,C,m,!1);return;case"select":_e("invalid",t),o=C=v=null;for(m in a)if(a.hasOwnProperty(m)&&(z=a[m],z!=null))switch(m){case"value":v=z;break;case"defaultValue":C=z;break;case"multiple":o=z;default:Ve(t,n,m,z,a,null)}n=v,a=C,t.multiple=!!o,n!=null?pn(t,!!o,n,!1):a!=null&&pn(t,!!o,a,!0);return;case"textarea":_e("invalid",t),v=m=o=null;for(C in a)if(a.hasOwnProperty(C)&&(z=a[C],z!=null))switch(C){case"value":o=z;break;case"defaultValue":m=z;break;case"children":v=z;break;case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(91));break;default:Ve(t,n,C,z,a,null)}bn(t,o,m,v);return;case"option":for(Y in a)if(a.hasOwnProperty(Y)&&(o=a[Y],o!=null))switch(Y){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(t,n,Y,o,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(o=0;o<ho.length;o++)_e(ho[o],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,st,o,a,null)}return;default:if(Fc(n)){for(xt in a)a.hasOwnProperty(xt)&&(o=a[xt],o!==void 0&&Tf(t,n,xt,o,a,void 0));return}}for(z in a)a.hasOwnProperty(z)&&(o=a[z],o!=null&&Ve(t,n,z,o,a,null))}function __(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var m=null,v=null,C=null,z=null,Y=null,st=null,xt=null;for(ft in a){var _t=a[ft];if(a.hasOwnProperty(ft)&&_t!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":Y=_t;default:o.hasOwnProperty(ft)||Ve(t,n,ft,null,o,_t)}}for(var ct in o){var ft=o[ct];if(_t=a[ct],o.hasOwnProperty(ct)&&(ft!=null||_t!=null))switch(ct){case"type":v=ft;break;case"name":m=ft;break;case"checked":st=ft;break;case"defaultChecked":xt=ft;break;case"value":C=ft;break;case"defaultValue":z=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ft!==_t&&Ve(t,n,ct,ft,o,_t)}}Oi(t,C,z,Y,st,xt,v,m);return;case"select":ft=C=z=ct=null;for(v in a)if(Y=a[v],a.hasOwnProperty(v)&&Y!=null)switch(v){case"value":break;case"multiple":ft=Y;default:o.hasOwnProperty(v)||Ve(t,n,v,null,o,Y)}for(m in o)if(v=o[m],Y=a[m],o.hasOwnProperty(m)&&(v!=null||Y!=null))switch(m){case"value":ct=v;break;case"defaultValue":z=v;break;case"multiple":C=v;default:v!==Y&&Ve(t,n,m,v,o,Y)}n=z,a=C,o=ft,ct!=null?pn(t,!!a,ct,!1):!!o!=!!a&&(n!=null?pn(t,!!a,n,!0):pn(t,!!a,a?[]:"",!1));return;case"textarea":ft=ct=null;for(z in a)if(m=a[z],a.hasOwnProperty(z)&&m!=null&&!o.hasOwnProperty(z))switch(z){case"value":break;case"children":break;default:Ve(t,n,z,null,o,m)}for(C in o)if(m=o[C],v=a[C],o.hasOwnProperty(C)&&(m!=null||v!=null))switch(C){case"value":ct=m;break;case"defaultValue":ft=m;break;case"children":break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(r(91));break;default:m!==v&&Ve(t,n,C,m,o,v)}Sn(t,ct,ft);return;case"option":for(var Gt in a)if(ct=a[Gt],a.hasOwnProperty(Gt)&&ct!=null&&!o.hasOwnProperty(Gt))switch(Gt){case"selected":t.selected=!1;break;default:Ve(t,n,Gt,null,o,ct)}for(Y in o)if(ct=o[Y],ft=a[Y],o.hasOwnProperty(Y)&&ct!==ft&&(ct!=null||ft!=null))switch(Y){case"selected":t.selected=ct&&typeof ct!="function"&&typeof ct!="symbol";break;default:Ve(t,n,Y,ct,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)ct=a[ie],a.hasOwnProperty(ie)&&ct!=null&&!o.hasOwnProperty(ie)&&Ve(t,n,ie,null,o,ct);for(st in o)if(ct=o[st],ft=a[st],o.hasOwnProperty(st)&&ct!==ft&&(ct!=null||ft!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ve(t,n,st,ct,o,ft)}return;default:if(Fc(n)){for(var Ge in a)ct=a[Ge],a.hasOwnProperty(Ge)&&ct!==void 0&&!o.hasOwnProperty(Ge)&&Tf(t,n,Ge,void 0,o,ct);for(xt in o)ct=o[xt],ft=a[xt],!o.hasOwnProperty(xt)||ct===ft||ct===void 0&&ft===void 0||Tf(t,n,xt,ct,o,ft);return}}for(var $ in a)ct=a[$],a.hasOwnProperty($)&&ct!=null&&!o.hasOwnProperty($)&&Ve(t,n,$,null,o,ct);for(_t in o)ct=o[_t],ft=a[_t],!o.hasOwnProperty(_t)||ct===ft||ct==null&&ft==null||Ve(t,n,_t,ct,o,ft)}function Cm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function S_(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var m=a[o],v=m.transferSize,C=m.initiatorType,z=m.duration;if(v&&z&&Cm(C)){for(C=0,z=m.responseEnd,o+=1;o<a.length;o++){var Y=a[o],st=Y.startTime;if(st>z)break;var xt=Y.transferSize,_t=Y.initiatorType;xt&&Cm(_t)&&(Y=Y.responseEnd,C+=xt*(Y<z?1:(z-st)/(Y-st)))}if(--o,n+=8*(v+C)/(m.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Af=null,Rf=null;function Fl(t){return t.nodeType===9?t:t.ownerDocument}function wm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Cf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function y_(){var t=window.event;return t&&t.type==="popstate"?t===wf?!1:(wf=t,!0):(wf=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,M_=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,b_=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(t){return Lm.resolve(null).then(t).catch(E_)}:Um;function E_(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Nm(t,n){var a=n,o=0;do{var m=a.nextSibling;if(t.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(m),as(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,mo(a);for(var v=a.firstChild;v;){var C=v.nextSibling,z=v.nodeName;v[Qa]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=C}}else a==="body"&&mo(t.ownerDocument.body);a=m}while(a);as(n)}function Om(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Df(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),Ns(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function T_(t,n,a,o){for(;t.nodeType===1;){var m=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(v=t.getAttribute("rel"),v==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(v!==m.rel||t.getAttribute("href")!==(m.href==null||m.href===""?null:m.href)||t.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin)||t.getAttribute("title")!==(m.title==null?null:m.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(v=t.getAttribute("src"),(v!==(m.src==null?null:m.src)||t.getAttribute("type")!==(m.type==null?null:m.type)||t.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin))&&v&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var v=m.name==null?null:""+m.name;if(m.type==="hidden"&&t.getAttribute("name")===v)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function A_(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Pm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Uf(t){return t.data==="$?"||t.data==="$~"}function Lf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function R_(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Nf=null;function Bm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function zm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Fm(t,n,a){switch(n=Fl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ns(t)}var ui=new Map,Im=new Set;function Il(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=k.d;k.d={f:C_,r:w_,D:D_,C:U_,L:L_,m:N_,X:P_,S:O_,M:B_};function C_(){var t=Ji.f(),n=Dl();return t||n}function w_(t){var n=F(t);n!==null&&n.tag===5&&n.type==="form"?n0(n):Ji.r(t)}var es=typeof document>"u"?null:document;function Hm(t,n,a){var o=es;if(o&&typeof n=="string"&&n){var m=Ye(n);m='link[rel="'+t+'"][href="'+m+'"]',typeof a=="string"&&(m+='[crossorigin="'+a+'"]'),Im.has(m)||(Im.add(m),t={rel:t,crossOrigin:a,href:n},o.querySelector(m)===null&&(n=o.createElement("link"),Rn(n,"link",t),ot(n),o.head.appendChild(n)))}}function D_(t){Ji.D(t),Hm("dns-prefetch",t,null)}function U_(t,n){Ji.C(t,n),Hm("preconnect",t,n)}function L_(t,n,a){Ji.L(t,n,a);var o=es;if(o&&t&&n){var m='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(m+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(m+='[imagesizes="'+Ye(a.imageSizes)+'"]')):m+='[href="'+Ye(t)+'"]';var v=m;switch(n){case"style":v=ns(t);break;case"script":v=is(t)}ui.has(v)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(v,t),o.querySelector(m)!==null||n==="style"&&o.querySelector(xo(v))||n==="script"&&o.querySelector(go(v))||(n=o.createElement("link"),Rn(n,"link",t),ot(n),o.head.appendChild(n)))}}function N_(t,n){Ji.m(t,n);var a=es;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",m='link[rel="modulepreload"][as="'+Ye(o)+'"][href="'+Ye(t)+'"]',v=m;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":v=is(t)}if(!ui.has(v)&&(t=_({rel:"modulepreload",href:t},n),ui.set(v,t),a.querySelector(m)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(v)))return}o=a.createElement("link"),Rn(o,"link",t),ot(o),a.head.appendChild(o)}}}function O_(t,n,a){Ji.S(t,n,a);var o=es;if(o&&t){var m=ut(o).hoistableStyles,v=ns(t);n=n||"default";var C=m.get(v);if(!C){var z={loading:0,preload:null};if(C=o.querySelector(xo(v)))z.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(v))&&Of(t,a);var Y=C=o.createElement("link");ot(Y),Rn(Y,"link",t),Y._p=new Promise(function(st,xt){Y.onload=st,Y.onerror=xt}),Y.addEventListener("load",function(){z.loading|=1}),Y.addEventListener("error",function(){z.loading|=2}),z.loading|=4,Hl(C,n,o)}C={type:"stylesheet",instance:C,count:1,state:z},m.set(v,C)}}}function P_(t,n){Ji.X(t,n);var a=es;if(a&&t){var o=ut(a).hoistableScripts,m=is(t),v=o.get(m);v||(v=a.querySelector(go(m)),v||(t=_({src:t,async:!0},n),(n=ui.get(m))&&Pf(t,n),v=a.createElement("script"),ot(v),Rn(v,"link",t),a.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},o.set(m,v))}}function B_(t,n){Ji.M(t,n);var a=es;if(a&&t){var o=ut(a).hoistableScripts,m=is(t),v=o.get(m);v||(v=a.querySelector(go(m)),v||(t=_({src:t,async:!0,type:"module"},n),(n=ui.get(m))&&Pf(t,n),v=a.createElement("script"),ot(v),Rn(v,"link",t),a.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},o.set(m,v))}}function Vm(t,n,a,o){var m=(m=Q.current)?Il(m):null;if(!m)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=ut(m).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ns(a.href);var v=ut(m).hoistableStyles,C=v.get(t);if(C||(m=m.ownerDocument||m,C={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},v.set(t,C),(v=m.querySelector(xo(t)))&&!v._p&&(C.instance=v,C.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),v||z_(m,t,a,C.state))),n&&o===null)throw Error(r(528,""));return C}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=ut(m).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ns(t){return'href="'+Ye(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function Gm(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function z_(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),ot(n),t.head.appendChild(n))}function is(t){return'[src="'+Ye(t)+'"]'}function go(t){return"script[async]"+t}function km(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(o)return n.instance=o,ot(o),o;var m=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ot(o),Rn(o,"style",m),Hl(o,a.precedence,t),n.instance=o;case"stylesheet":m=ns(a.href);var v=t.querySelector(xo(m));if(v)return n.state.loading|=4,n.instance=v,ot(v),v;o=Gm(a),(m=ui.get(m))&&Of(o,m),v=(t.ownerDocument||t).createElement("link"),ot(v);var C=v;return C._p=new Promise(function(z,Y){C.onload=z,C.onerror=Y}),Rn(v,"link",o),n.state.loading|=4,Hl(v,a.precedence,t),n.instance=v;case"script":return v=is(a.src),(m=t.querySelector(go(v)))?(n.instance=m,ot(m),m):(o=a,(m=ui.get(v))&&(o=_({},a),Pf(o,m)),t=t.ownerDocument||t,m=t.createElement("script"),ot(m),Rn(m,"link",o),t.head.appendChild(m),n.instance=m);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Hl(o,a.precedence,t));return n.instance}function Hl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),m=o.length?o[o.length-1]:null,v=m,C=0;C<o.length;C++){var z=o[C];if(z.dataset.precedence===n)v=z;else if(v!==m)break}v?v.parentNode.insertBefore(t,v.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vl=null;function Xm(t,n,a){if(Vl===null){var o=new Map,m=Vl=new Map;m.set(a,o)}else m=Vl,o=m.get(a),o||(o=new Map,m.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),m=0;m<a.length;m++){var v=a[m];if(!(v[Qa]||v[sn]||t==="link"&&v.getAttribute("rel")==="stylesheet")&&v.namespaceURI!=="http://www.w3.org/2000/svg"){var C=v.getAttribute(n)||"";C=t+C;var z=o.get(C);z?z.push(v):o.set(C,[v])}}return o}function Wm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function F_(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function I_(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var m=ns(o.href),v=n.querySelector(xo(m));if(v){n=v._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=v,ot(v);return}v=n.ownerDocument||n,o=Gm(o),(m=ui.get(m))&&Of(o,m),v=v.createElement("link"),ot(v);var C=v;C._p=new Promise(function(z,Y){C.onload=z,C.onerror=Y}),Rn(v,"link",o),a.instance=v}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Gl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bf=0;function H_(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var v=t.unsuspend;t.unsuspend=null,v()}},6e4+n);0<t.imgBytes&&Bf===0&&(Bf=62500*S_());var m=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var v=t.unsuspend;t.unsuspend=null,v()}},(t.imgBytes>Bf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(m)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(V_,t),kl=null,Gl.call(t))}function V_(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var o=a.get(null);else{a=new Map,kl.set(t,a);for(var m=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=0;v<m.length;v++){var C=m[v];(C.nodeName==="LINK"||C.getAttribute("media")!=="not all")&&(a.set(C.dataset.precedence,C),o=C)}o&&a.set(null,o)}m=n.instance,C=m.getAttribute("data-precedence"),v=a.get(C)||o,v===o&&a.set(null,m),a.set(C,m),this.count++,o=Gl.bind(this),m.addEventListener("load",o),m.addEventListener("error",o),v?v.parentNode.insertBefore(m,v.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(m,t.firstChild)),n.state.loading|=4}}var vo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function G_(t,n,a,o,m,v,C,z,Y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=m,this.onCaughtError=v,this.onRecoverableError=C,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function Ym(t,n,a,o,m,v,C,z,Y,st,xt,_t){return t=new G_(t,n,a,C,Y,st,xt,_t,z),n=1,v===!0&&(n|=24),v=Zn(3,null,null,n),t.current=v,v.stateNode=t,n=pu(),n.refCount++,t.pooledCache=n,n.refCount++,v.memoizedState={element:o,isDehydrated:a,cache:n},vu(v),t}function Zm(t){return t?(t=Or,t):Or}function jm(t,n,a,o,m,v){m=Zm(m),o.context===null?o.context=m:o.pendingContext=m,o=Ma(n),o.payload={element:a},v=v===void 0?null:v,v!==null&&(o.callback=v),a=ba(t,o,n),a!==null&&(Hn(a,t,n),js(a,t,n))}function Km(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function zf(t,n){Km(t,n),(t=t.alternate)&&Km(t,n)}function Qm(t){if(t.tag===13||t.tag===31){var n=er(t,67108864);n!==null&&Hn(n,t,67108864),zf(t,67108864)}}function Jm(t){if(t.tag===13||t.tag===31){var n=$n();n=pi(n);var a=er(t,n);a!==null&&Hn(a,t,n),zf(t,n)}}var Wl=!0;function k_(t,n,a,o){var m=I.T;I.T=null;var v=k.p;try{k.p=2,Ff(t,n,a,o)}finally{k.p=v,I.T=m}}function X_(t,n,a,o){var m=I.T;I.T=null;var v=k.p;try{k.p=8,Ff(t,n,a,o)}finally{k.p=v,I.T=m}}function Ff(t,n,a,o){if(Wl){var m=If(o);if(m===null)Ef(t,n,o,ql,a),tx(t,o);else if(q_(m,t,n,a,o))o.stopPropagation();else if(tx(t,o),n&4&&-1<W_.indexOf(t)){for(;m!==null;){var v=F(m);if(v!==null)switch(v.tag){case 3:if(v=v.stateNode,v.current.memoizedState.isDehydrated){var C=Tt(v.pendingLanes);if(C!==0){var z=v;for(z.pendingLanes|=2,z.entangledLanes|=2;C;){var Y=1<<31-kt(C);z.entanglements[1]|=Y,C&=~Y}wi(v),(Ne&6)===0&&(Cl=B()+500,fo(0))}}break;case 31:case 13:z=er(v,2),z!==null&&Hn(z,v,2),Dl(),zf(v,2)}if(v=If(o),v===null&&Ef(t,n,o,ql,a),v===m)break;m=v}m!==null&&o.stopPropagation()}else Ef(t,n,o,null,a)}}function If(t){return t=Hc(t),Hf(t)}var ql=null;function Hf(t){if(ql=null,t=pa(t),t!==null){var n=s(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=u(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function $m(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case gt:return 2;case Mt:return 8;case dt:case qt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Vf=!1,Oa=null,Pa=null,Ba=null,_o=new Map,So=new Map,za=[],W_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tx(t,n){switch(t){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":_o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function yo(t,n,a,o,m,v){return t===null||t.nativeEvent!==v?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:v,targetContainers:[m]},n!==null&&(n=F(n),n!==null&&Qm(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,m!==null&&n.indexOf(m)===-1&&n.push(m),t)}function q_(t,n,a,o,m){switch(n){case"focusin":return Oa=yo(Oa,t,n,a,o,m),!0;case"dragenter":return Pa=yo(Pa,t,n,a,o,m),!0;case"mouseover":return Ba=yo(Ba,t,n,a,o,m),!0;case"pointerover":var v=m.pointerId;return _o.set(v,yo(_o.get(v)||null,t,n,a,o,m)),!0;case"gotpointercapture":return v=m.pointerId,So.set(v,yo(So.get(v)||null,t,n,a,o,m)),!0}return!1}function ex(t){var n=pa(t.target);if(n!==null){var a=s(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ls(t.priority,function(){Jm(a)});return}}else if(n===31){if(n=u(a),n!==null){t.blockedOn=n,Ls(t.priority,function(){Jm(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=If(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ic=o,a.target.dispatchEvent(o),Ic=null}else return n=F(a),n!==null&&Qm(n),t.blockedOn=a,!1;n.shift()}return!0}function nx(t,n,a){Yl(t)&&a.delete(n)}function Y_(){Vf=!1,Oa!==null&&Yl(Oa)&&(Oa=null),Pa!==null&&Yl(Pa)&&(Pa=null),Ba!==null&&Yl(Ba)&&(Ba=null),_o.forEach(nx),So.forEach(nx)}function Zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Vf||(Vf=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Y_)))}var jl=null;function ix(t){jl!==t&&(jl=t,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){jl===t&&(jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],m=t[n+2];if(typeof o!="function"){if(Hf(o||a)===null)continue;break}var v=F(a);v!==null&&(t.splice(n,3),n-=3,Fu(v,{pending:!0,data:m,method:a.method,action:o},o,m))}}))}function as(t){function n(Y){return Zl(Y,t)}Oa!==null&&Zl(Oa,t),Pa!==null&&Zl(Pa,t),Ba!==null&&Zl(Ba,t),_o.forEach(n),So.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)ex(a),a.blockedOn===null&&za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var m=a[o],v=a[o+1],C=m[hn]||null;if(typeof v=="function")C||ix(a);else if(C){var z=null;if(v&&v.hasAttribute("formAction")){if(m=v,C=v[hn]||null)z=C.formAction;else if(Hf(m)!==null)continue}else z=C.action;typeof z=="function"?a[o+1]=z:(a.splice(o,3),o-=3),ix(a)}}}function ax(){function t(v){v.canIntercept&&v.info==="react-transition"&&v.intercept({handler:function(){return new Promise(function(C){return m=C})},focusReset:"manual",scroll:"manual"})}function n(){m!==null&&(m(),m=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var v=navigation.currentEntry;v&&v.url!=null&&navigation.navigate(v.url,{state:v.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,m=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),m!==null&&(m(),m=null)}}}function Gf(t){this._internalRoot=t}Kl.prototype.render=Gf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();jm(a,o,t,n,null,null)},Kl.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;jm(t.current,2,null,t,null,null),Dl(),n[Ni]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Us();t={blockedOn:null,target:t,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,t),a===0&&ex(t)}};var rx=e.version;if(rx!=="19.2.0")throw Error(r(527,rx,"19.2.0"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Z_={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Et=Ql.inject(Z_),At=Ql}catch{}}return bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",m=d0,v=h0,C=p0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(m=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(C=n.onRecoverableError)),n=Ym(t,1,!1,null,null,a,o,null,m,v,C,ax),t[Ni]=n.current,bf(t),new Gf(n)},bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,m="",v=d0,C=h0,z=p0,Y=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onUncaughtError!==void 0&&(v=a.onUncaughtError),a.onCaughtError!==void 0&&(C=a.onCaughtError),a.onRecoverableError!==void 0&&(z=a.onRecoverableError),a.formState!==void 0&&(Y=a.formState)),n=Ym(t,1,!0,n,a??null,o,m,Y,v,C,z,ax),n.context=Zm(null),a=n.current,o=$n(),o=pi(o),m=Ma(o),m.callback=null,ba(a,m,o),a=o,n.current.lanes=a,Cn(n,a),wi(n),t[Ni]=n.current,bf(t),new Kl(n)},bo.version="19.2.0",bo}var xx;function rS(){if(xx)return Wf.exports;xx=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(e){console.error(e)}}return c(),Wf.exports=aS(),Wf.exports}var sS=rS();async function Dc(){const c=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"},audio:!1}),e=document.createElement("video");e.autoplay=!0,e.playsInline=!0,e.muted=!0,e.srcObject=c;try{e.play()}catch{}return await new Promise(i=>{if(e.readyState>=2){i();return}const r=()=>{e.removeEventListener("loadeddata",r),i()};e.addEventListener("loadeddata",r)}),e}function oS(){const c=Pe.useRef(null),e=Pe.useRef(null),i=Pe.useRef(null),r=Pe.useRef(null),l=Pe.useRef(null),s=Pe.useRef(null),f=Pe.useRef(null),u=Pe.useRef(null),h=Pe.useRef(null),p=Pe.useRef(null),x=Pe.useRef(null);return Pe.useEffect(()=>{let _=!1;return(async()=>{const d=c.current;if(!d)return;const S=await Dc();if(_){S.srcObject instanceof MediaStream&&S.srcObject.getTracks().forEach(U=>U.stop());return}e.current=S;const M=d.getContext("2d");if(!M)return;const y=document.createElement("canvas"),b=y.getContext("2d");if(!b)return;const D=()=>{const U=d.clientWidth||800,N=d.clientHeight||600;(d.width!==U||d.height!==N)&&(d.width=U,d.height=N);const E=12,T=Math.max(1,Math.floor(U/E)),w=Math.max(1,Math.floor(N/E));y.width=T,y.height=w;const L=T*w;let R=p.current,A=x.current,O=l.current,P=s.current,H=f.current,W=u.current;if(!R||!A||!O||!P||!H||!W||O.length!==L){R=new Float32Array(L),A=new Float32Array(L),O=new Float32Array(L),P=new Float32Array(L),H=new Float32Array(L),W=new Float32Array(L);const pt=E*.4;for(let bt=0;bt<L;bt++)R[bt]=(Math.random()-.5)*pt,A[bt]=(Math.random()-.5)*pt;p.current=R,x.current=A,l.current=O,s.current=P,f.current=H,u.current=W}b.save(),b.clearRect(0,0,T,w),b.translate(T,0),b.scale(-1,1),b.drawImage(S,0,0,T,w),b.restore();const I=b.getImageData(0,0,T,w).data,k=r.current;M.globalCompositeOperation="source-over",M.fillStyle="rgba(5, 8, 22, 0.35)",M.fillRect(0,0,U,N),M.imageSmoothingEnabled=!1,M.save(),M.globalAlpha=.03,M.drawImage(y,0,0,T,w,0,0,U,N),M.restore();const Z=performance.now(),it=h.current,lt=it!=null?Math.min(.05,(Z-it)/1e3):1/60;h.current=Z;for(let pt=0;pt<w;pt++)for(let bt=0;bt<T;bt++){const Q=pt*T+bt,nt=Q*4,yt=I[nt],Nt=I[nt+1],Ot=I[nt+2];let Xt=0;if(k&&k.length===I.length){const ce=k[nt],Zt=k[nt+1],ne=k[nt+2],q=yt-ce,Vt=Nt-Zt,le=Ot-ne,ge=Math.abs(q)+Math.abs(Vt)+Math.abs(le);Xt=Math.min(1,ge/384)}if(!(Xt<.18)&&Xt>.35){const Zt=(bt*17.31+pt*41.89)*1.3,ne=(30+160*Xt)*(E/12);H[Q]+=Math.cos(Zt)*ne,W[Q]+=Math.sin(Zt)*ne}}const V=.98,tt=10*(E/12),ht=45;for(let pt=0;pt<L;pt++){let bt=O[pt],Q=P[pt],nt=H[pt],yt=W[pt];nt+=(Math.random()-.5)*tt,yt+=(Math.random()-.5)*tt,nt*=V,yt*=V,bt+=nt*lt,Q+=yt*lt;const Nt=pt%T,Ot=pt/T|0,Xt=(Nt+.5)*E+(R?.[pt]??0),ce=(Ot+.5)*E+(A?.[pt]??0);let Zt=Xt+bt,ne=ce+Q;const q=E*.6;Zt<q?(Zt=q,nt=Math.abs(nt)):Zt>U-q&&(Zt=U-q,nt=-Math.abs(nt)),ne<q?(ne=q,yt=Math.abs(yt)):ne>N-q&&(ne=N-q,yt=-Math.abs(yt));const Vt=E*2;Zt<Vt?nt+=(Vt-Zt)/Vt*ht*lt:Zt>U-Vt&&(nt-=(Zt-(U-Vt))/Vt*ht*lt),ne<Vt?yt+=(Vt-ne)/Vt*ht*lt:ne>N-Vt&&(yt-=(ne-(N-Vt))/Vt*ht*lt),bt=Zt-Xt,Q=ne-ce,O[pt]=bt,P[pt]=Q,H[pt]=nt,W[pt]=yt}M.save(),M.globalCompositeOperation="source-over";for(let pt=0;pt<w;pt++)for(let bt=0;bt<T;bt++){const Q=pt*T+bt,nt=Q*4,yt=I[nt],Nt=I[nt+1],Ot=I[nt+2],Xt=(bt+.5)*E+(R?.[Q]??0),ce=(pt+.5)*E+(A?.[Q]??0),Zt=Xt+O[Q],ne=ce+P[Q],q=1.4,Vt=.7,le=yt/255,ge=Nt/255,Pt=Ot/255,Re=le*(1-Vt)+.12*Vt,Wt=ge*(1-Vt)+.82*Vt,ae=Pt*(1-Vt)+.95*Vt,G=.35;M.beginPath(),M.fillStyle=`rgba(${Math.round(Re*255)}, ${Math.round(Wt*255)}, ${Math.round(ae*255)}, ${G})`,M.arc(Zt,ne,q,0,Math.PI*2),M.fill()}!k||k.length!==I.length?r.current=new Uint8ClampedArray(I):k.set(I),M.restore(),i.current=requestAnimationFrame(D)};D()})(),()=>{_=!0,i.current!==null&&cancelAnimationFrame(i.current);const d=e.current;d&&d.srcObject instanceof MediaStream&&d.srcObject.getTracks().forEach(S=>S.stop()),r.current=null,l.current=null,s.current=null,f.current=null,u.current=null,h.current=null}},[]),tn.jsx("canvas",{ref:c,className:"pixel-canvas"})}var yc={exports:{}};var lS=yc.exports,gx;function cS(){return gx||(gx=1,(function(c,e){(function(r,l){c.exports=l()})(lS,function(){return(function(i){var r={};function l(s){if(r[s])return r[s].exports;var f=r[s]={i:s,l:!1,exports:{}};return i[s].call(f.exports,f,f.exports,l),f.l=!0,f.exports}return l.m=i,l.c=r,l.d=function(s,f,u){l.o(s,f)||Object.defineProperty(s,f,{enumerable:!0,get:u})},l.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},l.t=function(s,f){if(f&1&&(s=l(s)),f&8||f&4&&typeof s=="object"&&s&&s.__esModule)return s;var u=Object.create(null);if(l.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:s}),f&2&&typeof s!="string")for(var h in s)l.d(u,h,(function(p){return s[p]}).bind(null,h));return u},l.n=function(s){var f=s&&s.__esModule?function(){return s.default}:function(){return s};return l.d(f,"a",f),f},l.o=function(s,f){return Object.prototype.hasOwnProperty.call(s,f)},l.p="",l(l.s=20)})([(function(i,r){var l={};i.exports=l,(function(){l._baseDelta=1e3/60,l._nextId=0,l._seed=0,l._nowStartTime=+new Date,l._warnedOnce={},l._decomp=null,l.extend=function(f,u){var h,p;typeof u=="boolean"?(h=2,p=u):(h=1,p=!0);for(var x=h;x<arguments.length;x++){var _=arguments[x];if(_)for(var g in _)p&&_[g]&&_[g].constructor===Object&&(!f[g]||f[g].constructor===Object)?(f[g]=f[g]||{},l.extend(f[g],p,_[g])):f[g]=_[g]}return f},l.clone=function(f,u){return l.extend({},u,f)},l.keys=function(f){if(Object.keys)return Object.keys(f);var u=[];for(var h in f)u.push(h);return u},l.values=function(f){var u=[];if(Object.keys){for(var h=Object.keys(f),p=0;p<h.length;p++)u.push(f[h[p]]);return u}for(var x in f)u.push(f[x]);return u},l.get=function(f,u,h,p){u=u.split(".").slice(h,p);for(var x=0;x<u.length;x+=1)f=f[u[x]];return f},l.set=function(f,u,h,p,x){var _=u.split(".").slice(p,x);return l.get(f,u,0,-1)[_[_.length-1]]=h,h},l.shuffle=function(f){for(var u=f.length-1;u>0;u--){var h=Math.floor(l.random()*(u+1)),p=f[u];f[u]=f[h],f[h]=p}return f},l.choose=function(f){return f[Math.floor(l.random()*f.length)]},l.isElement=function(f){return typeof HTMLElement<"u"?f instanceof HTMLElement:!!(f&&f.nodeType&&f.nodeName)},l.isArray=function(f){return Object.prototype.toString.call(f)==="[object Array]"},l.isFunction=function(f){return typeof f=="function"},l.isPlainObject=function(f){return typeof f=="object"&&f.constructor===Object},l.isString=function(f){return toString.call(f)==="[object String]"},l.clamp=function(f,u,h){return f<u?u:f>h?h:f},l.sign=function(f){return f<0?-1:1},l.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-l._nowStartTime},l.random=function(f,u){return f=typeof f<"u"?f:0,u=typeof u<"u"?u:1,f+s()*(u-f)};var s=function(){return l._seed=(l._seed*9301+49297)%233280,l._seed/233280};l.colorToNumber=function(f){return f=f.replace("#",""),f.length==3&&(f=f.charAt(0)+f.charAt(0)+f.charAt(1)+f.charAt(1)+f.charAt(2)+f.charAt(2)),parseInt(f,16)},l.logLevel=1,l.log=function(){console&&l.logLevel>0&&l.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},l.info=function(){console&&l.logLevel>0&&l.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},l.warn=function(){console&&l.logLevel>0&&l.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},l.warnOnce=function(){var f=Array.prototype.slice.call(arguments).join(" ");l._warnedOnce[f]||(l.warn(f),l._warnedOnce[f]=!0)},l.deprecated=function(f,u,h){f[u]=l.chain(function(){l.warnOnce("🔅 deprecated 🔅",h)},f[u])},l.nextId=function(){return l._nextId++},l.indexOf=function(f,u){if(f.indexOf)return f.indexOf(u);for(var h=0;h<f.length;h++)if(f[h]===u)return h;return-1},l.map=function(f,u){if(f.map)return f.map(u);for(var h=[],p=0;p<f.length;p+=1)h.push(u(f[p]));return h},l.topologicalSort=function(f){var u=[],h=[],p=[];for(var x in f)!h[x]&&!p[x]&&l._topologicalSort(x,h,p,f,u);return u},l._topologicalSort=function(f,u,h,p,x){var _=p[f]||[];h[f]=!0;for(var g=0;g<_.length;g+=1){var d=_[g];h[d]||u[d]||l._topologicalSort(d,u,h,p,x)}h[f]=!1,u[f]=!0,x.push(f)},l.chain=function(){for(var f=[],u=0;u<arguments.length;u+=1){var h=arguments[u];h._chained?f.push.apply(f,h._chained):f.push(h)}var p=function(){for(var x,_=new Array(arguments.length),g=0,d=arguments.length;g<d;g++)_[g]=arguments[g];for(g=0;g<f.length;g+=1){var S=f[g].apply(x,_);typeof S<"u"&&(x=S)}return x};return p._chained=f,p},l.chainPathBefore=function(f,u,h){return l.set(f,u,l.chain(h,l.get(f,u)))},l.chainPathAfter=function(f,u,h){return l.set(f,u,l.chain(l.get(f,u),h))},l.setDecomp=function(f){l._decomp=f},l.getDecomp=function(){var f=l._decomp;try{!f&&typeof window<"u"&&(f=window.decomp),!f&&typeof sx<"u"&&(f=sx.decomp)}catch{f=null}return f}})()}),(function(i,r){var l={};i.exports=l,(function(){l.create=function(s){var f={min:{x:0,y:0},max:{x:0,y:0}};return s&&l.update(f,s),f},l.update=function(s,f,u){s.min.x=1/0,s.max.x=-1/0,s.min.y=1/0,s.max.y=-1/0;for(var h=0;h<f.length;h++){var p=f[h];p.x>s.max.x&&(s.max.x=p.x),p.x<s.min.x&&(s.min.x=p.x),p.y>s.max.y&&(s.max.y=p.y),p.y<s.min.y&&(s.min.y=p.y)}u&&(u.x>0?s.max.x+=u.x:s.min.x+=u.x,u.y>0?s.max.y+=u.y:s.min.y+=u.y)},l.contains=function(s,f){return f.x>=s.min.x&&f.x<=s.max.x&&f.y>=s.min.y&&f.y<=s.max.y},l.overlaps=function(s,f){return s.min.x<=f.max.x&&s.max.x>=f.min.x&&s.max.y>=f.min.y&&s.min.y<=f.max.y},l.translate=function(s,f){s.min.x+=f.x,s.max.x+=f.x,s.min.y+=f.y,s.max.y+=f.y},l.shift=function(s,f){var u=s.max.x-s.min.x,h=s.max.y-s.min.y;s.min.x=f.x,s.max.x=f.x+u,s.min.y=f.y,s.max.y=f.y+h}})()}),(function(i,r){var l={};i.exports=l,(function(){l.create=function(s,f){return{x:s||0,y:f||0}},l.clone=function(s){return{x:s.x,y:s.y}},l.magnitude=function(s){return Math.sqrt(s.x*s.x+s.y*s.y)},l.magnitudeSquared=function(s){return s.x*s.x+s.y*s.y},l.rotate=function(s,f,u){var h=Math.cos(f),p=Math.sin(f);u||(u={});var x=s.x*h-s.y*p;return u.y=s.x*p+s.y*h,u.x=x,u},l.rotateAbout=function(s,f,u,h){var p=Math.cos(f),x=Math.sin(f);h||(h={});var _=u.x+((s.x-u.x)*p-(s.y-u.y)*x);return h.y=u.y+((s.x-u.x)*x+(s.y-u.y)*p),h.x=_,h},l.normalise=function(s){var f=l.magnitude(s);return f===0?{x:0,y:0}:{x:s.x/f,y:s.y/f}},l.dot=function(s,f){return s.x*f.x+s.y*f.y},l.cross=function(s,f){return s.x*f.y-s.y*f.x},l.cross3=function(s,f,u){return(f.x-s.x)*(u.y-s.y)-(f.y-s.y)*(u.x-s.x)},l.add=function(s,f,u){return u||(u={}),u.x=s.x+f.x,u.y=s.y+f.y,u},l.sub=function(s,f,u){return u||(u={}),u.x=s.x-f.x,u.y=s.y-f.y,u},l.mult=function(s,f){return{x:s.x*f,y:s.y*f}},l.div=function(s,f){return{x:s.x/f,y:s.y/f}},l.perp=function(s,f){return f=f===!0?-1:1,{x:f*-s.y,y:f*s.x}},l.neg=function(s){return{x:-s.x,y:-s.y}},l.angle=function(s,f){return Math.atan2(f.y-s.y,f.x-s.x)},l._temp=[l.create(),l.create(),l.create(),l.create(),l.create(),l.create()]})()}),(function(i,r,l){var s={};i.exports=s;var f=l(2),u=l(0);(function(){s.create=function(h,p){for(var x=[],_=0;_<h.length;_++){var g=h[_],d={x:g.x,y:g.y,index:_,body:p,isInternal:!1};x.push(d)}return x},s.fromPath=function(h,p){var x=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,_=[];return h.replace(x,function(g,d,S){_.push({x:parseFloat(d),y:parseFloat(S)})}),s.create(_,p)},s.centre=function(h){for(var p=s.area(h,!0),x={x:0,y:0},_,g,d,S=0;S<h.length;S++)d=(S+1)%h.length,_=f.cross(h[S],h[d]),g=f.mult(f.add(h[S],h[d]),_),x=f.add(x,g);return f.div(x,6*p)},s.mean=function(h){for(var p={x:0,y:0},x=0;x<h.length;x++)p.x+=h[x].x,p.y+=h[x].y;return f.div(p,h.length)},s.area=function(h,p){for(var x=0,_=h.length-1,g=0;g<h.length;g++)x+=(h[_].x-h[g].x)*(h[_].y+h[g].y),_=g;return p?x/2:Math.abs(x)/2},s.inertia=function(h,p){for(var x=0,_=0,g=h,d,S,M=0;M<g.length;M++)S=(M+1)%g.length,d=Math.abs(f.cross(g[S],g[M])),x+=d*(f.dot(g[S],g[S])+f.dot(g[S],g[M])+f.dot(g[M],g[M])),_+=d;return p/6*(x/_)},s.translate=function(h,p,x){x=typeof x<"u"?x:1;var _=h.length,g=p.x*x,d=p.y*x,S;for(S=0;S<_;S++)h[S].x+=g,h[S].y+=d;return h},s.rotate=function(h,p,x){if(p!==0){var _=Math.cos(p),g=Math.sin(p),d=x.x,S=x.y,M=h.length,y,b,D,U;for(U=0;U<M;U++)y=h[U],b=y.x-d,D=y.y-S,y.x=d+(b*_-D*g),y.y=S+(b*g+D*_);return h}},s.contains=function(h,p){for(var x=p.x,_=p.y,g=h.length,d=h[g-1],S,M=0;M<g;M++){if(S=h[M],(x-d.x)*(S.y-d.y)+(_-d.y)*(d.x-S.x)>0)return!1;d=S}return!0},s.scale=function(h,p,x,_){if(p===1&&x===1)return h;_=_||s.centre(h);for(var g,d,S=0;S<h.length;S++)g=h[S],d=f.sub(g,_),h[S].x=_.x+d.x*p,h[S].y=_.y+d.y*x;return h},s.chamfer=function(h,p,x,_,g){typeof p=="number"?p=[p]:p=p||[8],x=typeof x<"u"?x:-1,_=_||2,g=g||14;for(var d=[],S=0;S<h.length;S++){var M=h[S-1>=0?S-1:h.length-1],y=h[S],b=h[(S+1)%h.length],D=p[S<p.length?S:p.length-1];if(D===0){d.push(y);continue}var U=f.normalise({x:y.y-M.y,y:M.x-y.x}),N=f.normalise({x:b.y-y.y,y:y.x-b.x}),E=Math.sqrt(2*Math.pow(D,2)),T=f.mult(u.clone(U),D),w=f.normalise(f.mult(f.add(U,N),.5)),L=f.sub(y,f.mult(w,E)),R=x;x===-1&&(R=Math.pow(D,.32)*1.75),R=u.clamp(R,_,g),R%2===1&&(R+=1);for(var A=Math.acos(f.dot(U,N)),O=A/R,P=0;P<R;P++)d.push(f.add(f.rotate(T,O*P),L))}return d},s.clockwiseSort=function(h){var p=s.mean(h);return h.sort(function(x,_){return f.angle(p,x)-f.angle(p,_)}),h},s.isConvex=function(h){var p=0,x=h.length,_,g,d,S;if(x<3)return null;for(_=0;_<x;_++)if(g=(_+1)%x,d=(_+2)%x,S=(h[g].x-h[_].x)*(h[d].y-h[g].y),S-=(h[g].y-h[_].y)*(h[d].x-h[g].x),S<0?p|=1:S>0&&(p|=2),p===3)return!1;return p!==0?!0:null},s.hull=function(h){var p=[],x=[],_,g;for(h=h.slice(0),h.sort(function(d,S){var M=d.x-S.x;return M!==0?M:d.y-S.y}),g=0;g<h.length;g+=1){for(_=h[g];x.length>=2&&f.cross3(x[x.length-2],x[x.length-1],_)<=0;)x.pop();x.push(_)}for(g=h.length-1;g>=0;g-=1){for(_=h[g];p.length>=2&&f.cross3(p[p.length-2],p[p.length-1],_)<=0;)p.pop();p.push(_)}return p.pop(),x.pop(),p.concat(x)}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(3),u=l(2),h=l(7),p=l(0),x=l(1),_=l(11);(function(){s._timeCorrection=!0,s._inertiaScale=4,s._nextCollidingGroupId=1,s._nextNonCollidingGroupId=-1,s._nextCategory=1,s._baseDelta=1e3/60,s.create=function(d){var S={id:p.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:f.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},M=p.extend(S,d);return g(M,d),M},s.nextGroup=function(d){return d?s._nextNonCollidingGroupId--:s._nextCollidingGroupId++},s.nextCategory=function(){return s._nextCategory=s._nextCategory<<1,s._nextCategory};var g=function(d,S){S=S||{},s.set(d,{bounds:d.bounds||x.create(d.vertices),positionPrev:d.positionPrev||u.clone(d.position),anglePrev:d.anglePrev||d.angle,vertices:d.vertices,parts:d.parts||[d],isStatic:d.isStatic,isSleeping:d.isSleeping,parent:d.parent||d}),f.rotate(d.vertices,d.angle,d.position),_.rotate(d.axes,d.angle),x.update(d.bounds,d.vertices,d.velocity),s.set(d,{axes:S.axes||d.axes,area:S.area||d.area,mass:S.mass||d.mass,inertia:S.inertia||d.inertia});var M=d.isStatic?"#14151f":p.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),y=d.isStatic?"#555":"#ccc",b=d.isStatic&&d.render.fillStyle===null?1:0;d.render.fillStyle=d.render.fillStyle||M,d.render.strokeStyle=d.render.strokeStyle||y,d.render.lineWidth=d.render.lineWidth||b,d.render.sprite.xOffset+=-(d.bounds.min.x-d.position.x)/(d.bounds.max.x-d.bounds.min.x),d.render.sprite.yOffset+=-(d.bounds.min.y-d.position.y)/(d.bounds.max.y-d.bounds.min.y)};s.set=function(d,S,M){var y;typeof S=="string"&&(y=S,S={},S[y]=M);for(y in S)if(Object.prototype.hasOwnProperty.call(S,y))switch(M=S[y],y){case"isStatic":s.setStatic(d,M);break;case"isSleeping":h.set(d,M);break;case"mass":s.setMass(d,M);break;case"density":s.setDensity(d,M);break;case"inertia":s.setInertia(d,M);break;case"vertices":s.setVertices(d,M);break;case"position":s.setPosition(d,M);break;case"angle":s.setAngle(d,M);break;case"velocity":s.setVelocity(d,M);break;case"angularVelocity":s.setAngularVelocity(d,M);break;case"speed":s.setSpeed(d,M);break;case"angularSpeed":s.setAngularSpeed(d,M);break;case"parts":s.setParts(d,M);break;case"centre":s.setCentre(d,M);break;default:d[y]=M}},s.setStatic=function(d,S){for(var M=0;M<d.parts.length;M++){var y=d.parts[M];S?(y.isStatic||(y._original={restitution:y.restitution,friction:y.friction,mass:y.mass,inertia:y.inertia,density:y.density,inverseMass:y.inverseMass,inverseInertia:y.inverseInertia}),y.restitution=0,y.friction=1,y.mass=y.inertia=y.density=1/0,y.inverseMass=y.inverseInertia=0,y.positionPrev.x=y.position.x,y.positionPrev.y=y.position.y,y.anglePrev=y.angle,y.angularVelocity=0,y.speed=0,y.angularSpeed=0,y.motion=0):y._original&&(y.restitution=y._original.restitution,y.friction=y._original.friction,y.mass=y._original.mass,y.inertia=y._original.inertia,y.density=y._original.density,y.inverseMass=y._original.inverseMass,y.inverseInertia=y._original.inverseInertia,y._original=null),y.isStatic=S}},s.setMass=function(d,S){var M=d.inertia/(d.mass/6);d.inertia=M*(S/6),d.inverseInertia=1/d.inertia,d.mass=S,d.inverseMass=1/d.mass,d.density=d.mass/d.area},s.setDensity=function(d,S){s.setMass(d,S*d.area),d.density=S},s.setInertia=function(d,S){d.inertia=S,d.inverseInertia=1/d.inertia},s.setVertices=function(d,S){S[0].body===d?d.vertices=S:d.vertices=f.create(S,d),d.axes=_.fromVertices(d.vertices),d.area=f.area(d.vertices),s.setMass(d,d.density*d.area);var M=f.centre(d.vertices);f.translate(d.vertices,M,-1),s.setInertia(d,s._inertiaScale*f.inertia(d.vertices,d.mass)),f.translate(d.vertices,d.position),x.update(d.bounds,d.vertices,d.velocity)},s.setParts=function(d,S,M){var y;for(S=S.slice(0),d.parts.length=0,d.parts.push(d),d.parent=d,y=0;y<S.length;y++){var b=S[y];b!==d&&(b.parent=d,d.parts.push(b))}if(d.parts.length!==1){if(M=typeof M<"u"?M:!0,M){var D=[];for(y=0;y<S.length;y++)D=D.concat(S[y].vertices);f.clockwiseSort(D);var U=f.hull(D),N=f.centre(U);s.setVertices(d,U),f.translate(d.vertices,N)}var E=s._totalProperties(d);d.area=E.area,d.parent=d,d.position.x=E.centre.x,d.position.y=E.centre.y,d.positionPrev.x=E.centre.x,d.positionPrev.y=E.centre.y,s.setMass(d,E.mass),s.setInertia(d,E.inertia),s.setPosition(d,E.centre)}},s.setCentre=function(d,S,M){M?(d.positionPrev.x+=S.x,d.positionPrev.y+=S.y,d.position.x+=S.x,d.position.y+=S.y):(d.positionPrev.x=S.x-(d.position.x-d.positionPrev.x),d.positionPrev.y=S.y-(d.position.y-d.positionPrev.y),d.position.x=S.x,d.position.y=S.y)},s.setPosition=function(d,S,M){var y=u.sub(S,d.position);M?(d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.velocity.x=y.x,d.velocity.y=y.y,d.speed=u.magnitude(y)):(d.positionPrev.x+=y.x,d.positionPrev.y+=y.y);for(var b=0;b<d.parts.length;b++){var D=d.parts[b];D.position.x+=y.x,D.position.y+=y.y,f.translate(D.vertices,y),x.update(D.bounds,D.vertices,d.velocity)}},s.setAngle=function(d,S,M){var y=S-d.angle;M?(d.anglePrev=d.angle,d.angularVelocity=y,d.angularSpeed=Math.abs(y)):d.anglePrev+=y;for(var b=0;b<d.parts.length;b++){var D=d.parts[b];D.angle+=y,f.rotate(D.vertices,y,d.position),_.rotate(D.axes,y),x.update(D.bounds,D.vertices,d.velocity),b>0&&u.rotateAbout(D.position,y,d.position,D.position)}},s.setVelocity=function(d,S){var M=d.deltaTime/s._baseDelta;d.positionPrev.x=d.position.x-S.x*M,d.positionPrev.y=d.position.y-S.y*M,d.velocity.x=(d.position.x-d.positionPrev.x)/M,d.velocity.y=(d.position.y-d.positionPrev.y)/M,d.speed=u.magnitude(d.velocity)},s.getVelocity=function(d){var S=s._baseDelta/d.deltaTime;return{x:(d.position.x-d.positionPrev.x)*S,y:(d.position.y-d.positionPrev.y)*S}},s.getSpeed=function(d){return u.magnitude(s.getVelocity(d))},s.setSpeed=function(d,S){s.setVelocity(d,u.mult(u.normalise(s.getVelocity(d)),S))},s.setAngularVelocity=function(d,S){var M=d.deltaTime/s._baseDelta;d.anglePrev=d.angle-S*M,d.angularVelocity=(d.angle-d.anglePrev)/M,d.angularSpeed=Math.abs(d.angularVelocity)},s.getAngularVelocity=function(d){return(d.angle-d.anglePrev)*s._baseDelta/d.deltaTime},s.getAngularSpeed=function(d){return Math.abs(s.getAngularVelocity(d))},s.setAngularSpeed=function(d,S){s.setAngularVelocity(d,p.sign(s.getAngularVelocity(d))*S)},s.translate=function(d,S,M){s.setPosition(d,u.add(d.position,S),M)},s.rotate=function(d,S,M,y){if(!M)s.setAngle(d,d.angle+S,y);else{var b=Math.cos(S),D=Math.sin(S),U=d.position.x-M.x,N=d.position.y-M.y;s.setPosition(d,{x:M.x+(U*b-N*D),y:M.y+(U*D+N*b)},y),s.setAngle(d,d.angle+S,y)}},s.scale=function(d,S,M,y){var b=0,D=0;y=y||d.position;for(var U=0;U<d.parts.length;U++){var N=d.parts[U];f.scale(N.vertices,S,M,y),N.axes=_.fromVertices(N.vertices),N.area=f.area(N.vertices),s.setMass(N,d.density*N.area),f.translate(N.vertices,{x:-N.position.x,y:-N.position.y}),s.setInertia(N,s._inertiaScale*f.inertia(N.vertices,N.mass)),f.translate(N.vertices,{x:N.position.x,y:N.position.y}),U>0&&(b+=N.area,D+=N.inertia),N.position.x=y.x+(N.position.x-y.x)*S,N.position.y=y.y+(N.position.y-y.y)*M,x.update(N.bounds,N.vertices,d.velocity)}d.parts.length>1&&(d.area=b,d.isStatic||(s.setMass(d,d.density*b),s.setInertia(d,D))),d.circleRadius&&(S===M?d.circleRadius*=S:d.circleRadius=null)},s.update=function(d,S){S=(typeof S<"u"?S:1e3/60)*d.timeScale;var M=S*S,y=s._timeCorrection?S/(d.deltaTime||S):1,b=1-d.frictionAir*(S/p._baseDelta),D=(d.position.x-d.positionPrev.x)*y,U=(d.position.y-d.positionPrev.y)*y;d.velocity.x=D*b+d.force.x/d.mass*M,d.velocity.y=U*b+d.force.y/d.mass*M,d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.position.x+=d.velocity.x,d.position.y+=d.velocity.y,d.deltaTime=S,d.angularVelocity=(d.angle-d.anglePrev)*b*y+d.torque/d.inertia*M,d.anglePrev=d.angle,d.angle+=d.angularVelocity;for(var N=0;N<d.parts.length;N++){var E=d.parts[N];f.translate(E.vertices,d.velocity),N>0&&(E.position.x+=d.velocity.x,E.position.y+=d.velocity.y),d.angularVelocity!==0&&(f.rotate(E.vertices,d.angularVelocity,d.position),_.rotate(E.axes,d.angularVelocity),N>0&&u.rotateAbout(E.position,d.angularVelocity,d.position,E.position)),x.update(E.bounds,E.vertices,d.velocity)}},s.updateVelocities=function(d){var S=s._baseDelta/d.deltaTime,M=d.velocity;M.x=(d.position.x-d.positionPrev.x)*S,M.y=(d.position.y-d.positionPrev.y)*S,d.speed=Math.sqrt(M.x*M.x+M.y*M.y),d.angularVelocity=(d.angle-d.anglePrev)*S,d.angularSpeed=Math.abs(d.angularVelocity)},s.applyForce=function(d,S,M){var y={x:S.x-d.position.x,y:S.y-d.position.y};d.force.x+=M.x,d.force.y+=M.y,d.torque+=y.x*M.y-y.y*M.x},s._totalProperties=function(d){for(var S={mass:0,area:0,inertia:0,centre:{x:0,y:0}},M=d.parts.length===1?0:1;M<d.parts.length;M++){var y=d.parts[M],b=y.mass!==1/0?y.mass:1;S.mass+=b,S.area+=y.area,S.inertia+=y.inertia,S.centre=u.add(S.centre,u.mult(y.position,b))}return S.centre=u.div(S.centre,S.mass),S}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(0);(function(){s.on=function(u,h,p){for(var x=h.split(" "),_,g=0;g<x.length;g++)_=x[g],u.events=u.events||{},u.events[_]=u.events[_]||[],u.events[_].push(p);return p},s.off=function(u,h,p){if(!h){u.events={};return}typeof h=="function"&&(p=h,h=f.keys(u.events).join(" "));for(var x=h.split(" "),_=0;_<x.length;_++){var g=u.events[x[_]],d=[];if(p&&g)for(var S=0;S<g.length;S++)g[S]!==p&&d.push(g[S]);u.events[x[_]]=d}},s.trigger=function(u,h,p){var x,_,g,d,S=u.events;if(S&&f.keys(S).length>0){p||(p={}),x=h.split(" ");for(var M=0;M<x.length;M++)if(_=x[M],g=S[_],g){d=f.clone(p,!1),d.name=_,d.source=u;for(var y=0;y<g.length;y++)g[y].apply(u,[d])}}}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(5),u=l(0),h=l(1),p=l(4);(function(){s.create=function(x){return u.extend({id:u.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},x)},s.setModified=function(x,_,g,d){if(x.isModified=_,_&&x.cache&&(x.cache.allBodies=null,x.cache.allConstraints=null,x.cache.allComposites=null),g&&x.parent&&s.setModified(x.parent,_,g,d),d)for(var S=0;S<x.composites.length;S++){var M=x.composites[S];s.setModified(M,_,g,d)}},s.add=function(x,_){var g=[].concat(_);f.trigger(x,"beforeAdd",{object:_});for(var d=0;d<g.length;d++){var S=g[d];switch(S.type){case"body":if(S.parent!==S){u.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}s.addBody(x,S);break;case"constraint":s.addConstraint(x,S);break;case"composite":s.addComposite(x,S);break;case"mouseConstraint":s.addConstraint(x,S.constraint);break}}return f.trigger(x,"afterAdd",{object:_}),x},s.remove=function(x,_,g){var d=[].concat(_);f.trigger(x,"beforeRemove",{object:_});for(var S=0;S<d.length;S++){var M=d[S];switch(M.type){case"body":s.removeBody(x,M,g);break;case"constraint":s.removeConstraint(x,M,g);break;case"composite":s.removeComposite(x,M,g);break;case"mouseConstraint":s.removeConstraint(x,M.constraint);break}}return f.trigger(x,"afterRemove",{object:_}),x},s.addComposite=function(x,_){return x.composites.push(_),_.parent=x,s.setModified(x,!0,!0,!1),x},s.removeComposite=function(x,_,g){var d=u.indexOf(x.composites,_);if(d!==-1){var S=s.allBodies(_);s.removeCompositeAt(x,d);for(var M=0;M<S.length;M++)S[M].sleepCounter=0}if(g)for(var M=0;M<x.composites.length;M++)s.removeComposite(x.composites[M],_,!0);return x},s.removeCompositeAt=function(x,_){return x.composites.splice(_,1),s.setModified(x,!0,!0,!1),x},s.addBody=function(x,_){return x.bodies.push(_),s.setModified(x,!0,!0,!1),x},s.removeBody=function(x,_,g){var d=u.indexOf(x.bodies,_);if(d!==-1&&(s.removeBodyAt(x,d),_.sleepCounter=0),g)for(var S=0;S<x.composites.length;S++)s.removeBody(x.composites[S],_,!0);return x},s.removeBodyAt=function(x,_){return x.bodies.splice(_,1),s.setModified(x,!0,!0,!1),x},s.addConstraint=function(x,_){return x.constraints.push(_),s.setModified(x,!0,!0,!1),x},s.removeConstraint=function(x,_,g){var d=u.indexOf(x.constraints,_);if(d!==-1&&s.removeConstraintAt(x,d),g)for(var S=0;S<x.composites.length;S++)s.removeConstraint(x.composites[S],_,!0);return x},s.removeConstraintAt=function(x,_){return x.constraints.splice(_,1),s.setModified(x,!0,!0,!1),x},s.clear=function(x,_,g){if(g)for(var d=0;d<x.composites.length;d++)s.clear(x.composites[d],_,!0);return _?x.bodies=x.bodies.filter(function(S){return S.isStatic}):x.bodies.length=0,x.constraints.length=0,x.composites.length=0,s.setModified(x,!0,!0,!1),x},s.allBodies=function(x){if(x.cache&&x.cache.allBodies)return x.cache.allBodies;for(var _=[].concat(x.bodies),g=0;g<x.composites.length;g++)_=_.concat(s.allBodies(x.composites[g]));return x.cache&&(x.cache.allBodies=_),_},s.allConstraints=function(x){if(x.cache&&x.cache.allConstraints)return x.cache.allConstraints;for(var _=[].concat(x.constraints),g=0;g<x.composites.length;g++)_=_.concat(s.allConstraints(x.composites[g]));return x.cache&&(x.cache.allConstraints=_),_},s.allComposites=function(x){if(x.cache&&x.cache.allComposites)return x.cache.allComposites;for(var _=[].concat(x.composites),g=0;g<x.composites.length;g++)_=_.concat(s.allComposites(x.composites[g]));return x.cache&&(x.cache.allComposites=_),_},s.get=function(x,_,g){var d,S;switch(g){case"body":d=s.allBodies(x);break;case"constraint":d=s.allConstraints(x);break;case"composite":d=s.allComposites(x).concat(x);break}return d?(S=d.filter(function(M){return M.id.toString()===_.toString()}),S.length===0?null:S[0]):null},s.move=function(x,_,g){return s.remove(x,_),s.add(g,_),x},s.rebase=function(x){for(var _=s.allBodies(x).concat(s.allConstraints(x)).concat(s.allComposites(x)),g=0;g<_.length;g++)_[g].id=u.nextId();return x},s.translate=function(x,_,g){for(var d=g?s.allBodies(x):x.bodies,S=0;S<d.length;S++)p.translate(d[S],_);return x},s.rotate=function(x,_,g,d){for(var S=Math.cos(_),M=Math.sin(_),y=d?s.allBodies(x):x.bodies,b=0;b<y.length;b++){var D=y[b],U=D.position.x-g.x,N=D.position.y-g.y;p.setPosition(D,{x:g.x+(U*S-N*M),y:g.y+(U*M+N*S)}),p.rotate(D,_)}return x},s.scale=function(x,_,g,d,S){for(var M=S?s.allBodies(x):x.bodies,y=0;y<M.length;y++){var b=M[y],D=b.position.x-d.x,U=b.position.y-d.y;p.setPosition(b,{x:d.x+D*_,y:d.y+U*g}),p.scale(b,_,g)}return x},s.bounds=function(x){for(var _=s.allBodies(x),g=[],d=0;d<_.length;d+=1){var S=_[d];g.push(S.bounds.min,S.bounds.max)}return h.create(g)}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(4),u=l(5),h=l(0);(function(){s._motionWakeThreshold=.18,s._motionSleepThreshold=.08,s._minBias=.9,s.update=function(p,x){for(var _=x/h._baseDelta,g=s._motionSleepThreshold,d=0;d<p.length;d++){var S=p[d],M=f.getSpeed(S),y=f.getAngularSpeed(S),b=M*M+y*y;if(S.force.x!==0||S.force.y!==0){s.set(S,!1);continue}var D=Math.min(S.motion,b),U=Math.max(S.motion,b);S.motion=s._minBias*D+(1-s._minBias)*U,S.sleepThreshold>0&&S.motion<g?(S.sleepCounter+=1,S.sleepCounter>=S.sleepThreshold/_&&s.set(S,!0)):S.sleepCounter>0&&(S.sleepCounter-=1)}},s.afterCollisions=function(p){for(var x=s._motionSleepThreshold,_=0;_<p.length;_++){var g=p[_];if(g.isActive){var d=g.collision,S=d.bodyA.parent,M=d.bodyB.parent;if(!(S.isSleeping&&M.isSleeping||S.isStatic||M.isStatic)&&(S.isSleeping||M.isSleeping)){var y=S.isSleeping&&!S.isStatic?S:M,b=y===S?M:S;!y.isStatic&&b.motion>x&&s.set(y,!1)}}}},s.set=function(p,x){var _=p.isSleeping;x?(p.isSleeping=!0,p.sleepCounter=p.sleepThreshold,p.positionImpulse.x=0,p.positionImpulse.y=0,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.anglePrev=p.angle,p.speed=0,p.angularSpeed=0,p.motion=0,_||u.trigger(p,"sleepStart")):(p.isSleeping=!1,p.sleepCounter=0,_&&u.trigger(p,"sleepEnd"))}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(3),u=l(9);(function(){var h=[],p={overlap:0,axis:null},x={overlap:0,axis:null};s.create=function(_,g){return{pair:null,collided:!1,bodyA:_,bodyB:g,parentA:_.parent,parentB:g.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},s.collides=function(_,g,d){if(s._overlapAxes(p,_.vertices,g.vertices,_.axes),p.overlap<=0||(s._overlapAxes(x,g.vertices,_.vertices,g.axes),x.overlap<=0))return null;var S=d&&d.table[u.id(_,g)],M;S?M=S.collision:(M=s.create(_,g),M.collided=!0,M.bodyA=_.id<g.id?_:g,M.bodyB=_.id<g.id?g:_,M.parentA=M.bodyA.parent,M.parentB=M.bodyB.parent),_=M.bodyA,g=M.bodyB;var y;p.overlap<x.overlap?y=p:y=x;var b=M.normal,D=M.tangent,U=M.penetration,N=M.supports,E=y.overlap,T=y.axis,w=T.x,L=T.y,R=g.position.x-_.position.x,A=g.position.y-_.position.y;w*R+L*A>=0&&(w=-w,L=-L),b.x=w,b.y=L,D.x=-L,D.y=w,U.x=w*E,U.y=L*E,M.depth=E;var O=s._findSupports(_,g,b,1),P=0;if(f.contains(_.vertices,O[0])&&(N[P++]=O[0]),f.contains(_.vertices,O[1])&&(N[P++]=O[1]),P<2){var H=s._findSupports(g,_,b,-1);f.contains(g.vertices,H[0])&&(N[P++]=H[0]),P<2&&f.contains(g.vertices,H[1])&&(N[P++]=H[1])}return P===0&&(N[P++]=O[0]),M.supportCount=P,M},s._overlapAxes=function(_,g,d,S){var M=g.length,y=d.length,b=g[0].x,D=g[0].y,U=d[0].x,N=d[0].y,E=S.length,T=Number.MAX_VALUE,w=0,L,R,A,O,P,H;for(P=0;P<E;P++){var W=S[P],X=W.x,I=W.y,k=b*X+D*I,Z=U*X+N*I,it=k,lt=Z;for(H=1;H<M;H+=1)O=g[H].x*X+g[H].y*I,O>it?it=O:O<k&&(k=O);for(H=1;H<y;H+=1)O=d[H].x*X+d[H].y*I,O>lt?lt=O:O<Z&&(Z=O);if(R=it-Z,A=lt-k,L=R<A?R:A,L<T&&(T=L,w=P,L<=0))break}_.axis=S[w],_.overlap=T},s._findSupports=function(_,g,d,S){var M=g.vertices,y=M.length,b=_.position.x,D=_.position.y,U=d.x*S,N=d.y*S,E=M[0],T=E,w=U*(b-T.x)+N*(D-T.y),L,R,A;for(A=1;A<y;A+=1)T=M[A],R=U*(b-T.x)+N*(D-T.y),R<w&&(w=R,E=T);return L=M[(y+E.index-1)%y],w=U*(b-L.x)+N*(D-L.y),T=M[(E.index+1)%y],U*(b-T.x)+N*(D-T.y)<w?(h[0]=E,h[1]=T,h):(h[0]=E,h[1]=L,h)}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(16);(function(){s.create=function(u,h){var p=u.bodyA,x=u.bodyB,_={id:s.id(p,x),bodyA:p,bodyB:x,collision:u,contacts:[f.create(),f.create()],contactCount:0,separation:0,isActive:!0,isSensor:p.isSensor||x.isSensor,timeCreated:h,timeUpdated:h,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return s.update(_,u,h),_},s.update=function(u,h,p){var x=h.supports,_=h.supportCount,g=u.contacts,d=h.parentA,S=h.parentB;u.isActive=!0,u.timeUpdated=p,u.collision=h,u.separation=h.depth,u.inverseMass=d.inverseMass+S.inverseMass,u.friction=d.friction<S.friction?d.friction:S.friction,u.frictionStatic=d.frictionStatic>S.frictionStatic?d.frictionStatic:S.frictionStatic,u.restitution=d.restitution>S.restitution?d.restitution:S.restitution,u.slop=d.slop>S.slop?d.slop:S.slop,u.contactCount=_,h.pair=u;var M=x[0],y=g[0],b=x[1],D=g[1];(D.vertex===M||y.vertex===b)&&(g[1]=y,g[0]=y=D,D=g[1]),y.vertex=M,D.vertex=b},s.setActive=function(u,h,p){h?(u.isActive=!0,u.timeUpdated=p):(u.isActive=!1,u.contactCount=0)},s.id=function(u,h){return u.id<h.id?u.id.toString(36)+":"+h.id.toString(36):h.id.toString(36)+":"+u.id.toString(36)}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(3),u=l(2),h=l(7),p=l(1),x=l(11),_=l(0);(function(){s._warming=.4,s._torqueDampen=1,s._minLength=1e-6,s.create=function(g){var d=g;d.bodyA&&!d.pointA&&(d.pointA={x:0,y:0}),d.bodyB&&!d.pointB&&(d.pointB={x:0,y:0});var S=d.bodyA?u.add(d.bodyA.position,d.pointA):d.pointA,M=d.bodyB?u.add(d.bodyB.position,d.pointB):d.pointB,y=u.magnitude(u.sub(S,M));d.length=typeof d.length<"u"?d.length:y,d.id=d.id||_.nextId(),d.label=d.label||"Constraint",d.type="constraint",d.stiffness=d.stiffness||(d.length>0?1:.7),d.damping=d.damping||0,d.angularStiffness=d.angularStiffness||0,d.angleA=d.bodyA?d.bodyA.angle:d.angleA,d.angleB=d.bodyB?d.bodyB.angle:d.angleB,d.plugin={};var b={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return d.length===0&&d.stiffness>.1?(b.type="pin",b.anchors=!1):d.stiffness<.9&&(b.type="spring"),d.render=_.extend(b,d.render),d},s.preSolveAll=function(g){for(var d=0;d<g.length;d+=1){var S=g[d],M=S.constraintImpulse;S.isStatic||M.x===0&&M.y===0&&M.angle===0||(S.position.x+=M.x,S.position.y+=M.y,S.angle+=M.angle)}},s.solveAll=function(g,d){for(var S=_.clamp(d/_._baseDelta,0,1),M=0;M<g.length;M+=1){var y=g[M],b=!y.bodyA||y.bodyA&&y.bodyA.isStatic,D=!y.bodyB||y.bodyB&&y.bodyB.isStatic;(b||D)&&s.solve(g[M],S)}for(M=0;M<g.length;M+=1)y=g[M],b=!y.bodyA||y.bodyA&&y.bodyA.isStatic,D=!y.bodyB||y.bodyB&&y.bodyB.isStatic,!b&&!D&&s.solve(g[M],S)},s.solve=function(g,d){var S=g.bodyA,M=g.bodyB,y=g.pointA,b=g.pointB;if(!(!S&&!M)){S&&!S.isStatic&&(u.rotate(y,S.angle-g.angleA,y),g.angleA=S.angle),M&&!M.isStatic&&(u.rotate(b,M.angle-g.angleB,b),g.angleB=M.angle);var D=y,U=b;if(S&&(D=u.add(S.position,y)),M&&(U=u.add(M.position,b)),!(!D||!U)){var N=u.sub(D,U),E=u.magnitude(N);E<s._minLength&&(E=s._minLength);var T=(E-g.length)/E,w=g.stiffness>=1||g.length===0,L=w?g.stiffness*d:g.stiffness*d*d,R=g.damping*d,A=u.mult(N,T*L),O=(S?S.inverseMass:0)+(M?M.inverseMass:0),P=(S?S.inverseInertia:0)+(M?M.inverseInertia:0),H=O+P,W,X,I,k,Z;if(R>0){var it=u.create();I=u.div(N,E),Z=u.sub(M&&u.sub(M.position,M.positionPrev)||it,S&&u.sub(S.position,S.positionPrev)||it),k=u.dot(I,Z)}S&&!S.isStatic&&(X=S.inverseMass/O,S.constraintImpulse.x-=A.x*X,S.constraintImpulse.y-=A.y*X,S.position.x-=A.x*X,S.position.y-=A.y*X,R>0&&(S.positionPrev.x-=R*I.x*k*X,S.positionPrev.y-=R*I.y*k*X),W=u.cross(y,A)/H*s._torqueDampen*S.inverseInertia*(1-g.angularStiffness),S.constraintImpulse.angle-=W,S.angle-=W),M&&!M.isStatic&&(X=M.inverseMass/O,M.constraintImpulse.x+=A.x*X,M.constraintImpulse.y+=A.y*X,M.position.x+=A.x*X,M.position.y+=A.y*X,R>0&&(M.positionPrev.x+=R*I.x*k*X,M.positionPrev.y+=R*I.y*k*X),W=u.cross(b,A)/H*s._torqueDampen*M.inverseInertia*(1-g.angularStiffness),M.constraintImpulse.angle+=W,M.angle+=W)}}},s.postSolveAll=function(g){for(var d=0;d<g.length;d++){var S=g[d],M=S.constraintImpulse;if(!(S.isStatic||M.x===0&&M.y===0&&M.angle===0)){h.set(S,!1);for(var y=0;y<S.parts.length;y++){var b=S.parts[y];f.translate(b.vertices,M),y>0&&(b.position.x+=M.x,b.position.y+=M.y),M.angle!==0&&(f.rotate(b.vertices,M.angle,S.position),x.rotate(b.axes,M.angle),y>0&&u.rotateAbout(b.position,M.angle,S.position,b.position)),p.update(b.bounds,b.vertices,S.velocity)}M.angle*=s._warming,M.x*=s._warming,M.y*=s._warming}}},s.pointAWorld=function(g){return{x:(g.bodyA?g.bodyA.position.x:0)+(g.pointA?g.pointA.x:0),y:(g.bodyA?g.bodyA.position.y:0)+(g.pointA?g.pointA.y:0)}},s.pointBWorld=function(g){return{x:(g.bodyB?g.bodyB.position.x:0)+(g.pointB?g.pointB.x:0),y:(g.bodyB?g.bodyB.position.y:0)+(g.pointB?g.pointB.y:0)}},s.currentLength=function(g){var d=(g.bodyA?g.bodyA.position.x:0)+(g.pointA?g.pointA.x:0),S=(g.bodyA?g.bodyA.position.y:0)+(g.pointA?g.pointA.y:0),M=(g.bodyB?g.bodyB.position.x:0)+(g.pointB?g.pointB.x:0),y=(g.bodyB?g.bodyB.position.y:0)+(g.pointB?g.pointB.y:0),b=d-M,D=S-y;return Math.sqrt(b*b+D*D)}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(2),u=l(0);(function(){s.fromVertices=function(h){for(var p={},x=0;x<h.length;x++){var _=(x+1)%h.length,g=f.normalise({x:h[_].y-h[x].y,y:h[x].x-h[_].x}),d=g.y===0?1/0:g.x/g.y;d=d.toFixed(3).toString(),p[d]=g}return u.values(p)},s.rotate=function(h,p){if(p!==0)for(var x=Math.cos(p),_=Math.sin(p),g=0;g<h.length;g++){var d=h[g],S;S=d.x*x-d.y*_,d.y=d.x*_+d.y*x,d.x=S}}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(3),u=l(0),h=l(4),p=l(1),x=l(2);(function(){s.rectangle=function(_,g,d,S,M){M=M||{};var y={label:"Rectangle Body",position:{x:_,y:g},vertices:f.fromPath("L 0 0 L "+d+" 0 L "+d+" "+S+" L 0 "+S)};if(M.chamfer){var b=M.chamfer;y.vertices=f.chamfer(y.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete M.chamfer}return h.create(u.extend({},y,M))},s.trapezoid=function(_,g,d,S,M,y){y=y||{},M>=1&&u.warn("Bodies.trapezoid: slope parameter must be < 1."),M*=.5;var b=(1-M*2)*d,D=d*M,U=D+b,N=U+D,E;M<.5?E="L 0 0 L "+D+" "+-S+" L "+U+" "+-S+" L "+N+" 0":E="L 0 0 L "+U+" "+-S+" L "+N+" 0";var T={label:"Trapezoid Body",position:{x:_,y:g},vertices:f.fromPath(E)};if(y.chamfer){var w=y.chamfer;T.vertices=f.chamfer(T.vertices,w.radius,w.quality,w.qualityMin,w.qualityMax),delete y.chamfer}return h.create(u.extend({},T,y))},s.circle=function(_,g,d,S,M){S=S||{};var y={label:"Circle Body",circleRadius:d};M=M||25;var b=Math.ceil(Math.max(10,Math.min(M,d)));return b%2===1&&(b+=1),s.polygon(_,g,b,d,u.extend({},y,S))},s.polygon=function(_,g,d,S,M){if(M=M||{},d<3)return s.circle(_,g,S,M);for(var y=2*Math.PI/d,b="",D=y*.5,U=0;U<d;U+=1){var N=D+U*y,E=Math.cos(N)*S,T=Math.sin(N)*S;b+="L "+E.toFixed(3)+" "+T.toFixed(3)+" "}var w={label:"Polygon Body",position:{x:_,y:g},vertices:f.fromPath(b)};if(M.chamfer){var L=M.chamfer;w.vertices=f.chamfer(w.vertices,L.radius,L.quality,L.qualityMin,L.qualityMax),delete M.chamfer}return h.create(u.extend({},w,M))},s.fromVertices=function(_,g,d,S,M,y,b,D){var U=u.getDecomp(),N,E,T,w,L,R,A,O,P,H,W;for(N=!!(U&&U.quickDecomp),S=S||{},T=[],M=typeof M<"u"?M:!1,y=typeof y<"u"?y:.01,b=typeof b<"u"?b:10,D=typeof D<"u"?D:.01,u.isArray(d[0])||(d=[d]),H=0;H<d.length;H+=1)if(R=d[H],w=f.isConvex(R),L=!w,L&&!N&&u.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),w||!N)w?R=f.clockwiseSort(R):R=f.hull(R),T.push({position:{x:_,y:g},vertices:R});else{var X=R.map(function(Q){return[Q.x,Q.y]});U.makeCCW(X),y!==!1&&U.removeCollinearPoints(X,y),D!==!1&&U.removeDuplicatePoints&&U.removeDuplicatePoints(X,D);var I=U.quickDecomp(X);for(A=0;A<I.length;A++){var k=I[A],Z=k.map(function(Q){return{x:Q[0],y:Q[1]}});b>0&&f.area(Z)<b||T.push({position:f.centre(Z),vertices:Z})}}for(A=0;A<T.length;A++)T[A]=h.create(u.extend(T[A],S));if(M){var it=5;for(A=0;A<T.length;A++){var lt=T[A];for(O=A+1;O<T.length;O++){var V=T[O];if(p.overlaps(lt.bounds,V.bounds)){var tt=lt.vertices,ht=V.vertices;for(P=0;P<lt.vertices.length;P++)for(W=0;W<V.vertices.length;W++){var pt=x.magnitudeSquared(x.sub(tt[(P+1)%tt.length],ht[W])),bt=x.magnitudeSquared(x.sub(tt[P],ht[(W+1)%ht.length]));pt<it&&bt<it&&(tt[P].isInternal=!0,ht[W].isInternal=!0)}}}}}return T.length>1?(E=h.create(u.extend({parts:T.slice(0)},S)),h.setPosition(E,{x:_,y:g}),E):T[0]}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(0),u=l(8);(function(){s.create=function(h){var p={bodies:[],collisions:[],pairs:null};return f.extend(p,h)},s.setBodies=function(h,p){h.bodies=p.slice(0)},s.clear=function(h){h.bodies=[],h.collisions=[]},s.collisions=function(h){var p=h.pairs,x=h.bodies,_=x.length,g=s.canCollide,d=u.collides,S=h.collisions,M=0,y,b;for(x.sort(s._compareBoundsX),y=0;y<_;y++){var D=x[y],U=D.bounds,N=D.bounds.max.x,E=D.bounds.max.y,T=D.bounds.min.y,w=D.isStatic||D.isSleeping,L=D.parts.length,R=L===1;for(b=y+1;b<_;b++){var A=x[b],O=A.bounds;if(O.min.x>N)break;if(!(E<O.min.y||T>O.max.y)&&!(w&&(A.isStatic||A.isSleeping))&&g(D.collisionFilter,A.collisionFilter)){var P=A.parts.length;if(R&&P===1){var H=d(D,A,p);H&&(S[M++]=H)}else for(var W=L>1?1:0,X=P>1?1:0,I=W;I<L;I++)for(var k=D.parts[I],U=k.bounds,Z=X;Z<P;Z++){var it=A.parts[Z],O=it.bounds;if(!(U.min.x>O.max.x||U.max.x<O.min.x||U.max.y<O.min.y||U.min.y>O.max.y)){var H=d(k,it,p);H&&(S[M++]=H)}}}}}return S.length!==M&&(S.length=M),S},s.canCollide=function(h,p){return h.group===p.group&&h.group!==0?h.group>0:(h.mask&p.category)!==0&&(p.mask&h.category)!==0},s._compareBoundsX=function(h,p){return h.bounds.min.x-p.bounds.min.x}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(0);(function(){s.create=function(u){var h={};return u||f.log("Mouse.create: element was undefined, defaulting to document.body","warn"),h.element=u||document.body,h.absolute={x:0,y:0},h.position={x:0,y:0},h.mousedownPosition={x:0,y:0},h.mouseupPosition={x:0,y:0},h.offset={x:0,y:0},h.scale={x:1,y:1},h.wheelDelta=0,h.button=-1,h.pixelRatio=parseInt(h.element.getAttribute("data-pixel-ratio"),10)||1,h.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},h.mousemove=function(p){var x=s._getRelativeMousePosition(p,h.element,h.pixelRatio),_=p.changedTouches;_&&(h.button=0,p.preventDefault()),h.absolute.x=x.x,h.absolute.y=x.y,h.position.x=h.absolute.x*h.scale.x+h.offset.x,h.position.y=h.absolute.y*h.scale.y+h.offset.y,h.sourceEvents.mousemove=p},h.mousedown=function(p){var x=s._getRelativeMousePosition(p,h.element,h.pixelRatio),_=p.changedTouches;_?(h.button=0,p.preventDefault()):h.button=p.button,h.absolute.x=x.x,h.absolute.y=x.y,h.position.x=h.absolute.x*h.scale.x+h.offset.x,h.position.y=h.absolute.y*h.scale.y+h.offset.y,h.mousedownPosition.x=h.position.x,h.mousedownPosition.y=h.position.y,h.sourceEvents.mousedown=p},h.mouseup=function(p){var x=s._getRelativeMousePosition(p,h.element,h.pixelRatio),_=p.changedTouches;_&&p.preventDefault(),h.button=-1,h.absolute.x=x.x,h.absolute.y=x.y,h.position.x=h.absolute.x*h.scale.x+h.offset.x,h.position.y=h.absolute.y*h.scale.y+h.offset.y,h.mouseupPosition.x=h.position.x,h.mouseupPosition.y=h.position.y,h.sourceEvents.mouseup=p},h.mousewheel=function(p){h.wheelDelta=Math.max(-1,Math.min(1,p.wheelDelta||-p.detail)),p.preventDefault(),h.sourceEvents.mousewheel=p},s.setElement(h,h.element),h},s.setElement=function(u,h){u.element=h,h.addEventListener("mousemove",u.mousemove,{passive:!0}),h.addEventListener("mousedown",u.mousedown,{passive:!0}),h.addEventListener("mouseup",u.mouseup,{passive:!0}),h.addEventListener("wheel",u.mousewheel,{passive:!1}),h.addEventListener("touchmove",u.mousemove,{passive:!1}),h.addEventListener("touchstart",u.mousedown,{passive:!1}),h.addEventListener("touchend",u.mouseup,{passive:!1})},s.clearSourceEvents=function(u){u.sourceEvents.mousemove=null,u.sourceEvents.mousedown=null,u.sourceEvents.mouseup=null,u.sourceEvents.mousewheel=null,u.wheelDelta=0},s.setOffset=function(u,h){u.offset.x=h.x,u.offset.y=h.y,u.position.x=u.absolute.x*u.scale.x+u.offset.x,u.position.y=u.absolute.y*u.scale.y+u.offset.y},s.setScale=function(u,h){u.scale.x=h.x,u.scale.y=h.y,u.position.x=u.absolute.x*u.scale.x+u.offset.x,u.position.y=u.absolute.y*u.scale.y+u.offset.y},s._getRelativeMousePosition=function(u,h,p){var x=h.getBoundingClientRect(),_=document.documentElement||document.body.parentNode||document.body,g=window.pageXOffset!==void 0?window.pageXOffset:_.scrollLeft,d=window.pageYOffset!==void 0?window.pageYOffset:_.scrollTop,S=u.changedTouches,M,y;return S?(M=S[0].pageX-x.left-g,y=S[0].pageY-x.top-d):(M=u.pageX-x.left-g,y=u.pageY-x.top-d),{x:M/(h.clientWidth/(h.width||h.clientWidth)*p),y:y/(h.clientHeight/(h.height||h.clientHeight)*p)}}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(0);(function(){s._registry={},s.register=function(u){if(s.isPlugin(u)||f.warn("Plugin.register:",s.toString(u),"does not implement all required fields."),u.name in s._registry){var h=s._registry[u.name],p=s.versionParse(u.version).number,x=s.versionParse(h.version).number;p>x?(f.warn("Plugin.register:",s.toString(h),"was upgraded to",s.toString(u)),s._registry[u.name]=u):p<x?f.warn("Plugin.register:",s.toString(h),"can not be downgraded to",s.toString(u)):u!==h&&f.warn("Plugin.register:",s.toString(u),"is already registered to different plugin object")}else s._registry[u.name]=u;return u},s.resolve=function(u){return s._registry[s.dependencyParse(u).name]},s.toString=function(u){return typeof u=="string"?u:(u.name||"anonymous")+"@"+(u.version||u.range||"0.0.0")},s.isPlugin=function(u){return u&&u.name&&u.version&&u.install},s.isUsed=function(u,h){return u.used.indexOf(h)>-1},s.isFor=function(u,h){var p=u.for&&s.dependencyParse(u.for);return!u.for||h.name===p.name&&s.versionSatisfies(h.version,p.range)},s.use=function(u,h){if(u.uses=(u.uses||[]).concat(h||[]),u.uses.length===0){f.warn("Plugin.use:",s.toString(u),"does not specify any dependencies to install.");return}for(var p=s.dependencies(u),x=f.topologicalSort(p),_=[],g=0;g<x.length;g+=1)if(x[g]!==u.name){var d=s.resolve(x[g]);if(!d){_.push("❌ "+x[g]);continue}s.isUsed(u,d.name)||(s.isFor(d,u)||(f.warn("Plugin.use:",s.toString(d),"is for",d.for,"but installed on",s.toString(u)+"."),d._warned=!0),d.install?d.install(u):(f.warn("Plugin.use:",s.toString(d),"does not specify an install function."),d._warned=!0),d._warned?(_.push("🔶 "+s.toString(d)),delete d._warned):_.push("✅ "+s.toString(d)),u.used.push(d.name))}_.length>0&&f.info(_.join("  "))},s.dependencies=function(u,h){var p=s.dependencyParse(u),x=p.name;if(h=h||{},!(x in h)){u=s.resolve(u)||u,h[x]=f.map(u.uses||[],function(g){s.isPlugin(g)&&s.register(g);var d=s.dependencyParse(g),S=s.resolve(g);return S&&!s.versionSatisfies(S.version,d.range)?(f.warn("Plugin.dependencies:",s.toString(S),"does not satisfy",s.toString(d),"used by",s.toString(p)+"."),S._warned=!0,u._warned=!0):S||(f.warn("Plugin.dependencies:",s.toString(g),"used by",s.toString(p),"could not be resolved."),u._warned=!0),d.name});for(var _=0;_<h[x].length;_+=1)s.dependencies(h[x][_],h);return h}},s.dependencyParse=function(u){if(f.isString(u)){var h=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return h.test(u)||f.warn("Plugin.dependencyParse:",u,"is not a valid dependency string."),{name:u.split("@")[0],range:u.split("@")[1]||"*"}}return{name:u.name,range:u.range||u.version}},s.versionParse=function(u){var h=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;h.test(u)||f.warn("Plugin.versionParse:",u,"is not a valid version or range.");var p=h.exec(u),x=Number(p[4]),_=Number(p[5]),g=Number(p[6]);return{isRange:!!(p[1]||p[2]),version:p[3],range:u,operator:p[1]||p[2]||"",major:x,minor:_,patch:g,parts:[x,_,g],prerelease:p[7],number:x*1e8+_*1e4+g}},s.versionSatisfies=function(u,h){h=h||"*";var p=s.versionParse(h),x=s.versionParse(u);if(p.isRange){if(p.operator==="*"||u==="*")return!0;if(p.operator===">")return x.number>p.number;if(p.operator===">=")return x.number>=p.number;if(p.operator==="~")return x.major===p.major&&x.minor===p.minor&&x.patch>=p.patch;if(p.operator==="^")return p.major>0?x.major===p.major&&x.number>=p.number:p.minor>0?x.minor===p.minor&&x.patch>=p.patch:x.patch===p.patch}return u===h||u==="*"}})()}),(function(i,r){var l={};i.exports=l,(function(){l.create=function(s){return{vertex:s,normalImpulse:0,tangentImpulse:0}}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(7),u=l(18),h=l(13),p=l(19),x=l(5),_=l(6),g=l(10),d=l(0),S=l(4);(function(){s._deltaMax=1e3/60,s.create=function(M){M=M||{};var y={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},b=d.extend(y,M);return b.world=M.world||_.create({label:"World"}),b.pairs=M.pairs||p.create(),b.detector=M.detector||h.create(),b.detector.pairs=b.pairs,b.grid={buckets:[]},b.world.gravity=b.gravity,b.broadphase=b.grid,b.metrics={},b},s.update=function(M,y){var b=d.now(),D=M.world,U=M.detector,N=M.pairs,E=M.timing,T=E.timestamp,w;y>s._deltaMax&&d.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",s._deltaMax.toFixed(3),"ms."),y=typeof y<"u"?y:d._baseDelta,y*=E.timeScale,E.timestamp+=y,E.lastDelta=y;var L={timestamp:E.timestamp,delta:y};x.trigger(M,"beforeUpdate",L);var R=_.allBodies(D),A=_.allConstraints(D);for(D.isModified&&(h.setBodies(U,R),_.setModified(D,!1,!1,!0)),M.enableSleeping&&f.update(R,y),s._bodiesApplyGravity(R,M.gravity),y>0&&s._bodiesUpdate(R,y),x.trigger(M,"beforeSolve",L),g.preSolveAll(R),w=0;w<M.constraintIterations;w++)g.solveAll(A,y);g.postSolveAll(R);var O=h.collisions(U);p.update(N,O,T),M.enableSleeping&&f.afterCollisions(N.list),N.collisionStart.length>0&&x.trigger(M,"collisionStart",{pairs:N.collisionStart,timestamp:E.timestamp,delta:y});var P=d.clamp(20/M.positionIterations,0,1);for(u.preSolvePosition(N.list),w=0;w<M.positionIterations;w++)u.solvePosition(N.list,y,P);for(u.postSolvePosition(R),g.preSolveAll(R),w=0;w<M.constraintIterations;w++)g.solveAll(A,y);for(g.postSolveAll(R),u.preSolveVelocity(N.list),w=0;w<M.velocityIterations;w++)u.solveVelocity(N.list,y);return s._bodiesUpdateVelocities(R),N.collisionActive.length>0&&x.trigger(M,"collisionActive",{pairs:N.collisionActive,timestamp:E.timestamp,delta:y}),N.collisionEnd.length>0&&x.trigger(M,"collisionEnd",{pairs:N.collisionEnd,timestamp:E.timestamp,delta:y}),s._bodiesClearForces(R),x.trigger(M,"afterUpdate",L),M.timing.lastElapsed=d.now()-b,M},s.merge=function(M,y){if(d.extend(M,y),y.world){M.world=y.world,s.clear(M);for(var b=_.allBodies(M.world),D=0;D<b.length;D++){var U=b[D];f.set(U,!1),U.id=d.nextId()}}},s.clear=function(M){p.clear(M.pairs),h.clear(M.detector)},s._bodiesClearForces=function(M){for(var y=M.length,b=0;b<y;b++){var D=M[b];D.force.x=0,D.force.y=0,D.torque=0}},s._bodiesApplyGravity=function(M,y){var b=typeof y.scale<"u"?y.scale:.001,D=M.length;if(!(y.x===0&&y.y===0||b===0))for(var U=0;U<D;U++){var N=M[U];N.isStatic||N.isSleeping||(N.force.y+=N.mass*y.y*b,N.force.x+=N.mass*y.x*b)}},s._bodiesUpdate=function(M,y){for(var b=M.length,D=0;D<b;D++){var U=M[D];U.isStatic||U.isSleeping||S.update(U,y)}},s._bodiesUpdateVelocities=function(M){for(var y=M.length,b=0;b<y;b++)S.updateVelocities(M[b])}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(3),u=l(0),h=l(1);(function(){s._restingThresh=2,s._restingThreshTangent=Math.sqrt(6),s._positionDampen=.9,s._positionWarming=.8,s._frictionNormalMultiplier=5,s._frictionMaxStatic=Number.MAX_VALUE,s.preSolvePosition=function(p){var x,_,g,d=p.length;for(x=0;x<d;x++)_=p[x],_.isActive&&(g=_.contactCount,_.collision.parentA.totalContacts+=g,_.collision.parentB.totalContacts+=g)},s.solvePosition=function(p,x,_){var g,d,S,M,y,b,D,U,N=s._positionDampen*(_||1),E=u.clamp(x/u._baseDelta,0,1),T=p.length;for(g=0;g<T;g++)d=p[g],!(!d.isActive||d.isSensor)&&(S=d.collision,M=S.parentA,y=S.parentB,b=S.normal,d.separation=S.depth+b.x*(y.positionImpulse.x-M.positionImpulse.x)+b.y*(y.positionImpulse.y-M.positionImpulse.y));for(g=0;g<T;g++)d=p[g],!(!d.isActive||d.isSensor)&&(S=d.collision,M=S.parentA,y=S.parentB,b=S.normal,U=d.separation-d.slop*E,(M.isStatic||y.isStatic)&&(U*=2),M.isStatic||M.isSleeping||(D=N/M.totalContacts,M.positionImpulse.x+=b.x*U*D,M.positionImpulse.y+=b.y*U*D),y.isStatic||y.isSleeping||(D=N/y.totalContacts,y.positionImpulse.x-=b.x*U*D,y.positionImpulse.y-=b.y*U*D))},s.postSolvePosition=function(p){for(var x=s._positionWarming,_=p.length,g=f.translate,d=h.update,S=0;S<_;S++){var M=p[S],y=M.positionImpulse,b=y.x,D=y.y,U=M.velocity;if(M.totalContacts=0,b!==0||D!==0){for(var N=0;N<M.parts.length;N++){var E=M.parts[N];g(E.vertices,y),d(E.bounds,E.vertices,U),E.position.x+=b,E.position.y+=D}M.positionPrev.x+=b,M.positionPrev.y+=D,b*U.x+D*U.y<0?(y.x=0,y.y=0):(y.x*=x,y.y*=x)}}},s.preSolveVelocity=function(p){var x=p.length,_,g;for(_=0;_<x;_++){var d=p[_];if(!(!d.isActive||d.isSensor)){var S=d.contacts,M=d.contactCount,y=d.collision,b=y.parentA,D=y.parentB,U=y.normal,N=y.tangent;for(g=0;g<M;g++){var E=S[g],T=E.vertex,w=E.normalImpulse,L=E.tangentImpulse;if(w!==0||L!==0){var R=U.x*w+N.x*L,A=U.y*w+N.y*L;b.isStatic||b.isSleeping||(b.positionPrev.x+=R*b.inverseMass,b.positionPrev.y+=A*b.inverseMass,b.anglePrev+=b.inverseInertia*((T.x-b.position.x)*A-(T.y-b.position.y)*R)),D.isStatic||D.isSleeping||(D.positionPrev.x-=R*D.inverseMass,D.positionPrev.y-=A*D.inverseMass,D.anglePrev-=D.inverseInertia*((T.x-D.position.x)*A-(T.y-D.position.y)*R))}}}}},s.solveVelocity=function(p,x){var _=x/u._baseDelta,g=_*_,d=g*_,S=-s._restingThresh*_,M=s._restingThreshTangent,y=s._frictionNormalMultiplier*_,b=s._frictionMaxStatic,D=p.length,U,N,E,T;for(E=0;E<D;E++){var w=p[E];if(!(!w.isActive||w.isSensor)){var L=w.collision,R=L.parentA,A=L.parentB,O=L.normal.x,P=L.normal.y,H=L.tangent.x,W=L.tangent.y,X=w.inverseMass,I=w.friction*w.frictionStatic*y,k=w.contacts,Z=w.contactCount,it=1/Z,lt=R.position.x-R.positionPrev.x,V=R.position.y-R.positionPrev.y,tt=R.angle-R.anglePrev,ht=A.position.x-A.positionPrev.x,pt=A.position.y-A.positionPrev.y,bt=A.angle-A.anglePrev;for(T=0;T<Z;T++){var Q=k[T],nt=Q.vertex,yt=nt.x-R.position.x,Nt=nt.y-R.position.y,Ot=nt.x-A.position.x,Xt=nt.y-A.position.y,ce=lt-Nt*tt,Zt=V+yt*tt,ne=ht-Xt*bt,q=pt+Ot*bt,Vt=ce-ne,le=Zt-q,ge=O*Vt+P*le,Pt=H*Vt+W*le,Re=w.separation+ge,Wt=Math.min(Re,1);Wt=Re<0?0:Wt;var ae=Wt*I;Pt<-ae||Pt>ae?(N=Pt>0?Pt:-Pt,U=w.friction*(Pt>0?1:-1)*d,U<-N?U=-N:U>N&&(U=N)):(U=Pt,N=b);var G=yt*P-Nt*O,B=Ot*P-Xt*O,at=it/(X+R.inverseInertia*G*G+A.inverseInertia*B*B),gt=(1+w.restitution)*ge*at;if(U*=at,ge<S)Q.normalImpulse=0;else{var Mt=Q.normalImpulse;Q.normalImpulse+=gt,Q.normalImpulse>0&&(Q.normalImpulse=0),gt=Q.normalImpulse-Mt}if(Pt<-M||Pt>M)Q.tangentImpulse=0;else{var dt=Q.tangentImpulse;Q.tangentImpulse+=U,Q.tangentImpulse<-N&&(Q.tangentImpulse=-N),Q.tangentImpulse>N&&(Q.tangentImpulse=N),U=Q.tangentImpulse-dt}var qt=O*gt+H*U,Dt=P*gt+W*U;R.isStatic||R.isSleeping||(R.positionPrev.x+=qt*R.inverseMass,R.positionPrev.y+=Dt*R.inverseMass,R.anglePrev+=(yt*Dt-Nt*qt)*R.inverseInertia),A.isStatic||A.isSleeping||(A.positionPrev.x-=qt*A.inverseMass,A.positionPrev.y-=Dt*A.inverseMass,A.anglePrev-=(Ot*Dt-Xt*qt)*A.inverseInertia)}}}}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(9),u=l(0);(function(){s.create=function(h){return u.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},h)},s.update=function(h,p,x){var _=f.update,g=f.create,d=f.setActive,S=h.table,M=h.list,y=M.length,b=y,D=h.collisionStart,U=h.collisionEnd,N=h.collisionActive,E=p.length,T=0,w=0,L=0,R,A,O;for(O=0;O<E;O++)R=p[O],A=R.pair,A?(A.isActive&&(N[L++]=A),_(A,R,x)):(A=g(R,x),S[A.id]=A,D[T++]=A,M[b++]=A);for(b=0,y=M.length,O=0;O<y;O++)A=M[O],A.timeUpdated>=x?M[b++]=A:(d(A,!1,x),A.collision.bodyA.sleepCounter>0&&A.collision.bodyB.sleepCounter>0?M[b++]=A:(U[w++]=A,delete S[A.id]));M.length!==b&&(M.length=b),D.length!==T&&(D.length=T),U.length!==w&&(U.length=w),N.length!==L&&(N.length=L)},s.clear=function(h){return h.table={},h.list.length=0,h.collisionStart.length=0,h.collisionActive.length=0,h.collisionEnd.length=0,h}})()}),(function(i,r,l){var s=i.exports=l(21);s.Axes=l(11),s.Bodies=l(12),s.Body=l(4),s.Bounds=l(1),s.Collision=l(8),s.Common=l(0),s.Composite=l(6),s.Composites=l(22),s.Constraint=l(10),s.Contact=l(16),s.Detector=l(13),s.Engine=l(17),s.Events=l(5),s.Grid=l(23),s.Mouse=l(14),s.MouseConstraint=l(24),s.Pair=l(9),s.Pairs=l(19),s.Plugin=l(15),s.Query=l(25),s.Render=l(26),s.Resolver=l(18),s.Runner=l(27),s.SAT=l(28),s.Sleeping=l(7),s.Svg=l(29),s.Vector=l(2),s.Vertices=l(3),s.World=l(30),s.Engine.run=s.Runner.run,s.Common.deprecated(s.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")}),(function(i,r,l){var s={};i.exports=s;var f=l(15),u=l(0);(function(){s.name="matter-js",s.version="0.20.0",s.uses=[],s.used=[],s.use=function(){f.use(s,Array.prototype.slice.call(arguments))},s.before=function(h,p){return h=h.replace(/^Matter./,""),u.chainPathBefore(s,h,p)},s.after=function(h,p){return h=h.replace(/^Matter./,""),u.chainPathAfter(s,h,p)}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(6),u=l(10),h=l(0),p=l(4),x=l(12),_=h.deprecated;(function(){s.stack=function(g,d,S,M,y,b,D){for(var U=f.create({label:"Stack"}),N=g,E=d,T,w=0,L=0;L<M;L++){for(var R=0,A=0;A<S;A++){var O=D(N,E,A,L,T,w);if(O){var P=O.bounds.max.y-O.bounds.min.y,H=O.bounds.max.x-O.bounds.min.x;P>R&&(R=P),p.translate(O,{x:H*.5,y:P*.5}),N=O.bounds.max.x+y,f.addBody(U,O),T=O,w+=1}else N+=y}E+=R+b,N=g}return U},s.chain=function(g,d,S,M,y,b){for(var D=g.bodies,U=1;U<D.length;U++){var N=D[U-1],E=D[U],T=N.bounds.max.y-N.bounds.min.y,w=N.bounds.max.x-N.bounds.min.x,L=E.bounds.max.y-E.bounds.min.y,R=E.bounds.max.x-E.bounds.min.x,A={bodyA:N,pointA:{x:w*d,y:T*S},bodyB:E,pointB:{x:R*M,y:L*y}},O=h.extend(A,b);f.addConstraint(g,u.create(O))}return g.label+=" Chain",g},s.mesh=function(g,d,S,M,y){var b=g.bodies,D,U,N,E,T;for(D=0;D<S;D++){for(U=1;U<d;U++)N=b[U-1+D*d],E=b[U+D*d],f.addConstraint(g,u.create(h.extend({bodyA:N,bodyB:E},y)));if(D>0)for(U=0;U<d;U++)N=b[U+(D-1)*d],E=b[U+D*d],f.addConstraint(g,u.create(h.extend({bodyA:N,bodyB:E},y))),M&&U>0&&(T=b[U-1+(D-1)*d],f.addConstraint(g,u.create(h.extend({bodyA:T,bodyB:E},y)))),M&&U<d-1&&(T=b[U+1+(D-1)*d],f.addConstraint(g,u.create(h.extend({bodyA:T,bodyB:E},y))))}return g.label+=" Mesh",g},s.pyramid=function(g,d,S,M,y,b,D){return s.stack(g,d,S,M,y,b,function(U,N,E,T,w,L){var R=Math.min(M,Math.ceil(S/2)),A=w?w.bounds.max.x-w.bounds.min.x:0;if(!(T>R)){T=R-T;var O=T,P=S-1-T;if(!(E<O||E>P)){L===1&&p.translate(w,{x:(E+(S%2===1?1:-1))*A,y:0});var H=w?E*A:0;return D(g+H+E*y,N,E,T,w,L)}}})},s.newtonsCradle=function(g,d,S,M,y){for(var b=f.create({label:"Newtons Cradle"}),D=0;D<S;D++){var U=1.9,N=x.circle(g+D*(M*U),d+y,M,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),E=u.create({pointA:{x:g+D*(M*U),y:d},bodyB:N});f.addBody(b,N),f.addConstraint(b,E)}return b},_(s,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),s.car=function(g,d,S,M,y){var b=p.nextGroup(!0),D=20,U=-S*.5+D,N=S*.5-D,E=0,T=f.create({label:"Car"}),w=x.rectangle(g,d,S,M,{collisionFilter:{group:b},chamfer:{radius:M*.5},density:2e-4}),L=x.circle(g+U,d+E,y,{collisionFilter:{group:b},friction:.8}),R=x.circle(g+N,d+E,y,{collisionFilter:{group:b},friction:.8}),A=u.create({bodyB:w,pointB:{x:U,y:E},bodyA:L,stiffness:1,length:0}),O=u.create({bodyB:w,pointB:{x:N,y:E},bodyA:R,stiffness:1,length:0});return f.addBody(T,w),f.addBody(T,L),f.addBody(T,R),f.addConstraint(T,A),f.addConstraint(T,O),T},_(s,"car","Composites.car ➤ moved to car example"),s.softBody=function(g,d,S,M,y,b,D,U,N,E){N=h.extend({inertia:1/0},N),E=h.extend({stiffness:.2,render:{type:"line",anchors:!1}},E);var T=s.stack(g,d,S,M,y,b,function(w,L){return x.circle(w,L,U,N)});return s.mesh(T,S,M,D,E),T.label="Soft Body",T},_(s,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()}),(function(i,r,l){var s={};i.exports=s;var f=l(9),u=l(0),h=u.deprecated;(function(){s.create=function(p){var x={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return u.extend(x,p)},s.update=function(p,x,_,g){var d,S,M,y=_.world,b=p.buckets,D,U,N=!1;for(d=0;d<x.length;d++){var E=x[d];if(!(E.isSleeping&&!g)&&!(y.bounds&&(E.bounds.max.x<y.bounds.min.x||E.bounds.min.x>y.bounds.max.x||E.bounds.max.y<y.bounds.min.y||E.bounds.min.y>y.bounds.max.y))){var T=s._getRegion(p,E);if(!E.region||T.id!==E.region.id||g){(!E.region||g)&&(E.region=T);var w=s._regionUnion(T,E.region);for(S=w.startCol;S<=w.endCol;S++)for(M=w.startRow;M<=w.endRow;M++){U=s._getBucketId(S,M),D=b[U];var L=S>=T.startCol&&S<=T.endCol&&M>=T.startRow&&M<=T.endRow,R=S>=E.region.startCol&&S<=E.region.endCol&&M>=E.region.startRow&&M<=E.region.endRow;!L&&R&&R&&D&&s._bucketRemoveBody(p,D,E),(E.region===T||L&&!R||g)&&(D||(D=s._createBucket(b,U)),s._bucketAddBody(p,D,E))}E.region=T,N=!0}}}N&&(p.pairsList=s._createActivePairsList(p))},h(s,"update","Grid.update ➤ replaced by Matter.Detector"),s.clear=function(p){p.buckets={},p.pairs={},p.pairsList=[]},h(s,"clear","Grid.clear ➤ replaced by Matter.Detector"),s._regionUnion=function(p,x){var _=Math.min(p.startCol,x.startCol),g=Math.max(p.endCol,x.endCol),d=Math.min(p.startRow,x.startRow),S=Math.max(p.endRow,x.endRow);return s._createRegion(_,g,d,S)},s._getRegion=function(p,x){var _=x.bounds,g=Math.floor(_.min.x/p.bucketWidth),d=Math.floor(_.max.x/p.bucketWidth),S=Math.floor(_.min.y/p.bucketHeight),M=Math.floor(_.max.y/p.bucketHeight);return s._createRegion(g,d,S,M)},s._createRegion=function(p,x,_,g){return{id:p+","+x+","+_+","+g,startCol:p,endCol:x,startRow:_,endRow:g}},s._getBucketId=function(p,x){return"C"+p+"R"+x},s._createBucket=function(p,x){var _=p[x]=[];return _},s._bucketAddBody=function(p,x,_){var g=p.pairs,d=f.id,S=x.length,M;for(M=0;M<S;M++){var y=x[M];if(!(_.id===y.id||_.isStatic&&y.isStatic)){var b=d(_,y),D=g[b];D?D[2]+=1:g[b]=[_,y,1]}}x.push(_)},s._bucketRemoveBody=function(p,x,_){var g=p.pairs,d=f.id,S;x.splice(u.indexOf(x,_),1);var M=x.length;for(S=0;S<M;S++){var y=g[d(_,x[S])];y&&(y[2]-=1)}},s._createActivePairsList=function(p){var x,_=p.pairs,g=u.keys(_),d=g.length,S=[],M;for(M=0;M<d;M++)x=_[g[M]],x[2]>0?S.push(x):delete _[g[M]];return S}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(3),u=l(7),h=l(14),p=l(5),x=l(13),_=l(10),g=l(6),d=l(0),S=l(1);(function(){s.create=function(M,y){var b=(M?M.mouse:null)||(y?y.mouse:null);b||(M&&M.render&&M.render.canvas?b=h.create(M.render.canvas):y&&y.element?b=h.create(y.element):(b=h.create(),d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var D=_.create({label:"Mouse Constraint",pointA:b.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),U={type:"mouseConstraint",mouse:b,element:null,body:null,constraint:D,collisionFilter:{category:1,mask:4294967295,group:0}},N=d.extend(U,y);return p.on(M,"beforeUpdate",function(){var E=g.allBodies(M.world);s.update(N,E),s._triggerEvents(N)}),N},s.update=function(M,y){var b=M.mouse,D=M.constraint,U=M.body;if(b.button===0){if(D.bodyB)u.set(D.bodyB,!1),D.pointA=b.position;else for(var N=0;N<y.length;N++)if(U=y[N],S.contains(U.bounds,b.position)&&x.canCollide(U.collisionFilter,M.collisionFilter))for(var E=U.parts.length>1?1:0;E<U.parts.length;E++){var T=U.parts[E];if(f.contains(T.vertices,b.position)){D.pointA=b.position,D.bodyB=M.body=U,D.pointB={x:b.position.x-U.position.x,y:b.position.y-U.position.y},D.angleB=U.angle,u.set(U,!1),p.trigger(M,"startdrag",{mouse:b,body:U});break}}}else D.bodyB=M.body=null,D.pointB=null,U&&p.trigger(M,"enddrag",{mouse:b,body:U})},s._triggerEvents=function(M){var y=M.mouse,b=y.sourceEvents;b.mousemove&&p.trigger(M,"mousemove",{mouse:y}),b.mousedown&&p.trigger(M,"mousedown",{mouse:y}),b.mouseup&&p.trigger(M,"mouseup",{mouse:y}),h.clearSourceEvents(y)}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(2),u=l(8),h=l(1),p=l(12),x=l(3);(function(){s.collides=function(_,g){for(var d=[],S=g.length,M=_.bounds,y=u.collides,b=h.overlaps,D=0;D<S;D++){var U=g[D],N=U.parts.length,E=N===1?0:1;if(b(U.bounds,M))for(var T=E;T<N;T++){var w=U.parts[T];if(b(w.bounds,M)){var L=y(w,_);if(L){d.push(L);break}}}}return d},s.ray=function(_,g,d,S){S=S||1e-100;for(var M=f.angle(g,d),y=f.magnitude(f.sub(g,d)),b=(d.x+g.x)*.5,D=(d.y+g.y)*.5,U=p.rectangle(b,D,y,S,{angle:M}),N=s.collides(U,_),E=0;E<N.length;E+=1){var T=N[E];T.body=T.bodyB=T.bodyA}return N},s.region=function(_,g,d){for(var S=[],M=0;M<_.length;M++){var y=_[M],b=h.overlaps(y.bounds,g);(b&&!d||!b&&d)&&S.push(y)}return S},s.point=function(_,g){for(var d=[],S=0;S<_.length;S++){var M=_[S];if(h.contains(M.bounds,g))for(var y=M.parts.length===1?0:1;y<M.parts.length;y++){var b=M.parts[y];if(h.contains(b.bounds,g)&&x.contains(b.vertices,g)){d.push(M);break}}}return d}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(4),u=l(0),h=l(6),p=l(1),x=l(5),_=l(2),g=l(14);(function(){var d,S;typeof window<"u"&&(d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(E){window.setTimeout(function(){E(u.now())},1e3/60)},S=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),s._goodFps=30,s._goodDelta=1e3/60,s.create=function(E){var T={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!E.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},w=u.extend(T,E);return w.canvas&&(w.canvas.width=w.options.width||w.canvas.width,w.canvas.height=w.options.height||w.canvas.height),w.mouse=E.mouse,w.engine=E.engine,w.canvas=w.canvas||b(w.options.width,w.options.height),w.context=w.canvas.getContext("2d"),w.textures={},w.bounds=w.bounds||{min:{x:0,y:0},max:{x:w.canvas.width,y:w.canvas.height}},w.controller=s,w.options.showBroadphase=!1,w.options.pixelRatio!==1&&s.setPixelRatio(w,w.options.pixelRatio),u.isElement(w.element)&&w.element.appendChild(w.canvas),w},s.run=function(E){(function T(w){E.frameRequestId=d(T),M(E,w),s.world(E,w),E.context.setTransform(E.options.pixelRatio,0,0,E.options.pixelRatio,0,0),(E.options.showStats||E.options.showDebug)&&s.stats(E,E.context,w),(E.options.showPerformance||E.options.showDebug)&&s.performance(E,E.context,w),E.context.setTransform(1,0,0,1,0,0)})()},s.stop=function(E){S(E.frameRequestId)},s.setPixelRatio=function(E,T){var w=E.options,L=E.canvas;T==="auto"&&(T=D(L)),w.pixelRatio=T,L.setAttribute("data-pixel-ratio",T),L.width=w.width*T,L.height=w.height*T,L.style.width=w.width+"px",L.style.height=w.height+"px"},s.setSize=function(E,T,w){E.options.width=T,E.options.height=w,E.bounds.max.x=E.bounds.min.x+T,E.bounds.max.y=E.bounds.min.y+w,E.options.pixelRatio!==1?s.setPixelRatio(E,E.options.pixelRatio):(E.canvas.width=T,E.canvas.height=w)},s.lookAt=function(E,T,w,L){L=typeof L<"u"?L:!0,T=u.isArray(T)?T:[T],w=w||{x:0,y:0};for(var R={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},A=0;A<T.length;A+=1){var O=T[A],P=O.bounds?O.bounds.min:O.min||O.position||O,H=O.bounds?O.bounds.max:O.max||O.position||O;P&&H&&(P.x<R.min.x&&(R.min.x=P.x),H.x>R.max.x&&(R.max.x=H.x),P.y<R.min.y&&(R.min.y=P.y),H.y>R.max.y&&(R.max.y=H.y))}var W=R.max.x-R.min.x+2*w.x,X=R.max.y-R.min.y+2*w.y,I=E.canvas.height,k=E.canvas.width,Z=k/I,it=W/X,lt=1,V=1;it>Z?V=it/Z:lt=Z/it,E.options.hasBounds=!0,E.bounds.min.x=R.min.x,E.bounds.max.x=R.min.x+W*lt,E.bounds.min.y=R.min.y,E.bounds.max.y=R.min.y+X*V,L&&(E.bounds.min.x+=W*.5-W*lt*.5,E.bounds.max.x+=W*.5-W*lt*.5,E.bounds.min.y+=X*.5-X*V*.5,E.bounds.max.y+=X*.5-X*V*.5),E.bounds.min.x-=w.x,E.bounds.max.x-=w.x,E.bounds.min.y-=w.y,E.bounds.max.y-=w.y,E.mouse&&(g.setScale(E.mouse,{x:(E.bounds.max.x-E.bounds.min.x)/E.canvas.width,y:(E.bounds.max.y-E.bounds.min.y)/E.canvas.height}),g.setOffset(E.mouse,E.bounds.min))},s.startViewTransform=function(E){var T=E.bounds.max.x-E.bounds.min.x,w=E.bounds.max.y-E.bounds.min.y,L=T/E.options.width,R=w/E.options.height;E.context.setTransform(E.options.pixelRatio/L,0,0,E.options.pixelRatio/R,0,0),E.context.translate(-E.bounds.min.x,-E.bounds.min.y)},s.endViewTransform=function(E){E.context.setTransform(E.options.pixelRatio,0,0,E.options.pixelRatio,0,0)},s.world=function(E,T){var w=u.now(),L=E.engine,R=L.world,A=E.canvas,O=E.context,P=E.options,H=E.timing,W=h.allBodies(R),X=h.allConstraints(R),I=P.wireframes?P.wireframeBackground:P.background,k=[],Z=[],it,lt={timestamp:L.timing.timestamp};if(x.trigger(E,"beforeRender",lt),E.currentBackground!==I&&N(E,I),O.globalCompositeOperation="source-in",O.fillStyle="transparent",O.fillRect(0,0,A.width,A.height),O.globalCompositeOperation="source-over",P.hasBounds){for(it=0;it<W.length;it++){var V=W[it];p.overlaps(V.bounds,E.bounds)&&k.push(V)}for(it=0;it<X.length;it++){var tt=X[it],ht=tt.bodyA,pt=tt.bodyB,bt=tt.pointA,Q=tt.pointB;ht&&(bt=_.add(ht.position,tt.pointA)),pt&&(Q=_.add(pt.position,tt.pointB)),!(!bt||!Q)&&(p.contains(E.bounds,bt)||p.contains(E.bounds,Q))&&Z.push(tt)}s.startViewTransform(E),E.mouse&&(g.setScale(E.mouse,{x:(E.bounds.max.x-E.bounds.min.x)/E.options.width,y:(E.bounds.max.y-E.bounds.min.y)/E.options.height}),g.setOffset(E.mouse,E.bounds.min))}else Z=X,k=W,E.options.pixelRatio!==1&&E.context.setTransform(E.options.pixelRatio,0,0,E.options.pixelRatio,0,0);!P.wireframes||L.enableSleeping&&P.showSleeping?s.bodies(E,k,O):(P.showConvexHulls&&s.bodyConvexHulls(E,k,O),s.bodyWireframes(E,k,O)),P.showBounds&&s.bodyBounds(E,k,O),(P.showAxes||P.showAngleIndicator)&&s.bodyAxes(E,k,O),P.showPositions&&s.bodyPositions(E,k,O),P.showVelocity&&s.bodyVelocity(E,k,O),P.showIds&&s.bodyIds(E,k,O),P.showSeparations&&s.separations(E,L.pairs.list,O),P.showCollisions&&s.collisions(E,L.pairs.list,O),P.showVertexNumbers&&s.vertexNumbers(E,k,O),P.showMousePosition&&s.mousePosition(E,E.mouse,O),s.constraints(Z,O),P.hasBounds&&s.endViewTransform(E),x.trigger(E,"afterRender",lt),H.lastElapsed=u.now()-w},s.stats=function(E,T,w){for(var L=E.engine,R=L.world,A=h.allBodies(R),O=0,P=55,H=44,W=0,X=0,I=0;I<A.length;I+=1)O+=A[I].parts.length;var k={Part:O,Body:A.length,Cons:h.allConstraints(R).length,Comp:h.allComposites(R).length,Pair:L.pairs.list.length};T.fillStyle="#0e0f19",T.fillRect(W,X,P*5.5,H),T.font="12px Arial",T.textBaseline="top",T.textAlign="right";for(var Z in k){var it=k[Z];T.fillStyle="#aaa",T.fillText(Z,W+P,X+8),T.fillStyle="#eee",T.fillText(it,W+P,X+26),W+=P}},s.performance=function(E,T){var w=E.engine,L=E.timing,R=L.deltaHistory,A=L.elapsedHistory,O=L.timestampElapsedHistory,P=L.engineDeltaHistory,H=L.engineUpdatesHistory,W=L.engineElapsedHistory,X=w.timing.lastUpdatesPerFrame,I=w.timing.lastDelta,k=y(R),Z=y(A),it=y(P),lt=y(H),V=y(W),tt=y(O),ht=tt/k||0,pt=Math.round(k/I),bt=1e3/k||0,Q=4,nt=12,yt=60,Nt=34,Ot=10,Xt=69;T.fillStyle="#0e0f19",T.fillRect(0,50,nt*5+yt*6+22,Nt),s.status(T,Ot,Xt,yt,Q,R.length,Math.round(bt)+" fps",bt/s._goodFps,function(ce){return R[ce]/k-1}),s.status(T,Ot+nt+yt,Xt,yt,Q,P.length,I.toFixed(2)+" dt",s._goodDelta/I,function(ce){return P[ce]/it-1}),s.status(T,Ot+(nt+yt)*2,Xt,yt,Q,H.length,X+" upf",Math.pow(u.clamp(lt/pt||1,0,1),4),function(ce){return H[ce]/lt-1}),s.status(T,Ot+(nt+yt)*3,Xt,yt,Q,W.length,V.toFixed(2)+" ut",1-X*V/s._goodFps,function(ce){return W[ce]/V-1}),s.status(T,Ot+(nt+yt)*4,Xt,yt,Q,A.length,Z.toFixed(2)+" rt",1-Z/s._goodFps,function(ce){return A[ce]/Z-1}),s.status(T,Ot+(nt+yt)*5,Xt,yt,Q,O.length,ht.toFixed(2)+" x",ht*ht*ht,function(ce){return(O[ce]/R[ce]/ht||0)-1})},s.status=function(E,T,w,L,R,A,O,P,H){E.strokeStyle="#888",E.fillStyle="#444",E.lineWidth=1,E.fillRect(T,w+7,L,1),E.beginPath(),E.moveTo(T,w+7-R*u.clamp(.4*H(0),-2,2));for(var W=0;W<L;W+=1)E.lineTo(T+W,w+7-(W<A?R*u.clamp(.4*H(W),-2,2):0));E.stroke(),E.fillStyle="hsl("+u.clamp(25+95*P,0,120)+",100%,60%)",E.fillRect(T,w-7,4,4),E.font="12px Arial",E.textBaseline="middle",E.textAlign="right",E.fillStyle="#eee",E.fillText(O,T+L,w-5)},s.constraints=function(E,T){for(var w=T,L=0;L<E.length;L++){var R=E[L];if(!(!R.render.visible||!R.pointA||!R.pointB)){var A=R.bodyA,O=R.bodyB,P,H;if(A?P=_.add(A.position,R.pointA):P=R.pointA,R.render.type==="pin")w.beginPath(),w.arc(P.x,P.y,3,0,2*Math.PI),w.closePath();else{if(O?H=_.add(O.position,R.pointB):H=R.pointB,w.beginPath(),w.moveTo(P.x,P.y),R.render.type==="spring")for(var W=_.sub(H,P),X=_.perp(_.normalise(W)),I=Math.ceil(u.clamp(R.length/5,12,20)),k,Z=1;Z<I;Z+=1)k=Z%2===0?1:-1,w.lineTo(P.x+W.x*(Z/I)+X.x*k*4,P.y+W.y*(Z/I)+X.y*k*4);w.lineTo(H.x,H.y)}R.render.lineWidth&&(w.lineWidth=R.render.lineWidth,w.strokeStyle=R.render.strokeStyle,w.stroke()),R.render.anchors&&(w.fillStyle=R.render.strokeStyle,w.beginPath(),w.arc(P.x,P.y,3,0,2*Math.PI),w.arc(H.x,H.y,3,0,2*Math.PI),w.closePath(),w.fill())}}},s.bodies=function(E,T,w){var L=w;E.engine;var R=E.options,A=R.showInternalEdges||!R.wireframes,O,P,H,W;for(H=0;H<T.length;H++)if(O=T[H],!!O.render.visible){for(W=O.parts.length>1?1:0;W<O.parts.length;W++)if(P=O.parts[W],!!P.render.visible){if(R.showSleeping&&O.isSleeping?L.globalAlpha=.5*P.render.opacity:P.render.opacity!==1&&(L.globalAlpha=P.render.opacity),P.render.sprite&&P.render.sprite.texture&&!R.wireframes){var X=P.render.sprite,I=U(E,X.texture);L.translate(P.position.x,P.position.y),L.rotate(P.angle),L.drawImage(I,I.width*-X.xOffset*X.xScale,I.height*-X.yOffset*X.yScale,I.width*X.xScale,I.height*X.yScale),L.rotate(-P.angle),L.translate(-P.position.x,-P.position.y)}else{if(P.circleRadius)L.beginPath(),L.arc(P.position.x,P.position.y,P.circleRadius,0,2*Math.PI);else{L.beginPath(),L.moveTo(P.vertices[0].x,P.vertices[0].y);for(var k=1;k<P.vertices.length;k++)!P.vertices[k-1].isInternal||A?L.lineTo(P.vertices[k].x,P.vertices[k].y):L.moveTo(P.vertices[k].x,P.vertices[k].y),P.vertices[k].isInternal&&!A&&L.moveTo(P.vertices[(k+1)%P.vertices.length].x,P.vertices[(k+1)%P.vertices.length].y);L.lineTo(P.vertices[0].x,P.vertices[0].y),L.closePath()}R.wireframes?(L.lineWidth=1,L.strokeStyle=E.options.wireframeStrokeStyle,L.stroke()):(L.fillStyle=P.render.fillStyle,P.render.lineWidth&&(L.lineWidth=P.render.lineWidth,L.strokeStyle=P.render.strokeStyle,L.stroke()),L.fill())}L.globalAlpha=1}}},s.bodyWireframes=function(E,T,w){var L=w,R=E.options.showInternalEdges,A,O,P,H,W;for(L.beginPath(),P=0;P<T.length;P++)if(A=T[P],!!A.render.visible)for(W=A.parts.length>1?1:0;W<A.parts.length;W++){for(O=A.parts[W],L.moveTo(O.vertices[0].x,O.vertices[0].y),H=1;H<O.vertices.length;H++)!O.vertices[H-1].isInternal||R?L.lineTo(O.vertices[H].x,O.vertices[H].y):L.moveTo(O.vertices[H].x,O.vertices[H].y),O.vertices[H].isInternal&&!R&&L.moveTo(O.vertices[(H+1)%O.vertices.length].x,O.vertices[(H+1)%O.vertices.length].y);L.lineTo(O.vertices[0].x,O.vertices[0].y)}L.lineWidth=1,L.strokeStyle=E.options.wireframeStrokeStyle,L.stroke()},s.bodyConvexHulls=function(E,T,w){var L=w,R,A,O;for(L.beginPath(),A=0;A<T.length;A++)if(R=T[A],!(!R.render.visible||R.parts.length===1)){for(L.moveTo(R.vertices[0].x,R.vertices[0].y),O=1;O<R.vertices.length;O++)L.lineTo(R.vertices[O].x,R.vertices[O].y);L.lineTo(R.vertices[0].x,R.vertices[0].y)}L.lineWidth=1,L.strokeStyle="rgba(255,255,255,0.2)",L.stroke()},s.vertexNumbers=function(E,T,w){var L=w,R,A,O;for(R=0;R<T.length;R++){var P=T[R].parts;for(O=P.length>1?1:0;O<P.length;O++){var H=P[O];for(A=0;A<H.vertices.length;A++)L.fillStyle="rgba(255,255,255,0.2)",L.fillText(R+"_"+A,H.position.x+(H.vertices[A].x-H.position.x)*.8,H.position.y+(H.vertices[A].y-H.position.y)*.8)}}},s.mousePosition=function(E,T,w){var L=w;L.fillStyle="rgba(255,255,255,0.8)",L.fillText(T.position.x+"  "+T.position.y,T.position.x+5,T.position.y-5)},s.bodyBounds=function(E,T,w){var L=w;E.engine;var R=E.options;L.beginPath();for(var A=0;A<T.length;A++){var O=T[A];if(O.render.visible)for(var P=T[A].parts,H=P.length>1?1:0;H<P.length;H++){var W=P[H];L.rect(W.bounds.min.x,W.bounds.min.y,W.bounds.max.x-W.bounds.min.x,W.bounds.max.y-W.bounds.min.y)}}R.wireframes?L.strokeStyle="rgba(255,255,255,0.08)":L.strokeStyle="rgba(0,0,0,0.1)",L.lineWidth=1,L.stroke()},s.bodyAxes=function(E,T,w){var L=w;E.engine;var R=E.options,A,O,P,H;for(L.beginPath(),O=0;O<T.length;O++){var W=T[O],X=W.parts;if(W.render.visible)if(R.showAxes)for(P=X.length>1?1:0;P<X.length;P++)for(A=X[P],H=0;H<A.axes.length;H++){var I=A.axes[H];L.moveTo(A.position.x,A.position.y),L.lineTo(A.position.x+I.x*20,A.position.y+I.y*20)}else for(P=X.length>1?1:0;P<X.length;P++)for(A=X[P],H=0;H<A.axes.length;H++)L.moveTo(A.position.x,A.position.y),L.lineTo((A.vertices[0].x+A.vertices[A.vertices.length-1].x)/2,(A.vertices[0].y+A.vertices[A.vertices.length-1].y)/2)}R.wireframes?(L.strokeStyle="indianred",L.lineWidth=1):(L.strokeStyle="rgba(255, 255, 255, 0.4)",L.globalCompositeOperation="overlay",L.lineWidth=2),L.stroke(),L.globalCompositeOperation="source-over"},s.bodyPositions=function(E,T,w){var L=w;E.engine;var R=E.options,A,O,P,H;for(L.beginPath(),P=0;P<T.length;P++)if(A=T[P],!!A.render.visible)for(H=0;H<A.parts.length;H++)O=A.parts[H],L.arc(O.position.x,O.position.y,3,0,2*Math.PI,!1),L.closePath();for(R.wireframes?L.fillStyle="indianred":L.fillStyle="rgba(0,0,0,0.5)",L.fill(),L.beginPath(),P=0;P<T.length;P++)A=T[P],A.render.visible&&(L.arc(A.positionPrev.x,A.positionPrev.y,2,0,2*Math.PI,!1),L.closePath());L.fillStyle="rgba(255,165,0,0.8)",L.fill()},s.bodyVelocity=function(E,T,w){var L=w;L.beginPath();for(var R=0;R<T.length;R++){var A=T[R];if(A.render.visible){var O=f.getVelocity(A);L.moveTo(A.position.x,A.position.y),L.lineTo(A.position.x+O.x,A.position.y+O.y)}}L.lineWidth=3,L.strokeStyle="cornflowerblue",L.stroke()},s.bodyIds=function(E,T,w){var L=w,R,A;for(R=0;R<T.length;R++)if(T[R].render.visible){var O=T[R].parts;for(A=O.length>1?1:0;A<O.length;A++){var P=O[A];L.font="12px Arial",L.fillStyle="rgba(255,255,255,0.5)",L.fillText(P.id,P.position.x+10,P.position.y-10)}}},s.collisions=function(E,T,w){var L=w,R=E.options,A,O,P,H;for(L.beginPath(),P=0;P<T.length;P++)if(A=T[P],!!A.isActive)for(O=A.collision,H=0;H<A.contactCount;H++){var W=A.contacts[H],X=W.vertex;L.rect(X.x-1.5,X.y-1.5,3.5,3.5)}for(R.wireframes?L.fillStyle="rgba(255,255,255,0.7)":L.fillStyle="orange",L.fill(),L.beginPath(),P=0;P<T.length;P++)if(A=T[P],!!A.isActive&&(O=A.collision,A.contactCount>0)){var I=A.contacts[0].vertex.x,k=A.contacts[0].vertex.y;A.contactCount===2&&(I=(A.contacts[0].vertex.x+A.contacts[1].vertex.x)/2,k=(A.contacts[0].vertex.y+A.contacts[1].vertex.y)/2),O.bodyB===O.supports[0].body||O.bodyA.isStatic===!0?L.moveTo(I-O.normal.x*8,k-O.normal.y*8):L.moveTo(I+O.normal.x*8,k+O.normal.y*8),L.lineTo(I,k)}R.wireframes?L.strokeStyle="rgba(255,165,0,0.7)":L.strokeStyle="orange",L.lineWidth=1,L.stroke()},s.separations=function(E,T,w){var L=w,R=E.options,A,O,P,H,W;for(L.beginPath(),W=0;W<T.length;W++)if(A=T[W],!!A.isActive){O=A.collision,P=O.bodyA,H=O.bodyB;var X=1;!H.isStatic&&!P.isStatic&&(X=.5),H.isStatic&&(X=0),L.moveTo(H.position.x,H.position.y),L.lineTo(H.position.x-O.penetration.x*X,H.position.y-O.penetration.y*X),X=1,!H.isStatic&&!P.isStatic&&(X=.5),P.isStatic&&(X=0),L.moveTo(P.position.x,P.position.y),L.lineTo(P.position.x+O.penetration.x*X,P.position.y+O.penetration.y*X)}R.wireframes?L.strokeStyle="rgba(255,165,0,0.5)":L.strokeStyle="orange",L.stroke()},s.inspector=function(E,T){E.engine;var w=E.selected,L=E.render,R=L.options,A;if(R.hasBounds){var O=L.bounds.max.x-L.bounds.min.x,P=L.bounds.max.y-L.bounds.min.y,H=O/L.options.width,W=P/L.options.height;T.scale(1/H,1/W),T.translate(-L.bounds.min.x,-L.bounds.min.y)}for(var X=0;X<w.length;X++){var I=w[X].data;switch(T.translate(.5,.5),T.lineWidth=1,T.strokeStyle="rgba(255,165,0,0.9)",T.setLineDash([1,2]),I.type){case"body":A=I.bounds,T.beginPath(),T.rect(Math.floor(A.min.x-3),Math.floor(A.min.y-3),Math.floor(A.max.x-A.min.x+6),Math.floor(A.max.y-A.min.y+6)),T.closePath(),T.stroke();break;case"constraint":var k=I.pointA;I.bodyA&&(k=I.pointB),T.beginPath(),T.arc(k.x,k.y,10,0,2*Math.PI),T.closePath(),T.stroke();break}T.setLineDash([]),T.translate(-.5,-.5)}E.selectStart!==null&&(T.translate(.5,.5),T.lineWidth=1,T.strokeStyle="rgba(255,165,0,0.6)",T.fillStyle="rgba(255,165,0,0.1)",A=E.selectBounds,T.beginPath(),T.rect(Math.floor(A.min.x),Math.floor(A.min.y),Math.floor(A.max.x-A.min.x),Math.floor(A.max.y-A.min.y)),T.closePath(),T.stroke(),T.fill(),T.translate(-.5,-.5)),R.hasBounds&&T.setTransform(1,0,0,1,0,0)};var M=function(E,T){var w=E.engine,L=E.timing,R=L.historySize,A=w.timing.timestamp;L.delta=T-L.lastTime||s._goodDelta,L.lastTime=T,L.timestampElapsed=A-L.lastTimestamp||0,L.lastTimestamp=A,L.deltaHistory.unshift(L.delta),L.deltaHistory.length=Math.min(L.deltaHistory.length,R),L.engineDeltaHistory.unshift(w.timing.lastDelta),L.engineDeltaHistory.length=Math.min(L.engineDeltaHistory.length,R),L.timestampElapsedHistory.unshift(L.timestampElapsed),L.timestampElapsedHistory.length=Math.min(L.timestampElapsedHistory.length,R),L.engineUpdatesHistory.unshift(w.timing.lastUpdatesPerFrame),L.engineUpdatesHistory.length=Math.min(L.engineUpdatesHistory.length,R),L.engineElapsedHistory.unshift(w.timing.lastElapsed),L.engineElapsedHistory.length=Math.min(L.engineElapsedHistory.length,R),L.elapsedHistory.unshift(L.lastElapsed),L.elapsedHistory.length=Math.min(L.elapsedHistory.length,R)},y=function(E){for(var T=0,w=0;w<E.length;w+=1)T+=E[w];return T/E.length||0},b=function(E,T){var w=document.createElement("canvas");return w.width=E,w.height=T,w.oncontextmenu=function(){return!1},w.onselectstart=function(){return!1},w},D=function(E){var T=E.getContext("2d"),w=window.devicePixelRatio||1,L=T.webkitBackingStorePixelRatio||T.mozBackingStorePixelRatio||T.msBackingStorePixelRatio||T.oBackingStorePixelRatio||T.backingStorePixelRatio||1;return w/L},U=function(E,T){var w=E.textures[T];return w||(w=E.textures[T]=new Image,w.src=T,w)},N=function(E,T){var w=T;/(jpg|gif|png)$/.test(T)&&(w="url("+T+")"),E.canvas.style.background=w,E.canvas.style.backgroundSize="contain",E.currentBackground=T}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(5),u=l(17),h=l(0);(function(){s._maxFrameDelta=1e3/15,s._frameDeltaFallback=1e3/60,s._timeBufferMargin=1.5,s._elapsedNextEstimate=1,s._smoothingLowerBound=.1,s._smoothingUpperBound=.9,s.create=function(x){var _={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},g=h.extend(_,x);return g.fps=0,g},s.run=function(x,_){return x.timeBuffer=s._frameDeltaFallback,(function g(d){x.frameRequestId=s._onNextFrame(x,g),d&&x.enabled&&s.tick(x,_,d)})(),x},s.tick=function(x,_,g){var d=h.now(),S=x.delta,M=0,y=g-x.timeLastTick;if((!y||!x.timeLastTick||y>Math.max(s._maxFrameDelta,x.maxFrameTime))&&(y=x.frameDelta||s._frameDeltaFallback),x.frameDeltaSmoothing){x.frameDeltaHistory.push(y),x.frameDeltaHistory=x.frameDeltaHistory.slice(-x.frameDeltaHistorySize);var b=x.frameDeltaHistory.slice(0).sort(),D=x.frameDeltaHistory.slice(b.length*s._smoothingLowerBound,b.length*s._smoothingUpperBound),U=p(D);y=U||y}x.frameDeltaSnapping&&(y=1e3/Math.round(1e3/y)),x.frameDelta=y,x.timeLastTick=g,x.timeBuffer+=x.frameDelta,x.timeBuffer=h.clamp(x.timeBuffer,0,x.frameDelta+S*s._timeBufferMargin),x.lastUpdatesDeferred=0;var N=x.maxUpdates||Math.ceil(x.maxFrameTime/S),E={timestamp:_.timing.timestamp};f.trigger(x,"beforeTick",E),f.trigger(x,"tick",E);for(var T=h.now();S>0&&x.timeBuffer>=S*s._timeBufferMargin;){f.trigger(x,"beforeUpdate",E),u.update(_,S),f.trigger(x,"afterUpdate",E),x.timeBuffer-=S,M+=1;var w=h.now()-d,L=h.now()-T,R=w+s._elapsedNextEstimate*L/M;if(M>=N||R>x.maxFrameTime){x.lastUpdatesDeferred=Math.round(Math.max(0,x.timeBuffer/S-s._timeBufferMargin));break}}_.timing.lastUpdatesPerFrame=M,f.trigger(x,"afterTick",E),x.frameDeltaHistory.length>=100&&(x.lastUpdatesDeferred&&Math.round(x.frameDelta/S)>N?h.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):x.lastUpdatesDeferred&&h.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof x.isFixed<"u"&&h.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(x.deltaMin||x.deltaMax)&&h.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),x.fps!==0&&h.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},s.stop=function(x){s._cancelNextFrame(x)},s._onNextFrame=function(x,_){if(typeof window<"u"&&window.requestAnimationFrame)x.frameRequestId=window.requestAnimationFrame(_);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return x.frameRequestId},s._cancelNextFrame=function(x){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(x.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var p=function(x){for(var _=0,g=x.length,d=0;d<g;d+=1)_+=x[d];return _/g||0}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(8),u=l(0),h=u.deprecated;(function(){s.collides=function(p,x){return f.collides(p,x)},h(s,"collides","SAT.collides ➤ replaced by Collision.collides")})()}),(function(i,r,l){var s={};i.exports=s,l(1);var f=l(0);(function(){s.pathToVertices=function(u,h){typeof window<"u"&&!("SVGPathSeg"in window)&&f.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var p,x,_,g,d,S,M,y,b,D,U=[],N,E,T=0,w=0,L=0;h=h||15;var R=function(O,P,H){var W=H%2===1&&H>1;if(!b||O!=b.x||P!=b.y){b&&W?(N=b.x,E=b.y):(N=0,E=0);var X={x:N+O,y:E+P};(W||!b)&&(b=X),U.push(X),w=N+O,L=E+P}},A=function(O){var P=O.pathSegTypeAsLetter.toUpperCase();if(P!=="Z"){switch(P){case"M":case"L":case"T":case"C":case"S":case"Q":w=O.x,L=O.y;break;case"H":w=O.x;break;case"V":L=O.y;break}R(w,L,O.pathSegType)}};for(s._svgPathToAbsolute(u),_=u.getTotalLength(),S=[],p=0;p<u.pathSegList.numberOfItems;p+=1)S.push(u.pathSegList.getItem(p));for(M=S.concat();T<_;){if(D=u.getPathSegAtLength(T),d=S[D],d!=y){for(;M.length&&M[0]!=d;)A(M.shift());y=d}switch(d.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":g=u.getPointAtLength(T),R(g.x,g.y,0);break}T+=h}for(p=0,x=M.length;p<x;++p)A(M[p]);return U},s._svgPathToAbsolute=function(u){for(var h,p,x,_,g,d,S=u.pathSegList,M=0,y=0,b=S.numberOfItems,D=0;D<b;++D){var U=S.getItem(D),N=U.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(N))"x"in U&&(M=U.x),"y"in U&&(y=U.y);else switch("x1"in U&&(x=M+U.x1),"x2"in U&&(g=M+U.x2),"y1"in U&&(_=y+U.y1),"y2"in U&&(d=y+U.y2),"x"in U&&(M+=U.x),"y"in U&&(y+=U.y),N){case"m":S.replaceItem(u.createSVGPathSegMovetoAbs(M,y),D);break;case"l":S.replaceItem(u.createSVGPathSegLinetoAbs(M,y),D);break;case"h":S.replaceItem(u.createSVGPathSegLinetoHorizontalAbs(M),D);break;case"v":S.replaceItem(u.createSVGPathSegLinetoVerticalAbs(y),D);break;case"c":S.replaceItem(u.createSVGPathSegCurvetoCubicAbs(M,y,x,_,g,d),D);break;case"s":S.replaceItem(u.createSVGPathSegCurvetoCubicSmoothAbs(M,y,g,d),D);break;case"q":S.replaceItem(u.createSVGPathSegCurvetoQuadraticAbs(M,y,x,_),D);break;case"t":S.replaceItem(u.createSVGPathSegCurvetoQuadraticSmoothAbs(M,y),D);break;case"a":S.replaceItem(u.createSVGPathSegArcAbs(M,y,U.r1,U.r2,U.angle,U.largeArcFlag,U.sweepFlag),D);break;case"z":case"Z":M=h,y=p;break}(N=="M"||N=="m")&&(h=M,p=y)}}})()}),(function(i,r,l){var s={};i.exports=s;var f=l(6);l(0),(function(){s.create=f.create,s.add=f.add,s.remove=f.remove,s.clear=f.clear,s.addComposite=f.addComposite,s.addBody=f.addBody,s.addConstraint=f.addConstraint})()})])})})(yc)),yc.exports}var uS=cS();const Vn=K_(uS);function fS(){const c=Pe.useRef(null),e=Pe.useRef(null),i=Pe.useRef(null),r=Pe.useRef(null);return Pe.useEffect(()=>{let l=!1;const s=Vn.Engine.create({gravity:{x:0,y:0}});return(async()=>{const u=c.current;if(!u)return;const h=u.getContext("2d");if(!h)return;const p=await Dc();if(l){p.srcObject instanceof MediaStream&&p.srcObject.getTracks().forEach(S=>S.stop());return}e.current=p;const x=document.createElement("canvas"),_=x.getContext("2d");if(!_)return;const g=()=>{Vn.World.clear(s.world,!1);const S=u.clientWidth||800,M=u.clientHeight||600;u.width=S,u.height=M;const y=200,b=[Vn.Bodies.rectangle(S/2,-y/2,S,y,{isStatic:!0}),Vn.Bodies.rectangle(S/2,M+y/2,S,y,{isStatic:!0}),Vn.Bodies.rectangle(-y/2,M/2,y,M,{isStatic:!0}),Vn.Bodies.rectangle(S+y/2,M/2,y,M,{isStatic:!0})];Vn.World.add(s.world,b);const D=[],U=36,N=20,E=S/U,T=M/N,w=Math.min(E,T)*.35;for(let L=0;L<N;L++)for(let R=0;R<U;R++){const A=(Math.random()-.5)*E*.6,O=(Math.random()-.5)*T*.6,P=Vn.Bodies.circle(R*E+E*.5+A,L*T+T*.5+O,w,{frictionAir:.02,restitution:.9});Vn.Body.setVelocity(P,{x:(Math.random()-.5)*4,y:(Math.random()-.5)*4}),D.push(P)}Vn.World.add(s.world,D)};g(),window.addEventListener("resize",g);const d=()=>{const S=u.clientWidth||800,M=u.clientHeight||600;(u.width!==S||u.height!==M)&&(u.width=S,u.height=M,g());const y=10,b=Math.max(1,Math.floor(S/y)),D=Math.max(1,Math.floor(M/y));x.width=b,x.height=D,_.save(),_.clearRect(0,0,b,D),_.translate(b,0),_.scale(-1,1),_.drawImage(p,0,0,b,D),_.restore();const N=_.getImageData(0,0,b,D).data,E=r.current;if(s.world.bodies.length>0){const T=s.world.bodies.filter(w=>!w.isStatic);for(let w=0;w<D;w++)for(let L=0;L<b;L++){const R=(w*b+L)*4,A=N[R],O=N[R+1],P=N[R+2];let H=0;if(E&&E.length===N.length){const k=A-E[R],Z=O-E[R+1],it=P-E[R+2],lt=Math.abs(k)+Math.abs(Z)+Math.abs(it);H=Math.min(1,lt/384)}if(H<.2)continue;const W=(L+.5)*y,X=(w+.5)*y,I=8e-4*(1+H*2);for(let k=0;k<6;k++){const Z=((L+w*b+k*13)%T.length+T.length)%T.length,it=T[Z],lt=it.position.x-W,V=it.position.y-X,tt=lt*lt+V*V+1e-4,ht=1/Math.sqrt(tt),pt=lt*ht*I,bt=V*ht*I;Vn.Body.applyForce(it,it.position,{x:pt,y:bt})}}}s.world.bodies.forEach(T=>{T.isStatic||Vn.Body.applyForce(T,T.position,{x:(Math.random()-.5)*2e-4,y:(Math.random()-.5)*2e-4})}),Vn.Engine.update(s,1e3/60),h.fillStyle="#050816",h.fillRect(0,0,S,M),h.save(),h.globalAlpha=.03,h.drawImage(x,0,0,b,D,0,0,S,M),h.restore(),h.fillStyle="rgba(140, 220, 255, 0.6)",s.world.bodies.forEach(T=>{T.isStatic||(h.beginPath(),h.arc(T.position.x,T.position.y,(T.circleRadius||4)*.9,0,Math.PI*2),h.fill())}),!E||E.length!==N.length?r.current=new Uint8ClampedArray(N):E.set(N),i.current=requestAnimationFrame(d)};d()})(),()=>{l=!0,i.current!==null&&cancelAnimationFrame(i.current),Vn.Engine.clear(s);const u=e.current;u&&u.srcObject instanceof MediaStream&&u.srcObject.getTracks().forEach(h=>h.stop()),r.current=null}},[]),tn.jsx("canvas",{ref:c,className:"pixel-canvas"})}const gh="181",dS=0,vx=1,hS=2,pg=1,pS=2,ra=3,Za=0,kn=1,sa=2,ca=0,_s=1,Td=2,_x=3,Sx=4,mS=5,yr=100,xS=101,gS=102,vS=103,_S=104,SS=200,yS=201,MS=202,bS=203,Ad=204,Rd=205,ES=206,TS=207,AS=208,RS=209,CS=210,wS=211,DS=212,US=213,LS=214,Cd=0,wd=1,Dd=2,ys=3,Ud=4,Ld=5,Nd=6,Od=7,mg=0,NS=1,OS=2,Ya=0,PS=1,BS=2,zS=3,FS=4,IS=5,HS=6,VS=7,xg=300,Ms=301,bs=302,Pd=303,Bd=304,Uc=306,zd=1e3,oa=1001,Fd=1002,ni=1003,GS=1004,Jl=1005,hi=1006,jf=1007,br=1008,fa=1009,gg=1010,vg=1011,Uo=1012,vh=1013,Tr=1014,la=1015,As=1016,_h=1017,Sh=1018,Lo=1020,_g=35902,Sg=35899,yg=1021,Mg=1022,bi=1023,No=1026,Oo=1027,bg=1028,yh=1029,Mh=1030,bh=1031,Eh=1033,Mc=33776,bc=33777,Ec=33778,Tc=33779,Id=35840,Hd=35841,Vd=35842,Gd=35843,kd=36196,Xd=37492,Wd=37496,qd=37808,Yd=37809,Zd=37810,jd=37811,Kd=37812,Qd=37813,Jd=37814,$d=37815,th=37816,eh=37817,nh=37818,ih=37819,ah=37820,rh=37821,sh=36492,oh=36494,lh=36495,ch=36283,uh=36284,fh=36285,dh=36286,kS=3200,XS=3201,WS=0,qS=1,Wa="",di="srgb",Es="srgb-linear",Rc="linear",ke="srgb",rs=7680,yx=519,YS=512,ZS=513,jS=514,Eg=515,KS=516,QS=517,JS=518,$S=519,Mx=35044,bx="300 es",Ui=2e3,Cc=2001;function Tg(c){for(let e=c.length-1;e>=0;--e)if(c[e]>=65535)return!0;return!1}function wc(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function ty(){const c=wc("canvas");return c.style.display="block",c}const Ex={};function Tx(...c){const e="THREE."+c.shift();console.log(e,...c)}function de(...c){const e="THREE."+c.shift();console.warn(e,...c)}function an(...c){const e="THREE."+c.shift();console.error(e,...c)}function Po(...c){const e=c.join(" ");e in Ex||(Ex[e]=!0,de(...c))}function ey(c,e,i){return new Promise(function(r,l){function s(){switch(c.clientWaitSync(e,c.SYNC_FLUSH_COMMANDS_BIT,0)){case c.WAIT_FAILED:l();break;case c.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const s=l.indexOf(i);s!==-1&&l.splice(s,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let s=0,f=l.length;s<f;s++)l[s].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,hh=180/Math.PI;function Bo(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[c&255]+Dn[c>>8&255]+Dn[c>>16&255]+Dn[c>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Te(c,e,i){return Math.max(e,Math.min(i,c))}function ny(c,e){return(c%e+e)%e}function Qf(c,e,i){return(1-i)*c+i*e}function Eo(c,e){switch(e.constructor){case Float32Array:return c;case Uint32Array:return c/4294967295;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int32Array:return Math.max(c/2147483647,-1);case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Gn(c,e){switch(e.constructor){case Float32Array:return c;case Uint32Array:return Math.round(c*4294967295);case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int32Array:return Math.round(c*2147483647);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,i=0){Xe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),s=this.x-e.x,f=this.y-e.y;return this.x=s*r-f*l+e.x,this.y=s*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,s,f,u){let h=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3],g=s[f+0],d=s[f+1],S=s[f+2],M=s[f+3];if(u<=0){e[i+0]=h,e[i+1]=p,e[i+2]=x,e[i+3]=_;return}if(u>=1){e[i+0]=g,e[i+1]=d,e[i+2]=S,e[i+3]=M;return}if(_!==M||h!==g||p!==d||x!==S){let y=h*g+p*d+x*S+_*M;y<0&&(g=-g,d=-d,S=-S,M=-M,y=-y);let b=1-u;if(y<.9995){const D=Math.acos(y),U=Math.sin(D);b=Math.sin(b*D)/U,u=Math.sin(u*D)/U,h=h*b+g*u,p=p*b+d*u,x=x*b+S*u,_=_*b+M*u}else{h=h*b+g*u,p=p*b+d*u,x=x*b+S*u,_=_*b+M*u;const D=1/Math.sqrt(h*h+p*p+x*x+_*_);h*=D,p*=D,x*=D,_*=D}}e[i]=h,e[i+1]=p,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,s,f){const u=r[l],h=r[l+1],p=r[l+2],x=r[l+3],_=s[f],g=s[f+1],d=s[f+2],S=s[f+3];return e[i]=u*S+x*_+h*d-p*g,e[i+1]=h*S+x*g+p*_-u*d,e[i+2]=p*S+x*d+u*g-h*_,e[i+3]=x*S-u*_-h*g-p*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,s=e._z,f=e._order,u=Math.cos,h=Math.sin,p=u(r/2),x=u(l/2),_=u(s/2),g=h(r/2),d=h(l/2),S=h(s/2);switch(f){case"XYZ":this._x=g*x*_+p*d*S,this._y=p*d*_-g*x*S,this._z=p*x*S+g*d*_,this._w=p*x*_-g*d*S;break;case"YXZ":this._x=g*x*_+p*d*S,this._y=p*d*_-g*x*S,this._z=p*x*S-g*d*_,this._w=p*x*_+g*d*S;break;case"ZXY":this._x=g*x*_-p*d*S,this._y=p*d*_+g*x*S,this._z=p*x*S+g*d*_,this._w=p*x*_-g*d*S;break;case"ZYX":this._x=g*x*_-p*d*S,this._y=p*d*_+g*x*S,this._z=p*x*S-g*d*_,this._w=p*x*_+g*d*S;break;case"YZX":this._x=g*x*_+p*d*S,this._y=p*d*_+g*x*S,this._z=p*x*S-g*d*_,this._w=p*x*_-g*d*S;break;case"XZY":this._x=g*x*_-p*d*S,this._y=p*d*_-g*x*S,this._z=p*x*S+g*d*_,this._w=p*x*_+g*d*S;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],s=i[8],f=i[1],u=i[5],h=i[9],p=i[2],x=i[6],_=i[10],g=r+u+_;if(g>0){const d=.5/Math.sqrt(g+1);this._w=.25/d,this._x=(x-h)*d,this._y=(s-p)*d,this._z=(f-l)*d}else if(r>u&&r>_){const d=2*Math.sqrt(1+r-u-_);this._w=(x-h)/d,this._x=.25*d,this._y=(l+f)/d,this._z=(s+p)/d}else if(u>_){const d=2*Math.sqrt(1+u-r-_);this._w=(s-p)/d,this._x=(l+f)/d,this._y=.25*d,this._z=(h+x)/d}else{const d=2*Math.sqrt(1+_-r-u);this._w=(f-l)/d,this._x=(s+p)/d,this._y=(h+x)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,s=e._z,f=e._w,u=i._x,h=i._y,p=i._z,x=i._w;return this._x=r*x+f*u+l*p-s*h,this._y=l*x+f*h+s*u-r*p,this._z=s*x+f*p+r*h-l*u,this._w=f*x-r*u-l*h-s*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,s=e._z,f=e._w,u=this.dot(e);u<0&&(r=-r,l=-l,s=-s,f=-f,u=-u);let h=1-i;if(u<.9995){const p=Math.acos(u),x=Math.sin(p);h=Math.sin(h*p)/x,i=Math.sin(i*p)/x,this._x=this._x*h+r*i,this._y=this._y*h+l*i,this._z=this._z*h+s*i,this._w=this._w*h+f*i,this._onChangeCallback()}else this._x=this._x*h+r*i,this._y=this._y*h+l*i,this._z=this._z*h+s*i,this._w=this._w*h+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),s*Math.sin(i),s*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class mt{constructor(e=0,i=0,r=0){mt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ax.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ax.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,s=e.elements;return this.x=s[0]*i+s[3]*r+s[6]*l,this.y=s[1]*i+s[4]*r+s[7]*l,this.z=s[2]*i+s[5]*r+s[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,s=e.elements,f=1/(s[3]*i+s[7]*r+s[11]*l+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*l+s[12])*f,this.y=(s[1]*i+s[5]*r+s[9]*l+s[13])*f,this.z=(s[2]*i+s[6]*r+s[10]*l+s[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,s=e.x,f=e.y,u=e.z,h=e.w,p=2*(f*l-u*r),x=2*(u*i-s*l),_=2*(s*r-f*i);return this.x=i+h*p+f*_-u*x,this.y=r+h*x+u*p-s*_,this.z=l+h*_+s*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,s=e.elements;return this.x=s[0]*i+s[4]*r+s[8]*l,this.y=s[1]*i+s[5]*r+s[9]*l,this.z=s[2]*i+s[6]*r+s[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,s=e.z,f=i.x,u=i.y,h=i.z;return this.x=l*h-s*u,this.y=s*f-r*h,this.z=r*u-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new mt,Ax=new zo;class me{constructor(e,i,r,l,s,f,u,h,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,s,f,u,h,p)}set(e,i,r,l,s,f,u,h,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=u,x[3]=i,x[4]=s,x[5]=h,x[6]=r,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,s=this.elements,f=r[0],u=r[3],h=r[6],p=r[1],x=r[4],_=r[7],g=r[2],d=r[5],S=r[8],M=l[0],y=l[3],b=l[6],D=l[1],U=l[4],N=l[7],E=l[2],T=l[5],w=l[8];return s[0]=f*M+u*D+h*E,s[3]=f*y+u*U+h*T,s[6]=f*b+u*N+h*w,s[1]=p*M+x*D+_*E,s[4]=p*y+x*U+_*T,s[7]=p*b+x*N+_*w,s[2]=g*M+d*D+S*E,s[5]=g*y+d*U+S*T,s[8]=g*b+d*N+S*w,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],s=e[3],f=e[4],u=e[5],h=e[6],p=e[7],x=e[8];return i*f*x-i*u*p-r*s*x+r*u*h+l*s*p-l*f*h}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],s=e[3],f=e[4],u=e[5],h=e[6],p=e[7],x=e[8],_=x*f-u*p,g=u*h-x*s,d=p*s-f*h,S=i*_+r*g+l*d;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=_*M,e[1]=(l*p-x*r)*M,e[2]=(u*r-l*f)*M,e[3]=g*M,e[4]=(x*i-l*h)*M,e[5]=(l*s-u*i)*M,e[6]=d*M,e[7]=(r*h-p*i)*M,e[8]=(f*i-r*s)*M,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,s,f,u){const h=Math.cos(s),p=Math.sin(s);return this.set(r*h,r*p,-r*(h*f+p*u)+f+e,-l*p,l*h,-l*(-p*f+h*u)+u+i,0,0,1),this}scale(e,i){return this.premultiply($f.makeScale(e,i)),this}rotate(e){return this.premultiply($f.makeRotation(-e)),this}translate(e,i){return this.premultiply($f.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new me,Rx=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cx=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iy(){const c={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,s,f){return this.enabled===!1||s===f||!s||!f||(this.spaces[s].transfer===ke&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[s].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[s].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b))),l},workingToColorSpace:function(l,s){return this.convert(l,this.workingColorSpace,s)},colorSpaceToWorking:function(l,s){return this.convert(l,s,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Rc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,s=this.workingColorSpace){return l.fromArray(this.spaces[s].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,s,f){return l.copy(this.spaces[s].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,s){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),c.workingToColorSpace(l,s)},toWorkingColorSpace:function(l,s){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),c.colorSpaceToWorking(l,s)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return c.define({[Es]:{primaries:e,whitePoint:r,transfer:Rc,toXYZ:Rx,fromXYZ:Cx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:ke,toXYZ:Rx,fromXYZ:Cx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),c}const Le=iy();function ua(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Ss(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let ss;class ay{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ss===void 0&&(ss=wc("canvas")),ss.width=e.width,ss.height=e.height;const l=ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),s=l.data;for(let f=0;f<s.length;f++)s[f]=ua(s[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:e.width,height:e.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ry=0;class Th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let s;if(Array.isArray(l)){s=[];for(let f=0,u=l.length;f<u;f++)l[f].isDataTexture?s.push(td(l[f].image)):s.push(td(l[f]))}else s=td(l);r.url=s}return i||(e.images[this.uuid]=r),r}}function td(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?ay.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let sy=0;const ed=new mt;class On extends Rs{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=oa,l=oa,s=hi,f=br,u=bi,h=fa,p=On.DEFAULT_ANISOTROPY,x=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Bo(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=s,this.minFilter=f,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case oa:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case oa:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=xg;On.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,s=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*s,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*s,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*s,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,s;const h=e.elements,p=h[0],x=h[4],_=h[8],g=h[1],d=h[5],S=h[9],M=h[2],y=h[6],b=h[10];if(Math.abs(x-g)<.01&&Math.abs(_-M)<.01&&Math.abs(S-y)<.01){if(Math.abs(x+g)<.1&&Math.abs(_+M)<.1&&Math.abs(S+y)<.1&&Math.abs(p+d+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,N=(d+1)/2,E=(b+1)/2,T=(x+g)/4,w=(_+M)/4,L=(S+y)/4;return U>N&&U>E?U<.01?(r=0,l=.707106781,s=.707106781):(r=Math.sqrt(U),l=T/r,s=w/r):N>E?N<.01?(r=.707106781,l=0,s=.707106781):(l=Math.sqrt(N),r=T/l,s=L/l):E<.01?(r=.707106781,l=.707106781,s=0):(s=Math.sqrt(E),r=w/s,l=L/s),this.set(r,l,s,i),this}let D=Math.sqrt((y-S)*(y-S)+(_-M)*(_-M)+(g-x)*(g-x));return Math.abs(D)<.001&&(D=1),this.x=(y-S)/D,this.y=(_-M)/D,this.z=(g-x)/D,this.w=Math.acos((p+d+b-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oy extends Rs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},s=new On(l);this.textures=[];const f=r.count;for(let u=0;u<f;u++)this.textures[u]=s.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,s=this.textures.length;l<s;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Th(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends oy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Ag extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ly extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=new mt(1/0,1/0,1/0),i=new mt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(i===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=s.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,vi):vi.fromBufferAttribute(s,f),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let s=0,f=l.length;s<f;s++)this.expandByObject(l[s],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),tc.subVectors(this.max,To),os.subVectors(e.a,To),ls.subVectors(e.b,To),cs.subVectors(e.c,To),Ia.subVectors(ls,os),Ha.subVectors(cs,ls),pr.subVectors(os,cs);let i=[0,-Ia.z,Ia.y,0,-Ha.z,Ha.y,0,-pr.z,pr.y,Ia.z,0,-Ia.x,Ha.z,0,-Ha.x,pr.z,0,-pr.x,-Ia.y,Ia.x,0,-Ha.y,Ha.x,0,-pr.y,pr.x,0];return!nd(i,os,ls,cs,tc)||(i=[1,0,0,0,1,0,0,0,1],!nd(i,os,ls,cs,tc))?!1:(ec.crossVectors(Ia,Ha),i=[ec.x,ec.y,ec.z],nd(i,os,ls,cs,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new mt,new mt,new mt,new mt,new mt,new mt,new mt,new mt],vi=new mt,$l=new Fo,os=new mt,ls=new mt,cs=new mt,Ia=new mt,Ha=new mt,pr=new mt,To=new mt,tc=new mt,ec=new mt,mr=new mt;function nd(c,e,i,r,l){for(let s=0,f=c.length-3;s<=f;s+=3){mr.fromArray(c,s);const u=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),h=e.dot(mr),p=i.dot(mr),x=r.dot(mr);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>u)return!1}return!0}const cy=new Fo,Ao=new mt,id=new mt;class Lc{constructor(e=new mt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):cy.setFromPoints(e).getCenter(r);let l=0;for(let s=0,f=e.length;s<f;s++)l=Math.max(l,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ao,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(id)),this.expandByPoint(Ao.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ta=new mt,ad=new mt,nc=new mt,Va=new mt,rd=new mt,ic=new mt,sd=new mt;class Rg{constructor(e=new mt,i=new mt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ad.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(ad);const s=e.distanceTo(i)*.5,f=-this.direction.dot(nc),u=Va.dot(this.direction),h=-Va.dot(nc),p=Va.lengthSq(),x=Math.abs(1-f*f);let _,g,d,S;if(x>0)if(_=f*h-u,g=f*u-h,S=s*x,_>=0)if(g>=-S)if(g<=S){const M=1/x;_*=M,g*=M,d=_*(_+f*g+2*u)+g*(f*_+g+2*h)+p}else g=s,_=Math.max(0,-(f*g+u)),d=-_*_+g*(g+2*h)+p;else g=-s,_=Math.max(0,-(f*g+u)),d=-_*_+g*(g+2*h)+p;else g<=-S?(_=Math.max(0,-(-f*s+u)),g=_>0?-s:Math.min(Math.max(-s,-h),s),d=-_*_+g*(g+2*h)+p):g<=S?(_=0,g=Math.min(Math.max(-s,-h),s),d=g*(g+2*h)+p):(_=Math.max(0,-(f*s+u)),g=_>0?s:Math.min(Math.max(-s,-h),s),d=-_*_+g*(g+2*h)+p);else g=f>0?-s:s,_=Math.max(0,-(f*g+u)),d=-_*_+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ad).addScaledVector(nc,g),d}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,s=e.radius*e.radius;if(l>s)return null;const f=Math.sqrt(s-l),u=r-f,h=r+f;return h<0?null:u<0?this.at(h,i):this.at(u,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,s,f,u,h;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),x>=0?(s=(e.min.y-g.y)*x,f=(e.max.y-g.y)*x):(s=(e.max.y-g.y)*x,f=(e.min.y-g.y)*x),r>f||s>l||((s>r||isNaN(r))&&(r=s),(f<l||isNaN(l))&&(l=f),_>=0?(u=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(u=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),r>h||u>l)||((u>r||r!==r)&&(r=u),(h<l||l!==l)&&(l=h),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,r,l,s){rd.subVectors(i,e),ic.subVectors(r,e),sd.crossVectors(rd,ic);let f=this.direction.dot(sd),u;if(f>0){if(l)return null;u=1}else if(f<0)u=-1,f=-f;else return null;Va.subVectors(this.origin,e);const h=u*this.direction.dot(ic.crossVectors(Va,ic));if(h<0)return null;const p=u*this.direction.dot(rd.cross(Va));if(p<0||h+p>f)return null;const x=-u*Va.dot(sd);return x<0?null:this.at(x/f,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,i,r,l,s,f,u,h,p,x,_,g,d,S,M,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,s,f,u,h,p,x,_,g,d,S,M,y)}set(e,i,r,l,s,f,u,h,p,x,_,g,d,S,M,y){const b=this.elements;return b[0]=e,b[4]=i,b[8]=r,b[12]=l,b[1]=s,b[5]=f,b[9]=u,b[13]=h,b[2]=p,b[6]=x,b[10]=_,b[14]=g,b[3]=d,b[7]=S,b[11]=M,b[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),f=1/us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,s=e.z,f=Math.cos(r),u=Math.sin(r),h=Math.cos(l),p=Math.sin(l),x=Math.cos(s),_=Math.sin(s);if(e.order==="XYZ"){const g=f*x,d=f*_,S=u*x,M=u*_;i[0]=h*x,i[4]=-h*_,i[8]=p,i[1]=d+S*p,i[5]=g-M*p,i[9]=-u*h,i[2]=M-g*p,i[6]=S+d*p,i[10]=f*h}else if(e.order==="YXZ"){const g=h*x,d=h*_,S=p*x,M=p*_;i[0]=g+M*u,i[4]=S*u-d,i[8]=f*p,i[1]=f*_,i[5]=f*x,i[9]=-u,i[2]=d*u-S,i[6]=M+g*u,i[10]=f*h}else if(e.order==="ZXY"){const g=h*x,d=h*_,S=p*x,M=p*_;i[0]=g-M*u,i[4]=-f*_,i[8]=S+d*u,i[1]=d+S*u,i[5]=f*x,i[9]=M-g*u,i[2]=-f*p,i[6]=u,i[10]=f*h}else if(e.order==="ZYX"){const g=f*x,d=f*_,S=u*x,M=u*_;i[0]=h*x,i[4]=S*p-d,i[8]=g*p+M,i[1]=h*_,i[5]=M*p+g,i[9]=d*p-S,i[2]=-p,i[6]=u*h,i[10]=f*h}else if(e.order==="YZX"){const g=f*h,d=f*p,S=u*h,M=u*p;i[0]=h*x,i[4]=M-g*_,i[8]=S*_+d,i[1]=_,i[5]=f*x,i[9]=-u*x,i[2]=-p*x,i[6]=d*_+S,i[10]=g-M*_}else if(e.order==="XZY"){const g=f*h,d=f*p,S=u*h,M=u*p;i[0]=h*x,i[4]=-_,i[8]=p*x,i[1]=g*_+M,i[5]=f*x,i[9]=d*_-S,i[2]=S*_-d,i[6]=u*x,i[10]=M*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uy,e,fy)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ga.crossVectors(r,ti),Ga.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ga.crossVectors(r,ti)),Ga.normalize(),ac.crossVectors(ti,Ga),l[0]=Ga.x,l[4]=ac.x,l[8]=ti.x,l[1]=Ga.y,l[5]=ac.y,l[9]=ti.y,l[2]=Ga.z,l[6]=ac.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,s=this.elements,f=r[0],u=r[4],h=r[8],p=r[12],x=r[1],_=r[5],g=r[9],d=r[13],S=r[2],M=r[6],y=r[10],b=r[14],D=r[3],U=r[7],N=r[11],E=r[15],T=l[0],w=l[4],L=l[8],R=l[12],A=l[1],O=l[5],P=l[9],H=l[13],W=l[2],X=l[6],I=l[10],k=l[14],Z=l[3],it=l[7],lt=l[11],V=l[15];return s[0]=f*T+u*A+h*W+p*Z,s[4]=f*w+u*O+h*X+p*it,s[8]=f*L+u*P+h*I+p*lt,s[12]=f*R+u*H+h*k+p*V,s[1]=x*T+_*A+g*W+d*Z,s[5]=x*w+_*O+g*X+d*it,s[9]=x*L+_*P+g*I+d*lt,s[13]=x*R+_*H+g*k+d*V,s[2]=S*T+M*A+y*W+b*Z,s[6]=S*w+M*O+y*X+b*it,s[10]=S*L+M*P+y*I+b*lt,s[14]=S*R+M*H+y*k+b*V,s[3]=D*T+U*A+N*W+E*Z,s[7]=D*w+U*O+N*X+E*it,s[11]=D*L+U*P+N*I+E*lt,s[15]=D*R+U*H+N*k+E*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],s=e[12],f=e[1],u=e[5],h=e[9],p=e[13],x=e[2],_=e[6],g=e[10],d=e[14],S=e[3],M=e[7],y=e[11],b=e[15];return S*(+s*h*_-l*p*_-s*u*g+r*p*g+l*u*d-r*h*d)+M*(+i*h*d-i*p*g+s*f*g-l*f*d+l*p*x-s*h*x)+y*(+i*p*_-i*u*d-s*f*_+r*f*d+s*u*x-r*p*x)+b*(-l*u*x-i*h*_+i*u*g+l*f*_-r*f*g+r*h*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],s=e[3],f=e[4],u=e[5],h=e[6],p=e[7],x=e[8],_=e[9],g=e[10],d=e[11],S=e[12],M=e[13],y=e[14],b=e[15],D=_*y*p-M*g*p+M*h*d-u*y*d-_*h*b+u*g*b,U=S*g*p-x*y*p-S*h*d+f*y*d+x*h*b-f*g*b,N=x*M*p-S*_*p+S*u*d-f*M*d-x*u*b+f*_*b,E=S*_*h-x*M*h-S*u*g+f*M*g+x*u*y-f*_*y,T=i*D+r*U+l*N+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=D*w,e[1]=(M*g*s-_*y*s-M*l*d+r*y*d+_*l*b-r*g*b)*w,e[2]=(u*y*s-M*h*s+M*l*p-r*y*p-u*l*b+r*h*b)*w,e[3]=(_*h*s-u*g*s-_*l*p+r*g*p+u*l*d-r*h*d)*w,e[4]=U*w,e[5]=(x*y*s-S*g*s+S*l*d-i*y*d-x*l*b+i*g*b)*w,e[6]=(S*h*s-f*y*s-S*l*p+i*y*p+f*l*b-i*h*b)*w,e[7]=(f*g*s-x*h*s+x*l*p-i*g*p-f*l*d+i*h*d)*w,e[8]=N*w,e[9]=(S*_*s-x*M*s-S*r*d+i*M*d+x*r*b-i*_*b)*w,e[10]=(f*M*s-S*u*s+S*r*p-i*M*p-f*r*b+i*u*b)*w,e[11]=(x*u*s-f*_*s-x*r*p+i*_*p+f*r*d-i*u*d)*w,e[12]=E*w,e[13]=(x*M*l-S*_*l+S*r*g-i*M*g-x*r*y+i*_*y)*w,e[14]=(S*u*l-f*M*l-S*r*h+i*M*h+f*r*y-i*u*y)*w,e[15]=(f*_*l-x*u*l+x*r*h-i*_*h-f*r*g+i*u*g)*w,this}scale(e){const i=this.elements,r=e.x,l=e.y,s=e.z;return i[0]*=r,i[4]*=l,i[8]*=s,i[1]*=r,i[5]*=l,i[9]*=s,i[2]*=r,i[6]*=l,i[10]*=s,i[3]*=r,i[7]*=l,i[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),s=1-r,f=e.x,u=e.y,h=e.z,p=s*f,x=s*u;return this.set(p*f+r,p*u-l*h,p*h+l*u,0,p*u+l*h,x*u+r,x*h-l*f,0,p*h-l*u,x*h+l*f,s*h*h+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,s,f){return this.set(1,r,s,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,s=i._x,f=i._y,u=i._z,h=i._w,p=s+s,x=f+f,_=u+u,g=s*p,d=s*x,S=s*_,M=f*x,y=f*_,b=u*_,D=h*p,U=h*x,N=h*_,E=r.x,T=r.y,w=r.z;return l[0]=(1-(M+b))*E,l[1]=(d+N)*E,l[2]=(S-U)*E,l[3]=0,l[4]=(d-N)*T,l[5]=(1-(g+b))*T,l[6]=(y+D)*T,l[7]=0,l[8]=(S+U)*w,l[9]=(y-D)*w,l[10]=(1-(g+M))*w,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let s=us.set(l[0],l[1],l[2]).length();const f=us.set(l[4],l[5],l[6]).length(),u=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(s=-s),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/s,x=1/f,_=1/u;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=x,_i.elements[5]*=x,_i.elements[6]*=x,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,i.setFromRotationMatrix(_i),r.x=s,r.y=f,r.z=u,this}makePerspective(e,i,r,l,s,f,u=Ui,h=!1){const p=this.elements,x=2*s/(i-e),_=2*s/(r-l),g=(i+e)/(i-e),d=(r+l)/(r-l);let S,M;if(h)S=s/(f-s),M=f*s/(f-s);else if(u===Ui)S=-(f+s)/(f-s),M=-2*f*s/(f-s);else if(u===Cc)S=-f/(f-s),M=-f*s/(f-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=d,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,s,f,u=Ui,h=!1){const p=this.elements,x=2/(i-e),_=2/(r-l),g=-(i+e)/(i-e),d=-(r+l)/(r-l);let S,M;if(h)S=1/(f-s),M=f/(f-s);else if(u===Ui)S=-2/(f-s),M=-(f+s)/(f-s);else if(u===Cc)S=-1/(f-s),M=-s/(f-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=d,p[2]=0,p[6]=0,p[10]=S,p[14]=M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const us=new mt,_i=new dn,uy=new mt(0,0,0),fy=new mt(1,1,1),Ga=new mt,ac=new mt,ti=new mt,wx=new dn,Dx=new zo;class da{constructor(e=0,i=0,r=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,s=l[0],f=l[4],u=l[8],h=l[1],p=l[5],x=l[9],_=l[2],g=l[6],d=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-x,d),this._z=Math.atan2(-f,s)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(u,d),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,s),this._z=0);break;case"ZXY":this._x=Math.asin(Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,d),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,s)):(this._x=0,this._y=Math.atan2(u,d));break;case"XZY":this._z=Math.asin(-Te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-x,d),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return wx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Dx.setFromEuler(this),this.setFromQuaternion(Dx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class Cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dy=0;const Ux=new mt,fs=new zo,ea=new dn,rc=new mt,Ro=new mt,hy=new mt,py=new zo,Lx=new mt(1,0,0),Nx=new mt(0,1,0),Ox=new mt(0,0,1),Px={type:"added"},my={type:"removed"},ds={type:"childadded",child:null},od={type:"childremoved",child:null};class Xn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new mt,i=new da,r=new zo,l=new mt(1,1,1);function s(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new me}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Lx,e)}rotateY(e){return this.rotateOnAxis(Nx,e)}rotateZ(e){return this.rotateOnAxis(Ox,e)}translateOnAxis(e,i){return Ux.copy(e).applyQuaternion(this.quaternion),this.position.add(Ux.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Lx,e)}translateY(e){return this.translateOnAxis(Nx,e)}translateZ(e){return this.translateOnAxis(Ox,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Ro,rc,this.up):ea.lookAt(rc,Ro,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(ea),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(an("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Px),ds.child=e,this.dispatchEvent(ds),ds.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(my),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Px),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let s=0,f=l.length;s<f;s++)l[s].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let s=0,f=l.length;s<f;s++)l[s].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(u=>({...u})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function s(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const _=h[p];s(e.shapes,_)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,p=this.material.length;h<p;h++)u.push(s(e.materials,this.material[h]));l.material=u}else l.material=s(e.materials,this.material);if(this.children.length>0){l.children=[];for(let u=0;u<this.children.length;u++)l.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];l.animations.push(s(e.animations,h))}}if(i){const u=f(e.geometries),h=f(e.materials),p=f(e.textures),x=f(e.images),_=f(e.shapes),g=f(e.skeletons),d=f(e.animations),S=f(e.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),d.length>0&&(r.animations=d),S.length>0&&(r.nodes=S)}return r.object=l,r;function f(u){const h=[];for(const p in u){const x=u[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new mt(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new mt,na=new mt,ld=new mt,ia=new mt,hs=new mt,ps=new mt,Bx=new mt,cd=new mt,ud=new mt,fd=new mt,dd=new rn,hd=new rn,pd=new rn;class Mi{constructor(e=new mt,i=new mt,r=new mt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const s=l.lengthSq();return s>0?l.multiplyScalar(1/Math.sqrt(s)):l.set(0,0,0)}static getBarycoord(e,i,r,l,s){Si.subVectors(l,i),na.subVectors(r,i),ld.subVectors(e,i);const f=Si.dot(Si),u=Si.dot(na),h=Si.dot(ld),p=na.dot(na),x=na.dot(ld),_=f*p-u*u;if(_===0)return s.set(0,0,0),null;const g=1/_,d=(p*h-u*x)*g,S=(f*x-u*h)*g;return s.set(1-d-S,S,d)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,s,f,u,h){return this.getBarycoord(e,i,r,l,ia)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,ia.x),h.addScaledVector(f,ia.y),h.addScaledVector(u,ia.z),h)}static getInterpolatedAttribute(e,i,r,l,s,f){return dd.setScalar(0),hd.setScalar(0),pd.setScalar(0),dd.fromBufferAttribute(e,i),hd.fromBufferAttribute(e,r),pd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(dd,s.x),f.addScaledVector(hd,s.y),f.addScaledVector(pd,s.z),f}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),na.subVectors(e,i),Si.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Si.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,s){return Mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,s=this.c;let f,u;hs.subVectors(l,r),ps.subVectors(s,r),cd.subVectors(e,r);const h=hs.dot(cd),p=ps.dot(cd);if(h<=0&&p<=0)return i.copy(r);ud.subVectors(e,l);const x=hs.dot(ud),_=ps.dot(ud);if(x>=0&&_<=x)return i.copy(l);const g=h*_-x*p;if(g<=0&&h>=0&&x<=0)return f=h/(h-x),i.copy(r).addScaledVector(hs,f);fd.subVectors(e,s);const d=hs.dot(fd),S=ps.dot(fd);if(S>=0&&d<=S)return i.copy(s);const M=d*p-h*S;if(M<=0&&p>=0&&S<=0)return u=p/(p-S),i.copy(r).addScaledVector(ps,u);const y=x*S-d*_;if(y<=0&&_-x>=0&&d-S>=0)return Bx.subVectors(s,l),u=(_-x)/(_-x+(d-S)),i.copy(l).addScaledVector(Bx,u);const b=1/(y+M+g);return f=M*b,u=g*b,i.copy(r).addScaledVector(hs,f).addScaledVector(ps,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},sc={h:0,s:0,l:0};function md(c,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?c+(e-c)*6*i:i<1/2?e:i<2/3?c+(e-c)*6*(2/3-i):c}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=r,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Le.workingColorSpace){if(e=ny(e,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+i):r+i-r*i,f=2*r-s;this.r=md(f,s,e+1/3),this.g=md(f,s,e),this.b=md(f,s,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function r(s){s!==void 0&&parseFloat(s)<1&&de("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const f=l[1],u=l[2];switch(f){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,i);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,i);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,i);break;default:de("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=l[1],f=s.length;if(f===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(s,16),i);de("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const r=wg[e.toLowerCase()];return r!==void 0?this.setHex(r,i):de("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Le.workingToColorSpace(Un.copy(this),e),Math.round(Te(Un.r*255,0,255))*65536+Math.round(Te(Un.g*255,0,255))*256+Math.round(Te(Un.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,s=Un.b,f=Math.max(r,l,s),u=Math.min(r,l,s);let h,p;const x=(u+f)/2;if(u===f)h=0,p=0;else{const _=f-u;switch(p=x<=.5?_/(f+u):_/(2-f-u),f){case r:h=(l-s)/_+(l<s?6:0);break;case l:h=(s-r)/_+2;break;case s:h=(r-l)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=di){Le.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+i,ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ka),e.getHSL(sc);const r=Qf(ka.h,sc.h,i),l=Qf(ka.s,sc.s,i),s=Qf(ka.l,sc.l,i);return this.setHSL(r,l,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,s=e.elements;return this.r=s[0]*i+s[3]*r+s[6]*l,this.g=s[1]*i+s[4]*r+s[7]*l,this.b=s[2]*i+s[5]*r+s[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Be;Be.NAMES=wg;let xy=0;class Io extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=_s,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){de(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==Za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ad&&(r.blendSrc=this.blendSrc),this.blendDst!==Rd&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(s){const f=[];for(const u in s){const h=s[u];delete h.metadata,f.push(h)}return f}if(i){const s=l(e.textures),f=l(e.images);s.length>0&&(r.textures=s),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let s=0;s!==l;++s)r[s]=i[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dg extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new mt,oc=new Xe;let gy=0;class Ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Mx,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,s=this.itemSize;l<s;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mx&&(e.usage=this.usage),e}}class Ug extends Ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Lg extends Ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Er extends Ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let vy=0;const fi=new dn,xd=new Xn,ms=new mt,ei=new Fo,Co=new Fo,Mn=new mt;class Li extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tg(e)?Lg:Ug)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new me().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,s=e.length;l<s;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Er(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const s=e[l];i.setXYZ(l,s.x,s.y,s.z||0)}e.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new mt(-1/0,-1/0,-1/0),new mt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const s=i[r];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new mt,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let s=0,f=i.length;s<f;s++){const u=i[s];Co.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(ei.min,Co.min),ei.expandByPoint(Mn),Mn.addVectors(ei.max,Co.max),ei.expandByPoint(Mn)):(ei.expandByPoint(Co.min),ei.expandByPoint(Co.max))}ei.getCenter(r);let l=0;for(let s=0,f=e.count;s<f;s++)Mn.fromBufferAttribute(e,s),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let s=0,f=i.length;s<f;s++){const u=i[s],h=this.morphTargetsRelative;for(let p=0,x=u.count;p<x;p++)Mn.fromBufferAttribute(u,p),h&&(ms.fromBufferAttribute(e,p),Mn.add(ms)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),u=[],h=[];for(let L=0;L<r.count;L++)u[L]=new mt,h[L]=new mt;const p=new mt,x=new mt,_=new mt,g=new Xe,d=new Xe,S=new Xe,M=new mt,y=new mt;function b(L,R,A){p.fromBufferAttribute(r,L),x.fromBufferAttribute(r,R),_.fromBufferAttribute(r,A),g.fromBufferAttribute(s,L),d.fromBufferAttribute(s,R),S.fromBufferAttribute(s,A),x.sub(p),_.sub(p),d.sub(g),S.sub(g);const O=1/(d.x*S.y-S.x*d.y);isFinite(O)&&(M.copy(x).multiplyScalar(S.y).addScaledVector(_,-d.y).multiplyScalar(O),y.copy(_).multiplyScalar(d.x).addScaledVector(x,-S.x).multiplyScalar(O),u[L].add(M),u[R].add(M),u[A].add(M),h[L].add(y),h[R].add(y),h[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let L=0,R=D.length;L<R;++L){const A=D[L],O=A.start,P=A.count;for(let H=O,W=O+P;H<W;H+=3)b(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const U=new mt,N=new mt,E=new mt,T=new mt;function w(L){E.fromBufferAttribute(l,L),T.copy(E);const R=u[L];U.copy(R),U.sub(E.multiplyScalar(E.dot(R))).normalize(),N.crossVectors(T,R);const O=N.dot(h[L])<0?-1:1;f.setXYZW(L,U.x,U.y,U.z,O)}for(let L=0,R=D.length;L<R;++L){const A=D[L],O=A.start,P=A.count;for(let H=O,W=O+P;H<W;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,d=r.count;g<d;g++)r.setXYZ(g,0,0,0);const l=new mt,s=new mt,f=new mt,u=new mt,h=new mt,p=new mt,x=new mt,_=new mt;if(e)for(let g=0,d=e.count;g<d;g+=3){const S=e.getX(g+0),M=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,S),s.fromBufferAttribute(i,M),f.fromBufferAttribute(i,y),x.subVectors(f,s),_.subVectors(l,s),x.cross(_),u.fromBufferAttribute(r,S),h.fromBufferAttribute(r,M),p.fromBufferAttribute(r,y),u.add(x),h.add(x),p.add(x),r.setXYZ(S,u.x,u.y,u.z),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,d=i.count;g<d;g+=3)l.fromBufferAttribute(i,g+0),s.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),x.subVectors(f,s),_.subVectors(l,s),x.cross(_),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(u,h){const p=u.array,x=u.itemSize,_=u.normalized,g=new p.constructor(h.length*x);let d=0,S=0;for(let M=0,y=h.length;M<y;M++){u.isInterleavedBufferAttribute?d=h[M]*u.data.stride+u.offset:d=h[M]*x;for(let b=0;b<x;b++)g[S++]=p[d++]}return new Ei(g,x,_)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,r=this.index.array,l=this.attributes;for(const u in l){const h=l[u],p=e(h,r);i.setAttribute(u,p)}const s=this.morphAttributes;for(const u in s){const h=[],p=s[u];for(let x=0,_=p.length;x<_;x++){const g=p[x],d=e(g,r);h.push(d)}i.morphAttributes[u]=h}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,h=f.length;u<h;u++){const p=f[u];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const l={};let s=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let _=0,g=p.length;_<g;_++){const d=p[_];x.push(d.toJSON(e.data))}x.length>0&&(l[h]=x,s=!0)}s&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const s=e.morphAttributes;for(const p in s){const x=[],_=s[p];for(let g=0,d=_.length;g<d;g++)x.push(_[g].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zx=new dn,xr=new Rg,lc=new Lc,Fx=new mt,cc=new mt,uc=new mt,fc=new mt,gd=new mt,dc=new mt,Ix=new mt,hc=new mt;class ja extends Xn{constructor(e=new Li,i=new Dg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,f=l.length;s<f;s++){const u=l[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,s=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const u=this.morphTargetInfluences;if(s&&u){dc.set(0,0,0);for(let h=0,p=s.length;h<p;h++){const x=u[h],_=s[h];x!==0&&(gd.fromBufferAttribute(_,e),f?dc.addScaledVector(gd,x):dc.addScaledVector(gd.sub(i),x))}i.add(dc)}return i}raycast(e,i){const r=this.geometry,l=this.material,s=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(lc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(lc,Fx)===null||xr.origin.distanceToSquared(Fx)>(e.far-e.near)**2))&&(zx.copy(s).invert(),xr.copy(e.ray).applyMatrix4(zx),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const s=this.geometry,f=this.material,u=s.index,h=s.attributes.position,p=s.attributes.uv,x=s.attributes.uv1,_=s.attributes.normal,g=s.groups,d=s.drawRange;if(u!==null)if(Array.isArray(f))for(let S=0,M=g.length;S<M;S++){const y=g[S],b=f[y.materialIndex],D=Math.max(y.start,d.start),U=Math.min(u.count,Math.min(y.start+y.count,d.start+d.count));for(let N=D,E=U;N<E;N+=3){const T=u.getX(N),w=u.getX(N+1),L=u.getX(N+2);l=pc(this,b,e,r,p,x,_,T,w,L),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const S=Math.max(0,d.start),M=Math.min(u.count,d.start+d.count);for(let y=S,b=M;y<b;y+=3){const D=u.getX(y),U=u.getX(y+1),N=u.getX(y+2);l=pc(this,f,e,r,p,x,_,D,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(h!==void 0)if(Array.isArray(f))for(let S=0,M=g.length;S<M;S++){const y=g[S],b=f[y.materialIndex],D=Math.max(y.start,d.start),U=Math.min(h.count,Math.min(y.start+y.count,d.start+d.count));for(let N=D,E=U;N<E;N+=3){const T=N,w=N+1,L=N+2;l=pc(this,b,e,r,p,x,_,T,w,L),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const S=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let y=S,b=M;y<b;y+=3){const D=y,U=y+1,N=y+2;l=pc(this,f,e,r,p,x,_,D,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function _y(c,e,i,r,l,s,f,u){let h;if(e.side===kn?h=r.intersectTriangle(f,s,l,!0,u):h=r.intersectTriangle(l,s,f,e.side===Za,u),h===null)return null;hc.copy(u),hc.applyMatrix4(c.matrixWorld);const p=i.ray.origin.distanceTo(hc);return p<i.near||p>i.far?null:{distance:p,point:hc.clone(),object:c}}function pc(c,e,i,r,l,s,f,u,h,p){c.getVertexPosition(u,cc),c.getVertexPosition(h,uc),c.getVertexPosition(p,fc);const x=_y(c,e,i,r,cc,uc,fc,Ix);if(x){const _=new mt;Mi.getBarycoord(Ix,cc,uc,fc,_),l&&(x.uv=Mi.getInterpolatedAttribute(l,u,h,p,_,new Xe)),s&&(x.uv1=Mi.getInterpolatedAttribute(s,u,h,p,_,new Xe)),f&&(x.normal=Mi.getInterpolatedAttribute(f,u,h,p,_,new mt),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:u,b:h,c:p,normal:new mt,materialIndex:0};Mi.getNormal(cc,uc,fc,g.normal),x.face=g,x.barycoord=_}return x}class Ho extends Li{constructor(e=1,i=1,r=1,l=1,s=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:s,depthSegments:f};const u=this;l=Math.floor(l),s=Math.floor(s),f=Math.floor(f);const h=[],p=[],x=[],_=[];let g=0,d=0;S("z","y","x",-1,-1,r,i,e,f,s,0),S("z","y","x",1,-1,r,i,-e,f,s,1),S("x","z","y",1,1,e,r,i,l,f,2),S("x","z","y",1,-1,e,r,-i,l,f,3),S("x","y","z",1,-1,e,i,r,l,s,4),S("x","y","z",-1,-1,e,i,-r,l,s,5),this.setIndex(h),this.setAttribute("position",new Er(p,3)),this.setAttribute("normal",new Er(x,3)),this.setAttribute("uv",new Er(_,2));function S(M,y,b,D,U,N,E,T,w,L,R){const A=N/w,O=E/L,P=N/2,H=E/2,W=T/2,X=w+1,I=L+1;let k=0,Z=0;const it=new mt;for(let lt=0;lt<I;lt++){const V=lt*O-H;for(let tt=0;tt<X;tt++){const ht=tt*A-P;it[M]=ht*D,it[y]=V*U,it[b]=W,p.push(it.x,it.y,it.z),it[M]=0,it[y]=0,it[b]=T>0?1:-1,x.push(it.x,it.y,it.z),_.push(tt/w),_.push(1-lt/L),k+=1}}for(let lt=0;lt<L;lt++)for(let V=0;V<w;V++){const tt=g+V+X*lt,ht=g+V+X*(lt+1),pt=g+(V+1)+X*(lt+1),bt=g+(V+1)+X*lt;h.push(tt,ht,bt),h.push(ht,pt,bt),Z+=6}u.addGroup(d,Z,R),d+=Z,g+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(c){const e={};for(const i in c){e[i]={};for(const r in c[i]){const l=c[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(c){const e={};for(let i=0;i<c.length;i++){const r=Ts(c[i]);for(const l in r)e[l]=r[l]}return e}function Sy(c){const e=[];for(let i=0;i<c.length;i++)e.push(c[i].clone());return e}function Ng(c){const e=c.getRenderTarget();return e===null?c.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const yy={clone:Ts,merge:Nn};var My=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=My,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Og extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new mt,Hx=new Xe,Vx=new Xe;class yi extends Og{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hh*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,i){return this.getViewBounds(e,Hx,Vx),i.subVectors(Vx,Hx)}setViewOffset(e,i,r,l,s,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=s,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Kf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,s=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;s+=f.offsetX*l/h,i-=f.offsetY*r/p,l*=f.width/h,r*=f.height/p}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,gs=1;class Ey extends Xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(xs,gs,e,i);l.layers=this.layers,this.add(l);const s=new yi(xs,gs,e,i);s.layers=this.layers,this.add(s);const f=new yi(xs,gs,e,i);f.layers=this.layers,this.add(f);const u=new yi(xs,gs,e,i);u.layers=this.layers,this.add(u);const h=new yi(xs,gs,e,i);h.layers=this.layers,this.add(h);const p=new yi(xs,gs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,s,f,u,h]=i;for(const p of i)this.remove(p);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,f,u,h,p,x]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,s),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,u),e.setRenderTarget(r,3,l),e.render(i,h),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(_,g,d),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class Pg extends On{constructor(e=[],i=Ms,r,l,s,f,u,h,p,x){super(e,i,r,l,s,f,u,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends Ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Pg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ho(5,5,5),s=new ha({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ca});s.uniforms.tEquirect.value=i;const f=new ja(l,s),u=i.minFilter;return i.minFilter===br&&(i.minFilter=hi),new Ey(1,10,this).update(e,f),i.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const s=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(s)}}class mc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ay={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new mt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new mt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new mt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new mt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,s=null,f=null;const u=this._targetRay,h=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const M of e.hand.values()){const y=i.getJointPose(M,r),b=this._getHandJoint(p,M);y!==null&&(b.matrix.fromArray(y.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=y.radius),b.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=x.position.distanceTo(_.position),d=.02,S=.005;p.inputState.pinching&&g>d+S?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=d-S&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=i.getPose(e.gripSpace,r),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&s!==null&&(l=s),l!==null&&(u.matrix.fromArray(l.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,l.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(l.linearVelocity)):u.hasLinearVelocity=!1,l.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(l.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Ay)))}return u!==null&&(u.visible=l!==null),h!==null&&(h.visible=s!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Ry extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Cy extends On{constructor(e=null,i=1,r=1,l,s,f,u,h,p=ni,x=ni,_,g){super(null,f,u,h,p,x,l,s,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new mt,wy=new mt,Dy=new me;class Sr{constructor(e=new mt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=_d.subVectors(r,i).cross(wy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(_d),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/l;return s<0||s>1?null:i.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Dy.getNormalMatrix(e),l=this.coplanarPoint(_d).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Lc,Uy=new Xe(.5,.5),xc=new mt;class Bg{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,s=new Sr,f=new Sr){this.planes=[e,i,r,l,s,f]}set(e,i,r,l,s,f){const u=this.planes;return u[0].copy(e),u[1].copy(i),u[2].copy(r),u[3].copy(l),u[4].copy(s),u[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ui,r=!1){const l=this.planes,s=e.elements,f=s[0],u=s[1],h=s[2],p=s[3],x=s[4],_=s[5],g=s[6],d=s[7],S=s[8],M=s[9],y=s[10],b=s[11],D=s[12],U=s[13],N=s[14],E=s[15];if(l[0].setComponents(p-f,d-x,b-S,E-D).normalize(),l[1].setComponents(p+f,d+x,b+S,E+D).normalize(),l[2].setComponents(p+u,d+_,b+M,E+U).normalize(),l[3].setComponents(p-u,d-_,b-M,E-U).normalize(),r)l[4].setComponents(h,g,y,N).normalize(),l[5].setComponents(p-h,d-g,b-y,E-N).normalize();else if(l[4].setComponents(p-h,d-g,b-y,E-N).normalize(),i===Ui)l[5].setComponents(p+h,d+g,b+y,E+N).normalize();else if(i===Cc)l[5].setComponents(h,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=Uy.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let s=0;s<6;s++)if(i[s].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zg extends Io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gx=new dn,ph=new Rg,gc=new Lc,vc=new mt;class Ly extends Xn{constructor(e=new Li,i=new zg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,s=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(l),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;Gx.copy(l).invert(),ph.copy(e.ray).applyMatrix4(Gx);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,p=r.index,_=r.attributes.position;if(p!==null){const g=Math.max(0,f.start),d=Math.min(p.count,f.start+f.count);for(let S=g,M=d;S<M;S++){const y=p.getX(S);vc.fromBufferAttribute(_,y),kx(vc,y,h,l,e,i,this)}}else{const g=Math.max(0,f.start),d=Math.min(_.count,f.start+f.count);for(let S=g,M=d;S<M;S++)vc.fromBufferAttribute(_,S),kx(vc,S,h,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,f=l.length;s<f;s++){const u=l[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}function kx(c,e,i,r,l,s,f){const u=ph.distanceSqToPoint(c);if(u<i){const h=new mt;ph.closestPointToPoint(c,h),h.applyMatrix4(r);const p=l.ray.origin.distanceTo(h);if(p<l.near||p>l.far)return;s.push({distance:p,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Fg extends On{constructor(e,i,r=Tr,l,s,f,u=ni,h=ni,p,x=No,_=1){if(x!==No&&x!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,s,f,u,h,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ig extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nc extends Li{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const s=e/2,f=i/2,u=Math.floor(r),h=Math.floor(l),p=u+1,x=h+1,_=e/u,g=i/h,d=[],S=[],M=[],y=[];for(let b=0;b<x;b++){const D=b*g-f;for(let U=0;U<p;U++){const N=U*_-s;S.push(N,-D,0),M.push(0,0,1),y.push(U/u),y.push(1-b/h)}}for(let b=0;b<h;b++)for(let D=0;D<u;D++){const U=D+p*b,N=D+p*(b+1),E=D+1+p*(b+1),T=D+1+p*b;d.push(U,N,T),d.push(N,E,T)}this.setIndex(d),this.setAttribute("position",new Er(S,3)),this.setAttribute("normal",new Er(M,3)),this.setAttribute("uv",new Er(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ny extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oy extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hg extends Og{constructor(e=-1,i=1,r=1,l=-1,s=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=s,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,s,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=s,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let s=r-e,f=r+e,u=l+i,h=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=p*this.view.offsetX,f=s+p*this.view.width,u-=x*this.view.offsetY,h=u-x*this.view.height}this.projectionMatrix.makeOrthographic(s,f,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Py extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Xx(c,e,i,r){const l=By(r);switch(i){case yg:return c*e;case bg:return c*e/l.components*l.byteLength;case yh:return c*e/l.components*l.byteLength;case Mh:return c*e*2/l.components*l.byteLength;case bh:return c*e*2/l.components*l.byteLength;case Mg:return c*e*3/l.components*l.byteLength;case bi:return c*e*4/l.components*l.byteLength;case Eh:return c*e*4/l.components*l.byteLength;case Mc:case bc:return Math.floor((c+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((c+3)/4)*Math.floor((e+3)/4)*16;case Hd:case Gd:return Math.max(c,16)*Math.max(e,8)/4;case Id:case Vd:return Math.max(c,8)*Math.max(e,8)/2;case kd:case Xd:return Math.floor((c+3)/4)*Math.floor((e+3)/4)*8;case Wd:return Math.floor((c+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((c+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((c+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((c+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((c+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((c+5)/6)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((c+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((c+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((c+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((c+9)/10)*Math.floor((e+4)/5)*16;case eh:return Math.floor((c+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((c+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((c+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((c+11)/12)*Math.floor((e+9)/10)*16;case rh:return Math.floor((c+11)/12)*Math.floor((e+11)/12)*16;case sh:case oh:case lh:return Math.ceil(c/4)*Math.ceil(e/4)*16;case ch:case uh:return Math.ceil(c/4)*Math.ceil(e/4)*8;case fh:case dh:return Math.ceil(c/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function By(c){switch(c){case fa:case gg:return{byteLength:1,components:1};case Uo:case vg:case As:return{byteLength:2,components:1};case _h:case Sh:return{byteLength:2,components:4};case Tr:case vh:case la:return{byteLength:4,components:1};case _g:case Sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${c}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);function Vg(){let c=null,e=!1,i=null,r=null;function l(s,f){i(s,f),r=c.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=c.requestAnimationFrame(l),e=!0)},stop:function(){c.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){i=s},setContext:function(s){c=s}}}function zy(c){const e=new WeakMap;function i(u,h){const p=u.array,x=u.usage,_=p.byteLength,g=c.createBuffer();c.bindBuffer(h,g),c.bufferData(h,p,x),u.onUploadCallback();let d;if(p instanceof Float32Array)d=c.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)d=c.HALF_FLOAT;else if(p instanceof Uint16Array)u.isFloat16BufferAttribute?d=c.HALF_FLOAT:d=c.UNSIGNED_SHORT;else if(p instanceof Int16Array)d=c.SHORT;else if(p instanceof Uint32Array)d=c.UNSIGNED_INT;else if(p instanceof Int32Array)d=c.INT;else if(p instanceof Int8Array)d=c.BYTE;else if(p instanceof Uint8Array)d=c.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)d=c.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:d,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:_}}function r(u,h,p){const x=h.array,_=h.updateRanges;if(c.bindBuffer(p,u),_.length===0)c.bufferSubData(p,0,x);else{_.sort((d,S)=>d.start-S.start);let g=0;for(let d=1;d<_.length;d++){const S=_[g],M=_[d];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++g,_[g]=M)}_.length=g+1;for(let d=0,S=_.length;d<S;d++){const M=_[d];c.bufferSubData(p,M.start*x.BYTES_PER_ELEMENT,x,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(c.deleteBuffer(h.buffer),e.delete(u))}function f(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const x=e.get(u);(!x||x.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const p=e.get(u);if(p===void 0)e.set(u,i(u,h));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,u,h),p.version=u.version}}return{get:l,remove:s,update:f}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
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
#endif`,Hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
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
#endif`,Wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
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
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ky=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qy=`#ifdef USE_IRIDESCENCE
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
#endif`,Jy=`#ifdef USE_BUMPMAP
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
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oM=`#define PI 3.141592653589793
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
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
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
#endif`,DM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,UM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
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
#endif`,BM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,zM=`
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
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
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
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
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
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
#endif`,o1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M1=`float getShadowMask() {
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
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,T1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#ifdef USE_TRANSMISSION
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`#include <common>
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
}`,X1=`#if DEPTH_PACKING == 3200
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
}`,W1=`#define DISTANCE
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
}`,q1=`#define DISTANCE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
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
}`,K1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,J1=`uniform vec3 diffuse;
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
}`,$1=`#define LAMBERT
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
}`,t3=`#define LAMBERT
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
}`,e3=`#define MATCAP
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
}`,n3=`#define MATCAP
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
}`,i3=`#define NORMAL
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
}`,a3=`#define NORMAL
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
}`,r3=`#define PHONG
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
}`,s3=`#define PHONG
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
}`,o3=`#define STANDARD
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
}`,l3=`#define STANDARD
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
}`,c3=`#define TOON
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
}`,u3=`#define TOON
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
}`,f3=`uniform float size;
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
}`,d3=`uniform vec3 diffuse;
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
}`,h3=`#include <common>
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
}`,p3=`uniform vec3 color;
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
}`,m3=`uniform float rotation;
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
}`,x3=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Fy,alphahash_pars_fragment:Iy,alphamap_fragment:Hy,alphamap_pars_fragment:Vy,alphatest_fragment:Gy,alphatest_pars_fragment:ky,aomap_fragment:Xy,aomap_pars_fragment:Wy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:Zy,beginnormal_vertex:jy,bsdfs:Ky,iridescence_fragment:Qy,bumpmap_pars_fragment:Jy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:eM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:aM,color_pars_vertex:rM,color_vertex:sM,common:oM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:fM,emissivemap_fragment:dM,emissivemap_pars_fragment:hM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:xM,envmap_common_pars_fragment:gM,envmap_pars_fragment:vM,envmap_pars_vertex:_M,envmap_physical_pars_fragment:DM,envmap_vertex:SM,fog_vertex:yM,fog_pars_vertex:MM,fog_fragment:bM,fog_pars_fragment:EM,gradientmap_pars_fragment:TM,lightmap_pars_fragment:AM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:CM,lights_pars_begin:wM,lights_toon_fragment:UM,lights_toon_pars_fragment:LM,lights_phong_fragment:NM,lights_phong_pars_fragment:OM,lights_physical_fragment:PM,lights_physical_pars_fragment:BM,lights_fragment_begin:zM,lights_fragment_maps:FM,lights_fragment_end:IM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:kM,map_fragment:XM,map_pars_fragment:WM,map_particle_fragment:qM,map_particle_pars_fragment:YM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:jM,morphinstance_vertex:KM,morphcolor_vertex:QM,morphnormal_vertex:JM,morphtarget_pars_vertex:$M,morphtarget_vertex:t1,normal_fragment_begin:e1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:a1,normal_vertex:r1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:o1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:c1,iridescence_pars_fragment:u1,opaque_fragment:f1,packing:d1,premultiplied_alpha_fragment:h1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:x1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:S1,shadowmap_vertex:y1,shadowmask_pars_fragment:M1,skinbase_vertex:b1,skinning_pars_vertex:E1,skinning_vertex:T1,skinnormal_vertex:A1,specularmap_fragment:R1,specularmap_pars_fragment:C1,tonemapping_fragment:w1,tonemapping_pars_fragment:D1,transmission_fragment:U1,transmission_pars_fragment:L1,uv_pars_fragment:N1,uv_pars_vertex:O1,uv_vertex:P1,worldpos_vertex:B1,background_vert:z1,background_frag:F1,backgroundCube_vert:I1,backgroundCube_frag:H1,cube_vert:V1,cube_frag:G1,depth_vert:k1,depth_frag:X1,distanceRGBA_vert:W1,distanceRGBA_frag:q1,equirect_vert:Y1,equirect_frag:Z1,linedashed_vert:j1,linedashed_frag:K1,meshbasic_vert:Q1,meshbasic_frag:J1,meshlambert_vert:$1,meshlambert_frag:t3,meshmatcap_vert:e3,meshmatcap_frag:n3,meshnormal_vert:i3,meshnormal_frag:a3,meshphong_vert:r3,meshphong_frag:s3,meshphysical_vert:o3,meshphysical_frag:l3,meshtoon_vert:c3,meshtoon_frag:u3,points_vert:f3,points_frag:d3,shadow_vert:h3,shadow_frag:p3,sprite_vert:m3,sprite_frag:x3},Bt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Di={basic:{uniforms:Nn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Nn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Be(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Nn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Nn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Nn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Be(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Nn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Nn([Bt.points,Bt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Nn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Nn([Bt.common,Bt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Nn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Nn([Bt.sprite,Bt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Nn([Bt.common,Bt.displacementmap,{referencePosition:{value:new mt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Nn([Bt.lights,Bt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Di.physical={uniforms:Nn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const _c={r:0,b:0,g:0},vr=new da,g3=new dn;function v3(c,e,i,r,l,s,f){const u=new Be(0);let h=s===!0?0:1,p,x,_=null,g=0,d=null;function S(U){let N=U.isScene===!0?U.background:null;return N&&N.isTexture&&(N=(U.backgroundBlurriness>0?i:e).get(N)),N}function M(U){let N=!1;const E=S(U);E===null?b(u,h):E&&E.isColor&&(b(E,1),N=!0);const T=c.xr.getEnvironmentBlendMode();T==="additive"?r.buffers.color.setClear(0,0,0,1,f):T==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(c.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil))}function y(U,N){const E=S(N);E&&(E.isCubeTexture||E.mapping===Uc)?(x===void 0&&(x=new ja(new Ho(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:Ts(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(T,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),vr.copy(N.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),x.material.uniforms.envMap.value=E,x.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(g3.makeRotationFromEuler(vr)),x.material.toneMapped=Le.getTransfer(E.colorSpace)!==ke,(_!==E||g!==E.version||d!==c.toneMapping)&&(x.material.needsUpdate=!0,_=E,g=E.version,d=c.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):E&&E.isTexture&&(p===void 0&&(p=new ja(new Nc(2,2),new ha({name:"BackgroundMaterial",uniforms:Ts(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=E,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Le.getTransfer(E.colorSpace)!==ke,E.matrixAutoUpdate===!0&&E.updateMatrix(),p.material.uniforms.uvTransform.value.copy(E.matrix),(_!==E||g!==E.version||d!==c.toneMapping)&&(p.material.needsUpdate=!0,_=E,g=E.version,d=c.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function b(U,N){U.getRGB(_c,Ng(c)),r.buffers.color.setClear(_c.r,_c.g,_c.b,N,f)}function D(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,N=1){u.set(U),h=N,b(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,b(u,h)},render:M,addToRenderList:y,dispose:D}}function _3(c,e){const i=c.getParameter(c.MAX_VERTEX_ATTRIBS),r={},l=g(null);let s=l,f=!1;function u(A,O,P,H,W){let X=!1;const I=_(H,P,O);s!==I&&(s=I,p(s.object)),X=d(A,H,P,W),X&&S(A,H,P,W),W!==null&&e.update(W,c.ELEMENT_ARRAY_BUFFER),(X||f)&&(f=!1,N(A,O,P,H),W!==null&&c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return c.createVertexArray()}function p(A){return c.bindVertexArray(A)}function x(A){return c.deleteVertexArray(A)}function _(A,O,P){const H=P.wireframe===!0;let W=r[A.id];W===void 0&&(W={},r[A.id]=W);let X=W[O.id];X===void 0&&(X={},W[O.id]=X);let I=X[H];return I===void 0&&(I=g(h()),X[H]=I),I}function g(A){const O=[],P=[],H=[];for(let W=0;W<i;W++)O[W]=0,P[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:P,attributeDivisors:H,object:A,attributes:{},index:null}}function d(A,O,P,H){const W=s.attributes,X=O.attributes;let I=0;const k=P.getAttributes();for(const Z in k)if(k[Z].location>=0){const lt=W[Z];let V=X[Z];if(V===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(V=A.instanceColor)),lt===void 0||lt.attribute!==V||V&&lt.data!==V.data)return!0;I++}return s.attributesNum!==I||s.index!==H}function S(A,O,P,H){const W={},X=O.attributes;let I=0;const k=P.getAttributes();for(const Z in k)if(k[Z].location>=0){let lt=X[Z];lt===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(lt=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(lt=A.instanceColor));const V={};V.attribute=lt,lt&&lt.data&&(V.data=lt.data),W[Z]=V,I++}s.attributes=W,s.attributesNum=I,s.index=H}function M(){const A=s.newAttributes;for(let O=0,P=A.length;O<P;O++)A[O]=0}function y(A){b(A,0)}function b(A,O){const P=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;P[A]=1,H[A]===0&&(c.enableVertexAttribArray(A),H[A]=1),W[A]!==O&&(c.vertexAttribDivisor(A,O),W[A]=O)}function D(){const A=s.newAttributes,O=s.enabledAttributes;for(let P=0,H=O.length;P<H;P++)O[P]!==A[P]&&(c.disableVertexAttribArray(P),O[P]=0)}function U(A,O,P,H,W,X,I){I===!0?c.vertexAttribIPointer(A,O,P,W,X):c.vertexAttribPointer(A,O,P,H,W,X)}function N(A,O,P,H){M();const W=H.attributes,X=P.getAttributes(),I=O.defaultAttributeValues;for(const k in X){const Z=X[k];if(Z.location>=0){let it=W[k];if(it===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),it!==void 0){const lt=it.normalized,V=it.itemSize,tt=e.get(it);if(tt===void 0)continue;const ht=tt.buffer,pt=tt.type,bt=tt.bytesPerElement,Q=pt===c.INT||pt===c.UNSIGNED_INT||it.gpuType===vh;if(it.isInterleavedBufferAttribute){const nt=it.data,yt=nt.stride,Nt=it.offset;if(nt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<Z.locationSize;Ot++)b(Z.location+Ot,nt.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ot=0;Ot<Z.locationSize;Ot++)y(Z.location+Ot);c.bindBuffer(c.ARRAY_BUFFER,ht);for(let Ot=0;Ot<Z.locationSize;Ot++)U(Z.location+Ot,V/Z.locationSize,pt,lt,yt*bt,(Nt+V/Z.locationSize*Ot)*bt,Q)}else{if(it.isInstancedBufferAttribute){for(let nt=0;nt<Z.locationSize;nt++)b(Z.location+nt,it.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let nt=0;nt<Z.locationSize;nt++)y(Z.location+nt);c.bindBuffer(c.ARRAY_BUFFER,ht);for(let nt=0;nt<Z.locationSize;nt++)U(Z.location+nt,V/Z.locationSize,pt,lt,V*bt,V/Z.locationSize*nt*bt,Q)}}else if(I!==void 0){const lt=I[k];if(lt!==void 0)switch(lt.length){case 2:c.vertexAttrib2fv(Z.location,lt);break;case 3:c.vertexAttrib3fv(Z.location,lt);break;case 4:c.vertexAttrib4fv(Z.location,lt);break;default:c.vertexAttrib1fv(Z.location,lt)}}}}D()}function E(){L();for(const A in r){const O=r[A];for(const P in O){const H=O[P];for(const W in H)x(H[W].object),delete H[W];delete O[P]}delete r[A]}}function T(A){if(r[A.id]===void 0)return;const O=r[A.id];for(const P in O){const H=O[P];for(const W in H)x(H[W].object),delete H[W];delete O[P]}delete r[A.id]}function w(A){for(const O in r){const P=r[O];if(P[A.id]===void 0)continue;const H=P[A.id];for(const W in H)x(H[W].object),delete H[W];delete P[A.id]}}function L(){R(),f=!0,s!==l&&(s=l,p(s.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:L,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:y,disableUnusedAttributes:D}}function S3(c,e,i){let r;function l(p){r=p}function s(p,x){c.drawArrays(r,p,x),i.update(x,r,1)}function f(p,x,_){_!==0&&(c.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function u(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let d=0;for(let S=0;S<_;S++)d+=x[S];i.update(d,r,1)}function h(p,x,_,g){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let S=0;S<p.length;S++)f(p[S],x[S],g[S]);else{d.multiDrawArraysInstancedWEBGL(r,p,0,x,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=x[M]*g[M];i.update(S,r,1)}}this.setMode=l,this.render=s,this.renderInstances=f,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function y3(c,e,i,r){let l;function s(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");l=c.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(w){return!(w!==bi&&r.convert(w)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(w){const L=w===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==fa&&r.convert(w)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==la&&!L)}function h(w){if(w==="highp"){if(c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=h(p);x!==p&&(de("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),S=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=c.getParameter(c.MAX_TEXTURE_SIZE),y=c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),b=c.getParameter(c.MAX_VERTEX_ATTRIBS),D=c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),U=c.getParameter(c.MAX_VARYING_VECTORS),N=c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),E=S>0,T=c.getParameter(c.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:f,textureTypeReadable:u,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:d,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:N,vertexTextures:E,maxSamples:T}}function M3(c){const e=this;let i=null,r=0,l=!1,s=!1;const f=new Sr,u=new me,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const d=_.length!==0||g||r!==0||l;return l=g,r=_.length,d},this.beginShadows=function(){s=!0,x(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(_,g){i=x(_,g,0)},this.setState=function(_,g,d){const S=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,b=c.get(_);if(!l||S===null||S.length===0||s&&!y)s?x(null):p();else{const D=s?0:r,U=D*4;let N=b.clippingState||null;h.value=N,N=x(S,g,U,d);for(let E=0;E!==U;++E)N[E]=i[E];b.clippingState=N,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==i&&(h.value=i,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,g,d,S){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=h.value,S!==!0||y===null){const b=d+M*4,D=g.matrixWorldInverse;u.getNormalMatrix(D),(y===null||y.length<b)&&(y=new Float32Array(b));for(let U=0,N=d;U!==M;++U,N+=4)f.copy(_[U]).applyMatrix4(D,u),f.normal.toArray(y,N),y[N+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function b3(c){let e=new WeakMap;function i(f,u){return u===Pd?f.mapping=Ms:u===Bd&&(f.mapping=bs),f}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Pd||u===Bd)if(e.has(f)){const h=e.get(f).texture;return i(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new Ty(h.height);return p.fromEquirectangularTexture(c,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const u=f.target;u.removeEventListener("dispose",l);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}const qa=4,Wx=[.125,.215,.35,.446,.526,.582],Mr=20,E3=256,wo=new Hg,qx=new Be;let Sd=null,yd=0,Md=0,bd=!1;const T3=new mt;class Yx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,s={}){const{size:f=256,position:u=T3}=s;Sd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,l,h,u),i>0&&this._blur(h,0,0,i),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,yd,Md),this._renderer.xr.enabled=bd,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:As,format:bi,colorSpace:Es,depthBuffer:!1},l=Zx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zx(e,i,r);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A3(s)),this._blurMaterial=C3(s,e,i),this._ggxMaterial=R3(s,e,i)}return l}_compileMaterial(e){const i=new ja(new Li,e);this._renderer.compile(i,wo)}_sceneToCubeUV(e,i,r,l,s){const h=new yi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,d=_.toneMapping;_.getClearColor(qx),_.toneMapping=Ya,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ja(new Ho,new Dg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let b=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,b=!0):(y.color.copy(qx),b=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(h.up.set(0,p[U],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+x[U],s.y,s.z)):N===1?(h.up.set(0,0,p[U]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+x[U],s.z)):(h.up.set(0,p[U],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+x[U]));const E=this._cubeSize;vs(l,N*E,U>2?E:0,E,E),_.setRenderTarget(l),b&&_.render(M,h),_.render(e,h)}_.toneMapping=d,_.autoClear=g,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jx());const s=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=s;const u=s.uniforms;u.envMap.value=e;const h=this._cubeSize;vs(i,0,0,3*h,2*h),r.setRenderTarget(i),r.render(f,wo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let s=1;s<l;s++)this._applyGGXFilter(e,s-1,s);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,s=this._pingPongRenderTarget,f=this._ggxMaterial,u=this._lodMeshes[r];u.material=f;const h=f.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),g=.05+p*.95,d=_*g,{_lodMax:S}=this,M=this._sizeLods[r],y=3*M*(r>S-qa?r-S+qa:0),b=4*(this._cubeSize-M);h.envMap.value=e.texture,h.roughness.value=d,h.mipInt.value=S-i,vs(s,y,b,3*M,2*M),l.setRenderTarget(s),l.render(u,wo),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=S-r,vs(e,y,b,3*M,2*M),l.setRenderTarget(e),l.render(u,wo)}_blur(e,i,r,l,s){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",s),this._halfBlur(f,e,r,r,l,"longitudinal",s)}_halfBlur(e,i,r,l,s,f,u){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&an("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=p;const g=p.uniforms,d=this._sizeLods[r]-1,S=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Mr-1),M=s/S,y=isFinite(s)?1+Math.floor(x*M):Mr;y>Mr&&de(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const b=[];let D=0;for(let w=0;w<Mr;++w){const L=w/M,R=Math.exp(-L*L/2);b.push(R),w===0?D+=R:w<y&&(D+=2*R)}for(let w=0;w<b.length;w++)b[w]=b[w]/D;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=b,g.latitudinal.value=f==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:U}=this;g.dTheta.value=S,g.mipInt.value=U-r;const N=this._sizeLods[l],E=3*N*(l>U-qa?l-U+qa:0),T=4*(this._cubeSize-N);vs(i,E,T,3*N,2*N),h.setRenderTarget(i),h.render(_,wo)}}function A3(c){const e=[],i=[],r=[];let l=c;const s=c-qa+1+Wx.length;for(let f=0;f<s;f++){const u=Math.pow(2,l);e.push(u);let h=1/u;f>c-qa?h=Wx[f-c+qa-1]:f===0&&(h=0),i.push(h);const p=1/(u-2),x=-p,_=1+p,g=[x,x,_,x,_,_,x,x,_,_,x,_],d=6,S=6,M=3,y=2,b=1,D=new Float32Array(M*S*d),U=new Float32Array(y*S*d),N=new Float32Array(b*S*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,L=T>2?0:-1,R=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];D.set(R,M*S*T),U.set(g,y*S*T);const A=[T,T,T,T,T,T];N.set(A,b*S*T)}const E=new Li;E.setAttribute("position",new Ei(D,M)),E.setAttribute("uv",new Ei(U,y)),E.setAttribute("faceIndex",new Ei(N,b)),r.push(new ja(E,null)),l>qa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Zx(c,e,i){const r=new Ar(c,e,i);return r.texture.mapping=Uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vs(c,e,i,r,l){c.viewport.set(e,i,r,l),c.scissor.set(e,i,r,l)}function R3(c,e,i){return new ha({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function C3(c,e,i){const r=new Float32Array(Mr),l=new mt(0,1,0);return new ha({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function jx(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Kx(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function w3(c){let e=new WeakMap,i=null;function r(u){if(u&&u.isTexture){const h=u.mapping,p=h===Pd||h===Bd,x=h===Ms||h===bs;if(p||x){let _=e.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Yx(c)),_=p?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const d=u.image;return p&&d&&d.height>0||x&&d&&l(d)?(i===null&&(i=new Yx(c)),_=p?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",s),_.texture):null}}}return u}function l(u){let h=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&h++;return h===p}function s(u){const h=u.target;h.removeEventListener("dispose",s);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function D3(c){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=c.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Po("WebGLRenderer: "+r+" extension not supported."),l}}}function U3(c,e,i,r){const l={},s=new WeakMap;function f(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",f),delete l[g.id];const d=s.get(g);d&&(e.remove(d),s.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function u(_,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function h(_){const g=_.attributes;for(const d in g)e.update(g[d],c.ARRAY_BUFFER)}function p(_){const g=[],d=_.index,S=_.attributes.position;let M=0;if(d!==null){const D=d.array;M=d.version;for(let U=0,N=D.length;U<N;U+=3){const E=D[U+0],T=D[U+1],w=D[U+2];g.push(E,T,T,w,w,E)}}else if(S!==void 0){const D=S.array;M=S.version;for(let U=0,N=D.length/3-1;U<N;U+=3){const E=U+0,T=U+1,w=U+2;g.push(E,T,T,w,w,E)}}else return;const y=new(Tg(g)?Lg:Ug)(g,1);y.version=M;const b=s.get(_);b&&e.remove(b),s.set(_,y)}function x(_){const g=s.get(_);if(g){const d=_.index;d!==null&&g.version<d.version&&p(_)}else p(_);return s.get(_)}return{get:u,update:h,getWireframeAttribute:x}}function L3(c,e,i){let r;function l(g){r=g}let s,f;function u(g){s=g.type,f=g.bytesPerElement}function h(g,d){c.drawElements(r,d,s,g*f),i.update(d,r,1)}function p(g,d,S){S!==0&&(c.drawElementsInstanced(r,d,s,g*f,S),i.update(d,r,S))}function x(g,d,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,s,g,0,S);let y=0;for(let b=0;b<S;b++)y+=d[b];i.update(y,r,1)}function _(g,d,S,M){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<g.length;b++)p(g[b]/f,d[b],M[b]);else{y.multiDrawElementsInstancedWEBGL(r,d,0,s,g,0,M,0,S);let b=0;for(let D=0;D<S;D++)b+=d[D]*M[D];i.update(b,r,1)}}this.setMode=l,this.setIndex=u,this.render=h,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function N3(c){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,f,u){switch(i.calls++,f){case c.TRIANGLES:i.triangles+=u*(s/3);break;case c.LINES:i.lines+=u*(s/2);break;case c.LINE_STRIP:i.lines+=u*(s-1);break;case c.LINE_LOOP:i.lines+=u*s;break;case c.POINTS:i.points+=u*s;break;default:an("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function O3(c,e,i){const r=new WeakMap,l=new rn;function s(f,u,h){const p=f.morphTargetInfluences,x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=x!==void 0?x.length:0;let g=r.get(u);if(g===void 0||g.count!==_){let A=function(){L.dispose(),r.delete(u),u.removeEventListener("dispose",A)};var d=A;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let N=0;S===!0&&(N=1),M===!0&&(N=2),y===!0&&(N=3);let E=u.attributes.position.count*N,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*T*4*_),L=new Ag(w,E,T,_);L.type=la,L.needsUpdate=!0;const R=N*4;for(let O=0;O<_;O++){const P=b[O],H=D[O],W=U[O],X=E*T*4*O;for(let I=0;I<P.count;I++){const k=I*R;S===!0&&(l.fromBufferAttribute(P,I),w[X+k+0]=l.x,w[X+k+1]=l.y,w[X+k+2]=l.z,w[X+k+3]=0),M===!0&&(l.fromBufferAttribute(H,I),w[X+k+4]=l.x,w[X+k+5]=l.y,w[X+k+6]=l.z,w[X+k+7]=0),y===!0&&(l.fromBufferAttribute(W,I),w[X+k+8]=l.x,w[X+k+9]=l.y,w[X+k+10]=l.z,w[X+k+11]=W.itemSize===4?l.w:1)}}g={count:_,texture:L,size:new Xe(E,T)},r.set(u,g),u.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)h.getUniforms().setValue(c,"morphTexture",f.morphTexture,i);else{let S=0;for(let y=0;y<p.length;y++)S+=p[y];const M=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(c,"morphTargetBaseInfluence",M),h.getUniforms().setValue(c,"morphTargetInfluences",p)}h.getUniforms().setValue(c,"morphTargetsTexture",g.texture,i),h.getUniforms().setValue(c,"morphTargetsTextureSize",g.size)}return{update:s}}function P3(c,e,i,r){let l=new WeakMap;function s(h){const p=r.render.frame,x=h.geometry,_=e.get(h,x);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),l.get(h)!==p&&(i.update(h.instanceMatrix,c.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,c.ARRAY_BUFFER),l.set(h,p))),h.isSkinnedMesh){const g=h.skeleton;l.get(g)!==p&&(g.update(),l.set(g,p))}return _}function f(){l=new WeakMap}function u(h){const p=h.target;p.removeEventListener("dispose",u),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:s,dispose:f}}const Gg=new On,Qx=new Fg(1,1),kg=new Ag,Xg=new ly,Wg=new Pg,Jx=[],$x=[],tg=new Float32Array(16),eg=new Float32Array(9),ng=new Float32Array(4);function Cs(c,e,i){const r=c[0];if(r<=0||r>0)return c;const l=e*i;let s=Jx[l];if(s===void 0&&(s=new Float32Array(l),Jx[l]=s),e!==0){r.toArray(s,0);for(let f=1,u=0;f!==e;++f)u+=i,c[f].toArray(s,u)}return s}function xn(c,e){if(c.length!==e.length)return!1;for(let i=0,r=c.length;i<r;i++)if(c[i]!==e[i])return!1;return!0}function gn(c,e){for(let i=0,r=e.length;i<r;i++)c[i]=e[i]}function Pc(c,e){let i=$x[e];i===void 0&&(i=new Int32Array(e),$x[e]=i);for(let r=0;r!==e;++r)i[r]=c.allocateTextureUnit();return i}function B3(c,e){const i=this.cache;i[0]!==e&&(c.uniform1f(this.addr,e),i[0]=e)}function z3(c,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;c.uniform2fv(this.addr,e),gn(i,e)}}function F3(c,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;c.uniform3fv(this.addr,e),gn(i,e)}}function I3(c,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;c.uniform4fv(this.addr,e),gn(i,e)}}function H3(c,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;c.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(xn(i,r))return;ng.set(r),c.uniformMatrix2fv(this.addr,!1,ng),gn(i,r)}}function V3(c,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;c.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(xn(i,r))return;eg.set(r),c.uniformMatrix3fv(this.addr,!1,eg),gn(i,r)}}function G3(c,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;c.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(xn(i,r))return;tg.set(r),c.uniformMatrix4fv(this.addr,!1,tg),gn(i,r)}}function k3(c,e){const i=this.cache;i[0]!==e&&(c.uniform1i(this.addr,e),i[0]=e)}function X3(c,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(c.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;c.uniform2iv(this.addr,e),gn(i,e)}}function W3(c,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(c.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;c.uniform3iv(this.addr,e),gn(i,e)}}function q3(c,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(c.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;c.uniform4iv(this.addr,e),gn(i,e)}}function Y3(c,e){const i=this.cache;i[0]!==e&&(c.uniform1ui(this.addr,e),i[0]=e)}function Z3(c,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(c.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;c.uniform2uiv(this.addr,e),gn(i,e)}}function j3(c,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(c.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;c.uniform3uiv(this.addr,e),gn(i,e)}}function K3(c,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(c.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;c.uniform4uiv(this.addr,e),gn(i,e)}}function Q3(c,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(c.uniform1i(this.addr,l),r[0]=l);let s;this.type===c.SAMPLER_2D_SHADOW?(Qx.compareFunction=Eg,s=Qx):s=Gg,i.setTexture2D(e||s,l)}function J3(c,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(c.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Xg,l)}function $3(c,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(c.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Wg,l)}function tb(c,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(c.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||kg,l)}function eb(c){switch(c){case 5126:return B3;case 35664:return z3;case 35665:return F3;case 35666:return I3;case 35674:return H3;case 35675:return V3;case 35676:return G3;case 5124:case 35670:return k3;case 35667:case 35671:return X3;case 35668:case 35672:return W3;case 35669:case 35673:return q3;case 5125:return Y3;case 36294:return Z3;case 36295:return j3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return J3;case 35680:case 36300:case 36308:case 36293:return $3;case 36289:case 36303:case 36311:case 36292:return tb}}function nb(c,e){c.uniform1fv(this.addr,e)}function ib(c,e){const i=Cs(e,this.size,2);c.uniform2fv(this.addr,i)}function ab(c,e){const i=Cs(e,this.size,3);c.uniform3fv(this.addr,i)}function rb(c,e){const i=Cs(e,this.size,4);c.uniform4fv(this.addr,i)}function sb(c,e){const i=Cs(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,i)}function ob(c,e){const i=Cs(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,i)}function lb(c,e){const i=Cs(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,i)}function cb(c,e){c.uniform1iv(this.addr,e)}function ub(c,e){c.uniform2iv(this.addr,e)}function fb(c,e){c.uniform3iv(this.addr,e)}function db(c,e){c.uniform4iv(this.addr,e)}function hb(c,e){c.uniform1uiv(this.addr,e)}function pb(c,e){c.uniform2uiv(this.addr,e)}function mb(c,e){c.uniform3uiv(this.addr,e)}function xb(c,e){c.uniform4uiv(this.addr,e)}function gb(c,e,i){const r=this.cache,l=e.length,s=Pc(i,l);xn(r,s)||(c.uniform1iv(this.addr,s),gn(r,s));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||Gg,s[f])}function vb(c,e,i){const r=this.cache,l=e.length,s=Pc(i,l);xn(r,s)||(c.uniform1iv(this.addr,s),gn(r,s));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Xg,s[f])}function _b(c,e,i){const r=this.cache,l=e.length,s=Pc(i,l);xn(r,s)||(c.uniform1iv(this.addr,s),gn(r,s));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Wg,s[f])}function Sb(c,e,i){const r=this.cache,l=e.length,s=Pc(i,l);xn(r,s)||(c.uniform1iv(this.addr,s),gn(r,s));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||kg,s[f])}function yb(c){switch(c){case 5126:return nb;case 35664:return ib;case 35665:return ab;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return db;case 5125:return hb;case 36294:return pb;case 36295:return mb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return Sb}}class Mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=eb(i.type)}}class bb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yb(i.type)}}class Eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let s=0,f=l.length;s!==f;++s){const u=l[s];u.setValue(e,i[u.id],r)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function ig(c,e){c.seq.push(e),c.map[e.id]=e}function Tb(c,e,i){const r=c.name,l=r.length;for(Ed.lastIndex=0;;){const s=Ed.exec(r),f=Ed.lastIndex;let u=s[1];const h=s[2]==="]",p=s[3];if(h&&(u=u|0),p===void 0||p==="["&&f+2===l){ig(i,p===void 0?new Mb(u,c,e):new bb(u,c,e));break}else{let _=i.map[u];_===void 0&&(_=new Eb(u),ig(i,_)),i=_}}}class Ac{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const s=e.getActiveUniform(i,l),f=e.getUniformLocation(i,s.name);Tb(s,f,this)}}setValue(e,i,r,l){const s=this.map[i];s!==void 0&&s.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let s=0,f=i.length;s!==f;++s){const u=i[s],h=r[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,s=e.length;l!==s;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function ag(c,e,i){const r=c.createShader(e);return c.shaderSource(r,i),c.compileShader(r),r}const Ab=37297;let Rb=0;function Cb(c,e){const i=c.split(`
`),r=[],l=Math.max(e-6,0),s=Math.min(e+6,i.length);for(let f=l;f<s;f++){const u=f+1;r.push(`${u===e?">":" "} ${u}: ${i[f]}`)}return r.join(`
`)}const rg=new me;function wb(c){Le._getMatrix(rg,Le.workingColorSpace,c);const e=`mat3( ${rg.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(c)){case Rc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",c),[e,"LinearTransferOETF"]}}function sg(c,e,i){const r=c.getShaderParameter(e,c.COMPILE_STATUS),s=(c.getShaderInfoLog(e)||"").trim();if(r&&s==="")return"";const f=/ERROR: 0:(\d+)/.exec(s);if(f){const u=parseInt(f[1]);return i.toUpperCase()+`

`+s+`

`+Cb(c.getShaderSource(e),u)}else return s}function Db(c,e){const i=wb(e);return[`vec4 ${c}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Ub(c,e){let i;switch(e){case PS:i="Linear";break;case BS:i="Reinhard";break;case zS:i="Cineon";break;case FS:i="ACESFilmic";break;case HS:i="AgX";break;case VS:i="Neutral";break;case IS:i="Custom";break;default:de("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+c+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new mt;function Lb(){Le.getLuminanceCoefficients(Sc);const c=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${c}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nb(c){return[c.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",c.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function Ob(c){const e=[];for(const i in c){const r=c[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Pb(c,e){const i={},r=c.getProgramParameter(e,c.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const s=c.getActiveAttrib(e,l),f=s.name;let u=1;s.type===c.FLOAT_MAT2&&(u=2),s.type===c.FLOAT_MAT3&&(u=3),s.type===c.FLOAT_MAT4&&(u=4),i[f]={type:s.type,location:c.getAttribLocation(e,f),locationSize:u}}return i}function Do(c){return c!==""}function og(c,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(c){return c.replace(Bb,Fb)}const zb=new Map;function Fb(c,e){let i=xe[e];if(i===void 0){const r=zb.get(e);if(r!==void 0)i=xe[r],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return mh(i)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(c){return c.replace(Ib,Hb)}function Hb(c,e,i,r){let l="";for(let s=parseInt(e);s<parseInt(i);s++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return l}function ug(c){let e=`precision ${c.precision} float;
	precision ${c.precision} int;
	precision ${c.precision} sampler2D;
	precision ${c.precision} samplerCube;
	precision ${c.precision} sampler3D;
	precision ${c.precision} sampler2DArray;
	precision ${c.precision} sampler2DShadow;
	precision ${c.precision} samplerCubeShadow;
	precision ${c.precision} sampler2DArrayShadow;
	precision ${c.precision} isampler2D;
	precision ${c.precision} isampler3D;
	precision ${c.precision} isamplerCube;
	precision ${c.precision} isampler2DArray;
	precision ${c.precision} usampler2D;
	precision ${c.precision} usampler3D;
	precision ${c.precision} usamplerCube;
	precision ${c.precision} usampler2DArray;
	`;return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vb(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===pS?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===ra&&(e="SHADOWMAP_TYPE_VSM"),e}function Gb(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Ms:case bs:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kb(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function Xb(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case mg:e="ENVMAP_BLENDING_MULTIPLY";break;case NS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function Wb(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function qb(c,e,i,r){const l=c.getContext(),s=i.defines;let f=i.vertexShader,u=i.fragmentShader;const h=Vb(i),p=Gb(i),x=kb(i),_=Xb(i),g=Wb(i),d=Nb(i),S=Ob(s),M=l.createProgram();let y,b,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Do).join(`
`),y.length>0&&(y+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Do).join(`
`),b.length>0&&(b+=`
`)):(y=[ug(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),b=[ug(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?xe.tonemapping_pars_fragment:"",i.toneMapping!==Ya?Ub("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,Db("linearToOutputTexel",i.outputColorSpace),Lb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),f=mh(f),f=og(f,i),f=lg(f,i),u=mh(u),u=og(u,i),u=lg(u,i),f=cg(f),u=cg(u),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,b=["#define varying in",i.glslVersion===bx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const U=D+y+f,N=D+b+u,E=ag(l,l.VERTEX_SHADER,U),T=ag(l,l.FRAGMENT_SHADER,N);l.attachShader(M,E),l.attachShader(M,T),i.index0AttributeName!==void 0?l.bindAttribLocation(M,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(M,0,"position"),l.linkProgram(M);function w(O){if(c.debug.checkShaderErrors){const P=l.getProgramInfoLog(M)||"",H=l.getShaderInfoLog(E)||"",W=l.getShaderInfoLog(T)||"",X=P.trim(),I=H.trim(),k=W.trim();let Z=!0,it=!0;if(l.getProgramParameter(M,l.LINK_STATUS)===!1)if(Z=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(l,M,E,T);else{const lt=sg(l,E,"vertex"),V=sg(l,T,"fragment");an("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(M,l.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+X+`
`+lt+`
`+V)}else X!==""?de("WebGLProgram: Program Info Log:",X):(I===""||k==="")&&(it=!1);it&&(O.diagnostics={runnable:Z,programLog:X,vertexShader:{log:I,prefix:y},fragmentShader:{log:k,prefix:b}})}l.deleteShader(E),l.deleteShader(T),L=new Ac(l,M),R=Pb(l,M)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let R;this.getAttributes=function(){return R===void 0&&w(this),R};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(M,Ab)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(M),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=T,this}let Yb=0;class Zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),s=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(s)===!1&&(f.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new jb(e),i.set(e,r)),r}}class jb{constructor(e){this.id=Yb++,this.code=e,this.usedTimes=0}}function Kb(c,e,i,r,l,s,f){const u=new Cg,h=new Zb,p=new Set,x=[],_=l.logarithmicDepthBuffer,g=l.vertexTextures;let d=l.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,A,O,P,H){const W=P.fog,X=H.geometry,I=R.isMeshStandardMaterial?P.environment:null,k=(R.isMeshStandardMaterial?i:e).get(R.envMap||I),Z=k&&k.mapping===Uc?k.image.height:null,it=S[R.type];R.precision!==null&&(d=l.getMaxPrecision(R.precision),d!==R.precision&&de("WebGLProgram.getParameters:",R.precision,"not supported, using",d,"instead."));const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,V=lt!==void 0?lt.length:0;let tt=0;X.morphAttributes.position!==void 0&&(tt=1),X.morphAttributes.normal!==void 0&&(tt=2),X.morphAttributes.color!==void 0&&(tt=3);let ht,pt,bt,Q;if(it){const Ce=Di[it];ht=Ce.vertexShader,pt=Ce.fragmentShader}else ht=R.vertexShader,pt=R.fragmentShader,h.update(R),bt=h.getVertexShaderID(R),Q=h.getFragmentShaderID(R);const nt=c.getRenderTarget(),yt=c.state.buffers.depth.getReversed(),Nt=H.isInstancedMesh===!0,Ot=H.isBatchedMesh===!0,Xt=!!R.map,ce=!!R.matcap,Zt=!!k,ne=!!R.aoMap,q=!!R.lightMap,Vt=!!R.bumpMap,le=!!R.normalMap,ge=!!R.displacementMap,Pt=!!R.emissiveMap,Re=!!R.metalnessMap,Wt=!!R.roughnessMap,ae=R.anisotropy>0,G=R.clearcoat>0,B=R.dispersion>0,at=R.iridescence>0,gt=R.sheen>0,Mt=R.transmission>0,dt=ae&&!!R.anisotropyMap,qt=G&&!!R.clearcoatMap,Dt=G&&!!R.clearcoatNormalMap,$t=G&&!!R.clearcoatRoughnessMap,jt=at&&!!R.iridescenceMap,Et=at&&!!R.iridescenceThicknessMap,At=gt&&!!R.sheenColorMap,Kt=gt&&!!R.sheenRoughnessMap,kt=!!R.specularMap,zt=!!R.specularColorMap,se=!!R.specularIntensityMap,j=Mt&&!!R.transmissionMap,Ut=Mt&&!!R.thicknessMap,Ct=!!R.gradientMap,wt=!!R.alphaMap,Tt=R.alphaTest>0,St=!!R.alphaHash,It=!!R.extensions;let oe=Ya;R.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(oe=c.toneMapping);const Ie={shaderID:it,shaderType:R.type,shaderName:R.name,vertexShader:ht,fragmentShader:pt,defines:R.defines,customVertexShaderID:bt,customFragmentShaderID:Q,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:d,batching:Ot,batchingColor:Ot&&H._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&H.instanceColor!==null,instancingMorph:Nt&&H.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:nt===null?c.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Es,alphaToCoverage:!!R.alphaToCoverage,map:Xt,matcap:ce,envMap:Zt,envMapMode:Zt&&k.mapping,envMapCubeUVHeight:Z,aoMap:ne,lightMap:q,bumpMap:Vt,normalMap:le,displacementMap:g&&ge,emissiveMap:Pt,normalMapObjectSpace:le&&R.normalMapType===qS,normalMapTangentSpace:le&&R.normalMapType===WS,metalnessMap:Re,roughnessMap:Wt,anisotropy:ae,anisotropyMap:dt,clearcoat:G,clearcoatMap:qt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:$t,dispersion:B,iridescence:at,iridescenceMap:jt,iridescenceThicknessMap:Et,sheen:gt,sheenColorMap:At,sheenRoughnessMap:Kt,specularMap:kt,specularColorMap:zt,specularIntensityMap:se,transmission:Mt,transmissionMap:j,thicknessMap:Ut,gradientMap:Ct,opaque:R.transparent===!1&&R.blending===_s&&R.alphaToCoverage===!1,alphaMap:wt,alphaTest:Tt,alphaHash:St,combine:R.combine,mapUv:Xt&&M(R.map.channel),aoMapUv:ne&&M(R.aoMap.channel),lightMapUv:q&&M(R.lightMap.channel),bumpMapUv:Vt&&M(R.bumpMap.channel),normalMapUv:le&&M(R.normalMap.channel),displacementMapUv:ge&&M(R.displacementMap.channel),emissiveMapUv:Pt&&M(R.emissiveMap.channel),metalnessMapUv:Re&&M(R.metalnessMap.channel),roughnessMapUv:Wt&&M(R.roughnessMap.channel),anisotropyMapUv:dt&&M(R.anisotropyMap.channel),clearcoatMapUv:qt&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:At&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&M(R.sheenRoughnessMap.channel),specularMapUv:kt&&M(R.specularMap.channel),specularColorMapUv:zt&&M(R.specularColorMap.channel),specularIntensityMapUv:se&&M(R.specularIntensityMap.channel),transmissionMapUv:j&&M(R.transmissionMap.channel),thicknessMapUv:Ut&&M(R.thicknessMap.channel),alphaMapUv:wt&&M(R.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(le||ae),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Xt||wt),fog:!!W,useFog:R.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:yt,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:c.shadowMap.enabled&&O.length>0,shadowMapType:c.shadowMap.type,toneMapping:oe,decodeVideoTexture:Xt&&R.map.isVideoTexture===!0&&Le.getTransfer(R.map.colorSpace)===ke,decodeVideoTextureEmissive:Pt&&R.emissiveMap.isVideoTexture===!0&&Le.getTransfer(R.emissiveMap.colorSpace)===ke,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===sa,flipSided:R.side===kn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:It&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&R.extensions.multiDraw===!0||Ot)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function b(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const O in R.defines)A.push(O),A.push(R.defines[O]);return R.isRawShaderMaterial===!1&&(D(A,R),U(A,R),A.push(c.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function D(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function U(R,A){u.disableAll(),A.supportsVertexTextures&&u.enable(0),A.instancing&&u.enable(1),A.instancingColor&&u.enable(2),A.instancingMorph&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),A.alphaHash&&u.enable(18),A.batching&&u.enable(19),A.dispersion&&u.enable(20),A.batchingColor&&u.enable(21),A.gradientMap&&u.enable(22),R.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reversedDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),R.push(u.mask)}function N(R){const A=S[R.type];let O;if(A){const P=Di[A];O=yy.clone(P.uniforms)}else O=R.uniforms;return O}function E(R,A){let O;for(let P=0,H=x.length;P<H;P++){const W=x[P];if(W.cacheKey===A){O=W,++O.usedTimes;break}}return O===void 0&&(O=new qb(c,A,R,s),x.push(O)),O}function T(R){if(--R.usedTimes===0){const A=x.indexOf(R);x[A]=x[x.length-1],x.pop(),R.destroy()}}function w(R){h.remove(R)}function L(){h.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:N,acquireProgram:E,releaseProgram:T,releaseShaderCache:w,programs:x,dispose:L}}function Qb(){let c=new WeakMap;function e(f){return c.has(f)}function i(f){let u=c.get(f);return u===void 0&&(u={},c.set(f,u)),u}function r(f){c.delete(f)}function l(f,u,h){c.get(f)[u]=h}function s(){c=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:s}}function Jb(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function fg(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function dg(){const c=[];let e=0;const i=[],r=[],l=[];function s(){e=0,i.length=0,r.length=0,l.length=0}function f(_,g,d,S,M,y){let b=c[e];return b===void 0?(b={id:_.id,object:_,geometry:g,material:d,groupOrder:S,renderOrder:_.renderOrder,z:M,group:y},c[e]=b):(b.id=_.id,b.object=_,b.geometry=g,b.material=d,b.groupOrder=S,b.renderOrder=_.renderOrder,b.z=M,b.group=y),e++,b}function u(_,g,d,S,M,y){const b=f(_,g,d,S,M,y);d.transmission>0?r.push(b):d.transparent===!0?l.push(b):i.push(b)}function h(_,g,d,S,M,y){const b=f(_,g,d,S,M,y);d.transmission>0?r.unshift(b):d.transparent===!0?l.unshift(b):i.unshift(b)}function p(_,g){i.length>1&&i.sort(_||Jb),r.length>1&&r.sort(g||fg),l.length>1&&l.sort(g||fg)}function x(){for(let _=e,g=c.length;_<g;_++){const d=c[_];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:i,transmissive:r,transparent:l,init:s,push:u,unshift:h,finish:x,sort:p}}function $b(){let c=new WeakMap;function e(r,l){const s=c.get(r);let f;return s===void 0?(f=new dg,c.set(r,[f])):l>=s.length?(f=new dg,s.push(f)):f=s[l],f}function i(){c=new WeakMap}return{get:e,dispose:i}}function tE(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new mt,color:new Be};break;case"SpotLight":i={position:new mt,direction:new mt,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new mt,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new mt,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new mt,halfWidth:new mt,halfHeight:new mt};break}return c[e.id]=i,i}}}function eE(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=i,i}}}let nE=0;function iE(c,e){return(e.castShadow?2:0)-(c.castShadow?2:0)+(e.map?1:0)-(c.map?1:0)}function aE(c){const e=new tE,i=eE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new mt);const l=new mt,s=new dn,f=new dn;function u(p){let x=0,_=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let d=0,S=0,M=0,y=0,b=0,D=0,U=0,N=0,E=0,T=0,w=0;p.sort(iE);for(let R=0,A=p.length;R<A;R++){const O=p[R],P=O.color,H=O.intensity,W=O.distance,X=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)x+=P.r*H,_+=P.g*H,g+=P.b*H;else if(O.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(O.sh.coefficients[I],H);w++}else if(O.isDirectionalLight){const I=e.get(O);if(I.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const k=O.shadow,Z=i.get(O);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.directionalShadow[d]=Z,r.directionalShadowMap[d]=X,r.directionalShadowMatrix[d]=O.shadow.matrix,D++}r.directional[d]=I,d++}else if(O.isSpotLight){const I=e.get(O);I.position.setFromMatrixPosition(O.matrixWorld),I.color.copy(P).multiplyScalar(H),I.distance=W,I.coneCos=Math.cos(O.angle),I.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),I.decay=O.decay,r.spot[M]=I;const k=O.shadow;if(O.map&&(r.spotLightMap[E]=O.map,E++,k.updateMatrices(O),O.castShadow&&T++),r.spotLightMatrix[M]=k.matrix,O.castShadow){const Z=i.get(O);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.spotShadow[M]=Z,r.spotShadowMap[M]=X,N++}M++}else if(O.isRectAreaLight){const I=e.get(O);I.color.copy(P).multiplyScalar(H),I.halfWidth.set(O.width*.5,0,0),I.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=I,y++}else if(O.isPointLight){const I=e.get(O);if(I.color.copy(O.color).multiplyScalar(O.intensity),I.distance=O.distance,I.decay=O.decay,O.castShadow){const k=O.shadow,Z=i.get(O);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,r.pointShadow[S]=Z,r.pointShadowMap[S]=X,r.pointShadowMatrix[S]=O.shadow.matrix,U++}r.point[S]=I,S++}else if(O.isHemisphereLight){const I=e.get(O);I.skyColor.copy(O.color).multiplyScalar(H),I.groundColor.copy(O.groundColor).multiplyScalar(H),r.hemi[b]=I,b++}}y>0&&(c.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=g;const L=r.hash;(L.directionalLength!==d||L.pointLength!==S||L.spotLength!==M||L.rectAreaLength!==y||L.hemiLength!==b||L.numDirectionalShadows!==D||L.numPointShadows!==U||L.numSpotShadows!==N||L.numSpotMaps!==E||L.numLightProbes!==w)&&(r.directional.length=d,r.spot.length=M,r.rectArea.length=y,r.point.length=S,r.hemi.length=b,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=N+E-T,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=w,L.directionalLength=d,L.pointLength=S,L.spotLength=M,L.rectAreaLength=y,L.hemiLength=b,L.numDirectionalShadows=D,L.numPointShadows=U,L.numSpotShadows=N,L.numSpotMaps=E,L.numLightProbes=w,r.version=nE++)}function h(p,x){let _=0,g=0,d=0,S=0,M=0;const y=x.matrixWorldInverse;for(let b=0,D=p.length;b<D;b++){const U=p[b];if(U.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(U.isSpotLight){const N=r.spot[d];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),d++}else if(U.isRectAreaLight){const N=r.rectArea[S];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),f.identity(),s.copy(U.matrixWorld),s.premultiply(y),f.extractRotation(s),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),S++}else if(U.isPointLight){const N=r.point[g];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),g++}else if(U.isHemisphereLight){const N=r.hemi[M];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(y),M++}}}return{setup:u,setupView:h,state:r}}function hg(c){const e=new aE(c),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function s(x){i.push(x)}function f(x){r.push(x)}function u(){e.setup(i)}function h(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:u,setupLightsView:h,pushLight:s,pushShadow:f}}function rE(c){let e=new WeakMap;function i(l,s=0){const f=e.get(l);let u;return f===void 0?(u=new hg(c),e.set(l,[u])):s>=f.length?(u=new hg(c),f.push(u)):u=f[s],u}function r(){e=new WeakMap}return{get:i,dispose:r}}const sE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
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
}`;function lE(c,e,i){let r=new Bg;const l=new Xe,s=new Xe,f=new rn,u=new Ny({depthPacking:XS}),h=new Oy,p={},x=i.maxTextureSize,_={[Za]:kn,[kn]:Za,[sa]:sa},g=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:sE,fragmentShader:oE}),d=g.clone();d.defines.HORIZONTAL_PASS=1;const S=new Li;S.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ja(S,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg;let b=this.type;this.render=function(T,w,L){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||T.length===0)return;const R=c.getRenderTarget(),A=c.getActiveCubeFace(),O=c.getActiveMipmapLevel(),P=c.state;P.setBlending(ca),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const H=b!==ra&&this.type===ra,W=b===ra&&this.type!==ra;for(let X=0,I=T.length;X<I;X++){const k=T[X],Z=k.shadow;if(Z===void 0){de("WebGLShadowMap:",k,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const it=Z.getFrameExtents();if(l.multiply(it),s.copy(Z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(s.x=Math.floor(x/it.x),l.x=s.x*it.x,Z.mapSize.x=s.x),l.y>x&&(s.y=Math.floor(x/it.y),l.y=s.y*it.y,Z.mapSize.y=s.y)),Z.map===null||H===!0||W===!0){const V=this.type!==ra?{minFilter:ni,magFilter:ni}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ar(l.x,l.y,V),Z.map.texture.name=k.name+".shadowMap",Z.camera.updateProjectionMatrix()}c.setRenderTarget(Z.map),c.clear();const lt=Z.getViewportCount();for(let V=0;V<lt;V++){const tt=Z.getViewport(V);f.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),P.viewport(f),Z.updateMatrices(k,V),r=Z.getFrustum(),N(w,L,Z.camera,k,this.type)}Z.isPointLightShadow!==!0&&this.type===ra&&D(Z,L),Z.needsUpdate=!1}b=this.type,y.needsUpdate=!1,c.setRenderTarget(R,A,O)};function D(T,w){const L=e.update(M);g.defines.VSM_SAMPLES!==T.blurSamples&&(g.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,g.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ar(l.x,l.y)),g.uniforms.shadow_pass.value=T.map.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,c.setRenderTarget(T.mapPass),c.clear(),c.renderBufferDirect(w,null,L,g,M,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,c.setRenderTarget(T.map),c.clear(),c.renderBufferDirect(w,null,L,d,M,null)}function U(T,w,L,R){let A=null;const O=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)A=O;else if(A=L.isPointLight===!0?h:u,c.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const P=A.uuid,H=w.uuid;let W=p[P];W===void 0&&(W={},p[P]=W);let X=W[H];X===void 0&&(X=A.clone(),W[H]=X,w.addEventListener("dispose",E)),A=X}if(A.visible=w.visible,A.wireframe=w.wireframe,R===ra?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:_[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=c.properties.get(A);P.light=L}return A}function N(T,w,L,R,A){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===ra)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const H=e.update(T),W=T.material;if(Array.isArray(W)){const X=H.groups;for(let I=0,k=X.length;I<k;I++){const Z=X[I],it=W[Z.materialIndex];if(it&&it.visible){const lt=U(T,it,R,A);T.onBeforeShadow(c,T,w,L,H,lt,Z),c.renderBufferDirect(L,null,H,lt,T,Z),T.onAfterShadow(c,T,w,L,H,lt,Z)}}}else if(W.visible){const X=U(T,W,R,A);T.onBeforeShadow(c,T,w,L,H,X,null),c.renderBufferDirect(L,null,H,X,T,null),T.onAfterShadow(c,T,w,L,H,X,null)}}const P=T.children;for(let H=0,W=P.length;H<W;H++)N(P[H],w,L,R,A)}function E(T){T.target.removeEventListener("dispose",E);for(const L in p){const R=p[L],A=T.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const cE={[Cd]:wd,[Dd]:Nd,[Ud]:Od,[ys]:Ld,[wd]:Cd,[Nd]:Dd,[Od]:Ud,[Ld]:ys};function uE(c,e){function i(){let j=!1;const Ut=new rn;let Ct=null;const wt=new rn(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!j&&(c.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){j=Tt},setClear:function(Tt,St,It,oe,Ie){Ie===!0&&(Tt*=oe,St*=oe,It*=oe),Ut.set(Tt,St,It,oe),wt.equals(Ut)===!1&&(c.clearColor(Tt,St,It,oe),wt.copy(Ut))},reset:function(){j=!1,Ct=null,wt.set(-1,0,0,0)}}}function r(){let j=!1,Ut=!1,Ct=null,wt=null,Tt=null;return{setReversed:function(St){if(Ut!==St){const It=e.get("EXT_clip_control");St?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ut=St;const oe=Tt;Tt=null,this.setClear(oe)}},getReversed:function(){return Ut},setTest:function(St){St?nt(c.DEPTH_TEST):yt(c.DEPTH_TEST)},setMask:function(St){Ct!==St&&!j&&(c.depthMask(St),Ct=St)},setFunc:function(St){if(Ut&&(St=cE[St]),wt!==St){switch(St){case Cd:c.depthFunc(c.NEVER);break;case wd:c.depthFunc(c.ALWAYS);break;case Dd:c.depthFunc(c.LESS);break;case ys:c.depthFunc(c.LEQUAL);break;case Ud:c.depthFunc(c.EQUAL);break;case Ld:c.depthFunc(c.GEQUAL);break;case Nd:c.depthFunc(c.GREATER);break;case Od:c.depthFunc(c.NOTEQUAL);break;default:c.depthFunc(c.LEQUAL)}wt=St}},setLocked:function(St){j=St},setClear:function(St){Tt!==St&&(Ut&&(St=1-St),c.clearDepth(St),Tt=St)},reset:function(){j=!1,Ct=null,wt=null,Tt=null,Ut=!1}}}function l(){let j=!1,Ut=null,Ct=null,wt=null,Tt=null,St=null,It=null,oe=null,Ie=null;return{setTest:function(Ce){j||(Ce?nt(c.STENCIL_TEST):yt(c.STENCIL_TEST))},setMask:function(Ce){Ut!==Ce&&!j&&(c.stencilMask(Ce),Ut=Ce)},setFunc:function(Ce,Cn,Wn){(Ct!==Ce||wt!==Cn||Tt!==Wn)&&(c.stencilFunc(Ce,Cn,Wn),Ct=Ce,wt=Cn,Tt=Wn)},setOp:function(Ce,Cn,Wn){(St!==Ce||It!==Cn||oe!==Wn)&&(c.stencilOp(Ce,Cn,Wn),St=Ce,It=Cn,oe=Wn)},setLocked:function(Ce){j=Ce},setClear:function(Ce){Ie!==Ce&&(c.clearStencil(Ce),Ie=Ce)},reset:function(){j=!1,Ut=null,Ct=null,wt=null,Tt=null,St=null,It=null,oe=null,Ie=null}}}const s=new i,f=new r,u=new l,h=new WeakMap,p=new WeakMap;let x={},_={},g=new WeakMap,d=[],S=null,M=!1,y=null,b=null,D=null,U=null,N=null,E=null,T=null,w=new Be(0,0,0),L=0,R=!1,A=null,O=null,P=null,H=null,W=null;const X=c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,k=0;const Z=c.getParameter(c.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),I=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),I=k>=2);let it=null,lt={};const V=c.getParameter(c.SCISSOR_BOX),tt=c.getParameter(c.VIEWPORT),ht=new rn().fromArray(V),pt=new rn().fromArray(tt);function bt(j,Ut,Ct,wt){const Tt=new Uint8Array(4),St=c.createTexture();c.bindTexture(j,St),c.texParameteri(j,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(j,c.TEXTURE_MAG_FILTER,c.NEAREST);for(let It=0;It<Ct;It++)j===c.TEXTURE_3D||j===c.TEXTURE_2D_ARRAY?c.texImage3D(Ut,0,c.RGBA,1,1,wt,0,c.RGBA,c.UNSIGNED_BYTE,Tt):c.texImage2D(Ut+It,0,c.RGBA,1,1,0,c.RGBA,c.UNSIGNED_BYTE,Tt);return St}const Q={};Q[c.TEXTURE_2D]=bt(c.TEXTURE_2D,c.TEXTURE_2D,1),Q[c.TEXTURE_CUBE_MAP]=bt(c.TEXTURE_CUBE_MAP,c.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[c.TEXTURE_2D_ARRAY]=bt(c.TEXTURE_2D_ARRAY,c.TEXTURE_2D_ARRAY,1,1),Q[c.TEXTURE_3D]=bt(c.TEXTURE_3D,c.TEXTURE_3D,1,1),s.setClear(0,0,0,1),f.setClear(1),u.setClear(0),nt(c.DEPTH_TEST),f.setFunc(ys),Vt(!1),le(vx),nt(c.CULL_FACE),ne(ca);function nt(j){x[j]!==!0&&(c.enable(j),x[j]=!0)}function yt(j){x[j]!==!1&&(c.disable(j),x[j]=!1)}function Nt(j,Ut){return _[j]!==Ut?(c.bindFramebuffer(j,Ut),_[j]=Ut,j===c.DRAW_FRAMEBUFFER&&(_[c.FRAMEBUFFER]=Ut),j===c.FRAMEBUFFER&&(_[c.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Ot(j,Ut){let Ct=d,wt=!1;if(j){Ct=g.get(Ut),Ct===void 0&&(Ct=[],g.set(Ut,Ct));const Tt=j.textures;if(Ct.length!==Tt.length||Ct[0]!==c.COLOR_ATTACHMENT0){for(let St=0,It=Tt.length;St<It;St++)Ct[St]=c.COLOR_ATTACHMENT0+St;Ct.length=Tt.length,wt=!0}}else Ct[0]!==c.BACK&&(Ct[0]=c.BACK,wt=!0);wt&&c.drawBuffers(Ct)}function Xt(j){return S!==j?(c.useProgram(j),S=j,!0):!1}const ce={[yr]:c.FUNC_ADD,[xS]:c.FUNC_SUBTRACT,[gS]:c.FUNC_REVERSE_SUBTRACT};ce[vS]=c.MIN,ce[_S]=c.MAX;const Zt={[SS]:c.ZERO,[yS]:c.ONE,[MS]:c.SRC_COLOR,[Ad]:c.SRC_ALPHA,[CS]:c.SRC_ALPHA_SATURATE,[AS]:c.DST_COLOR,[ES]:c.DST_ALPHA,[bS]:c.ONE_MINUS_SRC_COLOR,[Rd]:c.ONE_MINUS_SRC_ALPHA,[RS]:c.ONE_MINUS_DST_COLOR,[TS]:c.ONE_MINUS_DST_ALPHA,[wS]:c.CONSTANT_COLOR,[DS]:c.ONE_MINUS_CONSTANT_COLOR,[US]:c.CONSTANT_ALPHA,[LS]:c.ONE_MINUS_CONSTANT_ALPHA};function ne(j,Ut,Ct,wt,Tt,St,It,oe,Ie,Ce){if(j===ca){M===!0&&(yt(c.BLEND),M=!1);return}if(M===!1&&(nt(c.BLEND),M=!0),j!==mS){if(j!==y||Ce!==R){if((b!==yr||N!==yr)&&(c.blendEquation(c.FUNC_ADD),b=yr,N=yr),Ce)switch(j){case _s:c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case Td:c.blendFunc(c.ONE,c.ONE);break;case _x:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case Sx:c.blendFuncSeparate(c.DST_COLOR,c.ONE_MINUS_SRC_ALPHA,c.ZERO,c.ONE);break;default:an("WebGLState: Invalid blending: ",j);break}else switch(j){case _s:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case Td:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE,c.ONE,c.ONE);break;case _x:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sx:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",j);break}D=null,U=null,E=null,T=null,w.set(0,0,0),L=0,y=j,R=Ce}return}Tt=Tt||Ut,St=St||Ct,It=It||wt,(Ut!==b||Tt!==N)&&(c.blendEquationSeparate(ce[Ut],ce[Tt]),b=Ut,N=Tt),(Ct!==D||wt!==U||St!==E||It!==T)&&(c.blendFuncSeparate(Zt[Ct],Zt[wt],Zt[St],Zt[It]),D=Ct,U=wt,E=St,T=It),(oe.equals(w)===!1||Ie!==L)&&(c.blendColor(oe.r,oe.g,oe.b,Ie),w.copy(oe),L=Ie),y=j,R=!1}function q(j,Ut){j.side===sa?yt(c.CULL_FACE):nt(c.CULL_FACE);let Ct=j.side===kn;Ut&&(Ct=!Ct),Vt(Ct),j.blending===_s&&j.transparent===!1?ne(ca):ne(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),s.setMask(j.colorWrite);const wt=j.stencilWrite;u.setTest(wt),wt&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Pt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?nt(c.SAMPLE_ALPHA_TO_COVERAGE):yt(c.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(j){A!==j&&(j?c.frontFace(c.CW):c.frontFace(c.CCW),A=j)}function le(j){j!==dS?(nt(c.CULL_FACE),j!==O&&(j===vx?c.cullFace(c.BACK):j===hS?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK))):yt(c.CULL_FACE),O=j}function ge(j){j!==P&&(I&&c.lineWidth(j),P=j)}function Pt(j,Ut,Ct){j?(nt(c.POLYGON_OFFSET_FILL),(H!==Ut||W!==Ct)&&(c.polygonOffset(Ut,Ct),H=Ut,W=Ct)):yt(c.POLYGON_OFFSET_FILL)}function Re(j){j?nt(c.SCISSOR_TEST):yt(c.SCISSOR_TEST)}function Wt(j){j===void 0&&(j=c.TEXTURE0+X-1),it!==j&&(c.activeTexture(j),it=j)}function ae(j,Ut,Ct){Ct===void 0&&(it===null?Ct=c.TEXTURE0+X-1:Ct=it);let wt=lt[Ct];wt===void 0&&(wt={type:void 0,texture:void 0},lt[Ct]=wt),(wt.type!==j||wt.texture!==Ut)&&(it!==Ct&&(c.activeTexture(Ct),it=Ct),c.bindTexture(j,Ut||Q[j]),wt.type=j,wt.texture=Ut)}function G(){const j=lt[it];j!==void 0&&j.type!==void 0&&(c.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function B(){try{c.compressedTexImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function at(){try{c.compressedTexImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function gt(){try{c.texSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Mt(){try{c.texSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function dt(){try{c.compressedTexSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function qt(){try{c.compressedTexSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Dt(){try{c.texStorage2D(...arguments)}catch(j){j("WebGLState:",j)}}function $t(){try{c.texStorage3D(...arguments)}catch(j){j("WebGLState:",j)}}function jt(){try{c.texImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Et(){try{c.texImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function At(j){ht.equals(j)===!1&&(c.scissor(j.x,j.y,j.z,j.w),ht.copy(j))}function Kt(j){pt.equals(j)===!1&&(c.viewport(j.x,j.y,j.z,j.w),pt.copy(j))}function kt(j,Ut){let Ct=p.get(Ut);Ct===void 0&&(Ct=new WeakMap,p.set(Ut,Ct));let wt=Ct.get(j);wt===void 0&&(wt=c.getUniformBlockIndex(Ut,j.name),Ct.set(j,wt))}function zt(j,Ut){const wt=p.get(Ut).get(j);h.get(Ut)!==wt&&(c.uniformBlockBinding(Ut,wt,j.__bindingPointIndex),h.set(Ut,wt))}function se(){c.disable(c.BLEND),c.disable(c.CULL_FACE),c.disable(c.DEPTH_TEST),c.disable(c.POLYGON_OFFSET_FILL),c.disable(c.SCISSOR_TEST),c.disable(c.STENCIL_TEST),c.disable(c.SAMPLE_ALPHA_TO_COVERAGE),c.blendEquation(c.FUNC_ADD),c.blendFunc(c.ONE,c.ZERO),c.blendFuncSeparate(c.ONE,c.ZERO,c.ONE,c.ZERO),c.blendColor(0,0,0,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(c.LESS),f.setReversed(!1),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(c.ALWAYS,0,4294967295),c.stencilOp(c.KEEP,c.KEEP,c.KEEP),c.clearStencil(0),c.cullFace(c.BACK),c.frontFace(c.CCW),c.polygonOffset(0,0),c.activeTexture(c.TEXTURE0),c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),x={},it=null,lt={},_={},g=new WeakMap,d=[],S=null,M=!1,y=null,b=null,D=null,U=null,N=null,E=null,T=null,w=new Be(0,0,0),L=0,R=!1,A=null,O=null,P=null,H=null,W=null,ht.set(0,0,c.canvas.width,c.canvas.height),pt.set(0,0,c.canvas.width,c.canvas.height),s.reset(),f.reset(),u.reset()}return{buffers:{color:s,depth:f,stencil:u},enable:nt,disable:yt,bindFramebuffer:Nt,drawBuffers:Ot,useProgram:Xt,setBlending:ne,setMaterial:q,setFlipSided:Vt,setCullFace:le,setLineWidth:ge,setPolygonOffset:Pt,setScissorTest:Re,activeTexture:Wt,bindTexture:ae,unbindTexture:G,compressedTexImage2D:B,compressedTexImage3D:at,texImage2D:jt,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:zt,texStorage2D:Dt,texStorage3D:$t,texSubImage2D:gt,texSubImage3D:Mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:qt,scissor:At,viewport:Kt,reset:se}}function fE(c,e,i,r,l,s,f){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xe,x=new WeakMap;let _;const g=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(G,B){return d?new OffscreenCanvas(G,B):wc("canvas")}function M(G,B,at){let gt=1;const Mt=ae(G);if((Mt.width>at||Mt.height>at)&&(gt=at/Math.max(Mt.width,Mt.height)),gt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const dt=Math.floor(gt*Mt.width),qt=Math.floor(gt*Mt.height);_===void 0&&(_=S(dt,qt));const Dt=B?S(dt,qt):_;return Dt.width=dt,Dt.height=qt,Dt.getContext("2d").drawImage(G,0,0,dt,qt),de("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+dt+"x"+qt+")."),Dt}else return"data"in G&&de("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),G;return G}function y(G){return G.generateMipmaps}function b(G){c.generateMipmap(G)}function D(G){return G.isWebGLCubeRenderTarget?c.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?c.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?c.TEXTURE_2D_ARRAY:c.TEXTURE_2D}function U(G,B,at,gt,Mt=!1){if(G!==null){if(c[G]!==void 0)return c[G];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let dt=B;if(B===c.RED&&(at===c.FLOAT&&(dt=c.R32F),at===c.HALF_FLOAT&&(dt=c.R16F),at===c.UNSIGNED_BYTE&&(dt=c.R8)),B===c.RED_INTEGER&&(at===c.UNSIGNED_BYTE&&(dt=c.R8UI),at===c.UNSIGNED_SHORT&&(dt=c.R16UI),at===c.UNSIGNED_INT&&(dt=c.R32UI),at===c.BYTE&&(dt=c.R8I),at===c.SHORT&&(dt=c.R16I),at===c.INT&&(dt=c.R32I)),B===c.RG&&(at===c.FLOAT&&(dt=c.RG32F),at===c.HALF_FLOAT&&(dt=c.RG16F),at===c.UNSIGNED_BYTE&&(dt=c.RG8)),B===c.RG_INTEGER&&(at===c.UNSIGNED_BYTE&&(dt=c.RG8UI),at===c.UNSIGNED_SHORT&&(dt=c.RG16UI),at===c.UNSIGNED_INT&&(dt=c.RG32UI),at===c.BYTE&&(dt=c.RG8I),at===c.SHORT&&(dt=c.RG16I),at===c.INT&&(dt=c.RG32I)),B===c.RGB_INTEGER&&(at===c.UNSIGNED_BYTE&&(dt=c.RGB8UI),at===c.UNSIGNED_SHORT&&(dt=c.RGB16UI),at===c.UNSIGNED_INT&&(dt=c.RGB32UI),at===c.BYTE&&(dt=c.RGB8I),at===c.SHORT&&(dt=c.RGB16I),at===c.INT&&(dt=c.RGB32I)),B===c.RGBA_INTEGER&&(at===c.UNSIGNED_BYTE&&(dt=c.RGBA8UI),at===c.UNSIGNED_SHORT&&(dt=c.RGBA16UI),at===c.UNSIGNED_INT&&(dt=c.RGBA32UI),at===c.BYTE&&(dt=c.RGBA8I),at===c.SHORT&&(dt=c.RGBA16I),at===c.INT&&(dt=c.RGBA32I)),B===c.RGB&&(at===c.UNSIGNED_INT_5_9_9_9_REV&&(dt=c.RGB9_E5),at===c.UNSIGNED_INT_10F_11F_11F_REV&&(dt=c.R11F_G11F_B10F)),B===c.RGBA){const qt=Mt?Rc:Le.getTransfer(gt);at===c.FLOAT&&(dt=c.RGBA32F),at===c.HALF_FLOAT&&(dt=c.RGBA16F),at===c.UNSIGNED_BYTE&&(dt=qt===ke?c.SRGB8_ALPHA8:c.RGBA8),at===c.UNSIGNED_SHORT_4_4_4_4&&(dt=c.RGBA4),at===c.UNSIGNED_SHORT_5_5_5_1&&(dt=c.RGB5_A1)}return(dt===c.R16F||dt===c.R32F||dt===c.RG16F||dt===c.RG32F||dt===c.RGBA16F||dt===c.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function N(G,B){let at;return G?B===null||B===Tr||B===Lo?at=c.DEPTH24_STENCIL8:B===la?at=c.DEPTH32F_STENCIL8:B===Uo&&(at=c.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):B===null||B===Tr||B===Lo?at=c.DEPTH_COMPONENT24:B===la?at=c.DEPTH_COMPONENT32F:B===Uo&&(at=c.DEPTH_COMPONENT16),at}function E(G,B){return y(G)===!0||G.isFramebufferTexture&&G.minFilter!==ni&&G.minFilter!==hi?Math.log2(Math.max(B.width,B.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?B.mipmaps.length:1}function T(G){const B=G.target;B.removeEventListener("dispose",T),L(B),B.isVideoTexture&&x.delete(B)}function w(G){const B=G.target;B.removeEventListener("dispose",w),A(B)}function L(G){const B=r.get(G);if(B.__webglInit===void 0)return;const at=G.source,gt=g.get(at);if(gt){const Mt=gt[B.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&R(G),Object.keys(gt).length===0&&g.delete(at)}r.remove(G)}function R(G){const B=r.get(G);c.deleteTexture(B.__webglTexture);const at=G.source,gt=g.get(at);delete gt[B.__cacheKey],f.memory.textures--}function A(G){const B=r.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),r.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(B.__webglFramebuffer[gt]))for(let Mt=0;Mt<B.__webglFramebuffer[gt].length;Mt++)c.deleteFramebuffer(B.__webglFramebuffer[gt][Mt]);else c.deleteFramebuffer(B.__webglFramebuffer[gt]);B.__webglDepthbuffer&&c.deleteRenderbuffer(B.__webglDepthbuffer[gt])}else{if(Array.isArray(B.__webglFramebuffer))for(let gt=0;gt<B.__webglFramebuffer.length;gt++)c.deleteFramebuffer(B.__webglFramebuffer[gt]);else c.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&c.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&c.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let gt=0;gt<B.__webglColorRenderbuffer.length;gt++)B.__webglColorRenderbuffer[gt]&&c.deleteRenderbuffer(B.__webglColorRenderbuffer[gt]);B.__webglDepthRenderbuffer&&c.deleteRenderbuffer(B.__webglDepthRenderbuffer)}const at=G.textures;for(let gt=0,Mt=at.length;gt<Mt;gt++){const dt=r.get(at[gt]);dt.__webglTexture&&(c.deleteTexture(dt.__webglTexture),f.memory.textures--),r.remove(at[gt])}r.remove(G)}let O=0;function P(){O=0}function H(){const G=O;return G>=l.maxTextures&&de("WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+l.maxTextures),O+=1,G}function W(G){const B=[];return B.push(G.wrapS),B.push(G.wrapT),B.push(G.wrapR||0),B.push(G.magFilter),B.push(G.minFilter),B.push(G.anisotropy),B.push(G.internalFormat),B.push(G.format),B.push(G.type),B.push(G.generateMipmaps),B.push(G.premultiplyAlpha),B.push(G.flipY),B.push(G.unpackAlignment),B.push(G.colorSpace),B.join()}function X(G,B){const at=r.get(G);if(G.isVideoTexture&&Re(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&at.__version!==G.version){const gt=G.image;if(gt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(at,G,B);return}}else G.isExternalTexture&&(at.__webglTexture=G.sourceTexture?G.sourceTexture:null);i.bindTexture(c.TEXTURE_2D,at.__webglTexture,c.TEXTURE0+B)}function I(G,B){const at=r.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&at.__version!==G.version){Q(at,G,B);return}else G.isExternalTexture&&(at.__webglTexture=G.sourceTexture?G.sourceTexture:null);i.bindTexture(c.TEXTURE_2D_ARRAY,at.__webglTexture,c.TEXTURE0+B)}function k(G,B){const at=r.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&at.__version!==G.version){Q(at,G,B);return}i.bindTexture(c.TEXTURE_3D,at.__webglTexture,c.TEXTURE0+B)}function Z(G,B){const at=r.get(G);if(G.version>0&&at.__version!==G.version){nt(at,G,B);return}i.bindTexture(c.TEXTURE_CUBE_MAP,at.__webglTexture,c.TEXTURE0+B)}const it={[zd]:c.REPEAT,[oa]:c.CLAMP_TO_EDGE,[Fd]:c.MIRRORED_REPEAT},lt={[ni]:c.NEAREST,[GS]:c.NEAREST_MIPMAP_NEAREST,[Jl]:c.NEAREST_MIPMAP_LINEAR,[hi]:c.LINEAR,[jf]:c.LINEAR_MIPMAP_NEAREST,[br]:c.LINEAR_MIPMAP_LINEAR},V={[YS]:c.NEVER,[$S]:c.ALWAYS,[ZS]:c.LESS,[Eg]:c.LEQUAL,[jS]:c.EQUAL,[JS]:c.GEQUAL,[KS]:c.GREATER,[QS]:c.NOTEQUAL};function tt(G,B){if(B.type===la&&e.has("OES_texture_float_linear")===!1&&(B.magFilter===hi||B.magFilter===jf||B.magFilter===Jl||B.magFilter===br||B.minFilter===hi||B.minFilter===jf||B.minFilter===Jl||B.minFilter===br)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),c.texParameteri(G,c.TEXTURE_WRAP_S,it[B.wrapS]),c.texParameteri(G,c.TEXTURE_WRAP_T,it[B.wrapT]),(G===c.TEXTURE_3D||G===c.TEXTURE_2D_ARRAY)&&c.texParameteri(G,c.TEXTURE_WRAP_R,it[B.wrapR]),c.texParameteri(G,c.TEXTURE_MAG_FILTER,lt[B.magFilter]),c.texParameteri(G,c.TEXTURE_MIN_FILTER,lt[B.minFilter]),B.compareFunction&&(c.texParameteri(G,c.TEXTURE_COMPARE_MODE,c.COMPARE_REF_TO_TEXTURE),c.texParameteri(G,c.TEXTURE_COMPARE_FUNC,V[B.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===ni||B.minFilter!==Jl&&B.minFilter!==br||B.type===la&&e.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||r.get(B).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");c.texParameterf(G,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,l.getMaxAnisotropy())),r.get(B).__currentAnisotropy=B.anisotropy}}}function ht(G,B){let at=!1;G.__webglInit===void 0&&(G.__webglInit=!0,B.addEventListener("dispose",T));const gt=B.source;let Mt=g.get(gt);Mt===void 0&&(Mt={},g.set(gt,Mt));const dt=W(B);if(dt!==G.__cacheKey){Mt[dt]===void 0&&(Mt[dt]={texture:c.createTexture(),usedTimes:0},f.memory.textures++,at=!0),Mt[dt].usedTimes++;const qt=Mt[G.__cacheKey];qt!==void 0&&(Mt[G.__cacheKey].usedTimes--,qt.usedTimes===0&&R(B)),G.__cacheKey=dt,G.__webglTexture=Mt[dt].texture}return at}function pt(G,B,at){return Math.floor(Math.floor(G/at)/B)}function bt(G,B,at,gt){const dt=G.updateRanges;if(dt.length===0)i.texSubImage2D(c.TEXTURE_2D,0,0,0,B.width,B.height,at,gt,B.data);else{dt.sort((Et,At)=>Et.start-At.start);let qt=0;for(let Et=1;Et<dt.length;Et++){const At=dt[qt],Kt=dt[Et],kt=At.start+At.count,zt=pt(Kt.start,B.width,4),se=pt(At.start,B.width,4);Kt.start<=kt+1&&zt===se&&pt(Kt.start+Kt.count-1,B.width,4)===zt?At.count=Math.max(At.count,Kt.start+Kt.count-At.start):(++qt,dt[qt]=Kt)}dt.length=qt+1;const Dt=c.getParameter(c.UNPACK_ROW_LENGTH),$t=c.getParameter(c.UNPACK_SKIP_PIXELS),jt=c.getParameter(c.UNPACK_SKIP_ROWS);c.pixelStorei(c.UNPACK_ROW_LENGTH,B.width);for(let Et=0,At=dt.length;Et<At;Et++){const Kt=dt[Et],kt=Math.floor(Kt.start/4),zt=Math.ceil(Kt.count/4),se=kt%B.width,j=Math.floor(kt/B.width),Ut=zt,Ct=1;c.pixelStorei(c.UNPACK_SKIP_PIXELS,se),c.pixelStorei(c.UNPACK_SKIP_ROWS,j),i.texSubImage2D(c.TEXTURE_2D,0,se,j,Ut,Ct,at,gt,B.data)}G.clearUpdateRanges(),c.pixelStorei(c.UNPACK_ROW_LENGTH,Dt),c.pixelStorei(c.UNPACK_SKIP_PIXELS,$t),c.pixelStorei(c.UNPACK_SKIP_ROWS,jt)}}function Q(G,B,at){let gt=c.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(gt=c.TEXTURE_2D_ARRAY),B.isData3DTexture&&(gt=c.TEXTURE_3D);const Mt=ht(G,B),dt=B.source;i.bindTexture(gt,G.__webglTexture,c.TEXTURE0+at);const qt=r.get(dt);if(dt.version!==qt.__version||Mt===!0){i.activeTexture(c.TEXTURE0+at);const Dt=Le.getPrimaries(Le.workingColorSpace),$t=B.colorSpace===Wa?null:Le.getPrimaries(B.colorSpace),jt=B.colorSpace===Wa||Dt===$t?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,B.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,B.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Et=M(B.image,!1,l.maxTextureSize);Et=Wt(B,Et);const At=s.convert(B.format,B.colorSpace),Kt=s.convert(B.type);let kt=U(B.internalFormat,At,Kt,B.colorSpace,B.isVideoTexture);tt(gt,B);let zt;const se=B.mipmaps,j=B.isVideoTexture!==!0,Ut=qt.__version===void 0||Mt===!0,Ct=dt.dataReady,wt=E(B,Et);if(B.isDepthTexture)kt=N(B.format===Oo,B.type),Ut&&(j?i.texStorage2D(c.TEXTURE_2D,1,kt,Et.width,Et.height):i.texImage2D(c.TEXTURE_2D,0,kt,Et.width,Et.height,0,At,Kt,null));else if(B.isDataTexture)if(se.length>0){j&&Ut&&i.texStorage2D(c.TEXTURE_2D,wt,kt,se[0].width,se[0].height);for(let Tt=0,St=se.length;Tt<St;Tt++)zt=se[Tt],j?Ct&&i.texSubImage2D(c.TEXTURE_2D,Tt,0,0,zt.width,zt.height,At,Kt,zt.data):i.texImage2D(c.TEXTURE_2D,Tt,kt,zt.width,zt.height,0,At,Kt,zt.data);B.generateMipmaps=!1}else j?(Ut&&i.texStorage2D(c.TEXTURE_2D,wt,kt,Et.width,Et.height),Ct&&bt(B,Et,At,Kt)):i.texImage2D(c.TEXTURE_2D,0,kt,Et.width,Et.height,0,At,Kt,Et.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){j&&Ut&&i.texStorage3D(c.TEXTURE_2D_ARRAY,wt,kt,se[0].width,se[0].height,Et.depth);for(let Tt=0,St=se.length;Tt<St;Tt++)if(zt=se[Tt],B.format!==bi)if(At!==null)if(j){if(Ct)if(B.layerUpdates.size>0){const It=Xx(zt.width,zt.height,B.format,B.type);for(const oe of B.layerUpdates){const Ie=zt.data.subarray(oe*It/zt.data.BYTES_PER_ELEMENT,(oe+1)*It/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,Tt,0,0,oe,zt.width,zt.height,1,At,Ie)}B.clearLayerUpdates()}else i.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,Et.depth,At,zt.data)}else i.compressedTexImage3D(c.TEXTURE_2D_ARRAY,Tt,kt,zt.width,zt.height,Et.depth,0,zt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ct&&i.texSubImage3D(c.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,Et.depth,At,Kt,zt.data):i.texImage3D(c.TEXTURE_2D_ARRAY,Tt,kt,zt.width,zt.height,Et.depth,0,At,Kt,zt.data)}else{j&&Ut&&i.texStorage2D(c.TEXTURE_2D,wt,kt,se[0].width,se[0].height);for(let Tt=0,St=se.length;Tt<St;Tt++)zt=se[Tt],B.format!==bi?At!==null?j?Ct&&i.compressedTexSubImage2D(c.TEXTURE_2D,Tt,0,0,zt.width,zt.height,At,zt.data):i.compressedTexImage2D(c.TEXTURE_2D,Tt,kt,zt.width,zt.height,0,zt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ct&&i.texSubImage2D(c.TEXTURE_2D,Tt,0,0,zt.width,zt.height,At,Kt,zt.data):i.texImage2D(c.TEXTURE_2D,Tt,kt,zt.width,zt.height,0,At,Kt,zt.data)}else if(B.isDataArrayTexture)if(j){if(Ut&&i.texStorage3D(c.TEXTURE_2D_ARRAY,wt,kt,Et.width,Et.height,Et.depth),Ct)if(B.layerUpdates.size>0){const Tt=Xx(Et.width,Et.height,B.format,B.type);for(const St of B.layerUpdates){const It=Et.data.subarray(St*Tt/Et.data.BYTES_PER_ELEMENT,(St+1)*Tt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,At,Kt,It)}B.clearLayerUpdates()}else i.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,At,Kt,Et.data)}else i.texImage3D(c.TEXTURE_2D_ARRAY,0,kt,Et.width,Et.height,Et.depth,0,At,Kt,Et.data);else if(B.isData3DTexture)j?(Ut&&i.texStorage3D(c.TEXTURE_3D,wt,kt,Et.width,Et.height,Et.depth),Ct&&i.texSubImage3D(c.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,At,Kt,Et.data)):i.texImage3D(c.TEXTURE_3D,0,kt,Et.width,Et.height,Et.depth,0,At,Kt,Et.data);else if(B.isFramebufferTexture){if(Ut)if(j)i.texStorage2D(c.TEXTURE_2D,wt,kt,Et.width,Et.height);else{let Tt=Et.width,St=Et.height;for(let It=0;It<wt;It++)i.texImage2D(c.TEXTURE_2D,It,kt,Tt,St,0,At,Kt,null),Tt>>=1,St>>=1}}else if(se.length>0){if(j&&Ut){const Tt=ae(se[0]);i.texStorage2D(c.TEXTURE_2D,wt,kt,Tt.width,Tt.height)}for(let Tt=0,St=se.length;Tt<St;Tt++)zt=se[Tt],j?Ct&&i.texSubImage2D(c.TEXTURE_2D,Tt,0,0,At,Kt,zt):i.texImage2D(c.TEXTURE_2D,Tt,kt,At,Kt,zt);B.generateMipmaps=!1}else if(j){if(Ut){const Tt=ae(Et);i.texStorage2D(c.TEXTURE_2D,wt,kt,Tt.width,Tt.height)}Ct&&i.texSubImage2D(c.TEXTURE_2D,0,0,0,At,Kt,Et)}else i.texImage2D(c.TEXTURE_2D,0,kt,At,Kt,Et);y(B)&&b(gt),qt.__version=dt.version,B.onUpdate&&B.onUpdate(B)}G.__version=B.version}function nt(G,B,at){if(B.image.length!==6)return;const gt=ht(G,B),Mt=B.source;i.bindTexture(c.TEXTURE_CUBE_MAP,G.__webglTexture,c.TEXTURE0+at);const dt=r.get(Mt);if(Mt.version!==dt.__version||gt===!0){i.activeTexture(c.TEXTURE0+at);const qt=Le.getPrimaries(Le.workingColorSpace),Dt=B.colorSpace===Wa?null:Le.getPrimaries(B.colorSpace),$t=B.colorSpace===Wa||qt===Dt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,B.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,B.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const jt=B.isCompressedTexture||B.image[0].isCompressedTexture,Et=B.image[0]&&B.image[0].isDataTexture,At=[];for(let St=0;St<6;St++)!jt&&!Et?At[St]=M(B.image[St],!0,l.maxCubemapSize):At[St]=Et?B.image[St].image:B.image[St],At[St]=Wt(B,At[St]);const Kt=At[0],kt=s.convert(B.format,B.colorSpace),zt=s.convert(B.type),se=U(B.internalFormat,kt,zt,B.colorSpace),j=B.isVideoTexture!==!0,Ut=dt.__version===void 0||gt===!0,Ct=Mt.dataReady;let wt=E(B,Kt);tt(c.TEXTURE_CUBE_MAP,B);let Tt;if(jt){j&&Ut&&i.texStorage2D(c.TEXTURE_CUBE_MAP,wt,se,Kt.width,Kt.height);for(let St=0;St<6;St++){Tt=At[St].mipmaps;for(let It=0;It<Tt.length;It++){const oe=Tt[It];B.format!==bi?kt!==null?j?Ct&&i.compressedTexSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,It,0,0,oe.width,oe.height,kt,oe.data):i.compressedTexImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,It,se,oe.width,oe.height,0,oe.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ct&&i.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,It,0,0,oe.width,oe.height,kt,zt,oe.data):i.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,It,se,oe.width,oe.height,0,kt,zt,oe.data)}}}else{if(Tt=B.mipmaps,j&&Ut){Tt.length>0&&wt++;const St=ae(At[0]);i.texStorage2D(c.TEXTURE_CUBE_MAP,wt,se,St.width,St.height)}for(let St=0;St<6;St++)if(Et){j?Ct&&i.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,At[St].width,At[St].height,kt,zt,At[St].data):i.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,se,At[St].width,At[St].height,0,kt,zt,At[St].data);for(let It=0;It<Tt.length;It++){const Ie=Tt[It].image[St].image;j?Ct&&i.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,It+1,0,0,Ie.width,Ie.height,kt,zt,Ie.data):i.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,It+1,se,Ie.width,Ie.height,0,kt,zt,Ie.data)}}else{j?Ct&&i.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,kt,zt,At[St]):i.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,se,kt,zt,At[St]);for(let It=0;It<Tt.length;It++){const oe=Tt[It];j?Ct&&i.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,It+1,0,0,kt,zt,oe.image[St]):i.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,It+1,se,kt,zt,oe.image[St])}}}y(B)&&b(c.TEXTURE_CUBE_MAP),dt.__version=Mt.version,B.onUpdate&&B.onUpdate(B)}G.__version=B.version}function yt(G,B,at,gt,Mt,dt){const qt=s.convert(at.format,at.colorSpace),Dt=s.convert(at.type),$t=U(at.internalFormat,qt,Dt,at.colorSpace),jt=r.get(B),Et=r.get(at);if(Et.__renderTarget=B,!jt.__hasExternalTextures){const At=Math.max(1,B.width>>dt),Kt=Math.max(1,B.height>>dt);Mt===c.TEXTURE_3D||Mt===c.TEXTURE_2D_ARRAY?i.texImage3D(Mt,dt,$t,At,Kt,B.depth,0,qt,Dt,null):i.texImage2D(Mt,dt,$t,At,Kt,0,qt,Dt,null)}i.bindFramebuffer(c.FRAMEBUFFER,G),Pt(B)?u.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,gt,Mt,Et.__webglTexture,0,ge(B)):(Mt===c.TEXTURE_2D||Mt>=c.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=c.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&c.framebufferTexture2D(c.FRAMEBUFFER,gt,Mt,Et.__webglTexture,dt),i.bindFramebuffer(c.FRAMEBUFFER,null)}function Nt(G,B,at){if(c.bindRenderbuffer(c.RENDERBUFFER,G),B.depthBuffer){const gt=B.depthTexture,Mt=gt&&gt.isDepthTexture?gt.type:null,dt=N(B.stencilBuffer,Mt),qt=B.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Dt=ge(B);Pt(B)?u.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,Dt,dt,B.width,B.height):at?c.renderbufferStorageMultisample(c.RENDERBUFFER,Dt,dt,B.width,B.height):c.renderbufferStorage(c.RENDERBUFFER,dt,B.width,B.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,qt,c.RENDERBUFFER,G)}else{const gt=B.textures;for(let Mt=0;Mt<gt.length;Mt++){const dt=gt[Mt],qt=s.convert(dt.format,dt.colorSpace),Dt=s.convert(dt.type),$t=U(dt.internalFormat,qt,Dt,dt.colorSpace),jt=ge(B);at&&Pt(B)===!1?c.renderbufferStorageMultisample(c.RENDERBUFFER,jt,$t,B.width,B.height):Pt(B)?u.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,jt,$t,B.width,B.height):c.renderbufferStorage(c.RENDERBUFFER,$t,B.width,B.height)}}c.bindRenderbuffer(c.RENDERBUFFER,null)}function Ot(G,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(c.FRAMEBUFFER,G),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(B.depthTexture);gt.__renderTarget=B,(!gt.__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),X(B.depthTexture,0);const Mt=gt.__webglTexture,dt=ge(B);if(B.depthTexture.format===No)Pt(B)?u.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,Mt,0,dt):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,Mt,0);else if(B.depthTexture.format===Oo)Pt(B)?u.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,Mt,0,dt):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Xt(G){const B=r.get(G),at=G.isWebGLCubeRenderTarget===!0;if(B.__boundDepthTexture!==G.depthTexture){const gt=G.depthTexture;if(B.__depthDisposeCallback&&B.__depthDisposeCallback(),gt){const Mt=()=>{delete B.__boundDepthTexture,delete B.__depthDisposeCallback,gt.removeEventListener("dispose",Mt)};gt.addEventListener("dispose",Mt),B.__depthDisposeCallback=Mt}B.__boundDepthTexture=gt}if(G.depthTexture&&!B.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const gt=G.texture.mipmaps;gt&&gt.length>0?Ot(B.__webglFramebuffer[0],G):Ot(B.__webglFramebuffer,G)}else if(at){B.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(c.FRAMEBUFFER,B.__webglFramebuffer[gt]),B.__webglDepthbuffer[gt]===void 0)B.__webglDepthbuffer[gt]=c.createRenderbuffer(),Nt(B.__webglDepthbuffer[gt],G,!1);else{const Mt=G.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,dt=B.__webglDepthbuffer[gt];c.bindRenderbuffer(c.RENDERBUFFER,dt),c.framebufferRenderbuffer(c.FRAMEBUFFER,Mt,c.RENDERBUFFER,dt)}}else{const gt=G.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(c.FRAMEBUFFER,B.__webglFramebuffer[0]):i.bindFramebuffer(c.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer===void 0)B.__webglDepthbuffer=c.createRenderbuffer(),Nt(B.__webglDepthbuffer,G,!1);else{const Mt=G.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,dt=B.__webglDepthbuffer;c.bindRenderbuffer(c.RENDERBUFFER,dt),c.framebufferRenderbuffer(c.FRAMEBUFFER,Mt,c.RENDERBUFFER,dt)}}i.bindFramebuffer(c.FRAMEBUFFER,null)}function ce(G,B,at){const gt=r.get(G);B!==void 0&&yt(gt.__webglFramebuffer,G,G.texture,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,0),at!==void 0&&Xt(G)}function Zt(G){const B=G.texture,at=r.get(G),gt=r.get(B);G.addEventListener("dispose",w);const Mt=G.textures,dt=G.isWebGLCubeRenderTarget===!0,qt=Mt.length>1;if(qt||(gt.__webglTexture===void 0&&(gt.__webglTexture=c.createTexture()),gt.__version=B.version,f.memory.textures++),dt){at.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(B.mipmaps&&B.mipmaps.length>0){at.__webglFramebuffer[Dt]=[];for(let $t=0;$t<B.mipmaps.length;$t++)at.__webglFramebuffer[Dt][$t]=c.createFramebuffer()}else at.__webglFramebuffer[Dt]=c.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){at.__webglFramebuffer=[];for(let Dt=0;Dt<B.mipmaps.length;Dt++)at.__webglFramebuffer[Dt]=c.createFramebuffer()}else at.__webglFramebuffer=c.createFramebuffer();if(qt)for(let Dt=0,$t=Mt.length;Dt<$t;Dt++){const jt=r.get(Mt[Dt]);jt.__webglTexture===void 0&&(jt.__webglTexture=c.createTexture(),f.memory.textures++)}if(G.samples>0&&Pt(G)===!1){at.__webglMultisampledFramebuffer=c.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(c.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const $t=Mt[Dt];at.__webglColorRenderbuffer[Dt]=c.createRenderbuffer(),c.bindRenderbuffer(c.RENDERBUFFER,at.__webglColorRenderbuffer[Dt]);const jt=s.convert($t.format,$t.colorSpace),Et=s.convert($t.type),At=U($t.internalFormat,jt,Et,$t.colorSpace,G.isXRRenderTarget===!0),Kt=ge(G);c.renderbufferStorageMultisample(c.RENDERBUFFER,Kt,At,G.width,G.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Dt,c.RENDERBUFFER,at.__webglColorRenderbuffer[Dt])}c.bindRenderbuffer(c.RENDERBUFFER,null),G.depthBuffer&&(at.__webglDepthRenderbuffer=c.createRenderbuffer(),Nt(at.__webglDepthRenderbuffer,G,!0)),i.bindFramebuffer(c.FRAMEBUFFER,null)}}if(dt){i.bindTexture(c.TEXTURE_CUBE_MAP,gt.__webglTexture),tt(c.TEXTURE_CUBE_MAP,B);for(let Dt=0;Dt<6;Dt++)if(B.mipmaps&&B.mipmaps.length>0)for(let $t=0;$t<B.mipmaps.length;$t++)yt(at.__webglFramebuffer[Dt][$t],G,B,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,$t);else yt(at.__webglFramebuffer[Dt],G,B,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(B)&&b(c.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Dt=0,$t=Mt.length;Dt<$t;Dt++){const jt=Mt[Dt],Et=r.get(jt);let At=c.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(At=G.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),i.bindTexture(At,Et.__webglTexture),tt(At,jt),yt(at.__webglFramebuffer,G,jt,c.COLOR_ATTACHMENT0+Dt,At,0),y(jt)&&b(At)}i.unbindTexture()}else{let Dt=c.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Dt=G.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),i.bindTexture(Dt,gt.__webglTexture),tt(Dt,B),B.mipmaps&&B.mipmaps.length>0)for(let $t=0;$t<B.mipmaps.length;$t++)yt(at.__webglFramebuffer[$t],G,B,c.COLOR_ATTACHMENT0,Dt,$t);else yt(at.__webglFramebuffer,G,B,c.COLOR_ATTACHMENT0,Dt,0);y(B)&&b(Dt),i.unbindTexture()}G.depthBuffer&&Xt(G)}function ne(G){const B=G.textures;for(let at=0,gt=B.length;at<gt;at++){const Mt=B[at];if(y(Mt)){const dt=D(G),qt=r.get(Mt).__webglTexture;i.bindTexture(dt,qt),b(dt),i.unbindTexture()}}}const q=[],Vt=[];function le(G){if(G.samples>0){if(Pt(G)===!1){const B=G.textures,at=G.width,gt=G.height;let Mt=c.COLOR_BUFFER_BIT;const dt=G.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,qt=r.get(G),Dt=B.length>1;if(Dt)for(let jt=0;jt<B.length;jt++)i.bindFramebuffer(c.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+jt,c.RENDERBUFFER,null),i.bindFramebuffer(c.FRAMEBUFFER,qt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+jt,c.TEXTURE_2D,null,0);i.bindFramebuffer(c.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const $t=G.texture.mipmaps;$t&&$t.length>0?i.bindFramebuffer(c.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(c.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let jt=0;jt<B.length;jt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(Mt|=c.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(Mt|=c.STENCIL_BUFFER_BIT)),Dt){c.framebufferRenderbuffer(c.READ_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.RENDERBUFFER,qt.__webglColorRenderbuffer[jt]);const Et=r.get(B[jt]).__webglTexture;c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,Et,0)}c.blitFramebuffer(0,0,at,gt,0,0,at,gt,Mt,c.NEAREST),h===!0&&(q.length=0,Vt.length=0,q.push(c.COLOR_ATTACHMENT0+jt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(q.push(dt),Vt.push(dt),c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,Vt)),c.invalidateFramebuffer(c.READ_FRAMEBUFFER,q))}if(i.bindFramebuffer(c.READ_FRAMEBUFFER,null),i.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),Dt)for(let jt=0;jt<B.length;jt++){i.bindFramebuffer(c.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+jt,c.RENDERBUFFER,qt.__webglColorRenderbuffer[jt]);const Et=r.get(B[jt]).__webglTexture;i.bindFramebuffer(c.FRAMEBUFFER,qt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+jt,c.TEXTURE_2D,Et,0)}i.bindFramebuffer(c.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&h){const B=G.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,[B])}}}function ge(G){return Math.min(l.maxSamples,G.samples)}function Pt(G){const B=r.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function Re(G){const B=f.render.frame;x.get(G)!==B&&(x.set(G,B),G.update())}function Wt(G,B){const at=G.colorSpace,gt=G.format,Mt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||at!==Es&&at!==Wa&&(Le.getTransfer(at)===ke?(gt!==bi||Mt!==fa)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",at)),B}function ae(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(p.width=G.naturalWidth||G.width,p.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(p.width=G.displayWidth,p.height=G.displayHeight):(p.width=G.width,p.height=G.height),p}this.allocateTextureUnit=H,this.resetTextureUnits=P,this.setTexture2D=X,this.setTexture2DArray=I,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=ce,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Pt}function dE(c,e){function i(r,l=Wa){let s;const f=Le.getTransfer(l);if(r===fa)return c.UNSIGNED_BYTE;if(r===_h)return c.UNSIGNED_SHORT_4_4_4_4;if(r===Sh)return c.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return c.UNSIGNED_INT_5_9_9_9_REV;if(r===Sg)return c.UNSIGNED_INT_10F_11F_11F_REV;if(r===gg)return c.BYTE;if(r===vg)return c.SHORT;if(r===Uo)return c.UNSIGNED_SHORT;if(r===vh)return c.INT;if(r===Tr)return c.UNSIGNED_INT;if(r===la)return c.FLOAT;if(r===As)return c.HALF_FLOAT;if(r===yg)return c.ALPHA;if(r===Mg)return c.RGB;if(r===bi)return c.RGBA;if(r===No)return c.DEPTH_COMPONENT;if(r===Oo)return c.DEPTH_STENCIL;if(r===bg)return c.RED;if(r===yh)return c.RED_INTEGER;if(r===Mh)return c.RG;if(r===bh)return c.RG_INTEGER;if(r===Eh)return c.RGBA_INTEGER;if(r===Mc||r===bc||r===Ec||r===Tc)if(f===ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===Hd||r===Vd||r===Gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Id)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kd||r===Xd||r===Wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===kd||r===Xd)return f===ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Wd)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qd||r===Yd||r===Zd||r===jd||r===Kd||r===Qd||r===Jd||r===$d||r===th||r===eh||r===nh||r===ih||r===ah||r===rh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===qd)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yd)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jd)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kd)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qd)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jd)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$d)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===th)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eh)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nh)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ih)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ah)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rh)return f===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sh||r===oh||r===lh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===sh)return f===ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===oh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ch||r===uh||r===fh||r===dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===ch)return s.COMPRESSED_RED_RGTC1_EXT;if(r===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?c.UNSIGNED_INT_24_8:c[r]!==void 0?c[r]:null}return{convert:i}}const hE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pE=`
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

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ig(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ha({vertexShader:hE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ja(new Nc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xE extends Rs{constructor(e,i){super();const r=this;let l=null,s=1,f=null,u="local-floor",h=1,p=null,x=null,_=null,g=null,d=null,S=null;const M=typeof XRWebGLBinding<"u",y=new mE,b={},D=i.getContextAttributes();let U=null,N=null;const E=[],T=[],w=new Xe;let L=null;const R=new yi;R.viewport=new rn;const A=new yi;A.viewport=new rn;const O=[R,A],P=new Py;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let nt=E[Q];return nt===void 0&&(nt=new vd,E[Q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Q){let nt=E[Q];return nt===void 0&&(nt=new vd,E[Q]=nt),nt.getGripSpace()},this.getHand=function(Q){let nt=E[Q];return nt===void 0&&(nt=new vd,E[Q]=nt),nt.getHandSpace()};function X(Q){const nt=T.indexOf(Q.inputSource);if(nt===-1)return;const yt=E[nt];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,p||f),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function I(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",k);for(let Q=0;Q<E.length;Q++){const nt=T[Q];nt!==null&&(T[Q]=null,E[Q].disconnect(nt))}H=null,W=null,y.reset();for(const Q in b)delete b[Q];e.setRenderTarget(U),d=null,g=null,_=null,l=null,N=null,bt.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,r.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,r.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return g!==null?g:d},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return S},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",I),l.addEventListener("inputsourceschange",k),D.xrCompatible!==!0&&await i.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Nt=null,Ot=null;D.depth&&(Ot=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=D.stencil?Oo:No,Nt=D.stencil?Lo:Tr);const Xt={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:s};_=this.getBinding(),g=_.createProjectionLayer(Xt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Ar(g.textureWidth,g.textureHeight,{format:bi,type:fa,depthTexture:new Fg(g.textureWidth,g.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const yt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),N=new Ar(d.framebufferWidth,d.framebufferHeight,{format:bi,type:fa,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await l.requestReferenceSpace(u),bt.setContext(l),bt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(Q){for(let nt=0;nt<Q.removed.length;nt++){const yt=Q.removed[nt],Nt=T.indexOf(yt);Nt>=0&&(T[Nt]=null,E[Nt].disconnect(yt))}for(let nt=0;nt<Q.added.length;nt++){const yt=Q.added[nt];let Nt=T.indexOf(yt);if(Nt===-1){for(let Xt=0;Xt<E.length;Xt++)if(Xt>=T.length){T.push(yt),Nt=Xt;break}else if(T[Xt]===null){T[Xt]=yt,Nt=Xt;break}if(Nt===-1)break}const Ot=E[Nt];Ot&&Ot.connect(yt)}}const Z=new mt,it=new mt;function lt(Q,nt,yt){Z.setFromMatrixPosition(nt.matrixWorld),it.setFromMatrixPosition(yt.matrixWorld);const Nt=Z.distanceTo(it),Ot=nt.projectionMatrix.elements,Xt=yt.projectionMatrix.elements,ce=Ot[14]/(Ot[10]-1),Zt=Ot[14]/(Ot[10]+1),ne=(Ot[9]+1)/Ot[5],q=(Ot[9]-1)/Ot[5],Vt=(Ot[8]-1)/Ot[0],le=(Xt[8]+1)/Xt[0],ge=ce*Vt,Pt=ce*le,Re=Nt/(-Vt+le),Wt=Re*-Vt;if(nt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Wt),Q.translateZ(Re),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ot[10]===-1)Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const ae=ce+Re,G=Zt+Re,B=ge-Wt,at=Pt+(Nt-Wt),gt=ne*Zt/G*ae,Mt=q*Zt/G*ae;Q.projectionMatrix.makePerspective(B,at,gt,Mt,ae,G),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function V(Q,nt){nt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(nt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let nt=Q.near,yt=Q.far;y.texture!==null&&(y.depthNear>0&&(nt=y.depthNear),y.depthFar>0&&(yt=y.depthFar)),P.near=A.near=R.near=nt,P.far=A.far=R.far=yt,(H!==P.near||W!==P.far)&&(l.updateRenderState({depthNear:P.near,depthFar:P.far}),H=P.near,W=P.far),P.layers.mask=Q.layers.mask|6,R.layers.mask=P.layers.mask&3,A.layers.mask=P.layers.mask&5;const Nt=Q.parent,Ot=P.cameras;V(P,Nt);for(let Xt=0;Xt<Ot.length;Xt++)V(Ot[Xt],Nt);Ot.length===2?lt(P,R,A):P.projectionMatrix.copy(R.projectionMatrix),tt(Q,P,Nt)};function tt(Q,nt,yt){yt===null?Q.matrix.copy(nt.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(nt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(g===null&&d===null))return h},this.setFoveation=function(Q){h=Q,g!==null&&(g.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(P)},this.getCameraTexture=function(Q){return b[Q]};let ht=null;function pt(Q,nt){if(x=nt.getViewerPose(p||f),S=nt,x!==null){const yt=x.views;d!==null&&(e.setRenderTargetFramebuffer(N,d.framebuffer),e.setRenderTarget(N));let Nt=!1;yt.length!==P.cameras.length&&(P.cameras.length=0,Nt=!0);for(let Zt=0;Zt<yt.length;Zt++){const ne=yt[Zt];let q=null;if(d!==null)q=d.getViewport(ne);else{const le=_.getViewSubImage(g,ne);q=le.viewport,Zt===0&&(e.setRenderTargetTextures(N,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(N))}let Vt=O[Zt];Vt===void 0&&(Vt=new yi,Vt.layers.enable(Zt),Vt.viewport=new rn,O[Zt]=Vt),Vt.matrix.fromArray(ne.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(ne.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(q.x,q.y,q.width,q.height),Zt===0&&(P.matrix.copy(Vt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Nt===!0&&P.cameras.push(Vt)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&M){_=r.getBinding();const Zt=_.getDepthInformation(yt[0]);Zt&&Zt.isValid&&Zt.texture&&y.init(Zt,l.renderState)}if(Ot&&Ot.includes("camera-access")&&M){e.state.unbindTexture(),_=r.getBinding();for(let Zt=0;Zt<yt.length;Zt++){const ne=yt[Zt].camera;if(ne){let q=b[ne];q||(q=new Ig,b[ne]=q);const Vt=_.getCameraImage(ne);q.sourceTexture=Vt}}}}for(let yt=0;yt<E.length;yt++){const Nt=T[yt],Ot=E[yt];Nt!==null&&Ot!==void 0&&Ot.update(Nt,nt,p||f)}ht&&ht(Q,nt),nt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:nt}),S=null}const bt=new Vg;bt.setAnimationLoop(pt),this.setAnimationLoop=function(Q){ht=Q},this.dispose=function(){}}}const _r=new da,gE=new dn;function vE(c,e){function i(y,b){y.matrixAutoUpdate===!0&&y.updateMatrix(),b.value.copy(y.matrix)}function r(y,b){b.color.getRGB(y.fogColor.value,Ng(c)),b.isFog?(y.fogNear.value=b.near,y.fogFar.value=b.far):b.isFogExp2&&(y.fogDensity.value=b.density)}function l(y,b,D,U,N){b.isMeshBasicMaterial||b.isMeshLambertMaterial?s(y,b):b.isMeshToonMaterial?(s(y,b),_(y,b)):b.isMeshPhongMaterial?(s(y,b),x(y,b)):b.isMeshStandardMaterial?(s(y,b),g(y,b),b.isMeshPhysicalMaterial&&d(y,b,N)):b.isMeshMatcapMaterial?(s(y,b),S(y,b)):b.isMeshDepthMaterial?s(y,b):b.isMeshDistanceMaterial?(s(y,b),M(y,b)):b.isMeshNormalMaterial?s(y,b):b.isLineBasicMaterial?(f(y,b),b.isLineDashedMaterial&&u(y,b)):b.isPointsMaterial?h(y,b,D,U):b.isSpriteMaterial?p(y,b):b.isShadowMaterial?(y.color.value.copy(b.color),y.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function s(y,b){y.opacity.value=b.opacity,b.color&&y.diffuse.value.copy(b.color),b.emissive&&y.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(y.map.value=b.map,i(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,i(b.alphaMap,y.alphaMapTransform)),b.bumpMap&&(y.bumpMap.value=b.bumpMap,i(b.bumpMap,y.bumpMapTransform),y.bumpScale.value=b.bumpScale,b.side===kn&&(y.bumpScale.value*=-1)),b.normalMap&&(y.normalMap.value=b.normalMap,i(b.normalMap,y.normalMapTransform),y.normalScale.value.copy(b.normalScale),b.side===kn&&y.normalScale.value.negate()),b.displacementMap&&(y.displacementMap.value=b.displacementMap,i(b.displacementMap,y.displacementMapTransform),y.displacementScale.value=b.displacementScale,y.displacementBias.value=b.displacementBias),b.emissiveMap&&(y.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,y.emissiveMapTransform)),b.specularMap&&(y.specularMap.value=b.specularMap,i(b.specularMap,y.specularMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest);const D=e.get(b),U=D.envMap,N=D.envMapRotation;U&&(y.envMap.value=U,_r.copy(N),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),y.envMapRotation.value.setFromMatrix4(gE.makeRotationFromEuler(_r)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=b.reflectivity,y.ior.value=b.ior,y.refractionRatio.value=b.refractionRatio),b.lightMap&&(y.lightMap.value=b.lightMap,y.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,y.lightMapTransform)),b.aoMap&&(y.aoMap.value=b.aoMap,y.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,y.aoMapTransform))}function f(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,b.map&&(y.map.value=b.map,i(b.map,y.mapTransform))}function u(y,b){y.dashSize.value=b.dashSize,y.totalSize.value=b.dashSize+b.gapSize,y.scale.value=b.scale}function h(y,b,D,U){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.size.value=b.size*D,y.scale.value=U*.5,b.map&&(y.map.value=b.map,i(b.map,y.uvTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,i(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function p(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.rotation.value=b.rotation,b.map&&(y.map.value=b.map,i(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,i(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function x(y,b){y.specular.value.copy(b.specular),y.shininess.value=Math.max(b.shininess,1e-4)}function _(y,b){b.gradientMap&&(y.gradientMap.value=b.gradientMap)}function g(y,b){y.metalness.value=b.metalness,b.metalnessMap&&(y.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,y.metalnessMapTransform)),y.roughness.value=b.roughness,b.roughnessMap&&(y.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,y.roughnessMapTransform)),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)}function d(y,b,D){y.ior.value=b.ior,b.sheen>0&&(y.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),y.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(y.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,y.sheenColorMapTransform)),b.sheenRoughnessMap&&(y.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,y.sheenRoughnessMapTransform))),b.clearcoat>0&&(y.clearcoat.value=b.clearcoat,y.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(y.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,y.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(y.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===kn&&y.clearcoatNormalScale.value.negate())),b.dispersion>0&&(y.dispersion.value=b.dispersion),b.iridescence>0&&(y.iridescence.value=b.iridescence,y.iridescenceIOR.value=b.iridescenceIOR,y.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(y.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,y.iridescenceMapTransform)),b.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),b.transmission>0&&(y.transmission.value=b.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),b.transmissionMap&&(y.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,y.transmissionMapTransform)),y.thickness.value=b.thickness,b.thicknessMap&&(y.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=b.attenuationDistance,y.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(y.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(y.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=b.specularIntensity,y.specularColor.value.copy(b.specularColor),b.specularColorMap&&(y.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,y.specularColorMapTransform)),b.specularIntensityMap&&(y.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,b){b.matcap&&(y.matcap.value=b.matcap)}function M(y,b){const D=e.get(b).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function _E(c,e,i,r){let l={},s={},f=[];const u=c.getParameter(c.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,U){const N=U.program;r.uniformBlockBinding(D,N)}function p(D,U){let N=l[D.id];N===void 0&&(S(D),N=x(D),l[D.id]=N,D.addEventListener("dispose",y));const E=U.program;r.updateUBOMapping(D,E);const T=e.render.frame;s[D.id]!==T&&(g(D),s[D.id]=T)}function x(D){const U=_();D.__bindingPointIndex=U;const N=c.createBuffer(),E=D.__size,T=D.usage;return c.bindBuffer(c.UNIFORM_BUFFER,N),c.bufferData(c.UNIFORM_BUFFER,E,T),c.bindBuffer(c.UNIFORM_BUFFER,null),c.bindBufferBase(c.UNIFORM_BUFFER,U,N),N}function _(){for(let D=0;D<u;D++)if(f.indexOf(D)===-1)return f.push(D),D;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const U=l[D.id],N=D.uniforms,E=D.__cache;c.bindBuffer(c.UNIFORM_BUFFER,U);for(let T=0,w=N.length;T<w;T++){const L=Array.isArray(N[T])?N[T]:[N[T]];for(let R=0,A=L.length;R<A;R++){const O=L[R];if(d(O,T,R,E)===!0){const P=O.__offset,H=Array.isArray(O.value)?O.value:[O.value];let W=0;for(let X=0;X<H.length;X++){const I=H[X],k=M(I);typeof I=="number"||typeof I=="boolean"?(O.__data[0]=I,c.bufferSubData(c.UNIFORM_BUFFER,P+W,O.__data)):I.isMatrix3?(O.__data[0]=I.elements[0],O.__data[1]=I.elements[1],O.__data[2]=I.elements[2],O.__data[3]=0,O.__data[4]=I.elements[3],O.__data[5]=I.elements[4],O.__data[6]=I.elements[5],O.__data[7]=0,O.__data[8]=I.elements[6],O.__data[9]=I.elements[7],O.__data[10]=I.elements[8],O.__data[11]=0):(I.toArray(O.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(c.UNIFORM_BUFFER,P,O.__data)}}}c.bindBuffer(c.UNIFORM_BUFFER,null)}function d(D,U,N,E){const T=D.value,w=U+"_"+N;if(E[w]===void 0)return typeof T=="number"||typeof T=="boolean"?E[w]=T:E[w]=T.clone(),!0;{const L=E[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return E[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function S(D){const U=D.uniforms;let N=0;const E=16;for(let w=0,L=U.length;w<L;w++){const R=Array.isArray(U[w])?U[w]:[U[w]];for(let A=0,O=R.length;A<O;A++){const P=R[A],H=Array.isArray(P.value)?P.value:[P.value];for(let W=0,X=H.length;W<X;W++){const I=H[W],k=M(I),Z=N%E,it=Z%k.boundary,lt=Z+it;N+=it,lt!==0&&E-lt<k.storage&&(N+=E-lt),P.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=N,N+=k.storage}}}const T=N%E;return T>0&&(N+=E-T),D.__size=N,D.__cache={},this}function M(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",D),U}function y(D){const U=D.target;U.removeEventListener("dispose",y);const N=f.indexOf(U.__bindingPointIndex);f.splice(N,1),c.deleteBuffer(l[U.id]),delete l[U.id],delete s[U.id]}function b(){for(const D in l)c.deleteBuffer(l[D]);f=[],l={},s={}}return{bind:h,update:p,dispose:b}}const SE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let aa=null;function yE(){return aa===null&&(aa=new Cy(SE,32,32,Mh,As),aa.minFilter=hi,aa.magFilter=hi,aa.wrapS=oa,aa.wrapT=oa,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class ME{constructor(e={}){const{canvas:i=ty(),context:r=null,depth:l=!0,stencil:s=!1,alpha:f=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=f;const S=new Set([Eh,bh,yh]),M=new Set([fa,Tr,Uo,Lo,_h,Sh]),y=new Uint32Array(4),b=new Int32Array(4);let D=null,U=null;const N=[],E=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=di;let L=0,R=0,A=null,O=-1,P=null;const H=new rn,W=new rn;let X=null;const I=new Be(0);let k=0,Z=i.width,it=i.height,lt=1,V=null,tt=null;const ht=new rn(0,0,Z,it),pt=new rn(0,0,Z,it);let bt=!1;const Q=new Bg;let nt=!1,yt=!1;const Nt=new dn,Ot=new mt,Xt=new rn,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function ne(){return A===null?lt:1}let q=r;function Vt(F,J){return i.getContext(F,J)}try{const F={alpha:!0,depth:l,stencil:s,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gh}`),i.addEventListener("webglcontextlost",Tt,!1),i.addEventListener("webglcontextrestored",St,!1),i.addEventListener("webglcontextcreationerror",It,!1),q===null){const J="webgl2";if(q=Vt(J,F),q===null)throw Vt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw F("WebGLRenderer: "+F.message),F}let le,ge,Pt,Re,Wt,ae,G,B,at,gt,Mt,dt,qt,Dt,$t,jt,Et,At,Kt,kt,zt,se,j,Ut;function Ct(){le=new D3(q),le.init(),se=new dE(q,le),ge=new y3(q,le,e,se),Pt=new uE(q,le),ge.reversedDepthBuffer&&g&&Pt.buffers.depth.setReversed(!0),Re=new N3(q),Wt=new Qb,ae=new fE(q,le,Pt,Wt,ge,se,Re),G=new b3(T),B=new w3(T),at=new zy(q),j=new _3(q,at),gt=new U3(q,at,Re,j),Mt=new P3(q,gt,at,Re),Kt=new O3(q,ge,ae),jt=new M3(Wt),dt=new Kb(T,G,B,le,ge,j,jt),qt=new vE(T,Wt),Dt=new $b,$t=new rE(le),At=new v3(T,G,B,Pt,Mt,d,h),Et=new lE(T,Mt,ge),Ut=new _E(q,Re,ge,Pt),kt=new S3(q,le,Re),zt=new L3(q,le,Re),Re.programs=dt.programs,T.capabilities=ge,T.extensions=le,T.properties=Wt,T.renderLists=Dt,T.shadowMap=Et,T.state=Pt,T.info=Re}Ct();const wt=new xE(T,q);this.xr=wt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const F=le.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=le.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(F){F!==void 0&&(lt=F,this.setSize(Z,it,!1))},this.getSize=function(F){return F.set(Z,it)},this.setSize=function(F,J,ut=!0){if(wt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=F,it=J,i.width=Math.floor(F*lt),i.height=Math.floor(J*lt),ut===!0&&(i.style.width=F+"px",i.style.height=J+"px"),this.setViewport(0,0,F,J)},this.getDrawingBufferSize=function(F){return F.set(Z*lt,it*lt).floor()},this.setDrawingBufferSize=function(F,J,ut){Z=F,it=J,lt=ut,i.width=Math.floor(F*ut),i.height=Math.floor(J*ut),this.setViewport(0,0,F,J)},this.getCurrentViewport=function(F){return F.copy(H)},this.getViewport=function(F){return F.copy(ht)},this.setViewport=function(F,J,ut,ot){F.isVector4?ht.set(F.x,F.y,F.z,F.w):ht.set(F,J,ut,ot),Pt.viewport(H.copy(ht).multiplyScalar(lt).round())},this.getScissor=function(F){return F.copy(pt)},this.setScissor=function(F,J,ut,ot){F.isVector4?pt.set(F.x,F.y,F.z,F.w):pt.set(F,J,ut,ot),Pt.scissor(W.copy(pt).multiplyScalar(lt).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(F){Pt.setScissorTest(bt=F)},this.setOpaqueSort=function(F){V=F},this.setTransparentSort=function(F){tt=F},this.getClearColor=function(F){return F.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(F=!0,J=!0,ut=!0){let ot=0;if(F){let et=!1;if(A!==null){const Rt=A.texture.format;et=S.has(Rt)}if(et){const Rt=A.texture.type,Lt=M.has(Rt),Ft=At.getClearColor(),Ht=At.getClearAlpha(),ee=Ft.r,re=Ft.g,Qt=Ft.b;Lt?(y[0]=ee,y[1]=re,y[2]=Qt,y[3]=Ht,q.clearBufferuiv(q.COLOR,0,y)):(b[0]=ee,b[1]=re,b[2]=Qt,b[3]=Ht,q.clearBufferiv(q.COLOR,0,b))}else ot|=q.COLOR_BUFFER_BIT}J&&(ot|=q.DEPTH_BUFFER_BIT),ut&&(ot|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Tt,!1),i.removeEventListener("webglcontextrestored",St,!1),i.removeEventListener("webglcontextcreationerror",It,!1),At.dispose(),Dt.dispose(),$t.dispose(),Wt.dispose(),G.dispose(),B.dispose(),Mt.dispose(),j.dispose(),Ut.dispose(),dt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ws),wt.removeEventListener("sessionend",Ds),pi.stop()};function Tt(F){F.preventDefault(),Tx("WebGLRenderer: Context Lost."),w=!0}function St(){Tx("WebGLRenderer: Context Restored."),w=!1;const F=Re.autoReset,J=Et.enabled,ut=Et.autoUpdate,ot=Et.needsUpdate,et=Et.type;Ct(),Re.autoReset=F,Et.enabled=J,Et.autoUpdate=ut,Et.needsUpdate=ot,Et.type=et}function It(F){an("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function oe(F){const J=F.target;J.removeEventListener("dispose",oe),Ie(J)}function Ie(F){Ce(F),Wt.remove(F)}function Ce(F){const J=Wt.get(F).programs;J!==void 0&&(J.forEach(function(ut){dt.releaseProgram(ut)}),F.isShaderMaterial&&dt.releaseShaderCache(F))}this.renderBufferDirect=function(F,J,ut,ot,et,Rt){J===null&&(J=ce);const Lt=et.isMesh&&et.matrixWorld.determinant()<0,Ft=Bc(F,J,ut,ot,et);Pt.setMaterial(ot,Lt);let Ht=ut.index,ee=1;if(ot.wireframe===!0){if(Ht=gt.getWireframeAttribute(ut),Ht===void 0)return;ee=2}const re=ut.drawRange,Qt=ut.attributes.position;let he=re.start*ee,Ae=(re.start+re.count)*ee;Rt!==null&&(he=Math.max(he,Rt.start*ee),Ae=Math.min(Ae,(Rt.start+Rt.count)*ee)),Ht!==null?(he=Math.max(he,0),Ae=Math.min(Ae,Ht.count)):Qt!=null&&(he=Math.max(he,0),Ae=Math.min(Ae,Qt.count));const we=Ae-he;if(we<0||we===1/0)return;j.setup(et,ot,Ft,ut,Ht);let Me,Oe=kt;if(Ht!==null&&(Me=at.get(Ht),Oe=zt,Oe.setIndex(Me)),et.isMesh)ot.wireframe===!0?(Pt.setLineWidth(ot.wireframeLinewidth*ne()),Oe.setMode(q.LINES)):Oe.setMode(q.TRIANGLES);else if(et.isLine){let te=ot.linewidth;te===void 0&&(te=1),Pt.setLineWidth(te*ne()),et.isLineSegments?Oe.setMode(q.LINES):et.isLineLoop?Oe.setMode(q.LINE_LOOP):Oe.setMode(q.LINE_STRIP)}else et.isPoints?Oe.setMode(q.POINTS):et.isSprite&&Oe.setMode(q.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Oe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const te=et._multiDrawStarts,We=et._multiDrawCounts,be=et._multiDrawCount,vn=Ht?at.get(Ht).bytesPerElement:1,ma=Wt.get(ot).currentProgram.getUniforms();for(let Ye=0;Ye<be;Ye++)ma.setValue(q,"_gl_DrawID",Ye),Oe.render(te[Ye]/vn,We[Ye])}else if(et.isInstancedMesh)Oe.renderInstances(he,we,et.count);else if(ut.isInstancedBufferGeometry){const te=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,We=Math.min(ut.instanceCount,te);Oe.renderInstances(he,we,We)}else Oe.render(he,we)};function Cn(F,J,ut){F.transparent===!0&&F.side===sa&&F.forceSinglePass===!1?(F.side=kn,F.needsUpdate=!0,hn(F,J,ut),F.side=Za,F.needsUpdate=!0,hn(F,J,ut),F.side=sa):hn(F,J,ut)}this.compile=function(F,J,ut=null){ut===null&&(ut=F),U=$t.get(ut),U.init(J),E.push(U),ut.traverseVisible(function(et){et.isLight&&et.layers.test(J.layers)&&(U.pushLight(et),et.castShadow&&U.pushShadow(et))}),F!==ut&&F.traverseVisible(function(et){et.isLight&&et.layers.test(J.layers)&&(U.pushLight(et),et.castShadow&&U.pushShadow(et))}),U.setupLights();const ot=new Set;return F.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Rt=et.material;if(Rt)if(Array.isArray(Rt))for(let Lt=0;Lt<Rt.length;Lt++){const Ft=Rt[Lt];Cn(Ft,ut,et),ot.add(Ft)}else Cn(Rt,ut,et),ot.add(Rt)}),U=E.pop(),ot},this.compileAsync=function(F,J,ut=null){const ot=this.compile(F,J,ut);return new Promise(et=>{function Rt(){if(ot.forEach(function(Lt){Wt.get(Lt).currentProgram.isReady()&&ot.delete(Lt)}),ot.size===0){et(F);return}setTimeout(Rt,10)}le.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Wn=null;function Vo(F){Wn&&Wn(F)}function ws(){pi.stop()}function Ds(){pi.start()}const pi=new Vg;pi.setAnimationLoop(Vo),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(F){Wn=F,wt.setAnimationLoop(F),F===null?pi.stop():pi.start()},wt.addEventListener("sessionstart",ws),wt.addEventListener("sessionend",Ds),this.render=function(F,J){if(J!==void 0&&J.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(J),J=wt.getCamera()),F.isScene===!0&&F.onBeforeRender(T,F,J,A),U=$t.get(F,E.length),U.init(J),E.push(U),Nt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(Nt,Ui,J.reversedDepth),yt=this.localClippingEnabled,nt=jt.init(this.clippingPlanes,yt),D=Dt.get(F,N.length),D.init(),N.push(D),wt.enabled===!0&&wt.isPresenting===!0){const Rt=T.xr.getDepthSensingMesh();Rt!==null&&Ka(Rt,J,-1/0,T.sortObjects)}Ka(F,J,0,T.sortObjects),D.finish(),T.sortObjects===!0&&D.sort(V,tt),Zt=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Zt&&At.addToRenderList(D,F),this.info.render.frame++,nt===!0&&jt.beginShadows();const ut=U.state.shadowsArray;Et.render(ut,F,J),nt===!0&&jt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=D.opaque,et=D.transmissive;if(U.setupLights(),J.isArrayCamera){const Rt=J.cameras;if(et.length>0)for(let Lt=0,Ft=Rt.length;Lt<Ft;Lt++){const Ht=Rt[Lt];Ls(ot,et,F,Ht)}Zt&&At.render(F);for(let Lt=0,Ft=Rt.length;Lt<Ft;Lt++){const Ht=Rt[Lt];Us(D,F,Ht,Ht.viewport)}}else et.length>0&&Ls(ot,et,F,J),Zt&&At.render(F),Us(D,F,J);A!==null&&R===0&&(ae.updateMultisampleRenderTarget(A),ae.updateRenderTargetMipmap(A)),F.isScene===!0&&F.onAfterRender(T,F,J),j.resetDefaultState(),O=-1,P=null,E.pop(),E.length>0?(U=E[E.length-1],nt===!0&&jt.setGlobalState(T.clippingPlanes,U.state.camera)):U=null,N.pop(),N.length>0?D=N[N.length-1]:D=null};function Ka(F,J,ut,ot){if(F.visible===!1)return;if(F.layers.test(J.layers)){if(F.isGroup)ut=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(J);else if(F.isLight)U.pushLight(F),F.castShadow&&U.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Q.intersectsSprite(F)){ot&&Xt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Nt);const Lt=Mt.update(F),Ft=F.material;Ft.visible&&D.push(F,Lt,Ft,ut,Xt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||Q.intersectsObject(F))){const Lt=Mt.update(F),Ft=F.material;if(ot&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Xt.copy(F.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Xt.copy(Lt.boundingSphere.center)),Xt.applyMatrix4(F.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ft)){const Ht=Lt.groups;for(let ee=0,re=Ht.length;ee<re;ee++){const Qt=Ht[ee],he=Ft[Qt.materialIndex];he&&he.visible&&D.push(F,Lt,he,ut,Xt.z,Qt)}}else Ft.visible&&D.push(F,Lt,Ft,ut,Xt.z,null)}}const Rt=F.children;for(let Lt=0,Ft=Rt.length;Lt<Ft;Lt++)Ka(Rt[Lt],J,ut,ot)}function Us(F,J,ut,ot){const{opaque:et,transmissive:Rt,transparent:Lt}=F;U.setupLightsView(ut),nt===!0&&jt.setGlobalState(T.clippingPlanes,ut),ot&&Pt.viewport(H.copy(ot)),et.length>0&&qn(et,J,ut),Rt.length>0&&qn(Rt,J,ut),Lt.length>0&&qn(Lt,J,ut),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ls(F,J,ut,ot){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[ot.id]===void 0&&(U.state.transmissionRenderTarget[ot.id]=new Ar(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?As:fa,minFilter:br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Rt=U.state.transmissionRenderTarget[ot.id],Lt=ot.viewport||H;Rt.setSize(Lt.z*T.transmissionResolutionScale,Lt.w*T.transmissionResolutionScale);const Ft=T.getRenderTarget(),Ht=T.getActiveCubeFace(),ee=T.getActiveMipmapLevel();T.setRenderTarget(Rt),T.getClearColor(I),k=T.getClearAlpha(),k<1&&T.setClearColor(16777215,.5),T.clear(),Zt&&At.render(ut);const re=T.toneMapping;T.toneMapping=Ya;const Qt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),U.setupLightsView(ot),nt===!0&&jt.setGlobalState(T.clippingPlanes,ot),qn(F,ut,ot),ae.updateMultisampleRenderTarget(Rt),ae.updateRenderTargetMipmap(Rt),le.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ae=0,we=J.length;Ae<we;Ae++){const Me=J[Ae],{object:Oe,geometry:te,material:We,group:be}=Me;if(We.side===sa&&Oe.layers.test(ot.layers)){const vn=We.side;We.side=kn,We.needsUpdate=!0,sn(Oe,ut,ot,te,We,be),We.side=vn,We.needsUpdate=!0,he=!0}}he===!0&&(ae.updateMultisampleRenderTarget(Rt),ae.updateRenderTargetMipmap(Rt))}T.setRenderTarget(Ft,Ht,ee),T.setClearColor(I,k),Qt!==void 0&&(ot.viewport=Qt),T.toneMapping=re}function qn(F,J,ut){const ot=J.isScene===!0?J.overrideMaterial:null;for(let et=0,Rt=F.length;et<Rt;et++){const Lt=F[et],{object:Ft,geometry:Ht,group:ee}=Lt;let re=Lt.material;re.allowOverride===!0&&ot!==null&&(re=ot),Ft.layers.test(ut.layers)&&sn(Ft,J,ut,Ht,re,ee)}}function sn(F,J,ut,ot,et,Rt){F.onBeforeRender(T,J,ut,ot,et,Rt),F.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),et.onBeforeRender(T,J,ut,ot,F,Rt),et.transparent===!0&&et.side===sa&&et.forceSinglePass===!1?(et.side=kn,et.needsUpdate=!0,T.renderBufferDirect(ut,J,ot,et,F,Rt),et.side=Za,et.needsUpdate=!0,T.renderBufferDirect(ut,J,ot,et,F,Rt),et.side=sa):T.renderBufferDirect(ut,J,ot,et,F,Rt),F.onAfterRender(T,J,ut,ot,et,Rt)}function hn(F,J,ut){J.isScene!==!0&&(J=ce);const ot=Wt.get(F),et=U.state.lights,Rt=U.state.shadowsArray,Lt=et.state.version,Ft=dt.getParameters(F,et.state,Rt,J,ut),Ht=dt.getProgramCacheKey(Ft);let ee=ot.programs;ot.environment=F.isMeshStandardMaterial?J.environment:null,ot.fog=J.fog,ot.envMap=(F.isMeshStandardMaterial?B:G).get(F.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&F.envMap===null?J.environmentRotation:F.envMapRotation,ee===void 0&&(F.addEventListener("dispose",oe),ee=new Map,ot.programs=ee);let re=ee.get(Ht);if(re!==void 0){if(ot.currentProgram===re&&ot.lightsStateVersion===Lt)return Rr(F,Ft),re}else Ft.uniforms=dt.getUniforms(F),F.onBeforeCompile(Ft,T),re=dt.acquireProgram(Ft,Ht),ee.set(Ht,re),ot.uniforms=Ft.uniforms;const Qt=ot.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Qt.clippingPlanes=jt.uniform),Rr(F,Ft),ot.needsLights=Go(F),ot.lightsStateVersion=Lt,ot.needsLights&&(Qt.ambientLightColor.value=et.state.ambient,Qt.lightProbe.value=et.state.probe,Qt.directionalLights.value=et.state.directional,Qt.directionalLightShadows.value=et.state.directionalShadow,Qt.spotLights.value=et.state.spot,Qt.spotLightShadows.value=et.state.spotShadow,Qt.rectAreaLights.value=et.state.rectArea,Qt.ltc_1.value=et.state.rectAreaLTC1,Qt.ltc_2.value=et.state.rectAreaLTC2,Qt.pointLights.value=et.state.point,Qt.pointLightShadows.value=et.state.pointShadow,Qt.hemisphereLights.value=et.state.hemi,Qt.directionalShadowMap.value=et.state.directionalShadowMap,Qt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Qt.spotShadowMap.value=et.state.spotShadowMap,Qt.spotLightMatrix.value=et.state.spotLightMatrix,Qt.spotLightMap.value=et.state.spotLightMap,Qt.pointShadowMap.value=et.state.pointShadowMap,Qt.pointShadowMatrix.value=et.state.pointShadowMatrix),ot.currentProgram=re,ot.uniformsList=null,re}function Ni(F){if(F.uniformsList===null){const J=F.currentProgram.getUniforms();F.uniformsList=Ac.seqWithValue(J.seq,F.uniforms)}return F.uniformsList}function Rr(F,J){const ut=Wt.get(F);ut.outputColorSpace=J.outputColorSpace,ut.batching=J.batching,ut.batchingColor=J.batchingColor,ut.instancing=J.instancing,ut.instancingColor=J.instancingColor,ut.instancingMorph=J.instancingMorph,ut.skinning=J.skinning,ut.morphTargets=J.morphTargets,ut.morphNormals=J.morphNormals,ut.morphColors=J.morphColors,ut.morphTargetsCount=J.morphTargetsCount,ut.numClippingPlanes=J.numClippingPlanes,ut.numIntersection=J.numClipIntersection,ut.vertexAlphas=J.vertexAlphas,ut.vertexTangents=J.vertexTangents,ut.toneMapping=J.toneMapping}function Bc(F,J,ut,ot,et){J.isScene!==!0&&(J=ce),ae.resetTextureUnits();const Rt=J.fog,Lt=ot.isMeshStandardMaterial?J.environment:null,Ft=A===null?T.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Es,Ht=(ot.isMeshStandardMaterial?B:G).get(ot.envMap||Lt),ee=ot.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,re=!!ut.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Qt=!!ut.morphAttributes.position,he=!!ut.morphAttributes.normal,Ae=!!ut.morphAttributes.color;let we=Ya;ot.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(we=T.toneMapping);const Me=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Oe=Me!==void 0?Me.length:0,te=Wt.get(ot),We=U.state.lights;if(nt===!0&&(yt===!0||F!==P)){const Sn=F===P&&ot.id===O;jt.setState(ot,F,Sn)}let be=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==We.state.version||te.outputColorSpace!==Ft||et.isBatchedMesh&&te.batching===!1||!et.isBatchedMesh&&te.batching===!0||et.isBatchedMesh&&te.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&te.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&te.instancing===!1||!et.isInstancedMesh&&te.instancing===!0||et.isSkinnedMesh&&te.skinning===!1||!et.isSkinnedMesh&&te.skinning===!0||et.isInstancedMesh&&te.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&te.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&te.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&te.instancingMorph===!1&&et.morphTexture!==null||te.envMap!==Ht||ot.fog===!0&&te.fog!==Rt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==jt.numPlanes||te.numIntersection!==jt.numIntersection)||te.vertexAlphas!==ee||te.vertexTangents!==re||te.morphTargets!==Qt||te.morphNormals!==he||te.morphColors!==Ae||te.toneMapping!==we||te.morphTargetsCount!==Oe)&&(be=!0):(be=!0,te.__version=ot.version);let vn=te.currentProgram;be===!0&&(vn=hn(ot,J,et));let ma=!1,Ye=!1,Oi=!1;const Ze=vn.getUniforms(),_n=te.uniforms;if(Pt.useProgram(vn.program)&&(ma=!0,Ye=!0,Oi=!0),ot.id!==O&&(O=ot.id,Ye=!0),ma||P!==F){Pt.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),Ze.setValue(q,"projectionMatrix",F.projectionMatrix),Ze.setValue(q,"viewMatrix",F.matrixWorldInverse);const bn=Ze.map.cameraPosition;bn!==void 0&&bn.setValue(q,Ot.setFromMatrixPosition(F.matrixWorld)),ge.logarithmicDepthBuffer&&Ze.setValue(q,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ze.setValue(q,"isOrthographic",F.isOrthographicCamera===!0),P!==F&&(P=F,Ye=!0,Oi=!0)}if(et.isSkinnedMesh){Ze.setOptional(q,et,"bindMatrix"),Ze.setOptional(q,et,"bindMatrixInverse");const Sn=et.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ze.setValue(q,"boneTexture",Sn.boneTexture,ae))}et.isBatchedMesh&&(Ze.setOptional(q,et,"batchingTexture"),Ze.setValue(q,"batchingTexture",et._matricesTexture,ae),Ze.setOptional(q,et,"batchingIdTexture"),Ze.setValue(q,"batchingIdTexture",et._indirectTexture,ae),Ze.setOptional(q,et,"batchingColorTexture"),et._colorsTexture!==null&&Ze.setValue(q,"batchingColorTexture",et._colorsTexture,ae));const pn=ut.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Kt.update(et,ut,vn),(Ye||te.receiveShadow!==et.receiveShadow)&&(te.receiveShadow=et.receiveShadow,Ze.setValue(q,"receiveShadow",et.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(_n.envMap.value=Ht,_n.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&J.environment!==null&&(_n.envMapIntensity.value=J.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=yE()),Ye&&(Ze.setValue(q,"toneMappingExposure",T.toneMappingExposure),te.needsLights&&zc(_n,Oi),Rt&&ot.fog===!0&&qt.refreshFogUniforms(_n,Rt),qt.refreshMaterialUniforms(_n,ot,lt,it,U.state.transmissionRenderTarget[F.id]),Ac.upload(q,Ni(te),_n,ae)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ac.upload(q,Ni(te),_n,ae),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ze.setValue(q,"center",et.center),Ze.setValue(q,"modelViewMatrix",et.modelViewMatrix),Ze.setValue(q,"normalMatrix",et.normalMatrix),Ze.setValue(q,"modelMatrix",et.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Sn=ot.uniformsGroups;for(let bn=0,Ti=Sn.length;bn<Ti;bn++){const Pi=Sn[bn];Ut.update(Pi,vn),Ut.bind(Pi,vn)}}return vn}function zc(F,J){F.ambientLightColor.needsUpdate=J,F.lightProbe.needsUpdate=J,F.directionalLights.needsUpdate=J,F.directionalLightShadows.needsUpdate=J,F.pointLights.needsUpdate=J,F.pointLightShadows.needsUpdate=J,F.spotLights.needsUpdate=J,F.spotLightShadows.needsUpdate=J,F.rectAreaLights.needsUpdate=J,F.hemisphereLights.needsUpdate=J}function Go(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(F,J,ut){const ot=Wt.get(F);ot.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Wt.get(F.texture).__webglTexture=J,Wt.get(F.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ut,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,J){const ut=Wt.get(F);ut.__webglFramebuffer=J,ut.__useDefaultFramebuffer=J===void 0};const Qa=q.createFramebuffer();this.setRenderTarget=function(F,J=0,ut=0){A=F,L=J,R=ut;let ot=!0,et=null,Rt=!1,Lt=!1;if(F){const Ht=Wt.get(F);if(Ht.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(q.FRAMEBUFFER,null),ot=!1;else if(Ht.__webglFramebuffer===void 0)ae.setupRenderTarget(F);else if(Ht.__hasExternalTextures)ae.rebindTextures(F,Wt.get(F.texture).__webglTexture,Wt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Qt=F.depthTexture;if(Ht.__boundDepthTexture!==Qt){if(Qt!==null&&Wt.has(Qt)&&(F.width!==Qt.image.width||F.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(F)}}const ee=F.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Lt=!0);const re=Wt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(re[J])?et=re[J][ut]:et=re[J],Rt=!0):F.samples>0&&ae.useMultisampledRTT(F)===!1?et=Wt.get(F).__webglMultisampledFramebuffer:Array.isArray(re)?et=re[ut]:et=re,H.copy(F.viewport),W.copy(F.scissor),X=F.scissorTest}else H.copy(ht).multiplyScalar(lt).floor(),W.copy(pt).multiplyScalar(lt).floor(),X=bt;if(ut!==0&&(et=Qa),Pt.bindFramebuffer(q.FRAMEBUFFER,et)&&ot&&Pt.drawBuffers(F,et),Pt.viewport(H),Pt.scissor(W),Pt.setScissorTest(X),Rt){const Ht=Wt.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ht.__webglTexture,ut)}else if(Lt){const Ht=J;for(let ee=0;ee<F.textures.length;ee++){const re=Wt.get(F.textures[ee]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ee,re.__webglTexture,ut,Ht)}}else if(F!==null&&ut!==0){const Ht=Wt.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ht.__webglTexture,ut)}O=-1},this.readRenderTargetPixels=function(F,J,ut,ot,et,Rt,Lt,Ft=0){if(!(F&&F.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Wt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht){Pt.bindFramebuffer(q.FRAMEBUFFER,Ht);try{const ee=F.textures[Ft],re=ee.format,Qt=ee.type;if(!ge.textureFormatReadable(re)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Qt)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=F.width-ot&&ut>=0&&ut<=F.height-et&&(F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft),q.readPixels(J,ut,ot,et,se.convert(re),se.convert(Qt),Rt))}finally{const ee=A!==null?Wt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(q.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(F,J,ut,ot,et,Rt,Lt,Ft=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Wt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht)if(J>=0&&J<=F.width-ot&&ut>=0&&ut<=F.height-et){Pt.bindFramebuffer(q.FRAMEBUFFER,Ht);const ee=F.textures[Ft],re=ee.format,Qt=ee.type;if(!ge.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,he),q.bufferData(q.PIXEL_PACK_BUFFER,Rt.byteLength,q.STREAM_READ),F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft),q.readPixels(J,ut,ot,et,se.convert(re),se.convert(Qt),0);const Ae=A!==null?Wt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(q.FRAMEBUFFER,Ae);const we=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await ey(q,we,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,he),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Rt),q.deleteBuffer(he),q.deleteSync(we),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,J=null,ut=0){const ot=Math.pow(2,-ut),et=Math.floor(F.image.width*ot),Rt=Math.floor(F.image.height*ot),Lt=J!==null?J.x:0,Ft=J!==null?J.y:0;ae.setTexture2D(F,0),q.copyTexSubImage2D(q.TEXTURE_2D,ut,0,0,Lt,Ft,et,Rt),Pt.unbindTexture()};const Ns=q.createFramebuffer(),pa=q.createFramebuffer();this.copyTextureToTexture=function(F,J,ut=null,ot=null,et=0,Rt=null){Rt===null&&(et!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=et,et=0):Rt=0);let Lt,Ft,Ht,ee,re,Qt,he,Ae,we;const Me=F.isCompressedTexture?F.mipmaps[Rt]:F.image;if(ut!==null)Lt=ut.max.x-ut.min.x,Ft=ut.max.y-ut.min.y,Ht=ut.isBox3?ut.max.z-ut.min.z:1,ee=ut.min.x,re=ut.min.y,Qt=ut.isBox3?ut.min.z:0;else{const pn=Math.pow(2,-et);Lt=Math.floor(Me.width*pn),Ft=Math.floor(Me.height*pn),F.isDataArrayTexture?Ht=Me.depth:F.isData3DTexture?Ht=Math.floor(Me.depth*pn):Ht=1,ee=0,re=0,Qt=0}ot!==null?(he=ot.x,Ae=ot.y,we=ot.z):(he=0,Ae=0,we=0);const Oe=se.convert(J.format),te=se.convert(J.type);let We;J.isData3DTexture?(ae.setTexture3D(J,0),We=q.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ae.setTexture2DArray(J,0),We=q.TEXTURE_2D_ARRAY):(ae.setTexture2D(J,0),We=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment);const be=q.getParameter(q.UNPACK_ROW_LENGTH),vn=q.getParameter(q.UNPACK_IMAGE_HEIGHT),ma=q.getParameter(q.UNPACK_SKIP_PIXELS),Ye=q.getParameter(q.UNPACK_SKIP_ROWS),Oi=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,Me.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Me.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ee),q.pixelStorei(q.UNPACK_SKIP_ROWS,re),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Qt);const Ze=F.isDataArrayTexture||F.isData3DTexture,_n=J.isDataArrayTexture||J.isData3DTexture;if(F.isDepthTexture){const pn=Wt.get(F),Sn=Wt.get(J),bn=Wt.get(pn.__renderTarget),Ti=Wt.get(Sn.__renderTarget);Pt.bindFramebuffer(q.READ_FRAMEBUFFER,bn.__webglFramebuffer),Pt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Pi=0;Pi<Ht;Pi++)Ze&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Wt.get(F).__webglTexture,et,Qt+Pi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Wt.get(J).__webglTexture,Rt,we+Pi)),q.blitFramebuffer(ee,re,Lt,Ft,he,Ae,Lt,Ft,q.DEPTH_BUFFER_BIT,q.NEAREST);Pt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(et!==0||F.isRenderTargetTexture||Wt.has(F)){const pn=Wt.get(F),Sn=Wt.get(J);Pt.bindFramebuffer(q.READ_FRAMEBUFFER,Ns),Pt.bindFramebuffer(q.DRAW_FRAMEBUFFER,pa);for(let bn=0;bn<Ht;bn++)Ze?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,pn.__webglTexture,et,Qt+bn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,pn.__webglTexture,et),_n?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Sn.__webglTexture,Rt,we+bn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Sn.__webglTexture,Rt),et!==0?q.blitFramebuffer(ee,re,Lt,Ft,he,Ae,Lt,Ft,q.COLOR_BUFFER_BIT,q.NEAREST):_n?q.copyTexSubImage3D(We,Rt,he,Ae,we+bn,ee,re,Lt,Ft):q.copyTexSubImage2D(We,Rt,he,Ae,ee,re,Lt,Ft);Pt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else _n?F.isDataTexture||F.isData3DTexture?q.texSubImage3D(We,Rt,he,Ae,we,Lt,Ft,Ht,Oe,te,Me.data):J.isCompressedArrayTexture?q.compressedTexSubImage3D(We,Rt,he,Ae,we,Lt,Ft,Ht,Oe,Me.data):q.texSubImage3D(We,Rt,he,Ae,we,Lt,Ft,Ht,Oe,te,Me):F.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Rt,he,Ae,Lt,Ft,Oe,te,Me.data):F.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Rt,he,Ae,Me.width,Me.height,Oe,Me.data):q.texSubImage2D(q.TEXTURE_2D,Rt,he,Ae,Lt,Ft,Oe,te,Me);q.pixelStorei(q.UNPACK_ROW_LENGTH,be),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,vn),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ma),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ye),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Oi),Rt===0&&J.generateMipmaps&&q.generateMipmap(We),Pt.unbindTexture()},this.initRenderTarget=function(F){Wt.get(F).__webglFramebuffer===void 0&&ae.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?ae.setTextureCube(F,0):F.isData3DTexture?ae.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?ae.setTexture2DArray(F,0):ae.setTexture2D(F,0),Pt.unbindTexture()},this.resetState=function(){L=0,R=0,A=null,Pt.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}function bE(){const c=Pe.useRef(null),e=Pe.useRef(null),i=Pe.useRef(null),r=Pe.useRef(null);return Pe.useEffect(()=>{const l=c.current;if(!l)return;const s=new Ry,f=new ME({antialias:!0,alpha:!0});f.setPixelRatio(Math.min(2,window.devicePixelRatio)),f.setSize(l.clientWidth,l.clientHeight),f.domElement.style.width="100%",f.domElement.style.height="100%",l.appendChild(f.domElement);const u=new Hg(-l.clientWidth/2,l.clientWidth/2,l.clientHeight/2,-l.clientHeight/2,.1,10);u.position.z=1;const h=2e3,p=new Float32Array(h*3),x=new Float32Array(h*2),_=new Float32Array(h*2),g=new Li;g.setAttribute("position",new Ei(p,3));const d=new zg({size:3,color:new Be(.6,.9,1),transparent:!0,opacity:.8,blending:Td,depthWrite:!1}),S=new Ly(g,d);s.add(S);const M=()=>{const N=l.clientWidth,E=l.clientHeight;for(let T=0;T<h;T++){const w=T*3,L=(Math.random()-.5)*N,R=(Math.random()-.5)*E;p[w]=L,p[w+1]=R,p[w+2]=0,_[T*2]=L,_[T*2+1]=R,x[T*2]=(Math.random()-.5)*30,x[T*2+1]=(Math.random()-.5)*30}g.attributes.position.needsUpdate=!0,u.left=-N/2,u.right=N/2,u.top=E/2,u.bottom=-E/2,u.updateProjectionMatrix(),f.setSize(N,E)};M(),window.addEventListener("resize",M);let y=null,b=null,D=null;Dc().then(N=>{y=N,e.current=N,b=document.createElement("canvas"),D=b.getContext("2d"),D&&(b.width=200,b.height=120)}).catch(N=>console.error(N));const U=()=>{const N=l.clientWidth,E=l.clientHeight,T=1/60;if(y&&D&&b){D.save(),D.clearRect(0,0,b.width,b.height),D.translate(b.width,0),D.scale(-1,1),D.drawImage(y,0,0,b.width,b.height),D.restore();const O=D.getImageData(0,0,b.width,b.height).data,P=r.current;for(let H=0;H<b.height;H+=2)for(let W=0;W<b.width;W+=2){const X=(H*b.width+W)*4;let I=0;if(P&&P.length===O.length){const k=O[X]-P[X],Z=O[X+1]-P[X+1],it=O[X+2]-P[X+2],lt=Math.abs(k)+Math.abs(Z)+Math.abs(it);I=Math.min(1,lt/384)}if(I>.2){const k=(W/b.width-.5)*N,Z=(H/b.height-.5)*E;for(let it=0;it<8;it++){const lt=(X+it*17)%h,V=x[lt*2],tt=x[lt*2+1],ht=p[lt*3]-k,pt=p[lt*3+1]-Z,bt=ht*ht+pt*pt+.001,Q=1/Math.sqrt(bt);x[lt*2]=V+ht*Q*80*I*T,x[lt*2+1]=tt+pt*Q*80*I*T}}}!P||P.length!==O.length?r.current=new Uint8ClampedArray(O):P.set(O)}const w=.99,L=40,R=5;for(let A=0;A<h;A++){const O=A*3;let P=p[O],H=p[O+1],W=x[A*2],X=x[A*2+1];W+=(Math.random()-.5)*L,X+=(Math.random()-.5)*L;const I=Math.sin(H*.003+T*60)*30,k=Math.cos(P*.003+T*50)*30;W+=I*T,X+=k*T;for(let Z=0;Z<4;Z++){const it=(A+Z*73)%h;if(it===A)continue;const lt=P-p[it*3],V=H-p[it*3+1],tt=lt*lt+V*V;if(tt<(R*3)**2&&tt>.01){const ht=1/Math.sqrt(tt);W+=lt*ht*50*T,X+=V*ht*50*T}}W*=w,X*=w,P+=W*T,H+=X*T,P<-N/2?(P=-N/2,W=Math.abs(W)):P>N/2&&(P=N/2,W=-Math.abs(W)),H<-E/2?(H=-E/2,X=Math.abs(X)):H>E/2&&(H=E/2,X=-Math.abs(X)),p[O]=P,p[O+1]=H,x[A*2]=W,x[A*2+1]=X}g.attributes.position.needsUpdate=!0,f.render(s,u),i.current=requestAnimationFrame(U)};return U(),()=>{i.current!==null&&cancelAnimationFrame(i.current),f.dispose(),g.dispose(),d.dispose(),window.removeEventListener("resize",M),e.current&&e.current.srcObject instanceof MediaStream&&e.current.srcObject.getTracks().forEach(N=>N.stop())}},[]),tn.jsx("div",{ref:c,className:"mirror-container"})}function EE(){const c=Pe.useRef(null),e=Pe.useRef(null),i=Pe.useRef(null),r=Pe.useRef(null);return Pe.useEffect(()=>{let l=!1;return(async()=>{const f=c.current;if(!f)return;const u=f.getContext("2d");if(!u)return;const h=await Dc();if(l){h.srcObject instanceof MediaStream&&h.srcObject.getTracks().forEach(b=>b.stop());return}e.current=h;const p=document.createElement("canvas"),x=p.getContext("2d");if(!x)return;const _=2500,g=new Float32Array(_*2),d=new Float32Array(_*2),S=()=>{const b=f.clientWidth||800,D=f.clientHeight||600;f.width=b,f.height=D;for(let U=0;U<_;U++)g[U*2]=Math.random()*b,g[U*2+1]=Math.random()*D,d[U*2]=(Math.random()-.5)*30,d[U*2+1]=(Math.random()-.5)*30};S(),window.addEventListener("resize",S);const M=(b,D,U)=>({x:Math.sin(.0015*b+U*.7)*60,y:Math.cos(.0012*D+U*.6)*60}),y=()=>{const b=f.clientWidth||800,D=f.clientHeight||600;(f.width!==b||f.height!==D)&&S();const U=8,N=Math.max(1,Math.floor(b/U)),E=Math.max(1,Math.floor(D/U));p.width=N,p.height=E,x.save(),x.clearRect(0,0,N,E),x.translate(N,0),x.scale(-1,1),x.drawImage(h,0,0,N,E),x.restore();const w=x.getImageData(0,0,N,E).data,L=r.current,R=performance.now()*.001;for(let O=0;O<E;O+=2)for(let P=0;P<N;P+=2){const H=(O*N+P)*4;let W=0;if(L&&L.length===w.length){const X=w[H]-L[H],I=w[H+1]-L[H+1],k=w[H+2]-L[H+2],Z=Math.abs(X)+Math.abs(I)+Math.abs(k);W=Math.min(1,Z/384)}if(W>.25)for(let X=0;X<10;X++){const I=(H+X*29)%_;d[I*2]+=(Math.random()-.5)*120*W,d[I*2+1]+=(Math.random()-.5)*120*W}}!L||L.length!==w.length?r.current=new Uint8ClampedArray(w):L.set(w);const A=.985;for(let O=0;O<_;O++){let P=g[O*2],H=g[O*2+1],W=d[O*2],X=d[O*2+1];const I=M(P,H,R);W+=I.x*.05,X+=I.y*.05,W*=A,X*=A,P+=W*.016,H+=X*.016,P<0&&(P+=b),P>b&&(P-=b),H<0&&(H+=D),H>D&&(H-=D),g[O*2]=P,g[O*2+1]=H,d[O*2]=W,d[O*2+1]=X}u.fillStyle="#050816",u.fillRect(0,0,b,D),u.save(),u.globalAlpha=.03,u.drawImage(p,0,0,N,E,0,0,b,D),u.restore(),u.fillStyle="rgba(90, 200, 255, 0.35)";for(let O=0;O<_;O++){const P=g[O*2],H=g[O*2+1];u.beginPath(),u.arc(P,H,1.6,0,Math.PI*2),u.fill()}i.current=requestAnimationFrame(y)};y()})(),()=>{l=!0,i.current!==null&&cancelAnimationFrame(i.current);const f=e.current;f&&f.srcObject instanceof MediaStream&&f.srcObject.getTracks().forEach(u=>u.stop()),r.current=null}},[]),tn.jsx("canvas",{ref:c,className:"pixel-canvas"})}const TE={1:"Simple Gas (Canvas)",2:"Physics Gas (Matter.js)",3:"Three.js Points",4:"Flow Field"};function AE(){const[c,e]=Pe.useState(1);return Pe.useEffect(()=>{const i=r=>{r.key==="1"&&e(1),r.key==="2"&&e(2),r.key==="3"&&e(3),r.key==="4"&&e(4)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]),tn.jsxs("div",{className:"app-root",children:[tn.jsxs("div",{className:"mirror-container",children:[c===1&&tn.jsx(oS,{}),c===2&&tn.jsx(fS,{}),c===3&&tn.jsx(bE,{}),c===4&&tn.jsx(EE,{})]}),tn.jsx("div",{className:"overlay",children:tn.jsxs("div",{className:"overlay-inner",children:[tn.jsx("h1",{children:"Particle Mirror"}),tn.jsx("p",{children:"Press 1/2/3/4 to compare different physics/rendering modes."}),tn.jsxs("ul",{children:[tn.jsx("li",{children:"1: Simple gas (Canvas)"}),tn.jsx("li",{children:"2: Physics gas (Matter.js)"}),tn.jsx("li",{children:"3: Three.js Points"}),tn.jsx("li",{children:"4: Flow Field"})]}),tn.jsxs("p",{className:"mode-label",children:["Current mode: ",TE[c]]})]})})]})}sS.createRoot(document.getElementById("root")).render(tn.jsx(Pe.StrictMode,{children:tn.jsx(AE,{})}));
