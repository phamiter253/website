import{_ as k}from"./aBddwpwt.js";import{o as s,c as a,m as C,_ as y,u as P,r as _,a as l,n as b,F as d,p as h,q as f,s as v,v as B,x as $,w as L,y as u,z as H,b as j}from"./BbWlQbfj.js";const S={class:"hero-home"};function T(m,t){return s(),a("div",S,t[0]||(t[0]=[C('<div class="container" style="flex-direction:column;align-items:center;"><h1 class="hero-home__title">Projects</h1><div class="hero-home__row"><h1 class="hero-home__title">by</h1><img class="hero-home__logo" src="'+k+'" alt="Priscilla Hamiter Logo"></div></div>',1)]))}const w={},z=y(w,[["render",T]]),x=()=>{const m=P();return{gsap:m.$gsap,Flip:m.$Flip}},F={class:"carousel"},G={class:"carousel__container"},A={class:"carousel__controls"},M=["onClick"],N={__name:"index",props:{slidesLength:{type:Number,default:0}},setup(m){const{gsap:t}=x(),r=_(0),c=_();function g(n,e){e.stopPropagation();const p=r.value,o=n;r.value=n,t.context(()=>{const i=t.utils.toArray(".slide");t.set(i,{zIndex:0}),t.set(i[p],{zIndex:1,xPercent:0}),o>p?(t.set(i[o],{zIndex:2,xPercent:100}),t.fromTo(i[o],{xPercent:100},{duration:1,xPercent:0})):(t.set(i[o],{zIndex:2,xPercent:-100}),t.fromTo(i[o],{xPercent:-100},{duration:1,xPercent:0}))},c.value)}return(n,e)=>(s(),a("div",F,[l("div",G,[l("div",{class:"carousel__inner",ref_key:"carouselRef",ref:c},[b(n.$slots,"default")],512),l("div",A,[(s(!0),a(d,null,h(m.slidesLength,(p,o)=>(s(),a("div",{class:f(["carousel__indicator",{"active-dot":v(r)===o}]),key:`dot-${o}`,onClick:i=>g(o,i)},null,10,M))),128))])])]))}},I=[{name:"New Project Coming Soon!",type:"cell-large",image:"/images/animal-crossing-background.jpg",font:'"Rats Fink Heavy"',link:"/data-viz/animal-crossing"},{name:"Turkey Shaped Pretzels",type:"cell",image:"/images/home-projects-24.jpg",children:[]},{name:"Spongebob Birthday Cake",type:"cell",image:"",children:["/images/home-projects-21.jpg","/images/home-projects-21b.jpg","/images/home-projects-21c.jpg","/images/home-projects-21d.jpg"]},{name:"Halloween Charcuterie",type:"cell",image:"",children:["/images/home-projects-22.jpg","/images/home-projects-22b.jpg"]},{name:"Western Themed Birthday Cake",type:"cell",image:"/images/home-projects-23.jpg",children:[]},{name:"Charcuterie Picnic Board",type:"cell",image:"/images/home-projects-20.jpg",children:[]},{name:"Cardboard Summer Cover",type:"cell",image:"/images/home-projects-19.jpg",children:[]},{name:"Black Coco Birthday Cake",type:"cell",image:"/images/home-projects-18.jpg",children:[]},{name:"White Elephant Gift Wrapping",type:"cell",image:"/images/home-projects-17.jpg",children:[]},{name:"Starbucks Skeleton Jack-o-Lantern",type:"cell",image:"/images/home-projects-16.jpg",children:[]},{name:"My Hero Academia Cupcakes",type:"cell",image:"/images/home-projects-15.jpg",children:[]},{name:"Crepe Flowers Bouquet",type:"cell",image:"/images/home-projects-14.jpg",children:[]},{name:"California Poppies Crepe Flowers",type:"cell",image:"/images/home-projects-13.jpg",children:[]},{name:"Origami Dollar Bill Pug",type:"cell",image:"/images/home-projects-12.jpg",children:[]},{name:"Cardboard Bookcase",type:"cell",image:"/images/home-projects-11.jpg",children:[]},{name:"Origami Dragon Gift Wrapping",type:"cell",image:"/images/home-projects-10.jpg",children:[]},{name:"Birch Trees Painting",type:"cell",image:"/images/home-projects-9.jpg",children:[]},{name:"Skeleton Painting",type:"cell",image:"/images/home-projects-8.jpg",children:[]},{name:"Maze Painting",type:"cell",image:"/images/home-projects-7.jpg",children:[]},{name:"Illusion Painting",type:"cell",image:"/images/home-projects-6.jpg",children:[]},{name:"Crochet Taco Pillow",type:"cell",image:"/images/home-projects-5.jpg",children:[]},{name:"Hersheys Bar Gift Wrapping",type:"cell",image:"",children:["/images/home-projects-4.jpg","/images/home-projects-4b.jpg"]},{name:"Hamburger Gift Wrapping",type:"cell",image:"/images/home-projects-3.jpg",children:[]},{name:"Cardboard Toilet Giftbox",type:"cell",image:"",children:["/images/home-projects-2.jpg","/images/home-projects-2b.jpg","/images/home-projects-2c.jpg"]},{name:"Cardboard Guitar Giftbox",type:"cell",image:"",children:["/images/home-projects-1.jpg","/images/home-projects-1b.jpg"]}],W={class:"grid"},E={class:"container"},V={class:"grid__container"},q=["id"],R={key:0,class:"content"},D=["src","alt"],O=["src","alt"],J=["innerHTML"],Y=["href"],K=["src","alt"],Q=["innerHTML"],U={__name:"index",setup(m){const{gsap:t,Flip:r}=x();return B(()=>{const c=document.querySelectorAll(".cell"),g=t.utils.toArray(".cell, .cell-large");c.forEach(n=>{n.addEventListener("click",()=>{const e=r.getState(g);n.classList.toggle("active"),r.from(e,{duration:.3,ease:"power1.in"}),t.to(window,{duration:.5,delay:.4,scrollTo:{y:"#"+n.id,offsetY:80}})})})}),(c,g)=>{const n=N;return s(),a("div",W,[l("div",E,[l("div",V,[(s(!0),a(d,null,h(v(I),(e,p)=>(s(),a("div",{class:f(e.type),id:"cell-"+p},[e.type=="cell"?(s(),a("div",R,[e.children.length==0?(s(),a("img",{key:0,src:e.image,alt:e.name},null,8,D)):(s(),$(n,{key:1,slidesLength:e.children.length},{default:L(()=>[(s(!0),a(d,null,h(e.children,(o,i)=>(s(),a("img",{class:"slide",src:o,alt:e.name+"-"+i},null,8,O))),256))]),_:2},1032,["slidesLength"])),l("h3",{class:"cell__caption",innerHTML:e.name},null,8,J)])):u("",!0),e.type=="cell-large"?(s(),a("a",{key:1,class:"content",href:e.link},[l("img",{class:"slide",src:e.image,alt:e.name+"-"+c.j},null,8,K),l("h2",{class:"cell__title",innerHTML:e.name,style:H({fontFamily:e.font})},null,12,Q)],8,Y)):u("",!0)],10,q))),256))])])])}}},X={class:"pages-home"};function Z(m,t){const r=z,c=U;return s(),a("div",X,[j(r),j(c)])}const ee={},ae=y(ee,[["render",Z]]);export{ae as default};
