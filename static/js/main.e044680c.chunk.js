(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/LaboratorialogoBLK.bcdab9d9.png"},107:function(e,t,a){e.exports=a.p+"static/media/YellowbrkL1-01.765eaf45.png"},111:function(e,t,a){e.exports=a(171)},116:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=(a(116),a(9)),o=a(10),s=a(12),u=a(11),m=a(13),d=a(29),h=a(40),f=a(37),b=a(23),E=a(15),p=a(88),v=a.n(p),g=a(173),O=function(e){return l.a.createElement(g.a,null,e.children)},j=a(16),y=a(53),k=a.n(y),x=a(89),N=a.n(x),S=a(90),B=a.n(S),C=a(177),w=a(91),I=a.n(w),A=a(92),D=a.n(A);function W(){var e=Object(E.a)(["\n    .modal-content{\n        text-align: center;\n    }\n"]);return W=function(){return e},e}var L=j.a.div(W()),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(L,null,l.a.createElement(C.a.Dialog,null,l.a.createElement(C.a.Header,null,l.a.createElement(C.a.Title,null,l.a.createElement("h2",null,"Error"))),l.a.createElement(C.a.Body,null,l.a.createElement("img",{src:D.a,alt:"fail",style:{height:300}}),l.a.createElement("p",null,"Tu c\xf3digo QR es incorrecto.")," ",l.a.createElement("br",null))))}}]),t}(l.a.Component);function F(){var e=Object(E.a)(["\n    .modal-content{\n        text-align: center;\n    }\n"]);return F=function(){return e},e}var z=j.a.div(F()),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={redirect:!1,data:[],totalStudents:0,totalData:[],studentName:[],handleSuccess:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users").then(function(e){return e.json()}).then(function(t){var a=t.filter(function(e){return"student"===e.role});return e.setState({totalStudents:a.length,totalData:a}),e.findStudent(e.props.scanId,e.state.totalData),a})}},{key:"findStudent",value:function(e,t){var a=t.find(function(t){return t.id===e});if(void 0!==a){var n=a.name;return this.setState({studentName:n}),n}this.setState({studentName:"Fail"})}},{key:"render",value:function(){var e=this.state.studentName;return"Fail"!==e?l.a.createElement(z,null,l.a.createElement(C.a.Dialog,null,l.a.createElement(C.a.Header,null,l.a.createElement(C.a.Title,null,l.a.createElement("h2",null,"\xa1Bienvenida! ",l.a.createElement("h4",null,e)))),l.a.createElement(C.a.Body,null,l.a.createElement("img",{src:I.a,alt:"success",style:{height:300}}),l.a.createElement("p",null,"Tu asistencia ha sido registrada exitosamente.")),l.a.createElement(C.a.Footer,null))):l.a.createElement(T,null)}}]),t}(l.a.Component),M=a(66);M.initializeApp({apiKey:"AIzaSyASTPd1SOP_zzb369dwfWIR-dP7wVCexJk",authDomain:"open-house-organa.firebaseapp.com",databaseURL:"https://open-house-organa.firebaseio.com",projectId:"open-house-organa",storageBucket:"open-house-organa.appspot.com",messagingSenderId:"512283806532",appId:"1:512283806532:web:d879606f6b83049d"});var R=M,V=a(97),q=a.n(V),J=a(180),G=a(21),H=a.n(G);function K(){var e=Object(E.a)(["\n  * {\n    margin-top: 2rem;\n    margin: auto;\n    text-align: center;\n    border-radius: 1rem;\n  }\n"]);return K=function(){return e},e}var Q=j.a.div(K()),Y={height:"100px",float:"right"},U={height:"8vh",display:"block",margin:"auto"},$=l.a.createElement(q.a,{id:"popover-basic",title:"\xbfNecesitas ayuda?"},l.a.createElement("p",null,"- Coloca el c\xf3digo lo m\xe1s paralelo posible a la c\xe1mara."),l.a.createElement("p",null,"- Limpia y sube el brillo a la pantalla del smartphone."),l.a.createElement("p",null,"- Verifica que el c\xf3digo que escaneas sea correcto."),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Si el error persiste, busca a unx coach."))),_=H()().format("ll"),X=R.database().ref("attendance").child(_).child("students"),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={delay:500,result:"",scanner:[],totalData:[]},a.addAttendanceWithConditions=a.addAttendanceWithConditions.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"addAttendanceWithConditions",value:function(e){var t=[],a=[];if(null!=e){this.setState({scanner:e});var n=this.state.totalData.find(function(t){return t.id===e});X.once("value",function(n){"string"===typeof(t=n.val())||(a=t.find(function(t){return e===t}))}),void 0===n||a===e?this.setState({result:"error"}):(this.setState({result:"true"}),this.actualiceAttendanceInFirebace(e))}}},{key:"handleError",value:function(e){console.error(e)}},{key:"actualiceAttendanceInFirebace",value:function(e){X.once("value",function(t){X.set([].concat(Object(f.a)(t.val()),[e]))})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users").then(function(e){return e.json()}).then(function(t){var a=t.filter(function(e){return"student"===e.role});return e.setState({totalData:a}),a})}},{key:"render",value:function(){var e=this;if("true"===this.state.result)return setTimeout(function(){return e.setState({result:"false"})},3e3),l.a.createElement(P,{scanId:this.state.scanner});if("error"===this.state.result)return setTimeout(function(){return e.setState({result:"false"})},3e3),l.a.createElement(T,null);return l.a.createElement("div",{className:"scannerScreen"},l.a.createElement("br",null),l.a.createElement("img",{className:"brackets",src:N.a,style:{height:100},alt:"LabBrackets"}),l.a.createElement(O,null,l.a.createElement(Q,null,l.a.createElement("h1",null,"\xa1Bienvenida!"),l.a.createElement("p",null,"Por favor, escanea tu c\xf3digo QR"),l.a.createElement(v.a,{delay:this.state.delay,style:{width:400},onError:this.handleError,onScan:this.addAttendanceWithConditions})),l.a.createElement(J.a,{trigger:"click",placement:"right",overlay:$},l.a.createElement("img",{className:"info",src:B.a,style:U,alt:"help"}))),l.a.createElement("img",{className:"brackets",src:k.a,style:Y,alt:"LabBrackets"}))}}]),t}(n.Component),ee=a(181);function te(){var e=Object(E.a)(["\n    .card-text:last-child {\n        font-size: 0.6em;\n    }\n"]);return te=function(){return e},e}var ae=j.a.div(te()),ne=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(ae,null,l.a.createElement(ee.a,{className:"text-center"},l.a.createElement(ee.a.Body,null,l.a.createElement(ee.a.Title,null,l.a.createElement("h3",null,"Asistencias")),l.a.createElement(ee.a.Text,null,l.a.createElement("span",{className:"numbers",style:{fontSize:60}},this.props.totalAttendance)),l.a.createElement(ee.a.Text,null,l.a.createElement("small",{className:"text-muted"},l.a.createElement("p",null,"Total de estudiantes "),l.a.createElement("span",{className:"numbers"},this.props.totalStudents))))))}}]),t}(l.a.Component),le=a(57),re=a.n(le),ce=a(174);function ie(){var e=Object(E.a)(["\n    .detailButton {\n        float: right;\n    }\n\n    p, .p {\n        font-size: 0.7em;\n        margin-bottom: 0;\n    }\n"]);return ie=function(){return e},e}var oe=j.a.div(ie()),se={height:"4rem",float:"right"},ue=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.totalStudents-this.props.totalAttendance;return l.a.createElement(oe,null,l.a.createElement(ee.a,{className:"text-center"},l.a.createElement(ee.a.Body,null,l.a.createElement(ee.a.Title,null,l.a.createElement("h4",null,"Inasistencias")),l.a.createElement(ee.a.Text,null,l.a.createElement("span",{className:"numbers",style:{fontSize:50}},e),l.a.createElement("div",{className:"detailButton"},l.a.createElement(d.b,{to:"/absence-detailed"},l.a.createElement(ce.a,{variant:"outline-light"},l.a.createElement("img",{className:"brackets",src:re.a,style:se,alt:"LabBrackets"})),l.a.createElement("small",{className:"text-muted"},l.a.createElement("p",null,"Ver"))))))))}}]),t}(l.a.Component),me=a(175),de=a(102);function he(){var e=Object(E.a)(["\n    .detailButton {\n        float: right;\n    }\n\n    p, .p {\n        margin-bottom: 0;\n    }\n"]);return he=function(){return e},e}var fe=j.a.div(he()),be={height:"4rem",float:"right"},Ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(fe,null,l.a.createElement(ee.a,{className:"text-center"},l.a.createElement(ee.a.Body,null,l.a.createElement(ee.a.Title,null,l.a.createElement("h3",null,"Lista completa de estudiantes")),l.a.createElement(ee.a.Text,null),l.a.createElement(ee.a.Text,null,l.a.createElement("div",{className:"detailButton"},l.a.createElement(d.b,{to:"/full-list"},l.a.createElement(ce.a,{variant:"outline-light"},l.a.createElement("img",{className:"brackets",src:re.a,style:be,alt:"LabBrackets"})),l.a.createElement("small",{className:"text-muted"},l.a.createElement("p",null,"Ver"))))))))}}]),t}(l.a.Component),pe=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={date:[],totalAttendance:0,totalStudents:0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=H()().format("ll"),a=R.database().ref("attendance").child(t).child("students"),n=R.database().ref("totalStudentsInDB");a.on("value",function(t){var a=t.val();for(var n in a)e.setState({date:n,totalAttendance:a.length-1})}),n.on("value",function(t){var a=t.val();e.setState({totalStudents:a.totalStudents})})}},{key:"render",value:function(){return l.a.createElement(g.a,null,l.a.createElement("br",null),l.a.createElement(me.a,null,l.a.createElement(de.a,{lg:8},l.a.createElement("h1",null,l.a.createElement(ne,{totalAttendance:this.state.totalAttendance,totalStudents:this.state.totalStudents}))),l.a.createElement(de.a,{lg:4},l.a.createElement("h2",null,l.a.createElement(ue,{totalAttendance:this.state.totalAttendance,totalStudents:this.state.totalStudents})))),l.a.createElement(me.a,null,l.a.createElement(de.a,{lg:8},l.a.createElement(Ee,null))))}}]),t}(l.a.Component),ve=a(179),ge=a(178),Oe=a(103),je=a.n(Oe);function ye(){return l.a.createElement("h5",null," ",H()().format("lll"))}function ke(){var e=Object(E.a)(["\n  .navbar {\n    background-color: #ffe521;\n  }\n\n  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{\n    margin-top: .5rem;\n    margin-right:  6rem;\n  }\n"]);return ke=function(){return e},e}var xe=j.a.div(ke()),Ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).logOut=e.logOut.bind(Object(b.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"logOut",value:function(e){e.preventDefault(),R.auth().signOut().then(function(){console.log("sesion cerrada")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement(xe,null,l.a.createElement(ve.a,{expand:"lg"},l.a.createElement(ve.a.Brand,null,l.a.createElement("img",{src:je.a,width:"200",height:"25",alt:"Logo Laboratoria"})),l.a.createElement(ve.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(ve.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(ge.a,{className:"ml-auto"},l.a.createElement(ge.a.Item,null,l.a.createElement(ye,null)),l.a.createElement(ge.a.Item,null,l.a.createElement(ge.a.Link,null,l.a.createElement(d.b,{to:"/"},"Scanner"))),l.a.createElement(ge.a.Item,null,l.a.createElement(ge.a.Link,null,l.a.createElement(d.b,{to:"/summary"},"Resumen"))),l.a.createElement(ge.a.Item,null,l.a.createElement(ge.a.Link,null,l.a.createElement(d.b,{to:"/",onClick:this.logOut},"Cerrar sesi\xf3n")))))))}}]),t}(l.a.Component),Se=a(107),Be=a.n(Se),Ce=a(108),we=a.n(Ce);function Ie(){var e=Object(E.a)(["\n    img {\n        height: 20rem;\n        z-index: -10;\n        position: fixed; \n        bottom: 0px; \n        right: 0px;\n    }\n\n    @media only screen and (max-width:425px) {\n        img {\n            height: 10rem;\n        }\n    }\n"]);return Ie=function(){return e},e}var Ae=j.a.div(Ie()),De=H()().format("ll"),We=R.database().ref("attendance").child(De).child("students"),Le=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={studentsFilteredInDataBase:[],attendanceWithName:[],absenceWithName:[],indexOfAttendance:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users").then(function(e){return e.json()}).then(function(t){var a=t.filter(function(e){return"student"===e.role});e.setState({studentsFilteredInDataBase:a}),We.on("value",function(t){e.state.studentsFilteredInDataBase.forEach(function(a){-1!=t.val().indexOf(a.id)?e.setState({attendanceWithName:[].concat(Object(f.a)(e.state.attendanceWithName),[a.name])}):e.setState({absenceWithName:[].concat(Object(f.a)(e.state.absenceWithName),[a.name])})})})})}},{key:"render",value:function(){var e=this.state.absenceWithName.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e))});return l.a.createElement(Ae,null,l.a.createElement("div",null,l.a.createElement(O,null,l.a.createElement("br",null),l.a.createElement("h2",null,"Ausencias / ",De)," ",l.a.createElement("br",null),l.a.createElement(we.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nombre"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,e)))),l.a.createElement("div",{className:"yellowBrackets"},l.a.createElement("img",{className:"brackets",src:Be.a,alt:"Yellow brackets"}))))}}]),t}(l.a.Component),Te=function(){return l.a.createElement("h1",null,"No Match")},Fe=(a(170),a(109)),ze=a(176);function Pe(){var e=Object(E.a)(["\n  .loginScreen {\n    display: flex;\n    flex-direction: column;\n    height: 80vh;\n    justify-content: space-between;\n  }\n\n  .greeting {\n    align-self: center;\n  }\n\n  .loginForm {\n    align-self: center;\n  }\n\n  .loginButton {\n    height: 100px;\n    text-align: center;\n  }\n"]);return Pe=function(){return e},e}var Me=j.a.div(Pe()),Re={height:"100px",float:"right"},Ve=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState(Object(Fe.a)({},t.target.name,t.target.value))},e.login=e.login.bind(Object(b.a)(e)),e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.state={email:"",password:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"login",value:function(e){e.preventDefault(),R.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement(O,null,l.a.createElement(Me,null,l.a.createElement("div",{className:"loginScreen"},l.a.createElement("div",{className:"greeting"},l.a.createElement("br",null),l.a.createElement("h1",null,"\xa1Bienvenida, Sam!")),l.a.createElement("div",{className:"loginForm"},l.a.createElement(ze.a,null,l.a.createElement(ze.a.Group,{controlId:"formBasicEmail"},l.a.createElement(ze.a.Label,null,"Correo"),l.a.createElement(ze.a.Control,{type:"email",name:"email",onChange:this.handleChange,placeholder:"Ingresa tu correo"}),l.a.createElement(ze.a.Text,{className:"text-muted"},"No compartiremos tu correo con nadie m\xe1s.")),l.a.createElement(ze.a.Group,{controlId:"formBasicPassword"},l.a.createElement(ze.a.Label,null,"Contrase\xf1a"),l.a.createElement(ze.a.Control,{type:"password",name:"password",onChange:this.handleChange,placeholder:"Ingresa tu contrase\xf1a"})))),l.a.createElement("div",{className:"loginButton"},l.a.createElement(ce.a,{variant:"outline-light",type:"submit",onClick:this.login},l.a.createElement("img",{className:"brackets",src:k.a,style:Re,alt:"LabBrackets"})),l.a.createElement("p",null,"Ingresar")))))}}]),t}(l.a.Component);function qe(){var e=Object(E.a)(["\n    img {\n        height: 20rem;\n        z-index: -10;\n        position: fixed; \n        bottom: 0px; \n        right: 0px;\n    }\n"]);return qe=function(){return e},e}var Je=j.a.div(qe()),Ge=H()().format("ll"),He=R.database().ref("attendance").child(Ge).child("students"),Ke=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={studentsFilteredInDataBase:[],attendanceWithName:[],absenceWithName:[],indexOfAttendance:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users").then(function(e){return e.json()}).then(function(t){var a=t.filter(function(e){return"student"===e.role});e.setState({studentsFilteredInDataBase:a}),He.on("value",function(t){e.state.studentsFilteredInDataBase.forEach(function(a){-1!=t.val().indexOf(a.id)?e.setState({attendanceWithName:[].concat(Object(f.a)(e.state.attendanceWithName),[a.name])}):e.setState({absenceWithName:[].concat(Object(f.a)(e.state.absenceWithName),[a.name])})})})})}},{key:"render",value:function(){var e=this.state.attendanceWithName.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e))}),t=this.state.absenceWithName.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e))});return l.a.createElement(Je,null,l.a.createElement("div",null,l.a.createElement(O,null," ",l.a.createElement("br",null),l.a.createElement(me.a,null,l.a.createElement(de.a,{lg:8},l.a.createElement("h2",null,"Asistencias"),e),l.a.createElement(de.a,{lg:4},l.a.createElement("h2",null,"Ausencias"),t)))))}}]),t}(l.a.Component),Qe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={user:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"authListener",value:function(){var e=this;R.auth().onAuthStateChanged(function(t){t?e.setState({user:t}):e.setState({user:null})})}},{key:"doesDateExist",value:function(){var e=H()().format("ll");R.database().ref("attendance").child(e).on("value",function(t){t.exists()||R.database().ref("attendance").child(e).child("students").set("0")})}},{key:"componentDidMount",value:function(){this.authListener(),this.doesDateExist()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(Ne,null),l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",render:function(){return e.state.user?l.a.createElement(Z,null):l.a.createElement(Ve,null)}}),l.a.createElement(h.a,{exact:!0,path:"/summary",component:pe}),l.a.createElement(h.a,{path:"/success",component:P}),l.a.createElement(h.a,{path:"/absence-detailed",component:Le}),l.a.createElement(h.a,{path:"/full-list",component:Ke}),l.a.createElement(h.a,{component:Te}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,a){e.exports=a.p+"static/media/PinkBracketsRight.ab37d7c1.png"},57:function(e,t,a){e.exports=a.p+"static/media/AquabrkR2.9691b367.png"},89:function(e,t,a){e.exports=a.p+"static/media/PinkBracketsLeft.44a8ef37.png"},90:function(e,t,a){e.exports=a.p+"static/media/information.7273e405.svg"},91:function(e,t,a){e.exports=a.p+"static/media/check-animation-v2.6769f08a.gif"},92:function(e,t,a){e.exports=a.p+"static/media/fail-animation.45aa2f4d.gif"}},[[111,1,2]]]);
//# sourceMappingURL=main.e044680c.chunk.js.map