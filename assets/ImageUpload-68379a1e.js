import{q as Le,C as Be,t as ae,v as j,w as Fe,x as Me,z as qe,S as He,A as je,F as ze,B as $e,r as le,Q as $,j as y}from"./index-73878708.js";import{G as Ge,d as Xe}from"./index.esm-5b8dc22c.js";import{P as L}from"./Button-e76cae7b.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="firebasestorage.googleapis.com",be="storageBucket",Ve=2*60*1e3,We=10*60*1e3,Ke=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends ze{constructor(e,n,s=0){super(Y(e),`Firebase Storage: ${n} (${Y(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,p.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Y(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var f;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(f||(f={}));function Y(t){return"storage/"+t}function te(){const t="An unknown error occurred, please check the error payload for server response.";return new p(f.UNKNOWN,t)}function Ze(t){return new p(f.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ye(t){return new p(f.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Je(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new p(f.UNAUTHENTICATED,t)}function Qe(){return new p(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function et(t){return new p(f.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Re(){return new p(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Te(){return new p(f.CANCELED,"User canceled the upload/download.")}function tt(t){return new p(f.INVALID_URL,"Invalid URL '"+t+"'.")}function nt(t){return new p(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function st(){return new p(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+be+"' property when initializing the app?")}function we(){return new p(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rt(){return new p(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function it(){return new p(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ot(t){return new p(f.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ee(t){return new p(f.INVALID_ARGUMENT,t)}function ke(){return new p(f.APP_DELETED,"The Firebase app was deleted.")}function at(t){return new p(f.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function H(t,e){return new p(f.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function q(t){throw new p(f.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=E.makeFromUrl(e,n)}catch{return new E(e,"")}if(s.path==="")return s;throw nt(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(b){b.path_=decodeURIComponent(b.path)}const _="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${m}/${_}/b/${r}/o${h}`,"i"),g={bucket:1,path:3},T=n===ge?"(?:storage.googleapis.com|storage.cloud.google.com)":n,c="([^?#]*)",U=new RegExp(`^https?://${T}/${r}/${c}`,"i"),R=[{regex:a,indices:l,postModify:i},{regex:d,indices:g,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let b=0;b<R.length;b++){const v=R[b],D=v.regex.exec(e);if(D){const K=D[v.indices.bucket];let M=D[v.indices.path];M||(M=""),s=new E(K,M),v.postModify(s);break}}if(s==null)throw tt(e);return s}}class lt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function _(...c){u||(u=!0,e.apply(null,c))}function m(c){r=setTimeout(()=>{r=null,t(d,l())},c)}function h(){i&&clearTimeout(i)}function d(c,...U){if(u){h();return}if(c){h(),_.call(null,c,...U);return}if(l()||o){h(),_.call(null,c,...U);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,m(R)}let g=!1;function T(c){g||(g=!0,h(),!u&&(r!==null?(c||(a=2),clearTimeout(r),m(0)):c||(a=1)))}return m(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function ct(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t!==void 0}function dt(t){return typeof t=="function"}function ft(t){return typeof t=="object"&&!Array.isArray(t)}function W(t){return typeof t=="string"||t instanceof String}function ue(t){return ne()&&t instanceof Blob}function ne(){return typeof Blob<"u"&&!$e()}function ce(t,e,n,s){if(s<e)throw ee(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ee(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ye(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(S||(S={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,s,r,i,o,a,l,u,_,m,h=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=_,this.connectionFactory_=m,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new G(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===S.NO_ERROR,l=i.getStatus();if(!a||Ee(l,this.additionalRetryCodes_)&&this.retry){const _=i.getErrorCode()===S.ABORT;s(!1,new G(!1,null,_));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new G(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ht(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=te();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?ke():Te();o(l)}else{const l=Re();o(l)}};this.canceled_?n(!1,new G(!1,null,!0)):this.backoffId_=ut(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ct(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class G{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function pt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Rt(t,e,n,s,r,i,o=!0){const a=ye(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return gt(u,e),pt(u,n),mt(u,i),bt(u,s),new _t(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wt(...t){const e=Tt();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(ne())return new Blob(t);throw new p(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function kt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){if(typeof atob>"u")throw ot("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class J{constructor(e,n){this.data=e,this.contentType=n||null}}function Et(t,e){switch(t){case O.RAW:return new J(Ue(e));case O.BASE64:case O.BASE64URL:return new J(Oe(t,e));case O.DATA_URL:return new J(Ot(e),xt(e))}throw te()}function Ue(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Ut(t){let e;try{e=decodeURIComponent(t)}catch{throw H(O.DATA_URL,"Malformed data URL.")}return Ue(e)}function Oe(t,e){switch(t){case O.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw H(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case O.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw H(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=yt(e)}catch(r){throw r.message.includes("polyfill")?r:H(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class xe{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw H(O.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=At(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Ot(t){const e=new xe(t);return e.base64?Oe(O.BASE64,e.rest):Ut(e.rest)}function xt(t){return new xe(t).contentType}function At(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,n){let s=0,r="";ue(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(ue(this.data_)){const s=this.data_,r=kt(s,e,n);return r===null?null:new I(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new I(s,!0)}}static getBlob(...e){if(ne()){const n=e.map(s=>s instanceof I?s.data_:s);return new I(wt.apply(null,n))}else{const n=e.map(o=>W(o)?Et(O.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new I(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){let e;try{e=JSON.parse(t)}catch{return null}return ft(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Nt(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Ie(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){return e}class w{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||St}}let X=null;function Ct(t){return!W(t)||t.length<2?t:Ie(t)}function Ne(){if(X)return X;const t=[];t.push(new w("bucket")),t.push(new w("generation")),t.push(new w("metageneration")),t.push(new w("name","fullPath",!0));function e(i,o){return Ct(o)}const n=new w("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new w("size");return r.xform=s,t.push(r),t.push(new w("timeCreated")),t.push(new w("updated")),t.push(new w("md5Hash",null,!0)),t.push(new w("cacheControl",null,!0)),t.push(new w("contentDisposition",null,!0)),t.push(new w("contentEncoding",null,!0)),t.push(new w("contentLanguage",null,!0)),t.push(new w("contentType",null,!0)),t.push(new w("metadata","customMetadata",!0)),X=t,X}function Pt(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new E(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function vt(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Pt(s,t),s}function Se(t,e,n){const s=Ae(e);return s===null?null:vt(t,s,n)}function Dt(t,e,n,s){const r=Ae(e);if(r===null||!W(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const _=t.bucket,m=t.fullPath,h="/b/"+o(_)+"/o/"+o(m),d=F(h,n,s),g=ye({alt:"media",token:u});return d+g})[0]}function Ce(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class P{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){if(!t)throw te()}function se(t,e){function n(s,r){const i=Se(t,r,e);return A(i!==null),i}return n}function Lt(t,e){function n(s,r){const i=Se(t,r,e);return A(i!==null),Dt(i,r,t.host,t._protocol)}return n}function z(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Qe():r=Je():n.getStatus()===402?r=Ye(t.bucket):n.getStatus()===403?r=et(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function re(t){const e=z(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Ze(t.path)),i.serverResponse=r.serverResponse,i}return n}function Bt(t,e,n){const s=e.fullServerUrl(),r=F(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new P(r,i,se(t,n),o);return a.errorHandler=re(e),a}function Ft(t,e,n){const s=e.fullServerUrl(),r=F(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new P(r,i,Lt(t,n),o);return a.errorHandler=re(e),a}function Mt(t,e){const n=e.fullServerUrl(),s=F(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(l,u){}const a=new P(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=re(e),a}function qt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Pe(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=qt(null,e)),s}function Ht(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let b=0;b<2;b++)R=R+Math.random().toString().slice(2);return R}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Pe(e,s,r),_=Ce(u,n),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",d=I.getBlob(m,s,h);if(d===null)throw we();const g={name:u.fullPath},T=F(i,t.host,t._protocol),c="POST",U=t.maxUploadRetryTime,x=new P(T,c,se(t,n),U);return x.urlParams=g,x.headers=o,x.body=d.uploadData(),x.errorHandler=z(e),x}class V{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function ie(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{A(!1)}return A(!!n&&(e||["active"]).indexOf(n)!==-1),n}function jt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Pe(e,s,r),a={name:o.fullPath},l=F(i,t.host,t._protocol),u="POST",_={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=Ce(o,n),h=t.maxUploadRetryTime;function d(T){ie(T);let c;try{c=T.getResponseHeader("X-Goog-Upload-URL")}catch{A(!1)}return A(W(c)),c}const g=new P(l,u,d,h);return g.urlParams=a,g.headers=_,g.body=m,g.errorHandler=z(e),g}function zt(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(u){const _=ie(u,["active","final"]);let m=null;try{m=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{A(!1)}m||A(!1);const h=Number(m);return A(!isNaN(h)),new V(h,s.size(),_==="final")}const o="POST",a=t.maxUploadRetryTime,l=new P(n,o,i,a);return l.headers=r,l.errorHandler=z(e),l}const he=256*1024;function $t(t,e,n,s,r,i,o,a){const l=new V(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw rt();const u=l.total-l.current;let _=u;r>0&&(_=Math.min(_,r));const m=l.current,h=m+_;let d="";_===0?d="finalize":u===_?d="upload, finalize":d="upload";const g={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${l.current}`},T=s.slice(m,h);if(T===null)throw we();function c(b,v){const D=ie(b,["active","final"]),K=l.current+_,M=s.size();let Z;return D==="final"?Z=se(e,i)(b,v):Z=null,new V(K,M,D==="final",Z)}const U="POST",x=e.maxUploadRetryTime,R=new P(n,U,c,x);return R.headers=g,R.body=T.uploadData(),R.progressCallback=a||null,R.errorHandler=z(t),R}const k={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Q(t){switch(t){case"running":case"pausing":case"canceling":return k.RUNNING;case"paused":return k.PAUSED;case"success":return k.SUCCESS;case"canceled":return k.CANCELED;case"error":return k.ERROR;default:return k.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,s){if(dt(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Xt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=S.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=S.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=S.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw q("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw q("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw q("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw q("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw q("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Vt extends Xt{initXhr(){this.xhr_.responseType="text"}}function N(){return new Vt}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Ne(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(f.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Ee(r.status,[]))if(i)r=Re();else{this.sleepTime=Math.max(this.sleepTime*2,Ke),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(f.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=jt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,N,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=zt(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,N,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=he*this._chunkMultiplier,n=new V(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=$t(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,N,r,i,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){he*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=Bt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,N,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Ht(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,N,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Te(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Q(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new Gt(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Q(this._state)){case k.SUCCESS:B(this._resolve.bind(null,this.snapshot))();break;case k.CANCELED:case k.ERROR:const n=this._reject;B(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Q(this._state)){case k.RUNNING:case k.PAUSED:e.next&&B(e.next.bind(e,this.snapshot))();break;case k.SUCCESS:e.complete&&B(e.complete.bind(e))();break;case k.CANCELED:case k.ERROR:e.error&&B(e.error.bind(e,this._error))();break;default:e.error&&B(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,n){this._service=e,n instanceof E?this._location=n:this._location=E.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new C(e,n)}get root(){const e=new E(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ie(this._location.path)}get storage(){return this._service}get parent(){const e=It(this._location.path);if(e===null)return null;const n=new E(this._location.bucket,e);return new C(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw at(e)}}function Kt(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Wt(t,new I(e),n)}function Zt(t){t._throwIfRoot("getDownloadURL");const e=Ft(t.storage,t._location,Ne());return t.storage.makeRequestWithTokens(e,N).then(n=>{if(n===null)throw it();return n})}function Yt(t){t._throwIfRoot("deleteObject");const e=Mt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,N)}function Jt(t,e){const n=Nt(t._location.path,e),s=new E(t._location.bucket,n);return new C(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){return/^[A-Za-z]+:\/\//.test(t)}function en(t,e){return new C(t,e)}function ve(t,e){if(t instanceof oe){const n=t;if(n._bucket==null)throw st();const s=new C(n,n._bucket);return e!=null?ve(s,e):s}else return e!==void 0?Jt(t,e):t}function tn(t,e){if(e&&Qt(e)){if(t instanceof oe)return en(t,e);throw ee("To use ref(service, url), the first argument must be a Storage instance.")}else return ve(t,e)}function de(t,e){const n=e==null?void 0:e[be];return n==null?null:E.makeFromBucketSpec(n,t)}function nn(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:je(r,t.app.options.projectId))}class oe{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ge,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ve,this._maxUploadRetryTime=We,this._requests=new Set,r!=null?this._bucket=E.makeFromBucketSpec(r,this._host):this._bucket=de(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=E.makeFromBucketSpec(this._url,e):this._bucket=de(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ce("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ce("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new C(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new lt(ke());{const o=Rt(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const fe="@firebase/storage",_e="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="storage";function sn(t,e,n){return t=j(t),Kt(t,e,n)}function rn(t){return t=j(t),Zt(t)}function on(t){return t=j(t),Yt(t)}function pe(t,e){return t=j(t),tn(t,e)}function me(t=qe(),e){t=j(t);const s=Fe(t,De).getImmediate({identifier:e}),r=Me("storage");return r&&an(s,...r),s}function an(t,e,n,s={}){nn(t,e,n,s)}function ln(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new oe(n,s,r,e,He)}function un(){Le(new Be(De,ln,"PUBLIC").setMultipleInstances(!0)),ae(fe,_e,""),ae(fe,_e,"esm2017")}un();function pn(t,e,n=null,s=null){const[r,i]=le.useState(0),[o,a]=le.useState("");if(!t||!e)return;const l=h=>{const d=me(),g=pe(d,"pictures/"+h.name),T=sn(g,h);T.on("state_changed",c=>{const U=c.bytesTransferred/c.totalBytes*100;switch(i(U),c.state){case"paused":$.warning("Upload is paused",{theme:"colored",autoClose:2e3,pauseOnHover:!1});break;case"running":break;default:$.info("How did you get here?!",{theme:"colored",autoClose:2e3,pauseOnHover:!1})}},c=>{a(""),console.log(c)},()=>{rn(T.snapshot.ref).then(c=>{a(c),$.success("Upload iamge successfully !",{theme:"colored",autoClose:2e3,pauseOnHover:!1})})})};return{image:o,setImage:a,progress:r,handleResetUpLoad:()=>{a(""),i(0)},handleSelectImage:h=>{const d=h.target.files[0];d&&(t("image_name",d.name),l(d))},handleDeleteImage:()=>{const h=me(),d=pe(h,"pictures/"+(n||e("image_name")));on(d).then(()=>{$.success("Delete image successfully !",{theme:"colored",autoClose:2e3,pauseOnHover:!1}),a(""),i(0),s&&s()}).catch(g=>{a("")})}}}function cn(t){return Ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"}}]})(t)}const hn=t=>{const{name:e,className:n="",progress:s=0,image:r="",userImage:i=!1,handleDeleteImage:o=()=>{},...a}=t;return y.jsxs("label",{className:`cursor-pointer flex group items-center justify-center bg-graySoft text-text2 dark:text-white dark:bg-colorDarkRedux hover:bg-opacity-50 transition-all border border-dashed w-full ${r?"h-full":"min-h-[300px] "} rounded-lg ${n} relative overflow-hidden`,children:[y.jsx("input",{type:"file",name:e,className:"hidden-input",onChange:()=>{},...a}),s!==0&&!r&&y.jsx("div",{className:"absolute z-10 w-16 h-16 border-8 rounded-full border-colorPink border-t-transparent animate-spin"}),!r&&s===0&&y.jsxs("div",{className:"flex flex-col items-center text-center pointer-events-none",children:[y.jsx("span",{className:"mb-5 text-7xl",children:y.jsx(cn,{})}),y.jsx("p",{className:"text-xl font-medium capitalize",children:"Choose photo"})]}),r&&y.jsxs(y.Fragment,{children:[y.jsx("img",{src:r,className:"object-cover w-full h-full",alt:""}),y.jsx("button",{type:"button",onClick:o,className:`absolute z-10 flex ${i?"":"top-5 right-5"} items-center justify-center w-12 h-12 text-2xl text-red-400 transition-all bg-white rounded-full shadow-lg opacity-0 cursor-pointer group-hover:opacity-100 hover:bg-red-500 hover:text-white`,children:y.jsx(Xe,{})})]}),!r&&y.jsx("div",{className:"absolute bottom-0 left-0 w-10 h-1 transition-all bg-colorPink image-upload-progress",style:{width:`${Math.ceil(s)}%`}})]})};hn.propTypes={name:L.string,className:L.string,progress:L.number,image:L.string,userImage:L.string,handleDeleteImage:L.func};export{hn as I,pn as u};
