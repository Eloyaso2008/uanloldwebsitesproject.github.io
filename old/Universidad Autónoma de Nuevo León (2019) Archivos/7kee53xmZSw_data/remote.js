var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;var Gqa=function(a,b){return g.Xb(a,b)},c6=function(a,b,c){a.l.set(b,c)},d6=function(a){c6(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.D)()).toString(36));
return a},e6=function(a,b,c){g.La(c)||(c=[String(c)]);
g.Ym(a.l,b,c)},Hqa=function(a,b){var c=[];
g.$i(b,function(d){try{var e=g.bo.prototype.i.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.Da(e)?g.ao(e)&&c.push(d):c.push(d)},a);
return c},Iqa=function(a,b){var c=Hqa(a,b);
(0,g.z)(c,function(d){g.bo.prototype.remove.call(this,d)},a)},f6=function(a){if(a.hd){if(a.hd.locationOverrideToken)return{locationOverrideToken:a.hd.locationOverrideToken};
if(null!=a.hd.latitudeE7&&null!=a.hd.longitudeE7)return{latitudeE7:a.hd.latitudeE7,longitudeE7:a.hd.longitudeE7}}return null},Jqa=function(a,b){g.bb(a,b)||a.push(b)},g6=function(a){var b=0,c;
for(c in a)b++;return b},h6=function(a,b){var c=b instanceof g.Ac?b:g.Fc(b,/^data:image\//i.test(b));
a.src=g.Bc(c)},i6=function(){},Kqa=function(a){try{return g.u.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Lqa=function(a){if(a.Ic&&"function"==typeof a.Ic)return a.Ic();
if(g.Ea(a))return a.split("");if(g.Ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Tb(a)},Mqa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ma(a)||g.Ea(a))(0,g.z)(a,b,void 0);else{if(a.fe&&"function"==typeof a.fe)var c=a.fe();else if(a.Ic&&"function"==typeof a.Ic)c=void 0;else if(g.Ma(a)||g.Ea(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Ub(a);d=Lqa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},Nqa=function(a,b,c,d){var e=new g.Mm(null,void 0);
a&&g.Nm(e,a);b&&g.Om(e,b);c&&g.Pm(e,c);d&&(e.i=d);return e},j6=function(a,b){g.dp[a]=!0;
var c=g.bp();c&&c.publish.apply(c,arguments);g.dp[a]=!1},k6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.l=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Jm;this.g=this.i="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Oqa(this,a.capabilities||""),Pqa(this,a.experiments||""),this.i=a.remoteControllerUrl||"",this.g=a.localChannelEncryptionKey||
"")},Oqa=function(a,b){a.capabilities.clear();
(0,g.Xd)(b.split(","),g.Ra(Gqa,Qqa)).forEach(function(c){a.capabilities.add(c)})},Pqa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},l6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},m6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},n6=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Rqa=function(a){return new l6(a)},o6=function(a){return g.La(a)?(0,g.A)(a,Rqa):[]},p6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},q6=function(a){return g.La(a)?"["+(0,g.A)(a,p6).join(",")+"]":"null"},r6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Sqa=function(a){return(0,g.A)(a,function(b){return{key:b.id,
name:b.name}})},s6=function(a,b){return g.Za(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},t6=function(a,b){return g.Za(a,function(c){return m6(c,b)})},u6=function(a){try{var b=(0,g.it)(),c=(0,g.ht)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},Tqa=function(){var a=(0,g.ht)();
a&&Iqa(a,a.g.rf(!0))},v6=function(){var a=g.kt("yt-remote-connected-devices")||[];
g.sb(a);return a},Uqa=function(a){if(g.cb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.A)(a,function(d,e){return 0==e?d:d.substring(c.length)})},w6=function(a){g.jt("yt-remote-connected-devices",a,86400)},y6=function(){if(x6)return x6;
var a=g.kt("yt-remote-device-id");a||(a=r6(),g.jt("yt-remote-device-id",a,31536E3));for(var b=v6(),c=1,d=a;g.bb(b,d);)c++,d=a+"#"+c;return x6=d},z6=function(){var a=v6(),b=y6();
g.bb(a,b);g.lt()&&g.ub(a,b);a=Uqa(a);if(g.cb(a))try{g.Pr("remote_sid")}catch(c){}else try{g.Or("remote_sid",a.join(","),-1)}catch(c){}},A6=function(){return g.kt("yt-remote-session-browser-channel")},B6=function(){return g.kt("yt-remote-local-screens")||[]},C6=function(){g.jt("yt-remote-lounge-token-expiration",!0,86400)},Vqa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.A)(B6(),function(d){return d.loungeToken}),c=(0,g.A)(a,function(d){return d.loungeToken});
(0,g.ch)(c,function(d){return!g.bb(b,d)})&&C6();
g.jt("yt-remote-local-screens",a,31536E3)},Wqa=function(a,b){g.jt("yt-remote-session-browser-channel",a);
g.jt("yt-remote-session-screen-id",b);var c=v6(),d=y6();g.bb(c,d)||c.push(d);w6(c);z6()},D6=function(a){a||(u6("yt-remote-session-screen-id"),u6("yt-remote-session-video-id"));
z6();a=v6();g.fb(a,y6());w6(a)},F6=function(){if(!E6){var a=g.mo();
a&&(E6=new g.Wn(a))}return E6?!!E6.get("yt-remote-use-staging-server"):!1},G6=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},H6=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},J6=function(a){a.length?I6(a.shift(),function(){J6(a)}):K6()},Xqa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},I6=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},K6=function(){var a=H6();
a&&a(!1,"No cast extension found")},L6=function(){if(Yqa){var a=2,b=H6(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;I6("//web.archive.org/web/20190906113141/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",K6,c)}},Zqa=function(){L6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);J6(["//web.archive.org/web/20190906113141/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20190906113141/https://www.gstatic.com/eureka/clank/cast_sender.js"])},M6=function(a,b,c){g.I.call(this);
this.A=null!=c?(0,g.x)(a,c):a;this.Yc=b;this.u=(0,g.x)(this.fD,this);this.g=!1;this.i=0;this.l=this.Ca=null;this.o=[]},N6=function(a){if(g.u.JSON)try{return g.u.JSON.parse(a)}catch(b){}return Kqa(a)},O6=function(){},P6=function(){},Q6=function(){},S6=function(a){return(a=R6(a))?new ActiveXObject(a):new XMLHttpRequest},R6=function(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i},T6=function(a,b,c,d){this.g=a;
this.l=b;this.C=c;this.A=d||1;this.o=45E3;this.ca=new g.UY(this);this.i=new g.el;this.i.setInterval(250)},V6=function(a,b,c){a.ai=1;
a.Xf=d6(b.clone());a.wh=c;a.u=!0;U6(a,null)},W6=function(a,b,c,d,e){a.ai=1;
a.Xf=d6(b.clone());a.wh=null;a.u=c;e&&(a.hA=!1);U6(a,d)},U6=function(a,b){a.Ei=(0,g.D)();
X6(a);a.Eg=a.Xf.clone();e6(a.Eg,"t",a.A);a.Zk=0;a.uc=a.g.Mp(a.g.Lk()?b:null);0<a.tq&&(a.Pn=new g.hl((0,g.x)(a.fB,a,a.uc),a.tq));a.ca.da(a.uc,"readystatechange",a.ZL);var c=a.bh?g.ec(a.bh):{};a.wh?(a.Ao="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.uc.send(a.Eg,a.Ao,a.wh,c)):(a.Ao="GET",a.hA&&!g.Nd&&(c.Connection="close"),a.uc.send(a.Eg,a.Ao,null,c));a.g.Ae(1)},d7=function(a,b,c){for(var d=!0;!a.Pg&&a.Zk<c.length;){var e=$qa(a,c);
if(e==Y6){4==b&&(a.pg=4,Z6(15),d=!1);break}else if(e==$6){a.pg=4;Z6(16);d=!1;break}else a7(a,e)}4==b&&0==c.length&&(a.pg=1,Z6(17),d=!1);a.Be=a.Be&&d;d||(b7(a),c7(a))},$qa=function(a,b){var c=a.Zk,d=b.indexOf("\n",c);
if(-1==d)return Y6;c=Number(b.substring(c,d));if(isNaN(c))return $6;d+=1;if(d+c>b.length)return Y6;var e=b.substr(d,c);a.Zk=d+c;return e},g7=function(a,b){a.Ei=(0,g.D)();
X6(a);var c=b?window.location.hostname:"";a.Eg=a.Xf.clone();c6(a.Eg,"DOMAIN",c);c6(a.Eg,"t",a.A);try{a.Fe=new ActiveXObject("htmlfile")}catch(n){b7(a);a.pg=7;Z6(22);c7(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in e7)k=e7[l];else if(l in f7)k=e7[l]=f7[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
e7[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Uc(g.tc("b/12014412"),d+"</body></html>");a.Fe.open();a.Fe.write(g.Oc(c));a.Fe.close();a.Fe.parentWindow.m=(0,g.x)(a.qL,a);a.Fe.parentWindow.d=(0,g.x)(a.pz,a,!0);a.Fe.parentWindow.rpcClose=(0,g.x)(a.pz,a,!1);c=a.Fe.createElement("DIV");a.Fe.parentWindow.document.body.appendChild(c);d=g.Ec(a.Eg.toString());d=g.ad(g.Cc(d));d=g.Uc(g.tc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Vc(c,d);a.g.Ae(1)},X6=function(a){a.ot=(0,g.D)()+a.o;
h7(a,a.o)},h7=function(a,b){if(null!=a.Ti)throw Error("WatchDog timer not null");
a.Ti=i7((0,g.x)(a.zL,a),b)},j7=function(a){a.Ti&&(g.u.clearTimeout(a.Ti),a.Ti=null)},c7=function(a){a.g.lw()||a.Pg||a.g.Fn(a)},b7=function(a){j7(a);
g.Di(a.Pn);a.Pn=null;a.i.stop();g.WY(a.ca);if(a.uc){var b=a.uc;a.uc=null;b.abort();b.dispose()}a.Fe&&(a.Fe=null)},a7=function(a,b){try{a.g.jz(a,b),a.g.Ae(4)}catch(c){}},l7=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;k7(a,b,function(k){k?c(!0):g.u.setTimeout(function(){l7(a,b,c,d,f)},f)})}},k7=function(a,b,c){var d=new Image;
d.onload=function(){try{m7(d),c(!0)}catch(e){}};
d.onerror=function(){try{m7(d),c(!1)}catch(e){}};
d.onabort=function(){try{m7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{m7(d),c(!1)}catch(e){}};
g.u.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
h6(d,a)},m7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},n7=function(a){this.g=a;
this.i=new O6},ara=function(a){var b=o7(a.g,a.gj,"/mail/images/cleardot.gif");
d6(b);l7(b.toString(),5E3,(0,g.x)(a.kC,a),3,2E3);a.Ae(1)},q7=function(a){var b=a.g.F;
if(null!=b)Z6(5),b?(Z6(11),p7(a.g,a,!1)):(Z6(12),p7(a.g,a,!0));else if(a.Id=new T6(a,void 0,void 0,void 0),a.Id.bh=a.qq,b=a.g,b=o7(b,b.Lk()?a.Jj:null,a.rq),Z6(5),!g.Ld||g.od(10))e6(b,"TYPE","xmlhttp"),W6(a.Id,b,!1,a.Jj,!1);else{e6(b,"TYPE","html");var c=a.Id;a=!!a.Jj;c.ai=3;c.Xf=d6(b.clone());g7(c,a)}},r7=function(a){g.uk.call(this);
this.headers=new g.Jm;this.N=a||null;this.i=!1;this.S=this.g=null;this.Y=this.D="";this.u=0;this.l="";this.o=this.ba=this.C=this.R=!1;this.A=0;this.F=null;this.X="";this.I=this.T=!1},bra=function(a){return g.Ld&&g.nd(9)&&g.Ga(a.timeout)&&g.Da(a.ontimeout)},cra=function(a){return"content-type"==a.toLowerCase()},era=function(a,b){a.i=!1;
a.g&&(a.o=!0,a.g.abort(),a.o=!1);a.l=b;a.u=5;dra(a);s7(a)},dra=function(a){a.R||(a.R=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},gra=function(a){if(a.i&&"undefined"!=typeof g.$Y)if(a.S[1]&&4==t7(a)&&2==a.getStatus())u7(a,"Local request error detected and ignored");
else if(a.C&&4==t7(a))g.fl(a.nw,0,a);else if(a.dispatchEvent("readystatechange"),4==t7(a)){u7(a,"Request complete");a.i=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.xf(1,String(a.D));if(!f&&g.u.self&&g.u.self.location){var k=g.u.self.location.protocol;f=k.substr(0,k.length-1)}e=!fra.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.u=6;try{var l=2<t7(a)?a.g.statusText:""}catch(m){l=""}a.l=l+" ["+a.getStatus()+"]";dra(a)}}finally{s7(a)}}},s7=function(a,b){if(a.g){hra(a);
var c=a.g,d=a.S[0]?g.Ia:null;a.g=null;a.S=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},hra=function(a){a.g&&a.I&&(a.g.ontimeout=null);
a.F&&(g.u.clearTimeout(a.F),a.F=null)},t7=function(a){return a.g?a.g.readyState:0},v7=function(a){try{return a.g?a.g.responseText:""}catch(b){return""}},u7=function(a,b){return b+" ["+a.Y+" "+a.D+" "+a.getStatus()+"]"},w7=function(a,b,c){this.g=1;
this.i=[];this.o=[];this.u=new O6;this.D=a||null;this.F=null!=b?b:null;this.A=c||!1},ira=function(a,b){this.g=a;
this.map=b;this.context=null},jra=function(a){g.Vj.call(this,"statevent",a)},kra=function(a,b){g.Vj.call(this,"timingevent",a);
this.size=b},lra=function(a){g.Vj.call(this,"serverreachability",a)},ora=function(a){mra(a);
if(3==a.g){var b=a.qk++,c=a.fm.clone();c6(c,"SID",a.l);c6(c,"RID",b);c6(c,"TYPE","terminate");x7(a,c);b=new T6(a,a.l,b,void 0);b.ai=2;b.Xf=d6(c.clone());h6(new Image,b.Xf.toString());b.Ei=(0,g.D)();X6(b)}nra(a)},pra=function(a){a.FC(1,0);
a.fm=o7(a,null,a.oq);y7(a)},mra=function(a){a.eg&&(a.eg.abort(),a.eg=null);
a.Ob&&(a.Ob.cancel(),a.Ob=null);a.sf&&(g.u.clearTimeout(a.sf),a.sf=null);z7(a);a.Dd&&(a.Dd.cancel(),a.Dd=null);a.ng&&(g.u.clearTimeout(a.ng),a.ng=null)},qra=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.i.push(new ira(a.FH++,b));2!=a.g&&3!=a.g||y7(a)},y7=function(a){a.Dd||a.ng||(a.ng=i7((0,g.x)(a.oz,a),0),a.Th=0)},sra=function(a,b){if(1==a.g){if(!b){a.qk=Math.floor(1E5*Math.random());
var c=a.qk++,d=new T6(a,"",c,void 0);d.bh=null;var e=A7(a),f=a.fm.clone();c6(f,"RID",c);c6(f,"CVER","1");x7(a,f);V6(d,f,e);a.Dd=d;a.g=2}}else 3==a.g&&(b?rra(a,b):0==a.i.length||a.Dd||rra(a))},rra=function(a,b){if(b)if(6<a.Qg){a.i=a.o.concat(a.i);
a.o.length=0;var c=a.qk-1;var d=A7(a)}else c=b.C,d=b.wh;else c=a.qk++,d=A7(a);var e=a.fm.clone();c6(e,"SID",a.l);c6(e,"RID",c);c6(e,"AID",a.mi);x7(a,e);c=new T6(a,a.l,c,a.Th+1);c.bh=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Dd=c;V6(c,e,d)},x7=function(a,b){if(a.Vc){var c=a.Vc.Nv();
c&&g.Nb(c,function(d,e){c6(b,e,d)})}},A7=function(a){var b=Math.min(a.i.length,1E3),c=["count="+b];
if(6<a.Qg&&0<b){var d=a.i[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.i[e].g,k=a.i[e].map;f=6>=a.Qg?e:f-d;try{g.Nb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.o=a.o.concat(a.i.splice(0,b));
return c.join("&")},tra=function(a){a.Ob||a.sf||(a.C=1,a.sf=i7((0,g.x)(a.nz,a),0),a.Nh=0)},B7=function(a){if(a.Ob||a.sf||3<=a.Nh)return!1;
a.C++;a.sf=i7((0,g.x)(a.nz,a),ura(a,a.Nh));a.Nh++;return!0},p7=function(a,b,c){a.xo=c;
a.Ke=b.Df;a.A||pra(a)},z7=function(a){null!=a.Ug&&(g.u.clearTimeout(a.Ug),a.Ug=null)},ura=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},C7=function(a,b){if(2==b||9==b){var c=null;
a.Vc&&(c=null);var d=(0,g.x)(a.EM,a);c||(c=new g.Mm("//web.archive.org/web/20190906113141/https://www.google.com/images/cleardot.gif"),d6(c));k7(c.toString(),1E4,d)}else Z6(2);vra(a,b)},vra=function(a,b){a.g=0;
a.Vc&&a.Vc.Lu(b);nra(a);mra(a)},nra=function(a){a.g=0;
a.Ke=-1;if(a.Vc)if(0==a.o.length&&0==a.i.length)a.Vc.zp();else{g.jb(a.o);var b=g.jb(a.i);a.o.length=0;a.i.length=0;a.Vc.zp(b)}},o7=function(a,b,c){var d=g.Um(c);
if(""!=d.g)b&&g.Om(d,b+"."+d.g),g.Pm(d,d.u);else{var e=window.location;d=Nqa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.tj&&g.Nb(a.tj,function(f,k){c6(d,k,f)});
c6(d,"VER",a.Qg);x7(a,d);return d},i7=function(a,b){if(!g.Na(a))throw Error("Fn must not be null and must be a function");
return g.u.setTimeout(function(){a()},b)},Z6=function(a){D7.dispatchEvent(new jra(D7,a))},wra=function(){},xra=function(){this.g=[];
this.i=[]},yra=function(a,b){this.action=a;
this.params=b||{}},E7=function(a,b){g.I.call(this);
this.g=new g.K(this.hL,0,this);g.J(this,this.g);this.Yc=5E3;this.i=0;if(g.Na(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Na(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.l=a},F7=function(a,b,c){this.H=a;
this.A=b;this.l=new g.Vn;this.i=new E7(this.jM,this);this.g=null;this.ib=!1;this.u=null;this.F="";this.D=this.o=0;this.C=[];this.I=c||!1},zra=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.xo,sessionId:a.g.l,arrayId:a.g.mi}},Ara=function(a,b){a.D=b||0;
a.i.stop();a.g&&(3==a.g.g&&sra(a.g),ora(a.g));a.D=0},G7=function(a){return!!a.g&&3==a.g.g},Bra=function(a,b){(a.A.loungeIdToken=b)||a.i.stop()},H7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.i=!0;a=a||document.location.href;var b=Number(g.xf(4,a))||"";b&&(this.port=":"+b);this.domain=g.yf(a)||"";a=g.Lb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Kb(a,"10.0")&&(this.i=!1))},I7=function(a,b){var c=a.g;
if(g.Da(void 0)?0:a.i)c="https://"+a.domain+a.port+a.g;return g.Hf(c+b,{})},J7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.o,d,!0),onError:g.Ra(a.l,e),Td:g.Ra(a.u,e)};c&&(a.ub=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Wp(b,a)},Fra=function(){var a=Cra;
Dra();K7.push(a);Era(K7)},L7=function(a,b){Dra();
var c=K7,d=Gra(a,String(b));g.cb(c)?Hra(d):(Era(c),(0,g.z)(c,function(e){e(d)}))},Dra=function(){K7||(K7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Ha("yt.mdx.remote.debug.handlers_",K7,void 0))},Hra=function(a){var b=(M7+1)%50;
M7=b;N7[b]=a;O7||(O7=49==b)},Era=function(a){var b=N7;
if(b[0]){var c=M7,d=O7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.z)(a,function(f){f(e)})}while(d!=c);
N7=Array(50);M7=-1;O7=!1}},Gra=function(a,b){var c=((0,g.D)()-Ira)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},P7=function(a){g.O.call(this);
this.C=a;this.g=[]},Jra=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},Kra=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Xd)(a.g,function(f){return!!s6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=Jra(a,b[d])||c;return c},Lra=function(a,b){var c=a.g.length;
a.g=(0,g.Xd)(a.g,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.g.length<c},Q7=function(a,b,c,d){g.O.call(this);
this.A=a;this.u=b;this.l=c;this.o=d;this.i=0;this.g=null;this.Ca=NaN},S7=function(a){P7.call(this,"LocalScreenService");
this.l=a;this.i=NaN;R7(this);this.info("Initializing with "+q6(this.g))},Mra=function(a){if(a.g.length){var b=(0,g.A)(a.g,function(d){return d.id}),c=I7(a.l,"/pairing/get_lounge_token_batch");
J7(a.l,c,{screen_ids:b.join(",")},(0,g.x)(a.pD,a),(0,g.x)(a.oD,a))}},R7=function(a){var b=o6(B6());
b=(0,g.Xd)(b,function(c){return!c.uuid});
return Kra(a,b)},T7=function(a,b){Vqa((0,g.A)(a.g,n6));
b&&C6()},V7=function(a,b){g.O.call(this);
this.A=b;var c=g.kt("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.A(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.bb(c,l)}this.g=d;this.u=a;this.l=this.o=NaN;this.i=null;U7("Initialized with "+g.vm(this.g))},Nra=function(a,b,c){var d=I7(a.u,"/pairing/get_screen_availability");
J7(a.u,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},W7=function(a,b){a:if(g6(b)!=g6(a.g))var c=!1;
else{c=g.Ub(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(U7("Updated online screens: "+g.vm(a.g)),a.g=b,a.O("screenChange"));Ora(a)},X7=function(a){isNaN(a.l)||g.ap(a.l);
a.l=g.Zo((0,g.x)(a.Bs,a),0<a.o&&a.o<(0,g.D)()?2E4:1E4)},U7=function(a){L7("OnlineScreenService",a)},Pra=function(a){var b={};
(0,g.z)(a.A(),function(c){c.token?b[c.token]=c.id:this.Ib("Requesting availability of screen w/o lounge token.")});
return b},Ora=function(a){a=g.Ub(g.Ob(a.g,function(b){return b}));
g.sb(a);a.length?g.jt("yt-remote-online-screen-ids",a.join(","),60):u6("yt-remote-online-screen-ids")},Y7=function(a){P7.call(this,"ScreenService");
this.A=a;this.i=this.l=null;this.o=[];this.u={};Qra(this)},Sra=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.u[b]);var k=a.Qd();if(k=(c?t6(k,c):null)||t6(k,b)){k.uuid=b;var l=Z7(a,k);Nra(a.i,l,function(m){e(m?l:null)})}else c?Rra(a,c,(0,g.x)(function(m){var n=Z7(this,new l6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));Nra(this.i,n,function(q){e(q?n:null)})},a),f):e(null)},Tra=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},Rra=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={ub:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Wp(I7(a.A,"/pairing/get_lounge_token_batch"),e)},Ura=function(a){a.g=a.l.Qd();
var b=a.u,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+q6(a.g))},Qra=function(a){$7(a);
a.l=new S7(a.A);a.l.subscribe("screenChange",(0,g.x)(a.xD,a));Ura(a);a.o=o6(g.kt("yt-remote-automatic-screen-cache")||[]);$7(a);a.info("Initializing automatic screens: "+q6(a.o));a.i=new V7(a.A,(0,g.x)(a.Qd,a,!0));a.i.subscribe("screenChange",(0,g.x)(function(){this.O("onlineScreenChange")},a))},Z7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=t6(a.o,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.o.push(b),g.jt("yt-remote-automatic-screen-cache",(0,g.A)(a.o,n6)));$7(a);a.u[b.uuid]=b.id;g.jt("yt-remote-device-id-map",a.u,31536E3);return b},$7=function(a){a.u=g.kt("yt-remote-device-id-map")||{}},a8=function(a,b,c){g.O.call(this);
this.S=c;this.F=a;this.i=b;this.l=null},b8=function(a,b){L7(a.S,b)},c8=function(a,b){a8.call(this,a,b,"CastSession");
this.g=null;this.o=0;this.A=(0,g.x)(this.lN,this);this.u=(0,g.x)(this.KL,this);this.o=g.Zo((0,g.x)(function(){Vra(this,null)},this),12E4)},Wra=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.vm(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ia,(0,g.x)(function(){b8(this,"Failed to send message: getMdxSessionStatus.")},a)):b8(a,"Sending yt message without session: "+g.vm(b))},Vra=function(a,b){g.ap(a.o);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.l||a.l.id!=b){var c=(0,g.x)(a.Hn,a),d=(0,g.x)(a.Sd,a);a.gw(b,c,d,5)}}else a.Sd(Error("Waiting for session status timed out."))},d8=function(a,b,c){a8.call(this,a,b,"DialSession");
this.o=this.D=null;this.H="";this.N=c;this.u=null;this.C=g.Ia;this.A=NaN;this.I=(0,g.x)(this.oN,this);this.g=g.Ia},Xra=function(a){a.g=a.F.kB(a.H,a.i.label,a.i.friendlyName,(0,g.x)(function(b){this.g=g.Ia;
this.Hn(b)},a),(0,g.x)(function(b){this.g=g.Ia;
this.Sd(b)},a))},Yra=function(a){var b={};
b.pairingCode=a.H;b.theme=a.N;if(a.u){var c=a.u.currentTime||0;b.v=a.u.videoId;b.t=c}F6()&&(b.env_useStageMdx=1);return g.Ff(b)},e8=function(a,b){a8.call(this,a,b,"ManualSession");
this.g=g.Zo((0,g.x)(this.ni,this,null),150)},f8=function(a,b,c,d){g.O.call(this);
this.i=a;this.C=b||"233637DE";this.A=c||"cl";this.D=d||!1;this.g=null;this.u=!1;this.l=[];this.o=(0,g.x)(this.pK,this)},Zra=function(a,b){return b?g.Za(a.l,function(c){return m6(b,c.label)},a):null},g8=function(a){L7("Controller",a)},Cra=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},h8=function(a){return a.u||!!a.l.length||!!a.g},i8=function(a,b,c){b!=a.g&&(g.Di(a.g),(a.g=b)?(c?a.O("yt-remote-cast2-receiver-resumed",b.i):a.O("yt-remote-cast2-receiver-selected",
b.i),b.subscribe("sessionScreen",(0,g.x)(a.mz,a,b)),b.l?a.O("yt-remote-cast2-session-change",b.l):c&&a.g.ni(null)):a.O("yt-remote-cast2-session-change",null))},$ra=function(a){var b=a.i.jB(),c=a.g&&a.g.i;
a=(0,g.A)(b,function(d){c&&m6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Zra(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},fsa=function(a,b,c,d,e,f,k){asa()?bsa(b,e,f,k)&&(k8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?csa(a,c):(window.__onGCastApiAvailable=function(l,m){l?csa(a,c):(l8("Failed to load cast API: "+m),m8(!1),k8(!1),u6("yt-remote-cast-available"),u6("yt-remote-cast-receiver"),dsa(),c(!1))},d?g.lp("https://web.archive.org/web/20190906113141/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?Zqa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?K6():(L6(),J6(esa.map(Xqa))))):j8("Cannot initialize because not running Chrome")},dsa=function(){j8("dispose");
var a=n8();a&&a.dispose();g.Ha("yt.mdx.remote.cloudview.instance_",null,void 0);gsa(!1);g.gp(o8);o8.length=0},p8=function(){return!!g.kt("yt-remote-cast-installed")},hsa=function(){var a=g.kt("yt-remote-cast-receiver");
return a?a.friendlyName:null},isa=function(){j8("clearCurrentReceiver");
u6("yt-remote-cast-receiver")},jsa=function(){return p8()?n8()?n8().getCastSession():(l8("getCastSelector: Cast is not initialized."),null):(l8("getCastSelector: Cast API is not installed!"),null)},r8=function(){p8()?n8()?q8()?(j8("Requesting cast selector."),n8().requestSession()):(j8("Wait for cast API to be ready to request the session."),o8.push(g.fp("yt-remote-cast2-api-ready",r8))):l8("requestCastSelector: Cast is not initialized."):l8("requestCastSelector: Cast API is not installed!")},s8=
function(a,b){q8()?n8().setConnectedScreenStatus(a,b):l8("setConnectedScreenStatus called before ready.")},asa=function(){var a=0<=g.Lb.search(/ (CrMo|Chrome|CriOS)\//);
return g.$w||a},ksa=function(a,b){n8().init(a,b)},bsa=function(a,b,c,d){var e=!1;
n8()||(a=new f8(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.jt("yt-remote-cast-available",f);j6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){j8("onReceiverSelected: "+f.friendlyName);
g.jt("yt-remote-cast-receiver",f);j6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){j8("onReceiverResumed: "+f.friendlyName);
g.jt("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){j8("onSessionChange: "+p6(f));
f||u6("yt-remote-cast-receiver");j6("yt-remote-cast2-session-change",f)}),g.Ha("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
j8("cloudview.createSingleton_: "+e);return e},n8=function(){return g.w("yt.mdx.remote.cloudview.instance_")},csa=function(a,b){m8(!0);
k8(!1);ksa(a,function(c){c?(gsa(!0),g.ip("yt-remote-cast2-api-ready")):(l8("Failed to initialize cast API."),m8(!1),u6("yt-remote-cast-available"),u6("yt-remote-cast-receiver"),dsa());b(c)})},j8=function(a){L7("cloudview",a)},l8=function(a){L7("cloudview",a)},m8=function(a){j8("setCastInstalled_ "+a);
g.jt("yt-remote-cast-installed",a)},q8=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},gsa=function(a){j8("setApiReady_ "+a);
g.Ha("yt.mdx.remote.cloudview.apiReady_",a,void 0)},k8=function(a){g.Ha("yt.mdx.remote.cloudview.initializing_",a,void 0)},t8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.A=this.C=0;this.g=null;this.hasNext=this.Le=!1;this.F=this.D=this.i=this.o=0;this.l=NaN;this.u=!1;this.reset(a)},u8=function(a){a.audioTrackId=null;
a.g=null;a.playerState=-1;a.Le=!1;a.hasNext=!1;a.C=0;a.A=(0,g.D)();a.o=0;a.i=0;a.D=0;a.F=0;a.l=NaN;a.u=!1},v8=function(a){return 1==a.playerState?((0,g.D)()-a.A)/1E3:0},w8=function(a,b){a.C=b;
a.A=(0,g.D)()},x8=function(a){switch(a.playerState){case 1:case 1081:return((0,g.D)()-a.A)/1E3+a.C;
case -1E3:return 0}return a.C},y8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&u8(a)},z8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.fc(a.g);b.hasPrevious=a.Le;b.hasNext=a.hasNext;b.playerTime=a.C;b.playerTimeAt=a.A;b.seekableStart=a.o;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.F;b.liveIngestionTime=a.l;return b},B8=function(a,b){g.O.call(this);
this.g=0;this.o=a;this.A=[];this.u=new xra;this.l=this.i=null;this.F=(0,g.x)(this.nI,this);this.C=(0,g.x)(this.uk,this);this.D=(0,g.x)(this.mI,this);this.H=(0,g.x)(this.AI,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.wt,this),lsa(this))):c=3;0!=c&&(b?this.wt(c):g.Zo((0,g.x)(function(){this.wt(c)},this),0));
var d=jsa();d&&A8(this,d);this.subscribe("yt-remote-cast2-session-change",this.H)},C8=function(a){return new t8(a.o.getPlayerContextData())},lsa=function(a){(0,g.z)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.A.push(this.o.subscribe(b,g.Ra(this.mK,b),this))},a)},msa=function(a){(0,g.z)(a.A,function(b){this.o.unsubscribeByKey(b)},a);
a.A.length=0},D8=function(a,b){var c=a.u;
50>c.g.length+c.i.length&&a.u.i.push(b)},F8=function(a,b,c){var d=C8(a);
w8(d,c);-1E3!=d.playerState&&(d.playerState=b);E8(a,d)},G8=function(a,b,c){a.o.sendMessage(b,c)},E8=function(a,b){msa(a);
a.o.setPlayerContextData(z8(b));lsa(a)},A8=function(a,b){a.l&&(a.l.removeUpdateListener(a.F),a.l.removeMediaListener(a.C),a.uk(null));
a.l=b;a.l&&(L7("CP","Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.F),a.l.addMediaListener(a.C),a.l.media.length&&a.uk(a.l.media[0]))},nsa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=C8(a);b.contentId!=d.videoId&&L7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;w8(d,a.i.getEstimatedTime());E8(a,d)}else L7("CP","No cast media video. Ignoring state update.")},H8=function(a,b,c){return(0,g.x)(function(d){this.Ib("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Ib("Retrying "+b+" using MDx browser channel."),G8(this,b,c))},a)},I8=function(a,b,c){g.O.call(this);
this.u=NaN;this.I=!1;this.D=this.C=this.F=this.H=NaN;this.S=[];this.o=this.A=this.l=this.Pa=this.g=null;this.R=a;this.S.push(g.tr(window,"beforeunload",(0,g.x)(this.iD,this)));this.i=[];this.Pa=new t8;this.N=b.id;this.g=osa(this,c);this.g.subscribe("handlerOpened",this.rI,this);this.g.subscribe("handlerClosed",this.oI,this);this.g.subscribe("handlerError",this.pI,this);this.g.subscribe("handlerMessage",this.qI,this);Bra(this.g,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Pa.videoId;
g.lt()&&g.jt("yt-remote-session-video-id",d)},this)},J8=function(a){L7("conn",a)},osa=function(a,b){return new F7(I7(a.R,"/bc"),b)},K8=function(a,b){a.O("proxyStateChange",b)},psa=function(a){a.u=g.Zo((0,g.x)(function(){J8("Connecting timeout");
this.Rh(1)},a),2E4)},L8=function(a){g.ap(a.u);
a.u=NaN},M8=function(a){g.ap(a.H);
a.H=NaN},qsa=function(a){N8(a);
a.F=g.Zo((0,g.x)(function(){O8(this,"getNowPlaying")},a),2E4)},N8=function(a){g.ap(a.F);
a.F=NaN},ssa=function(a,b){b&&(L8(a),M8(a));
b==(G7(a.g)&&isNaN(a.u))?b&&(K8(a,1),O8(a,"getSubtitlesTrack")):b?(a.dw()&&a.Pa.reset(),K8(a,1),O8(a,"getNowPlaying"),rsa(a)):a.Rh(1)},tsa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Pa.videoId&&(g.$b(b.params)?a.Pa.g=null:a.Pa.g=b.params,a.O("remotePlayerChange"))},usa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Pa.listId=b.params.listId||a.Pa.listId;y8(a.Pa,c,d);a.O("remoteQueueChange")},wsa=function(a,b){b.params=b.params||{};
usa(a,b);vsa(a,b);a.O("autoplayDismissed")},vsa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
w8(a.Pa,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Pa.playerState&&(c=-1E3);a.Pa.playerState=c;c=Number(b.params.loadedTime);a.Pa.F=isNaN(c)?0:c;c=Number(b.params.duration);a.Pa.D=isNaN(c)?0:c;c=a.Pa;var d=Number(b.params.liveIngestionTime);c.l=d;c.u=isNaN(d)?!1:!0;c=a.Pa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.o=isNaN(d)?0:d;c.i=isNaN(e)?0:e;1==a.Pa.playerState?qsa(a):N8(a);a.O("remotePlayerChange")},xsa=function(a,b){if(-1E3!=
a.Pa.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Pa.playerState=c;c=parseInt(b.params.currentTime,10);w8(a.Pa,isNaN(c)?0:c);a.O("remotePlayerChange")}},ysa=function(a,b){var c="true"==b.params.muted;
a.Pa.volume=parseInt(b.params.volume,10);a.Pa.muted=c;a.O("remotePlayerChange")},zsa=function(a,b){a.A=b.params.videoId;
a.O("nowAutoplaying",parseInt(b.params.timeout,10))},Asa=function(a,b){var c="true"==b.params.hasNext;
a.Pa.Le="true"==b.params.hasPrevious;a.Pa.hasNext=c;a.O("previousNextChange")},rsa=function(a){g.ap(a.D);
a.D=g.Zo((0,g.x)(a.Rh,a,1),864E5)},O8=function(a,b,c){c?J8("Sending: action="+b+", params="+g.vm(c)):J8("Sending: action="+b);
a.g.sendMessage(b,c)},P8=function(a){P7.call(this,"ScreenServiceProxy");
this.Xc=a;this.i=[];this.i.push(this.Xc.$_s("screenChange",(0,g.x)(this.jN,this)));this.i.push(this.Xc.$_s("onlineScreenChange",(0,g.x)(this.RJ,this)))},Fsa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.Ro("MDX_CONFIG")||b;Tqa();z6();Q8||(Q8=new H7(b?b.loungeApiHost:void 0),F6()&&(Q8.g="/api/loungedev"));R8||(R8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Ha("yt.mdx.remote.deferredProxies_",R8,void 0));Bsa();var c=S8();if(!c){var d=new Y7(Q8);g.Ha("yt.mdx.remote.screenService_",d,void 0);c=S8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);fsa(a,d,function(m){m?T8()&&s8(T8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){j6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Ha("yt.mdx.remote.initialized_",!0,void 0),U8("Initializing: "+g.vm(b)),V8.push(g.fp("yt-remote-cast2-availability-change",function(){j6("yt-remote-receiver-availability-change")})),V8.push(g.fp("yt-remote-cast2-receiver-selected",function(){W8(null);
j6("yt-remote-auto-connect","cast-selector-receiver")})),V8.push(g.fp("yt-remote-cast2-receiver-resumed",function(){j6("yt-remote-receiver-resumed","cast-selector-receiver")})),V8.push(g.fp("yt-remote-cast2-session-change",Csa)),V8.push(g.fp("yt-remote-connection-change",function(m){m?s8(T8(),"YouTube TV"):X8()||(s8(null,null),isa())})),a=Y8(),b.isAuto&&(a.id+="#dial"),g.Np("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),U8(" -- with channel params: "+
g.vm(a)),Dsa(a),c.start(),T8()||Esa())},Hsa=function(){var a=Gsa();
p8()&&g.kt("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Gsa=function(){var a=S8().Xc.$_gos();
var b=Z8();b&&$8()&&(s6(a,b)||a.push(b));return Sqa(a)},a9=function(){var a=Isa();
!a&&p8()&&hsa()&&(a={key:"cast-selector-receiver",name:hsa()});return a},Isa=function(){var a=Gsa(),b=Z8();
b||(b=X8());return g.Za(a,function(c){return b&&m6(b,c.key)?!0:!1})},Z8=function(){var a=T8();
if(!a)return null;var b=S8().Qd();return t6(b,a)},Csa=function(a){U8("remote.onCastSessionChange_: "+p6(a));
if(a){var b=Z8();b&&b.id==a.id?s8(b.id,"YouTube TV"):(b&&b9(),c9(a,1))}else $8()&&b9()},b9=function(){q8()?n8().stopSession():l8("stopSession called before API ready.");
var a=$8();a&&(a.disconnect(1),d9(null))},e9=function(){var a=$8();
return!!a&&3!=a.getProxyState()},U8=function(a){L7("remote",a)},S8=function(){if(!f9){var a=g.w("yt.mdx.remote.screenService_");
f9=a?new P8(a):null}return f9},T8=function(){return g.w("yt.mdx.remote.currentScreenId_")},Jsa=function(a){g.Ha("yt.mdx.remote.currentScreenId_",a,void 0)},Ksa=function(){return g.w("yt.mdx.remote.connectData_")},W8=function(a){g.Ha("yt.mdx.remote.connectData_",a,void 0)},$8=function(){return g.w("yt.mdx.remote.connection_")},d9=function(a){var b=$8();
W8(null);a||Jsa("");g.Ha("yt.mdx.remote.connection_",a,void 0);R8&&((0,g.z)(R8,function(c){c(a)}),R8.length=0);
b&&!a?j6("yt-remote-connection-change",!1):!b&&a&&j6("yt-remote-connection-change",!0)},X8=function(){var a=g.lt();
if(!a)return null;var b=S8().Qd();return t6(b,a)},c9=function(a,b){Z8()&&Z8();
if(g9)h9=a;else{Jsa(a.id);var c=new I8(Q8,a,Y8());c.connect(b,Ksa());c.subscribe("beforeDisconnect",function(d){j6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){$8()&&d9(null)});
d9(c)}},Esa=function(){var a=X8();
a?(U8("Resume connection to: "+p6(a)),c9(a,0)):(D6(),isa(),U8("Skipping connecting because no session screen found."))},Bsa=function(){var a=Y8();
if(g.$b(a)){a=y6();var b=g.kt("yt-remote-session-name")||"",c=g.kt("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ha("yt.mdx.remote.channelParams_",a,void 0)}},Y8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},Dsa=function(a){a?(g.jt("yt-remote-session-app",a.app),g.jt("yt-remote-session-name",a.name)):(u6("yt-remote-session-app"),u6("yt-remote-session-name"));
g.Ha("yt.mdx.remote.channelParams_",a,void 0)},i9=function(a,b,c){g.I.call(this);
this.u=a;this.i=b;this.l=new g.ks(this);g.J(this,this.l);this.l.K(b,"onCaptionsTrackListChanged",this.nJ);this.l.K(b,"captionschanged",this.lI);this.l.K(b,"captionssettingschanged",this.yA);this.l.K(b,"videoplayerreset",this.In);this.l.K(b,"mdxautoplaycancel",this.jC);this.R=this.l.K(b,"onVolumeChange",this.Vy);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.iz,this);c.subscribe("remotePlayerChange",this.wk,this);c.subscribe("remoteQueueChange",this.In,this);c.subscribe("autoplayUpNext",this.Ly,
this);c.subscribe("previousNextChange",this.fz,this);c.subscribe("nowAutoplaying",this.az,this);c.subscribe("autoplayDismissed",this.Ky,this);this.suggestion=null;this.F=new g.qC(64);this.o=new g.K(this.wA,500,this);g.J(this,this.o);this.A=new g.K(this.xA,1E3,this);g.J(this,this.A);this.I=new M6(this.OM,0,this);g.J(this,this.I);this.C={};this.S=new g.K(this.XA,1E3,this);g.J(this,this.S);this.H=new g.hl(this.HF,1E3,this);g.J(this,this.H);this.N=g.Ia;this.yA();this.In();this.wk()},j9=function(a,b){a.u.Qc(b,
a.i.getVideoData().lengthSeconds)},Lsa=function(a){j9(a,0);
a.o.stop();k9(a,new g.qC(64))},m9=function(a,b){if(l9(a)&&!a.D){var c=null;
b&&(c={style:a.i.getSubtitlesUserSettings()},g.hc(c,b));a.g.mA(a.i.getVideoData(1).videoId,c);a.C=C8(a.g).g}},n9=function(a,b){var c=a.i.getPlaylist();
if(c){var d=c.Ta;var e=c.listId.toString()}c=a.i.getVideoData(1);a.g.playVideo(c.videoId,b,d,e,c.playerParams,c.Ne,f6(c));k9(a,new g.qC(1))},Msa=function(a,b){if(b){var c=a.i.getOption("captions","tracklist",{JQ:1});
c&&c.length?(a.i.setOption("captions","track",b),a.D=!1):(a.i.loadModule("captions"),a.D=!0)}else a.i.setOption("captions","track",{})},l9=function(a){return C8(a.g).videoId==a.i.getVideoData(1).videoId},k9=function(a,b){a.A.stop();
var c=a.F;if(!g.wC(c,b)){var d=g.U(b,2);d!=g.U(a.F,2)&&g.BK(a.i,d);a.F=b;Nsa(a.u,c,b)}},o9=function(){g.W.call(this,{B:"div",
G:"ytp-mdx-popup-dialog",L:{role:"dialog"},J:[{B:"div",G:"ytp-mdx-popup-dialog-inner-content",J:[{B:"div",G:"ytp-mdx-popup-title",U:"No has iniciado sesi\u00f3n"},{B:"div",G:"ytp-mdx-popup-description",U:"Los v\u00eddeos que veas podr\u00edan aparecer en el historial de reproducciones de la TV e influir en las recomendaciones. Puedes evitarlo si cancelas e inicias sesi\u00f3n en YouTube desde tu ordenador."},{B:"div",G:"ytp-mdx-privacy-popup-buttons",J:[{B:"button",V:["ytp-button","ytp-mdx-privacy-popup-cancel"],
U:"Cancelar"},{B:"button",V:["ytp-button","ytp-mdx-privacy-popup-confirm"],U:"Confirmar"}]}]}]});this.l=new g.eL(this,250);g.J(this,this.l);this.C=this.i["ytp-mdx-privacy-popup-cancel"];this.K(this.C,"click",this.o);this.u=this.i["ytp-mdx-privacy-popup-confirm"];this.K(this.u,"click",this.A)},p9=function(a){g.W.call(this,{B:"div",
G:"ytp-remote",J:[{B:"div",G:"ytp-remote-display-status",J:[{B:"div",G:"ytp-remote-display-status-icon",J:[g.gL()]},{B:"div",G:"ytp-remote-display-status-text",U:"{{statustext}}"}]}]});this.l=new g.eL(this,250);g.J(this,this.l);this.o=a;this.K(a,"presentingplayerstatechange",this.u);Osa(this,g.xK(a))},Osa=function(a,b){if(3==a.o.getPresentingPlayerType()){var c={RECEIVER_NAME:a.o.getOption("remote","currentReceiver").name};
c=g.U(b,128)?g.LL("No se ha podido reproducir el v\u00eddeo en $RECEIVER_NAME",c):g.xC(b)||g.U(b,4)?g.LL("El v\u00eddeo se est\u00e1 reproduciendo en $RECEIVER_NAME",c):g.LL("Conectado a $RECEIVER_NAME",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},q9=function(a,b){g.FN.call(this,"Reproducir en",0,a,b);
this.l=a;this.C={};this.K(a,"onMdxReceiversChange",this.I);this.K(a,"presentingplayerstatechange",this.I);this.I()},r9=function(a){g.OO.call(this,a);
this.i={key:r6(),name:"Este ordenador"};this.u=null;this.o=[];this.H=this.g=null;this.D=[this.i];this.l=this.i;this.ek=new g.qC(64);this.I=0;this.Lm=-1;this.A=null;if(!g.Yy(this.player.M())){a=this.player;var b=g.kD(a);b&&(b=b.nn())&&(b=new q9(a,b),g.J(this,b));b=new p9(a);g.J(this,b);g.MK(a,b.element,4);this.A=new o9;g.J(this,this.A);g.MK(a,this.A.element,4);this.F=!!X8()}this.C=null},s9=function(a){a.C&&(a.player.removeEventListener("presentingplayerstatechange",a.C),a.C=null)},Nsa=function(a,b,
c){a.ek=c;
a.player.O("presentingplayerstatechange",new g.BD(c,b))},t9=function(a,b){if(b.key!=a.l.key)if(b.key==a.i.key)b9();
else{var c;(c=!g.Q(a.player.M().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.Ro("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.Ro("SESSION_INDEX")&&!g.Ro("LOGGED_IN")))||a.F||!a.A);if(c?0:"WEB"==a.player.M().deviceParams.c||"WEB_EMBEDDED_PLAYER"==a.player.M().deviceParams.c)g.xC(g.xK(a.player))?a.player.pauseVideo():(a.C=(0,g.x)(a.PL,a),a.player.addEventListener("presentingplayerstatechange",a.C)),a.A&&a.A.l.show(),$8()||(g9=!0);a.l=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(d||e){var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.ua(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ne,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=f6(c))&&(d.locationInfo=c);c=d}else c=null;U8("Connecting to: "+g.vm(b));"cast-selector-receiver"==b.key?(W8(c||null),q8()?n8().setLaunchParams(c||null):l8("setLaunchParams called before ready.")):
!c&&e9()&&T8()==b.key?j6("yt-remote-connection-change",!0):(b9(),W8(c||null),c=S8().Qd(),(c=t6(c,b.key))&&c9(c,1))}},f7={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},e7={"'":"\\'"},Psa={},Qqa={IN:"atp",WP:"ska",LP:"que",mP:"mus",VP:"sus",EO:"dsp",SP:"seq"};
k6.prototype.fg=function(){var a=new k6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.l=this.l;a.i=this.i;a.g=this.g};
var E6,x6="",Yqa=G6("loadCastFramework")||G6("loadCastApplicationFramework"),esa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.Ua(M6,g.I);g.h=M6.prototype;g.h.eD=function(a){this.o=arguments;this.g=!1;this.Ca?this.l=(0,g.D)()+this.Yc:this.Ca=g.fl(this.u,this.Yc)};
g.h.stop=function(){this.Ca&&(g.u.clearTimeout(this.Ca),this.Ca=null);this.l=null;this.g=!1;this.o=[]};
g.h.pause=function(){++this.i};
g.h.resume=function(){this.i&&(--this.i,!this.i&&this.g&&(this.g=!1,this.A.apply(null,this.o)))};
g.h.W=function(){this.stop();M6.gb.W.call(this)};
g.h.fD=function(){this.l?(this.Ca=g.fl(this.u,this.l-(0,g.D)()),this.l=null):(this.Ca=null,this.i?this.g=!0:(this.g=!1,this.A.apply(null,this.o)))};O6.prototype.stringify=function(a){return g.u.JSON.stringify(a,void 0)};
O6.prototype.parse=function(a){return g.u.JSON.parse(a,void 0)};P6.prototype.g=null;P6.prototype.getOptions=function(){var a;(a=this.g)||(a={},R6(this)&&(a[0]=!0,a[1]=!0),a=this.g=a);return a};var u9;g.Ua(Q6,P6);u9=new Q6;g.h=T6.prototype;g.h.bh=null;g.h.Be=!1;g.h.Ti=null;g.h.ot=null;g.h.Ei=null;g.h.ai=null;g.h.Xf=null;g.h.Eg=null;g.h.wh=null;g.h.uc=null;g.h.Zk=0;g.h.Fe=null;g.h.Ao=null;g.h.pg=null;g.h.Kj=-1;g.h.hA=!0;g.h.Pg=!1;g.h.tq=0;g.h.Pn=null;var $6={},Y6={};g.h=T6.prototype;g.h.setTimeout=function(a){this.o=a};
g.h.ZL=function(a){a=a.target;var b=this.Pn;b&&3==t7(a)?b.Gj():this.fB(a)};
g.h.fB=function(a){try{if(a==this.uc)a:{var b=t7(this.uc),c=this.uc.u,d=this.uc.getStatus();if(g.Ld&&!g.od(10)||g.Nd&&!g.nd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.eg&&!v7(this.uc))break a;this.Pg||4!=b||7==c||(8==c||0>=d?this.g.Ae(3):this.g.Ae(2));j7(this);var e=this.uc.getStatus();this.Kj=e;var f=v7(this.uc);(this.Be=200==e)?(4==b&&b7(this),this.u?(d7(this,b,f),g.eg&&this.Be&&3==b&&(this.ca.da(this.i,"tick",this.TL),this.i.start())):a7(this,f),this.Be&&!this.Pg&&(4==b?this.g.Fn(this):(this.Be=
!1,X6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.pg=3,Z6(13)):(this.pg=0,Z6(14)),b7(this),c7(this))}}catch(k){this.uc&&v7(this.uc)}finally{}};
g.h.TL=function(){var a=t7(this.uc),b=v7(this.uc);this.Zk<b.length&&(j7(this),d7(this,a,b),this.Be&&4!=a&&X6(this))};
g.h.qL=function(a){i7((0,g.x)(this.pL,this,a),0)};
g.h.pL=function(a){this.Pg||(j7(this),a7(this,a),X6(this))};
g.h.pz=function(a){i7((0,g.x)(this.oL,this,a),0)};
g.h.oL=function(a){this.Pg||(b7(this),this.Be=a,this.g.Fn(this),this.g.Ae(4))};
g.h.cancel=function(){this.Pg=!0;b7(this)};
g.h.zL=function(){this.Ti=null;var a=(0,g.D)();0<=a-this.ot?(2!=this.ai&&this.g.Ae(3),b7(this),this.pg=2,Z6(18),c7(this)):h7(this,this.ot-a)};
g.h.getLastError=function(){return this.pg};g.h=n7.prototype;g.h.qq=null;g.h.Id=null;g.h.Qn=!1;g.h.mw=null;g.h.Zl=null;g.h.Wq=null;g.h.rq=null;g.h.je=null;g.h.Df=-1;g.h.Jj=null;g.h.gj=null;g.h.connect=function(a){this.rq=a;a=o7(this.g,null,this.rq);Z6(3);this.mw=(0,g.D)();var b=this.g.D;null!=b?(this.Jj=b[0],(this.gj=b[1])?(this.je=1,ara(this)):(this.je=2,q7(this))):(e6(a,"MODE","init"),this.Id=new T6(this,void 0,void 0,void 0),this.Id.bh=this.qq,W6(this.Id,a,!1,null,!0),this.je=0)};
g.h.kC=function(a){if(a)this.je=2,q7(this);else{Z6(4);var b=this.g;b.Ke=b.eg.Df;C7(b,9)}a&&this.Ae(2)};
g.h.Mp=function(a){return this.g.Mp(a)};
g.h.abort=function(){this.Id&&(this.Id.cancel(),this.Id=null);this.Df=-1};
g.h.lw=function(){return!1};
g.h.jz=function(a,b){this.Df=a.Kj;if(0==this.je)if(b){try{var c=this.i.parse(b)}catch(d){c=this.g;c.Ke=this.Df;C7(c,2);return}this.Jj=c[0];this.gj=c[1]}else c=this.g,c.Ke=this.Df,C7(c,2);else if(2==this.je)if(this.Qn)Z6(7),this.Wq=(0,g.D)();else if("11111"==b){if(Z6(6),this.Qn=!0,this.Zl=(0,g.D)(),c=this.Zl-this.mw,!g.Ld||g.od(10)||500>c)this.Df=200,this.Id.cancel(),Z6(12),p7(this.g,this,!0)}else Z6(8),this.Zl=this.Wq=(0,g.D)(),this.Qn=!1};
g.h.Fn=function(){this.Df=this.Id.Kj;if(this.Id.Be)0==this.je?this.gj?(this.je=1,ara(this)):(this.je=2,q7(this)):2==this.je&&((!g.Ld||g.od(10)?!this.Qn:200>this.Wq-this.Zl)?(Z6(11),p7(this.g,this,!1)):(Z6(12),p7(this.g,this,!0)));else{0==this.je?Z6(9):2==this.je&&Z6(10);var a=this.g;this.Id.getLastError();a.Ke=this.Df;C7(a,2)}};
g.h.Lk=function(){return this.g.Lk()};
g.h.isActive=function(){return this.g.isActive()};
g.h.Ae=function(a){this.g.Ae(a)};g.Ua(r7,g.uk);var fra=/^https?$/i,Qsa=["POST","PUT"];g.h=r7.prototype;
g.h.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);b=b?b.toUpperCase():"GET";this.D=a;this.l="";this.u=0;this.Y=b;this.R=!1;this.i=!0;this.g=this.N?S6(this.N):S6(u9);this.S=this.N?this.N.getOptions():u9.getOptions();this.g.onreadystatechange=(0,g.x)(this.nw,this);try{i6(u7(this,"Opening Xhr")),this.ba=!0,this.g.open(b,String(a),!0),this.ba=!1}catch(f){i6(u7(this,"Error opening Xhr: "+f.message));era(this,f);return}a=c||
"";var e=this.headers.clone();d&&Mqa(d,function(f,k){e.set(k,f)});
d=g.Za(e.fe(),cra);c=g.u.FormData&&a instanceof g.u.FormData;!g.bb(Qsa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.g.setRequestHeader(k,f)},this);
this.X&&(this.g.responseType=this.X);"withCredentials"in this.g&&this.g.withCredentials!==this.T&&(this.g.withCredentials=this.T);try{hra(this),0<this.A&&(this.I=bra(this.g),i6(u7(this,"Will abort after "+this.A+"ms if incomplete, xhr2 "+this.I)),this.I?(this.g.timeout=this.A,this.g.ontimeout=(0,g.x)(this.ow,this)):this.F=g.fl(this.ow,this.A,this)),i6(u7(this,"Sending request")),this.C=!0,this.g.send(a),this.C=!1}catch(f){i6(u7(this,"Send error: "+f.message)),era(this,f)}};
g.h.ow=function(){"undefined"!=typeof g.$Y&&this.g&&(this.l="Timed out after "+this.A+"ms, aborting",this.u=8,u7(this,this.l),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.g&&this.i&&(u7(this,"Aborting"),this.i=!1,this.o=!0,this.g.abort(),this.o=!1,this.u=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),s7(this))};
g.h.W=function(){this.g&&(this.i&&(this.i=!1,this.o=!0,this.g.abort(),this.o=!1),s7(this,!0));r7.gb.W.call(this)};
g.h.nw=function(){this.ga()||(this.ba||this.C||this.o?gra(this):this.oK())};
g.h.oK=function(){gra(this)};
g.h.isActive=function(){return!!this.g};
g.h.getStatus=function(){try{return 2<t7(this)?this.g.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return g.Ea(this.l)?this.l:String(this.l)};g.h=w7.prototype;g.h.tj=null;g.h.Dd=null;g.h.Ob=null;g.h.oq=null;g.h.fm=null;g.h.zu=null;g.h.wm=null;g.h.qk=0;g.h.FH=0;g.h.Vc=null;g.h.ng=null;g.h.sf=null;g.h.Ug=null;g.h.eg=null;g.h.xo=null;g.h.mi=-1;g.h.Ww=-1;g.h.Ke=-1;g.h.Th=0;g.h.Nh=0;g.h.Qg=8;var D7=new g.uk;g.Ua(jra,g.Vj);g.Ua(kra,g.Vj);g.Ua(lra,g.Vj);g.h=w7.prototype;g.h.connect=function(a,b,c,d,e){Z6(0);this.oq=b;this.tj=c||{};d&&g.Da(e)&&(this.tj.OSID=d,this.tj.OAID=e);this.A?(i7((0,g.x)(this.Tu,this,a),100),pra(this)):this.Tu(a)};
g.h.Tu=function(a){this.eg=new n7(this);this.eg.qq=null;this.eg.i=this.u;this.eg.connect(a)};
g.h.lw=function(){return 0==this.g};
g.h.oz=function(a){this.ng=null;sra(this,a)};
g.h.nz=function(){this.sf=null;this.Ob=new T6(this,this.l,"rpc",this.C);this.Ob.bh=null;this.Ob.tq=0;var a=this.zu.clone();c6(a,"RID","rpc");c6(a,"SID",this.l);c6(a,"CI",this.xo?"0":"1");c6(a,"AID",this.mi);x7(this,a);if(!g.Ld||g.od(10))c6(a,"TYPE","xmlhttp"),W6(this.Ob,a,!0,this.wm,!1);else{c6(a,"TYPE","html");var b=this.Ob,c=!!this.wm;b.ai=3;b.Xf=d6(a.clone());g7(b,c)}};
g.h.jz=function(a,b){if(0!=this.g&&(this.Ob==a||this.Dd==a))if(this.Ke=a.Kj,this.Dd==a&&3==this.g)if(7<this.Qg){try{var c=this.u.parse(b)}catch(f){c=null}if(g.La(c)&&3==c.length)if(0==c[0])a:{if(!this.sf){if(this.Ob)if(this.Ob.Ei+3E3<this.Dd.Ei)z7(this),this.Ob.cancel(),this.Ob=null;else break a;B7(this);Z6(19)}}else this.Ww=c[1],0<this.Ww-this.mi&&37500>c[2]&&this.xo&&0==this.Nh&&!this.Ug&&(this.Ug=i7((0,g.x)(this.hI,this),6E3));else C7(this,11)}else b!=Psa.fO.g&&C7(this,11);else if(this.Ob==a&&
z7(this),!g.zb(b)){c=this.u.parse(b);g.La(c);for(var d=0;d<c.length;d++){var e=c[d];this.mi=e[0];e=e[1];2==this.g?"c"==e[0]?(this.l=e[1],this.wm=e[2],e=e[3],null!=e?this.Qg=e:this.Qg=6,this.g=3,this.Vc&&this.Vc.Nu(),this.zu=o7(this,this.Lk()?this.wm:null,this.oq),tra(this)):"stop"==e[0]&&C7(this,7):3==this.g&&("stop"==e[0]?C7(this,7):"noop"!=e[0]&&this.Vc&&this.Vc.Mu(e),this.Nh=0)}}};
g.h.hI=function(){null!=this.Ug&&(this.Ug=null,this.Ob.cancel(),this.Ob=null,B7(this),Z6(20))};
g.h.Fn=function(a){if(this.Ob==a){z7(this);this.Ob=null;var b=2}else if(this.Dd==a)this.Dd=null,b=1;else return;this.Ke=a.Kj;if(0!=this.g)if(a.Be)1==b?(b=(0,g.D)()-a.Ei,D7.dispatchEvent(new kra(D7,a.wh?a.wh.length:0,b,this.Th)),y7(this),this.o.length=0):tra(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Ke)){if(d=1==b)this.Dd||this.ng||1==this.g||2<=this.Th?d=!1:(this.ng=i7((0,g.x)(this.oz,this,a),ura(this,this.Th)),this.Th++,d=!0);d=!(d||2==b&&B7(this))}if(d)switch(c){case 1:C7(this,
5);break;case 4:C7(this,10);break;case 3:C7(this,6);break;case 7:C7(this,12);break;default:C7(this,2)}}};
g.h.FC=function(a){if(!g.bb(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.EM=function(a){a?Z6(2):(Z6(1),vra(this,8))};
g.h.Mp=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new r7;a.T=!1;return a};
g.h.isActive=function(){return!!this.Vc&&this.Vc.isActive(this)};
g.h.Ae=function(a){D7.dispatchEvent(new lra(D7,a))};
g.h.Lk=function(){return!(!g.Ld||g.od(10))};
g.h=wra.prototype;g.h.Nu=function(){};
g.h.Mu=function(){};
g.h.Lu=function(){};
g.h.zp=function(){};
g.h.Nv=function(){return{}};
g.h.isActive=function(){return!0};g.h=xra.prototype;g.h.isEmpty=function(){return g.cb(this.g)&&g.cb(this.i)};
g.h.clear=function(){this.g=[];this.i=[]};
g.h.contains=function(a){return g.bb(this.g,a)||g.bb(this.i,a)};
g.h.remove=function(a){var b=this.g;var c=(0,g.xna)(b,a);0<=c?(g.eb(b,c),b=!0):b=!1;return b||g.fb(this.i,a)};
g.h.Ic=function(){for(var a=[],b=this.g.length-1;0<=b;--b)a.push(this.g[b]);var c=this.i.length;for(b=0;b<c;++b)a.push(this.i[b]);return a};g.Ua(E7,g.I);g.h=E7.prototype;g.h.hL=function(){this.Yc=Math.min(3E5,2*this.Yc);this.l();this.i&&this.start()};
g.h.start=function(){var a=this.Yc+15E3*Math.random();g.xn(this.g,a);this.i=(0,g.D)()+a};
g.h.stop=function(){this.g.stop();this.i=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.Yc=5E3};g.Ua(F7,wra);g.h=F7.prototype;g.h.subscribe=function(a,b,c){return this.l.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.l.unsubscribe(a,b,c)};
g.h.Lf=function(a){return this.l.dh(a)};
g.h.O=function(a,b){return this.l.O.apply(this.l,arguments)};
g.h.dispose=function(){this.ib||(this.ib=!0,g.Di(this.l),Ara(this),g.Di(this.i),this.i=null)};
g.h.ga=function(){return this.ib};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.F="";this.i.stop();this.u=a||null;this.o=b||0;a=this.H+"/test";b=this.H+"/bind";var d=new w7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.I),e=this.g;e&&(e.Vc=null);d.Vc=this;this.g=d;e?this.g.connect(a,b,this.A,e.l,e.mi):c?this.g.connect(a,b,this.A,c.sessionId,c.arrayId):this.g.connect(a,b,this.A)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.hc(c,b);this.i.isActive()||2==(this.g?this.g.g:0)?this.C.push(c):G7(this)&&qra(this.g,c)};
g.h.Nu=function(){this.i.reset();this.u=null;this.o=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)qra(this.g,a[b])}this.O("handlerOpened")};
g.h.Lu=function(a){var b=2==a&&401==this.g.Ke;4==a||b||this.i.start();this.O("handlerError",a)};
g.h.zp=function(a){if(!this.i.isActive())this.O("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.C.push(d)}};
g.h.Nv=function(){var a={v:2};this.F&&(a.gsessionid=this.F);0!=this.o&&(a.ui=""+this.o);0!=this.D&&(a.ui=""+this.D);this.u&&g.hc(a,this.u);return a};
g.h.Mu=function(a){"S"==a[0]?this.F=a[1]:"gracefulReconnect"==a[0]?(this.i.start(),ora(this.g)):this.O("handlerMessage",new yra(a[0],a[1]))};
g.h.jM=function(){this.i.isActive();var a=this.g,b=0;a.Ob&&b++;a.Dd&&b++;0==b&&this.connect(this.u,this.o)};H7.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
H7.prototype.l=function(a,b){a(Error("Request error: "+b.status))};
H7.prototype.u=function(a){a(Error("request timed out"))};var Ira=(0,g.D)(),K7=null,N7=Array(50),M7=-1,O7=!1;g.Ua(P7,g.O);P7.prototype.Qd=function(){return this.g};
P7.prototype.contains=function(a){return!!s6(this.g,a)};
P7.prototype.get=function(a){return a?t6(this.g,a):null};
P7.prototype.info=function(a){L7(this.C,a)};g.r(Q7,g.O);g.h=Q7.prototype;g.h.start=function(){!this.g&&isNaN(this.Ca)&&this.iB()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);isNaN(this.Ca)||(g.ap(this.Ca),this.Ca=NaN)};
g.h.W=function(){this.stop();g.O.prototype.W.call(this)};
g.h.iB=function(){this.Ca=NaN;this.g=g.Wp(I7(this.A,"/pairing/get_screen"),{method:"POST",ub:{pairing_code:this.u},timeout:5E3,onSuccess:(0,g.x)(this.hN,this),onError:(0,g.x)(this.gN,this),Td:(0,g.x)(this.iN,this)})};
g.h.hN=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.l;c.name=this.o;this.O("pairingComplete",new l6(c))};
g.h.gN=function(a){this.g=null;a.status&&404==a.status?this.i>=Rsa.length?this.O("pairingFailed",Error("DIAL polling timed out")):(a=Rsa[this.i],this.Ca=g.Zo((0,g.x)(this.iB,this),a),this.i++):this.O("pairingFailed",Error("Server error "+a.status))};
g.h.iN=function(){this.g=null;this.O("pairingFailed",Error("Server not responding"))};
var Rsa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ua(S7,P7);g.h=S7.prototype;g.h.start=function(){R7(this)&&this.O("screenChange");!g.kt("yt-remote-lounge-token-expiration")&&Mra(this);g.ap(this.i);this.i=g.Zo((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){R7(this);Jra(this,a);T7(this,!1);this.O("screenChange");b(a);a.token||Mra(this)};
g.h.remove=function(a,b){var c=R7(this);Lra(this,a)&&(T7(this,!1),c=!0);b(a);c&&this.O("screenChange")};
g.h.so=function(a,b,c,d){var e=R7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,T7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.O("screenChange")};
g.h.W=function(){g.ap(this.i);S7.gb.W.call(this)};
g.h.pD=function(a){R7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}T7(this,!b);b&&L7(this.C,"Missed "+b+" lounge tokens.")};
g.h.oD=function(a){L7(this.C,"Requesting lounge tokens failed: "+a)};g.r(V7,g.O);g.h=V7.prototype;g.h.start=function(){var a=parseInt(g.kt("yt-remote-fast-check-period")||"0",10);(this.o=(0,g.D)()-144E5<a?0:a)?X7(this):(this.o=(0,g.D)()+3E5,g.jt("yt-remote-fast-check-period",this.o),this.Bs())};
g.h.isEmpty=function(){return g.$b(this.g)};
g.h.update=function(){U7("Updating availability on schedule.");var a=this.A(),b=g.Ob(this.g,function(c,d){return c&&!!t6(a,d)},this);
W7(this,b)};
g.h.W=function(){g.ap(this.l);this.l=NaN;this.i&&(this.i.abort(),this.i=null);g.O.prototype.W.call(this)};
g.h.Bs=function(){g.ap(this.l);this.l=NaN;this.i&&this.i.abort();var a=Pra(this);if(g6(a)){var b=I7(this.u,"/pairing/get_screen_availability");this.i=J7(this.u,b,{lounge_token:g.Ub(a).join(",")},(0,g.x)(this.KK,this,a),(0,g.x)(this.JK,this))}else W7(this,{}),X7(this)};
g.h.KK=function(a,b){this.i=null;var c=g.Ub(Pra(this));if(g.tb(c,g.Ub(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;W7(this,d);X7(this)}else this.Ib("Changing Screen set during request."),this.Bs()};
g.h.JK=function(a){this.Ib("Screen availability failed: "+a);this.i=null;X7(this)};
g.h.Ib=function(a){L7("OnlineScreenService",a)};g.Ua(Y7,P7);g.h=Y7.prototype;g.h.start=function(){this.l.start();this.i.start();this.g.length&&(this.O("screenChange"),this.i.isEmpty()||this.O("onlineScreenChange"))};
g.h.add=function(a,b,c){this.l.add(a,b,c)};
g.h.remove=function(a,b,c){this.l.remove(a,b,c);this.i.update()};
g.h.so=function(a,b,c,d){this.l.contains(a)?this.l.so(a,b,c,d):(a="Updating name of unknown screen: "+a.name,L7(this.C,a),d(Error(a)))};
g.h.Qd=function(a){return a?this.g:g.ib(this.g,(0,g.Xd)(this.o,function(b){return!this.contains(b)},this))};
g.h.jB=function(){return(0,g.Xd)(this.Qd(!0),function(a){return!!this.i.g[a.id]},this)};
g.h.kB=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new Q7(this.A,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.Di(f);d(Z7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.Di(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.kN=function(a,b,c,d){g.Wp(I7(this.A,"/pairing/get_screen"),{method:"POST",ub:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new l6(f.screen||{});if(!k.name||Tra(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);Tra(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(Z7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Td:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.W=function(){g.Di(this.l);g.Di(this.i);Y7.gb.W.call(this)};
g.h.xD=function(){Ura(this);this.O("screenChange");this.i.update()};
Y7.prototype.dispose=Y7.prototype.dispose;g.Ua(a8,g.O);g.h=a8.prototype;g.h.Hn=function(a){this.l=a;this.O("sessionScreen",this.l)};
g.h.Sd=function(a){this.ga()||(a&&b8(this,""+a),this.l=null,this.O("sessionScreen",null))};
g.h.info=function(a){L7(this.S,a)};
g.h.mB=function(){return null};
g.h.Js=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){b8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.W=function(){this.Js("");a8.gb.W.call(this)};g.Ua(c8,a8);g.h=c8.prototype;g.h.Is=function(a){if(this.g){if(this.g==a)return;b8(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.A);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.u)}this.g=a;this.g.addUpdateListener(this.A);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.u);Wra(this)};
g.h.ni=function(a){this.info("launchWithParams no-op for Cast: "+g.vm(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.x)(function(){this.Sd()},this),(0,g.x)(function(){this.Sd(Error("Failed to stop receiver app."))},this)):this.Sd(Error("Stopping cast device witout session."))};
g.h.Js=g.Ia;g.h.W=function(){this.info("disposeInternal");g.ap(this.o);this.o=0;this.g&&(this.g.removeUpdateListener(this.A),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.u));this.g=null;c8.gb.W.call(this)};
g.h.KL=function(a,b){if(!this.ga())if(b){var c=N6(b);if(g.Oa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.vm(c));switch(d){case "mdxSessionStatus":Vra(this,c.screenId);break;default:b8(this,"Unknown youtube message: "+d)}}else b8(this,"Unable to parse message.")}else b8(this,"No data in message.")};
g.h.gw=function(a,b,c,d){Sra(this.F,this.i.label,a,this.i.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(b8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Zo((0,g.x)(this.gw,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.mB=function(){return this.g};
g.h.lN=function(a){this.ga()||a||(b8(this,"Cast session died."),this.Sd())};g.Ua(d8,a8);g.h=d8.prototype;g.h.Is=function(a){this.o=a;this.o.addUpdateListener(this.I)};
g.h.ni=function(a){this.u=a;this.C()};
g.h.stop=function(){this.g();this.g=g.Ia;g.ap(this.A);this.o?this.o.stop((0,g.x)(this.Sd,this,null),(0,g.x)(this.Sd,this,"Failed to stop DIAL device.")):this.Sd()};
g.h.W=function(){this.g();this.g=g.Ia;g.ap(this.A);this.o&&this.o.removeUpdateListener(this.I);this.o=null;d8.gb.W.call(this)};
g.h.oN=function(a){this.ga()||a||(b8(this,"DIAL session died."),this.g(),this.g=g.Ia,this.Sd())};
g.h.Fq=function(a){this.H=r6();if(this.u){var b=new chrome.cast.DialLaunchResponse(!0,Yra(this));a(b);Xra(this)}else this.C=(0,g.x)(function(){g.ap(this.A);this.C=g.Ia;this.A=NaN;var c=new chrome.cast.DialLaunchResponse(!0,Yra(this));a(c);Xra(this)},this),this.A=g.Zo((0,g.x)(function(){this.C()},this),100)};
g.h.TD=function(a,b,c){Sra(this.F,this.D.receiver.label,a,this.i.friendlyName,(0,g.x)(function(d){d&&d.token?(this.Hn(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Fq(b,c)},this),(0,g.x)(function(d){b8(this,"Failed to get DIAL screen: "+d);
this.Fq(b,c)},this))};g.Ua(e8,a8);e8.prototype.stop=function(){this.Sd()};
e8.prototype.Is=g.Ia;e8.prototype.ni=function(){g.ap(this.g);this.g=NaN;var a=t6(this.F.Qd(),this.i.label);a?this.Hn(a):this.Sd(Error("No such screen"))};
e8.prototype.W=function(){g.ap(this.g);this.g=NaN;e8.gb.W.call(this)};g.Ua(f8,g.O);g.h=f8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.C);this.D||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.tK,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.lz,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.II,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ga()||
(chrome.cast.addReceiverActionListener(this.o),Fra(),this.i.subscribe("onlineScreenChange",(0,g.x)(this.lB,this)),this.l=$ra(this),chrome.cast.setCustomReceivers(this.l,g.Ia,(0,g.x)(function(k){this.Ib("Failed to set initial custom receivers: "+g.vm(k))},this)),this.O("yt-remote-cast2-availability-change",h8(this)),b(!0))},this),(0,g.x)(function(k){this.Ib("Failed to initialize API: "+g.vm(k));
b(!1)},this))};
g.h.rM=function(a,b){g8("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.l;if(!a||c&&c.id!=a)g8("Unsetting old screen status: "+this.g.i.friendlyName),i8(this,null)}if(a&&b){if(!this.g){c=t6(this.i.Qd(),a);if(!c){g8("setConnectedScreenStatus: Unknown screen.");return}var d=Zra(this,c);d||(g8("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.l.push(d),chrome.cast.setCustomReceivers(this.l,
g.Ia,(0,g.x)(function(e){this.Ib("Failed to set initial custom receivers: "+g.vm(e))},this)));
g8("setConnectedScreenStatus: new active receiver: "+d.friendlyName);i8(this,new e8(this.i,d),!0)}this.g.Js(b)}else g8("setConnectedScreenStatus: no screen.")};
g.h.sM=function(a){this.ga()?this.Ib("Setting connection data on disposed cast v2"):this.g?this.g.ni(a):this.Ib("Setting connection data without a session")};
g.h.nN=function(){this.ga()?this.Ib("Stopping session on disposed cast v2"):this.g?(this.g.stop(),i8(this,null)):g8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.lz,this),(0,g.x)(this.QK,this))};
g.h.W=function(){this.i.unsubscribe("onlineScreenChange",(0,g.x)(this.lB,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.o);g.fb(g.w("yt.mdx.remote.debug.handlers_")||[],Cra);g.Di(this.g);f8.gb.W.call(this)};
g.h.Ib=function(a){L7("Controller",a)};
g.h.mz=function(a,b){this.g==a&&(b||i8(this,null),this.O("yt-remote-cast2-session-change",b))};
g.h.pK=function(a,b){if(!this.ga())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),g8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.i.label!=a.label)g8("onReceiverAction_: Stopping active receiver: "+this.g.i.friendlyName),this.g.stop();else{g8("onReceiverAction_: Casting to active receiver.");this.g.l&&this.O("yt-remote-cast2-session-change",this.g.l);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:i8(this,
new e8(this.i,a));break;case chrome.cast.ReceiverType.DIAL:i8(this,new d8(this.i,a,this.A));break;case chrome.cast.ReceiverType.CAST:i8(this,new c8(this.i,a));break;default:this.Ib("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.g&&this.g.i.label==a.label?this.g.stop():this.Ib("Stopping receiver w/o session: "+a.friendlyName)}else this.Ib("onReceiverAction_ called without receiver.")};
g.h.II=function(a){if(this.ga())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Ib("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.i:null;if(!c||c.label!=b.label)return this.Ib("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.g.l)return g8("Reselecting dial screen."),
this.O("yt-remote-cast2-session-change",this.g.l),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Ib('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);i8(this,new d8(this.i,b,this.A))}b=this.g;b.D=a;return b.D.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.TD,b,(b.D.extraData||{}).screenId||null)):new Promise((0,g.x)(b.Fq,b))};
g.h.lz=function(a){if(!this.ga()){g8("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==chrome.cast.ReceiverType.CAST)g8("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),i8(this,new c8(this.i,b),!0);else{this.Ib("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.i,d=t6(this.i.Qd(),c.label);d&&m6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(g8("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Di(this.g),this.g=new c8(this.i,b),this.g.subscribe("sessionScreen",(0,g.x)(this.mz,this,this.g)),this.g.ni(null));this.g.Is(a)}}};
g.h.mN=function(){return this.g?this.g.mB():null};
g.h.QK=function(a){this.ga()||(this.Ib("Failed to estabilish a session: "+g.vm(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&i8(this,null))};
g.h.tK=function(a){g8("Receiver availability updated: "+a);if(!this.ga()){var b=h8(this);this.u=a==chrome.cast.ReceiverAvailability.AVAILABLE;h8(this)!=b&&this.O("yt-remote-cast2-availability-change",h8(this))}};
g.h.lB=function(){this.ga()||(this.l=$ra(this),g8("Updating custom receivers: "+g.vm(this.l)),chrome.cast.setCustomReceivers(this.l,g.Ia,(0,g.x)(function(){this.Ib("Failed to set custom receivers.")},this)),this.O("yt-remote-cast2-availability-change",h8(this)))};
f8.prototype.setLaunchParams=f8.prototype.sM;f8.prototype.setConnectedScreenStatus=f8.prototype.rM;f8.prototype.stopSession=f8.prototype.nN;f8.prototype.getCastSession=f8.prototype.mN;f8.prototype.requestSession=f8.prototype.requestSession;f8.prototype.init=f8.prototype.init;f8.prototype.dispose=f8.prototype.dispose;var o8=[];t8.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";u8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.Le=a.hasPrevious,this.hasNext=a.hasNext,this.C=a.playerTime,this.A=a.playerTimeAt,this.o=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.F=a.loadedTime,this.l=a.liveIngestionTime,this.u=
!isNaN(this.l))};
t8.prototype.isAdPlaying=function(){return 1081==this.playerState};
t8.prototype.getDuration=function(){return this.u?this.D+v8(this):this.D};
t8.prototype.clone=function(){return new t8(z8(this))};g.r(B8,g.O);g.h=B8.prototype;g.h.play=function(){1==this.g?(this.i?this.i.play(null,g.Ia,H8(this,"play")):G8(this,"play"),F8(this,1,x8(C8(this))),this.O("remotePlayerChange")):D8(this,this.play)};
g.h.pause=function(){1==this.g?(this.i?this.i.pause(null,g.Ia,H8(this,"pause")):G8(this,"pause"),F8(this,2,x8(C8(this))),this.O("remotePlayerChange")):D8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.g){if(this.i){var b=C8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ia,H8(this,"seekTo",{newTime:a}))}else G8(this,"seekTo",{newTime:a});F8(this,3,a);this.O("remotePlayerChange")}else D8(this,g.Ra(this.seekTo,a))};
g.h.stop=function(){if(1==this.g){this.i?this.i.stop(null,g.Ia,H8(this,"stopVideo")):G8(this,"stopVideo");var a=C8(this);a.index=-1;a.videoId="";u8(a);E8(this,a);this.O("remotePlayerChange")}else D8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=C8(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,(0,g.x)(function(){L7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Ib("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,(0,g.x)(function(){L7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Ib("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);G8(this,"setVolume",e)}c.muted=b;c.volume=a;E8(this,c)}else D8(this,g.Ra(this.setVolume,a,b))};
g.h.mA=function(a,b){if(1==this.g){var c=C8(this),d={videoId:a};b&&(c.g={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.vm(b.style),g.hc(d,c.g));G8(this,"setSubtitlesTrack",d);E8(this,c)}else D8(this,g.Ra(this.mA,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.g){var c=b.getLanguageInfo().getId();G8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=C8(this);d.audioTrackId=c;E8(this,d)}else D8(this,g.Ra(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=C8(this);c=c||0;var m={videoId:a,currentIndex:c};y8(l,a,c);g.Da(b)&&(w8(l,b),m.currentTime=b);g.Da(d)&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.vm(k));G8(this,"setPlaylist",m);d||E8(this,l)};
g.h.Mn=function(a,b){if(1==this.g){if(a&&b){var c=C8(this);y8(c,a,b);E8(this,c)}G8(this,"previous")}else D8(this,g.Ra(this.Mn,a,b))};
g.h.nextVideo=function(a,b){if(1==this.g){if(a&&b){var c=C8(this);y8(c,a,b);E8(this,c)}G8(this,"next")}else D8(this,g.Ra(this.nextVideo,a,b))};
g.h.qv=function(){1==this.g?G8(this,"dismissAutoplay"):D8(this,this.qv)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.O("proxyStateChange",a,this.g)}g.O.prototype.dispose.call(this)};
g.h.W=function(){msa(this);this.o=null;this.u.clear();A8(this,null);g.O.prototype.W.call(this)};
g.h.wt=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.O("proxyStateChange",b,a);if(1==a)for(;!this.u.isEmpty();)b=a=this.u,g.cb(b.g)&&(b.g=b.i,b.g.reverse(),b.i=[]),a.g.pop().apply(this);else 3==a&&this.dispose()}};
g.h.mK=function(a,b){this.O(a,b)};
g.h.nI=function(a){if(!a)this.uk(null),A8(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=C8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)L7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,E8(this,b)}};
g.h.uk=function(a){L7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.D);if(this.i=a)this.i.addUpdateListener(this.D),nsa(this),this.O("remotePlayerChange")};
g.h.mI=function(a){a?(nsa(this),this.O("remotePlayerChange")):this.uk(null)};
g.h.Ys=function(){G8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.AI=function(){var a=jsa();a&&A8(this,a)};
g.h.Ib=function(a){L7("CP",a)};g.r(I8,g.O);g.h=I8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.Da(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.Da(k)&&(l.currentIndex=k);c&&(this.Pa.listId=c);this.Pa.videoId=d;this.Pa.index=k||0;this.Pa.state=3;w8(this.Pa,m);this.o="UNSUPPORTED";J8("Connecting with setPlaylist and params: "+g.vm(l));this.g.connect({method:"setPlaylist",
params:g.vm(l)},a,A6())}else J8("Connecting without params"),this.g.connect({},a,A6());psa(this)};
g.h.dispose=function(){this.ga()||(this.O("beforeDispose"),K8(this,3));g.O.prototype.dispose.call(this)};
g.h.W=function(){L8(this);N8(this);M8(this);g.ap(this.C);this.C=NaN;g.ap(this.D);this.D=NaN;this.l=null;g.ur(this.S);this.S.length=0;this.g.dispose();g.O.prototype.W.call(this);this.o=this.A=this.i=this.Pa=this.g=null};
g.h.iD=function(){this.Rh(2)};
g.h.rI=function(){J8("Channel opened");this.I&&(this.I=!1,M8(this),this.H=g.Zo((0,g.x)(function(){J8("Timing out waiting for a screen.");this.Rh(1)},this),15E3));
Wqa(zra(this.g),this.N)};
g.h.oI=function(){J8("Channel closed");isNaN(this.u)?D6(!0):D6();this.dispose()};
g.h.pI=function(a){D6();isNaN(this.Bj())?(J8("Channel error: "+a+" without reconnection"),this.dispose()):(this.I=!0,J8("Channel error: "+a+" with reconnection in "+this.Bj()+" ms"),K8(this,2))};
g.h.qI=function(a){a.params?J8("Received: action="+a.action+", params="+g.vm(a.params)):J8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=N6(a.params.devices);this.i=(0,g.A)(a,function(c){return new k6(c)});
a=!!g.Za(this.i,function(c){return"LOUNGE_SCREEN"==c.type});
ssa(this,a);break;case "loungeScreenDisconnected":g.gb(this.i,function(c){return"LOUNGE_SCREEN"==c.type});
ssa(this,!1);break;case "remoteConnected":var b=new k6(N6(a.params.device));g.Za(this.i,function(c){return b?c.id==b.id:!1})||Jqa(this.i,b);
break;case "remoteDisconnected":b=new k6(N6(a.params.device));g.gb(this.i,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":usa(this,a);break;case "nowPlaying":wsa(this,a);break;case "onStateChange":vsa(this,a);break;case "onAdStateChange":xsa(this,a);break;case "onVolumeChanged":ysa(this,a);break;case "onSubtitlesTrackChanged":tsa(this,a);break;case "nowAutoplaying":zsa(this,a);break;case "autoplayDismissed":this.O("autoplayDismissed");break;case "autoplayUpNext":this.A=a.params.videoId||null;this.O("autoplayUpNext",this.A);break;case "onAutoplayModeChanged":this.o=
a.params.autoplayMode;this.O("autoplayModeChange",this.o);"DISABLED"==this.o&&this.O("autoplayDismissed");break;case "onHasPreviousNextChanged":Asa(this,a);break;case "requestAssistedSignIn":this.O("assistedSignInRequested",a.params.authCode);break;default:J8("Unrecognized action: "+a.action)}};
g.h.gM=function(){if(this.l){var a=this.l;this.l=null;this.Pa.videoId!=a&&O8(this,"getNowPlaying")}};
g.h.YC=function(){var a=3;this.ga()||(a=0,isNaN(this.Bj())?G7(this.g)&&isNaN(this.u)&&(a=1):a=2);return a};
g.h.Rh=function(a){J8("Disconnecting with "+a);L8(this);this.O("beforeDisconnect",a);1==a&&D6();Ara(this.g,a);this.dispose()};
g.h.XC=function(){var a=this.Pa;this.l&&(a=this.Pa.clone(),y8(a,this.l,a.index));return z8(a)};
g.h.tM=function(a){var b=new t8(a);b.videoId&&b.videoId!=this.Pa.videoId&&(this.l=b.videoId,g.ap(this.C),this.C=g.Zo((0,g.x)(this.gM,this),5E3));var c=[];this.Pa.listId==b.listId&&this.Pa.videoId==b.videoId&&this.Pa.index==b.index||c.push("remoteQueueChange");this.Pa.playerState==b.playerState&&this.Pa.volume==b.volume&&this.Pa.muted==b.muted&&x8(this.Pa)==x8(b)&&g.vm(this.Pa.g)==g.vm(b.g)||c.push("remotePlayerChange");this.Pa.reset(a);(0,g.z)(c,function(d){this.O(d)},this)};
g.h.dw=function(){var a=this.g.A.id,b=g.Za(this.i,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Bj=function(){var a=this.g;return a.i.isActive()?a.i.i-(0,g.D)():NaN};
g.h.RC=function(){return this.o||"UNSUPPORTED"};
g.h.SC=function(){return this.A||""};
g.h.fN=function(){if(!isNaN(this.Bj())){var a=this.g.i;g.yn(a.g);a.start()}};
g.h.oM=function(a,b){O8(this,a,b);rsa(this)};
I8.prototype.subscribe=I8.prototype.subscribe;I8.prototype.unsubscribeByKey=I8.prototype.Lf;I8.prototype.getProxyState=I8.prototype.YC;I8.prototype.disconnect=I8.prototype.Rh;I8.prototype.getPlayerContextData=I8.prototype.XC;I8.prototype.setPlayerContextData=I8.prototype.tM;I8.prototype.getOtherConnectedRemoteId=I8.prototype.dw;I8.prototype.getReconnectTimeout=I8.prototype.Bj;I8.prototype.getAutoplayMode=I8.prototype.RC;I8.prototype.getAutoplayVideoId=I8.prototype.SC;I8.prototype.reconnect=I8.prototype.fN;
I8.prototype.sendMessage=I8.prototype.oM;g.r(P8,P7);g.h=P8.prototype;g.h.Qd=function(a){return this.Xc.$_gs(a)};
g.h.contains=function(a){return!!this.Xc.$_c(a)};
g.h.get=function(a){return this.Xc.$_g(a)};
g.h.start=function(){this.Xc.$_st()};
g.h.add=function(a,b,c){this.Xc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Xc.$_r(a,b,c)};
g.h.so=function(a,b,c,d){this.Xc.$_un(a,b,c,d)};
g.h.W=function(){for(var a=0,b=this.i.length;a<b;++a)this.Xc.$_ubk(this.i[a]);this.i.length=0;this.Xc=null;P7.prototype.W.call(this)};
g.h.jN=function(){this.O("screenChange")};
g.h.RJ=function(){this.O("onlineScreenChange")};
Y7.prototype.$_st=Y7.prototype.start;Y7.prototype.$_gspc=Y7.prototype.kN;Y7.prototype.$_gsppc=Y7.prototype.kB;Y7.prototype.$_c=Y7.prototype.contains;Y7.prototype.$_g=Y7.prototype.get;Y7.prototype.$_a=Y7.prototype.add;Y7.prototype.$_un=Y7.prototype.so;Y7.prototype.$_r=Y7.prototype.remove;Y7.prototype.$_gs=Y7.prototype.Qd;Y7.prototype.$_gos=Y7.prototype.jB;Y7.prototype.$_s=Y7.prototype.subscribe;Y7.prototype.$_ubk=Y7.prototype.Lf;var h9=null,g9=!1,Q8=null,R8=null,f9=null,V8=[];g.r(i9,g.I);g.h=i9.prototype;
g.h.W=function(){g.I.prototype.W.call(this);this.o.stop();this.A.stop();this.I.stop();this.N();this.g.unsubscribe("proxyStateChange",this.iz,this);this.g.unsubscribe("remotePlayerChange",this.wk,this);this.g.unsubscribe("remoteQueueChange",this.In,this);this.g.unsubscribe("autoplayUpNext",this.Ly,this);this.g.unsubscribe("previousNextChange",this.fz,this);this.g.unsubscribe("nowAutoplaying",this.az,this);this.g.unsubscribe("autoplayDismissed",this.Ky,this);this.g=this.u=null};
g.h.Gx=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(l9(this)){if(!C8(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==C8(this.g).playerState?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.H.Gj(c[0],c[1]);break;case "control_subtitles_set_track":m9(this,c[0]);break;case "control_set_audio_track":c=c[0],l9(this)&&this.g.setAudioTrack(this.i.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.i.getCurrentTime();n9(this,0==c?void 0:c);break;case "control_seek":n9(this,c[0]);break;case "control_subtitles_set_track":m9(this,c[0]);break;case "control_set_audio_track":c=c[0],l9(this)&&this.g.setAudioTrack(this.i.getVideoData(1).videoId,c)}};
g.h.lI=function(a){this.I.eD(a)};
g.h.OM=function(a){this.Gx("control_subtitles_set_track",g.$b(a)?null:a)};
g.h.yA=function(){var a=this.i.getOption("captions","track");g.$b(a)||m9(this,a)};
g.h.Vy=function(a){if(l9(this)){this.g.unsubscribe("remotePlayerChange",this.wk,this);var b=Math.round(a.volume);a=!!a.muted;var c=C8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.S.start();this.g.subscribe("remotePlayerChange",this.wk,this)}};
g.h.nJ=function(){g.$b(this.C)||Msa(this,this.C);this.D=!1};
g.h.iz=function(a,b){this.A.stop();2==b&&this.xA()};
g.h.wk=function(){if(l9(this)){this.o.stop();var a=C8(this.g);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.Lm=1;break;case 1082:case 1083:this.u.Lm=0;break;default:this.u.Lm=-1}switch(a.playerState){case 1081:case 1:k9(this,new g.qC(8));this.wA();break;case 1085:case 3:k9(this,new g.qC(9));break;case 1083:case 0:k9(this,new g.qC(2));this.H.stop();j9(this,this.i.getVideoData().lengthSeconds);break;case 1084:k9(this,new g.qC(4));break;case 2:k9(this,new g.qC(4));j9(this,x8(a));
break;case -1:k9(this,new g.qC(64));break;case -1E3:k9(this,new g.qC(128,{errorCode:"mdx.remoteerror",errorMessage:"Este v\u00eddeo no se puede reproducir de forma remota."}))}a=C8(this.g).g;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,Msa(this,a));a=C8(this.g);-1==a.volume||Math.round(this.i.getVolume())==a.volume&&this.i.isMuted()==a.muted||this.S.isActive()||this.XA()}else Lsa(this)};
g.h.fz=function(){this.i.O("mdxpreviousnextchange")};
g.h.In=function(){l9(this)||Lsa(this)};
g.h.jC=function(){this.g.qv()};
g.h.Ly=function(a){a&&!g.Q(this.i.M().experiments,"disable_legacy_desktop_remote_queue")&&(a=g.Wp("/watch_queue_ajax",{method:"GET",xd:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.x)(this.tL,this)}))&&(this.N=(0,g.x)(a.abort,a))};
g.h.tL=function(a,b){var c=new g.$A(this.i.M(),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.i.O("mdxautoplayupnext",c)};
g.h.az=function(a){isNaN(a)||this.i.O("mdxnowautoplaying",a)};
g.h.Ky=function(){this.i.O("mdxautoplaycanceled")};
g.h.HF=function(a,b){-1==C8(this.g).playerState?n9(this,a):b&&this.g.seekTo(a)};
g.h.XA=function(){if(l9(this)){var a=C8(this.g);this.l.Ra(this.R);a.muted?this.i.mute():this.i.unMute();this.i.setVolume(a.volume);this.R=this.l.K(this.i,"onVolumeChange",this.Vy)}};
g.h.wA=function(){this.o.stop();if(!this.g.ga()){var a=C8(this.g);1==a.playerState&&k9(this,new g.qC(8));j9(this,x8(a));this.o.start()}};
g.h.xA=function(){this.A.stop();this.o.stop();var a=this.g.o.getReconnectTimeout();2==this.g.g&&!isNaN(a)&&this.A.start()};g.r(o9,g.W);o9.prototype.o=function(){j6("mdx-privacy-popup-cancel");this.l.hide()};
o9.prototype.A=function(){j6("mdx-privacy-popup-confirm");this.l.hide()};g.r(p9,g.W);p9.prototype.u=function(a){Osa(this,a.state)};g.r(q9,g.FN);q9.prototype.I=function(){var a=this.l.getOption("remote","receivers");a&&1<a.length&&!this.l.getOption("remote","quickCast")?(this.C=g.vb(a,this.A,this),g.HN(this,(0,g.A)(a,this.A)),a=this.l.getOption("remote","currentReceiver"),this.oe(this.A(a)),this.enable(!0)):this.enable(!1)};
q9.prototype.A=function(a){return a.key};
q9.prototype.ze=function(a){return"cast-selector-receiver"==a?"Reparto...":this.C[a].name};
q9.prototype.Oc=function(a){g.FN.prototype.Oc.call(this,a);this.l.setOption("remote","currentReceiver",this.C[a]);this.o.kb()};g.r(r9,g.OO);g.h=r9.prototype;
g.h.create=function(){Fsa(g.Py(this.player.M()));this.o.push(g.fp("yt-remote-before-disconnect",this.iI,this));this.o.push(g.fp("yt-remote-connection-change",this.uK,this));this.o.push(g.fp("yt-remote-receiver-availability-change",this.gz,this));this.o.push(g.fp("yt-remote-auto-connect",this.sK,this));this.o.push(g.fp("yt-remote-receiver-resumed",this.rK,this));this.o.push(g.fp("mdx-privacy-popup-confirm",this.WL,this));this.o.push(g.fp("mdx-privacy-popup-cancel",this.VL,this));this.gz()};
g.h.load=function(){this.player.cancelPlayback();g.OO.prototype.load.call(this);this.u=new i9(this,this.player,this.g);var a=(a=Ksa())?a.currentTime:0;var b=e9()?new B8($8(),void 0):null;0==a&&b&&(a=x8(C8(b)));0!=a&&this.Qc(a);Nsa(this,this.ek,this.ek);g.PR(this.player.app,6)};
g.h.unload=function(){this.player.O("mdxautoplaycanceled");this.l=this.i;g.Ei(this.u,this.g);this.g=this.u=null;g.OO.prototype.unload.call(this);g.PR(this.player.app,5);s9(this)};
g.h.W=function(){g.gp(this.o);g.OO.prototype.W.call(this)};
g.h.Ye=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.u.Gx.apply(this.u,[a].concat(g.fa(c)))};
g.h.getAdState=function(){return this.Lm};
g.h.aD=function(){return this.loaded?this.u.suggestion:null};
g.h.Le=function(){return this.g?C8(this.g).Le:!1};
g.h.hasNext=function(){return this.g?C8(this.g).hasNext:!1};
g.h.Qc=function(a,b){this.I=a||0;this.player.O("progresssync",a,b)};
g.h.getCurrentTime=function(){return this.I};
g.h.getProgressState=function(){var a=C8(this.g),b=this.player.getVideoData();return{allowSeeking:g.Q(this.player.M().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.ac():!a.isAdPlaying()&&this.player.ac(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.l+v8(a):a.l,isAtLiveHead:1>=(a.u?a.i+v8(a):a.i)-this.getCurrentTime(),loaded:a.F,seekableEnd:a.u?a.i+v8(a):a.i,seekableStart:0<a.o?a.o+v8(a):
a.o}};
g.h.nextVideo=function(){this.g&&this.g.nextVideo()};
g.h.Mn=function(){this.g&&this.g.Mn()};
g.h.iI=function(a){1==a&&(this.H=this.g?C8(this.g):null)};
g.h.uK=function(){var a=e9()?new B8($8(),void 0):null;if(a){var b=this.l;this.loaded&&this.unload();this.g=a;this.H=null;b.key!=this.i.key&&(this.l=b,this.load())}else g.Di(this.g),this.g=null,this.loaded&&(this.unload(),(a=this.H)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,x8(a)));this.player.O("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.gz=function(){this.D=[this.i].concat(Hsa());var a=a9()||this.i;t9(this,a);this.player.ka("onMdxReceiversChange")};
g.h.PL=function(a){!this.F&&g.DD(a,8)&&(this.player.pauseVideo(),s9(this))};
g.h.sK=function(){var a=a9();t9(this,a)};
g.h.rK=function(){this.l=a9()};
g.h.WL=function(){this.F=!0;s9(this);g9=!1;h9&&c9(h9,1);h9=null};
g.h.VL=function(){this.F=!1;s9(this);t9(this,this.i);this.l=this.i;g9=!1;h9=null;this.player.playVideo()};
g.h.yc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.D;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?r8():t9(this,b)),this.loaded?this.l:this.i;case "quickCast":return 2==this.D.length&&"cast-selector-receiver"==this.D[1].key?(b&&r8(),!0):!1}};
g.h.Ys=function(){this.g.Ys()};
g.h.Fb=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.WO.remote=r9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 11:31:41 Sep 06, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:55:37 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.962
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 15.811
  LoadShardBlock: 313.154 (3)
  PetaboxLoader3.datanode: 222.239 (4)
  PetaboxLoader3.resolve: 143.761 (2)
  load_resource: 159.37
*/