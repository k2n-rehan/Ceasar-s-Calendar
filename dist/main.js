var e,n,t,r,o={331:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: normal;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4n.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_7PqPQw.ttf) format('truetype');\n}\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1rem;\n}\n.container {\n  margin-top: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n.form-select {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.checkbox {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.btn {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n#main-container {\n  padding-top: 20px;\n  padding-right: 40px;\n  padding-bottom: 20px;\n  padding-left: 40px;\n}\n#hint {\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: monospace;\n  color: gray;\n}\n#board {\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: monospace;\n}\ntable {\n  width: 60%;\n  margin-top: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\ntd {\n  width: 14.29%;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n}\ntd:after {\n  content: '';\n  display: block;\n  margin-top: 100%;\n}\ntd .cell {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #DCB579;\n  font-size: 3vw;\n  line-height: 5vw;\n  font-family: 'Roboto Mono', monospace;\n  vertical-align: middle;\n}\nfooter {\n  position: absolute;\n  bottom: 0;\n}\n",""]);const l=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],s=r.base?c[0]+r.base:c[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var f=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=l,n.splice(l,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=t(a[i]);n[l].references--}for(var c=r(e,o),s=0;s<a.length;s++){var u=t(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},540:(e,n,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),l=t(569),c=t.n(l),s=t(565),u=t.n(s),d=t(216),f=t.n(d),p=t(589),m=t.n(p),h=t(331),g={};g.styleTagTransform=m(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=f(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var y,v=Promise.all([t.e(731),t.e(694)]).then(t.bind(t,694)),b="hint",x="month-form",w="day-form",E="weekday-form",S="puzzle-type-form";!function(e){e[e.DragonFjord=0]="DragonFjord",e[e.JarringWords=1]="JarringWords",e[e.Tetromino=2]="Tetromino",e[e.WeekDay=3]="WeekDay"}(y||(y={})),document.getElementById(S).onchange=function(){var e=document.getElementById(S),n=document.getElementById(E);e.selectedIndex==y.WeekDay?n.disabled=!1:n.disabled=!0},document.getElementById("solve-button").onclick=function(){var e=document.getElementById(x).selectedIndex+1,n=document.getElementById(w).selectedIndex+1,t=document.getElementById(E).selectedIndex,r=document.getElementById(S).selectedIndex;document.getElementById(b).innerText="",function(e,n,t,r){return o=this,a=void 0,l=function(){var o;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(c){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(a){switch(a.label){case 0:if(!(1<=e&&e<=12&&1<=n&&n<=31&&0<=t&&t<7))throw new Error("Error: invalid date: "+e+", "+n);return[4,v.then((function(o){return o.find_solution(e,n,t,r,!1)}))];case 1:return""!=(o=a.sent())?[2,o]:(document.getElementById(b).innerText="(No solution without flipping pieces.)",[4,v.then((function(o){return o.find_solution(e,n,t,r,!0)}))]);case 2:return[2,a.sent()]}}))},new((i=void 0)||(i=Promise))((function(e,n){function t(e){try{c(l.next(e))}catch(e){n(e)}}function r(e){try{c(l.throw(e))}catch(e){n(e)}}function c(n){var o;n.done?e(n.value):(o=n.value,o instanceof i?o:new i((function(e){e(o)}))).then(t,r)}c((l=l.apply(o,a||[])).next())}));var o,a,i,l}(e,n,t,r).then((function(r){console.log(r),function(e,n,t,r){for(var o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i={0:"crimson",1:"pink",2:"indigo",3:"cyan",4:"teal",5:"green",6:"palegoldenrod",7:"orange",8:"gray",M:"tan",D:"tan","#":"white"},l=[],c=0,s=r.trim().split("\n");c<s.length;c++){var u=s[c].trim().split(" ");7!=u.length&&console.log("unexpected board width: ",u),l.push(u)}8!=l.length&&console.log("unexpected board height: ",l.length,l);var d=document.getElementById("board-table");d.innerText="";for(var f=0;f<8;f++)for(var p=d.insertRow(f),m=0;m<7;m++){var h=p.insertCell(m),g=document.createElement("div");g.className="cell";var y=i[l[f][m]];g.style.backgroundColor=y,"M"===l[f][m]?g.innerText=o[e-1].toString():"D"===l[f][m]?g.innerText=n.toString():"W"===l[f][m]&&(g.innerText=a[t].toString()),h.appendChild(g)}}(e,n,t,r)}))},function(){var e=new Date,n=document.getElementById(x);["January","February","March","April","May","June","July","August","September","October","November","December"].forEach((function(e){var t=document.createElement("option");t.text=e,n.add(t)})),n.selectedIndex=e.getMonth();for(var t=document.getElementById(w),r=1;r<=31;r++){var o=document.createElement("option");o.text=r.toString(),t.add(o)}t.selectedIndex=e.getDate()-1;var a=document.getElementById(E);["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].forEach((function(e){var n=document.createElement("option");n.text=e,a.add(n)})),a.selectedIndex=e.getDay(),a.disabled=!0;var i=document.getElementById(S);["WeekDay Calendar Puzzle","Calendar Puzzle"].forEach((function(e){var n=document.createElement("option");n.text=e,i.add(n)})),i.selectedIndex=0}()}},a={};function i(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={id:e,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.exports}i.m=o,i.c=a,i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((n,t)=>(i.f[t](e,n),n)),[])),i.u=e=>e+".main.js",i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e={},i.l=(n,t,r,o)=>{if(e[n])e[n].push(t);else{var a,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==n){a=u;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=n),e[n]=[t];var d=(t,r)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="./dist/",(()=>{var e={179:0};i.f.j=(n,t)=>{var r=i.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=o);var a=i.p+i.u(n),l=new Error;i.l(a,(t=>{if(i.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,r[1](l)}}),"chunk-"+n,n)}};var n=(n,t)=>{var r,o,[a,l,c]=t,s=0;if(a.some((n=>0!==e[n]))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);c&&c(i)}for(n&&n(t);s<a.length;s++)o=a[s],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),i.nc=void 0,n={},t={742:function(){return{}}},r={694:[742]},i.w={},i.f.wasm=function(e,o){(r[e]||[]).forEach((function(r,a){var l=n[r];if(l)o.push(l);else{var c,s=t[r](),u=fetch(i.p+""+{694:{742:"00a91b4aca741d23d3a7"}}[e][r]+".module.wasm");c=s&&"function"==typeof s.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(u),s]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(u,s):u.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,s)})),o.push(n[r]=c.then((function(e){return i.w[r]=(e.instance||e).exports})))}}))},i(540);