(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{110:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(21),i=a.n(c),o=(a(110),a(16)),s=a(52),d=a(14),l=a(164),u=a(165),p=a(9),j=a(5),b=a(140),h=a(175),f=a(4),m=a.n(f),g=a(13),O="SEARCH_REQUEST",x="SEARCH_SUCCESS",y="SEARCH_FAIL",v="CITY_REQUEST",w="CITY_SUCCESS",C="CITY_FAIL",k="FORECAST_REQUEST",S="FORECAST_SUCCESS",F="FORECAST_FAIL",E="ADD_FAV_SUCCESS",R="ADD_FAV_FAIL",N="REMOVE_FAV_SUCCESS",I="FAV_CITY_REQUEST",T="FAV_CITY_SUCCESS",G="FAV_CITY_FAIL",D="GEO_REQUEST",A="GEO_SUCCESS",L="GEO_FAIL",_="Iuuu6CJgEa9JKGR8BObGrH8vQ1oVS933",H=a(28),B=a.n(H),M=function(e,t){return function(){var a=Object(g.a)(m.a.mark((function a(r,n){var c,i;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"http://dataservice.accuweather.com/currentconditions/v1/",a.prev=1,r({type:v}),_,a.next=6,B.a.get("".concat("http://dataservice.accuweather.com/currentconditions/v1/").concat(e,"?apikey=").concat("Iuuu6CJgEa9JKGR8BObGrH8vQ1oVS933"));case 6:c=a.sent,i=c.data,r({type:w,payload:i,keyword:t}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),r({type:C,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e,t){return a.apply(this,arguments)}}()},V=function(e,t){return function(){var a=Object(g.a)(m.a.mark((function a(r,n){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{r({type:"current_city",payload:e,keyword:t})}catch(n){r({type:C,payload:n.response&&n.response.data.message?n.response.data.message:n.message})}case 1:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},P=a(2),W=Object(l.a)((function(e){var t;return{root:(t={maxWidth:"320px",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",fontSize:"1.3rem"},Object(j.a)(t,e.breakpoints.down(500),{marginLeft:e.spacing(0),marginRight:e.spacing(0),height:"100%",fontSize:"1rem"}),Object(j.a)(t,e.breakpoints.down(350),{marginLeft:e.spacing(0),marginRight:e.spacing(0),justifyContent:"center",height:"100%"}),t),title:{color:"white"},text:{marginTop:"20px",color:"white"}}})),J=function(e){var t=Object(d.f)(),a=e.data,r=W(),n=Object(p.b)(),c=a.data[0].Temperature.Metric.Value;c=c.toFixed(0);return Object(P.jsx)(u.a,{className:r.root,children:Object(P.jsxs)("div",{onClick:function(){return e=a.id,r=a.keyword,n(V(e,r)),void t.push("/city");var e,r},children:[Object(P.jsxs)(h.a,{className:r.title,children:[" ",a.keyword," "]}),Object(P.jsxs)(h.a,{className:r.text,children:[" ",c," ",Object(P.jsx)("span",{children:" \u2103 "})]}),Object(P.jsxs)(h.a,{className:r.text,children:[" id: ",a.id," "]}),Object(P.jsxs)(h.a,{className:r.text,children:[" ",a.data[0].WeatherText," "]})]})})},z=a(168),U=a(177),Q=a(179),K=Object(l.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),Y=function(e){var t=e.variant,a=e.children,r=K(),c=n.a.useState(!0),i=Object(o.a)(c,2),s=i[0],d=i[1],l=function(e,t){"clickaway"!==t&&d(!1)};return Object(P.jsx)("div",{className:r.root,children:Object(P.jsx)(Q.a,{open:s,autoHideDuration:6e3,onClose:l,children:Object(P.jsxs)(U.a,{elevation:6,variant:"filled",onClose:l,severity:t,children:[a," "]})})})};Y.defaultProps={variant:"danger"};var q=Y,Z=a(167),$=Object(l.a)((function(e){return{root:{flexGrow:1,width:"100%",display:"flex"},container:Object(j.a)({display:"flex",justifyContent:"center",gridGap:e.spacing(10)},e.breakpoints.down(650),{gridGap:e.spacing(5)}),paper:Object(j.a)({backgroundColor:"#3f51b5",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,minHeight:"165px",whiteSpace:"nowrap",width:"180px"},e.breakpoints.down(470),{marginLeft:e.spacing(0),marginRight:e.spacing(0)})}})),X=function(e){var t=e.FavoriteData,a=e.loading,n=$(),c=Object(p.b)(),i=Object(p.c)((function(e){return e.GetFavCityReducer})),o=i.FavCityError,s=i.FavData,d=function(){return t.forEach((function(e){var t,a;c((t=e.id,a=e.keyword,function(){var e=Object(g.a)(m.a.mark((function e(r,n){var c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,r({type:I}),e.next=6,B.a.get("".concat("http://dataservice.accuweather.com/currentconditions/v1/").concat(t,"?apikey=").concat("Iuuu6CJgEa9JKGR8BObGrH8vQ1oVS933"));case 6:c=e.sent,i=c.data,r({type:T,payload:{data:i,keyword:a,id:t}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r({type:G,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()))}))};return Object(r.useEffect)((function(){d()}),[]),Object(P.jsx)(P.Fragment,{children:a?Object(P.jsx)(Z.a,{}):o?Object(P.jsx)("div",{children:Object(P.jsx)(q,{variant:"error",children:o})}):Object(P.jsx)("div",{className:n.root,children:Object(P.jsx)(u.a,{container:!0,className:n.container,spacing:2,children:s?s.map((function(e){return Object(P.jsx)(u.a,{item:!0,children:Object(P.jsx)(z.a,{in:!0,style:{transitionDelay:"1500ms"},children:Object(P.jsx)(b.a,{id:e.data[0].HasPrecipitation,className:n.paper,children:Object(P.jsx)(J,{data:e})})})},e.id)})):Object(P.jsx)(Z.a,{})})})})},ee=Object(l.a)((function(e){return{grid:{display:"flex",padding:"30px",justifyContent:"center",alignItems:"center",flexGrow:1,minHeight:"100vh"}}})),te=function(){var e=Object(p.c)((function(e){return e.FavouriteReducer})),t=e.favourites,a=e.loading,r=ee();return Object(P.jsx)(u.a,{container:!0,className:r.grid,spacing:3,children:Object(P.jsx)(X,{FavoriteData:t,loading:a})})},ae=a(169),re=a(180),ne=a(141),ce=a(10),ie=a(178),oe=a(25),se=a(89),de=a.n(se),le=a(44),ue=a(90),pe=Object(l.a)((function(e){return{inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%","&:invalid":{border:"red solid 2px"}},e.breakpoints.up("sm"),{width:"30vh","&:focus":{width:"35vh"}}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",lineHeight:"1.6",justifyContent:"center"},search:Object(j.a)({position:"relative",border:"2px groove rgba(28,110,164,0.15)",borderRadius:e.shape.borderRadius,backgroundColor:Object(oe.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(oe.a)(e.palette.common.white,.25)},width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),autocomplete:{backgroundColor:"#fff",padding:"2px 0",minWidth:"160px",position:"absolute",top:"100%",left:"0",border:"1px solid #b6c1ce",borderRadius:"2px",margin:"0",boxSizing:"border-box",maxHeight:"75px",overflowY:"auto",zIndex:"0",display:"flex",flexDirection:"column"},autoItem:{boxSizing:"border-box",margin:.6},button:{outline:"none",backgroundColor:"none",color:"inherit",cursor:"pointer",border:"none","&:hover":{background:"#78858B"}},input:{"&:invalid":{border:"red solid 2px"}}}})),je=function(){var e=pe(),t=Object(r.useState)(),a=Object(o.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(!1),s=Object(o.a)(i,2),d=s[0],l=s[1],u=Object(p.b)(),j=Object(le.c)({mode:"all",rules:{required:!0}}),b=j.control,h=j.register,f=j.formState.errors,v=Object(p.c)((function(e){return e.SearchReducer})),w=v.SearchError,C=v.data,k=Object(r.useCallback)((function(){var e;n&&(u((e=n,function(){var t=Object(g.a)(m.a.mark((function t(a,r){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,a({type:O}),t.next=6,B.a.get("".concat("http://dataservice.accuweather.com/locations/v1/cities/autocomplete","?apikey=").concat("Iuuu6CJgEa9JKGR8BObGrH8vQ1oVS933","&q=").concat(e));case 6:n=t.sent,c=n.data,a({type:x,payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:y,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}())),l(!0))}),[n]);Object(r.useEffect)((function(){k()}),[n,k]);var S=function(e){c(e.target.value)};return Object(P.jsxs)("div",{className:e.search,children:[w?Object(P.jsx)(q,{variant:"error",children:w}):"",Object(P.jsx)("div",{className:e.searchIcon,children:Object(P.jsx)(de.a,{})}),Object(P.jsx)("form",{children:Object(P.jsx)(le.a,{name:"search",control:b,render:function(t){var a=t.search;return Object(P.jsx)(ie.a,Object(ce.a)(Object(ce.a)(Object(ce.a)({},a),{},{placeholder:"Search for a city...",value:n,name:"search",autoComplete:"off",inputProps:{className:e.input},classes:{root:e.inputRoot,input:e.inputInput}},h("search",{pattern:{value:/^[a-zA-Z]+$/,message:"Only English letters is allowed"}})),{},{onChange:S}))}})}),C&&C.length&&C.length>0&&!0===d?Object(P.jsx)("ul",{className:e.autocomplete,children:C.map((function(t,a){return Object(P.jsx)("p",{className:e.autoItem,children:Object(P.jsx)("button",{className:e.button,onClick:function(){return e=t.LocalizedName,c(e),u(V(C[0].Key,e)),c(null),void l(!1);var e},type:"submit",children:t.LocalizedName},a)},t.key)}))}):"",Object(P.jsx)(ue.a,{errors:f,name:"search"})]})},be=function(e){var t=e.cityName,a=e.current;return Object(P.jsxs)(h.a,{children:[Object(P.jsx)(ne.a,{style:{color:"#3f51b5",fontWeight:"700"},children:t}),Object(P.jsxs)(ne.a,{style:{color:"#3f51b5",fontWeight:"700"},children:[a," ",Object(P.jsx)("span",{children:" \u2103 "})]})]})},he=function(e,t,a){return function(){var t=Object(g.a)(m.a.mark((function t(r,n){var c,i,o,s,d;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c="http://dataservice.accuweather.com/forecasts/v1/daily/5day/",t.prev=1,r({type:k}),i=_,!0!==a){t.next=11;break}return t.next=7,B.a.get("".concat(c).concat(e,"?apikey=").concat(i,"&metric=true"));case 7:o=t.sent,s=o.data,t.next=16;break;case 11:if(!1!==a){t.next=16;break}return t.next=14,B.a.get("".concat(c).concat(e,"?apikey=").concat(i));case 14:d=t.sent,s=d.data;case 16:r({type:S,payload:s}),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),r({type:F,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 22:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e,a){return t.apply(this,arguments)}}()},fe=a(166),me=Object(l.a)((function(e){var t;return{root:(t={maxWidth:"270px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:"100%",fontSize:"1.2rem"},Object(j.a)(t,e.breakpoints.down(500),{marginLeft:e.spacing(0),marginRight:e.spacing(0),height:"100%"}),Object(j.a)(t,e.breakpoints.down(350),{marginLeft:e.spacing(0),marginRight:e.spacing(0),alignItems:"center",height:"100%"}),t),title:{color:"white"},text:{marginTop:"24px",color:"white"}}})),ge=function(e){var t,a=me(),r=new Date(e.data.Date).getDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r]||"",c=(e.data.Temperature.Minimum.Value+e.data.Temperature.Maximum.Value)/2;return c=c.toFixed(0),t="C"===e.data.Temperature.Minimum.Unit?Object(P.jsx)("span",{children:" \u2103 "}):Object(P.jsx)("span",{children:"\u2109"}),Object(P.jsx)(fe.a,{in:!0,children:Object(P.jsxs)(u.a,{className:a.root,children:[Object(P.jsx)(h.a,{className:a.title,children:n}),Object(P.jsxs)(h.a,{className:a.text,children:[0==e.data.Day.HasPrecipitation?Object(P.jsx)(h.a,{className:a.text,children:e.data.Day.IconPhrase}):""," ",c," ",t]})]})})},Oe="#3f51b5",xe="white",ye="#424242",ve=Object(l.a)((function(e){return{root:{flexGrow:1,width:"100%",display:"flex",padding:"12px"},container:Object(j.a)({display:"flex",justifyContent:"center",gridGap:e.spacing(8)},e.breakpoints.down(650),{gridGap:e.spacing(5)}),gridItem:{momo:{"&.momo":{color:"red"}},appbarpalette:Object(j.a)({"&.MuiPaper-elevation3":{backgroundColor:Oe}},"&.MuiPaper-elevation3",{backgroundColor:ye})},paper:Object(j.a)({backgroundColor:"#3f51b5",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,minHeight:"100px",whiteSpace:"nowrap",marginBottom:e.spacing(2),maxWidth:"140px",overflow:"hidden",minWidth:"140px",width:"100%"},e.breakpoints.down(470),{marginLeft:e.spacing(0),marginRight:e.spacing(0)})}})),we=function(e){var t=e.data,a=e.loading,r=e.themeState,n=ve();return Object(P.jsx)(P.Fragment,{children:a?Object(P.jsx)(Z.a,{}):Object(P.jsx)("div",{className:n.root,children:Object(P.jsx)(u.a,{container:!0,className:n.container,spacing:2,children:t.map((function(e){return Object(P.jsx)(u.a,{className:n.gridItem,item:!0,children:Object(P.jsx)(b.a,{id:e.Day.HasPrecipitation.toString(),color:r,classes:{colorPrimary:n.appbarpalette,colorSecondary:n.appbarpalette},children:Object(P.jsx)(ge,{data:e})},e.date)},e.date)}))})})})},Ce=a(176),ke=a(92),Se=a.n(ke),Fe=a(91),Ee=a.n(Fe),Re=Object(l.a)((function(e){return{FavIcon:{fontSize:"1rem",color:"red"},text:Object(j.a)({paddingRight:"10px"},e.breakpoints.down(460),{display:"none"})}})),Ne=function(e){var t=Re(),a=Object(p.b)();return Object(P.jsx)(u.a,{children:e.isThisCityIsFav?Object(P.jsxs)(Ce.a,{className:t.FavIcon,onClick:function(){var t,r;a((t=e.id,r=e.city,function(){var e=Object(g.a)(m.a.mark((function e(a,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a({type:N,payload:t,keyword:r}),localStorage.setItem("favourites",JSON.stringify(n().FavouriteReducer.favourites))}catch(c){a({type:"REMOVE_FAV_FAIL",payload:c.response&&c.response.data.message?c.response.data.message:c.message})}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))},style:{color:"#3f51b5",fontWeight:"700"},children:[Object(P.jsxs)("div",{className:t.text,children:[" ","Remove ",e.city," from Favorites"]}),Object(P.jsx)(Ee.a,{})]}):Object(P.jsxs)(Ce.a,{className:t.FavIcon,onClick:function(){var t,r;a((t=e.id,r=e.city,function(){var e=Object(g.a)(m.a.mark((function e(a,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a({type:E,payload:{id:t,keyword:r}}),localStorage.setItem("favourites",JSON.stringify(n().FavouriteReducer.favourites))}catch(c){a({type:R,payload:c.response&&c.response.data.message?c.response.data.message:c.message})}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))},"aria-label":"FavoriteIcon",children:[Object(P.jsxs)("div",{className:t.text,children:["Add ",e.city," to Favorites"]}),Object(P.jsx)(Se.a,{})]})})},Ie=function(){return Object(P.jsxs)("div",{id:"background-wrap",children:[Object(P.jsx)("div",{className:"x1",children:Object(P.jsx)("div",{className:"cloud"})}),Object(P.jsx)("div",{className:"x2",children:Object(P.jsx)("div",{className:"cloud"})}),Object(P.jsx)("div",{className:"x3",children:Object(P.jsx)("div",{className:"cloud"})})]})},Te=Object(l.a)((function(e){return{grid:{display:"flex",flexDirection:"column",height:"100%",minHeight:"100vh",flexGrow:1,justifyContent:"center",alignItems:"center"},box:Object(j.a)({width:"fit-content",justifyContent:"center",borderWidth:"3px",borderStyle:"groove",borderColor:"rgba(2,7,10,0.79)",overflow:"hidden"},e.breakpoints.down(700),{borderStyle:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),boxpalette:{"&.MuiBox-root-colorPrimary":{borderColor:"black"},"&.MuiBox-root-colorSecondary":{backgroundColor:"white"}},favBox:Object(j.a)({display:"flex",justifyContent:"flex-end",marginBottom:"2rem"},e.breakpoints.down(700),{marginLeft:0,marginBottom:"0"}),upper:Object(j.a)({display:"flex",padding:"3rem",justifyContent:"space-between"},e.breakpoints.down(700),{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),currentCity:Object(j.a)({marginLeft:"4rem"},e.breakpoints.down(700),{marginLeft:"0"}),clouds:Object(j.a)({},e.breakpoints.down(700),{display:"none"}),switch:Object(j.a)({marginLeft:"30px",width:"fit-content",padding:0},e.breakpoints.down(700),{marginLeft:"0"}),headline:{paddingBottom:"10px",textAlign:"center"}}})),Ge=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(),i=Object(o.a)(c,2),s=i[0],d=i[1],l=Object(p.c)((function(e){return e.ThemeReducer})).themeState,j=Te(),b=Object(p.b)(),f=Object(p.c)((function(e){return e.GetCityReducer})),O=f.getCityError,x=f.data,y=(f.keyword,Object(p.c)((function(e){return e.CurrentCityReducer}))),v=(y.loading,y.id),w=y.city,C=Object(p.c)((function(e){return e.ForeCastReducer})),k=C.ForecastError,S=C.foreData,F=C.loadingforeCast,E=Object(p.c)((function(e){return e.FavouriteReducer})).favourites,R=Object(p.c)((function(e){return e.GeoReducer})),N=R.geoData,I=(R.loadingGeo,Object(r.useState)(!0)),T=Object(o.a)(I,2),G=T[0],_=T[1],H=!1;return E.some((function(e){return e.id===v}))&&(H=!0),Object(r.useEffect)((function(){N&&b(V(N.Key,N.LocalizedName))}),[N]),Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),d(e.coords.longitude),s&&a&&b(function(e,t){return function(){var a=Object(g.a)(m.a.mark((function a(r,n){var c,i;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=1,r({type:D}),a.next=6,B.a.get("".concat("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search","?apikey=").concat("Iuuu6CJgEa9JKGR8BObGrH8vQ1oVS933","&q=").concat(e,",").concat(t));case 6:c=a.sent,i=c.data,r({type:A,payload:i}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),r({type:L,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(a,s))}))}),[a,s]),Object(r.useEffect)((function(){b(M(v,w)),b(he(v,0,G))}),[v,y]),Object(r.useEffect)((function(){b(he(v,0,G))}),[G]),Object(P.jsxs)("div",{children:[O?Object(P.jsx)(q,{variant:"error",children:O}):k?Object(P.jsx)(q,{variant:"error",children:k}):"",Object(P.jsxs)(u.a,{container:!0,className:j.grid,spacing:3,children:[Object(P.jsx)(u.a,{className:j.clouds,children:Object(P.jsx)(Ie,{})}),Object(P.jsx)(u.a,{item:!0,md:6,children:Object(P.jsx)(je,{})}),Object(P.jsxs)(h.a,{className:j.box,color:l,classes:{colorPrimary:j.box.boxpalette,colorSecondary:j.box.boxpalette},children:[Object(P.jsxs)(u.a,{container:!0,className:j.upper,children:[Object(P.jsx)(u.a,{className:j.currentCity,style:{},item:!0,md:4,children:x&&x.length>0?Object(P.jsx)(be,{cityName:w,current:x[0].Temperature.Metric.Value}):Object(P.jsx)(Z.a,{})}),Object(P.jsx)(u.a,{item:!0,md:6,className:j.favBox,children:Object(P.jsx)(Ne,{id:v,city:w,isThisCityIsFav:H})})]}),Object(P.jsx)(ae.a,{className:j.switch,style:{},control:Object(P.jsx)(re.a,{checked:G,onChange:function(){return _(!G)},name:"metric",color:"primary"}),label:G?Object(P.jsx)("span",{children:" \u2103 "}):Object(P.jsx)("span",{children:"\u2109"})}),Object(P.jsx)(u.a,{item:!0,md:12,style:{marginTop:"3rem",gridGap:"6",justifyContent:"center",display:"flex"},children:!F&&S?Object(P.jsxs)("div",{children:[Object(P.jsxs)(h.a,{className:j.headline,children:[" ",Object(P.jsxs)(ne.a,{style:{color:"#3f51b5",fontWeight:"700"},children:[S.Headline.Text," "]})]}),Object(P.jsx)(we,{data:S.DailyForecasts,loading:F,themeState:l})]}):k?Object(P.jsx)(q,{variant:"error",children:k}):Object(P.jsx)(Z.a,{})})]})]})]})},De=a(170),Ae=a(171),Le=a(93),_e=a.n(Le),He=Object(l.a)((function(e){return{root:{flexGrow:1,display:"flex",appbarpalette:{"&.MuiAppBar-colorPrimary":{backgroundColor:Oe},"&.MuiAppBar-colorSecondary":{backgroundColor:ye}}},title:Object(j.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),right:{display:"flex",justifyContent:"flex-end",flexGrow:1,lineHeight:1.6,alignItems:"center"},fav:{display:"block",color:"white",paddingLeft:"calc(1em + ".concat(e.spacing(2),"px)")},homeIcon:{height:"100%",pointerEvents:"none",display:"flex",alignItems:"center",color:xe,fontSize:"35px",justifyContent:"center",paddingLeft:"calc(1em + ".concat(e.spacing(2),"px)"),"&.homeIcon-heightPrimary":{height:"#100%",fontSize:"large",color:"primary"},"&.homeIcon-heightSecondary":{height:"#100%"}},search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(oe.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(oe.a)(e.palette.common.white,.25)},width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(11),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function Be(){var e=He(),t=Object(p.c)((function(e){return e.ThemeReducer})).themeState;return Object(P.jsx)("div",{className:e.root,children:Object(P.jsx)(De.a,{color:t,classes:{colorPrimary:e.appbarpalette,colorSecondary:e.appbarpalette},position:"static",children:Object(P.jsxs)(Ae.a,{children:[Object(P.jsx)(ne.a,{className:e.title,variant:"h6",noWrap:!0,children:"Orber Weather Home Assignment"}),Object(P.jsxs)("div",{className:e.right,children:[Object(P.jsx)(s.b,{style:{textDecoration:"none"},to:"/favorite",children:Object(P.jsx)(ne.a,{className:e.fav,variant:"h6",noWrap:!0,children:"Favourites"})}),Object(P.jsx)(s.b,{style:{textDecoration:"none"},to:"/home",children:Object(P.jsx)(Ce.a,{children:Object(P.jsx)(_e.a,{style:{color:xe}})})})]})]})})})}var Me=Object(l.a)((function(e){return{grid:{display:"flex",flexDirection:"column",height:"100%",minHeight:"100vh",flexGrow:1,justifyContent:"center",alignItems:"center"},box:Object(j.a)({width:"fit-content",justifyContent:"center",borderWidth:"3px",borderStyle:"groove",borderColor:"rgba(2,7,10,0.79)",overflow:"hidden"},e.breakpoints.down(700),{borderStyle:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),favBox:Object(j.a)({display:"flex",justifyContent:"flex-end",marginBottom:"2rem"},e.breakpoints.down(700),{marginLeft:0,marginBottom:"0"}),upper:Object(j.a)({display:"flex",padding:"3rem",justifyContent:"space-between"},e.breakpoints.down(700),{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),currentCity:Object(j.a)({marginLeft:"4rem"},e.breakpoints.down(700),{marginLeft:"0"}),clouds:Object(j.a)({},e.breakpoints.down(700),{display:"none"}),switch:Object(j.a)({marginLeft:"30px",width:"fit-content",padding:0},e.breakpoints.down(700),{marginLeft:"0"})}})),Ve=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),a=(t[0],t[1],Object(r.useState)()),n=Object(o.a)(a,2),c=(n[0],n[1],Me()),i=Object(p.b)(),s=Object(p.c)((function(e){return e.GetCityReducer})),d=s.getCityError,l=s.data,j=(s.keyword,Object(p.c)((function(e){return e.CurrentCityReducer}))),b=(j.loading,j.id),f=j.city,m=Object(p.c)((function(e){return e.ForeCastReducer})),g=m.ForecastError,O=m.foreData,x=m.loadingforeCast,y=Object(p.c)((function(e){return e.FavouriteReducer})).favourites,v=Object(r.useState)(!0),w=Object(o.a)(v,2),C=w[0],k=w[1],S=!1;return y.some((function(e){return e.id===b}))&&(S=!0),Object(r.useEffect)((function(){i(M(b,f))}),[b,j]),Object(r.useEffect)((function(){i(he(b,0,C))}),[C]),Object(P.jsxs)("div",{children:[d?Object(P.jsx)(q,{variant:"error",children:d}):g?Object(P.jsx)(q,{variant:"error",children:g}):"",Object(P.jsxs)(u.a,{container:!0,className:c.grid,spacing:3,children:[Object(P.jsx)(u.a,{className:c.clouds,children:Object(P.jsx)(Ie,{})}),Object(P.jsx)(u.a,{item:!0,md:6,children:Object(P.jsx)(je,{})}),Object(P.jsxs)(h.a,{className:c.box,children:[Object(P.jsxs)(u.a,{Container:!0,className:c.upper,children:[Object(P.jsx)(u.a,{className:c.currentCity,style:{},item:!0,md:4,children:l&&l.length>0?Object(P.jsx)(be,{cityName:f,current:l[0].Temperature.Metric.Value}):Object(P.jsx)(Z.a,{})}),Object(P.jsx)(u.a,{item:!0,md:6,className:c.favBox,children:Object(P.jsx)(Ne,{id:b,city:f,isThisCityIsFav:S})})]}),Object(P.jsx)(ae.a,{className:c.switch,style:{},control:Object(P.jsx)(re.a,{checked:C,onChange:function(){return k(!C)},name:"metric",color:"primary"}),label:C?Object(P.jsx)("span",{children:" \u2103 "}):Object(P.jsx)("span",{children:"\u2109"})}),Object(P.jsx)("span",{children:" \u2103 "}),Object(P.jsx)(u.a,{item:!0,md:12,style:{marginTop:"3rem",gridGap:"6",justifyContent:"center",display:"flex"},children:!x&&O?Object(P.jsx)(we,{data:O.DailyForecasts,loading:x}):g?"Error":Object(P.jsx)(Z.a,{})})]})]})]})},Pe=a(173),We=a(96),Je=a(172),ze=a(174),Ue=a(142),Qe=Object(Ue.a)((function(e){return{rootApp:{apppalette:{"&.MuiGrid-root-colorPrimary":{backgroundColor:"red"},"&.MuiGrid-colorSecondary":{backgroundColor:"grey"}}}}})),Ke={palette:{primary:{main:"#3f51b5",backgroundColor:"#FFFFFF"},secondary:{main:"#424242",backgroundColor:"#dd2c00"}}};var Ye=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.ThemeReducer})).themeState,a=Object(r.useState)("primary"),n=Object(o.a)(a,2),c=n[0],i=n[1],l=Qe(),j=Object(We.a)(Ke),b=function(){i("primary"===c?"secondary":"primary"),e(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(a,r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:"THEME",payload:e})}catch(r){a({type:"THEME_FAIL",payload:r.response&&r.response.data.message?r.response.data.message:r.message})}case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(c))};return Object(P.jsx)("div",{className:l.rootApp,children:Object(P.jsxs)(Je.a,{theme:j,children:[Object(P.jsx)(Pe.a,{}),Object(P.jsx)(u.a,{color:t,classes:{colorPrimary:l.apppalette,colorSecondary:l.apppalette},children:Object(P.jsxs)(s.a,{children:[Object(P.jsx)(Be,{}),Object(P.jsx)(Ce.a,{className:l.menuButton,color:"inherit",onClick:function(){b()},children:Object(P.jsx)(ze.a,{})}),Object(P.jsxs)(d.c,{children:[Object(P.jsx)(d.a,{path:"/",component:Ge,exact:!0}),Object(P.jsx)(d.a,{path:"/favorite",component:te,exact:!0}),Object(P.jsx)(d.a,{path:"/city",component:Ve,exact:!0})]})]})})]})})},qe=a(53),Ze=a(94),$e=a(95),Xe=a(20),et=Object(qe.combineReducers)({SearchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(ce.a)(Object(ce.a)({},e),{},{loadingInfo:!0});case x:return{loadingInfo:!1,data:t.payload};case y:return{loadingInfo:!1,SearchError:t.payload};default:return e}},GetCityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,data:{},keyword:"Tel Aviv"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(ce.a)(Object(ce.a)({},e),{},{loadingCity:!0});case w:return{loadingCity:!1,data:t.payload,keyword:t.keyword};case C:return{loadingCity:!1,getCityError:t.payload};default:return e}},CurrentCityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,id:"",keyword:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"current_city":return{loadingCity:!1,id:t.payload,city:t.keyword};default:return e}},ForeCastReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(ce.a)(Object(ce.a)({},e),{},{loadingforeCast:!0});case S:return{loadingforeCast:!1,foreData:t.payload,keyword:t.keyword};case F:return{loadingCity:!1,ForecastError:t.payload};default:return e}},FavouriteReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{favourites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var a=t.payload,r=e.favourites.find((function(e){return e.id===a.id}));return r?Object(ce.a)(Object(ce.a)({},e),{},{favourites:e.favourites.map((function(e){return e.id===r.id?a.id:e}))}):Object(ce.a)(Object(ce.a)({},e),{},{favourites:[].concat(Object(Xe.a)(e.favourites),[a])});case N:return Object(ce.a)(Object(ce.a)({},e),{},{favourites:e.favourites.filter((function(e){return e.id!=t.payload}))});case R:return{AddFavError:t.payload};default:return e}},GetFavCityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{FavData:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(ce.a)(Object(ce.a)({},e),{},{LoadingFavCity:!0});case T:var a=e.FavData.find((function(e){return e.keyword===t.payload.keyword}));return a?Object(ce.a)(Object(ce.a)({},e),{},{FavData:e.FavData.map((function(e){return e.keyword===a.keyword?t.payload:e}))}):Object(ce.a)(Object(ce.a)({LoadingFavCity:!1},e),{},{FavData:[].concat(Object(Xe.a)(e.FavData),[t.payload])});case G:return{LoadingFavCity:!1,FavCityError:t.payload};default:return e}},GeoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(ce.a)(Object(ce.a)({},e),{},{loadingGeo:!0});case A:return{loadingGeo:!1,geoData:t.payload};case L:return{loadingGeo:!1,getGeoError:t.payload};default:return e}},ThemeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"primary"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"THEME":return{themeState:t.payload};default:return e}}}),tt={SearchReducer:{data:null},GetCityReducer:{data:""},CurrentCityReducer:{id:215854,city:"Tel Aviv"},FavouriteReducer:{favourites:localStorage.getItem("favourites")?JSON.parse(localStorage.getItem("favourites")):[]},GetFavCityReducer:{FavData:[]},ThemeReducer:{themeState:"primary"}},at=[Ze.a],rt=Object(qe.createStore)(et,tt,Object($e.composeWithDevTools)(qe.applyMiddleware.apply(void 0,at)));i.a.render(Object(P.jsx)(p.a,{store:rt,children:Object(P.jsx)(Ye,{})}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.bd193a22.chunk.js.map