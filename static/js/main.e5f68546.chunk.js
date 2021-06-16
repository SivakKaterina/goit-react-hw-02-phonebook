(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"filter_label__31Mps",input:"filter_input__1hvEo"}},11:function(t,e,n){t.exports={sectionContainer:"section_sectionContainer__2hzU7",title:"section_title__1Eaok"}},14:function(t,e,n){t.exports={button:"contactList_button__2aY4c"}},15:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},22:function(t,e,n){},3:function(t,e,n){t.exports={form:"contactForm_form__3ExwJ",input:"contactForm_input__izR25",span:"contactForm_span__36iTf",button:"contactForm_button__16bvx"}},32:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),o=(n(21),n(22),n(16)),s=n(5),u=n(6),l=n(8),m=n(7),b=n(2),d=n.n(b),h=n(13),j=n(3),p=n.n(j),f=n(0),O=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:this.nameInputId,children:"Name"}),Object(f.jsx)("input",{className:p.a.input,id:this.nameInputId,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.             \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(f.jsx)("label",{htmlFor:this.numberInputId,children:"Number"}),Object(f.jsx)("input",{className:p.a.input,id:this.numberInputId,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",required:!0}),Object(f.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=n(14),_=n.n(x),v=function(t){var e=t.contacts,n=t.onDeleteList;return Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:a}),Object(f.jsx)("span",{children:r}),Object(f.jsx)("button",{className:_.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},C=n(10),g=n.n(C),I=function(t){var e=t.filter,n=t.onChange;return Object(f.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})},S=n(11),y=n.n(S),N=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("div",{className:y.a.sectionContainer,children:[Object(f.jsx)("h2",{className:y.a.title,children:e}),n]})},w=n(15),k=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:w,filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,r=t.state.contacts,c={id:d.a.generate(),name:n,number:a};r.some((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))?alert("".concat(n," is already in contacts")):r.some((function(t){return t.number===c.number}))?alert("".concat(a," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))},t.deleteItemList=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(N,{title:"Phonebook",children:Object(f.jsx)(O,{onSubmit:this.formSubmitHandler})}),Object(f.jsxs)(N,{title:"Contacts",children:[Object(f.jsx)(I,{filter:t,onChange:this.changeFilter}),Object(f.jsx)(v,{contacts:n,onDeleteList:this.deleteItemList})]})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e5f68546.chunk.js.map