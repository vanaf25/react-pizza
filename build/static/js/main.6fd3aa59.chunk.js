(this.webpackJsonpreactPizza=this.webpackJsonpreactPizza||[]).push([[0],{47:function(t,e,c){},48:function(t,e,c){},49:function(t,e,c){},74:function(t,e,c){"use strict";c.r(e);var n=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),i(t),a(t),r(t)}))},i=c(1),a=c.n(i),r=c(20),s=c.n(r),o=(c(47),c(11)),l=(c(48),c(49),c(12)),j=c.n(l),d=c(0),u=a.a.memo((function(t){var e=t.items,c=t.currentCategory,n=t.onSelectCategory,i=e.map((function(t,e){return Object(d.jsx)("li",{onClick:function(){return n(e)},className:j()({active:c==e}),children:t},"".concat(t,"_").concat(e))}));return Object(d.jsx)("div",{className:"categories",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:j()({active:null===c}),onClick:function(){n(null)},children:"\u0412\u0441\u0435"}),i]})})}));u.defaultProps={currentCategory:null,items:[]};var b=u,h=c(19),m=c(5),O=a.a.memo((function(t){var e=t.items,c=t.setSortBy,n=t.activeSortType,a=Object(m.b)(),r=Object(i.useState)(!1),s=Object(h.a)(r,2),o=s[0],l=s[1],u=e.find((function(t){return t.type===n})).name,b=e.map((function(t,e){return Object(d.jsx)("li",{onClick:function(){a(c(t))},className:j()({active:n==t.type}),children:t.name},"".concat(t.name,"_").concat(e))})),O=Object(i.useRef)(),p=function(t){(t.path||t.composedPath&&t.composedPath()).includes(O.current)||l(!1)};return Object(i.useEffect)((function(){document.body.addEventListener("click",p)}),[]),Object(d.jsxs)("div",{ref:O,className:"sort",children:[Object(d.jsxs)("div",{className:"sort__label",children:[Object(d.jsx)("svg",{className:j()({rotated:!o}),width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(d.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(d.jsx)("span",{onClick:function(){l((function(t){return!t}))},children:u})]}),o&&Object(d.jsx)("div",{className:"sort__popup",children:Object(d.jsx)("ul",{children:b})})]})}));O.defaultProps={items:[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"popular"},{name:"\u0446\u0435\u043d\u0435",type:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"alphabet"}]};var p=O,x=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],f=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"rating",order:"desc"},{name:"\u0446\u0435\u043d\u0435",type:"price",order:"desc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"name",order:"asc"}],C=function(t){var e=t.setCategory,c=t.setSortBy,n=t.getPizza,i=Object(m.b)(),r=Object(m.c)((function(t){var e=t.filter;return{category:e.category,sortBy:e.sortBy}})),s=r.category,o=r.sortBy,l=a.a.useCallback((function(t){i(e(t))}),[]);return Object(d.jsxs)("div",{className:"content__top",children:[Object(d.jsx)(b,{currentCategory:s,getPizza:n,onSelectCategory:l,items:x}),Object(d.jsx)(p,{activeSortType:o.type,setSortBy:c,items:f})]})},g=c(2),v=function(t){var e=t.id,c=t.imageUrl,n=t.name,a=t.price,r=t.types,s=t.sizes,o=t.onAddToCart,l=t.cartItems,u=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],b=Object(i.useState)(r[0]),m=Object(h.a)(b,2),O=m[0],p=m[1],x=Object(i.useState)(s[0]),f=Object(h.a)(x,2),C=f[0],g=f[1],v=l["".concat(e).concat(u[O]).concat(C)],y=v?v.items.length:0;return Object(d.jsxs)("div",{className:"pizza-block",children:[Object(d.jsx)("img",{className:"pizza-block__image",src:c,alt:"Pizza"}),Object(d.jsx)("h4",{className:"pizza-block__title",children:n}),Object(d.jsxs)("div",{className:"pizza-block__selector",children:[Object(d.jsx)("ul",{children:u.map((function(t,e){return Object(d.jsx)("li",{onClick:function(){return function(t){p(t)}(e)},className:j()({active:e==O,disabled:!r.includes(e)}),children:t},t)}))}),Object(d.jsx)("ul",{children:[26,30,40].map((function(t,e){return Object(d.jsxs)("li",{onClick:function(){return function(t){g(t)}(t)},className:j()({active:t==C,disabled:!s.includes(t)}),children:[t," \u0441\u043c"]},t)}))})]}),Object(d.jsxs)("div",{className:"pizza-block__bottom",children:[Object(d.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",a," \u0440\u0443\u0431"]}),Object(d.jsxs)("div",{onClick:function(){return function(t){var e={id:t.id,name:t.name,imageUrl:t.imageUrl,price:a,size:C,type:u[O]};o(e)}({id:e,name:n,imageUrl:c,price:a})},className:"button button--outline button--add",children:[Object(d.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(d.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(d.jsx)("i",{children:y||0})]})]})]})};v.defaultProps={types:[],name:"-----",price:"???",sizes:[],imageUrl:'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"',addedCount:0};var y=v,w=c(28),_=c.n(w),k="set_Pizzas",z="set_Loading",L={pizzas:[],isLoading:!0},N=function(t,e){return function(c){c({type:z,loading:!0}),function(t,e){return _.a.get("pizzas?".concat(null!==t?"category=".concat(t):"","&_sort=").concat(e.type,"&_order=").concat(e.order))}(t,e).then((function(t){var e=t.data;c({type:k,pizzas:e})}))}},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return Object(g.a)(Object(g.a)({},t),{},{pizzas:e.pizzas,isLoading:!1});case z:return Object(g.a)(Object(g.a)({},t),{},{isLoading:e.loading});default:return t}},B=c(39),M=function(){return Object(d.jsxs)(B.a,{className:"pizza-block",speed:2,width:280,height:480,viewBox:"0 0 280 480",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(d.jsx)("circle",{cx:"133",cy:"132",r:"120"}),Object(d.jsx)("rect",{x:"93",y:"386",rx:"0",ry:"0",width:"0",height:"21"}),Object(d.jsx)("rect",{x:"85",y:"338",rx:"0",ry:"0",width:"160",height:"0"}),Object(d.jsx)("rect",{x:"168",y:"336",rx:"0",ry:"0",width:"31",height:"0"}),Object(d.jsx)("rect",{x:"146",y:"336",rx:"0",ry:"0",width:"0",height:"1"}),Object(d.jsx)("rect",{x:"22",y:"267",rx:"0",ry:"0",width:"225",height:"35"}),Object(d.jsx)("rect",{x:"121",y:"396",rx:"0",ry:"0",width:"1",height:"0"}),Object(d.jsx)("rect",{x:"19",y:"314",rx:"6",ry:"6",width:"229",height:"56"}),Object(d.jsx)("rect",{x:"25",y:"388",rx:"3",ry:"3",width:"77",height:"31"}),Object(d.jsx)("rect",{x:"145",y:"381",rx:"20",ry:"20",width:"101",height:"45"})]})},E="ADD_TO_CART",I="SET_TOTAL_COUNT",V="SET_TOTAL_SIZE",T="SET_EMPTY_CART",S="REMOVE_CART_ITEM",H="MINUS_ITEM",A="PLUS_ITEM",Z=function(t){var e=t.cartItems,c=Object(m.c)((function(t){var e=t.dataPizza,c=t.filter;return{pizzas:e.pizzas,isLoading:e.isLoading,category:c.category,sortBy:c.sortBy}})),n=c.pizzas,a=c.isLoading,r=c.category,s=c.sortBy,o=Object(m.b)();Object(i.useEffect)((function(){o(N(r,s))}),[r,s]);var l=function(t){o({type:E,payload:t})},j=n?n.map((function(t,c){return Object(d.jsx)(y,Object(g.a)({onAddToCart:l,cartItems:e,addedCount:e[t.id]&&e[t.id].length},t),"".concat(t.name,"_").concat(c))})):null,u=Array(10).fill(0).map((function(t,e){return Object(d.jsx)(M,{},e)}));return Object(d.jsx)("div",{className:"content__items",children:a?u:j})},U="Set_Sort_By",W="Set_Category",F=function(t){return{type:W,currentFilter:t}},D=function(t){var e=t.type,c=t.order;return{type:U,payload:{type:e,order:c}}},R=a.a.memo((function(){var t=Object(m.c)((function(t){return{items:t.cart.items}})).items;return Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(C,{setSortBy:D,setCategory:F}),Object(d.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(d.jsx)(Z,{cartItems:t})]})})})),J=function(t){var e=t.totalPrice,c=t.totalCount;return Object(d.jsx)("div",{className:"header__cart",children:Object(d.jsxs)(o.b,{to:"/cart",className:"button button--cart",children:[Object(d.jsxs)("span",{children:[e," \u20bd"]}),Object(d.jsx)("div",{className:"button__delimiter"}),Object(d.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(d.jsx)("span",{children:c})]})})},Y=c.p+"static/media/pizza-logo.56ac8703.svg",q=function(){return Object(d.jsxs)("div",{className:"header__logo",children:[Object(d.jsx)("img",{width:"38",src:Y,alt:"Pizza logo"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"React Pizza"}),Object(d.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})},G=function(){var t=Object(m.c)((function(t){var e=t.cart;return{totalPrice:e.totalPrice,totalCount:e.totalCount}})),e=t.totalPrice,c=t.totalCount;return Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(q,{}),Object(d.jsx)(J,{totalPrice:e,totalCount:c})]})})},K=c(4),Q=function(t){var e=t.totalCount,c=t.totalPrice,n=t.onMakeOrder;return Object(d.jsxs)("div",{className:"cart__bottom",children:[Object(d.jsxs)("div",{className:"cart__bottom-details",children:[Object(d.jsxs)("span",{children:[" \u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(d.jsxs)("b",{children:[e," \u0448\u0442."]})," "]}),Object(d.jsxs)("span",{children:[" \u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(d.jsxs)("b",{children:[c," \u20bd"]})," "]})]}),Object(d.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(d.jsxs)(o.b,{to:"/",className:"button button--outline button--add go-back-btn",children:[Object(d.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(d.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),Object(d.jsx)("div",{onClick:n,className:"button pay-btn",children:Object(d.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})},X=function(t){var e=t.clearCart;return Object(d.jsxs)("div",{className:"cart__top",children:[Object(d.jsxs)("h2",{className:"content__title",children:[Object(d.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(d.jsxs)("div",{className:"cart__clear",children:[Object(d.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(d.jsx)("span",{onClick:e,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]})},$=function(t){var e=t.id,c=t.imageUrl,n=t.name,i=t.type,a=t.size,r=t.count,s=t.cost,o=t.removeItem,l=t.plusItem,j=t.minusItem;return Object(d.jsxs)("div",{className:"cart__item",children:[Object(d.jsx)("div",{className:"cart__item-img",children:Object(d.jsx)("img",{className:"pizza-block__image",src:c,alt:"Pizza"})}),Object(d.jsxs)("div",{className:"cart__item-info",children:[Object(d.jsx)("h3",{children:n}),Object(d.jsxs)("p",{children:[i," \u0442\u0435\u0441\u0442\u043e, ",a," \u0441\u043c."]})]}),Object(d.jsxs)("div",{className:"cart__item-count",children:[Object(d.jsx)("div",{className:"button button--outline button--circle cart__item-count-minus",onClick:function(){j(e)},children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(d.jsx)("b",{children:r}),Object(d.jsx)("div",{className:"button button--outline button--circle cart__item-count-plus",onClick:function(){l(e)},children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(d.jsx)("div",{className:"cart__item-price",children:Object(d.jsxs)("b",{children:[s," \u20bd"]})}),Object(d.jsx)("div",{className:"cart__item-remove",children:Object(d.jsx)("div",{className:"button button--outline button--circle",onClick:function(){o(e)},children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})};$.defaultValues={imageUrl:null,nam:null,type:null,count:null,cost:null,size:null};var tt=$,et=function(t){var e=t.items,c=t.removeItem,n=t.plusItem,i=t.minusItem,a=t.onMakeItems,r=Object.keys(e).map((function(t){return e[t]}));console.log(r);var s=r.map((function(t,e){var r=t.items[0],s="".concat(r.id).concat(r.type).concat(r.size,"_").concat(e);return Object(d.jsx)(tt,{onMakeItems:a,plusItem:n,minusItem:i,on:!0,id:"".concat(r.id).concat(r.type).concat(r.size),removeItem:c,imageUrl:r.imageUrl,count:t.items.length,name:r.name,size:r.size,cost:t.totalPrice,type:r.type},s)}));return Object(d.jsx)("div",{className:"content__items",children:s})},ct=function(){var t=Object(m.b)(),e=Object(m.c)((function(t){var e=t.cart;return{items:e.items,totalPrice:e.totalPrice,totalCount:e.totalCount}})),c=e.items,n=e.totalPrice,i=e.totalCount;return Object.values(c).length?Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"container container--cart",children:Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsx)(X,{clearCart:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443")&&t({type:T})}}),Object(d.jsx)(et,{minusItem:function(e){t(function(t){return{type:H,payload:t}}(e))},plusItem:function(e){t(function(t){return{type:A,payload:t}}(e))},removeItem:function(e){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440?")&&t(function(t){return{type:S,payload:t}}(e))},items:c}),Object(d.jsx)(Q,{onMakeOrder:function(){console.log("\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437",c)},totalPrice:n,totalCount:i})]})})}):Object(d.jsx)(K.a,{to:"/EmptyCart"})},nt=c.p+"static/media/empty-cart.db905d1f.png",it=function(){return Object(m.c)((function(t){return{items:t.cart.items}})).items.length?Object(d.jsx)(K.a,{to:"/cart"}):Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"container container--cart",children:Object(d.jsxs)("div",{className:"cart cart--empty",children:[Object(d.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",Object(d.jsx)("icon",{children:"\ud83d\ude15"})]}),Object(d.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(d.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(d.jsx)("img",{src:nt,alt:"Empty cart"}),Object(d.jsx)(o.b,{to:"/",className:"button button--black",children:Object(d.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})})},at=function(){return Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("div",{className:"container container_notFound",children:[Object(d.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(d.jsx)("p",{className:"notFound_p",children:"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043d\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0432\u044b \u043e\u0448\u0438\u0431\u043b\u0438\u0441\u044c \u0432 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435"}),Object(d.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-256/page-not-found-5-530376.png",alt:"not found"})]})})},rt=function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(G,{}),Object(d.jsxs)(K.d,{children:[Object(d.jsx)(K.b,{exact:!0,path:"/",component:function(){return Object(d.jsx)(R,{})}}),Object(d.jsx)(K.b,{exact:!0,path:"/cart",component:function(){return Object(d.jsx)(ct,{})}}),Object(d.jsx)(K.b,{exact:!0,path:"/emptyCart",component:function(){return Object(d.jsx)(it,{})}}),Object(d.jsx)(K.b,{exact:!0,path:"*",component:function(){return Object(d.jsx)(at,{})}})]})]})},st=c(13),ot=c(40),lt=c(41),jt={category:null,sortBy:{type:"rating",order:"desc"}},dt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case W:return Object(g.a)(Object(g.a)({},t),{},{category:e.currentFilter});case U:return Object(g.a)(Object(g.a)({},t),{},{sortBy:e.payload});default:return t}},ut=c(16),bt=c(25),ht=c(42),mt={items:{},totalPrice:0,totalCount:0},Ot=function(t,e){return Object.values(t).reduce((function(t,c){return t+function(t,e){var c=e.split("."),n=Object(ht.a)(c),i=n[0];return n.slice(1).reduce((function(t,e){return t[e]}),t[i])}(c,e)}),0)},pt=function(t){return t.reduce((function(t,e){return e.price+t}),0)},xt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:var c="".concat(e.payload.id).concat(e.payload.type).concat(e.payload.size),n=t.items[c]?[].concat(Object(bt.a)(t.items[c].items),[e.payload]):[e.payload],i=Object(g.a)(Object(g.a)({},t.items),{},Object(ut.a)({},c,{items:n,totalPrice:pt(n)})),a=Ot(i,"totalPrice"),r=Ot(i,"items.length");return Object(g.a)(Object(g.a)({},t),{},{items:i,totalCount:r,totalPrice:a});case I:return Object(g.a)(Object(g.a)({},t),{},{totalPrice:e.payload});case V:return Object(g.a)(Object(g.a)({},t),{},{totalCount:e.payload});case T:return Object(g.a)(Object(g.a)({},t),{},{items:{},totalPrice:0,totalCount:0});case S:var s=Object(g.a)({},t.items),o=s[e.payload].totalPrice,l=s[e.payload].items.length;return delete s[e.payload],Object(g.a)(Object(g.a)({},t),{},{items:s,totalPrice:t.totalPrice-o,totalCount:t.totalCount-l});case H:var j=t.items[e.payload].items,d=j.length>1?Object(bt.a)(t.items[e.payload].items).slice(1):j,u=Object(g.a)(Object(g.a)({},t.items),{},Object(ut.a)({},e.payload,{items:d,totalPrice:pt(d)})),b=Ot(u,"items.length"),h=Ot(u,"totalPrice");return Object(g.a)(Object(g.a)({},t),{},{items:u,totalCount:b,totalPrice:h});case A:var m=[].concat(Object(bt.a)(t.items[e.payload].items),[t.items[e.payload].items[0]]),O=Object(g.a)(Object(g.a)({},t.items),{},Object(ut.a)({},e.payload,{items:m,totalPrice:pt(m)})),p=Ot(O,"totalPrice"),x=Ot(O,"items.length");return Object(g.a)(Object(g.a)({},t),{},{items:O,totalCount:x,totalPrice:p});default:return t}},ft=Object(st.combineReducers)({dataPizza:P,filter:dt,cart:xt}),Ct=Object(st.createStore)(ft,Object(lt.composeWithDevTools)(Object(st.applyMiddleware)(ot.a)));s.a.render(Object(d.jsx)(o.a,{children:Object(d.jsx)(m.a,{store:Ct,children:Object(d.jsx)(rt,{})})}),document.getElementById("root")),n()}},[[74,1,2]]]);
//# sourceMappingURL=main.6fd3aa59.chunk.js.map