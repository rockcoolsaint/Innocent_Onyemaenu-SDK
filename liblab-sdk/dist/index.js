function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("isomorphic-unfetch"));function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},o.apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}var i,u=/*#__PURE__*/function(){function t(t){this.authorization=void 0,this.baseUrl=void 0,this.authorization=t.authorization,this.baseUrl="https://the-one-api.dev/v2/"}return t.prototype.request=function(t,r){var n=""+this.baseUrl+t,i=o({},r,{headers:{"Content-Type":"application/json",Authorization:this.authorization}});return e.default(n,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},t}(),s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.getMovies=function(){return this.request("/movie")},o.getMovieById=function(t){return this.request("/movie/"+t)},o.getMovieQuotes=function(t){return this.request("/movie/"+t+"/quote")},e}(u),p=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e}(u);i=p,[s].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(i.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e))})}),module.exports=p;
