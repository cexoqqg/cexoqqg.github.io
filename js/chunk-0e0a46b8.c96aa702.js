(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e0a46b8"],{"58ba":function(t,e,a){"use strict";a("9b23")},"5cf1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-wrapper auth-v2"},[a("b-row",{staticClass:"auth-inner m-0"},[a("b-link",{staticClass:"brand-logo"},[a("vuexy-logo"),a("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Vuexy ")])],1),a("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[a("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[a("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Register V2"}})],1)]),a("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[a("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[a("b-card-title",{staticClass:"mb-1"},[t._v(" Adventure starts here 🚀 ")]),a("b-card-text",{staticClass:"mb-2"},[t._v(" Make your app management easy and fun! ")]),a("validation-observer",{ref:"registerForm",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[a("b-form",{staticClass:"auth-register-form mt-2",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("b-form-group",{attrs:{label:"Username","label-for":"register-username"}},[a("validation-provider",{attrs:{name:"Username",vid:"username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("b-form-input",{attrs:{id:"register-username",name:"register-username",state:!(r.length>0)&&null,placeholder:"johndoe"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("b-form-group",{attrs:{label:"Email","label-for":"register-email"}},[a("validation-provider",{attrs:{name:"Email",vid:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("b-form-input",{attrs:{id:"register-email",name:"register-email",state:!(r.length>0)&&null,placeholder:"john@example.com"},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("b-form-group",{attrs:{"label-for":"register-password",label:"Password"}},[a("validation-provider",{attrs:{name:"Password",vid:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[a("b-form-input",{staticClass:"form-control-merge",attrs:{id:"register-password",type:t.passwordFieldType,state:!(r.length>0)&&null,name:"register-password",placeholder:"············"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),a("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("b-form-group",[a("b-form-checkbox",{attrs:{id:"register-privacy-policy",name:"checkbox-1"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" I agree to "),a("b-link",[t._v("privacy policy & terms")])],1)],1),a("b-button",{attrs:{variant:"primary",block:"",type:"submit",disabled:r}},[t._v(" Sign up ")])],1)]}}])}),a("p",{staticClass:"text-center mt-2"},[a("span",[t._v("Already have an account?")]),a("b-link",{attrs:{to:{name:"auth-login"}}},[a("span",[t._v(" Sign in instead")])])],1),a("div",{staticClass:"divider my-2"},[a("div",{staticClass:"divider-text"},[t._v(" or ")])]),a("div",{staticClass:"auth-footer-btn d-flex justify-content-center"},[a("b-button",{attrs:{variant:"facebook",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"FacebookIcon"}})],1),a("b-button",{attrs:{variant:"twitter",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"TwitterIcon"}})],1),a("b-button",{attrs:{variant:"google",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"MailIcon"}})],1),a("b-button",{attrs:{variant:"github",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"GithubIcon"}})],1)],1)],1)],1)],1)],1)},s=[],i=a("7bb1"),n=a("088b"),o=a("a15b"),l=a("4918"),u=a("b28b"),c=a("aa59"),d=a("1947"),m=a("11de"),p=a("d6e4"),b=a("4968"),f=a("c3e6"),g=a("8226"),v=a("4797"),h=a("5e12"),x=a("ccc0"),w=a("8f03"),y=a("b91d"),k=a("4360"),C=a("7100"),_={components:{VuexyLogo:n["a"],BRow:o["a"],BImg:l["a"],BCol:u["a"],BLink:c["a"],BButton:d["a"],BForm:m["a"],BCardText:p["a"],BCardTitle:b["a"],BFormCheckbox:f["a"],BFormGroup:g["a"],BFormInput:v["a"],BInputGroup:h["a"],BInputGroupAppend:x["a"],ValidationProvider:i["b"],ValidationObserver:i["a"]},mixins:[y["a"]],data:function(){return{status:"",username:"",userEmail:"",password:"",sideImg:a("67df"),required:w["l"],email:w["g"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===k["a"].state.appConfig.layout.skin?(this.sideImg=a("99b7"),this.sideImg):this.sideImg}},methods:{register:function(){var t=this;this.$refs.registerForm.validate().then((function(e){e&&C["a"].register({username:t.username,email:t.userEmail,password:t.password}).then((function(e){C["a"].setToken(e.data.accessToken),C["a"].setRefreshToken(e.data.refreshToken),localStorage.setItem("userData",JSON.stringify(e.data.userData)),t.$ability.update(e.data.userData.ability),t.$router.push("/")})).catch((function(e){t.$refs.registerForm.setErrors(e.response.data.error)}))}))}}},I=_,B=(a("58ba"),a("2877")),E=Object(B["a"])(I,r,s,!1,null,null,null);e["default"]=E.exports},"9b23":function(t,e,a){}}]);
//# sourceMappingURL=chunk-0e0a46b8.c96aa702.js.map