(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports={FlexFill:"BuildControl_FlexFill__JtBfh"}},26:function(e,a,t){e.exports={RemoveColPaddings:"Layout_RemoveColPaddings__1-ExG"}},27:function(e,a,t){e.exports={BurgerCard:"Burger_BurgerCard__w1Ull",NoIngredientLabel:"Burger_NoIngredientLabel__3q8sg"}},28:function(e,a,t){e.exports={BuildControls:"BuildControls_BuildControls__1KIrQ",PriceBadge:"BuildControls_PriceBadge__qqtwO"}},39:function(e,a,t){e.exports={Modal:"Modal_Modal__1-5dN"}},40:function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},45:function(e,a,t){e.exports=t(67)},51:function(e,a,t){},6:function(e,a,t){e.exports={Ingredient:"BurgerIngredient_Ingredient__15uYv",Meat:"BurgerIngredient_Meat__1ya4y",Cheese:"BurgerIngredient_Cheese__3kHUH",Salad:"BurgerIngredient_Salad__29f5j",Bacon:"BurgerIngredient_Bacon__1e0OV",BurgerTop:"BurgerIngredient_BurgerTop__2ZmYX",BurgerBottom:"BurgerIngredient_BurgerBottom__3v1Yq"}},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),o=(t(51),t(26)),i=t.n(o),s=t(75),d=function(e){return r.a.createElement(s.a,null,r.a.createElement(s.a.Item,{className:"py-3"},"Logo"),r.a.createElement(s.a.Item,{action:!0,href:"#",className:"py-3"},"Burger"))},u=t(29),m=t(36),g=t(37),h=t(44),p=t(38),b=t(43),E=t(27),v=t.n(E),f=t(6),B=t.n(f),_=function(e){var a=null;switch(e.type){case"bread-top":a=r.a.createElement("div",{className:"".concat(B.a.Ingredient," ").concat(B.a.BurgerTop)});break;case"bread-bottom":a=r.a.createElement("div",{className:"".concat(B.a.Ingredient," ").concat(B.a.BurgerBottom)});break;case"meat":a=r.a.createElement("div",{className:"".concat(B.a.Ingredient," ").concat(B.a.Meat," my-1")});break;case"cheese":a=r.a.createElement("div",{className:"".concat(B.a.Ingredient," ").concat(B.a.Cheese," my-1")});break;case"salad":a=r.a.createElement("div",{className:"".concat(B.a.Ingredient," ").concat(B.a.Salad," my-1")});break;case"bacon":a=r.a.createElement("div",{className:"".concat(B.a.Ingredient," ").concat(B.a.Bacon," my-1")});break;default:a=null}return a},w=t(74),y=function(e){var a=[];Object.keys(e.ingredients).forEach(function(t){for(var n=0;n<e.ingredients[t];n++)a.push(t)});var t=a.map(function(e,a){return r.a.createElement(_,{key:e+a,type:e})});return 0===t.length&&(t=r.a.createElement("p",{className:"".concat(v.a.NoIngredientLabel," mx-auto my-1 text-center")},"Select ingredients, please.")),r.a.createElement(w.a,{body:!0,className:"".concat(v.a.BurgerCard," mx-auto mt-4 shadow p-3 mb-4 bg-white rounded")},r.a.createElement(_,{type:"bread-top"}),t,r.a.createElement(_,{type:"bread-bottom"}))},I=t(28),N=t.n(I),C=t(23),k=t.n(C),x=function(e){return r.a.createElement("div",{className:"d-flex mb-2 bg-secondary align-items-center"},r.a.createElement("div",{className:"".concat(k.a.FlexFill," p-2 font-weight-bolder")},e.label),r.a.createElement("div",{className:"".concat(k.a.FlexFill," p-2")},r.a.createElement("button",{className:"btn btn-outline-danger px-lg-4 text-uppercase",onClick:e.removeIngredientHandler},"Remove")),r.a.createElement("div",{className:"".concat(k.a.FlexFill," p-2")},r.a.createElement("button",{className:"btn btn-outline-success px-lg-4 text-uppercase",onClick:e.addIngredientHandler},"Add")))},M=t(69),H=t(70),P=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],F=function(e){return r.a.createElement(w.a,{className:"".concat(N.a.BuildControls," mx-auto shadow p-3 my-4 bg-white rounded")},r.a.createElement(w.a.Body,null,r.a.createElement(M.a,null,r.a.createElement(H.a,null,r.a.createElement(w.a.Title,{className:"font-weight-bolder text-warning py-3"},"Available Ingredients"),P.map(function(a){return r.a.createElement(x,{key:a.label,label:a.label,addIngredientHandler:function(){return e.addIngredientHandler(a.type)},removeIngredientHandler:function(){return e.removeIngredientHandler(a.type)}})}),r.a.createElement("button",{className:"btn btn-block btn-outline-success mt-3",disabled:!e.isPurchasable,onClick:e.showModalHandler},"ORDER NOW"," ",r.a.createElement("span",{className:"".concat(N.a.PriceBadge," align-middle font-weight-bolder badge badge-pill badge-primary")},"$".concat(e.price.toFixed(2))))))))},O=t(39),S=t.n(O),j=t(40),R=t.n(j),T=function(e){return e.show?r.a.createElement("div",{className:R.a.Backdrop,onClick:e.hideModalHandler}):null},L=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{show:e.show,hideModalHandler:e.hideModalHandler}),r.a.createElement("div",{className:S.a.Modal},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",{className:"modal-title"},"Order Details")),r.a.createElement("div",{className:"modal-body"},e.children)))))},q=function(e){var a=Object.keys(e.ingredients).map(function(a,t){return r.a.createElement("li",{key:a+t},r.a.createElement("span",{style:{textTransform:"capitalize"}},a,": "),e.ingredients[a])});return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Total Price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),r.a.createElement("p",null,"Ingredients: "),r.a.createElement("ul",null,a),r.a.createElement("p",null,"Proceed to Checkout"),r.a.createElement("button",{className:"btn btn-outline-danger mr-3 px-3",onClick:e.purchaseCancelled},"Cancel"),r.a.createElement("button",{className:"btn btn-outline-success ml-3 px-3",onClick:e.purchaseContinue},"Success"))},Y={salad:.5,cheese:.4,meat:1.3,bacon:.7},A=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},price:4,isPurchasable:!1,showModal:!1},t.updateIsPurchasableState=function(e){var a=Object.values(e).reduce(function(e,a){return e+a},0);t.setState({isPurchasable:a>0})},t.addIngredientHandler=function(e){var a=t.state.ingredients[e]+1,n=Object(u.a)({},t.state.ingredients);n[e]=a;var r=t.state.price+Y[e];t.setState({ingredients:n,price:r}),t.updateIsPurchasableState(n)},t.removeIngredientHandler=function(e){var a=t.state.ingredients[e];if(!(a<=0)){var n=a-1,r=Object(u.a)({},t.state.ingredients);r[e]=n;var l=t.state.price-Y[e];t.setState({ingredients:r,price:l}),t.updateIsPurchasableState(r)}},t.showModalHandler=function(){t.setState({showModal:!0}),console.log(t.state.showModal)},t.hideModalHandler=function(){t.setState({showModal:!1})},t.purchaseContinue=function(){alert("You continue!")},t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=null;return this.state.showModal&&(console.log(this.state.showModal),e=r.a.createElement(L,{show:this.state.showModal,hideModalHandler:this.hideModalHandler},r.a.createElement(q,{price:this.state.price,purchaseCancelled:this.hideModalHandler,purchaseContinue:this.purchaseContinue,ingredients:this.state.ingredients}))),r.a.createElement(r.a.Fragment,null,e,r.a.createElement(y,{ingredients:this.state.ingredients}),r.a.createElement(F,{price:this.state.price,isPurchasable:this.state.isPurchasable,addIngredientHandler:this.addIngredientHandler,removeIngredientHandler:this.removeIngredientHandler,showModalHandler:this.showModalHandler}))}}]),a}(n.Component),J=t(72),W=t(73),$=function(){return r.a.createElement(J.a,{bg:"light",expand:"lg"},r.a.createElement(J.a.Brand,{href:"#"},"MP's Builder"),r.a.createElement(J.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(J.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(W.a.Link,{href:"#"},"Home")))},D=t(71),K=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{fluid:"true"},r.a.createElement(M.a,null,r.a.createElement(H.a,{md:2,className:"border border-primary bg-light "+i.a.RemoveColPaddings},r.a.createElement(d,null)),r.a.createElement(H.a,{className:i.a.RemoveColPaddings},r.a.createElement($,null),r.a.createElement(A,null)))))};var U=function(){return r.a.createElement(K,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.e22a0a0a.chunk.js.map