!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.KEYS={upOne:"w",downOne:"s",upTwo:"ArrowUp",downTwo:"ArrowDown",spaceBar:" ",n:"n",N:"N"},e.CONFIG={paddleWidth:8,paddleHeight:64,boardGap:10,paddleVel:6,paddleAccel:.5,maxScore:10,ballRadius:8,spinConst:.0035,spinDecay:.965,ballSpeedIncrease:.35}},function(t,e,n){t.exports=n.p+"assets/fonts/slkscr-webfont.eot"},function(t,e,n){"use strict";n(3);var i=new(function(t){return t&&t.__esModule?t:{default:t}}(n(10)).default)("game",768,384);!function t(){i.render(),requestAnimationFrame(t)}()},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]);n(9)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(5)()).push([t.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url("+n(1)+");\n  src: url("+n(1)+"?#iefix)\n      format('embedded-opentype'),\n    url("+n(6)+") format('woff'),\n    url("+n(7)+") format('truetype'),\n    url("+n(8)+"#silkscreennormal) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n}\n\nh1 {\n  font-size: 2.5rem;\n  text-align: center;\n}\n\nh2,\np {\n  margin-bottom: 1rem;\n  text-align: center;\n}\n",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(i[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(t,e,n){t.exports=n.p+"assets/fonts/slkscr-webfont.woff"},function(t,e,n){t.exports=n.p+"assets/fonts/slkscr-webfont.ttf"},function(t,e,n){t.exports=n.p+"assets/fonts/slkscr-webfont.svg"},function(t,e){var n={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},r=i(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),s=i(function(){return document.head||document.getElementsByTagName("head")[0]}),o=null,l=0,a=[];function h(t,e){for(var i=0;i<t.length;i++){var r=t[i],s=n[r.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](r.parts[o]);for(;o<r.parts.length;o++)s.parts.push(p(r.parts[o],e))}else{var l=[];for(o=0;o<r.parts.length;o++)l.push(p(r.parts[o],e));n[r.id]={id:r.id,refs:1,parts:l}}}}function u(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],s=r[0],o={css:r[1],media:r[2],sourceMap:r[3]};n[s]?n[s].parts.push(o):e.push(n[s]={id:s,parts:[o]})}return e}function d(t,e){var n=s(),i=a[a.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),a.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function c(t){t.parentNode.removeChild(t);var e=a.indexOf(t);e>=0&&a.splice(e,1)}function f(t){var e=document.createElement("style");return e.type="text/css",d(t,e),e}function p(t,e){var n,i,r;if(e.singleton){var s=l++;n=o||(o=f(e)),i=y.bind(null,n,s,!1),r=y.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return e.rel="stylesheet",d(t,e),e}(e),i=function(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}.bind(null,n),r=function(){c(n),n.href&&URL.revokeObjectURL(n.href)}):(n=f(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){c(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(e=e||{}).singleton&&(e.singleton=r()),void 0===e.insertAt&&(e.insertAt="bottom");var i=u(t);return h(i,e),function(t){for(var r=[],s=0;s<i.length;s++){var o=i[s];(l=n[o.id]).refs--,r.push(l)}t&&h(u(t),e);for(s=0;s<r.length;s++){var l;if(0===(l=r[s]).refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete n[l.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(0),s=h(n(11)),o=h(n(12)),l=h(n(13)),a=h(n(14));function h(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(e,n,i){var h=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.width=n,this.height=i,this.gameElement=document.getElementById(this.element),this.board=new s.default(this.width,this.height),this.paddleWidth=r.CONFIG.paddleWidth,this.paddleHeight=r.CONFIG.paddleHeight,this.boardGap=r.CONFIG.boardGap,this.player1=new o.default(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,r.KEYS.upOne,r.KEYS.downOne,"player1"),this.player2=new o.default(this.height,this.paddleWidth,this.paddleHeight,this.width-this.boardGap-this.paddleWidth,(this.height-this.paddleHeight)/2,r.KEYS.upTwo,r.KEYS.downTwo,"player2"),this.ball=new l.default(r.CONFIG.ballRadius,this.width,this.height),this.score1=new a.default(this.width/2-50,30,30),this.score2=new a.default(this.width/2+25,30,30),document.addEventListener("keydown",function(t){t.key===r.KEYS.spaceBar?h.pause=!h.pause:t.key!==r.KEYS.n&&t.key!==r.KEYS.N||(h.newGame=!0)}),this.gameElement.insertAdjacentElement("beforebegin",document.createElement("h2"))}return i(t,[{key:"render",value:function(){if(!this.pause)if(this.player1.score!==r.CONFIG.maxScore&&this.player2.score!==r.CONFIG.maxScore){this.newGame=!1,this.gameElement.innerHTML="",this.h1=document.querySelector("h1"),this.h1.innerHTML="BACKSPIN PONG",this.h2=document.querySelector("h2"),this.h2.innerHTML="Press 'space' to pause the game, first player to "+r.CONFIG.maxScore+" wins!";var t=document.createElementNS(r.SVG_NS,"svg");t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewBox","0 0 "+this.width+" "+this.height),this.gameElement.appendChild(t),this.board.render(t),this.player1.render(t),this.player2.render(t),this.ball.render(t,this.player1,this.player2),this.score1.render(t,this.player1.score),this.score2.render(t,this.player2.score)}else this.gameEnd()}},{key:"gameEnd",value:function(){this.newGame&&(this.player1.score=0,this.player2.score=0),this.h1.innerHTML="GAME OVER",this.h2.innerHTML="",this.player1.score>this.player2.score?this.gameElement.innerHTML="<p>Player 1 wins! <br /> Press 'n' to begin a new game.</p>":this.gameElement.innerHTML="<p>Player 2 wins! <br /> Press 'n' to begin a new game.</p>"}}]),t}();e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(0);var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=e,this.height=n}return i(t,[{key:"render",value:function(t){var e=document.createElementNS(r.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"stroke","#353535");var n=document.createElementNS(r.SVG_NS,"line");n.setAttributeNS(null,"x1",this.width/2),n.setAttributeNS(null,"y1",0),n.setAttributeNS(null,"x2",this.width/2),n.setAttributeNS(null,"y2",this.height),n.setAttributeNS(null,"stroke","white"),n.setAttributeNS(null,"stroke-dasharray","10, 7"),n.setAttributeNS(null,"stroke-width","2");var i=document.createElementNS(r.SVG_NS,"text");i.setAttributeNS(null,"font-family","Silkscreen Web"),i.setAttributeNS(null,"font-size",12),i.setAttributeNS(null,"fill","white"),i.setAttributeNS(null,"x",90),i.setAttributeNS(null,"y",this.height-5),i.textContent="player 1 - up: '"+r.KEYS.upOne+"', down: '"+r.KEYS.downOne+"'";var s=document.createElementNS(r.SVG_NS,"text");s.setAttributeNS(null,"font-family","Silkscreen Web"),s.setAttributeNS(null,"font-size",12),s.setAttributeNS(null,"fill","white"),s.setAttributeNS(null,"x",this.width/2+30),s.setAttributeNS(null,"y",this.height-5),s.textContent="player 2 - up: '"+r.KEYS.upTwo+"', down: '"+r.KEYS.downTwo+"'",t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(s)}}]),t}();e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(0);var s=function(){function t(e,n,i,s,o,l,a,h){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.boardHeight=e,this.width=n,this.height=i,this.x=s,this.y=o,this.up=l,this.down=a,this.currentSpeed=r.CONFIG.paddleVel,this.score=0,this.player=h,this.keyState={},document.addEventListener("keydown",function(t){u.keyState[t.key||t.which]=!0},!0),document.addEventListener("keyup",function(t){u.keyState[t.key||t.which]=!1},!0)}return i(t,[{key:"render",value:function(t){this.pastPos=this.y,this.moveDetect();var e=document.createElementNS(r.SVG_NS,"rect");e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"stroke","white"),e.setAttributeNS(null,"fill","white"),t.appendChild(e)}},{key:"moveDetect",value:function(){this.keyState[this.up]&&(this.currentSpeed+=r.CONFIG.paddleAccel,this.y=Math.max(this.y-this.currentSpeed,this.width)),this.keyState[this.down]&&(this.currentSpeed+=r.CONFIG.paddleAccel,this.y=Math.min(this.y+this.currentSpeed,this.boardHeight-this.height-this.width)),this.keyState[this.up]==this.keyState[this.down]&&(this.currentSpeed=r.CONFIG.paddleVel),this.speedDelta=this.pastPos-this.y}},{key:"coordinates",value:function(t,e,n,i){return[t,t+n,e,e+i]}}]),t}();e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw s}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(0);var o=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.radius=e,this.boardWidth=n,this.boardHeight=i,this.reset(),this.ping=new Audio("public/sounds/pong-01.wav")}return r(t,[{key:"render",value:function(t,e,n){this.x+=this.vx,this.y+=this.vy,this.checkWallCollision(),(this.hitTop||this.hitBottom)&&(this.vy=-this.vy),this.paddleCollision(e,n),this.rightPaddleCollided?this.backspin(n,t):this.leftPaddleCollided&&this.backspin(e,t),this.hotOffThePaddle=!1,this.rightGoal=this.x+this.radius>=this.boardWidth,this.leftGoal=this.x-this.radius<=0,this.rightGoal?this.goal(e):this.leftGoal&&this.goal(n),0===this.vx&&(this.vx=Math.floor(4*Math.random()));var i=document.createElementNS(s.SVG_NS,"circle");i.setAttributeNS(null,"r",this.radius),i.setAttributeNS(null,"cx",this.x),i.setAttributeNS(null,"cy",this.y),i.setAttributeNS(null,"stroke","white"),i.setAttributeNS(null,"fill","white"),i.setAttributeNS(null,"id","ball"),t.appendChild(i)}},{key:"reset",value:function(){for(this.rightGoal?this.plusOrMinus=1:this.leftGoal?this.plusOrMinus=-1:this.plusOrMinus=Math.random()<.51?-1:1,this.rightPaddleCollided=!1,this.leftPaddleCollided=!1,this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(4.5*Math.random());this.vx=this.plusOrMinus*(6-Math.abs(this.vy))}},{key:"goal",value:function(t){t.score++,this.reset()}},{key:"checkWallCollision",value:function(){this.hitTop=this.y-this.radius<=0,this.hitBottom=this.y+this.radius>=this.boardHeight}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var n=e.coordinates(e.x,e.y,e.width,e.height),r=i(n,4),o=r[0],l=r[1],a=r[2],h=r[3];this.x+this.radius>=o&&this.x+this.radius<=l&&this.y>=a&&this.y<=h?(this.vx=-this.vx-s.CONFIG.ballSpeedIncrease,this.vy>0?this.vy+=s.CONFIG.ballSpeedIncrease:this.vy<0&&(this.vy-=s.CONFIG.ballSpeedIncrease),this.ping.play(),this.rightPaddleCollided=!0,this.leftPaddleCollided=!1,this.hotOffThePaddle=!0):this.vx=this.vx}else{var u=t.coordinates(t.x,t.y,t.width,t.height),d=i(u,4),c=d[0],f=d[1],p=d[2],b=d[3];this.x-this.radius<=f&&this.x-this.radius>=c&&this.y+this.radius>=p&&this.y-this.radius<=b?(this.vx=-this.vx+s.CONFIG.ballSpeedIncrease,this.vy>0?this.vy+=s.CONFIG.ballSpeedIncrease:this.vy<0&&(this.vy-=s.CONFIG.ballSpeedIncrease),this.ping.play(),this.leftPaddleCollided=!0,this.rightPaddleCollided=!1,this.hotOffThePaddle=!0):this.vx=this.vx}}},{key:"backspin",value:function(t,e){this.hotOffThePaddle&&(this.ballSpinConstant=s.CONFIG.spinConst*t.speedDelta,this.previousSpin=this.ballSpinConstant,this.hotOffThePaddle=!this.hotOffThePaddle,this.bounceDecay=2);var n=this.vy*this.ballSpinConstant,i=-this.vx*this.ballSpinConstant;"player2"===t.player?(this.vx+=n,this.vy+=i):(this.vx-=n,this.vy-=i),this.ballSpinConstant>1e-4?this.ballSpinConstant*=s.CONFIG.spinDecay:this.ballSpinConstant<-1e-4?this.ballSpinConstant*=s.CONFIG.spinDecay:this.ballSpinConstant=0;var r=document.createElementNS(s.SVG_NS,"text");r.setAttributeNS(null,"font-family","Silkscreen Web"),r.setAttributeNS(null,"font-size",this.size),r.setAttributeNS(null,"fill","white"),this.rightPaddleCollided?r.setAttributeNS(null,"x",.78*this.boardWidth):this.leftPaddleCollided&&r.setAttributeNS(null,"x",.1*this.boardWidth),r.setAttributeNS(null,"y",15),e.appendChild(r),0!==this.ballSpinConstant?(r.textContent="backspin!",(this.hitTop||this.hitBottom)&&(this.ballSpinConstant=this.bounceDecay*this.previousSpin,this.bounceDecay*=.8),this.bounceDecay<1.2&&(this.ballSpinConstant=0)):r.textContent=""}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(0);var s=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.size=i}return i(t,[{key:"render",value:function(t,e){var n=document.createElementNS(r.SVG_NS,"text");n.setAttributeNS(null,"font-family","Silkscreen Web"),n.setAttributeNS(null,"font-size",this.size),n.setAttributeNS(null,"fill","white"),n.setAttributeNS(null,"x",this.x),n.setAttributeNS(null,"y",this.y),t.appendChild(n),n.textContent=e}}]),t}();e.default=s}]);