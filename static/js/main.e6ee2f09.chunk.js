(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{316:function(e,t,a){},317:function(e,t,a){},467:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),s=a.n(r),c=(a(316),a(41)),l=(a(317),a(123)),o=a(32),d=a(18),j=a(60),h=a(143),b=a(521),p=a(533),x=a(543),m=a(157),u=a.n(m),O=a(536),g=a(540),w=a(534),D=a(535),v=a(469),y=a(538),f=a(537),C=a(539),H=a(267),S=a(44),N=a(509),B=a(510),P=a(514),k=a(153),M=a(154),F=a(54),A=a(128),T=a(260),I=a(158),R=a(2);function L(e){return Object(R.jsx)(v.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}var E=Object(I.a)("%b %Y");function W(e){var t=e.title,a=e.data,n=e.yAxisLabel,r=void 0===n?"Rate (per 100,000)":n,s=Object(S.a)();return Object(R.jsxs)(i.a.Fragment,{children:[Object(R.jsx)(L,{children:t}),Object(R.jsx)(N.a,{children:Object(R.jsxs)(B.a,{data:a,margin:{top:16,right:16,bottom:0,left:24},children:[Object(R.jsx)(P.a,{strokeDasharray:"3 3"}),Object(R.jsx)(k.a,{dataKey:"date",stroke:s.palette.text.secondary,tickFormatter:E}),Object(R.jsx)(M.a,{stroke:s.palette.text.secondary,children:Object(R.jsx)(F.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:s.palette.text.primary},children:r})}),Object(R.jsx)(A.a,{}),Object(R.jsx)(T.a,{type:"monotone",dataKey:"rate",stroke:s.palette.primary.main,dot:!1})]})})]})}var G=a(515),z=a(264);function K(e){var t=e.title,a=e.data,n=Object(S.a)();return Object(R.jsxs)(i.a.Fragment,{children:[Object(R.jsx)(L,{children:t}),Object(R.jsx)(N.a,{width:"100%",height:"100%",children:Object(R.jsxs)(G.a,{data:a,margin:{top:16,right:16,bottom:24,left:0},children:[Object(R.jsx)(P.a,{strokeDasharray:"3 3"}),Object(R.jsx)(k.a,{dataKey:"hospital",stroke:n.palette.text.secondary,tick:{width:75},interval:0}),Object(R.jsx)(M.a,{stroke:n.palette.text.secondary}),Object(R.jsx)(A.a,{}),Object(R.jsx)(z.a,{dataKey:"beds",fill:n.palette.primary.main})]})})]})}var U=a(516),V=a(520),q=a(519),J=a(517),X=a(518);function Y(e,t,a,n){return{id:e,provider:t,availabilityNew:a,availabilityFU:n}}var Q=[Y(0,"Eric Arzubi, MD",new Date("2021-08-23"),new Date("2021-08-23")),Y(1,"Reza Hosseini Ghomi, MD",new Date("2021-08-20"),new Date("2021-08-16")),Y(2,"Robert Sise, MT",new Date("2021-08-13"),new Date("2021-08-13")),Y(3,"Melinda Truesdell, NP",new Date("2021-09-06"),new Date("2021-09-05")),Y(4,"Mark Ackerman, NP",new Date("2021-08-12"),new Date("2021-08-06")),Y(5,"Meghan Lehman, NP",new Date("2021-08-06"),new Date("2021-08-06")),Y(6,"Ankur Patel, MD",new Date("2021-08-15"),new Date("2021-08-12"))];function Z(e){return Object(I.a)("%b %e")(e)}function $(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(L,{children:"Provider Availability"}),Object(R.jsxs)(U.a,{size:"small",children:[Object(R.jsx)(J.a,{children:Object(R.jsxs)(X.a,{children:[Object(R.jsx)(q.a,{children:"Provider"}),Object(R.jsx)(q.a,{children:"Next Availability - NEW"}),Object(R.jsx)(q.a,{children:"Next Availability - F/U"})]})}),Object(R.jsx)(V.a,{children:Q.map((function(e){return Object(R.jsxs)(X.a,{children:[Object(R.jsx)(q.a,{children:e.provider}),Object(R.jsx)(q.a,{children:Z(e.availabilityNew)}),Object(R.jsx)(q.a,{children:Z(e.availabilityFU)})]},e.id)}))})]})]})}var _=a(522),ee=a(545),te=a(523),ae=a(524),ne=Object(b.a)((function(e){return{root:{width:"100%",height:"100vh"}}})),ie=[47.035744045448006,-109.96669218680697],re=function(e){var t=e.title,a=e.data,n=ne();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(L,{children:t}),Object(R.jsxs)(_.a,{center:ie,zoom:5.5,className:n.root,children:[Object(R.jsx)(ee.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.map((function(e){return Object(R.jsx)(te.a,{position:e.coordinates,riseOnHover:!0,children:Object(R.jsxs)(ae.a,{children:[Object(R.jsx)(v.a,{variant:"h6",align:"center",color:"primary",children:e.name}),Object(R.jsx)(v.a,{variant:"subtitle1",align:"center",children:e.city}),Object(R.jsxs)(v.a,{variant:"subtitle2",align:"center",gutterBottom:!0,children:["phone #: ",e.number]})]})},e.name)}))]})]})},se=a(525),ce=a(471),le=Object(b.a)({inactiveButton:{color:"primary",opacity:"0.8"},activeButton:{color:"primary"}});function oe(e){var t=e.active1,a=e.active2,n=e.handleClick1,i=e.handleClick2,r=le();return Object(R.jsxs)(se.a,{variant:"contained",color:"primary",children:[Object(R.jsx)(ce.a,{className:t?r.activeButton:r.inactiveButton,onClick:n,component:l.b,to:"/frontierdashboard/frontier",children:"Frontier"}),Object(R.jsx)(ce.a,{className:a?r.activeButton:r.inactiveButton,onClick:i,component:l.b,to:"/frontierdashboard/",children:"Statewide"})]})}var de=a(526),je=a(546),he=a(541),be=a(548),pe=Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:60}}}));function xe(e){var t=e.options,a=e.section,n=e.handleSectionChange,i=pe();return Object(R.jsxs)(de.a,{className:i.formControl,variant:"outlined",fullWidth:!0,children:[Object(R.jsx)(je.a,{id:"section-label",children:"Section"}),Object(R.jsx)(he.a,{labelId:"section-label",label:"Section",id:"section",value:a,onChange:n,children:t.map((function(e){return Object(R.jsx)(be.a,{value:e.id,children:e.label},e.id)}))})]})}var me=a(544),ue=Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:60}}}));function Oe(e){var t=e.dates,a=e.startDate,n=e.handleStartChange,i=e.endDate,r=e.handleEndChange,s=ue();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(de.a,{className:s.formControl,variant:"outlined",size:"small",fullWidth:!0,children:[Object(R.jsx)(je.a,{id:"start-label",children:"Start"}),Object(R.jsx)(he.a,{labelId:"start-label",label:"Start",id:"start",value:a,onChange:n,displayEmpty:!0,renderValue:function(e){return Object(me.a)("%b %y")(e)},children:t.map((function(e){return Object(R.jsx)(be.a,{value:e,children:Object(me.a)("%b %y")(e)},e)}))})]}),Object(R.jsx)(v.a,{variant:"body2",color:"textPrimary",children:"to"}),Object(R.jsxs)(de.a,{className:s.formControl,variant:"outlined",size:"small",fullWidth:!0,children:[Object(R.jsx)(je.a,{id:"end-label",children:"End"}),Object(R.jsx)(he.a,{labelId:"end-label",label:"End",id:"end",value:i,onChange:r,displayEmpty:!0,renderValue:function(e){return Object(me.a)("%b %y")(e)},children:t.map((function(e){return Object(R.jsx)(be.a,{value:e,children:Object(me.a)("%b %y")(e)},e)}))})]})]})}var ge=a(529),we=a(530),De=a(531),ve=a(549),ye=a(532),fe=Object(b.a)((function(e){return{dialogContent:{display:"flex",flexFlow:"row wrap"},textField:{margin:e.spacing(1),align:"center",minWidth:"45%"}}}));function Ce(e){var t=e.open,a=e.handleClickOpen,n=e.handleClose,i=e.hospital,r=e.handleHospitalChange,s=e.hospitals,c=fe();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(ce.a,{id:"refer-patient",variant:"contained",color:"primary",onClick:a,children:"Refer Patient"}),Object(R.jsxs)(ge.a,{open:t,onClose:n,fullWidth:!0,maxWidth:"sm",children:[Object(R.jsx)(we.a,{id:"refer-patient-title",children:"Refer a Patient"}),Object(R.jsxs)(De.a,{className:c.dialogContent,children:[Object(R.jsx)(ve.a,{required:!0,id:"patient-name",label:"Patient Name",className:c.textField}),Object(R.jsx)(ve.a,{select:!0,required:!0,id:"hospital",label:"Hospital",value:i,onChange:r,helperText:"Please select a hospital",variant:"outlined",className:c.textField,children:s.map((function(e){return Object(R.jsx)(be.a,{value:e,children:e},e)}))}),Object(R.jsx)(ve.a,{multiline:!0,id:"description",label:"Description",rows:6,fullWidth:!0,variant:"outlined",className:c.textField})]}),Object(R.jsxs)(ye.a,{children:[Object(R.jsx)(ce.a,{onClick:n,color:"primary",children:"Cancel"}),Object(R.jsx)(ce.a,{onClick:n,color:"primary",children:"Submit Referral"})]})]})]})}var He=[{hospital:"Providence St. Patrick Hospital",beds:31},{hospital:"Logan Health",beds:26},{hospital:"Benefis Community Care",beds:32},{hospital:"Billings Clinic Hospital",beds:45},{hospital:"Montana State Hospital",beds:42},{hospital:"St. Peter's Health",beds:24},{hospital:"Glendive Medical Center",beds:50}],Se=[{hospital:"Shodair Children's Hospital",beds:9},{hospital:"Billings Clinic Hospital",beds:30},{hospital:"Providence Hospital",beds:29}],Ne=[{hospital:"Billings Clinic Hospital",beds:35},{hospital:"Glendive Medical Center",beds:6},{hospital:"Holy Rosary Hospital",beds:22},{hospital:"Sidney Health Center",beds:9},{hospital:"Shodair Children's Hospital",beds:22}],Be=[{hospital:"Billings Clinic Hospital",beds:8},{hospital:"Shodair Children's Hospital",beds:12}],Pe=[{date:new Date("2020-09"),rate:13.66},{date:new Date("2020-10"),rate:21.11},{date:new Date("2020-11"),rate:18.54},{date:new Date("2020-12"),rate:19.06},{date:new Date("2021-01"),rate:12.1},{date:new Date("2021-02"),rate:16.36},{date:new Date("2021-03"),rate:14.68},{date:new Date("2021-04"),rate:16.08},{date:new Date("2021-05"),rate:11.95},{date:new Date("2021-06"),rate:11},{date:new Date("2021-07"),rate:13.54},{date:new Date("2021-08"),rate:12.92}],ke=[{date:new Date("2020-09"),rate:17.3},{date:new Date("2020-10"),rate:24.13},{date:new Date("2020-11"),rate:20.13},{date:new Date("2020-12"),rate:18.4},{date:new Date("2021-01"),rate:17.8},{date:new Date("2021-02"),rate:20.93},{date:new Date("2021-03"),rate:19.63},{date:new Date("2021-04"),rate:21.37},{date:new Date("2021-05"),rate:15.73},{date:new Date("2021-06"),rate:20.42},{date:new Date("2021-07"),rate:21.9},{date:new Date("2021-08"),rate:19.88}],Me=[{date:new Date("2020-09"),rate:26.99},{date:new Date("2020-10"),rate:37.56},{date:new Date("2020-11"),rate:30.96},{date:new Date("2020-12"),rate:30.9},{date:new Date("2021-01"),rate:26.37},{date:new Date("2021-02"),rate:26.51},{date:new Date("2021-03"),rate:32.18},{date:new Date("2021-04"),rate:29.3},{date:new Date("2021-05"),rate:30.69},{date:new Date("2021-06"),rate:33.21},{date:new Date("2021-07"),rate:33.13},{date:new Date("2021-08"),rate:31.23}],Fe=[{date:new Date("2020-09"),rate:17.19},{date:new Date("2020-10"),rate:22.63},{date:new Date("2020-11"),rate:15.03},{date:new Date("2020-12"),rate:23.06},{date:new Date("2021-01"),rate:26.96},{date:new Date("2021-02"),rate:11.4},{date:new Date("2021-03"),rate:15.46},{date:new Date("2021-04"),rate:22.94},{date:new Date("2021-05"),rate:19.84},{date:new Date("2021-06"),rate:20.27},{date:new Date("2021-07"),rate:18.57},{date:new Date("2021-08"),rate:19.72}],Ae=[{date:new Date("2020-09"),rate:461},{date:new Date("2020-10"),rate:52},{date:new Date("2020-11"),rate:498},{date:new Date("2020-12"),rate:321},{date:new Date("2021-01"),rate:270},{date:new Date("2021-02"),rate:452},{date:new Date("2021-03"),rate:197},{date:new Date("2021-04"),rate:275},{date:new Date("2021-05"),rate:61},{date:new Date("2021-06"),rate:285},{date:new Date("2021-07"),rate:60},{date:new Date("2021-08"),rate:70}],Te=[{date:new Date("2020-09"),rate:50.92},{date:new Date("2020-10"),rate:52.44},{date:new Date("2020-11"),rate:53.67},{date:new Date("2020-12"),rate:52.27},{date:new Date("2021-01"),rate:37.29},{date:new Date("2021-02"),rate:44.05},{date:new Date("2021-03"),rate:54.03},{date:new Date("2021-04"),rate:57.37},{date:new Date("2021-05"),rate:49.75},{date:new Date("2021-06"),rate:42.52},{date:new Date("2021-07"),rate:56.16},{date:new Date("2021-08"),rate:53.41}],Ie=[{date:new Date("2020-09"),rate:9},{date:new Date("2020-10"),rate:9},{date:new Date("2020-11"),rate:4},{date:new Date("2020-12"),rate:3},{date:new Date("2021-01"),rate:3},{date:new Date("2021-02"),rate:7},{date:new Date("2021-03"),rate:4},{date:new Date("2021-04"),rate:7},{date:new Date("2021-05"),rate:9},{date:new Date("2021-06"),rate:6},{date:new Date("2021-07"),rate:10},{date:new Date("2021-08"),rate:7}],Re=[{name:"Glendive Medical Center",city:"Glendive",number:"738-555-3160",coordinates:[47.11792650055652,-104.70395611627464]},{name:"Frances Mahon Deaconess Hospital",city:"Glasgow",number:"359-555-7621",coordinates:[48.18981204076515,-106.63537154631985]},{name:"Barrett Hospital & Healthcare",city:"Dillon",number:"155-814-5327",coordinates:[45.20219723945498,-112.64728273273796]},{name:"Holy Rosary Healthcare",city:"Miles City",number:"868-784-6670",coordinates:[46.395851529810614,-105.8282375780751]},{name:"Roosevelt Medical Center",city:"Culbertson",number:"250-281-1727",coordinates:[48.15189390927604,-104.5147349003122]},{name:"Livingston HealthCare",city:"Livingston",number:"553-345-7334",coordinates:[45.67583250052617,-110.52708275521294]},{name:"St. Luke Community Healthcare",city:"Ronan",number:"932-393-3863",coordinates:[47.52994452935552,-114.10704674671666]},{name:"Big Horn County Memorial Hospital",city:"Hardin",number:"995-707-3046",coordinates:[45.72950822276518,-107.61654354777687]}],Le=[{name:"Providence Hospital",city:"Missoula",number:"406-543-7271",coordinates:[46.87577554264733,-113.9994216911055]},{name:"Logan Health",city:"Kalispell",number:"406-752-5111",coordinates:[48.21513891885364,-114.32372034630467]},{name:"Benefis Community Care",city:"Kalispell",number:"406-752-0580",coordinates:[48.22682230319765,-114.30257078705924]},{name:"Billings Clinic Hospital",city:"Billings",number:"406-238-2500",coordinates:[45.78986201223207,-108.51278637102406]},{name:"Montana State Hospital",city:"Warm Springs",number:"406-693-7000",coordinates:[46.181160158654244,-112.79057523957525]},{name:"St. Peter's Health",city:"Helena",number:"406-442-2480",coordinates:[46.58370091445607,-111.99672560865174]},{name:"Glendive Medical Center",city:"Glendive",number:"406-345-3306",coordinates:[47.11804331455797,-104.70382737024401]}],Ee=[{id:"service",label:"Service Accessibility"},{id:"epidemiology",label:"Epidemiology"}],We=[new Date("2020-09"),new Date("2020-10"),new Date("2020-11"),new Date("2020-12"),new Date("2021-01"),new Date("2021-02"),new Date("2021-03"),new Date("2021-04"),new Date("2021-05"),new Date("2021-06"),new Date("2021-07"),new Date("2021-08")],Ge=["Barrett Hospital & Healthcare","Benefis Community Care","Big Horn County Community Hospital","Billings Clinic Hospital","Frances Mahon Deaconess Hospital","Glendive Medical Center","Holy Rosary Healthcare","Livingston HealthCare","Logan Health","Montana State Hospital","Providence Hospital","Roosevelt Medical Center","St. Luke Community Healthcare","St. Peter's Health"],ze=Object(b.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:360},sectionHeader:{width:"100%",paddingTop:e.spacing(4),paddingBottom:e.spacing(2)},navTool:{padding:e.spacing(1),paddingTop:e.spacing(2),display:"flex",justifyContent:"center"}}}));function Ke(){var e=ze(),t=Object(h.a)(e.paper,e.fixedHeight),a=Object(n.useState)(!1),i=Object(d.a)(a,2),r=i[0],s=i[1],c=Object(n.useState)(!0),l=Object(d.a)(c,2),o=l[0],j=l[1],b=Object(n.useState)(new Date("2020-09")),m=Object(d.a)(b,2),S=m[0],N=m[1],B=Object(n.useState)(new Date("2021-08")),P=Object(d.a)(B,2),k=P[0],M=P[1],F=Object(n.useState)(""),A=Object(d.a)(F,2),T=A[0],I=A[1],L=Object(n.useState)(!1),E=Object(d.a)(L,2),G=E[0],z=E[1],U=Object(n.useState)(null),V=Object(d.a)(U,2),q=V[0],J=V[1];return Object(R.jsxs)("div",{className:e.root,children:[Object(R.jsx)(p.a,{}),Object(R.jsx)(w.a,{position:"absolute",className:e.appBar,children:Object(R.jsxs)(D.a,{className:e.toolbar,children:[Object(R.jsx)("div",{className:e.toolbarIcon,children:Object(R.jsx)(O.a,{children:Object(R.jsx)(u.a,{})})}),Object(R.jsx)(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Frontier Mental Health Data Dashboard"})]})}),Object(R.jsxs)(x.a,{variant:"permanent",classes:{paper:e.drawerPaper},className:e.drawer,children:[Object(R.jsx)(D.a,{}),Object(R.jsx)(g.a,{className:e.navTool,children:Object(R.jsx)(oe,{active1:r,active2:o,handleClick1:function(e){s(!0),j(!1)},handleClick2:function(e){j(!0),s(!1)}})}),Object(R.jsx)(g.a,{className:e.navTool,children:Object(R.jsx)(xe,{options:Ee,section:T,handleSectionChange:function(e){I(e.target.value),document.getElementById(e.target.value).scrollIntoView()}})}),Object(R.jsx)(g.a,{className:e.navTool,alignItems:"center",children:Object(R.jsx)(Oe,{dates:We,startDate:S,handleStartChange:function(e){N(e.target.value)},endDate:k,handleEndChange:function(e){M(e.target.value)}})}),Object(R.jsx)(g.a,{className:e.navTool,children:Object(R.jsx)(Ce,{open:G,handleClickOpen:function(){z(!0)},handleClose:function(){z(!1)},hospital:q,handleHospitalChange:function(e){J(e.target.value)},hospitals:Ge})})]}),Object(R.jsxs)("main",{className:e.content,children:[Object(R.jsx)("div",{className:e.appBarSpacer}),Object(R.jsxs)(f.a,{maxWidth:"lg",className:e.container,children:[Object(R.jsxs)(g.a,{id:"service",className:e.sectionHeader,children:[Object(R.jsx)(v.a,{color:"textSecondary",variant:"h4",children:"Service Accessibility"}),Object(R.jsx)(y.a,{})]}),Object(R.jsxs)(C.a,{container:!0,spacing:2,children:[Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(re,{title:"Hospitals with Emergency Telepsychiatry Access",data:Re})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(re,{title:"Mental Health Hospitals",data:Le})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(K,{title:"Available Adult Inpatient Psychiatric Beds",data:He})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(K,{title:"Available Child Inpatient Psychiatric Beds",data:Se})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(K,{title:"Available Adult EmPATH Seats",data:Ne})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(K,{title:"Available Child EmPATH Seats",data:Be})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)($,{})})})]}),Object(R.jsxs)(g.a,{id:"epidemiology",className:e.sectionHeader,children:[Object(R.jsx)(v.a,{color:"textSecondary",variant:"h4",children:"Epidemiology"}),Object(R.jsx)(y.a,{})]}),Object(R.jsxs)(C.a,{container:!0,spacing:2,children:[Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(W,{title:"Hospital Readmission Rate",data:Fe})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(W,{title:"Average Time since Last Hospitalization",data:Ae,yAxisLabel:"Days"})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(W,{title:"Average Hospital Stay Duration",data:Ie,yAxisLabel:"Days"})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(W,{title:"Percent of Patients Discharged with Followup Plans within 4 Weeks",data:Te,yAxisLabel:"Percent"})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(W,{title:"Suicide Rate",data:Pe})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(W,{title:"SMI Diagnosis Rate",data:ke})})}),Object(R.jsx)(C.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{className:t,children:Object(R.jsx)(W,{title:"SUD Diagnosis Rate",data:Me})})})]})]})]})]})}var Ue=[{id:"service",label:"Service Accessibility"},{id:"epidemiology",label:"Epidemiology"}],Ve=[new Date("2020-09"),new Date("2020-10"),new Date("2020-11"),new Date("2020-12"),new Date("2021-01"),new Date("2021-02"),new Date("2021-03"),new Date("2021-04"),new Date("2021-05"),new Date("2021-06"),new Date("2021-07"),new Date("2021-08")],qe=["Barrett Hospital & Healthcare","Benefis Community Care","Big Horn County Community Hospital","Billings Clinic Hospital","Frances Mahon Deaconess Hospital","Glendive Medical Center","Holy Rosary Healthcare","Livingston HealthCare","Logan Health","Montana State Hospital","Providence Hospital","Roosevelt Medical Center","St. Luke Community Healthcare","St. Peter's Health"],Je=Object(b.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:360},sectionHeader:{width:"100%",paddingTop:e.spacing(4),paddingBottom:e.spacing(2)},navTool:{padding:e.spacing(1),paddingTop:e.spacing(2),display:"flex",justifyContent:"center"}}}));function Xe(){var e=Je(),t=(Object(h.a)(e.paper,e.fixedHeight),Object(n.useState)(!0)),a=Object(d.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(!1),c=Object(d.a)(s,2),l=c[0],o=c[1],j=Object(n.useState)(new Date("2020-09")),b=Object(d.a)(j,2),m=b[0],y=b[1],C=Object(n.useState)(new Date("2021-08")),H=Object(d.a)(C,2),S=H[0],N=H[1],B=Object(n.useState)(""),P=Object(d.a)(B,2),k=P[0],M=P[1],F=Object(n.useState)(!1),A=Object(d.a)(F,2),T=A[0],I=A[1],L=Object(n.useState)(null),E=Object(d.a)(L,2),W=E[0],G=E[1];return Object(R.jsxs)("div",{className:e.root,children:[Object(R.jsx)(p.a,{}),Object(R.jsx)(w.a,{position:"absolute",className:e.appBar,children:Object(R.jsxs)(D.a,{className:e.toolbar,children:[Object(R.jsx)("div",{className:e.toolbarIcon,children:Object(R.jsx)(O.a,{children:Object(R.jsx)(u.a,{})})}),Object(R.jsx)(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Frontier Mental Health Data Dashboard"})]})}),Object(R.jsxs)(x.a,{variant:"permanent",classes:{paper:e.drawerPaper},className:e.drawer,children:[Object(R.jsx)(D.a,{}),Object(R.jsx)(g.a,{className:e.navTool,children:Object(R.jsx)(oe,{active1:i,active2:l,handleClick1:function(e){r(!0),o(!1)},handleClick2:function(e){o(!0),r(!1)}})}),Object(R.jsx)(g.a,{className:e.navTool,children:Object(R.jsx)(xe,{options:Ue,section:k,handleSectionChange:function(e){M(e.target.value),document.getElementById(e.target.value).scrollIntoView()}})}),Object(R.jsx)(g.a,{className:e.navTool,alignItems:"center",children:Object(R.jsx)(Oe,{dates:Ve,startDate:m,handleStartChange:function(e){y(e.target.value)},endDate:S,handleEndChange:function(e){N(e.target.value)}})}),Object(R.jsx)(g.a,{className:e.navTool,children:Object(R.jsx)(Ce,{open:T,handleClickOpen:function(){I(!0)},handleClose:function(){I(!1)},hospital:W,handleHospitalChange:function(e){G(e.target.value)},hospitals:qe})})]}),Object(R.jsxs)("main",{className:e.content,children:[Object(R.jsx)("div",{className:e.appBarSpacer}),Object(R.jsx)(f.a,{maxWidth:"lg",className:e.container})]})]})}var Ye=function(){var e;return Object(R.jsxs)(l.a,{children:[Object(R.jsx)(o.a,{path:"/frontierdashboard/",exact:!0,component:Ke}),Object(R.jsx)(o.a,(e={exact:!0,path:"/frontierdashboard/frontier"},Object(c.a)(e,"exact",!0),Object(c.a)(e,"component",Xe),e))]})},Qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,552)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(R.jsx)(Ye,{}),document.getElementById("root")),Qe()}},[[467,1,2]]]);
//# sourceMappingURL=main.e6ee2f09.chunk.js.map