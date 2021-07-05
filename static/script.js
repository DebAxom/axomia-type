!function(){"use strict";var e={namaskar:"নমস্কাৰ",toi:"তই",tumar:"তোমাৰ",tumak:"তোমাক",sini:"চিনি",kun:"কোন",sun:"চোন",moi:"মই",hoi:"হয়",hoise:"হৈছে",korsa:"কৰছা",axom:"অসম",swadhin:"স্ৱাধীন",kaziranga:"কাজিৰঙা",rashtriya:"ৰাষ্ট্ৰীয়",nagoan:"নগাওঁ",golaghat:"গোলাঘাট",bhogolik:"ভৌগোলিক",brahmaputra:"ব্ৰহ্মপুত্ৰ",prithibi:"পৃথিৱী",esingia:"এশিঙীয়া",garh:"গঁড়",gor:"গঁড়",hati:"হাতী",moh:"ম'হ",horin:"হৰিণ",uttar:"উত্তৰ",dakshin:"দক্ষিণ",bhumi:"ভূমি",prajati:"প্ৰজাতি",bonoria:"বনৰীয়া",jetia:"যেতিয়া",kapur:"কাপোৰ",pindha:"পিন্ধা",napau:"নাপাও",joi:"জয়",kot:"ক'ত",as:"আছ",pathok:"পাঠক",boro:"বড়ো",deka:"ডেকা",kalita:"কলিতা"},t={".":"্",a:"আ",i:"ই",e:"এ",u:"উ",ou:"ঔ",oi:"ঐ",o:"ও",k:"ক",c:"ক",g:"গ",s:"স",x:"শ",n:"ন",m:"ম",j:"জ",z:"জ",t:"ত",d:"দ",b:"ব",w:"ৱ",v:"ভ",h:"হ",p:"প",y:"য়",r:"ৰ",f:"ফ",l:"ল"},n={"আ":"া","ই":"ি","এ":"ে","উ":"ু","ঔ":"ৌ","ঐ":"ৈ","ও":"o"};let a=["অ","আ","ই","ঈ","উ","ঊ","এ","ঐ","ও","ঔ","া","ি","ী","ু","ূ","ে","ৈ","ো","ৌ","o"];var l=e=>a.includes(e);let r=Object.keys(t);function i(e){if(r.includes(e))return t[e.toLowerCase()];let a=(e=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/oi/g,"ঐ")).replace(/ou/g,"ঔ")).replace(/ee/g,"i")).replace(/th/g,"থ")).replace(/bh/g,"ভ")).replace(/cl/g,"ক্ল")).replace(/kl/g,"ক্ল")).replace(/jh/g,"ঝ")).replace(/zh/g,"ঝ")).replace(/sk/g,"স্ক")).replace(/shn/g,"ষ্ণ")).replace(/sh/g,"ষ")).replace(/ch/g,"চ")).replace(/khy/g,"ক্ষ")).replace(/kh/g,"খ")).replace(/gh/g,"ঘ")).replace(/dh/g,"ধ")).replace(/ph/g,"ফ")).replace(/ng/g,"ং")).replace(/nt/g,"n.t")).replace(/tn/g,"t.n")).replace(/sw/g,"s.w")).replace(/hm/g,"h.m")).replace(/mh/g,"m.h")).replace(/jyo/g,"জ্যো")}(e)).split(""),o=a.length;if(1===o)return e;const c=Math.ceil(o/2),g=a.splice(0,c),h=a.splice(-c),p=g.join(""),u=h.join("");return s=i(p),d=i(u),m=s.split(""),k=d.split(""),j=m[m.length-1],f=k[0],l(j)||"ৰ"!==f||"ং"==j||(k[0]="্ৰ"),"ৰ"!==j||l(f)?("য়"!==f||l(j)||(k[0]="্য়"),"ং"===j&&l(f)&&(m[m.length-1]="ঙ"),l(j)?("আ"===f&&"ই"===j&&(k[0]="য়া"),"আ"===f&&"উ"===j&&(k[0]="ৱা"),m.join("")+k.join("")):l(f)?(k[0]="গ"===j?"ো":n[f],m.join("")+k.join("")):m.join("")+k.join("")):("য়"===f&&(k[0]="য"),m[m.length-1]="ৰ্",m.join("")+k.join(""));var s,d,m,k,j,f}var o={a:"া",i:"ি",o:"ো",e:"ে",u:"ু",ou:"ৌ",oi:"ৈ",ku:"কু",no:"নু",nu:"নু",isu:"িছু",su:"ছু"},c={a:"অ",su:"সু"};function g(e,t){let n=80;return(e.length>=8||t.length>=8)&&(n=60),function(e,t){for(var n=0,a=e.length>t.length?t.length:e.length,l=e.length<t.length?t.length:e.length,r=0;r<a;r++)e[r]==t[r]&&n++;return n/l*100}(e,t)>=n}let h=Object.keys(e);let p=document.getElementsByTagName("textarea")[0],u=document.getElementById("clear-btn"),s=document.getElementById("copy-btn");p.addEventListener("input",(function(t){var n=p;if(n.style.height="auto",n.style.height=p.scrollHeight+"px"," "==t.data){var a=n.value.split(" "),l=a[a.length-2];if(null===l||" "==l||""==l)return;let t=function(t){if(h.includes(t))return e[t.toLowerCase()];for(let n of h)if(g(n,t)){let a=t.replace(n,",").split(","),l=c[a[0]]||"",r=o[a[1]]||"";return l+e[n]+r}return function(e){let t=e.split("");return"ং"===e.charAt(0)&&(t[0]="ঙ"),e.endsWith("সে")&&(t.pop(),t.pop(),t.push("ছে")),e.endsWith("সা")&&(t.pop(),t.pop(),t.push("ছা")),e.startsWith("ৰ্")&&(t[1]=""),(e=t.join("")).replace(/o/g,"")}(t=i(t))}(l.toLowerCase());a[a.length-2]=t,n.value=a.join(" ")}})),u.addEventListener("click",(()=>{p.value=""})),s.addEventListener("click",(()=>{p.select(),p.setSelectionRange(0,99999),document.execCommand("copy")}))}();
