(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(15),o=n.n(i),r=(n(23),n(2)),s=n(3),l=n(5),u=n(4),d=n(6),v=n(16),h=n.n(v),f=function(e){var t=e.advice,n=e.mounted;if(!t)return c.a.createElement("div",null);var a={opacity:n?[1,0]:[0,1],delay:function(e,t){return 15*t}};return c.a.createElement("div",{className:"advice-text"},c.a.createElement(h.a,a,t.map(function(e,t){return c.a.createElement("span",{key:t},e)})))},m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleMouseEnter=function(){n.setState({face:":D"})},n.handleMouseLeave=function(){n.setState({face:":)"})},n.onClick=function(){n.setState({face:"xD"}),n.props.onClick()},n.state={face:":-)"},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("button",{className:"advice-get",onClick:this.onClick,onMouseUp:this.handleMouseEnter,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},this.state.face)}}]),t}(c.a.Component),p=n(17),k=n.n(p),E=function(){return k.a.get("https://api.adviceslip.com/advice")},b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){n.getAdvice()},n.splitAdvice=function(e){n.setState({advice:""}),n.setState({advice:e.split("")})},n.getAdvice=function(){E().then(function(e){n.splitAdvice(e.data.slip.advice)}).catch(function(e){return console.log(e)})},n.state={advice:null},n.getAdvice(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.advice;return c.a.createElement("div",{className:"flex"},c.a.createElement(f,{advice:e}),c.a.createElement(m,{onClick:this.handleClick}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.53cf3a9a.chunk.js.map