(this["webpackJsonpreact-lesson"]=this["webpackJsonpreact-lesson"]||[]).push([[4],{294:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1HtFv",dialog:"Dialogs_dialog__ymGTz",dialogItems:"Dialogs_dialogItems__24ALq",active:"Dialogs_active__1Dt2J",messages:"Dialogs_messages__1eIsU"}},299:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(103),l=t(294),o=t.n(l),c=t(10),m=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:o.a.dialog+" "+o.a.active},n.a.createElement(c.b,{to:a},e.name))},r=function(e){return n.a.createElement("div",{className:o.a.message},e.message)},d=t(24),g=t(85),u=t(88),E=t(128),b=t(37),v=Object(g.a)(50),f=Object(E.a)({form:"newMessage"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(u.a,{placeholder:"Enter Your Message",name:"newMessageBody",component:b.b,validate:[g.b,v]})),n.a.createElement("div",null,n.a.createElement("button",null,"Add message")))})),_=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return n.a.createElement(m,{name:e.name,key:e.id,id:e.id})})),s=a.message.map((function(e){return n.a.createElement(r,{message:e.message,key:e.id})}));a.newMessageBody;return e.isAuth?n.a.createElement("div",{className:o.a.dialogs},n.a.createElement("div",{className:o.a.dialogItems},t),n.a.createElement("div",{className:o.a.messages},n.a.createElement("div",null,s)),n.a.createElement(f,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):n.a.createElement(d.a,{to:"/login"})},p=t(11),M=t(117),h=t(7);a.default=Object(h.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),M.a)(_)}}]);
//# sourceMappingURL=4.936a6810.chunk.js.map