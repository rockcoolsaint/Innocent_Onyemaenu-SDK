import t from"isomorphic-unfetch";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},o.apply(this,arguments)}function r(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,e(t,o)}function e(t,o){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},e(t,o)}var n,i=/*#__PURE__*/function(){function r(t){this.authorization=void 0,this.baseUrl=void 0,this.authorization=t.authorization,this.baseUrl="https://the-one-api.dev/v2/"}return r.prototype.request=function(r,e){var n=""+this.baseUrl+r,i=o({},e,{headers:{"Content-Type":"application/json",Authorization:this.authorization}});return t(n,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},r}(),p=/*#__PURE__*/function(t){function o(){return t.apply(this,arguments)||this}return r(o,t),o.prototype.getMovies=function(){return this.request("/movie")},o}(i),u=/*#__PURE__*/function(t){function o(){return t.apply(this,arguments)||this}return r(o,t),o}(i);n=u,[p].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(o){Object.defineProperty(n.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o))})});export{u as default};