!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c=n(1),s=i(c),r=io(),o=s["default"].$(".input"),d=s["default"].$(".send"),l=s["default"].$(".message ul"),u=s["default"].$(".inputname"),f=s["default"].$(".confirm"),p=s["default"].$("#shade"),m=s["default"].$(".userlist"),g=s["default"].$(".users .nums"),h=s["default"].$(".upload"),v=s["default"].$(".upload-form"),y=s["default"].$(".send-img"),$=s["default"].$(".heart"),C=s["default"].$(".heart-dialog"),N=JSON.parse(localStorage.getItem("pics")||0)||[],x=s["default"].$(".pics-box"),L=s["default"].$(".heart-pics");u.focus();var E=function(e){[].concat(a(e)).forEach(function(e){var t=s["default"].$c("div",{className:"heart-item"}),n=s["default"].$c("img",{className:"heart-img",src:e}),i=s["default"].$c("div",{className:"del-img",innerHTML:"×",title:"删除"});i.pic=e,t.appendChild(i),t.appendChild(n),x.appendChild(t)})},k=function(e,t){var n=s["default"].$c("li",{className:"chatitem "+(t?"myself":"others")}),i=s["default"].$c("span",{className:"time",textContent:"("+s["default"].timeformat(e.time)+")"}),a=s["default"].$c("p",{className:"username"}),c=document.createTextNode(e.username+(t?"-我":""));t?(a.appendChild(i),a.appendChild(c)):(a.appendChild(c),a.appendChild(i)),s["default"].decompress(e.msg,function(e){var t=s["default"].$c("p",{className:"msg",innerHTML:e});n.appendChild(a),n.appendChild(t),l.appendChild(n),n.scrollIntoView(!1)})},S=function(e,t){m.innerHTML="";var e=r.id;t.forEach(function(t){var n=s["default"].$c("li",{id:"id"+t.id,textContent:t.username+(t.id===e?"(我)":"")});m.appendChild(n)})},T=function(e,t,n){var i=r.id===t;if(i)p.style.display="none",o.focus();else if(!r.isLogin)return;S(t,n),g.textContent=n.length,A(e+" 加入群聊","userjoin")},w=function(e,t,n){var i=s["default"].$("#id"+e);i.parentNode.removeChild(i),g.textContent=n,A(t+"退出群聊","userout")},A=function(e,t){var n=s["default"].$c("li",{className:"chatitem msgitem "+t,innerHTML:'<p class="msgcontent">'+e+"</p>"});l.appendChild(n),n.scrollIntoView()},M=function H(e){H.wait=1500,clearTimeout(H[e]);var t=s["default"].$("#id"+e);t.querySelector(".inputing")||t.appendChild(s["default"].$c("span",{className:"inputing",textContent:"（正在输入……）"})),H[e]=setTimeout(function(){var e=t.querySelector(".inputing");clearTimeout(H.st),e.parentNode.removeChild(e)},H.wait)},O=function(e){u.classList.add("conflict"),u.setAttribute("placeholder","昵称"+e+"已被占用"),u.value="",p.style.display="",u.focus()},R=function(e,t){var n=document.createRange(),i=window.getSelection(),c=i.anchorNode;if(c&&(c===o||c.parentNode===o)){var r=i.anchorOffset,d=i.focusOffset,l=0,u=0;if(c===o){var f="text"===t?document.createTextNode(e):s["default"].$c("img",{className:"pic",src:e});console.log(c.childNodes[r]),c.insertBefore(f,c.childNodes[r]),u=r+1}else if("text"===t){var p=c.textContent;c.textContent=p.slice(0,r+l)+e+p.slice(d+l),u=r+e.length}else!function(){var t=s["default"].$c("img",{className:"pic",src:e}),n=document.createTextNode(c.textContent.slice(0,r)),i=document.createTextNode(c.textContent.slice(d)),l=document.createDocumentFragment();l.appendChild(n),l.appendChild(t),l.appendChild(i),c.parentNode.replaceChild(l,c),u=[].concat(a(o.childNodes)).findIndex(function(e){return e===t})+1,c=o}();console.log("target=",c.nodeName,"cursor=",u),n.setStart(c,u),i.removeAllRanges(),i.addRange(n)}},b=function(e,t){if(e&&/^image\/[a-z]+$/.test(e.type)){if(e.size<=0)return;var n=100;if(e.size>1024*n)return void A("图片不得超过"+n+"k","warning");var i=new FileReader;i.onload=function(e){t?R(e.target.result):D(e.target.result)},i.readAsDataURL(e)}},D=function(e){var t=document.createRange(),n=window.getSelection();o.innerHTML+=/^data:image\/[a-z]+;base64/.test(e)?"<img class='pic' src="+e+">":e,t.setStart(o,o.childNodes.length),n.removeAllRanges(),n.addRange(t)};r.on("connect",function(){f.addEventListener("click",function(){var e=u.value.replace(/\s/g,"");e?r.emit("join",e,r.id):u.focus()}),u.addEventListener("keydown",function(e){13==e.keyCode&&f.click()}),r.on("conflict"+r.id,O),r.on("userjoin",function(e,t,n){T(e,t,n),r.id===t&&(r.isLogin=!0,E(N),r.on("userout",w),r.on("inputing",M),d.addEventListener("click",function(e){var t=o.innerHTML.trim();t&&s["default"].compress(t,function(e){r.emit("chat",e),o.innerHTML=""})}),o.addEventListener("input",function(e){var t=this;this.isinputing||(this.isinputing=!0,r.emit("inputing"),this.st=setTimeout(function(){clearTimeout(t.st),t.isinputing=!1},1200))}),o.addEventListener("keydown",function(e){13!=e.keyCode||e.ctrlKey||(d.click(),e.preventDefault())}),o.addEventListener("drop",function(e){var t=e.dataTransfer;[].concat(a(t.items)).forEach(function(e){var t=e.type;t.match(/^image\//)?b(e.getAsFile()):"text/plain"===t&&e.getAsString(D)}),e.preventDefault()}),o.addEventListener("paste",function(e){var t=e.clipboardData;[].concat(a(t.items)).forEach(function(e){var t=e.type;t.match(/^image\//)?b(e.getAsFile(),!0):"text/plain"===t&&e.getAsString(function(e){R(e,"text")})}),e.preventDefault()}),y.addEventListener("click",function(e){h.click()}),r.on("chat",function(e){k(e,e.id===r.id)}),h.addEventListener("change",function(e){var t=this.files[0];t&&(/^image\/[a-z]+$/.test(t.type)?b(this.files[0]):A("请选择图片","warning"),v.reset())}),document.addEventListener("contextmenu",function(e){"pic"===e.target.className&&(Object.assign(C.style,{top:e.pageY+"px",left:e.pageX+"px",display:"block"}),C.pic=e.target.src,e.preventDefault())}),C.addEventListener("click",function(e){var t=this;N.find(function(e){return e==t.pic})?A("该图已收藏","warning"):(N.push(this.pic),E([this.pic]),localStorage.setItem("pics",JSON.stringify(N))),this.style.display="none"}),$.addEventListener("click",function(e){this.open?L.style.display="none":L.style.display="block",this.open=!this.open}),x.addEventListener("click",function(e){var t=e.target;if(/^heart-img$|^heart-item$/.test(t.className)){var n="heart-item"===t.className?t.childNodes[0].src:t.src;D(n),$.open=!1,L.style.display="none"}else if("del-img"===t.className){var i=N.findIndex(function(e){return e===t.pic});x.removeChild(x.childNodes[i]),N.splice(i,1),localStorage.setItem("pics",JSON.stringify(N))}}),document.addEventListener("click",function(e){var t=L.getBoundingClientRect(),n=$.getBoundingClientRect(),i=C.getBoundingClientRect(),a=e.pageX,c=e.pageY;s["default"].isOutside(a,c,t)&&s["default"].isOutside(a,c,n)&&($.open=!1,L.style.display="none"),s["default"].isOutside(a,c,i)&&(C.style.display="none")}))})})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={$:function(e){return document.querySelector(e)},$$:function(e){return document.querySelectorAll(e)},$c:function(e,t){var n=document.createElement(e);return Object.assign(n,t),n},timeformat:function(e){var t=new Date(e),n=t.getMonth()+1,i=t.getDate(),a=t.getHours(),c=t.getMinutes(),s=t.getSeconds();return n=n>9?n:"0"+n,i=i>9?i:"0"+i,a=a>9?a:"0"+a,c=c>9?c:"0"+c,s=s>9?s:"0"+s,n+"-"+i+" "+a+":"+c+":"+s},isOutside:function(e,t,n){return e<n.left||e>n.right||t>n.bottom||t<n.top},compress:function(e,t){LZMA.compress(e,1,function(n,i){t(i?e:n)})},decompress:function(e,t){LZMA.decompress(e,function(n,i){t(i?e:n)})}}}]);