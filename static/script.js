!function(){"use strict";var e={namaskar:"নমস্কাৰ",toi:"তই",tumar:"তোমাৰ",tumak:"তোমাক",sini:"চিনি",kun:"কোন",moi:"মই",hoi:"হয়",hoise:"হৈছে",korsa:"কৰছা",axom:"অসম",swadhin:"স্ৱাধীন",kaziranga:"কাজিৰঙা",rashtriya:"ৰাষ্ট্ৰীয়",nagoan:"নগাওঁ",golaghat:"গোলাঘাট",bhogolik:"ভৌগোলিক",brahmaputra:"ব্ৰহ্মপুত্ৰ",prithibi:"পৃথিৱী",esingia:"এশিঙীয়া",garh:"গঁড়",gor:"গঁড়",hati:"হাতী",moh:"ম'হ",horin:"হৰিণ",uttar:"উত্তৰ",dakshin:"দক্ষিণ",bhumi:"ভূমি",prajati:"প্ৰজাতি",bonoria:"বনৰীয়া",jetia:"যেতিয়া",kapur:"কাপোৰ",pindha:"পিন্ধা",napau:"নাপাও",joi:"জয়",kot:"ক'ত",as:"আছ",pathok:"পাঠক",boro:"বড়ো",deka:"ডেকা",kalita:"কলিতা"},t={".":"্",a:"আ",i:"ই",e:"এ",u:"উ",ou:"ঔ",oi:"ঐ",o:"ও",k:"ক",c:"ক",g:"গ",s:"স",x:"শ",n:"ন",m:"ম",j:"জ",z:"জ",t:"ত",d:"দ",b:"ব",w:"ৱ",v:"ভ",h:"হ",p:"প",y:"য়",r:"ৰ",f:"ফ",l:"ল"},n={"আ":"া","ই":"ি","এ":"ে","উ":"ু","ঔ":"ৌ","ঐ":"ৈ","ও":""};let a=["অ","আ","ই","ঈ","উ","ঊ","এ","ঐ","ও","ঔ","া","ি","ী","ু","ূ","ে","ৈ","ো","ৌ","o"];var r=e=>a.includes(e);let i=Object.keys(t);function l(e){if(i.includes(e))return t[e.toLowerCase()];let a=(e=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/oi/g,"ঐ")).replace(/ou/g,"ঔ")).replace(/ee/g,"i")).replace(/th/g,"থ")).replace(/bh/g,"ভ")).replace(/cl/g,"ক্ল")).replace(/kl/g,"ক্ল")).replace(/jh/g,"ঝ")).replace(/zh/g,"ঝ")).replace(/sk/g,"স্ক")).replace(/sh/g,"ষ")).replace(/ch/g,"চ")).replace(/khy/g,"ক্ষ")).replace(/kh/g,"খ")).replace(/gh/g,"ঘ")).replace(/dh/g,"ধ")).replace(/ph/g,"ফ")).replace(/ng/g,"ং")).replace(/nt/g,"n.t")).replace(/tn/g,"t.n")).replace(/sw/g,"s.w")).replace(/hm/g,"h.m")}(e)).split(""),o=a.length;if(1===o)return e;const h=Math.ceil(o/2),g=a.splice(0,h),p=a.splice(-h),u=g.join(""),c=p.join("");return s=l(u),k=l(c),j=s.split(""),f=k.split(""),d=j[j.length-1],m=f[0],"ৰ"!==d||r(m)?("য়"!==m||r(d)||(f[0]="্য়"),"ং"===d&&r(m)&&(j[j.length-1]="ঙ"),r(d)?("আ"===m&&"ই"===d&&(f[0]="য়া"),"আ"===m&&"উ"===d&&(f[0]="ৱা"),j.join("")+f.join("")):r(m)?(f[0]="গ"===d?"ো":n[m],j.join("")+f.join("")):j.join("")+f.join("")):("য়"===m&&(f[0]="য"),j[j.length-1]="ৰ্",j.join("")+f.join(""));var s,k,j,f,d,m}var o={a:"া",i:"ি",o:"ো",e:"ে",u:"ু",ou:"ৌ",oi:"ৈ",ku:"কু",no:"নু",nu:"নু",isu:"িছু",su:"ছু"},h={a:"অ",su:"সু"};function g(e,t){let n=80;return(e.length>=8||t.length>=8)&&(n=60),function(e,t){for(var n=0,a=e.length>t.length?t.length:e.length,r=e.length<t.length?t.length:e.length,i=0;i<a;i++)e[i]==t[i]&&n++;return n/r*100}(e,t)>=n}let p=Object.keys(e);let u=document.getElementsByTagName("textarea")[0];u.addEventListener("input",(function(t){var n=u;if(n.style.height="auto",n.style.height=u.scrollHeight+"px"," "==t.data){var a=n.value.split(" "),r=a[a.length-2];if(null===r||" "==r||""==r)return;let t=function(t){if(p.includes(t))return e[t.toLowerCase()];for(let n of p)if(g(n,t)){let a=t.replace(n,",").split(","),r=h[a[0]]||"",i=o[a[1]]||"";return r+e[n]+i}return function(e){let t=e.split("");return"ং"===e.charAt(0)&&(t[0]="ঙ"),e.endsWith("সে")&&(t.pop(),t.pop(),t.push("ছে")),e.endsWith("সা")&&(t.pop(),t.pop(),t.push("ছা")),e.startsWith("ৰ্")&&(t[1]=""),t.join("")}(t=l(t))}(r.toLowerCase());a[a.length-2]=t,n.value=a.join(" ")}}))}();
