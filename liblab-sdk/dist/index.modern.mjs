import t from"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},e.apply(this,arguments)}class r{constructor(t){this.authorization=void 0,this.baseUrl=void 0,this.authorization=t.authorization,this.baseUrl="https://the-one-api.dev/v2/"}request(r,o){const s=`${this.baseUrl}${r}`,i=e({},o,{headers:{"Content-Type":"application/json",Authorization:this.authorization}});return t(s,i).then(t=>{if(t.ok)return t.json();throw new Error(t.statusText)})}}class o extends r{}var s;s=o,[class extends r{getMovies(){return this.request("/movie")}}].forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(e=>{Object.defineProperty(s.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e))})});export{o as default};