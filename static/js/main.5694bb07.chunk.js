(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__WXqLD",BreadTop:"BurgerIngredient_BreadTop__1_qX2",Seeds1:"BurgerIngredient_Seeds1__2ecZm",Seeds2:"BurgerIngredient_Seeds2__3n2yj",Meat:"BurgerIngredient_Meat__1ya4y",Cheese:"BurgerIngredient_Cheese__3kHUH",Salad:"BurgerIngredient_Salad__29f5j",Bacon:"BurgerIngredient_Bacon__1e0OV"}},function(e,a,t){e.exports={BuildControl:"BuildControl_BuildControl__2h-UU",Label:"BuildControl_Label__1eu9b",Less:"BuildControl_Less__YvstF",More:"BuildControl_More__yDTYn"}},function(e,a,t){e.exports={BuildControls:"BuildControls_BuildControls__1KIrQ",OrderButton:"BuildControls_OrderButton__ztgKJ",enable:"BuildControls_enable__135Io"}},,,,,,,function(e,a,t){e.exports={Burger:"Burger_Burger__cUT8f"}},function(e,a,t){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,,function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),o=t.n(l),d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Toolbar, Sidebar, Backdrop"),r.a.createElement("main",null,e.children))},s=t(4),i=t(7),c=t(8),u=t(13),m=t(9),h=t(14),g=t(10),p=t.n(g),b=t(1),_=t.n(b),B=function(e){var a=null;switch(e.type){case"bread-bottom":a=r.a.createElement("div",{className:_.a.BreadBottom});break;case"bread-top":a=r.a.createElement("div",{className:_.a.BreadTop},r.a.createElement("div",{className:_.a.Seeds1}),r.a.createElement("div",{className:_.a.Seeds2}));break;case"meat":a=r.a.createElement("div",{className:_.a.Meat});break;case"cheese":a=r.a.createElement("div",{className:_.a.Cheese});break;case"salad":a=r.a.createElement("div",{className:_.a.Salad});break;case"bacon":a=r.a.createElement("div",{className:_.a.Bacon});break;default:a=null}return a},E=function(e){var a=[];Object.keys(e.ingredients).forEach(function(t){for(var n=0;n<e.ingredients[t];n++)a.push(t)});var t=a.map(function(e,a){return r.a.createElement(B,{key:e+a,type:e})});return 0===t.length&&(t=r.a.createElement("p",null,"Select ingredients, please.")),r.a.createElement("div",{className:p.a.Burger},r.a.createElement(B,{type:"bread-top"}),t,r.a.createElement(B,{type:"bread-bottom"}))},v=t(3),f=t.n(v),k=t(2),w=t.n(k),I=function(e){return r.a.createElement("div",{className:w.a.BuildControl},r.a.createElement("div",{className:w.a.Label},e.label),r.a.createElement("button",{className:w.a.Less,onClick:e.removeIngredientHandler},"Less"),r.a.createElement("button",{className:w.a.More,onClick:e.addIngredientHandler},"More"))},M=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],y=function(e){return r.a.createElement("div",{className:f.a.BuildControls},r.a.createElement("p",null,"Current Price: ",e.price.toFixed(2)),M.map(function(a){return r.a.createElement(I,{key:a.label,label:a.label,addIngredientHandler:function(){return e.addIngredientHandler(a.type)},removeIngredientHandler:function(){return e.removeIngredientHandler(a.type)}})}),r.a.createElement("button",{className:f.a.OrderButton,disabled:!e.isPurchasable,onClick:e.showModalHandler},"ORDER NOW"))},C=t(11),H=t.n(C),S=t(12),N=t.n(S),O=function(e){return e.show?r.a.createElement("div",{className:N.a.Backdrop,onClick:e.hideModalHandler}):null},j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{show:e.show,hideModalHandler:e.hideModalHandler}),r.a.createElement("div",{className:H.a.Modal},e.children))},P=function(e){var a=Object.keys(e.ingredients).map(function(a,t){return r.a.createElement("li",{key:a+t},r.a.createElement("span",{style:{textTransform:"capitalize"}},a,": "),e.ingredients[a])});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Ingredients: "),r.a.createElement("ul",null,a),r.a.createElement("p",null,"Proceed to Checkout"))},x={salad:.5,cheese:.4,meat:1.3,bacon:.7},L=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},price:4,isPurchasable:!1,showModal:!1},t.updateIsPurchasableState=function(e){var a=Object.values(e).reduce(function(e,a){return e+a},0);t.setState({isPurchasable:a>0})},t.addIngredientHandler=function(e){var a=t.state.ingredients[e]+1,n=Object(s.a)({},t.state.ingredients);n[e]=a;var r=t.state.price+x[e];t.setState({ingredients:n,price:r}),t.updateIsPurchasableState(n)},t.removeIngredientHandler=function(e){var a=t.state.ingredients[e];if(!(a<=0)){var n=a-1,r=Object(s.a)({},t.state.ingredients);r[e]=n;var l=t.state.price-x[e];t.setState({ingredients:r,price:l}),t.updateIsPurchasableState(r)}},t.showModalHandler=function(){t.setState({showModal:!0})},t.hideModalHandler=function(){t.setState({showModal:!1})},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=null;return this.state.showModal&&(e=r.a.createElement(j,{show:this.state.showModal,hideModalHandler:this.hideModalHandler},r.a.createElement(P,{ingredients:this.state.ingredients}))),r.a.createElement(r.a.Fragment,null,e,r.a.createElement(E,{ingredients:this.state.ingredients}),r.a.createElement(y,{price:this.state.price,isPurchasable:this.state.isPurchasable,addIngredientHandler:this.addIngredientHandler,removeIngredientHandler:this.removeIngredientHandler,showModalHandler:this.showModalHandler}))}}]),a}(n.Component);var T=function(){return r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.5694bb07.chunk.js.map