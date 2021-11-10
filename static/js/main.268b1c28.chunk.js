(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={item:"ImageGalleryItem_item__3HdX2",image:"ImageGalleryItem_image__iD1EJ"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__3US7c",modal:"Modal_modal__AqBgT"}},15:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__12Pa6"}},17:function(e,t,a){e.exports={loader:"Loader_loader__1d0ji"}},18:function(e,t,a){e.exports={button:"Button_button__14p0R"}},4:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__YRjZr",searchForm:"Searchbar_searchForm__3cHFs",searchForm__button:"Searchbar_searchForm__button__2eLwX",searchForm__button_label:"Searchbar_searchForm__button_label__2dE7V",searchForm__input:"Searchbar_searchForm__input__3HSN5"}},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),s=a(13),i=a(3),l=a(9),u=a(4),b=a.n(u),j=a(1);function m(e){var t=e.onSubmit,a=Object(n.useState)(""),o=Object(i.a)(a,2),c=o[0],r=o[1];return Object(j.jsx)("header",{className:b.a.searchbar,children:Object(j.jsxs)("form",{className:b.a.searchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),r("")):l.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441!",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:[Object(j.jsx)("button",{type:"submit",className:b.a.searchForm__button,children:Object(j.jsx)("span",{className:b.a.searchForm__button_label,children:"Search"})}),Object(j.jsx)("input",{className:b.a.searchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){r(e.currentTarget.value.toLowerCase())}})]})})}var d=a(14),h=a.n(d),_=a(11),O=a.n(_);function p(e){var t=e.images,a=e.onOpenModal;return t.map((function(e){var t=e.webformatURL,n=e.tags,o=e.largeImageURL;return Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)("img",{src:t,alt:n,"data-source":o,onClick:a,className:O.a.image})},h()())}))}var g=a(15),f=a.n(g);function x(e){var t=e.images,a=e.onOpenModal;return Object(j.jsx)("ul",{className:f.a.gallery,children:Object(j.jsx)(p,{images:t,onOpenModal:a})})}var v=a(16),y=a.n(v),S=(a(52),a(17)),w=a.n(S);function k(){return Object(j.jsx)("div",{className:w.a.loader,children:Object(j.jsx)(y.a,{type:"BallTriangle",color:"#00BFFF",height:80,width:80,timeout:3e3})})}var F=a(12),C=a.n(F);function N(e){var t=e.onCloseModal,a=e.onClickByEscape,o=e.largeModalImg;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.key&&a()};return Object(j.jsx)("div",{className:C.a.overlay,onClick:t,children:Object(j.jsx)("div",{className:C.a.modal,children:Object(j.jsx)("img",{src:o,alt:""})})})}var M=a(18),E=a.n(M);function I(e){var t=e.text,a=e.onClick;return Object(j.jsx)("button",{type:"submit",className:E.a.button,onClick:a,children:t})}a(53);function L(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),r=Object(i.a)(c,2),u=r[0],b=r[1],d=Object(n.useState)(1),h=Object(i.a)(d,2),_=h[0],O=h[1],p=Object(n.useState)("idle"),g=Object(i.a)(p,2),f=g[0],v=g[1],y=Object(n.useState)(null),S=Object(i.a)(y,2),w=S[0],F=S[1],C=Object(n.useState)(""),M=Object(i.a)(C,2),E=M[0],L=M[1],B=Object(n.useState)(!1),H=Object(i.a)(B,2),T=H[0],q=H[1];Object(n.useEffect)((function(){a&&(v("pending"),function(e,t){return fetch("".concat("https://pixabay.com/api/?","q=").concat(e,"&page=").concat(t,"&key=").concat("23107391-e229b72ce50d9e428f6df8953","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("No image with query ".concat(e)))}))}(a,_).then((function(e){b((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.hits))})),v("resolved"),1!==_&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){F(e),v("rejected")})))}),[a,_]);return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{onSubmit:function(e){o(e),b([]),O(1)}}),Object(j.jsx)(x,{images:u,onOpenModal:function(e){q(!0),L(e.target.dataset.source)}}),"pending"===f&&Object(j.jsx)(k,{}),0!==u.length&&Object(j.jsx)(I,{text:"Load more",onClick:function(){O((function(e){return e+1}))}}),"rejected"===f&&Object(j.jsx)("h1",{children:w.message}),T&&Object(j.jsx)(N,{largeModalImg:E,onCloseModal:function(e){"IMG"!==e.target.nodeName&&(q(!1),L(""))},onClickByEscape:function(){q(!1),L("")}}),Object(j.jsx)(l.a,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}a(54);r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.querySelector("#root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.268b1c28.chunk.js.map