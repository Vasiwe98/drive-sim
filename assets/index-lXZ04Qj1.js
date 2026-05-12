(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $r="169",Ii={ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xh=0,Ea=1,yh=2,ll=1,hl=2,yn=3,Hn=0,De=1,Mn=2,On=0,Di=1,ar=2,wa=3,ba=4,Mh=5,ti=100,Sh=101,Eh=102,wh=103,bh=104,Th=200,Ah=201,Rh=202,Ch=203,cr=204,lr=205,Ph=206,Lh=207,Ih=208,Dh=209,Nh=210,Uh=211,Fh=212,Oh=213,Bh=214,hr=0,ur=1,dr=2,Oi=3,fr=4,pr=5,mr=6,gr=7,ul=0,zh=1,Hh=2,Bn=0,kh=1,Vh=2,Gh=3,Wh=4,Xh=5,qh=6,Yh=7,dl=300,Bi=301,zi=302,_r=303,vr=304,co=306,xr=1e3,si=1001,yr=1002,qe=1003,jh=1004,vs=1005,Je=1006,yo=1007,oi=1008,wn=1009,fl=1010,pl=1011,cs=1012,Zr=1013,ai=1014,Sn=1015,us=1016,Jr=1017,Qr=1018,Hi=1020,ml=35902,gl=1021,_l=1022,tn=1023,vl=1024,xl=1025,Ni=1026,ki=1027,yl=1028,ta=1029,Ml=1030,ea=1031,na=1033,Ks=33776,$s=33777,Zs=33778,Js=33779,Mr=35840,Sr=35841,Er=35842,wr=35843,br=36196,Tr=37492,Ar=37496,Rr=37808,Cr=37809,Pr=37810,Lr=37811,Ir=37812,Dr=37813,Nr=37814,Ur=37815,Fr=37816,Or=37817,Br=37818,zr=37819,Hr=37820,kr=37821,Qs=36492,Vr=36494,Gr=36495,Sl=36283,Wr=36284,Xr=36285,qr=36286,Kh=3200,$h=3201,El=0,Zh=1,Fn="",cn="srgb",Vn="srgb-linear",ia="display-p3",lo="display-p3-linear",io="linear",se="srgb",so="rec709",oo="p3",pi=7680,Ta=519,Jh=512,Qh=513,tu=514,wl=515,eu=516,nu=517,iu=518,su=519,Aa=35044,Ra="300 es",En=2e3,ro=2001;class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Yr=180/Math.PI;function ds(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function ou(s,t){return(s%t+t)%t}function Mo(s,t,e){return(1-e)*s+e*t}function Yi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ru={DEG2RAD:to};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,o,r,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=i[0],f=i[3],m=i[6],x=i[1],S=i[4],E=i[7],P=i[2],T=i[5],b=i[8];return o[0]=r*_+a*x+c*P,o[3]=r*f+a*S+c*T,o[6]=r*m+a*E+c*b,o[1]=l*_+u*x+d*P,o[4]=l*f+u*S+d*T,o[7]=l*m+u*E+d*b,o[2]=h*_+p*x+g*P,o[5]=h*f+p*S+g*T,o[8]=h*m+p*E+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-n*o*u+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*r-a*l,h=a*c-u*o,p=l*o-r*c,g=e*d+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-u*n)*_,t[2]=(a*n-i*r)*_,t[3]=h*_,t[4]=(u*e-i*c)*_,t[5]=(i*o-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(So.makeScale(t,e)),this}rotate(t){return this.premultiply(So.makeRotation(-t)),this}translate(t,e){return this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const So=new Ot;function bl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function au(){const s=ao("canvas");return s.style.display="block",s}const Ca={};function eo(s){s in Ca||(Ca[s]=!0,console.warn(s))}function cu(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function lu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pa=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),La=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ji={[Vn]:{transfer:io,primaries:so,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[cn]:{transfer:se,primaries:so,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[lo]:{transfer:io,primaries:oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(La),fromReference:s=>s.applyMatrix3(Pa)},[ia]:{transfer:se,primaries:oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(La),fromReference:s=>s.applyMatrix3(Pa).convertLinearToSRGB()}},uu=new Set([Vn,lo]),Zt={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!uu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ji[t].toReference,i=ji[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ji[s].primaries},getTransfer:function(s){return s===Fn?io:ji[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(ji[t].luminanceCoefficients)}};function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let mi;class du{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=ao("canvas")),mi.width=t.width,mi.height=t.height;const n=mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Ui(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fu=0;class Tl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(wo(i[r].image)):o.push(wo(i[r]))}else o=wo(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function wo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?du.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pu=0;class Ne extends ui{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=si,i=si,o=Je,r=oi,a=tn,c=wn,l=Ne.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=ds(),this.name="",this.source=new Tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xr:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xr:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=dl;Ne.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],_=c[2],f=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,E=(p+1)/2,P=(m+1)/2,T=(u+h)/4,b=(d+_)/4,R=(g+f)/4;return S>E&&S>P?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=T/n,o=b/n):E>P?E<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(E),n=T/i,o=R/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=b/o,i=R/o),this.set(n,i,o,e),this}let x=Math.sqrt((f-g)*(f-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mu extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Al extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gu extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let bn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const h=o[r+0],p=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==h||l!==p||u!==g){let f=1-a;const m=c*h+l*p+u*g+d*_,x=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const P=Math.sqrt(S),T=Math.atan2(P,m*x);f=Math.sin(f*T)/P,a=Math.sin(a*T)/P}const E=a*x;if(c=c*f+h*E,l=l*f+p*E,u=u*f+g*E,d=d*f+_*E,f===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=o[r],h=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+u*d+c*p-l*h,t[e+1]=c*g+u*h+l*d-a*p,t[e+2]=l*g+u*p+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(o/2),h=c(n/2),p=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-l)*p,this._z=(r-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(o+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(o-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(r-i)/p,this._x=(o+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*a+i*l-o*c,this._y=i*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-i*a,this._w=r*u-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),u=2*(a*e-o*i),d=2*(o*n-r*e);return this.x=e+c*l+r*d-a*u,this.y=n+c*u+a*l-o*d,this.z=i+c*d+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bo.copy(this).projectOnVector(t),this.sub(bo)}reflect(t){return this.sub(bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new k,Ia=new bn;class fs{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,je):je.fromBufferAttribute(o,r),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),ys.subVectors(this.max,Ki),gi.subVectors(t.a,Ki),_i.subVectors(t.b,Ki),vi.subVectors(t.c,Ki),An.subVectors(_i,gi),Rn.subVectors(vi,_i),Wn.subVectors(gi,vi);let e=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Wn.z,Wn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Wn.z,0,-Wn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Wn.y,Wn.x,0];return!To(e,gi,_i,vi,ys)||(e=[1,0,0,0,1,0,0,0,1],!To(e,gi,_i,vi,ys))?!1:(Ms.crossVectors(An,Rn),e=[Ms.x,Ms.y,Ms.z],To(e,gi,_i,vi,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new k,new k,new k,new k,new k,new k,new k,new k],je=new k,xs=new fs,gi=new k,_i=new k,vi=new k,An=new k,Rn=new k,Wn=new k,Ki=new k,ys=new k,Ms=new k,Xn=new k;function To(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Xn.fromArray(s,o);const a=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),c=t.dot(Xn),l=e.dot(Xn),u=n.dot(Xn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const _u=new fs,$i=new k,Ao=new k;class ho{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_u.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($i,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Ao)),this.expandByPoint($i.copy(t.center).sub(Ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new k,Ro=new k,Ss=new k,Cn=new k,Co=new k,Es=new k,Po=new k;let sa=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ro.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(Ro);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ss),a=Cn.dot(this.direction),c=-Cn.dot(Ss),l=Cn.lengthSq(),u=Math.abs(1-r*r);let d,h,p,g;if(u>0)if(d=r*c-a,h=r*a-c,g=o*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+r*h+2*a)+h*(r*d+h+2*c)+l}else h=o,d=Math.max(0,-(r*h+a)),p=-d*d+h*(h+2*c)+l;else h=-o,d=Math.max(0,-(r*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-r*o+a)),h=d>0?-o:Math.min(Math.max(-o,-c),o),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-o,-c),o),p=h*(h+2*c)+l):(d=Math.max(0,-(r*o+a)),h=d>0?o:Math.min(Math.max(-o,-c),o),p=-d*d+h*(h+2*c)+l);else h=r>0?-o:o,d=Math.max(0,-(r*h+a)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ro).addScaledVector(Ss,h),p}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(o=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(o=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,o){Co.subVectors(e,t),Es.subVectors(n,t),Po.crossVectors(Co,Es);let r=this.direction.dot(Po),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Cn.subVectors(this.origin,t);const c=a*this.direction.dot(Es.crossVectors(Cn,Es));if(c<0)return null;const l=a*this.direction.dot(Co.cross(Cn));if(l<0||c+l>r)return null;const u=-a*Cn.dot(Po);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ae{constructor(t,e,n,i,o,r,a,c,l,u,d,h,p,g,_,f){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,u,d,h,p,g,_,f)}set(t,e,n,i,o,r,a,c,l,u,d,h,p,g,_,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/xi.setFromMatrixColumn(t,0).length(),o=1/xi.setFromMatrixColumn(t,1).length(),r=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const h=r*u,p=r*d,g=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const h=c*u,p=c*d,g=l*u,_=l*d;e[0]=h+_*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*d,e[5]=r*u,e[9]=-a,e[2]=p*a-g,e[6]=_+h*a,e[10]=r*c}else if(t.order==="ZXY"){const h=c*u,p=c*d,g=l*u,_=l*d;e[0]=h-_*a,e[4]=-r*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*u,e[9]=_-h*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const h=r*u,p=r*d,g=a*u,_=a*d;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const h=r*c,p=r*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+p,e[1]=d,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=r*c,p=r*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=r*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vu,t,xu)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Pn.crossVectors(n,Be),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Pn.crossVectors(n,Be)),Pn.normalize(),ws.crossVectors(Be,Pn),i[0]=Pn.x,i[4]=ws.x,i[8]=Be.x,i[1]=Pn.y,i[5]=ws.y,i[9]=Be.y,i[2]=Pn.z,i[6]=ws.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],x=n[3],S=n[7],E=n[11],P=n[15],T=i[0],b=i[4],R=i[8],U=i[12],v=i[1],M=i[5],D=i[9],C=i[13],N=i[2],F=i[6],I=i[10],q=i[14],V=i[3],Z=i[7],st=i[11],rt=i[15];return o[0]=r*T+a*v+c*N+l*V,o[4]=r*b+a*M+c*F+l*Z,o[8]=r*R+a*D+c*I+l*st,o[12]=r*U+a*C+c*q+l*rt,o[1]=u*T+d*v+h*N+p*V,o[5]=u*b+d*M+h*F+p*Z,o[9]=u*R+d*D+h*I+p*st,o[13]=u*U+d*C+h*q+p*rt,o[2]=g*T+_*v+f*N+m*V,o[6]=g*b+_*M+f*F+m*Z,o[10]=g*R+_*D+f*I+m*st,o[14]=g*U+_*C+f*q+m*rt,o[3]=x*T+S*v+E*N+P*V,o[7]=x*b+S*M+E*F+P*Z,o[11]=x*R+S*D+E*I+P*st,o[15]=x*U+S*C+E*q+P*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],_=t[7],f=t[11],m=t[15];return g*(+o*c*d-i*l*d-o*a*h+n*l*h+i*a*p-n*c*p)+_*(+e*c*p-e*l*h+o*r*h-i*r*p+i*l*u-o*c*u)+f*(+e*l*d-e*a*p-o*r*d+n*r*p+o*a*u-n*l*u)+m*(-i*a*u-e*c*d+e*a*h+i*r*d-n*r*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],_=t[13],f=t[14],m=t[15],x=d*f*l-_*h*l+_*c*p-a*f*p-d*c*m+a*h*m,S=g*h*l-u*f*l-g*c*p+r*f*p+u*c*m-r*h*m,E=u*_*l-g*d*l+g*a*p-r*_*p-u*a*m+r*d*m,P=g*d*c-u*_*c-g*a*h+r*_*h+u*a*f-r*d*f,T=e*x+n*S+i*E+o*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=x*b,t[1]=(_*h*o-d*f*o-_*i*p+n*f*p+d*i*m-n*h*m)*b,t[2]=(a*f*o-_*c*o+_*i*l-n*f*l-a*i*m+n*c*m)*b,t[3]=(d*c*o-a*h*o-d*i*l+n*h*l+a*i*p-n*c*p)*b,t[4]=S*b,t[5]=(u*f*o-g*h*o+g*i*p-e*f*p-u*i*m+e*h*m)*b,t[6]=(g*c*o-r*f*o-g*i*l+e*f*l+r*i*m-e*c*m)*b,t[7]=(r*h*o-u*c*o+u*i*l-e*h*l-r*i*p+e*c*p)*b,t[8]=E*b,t[9]=(g*d*o-u*_*o-g*n*p+e*_*p+u*n*m-e*d*m)*b,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*m+e*a*m)*b,t[11]=(u*a*o-r*d*o-u*n*l+e*d*l+r*n*p-e*a*p)*b,t[12]=P*b,t[13]=(u*_*i-g*d*i+g*n*h-e*_*h-u*n*f+e*d*f)*b,t[14]=(g*a*i-r*_*i-g*n*c+e*_*c+r*n*f-e*a*f)*b,t[15]=(r*d*i-u*a*i+u*n*c-e*d*c-r*n*h+e*a*h)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*r,0,l*c-i*a,u*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,d=a+a,h=o*l,p=o*u,g=o*d,_=r*u,f=r*d,m=a*d,x=c*l,S=c*u,E=c*d,P=n.x,T=n.y,b=n.z;return i[0]=(1-(_+m))*P,i[1]=(p+E)*P,i[2]=(g-S)*P,i[3]=0,i[4]=(p-E)*T,i[5]=(1-(h+m))*T,i[6]=(f+x)*T,i[7]=0,i[8]=(g+S)*b,i[9]=(f-x)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=xi.set(i[0],i[1],i[2]).length();const r=xi.set(i[4],i[5],i[6]).length(),a=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Ke.copy(this);const l=1/o,u=1/r,d=1/a;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=En){const c=this.elements,l=2*o/(e-t),u=2*o/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let p,g;if(a===En)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ro)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=En){const c=this.elements,l=1/(e-t),u=1/(n-i),d=1/(r-o),h=(e+t)*l,p=(n+i)*u;let g,_;if(a===En)g=(r+o)*d,_=-2*d;else if(a===ro)g=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xi=new k,Ke=new ae,vu=new k(0,0,0),xu=new k(1,1,1),Pn=new k,ws=new k,Be=new k,Da=new ae,Na=new bn;class sn{constructor(t=0,e=0,n=0,i=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Na.setFromEuler(this),this.setFromQuaternion(Na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yu=0;const Ua=new k,yi=new bn,fn=new ae,bs=new k,Zi=new k,Mu=new k,Su=new bn,Fa=new k(1,0,0),Oa=new k(0,1,0),Ba=new k(0,0,1),za={type:"added"},Eu={type:"removed"},Mi={type:"childadded",child:null},Lo={type:"childremoved",child:null};class ye extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new k,e=new sn,n=new bn,i=new k(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ot}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Ua.copy(t).applyQuaternion(this.quaternion),this.position.add(Ua.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Zi,bs,this.up):fn.lookAt(bs,Zi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(fn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(za),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eu),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(za),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,Mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new k(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new k,pn=new k,Io=new k,mn=new k,Si=new k,Ei=new k,Ha=new k,Do=new k,No=new k,Uo=new k,Fo=new he,Oo=new he,Bo=new he;class Qe{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){$e.subVectors(i,e),pn.subVectors(n,e),Io.subVectors(t,e);const r=$e.dot($e),a=$e.dot(pn),c=$e.dot(Io),l=pn.dot(pn),u=pn.dot(Io),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,g=(r*u-a*c)*h;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,mn.x),c.addScaledVector(r,mn.y),c.addScaledVector(a,mn.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,n),Bo.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Fo,o.x),r.addScaledVector(Oo,o.y),r.addScaledVector(Bo,o.z),r}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),pn.subVectors(t,e),$e.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),$e.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Si.subVectors(i,n),Ei.subVectors(o,n),Do.subVectors(t,n);const c=Si.dot(Do),l=Ei.dot(Do);if(c<=0&&l<=0)return e.copy(n);No.subVectors(t,i);const u=Si.dot(No),d=Ei.dot(No);if(u>=0&&d<=u)return e.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(Si,r);Uo.subVectors(t,o);const p=Si.dot(Uo),g=Ei.dot(Uo);if(g>=0&&p<=g)return e.copy(o);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ei,a);const f=u*g-p*d;if(f<=0&&d-u>=0&&p-g>=0)return Ha.subVectors(o,i),a=(d-u)/(d-u+(p-g)),e.copy(i).addScaledVector(Ha,a);const m=1/(f+_+h);return r=_*m,a=h*m,e.copy(n).addScaledVector(Si,r).addScaledVector(Ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function zo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=ou(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=zo(r,o,t+1/3),this.g=zo(r,o,t),this.b=zo(r,o,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=cn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Zt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ae(Ee.r*255,0,255))*65536+Math.round(Ae(Ee.g*255,0,255))*256+Math.round(Ae(Ee.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,o=Ee.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=u<=.5?d/(r+a):d/(2-r-a),r){case n:c=(i-o)/d+(i<o?6:0);break;case i:c=(o-n)/d+2;break;case o:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=cn){Zt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Ts);const n=Mo(Ln.h,Ts.h,e),i=Mo(Ln.s,Ts.s,e),o=Mo(Ln.l,Ts.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new kt;kt.NAMES=Cl;let wu=0,Wi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=Di,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cr,this.blendDst=lr,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cr&&(n.blendSrc=this.blendSrc),this.blendDst!==lr&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Fi extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new k,As=new Nt;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),o=Pe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Aa&&(t.usage=this.usage),t}}class Pl extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ll extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bu=0;const Ge=new ae,Ho=new ye,wi=new k,ze=new fs,Ji=new fs,xe=new k;class Ue extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Ll:Pl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ot().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new we(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];ze.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(ze.min,Ji.min),ze.expandByPoint(xe),xe.addVectors(ze.max,Ji.max),ze.expandByPoint(xe)):(ze.expandByPoint(Ji.min),ze.expandByPoint(Ji.max))}ze.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)xe.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)xe.fromBufferAttribute(a,l),c&&(wi.fromBufferAttribute(t,l),xe.add(wi)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new k,c[R]=new k;const l=new k,u=new k,d=new k,h=new Nt,p=new Nt,g=new Nt,_=new k,f=new k;function m(R,U,v){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,U),d.fromBufferAttribute(n,v),h.fromBufferAttribute(o,R),p.fromBufferAttribute(o,U),g.fromBufferAttribute(o,v),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(M),f.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(M),a[R].add(_),a[U].add(_),a[v].add(_),c[R].add(f),c[U].add(f),c[v].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,U=x.length;R<U;++R){const v=x[R],M=v.start,D=v.count;for(let C=M,N=M+D;C<N;C+=3)m(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const S=new k,E=new k,P=new k,T=new k;function b(R){P.fromBufferAttribute(i,R),T.copy(P);const U=a[R];S.copy(U),S.sub(P.multiplyScalar(P.dot(U))).normalize(),E.crossVectors(T,U);const M=E.dot(c[R])<0?-1:1;r.setXYZW(R,S.x,S.y,S.z,M)}for(let R=0,U=x.length;R<U;++R){const v=x[R],M=v.start,D=v.count;for(let C=M,N=M+D;C<N;C+=3)b(t.getX(C+0)),b(t.getX(C+1)),b(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new k,o=new k,r=new k,a=new k,c=new k,l=new k,u=new k,d=new k;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),f=t.getX(h+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,f),u.subVectors(r,o),d.subVectors(i,o),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)i.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,o),d.subVectors(i,o),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let m=0;m<u;m++)h[g++]=l[p++]}return new nn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=t(h,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(i[c]=u,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],d=o[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new ae,qn=new sa,Rs=new ho,Va=new k,Cs=new k,Ps=new k,Ls=new k,ko=new k,Is=new k,Ga=new k,Ds=new k;class zt extends ye{constructor(t=new Ue,e=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Is.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(ko.fromBufferAttribute(d,t),r?Is.addScaledVector(ko,u):Is.addScaledVector(ko.sub(e),u))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(o),qn.copy(t.ray).recast(t.near),!(Rs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Rs,Va)===null||qn.origin.distanceToSquared(Va)>(t.far-t.near)**2))&&(ka.copy(o).invert(),qn.copy(t.ray).applyMatrix4(ka),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const f=h[g],m=r[f.materialIndex],x=Math.max(f.start,p.start),S=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let E=x,P=S;E<P;E+=3){const T=a.getX(E),b=a.getX(E+1),R=a.getX(E+2);i=Ns(this,m,t,n,l,u,d,T,b,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const x=a.getX(f),S=a.getX(f+1),E=a.getX(f+2);i=Ns(this,r,t,n,l,u,d,x,S,E),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const f=h[g],m=r[f.materialIndex],x=Math.max(f.start,p.start),S=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let E=x,P=S;E<P;E+=3){const T=E,b=E+1,R=E+2;i=Ns(this,m,t,n,l,u,d,T,b,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const x=f,S=f+1,E=f+2;i=Ns(this,r,t,n,l,u,d,x,S,E),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Tu(s,t,e,n,i,o,r,a){let c;if(t.side===De?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Hn,a),c===null)return null;Ds.copy(a),Ds.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ds);return l<e.near||l>e.far?null:{distance:l,point:Ds.clone(),object:s}}function Ns(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,Cs),s.getVertexPosition(c,Ps),s.getVertexPosition(l,Ls);const u=Tu(s,t,e,n,Cs,Ps,Ls,Ga);if(u){const d=new k;Qe.getBarycoord(Ga,Cs,Ps,Ls,d),i&&(u.uv=Qe.getInterpolatedAttribute(i,a,c,l,d,new Nt)),o&&(u.uv1=Qe.getInterpolatedAttribute(o,a,c,l,d,new Nt)),r&&(u.normal=Qe.getInterpolatedAttribute(r,a,c,l,d,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new k,materialIndex:0};Qe.getNormal(Cs,Ps,Ls,h.normal),u.face=h,u.barycoord=d}return u}class de extends Ue{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(d,2));function g(_,f,m,x,S,E,P,T,b,R,U){const v=E/b,M=P/R,D=E/2,C=P/2,N=T/2,F=b+1,I=R+1;let q=0,V=0;const Z=new k;for(let st=0;st<I;st++){const rt=st*M-C;for(let ot=0;ot<F;ot++){const Bt=ot*v-D;Z[_]=Bt*x,Z[f]=rt*S,Z[m]=N,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[f]=0,Z[m]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(ot/b),d.push(1-st/R),q+=1}}for(let st=0;st<R;st++)for(let rt=0;rt<b;rt++){const ot=h+rt+F*st,Bt=h+rt+F*(st+1),j=h+(rt+1)+F*(st+1),et=h+(rt+1)+F*st;c.push(ot,Bt,et),c.push(Bt,j,et),V+=6}a.addGroup(p,V,U),p+=V,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){const t={};for(let e=0;e<s.length;e++){const n=Vi(s[e]);for(const i in n)t[i]=n[i]}return t}function Au(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Il(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Ru={clone:Vi,merge:Te};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dl extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new k,Wa=new Nt,Xa=new Nt;class Xe extends Dl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Wa,Xa),e.subVectors(Xa,Wa)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bi=-90,Ti=1;class Lu extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(bi,Ti,t,e);i.layers=this.layers,this.add(i);const o=new Xe(bi,Ti,t,e);o.layers=this.layers,this.add(o);const r=new Xe(bi,Ti,t,e);r.layers=this.layers,this.add(r);const a=new Xe(bi,Ti,t,e);a.layers=this.layers,this.add(a);const c=new Xe(bi,Ti,t,e);c.layers=this.layers,this.add(c);const l=new Xe(bi,Ti,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nl extends Ne{constructor(t,e,n,i,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Bi,super(t,e,n,i,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Iu extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Nl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new de(5,5,5),o=new kn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:On});o.uniforms.tEquirect.value=e;const r=new zt(i,o),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=Je),new Lu(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const Vo=new k,Du=new k,Nu=new Ot;class Un{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vo.subVectors(n,e).cross(Du.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nu.getNormalMatrix(t),i=this.coplanarPoint(Vo).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new ho,Us=new k;class oa{constructor(t=new Un,e=new Un,n=new Un,i=new Un,o=new Un,r=new Un){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],u=i[5],d=i[6],h=i[7],p=i[8],g=i[9],_=i[10],f=i[11],m=i[12],x=i[13],S=i[14],E=i[15];if(n[0].setComponents(c-o,h-l,f-p,E-m).normalize(),n[1].setComponents(c+o,h+l,f+p,E+m).normalize(),n[2].setComponents(c+r,h+u,f+g,E+x).normalize(),n[3].setComponents(c-r,h-u,f-g,E-x).normalize(),n[4].setComponents(c-a,h-d,f-_,E-S).normalize(),e===En)n[5].setComponents(c+a,h+d,f+_,E+S).normalize();else if(e===ro)n[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Us.x=i.normal.x>0?t.max.x:t.min.x,Us.y=i.normal.y>0?t.max.y:t.min.y,Us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ul(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Uu(s){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}class li extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=t/a,h=e/c,p=[],g=[],_=[],f=[];for(let m=0;m<u;m++){const x=m*h-r;for(let S=0;S<l;S++){const E=S*d-o;g.push(E,-x,0),_.push(0,0,1),f.push(S/a),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const S=x+l*m,E=x+l*(m+1),P=x+1+l*(m+1),T=x+1+l*m;p.push(S,E,T),p.push(E,P,T)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}var Fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ou=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ku=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$u=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,od=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ud=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ep=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Fu,alphahash_pars_fragment:Ou,alphamap_fragment:Bu,alphamap_pars_fragment:zu,alphatest_fragment:Hu,alphatest_pars_fragment:ku,aomap_fragment:Vu,aomap_pars_fragment:Gu,batching_pars_vertex:Wu,batching_vertex:Xu,begin_vertex:qu,beginnormal_vertex:Yu,bsdfs:ju,iridescence_fragment:Ku,bumpmap_pars_fragment:$u,clipping_planes_fragment:Zu,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:Qu,clipping_planes_vertex:td,color_fragment:ed,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:sd,common:od,cube_uv_reflection_fragment:rd,defaultnormal_vertex:ad,displacementmap_pars_vertex:cd,displacementmap_vertex:ld,emissivemap_fragment:hd,emissivemap_pars_fragment:ud,colorspace_fragment:dd,colorspace_pars_fragment:fd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:_d,envmap_physical_pars_fragment:Rd,envmap_vertex:vd,fog_vertex:xd,fog_pars_vertex:yd,fog_fragment:Md,fog_pars_fragment:Sd,gradientmap_pars_fragment:Ed,lightmap_pars_fragment:wd,lights_lambert_fragment:bd,lights_lambert_pars_fragment:Td,lights_pars_begin:Ad,lights_toon_fragment:Cd,lights_toon_pars_fragment:Pd,lights_phong_fragment:Ld,lights_phong_pars_fragment:Id,lights_physical_fragment:Dd,lights_physical_pars_fragment:Nd,lights_fragment_begin:Ud,lights_fragment_maps:Fd,lights_fragment_end:Od,logdepthbuf_fragment:Bd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:kd,map_fragment:Vd,map_pars_fragment:Gd,map_particle_fragment:Wd,map_particle_pars_fragment:Xd,metalnessmap_fragment:qd,metalnessmap_pars_fragment:Yd,morphinstance_vertex:jd,morphcolor_vertex:Kd,morphnormal_vertex:$d,morphtarget_pars_vertex:Zd,morphtarget_vertex:Jd,normal_fragment_begin:Qd,normal_fragment_maps:tf,normal_pars_fragment:ef,normal_pars_vertex:nf,normal_vertex:sf,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:af,clearcoat_pars_fragment:cf,iridescence_pars_fragment:lf,opaque_fragment:hf,packing:uf,premultiplied_alpha_fragment:df,project_vertex:ff,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:gf,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:xf,shadowmap_vertex:yf,shadowmask_pars_fragment:Mf,skinbase_vertex:Sf,skinning_pars_vertex:Ef,skinning_vertex:wf,skinnormal_vertex:bf,specularmap_fragment:Tf,specularmap_pars_fragment:Af,tonemapping_fragment:Rf,tonemapping_pars_fragment:Cf,transmission_fragment:Pf,transmission_pars_fragment:Lf,uv_pars_fragment:If,uv_pars_vertex:Df,uv_vertex:Nf,worldpos_vertex:Uf,background_vert:Ff,background_frag:Of,backgroundCube_vert:Bf,backgroundCube_frag:zf,cube_vert:Hf,cube_frag:kf,depth_vert:Vf,depth_frag:Gf,distanceRGBA_vert:Wf,distanceRGBA_frag:Xf,equirect_vert:qf,equirect_frag:Yf,linedashed_vert:jf,linedashed_frag:Kf,meshbasic_vert:$f,meshbasic_frag:Zf,meshlambert_vert:Jf,meshlambert_frag:Qf,meshmatcap_vert:tp,meshmatcap_frag:ep,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:sp,meshphong_frag:op,meshphysical_vert:rp,meshphysical_frag:ap,meshtoon_vert:cp,meshtoon_frag:lp,points_vert:hp,points_frag:up,shadow_vert:dp,shadow_frag:fp,sprite_vert:pp,sprite_frag:mp},ct={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ln={basic:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Te([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Te([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Te([ct.points,ct.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Te([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Te([ct.common,ct.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Te([ct.sprite,ct.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Te([ct.common,ct.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Te([ct.lights,ct.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};ln.physical={uniforms:Te([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Fs={r:0,b:0,g:0},jn=new sn,gp=new ae;function _p(s,t,e,n,i,o,r){const a=new kt(0);let c=o===!0?0:1,l,u,d=null,h=0,p=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?e:t).get(S)),S}function _(x){let S=!1;const E=g(x);E===null?m(a,c):E&&E.isColor&&(m(E,1),S=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(x,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===co)?(u===void 0&&(u=new zt(new de(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Vi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),jn.copy(S.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gp.makeRotationFromEuler(jn)),u.material.toneMapped=Zt.getTransfer(E.colorSpace)!==se,(d!==E||h!==E.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,p=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new zt(new li(2,2),new kn({name:"BackgroundMaterial",uniforms:Vi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(E.colorSpace)!==se,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,p=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,S){x.getRGB(Fs,Il(s)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),c=S,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(a,c)},render:_,addToRenderList:f}}function vp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let o=i,r=!1;function a(v,M,D,C,N){let F=!1;const I=d(C,D,M);o!==I&&(o=I,l(o.object)),F=p(v,C,D,N),F&&g(v,C,D,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(F||r)&&(r=!1,E(v,M,D,C),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function d(v,M,D){const C=D.wireframe===!0;let N=n[v.id];N===void 0&&(N={},n[v.id]=N);let F=N[M.id];F===void 0&&(F={},N[M.id]=F);let I=F[C];return I===void 0&&(I=h(c()),F[C]=I),I}function h(v){const M=[],D=[],C=[];for(let N=0;N<e;N++)M[N]=0,D[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:D,attributeDivisors:C,object:v,attributes:{},index:null}}function p(v,M,D,C){const N=o.attributes,F=M.attributes;let I=0;const q=D.getAttributes();for(const V in q)if(q[V].location>=0){const st=N[V];let rt=F[V];if(rt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),st===void 0||st.attribute!==rt||rt&&st.data!==rt.data)return!0;I++}return o.attributesNum!==I||o.index!==C}function g(v,M,D,C){const N={},F=M.attributes;let I=0;const q=D.getAttributes();for(const V in q)if(q[V].location>=0){let st=F[V];st===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(st=v.instanceColor));const rt={};rt.attribute=st,st&&st.data&&(rt.data=st.data),N[V]=rt,I++}o.attributes=N,o.attributesNum=I,o.index=C}function _(){const v=o.newAttributes;for(let M=0,D=v.length;M<D;M++)v[M]=0}function f(v){m(v,0)}function m(v,M){const D=o.newAttributes,C=o.enabledAttributes,N=o.attributeDivisors;D[v]=1,C[v]===0&&(s.enableVertexAttribArray(v),C[v]=1),N[v]!==M&&(s.vertexAttribDivisor(v,M),N[v]=M)}function x(){const v=o.newAttributes,M=o.enabledAttributes;for(let D=0,C=M.length;D<C;D++)M[D]!==v[D]&&(s.disableVertexAttribArray(D),M[D]=0)}function S(v,M,D,C,N,F,I){I===!0?s.vertexAttribIPointer(v,M,D,N,F):s.vertexAttribPointer(v,M,D,C,N,F)}function E(v,M,D,C){_();const N=C.attributes,F=D.getAttributes(),I=M.defaultAttributeValues;for(const q in F){const V=F[q];if(V.location>=0){let Z=N[q];if(Z===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor)),Z!==void 0){const st=Z.normalized,rt=Z.itemSize,ot=t.get(Z);if(ot===void 0)continue;const Bt=ot.buffer,j=ot.type,et=ot.bytesPerElement,pt=j===s.INT||j===s.UNSIGNED_INT||Z.gpuType===Zr;if(Z.isInterleavedBufferAttribute){const Q=Z.data,at=Q.stride,St=Z.offset;if(Q.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut,Q.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)f(V.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,Bt);for(let Ut=0;Ut<V.locationSize;Ut++)S(V.location+Ut,rt/V.locationSize,j,st,at*et,(St+rt/V.locationSize*Ut)*et,pt)}else{if(Z.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q,Z.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Q=0;Q<V.locationSize;Q++)f(V.location+Q);s.bindBuffer(s.ARRAY_BUFFER,Bt);for(let Q=0;Q<V.locationSize;Q++)S(V.location+Q,rt/V.locationSize,j,st,rt*et,rt/V.locationSize*Q*et,pt)}}else if(I!==void 0){const st=I[q];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(V.location,st);break;case 3:s.vertexAttrib3fv(V.location,st);break;case 4:s.vertexAttrib4fv(V.location,st);break;default:s.vertexAttrib1fv(V.location,st)}}}}x()}function P(){R();for(const v in n){const M=n[v];for(const D in M){const C=M[D];for(const N in C)u(C[N].object),delete C[N];delete M[D]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const M=n[v.id];for(const D in M){const C=M[D];for(const N in C)u(C[N].object),delete C[N];delete M[D]}delete n[v.id]}function b(v){for(const M in n){const D=n[M];if(D[v.id]===void 0)continue;const C=D[v.id];for(const N in C)u(C[N].object),delete C[N];delete D[v.id]}}function R(){U(),r=!0,o!==i&&(o=i,l(o.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:f,disableUnusedAttributes:x}}function xp(s,t,e){let n;function i(l){n=l}function o(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,d){d!==0&&(s.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,n,1)}function c(l,u,d,h){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function yp(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){return!(b!==tn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==wn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Sn&&!R)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:P,maxSamples:T}}function Mp(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Un,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||o&&!f)o?u(null):l();else{const x=o?0:n,S=x*4;let E=m.clippingState||null;c.value=E,E=u(g,h,S,p);for(let P=0;P!==S;++P)E[P]=e[P];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let f=null;if(_!==0){if(f=c.value,g!==!0||f===null){const m=p+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(f===null||f.length<m)&&(f=new Float32Array(m));for(let S=0,E=p;S!==_;++S,E+=4)r.copy(d[S]).applyMatrix4(x,a),r.normal.toArray(f,E),f[E+3]=r.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Sp(s){let t=new WeakMap;function e(r,a){return a===_r?r.mapping=Bi:a===vr&&(r.mapping=zi),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===_r||a===vr)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Iu(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Fl extends Dl{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,qa=[.125,.215,.35,.446,.526,.582],ei=20,Go=new Fl,Ya=new kt;let Wo=null,Xo=0,qo=0,Yo=!1;const Qn=(1+Math.sqrt(5))/2,Ai=1/Qn,ja=[new k(-Qn,Ai,0),new k(Qn,Ai,0),new k(-Ai,0,Qn),new k(Ai,0,Qn),new k(0,Qn,-Ai),new k(0,Qn,Ai),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Ka{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,qo),this._renderer.xr.enabled=Yo,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:us,format:tn,colorSpace:Vn,depthBuffer:!1},i=$a(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$a(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(o)),this._blurMaterial=wp(o,t,e)}return i}_compileMaterial(t){const e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,i){const a=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ya),u.toneMapping=Bn,u.autoClear=!1;const p=new Fi({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new zt(new de,p);let _=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,_=!0):(p.color.copy(Ya),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):x===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const S=this._cubeSize;Os(i,x*S,m>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Bi||t.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new zt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ja[(i-o-1)%ja.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new zt(this._lodPlanes[i],l),h=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*ei-1),_=o/g,f=isFinite(o)?1+Math.floor(u*_):ei;f>ei&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ei}`);const m=[];let x=0;for(let b=0;b<ei;++b){const R=b/_,U=Math.exp(-R*R/2);m.push(U),b===0?x+=U:b<f&&(x+=2*U)}for(let b=0;b<m.length;b++)m[b]=m[b]/x;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=m,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const E=this._sizeLods[i],P=3*E*(i>S-Li?i-S+Li:0),T=4*(this._cubeSize-E);Os(e,P,T,3*E,2*E),c.setRenderTarget(e),c.render(d,Go)}}function Ep(s){const t=[],e=[],n=[];let i=s;const o=s-Li+1+qa.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-Li?c=qa[r-s+Li-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,f=2,m=1,x=new Float32Array(_*g*p),S=new Float32Array(f*g*p),E=new Float32Array(m*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,R=T>2?0:-1,U=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];x.set(U,_*g*T),S.set(h,f*g*T);const v=[T,T,T,T,T,T];E.set(v,m*g*T)}const P=new Ue;P.setAttribute("position",new nn(x,_)),P.setAttribute("uv",new nn(S,f)),P.setAttribute("faceIndex",new nn(E,m)),t.push(P),i>Li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $a(s,t,e){const n=new ci(s,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function wp(s,t,e){const n=new Float32Array(ei),i=new k(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Za(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ja(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_r||c===vr,u=c===Bi||c===zi;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Ka(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new Ka(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Tp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&eo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ap(s,t,e,n){const i={},o=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let f=0,m=_.length;f<m;f++)t.remove(_[f])}h.removeEventListener("dispose",r),delete i[h.id];const p=o.get(h);p&&(t.remove(p),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)t.update(h[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let f=0,m=_.length;f<m;f++)t.update(_[f],s.ARRAY_BUFFER)}}function l(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let S=0,E=x.length;S<E;S+=3){const P=x[S+0],T=x[S+1],b=x[S+2];h.push(P,T,T,b,b,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let S=0,E=x.length/3-1;S<E;S+=3){const P=S+0,T=S+1,b=S+2;h.push(P,T,T,b,b,P)}}else return;const f=new(bl(h)?Ll:Pl)(h,1);f.version=_;const m=o.get(d);m&&t.remove(m),o.set(d,f)}function u(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Rp(s,t,e){let n;function i(h){n=h}let o,r;function a(h){o=h.type,r=h.bytesPerElement}function c(h,p){s.drawElements(n,p,o,h*r),e.update(p,n,1)}function l(h,p,g){g!==0&&(s.drawElementsInstanced(n,p,o,h*r,g),e.update(p,n,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,h,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function d(h,p,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)l(h[m]/r,p[m],_[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,o,h,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=p[x];for(let x=0;x<_.length;x++)e.update(m,n,_[x])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Cp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Pp(s,t,e){const n=new WeakMap,i=new he;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),f===!0&&(E=3);let P=a.attributes.position.count*E,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const b=new Float32Array(P*T*4*d),R=new Al(b,P,T,d);R.type=Sn,R.needsUpdate=!0;const U=E*4;for(let M=0;M<d;M++){const D=m[M],C=x[M],N=S[M],F=P*T*4*M;for(let I=0;I<D.count;I++){const q=I*U;g===!0&&(i.fromBufferAttribute(D,I),b[F+q+0]=i.x,b[F+q+1]=i.y,b[F+q+2]=i.z,b[F+q+3]=0),_===!0&&(i.fromBufferAttribute(C,I),b[F+q+4]=i.x,b[F+q+5]=i.y,b[F+q+6]=i.z,b[F+q+7]=0),f===!0&&(i.fromBufferAttribute(N,I),b[F+q+8]=i.x,b[F+q+9]=i.y,b[F+q+10]=i.z,b[F+q+11]=N.itemSize===4?i.w:1)}}h={count:d,texture:R,size:new Nt(P,T)},n.set(a,h),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:o}}function Lp(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return d}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Ol extends Ne{constructor(t,e,n,i,o,r,a,c,l,u=Ni){if(u!==Ni&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=ai),n===void 0&&u===ki&&(n=Hi),super(null,i,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bl=new Ne,Qa=new Ol(1,1),zl=new Al,Hl=new gu,kl=new Nl,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function Xi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=tc[i];if(o===void 0&&(o=new Float32Array(i),tc[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function uo(s,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ip(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function Fp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;sc.set(n),s.uniformMatrix2fv(this.addr,!1,sc),ve(e,n)}}function Op(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;ic.set(n),s.uniformMatrix3fv(this.addr,!1,ic),ve(e,n)}}function Bp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;nc.set(n),s.uniformMatrix4fv(this.addr,!1,nc),ve(e,n)}}function zp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function Gp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function Yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Qa.compareFunction=wl,o=Qa):o=Bl,e.setTexture2D(t||o,i)}function jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hl,i)}function Kp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||kl,i)}function $p(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zl,i)}function Zp(s){switch(s){case 5126:return Ip;case 35664:return Dp;case 35665:return Np;case 35666:return Up;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return kp;case 35669:case 35673:return Vp;case 5125:return Gp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return $p}}function Jp(s,t){s.uniform1fv(this.addr,t)}function Qp(s,t){const e=Xi(t,this.size,2);s.uniform2fv(this.addr,e)}function tm(s,t){const e=Xi(t,this.size,3);s.uniform3fv(this.addr,e)}function em(s,t){const e=Xi(t,this.size,4);s.uniform4fv(this.addr,e)}function nm(s,t){const e=Xi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function im(s,t){const e=Xi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sm(s,t){const e=Xi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function om(s,t){s.uniform1iv(this.addr,t)}function rm(s,t){s.uniform2iv(this.addr,t)}function am(s,t){s.uniform3iv(this.addr,t)}function cm(s,t){s.uniform4iv(this.addr,t)}function lm(s,t){s.uniform1uiv(this.addr,t)}function hm(s,t){s.uniform2uiv(this.addr,t)}function um(s,t){s.uniform3uiv(this.addr,t)}function dm(s,t){s.uniform4uiv(this.addr,t)}function fm(s,t,e){const n=this.cache,i=t.length,o=uo(e,i);_e(n,o)||(s.uniform1iv(this.addr,o),ve(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Bl,o[r])}function pm(s,t,e){const n=this.cache,i=t.length,o=uo(e,i);_e(n,o)||(s.uniform1iv(this.addr,o),ve(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Hl,o[r])}function mm(s,t,e){const n=this.cache,i=t.length,o=uo(e,i);_e(n,o)||(s.uniform1iv(this.addr,o),ve(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||kl,o[r])}function gm(s,t,e){const n=this.cache,i=t.length,o=uo(e,i);_e(n,o)||(s.uniform1iv(this.addr,o),ve(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||zl,o[r])}function _m(s){switch(s){case 5126:return Jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return om;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return cm;case 5125:return lm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zp(e.type)}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}}class ym{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function oc(s,t){s.seq.push(t),s.map[t.id]=t}function Mm(s,t,e){const n=s.name,i=n.length;for(jo.lastIndex=0;;){const o=jo.exec(n),r=jo.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){oc(e,l===void 0?new vm(a,s,t):new xm(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new ym(a),oc(e,d)),e=d}}}class no{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);Mm(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function rc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Sm=37297;let Em=0;function wm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function bm(s){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s);let n;switch(t===e?n="":t===oo&&e===so?n="LinearDisplayP3ToLinearSRGB":t===so&&e===oo&&(n="LinearSRGBToLinearDisplayP3"),s){case Vn:case lo:return[n,"LinearTransferOETF"];case cn:case ia:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ac(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+wm(s.getShaderSource(t),r)}else return i}function Tm(s,t){const e=bm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Am(s,t){let e;switch(t){case kh:e="Linear";break;case Vh:e="Reinhard";break;case Gh:e="Cineon";break;case Wh:e="ACESFilmic";break;case qh:e="AgX";break;case Yh:e="Neutral";break;case Xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bs=new k;function Rm(){Zt.getLuminanceCoefficients(Bs);const s=Bs.x.toFixed(4),t=Bs.y.toFixed(4),e=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Pm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function ss(s){return s!==""}function cc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(s){return s.replace(Im,Nm)}const Dm=new Map;function Nm(s,t){let e=Ft[t];if(e===void 0){const n=Dm.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jr(e)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(s){return s.replace(Um,Fm)}function Fm(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function uc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Om(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ll?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bi:case zi:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case zh:t="ENVMAP_BLENDING_MIX";break;case Hh:t="ENVMAP_BLENDING_ADD";break}return t}function km(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Vm(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Om(e),l=Bm(e),u=zm(e),d=Hm(e),h=km(e),p=Cm(e),g=Pm(o),_=i.createProgram();let f,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`)):(f=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),m=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Tm("linearToOutputTexel",e.outputColorSpace),Rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),r=jr(r),r=cc(r,e),r=lc(r,e),a=jr(a),a=cc(a,e),a=lc(a,e),r=hc(r),a=hc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=x+f+r,E=x+m+a,P=rc(i,i.VERTEX_SHADER,S),T=rc(i,i.FRAGMENT_SHADER,E);i.attachShader(_,P),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(M){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_).trim(),C=i.getShaderInfoLog(P).trim(),N=i.getShaderInfoLog(T).trim();let F=!0,I=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,T);else{const q=ac(i,P,"vertex"),V=ac(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+D+`
`+q+`
`+V)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(C===""||N==="")&&(I=!1);I&&(M.diagnostics={runnable:F,programLog:D,vertexShader:{log:C,prefix:f},fragmentShader:{log:N,prefix:m}})}i.deleteShader(P),i.deleteShader(T),R=new no(i,_),U=Lm(i,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let U;this.getAttributes=function(){return U===void 0&&b(this),U};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Sm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Em++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let Gm=0;class Wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xm(t),e.set(t,n)),n}}class Xm{constructor(t){this.id=Gm++,this.code=t,this.usedTimes=0}}function qm(s,t,e,n,i,o,r){const a=new Rl,c=new Wm,l=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,p=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,M,D,C,N){const F=C.fog,I=N.geometry,q=v.isMeshStandardMaterial?C.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||q),Z=V&&V.mapping===co?V.image.height:null,st=_[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const rt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ot=rt!==void 0?rt.length:0;let Bt=0;I.morphAttributes.position!==void 0&&(Bt=1),I.morphAttributes.normal!==void 0&&(Bt=2),I.morphAttributes.color!==void 0&&(Bt=3);let j,et,pt,Q;if(st){const Ce=ln[st];j=Ce.vertexShader,et=Ce.fragmentShader}else j=v.vertexShader,et=v.fragmentShader,c.update(v),pt=c.getVertexShaderID(v),Q=c.getFragmentShaderID(v);const at=s.getRenderTarget(),St=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,Ht=!!v.map,It=!!v.matcap,O=!!V,oe=!!v.aoMap,Vt=!!v.lightMap,Xt=!!v.bumpMap,Rt=!!v.normalMap,ee=!!v.displacementMap,Lt=!!v.emissiveMap,L=!!v.metalnessMap,w=!!v.roughnessMap,G=v.anisotropy>0,$=v.clearcoat>0,tt=v.dispersion>0,K=v.iridescence>0,Et=v.sheen>0,lt=v.transmission>0,_t=G&&!!v.anisotropyMap,qt=$&&!!v.clearcoatMap,nt=$&&!!v.clearcoatNormalMap,vt=$&&!!v.clearcoatRoughnessMap,Ct=K&&!!v.iridescenceMap,Pt=K&&!!v.iridescenceThicknessMap,xt=Et&&!!v.sheenColorMap,Gt=Et&&!!v.sheenRoughnessMap,Dt=!!v.specularMap,te=!!v.specularColorMap,B=!!v.specularIntensityMap,mt=lt&&!!v.transmissionMap,Y=lt&&!!v.thicknessMap,J=!!v.gradientMap,ut=!!v.alphaMap,gt=v.alphaTest>0,Wt=!!v.alphaHash,fe=!!v.extensions;let Re=Bn;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Re=s.toneMapping);const jt={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:j,fragmentShader:et,defines:v.defines,customVertexShaderID:pt,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:St,instancingColor:St&&N.instanceColor!==null,instancingMorph:St&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Vn,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:It,envMap:O,envMapMode:O&&V.mapping,envMapCubeUVHeight:Z,aoMap:oe,lightMap:Vt,bumpMap:Xt,normalMap:Rt,displacementMap:p&&ee,emissiveMap:Lt,normalMapObjectSpace:Rt&&v.normalMapType===Zh,normalMapTangentSpace:Rt&&v.normalMapType===El,metalnessMap:L,roughnessMap:w,anisotropy:G,anisotropyMap:_t,clearcoat:$,clearcoatMap:qt,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:tt,iridescence:K,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:Et,sheenColorMap:xt,sheenRoughnessMap:Gt,specularMap:Dt,specularColorMap:te,specularIntensityMap:B,transmission:lt,transmissionMap:mt,thicknessMap:Y,gradientMap:J,opaque:v.transparent===!1&&v.blending===Di&&v.alphaToCoverage===!1,alphaMap:ut,alphaTest:gt,alphaHash:Wt,combine:v.combine,mapUv:Ht&&f(v.map.channel),aoMapUv:oe&&f(v.aoMap.channel),lightMapUv:Vt&&f(v.lightMap.channel),bumpMapUv:Xt&&f(v.bumpMap.channel),normalMapUv:Rt&&f(v.normalMap.channel),displacementMapUv:ee&&f(v.displacementMap.channel),emissiveMapUv:Lt&&f(v.emissiveMap.channel),metalnessMapUv:L&&f(v.metalnessMap.channel),roughnessMapUv:w&&f(v.roughnessMap.channel),anisotropyMapUv:_t&&f(v.anisotropyMap.channel),clearcoatMapUv:qt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&f(v.sheenRoughnessMap.channel),specularMapUv:Dt&&f(v.specularMap.channel),specularColorMapUv:te&&f(v.specularColorMap.channel),specularIntensityMapUv:B&&f(v.specularIntensityMap.channel),transmissionMapUv:mt&&f(v.transmissionMap.channel),thicknessMapUv:Y&&f(v.thicknessMap.channel),alphaMapUv:ut&&f(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Rt||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ht||ut),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===De,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function x(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)M.push(D),M.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(S(M,v),E(M,v),M.push(s.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function S(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function E(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),v.push(a.mask)}function P(v){const M=_[v.type];let D;if(M){const C=ln[M];D=Ru.clone(C.uniforms)}else D=v.uniforms;return D}function T(v,M){let D;for(let C=0,N=u.length;C<N;C++){const F=u[C];if(F.cacheKey===M){D=F,++D.usedTimes;break}}return D===void 0&&(D=new Vm(s,M,v,o),u.push(D)),D}function b(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function R(v){c.remove(v)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:P,acquireProgram:T,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:U}}function Ym(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function jm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function dc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fc(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(d,h,p,g,_,f){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:f},s[t]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=f),t++,m}function a(d,h,p,g,_,f){const m=r(d,h,p,g,_,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function c(d,h,p,g,_,f){const m=r(d,h,p,g,_,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function l(d,h){e.length>1&&e.sort(d||jm),n.length>1&&n.sort(h||dc),i.length>1&&i.sort(h||dc)}function u(){for(let d=t,h=s.length;d<h;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:u,sort:l}}function Km(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new fc,s.set(n,[r])):i>=o.length?(r=new fc,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function $m(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new kt};break;case"SpotLight":e={position:new k,direction:new k,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function Zm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Jm=0;function Qm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tg(s){const t=new $m,e=Zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const i=new k,o=new ae,r=new ae;function a(l){let u=0,d=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,g=0,_=0,f=0,m=0,x=0,S=0,E=0,P=0,T=0,b=0;l.sort(Qm);for(let U=0,v=l.length;U<v;U++){const M=l[U],D=M.color,C=M.intensity,N=M.distance,F=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=D.r*C,d+=D.g*C,h+=D.b*C;else if(M.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(M.sh.coefficients[I],C);b++}else if(M.isDirectionalLight){const I=t.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const q=M.shadow,V=e.get(M);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=M.shadow.matrix,x++}n.directional[p]=I,p++}else if(M.isSpotLight){const I=t.get(M);I.position.setFromMatrixPosition(M.matrixWorld),I.color.copy(D).multiplyScalar(C),I.distance=N,I.coneCos=Math.cos(M.angle),I.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),I.decay=M.decay,n.spot[_]=I;const q=M.shadow;if(M.map&&(n.spotLightMap[P]=M.map,P++,q.updateMatrices(M),M.castShadow&&T++),n.spotLightMatrix[_]=q.matrix,M.castShadow){const V=e.get(M);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=F,E++}_++}else if(M.isRectAreaLight){const I=t.get(M);I.color.copy(D).multiplyScalar(C),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),n.rectArea[f]=I,f++}else if(M.isPointLight){const I=t.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),I.distance=M.distance,I.decay=M.decay,M.castShadow){const q=M.shadow,V=e.get(M);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=M.shadow.matrix,S++}n.point[g]=I,g++}else if(M.isHemisphereLight){const I=t.get(M);I.skyColor.copy(M.color).multiplyScalar(C),I.groundColor.copy(M.groundColor).multiplyScalar(C),n.hemi[m]=I,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==f||R.hemiLength!==m||R.numDirectionalShadows!==x||R.numPointShadows!==S||R.numSpotShadows!==E||R.numSpotMaps!==P||R.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=f,R.hemiLength=m,R.numDirectionalShadows=x,R.numPointShadows=S,R.numSpotShadows=E,R.numSpotMaps=P,R.numLightProbes=b,n.version=Jm++)}function c(l,u){let d=0,h=0,p=0,g=0,_=0;const f=u.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const S=l[m];if(S.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),d++}else if(S.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),p++}else if(S.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),r.identity(),o.copy(S.matrixWorld),o.premultiply(f),r.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),h++}else if(S.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function pc(s){const t=new tg(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function eg(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new pc(s),t.set(i,[a])):o>=r.length?(a=new pc(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ng extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ig extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rg(s,t,e){let n=new oa;const i=new Nt,o=new Nt,r=new he,a=new ng({depthPacking:$h}),c=new ig,l={},u=e.maxTextureSize,d={[Hn]:De,[De]:Hn,[Mn]:Mn},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:sg,fragmentShader:og}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zt(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let m=this.type;this.render=function(T,b,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const U=s.getRenderTarget(),v=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),D=s.state;D.setBlending(On),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const C=m!==yn&&this.type===yn,N=m===yn&&this.type!==yn;for(let F=0,I=T.length;F<I;F++){const q=T[F],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Z=V.getFrameExtents();if(i.multiply(Z),o.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/Z.x),i.x=o.x*Z.x,V.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/Z.y),i.y=o.y*Z.y,V.mapSize.y=o.y)),V.map===null||C===!0||N===!0){const rt=this.type!==yn?{minFilter:qe,magFilter:qe}:{};V.map!==null&&V.map.dispose(),V.map=new ci(i.x,i.y,rt),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const st=V.getViewportCount();for(let rt=0;rt<st;rt++){const ot=V.getViewport(rt);r.set(o.x*ot.x,o.y*ot.y,o.x*ot.z,o.y*ot.w),D.viewport(r),V.updateMatrices(q,rt),n=V.getFrustum(),E(b,R,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&x(V,R),V.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(U,v,M)};function x(T,b){const R=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,R,h,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,R,p,_,null)}function S(T,b,R,U){let v=null;const M=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(M!==void 0)v=M;else if(v=R.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=v.uuid,C=b.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let F=N[C];F===void 0&&(F=v.clone(),N[C]=F,b.addEventListener("dispose",P)),v=F}if(v.visible=b.visible,v.wireframe=b.wireframe,U===yn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:d[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=s.properties.get(v);D.light=R}return v}function E(T,b,R,U,v){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const C=t.update(T),N=T.material;if(Array.isArray(N)){const F=C.groups;for(let I=0,q=F.length;I<q;I++){const V=F[I],Z=N[V.materialIndex];if(Z&&Z.visible){const st=S(T,Z,U,v);T.onBeforeShadow(s,T,b,R,C,st,V),s.renderBufferDirect(R,null,C,st,T,V),T.onAfterShadow(s,T,b,R,C,st,V)}}}else if(N.visible){const F=S(T,N,U,v);T.onBeforeShadow(s,T,b,R,C,F,null),s.renderBufferDirect(R,null,C,F,T,null),T.onAfterShadow(s,T,b,R,C,F,null)}}const D=T.children;for(let C=0,N=D.length;C<N;C++)E(D[C],b,R,U,v)}function P(T){T.target.removeEventListener("dispose",P);for(const R in l){const U=l[R],v=T.target.uuid;v in U&&(U[v].dispose(),delete U[v])}}}const ag={[hr]:ur,[dr]:mr,[fr]:gr,[Oi]:pr,[ur]:hr,[mr]:dr,[gr]:fr,[pr]:Oi};function cg(s){function t(){let B=!1;const mt=new he;let Y=null;const J=new he(0,0,0,0);return{setMask:function(ut){Y!==ut&&!B&&(s.colorMask(ut,ut,ut,ut),Y=ut)},setLocked:function(ut){B=ut},setClear:function(ut,gt,Wt,fe,Re){Re===!0&&(ut*=fe,gt*=fe,Wt*=fe),mt.set(ut,gt,Wt,fe),J.equals(mt)===!1&&(s.clearColor(ut,gt,Wt,fe),J.copy(mt))},reset:function(){B=!1,Y=null,J.set(-1,0,0,0)}}}function e(){let B=!1,mt=!1,Y=null,J=null,ut=null;return{setReversed:function(gt){mt=gt},setTest:function(gt){gt?pt(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(gt){Y!==gt&&!B&&(s.depthMask(gt),Y=gt)},setFunc:function(gt){if(mt&&(gt=ag[gt]),J!==gt){switch(gt){case hr:s.depthFunc(s.NEVER);break;case ur:s.depthFunc(s.ALWAYS);break;case dr:s.depthFunc(s.LESS);break;case Oi:s.depthFunc(s.LEQUAL);break;case fr:s.depthFunc(s.EQUAL);break;case pr:s.depthFunc(s.GEQUAL);break;case mr:s.depthFunc(s.GREATER);break;case gr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=gt}},setLocked:function(gt){B=gt},setClear:function(gt){ut!==gt&&(s.clearDepth(gt),ut=gt)},reset:function(){B=!1,Y=null,J=null,ut=null}}}function n(){let B=!1,mt=null,Y=null,J=null,ut=null,gt=null,Wt=null,fe=null,Re=null;return{setTest:function(jt){B||(jt?pt(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(jt){mt!==jt&&!B&&(s.stencilMask(jt),mt=jt)},setFunc:function(jt,Ce,hn){(Y!==jt||J!==Ce||ut!==hn)&&(s.stencilFunc(jt,Ce,hn),Y=jt,J=Ce,ut=hn)},setOp:function(jt,Ce,hn){(gt!==jt||Wt!==Ce||fe!==hn)&&(s.stencilOp(jt,Ce,hn),gt=jt,Wt=Ce,fe=hn)},setLocked:function(jt){B=jt},setClear:function(jt){Re!==jt&&(s.clearStencil(jt),Re=jt)},reset:function(){B=!1,mt=null,Y=null,J=null,ut=null,gt=null,Wt=null,fe=null,Re=null}}}const i=new t,o=new e,r=new n,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,f=null,m=null,x=null,S=null,E=null,P=null,T=new kt(0,0,0),b=0,R=!1,U=null,v=null,M=null,D=null,C=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,I=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=I>=1):q.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=I>=2);let V=null,Z={};const st=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),ot=new he().fromArray(st),Bt=new he().fromArray(rt);function j(B,mt,Y,J){const ut=new Uint8Array(4),gt=s.createTexture();s.bindTexture(B,gt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<Y;Wt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(mt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return gt}const et={};et[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),r.setClear(0),pt(s.DEPTH_TEST),o.setFunc(Oi),Vt(!1),Xt(Ea),pt(s.CULL_FACE),O(On);function pt(B){l[B]!==!0&&(s.enable(B),l[B]=!0)}function Q(B){l[B]!==!1&&(s.disable(B),l[B]=!1)}function at(B,mt){return u[B]!==mt?(s.bindFramebuffer(B,mt),u[B]=mt,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function St(B,mt){let Y=h,J=!1;if(B){Y=d.get(mt),Y===void 0&&(Y=[],d.set(mt,Y));const ut=B.textures;if(Y.length!==ut.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Wt=ut.length;gt<Wt;gt++)Y[gt]=s.COLOR_ATTACHMENT0+gt;Y.length=ut.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function Ut(B){return p!==B?(s.useProgram(B),p=B,!0):!1}const Ht={[ti]:s.FUNC_ADD,[Sh]:s.FUNC_SUBTRACT,[Eh]:s.FUNC_REVERSE_SUBTRACT};Ht[wh]=s.MIN,Ht[bh]=s.MAX;const It={[Th]:s.ZERO,[Ah]:s.ONE,[Rh]:s.SRC_COLOR,[cr]:s.SRC_ALPHA,[Nh]:s.SRC_ALPHA_SATURATE,[Ih]:s.DST_COLOR,[Ph]:s.DST_ALPHA,[Ch]:s.ONE_MINUS_SRC_COLOR,[lr]:s.ONE_MINUS_SRC_ALPHA,[Dh]:s.ONE_MINUS_DST_COLOR,[Lh]:s.ONE_MINUS_DST_ALPHA,[Uh]:s.CONSTANT_COLOR,[Fh]:s.ONE_MINUS_CONSTANT_COLOR,[Oh]:s.CONSTANT_ALPHA,[Bh]:s.ONE_MINUS_CONSTANT_ALPHA};function O(B,mt,Y,J,ut,gt,Wt,fe,Re,jt){if(B===On){g===!0&&(Q(s.BLEND),g=!1);return}if(g===!1&&(pt(s.BLEND),g=!0),B!==Mh){if(B!==_||jt!==R){if((f!==ti||S!==ti)&&(s.blendEquation(s.FUNC_ADD),f=ti,S=ti),jt)switch(B){case Di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ar:s.blendFunc(s.ONE,s.ONE);break;case wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ba:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ar:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ba:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,x=null,E=null,P=null,T.set(0,0,0),b=0,_=B,R=jt}return}ut=ut||mt,gt=gt||Y,Wt=Wt||J,(mt!==f||ut!==S)&&(s.blendEquationSeparate(Ht[mt],Ht[ut]),f=mt,S=ut),(Y!==m||J!==x||gt!==E||Wt!==P)&&(s.blendFuncSeparate(It[Y],It[J],It[gt],It[Wt]),m=Y,x=J,E=gt,P=Wt),(fe.equals(T)===!1||Re!==b)&&(s.blendColor(fe.r,fe.g,fe.b,Re),T.copy(fe),b=Re),_=B,R=!1}function oe(B,mt){B.side===Mn?Q(s.CULL_FACE):pt(s.CULL_FACE);let Y=B.side===De;mt&&(Y=!Y),Vt(Y),B.blending===Di&&B.transparent===!1?O(On):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),i.setMask(B.colorWrite);const J=B.stencilWrite;r.setTest(J),J&&(r.setMask(B.stencilWriteMask),r.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),r.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(B){U!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),U=B)}function Xt(B){B!==xh?(pt(s.CULL_FACE),B!==v&&(B===Ea?s.cullFace(s.BACK):B===yh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),v=B}function Rt(B){B!==M&&(F&&s.lineWidth(B),M=B)}function ee(B,mt,Y){B?(pt(s.POLYGON_OFFSET_FILL),(D!==mt||C!==Y)&&(s.polygonOffset(mt,Y),D=mt,C=Y)):Q(s.POLYGON_OFFSET_FILL)}function Lt(B){B?pt(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function L(B){B===void 0&&(B=s.TEXTURE0+N-1),V!==B&&(s.activeTexture(B),V=B)}function w(B,mt,Y){Y===void 0&&(V===null?Y=s.TEXTURE0+N-1:Y=V);let J=Z[Y];J===void 0&&(J={type:void 0,texture:void 0},Z[Y]=J),(J.type!==B||J.texture!==mt)&&(V!==Y&&(s.activeTexture(Y),V=Y),s.bindTexture(B,mt||et[B]),J.type=B,J.texture=mt)}function G(){const B=Z[V];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(B){ot.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),ot.copy(B))}function xt(B){Bt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Bt.copy(B))}function Gt(B,mt){let Y=c.get(mt);Y===void 0&&(Y=new WeakMap,c.set(mt,Y));let J=Y.get(B);J===void 0&&(J=s.getUniformBlockIndex(mt,B.name),Y.set(B,J))}function Dt(B,mt){const J=c.get(mt).get(B);a.get(mt)!==J&&(s.uniformBlockBinding(mt,J,B.__bindingPointIndex),a.set(mt,J))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},V=null,Z={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,f=null,m=null,x=null,S=null,E=null,P=null,T=new kt(0,0,0),b=0,R=!1,U=null,v=null,M=null,D=null,C=null,ot.set(0,0,s.canvas.width,s.canvas.height),Bt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),o.reset(),r.reset()}return{buffers:{color:i,depth:o,stencil:r},enable:pt,disable:Q,bindFramebuffer:at,drawBuffers:St,useProgram:Ut,setBlending:O,setMaterial:oe,setFlipSided:Vt,setCullFace:Xt,setLineWidth:Rt,setPolygonOffset:ee,setScissorTest:Lt,activeTexture:L,bindTexture:w,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:tt,texImage2D:vt,texImage3D:Ct,updateUBOMapping:Gt,uniformBlockBinding:Dt,texStorage2D:qt,texStorage3D:nt,texSubImage2D:K,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:_t,scissor:Pt,viewport:xt,reset:te}}function mc(s,t,e,n){const i=lg(n);switch(e){case gl:return s*t;case vl:return s*t;case xl:return s*t*2;case yl:return s*t/i.components*i.byteLength;case ta:return s*t/i.components*i.byteLength;case Ml:return s*t*2/i.components*i.byteLength;case ea:return s*t*2/i.components*i.byteLength;case _l:return s*t*3/i.components*i.byteLength;case tn:return s*t*4/i.components*i.byteLength;case na:return s*t*4/i.components*i.byteLength;case Ks:case $s:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Js:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sr:case wr:return Math.max(s,16)*Math.max(t,8)/4;case Mr:case Er:return Math.max(s,8)*Math.max(t,8)/2;case br:case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Dr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ur:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Or:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Br:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Hr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case kr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Qs:case Vr:case Gr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sl:case Wr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xr:case qr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lg(s){switch(s){case wn:case fl:return{byteLength:1,components:1};case cs:case pl:case us:return{byteLength:2,components:1};case Jr:case Qr:return{byteLength:2,components:4};case ai:case Zr:case Sn:return{byteLength:4,components:1};case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function hg(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return p?new OffscreenCanvas(L,w):ao("canvas")}function _(L,w,G){let $=1;const tt=Lt(L);if((tt.width>G||tt.height>G)&&($=G/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor($*tt.width),Et=Math.floor($*tt.height);d===void 0&&(d=g(K,Et));const lt=w?g(K,Et):d;return lt.width=K,lt.height=Et,lt.getContext("2d").drawImage(L,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Et+")."),lt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),L;return L}function f(L){return L.generateMipmaps&&L.minFilter!==qe&&L.minFilter!==Je}function m(L){s.generateMipmap(L)}function x(L,w,G,$,tt=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=w;if(w===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),w===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),w===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),w===s.RGBA){const Et=tt?io:Zt.getTransfer($);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=Et===se?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(L,w){let G;return L?w===null||w===ai||w===Hi?G=s.DEPTH24_STENCIL8:w===Sn?G=s.DEPTH32F_STENCIL8:w===cs&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ai||w===Hi?G=s.DEPTH_COMPONENT24:w===Sn?G=s.DEPTH_COMPONENT32F:w===cs&&(G=s.DEPTH_COMPONENT16),G}function E(L,w){return f(L)===!0||L.isFramebufferTexture&&L.minFilter!==qe&&L.minFilter!==Je?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function P(L){const w=L.target;w.removeEventListener("dispose",P),b(w),w.isVideoTexture&&u.delete(w)}function T(L){const w=L.target;w.removeEventListener("dispose",T),U(w)}function b(L){const w=n.get(L);if(w.__webglInit===void 0)return;const G=L.source,$=h.get(G);if($){const tt=$[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&R(L),Object.keys($).length===0&&h.delete(G)}n.remove(L)}function R(L){const w=n.get(L);s.deleteTexture(w.__webglTexture);const G=L.source,$=h.get(G);delete $[w.__cacheKey],r.memory.textures--}function U(L){const w=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let tt=0;tt<w.__webglFramebuffer[$].length;tt++)s.deleteFramebuffer(w.__webglFramebuffer[$][tt]);else s.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)s.deleteFramebuffer(w.__webglFramebuffer[$]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=L.textures;for(let $=0,tt=G.length;$<tt;$++){const K=n.get(G[$]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),r.memory.textures--),n.remove(G[$])}n.remove(L)}let v=0;function M(){v=0}function D(){const L=v;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),v+=1,L}function C(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function N(L,w){const G=n.get(L);if(L.isVideoTexture&&Rt(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(G,L,w);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function F(L,w){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Bt(G,L,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function I(L,w){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Bt(G,L,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function q(L,w){const G=n.get(L);if(L.version>0&&G.__version!==L.version){j(G,L,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const V={[xr]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[yr]:s.MIRRORED_REPEAT},Z={[qe]:s.NEAREST,[jh]:s.NEAREST_MIPMAP_NEAREST,[vs]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[yo]:s.LINEAR_MIPMAP_NEAREST,[oi]:s.LINEAR_MIPMAP_LINEAR},st={[Jh]:s.NEVER,[su]:s.ALWAYS,[Qh]:s.LESS,[wl]:s.LEQUAL,[tu]:s.EQUAL,[iu]:s.GEQUAL,[eu]:s.GREATER,[nu]:s.NOTEQUAL};function rt(L,w){if(w.type===Sn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Je||w.magFilter===yo||w.magFilter===vs||w.magFilter===oi||w.minFilter===Je||w.minFilter===yo||w.minFilter===vs||w.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,V[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,V[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,V[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Z[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,st[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qe||w.minFilter!==vs&&w.minFilter!==oi||w.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ot(L,w){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",P));const $=w.source;let tt=h.get($);tt===void 0&&(tt={},h.set($,tt));const K=C(w);if(K!==L.__cacheKey){tt[K]===void 0&&(tt[K]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,G=!0),tt[K].usedTimes++;const Et=tt[L.__cacheKey];Et!==void 0&&(tt[L.__cacheKey].usedTimes--,Et.usedTimes===0&&R(w)),L.__cacheKey=K,L.__webglTexture=tt[K].texture}return G}function Bt(L,w,G){let $=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=s.TEXTURE_3D);const tt=ot(L,w),K=w.source;e.bindTexture($,L.__webglTexture,s.TEXTURE0+G);const Et=n.get(K);if(K.version!==Et.__version||tt===!0){e.activeTexture(s.TEXTURE0+G);const lt=Zt.getPrimaries(Zt.workingColorSpace),_t=w.colorSpace===Fn?null:Zt.getPrimaries(w.colorSpace),qt=w.colorSpace===Fn||lt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let nt=_(w.image,!1,i.maxTextureSize);nt=ee(w,nt);const vt=o.convert(w.format,w.colorSpace),Ct=o.convert(w.type);let Pt=x(w.internalFormat,vt,Ct,w.colorSpace,w.isVideoTexture);rt($,w);let xt;const Gt=w.mipmaps,Dt=w.isVideoTexture!==!0,te=Et.__version===void 0||tt===!0,B=K.dataReady,mt=E(w,nt);if(w.isDepthTexture)Pt=S(w.format===ki,w.type),te&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,Pt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,nt.width,nt.height,0,vt,Ct,null));else if(w.isDataTexture)if(Gt.length>0){Dt&&te&&e.texStorage2D(s.TEXTURE_2D,mt,Pt,Gt[0].width,Gt[0].height);for(let Y=0,J=Gt.length;Y<J;Y++)xt=Gt[Y],Dt?B&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Ct,xt.data):e.texImage2D(s.TEXTURE_2D,Y,Pt,xt.width,xt.height,0,vt,Ct,xt.data);w.generateMipmaps=!1}else Dt?(te&&e.texStorage2D(s.TEXTURE_2D,mt,Pt,nt.width,nt.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,Ct,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,nt.width,nt.height,0,vt,Ct,nt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Dt&&te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Pt,Gt[0].width,Gt[0].height,nt.depth);for(let Y=0,J=Gt.length;Y<J;Y++)if(xt=Gt[Y],w.format!==tn)if(vt!==null)if(Dt){if(B)if(w.layerUpdates.size>0){const ut=mc(xt.width,xt.height,w.format,w.type);for(const gt of w.layerUpdates){const Wt=xt.data.subarray(gt*ut/xt.data.BYTES_PER_ELEMENT,(gt+1)*ut/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,gt,xt.width,xt.height,1,vt,Wt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,nt.depth,vt,xt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Pt,xt.width,xt.height,nt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,nt.depth,vt,Ct,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Pt,xt.width,xt.height,nt.depth,0,vt,Ct,xt.data)}else{Dt&&te&&e.texStorage2D(s.TEXTURE_2D,mt,Pt,Gt[0].width,Gt[0].height);for(let Y=0,J=Gt.length;Y<J;Y++)xt=Gt[Y],w.format!==tn?vt!==null?Dt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Pt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?B&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Ct,xt.data):e.texImage2D(s.TEXTURE_2D,Y,Pt,xt.width,xt.height,0,vt,Ct,xt.data)}else if(w.isDataArrayTexture)if(Dt){if(te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Pt,nt.width,nt.height,nt.depth),B)if(w.layerUpdates.size>0){const Y=mc(nt.width,nt.height,w.format,w.type);for(const J of w.layerUpdates){const ut=nt.data.subarray(J*Y/nt.data.BYTES_PER_ELEMENT,(J+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,vt,Ct,ut)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Ct,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,nt.width,nt.height,nt.depth,0,vt,Ct,nt.data);else if(w.isData3DTexture)Dt?(te&&e.texStorage3D(s.TEXTURE_3D,mt,Pt,nt.width,nt.height,nt.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Ct,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,nt.width,nt.height,nt.depth,0,vt,Ct,nt.data);else if(w.isFramebufferTexture){if(te)if(Dt)e.texStorage2D(s.TEXTURE_2D,mt,Pt,nt.width,nt.height);else{let Y=nt.width,J=nt.height;for(let ut=0;ut<mt;ut++)e.texImage2D(s.TEXTURE_2D,ut,Pt,Y,J,0,vt,Ct,null),Y>>=1,J>>=1}}else if(Gt.length>0){if(Dt&&te){const Y=Lt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,mt,Pt,Y.width,Y.height)}for(let Y=0,J=Gt.length;Y<J;Y++)xt=Gt[Y],Dt?B&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,vt,Ct,xt):e.texImage2D(s.TEXTURE_2D,Y,Pt,vt,Ct,xt);w.generateMipmaps=!1}else if(Dt){if(te){const Y=Lt(nt);e.texStorage2D(s.TEXTURE_2D,mt,Pt,Y.width,Y.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ct,nt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,vt,Ct,nt);f(w)&&m($),Et.__version=K.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function j(L,w,G){if(w.image.length!==6)return;const $=ot(L,w),tt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+G);const K=n.get(tt);if(tt.version!==K.__version||$===!0){e.activeTexture(s.TEXTURE0+G);const Et=Zt.getPrimaries(Zt.workingColorSpace),lt=w.colorSpace===Fn?null:Zt.getPrimaries(w.colorSpace),_t=w.colorSpace===Fn||Et===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const qt=w.isCompressedTexture||w.image[0].isCompressedTexture,nt=w.image[0]&&w.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!qt&&!nt?vt[J]=_(w.image[J],!0,i.maxCubemapSize):vt[J]=nt?w.image[J].image:w.image[J],vt[J]=ee(w,vt[J]);const Ct=vt[0],Pt=o.convert(w.format,w.colorSpace),xt=o.convert(w.type),Gt=x(w.internalFormat,Pt,xt,w.colorSpace),Dt=w.isVideoTexture!==!0,te=K.__version===void 0||$===!0,B=tt.dataReady;let mt=E(w,Ct);rt(s.TEXTURE_CUBE_MAP,w);let Y;if(qt){Dt&&te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Gt,Ct.width,Ct.height);for(let J=0;J<6;J++){Y=vt[J].mipmaps;for(let ut=0;ut<Y.length;ut++){const gt=Y[ut];w.format!==tn?Pt!==null?Dt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,gt.width,gt.height,Pt,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,Gt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,gt.width,gt.height,Pt,xt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,Gt,gt.width,gt.height,0,Pt,xt,gt.data)}}}else{if(Y=w.mipmaps,Dt&&te){Y.length>0&&mt++;const J=Lt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Dt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Pt,xt,vt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,vt[J].width,vt[J].height,0,Pt,xt,vt[J].data);for(let ut=0;ut<Y.length;ut++){const Wt=Y[ut].image[J].image;Dt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Wt.width,Wt.height,Pt,xt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,Gt,Wt.width,Wt.height,0,Pt,xt,Wt.data)}}else{Dt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,xt,vt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,Pt,xt,vt[J]);for(let ut=0;ut<Y.length;ut++){const gt=Y[ut];Dt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Pt,xt,gt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,Gt,Pt,xt,gt.image[J])}}}f(w)&&m(s.TEXTURE_CUBE_MAP),K.__version=tt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function et(L,w,G,$,tt,K){const Et=o.convert(G.format,G.colorSpace),lt=o.convert(G.type),_t=x(G.internalFormat,Et,lt,G.colorSpace);if(!n.get(w).__hasExternalTextures){const nt=Math.max(1,w.width>>K),vt=Math.max(1,w.height>>K);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,_t,nt,vt,w.depth,0,Et,lt,null):e.texImage2D(tt,K,_t,nt,vt,0,Et,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Xt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,tt,n.get(G).__webglTexture,0,Vt(w)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,tt,n.get(G).__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(L,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const $=w.depthTexture,tt=$&&$.isDepthTexture?$.type:null,K=S(w.stencilBuffer,tt),Et=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=Vt(w);Xt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,K,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,K,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,K,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,L)}else{const $=w.textures;for(let tt=0;tt<$.length;tt++){const K=$[tt],Et=o.convert(K.format,K.colorSpace),lt=o.convert(K.type),_t=x(K.internalFormat,Et,lt,K.colorSpace),qt=Vt(w);G&&Xt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,_t,w.width,w.height):Xt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,_t,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,_t,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Q(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const $=n.get(w.depthTexture).__webglTexture,tt=Vt(w);if(w.depthTexture.format===Ni)Xt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(w.depthTexture.format===ki)Xt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function at(L){const w=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){const tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=$}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Q(w.__webglFramebuffer,L)}else if(G){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=s.createRenderbuffer(),pt(w.__webglDepthbuffer[$],L,!1);else{const tt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),pt(w.__webglDepthbuffer,L,!1);else{const $=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function St(L,w,G){const $=n.get(L);w!==void 0&&et($.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&at(L)}function Ut(L){const w=L.texture,G=n.get(L),$=n.get(w);L.addEventListener("dispose",T);const tt=L.textures,K=L.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=w.version,r.memory.textures++),K){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let _t=0;_t<w.mipmaps.length;_t++)G.__webglFramebuffer[lt][_t]=s.createFramebuffer()}else G.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)G.__webglFramebuffer[lt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Et)for(let lt=0,_t=tt.length;lt<_t;lt++){const qt=n.get(tt[lt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&Xt(L)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const _t=tt[lt];G.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const qt=o.convert(_t.format,_t.colorSpace),nt=o.convert(_t.type),vt=x(_t.internalFormat,qt,nt,_t.colorSpace,L.isXRRenderTarget===!0),Ct=Vt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,vt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),rt(s.TEXTURE_CUBE_MAP,w);for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)et(G.__webglFramebuffer[lt][_t],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t);else et(G.__webglFramebuffer[lt],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);f(w)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,_t=tt.length;lt<_t;lt++){const qt=tt[lt],nt=n.get(qt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),rt(s.TEXTURE_2D,qt),et(G.__webglFramebuffer,L,qt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),f(qt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(lt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),rt(lt,w),w.mipmaps&&w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)et(G.__webglFramebuffer[_t],L,w,s.COLOR_ATTACHMENT0,lt,_t);else et(G.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,lt,0);f(w)&&m(lt),e.unbindTexture()}L.depthBuffer&&at(L)}function Ht(L){const w=L.textures;for(let G=0,$=w.length;G<$;G++){const tt=w[G];if(f(tt)){const K=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Et=n.get(tt).__webglTexture;e.bindTexture(K,Et),m(K),e.unbindTexture()}}}const It=[],O=[];function oe(L){if(L.samples>0){if(Xt(L)===!1){const w=L.textures,G=L.width,$=L.height;let tt=s.COLOR_BUFFER_BIT;const K=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(L),lt=w.length>1;if(lt)for(let _t=0;_t<w.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<w.length;_t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const qt=n.get(w[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,tt,s.NEAREST),c===!0&&(It.length=0,O.length=0,It.push(s.COLOR_ATTACHMENT0+_t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(It.push(K),O.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let _t=0;_t<w.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const qt=n.get(w[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Vt(L){return Math.min(i.maxSamples,L.samples)}function Xt(L){const w=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Rt(L){const w=r.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function ee(L,w){const G=L.colorSpace,$=L.format,tt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Vn&&G!==Fn&&(Zt.getTransfer(G)===se?($!==tn||tt!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Lt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=M,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=q,this.rebindTextures=St,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Xt}function ug(s,t){function e(n,i=Fn){let o;const r=Zt.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===Jr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return s.BYTE;if(n===pl)return s.SHORT;if(n===cs)return s.UNSIGNED_SHORT;if(n===Zr)return s.INT;if(n===ai)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===us)return s.HALF_FLOAT;if(n===gl)return s.ALPHA;if(n===_l)return s.RGB;if(n===tn)return s.RGBA;if(n===vl)return s.LUMINANCE;if(n===xl)return s.LUMINANCE_ALPHA;if(n===Ni)return s.DEPTH_COMPONENT;if(n===ki)return s.DEPTH_STENCIL;if(n===yl)return s.RED;if(n===ta)return s.RED_INTEGER;if(n===Ml)return s.RG;if(n===ea)return s.RG_INTEGER;if(n===na)return s.RGBA_INTEGER;if(n===Ks||n===$s||n===Zs||n===Js)if(r===se)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mr||n===Sr||n===Er||n===wr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Mr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Er)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===br||n===Tr||n===Ar)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===br||n===Tr)return r===se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ar)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rr||n===Cr||n===Pr||n===Lr||n===Ir||n===Dr||n===Nr||n===Ur||n===Fr||n===Or||n===Br||n===zr||n===Hr||n===kr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Rr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ir)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ur)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Or)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Br)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kr)return r===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qs||n===Vr||n===Gr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Qs)return r===se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===Wr||n===Xr||n===qr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Qs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Wr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class dg extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ri extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fg={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),m=this._getHandJoint(l,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ne,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _g extends ui{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const _=new gg,f=e.getContextAttributes();let m=null,x=null;const S=[],E=[],P=new Nt;let T=null;const b=new Xe;b.layers.enable(1),b.viewport=new he;const R=new Xe;R.layers.enable(2),R.viewport=new he;const U=[b,R],v=new dg;v.layers.enable(1),v.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=S[j];return et===void 0&&(et=new Ko,S[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=S[j];return et===void 0&&(et=new Ko,S[j]=et),et.getGripSpace()},this.getHand=function(j){let et=S[j];return et===void 0&&(et=new Ko,S[j]=et),et.getHandSpace()};function C(j){const et=E.indexOf(j.inputSource);if(et===-1)return;const pt=S[et];pt!==void 0&&(pt.update(j.inputSource,j.frame,l||r),pt.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let j=0;j<S.length;j++){const et=E[j];et!==null&&(E[j]=null,S[j].disconnect(et))}M=null,D=null,_.reset(),t.setRenderTarget(m),p=null,h=null,d=null,i=null,x=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ci(p.framebufferWidth,p.framebufferHeight,{format:tn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,pt=null,Q=null;f.depth&&(Q=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?ki:Ni,pt=f.stencil?Hi:ai);const at={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:o};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(at),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new ci(h.textureWidth,h.textureHeight,{format:tn,type:wn,depthTexture:new Ol(h.textureWidth,h.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),Bt.setContext(i),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(j){for(let et=0;et<j.removed.length;et++){const pt=j.removed[et],Q=E.indexOf(pt);Q>=0&&(E[Q]=null,S[Q].disconnect(pt))}for(let et=0;et<j.added.length;et++){const pt=j.added[et];let Q=E.indexOf(pt);if(Q===-1){for(let St=0;St<S.length;St++)if(St>=E.length){E.push(pt),Q=St;break}else if(E[St]===null){E[St]=pt,Q=St;break}if(Q===-1)break}const at=S[Q];at&&at.connect(pt)}}const I=new k,q=new k;function V(j,et,pt){I.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(pt.matrixWorld);const Q=I.distanceTo(q),at=et.projectionMatrix.elements,St=pt.projectionMatrix.elements,Ut=at[14]/(at[10]-1),Ht=at[14]/(at[10]+1),It=(at[9]+1)/at[5],O=(at[9]-1)/at[5],oe=(at[8]-1)/at[0],Vt=(St[8]+1)/St[0],Xt=Ut*oe,Rt=Ut*Vt,ee=Q/(-oe+Vt),Lt=ee*-oe;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Lt),j.translateZ(ee),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),at[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const L=Ut+ee,w=Ht+ee,G=Xt-Lt,$=Rt+(Q-Lt),tt=It*Ht/w*L,K=O*Ht/w*L;j.projectionMatrix.makePerspective(G,$,tt,K,L,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Z(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let et=j.near,pt=j.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(pt=_.depthFar)),v.near=R.near=b.near=et,v.far=R.far=b.far=pt,(M!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,D=v.far);const Q=j.parent,at=v.cameras;Z(v,Q);for(let St=0;St<at.length;St++)Z(at[St],Q);at.length===2?V(v,b,R):v.projectionMatrix.copy(b.projectionMatrix),st(j,v,Q)};function st(j,et,pt){pt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(pt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Yr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let rt=null;function ot(j,et){if(u=et.getViewerPose(l||r),g=et,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Q=!1;pt.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let St=0;St<pt.length;St++){const Ut=pt[St];let Ht=null;if(p!==null)Ht=p.getViewport(Ut);else{const O=d.getViewSubImage(h,Ut);Ht=O.viewport,St===0&&(t.setRenderTargetTextures(x,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(x))}let It=U[St];It===void 0&&(It=new Xe,It.layers.enable(St),It.viewport=new he,U[St]=It),It.matrix.fromArray(Ut.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Ut.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),St===0&&(v.matrix.copy(It.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Q===!0&&v.cameras.push(It)}const at=i.enabledFeatures;if(at&&at.includes("depth-sensing")){const St=d.getDepthInformation(pt[0]);St&&St.isValid&&St.texture&&_.init(t,St,i.renderState)}}for(let pt=0;pt<S.length;pt++){const Q=E[pt],at=S[pt];Q!==null&&at!==void 0&&at.update(Q,et,l||r)}rt&&rt(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Bt=new Ul;Bt.setAnimationLoop(ot),this.setAnimationLoop=function(j){rt=j},this.dispose=function(){}}}const Kn=new sn,vg=new ae;function xg(s,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Il(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,x,S,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(f,m):m.isMeshToonMaterial?(o(f,m),d(f,m)):m.isMeshPhongMaterial?(o(f,m),u(f,m)):m.isMeshStandardMaterial?(o(f,m),h(f,m),m.isMeshPhysicalMaterial&&p(f,m,E)):m.isMeshMatcapMaterial?(o(f,m),g(f,m)):m.isMeshDepthMaterial?o(f,m):m.isMeshDistanceMaterial?(o(f,m),_(f,m)):m.isMeshNormalMaterial?o(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?c(f,m,x,S):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===De&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===De&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const x=t.get(m),S=x.envMap,E=x.envMapRotation;S&&(f.envMap.value=S,Kn.copy(E),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),f.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Kn)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,x,S){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*x,f.scale.value=S*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,x){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const x=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yg(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const E=S.program;n.uniformBlockBinding(x,E)}function l(x,S){let E=i[x.id];E===void 0&&(g(x),E=u(x),i[x.id]=E,x.addEventListener("dispose",f));const P=S.program;n.updateUBOMapping(x,P);const T=t.render.frame;o[x.id]!==T&&(h(x),o[x.id]=T)}function u(x){const S=d();x.__bindingPointIndex=S;const E=s.createBuffer(),P=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,E),E}function d(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=i[x.id],E=x.uniforms,P=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let T=0,b=E.length;T<b;T++){const R=Array.isArray(E[T])?E[T]:[E[T]];for(let U=0,v=R.length;U<v;U++){const M=R[U];if(p(M,T,U,P)===!0){const D=M.__offset,C=Array.isArray(M.value)?M.value:[M.value];let N=0;for(let F=0;F<C.length;F++){const I=C[F],q=_(I);typeof I=="number"||typeof I=="boolean"?(M.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,D+N,M.__data)):I.isMatrix3?(M.__data[0]=I.elements[0],M.__data[1]=I.elements[1],M.__data[2]=I.elements[2],M.__data[3]=0,M.__data[4]=I.elements[3],M.__data[5]=I.elements[4],M.__data[6]=I.elements[5],M.__data[7]=0,M.__data[8]=I.elements[6],M.__data[9]=I.elements[7],M.__data[10]=I.elements[8],M.__data[11]=0):(I.toArray(M.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,S,E,P){const T=x.value,b=S+"_"+E;if(P[b]===void 0)return typeof T=="number"||typeof T=="boolean"?P[b]=T:P[b]=T.clone(),!0;{const R=P[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return P[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(x){const S=x.uniforms;let E=0;const P=16;for(let b=0,R=S.length;b<R;b++){const U=Array.isArray(S[b])?S[b]:[S[b]];for(let v=0,M=U.length;v<M;v++){const D=U[v],C=Array.isArray(D.value)?D.value:[D.value];for(let N=0,F=C.length;N<F;N++){const I=C[N],q=_(I),V=E%P,Z=V%q.boundary,st=V+Z;E+=Z,st!==0&&P-st<q.storage&&(E+=P-st),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=q.storage}}}const T=E%P;return T>0&&(E+=P-T),x.__size=E,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function f(x){const S=x.target;S.removeEventListener("dispose",f);const E=r.indexOf(S.__bindingPointIndex);r.splice(E,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete o[S.id]}function m(){for(const x in i)s.deleteBuffer(i[x]);r=[],i={},o={}}return{bind:c,update:l,dispose:m}}class Mg{constructor(t={}){const{canvas:e=au(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=r;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Bn,this.toneMappingExposure=1;const S=this;let E=!1,P=0,T=0,b=null,R=-1,U=null;const v=new he,M=new he;let D=null;const C=new kt(0);let N=0,F=e.width,I=e.height,q=1,V=null,Z=null;const st=new he(0,0,F,I),rt=new he(0,0,F,I);let ot=!1;const Bt=new oa;let j=!1,et=!1;const pt=new ae,Q=new ae,at=new k,St=new he,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function It(){return b===null?q:1}let O=n;function oe(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$r}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",gt,!1),O===null){const z="webgl2";if(O=oe(z,A),O===null)throw oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Vt,Xt,Rt,ee,Lt,L,w,G,$,tt,K,Et,lt,_t,qt,nt,vt,Ct,Pt,xt,Gt,Dt,te,B;function mt(){Vt=new Tp(O),Vt.init(),Dt=new ug(O,Vt),Xt=new yp(O,Vt,t,Dt),Rt=new cg(O),Xt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),ee=new Cp(O),Lt=new Ym,L=new hg(O,Vt,Rt,Lt,Xt,Dt,ee),w=new Sp(S),G=new bp(S),$=new Uu(O),te=new vp(O,$),tt=new Ap(O,$,ee,te),K=new Lp(O,tt,$,ee),Pt=new Pp(O,Xt,L),nt=new Mp(Lt),Et=new qm(S,w,G,Vt,Xt,te,nt),lt=new xg(S,Lt),_t=new Km,qt=new eg(Vt),Ct=new _p(S,w,G,Rt,K,h,c),vt=new rg(S,K,Xt),B=new yg(O,ee,Xt,Rt),xt=new xp(O,Vt,ee),Gt=new Rp(O,Vt,ee),ee.programs=Et.programs,S.capabilities=Xt,S.extensions=Vt,S.properties=Lt,S.renderLists=_t,S.shadowMap=vt,S.state=Rt,S.info=ee}mt();const Y=new _g(S,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(F,I,!1))},this.getSize=function(A){return A.set(F,I)},this.setSize=function(A,z,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,I=z,e.width=Math.floor(A*q),e.height=Math.floor(z*q),W===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(F*q,I*q).floor()},this.setDrawingBufferSize=function(A,z,W){F=A,I=z,q=W,e.width=Math.floor(A*W),e.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(st)},this.setViewport=function(A,z,W,X){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,z,W,X),Rt.viewport(v.copy(st).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(rt)},this.setScissor=function(A,z,W,X){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,z,W,X),Rt.scissor(M.copy(rt).multiplyScalar(q).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(A){Rt.setScissorTest(ot=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(A=!0,z=!0,W=!0){let X=0;if(A){let H=!1;if(b!==null){const it=b.texture.format;H=it===na||it===ea||it===ta}if(H){const it=b.texture.type,dt=it===wn||it===ai||it===cs||it===Hi||it===Jr||it===Qr,yt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Tt=yt.r,At=yt.g,wt=yt.b;dt?(p[0]=Tt,p[1]=At,p[2]=wt,p[3]=Mt,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Tt,g[1]=At,g[2]=wt,g[3]=Mt,O.clearBufferiv(O.COLOR,0,g))}else X|=O.COLOR_BUFFER_BIT}z&&(X|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),_t.dispose(),qt.dispose(),Lt.dispose(),w.dispose(),G.dispose(),K.dispose(),te.dispose(),B.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ma),Y.removeEventListener("sessionend",ga),Gn.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=ee.autoReset,z=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,H=vt.type;mt(),ee.autoReset=A,vt.enabled=z,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=H}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Wt(A){const z=A.target;z.removeEventListener("dispose",Wt),fe(z)}function fe(A){Re(A),Lt.remove(A)}function Re(A){const z=Lt.get(A).programs;z!==void 0&&(z.forEach(function(W){Et.releaseProgram(W)}),A.isShaderMaterial&&Et.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,X,H,it){z===null&&(z=Ut);const dt=H.isMesh&&H.matrixWorld.determinant()<0,yt=mh(A,z,W,X,H);Rt.setMaterial(X,dt);let Mt=W.index,Tt=1;if(X.wireframe===!0){if(Mt=tt.getWireframeAttribute(W),Mt===void 0)return;Tt=2}const At=W.drawRange,wt=W.attributes.position;let Jt=At.start*Tt,ne=(At.start+At.count)*Tt;it!==null&&(Jt=Math.max(Jt,it.start*Tt),ne=Math.min(ne,(it.start+it.count)*Tt)),Mt!==null?(Jt=Math.max(Jt,0),ne=Math.min(ne,Mt.count)):wt!=null&&(Jt=Math.max(Jt,0),ne=Math.min(ne,wt.count));const ce=ne-Jt;if(ce<0||ce===1/0)return;te.setup(H,X,yt,W,Mt);let Fe,Kt=xt;if(Mt!==null&&(Fe=$.get(Mt),Kt=Gt,Kt.setIndex(Fe)),H.isMesh)X.wireframe===!0?(Rt.setLineWidth(X.wireframeLinewidth*It()),Kt.setMode(O.LINES)):Kt.setMode(O.TRIANGLES);else if(H.isLine){let bt=X.linewidth;bt===void 0&&(bt=1),Rt.setLineWidth(bt*It()),H.isLineSegments?Kt.setMode(O.LINES):H.isLineLoop?Kt.setMode(O.LINE_LOOP):Kt.setMode(O.LINE_STRIP)}else H.isPoints?Kt.setMode(O.POINTS):H.isSprite&&Kt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Kt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const bt=H._multiDrawStarts,Me=H._multiDrawCounts,$t=H._multiDrawCount,Ye=Mt?$.get(Mt).bytesPerElement:1,fi=Lt.get(X).currentProgram.getUniforms();for(let Oe=0;Oe<$t;Oe++)fi.setValue(O,"_gl_DrawID",Oe),Kt.render(bt[Oe]/Ye,Me[Oe])}else if(H.isInstancedMesh)Kt.renderInstances(Jt,ce,H.count);else if(W.isInstancedBufferGeometry){const bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,bt);Kt.renderInstances(Jt,ce,Me)}else Kt.render(Jt,ce)};function jt(A,z,W){A.transparent===!0&&A.side===Mn&&A.forceSinglePass===!1?(A.side=De,A.needsUpdate=!0,_s(A,z,W),A.side=Hn,A.needsUpdate=!0,_s(A,z,W),A.side=Mn):_s(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),f=qt.get(W),f.init(z),x.push(f),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const X=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const it=H.material;if(it)if(Array.isArray(it))for(let dt=0;dt<it.length;dt++){const yt=it[dt];jt(yt,W,H),X.add(yt)}else jt(it,W,H),X.add(it)}),x.pop(),f=null,X},this.compileAsync=function(A,z,W=null){const X=this.compile(A,z,W);return new Promise(H=>{function it(){if(X.forEach(function(dt){Lt.get(dt).currentProgram.isReady()&&X.delete(dt)}),X.size===0){H(A);return}setTimeout(it,10)}Vt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ce=null;function hn(A){Ce&&Ce(A)}function ma(){Gn.stop()}function ga(){Gn.start()}const Gn=new Ul;Gn.setAnimationLoop(hn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(A){Ce=A,Y.setAnimationLoop(A),A===null?Gn.stop():Gn.start()},Y.addEventListener("sessionstart",ma),Y.addEventListener("sessionend",ga),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,z,b),f=qt.get(A,x.length),f.init(z),x.push(f),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Bt.setFromProjectionMatrix(Q),et=this.localClippingEnabled,j=nt.init(this.clippingPlanes,et),_=_t.get(A,m.length),_.init(),m.push(_),Y.enabled===!0&&Y.isPresenting===!0){const it=S.xr.getDepthSensingMesh();it!==null&&go(it,z,-1/0,S.sortObjects)}go(A,z,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(V,Z),Ht=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ht&&Ct.addToRenderList(_,A),this.info.render.frame++,j===!0&&nt.beginShadows();const W=f.state.shadowsArray;vt.render(W,A,z),j===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,H=_.transmissive;if(f.setupLights(),z.isArrayCamera){const it=z.cameras;if(H.length>0)for(let dt=0,yt=it.length;dt<yt;dt++){const Mt=it[dt];va(X,H,A,Mt)}Ht&&Ct.render(A);for(let dt=0,yt=it.length;dt<yt;dt++){const Mt=it[dt];_a(_,A,Mt,Mt.viewport)}}else H.length>0&&va(X,H,A,z),Ht&&Ct.render(A),_a(_,A,z);b!==null&&(L.updateMultisampleRenderTarget(b),L.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(S,A,z),te.resetDefaultState(),R=-1,U=null,x.pop(),x.length>0?(f=x[x.length-1],j===!0&&nt.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function go(A,z,W,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Bt.intersectsSprite(A)){X&&St.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const dt=K.update(A),yt=A.material;yt.visible&&_.push(A,dt,yt,W,St.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Bt.intersectsObject(A))){const dt=K.update(A),yt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),St.copy(A.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),St.copy(dt.boundingSphere.center)),St.applyMatrix4(A.matrixWorld).applyMatrix4(Q)),Array.isArray(yt)){const Mt=dt.groups;for(let Tt=0,At=Mt.length;Tt<At;Tt++){const wt=Mt[Tt],Jt=yt[wt.materialIndex];Jt&&Jt.visible&&_.push(A,dt,Jt,W,St.z,wt)}}else yt.visible&&_.push(A,dt,yt,W,St.z,null)}}const it=A.children;for(let dt=0,yt=it.length;dt<yt;dt++)go(it[dt],z,W,X)}function _a(A,z,W,X){const H=A.opaque,it=A.transmissive,dt=A.transparent;f.setupLightsView(W),j===!0&&nt.setGlobalState(S.clippingPlanes,W),X&&Rt.viewport(v.copy(X)),H.length>0&&gs(H,z,W),it.length>0&&gs(it,z,W),dt.length>0&&gs(dt,z,W),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function va(A,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new ci(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?us:wn,minFilter:oi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const it=f.state.transmissionRenderTarget[X.id],dt=X.viewport||v;it.setSize(dt.z,dt.w);const yt=S.getRenderTarget();S.setRenderTarget(it),S.getClearColor(C),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),Ht&&Ct.render(W);const Mt=S.toneMapping;S.toneMapping=Bn;const Tt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),j===!0&&nt.setGlobalState(S.clippingPlanes,X),gs(A,W,X),L.updateMultisampleRenderTarget(it),L.updateRenderTargetMipmap(it),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let wt=0,Jt=z.length;wt<Jt;wt++){const ne=z[wt],ce=ne.object,Fe=ne.geometry,Kt=ne.material,bt=ne.group;if(Kt.side===Mn&&ce.layers.test(X.layers)){const Me=Kt.side;Kt.side=De,Kt.needsUpdate=!0,xa(ce,W,X,Fe,Kt,bt),Kt.side=Me,Kt.needsUpdate=!0,At=!0}}At===!0&&(L.updateMultisampleRenderTarget(it),L.updateRenderTargetMipmap(it))}S.setRenderTarget(yt),S.setClearColor(C,N),Tt!==void 0&&(X.viewport=Tt),S.toneMapping=Mt}function gs(A,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let H=0,it=A.length;H<it;H++){const dt=A[H],yt=dt.object,Mt=dt.geometry,Tt=X===null?dt.material:X,At=dt.group;yt.layers.test(W.layers)&&xa(yt,z,W,Mt,Tt,At)}}function xa(A,z,W,X,H,it){A.onBeforeRender(S,z,W,X,H,it),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(S,z,W,X,A,it),H.transparent===!0&&H.side===Mn&&H.forceSinglePass===!1?(H.side=De,H.needsUpdate=!0,S.renderBufferDirect(W,z,X,H,A,it),H.side=Hn,H.needsUpdate=!0,S.renderBufferDirect(W,z,X,H,A,it),H.side=Mn):S.renderBufferDirect(W,z,X,H,A,it),A.onAfterRender(S,z,W,X,H,it)}function _s(A,z,W){z.isScene!==!0&&(z=Ut);const X=Lt.get(A),H=f.state.lights,it=f.state.shadowsArray,dt=H.state.version,yt=Et.getParameters(A,H.state,it,z,W),Mt=Et.getProgramCacheKey(yt);let Tt=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?G:w).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Tt===void 0&&(A.addEventListener("dispose",Wt),Tt=new Map,X.programs=Tt);let At=Tt.get(Mt);if(At!==void 0){if(X.currentProgram===At&&X.lightsStateVersion===dt)return Ma(A,yt),At}else yt.uniforms=Et.getUniforms(A),A.onBeforeCompile(yt,S),At=Et.acquireProgram(yt,Mt),Tt.set(Mt,At),X.uniforms=yt.uniforms;const wt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(wt.clippingPlanes=nt.uniform),Ma(A,yt),X.needsLights=_h(A),X.lightsStateVersion=dt,X.needsLights&&(wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.directionalShadowMap.value=H.state.directionalShadowMap,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotShadowMap.value=H.state.spotShadowMap,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMap.value=H.state.pointShadowMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=At,X.uniformsList=null,At}function ya(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=no.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ma(A,z){const W=Lt.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function mh(A,z,W,X,H){z.isScene!==!0&&(z=Ut),L.resetTextureUnits();const it=z.fog,dt=X.isMeshStandardMaterial?z.environment:null,yt=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Vn,Mt=(X.isMeshStandardMaterial?G:w).get(X.envMap||dt),Tt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,At=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,ne=!!W.morphAttributes.color;let ce=Bn;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ce=S.toneMapping);const Fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=Fe!==void 0?Fe.length:0,bt=Lt.get(X),Me=f.state.lights;if(j===!0&&(et===!0||A!==U)){const Ve=A===U&&X.id===R;nt.setState(X,A,Ve)}let $t=!1;X.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Me.state.version||bt.outputColorSpace!==yt||H.isBatchedMesh&&bt.batching===!1||!H.isBatchedMesh&&bt.batching===!0||H.isBatchedMesh&&bt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&bt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&bt.instancing===!1||!H.isInstancedMesh&&bt.instancing===!0||H.isSkinnedMesh&&bt.skinning===!1||!H.isSkinnedMesh&&bt.skinning===!0||H.isInstancedMesh&&bt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&bt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&bt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&bt.instancingMorph===!1&&H.morphTexture!==null||bt.envMap!==Mt||X.fog===!0&&bt.fog!==it||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Tt||bt.vertexTangents!==At||bt.morphTargets!==wt||bt.morphNormals!==Jt||bt.morphColors!==ne||bt.toneMapping!==ce||bt.morphTargetsCount!==Kt)&&($t=!0):($t=!0,bt.__version=X.version);let Ye=bt.currentProgram;$t===!0&&(Ye=_s(X,z,H));let fi=!1,Oe=!1,_o=!1;const ue=Ye.getUniforms(),Tn=bt.uniforms;if(Rt.useProgram(Ye.program)&&(fi=!0,Oe=!0,_o=!0),X.id!==R&&(R=X.id,Oe=!0),fi||U!==A){Xt.reverseDepthBuffer?(pt.copy(A.projectionMatrix),lu(pt),hu(pt),ue.setValue(O,"projectionMatrix",pt)):ue.setValue(O,"projectionMatrix",A.projectionMatrix),ue.setValue(O,"viewMatrix",A.matrixWorldInverse);const Ve=ue.map.cameraPosition;Ve!==void 0&&Ve.setValue(O,at.setFromMatrixPosition(A.matrixWorld)),Xt.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ue.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,Oe=!0,_o=!0)}if(H.isSkinnedMesh){ue.setOptional(O,H,"bindMatrix"),ue.setOptional(O,H,"bindMatrixInverse");const Ve=H.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ue.setValue(O,"boneTexture",Ve.boneTexture,L))}H.isBatchedMesh&&(ue.setOptional(O,H,"batchingTexture"),ue.setValue(O,"batchingTexture",H._matricesTexture,L),ue.setOptional(O,H,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",H._indirectTexture,L),ue.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",H._colorsTexture,L));const vo=W.morphAttributes;if((vo.position!==void 0||vo.normal!==void 0||vo.color!==void 0)&&Pt.update(H,W,Ye),(Oe||bt.receiveShadow!==H.receiveShadow)&&(bt.receiveShadow=H.receiveShadow,ue.setValue(O,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Tn.envMap.value=Mt,Tn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(Tn.envMapIntensity.value=z.environmentIntensity),Oe&&(ue.setValue(O,"toneMappingExposure",S.toneMappingExposure),bt.needsLights&&gh(Tn,_o),it&&X.fog===!0&&lt.refreshFogUniforms(Tn,it),lt.refreshMaterialUniforms(Tn,X,q,I,f.state.transmissionRenderTarget[A.id]),no.upload(O,ya(bt),Tn,L)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(no.upload(O,ya(bt),Tn,L),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ue.setValue(O,"center",H.center),ue.setValue(O,"modelViewMatrix",H.modelViewMatrix),ue.setValue(O,"normalMatrix",H.normalMatrix),ue.setValue(O,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ve=X.uniformsGroups;for(let xo=0,vh=Ve.length;xo<vh;xo++){const Sa=Ve[xo];B.update(Sa,Ye),B.bind(Sa,Ye)}}return Ye}function gh(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function _h(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,z,W){Lt.get(A.texture).__webglTexture=z,Lt.get(A.depthTexture).__webglTexture=W;const X=Lt.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const W=Lt.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,W=0){b=A,P=z,T=W;let X=!0,H=null,it=!1,dt=!1;if(A){const Mt=Lt.get(A);if(Mt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(Mt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Mt.__hasExternalTextures)L.rebindTextures(A,Lt.get(A.texture).__webglTexture,Lt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const wt=A.depthTexture;if(Mt.__boundDepthTexture!==wt){if(wt!==null&&Lt.has(wt)&&(A.width!==wt.image.width||A.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Tt=A.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(dt=!0);const At=Lt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(At[z])?H=At[z][W]:H=At[z],it=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?H=Lt.get(A).__webglMultisampledFramebuffer:Array.isArray(At)?H=At[W]:H=At,v.copy(A.viewport),M.copy(A.scissor),D=A.scissorTest}else v.copy(st).multiplyScalar(q).floor(),M.copy(rt).multiplyScalar(q).floor(),D=ot;if(Rt.bindFramebuffer(O.FRAMEBUFFER,H)&&X&&Rt.drawBuffers(A,H),Rt.viewport(v),Rt.scissor(M),Rt.setScissorTest(D),it){const Mt=Lt.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,W)}else if(dt){const Mt=Lt.get(A.texture),Tt=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.__webglTexture,W||0,Tt)}R=-1},this.readRenderTargetPixels=function(A,z,W,X,H,it,dt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){Rt.bindFramebuffer(O.FRAMEBUFFER,yt);try{const Mt=A.texture,Tt=Mt.format,At=Mt.type;if(!Xt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&W>=0&&W<=A.height-H&&O.readPixels(z,W,X,H,Dt.convert(Tt),Dt.convert(At),it)}finally{const Mt=b!==null?Lt.get(b).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(A,z,W,X,H,it,dt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){const Mt=A.texture,Tt=Mt.format,At=Mt.type;if(!Xt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-X&&W>=0&&W<=A.height-H){Rt.bindFramebuffer(O.FRAMEBUFFER,yt);const wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.bufferData(O.PIXEL_PACK_BUFFER,it.byteLength,O.STREAM_READ),O.readPixels(z,W,X,H,Dt.convert(Tt),Dt.convert(At),0);const Jt=b!==null?Lt.get(b).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,Jt);const ne=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cu(O,ne,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,it),O.deleteBuffer(wt),O.deleteSync(ne),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,W=0){A.isTexture!==!0&&(eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-W),H=Math.floor(A.image.width*X),it=Math.floor(A.image.height*X),dt=z!==null?z.x:0,yt=z!==null?z.y:0;L.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,dt,yt,H,it),Rt.unbindTexture()},this.copyTextureToTexture=function(A,z,W=null,X=null,H=0){A.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],z=arguments[2],H=arguments[3]||0,W=null);let it,dt,yt,Mt,Tt,At;W!==null?(it=W.max.x-W.min.x,dt=W.max.y-W.min.y,yt=W.min.x,Mt=W.min.y):(it=A.image.width,dt=A.image.height,yt=0,Mt=0),X!==null?(Tt=X.x,At=X.y):(Tt=0,At=0);const wt=Dt.convert(z.format),Jt=Dt.convert(z.type);L.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const ne=O.getParameter(O.UNPACK_ROW_LENGTH),ce=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Fe=O.getParameter(O.UNPACK_SKIP_PIXELS),Kt=O.getParameter(O.UNPACK_SKIP_ROWS),bt=O.getParameter(O.UNPACK_SKIP_IMAGES),Me=A.isCompressedTexture?A.mipmaps[H]:A.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Me.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,yt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Mt),A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,Tt,At,it,dt,wt,Jt,Me.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,Tt,At,Me.width,Me.height,wt,Me.data):O.texSubImage2D(O.TEXTURE_2D,H,Tt,At,it,dt,wt,Jt,Me),O.pixelStorei(O.UNPACK_ROW_LENGTH,ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,bt),H===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(A,z,W=null,X=null,H=0){A.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],z=arguments[3],H=arguments[4]||0);let it,dt,yt,Mt,Tt,At,wt,Jt,ne;const ce=A.isCompressedTexture?A.mipmaps[H]:A.image;W!==null?(it=W.max.x-W.min.x,dt=W.max.y-W.min.y,yt=W.max.z-W.min.z,Mt=W.min.x,Tt=W.min.y,At=W.min.z):(it=ce.width,dt=ce.height,yt=ce.depth,Mt=0,Tt=0,At=0),X!==null?(wt=X.x,Jt=X.y,ne=X.z):(wt=0,Jt=0,ne=0);const Fe=Dt.convert(z.format),Kt=Dt.convert(z.type);let bt;if(z.isData3DTexture)L.setTexture3D(z,0),bt=O.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)L.setTexture2DArray(z,0),bt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Me=O.getParameter(O.UNPACK_ROW_LENGTH),$t=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ye=O.getParameter(O.UNPACK_SKIP_PIXELS),fi=O.getParameter(O.UNPACK_SKIP_ROWS),Oe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Mt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Tt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,At),A.isDataTexture||A.isData3DTexture?O.texSubImage3D(bt,H,wt,Jt,ne,it,dt,yt,Fe,Kt,ce.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(bt,H,wt,Jt,ne,it,dt,yt,Fe,ce.data):O.texSubImage3D(bt,H,wt,Jt,ne,it,dt,yt,Fe,Kt,ce),O.pixelStorei(O.UNPACK_ROW_LENGTH,Me),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$t),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ye),O.pixelStorei(O.UNPACK_SKIP_ROWS,fi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oe),H===0&&z.generateMipmaps&&O.generateMipmap(bt),Rt.unbindTexture()},this.initRenderTarget=function(A){Lt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Rt.unbindTexture()},this.resetState=function(){P=0,T=0,b=null,Rt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ia?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===lo?"display-p3":"srgb"}}class aa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sg extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vl extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gc=new ae,Kr=new sa,zs=new ho,Hs=new k;class Eg extends ye{constructor(t=new Ue,e=new Vl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(i),zs.radius+=o,t.ray.intersectsSphere(zs)===!1)return;gc.copy(i).invert(),Kr.copy(t.ray).applyMatrix4(gc);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=h,_=p;g<_;g++){const f=l.getX(g);Hs.fromBufferAttribute(d,f),_c(Hs,f,c,i,t,e,this)}}else{const h=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=h,_=p;g<_;g++)Hs.fromBufferAttribute(d,g),_c(Hs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function _c(s,t,e,n,i,o,r){const a=Kr.distanceSqToPoint(s);if(a<e){const c=new k;Kr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ls extends Ue{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const u=[],d=[],h=[],p=[];let g=0;const _=[],f=n/2;let m=0;x(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(p,2));function x(){const E=new k,P=new k;let T=0;const b=(e-t)/n;for(let R=0;R<=o;R++){const U=[],v=R/o,M=v*(e-t)+t;for(let D=0;D<=i;D++){const C=D/i,N=C*c+a,F=Math.sin(N),I=Math.cos(N);P.x=M*F,P.y=-v*n+f,P.z=M*I,d.push(P.x,P.y,P.z),E.set(F,b,I).normalize(),h.push(E.x,E.y,E.z),p.push(C,1-v),U.push(g++)}_.push(U)}for(let R=0;R<i;R++)for(let U=0;U<o;U++){const v=_[U][R],M=_[U+1][R],D=_[U+1][R+1],C=_[U][R+1];t>0&&(u.push(v,M,C),T+=3),e>0&&(u.push(M,D,C),T+=3)}l.addGroup(m,T,0),m+=T}function S(E){const P=g,T=new Nt,b=new k;let R=0;const U=E===!0?t:e,v=E===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,f*v,0),h.push(0,v,0),p.push(.5,.5),g++;const M=g;for(let D=0;D<=i;D++){const N=D/i*c+a,F=Math.cos(N),I=Math.sin(N);b.x=U*I,b.y=f*v,b.z=U*F,d.push(b.x,b.y,b.z),h.push(0,v,0),T.x=F*.5+.5,T.y=I*.5*v+.5,p.push(T.x,T.y),g++}for(let D=0;D<i;D++){const C=P+D,N=M+D;E===!0?u.push(N,N+1,C):u.push(N+1,N,C),R+=3}l.addGroup(m,R,E===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zn extends Ue{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],d=new k,h=new k,p=[],g=[],_=[],f=[];for(let m=0;m<=n;m++){const x=[],S=m/n;let E=0;m===0&&r===0?E=.5/e:m===n&&c===Math.PI&&(E=-.5/e);for(let P=0;P<=e;P++){const T=P/e;d.x=-t*Math.cos(i+T*o)*Math.sin(r+S*a),d.y=t*Math.cos(r+S*a),d.z=t*Math.sin(i+T*o)*Math.sin(r+S*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),f.push(T+E,1-S),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const S=u[m][x+1],E=u[m][x],P=u[m+1][x],T=u[m+1][x+1];(m!==0||r>0)&&p.push(S,E,T),(m!==n-1||c<Math.PI)&&p.push(E,P,T)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class We extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gl extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wg extends Gl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $o=new ae,vc=new k,xc=new k;class bg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),$o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tg extends bg{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ag extends Gl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yc(){return performance.now()}class Mc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cg extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$r}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$r);class en{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new y);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new y);const n=this.elements,i=t.x,o=t.y,r=t.z;return e.x=n[0]*i+n[1]*o+n[2]*r,e.y=n[3]*i+n[4]*o+n[5]*r,e.z=n[6]*i+n[7]*o+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new en);const n=this.elements,i=t.elements,o=e.elements,r=n[0],a=n[1],c=n[2],l=n[3],u=n[4],d=n[5],h=n[6],p=n[7],g=n[8],_=i[0],f=i[1],m=i[2],x=i[3],S=i[4],E=i[5],P=i[6],T=i[7],b=i[8];return o[0]=r*_+a*x+c*P,o[1]=r*f+a*S+c*T,o[2]=r*m+a*E+c*b,o[3]=l*_+u*x+d*P,o[4]=l*f+u*S+d*T,o[5]=l*m+u*E+d*b,o[6]=h*_+p*x+g*P,o[7]=h*f+p*S+g*T,o[8]=h*m+p*E+g*b,e}scale(t,e){e===void 0&&(e=new en);const n=this.elements,i=e.elements;for(let o=0;o!==3;o++)i[3*o+0]=t.x*n[3*o+0],i[3*o+1]=t.y*n[3*o+1],i[3*o+2]=t.z*n[3*o+2];return e}solve(t,e){e===void 0&&(e=new y);const n=3,i=4,o=[];let r,a;for(r=0;r<n*i;r++)o.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)o[r+i*a]=this.elements[r+3*a];o[3+4*0]=t.x,o[3+4*1]=t.y,o[3+4*2]=t.z;let c=3;const l=c;let u;const d=4;let h;do{if(r=l-c,o[r+i*r]===0){for(a=r+1;a<l;a++)if(o[r+i*a]!==0){u=d;do h=d-u,o[h+i*r]+=o[h+i*a];while(--u);break}}if(o[r+i*r]!==0)for(a=r+1;a<l;a++){const p=o[r+i*a]/o[r+i*r];u=d;do h=d-u,o[h+i*a]=h<=r?0:o[h+i*a]-o[h+i*r]*p;while(--u)}}while(--c);if(e.z=o[2*i+3]/o[2*i+2],e.y=(o[1*i+3]-o[1*i+2]*e.z)/o[1*i+1],e.x=(o[0*i+3]-o[0*i+2]*e.z-o[0*i+1]*e.y)/o[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new en);const e=3,n=6,i=Pg;let o,r;for(o=0;o<3;o++)for(r=0;r<3;r++)i[o+n*r]=this.elements[o+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const u=n;let d;do{if(o=c-a,i[o+n*o]===0){for(r=o+1;r<c;r++)if(i[o+n*r]!==0){l=u;do d=u-l,i[d+n*o]+=i[d+n*r];while(--l);break}}if(i[o+n*o]!==0)for(r=o+1;r<c;r++){const h=i[o+n*r]/i[o+n*o];l=u;do d=u-l,i[d+n*r]=d<=o?0:i[d+n*r]-i[d+n*o]*h;while(--l)}}while(--a);o=2;do{r=o-1;do{const h=i[o+n*r]/i[o+n*o];l=n;do d=n-l,i[d+n*r]=i[d+n*r]-i[d+n*o]*h;while(--l)}while(r--)}while(--o);o=2;do{const h=1/i[o+n*o];l=n;do d=n-l,i[d+n*o]=i[d+n*o]*h;while(--l)}while(o--);o=2;do{r=2;do{if(d=i[e+r+n*o],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,r,d)}while(r--)}while(o--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,o=t.w,r=e+e,a=n+n,c=i+i,l=e*r,u=e*a,d=e*c,h=n*a,p=n*c,g=i*c,_=o*r,f=o*a,m=o*c,x=this.elements;return x[3*0+0]=1-(h+g),x[3*0+1]=u-m,x[3*0+2]=d+f,x[3*1+0]=u+m,x[3*1+1]=1-(l+g),x[3*1+2]=p-_,x[3*2+0]=d-f,x[3*2+1]=p+_,x[3*2+2]=1-(l+h),this}transpose(t){t===void 0&&(t=new en);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Pg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new y);const n=t.x,i=t.y,o=t.z,r=this.x,a=this.y,c=this.z;return e.x=a*o-c*i,e.y=c*n-r*o,e.z=r*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new y(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new y(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new en([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const o=1/i;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new y);const e=this.x,n=this.y,i=this.z;let o=Math.sqrt(e*e+n*n+i*i);return o>0?(o=1/o,t.x=e*o,t.y=n*o,t.z=i*o):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z;return Math.sqrt((o-e)*(o-e)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z;return(o-e)*(o-e)+(r-n)*(r-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new y);const n=this.x,i=this.y,o=this.z;return e.x=t*n,e.y=t*i,e.z=t*o,e}vmul(t,e){return e===void 0&&(e=new y),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new y),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new y),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Lg,o=1/n;i.set(this.x*o,this.y*o,this.z*o);const r=Ig;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,o=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=o+(t.y-o)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Sc),Sc.almostEquals(t,e)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const Lg=new y,Ig=new y,Sc=new y;class ke{constructor(t){t===void 0&&(t={}),this.lowerBound=new y,this.upperBound=new y,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const o=this.lowerBound,r=this.upperBound,a=n;o.copy(t[0]),a&&a.vmult(o,o),r.copy(o);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Ec),l=Ec),l.x>r.x&&(r.x=l.x),l.x<o.x&&(o.x=l.x),l.y>r.y&&(r.y=l.y),l.y<o.y&&(o.y=l.y),l.z>r.z&&(r.z=l.z),l.z<o.z&&(o.z=l.z)}return e&&(e.vadd(o,o),e.vadd(r,r)),i&&(o.x-=i,o.y-=i,o.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new ke().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,o=t.upperBound,r=i.x<=n.x&&n.x<=o.x||e.x<=o.x&&o.x<=n.x,a=i.y<=n.y&&n.y<=o.y||e.y<=o.y&&o.y<=n.y,c=i.z<=n.z&&n.z<=o.z||e.z<=o.z&&o.z<=n.z;return r&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,o=t.upperBound;return e.x<=i.x&&n.x>=o.x&&e.y<=i.y&&n.y>=o.y&&e.z<=i.z&&n.z>=o.z}getCorners(t,e,n,i,o,r,a,c){const l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),o.set(u.x,l.y,u.z),r.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(t,e){const n=wc,i=n[0],o=n[1],r=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,o,r,a,c,l,u,d);for(let h=0;h!==8;h++){const p=n[h];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=wc,i=n[0],o=n[1],r=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,o,r,a,c,l,u,d);for(let h=0;h!==8;h++){const p=n[h];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,o=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*o,u=(this.upperBound.y-n.y)*o,d=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,p=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(d,h));return!(g<0||p>g)}}const Ec=new y,wc=[new y,new y,new y,new y,new y,new y,new y,new y];class bc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const o=i;i=n,n=o}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:o}=e;if(o>i){const r=o;o=i,i=r}this.matrix[(i*(i+1)>>1)+o-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Wl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,o=n.length;i<o;i++)n[i].call(this,t)}return this}}class re{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new y),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Dg,i=Ng;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new re);const n=this.x,i=this.y,o=this.z,r=this.w,a=t.x,c=t.y,l=t.z,u=t.w;return e.x=n*u+r*a+i*l-o*c,e.y=i*u+r*c+o*a-n*l,e.z=o*u+r*l+n*c-i*a,e.w=r*u-n*a-i*c-o*l,e}inverse(t){t===void 0&&(t=new re);const e=this.x,n=this.y,i=this.z,o=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+o*o);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new re),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new y);const n=t.x,i=t.y,o=t.z,r=this.x,a=this.y,c=this.z,l=this.w,u=l*n+a*o-c*i,d=l*i+c*n-r*o,h=l*o+r*i-a*n,p=-r*n-a*i-c*o;return e.x=u*l+p*-r+d*-c-h*-a,e.y=d*l+p*-a+h*-r-u*-c,e.z=h*l+p*-c+u*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,o;const r=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const u=r*a+c*l;if(u>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,o=0),u<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,o=0),n===void 0){const d=r*r,h=a*a,p=c*c;n=Math.atan2(2*a*l-2*r*c,1-2*h-2*p),i=Math.asin(2*u),o=Math.atan2(2*r*l-2*a*c,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=o}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const o=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=c*r*a+o*l*u,this.y=o*l*a-c*r*u,this.z=o*r*u+c*l*a,this.w=o*r*a-c*l*u):i==="YXZ"?(this.x=c*r*a+o*l*u,this.y=o*l*a-c*r*u,this.z=o*r*u-c*l*a,this.w=o*r*a+c*l*u):i==="ZXY"?(this.x=c*r*a-o*l*u,this.y=o*l*a+c*r*u,this.z=o*r*u+c*l*a,this.w=o*r*a-c*l*u):i==="ZYX"?(this.x=c*r*a-o*l*u,this.y=o*l*a+c*r*u,this.z=o*r*u-c*l*a,this.w=o*r*a+c*l*u):i==="YZX"?(this.x=c*r*a+o*l*u,this.y=o*l*a+c*r*u,this.z=o*r*u-c*l*a,this.w=o*r*a-c*l*u):i==="XZY"&&(this.x=c*r*a-o*l*u,this.y=o*l*a-c*r*u,this.z=o*r*u+c*l*a,this.w=o*r*a+c*l*u),this}clone(){return new re(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new re);const i=this.x,o=this.y,r=this.z,a=this.w;let c=t.x,l=t.y,u=t.z,d=t.w,h,p,g,_,f;return p=i*c+o*l+r*u+a*d,p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(h=Math.acos(p),g=Math.sin(h),_=Math.sin((1-e)*h)/g,f=Math.sin(e*h)/g):(_=1-e,f=e),n.x=_*i+f*c,n.y=_*o+f*l,n.z=_*r+f*u,n.w=_*a+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new re);const o=t.x*n.x,r=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(o*d+r*u-a*l),i.y+=h*(r*d+a*c-o*u),i.z+=h*(a*d+o*l-r*c),i.w+=h*(-o*c-r*l-a*u),i}}const Dg=new y,Ng=new y,Ug={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ht{constructor(t){t===void 0&&(t={}),this.id=ht.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ht.idCounter=0;ht.types=Ug;class Yt{constructor(t){t===void 0&&(t={}),this.position=new y,this.quaternion=new re,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Yt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Yt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),n.vsub(t,i),e.conjugate(Tc),Tc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new y),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new y),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Tc=new re;class as extends ht{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:o,boundingSphereRadius:r}=t;super({type:ht.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let o=0;o!==t.length;o++){const r=t[o],a=r.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[r[c]].vsub(e[r[l]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new y;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],o=this.vertices[n[1]],r=this.vertices[n[2]];as.computeNormal(i,o,r,e)}static computeNormal(t,e,n,i){const o=new y,r=new y;e.vsub(t,r),n.vsub(e,o),o.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,o,r,a,c,l){const u=new y;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),o.vmult(u,u);const _=u.dot(r);_>h&&(h=_,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],f=new y;f.copy(_),o.vmult(f,f),i.vadd(f,f),p.push(f)}d>=0&&this.clipFaceAgainstHull(r,t,e,p,a,c,l)}findSeparatingAxis(t,e,n,i,o,r,a,c){const l=new y,u=new y,d=new y,h=new y,p=new y,g=new y;let _=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let m=0;m!==f.uniqueAxes.length;m++){n.vmult(f.uniqueAxes[m],l);const x=f.testSepAxis(l,t,e,n,i,o);if(x===!1)return!1;x<_&&(_=x,r.copy(l))}else{const m=a?a.length:f.faces.length;for(let x=0;x<m;x++){const S=a?a[x]:x;l.copy(f.faceNormals[S]),n.vmult(l,l);const E=f.testSepAxis(l,t,e,n,i,o);if(E===!1)return!1;E<_&&(_=E,r.copy(l))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){o.vmult(t.uniqueAxes[m],u);const x=f.testSepAxis(u,t,e,n,i,o);if(x===!1)return!1;x<_&&(_=x,r.copy(u))}else{const m=c?c.length:t.faces.length;for(let x=0;x<m;x++){const S=c?c[x]:x;u.copy(t.faceNormals[S]),o.vmult(u,u);const E=f.testSepAxis(u,t,e,n,i,o);if(E===!1)return!1;E<_&&(_=E,r.copy(u))}}for(let m=0;m!==f.uniqueEdges.length;m++){n.vmult(f.uniqueEdges[m],h);for(let x=0;x!==t.uniqueEdges.length;x++)if(o.vmult(t.uniqueEdges[x],p),h.cross(p,g),!g.almostZero()){g.normalize();const S=f.testSepAxis(g,t,e,n,i,o);if(S===!1)return!1;S<_&&(_=S,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,o,r){const a=this;as.project(a,t,n,i,Zo),as.project(e,t,o,r,Jo);const c=Zo[0],l=Zo[1],u=Jo[0],d=Jo[1];if(c<d||u<l)return!1;const h=c-d,p=u-l;return h<p?h:p}calculateLocalInertia(t,e){const n=new y,i=new y;this.computeLocalAABB(i,n);const o=n.x-i.x,r=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*o*2*o+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*o*2*o)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,o,r,a){const c=new y,l=new y,u=new y,d=new y,h=new y,p=new y,g=new y,_=new y,f=this,m=[],x=i,S=m;let E=-1,P=Number.MAX_VALUE;for(let v=0;v<f.faces.length;v++){c.copy(f.faceNormals[v]),n.vmult(c,c);const M=c.dot(t);M<P&&(P=M,E=v)}if(E<0)return;const T=f.faces[E];T.connectedFaces=[];for(let v=0;v<f.faces.length;v++)for(let M=0;M<f.faces[v].length;M++)T.indexOf(f.faces[v][M])!==-1&&v!==E&&T.connectedFaces.indexOf(v)===-1&&T.connectedFaces.push(v);const b=T.length;for(let v=0;v<b;v++){const M=f.vertices[T[v]],D=f.vertices[T[(v+1)%b]];M.vsub(D,l),u.copy(l),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[E]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),p.copy(M),n.vmult(p,p),e.vadd(p,p);const C=T.connectedFaces[v];g.copy(this.faceNormals[C]);const N=this.getPlaneConstantOfFace(C);_.copy(g),n.vmult(_,_);const F=N-_.dot(e);for(this.clipFaceAgainstPlane(x,S,_,F);x.length;)x.shift();for(;S.length;)x.push(S.shift())}g.copy(this.faceNormals[E]);const R=this.getPlaneConstantOfFace(E);_.copy(g),n.vmult(_,_);const U=R-_.dot(e);for(let v=0;v<x.length;v++){let M=_.dot(x[v])+U;if(M<=o&&(console.log(`clamped: depth=${M} to minDist=${o}`),M=o),M<=r){const D=x[v];if(M<=1e-6){const C={point:D,normal:_,depth:M};a.push(C)}}}}clipFaceAgainstPlane(t,e,n,i){let o,r;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];o=n.dot(c)+i;for(let u=0;u<a;u++){if(l=t[u],r=n.dot(l)+i,o<0)if(r<0){const d=new y;d.copy(l),e.push(d)}else{const d=new y;c.lerp(l,o/(o-r),d),e.push(d)}else if(r<0){const d=new y;c.lerp(l,o/(o-r),d),e.push(d),e.push(l)}c=l,o=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)e.vmult(n[o],i[o]),t.vadd(i[o],i[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const o=n[i];o.x<t.x?t.x=o.x:o.x>e.x&&(e.x=o.x),o.y<t.y?t.y=o.y:o.y>e.y&&(e.y=o.y),o.z<t.z?t.z=o.z:o.z>e.z&&(e.z=o.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let o=0;o!==e;o++)t.vmult(n[o],i[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const o=this.vertices;let r,a,c,l,u,d,h=new y;for(let p=0;p<o.length;p++){h.copy(o[p]),e.vmult(h,h),t.vadd(h,h);const g=h;(r===void 0||g.x<r)&&(r=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,a,c),i.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new y);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let o=0;o<n;o++){const r=i[o];e.vmult(r,r)}for(let o=0;o<this.faceNormals.length;o++){const r=this.faceNormals[o];e.vmult(r,r)}}if(t)for(let o=0;o<n;o++){const r=i[o];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,o=new y;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=i[r];const c=e[n[r][0]],l=new y;t.vsub(c,l);const u=a.dot(l),d=new y;o.vsub(c,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,i,o){const r=t.vertices.length,a=Fg;let c=0,l=0;const u=Og,d=t.vertices;u.setZero(),Yt.vectorToLocalFrame(n,i,e,a),Yt.pointToLocalFrame(n,i,u,u);const h=u.dot(a);l=c=d[0].dot(a);for(let p=1;p<r;p++){const g=d[p].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=h,c-=h,l>c){const p=l;l=c,c=p}o[0]=c,o[1]=l}}const Zo=[],Jo=[];new y;const Fg=new y,Og=new y;class di extends ht{constructor(t){super({type:ht.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=y,o=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new as({vertices:o,faces:r,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new y),di.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let o=0;o!==n.length;o++)e.vmult(n[o],n[o]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,o=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<o.length;r++)Dn.set(o[r][0],o[r][1],o[r][2]),e.vmult(Dn,Dn),t.vadd(Dn,Dn),n(Dn.x,Dn.y,Dn.z)}calculateWorldAABB(t,e,n,i){const o=this.halfExtents;on[0].set(o.x,o.y,o.z),on[1].set(-o.x,o.y,o.z),on[2].set(-o.x,-o.y,o.z),on[3].set(-o.x,-o.y,-o.z),on[4].set(o.x,-o.y,-o.z),on[5].set(o.x,o.y,-o.z),on[6].set(-o.x,o.y,-o.z),on[7].set(o.x,-o.y,o.z);const r=on[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const c=on[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,u=c.y,d=c.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),d>i.z&&(i.z=d),l<n.x&&(n.x=l),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const Dn=new y,on=[new y,new y,new y,new y,new y,new y,new y,new y],ca={DYNAMIC:1,STATIC:2,KINEMATIC:4},la={AWAKE:0,SLEEPY:1,SLEEPING:2};class ft extends Wl{constructor(t){t===void 0&&(t={}),super(),this.id=ft.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new y,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new y,this.force=new y;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ft.STATIC:ft.DYNAMIC,typeof t.type==typeof ft.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ft.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new re,this.initQuaternion=new re,this.previousQuaternion=new re,this.interpolatedQuaternion=new re,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new y,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new en,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new en,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new y(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new y(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new ke,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ft.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ft.SLEEPING&&this.dispatchEvent(ft.wakeupEvent)}sleep(){this.sleepState=ft.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ft.AWAKE&&n<i?(this.sleepState=ft.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ft.sleepyEvent)):e===ft.SLEEPY&&n>i?this.wakeUp():e===ft.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ft.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ft.SLEEPING||this.type===ft.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new y),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new y),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new y,o=new re;return e&&i.copy(e),n&&o.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let o=0;o!==n;o++){const r=t[o];r.updateBoundingSphereRadius();const a=e[o].length(),c=r.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,o=Bg,r=zg,a=this.quaternion,c=this.aabb,l=Hg;for(let u=0;u!==i;u++){const d=t[u];a.vmult(e[u],o),o.vadd(this.position,o),a.mult(n[u],r),d.calculateWorldAABB(o,r,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=kg,i=Vg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new y),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const n=Gg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new y),this.type!==ft.DYNAMIC)return;const n=Wg,i=Xg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ft.DYNAMIC&&(this.sleepState===ft.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new y),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const n=e,i=qg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const o=Yg;n.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new y),this.type!==ft.DYNAMIC)return;const n=jg,i=Kg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=$g;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),di.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new y;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ft.DYNAMIC||this.type===ft.KINEMATIC)||this.sleepState===ft.SLEEPING)return;const i=this.velocity,o=this.angularVelocity,r=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,p=u*t;i.x+=a.x*p*h.x,i.y+=a.y*p*h.y,i.z+=a.z*p*h.z;const g=d.elements,_=this.angularFactor,f=c.x*_.x,m=c.y*_.y,x=c.z*_.z;o.x+=t*(g[0]*f+g[1]*m+g[2]*x),o.y+=t*(g[3]*f+g[4]*m+g[5]*x),o.z+=t*(g[6]*f+g[7]*m+g[8]*x),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ft.idCounter=0;ft.COLLIDE_EVENT_NAME="collide";ft.DYNAMIC=ca.DYNAMIC;ft.STATIC=ca.STATIC;ft.KINEMATIC=ca.KINEMATIC;ft.AWAKE=la.AWAKE;ft.SLEEPY=la.SLEEPY;ft.SLEEPING=la.SLEEPING;ft.wakeupEvent={type:"wakeup"};ft.sleepyEvent={type:"sleepy"};ft.sleepEvent={type:"sleep"};const Bg=new y,zg=new re,Hg=new ke,kg=new en,Vg=new en;new en;const Gg=new y,Wg=new y,Xg=new y,qg=new y,Yg=new y,jg=new y,Kg=new y,$g=new y;class Zg{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&ft.STATIC||t.sleepState===ft.SLEEPING)&&(e.type&ft.STATIC||e.sleepState===ft.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const o=Jg;e.position.vsub(t.position,o);const r=(t.boundingRadius+e.boundingRadius)**2;o.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Qg,i=t_,o=e_,r=t.length;for(let a=0;a!==r;a++)i[a]=t[a],o[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const c=i[a].id,l=o[a].id,u=c<l?`${c},${l}`:`${l},${c}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(o[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new y;t.position.vsub(e.position,n);const i=t.shapes[0],o=e.shapes[0];return Math.pow(i.boundingSphereRadius+o.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Jg=new y;new y;new re;new y;const Qg={keys:[]},t_=[],e_=[];new y;new y;new y;class Xl extends Zg{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,o=i.length;let r,a;for(let c=0;c!==o;c++)for(let l=0;l!==c;l++)r=i[c],a=i[l],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const o=t.bodies[i];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(e)&&n.push(o)}return n}}class Gi{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,o,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=o,this.body=r,this.distance=a}}let ql,Yl,jl,Kl,$l,Zl,Jl;const ha={CLOSEST:1,ANY:2,ALL:4};ql=ht.types.SPHERE;Yl=ht.types.PLANE;jl=ht.types.BOX;Kl=ht.types.CYLINDER;$l=ht.types.CONVEXPOLYHEDRON;Zl=ht.types.HEIGHTFIELD;Jl=ht.types.TRIMESH;class le{get[ql](){return this._intersectSphere}get[Yl](){return this._intersectPlane}get[jl](){return this._intersectBox}get[Kl](){return this._intersectConvex}get[$l](){return this._intersectConvex}get[Zl](){return this._intersectHeightfield}get[Jl](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new y),e===void 0&&(e=new y),this.from=t.clone(),this.to=e.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=le.ANY,this.result=new Gi,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||le.ANY,this.result=e.result||new Gi,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ac),Qo.length=0,t.broadphase.aabbQuery(t,Ac,Qo),this.intersectBodies(Qo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=n_,o=i_;for(let r=0,a=t.shapes.length;r<a;r++){const c=t.shapes[r];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],o),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(c,o,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const o=this.from;if(__(o,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,o){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,o)}_intersectPlane(t,e,n,i,o){const r=this.from,a=this.to,c=this.direction,l=new y(0,0,1);e.vmult(l,l);const u=new y;r.vsub(n,u);const d=u.dot(l);a.vsub(n,u);const h=u.dot(l);if(d*h>0||r.distanceTo(a)<d)return;const p=l.dot(c);if(Math.abs(p)<this.precision)return;const g=new y,_=new y,f=new y;r.vsub(n,g);const m=-l.dot(g)/p;c.scale(m,_),r.vadd(_,f),this.reportIntersection(l,f,o,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,o=this.from;e.x=Math.min(i.x,o.x),e.y=Math.min(i.y,o.y),e.z=Math.min(i.z,o.z),n.x=Math.max(i.x,o.x),n.y=Math.max(i.y,o.y),n.z=Math.max(i.z,o.z)}_intersectHeightfield(t,e,n,i,o){t.data,t.elementSize;const r=s_;r.from.copy(this.from),r.to.copy(this.to),Yt.pointToLocalFrame(n,e,r.from,r.from),Yt.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const a=o_;let c,l,u,d;c=l=0,u=d=t.data.length-1;const h=new ke;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let p=c;p<u;p++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(p,g,!1),Yt.pointToWorldFrame(n,e,t.pillarOffset,ks),this._intersectConvex(t.pillarConvex,e,ks,i,o,Rc),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),Yt.pointToWorldFrame(n,e,t.pillarOffset,ks),this._intersectConvex(t.pillarConvex,e,ks,i,o,Rc)}}}_intersectSphere(t,e,n,i,o){const r=this.from,a=this.to,c=t.radius,l=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,u=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-c**2,h=u**2-4*l*d,p=r_,g=a_;if(!(h<0))if(h===0)r.lerp(a,h,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,o,i,-1);else{const _=(-u-Math.sqrt(h))/(2*l),f=(-u+Math.sqrt(h))/(2*l);if(_>=0&&_<=1&&(r.lerp(a,_,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,o,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(r.lerp(a,f,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,o,i,-1))}}_intersectConvex(t,e,n,i,o,r){const a=c_,c=Cc,l=r&&r.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,p=this.direction,g=this.from,_=this.to,f=g.distanceTo(_),m=l?l.length:u.length,x=this.result;for(let S=0;!x.shouldStop&&S<m;S++){const E=l?l[S]:S,P=u[E],T=h[E],b=e,R=n;c.copy(d[P[0]]),b.vmult(c,c),c.vadd(R,c),c.vsub(g,c),b.vmult(T,a);const U=p.dot(a);if(Math.abs(U)<this.precision)continue;const v=a.dot(c)/U;if(!(v<0)){p.scale(v,Le),Le.vadd(g,Le),Ze.copy(d[P[0]]),b.vmult(Ze,Ze),R.vadd(Ze,Ze);for(let M=1;!x.shouldStop&&M<P.length-1;M++){rn.copy(d[P[M]]),an.copy(d[P[M+1]]),b.vmult(rn,rn),b.vmult(an,an),R.vadd(rn,rn),R.vadd(an,an);const D=Le.distanceTo(g);!(le.pointInTriangle(Le,Ze,rn,an)||le.pointInTriangle(Le,rn,Ze,an))||D>f||this.reportIntersection(a,Le,o,i,E)}}}}_intersectTrimesh(t,e,n,i,o,r){const a=l_,c=m_,l=g_,u=Cc,d=h_,h=u_,p=d_,g=p_,_=f_,f=t.indices;t.vertices;const m=this.from,x=this.to,S=this.direction;l.position.copy(n),l.quaternion.copy(e),Yt.vectorToLocalFrame(n,e,S,d),Yt.pointToLocalFrame(n,e,m,h),Yt.pointToLocalFrame(n,e,x,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,p.vsub(h,d),d.normalize();const E=h.distanceSquared(p);t.tree.rayQuery(this,l,c);for(let P=0,T=c.length;!this.result.shouldStop&&P!==T;P++){const b=c[P];t.getNormal(b,a),t.getVertex(f[b*3],Ze),Ze.vsub(h,u);const R=d.dot(a),U=a.dot(u)/R;if(U<0)continue;d.scale(U,Le),Le.vadd(h,Le),t.getVertex(f[b*3+1],rn),t.getVertex(f[b*3+2],an);const v=Le.distanceSquared(h);!(le.pointInTriangle(Le,rn,Ze,an)||le.pointInTriangle(Le,Ze,rn,an))||v>E||(Yt.vectorToWorldFrame(e,a,_),Yt.pointToWorldFrame(n,e,Le,g),this.reportIntersection(_,g,o,i,b))}c.length=0}reportIntersection(t,e,n,i,o){const r=this.from,a=this.to,c=r.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case le.ALL:this.hasHit=!0,l.set(r,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case le.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,n,i,c));break;case le.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ni),n.vsub(e,Qi),t.vsub(e,tr);const o=ni.dot(ni),r=ni.dot(Qi),a=ni.dot(tr),c=Qi.dot(Qi),l=Qi.dot(tr);let u,d;return(u=c*a-r*l)>=0&&(d=o*l-r*a)>=0&&u+d<o*c-r*r}}le.CLOSEST=ha.CLOSEST;le.ANY=ha.ANY;le.ALL=ha.ALL;const Ac=new ke,Qo=[],Qi=new y,tr=new y,n_=new y,i_=new re,Le=new y,Ze=new y,rn=new y,an=new y;new y;new Gi;const Rc={faceList:[0]},ks=new y,s_=new le,o_=[],r_=new y,a_=new y,c_=new y;new y;new y;const Cc=new y,l_=new y,h_=new y,u_=new y,d_=new y,f_=new y,p_=new y;new ke;const m_=[],g_=new Yt,ni=new y,Vs=new y;function __(s,t,e){e.vsub(s,ni);const n=ni.dot(t);return t.scale(n,Vs),Vs.vadd(s,Vs),e.distanceTo(Vs)}class Ql{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Pc{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ps{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ps.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Pc,this.jacobianElementB=new Pc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,o=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*o*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),o=this.computeGq(),r=this.computeGiMf();return-o*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.position,r=i.position;return t.spatial.dot(o)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.velocity,r=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(o,a)+e.multiplyVectors(r,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.vlambda,r=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(o,a)+e.multiplyVectors(r,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.force,r=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,u=i.invMassSolve;return o.scale(l,Lc),a.scale(u,Ic),n.invInertiaWorldSolve.vmult(r,Dc),i.invInertiaWorldSolve.vmult(c,Nc),t.multiplyVectors(Lc,Dc)+e.multiplyVectors(Ic,Nc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=o+r;return a.vmult(t.rotational,Gs),l+=Gs.dot(t.rotational),c.vmult(e.rotational,Gs),l+=Gs.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,o=this.bj,r=v_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,n.spatial,o.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),o.invInertiaWorldSolve.vmult(n.rotational,r),o.wlambda.addScaledVector(t,r,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ps.idCounter=0;const Lc=new y,Ic=new y,Dc=new y,Nc=new y,Gs=new y,v_=new y;class x_ extends ps{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(t){const e=this.a,n=this.b,i=this.bi,o=this.bj,r=this.ri,a=this.rj,c=y_,l=M_,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=o.velocity,p=o.angularVelocity;o.force,o.torque;const g=S_,_=this.jacobianElementA,f=this.jacobianElementB,m=this.ni;r.cross(m,c),a.cross(m,l),m.negate(_.spatial),c.negate(_.rotational),f.spatial.copy(m),f.rotational.copy(l),g.copy(o.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(r,g);const x=m.dot(g),S=this.restitution+1,E=S*h.dot(m)-S*u.dot(m)+p.dot(l)-d.dot(c),P=this.computeGiMf();return-x*e-E*n-t*P}getImpactVelocityAlongNormal(){const t=E_,e=w_,n=b_,i=T_,o=A_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,o),this.ni.dot(o)}}const y_=new y,M_=new y,S_=new y,E_=new y,w_=new y,b_=new y,T_=new y,A_=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Uc extends ps{constructor(t,e,n){super(t,e,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,o=R_,r=C_,a=this.t;n.cross(a,o),i.cross(a,r);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),o.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(r);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const R_=new y,C_=new y;class fo{constructor(t,e,n){n=Ql.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=fo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}fo.idCounter=0;class ms{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ms.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ms.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class P_{constructor(t){t===void 0&&(t={}),t=Ql.defaults(t,{chassisConnectionPointLocal:new y,chassisConnectionPointWorld:new y,directionLocal:new y,directionWorld:new y,axleLocal:new y,axleWorld:new y,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:10.5,forwardAcceleration:1,sideAcceleration:1,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,slipInfo:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=t.maxSuspensionTravel,this.customSlidingRotationalSpeed=t.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=t.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=t.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=t.chassisConnectionPointWorld.clone(),this.directionLocal=t.directionLocal.clone(),this.directionWorld=t.directionWorld.clone(),this.axleLocal=t.axleLocal.clone(),this.axleWorld=t.axleWorld.clone(),this.suspensionRestLength=t.suspensionRestLength,this.suspensionMaxLength=t.suspensionMaxLength,this.radius=t.radius,this.suspensionStiffness=t.suspensionStiffness,this.dampingCompression=t.dampingCompression,this.dampingRelaxation=t.dampingRelaxation,this.frictionSlip=t.frictionSlip,this.forwardAcceleration=t.forwardAcceleration,this.sideAcceleration=t.sideAcceleration,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=t.rollInfluence,this.maxSuspensionForce=t.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=t.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.slipInfo=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new Gi,this.worldTransform=new Yt,this.isInContact=!1}updateWheel(t){const e=this.raycastResult;if(this.isInContact){const n=e.hitNormalWorld.dot(e.directionWorld);e.hitPointWorld.vsub(t.position,Oc),t.getVelocityAtWorldPoint(Oc,Fc);const i=e.hitNormalWorld.dot(Fc);if(n>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{const o=-1/n;this.suspensionRelativeVelocity=i*o,this.clippedInvContactDotSuspension=o}}else e.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.hitNormalWorld),this.clippedInvContactDotSuspension=1}}const Fc=new y,Oc=new y;class th{constructor(t){this.chassisBody=t.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof t.indexRightAxis<"u"?t.indexRightAxis:2,this.indexForwardAxis=typeof t.indexForwardAxis<"u"?t.indexForwardAxis:0,this.indexUpAxis=typeof t.indexUpAxis<"u"?t.indexUpAxis:1,this.constraints=[],this.preStepCallback=()=>{},this.currentVehicleSpeedKmHour=0,this.numWheelsOnGround=0}addWheel(t){t===void 0&&(t={});const e=new P_(t),n=this.wheelInfos.length;return this.wheelInfos.push(e),n}setSteeringValue(t,e){const n=this.wheelInfos[e];n.steering=t}applyEngineForce(t,e){this.wheelInfos[e].engineForce=t}setBrake(t,e){this.wheelInfos[e].brake=t}addToWorld(t){t.addBody(this.chassisBody);const e=this;this.preStepCallback=()=>{e.updateVehicle(t.dt)},t.addEventListener("preStep",this.preStepCallback),this.world=t}getVehicleAxisWorld(t,e){e.set(t===0?1:0,t===1?1:0,t===2?1:0),this.chassisBody.vectorToWorldFrame(e,e)}updateVehicle(t){const e=this.wheelInfos,n=e.length,i=this.chassisBody;for(let d=0;d<n;d++)this.updateWheelTransform(d);this.currentVehicleSpeedKmHour=3.6*i.velocity.length();const o=new y;this.getVehicleAxisWorld(this.indexForwardAxis,o),o.dot(i.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(let d=0;d<n;d++)this.castRay(e[d]);this.updateSuspension(t);const r=new y,a=new y;for(let d=0;d<n;d++){const h=e[d];let p=h.suspensionForce;p>h.maxSuspensionForce&&(p=h.maxSuspensionForce),h.raycastResult.hitNormalWorld.scale(p*t,r),h.raycastResult.hitPointWorld.vsub(i.position,a),i.applyImpulse(r,a)}this.updateFriction(t);const c=new y,l=new y,u=new y;for(let d=0;d<n;d++){const h=e[d];i.getVelocityAtWorldPoint(h.chassisConnectionPointWorld,u);let p=1;switch(this.indexUpAxis){case 1:p=-1;break}if(h.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,l);const g=l.dot(h.raycastResult.hitNormalWorld);h.raycastResult.hitNormalWorld.scale(g,c),l.vsub(c,l);const _=l.dot(u);h.deltaRotation=p*_*t/h.radius}(h.sliding||!h.isInContact)&&h.engineForce!==0&&h.useCustomSlidingRotationalSpeed&&(h.deltaRotation=(h.engineForce>0?1:-1)*h.customSlidingRotationalSpeed*t),Math.abs(h.brake)>Math.abs(h.engineForce)&&(h.deltaRotation=0),h.rotation+=h.deltaRotation,h.deltaRotation*=.99}}updateSuspension(t){const n=this.chassisBody.mass,i=this.wheelInfos,o=i.length;for(let r=0;r<o;r++){const a=i[r];if(a.isInContact){let c;const l=a.suspensionRestLength,u=a.suspensionLength,d=l-u;c=a.suspensionStiffness*d*a.clippedInvContactDotSuspension;const h=a.suspensionRelativeVelocity;let p;h<0?p=a.dampingCompression:p=a.dampingRelaxation,c-=p*h,a.suspensionForce=c*n,a.suspensionForce<0&&(a.suspensionForce=0)}else a.suspensionForce=0}}removeFromWorld(t){this.constraints,t.removeBody(this.chassisBody),t.removeEventListener("preStep",this.preStepCallback),this.world=null}castRay(t){const e=N_,n=U_;this.updateWheelTransformWorld(t);const i=this.chassisBody;let o=-1;const r=t.suspensionRestLength+t.radius;t.directionWorld.scale(r,e);const a=t.chassisConnectionPointWorld;a.vadd(e,n);const c=t.raycastResult;c.reset();const l=i.collisionResponse;i.collisionResponse=!1,this.world.rayTest(a,n,c),i.collisionResponse=l;const u=c.body;if(t.raycastResult.groundObject=0,u){o=c.distance,t.raycastResult.hitNormalWorld=c.hitNormalWorld,t.isInContact=!0;const d=c.distance;t.suspensionLength=d-t.radius;const h=t.suspensionRestLength-t.maxSuspensionTravel,p=t.suspensionRestLength+t.maxSuspensionTravel;t.suspensionLength<h&&(t.suspensionLength=h),t.suspensionLength>p&&(t.suspensionLength=p,t.raycastResult.reset());const g=t.raycastResult.hitNormalWorld.dot(t.directionWorld),_=new y;i.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld,_);const f=t.raycastResult.hitNormalWorld.dot(_);if(g>=-.1)t.suspensionRelativeVelocity=0,t.clippedInvContactDotSuspension=1/.1;else{const m=-1/g;t.suspensionRelativeVelocity=f*m,t.clippedInvContactDotSuspension=m}}else t.suspensionLength=t.suspensionRestLength+0*t.maxSuspensionTravel,t.suspensionRelativeVelocity=0,t.directionWorld.scale(-1,t.raycastResult.hitNormalWorld),t.clippedInvContactDotSuspension=1;return o}updateWheelTransformWorld(t){t.isInContact=!1;const e=this.chassisBody;e.pointToWorldFrame(t.chassisConnectionPointLocal,t.chassisConnectionPointWorld),e.vectorToWorldFrame(t.directionLocal,t.directionWorld),e.vectorToWorldFrame(t.axleLocal,t.axleWorld)}updateWheelTransform(t){const e=L_,n=I_,i=D_,o=this.wheelInfos[t];this.updateWheelTransformWorld(o),o.directionLocal.scale(-1,e),n.copy(o.axleLocal),e.cross(n,i),i.normalize(),n.normalize();const r=o.steering,a=new re;a.setFromAxisAngle(e,r);const c=new re;c.setFromAxisAngle(n,o.rotation);const l=o.worldTransform.quaternion;this.chassisBody.quaternion.mult(a,l),l.mult(c,l),l.normalize();const u=o.worldTransform.position;u.copy(o.directionWorld),u.scale(o.suspensionLength,u),u.vadd(o.chassisConnectionPointWorld,u)}getWheelTransformWorld(t){return this.wheelInfos[t].worldTransform}updateFriction(t){const e=O_,n=this.wheelInfos,i=n.length,o=this.chassisBody,r=z_,a=B_;this.numWheelsOnGround=0;for(let u=0;u<i;u++){const d=n[u];d.raycastResult.body&&this.numWheelsOnGround++,d.sideImpulse=0,d.forwardImpulse=0,r[u]||(r[u]=new y),a[u]||(a[u]=new y)}for(let u=0;u<i;u++){const d=n[u],h=d.raycastResult.body;if(h){const p=a[u];this.getWheelTransformWorld(u).vectorToWorldFrame(F_[this.indexRightAxis],p);const _=d.raycastResult.hitNormalWorld,f=p.dot(_);_.scale(f,e),p.vsub(e,p),p.normalize(),_.cross(p,r[u]),r[u].normalize(),d.sideImpulse=J_(o,d.raycastResult.hitPointWorld,h,d.raycastResult.hitPointWorld,p),d.sideImpulse*=H_}}const c=1,l=.5;this.sliding=!1;for(let u=0;u<i;u++){const d=n[u],h=d.raycastResult.body;let p=0;if(d.slipInfo=1,h){const _=d.brake?d.brake:0;p=W_(o,h,d.raycastResult.hitPointWorld,r[u],_),p+=d.engineForce*t;const f=_/p;d.slipInfo*=f}if(d.forwardImpulse=0,d.skidInfo=1,h){d.skidInfo=1;const g=d.suspensionForce*t*d.frictionSlip,f=g*g;d.forwardImpulse=p;const m=d.forwardImpulse*l/d.forwardAcceleration,x=d.sideImpulse*c/d.sideAcceleration,S=m*m+x*x;if(d.sliding=!1,S>f){this.sliding=!0,d.sliding=!0;const E=g/Math.sqrt(S);d.skidInfo*=E}}}if(this.sliding)for(let u=0;u<i;u++){const d=n[u];d.sideImpulse!==0&&d.skidInfo<1&&(d.forwardImpulse*=d.skidInfo,d.sideImpulse*=d.skidInfo)}for(let u=0;u<i;u++){const d=n[u],h=new y;if(d.raycastResult.hitPointWorld.vsub(o.position,h),d.forwardImpulse!==0){const p=new y;r[u].scale(d.forwardImpulse,p),o.applyImpulse(p,h)}if(d.sideImpulse!==0){const p=d.raycastResult.body,g=new y;d.raycastResult.hitPointWorld.vsub(p.position,g);const _=new y;a[u].scale(d.sideImpulse,_),o.vectorToLocalFrame(h,h),h["xyz"[this.indexUpAxis]]*=d.rollInfluence,o.vectorToWorldFrame(h,h),o.applyImpulse(_,h),_.scale(-1,_),p.applyImpulse(_,g)}}}}new y;new y;new y;const L_=new y,I_=new y,D_=new y;new le;new y;const N_=new y,U_=new y,F_=[new y(1,0,0),new y(0,1,0),new y(0,0,1)],O_=new y,B_=[],z_=[],H_=1,k_=new y,V_=new y,G_=new y;function W_(s,t,e,n,i){let o=0;const r=e,a=k_,c=V_,l=G_;s.getVelocityAtWorldPoint(r,a),t.getVelocityAtWorldPoint(r,c),a.vsub(c,l);const u=n.dot(l),d=Bc(s,e,n),h=Bc(t,e,n),g=1/(d+h);return o=-u*g,i<o&&(o=i),o<-i&&(o=-i),o}const X_=new y,q_=new y,Y_=new y,j_=new y;function Bc(s,t,e){const n=X_,i=q_,o=Y_,r=j_;return t.vsub(s.position,n),n.cross(e,i),s.invInertiaWorld.vmult(i,r),r.cross(n,o),s.invMass+e.dot(o)}const K_=new y,$_=new y,Z_=new y;function J_(s,t,e,n,i){if(i.lengthSquared()>1.1)return 0;const r=K_,a=$_,c=Z_;s.getVelocityAtWorldPoint(t,r),e.getVelocityAtWorldPoint(n,a),r.vsub(a,c);const l=i.dot(c),u=1/(s.invMass+e.invMass);return-.2*l*u}new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new ke;new y;new ke;new y;new y;new y;new y;new y;new y;new y;new ke;new y;new Yt;new ke;class Q_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class t0 extends Q_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,o=this.tolerance*this.tolerance,r=this.equations,a=r.length,c=e.bodies,l=c.length,u=t;let d,h,p,g,_,f;if(a!==0)for(let E=0;E!==l;E++)c[E].updateSolveMassProperties();const m=n0,x=i0,S=e0;m.length=a,x.length=a,S.length=a;for(let E=0;E!==a;E++){const P=r[E];S[E]=0,x[E]=P.computeB(u),m[E]=1/P.computeC()}if(a!==0){for(let T=0;T!==l;T++){const b=c[T],R=b.vlambda,U=b.wlambda;R.set(0,0,0),U.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==a;T++){const b=r[T];d=x[T],h=m[T],f=S[T],_=b.computeGWlambda(),p=h*(d-_-b.eps*f),f+p<b.minForce?p=b.minForce-f:f+p>b.maxForce&&(p=b.maxForce-f),S[T]+=p,g+=p>0?p:-p,b.addToWlambda(p)}if(g*g<o)break}for(let T=0;T!==l;T++){const b=c[T],R=b.velocity,U=b.angularVelocity;b.vlambda.vmul(b.linearFactor,b.vlambda),R.vadd(b.vlambda,R),b.wlambda.vmul(b.angularFactor,b.wlambda),U.vadd(b.wlambda,U)}let E=r.length;const P=1/u;for(;E--;)r[E].multiplier=S[E]*P}return n}}const e0=[],n0=[],i0=[];class s0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class o0 extends s0{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const ie={sphereSphere:ht.types.SPHERE,spherePlane:ht.types.SPHERE|ht.types.PLANE,boxBox:ht.types.BOX|ht.types.BOX,sphereBox:ht.types.SPHERE|ht.types.BOX,planeBox:ht.types.PLANE|ht.types.BOX,convexConvex:ht.types.CONVEXPOLYHEDRON,sphereConvex:ht.types.SPHERE|ht.types.CONVEXPOLYHEDRON,planeConvex:ht.types.PLANE|ht.types.CONVEXPOLYHEDRON,boxConvex:ht.types.BOX|ht.types.CONVEXPOLYHEDRON,sphereHeightfield:ht.types.SPHERE|ht.types.HEIGHTFIELD,boxHeightfield:ht.types.BOX|ht.types.HEIGHTFIELD,convexHeightfield:ht.types.CONVEXPOLYHEDRON|ht.types.HEIGHTFIELD,sphereParticle:ht.types.PARTICLE|ht.types.SPHERE,planeParticle:ht.types.PLANE|ht.types.PARTICLE,boxParticle:ht.types.BOX|ht.types.PARTICLE,convexParticle:ht.types.PARTICLE|ht.types.CONVEXPOLYHEDRON,cylinderCylinder:ht.types.CYLINDER,sphereCylinder:ht.types.SPHERE|ht.types.CYLINDER,planeCylinder:ht.types.PLANE|ht.types.CYLINDER,boxCylinder:ht.types.BOX|ht.types.CYLINDER,convexCylinder:ht.types.CONVEXPOLYHEDRON|ht.types.CYLINDER,heightfieldCylinder:ht.types.HEIGHTFIELD|ht.types.CYLINDER,particleCylinder:ht.types.PARTICLE|ht.types.CYLINDER,sphereTrimesh:ht.types.SPHERE|ht.types.TRIMESH,planeTrimesh:ht.types.PLANE|ht.types.TRIMESH};class r0{get[ie.sphereSphere](){return this.sphereSphere}get[ie.spherePlane](){return this.spherePlane}get[ie.boxBox](){return this.boxBox}get[ie.sphereBox](){return this.sphereBox}get[ie.planeBox](){return this.planeBox}get[ie.convexConvex](){return this.convexConvex}get[ie.sphereConvex](){return this.sphereConvex}get[ie.planeConvex](){return this.planeConvex}get[ie.boxConvex](){return this.boxConvex}get[ie.sphereHeightfield](){return this.sphereHeightfield}get[ie.boxHeightfield](){return this.boxHeightfield}get[ie.convexHeightfield](){return this.convexHeightfield}get[ie.sphereParticle](){return this.sphereParticle}get[ie.planeParticle](){return this.planeParticle}get[ie.boxParticle](){return this.boxParticle}get[ie.convexParticle](){return this.convexParticle}get[ie.cylinderCylinder](){return this.convexConvex}get[ie.sphereCylinder](){return this.sphereConvex}get[ie.planeCylinder](){return this.planeConvex}get[ie.boxCylinder](){return this.boxConvex}get[ie.convexCylinder](){return this.convexConvex}get[ie.heightfieldCylinder](){return this.heightfieldCylinder}get[ie.particleCylinder](){return this.particleCylinder}get[ie.sphereTrimesh](){return this.sphereTrimesh}get[ie.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new o0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,o,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new x_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,u=i.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=o||n,a.sj=r||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,o=t.si,r=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const u=o.material||n.material,d=r.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,_=g.length?g.pop():new Uc(n,i,h*p),f=g.length?g.pop():new Uc(n,i,h*p);return _.bi=f.bi=n,_.bj=f.bj=i,_.minForce=f.minForce=-h*p,_.maxForce=f.maxForce=h*p,_.ri.copy(t.ri),_.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(_.t,f.t),_.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),f.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),_.enabled=f.enabled=t.enabled,e.push(_,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];$n.setZero(),Ri.setZero(),Ci.setZero();const o=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==o?($n.vadd(e.ni,$n),Ri.vadd(e.ri,Ri),Ci.vadd(e.rj,Ci)):($n.vsub(e.ni,$n),Ri.vadd(e.rj,Ri),Ci.vadd(e.ri,Ci));const r=1/t;Ri.scale(r,n.ri),Ci.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),$n.normalize(),$n.tangents(n.t,i.t)}getContacts(t,e,n,i,o,r,a){this.contactPointPool=o,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const c=l0,l=h0,u=a0,d=c0;for(let h=0,p=t.length;h!==p;h++){const g=t[h],_=e[h];let f=null;g.material&&_.material&&(f=n.getContactMaterial(g.material,_.material)||null);const m=g.type&ft.KINEMATIC&&_.type&ft.STATIC||g.type&ft.STATIC&&_.type&ft.KINEMATIC||g.type&ft.KINEMATIC&&_.type&ft.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],c),g.quaternion.vmult(g.shapeOffsets[x],u),u.vadd(g.position,u);const S=g.shapes[x];for(let E=0;E<_.shapes.length;E++){_.quaternion.mult(_.shapeOrientations[E],l),_.quaternion.vmult(_.shapeOffsets[E],d),d.vadd(_.position,d);const P=_.shapes[E];if(!(S.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&S.collisionFilterGroup)||u.distanceTo(d)>S.boundingSphereRadius+P.boundingSphereRadius)continue;let T=null;S.material&&P.material&&(T=n.getContactMaterial(S.material,P.material)||null),this.currentContactMaterial=T||f||n.defaultContactMaterial;const b=S.type|P.type,R=this[b];if(R){let U=!1;S.type<P.type?U=R.call(this,S,P,u,d,c,l,g,_,S,P,m):U=R.call(this,P,S,d,u,l,c,_,g,S,P,m),U&&m&&(n.shapeOverlapKeeper.set(S.id,P.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,o,r,a,c,l,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,c,t,e,l,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,o,r,a,c,l,u,d){const h=this.createContactEquation(a,c,t,e,l,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,Ws),h.ni.scale(h.ni.dot(Ws),zc),Ws.vsub(zc,h.rj),-Ws.dot(h.ni)<=t.radius){if(d)return!0;const p=h.ri,g=h.rj;p.vadd(n,p),p.vsub(a.position,p),g.vadd(i,g),g.vsub(c.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,o,r,a,c,t,e,d)}sphereBox(t,e,n,i,o,r,a,c,l,u,d){const h=this.v3pool,p=F0;n.vsub(i,Xs),e.getSideNormals(p,r);const g=t.radius;let _=!1;const f=B0,m=z0,x=H0;let S=null,E=0,P=0,T=0,b=null;for(let I=0,q=p.length;I!==q&&_===!1;I++){const V=D0;V.copy(p[I]);const Z=V.length();V.normalize();const st=Xs.dot(V);if(st<Z+g&&st>0){const rt=N0,ot=U0;rt.copy(p[(I+1)%3]),ot.copy(p[(I+2)%3]);const Bt=rt.length(),j=ot.length();rt.normalize(),ot.normalize();const et=Xs.dot(rt),pt=Xs.dot(ot);if(et<Bt&&et>-Bt&&pt<j&&pt>-j){const Q=Math.abs(st-Z-g);if((b===null||Q<b)&&(b=Q,P=et,T=pt,S=Z,f.copy(V),m.copy(rt),x.copy(ot),E++,d))return!0}}}if(E){_=!0;const I=this.createContactEquation(a,c,t,e,l,u);f.scale(-g,I.ri),I.ni.copy(f),I.ni.negate(I.ni),f.scale(S,f),m.scale(P,m),f.vadd(m,f),x.scale(T,x),f.vadd(x,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let R=h.get();const U=O0;for(let I=0;I!==2&&!_;I++)for(let q=0;q!==2&&!_;q++)for(let V=0;V!==2&&!_;V++)if(R.set(0,0,0),I?R.vadd(p[0],R):R.vsub(p[0],R),q?R.vadd(p[1],R):R.vsub(p[1],R),V?R.vadd(p[2],R):R.vsub(p[2],R),i.vadd(R,U),U.vsub(n,U),U.lengthSquared()<g*g){if(d)return!0;_=!0;const Z=this.createContactEquation(a,c,t,e,l,u);Z.ri.copy(U),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(g,Z.ri),Z.rj.copy(R),Z.ri.vadd(n,Z.ri),Z.ri.vsub(a.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(c.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}h.release(R),R=null;const v=h.get(),M=h.get(),D=h.get(),C=h.get(),N=h.get(),F=p.length;for(let I=0;I!==F&&!_;I++)for(let q=0;q!==F&&!_;q++)if(I%3!==q%3){p[q].cross(p[I],v),v.normalize(),p[I].vadd(p[q],M),D.copy(n),D.vsub(M,D),D.vsub(i,D);const V=D.dot(v);v.scale(V,C);let Z=0;for(;Z===I%3||Z===q%3;)Z++;N.copy(n),N.vsub(C,N),N.vsub(M,N),N.vsub(i,N);const st=Math.abs(V),rt=N.length();if(st<p[Z].length()&&rt<g){if(d)return!0;_=!0;const ot=this.createContactEquation(a,c,t,e,l,u);M.vadd(C,ot.rj),ot.rj.copy(ot.rj),N.negate(ot.ni),ot.ni.normalize(),ot.ri.copy(ot.rj),ot.ri.vadd(i,ot.ri),ot.ri.vsub(n,ot.ri),ot.ri.normalize(),ot.ri.scale(g,ot.ri),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),ot.rj.vadd(i,ot.rj),ot.rj.vsub(c.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}}h.release(v,M,D,C,N)}planeBox(t,e,n,i,o,r,a,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,o,r,a,c,t,e,d)}convexConvex(t,e,n,i,o,r,a,c,l,u,d,h,p){const g=ev;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,o,i,r,g,h,p)){const _=[],f=nv;t.clipAgainstHull(n,o,e,i,r,g,-100,100,_);let m=0;for(let x=0;x!==_.length;x++){if(d)return!0;const S=this.createContactEquation(a,c,t,e,l,u),E=S.ri,P=S.rj;g.negate(S.ni),_[x].normal.negate(f),f.scale(_[x].depth,f),_[x].point.vadd(f,E),P.copy(_[x].point),E.vsub(n,E),P.vsub(i,P),E.vadd(n,E),E.vsub(a.position,E),P.vadd(i,P),P.vsub(c.position,P),this.result.push(S),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,i,o,r,a,c,l,u,d){const h=this.v3pool;n.vsub(i,k0);const p=e.faceNormals,g=e.faces,_=e.vertices,f=t.radius;let m=!1;for(let x=0;x!==_.length;x++){const S=_[x],E=X0;r.vmult(S,E),i.vadd(E,E);const P=W0;if(E.vsub(n,P),P.lengthSquared()<f*f){if(d)return!0;m=!0;const T=this.createContactEquation(a,c,t,e,l,u);T.ri.copy(P),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(f,T.ri),E.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(c.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,S=g.length;x!==S&&m===!1;x++){const E=p[x],P=g[x],T=q0;r.vmult(E,T);const b=Y0;r.vmult(_[P[0]],b),b.vadd(i,b);const R=j0;T.scale(-f,R),n.vadd(R,R);const U=K0;R.vsub(b,U);const v=U.dot(T),M=$0;if(n.vsub(b,M),v<0&&M.dot(T)>0){const D=[];for(let C=0,N=P.length;C!==N;C++){const F=h.get();r.vmult(_[P[C]],F),i.vadd(F,F),D.push(F)}if(I0(D,T,n)){if(d)return!0;m=!0;const C=this.createContactEquation(a,c,t,e,l,u);T.scale(-f,C.ri),T.negate(C.ni);const N=h.get();T.scale(-v,N);const F=h.get();T.scale(-f,F),n.vsub(i,C.rj),C.rj.vadd(F,C.rj),C.rj.vadd(N,C.rj),C.rj.vadd(i,C.rj),C.rj.vsub(c.position,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),h.release(N),h.release(F),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);for(let I=0,q=D.length;I!==q;I++)h.release(D[I]);return}else for(let C=0;C!==P.length;C++){const N=h.get(),F=h.get();r.vmult(_[P[(C+1)%P.length]],N),r.vmult(_[P[(C+2)%P.length]],F),i.vadd(N,N),i.vadd(F,F);const I=V0;F.vsub(N,I);const q=G0;I.unit(q);const V=h.get(),Z=h.get();n.vsub(N,Z);const st=Z.dot(q);q.scale(st,V),V.vadd(N,V);const rt=h.get();if(V.vsub(n,rt),st>0&&st*st<I.lengthSquared()&&rt.lengthSquared()<f*f){if(d)return!0;const ot=this.createContactEquation(a,c,t,e,l,u);V.vsub(i,ot.rj),V.vsub(n,ot.ni),ot.ni.normalize(),ot.ni.scale(f,ot.ri),ot.rj.vadd(i,ot.rj),ot.rj.vsub(c.position,ot.rj),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult);for(let Bt=0,j=D.length;Bt!==j;Bt++)h.release(D[Bt]);h.release(N),h.release(F),h.release(V),h.release(rt),h.release(Z);return}h.release(N),h.release(F),h.release(V),h.release(rt),h.release(Z)}for(let C=0,N=D.length;C!==N;C++)h.release(D[C])}}}planeConvex(t,e,n,i,o,r,a,c,l,u,d){const h=Z0,p=J0;p.set(0,0,1),o.vmult(p,p);let g=0;const _=Q0;for(let f=0;f!==e.vertices.length;f++)if(h.copy(e.vertices[f]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,_),p.dot(_)<=0){if(d)return!0;const x=this.createContactEquation(a,c,t,e,l,u),S=tv;p.scale(p.dot(_),S),h.vsub(S,S),S.vsub(n,x.ri),x.ni.copy(p),h.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(c.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,o,r,a,c,t,e,d)}sphereHeightfield(t,e,n,i,o,r,a,c,l,u,d){const h=e.data,p=t.radius,g=e.elementSize,_=pv,f=fv;Yt.pointToLocalFrame(i,r,n,f);let m=Math.floor((f.x-p)/g)-1,x=Math.ceil((f.x+p)/g)+1,S=Math.floor((f.y-p)/g)-1,E=Math.ceil((f.y+p)/g)+1;if(x<0||E<0||m>h.length||S>h[0].length)return;m<0&&(m=0),x<0&&(x=0),S<0&&(S=0),E<0&&(E=0),m>=h.length&&(m=h.length-1),x>=h.length&&(x=h.length-1),E>=h[0].length&&(E=h[0].length-1),S>=h[0].length&&(S=h[0].length-1);const P=[];e.getRectMinMax(m,S,x,E,P);const T=P[0],b=P[1];if(f.z-p>b||f.z+p<T)return;const R=this.result;for(let U=m;U<x;U++)for(let v=S;v<E;v++){const M=R.length;let D=!1;if(e.getConvexTrianglePillar(U,v,!1),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.sphereConvex(t,e.pillarConvex,n,_,o,r,a,c,t,e,d)),d&&D||(e.getConvexTrianglePillar(U,v,!0),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.sphereConvex(t,e.pillarConvex,n,_,o,r,a,c,t,e,d)),d&&D))return!0;if(R.length-M>2)return}}boxHeightfield(t,e,n,i,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,o,r,a,c,t,e,d)}convexHeightfield(t,e,n,i,o,r,a,c,l,u,d){const h=e.data,p=e.elementSize,g=t.boundingSphereRadius,_=uv,f=dv,m=hv;Yt.pointToLocalFrame(i,r,n,m);let x=Math.floor((m.x-g)/p)-1,S=Math.ceil((m.x+g)/p)+1,E=Math.floor((m.y-g)/p)-1,P=Math.ceil((m.y+g)/p)+1;if(S<0||P<0||x>h.length||E>h[0].length)return;x<0&&(x=0),S<0&&(S=0),E<0&&(E=0),P<0&&(P=0),x>=h.length&&(x=h.length-1),S>=h.length&&(S=h.length-1),P>=h[0].length&&(P=h[0].length-1),E>=h[0].length&&(E=h[0].length-1);const T=[];e.getRectMinMax(x,E,S,P,T);const b=T[0],R=T[1];if(!(m.z-g>R||m.z+g<b))for(let U=x;U<S;U++)for(let v=E;v<P;v++){let M=!1;if(e.getConvexTrianglePillar(U,v,!1),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(M=this.convexConvex(t,e.pillarConvex,n,_,o,r,a,c,null,null,d,f,null)),d&&M||(e.getConvexTrianglePillar(U,v,!0),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(M=this.convexConvex(t,e.pillarConvex,n,_,o,r,a,c,null,null,d,f,null)),d&&M))return!0}}sphereParticle(t,e,n,i,o,r,a,c,l,u,d){const h=rv;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,o,r,a,c,l,u,d){const h=iv;h.set(0,0,1),a.quaternion.vmult(h,h);const p=sv;if(i.vsub(a.position,p),h.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(c,a,e,t,l,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const f=ov;h.scale(h.dot(i),f),i.vsub(f,f),_.rj.copy(f),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,o,r,a,c,t,e,d)}convexParticle(t,e,n,i,o,r,a,c,l,u,d){let h=-1;const p=cv,g=lv;let _=null;const f=av;if(f.copy(i),f.vsub(n,f),o.conjugate(Hc),Hc.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let m=0,x=t.faces.length;m!==x;m++){const S=[t.worldVertices[t.faces[m][0]]],E=t.worldFaceNormals[m];i.vsub(S[0],kc);const P=-E.dot(kc);if(_===null||Math.abs(P)<Math.abs(_)){if(d)return!0;_=P,h=m,p.copy(E)}}if(h!==-1){const m=this.createContactEquation(c,a,e,t,l,u);p.scale(_,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),p.negate(m.ni),m.ri.set(0,0,0);const x=m.ri,S=m.rj;x.vadd(i,x),x.vsub(c.position,x),S.vadd(n,S),S.vsub(a.position,S),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,o,r,a,c,l,u,d){return this.convexHeightfield(e,t,i,n,r,o,c,a,l,u,d)}particleCylinder(t,e,n,i,o,r,a,c,l,u,d){return this.convexParticle(e,t,i,n,r,o,c,a,l,u,d)}sphereTrimesh(t,e,n,i,o,r,a,c,l,u,d){const h=v0,p=x0,g=y0,_=M0,f=S0,m=E0,x=A0,S=_0,E=m0,P=R0;Yt.pointToLocalFrame(i,r,n,f);const T=t.radius;x.lowerBound.set(f.x-T,f.y-T,f.z-T),x.upperBound.set(f.x+T,f.y+T,f.z+T),e.getTrianglesInAABB(x,P);const b=g0,R=t.radius*t.radius;for(let C=0;C<P.length;C++)for(let N=0;N<3;N++)if(e.getVertex(e.indices[P[C]*3+N],b),b.vsub(f,E),E.lengthSquared()<=R){if(S.copy(b),Yt.pointToWorldFrame(i,r,S,b),b.vsub(n,E),d)return!0;let F=this.createContactEquation(a,c,t,e,l,u);F.ni.copy(E),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(b),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let C=0;C<P.length;C++)for(let N=0;N<3;N++){e.getVertex(e.indices[P[C]*3+N],h),e.getVertex(e.indices[P[C]*3+(N+1)%3],p),p.vsub(h,g),f.vsub(p,m);const F=m.dot(g);f.vsub(h,m);let I=m.dot(g);if(I>0&&F<0&&(f.vsub(h,m),_.copy(g),_.normalize(),I=m.dot(_),_.scale(I,m),m.vadd(h,m),m.distanceTo(f)<t.radius)){if(d)return!0;const V=this.createContactEquation(a,c,t,e,l,u);m.vsub(f,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),Yt.pointToWorldFrame(i,r,m,m),m.vsub(c.position,V.rj),Yt.vectorToWorldFrame(r,V.ni,V.ni),Yt.vectorToWorldFrame(r,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const U=w0,v=b0,M=T0,D=p0;for(let C=0,N=P.length;C!==N;C++){e.getTriangleVertices(P[C],U,v,M),e.getNormal(P[C],D),f.vsub(U,m);let F=m.dot(D);if(D.scale(F,m),f.vsub(m,m),F=m.distanceTo(f),le.pointInTriangle(m,U,v,M)&&F<t.radius){if(d)return!0;let I=this.createContactEquation(a,c,t,e,l,u);m.vsub(f,I.ni),I.ni.normalize(),I.ni.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),Yt.pointToWorldFrame(i,r,m,m),m.vsub(c.position,I.rj),Yt.vectorToWorldFrame(r,I.ni,I.ni),Yt.vectorToWorldFrame(r,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,i,o,r,a,c,l,u,d){const h=new y,p=u0;p.set(0,0,1),o.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new y;_.copy(h),Yt.pointToWorldFrame(i,r,_,h);const f=d0;if(h.vsub(n,f),p.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(a,c,t,e,l,u);x.ni.copy(p);const S=f0;p.scale(f.dot(p),S),h.vsub(S,S),x.ri.copy(S),x.ri.vsub(a.position,x.ri),x.rj.copy(h),x.rj.vsub(c.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const $n=new y,Ri=new y,Ci=new y,a0=new y,c0=new y,l0=new re,h0=new re,u0=new y,d0=new y,f0=new y,p0=new y,m0=new y;new y;const g0=new y,_0=new y,v0=new y,x0=new y,y0=new y,M0=new y,S0=new y,E0=new y,w0=new y,b0=new y,T0=new y,A0=new ke,R0=[],Ws=new y,zc=new y,C0=new y,P0=new y,L0=new y;function I0(s,t,e){let n=null;const i=s.length;for(let o=0;o!==i;o++){const r=s[o],a=C0;s[(o+1)%i].vsub(r,a);const c=P0;a.cross(t,c);const l=L0;e.vsub(r,l);const u=c.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Xs=new y,D0=new y,N0=new y,U0=new y,F0=[new y,new y,new y,new y,new y,new y],O0=new y,B0=new y,z0=new y,H0=new y,k0=new y,V0=new y,G0=new y,W0=new y,X0=new y,q0=new y,Y0=new y,j0=new y,K0=new y,$0=new y;new y;new y;const Z0=new y,J0=new y,Q0=new y,tv=new y,ev=new y,nv=new y,iv=new y,sv=new y,ov=new y,rv=new y,Hc=new re,av=new y;new y;const cv=new y,kc=new y,lv=new y,hv=new y,uv=new y,dv=[0],fv=new y,pv=new y;class Vc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let o=0;for(;n>i[o];)o++;if(n!==i[o]){for(let r=i.length-1;r>=o;r--)i[r+1]=i[r];i[o]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,o=n.length,r=i.length;let a=0;for(let c=0;c<o;c++){let l=!1;const u=n[c];for(;u>i[a];)a++;l=u===i[a],l||Gc(t,u)}a=0;for(let c=0;c<r;c++){let l=!1;const u=i[c];for(;u>n[a];)a++;l=n[a]===u,l||Gc(e,u)}}}function Gc(s,t){s.push((t&4294901760)>>16,t&65535)}const er=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class mv{constructor(){this.data={keys:[]}}get(t,e){const n=er(t,e);return this.data[n]}set(t,e,n){const i=er(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=er(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class gv extends Wl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Xl,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new t0,this.constraints=[],this.narrowphase=new r0(this),this.collisionMatrix=new bc,this.collisionMatrixPrevious=new bc,this.bodyOverlapKeeper=new Vc,this.shapeOverlapKeeper=new Vc,this.contactmaterials=[],this.contactMaterialTable=new mv,this.defaultMaterial=new ms("default"),this.defaultContactMaterial=new fo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Gi?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=le.ALL,n.from=t,n.to=e,n.callback=i,nr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=le.ANY,n.from=t,n.to=e,n.result=i,nr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=le.CLOSEST,n.from=t,n.to=e,n.result=i,nr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ft&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let o=0;o!==n.length;o++)n[o].index=o;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let o=0;o<i.length;o++){const r=i[o];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ge.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ge.now();let o=0;for(;this.accumulator>=t&&o<n&&(this.internalStep(t),this.accumulator-=t,o++,!(ge.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,r,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,r,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Mv,i=Sv,o=this.bodies.length,r=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,d=ft.DYNAMIC;let h=-1/0;const p=this.constraints,g=yv;c.length();const _=c.x,f=c.y,m=c.z;let x=0;for(l&&(h=ge.now()),x=0;x!==o;x++){const C=r[x];if(C.type===d){const N=C.force,F=C.mass;N.x+=F*_,N.y+=F*f,N.z+=F*m}}for(let C=0,N=this.subsystems.length;C!==N;C++)this.subsystems[C].update();l&&(h=ge.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=ge.now()-h);let S=p.length;for(x=0;x!==S;x++){const C=p[x];if(!C.collideConnected)for(let N=n.length-1;N>=0;N-=1)(C.bodyA===n[N]&&C.bodyB===i[N]||C.bodyB===n[N]&&C.bodyA===i[N])&&(n.splice(N,1),i.splice(N,1))}this.collisionMatrixTick(),l&&(h=ge.now());const E=xv,P=e.length;for(x=0;x!==P;x++)E.push(e[x]);e.length=0;const T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,E,this.frictionEquations,g),l&&(u.narrowphase=ge.now()-h),l&&(h=ge.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const b=e.length;for(let C=0;C!==b;C++){const N=e[C],F=N.bi,I=N.bj,q=N.si,V=N.sj;let Z;if(F.material&&I.material?Z=this.getContactMaterial(F.material,I.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,F.material&&I.material&&(F.material.friction>=0&&I.material.friction>=0&&F.material.friction*I.material.friction,F.material.restitution>=0&&I.material.restitution>=0&&(N.restitution=F.material.restitution*I.material.restitution)),a.addEquation(N),F.allowSleep&&F.type===ft.DYNAMIC&&F.sleepState===ft.SLEEPING&&I.sleepState===ft.AWAKE&&I.type!==ft.STATIC){const st=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),rt=I.sleepSpeedLimit**2;st>=rt*2&&(F.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===ft.DYNAMIC&&I.sleepState===ft.SLEEPING&&F.sleepState===ft.AWAKE&&F.type!==ft.STATIC){const st=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),rt=F.sleepSpeedLimit**2;st>=rt*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,I,!0),this.collisionMatrixPrevious.get(F,I)||(ts.body=I,ts.contact=N,F.dispatchEvent(ts),ts.body=F,I.dispatchEvent(ts)),this.bodyOverlapKeeper.set(F.id,I.id),this.shapeOverlapKeeper.set(q.id,V.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=ge.now()-h,h=ge.now()),x=0;x!==o;x++){const C=r[x];C.wakeUpAfterNarrowphase&&(C.wakeUp(),C.wakeUpAfterNarrowphase=!1)}for(S=p.length,x=0;x!==S;x++){const C=p[x];C.update();for(let N=0,F=C.equations.length;N!==F;N++){const I=C.equations[N];a.addEquation(I)}}a.solve(t,this),l&&(u.solve=ge.now()-h),a.removeAllEquations();const R=Math.pow;for(x=0;x!==o;x++){const C=r[x];if(C.type&d){const N=R(1-C.linearDamping,t),F=C.velocity;F.scale(N,F);const I=C.angularVelocity;if(I){const q=R(1-C.angularDamping,t);I.scale(q,I)}}}this.dispatchEvent(vv),l&&(h=ge.now());const v=this.stepnumber%(this.quatNormalizeSkip+1)===0,M=this.quatNormalizeFast;for(x=0;x!==o;x++)r[x].integrate(t,v,M);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=ge.now()-h),this.stepnumber+=1,this.dispatchEvent(_v);let D=!0;if(this.allowSleep)for(D=!1,x=0;x!==o;x++){const C=r[x];C.sleepTick(this.time),C.sleepState!==ft.SLEEPING&&(D=!0)}this.hasActiveBodies=D}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(gn,_n),t){for(let o=0,r=gn.length;o<r;o+=2)es.bodyA=this.getBodyById(gn[o]),es.bodyB=this.getBodyById(gn[o+1]),this.dispatchEvent(es);es.bodyA=es.bodyB=null}if(e){for(let o=0,r=_n.length;o<r;o+=2)ns.bodyA=this.getBodyById(_n[o]),ns.bodyB=this.getBodyById(_n[o+1]),this.dispatchEvent(ns);ns.bodyA=ns.bodyB=null}gn.length=_n.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(gn,_n),n){for(let o=0,r=gn.length;o<r;o+=2){const a=this.getShapeById(gn[o]),c=this.getShapeById(gn[o+1]);vn.shapeA=a,vn.shapeB=c,a&&(vn.bodyA=a.body),c&&(vn.bodyB=c.body),this.dispatchEvent(vn)}vn.bodyA=vn.bodyB=vn.shapeA=vn.shapeB=null}if(i){for(let o=0,r=_n.length;o<r;o+=2){const a=this.getShapeById(_n[o]),c=this.getShapeById(_n[o+1]);xn.shapeA=a,xn.shapeB=c,a&&(xn.bodyA=a.body),c&&(xn.bodyB=c.body),this.dispatchEvent(xn)}xn.bodyA=xn.bodyB=xn.shapeA=xn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new ke;const nr=new le,ge=globalThis.performance||{};if(!ge.now){let s=Date.now();ge.timing&&ge.timing.navigationStart&&(s=ge.timing.navigationStart),ge.now=()=>Date.now()-s}new y;const _v={type:"postStep"},vv={type:"preStep"},ts={type:ft.COLLIDE_EVENT_NAME,body:null,contact:null},xv=[],yv=[],Mv=[],Sv=[],gn=[],_n=[],es={type:"beginContact",bodyA:null,bodyB:null},ns={type:"endContact",bodyA:null,bodyB:null},vn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},xn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Ev(s,t,e){let{color:n=65280,scale:i=1,onInit:o,onUpdate:r}=e===void 0?{}:e;const a=[],c=new Fi({color:n??65280,wireframe:!0}),l=new y,u=new y,d=new y,h=new re,p=new zn(1),g=new de(1,1,1),_=new li(10,10,10,10);_.translate(0,0,1e-4);function f(R){const U=new Ue,v=[];for(let D=0;D<R.vertices.length;D++){const C=R.vertices[D];v.push(C.x,C.y,C.z)}U.setAttribute("position",new we(v,3));const M=[];for(let D=0;D<R.faces.length;D++){const C=R.faces[D],N=C[0];for(let F=1;F<C.length-1;F++){const I=C[F],q=C[F+1];M.push(N,I,q)}}return U.setIndex(M),U.computeBoundingSphere(),U.computeVertexNormals(),U}function m(R){const U=new Ue,v=[],M=l,D=u,C=d;for(let N=0;N<R.indices.length/3;N++)R.getTriangleVertices(N,M,D,C),v.push(M.x,M.y,M.z),v.push(D.x,D.y,D.z),v.push(C.x,C.y,C.z);return U.setAttribute("position",new we(v,3)),U.computeBoundingSphere(),U.computeVertexNormals(),U}function x(R){const U=new Ue,v=R.elementSize||1,M=R.data.flatMap((C,N)=>C.flatMap((F,I)=>[N*v,I*v,F])),D=[];for(let C=0;C<R.data.length-1;C++)for(let N=0;N<R.data[C].length-1;N++){const F=R.data[C].length,I=C*F+N;D.push(I+1,I+F,I+F+1),D.push(I+F,I+1,I)}return U.setIndex(D),U.setAttribute("position",new we(M,3)),U.computeBoundingSphere(),U.computeVertexNormals(),U}function S(R){let U=new zt;const{SPHERE:v,BOX:M,PLANE:D,CYLINDER:C,CONVEXPOLYHEDRON:N,TRIMESH:F,HEIGHTFIELD:I}=ht.types;switch(R.type){case v:{U=new zt(p,c);break}case M:{U=new zt(g,c);break}case D:{U=new zt(_,c);break}case C:{const q=new ls(R.radiusTop,R.radiusBottom,R.height,R.numSegments);U=new zt(q,c),R.geometryId=q.id;break}case N:{const q=f(R);U=new zt(q,c),R.geometryId=q.id;break}case F:{const q=m(R);U=new zt(q,c),R.geometryId=q.id;break}case I:{const q=x(R);U=new zt(q,c),R.geometryId=q.id;break}}return s.add(U),U}function E(R,U){const{SPHERE:v,BOX:M,PLANE:D,CYLINDER:C,CONVEXPOLYHEDRON:N,TRIMESH:F,HEIGHTFIELD:I}=ht.types;switch(U.type){case v:{const{radius:q}=U;R.scale.set(q*i,q*i,q*i);break}case M:{R.scale.copy(U.halfExtents),R.scale.multiplyScalar(2*i);break}case D:break;case C:{R.scale.set(1*i,1*i,1*i);break}case N:{R.scale.set(1*i,1*i,1*i);break}case F:{R.scale.copy(U.scale).multiplyScalar(i);break}case I:{R.scale.set(1*i,1*i,1*i);break}}}function P(R,U){if(!R)return!1;const{geometry:v}=R;return v instanceof zn&&U.type===ht.types.SPHERE||v instanceof de&&U.type===ht.types.BOX||v instanceof li&&U.type===ht.types.PLANE||v.id===U.geometryId&&U.type===ht.types.CYLINDER||v.id===U.geometryId&&U.type===ht.types.CONVEXPOLYHEDRON||v.id===U.geometryId&&U.type===ht.types.TRIMESH||v.id===U.geometryId&&U.type===ht.types.HEIGHTFIELD}function T(R,U){let v=a[R],M=!1;return P(v,U)||(v&&s.remove(v),a[R]=v=S(U),M=!0),E(v,U),M}function b(){const R=a,U=l,v=h;let M=0;for(const D of t.bodies)for(let C=0;C!==D.shapes.length;C++){const N=D.shapes[C],F=T(M,N),I=R[M];I&&(D.quaternion.vmult(D.shapeOffsets[C],U),D.position.vadd(U,U),D.quaternion.mult(D.shapeOrientations[C],v),I.position.copy(U),I.quaternion.copy(v),F&&o instanceof Function&&o(D,I,N),!F&&r instanceof Function&&r(D,I,N)),M++}for(let D=M;D<R.length;D++){const C=R[D];C&&s.remove(C)}R.length=M}return{update:b}}const Wc={type:"change"},ua={type:"start"},eh={type:"end"},qs=new sa,Xc=new Un,wv=Math.cos(70*ru.DEG2RAD),me=new k,Ie=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ir=1e-6;class bv extends Cg{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new bn,this._lastTargetPosition=new k,this._quat=new bn().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mc,this._sphericalDelta=new Mc,this._scale=1,this._panOffset=new k,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new k,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Av.bind(this),this._onPointerDown=Tv.bind(this),this._onPointerUp=Rv.bind(this),this._onContextMenu=Uv.bind(this),this._onMouseWheel=Lv.bind(this),this._onKeyDown=Iv.bind(this),this._onTouchStart=Dv.bind(this),this._onTouchMove=Nv.bind(this),this._onMouseDown=Cv.bind(this),this._onMouseMove=Pv.bind(this),this._interceptControlDown=Fv.bind(this),this._interceptControlUp=Ov.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wc),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;me.copy(e).sub(this.target),me.applyQuaternion(this._quat),this._spherical.setFromVector3(me),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ie:n>Math.PI&&(n-=Ie),i<-Math.PI?i+=Ie:i>Math.PI&&(i-=Ie),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(me.setFromSpherical(this._spherical),me.applyQuaternion(this._quatInverse),e.copy(this.target).add(me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=me.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new k(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(qs.origin.copy(this.object.position),qs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qs.direction))<wv?this.object.lookAt(this.target):(Xc.setFromNormalAndCoplanarPoint(this.object.up,this.target),qs.intersectPlane(Xc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ir||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ir||this._lastTargetPosition.distanceToSquared(this.target)>ir?(this.dispatchEvent(Wc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ie/60*this.autoRotateSpeed*t:Ie/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){me.setFromMatrixColumn(e,0),me.multiplyScalar(-t),this._panOffset.add(me)}_panUp(t,e){this.screenSpacePanning===!0?me.setFromMatrixColumn(e,1):(me.setFromMatrixColumn(e,0),me.crossVectors(this.object.up,me)),me.multiplyScalar(t),this._panOffset.add(me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;me.copy(i).sub(this.target);let o=me.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ie*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ie*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ie*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ie*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Tv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Av(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Rv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eh),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Cv(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Qt.DOLLY;break;case Ii.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Qt.ROTATE}break;case Ii.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(ua)}function Pv(s){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Lv(s){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(s.preventDefault(),this.dispatchEvent(ua),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(eh))}function Iv(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Dv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Qt.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Qt.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(ua)}function Nv(s){switch(this._trackPointer(s),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Qt.NONE}}function Uv(s){this.enabled!==!1&&s.preventDefault()}function Fv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ov(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Nn={sky:8900331,fog:8900331,hemiSky:16774614,hemiGround:3824170,hemiI:.65,sun:16774608,sunI:1.2},Bv={sky:660520,fog:660520,hemiSky:2240608,hemiGround:659480,hemiI:.12,sun:12110079,sunI:.18},zv=new k(40,60,20).normalize(),Hv=240;function kv(s){const t=new Sg;t.background=new kt(Nn.sky),t.fog=new aa(Nn.sky,80,280);const e=new Xe(60,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(12,8,12),e.lookAt(0,0,0);const n=new Mg({canvas:s,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=hl;const i=new wg(Nn.hemiSky,Nn.hemiGround,Nn.hemiI);t.add(i);const o=new Ag(Nn.sun,Nn.sunI);o.position.set(40,60,20),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-80,o.shadow.camera.right=80,o.shadow.camera.top=80,o.shadow.camera.bottom=-80,o.shadow.camera.near=1,o.shadow.camera.far=200,t.add(o);const r=zv.clone().multiplyScalar(Hv),a=new zt(new zn(8,24,16),new Fi({color:16770976,fog:!1}));a.position.copy(r),t.add(a);const c=new zt(new zn(13,24,16),new Fi({color:16766346,transparent:!0,opacity:.25,blending:ar,depthWrite:!1,fog:!1}));c.position.copy(r),t.add(c);const l=new zt(new zn(5,24,16),new Fi({color:15001855,fog:!1}));l.position.copy(r),l.visible=!1,t.add(l);const u=800,d=250,h=new Float32Array(u*3),p=Math.PI*(1+Math.sqrt(5));for(let P=0;P<u;P++){const T=(P+.5)/u,b=Math.acos(1-2*T),R=P*p,U=d,v=Math.sin(b),M=U*v*Math.cos(R),D=Math.abs(U*Math.cos(b)),C=U*v*Math.sin(R);h[P*3+0]=M,h[P*3+1]=D,h[P*3+2]=C}const g=new Ue;g.setAttribute("position",new nn(h,3));const _=new Vl({color:16777215,size:1.2,sizeAttenuation:!0,fog:!1}),f=new Eg(g,_);f.visible=!1,t.add(f);const m=new zt(new li(220,220),new We({color:4881466}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,t.add(m);const x=new bv(e,n.domElement);x.enableDamping=!0,x.target.set(0,0,0);function S(P){const T=P==="night",b=T?Bv:Nn;t.background.setHex(b.sky),t.fog.color.setHex(b.fog),i.color.setHex(b.hemiSky),i.groundColor.setHex(b.hemiGround),i.intensity=b.hemiI,o.color.setHex(b.sun),o.intensity=b.sunI,a.visible=!T,c.visible=!T,l.visible=T,f.visible=T}function E(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",E),{scene:t,camera:e,renderer:n,controls:x,setTimeOfDay:S}}function Vv(){const s=new gv({gravity:new y(0,-9.82,0)});s.broadphase=new Xl,s.allowSleep=!0;const t=new ms("ground"),e=new ft({type:ft.STATIC,shape:new di(new y(250,.5,250)),material:t});e.position.set(0,-.5,0),s.addBody(e);function n(i){s.step(1/60,i,3)}return{world:s,step:n,groundMaterial:t}}{const s=new y,t=new y,e=new y,n=new le,i=new Gi;n.skipBackfaces=!0,n.checkCollisionResponse=!1,n.mode=le.CLOSEST,th.prototype.castRay=function(r){this.updateWheelTransformWorld(r);const a=this.chassisBody;let c=-1;const l=r.suspensionRestLength+r.maxSuspensionTravel+r.radius;r.directionWorld.scale(l,s);const u=r.chassisConnectionPointWorld;u.vadd(s,t);const d=r.raycastResult;d.reset();const h=a.collisionResponse;a.collisionResponse=!1,this.world.rayTest(u,t,d),a.collisionResponse=h;let p=d.body,g=0;if(!p){n.from.copy(u),n.to.copy(t),n.updateDirection();let _=1/0;const f=this.world.bodies;for(let m=0;m<f.length;m++){const x=f[m];x!==a&&(i.reset(),n.intersectBody(x,i),i.body&&i.distance<_&&(g++,_=i.distance,d.body=i.body,d.shape=i.shape,d.distance=i.distance,d.hitNormalWorld.copy(i.hitNormalWorld),d.hitPointWorld.copy(i.hitPointWorld),d.hasHit=!0))}p=d.body}if(r.__diag={srcY:u.y,tgtY:t.y,rawHit:!!p,rawDist:p?d.distance:-1,rawNormY:p?d.hitNormalWorld.y:0,rejected:!1,manualHits:g},p&&r.directionWorld.dot(d.hitNormalWorld)>0&&(d.reset(),p=null,r.__diag.rejected=!0),r.raycastResult.groundObject=0,p){c=d.distance,r.raycastResult.hitNormalWorld=d.hitNormalWorld,r.isInContact=!0;const _=d.distance;r.suspensionLength=_-r.radius;const f=r.suspensionRestLength-r.maxSuspensionTravel,m=r.suspensionRestLength+r.maxSuspensionTravel;r.suspensionLength<f&&(r.suspensionLength=f),r.suspensionLength>m&&(r.suspensionLength=m,r.raycastResult.reset());const x=r.raycastResult.hitNormalWorld.dot(r.directionWorld);a.getVelocityAtWorldPoint(r.raycastResult.hitPointWorld,e);const S=r.raycastResult.hitNormalWorld.dot(e);if(x>=-.1)r.suspensionRelativeVelocity=0,r.clippedInvContactDotSuspension=1/.1;else{const E=-1/x;r.suspensionRelativeVelocity=S*E,r.clippedInvContactDotSuspension=E}}else r.suspensionLength=r.suspensionRestLength,r.suspensionRelativeVelocity=0,r.directionWorld.scale(-1,r.raycastResult.hitNormalWorld),r.clippedInvContactDotSuspension=1;return c}}const qc=.5,Gv=13e3,Wv=-6e3,Xv=5e4,qv=20,Yv=220,Yc=.3,sr={x:1.9,y:.25,z:.95},Zn=.5,jc=.35,Kc=[new y(1.65,-.15,.95),new y(1.65,-.15,-.95),new y(-1.65,-.15,.95),new y(-1.65,-.15,-.95)];function jv(s,t,e=new y(0,4,0),n=12729122){const i=new di(new y(sr.x,sr.y,sr.z)),o=new ft({mass:1500});o.addShape(i),o.position.copy(e),o.angularVelocity.set(0,0,0),o.allowSleep=!1,o.angularFactor.set(0,1,0),o.angularDamping=.3,o.linearDamping=.1,s.addBody(o);const r=new th({chassisBody:o,indexRightAxis:2,indexForwardAxis:0,indexUpAxis:1}),a={radius:Zn,directionLocal:new y(0,-1,0),suspensionStiffness:40,suspensionRestLength:.3,frictionSlip:6,dampingRelaxation:9,dampingCompression:14,maxSuspensionForce:5e5,rollInfluence:.01,axleLocal:new y(0,0,1),chassisConnectionPointLocal:new y,maxSuspensionTravel:.3,customSlidingRotationalSpeed:-30,useCustomSlidingRotationalSpeed:!0};for(const Q of Kc)a.chassisConnectionPointLocal.copy(Q),r.addWheel(a);r.addToWorld(s);const c=new ri;t.add(c);const l=new We({color:n,metalness:.55,roughness:.35}),u=new We({color:1710621,metalness:.4,roughness:.6}),d=new We({color:2767445,metalness:.1,roughness:.15,transparent:!0,opacity:.7}),h=new zt(new de(1.4,.7,1.95),l);h.position.set(1.3,0,0),h.castShadow=!0,c.add(h);const p=new zt(new de(1,.65,1.95),l);p.position.set(-1.4,-.025,0),p.castShadow=!0,c.add(p);const g=new zt(new de(2.4,.6,1.95),l);g.position.set(0,.05,0),g.castShadow=!0,c.add(g);const _=new zt(new de(2,.75,1.78),l);_.position.set(.15,.7,0),_.castShadow=!0,c.add(_);const f=new zt(new de(1.85,.55,.02),d);f.position.set(.15,.7,.9),c.add(f);const m=f.clone();m.position.z=-.9,c.add(m);const x=new zt(new de(.02,.55,1.65),d);x.position.set(1.16,.7,0),c.add(x);const S=x.clone();S.position.x=-.86,c.add(S);const E=new zt(new de(1.8,.08,1.7),l);E.position.set(.15,1.1,0),E.castShadow=!0,c.add(E);const P=new zt(new de(.25,.4,1.95),u);P.position.set(2,-.15,0),P.castShadow=!0,c.add(P);const T=P.clone();T.position.x=-2,c.add(T);const b=new zn(.18,16,10),R=new We({color:16774594,emissive:16774594,emissiveIntensity:1.2});for(const Q of[-.7,.7]){const at=new zt(b,R);at.position.set(1.98,.05,Q),c.add(at)}const U=new We({color:16726586,emissive:16715792,emissiveIntensity:.8});for(const Q of[-.7,.7]){const at=new zt(new de(.05,.18,.45),U);at.position.set(-1.98,.1,Q),c.add(at)}const v=[],M=new ls(Zn,Zn,jc,28);M.rotateX(Math.PI/2);const D=new We({color:657930,roughness:.85}),C=new ls(Zn*.55,Zn*.55,jc+.02,12);C.rotateX(Math.PI/2);const N=new We({color:11579574,metalness:.85,roughness:.3}),F=new We({color:8026752,metalness:.7,roughness:.4});for(let Q=0;Q<4;Q++){const at=new ri,St=new zt(M,D);St.castShadow=!0,at.add(St);const Ut=new zt(C,N);at.add(Ut);for(let Ht=0;Ht<3;Ht++){const It=new zt(new de(Zn*.95,.04,.04),F);It.rotation.z=Ht*Math.PI/3,at.add(It)}t.add(at),v.push(at)}let I=!1;function q(Q){I=Q}function V(Q){if(I){for(let oe=0;oe<4;oe++)r.applyEngineForce(0,oe),r.setSteeringValue(0,oe),r.setBrake(0,oe);return}const at=Q.forward?Gv:Q.backward?Wv:0,St=pt(),Ut=Math.max(Yc,1-St/Yv*(1-Yc)),It=(Q.left?qc:Q.right?-qc:0)*Ut;r.applyEngineForce(at,2),r.applyEngineForce(at,3),r.setSteeringValue(It,0),r.setSteeringValue(It,1);const O=Q.brake?Xv:at===0?qv:0;for(let oe=0;oe<4;oe++)r.setBrake(O,oe)}const Z=new y,st=new y(1,0,0),rt=new y,ot=new k(0,0,1),Bt=new bn;function j(Q=null){if(c.position.copy(o.position),c.quaternion.copy(o.quaternion),Q&&Q.blendT>0){const at=Q.ramp;o.vectorToWorldFrame(st,rt);const St=at.axis==="x"?rt.x*at.axisSign:rt.z*at.axisSign,Ut=at.pitchAngle*Math.sign(St)*Q.blendT;Bt.setFromAxisAngle(ot,Ut),c.quaternion.multiply(Bt)}for(let at=0;at<r.wheelInfos.length;at++){r.updateWheelTransform(at);const St=r.wheelInfos[at].worldTransform;if(v[at].position.copy(St.position),v[at].quaternion.copy(St.quaternion),Q&&Q.blendT>0){o.pointToWorldFrame(Kc[at],Z);const Ht=Q.ramp.surfaceYAt(Z.x,Z.z)+Zn,It=Q.blendT;v[at].position.x=Z.x,v[at].position.y=St.position.y*(1-It)+Ht*It,v[at].position.z=Z.z}}}function et(Q){l.color.set(Q)}function pt(){const Q=o.velocity;return Math.sqrt(Q.x*Q.x+Q.y*Q.y+Q.z*Q.z)*3.6}return{chassisBody:o,vehicle:r,chassisGroup:c,wheelMeshes:v,applyInput:V,syncMeshes:j,setColor:et,getSpeedKmh:pt,setSuspendVehicleControl:q}}const or=2763310,Kv=3816e3,$v=9071162,Zv=6969930,Ys=5591642,Jv=16731450,is=200;function be(s,t,e,n,i=null,o=null,r=!0){let a=null;if(r){const l=new y(n.x/2,n.y/2,n.z/2);a=new ft({mass:0,shape:new di(l)}),a.position.set(e.x,e.y,e.z),i&&a.quaternion.setFromEuler(i.x||0,i.y||0,i.z||0,"XYZ"),s.addBody(a)}let c=null;if(o!==null){const l=new de(n.x,n.y,n.z),u=new We({color:o,roughness:.9,metalness:.05});if(c=new zt(l,u),c.position.set(e.x,e.y,e.z),i){const d=new sn(i.x||0,i.y||0,i.z||0,"XYZ");c.quaternion.setFromEuler(d)}c.castShadow=r,c.receiveShadow=!0,t.add(c)}return{body:a,mesh:c}}function Jn(s,t,e){const{axis:n,low:i,high:o,width:r=10,thickness:a=.4,color:c=$v,extendHigh:l=0}=e,u=o.y-i.y,d=n==="x"?o.x-i.x:o.z-i.z,h=Math.sqrt(u*u+d*d),p=new zt(n==="x"?new de(h,a,r):new de(r,a,h),new We({color:c,roughness:.9,metalness:.05})),g=(i.x+o.x)/2,_=(i.y+o.y)/2,f=(i.z+o.z)/2;if(n==="x"){const M=g-a/2*(u/h)*Math.sign(d),D=_-a/2*Math.abs(d)/h;p.position.set(M,D,f),p.rotation.z=Math.asin(u/h)*Math.sign(d)}else{const M=_-a/2*Math.abs(d)/h,D=f+a/2*(u/h)*Math.sign(d);p.position.set(g,M,D),p.rotation.x=-Math.asin(u/h)*Math.sign(d)}p.castShadow=!0,p.receiveShadow=!0,s.add(p);const m=n==="x"?i.x:i.z,x=n==="x"?o.x:o.z;let S=Math.min(m,x),E=Math.max(m,x);l&&(x>m?E+=l:S-=l);const P=n==="x"?i.z:i.x,T=P-r/2,b=P+r/2,R=x-m,U=Math.atan2(u,Math.abs(R)),v={axis:n,low:{x:i.x,y:i.y,z:i.z},high:{x:o.x,y:o.y,z:o.z},width:r,axisMin:S,axisMax:E,perpMin:T,perpMax:b,pitchAngle:U,axisSign:Math.sign(R),extendHigh:l,contains(M,D){return n==="x"?M>=S&&M<=E&&D>=T&&D<=b:D>=S&&D<=E&&M>=T&&M<=b},surfaceYAt(M,D){let N=((n==="x"?M:D)-m)/R;return N<0?N=0:N>1&&(N=1),i.y+N*u},mesh:p};return t.push(v),v}function js(s,t,e){const n=new de(5,.15,5),i=new We({color:Jv,emissive:16722432,emissiveIntensity:.65,roughness:.4,metalness:.1}),o=new zt(n,i);o.position.set(e.x,.08,e.z),o.receiveShadow=!0,t.add(o);const r=new di(new y(2.5,1.5,2.5)),a=new ft({mass:0,shape:r,collisionResponse:!1});a.position.set(e.x,1.5,e.z),s.addBody(a);const c=new y(0,3500,0);let l=!0;a.addEventListener("collide",u=>{if(!l)return;const d=u.body;!d||d.mass===0||(l=!1,setTimeout(()=>{l=!0},700),d.applyImpulse(c))})}function Qv(s,t){const e=[];be(t,s,{x:0,y:.05,z:0},{x:8,y:.1,z:180},null,or,!1),be(t,s,{x:0,y:.06,z:0},{x:180,y:.1,z:8},null,Kv,!1),be(t,s,{x:40,y:.05,z:-30},{x:80,y:.1,z:6},null,or,!1),be(t,s,{x:-40,y:.05,z:40},{x:60,y:.1,z:6},null,or,!1),Jn(s,e,{axis:"x",low:{x:14,y:.05,z:0},high:{x:30,y:4,z:0},width:14,color:14233134}),Jn(s,e,{axis:"z",low:{x:30,y:.05,z:14},high:{x:30,y:3,z:32},width:10}),Jn(s,e,{axis:"z",low:{x:-32,y:.05,z:-14},high:{x:-32,y:3,z:-32},width:10}),Jn(s,e,{axis:"x",low:{x:48,y:.05,z:-55},high:{x:70,y:3.5,z:-55},width:10}),Jn(s,e,{axis:"x",low:{x:-48,y:.05,z:55},high:{x:-70,y:3.5,z:55},width:10}),be(t,s,{x:0,y:3,z:-70},{x:10,y:.5,z:30},null,Zv),be(t,s,{x:0,y:3,z:-54},{x:12,y:.5,z:2}),be(t,s,{x:0,y:3,z:-86},{x:12,y:.5,z:2}),Jn(s,e,{axis:"z",low:{x:0,y:.05,z:-33},high:{x:0,y:3.25,z:-55},width:10,extendHigh:2.5}),Jn(s,e,{axis:"z",low:{x:0,y:.05,z:-107},high:{x:0,y:3.25,z:-85},width:10,extendHigh:2.5}),be(t,s,{x:-4,y:1.5,z:-60},{x:1,y:3,z:1},null,Ys),be(t,s,{x:4,y:1.5,z:-60},{x:1,y:3,z:1},null,Ys),be(t,s,{x:-4,y:1.5,z:-80},{x:1,y:3,z:1},null,Ys),be(t,s,{x:4,y:1.5,z:-80},{x:1,y:3,z:1},null,Ys),js(t,s,{x:18,z:18}),js(t,s,{x:-22,z:-18}),js(t,s,{x:55,z:0}),js(t,s,{x:0,z:55});const n=is/2,i=16,o=i/2,r=7036500;return be(t,s,{x:n,y:o,z:0},{x:2,y:i,z:is},null,r),be(t,s,{x:-n,y:o,z:0},{x:2,y:i,z:is},null,r),be(t,s,{x:0,y:o,z:n},{x:is,y:i,z:2},null,r),be(t,s,{x:0,y:o,z:-n},{x:is,y:i,z:2},null,r),{spawnPos:new y(0,.9,0),ramps:e}}const $c=0,tx=1,ex=2,Zc=3,nx=4,Jc=["follow","first-person","top-down","free"];class ix{constructor(t,e){this.camera=t,this.controls=e,this.target=null,this.mode=$c,this.posLerp=.1,this.lookLerp=.15,this.followOffset=new k(-8,4,0),this.hoodOffset=new k(1.5,1.2,0),this.topdownHeight=50,this._targetPos=new k,this._targetQuat=new bn,this._desiredPos=new k,this._forward=new k,this._lookAt=new k,this._currentLookAt=new k,this._offset=new k,this.controls&&(this.controls.enabled=!1),this._onKey=n=>{(n.code==="KeyC"||n.key==="c"||n.key==="C")&&this.cycle()},window.addEventListener("keydown",this._onKey)}getModeName(){return Jc[this.mode]}setTarget(t){this.target=t,t&&this._currentLookAt.set(t.position.x,t.position.y,t.position.z)}cycle(){this.mode=(this.mode+1)%nx,this.controls&&(this.controls.enabled=this.mode===Zc),this.camera.up.set(0,1,0),console.log(`[camera] mode: ${Jc[this.mode]}`)}update(t){if(!this.target)return;const e=this.target.position,n=this.target.quaternion;switch(this._targetPos.set(e.x,e.y,e.z),this._targetQuat.set(n.x,n.y,n.z,n.w),this.mode){case $c:{this._offset.copy(this.followOffset).applyQuaternion(this._targetQuat),this._desiredPos.copy(this._targetPos).add(this._offset),this.camera.position.lerp(this._desiredPos,this.posLerp),this._currentLookAt.lerp(this._targetPos,this.lookLerp),this.camera.lookAt(this._currentLookAt);break}case tx:{this._offset.copy(this.hoodOffset).applyQuaternion(this._targetQuat),this._desiredPos.copy(this._targetPos).add(this._offset),this.camera.position.copy(this._desiredPos),this._forward.set(1,0,0).applyQuaternion(this._targetQuat),this._lookAt.copy(this._desiredPos).add(this._forward),this.camera.lookAt(this._lookAt);break}case ex:{this._desiredPos.set(this._targetPos.x,this._targetPos.y+this.topdownHeight,this._targetPos.z),this.camera.position.copy(this._desiredPos),this.camera.up.set(0,0,-1),this.camera.lookAt(this._targetPos);break}case Zc:{this.controls&&this.controls.update();break}}}dispose(){window.removeEventListener("keydown",this._onKey)}}const sx=.2,ox=1.5,rx=.889,ax=13e3,cx=-6e3,lx=80,Qc=.9,hx=20,ux=.08;function tl(s,t){let e,n;return s.axis==="x"?(e=s.axisSign>0?0:Math.PI,n=s.axisSign>0?Math.PI:0):(e=s.axisSign>0?-Math.PI/2:Math.PI/2,n=s.axisSign>0?Math.PI/2:-Math.PI/2),el(e,t)<=el(n,t)?e:n}function el(s,t){let e=s-t;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return Math.abs(e)}function nl(s,t,e){return s.chassisBody.vectorToWorldFrame(t,e),Math.atan2(-e.z,e.x)}function dx(s,t,e){let n=null,i=0,o=!1,r=0;const a=new y(1,0,0),c=new y;new y;const l=new y(0,1,0);function u(p){const g=s.chassisBody.position.x,_=s.chassisBody.position.y,f=s.chassisBody.position.z;let m=null,x=-1/0;for(const T of t){if(!T.contains(g,f))continue;const b=T.surfaceYAt(g,f);Math.abs(_-b)>ox&&n!==T||b>x&&(x=b,m=T)}if(m&&!n){n=m,o=!1,s.chassisBody.type=ft.KINEMATIC;const T=nl(s,a,c);r=tl(n,T),s.chassisBody.quaternion.setFromAxisAngle(l,r),s.chassisBody.angularVelocity.set(0,0,0),s.chassisBody.vectorToWorldFrame(a,c),c.y=0;const b=Math.sqrt(c.x*c.x+c.z*c.z);if(b>1e-4){c.x/=b,c.z/=b;const R=s.chassisBody.velocity,U=R.x*c.x+R.z*c.z;R.x=c.x*U,R.z=c.z*U}}else if(m&&n&&m!==n){n=m,o=!1;const T=nl(s,a,c);r=tl(n,T),s.chassisBody.quaternion.setFromAxisAngle(l,r),s.chassisBody.angularVelocity.set(0,0,0)}else if(!m&&n){n.extendHigh&&(s.chassisBody.velocity.y=0);const T=9.82;for(const b of s.vehicle.wheelInfos){const R=T/(4*b.suspensionStiffness);b.suspensionLength=b.suspensionRestLength-R,b.suspensionRelativeVelocity=0,b.clippedInvContactDotSuspension=1,b.isInContact=!0}s.chassisBody.type=ft.DYNAMIC,s.chassisBody.wakeUp(),n=null,o=!1,i=0,s.setSuspendVehicleControl(!1);return}if(n&&!o&&(i=Math.min(1,i+p/sx)),!n||i<=0)return;const E=n.surfaceYAt(g,f)+rx,P=_*(1-i)+E*i;if(s.chassisBody.position.y=P,s.chassisBody.previousPosition.y=P,i>.4){const T=n,b=T.axis==="x"?T.high.x:T.high.z,R=T.axis==="x"?T.low.x:T.low.z,U=(T.high.y-T.low.y)/(b-R),v=s.chassisBody.velocity,M=T.axis==="x"?v.x:v.z,D=T.axis==="x"?g:f,C=b-R,N=C!==0?(D-R)/C:0,F=T.extendHigh>0&&N>=1;s.chassisBody.velocity.y=F?0:M*U}if(i>.3){s.setSuspendVehicleControl(!0),s.chassisBody.vectorToWorldFrame(a,c),c.y=0;const T=Math.sqrt(c.x*c.x+c.z*c.z);T>1e-4&&(c.x/=T,c.z/=T);let b=0;e.forward?b=ax:e.backward&&(b=cx);{const C=s.chassisBody.velocity;let N=C.x*c.x+C.z*c.z;if(b!==0){const F=b/s.chassisBody.mass;N+=F*p,N=Math.max(-25,Math.min(lx,N))}else N*=.97;C.x=c.x*N,C.z=c.z*N}const R=s.chassisBody.velocity,U=Math.sqrt(R.x*R.x+R.z*R.z),v=Math.max(ux,Math.min(1,U/hx));let M=0;e.left?M=Qc*v:e.right&&(M=-Qc*v),r+=M*p,s.chassisBody.quaternion.setFromAxisAngle(l,r),s.chassisBody.angularVelocity.set(0,0,0);const D=R.x*c.x+R.z*c.z;R.x=c.x*D,R.z=c.z*D}else s.setSuspendVehicleControl(!1)}function d(){return!n||i<=0?null:{ramp:n,blendT:i}}function h(){return{activeRamp:n?`${n.axis} ${n.axisMin.toFixed(0)}-${n.axisMax.toFixed(0)}`:"none",blendT:i.toFixed(2)}}return{update:u,getOverride:d,getDebugInfo:h}}const po={forward:!1,backward:!1,left:!1,right:!1,brake:!1},nh=new Set;function fx(s,t){nh.add({code:s,fn:t})}const ih={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"brake"};window.addEventListener("keydown",s=>{const t=ih[s.code];t&&(po[t]=!0,s.code,s.preventDefault());for(const{code:e,fn:n}of nh)s.code===e&&!s.repeat&&n()});window.addEventListener("keyup",s=>{const t=ih[s.code];t&&(po[t]=!1,s.preventDefault())});const sh="drive-sim-settings-v1",px=[{id:"day",label:"☀ Day"},{id:"night",label:"☾ Night"}],os={color:"#c23b22",time:"day"},mx=new Set(px.map(s=>s.id));function oh(s){const t={color:os.color,time:os.time,...s};return(typeof t.color!="string"||!/^#[0-9a-fA-F]{6}$/.test(t.color))&&(t.color=os.color),mx.has(t.time)||(t.time=os.time),{color:t.color,time:t.time}}function da(){try{const s=localStorage.getItem(sh);return oh(s?JSON.parse(s):{})}catch{return{...os}}}function il(s){const t=oh({...da(),...s});try{localStorage.setItem(sh,JSON.stringify(t))}catch{}return window.dispatchEvent(new CustomEvent("settings-change",{detail:t})),t}function gx(s){window.addEventListener("settings-change",t=>s(t.detail))}const rh=document.getElementById("landing"),sl=document.getElementById("start-btn");function _x(){const s=da(),t=document.getElementById("setting-color");t&&(t.value=s.color,t.addEventListener("input",n=>il({color:n.target.value})));const e=document.querySelectorAll("#setting-time button");for(const n of e)n.dataset.time===s.time&&n.classList.add("active"),n.addEventListener("click",()=>{for(const i of e)i.classList.remove("active");n.classList.add("active"),il({time:n.dataset.time})})}_x();let hi=!1;const ah=new Set,ch=new Set;function vx(s){ah.add(s)}function xx(s){ch.add(s)}function lh(){if(!hi){hi=!0,rh.classList.add("hidden");for(const s of ah)s()}}function yx(){if(hi){hi=!1,rh.classList.remove("hidden");for(const s of ch)s()}}sl&&sl.addEventListener("click",lh);window.addEventListener("keydown",s=>{!hi&&(s.code==="Enter"||s.code==="Space")&&lh(),hi&&s.code==="Escape"&&yx()});const qi=document.createElement("div");qi.id="hud";qi.style.cssText=`
  position: fixed; bottom: 14px; right: 14px; z-index: 5;
  background: rgba(20,24,40,0.65); color: white;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 12px; padding: 8px 12px; border-radius: 8px;
  pointer-events: none; user-select: none;
  min-width: 130px; text-align: right;
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
`;qi.innerHTML='<div id="hud-camera">camera: follow</div><div id="hud-speed">0 km/h</div><div style="margin-top:4px;opacity:0.6;font-size:10px;">ESC: menu · C: camera</div><div style="margin-top:2px;opacity:0.35;font-size:9px;">build 2026-05-12 13:51</div>';document.body.appendChild(qi);const Mx=qi.querySelector("#hud-camera"),Sx=qi.querySelector("#hud-speed"),rr={isStarted:()=>hi,setCameraMode:s=>{Mx.textContent=`camera: ${s}`},setSpeed:s=>{Sx.textContent=`${Math.round(s)} km/h`}},Ex="2026-05-12-ramp-velocity-and-pitch-v15";let ii=null,ol=0;function wx(s=!1){return s||new URLSearchParams(location.search).has("debug")?(ii=document.createElement("div"),ii.id="debug-panel",ii.style.cssText=`
    position: fixed; bottom: 14px; left: 14px; z-index: 5;
    background: rgba(20,24,40,0.78); color: #b9ffb9;
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 11px; padding: 8px 10px; border-radius: 6px;
    pointer-events: none; user-select: none;
    min-width: 220px; white-space: pre;
    backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
  `,document.body.appendChild(ii),ii):null}function bx(s){if(!ii)return;const t=performance.now();if(t-ol<100)return;ol=t;const e=s.chassisBody,n=s.vehicle,i=n.wheelInfos.map(h=>h.raycastResult.body?1:0),o=i.reduce((h,p)=>h+p,0),r=n.wheelInfos.map(h=>h.engineForce|0),a=n.wheelInfos.map(h=>h.suspensionForce|0),c=n.wheelInfos.map(h=>h.suspensionLength.toFixed(2)),l=n.wheelInfos.map(h=>{const p=h.__diag;if(!p)return"?";const g=p.rejected?"X":p.rawHit?"H":"-";return g==="-"?g:`${g}d${p.rawDist.toFixed(2)}n${p.rawNormY>=0?"+":""}${p.rawNormY.toFixed(1)}`}),u=n.wheelInfos[0].__diag?n.wheelInfos[0].__diag.srcY.toFixed(2):"?",d=n.wheelInfos[0].__diag?n.wheelInfos[0].__diag.tgtY.toFixed(2):"?";ii.textContent=`build ${Ex}
chassis pos  ${e.position.x.toFixed(2)} ${e.position.y.toFixed(2)} ${e.position.z.toFixed(2)}
chassis vel  ${e.velocity.x.toFixed(2)} ${e.velocity.y.toFixed(2)} ${e.velocity.z.toFixed(2)}
wheels in contact ${o}/4   [${i.join(" ")}]
engine force [${r.join(" ")}]
suspensionForce [${a.join(" ")}]
suspensionLength [${c.join(" ")}]
ray src.y=${u} → tgt.y=${d} (wheel 0)
ray hits: ${l.join("  ")}
manualHits: [${n.wheelInfos.map(h=>h.__diag?h.__diag.manualHits:"?").join(" ")}]
mass ${e.mass}  sleeping ${e.sleepState}
P=physics wireframe  ?spawn=deck`}const Tx=document.getElementById("game"),{scene:mo,camera:hh,renderer:Ax,controls:Rx,setTimeOfDay:uh}=kv(Tx),{world:fa,step:Cx}=Vv(),dh=da();uh(dh.time);const hs=new ri;mo.add(hs);const rl=new Ev(hs,fa,{color:16711935});hs.visible=!1;fx("KeyP",()=>{hs.visible=!hs.visible});const{spawnPos:Px,ramps:Lx}=Qv(mo,fa),Ix=new URLSearchParams(location.search).get("spawn"),fh=Ix==="deck"?new y(0,5,-70):Px,He=jv(fa,mo,fh,dh.color),al=dx(He,Lx,po);gx(s=>{He.setColor(s.color),uh(s.time)});const rs=new ix(hh,Rx);rs.setTarget(He.chassisBody);wx(!0);const Dx=Math.PI/2,Nx=new y(0,1,0);function pa(){He.chassisBody.position.copy(fh),He.chassisBody.velocity.setZero(),He.chassisBody.angularVelocity.setZero(),He.chassisBody.quaternion.setFromAxisAngle(Nx,Dx);for(const s of He.vehicle.wheelInfos)s.steering=0,s.rotation=0,s.brake=0,s.engineForce=0;He.setSuspendVehicleControl(!1)}pa();xx(pa);vx(pa);let cl=-1;const Ux=new Rg;function ph(){const s=Math.min(Ux.getDelta(),.1);rr.isStarted()&&(al.update(s),He.applyInput(po)),Cx(s),He.syncMeshes(al.getOverride()),rs.update(s),rs.mode!==cl&&(cl=rs.mode,rr.setCameraMode(rs.getModeName())),rr.setSpeed(He.getSpeedKmh()),bx(He),rl&&rl.update(),Ax.render(mo,hh),requestAnimationFrame(ph)}ph();
