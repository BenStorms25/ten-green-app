"use strict";(self.webpackChunkten_green_app=self.webpackChunkten_green_app||[]).push([[649],{649:function(e,n,t){t.r(n),t.d(n,{GraphWidget:function(){return g},default:function(){return j}});t(2791);var a=t(601),i=t(7678),r=t(466),o=t(2891),c=t(5667),l=t(845),s=t(1048),d=t(9434),u=t(2814),h=t(9256),x=t(3364),p=t(184),f={fontFamily:"sans-serif",textAlign:"center",textDecoration:"none"},y={fontFamily:"sans-serif",textAlign:"center",textDecoration:"none",position:"relative",right:"1rem"},m=window.innerWidth>500,v=function(e){var n=e.active,t=e.payload;e.label;return n&&t&&t.length?(0,p.jsx)("div",{children:(0,p.jsx)("p",{children:" (".concat(t[0].payload.year,") - ").concat(t[0].value," ")})}):null},g=function(e){var n=e.data,t=e.max,g=(0,d.v9)((function(e){return e.county})),j=(0,d.v9)((function(e){return e.current_measure})),w=(0,d.v9)((function(e){return e.title_year})),k=(0,h.k)(j),b=x.cJy(x.BT8).domain([0,k]);return"10green"!==j&&(b=x.cJy(x.HtN).domain([0,k])),(0,p.jsx)("div",{id:"graphwidget",children:(0,p.jsx)("div",{style:m?f:y,children:(0,p.jsx)(a.h,{width:m?"82.5%":"110%",height:200,zoom:.8,children:(0,p.jsxs)(i.v,{width:600,height:300,data:n,margin:{top:50,right:30,left:0,bottom:0},children:[(0,p.jsxs)("text",{class:"second",x:300,y:20,fill:"black",textAnchor:"middle",dominantBaseline:"central",cursor:"auto","text-decoration":"none",children:[(0,p.jsxs)("tspan",{fontSize:"16",style:{textDecoration:"none"},children:[g," - ",(0,u.j)(j)," Score Over Time -"]})," ",(0,p.jsx)("a",{href:"https://aqs.epa.gov/aqsweb/airdata/download_files.html#Annual",class:"sourcebtn",children:"Source: EPA Annual Air Data"})]}),(0,p.jsx)(r.K,{dataKey:"year",type:"category",interval:window.innerWidth>460?4:5,minTickGap:5,tickLine:!0,domain:["dataMin","dataMax"]}),(0,p.jsx)(o.B,{type:"number",domain:[0,t],tickCount:10,interval:0}),(0,p.jsx)(c.u,{wrapperStyle:{outline:"none"},content:(0,p.jsx)(v,{})}),(0,p.jsx)(l.$,{dataKey:"value",children:n.map((function(e,n){return(0,p.jsx)(s.b,{fill:b(e.value-k/10),stroke:"#000000",strokeWidth:e.year===parseInt(w)?2:0},"cell-".concat(n))}))})]})})})})},j=g}}]);
//# sourceMappingURL=649.f9a42099.chunk.js.map