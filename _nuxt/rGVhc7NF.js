import{j as c,r as h,h as m,o as l,c as o,e as v,b as g,_ as f}from"./BEHfv_FU.js";const r=[{label:"100 Grand",id:"fun-sized-100-grand",sugar:.73199999,value:66.971725,dimensions:[640,248]},{label:"3 Musketeers",id:"fun-sized-3-musketeers",sugar:.60399997,value:67.602936,dimensions:[640,280]},{label:"Almond Joy",id:"fun-sized-almond-joy",sugar:.465,value:50.347546,dimensions:[640,268]},{label:"Baby Ruth",id:"fun-sized-baby-ruth",sugar:.60399997,value:56.914547,dimensions:[570,253]},{label:"Hershey's Milk Chocolate",id:"fun-sized-hersheys",sugar:.43000001,value:56.490501,dimensions:[570,167]},{label:"Kit Kat",id:"fun-sized-kitkat",sugar:.31299999,value:76.7686,dimensions:[760,299]},{label:"Milky Way",id:"fun-sized-milkyway",sugar:.60399997,value:73.099556,dimensions:[640,285]},{label:"Milky Way Midnight",id:"milkywaymidnight",sugar:.73199999,value:60.800701,dimensions:[4.25,1.25]},{label:"Mounds",id:"fun-sized-mounds",sugar:.31299999,value:47.829754,dimensions:[640,293]},{label:"Butterfinger",id:"fun-sized-butterfinger",sugar:.60399997,value:70.735641,dimensions:[640,316]},{label:"Crunch Bar",id:"fun-sized-crunch",sugar:.31299999,value:66.47068,dimensions:[570,202]},{label:"Reese's Peanut Butter cup",id:"fun-sized-reeses",sugar:.72000003,value:84.18029,dimensions:[500,443]},{label:"Snickers",id:"fun-sized-snickers",sugar:.546,value:76.673782,dimensions:[640,277]},{label:"Twix",id:"fun-sized-twix",sugar:.546,value:81.642914,dimensions:[760,266]}],_={class:"halloween-chart"},p={__name:"index",setup(u){const d=c().$d3,n=h(0);return m(()=>{const i=d.select("#chart");i.append("svg:defs").selectAll("pattern").data(r).join(e=>{const a=e.append("pattern").attr("id",s=>s.id).attr("width",s=>s.dimensions[0]).attr("height",s=>s.dimensions[1]).attr("height","1").attr("width","1").attr("x",0).attr("y",0);return a.append("image").attr("width",s=>s.dimensions[0]).attr("height",s=>s.dimensions[1]),a}).select("image").attr("xlink:href",e=>`/images/halloween-candy/${e.id}.png`),i.selectAll("rect").data(r).enter().append("rect").attr("class","base").attr("width",function(e){return e.dimensions[0]}).attr("height",function(e){return e.dimensions[1]}).attr("x",function(e){return 800-e.dimensions[0]}).attr("y",function(e,a){return a>0&&(n.value=n.value+r[a-1].dimensions[1]+10),n.value}).style("fill",e=>`url(#${e.id})`)}),(i,t)=>(l(),o("div",_,t[0]||(t[0]=[v('<div class="container"><div class="halloween-chart__container"><div class="halloween-chart__row"><div class="halloween-chart__chart"><svg id="chart" viewBox="0 0 800 3800"></svg></div></div><div class="halloween-chart__row"><h1 class="halloween-chart__title">Halloween Candy Chocolate Bar Graph</h1><p>Coming Soon</p></div></div></div>',1)])))}},y={class:"pages-projects"};function b(u,d){const n=p;return l(),o("div",y,[g(n)])}const w={},z=f(w,[["render",b]]);export{z as default};
