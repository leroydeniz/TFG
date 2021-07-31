(this.webpackJsonpgenn=this.webpackJsonpgenn||[]).push([[0],{100:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return x}));var a=n(15),i=n(16),c=n(18),r=n(17),s=n(0),o=n.n(s),d=(n(70),n(41)),l=n.n(d),m=n(42),j=n.n(m),u=n(43),b=n.n(u),p=n(44),h=n(101),O=n(1),x=function(t){Object(c.a)(s,t);var n=Object(r.a)(s);function s(t){var i;return Object(a.a)(this,s),(i=n.call(this,t)).emailRef=o.a.createRef(),i.termsRef=o.a.createRef(),i.onTrainUpload=function(e){i.setState({train:e.target.files[0]}),console.log(i.state)},i.onTestUpload=function(e){i.setState({test:e.target.files[0]}),console.log(i.state)},i.onFormSubmit=function(t){t.preventDefault(),document.getElementById("div-entrenar").classList.remove("showing"),document.getElementById("div-entrenar").classList.add("not-showing"),document.getElementById("div-loading").classList.remove("not-showing"),document.getElementById("div-loading").classList.add("showing"),i.setState({email:i.emailRef.current.value}),i.setState({terms:i.termsRef.current.value});var n=new FormData;n.append("email",i.emailRef.current.value),n.append("servicio",i.state.service),n.append("train",i.state.train,"train"),n.append("test",i.state.test,"test"),!0===document.getElementById("terms").checked?n.append("terms","Acepto"):n.append("terms","No acepto"),l()({method:"post",url:"".concat("https://miescher.csic.edu.uy","/test"),data:n,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"OPTIONS,POST,GET","Content-Type":"multipart/form-data"}}).then((function(t){if("Error"in t.data)document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-error").classList.remove("not-showing"),document.getElementById("div-error").classList.add("showing"),document.getElementById("p-error").innerHTML=t.data.Error;else{document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-metricas").classList.remove("not-showing"),document.getElementById("div-metricas").classList.add("showing"),console.log(t),document.getElementById("num_capas").innerHTML=t.data.num_capas,document.getElementById("num_neuronas").innerHTML=t.data.num_neuronas,document.getElementById("accuracy").innerHTML=100-t.data.error_perc.toFixed(2),document.getElementById("avg_loss").innerHTML=t.data.avg_loss.toFixed(2),document.getElementById("error_perc").innerHTML=t.data.error_perc.toFixed(2);var n=j.a.encode(t.data.file);n=b.a.encode(e.from(t.data.file),"iso-8859-1");var a=new Blob([n],{type:"text/csv"}),i=window.URL.createObjectURL(a),c=document.createElement("a");c.href=i,c.setAttribute("download","model.onnx"),c.click()}})).catch((function(e){console.log("ERROR >> "+e),document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-error").classList.remove("not-showing"),document.getElementById("div-error").classList.add("showing"),document.getElementById("p-error").innerHTML=e}))},i.state={service:"test",email:null,terms:null,train:null,test:null},i}return Object(i.a)(s,[{key:"render",value:function(){return Object(O.jsx)(o.a.Fragment,{children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("h1",{children:Object(O.jsx)("b",{children:"Evaluar."})}),Object(O.jsxs)("div",{id:"div-entrenar",className:"showing",children:[Object(O.jsx)("div",{className:"form-group",children:Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Resultado:"})," datos de evaluaci\xf3n del clasificador."]})}),Object(O.jsx)(h.a,{}),Object(O.jsxs)("form",{onSubmit:this.onFormSubmit,id:"formServicios",children:[Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("p",{children:"Definici\xf3n de la red neuronal o conjunto de datos de entrenamiento:"})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("input",{className:"form-control",type:"file",id:"train",name:"train",accept:".csv,.onnx",placeholder:"Dataset de train","aria-label":"Dataset de train","aria-describedby":"basic-addon1",onChange:this.onTrainUpload,ref:this.trainRef,required:!0})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("p",{children:"Conjunto de datos clasificados:"})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("input",{className:"form-control",type:"file",id:"dataset2",name:"dataset2",accept:".csv",placeholder:"Dataset de test","aria-label":"Dataset de test","aria-describedby":"basic-addon1",onChange:this.onTestUpload,ref:this.dataset2Ref,required:!0})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("p",{children:"Email (opcional):"})}),Object(O.jsxs)("div",{className:"input-group mb-3",children:[Object(O.jsx)("div",{className:"input-group-prepend",children:Object(O.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"@"})}),Object(O.jsx)("input",{className:"form-control",type:"email",id:"email",name:"email",placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1",ref:this.emailRef})]}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("p",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",name:"terms",id:"terms",value:"Acepto",ref:this.termsRef,defaultChecked:!0}),"Acepto los t\xe9rminos y condiciones del servicio."]})})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-info",value:"Evaluar"})})]})]}),Object(O.jsxs)("div",{id:"div-loading",className:"not-showing",children:[Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"Evaluando..."}),Object(O.jsx)("img",{src:p.a,width:"400px;",alt:"loading",id:"img-loading"})]}),Object(O.jsxs)("div",{id:"div-metricas",className:"not-showing",children:[Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"M\xe9tricas"}),Object(O.jsxs)("p",{children:[Object(O.jsxs)("li",{children:["  Total casos: ",Object(O.jsx)("span",{id:"num_capas"})]},"MET01"),Object(O.jsxs)("li",{children:["  Accuracy: ",Object(O.jsx)("span",{id:"num_capas"})]},"MET02"),Object(O.jsxs)("li",{children:["  F1-score: ",Object(O.jsx)("span",{id:"num_capas"})]},"MET03"),Object(O.jsxs)("li",{children:["  ROC: ",Object(O.jsx)("span",{id:"num_capas"}),"%"]},"MET04")]})]}),Object(O.jsxs)("div",{id:"div-error",className:"not-showing",border:"1",children:[Object(O.jsx)("h2",{children:"Error"}),Object(O.jsx)("p",{id:"p-error"})]})]})})}}]),s}(s.Component)}).call(this,n(51).Buffer)},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(45),i=n(46),c=n(0),r=n.n(c),s=n(9),o=n(75),d=n(76),l=n(77),m=n(13),j=n(1),u=Object(s.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(j.jsx)(d.a,Object(i.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),b=Object(s.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(l.a);function p(){var e=r.a.useState(null),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(o.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){i(e.currentTarget)},children:"Condiciones del CSV"}),Object(j.jsxs)(u,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){i(null)},children:[Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Archivo en formato CSV u ONNX"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Separado por coma -> ,"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"M\xednimo 6 registros",secondary:"S\xf3lo CSV Train"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"M\xe1ximo 100k registros"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Tama\xf1o m\xe1ximo 20MB"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"La \xfaltima columna es variable de clase",secondary:"Ambos CSV"})})]})]})}},102:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return x}));var a=n(15),i=n(16),c=n(18),r=n(17),s=n(0),o=n.n(s),d=(n(70),n(41)),l=n.n(d),m=n(42),j=n.n(m),u=n(43),b=n.n(u),p=n(44),h=n(103),O=n(1),x=function(t){Object(c.a)(s,t);var n=Object(r.a)(s);function s(t){var i;return Object(a.a)(this,s),(i=n.call(this,t)).emailRef=o.a.createRef(),i.termsRef=o.a.createRef(),i.onTrainUpload=function(e){i.setState({train:e.target.files[0]});var t=e.target.files[0].name.split(".").pop();i.setState({extTrain:t}),console.log(i.state)},i.onTestUpload=function(e){i.setState({test:e.target.files[0]});var t=e.target.files[0].name.split(".").pop();i.setState({extTest:t}),console.log(i.state)},i.onFormSubmit=function(t){t.preventDefault(),document.getElementById("div-entrenar").classList.remove("showing"),document.getElementById("div-entrenar").classList.add("not-showing"),document.getElementById("div-loading").classList.remove("not-showing"),document.getElementById("div-loading").classList.add("showing"),i.setState({email:i.emailRef.current.value}),i.setState({terms:i.termsRef.current.value});var n=new FormData;n.append("email",i.emailRef.current.value),n.append("servicio",i.state.service),n.append("train",i.state.train,"train"),n.append("test",i.state.test,"test"),n.append("train_extension",i.state.extTrain),n.append("test_extension",i.state.extTest),!0===document.getElementById("terms").checked?n.append("terms","Acepto"):n.append("terms","No acepto"),l()({method:"post",url:"".concat("https://miescher.csic.edu.uy","/classify"),data:n,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"OPTIONS,POST,GET","Content-Type":"multipart/form-data"}}).then((function(t){if("Error"in t.data)document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-error").classList.remove("not-showing"),document.getElementById("div-error").classList.add("showing"),document.getElementById("p-error").innerHTML=t.data.Error;else{document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-metricas").classList.remove("not-showing"),document.getElementById("div-metricas").classList.add("showing"),console.log(t),document.getElementById("num_capas").innerHTML=t.data.num_capas,document.getElementById("num_neuronas").innerHTML=t.data.num_neuronas,document.getElementById("accuracy").innerHTML=100-t.data.error_perc.toFixed(2),document.getElementById("avg_loss").innerHTML=t.data.avg_loss.toFixed(2),document.getElementById("error_perc").innerHTML=t.data.error_perc.toFixed(2);var n=j.a.encode(t.data.file);n=b.a.encode(e.from(t.data.file),"iso-8859-1");var a=new Blob([n],{type:"text/csv"}),i=window.URL.createObjectURL(a),c=document.createElement("a");c.href=i,c.setAttribute("download","clasificado.csv"),c.click()}})).catch((function(e){console.log(e)}))},i.state={service:"classify",email:null,terms:null,train:null,test:null,extTrain:null,extTest:null},i}return Object(i.a)(s,[{key:"render",value:function(){return Object(O.jsx)(o.a.Fragment,{children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("h1",{children:Object(O.jsx)("b",{children:"Clasificar."})}),Object(O.jsxs)("div",{id:"div-entrenar",className:"showing",children:[Object(O.jsx)("div",{className:"form-group",children:Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Resultado:"})," conjunto de datos clasificado."]})}),Object(O.jsx)(h.a,{}),Object(O.jsxs)("form",{onSubmit:this.onFormSubmit,id:"formServicios",children:[Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("p",{children:"Definici\xf3n de la red neuronal o conjunto de datos de entrenamiento:"})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("input",{className:"form-control",type:"file",id:"train",name:"train",accept:".csv,.onnx",placeholder:"Dataset de train","aria-label":"Dataset de train","aria-describedby":"basic-addon1",onChange:this.onTrainUpload,ref:this.trainRef,required:!0})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("p",{children:"Conjunto de datos clasificados:"})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("input",{className:"form-control",type:"file",id:"dataset2",name:"dataset2",accept:".csv",placeholder:"Dataset de test","aria-label":"Dataset de test","aria-describedby":"basic-addon1",onChange:this.onTestUpload,ref:this.dataset2Ref,required:!0})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("p",{children:"Email (opcional):"})}),Object(O.jsxs)("div",{className:"input-group mb-3",children:[Object(O.jsx)("div",{className:"input-group-prepend",children:Object(O.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"@"})}),Object(O.jsx)("input",{className:"form-control",type:"email",id:"email",name:"email",placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1",ref:this.emailRef})]}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("p",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",name:"terms",id:"terms",value:"Acepto",ref:this.termsRef,defaultChecked:!0}),"Acepto los t\xe9rminos y condiciones del servicio."]})})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-info",value:"Clasificar"})})]})]}),Object(O.jsxs)("div",{id:"div-loading",className:"not-showing",children:[Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"Clasificando..."}),Object(O.jsx)("img",{src:p.a,width:"400px;",alt:"loading",id:"img-loading"})]}),Object(O.jsxs)("div",{id:"div-metricas",className:"not-showing",children:[Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"M\xe9tricas"}),Object(O.jsx)("p",{children:"Se han descargado los casos clasificados."})]}),Object(O.jsxs)("div",{id:"div-error",className:"not-showing",border:"1",children:[Object(O.jsx)("h2",{children:"Error"}),Object(O.jsx)("p",{id:"p-error"})]})]})})}}]),s}(s.Component)}).call(this,n(51).Buffer)},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(45),i=n(46),c=n(0),r=n.n(c),s=n(9),o=n(75),d=n(76),l=n(77),m=n(13),j=n(1),u=Object(s.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(j.jsx)(d.a,Object(i.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),b=Object(s.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(l.a);function p(){var e=r.a.useState(null),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(o.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){i(e.currentTarget)},children:"Condiciones del CSV"}),Object(j.jsxs)(u,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){i(null)},children:[Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Archivo en formato CSV u ONNX"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Separado por coma -> ,"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"M\xednimo 6 registros",secondary:"S\xf3lo CSV Train"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"M\xe1ximo 100k registros"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Tama\xf1o m\xe1ximo 20MB"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Todas las clases deben tener al menos un registro"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"La \xfaltima columna es variable de clase",secondary:"S\xf3lo CSV Train"})})]})]})}},113:function(e,t,n){},114:function(e,t,n){},158:function(e,t){},159:function(e,t){},166:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(10),r=n.n(c),s=(n(113),n(114),n(15)),o=n(16),d=n(18),l=n(17),m=n(195),j=n(196),u=n(194),b=n.p+"static/media/logo.e53c176c.svg",p=n(1),h=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"divMenu",children:Object(p.jsxs)(m.a,{expand:"lg",children:[Object(p.jsx)(m.a.Brand,{href:"/",children:Object(p.jsxs)("div",{id:"logo",children:[Object(p.jsx)("img",{src:b,className:"app-logo",alt:"Logotipo"}),Object(p.jsxs)("span",{id:"brand",children:[Object(p.jsx)("strong",{children:"GANN"}),"Service"]})]})}),Object(p.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(j.a,{className:"ms-auto",children:[Object(p.jsx)(j.a.Link,{href:"/",children:"Inicio"}),Object(p.jsxs)(u.a,{title:"Servicios",id:"basic-nav-dropdown",children:[Object(p.jsx)(u.a.Item,{href:"/entrenamiento",children:"Entrenamiento"}),Object(p.jsx)(u.a.Item,{href:"/evaluacion",children:"Evaluaci\xf3n"}),Object(p.jsx)(u.a.Item,{href:"/clasificacion",children:"Clasificaci\xf3n"})]}),Object(p.jsx)(j.a.Link,{href:"/autor",children:"Autor y Memoria"})]})})]})})}}]),n}(i.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("header",{id:"header",children:Object(p.jsxs)("div",{className:"center",children:[Object(p.jsx)(h,{}),Object(p.jsx)("div",{className:"clearfix"})]})})}}]),n}(a.Component),x=function(){return Object(p.jsx)("footer",{id:"footer",children:Object(p.jsx)("div",{className:"center",children:Object(p.jsxs)("p",{children:["TFG de ",Object(p.jsx)("a",{href:"https://leroydeniz.com",children:" Leroy Deniz"})," \xa0 | \xa0 Grado en Ingenier\xeda Inform\xe1tica \xa0 | \xa0 Universidad del Pa\xeds Vasco"]})})})},g=n(104),v=n(12),f=n(98),y=n(100),E=n(102),w=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h1",{children:"Autor."}),Object(p.jsx)("h3",{children:"Leroy Deniz"}),Object(p.jsxs)("p",{children:["Grado en Ingenier\xeda Inform\xe1tica",Object(p.jsx)("br",{}),"Especialidad Ingenier\xeda de Software",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"(+34) 669 987 109",Object(p.jsx)("br",{}),"leroydeniz ",Object(p.jsx)("code",{children:"[at]"})," icloud.com",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("code",{children:"https://leroydeniz.com"})]})]})}}]),n}(a.Component),I=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h1",{children:"GANN Service."}),Object(p.jsxs)("p",{children:["Los algoritmos de clasificaci\xf3n supervisada resuelven un tipo de problemas espec\xedficos donde se cuenta con una serie de datos previamente clasificados. Para poder decidir la clase de una muestra, se tiene en cuenta toda la informaci\xf3n que se pueda extraer del conjunto de datos inicial, cuya clase es conocida por el clasificador.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"En este trabajo se implementa una aplicaci\xf3n web, que permite al usuario interactuar a trav\xe9s de un webservice, con una API (Application Programming Interface) capaz de entrenar y aproximar muy bien un \xf3ptimo global de una red neuronal profunda mediante algoritmos gen\xe9ticos, con las funcionalidades de entrenamiento, evaluaci\xf3n y clasificaci\xf3n.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"La aplicaci\xf3n es construida sobre una arquitectura de tres capas, contando con una interfaz web dise\xf1ada en ReactJS, que permitir\xe1 al usuario interactuar con las funcionalidades del software de clasificaci\xf3n.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Se aborda el dise\xf1o del Core utilizando t\xe9cnicas de clasificaci\xf3n supervisada bajo entrenamiento de redes neuronales profundas, optimiz\xe1ndolas a trav\xe9s de backpropagation y evolucion\xe1ndolas con algoritmos gen\xe9ticos. La API es construida en Python con Flask a nivel de Controlador y PyTorch como framework en el Core. Este \xfaltimo ser\xe1 el responsable de entrenar la red neuronal y hacerla evolucionar hasta lograr una aproximaci\xf3n muy cercana al \xf3ptimo global. El uso de metaheur\xedsticas permite a la red modificar sus pesos y crecer o reducir, tanto en n\xfamero de nodos como de capas de manera din\xe1mica, en funci\xf3n de lo que ella misma considere necesaria para su propio entrenamiento.",Object(p.jsx)("br",{})]})]})}}]),n}(a.Component),L=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h1",{children:"Ups."}),Object(p.jsx)("p",{children:"La p\xe1gina a la que intenta acceder no ha sido encontrada."})]})}}]),n}(a.Component),B=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(g.a,{children:Object(p.jsxs)(v.c,{children:[Object(p.jsx)(v.a,{exact:!0,path:"/",component:I}),Object(p.jsx)(v.a,{exact:!0,path:"/index",component:I}),";",Object(p.jsx)(v.a,{exact:!0,path:"/entrenamiento",component:f.a}),";",Object(p.jsx)(v.a,{exact:!0,path:"/evaluacion",component:y.a}),";",Object(p.jsx)(v.a,{exact:!0,path:"/clasificacion",component:E.a}),";",Object(p.jsx)(v.a,{exact:!0,path:"/autor",component:w}),";",Object(p.jsx)(v.a,{component:L}),";"]})})}}]),n}(a.Component);var N=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsx)(B,{}),Object(p.jsx)(x,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),T()},44:function(e,t,n){"use strict";t.a=n.p+"static/media/lr2.2cce4ca0.gif"},98:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return x}));var a=n(15),i=n(16),c=n(18),r=n(17),s=n(0),o=n.n(s),d=(n(70),n(41)),l=n.n(d),m=n(42),j=n.n(m),u=n(43),b=n.n(u),p=n(44),h=n(99),O=n(1),x=function(t){Object(c.a)(s,t);var n=Object(r.a)(s);function s(t){var i;return Object(a.a)(this,s),(i=n.call(this,t)).emailRef=o.a.createRef(),i.termsRef=o.a.createRef(),i.onFileUpload=function(e){i.setState({train:e.target.files[0]});var t=e.target.files[0].name.split(".").pop();i.setState({extTrain:t})},i.onFormSubmit=function(t){t.preventDefault(),document.getElementById("div-entrenar").classList.remove("showing"),document.getElementById("div-entrenar").classList.add("not-showing"),document.getElementById("div-loading").classList.remove("not-showing"),document.getElementById("div-loading").classList.add("showing"),i.setState({email:i.emailRef.current.value}),i.setState({terms:i.termsRef.current.value});var n=new FormData;n.append("email",i.emailRef.current.value),n.append("servicio",i.state.service),n.append("train",i.state.train),n.append("train_extension",i.state.extTrain),!0===document.getElementById("terms").checked?n.append("terms","Acepto"):n.append("terms","No acepto"),l()({method:"post",url:"".concat("https://miescher.csic.edu.uy","/train"),data:n,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"OPTIONS,POST,GET","Content-Type":"multipart/form-data"}}).then((function(t){if("Error"in t.data)document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-error").classList.remove("not-showing"),document.getElementById("div-error").classList.add("showing"),document.getElementById("p-error").innerHTML=t.data.Error;else{document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-metricas").classList.remove("not-showing"),document.getElementById("div-metricas").classList.add("showing"),console.log(t),document.getElementById("num_capas").innerHTML=t.data.num_capas,document.getElementById("num_neuronas").innerHTML=t.data.num_neuronas,document.getElementById("accuracy").innerHTML=100-t.data.error_perc.toFixed(2),document.getElementById("avg_loss").innerHTML=t.data.avg_loss.toFixed(2),document.getElementById("error_perc").innerHTML=t.data.error_perc.toFixed(2);var n=j.a.encode(t.data.file);n=b.a.encode(e.from(t.data.file),"iso-8859-1");var a=new Blob([n],{type:"text/onnx"}),i=window.URL.createObjectURL(a),c=document.createElement("a");c.href=i,c.setAttribute("download","model.onnx"),c.click()}})).catch((function(e){console.log("ERROR >> "+e),document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-error").classList.remove("not-showing"),document.getElementById("div-error").classList.add("showing"),document.getElementById("p-error").innerHTML=e}))},i.state={email:null,service:"train",terms:"Acepto",train:null,extTrain:null},i}return Object(i.a)(s,[{key:"componentDidUpdate",value:function(e,t){console.log(this.state)}},{key:"render",value:function(){return Object(O.jsx)(o.a.Fragment,{children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("h1",{children:Object(O.jsx)("b",{children:"Entrenar."})}),Object(O.jsxs)("div",{id:"div-entrenar",className:"showing",children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Resultado:"})," configuraci\xf3n de una red neuronal y las m\xe9tricas de evaluaci\xf3n de \xe9sta."]}),Object(O.jsx)(h.a,{})]}),Object(O.jsxs)("form",{onSubmit:this.onFormSubmit,id:"formServicios",children:[Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("p",{children:"Conjunto de datos de entrenamiento:"})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("input",{className:"form-control",type:"file",id:"train",name:"train",accept:".csv",placeholder:"Dataset de train","aria-label":"Dataset de train","aria-describedby":"basic-addon1",ref:this.trainRef,onChange:this.onFileUpload,required:!0})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsx)("p",{children:"Email (opcional):"})}),Object(O.jsxs)("div",{className:"input-group mb-3",children:[Object(O.jsx)("div",{className:"input-group-prepend",children:Object(O.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"@"})}),Object(O.jsx)("input",{className:"form-control",type:"email",id:"email",name:"email",placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1",ref:this.emailRef})]}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("p",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",name:"terms",id:"terms",value:"Acepto",ref:this.termsRef,defaultChecked:!0}),"Acepto los t\xe9rminos y condiciones del servicio."]})})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-info",value:"Entrenar"})})]})]}),Object(O.jsxs)("div",{id:"div-loading",className:"not-showing",children:[Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"Entrenando..."}),Object(O.jsx)("img",{src:p.a,width:"400px;",alt:"loading",id:"img-loading"})]}),Object(O.jsxs)("div",{id:"div-metricas",className:"not-showing",children:[Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"M\xe9tricas"}),Object(O.jsxs)("p",{children:[Object(O.jsxs)("li",{children:["  N\xfamero de capas: ",Object(O.jsx)("span",{id:"num_capas"})]},"MET01"),Object(O.jsxs)("li",{children:["  N\xfamero de neuronas: ",Object(O.jsx)("span",{id:"num_neuronas"})]},"MET02"),Object(O.jsxs)("li",{children:["  Tasa de acierto: ",Object(O.jsx)("span",{id:"accuracy"}),"%"]},"MET03"),Object(O.jsxs)("li",{children:["  Error: ",Object(O.jsx)("span",{id:"error_perc"}),"%"]},"MET04"),Object(O.jsxs)("li",{children:["  Media de p\xe9rdida: ",Object(O.jsx)("span",{id:"avg_loss"})]},"MET05")]})]}),Object(O.jsxs)("div",{id:"div-error",className:"not-showing",border:"1",children:[Object(O.jsx)("h2",{children:"Error"}),Object(O.jsx)("p",{id:"p-error"})]})]})})}}]),s}(s.Component)}).call(this,n(51).Buffer)},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(45),i=n(46),c=n(0),r=n.n(c),s=n(9),o=n(75),d=n(76),l=n(77),m=n(13),j=n(1),u=Object(s.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(j.jsx)(d.a,Object(i.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),b=Object(s.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(l.a);function p(){var e=r.a.useState(null),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(o.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){i(e.currentTarget)},children:"Condiciones del CSV"}),Object(j.jsxs)(u,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){i(null)},children:[Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Archivo en formato CSV"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Separado por coma -> ,"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"M\xednimo 6 registros"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"M\xe1ximo 100k registros"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"Tama\xf1o m\xe1ximo 20MB"})}),Object(j.jsx)(b,{children:Object(j.jsx)(m.a,{primary:"La \xfaltima columna es variable de clase"})})]})]})}}},[[166,1,2]]]);
//# sourceMappingURL=main.009fbd29.chunk.js.map