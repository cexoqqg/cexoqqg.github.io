(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c07edc92"],{"0759":function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var r=a("2b0e"),n=a("b42e"),i=a("c637"),s=a("a723"),o=a("992e"),c=a("d82f"),l=a("cf75"),u=a("fa73"),d=a("7386"),b=a("aa0d");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v=function t(e,a){if(!e)return null;var r=(e.$options||{}).components,n=r[a];return n||t(e.$parent,a)},g=Object(l["d"])(Object(c["m"])(f(f({},Object(c["j"])(b["b"],["content","stacked"])),{},{icon:Object(l["c"])(s["u"]),stacked:Object(l["c"])(s["g"],!1)})),i["ib"]),h=r["default"].extend({name:i["ib"],functional:!0,props:g,render:function(t,e){var a=e.data,r=e.props,i=e.parent,s=Object(u["e"])(Object(u["h"])(r.icon||"")).replace(o["p"],"");return t(s&&v(i,"BIcon".concat(s))||d["a"],Object(n["a"])(a,{props:f(f({},r),{},{icon:null})}))}})},"223c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toastification"},[a("div",{staticClass:"d-flex align-items-start"},[a("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[a("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),a("div",{staticClass:"d-flex flex-grow-1"},[a("div",[t.title?a("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?a("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),a("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():a("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},n=[],i=a("e8a3"),s={components:{BAvatar:i["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=s,c=(a("b549"),a("2877")),l=Object(c["a"])(o,r,n,!1,null,"55dd3057",null);e["a"]=l.exports},"2b3a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-wrapper auth-v2"},[a("b-row",{staticClass:"auth-inner m-0"},[a("b-link",{staticClass:"brand-logo"},[a("vuexy-logo"),a("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Vuexy ")])],1),a("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[a("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[a("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Register V2"}})],1)]),a("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[a("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[a("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v(" Adventure starts here 🚀 ")]),a("b-card-text",{staticClass:"mb-2"},[t._v(" Make your app management easy and fun! ")]),a("validation-observer",{ref:"registerForm"},[a("b-form",{staticClass:"auth-register-form mt-2"},[a("b-form-group",{attrs:{label:"Username","label-for":"register-username"}},[a("validation-provider",{attrs:{name:"Username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("b-form-input",{attrs:{id:"register-username",name:"register-username",state:!(r.length>0)&&null,placeholder:"johndoe"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),a("b-form-group",{attrs:{label:"Email","label-for":"register-email"}},[a("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("b-form-input",{attrs:{id:"register-email",name:"register-email",state:!(r.length>0)&&null,placeholder:"john@example.com"},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),a("b-form-group",{attrs:{"label-for":"register-password",label:"Password"}},[a("validation-provider",{attrs:{name:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[a("b-form-input",{staticClass:"form-control-merge",attrs:{id:"register-password",type:t.passwordFieldType,state:!(r.length>0)&&null,name:"register-password",placeholder:"············"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),a("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),a("b-form-group",[a("b-form-checkbox",{attrs:{id:"register-privacy-policy",name:"checkbox-1"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" I agree to "),a("b-link",[t._v("privacy policy & terms")])],1)],1),a("b-button",{attrs:{variant:"primary",block:"",type:"submit"},on:{click:function(e){return e.preventDefault(),t.validationForm(e)}}},[t._v(" Sign up ")])],1)],1),a("p",{staticClass:"text-center mt-2"},[a("span",[t._v("Already have an account?")]),a("b-link",{attrs:{to:{name:"auth-login-v2"}}},[a("span",[t._v(" Sign in instead")])])],1),a("div",{staticClass:"divider my-2"},[a("div",{staticClass:"divider-text"},[t._v(" or ")])]),a("div",{staticClass:"auth-footer-btn d-flex justify-content-center"},[a("b-button",{attrs:{variant:"facebook",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"FacebookIcon"}})],1),a("b-button",{attrs:{variant:"twitter",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"TwitterIcon"}})],1),a("b-button",{attrs:{variant:"google",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"MailIcon"}})],1),a("b-button",{attrs:{variant:"github",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"GithubIcon"}})],1)],1)],1)],1)],1)],1)},n=[],i=a("7bb1"),s=a("088b"),o=a("a15b"),c=a("4918"),l=a("b28b"),u=a("aa59"),d=a("1947"),b=a("11de"),p=a("d6e4"),f=a("4968"),m=a("c3e6"),v=a("8226"),g=a("4797"),h=a("5e12"),O=a("ccc0"),y=a("8f03"),j=a("b91d"),x=a("4360"),w=a("223c"),C={components:{VuexyLogo:s["a"],BRow:o["a"],BImg:c["a"],BCol:l["a"],BLink:u["a"],BButton:d["a"],BForm:b["a"],BCardText:p["a"],BCardTitle:f["a"],BFormCheckbox:m["a"],BFormGroup:v["a"],BFormInput:g["a"],BInputGroup:h["a"],BInputGroupAppend:O["a"],ValidationProvider:i["b"],ValidationObserver:i["a"]},mixins:[j["a"]],data:function(){return{status:"",username:"",userEmail:"",password:"",sideImg:a("67df"),required:y["l"],email:y["g"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===x["a"].state.appConfig.layout.skin?(this.sideImg=a("99b7"),this.sideImg):this.sideImg}},methods:{validationForm:function(){var t=this;this.$refs.registerForm.validate().then((function(e){e&&t.$toast({component:w["a"],props:{title:"Form Submitted",icon:"EditIcon",variant:"success"}})}))}}},S=C,k=(a("3293"),a("2877")),_=Object(k["a"])(S,r,n,!1,null,null,null);e["default"]=_.exports},3293:function(t,e,a){"use strict";a("3cd2")},"3cd2":function(t,e,a){},"8d81":function(t,e,a){},b549:function(t,e,a){"use strict";a("8d81")},e8a3:function(t,e,a){"use strict";a.d(e,"b",(function(){return S})),a.d(e,"a",(function(){return P}));var r=a("2b0e"),n=a("c637"),i=a("0056"),s=a("a723"),o=a("9b76"),c=a("7b1e"),l=a("3a58"),u=a("d82f"),d=a("cf75"),b=a("4a38"),p=a("8c18"),f=a("0759"),m=a("7386"),v=a("1947"),g=a("aa59");function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){y(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var j="b-avatar",x=["sm",null,"lg"],w=.4,C=.7*w,S=function(t){return t=Object(c["n"])(t)&&Object(c["i"])(t)?Object(l["b"])(t,0):t,Object(c["h"])(t)?"".concat(t,"px"):t||null},k=Object(u["j"])(g["b"],["active","event","routerTag"]),_=Object(d["d"])(Object(u["m"])(O(O({},k),{},{alt:Object(d["c"])(s["u"],"avatar"),ariaLabel:Object(d["c"])(s["u"]),badge:Object(d["c"])(s["j"],!1),badgeLeft:Object(d["c"])(s["g"],!1),badgeOffset:Object(d["c"])(s["u"]),badgeTop:Object(d["c"])(s["g"],!1),badgeVariant:Object(d["c"])(s["u"],"primary"),button:Object(d["c"])(s["g"],!1),buttonType:Object(d["c"])(s["u"],"button"),icon:Object(d["c"])(s["u"]),rounded:Object(d["c"])(s["j"],!1),size:Object(d["c"])(s["p"]),square:Object(d["c"])(s["g"],!1),src:Object(d["c"])(s["u"]),text:Object(d["c"])(s["u"]),variant:Object(d["c"])(s["u"],"secondary")})),n["c"]),P=r["default"].extend({name:n["c"],mixins:[p["a"]],inject:{bvAvatarGroup:{default:null}},props:_,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return S(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,a=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===a||(a||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===x.indexOf(t)?"calc(".concat(t," * ").concat(w,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,a=e?e.overlapScale:0,r=t&&a?"calc(".concat(t," * -").concat(a,")"):null;return r?{marginLeft:r,marginRight:r}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,a=this.badgeLeft,r=this.badgeOffset,n=r||"0px";return{fontSize:-1===x.indexOf(t)?"calc(".concat(t," * ").concat(C," )"):null,top:e?n:null,bottom:e?null:n,left:a?n:null,right:a?null:n}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(i["x"],t)},onClick:function(t){this.$emit(i["f"],t)}},render:function(t){var e,a=this.computedVariant,r=this.disabled,n=this.computedRounded,i=this.icon,s=this.localSrc,c=this.text,l=this.fontStyle,u=this.marginStyle,p=this.computedSize,h=this.button,w=this.buttonType,C=this.badge,S=this.badgeVariant,_=this.badgeStyle,P=!h&&Object(b["d"])(this),I=h?v["a"]:P?g["a"]:"span",B=this.alt,E=this.ariaLabel||null,z=null;this.hasNormalizedSlot()?z=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):s?(z=t("img",{style:a?{}:{width:"100%",height:"100%"},attrs:{src:s,alt:B},on:{error:this.onImgError}}),z=t("span",{staticClass:"b-avatar-img"},[z])):z=i?t(f["a"],{props:{icon:i},attrs:{"aria-hidden":"true",alt:B}}):c?t("span",{staticClass:"b-avatar-text",style:l},[t("span",c)]):t(m["m"],{attrs:{"aria-hidden":"true",alt:B}});var F=t(),T=this.hasNormalizedSlot(o["d"]);if(C||""===C||T){var V=!0===C?"":C;F=t("span",{staticClass:"b-avatar-badge",class:y({},"badge-".concat(S),S),style:_},[T?this.normalizeSlot(o["d"]):V])}var A={staticClass:j,class:(e={},y(e,"".concat(j,"-").concat(p),p&&-1!==x.indexOf(p)),y(e,"badge-".concat(a),!h&&a),y(e,"rounded",!0===n),y(e,"rounded-".concat(n),n&&!0!==n),y(e,"disabled",r),e),style:O(O({},u),{},{width:p,height:p}),attrs:{"aria-label":E||null},props:h?{variant:a,disabled:r,type:w}:P?Object(d["e"])(k,this):{},on:h||P?{click:this.onClick}:{}};return t(I,A,[z,F])}})}}]);
//# sourceMappingURL=chunk-c07edc92.42579517.js.map