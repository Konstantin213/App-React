(this["webpackJsonpreact-lesson"]=this["webpackJsonpreact-lesson"]||[]).push([[0],{103:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(43),a=n(9),o={dialogs:[{id:1,name:"Mihail"},{id:2,name:"Sveta"},{id:3,name:"Kukis"},{id:4,name:"Charger"}],message:[{id:1,message:"Hi"},{id:2,message:"Ho are you"},{id:3,message:"Hello"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{message:[].concat(Object(r.a)(e.message),[{id:4,message:n}])});default:return e}}},116:function(e,t,n){e.exports=n.p+"static/media/user.42ecc387.jpg"},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(27),a=n(28),o=n(30),c=n(29),i=n(31),u=n(0),s=n.n(u),l=n(24),f=n(11),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.a,{to:"/login"})}}]),n}(s.a.Component);return Object(f.b)(m)(t)}},13:function(e,t,n){e.exports={nav:"Navigation_nav__24l1E",item:"Navigation_item__1sv5g",active:"Navigation_active__2FNTU",itemFriends:"Navigation_itemFriends__8CTQw"}},137:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3Xv9g",selectedPage:"users_selectedPage__25BaN"}},138:function(e,t,n){e.exports=n.p+"static/media/preloader.ee773c8f.svg"},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(131),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6f6971b1-4a21-42c8-be39-71bc5a43d147"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},164:function(e,t,n){e.exports=n(293)},247:function(e,t,n){},248:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(7),a=n(94),o=n(103),c={},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return e},u=n(8),s=n.n(u),l=n(18),f=n(43),m=n(9),p=n(16),d=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(m.a)({},e,{},r):e}))},g={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followInProgress:[]},h=function(e){return{type:"FOLLOW",userId:e}},E=function(e){return{type:"UNFOLLOW",userId:e}},v=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},b=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},O=function(e,t){return{type:"TOGGLE_IS_FOLLOW_IN_PROGRESS",isFetching:e,userId:t}},w=function(){var e=Object(l.a)(s.a.mark((function e(t,n,r,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(O(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(m.a)({},e,{users:d(e.users,t.userId,"id",{follow:!0})});case"UNFOLLOW":return Object(m.a)({},e,{users:d(e.users,t.userId,"id",{follow:!1})});case"SET_USERS":return Object(m.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(m.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(m.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(m.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOW_IN_PROGRESS":return Object(m.a)({},e,{followInProgress:t.isFetching?[].concat(Object(f.a)(e.followInProgress),[t.userId]):e.followInProgress.filter((function(e){return e!==t.userId}))});default:return e}},j=n(44),S={userId:null,email:null,login:null,isAuth:!1},P=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},y=function(){return function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r,a,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,c=r.email,t(P(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(m.a)({},e,{},t.payload);default:return e}},N=n(132),I=n(130),T={initialized:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INISIALIZED_SUCESS":return Object(m.a)({},e,{initialized:!0});default:return e}},U=Object(r.c)({profilePage:a.b,dialogsPage:o.a,sidebar:i,usersPage:_,auth:C,form:I.a,app:k}),x=Object(r.e)(U,Object(r.a)(N.a));window.store=x;var A=x,L=n(0),F=n.n(L),z=n(64),R=n.n(z),G=(n(247),n(27)),M=n(28),D=n(30),H=n(29),B=n(31),W=n(24),K=(n(248),n(13)),V=n.n(K),Y=n(10),X=function(){return F.a.createElement("nav",{className:V.a.nav},F.a.createElement("div",{className:V.a.item},F.a.createElement(Y.b,{to:"/profile",activeClassName:V.a.active},"Profile")),F.a.createElement("div",{className:V.a.item},F.a.createElement(Y.b,{to:"/dialogs",activeClassName:V.a.active},"Message")),F.a.createElement("div",{className:V.a.item},F.a.createElement(Y.b,{to:"/users",activeClassName:V.a.active},"Users")),F.a.createElement("div",{className:V.a.item},F.a.createElement(Y.b,{to:"/news",activeClassName:V.a.active},"News")),F.a.createElement("div",{className:V.a.item},F.a.createElement(Y.b,{to:"/music",activeClassName:V.a.active},"Music")),F.a.createElement("div",{className:V.a.item},F.a.createElement(Y.b,{to:"/settings",activeClassName:V.a.active},"Settings")),F.a.createElement("div",{className:V.a.itemFriends},F.a.createElement(Y.b,{to:"/friends",activeClassName:V.a.active},"Friends"),F.a.createElement("div",null,F.a.createElement("img",{src:"https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"}),F.a.createElement("img",{src:"https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"}),F.a.createElement("img",{src:"https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"}))))},J=(n(253),function(){return F.a.createElement("div",null,"News")}),Z=(n(254),function(){return F.a.createElement("div",null,"Music")}),Q=(n(255),function(){return F.a.createElement("div",null,"Settings")}),$=n(52),q=n.n($),ee=function(e){var t="/friends/"+e.id;return F.a.createElement("div",{className:q.a.friends+" "+q.a.active},F.a.createElement(Y.b,{to:t},e.name))},te=function(e){var t=e.state.friendsPage.map((function(e){return F.a.createElement(ee,{name:e.name,id:e.id})}));return F.a.createElement("div",{className:q.a.friends},t)},ne=n(11),re=n(67),ae=n(129),oe=n(69),ce=n.n(oe),ie=n(136),ue=n.n(ie),se=function(e,t,n,r){for(var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,o=Math.ceil(e/t),c=[],i=1;i<=o;i++)c.push(i);var u=Math.ceil(o/a),s=Object(L.useState)(1),l=Object(ae.a)(s,2),f=l[0],m=l[1],p=(f-1)*a+1,d=f*a;return F.a.createElement("div",{className:ce.a.paginator},f>1&&F.a.createElement("button",{onClick:function(){m(f-1)}},"PREV"),c.filter((function(e){return e>=p&&e<=d})).map((function(e){return F.a.createElement("span",{className:ue()(Object(re.a)({},ce.a.selectedPage,n===e),ce.a.pageNumber),key:e,onClick:function(t){r(e)}},e)})),u>f&&F.a.createElement("button",{onClick:function(){m(f+1)}},"NEXT"))},le=n(55),fe=n(137),me=n.n(fe),pe=n(116),de=n.n(pe),ge=function(e){var t=e.user,n=Object(le.a)(e,["user"]);return F.a.createElement("div",null,F.a.createElement("span",null,F.a.createElement("div",null,F.a.createElement(Y.b,{to:"/profile/"+t.id},F.a.createElement("img",{src:null!=t.photos.small?t.photos.small:de.a,className:me.a.userPhoto}))),F.a.createElement("div",null,t.follow?F.a.createElement("button",{disabled:n.followInProgress.some((function(e){return e===t.id})),onClick:function(){n.unfollow(t.id)}},"Unfollow"):F.a.createElement("button",{disabled:n.followInProgress.some((function(e){return e===t.id})),onClick:function(){n.follow(t.id)}},"Follow"))),F.a.createElement("span",null,F.a.createElement("span",null,F.a.createElement("div",null,t.name),F.a.createElement("div",null,t.status)),F.a.createElement("span",null,F.a.createElement("div",null,"user.location.city"),F.a.createElement("div",null,"user.location.country"))))},he=function(e){return F.a.createElement("div",null,F.a.createElement(se,{currentPage:e.currentPage,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged}),F.a.createElement("div",null,e.users.map((function(t){return F.a.createElement(ge,{user:t,key:t.id,followInProgress:e.followInProgress,unfollow:e.unfollow,follow:e.follow})}))))},Ee=n(65),ve=n(117),be=function(e){function t(){var e,n;Object(G.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(D.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){n.props.getUsers(e,n.props.pageSize)},n}return Object(B.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return F.a.createElement(F.a.Fragment,null,this.props.isFetching?F.a.createElement(Ee.a,null):null,F.a.createElement(he,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followInProgress:this.props.followInProgress}))}}]),t}(F.a.Component),Oe=Object(r.d)(ve.a,Object(ne.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followInProgress:e.usersPage.followInProgress}}),{follow:function(e){return function(){var t=Object(l.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=p.c.follow.bind(p.c),w(n,e,r,h);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(l.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=p.c.unfollow.bind(p.c),w(n,e,r,E);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:v,togglefollowInProgress:O,getUsers:function(e,t){return function(){var n=Object(l.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(b(!0)),r(v(e)),n.next=4,p.c.getUsers(e,t);case 4:a=n.sent,r(b(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(be),we=n(91),_e=n.n(we),je=function(e){return F.a.createElement("header",{className:_e.a.header},F.a.createElement("img",{src:"https://cdn3.f-cdn.com//files/download/70016655/Logo%202.png"}),F.a.createElement("div",{className:_e.a.loginBlock},e.isAuth?F.a.createElement("div",null,e.login," - ",F.a.createElement("button",{onClick:e.logout},"\u0412\u044b\u0439\u0442\u0438")):F.a.createElement(Y.b,{to:"/login"},"Login")))},Se=function(e){function t(){return Object(G.a)(this,t),Object(D.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return F.a.createElement(je,this.props)}}]),t}(F.a.Component),Pe=Object(ne.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.data.resultCode&&t(y());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),ye=n(128),Ce=n(37),Ne=n(85),Ie=n(53),Te=n.n(Ie),ke=Object(ye.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return F.a.createElement("form",{onSubmit:t},Object(Ce.c)("email","Email",[Ne.b],Ce.a),Object(Ce.c)("password","Password",[Ne.b],Ce.a,{type:"password"}),Object(Ce.c)("rememberMe",null,[],Ce.a,{type:"checkbox"},"Remember me"),n&&F.a.createElement("div",{className:Te.a.formSummeryError},n),F.a.createElement("div",null,F.a.createElement("button",null,"Login")))})),Ue=Object(ne.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(l.a)(s.a.mark((function r(a){var o,c;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(y()):(c=o.data.messages.length>0?o.data.messages[0]:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",a(Object(j.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.login;return e.isAuth?F.a.createElement(W.a,{to:"/profile"}):F.a.createElement("div",null,F.a.createElement("h1",null,"Login"),F.a.createElement(ke,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}}))})),xe=function(e){return function(t){return F.a.createElement(L.Suspense,{fallback:F.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},F.a.createElement(e,t))}},Ae=F.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Le=F.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Fe=function(e){function t(){return Object(G.a)(this,t),Object(D.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.inisializeApp()}},{key:"render",value:function(){return this.props.initialized?F.a.createElement("div",{className:"app-wrapper"},F.a.createElement(Pe,null),F.a.createElement(X,null),F.a.createElement("div",{className:"app-wrapper-content"},F.a.createElement(W.b,{path:"/dialogs",render:xe(Ae)}),F.a.createElement(W.b,{path:"/profile/:userId?",render:xe(Le)}),F.a.createElement(W.b,{path:"/users",render:function(){return F.a.createElement(Oe,null)}}),F.a.createElement(W.b,{path:"/login",render:function(){return F.a.createElement(Ue,null)}}),F.a.createElement(W.b,{path:"/news",render:function(){return F.a.createElement(J,null)}}),F.a.createElement(W.b,{path:"/music",render:function(){return F.a.createElement(Z,null)}}),F.a.createElement(W.b,{path:"/settings",render:function(){return F.a.createElement(Q,null)}}),F.a.createElement(W.b,{path:"/friends",render:function(){return F.a.createElement(te,null)}}))):F.a.createElement(Ee.a,null)}}]),t}(F.a.Component),ze=Object(r.d)(W.f,Object(ne.b)((function(e){return{initialized:e.app.initialized}}),{inisializeApp:function(){return function(e){var t=e(y());Promise.all([t]).then((function(){e({type:"INISIALIZED_SUCESS"})}))}}}))(Fe);R.a.render(F.a.createElement(Y.a,null,F.a.createElement(ne.a,{store:A},F.a.createElement(ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(55),a=n(0),o=n.n(a),c=n(53),i=n.n(c),u=n(88),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("div",null,a),c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({name:e,placeholder:t,validate:n,component:r},a))," ",c)}},52:function(e,t,n){},53:function(e,t,n){e.exports={formControl:"FormsControlls_formControl__3lzYT",error:"FormsControlls_error__10DIp",formSummeryError:"FormsControlls_formSummeryError__HEjMi"}},65:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(138),c=n.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:c.a}))}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__1IOMz",pageNumber:"Paginator_pageNumber__3_XLG",selectedPage:"Paginator_selectedPage__2G9jE"}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0438\u044f"},a=function(e){return function(t){if(t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 : ".concat(e)}}},91:function(e,t,n){e.exports={header:"Header_header__3Yx7T",loginBlock:"Header_loginBlock__1rM44"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var r=n(8),a=n.n(r),o=n(18),c=n(43),i=n(9),u=n(16),s={posts:[{id:1,message:"Hey, i am noodles",likeCount:"10"},{id:2,message:"Helloy, it lessons",likeCount:"15"},{id:3,message:"Yo",likeCount:"11"},{id:4,message:"Something",likeCount:"5"}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likeCount:0};return Object(i.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});case"DELETE_POSTS":return Object(i.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[164,1,2]]]);
//# sourceMappingURL=main.1358d16e.chunk.js.map