!function(){"use strict";var e={namaskar:"নমস্কাৰ",toi:"তই",kun:"কোন",moi:"মই",hoi:"হয়",hoise:"হৈছে",korsa:"কৰছা",axom:"অসম",swadhin:"স্ৱাধীন",kaziranga:"কাজিৰঙা",rashtriya:"ৰাষ্ট্ৰীয়",nagoan:"নগাওঁ",golaghat:"গোলাঘাট",bhogolik:"ভৌগোলিক",brahmaputra:"ব্ৰহ্মপুত্ৰ",prithibi:"পৃথিৱী",esingia:"এশিঙীয়া",garh:"গঁড়",gor:"গঁড়",hati:"হাতী",moh:"ম'হ",horin:"হৰিণ",uttar:"উত্তৰ",dakshin:"দক্ষিণ",bhumi:"ভূমি",prajati:"প্ৰজাতি",bonoria:"বনৰীয়া",jetia:"যেতিয়া",kapur:"কাপোৰ",pindha:"পিন্ধা",napau:"নাপাও",joi:"জয়",apun:"আপেন",kot:"ক'ত",as:"আছ"},t={".":"্",a:"আ",i:"ই",e:"এ",u:"উ",ou:"ঔ",oi:"ঐ",o:"ও",k:"ক",c:"ক",g:"গ",s:"স",x:"শ",n:"ন",m:"ম",j:"জ",z:"জ",t:"ত",d:"দ",b:"ব",w:"ৱ",v:"ভ",h:"হ",p:"প",y:"য়",r:"ৰ",f:"ফ",l:"ল"},a={"আ":"া","ই":"ি","এ":"ে","উ":"ু","ঔ":"ৌ","ঐ":"ৈ","ও":""};let n=["অ","আ","ই","ঈ","উ","ঊ","এ","ঐ","ও","ঔ","া","ি","ী","ু","ূ","ে","ৈ","ো","ৌ"];var r=e=>n.includes(e);let i=Object.keys(t);function l(e){if(i.includes(e))return t[e.toLowerCase()];let n=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/th/g,"থ")).replace(/bh/g,"ভ")).replace(/cl/g,"ক্ল")).replace(/kl/g,"ক্ল")).replace(/jh/g,"ঝ")).replace(/zh/g,"ঝ")).replace(/sk/g,"স্ক")).replace(/ch/g,"চ")).replace(/kh/g,"খ")).replace(/gh/g,"ঘ")).replace(/dh/g,"ধ")).replace(/ph/g,"ফ")).replace(/ng/g,"ং")).split(""),o=n.length;if(1==o)return e;const h=Math.ceil(o/2),g=n.splice(0,h),u=n.splice(-h),s=g.join(""),c=u.join("");return p=l(s),f=l(c),k=p.split(""),j=f.split(""),d=k[k.length-1],"য়"!==(v=j[0])||r(d)?r(d)?"আ"===v?(j[0]="য়া",p+j.join("")):p+f:r(v)?(j[0]=a[v],p+j.join("")):p+f:(j[0]="্য়",p+j.join(""));var p,f,k,j,d,v}var o={a:"া",i:"ি",o:"ো",e:"ে",u:"ু",ou:"ৌ",oi:"ৈ",ku:"কু",no:"নু",nu:"নু",isu:"িছু",su:"ছু"},h={a:"অ",su:"সু"};function g(e,t){let a=80;return(e.length>=8||t.length>=8)&&(a=60),function(e,t){for(var a=0,n=e.length>t.length?t.length:e.length,r=e.length<t.length?t.length:e.length,i=0;i<n;i++)e[i]==t[i]&&a++;return a/r*100}(e,t)>=a}let u=Object.keys(e);let s=document.getElementsByTagName("textarea")[0];s.addEventListener("input",(function(t){var a=s;if(s.style.height="auto",s.style.height=s.scrollHeight+"px"," "==t.data){var n=a.value.split(" "),r=n[n.length-2];if(null===r||" "==r||""==r)return;let t=function(t){if(u.includes(t))return e[t.toLowerCase()];for(let a of u)if(g(a,t)){let n=t.replace(a,",").split(","),r=h[n[0]]||"",i=o[n[1]]||"";return r+e[a]+i}return l(t)}(r.toLowerCase());n[n.length-2]=t,a.value=n.join(" ")}}))}();
