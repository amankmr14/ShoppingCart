(function(h){var k=window.AmazonUIPageJS||window.P,n=k._namespace||k.attributeErrors,d=n?n("PageRefreshAsset",""):k;d.guardFatal?d.guardFatal(h)(d,window):d.execute(function(){h(d,window)})})(function(h,k,n){h.when("A","page-refresh-state","web-ajax-utility","alt-page-refresh-measurement","dp-interactive-page-refresh-handler").register("page-refresh-handler",function(d,c,e,b,f){var a={},g=d.$,l=void 0,q=function(a,b){var m=this;m.clientId=a;m.persistentParams={};m.pageRefreshUrlParams="";m.deviceType=
"";m.doPageRefresh=function(l,c,k,q){var p;m.persistentParams=g.extend(!0,m.persistentParams,c.Persistent);p={};g.extend(!0,p,m.persistentParams,c["Non-Persistent"]);c=b;var h=d.contains(c,"?");c=c+(h?"\x26":"?")+((l?"asin\x3d"+l:"")+(m.pageRefreshUrlParams?m.pageRefreshUrlParams:""));for(var n in p)null!=p[n]&&(l=p[n],h=c.slice(-1),c+="?"===h||"\x26"===h?"":"\x26",c+=n+"\x3d"+l);p=c;f.createInteractivityObjectForTwisterUpdate();e.getInstance(a,p,k,q).getContent()};m.addParams=function(a){m.persistentParams=
g.extend(!0,m.persistentParams,a);return!0};m.removeParams=function(a){d.each(a,function(a,b){delete m.persistentParams[a]});return!0};m.createCustomParamsMap=function(a,b){var l={Persistent:{},"Non-Persistent":{}};g.each(a,function(a,b){l.Persistent[a]=b});g.each(b,function(a,b){l["Non-Persistent"][a]=b});return l};m.startMeasurement=function(a,b,g,c,f,d){l&&l.start(a,b,g,c,f,d)};m.stampImageLoad=function(a){l&&l.stampImageLoad(a)};m.stampFeature=function(a,b){l&&l.stampFeature(a,b)};(function(){var a=
c.pageRefreshData;m.pageRefreshUrlParams=a.pageRefreshUrlParams;m.deviceType=a.deviceType})()};return{getHandlerInstance:function(c,f,d){(null==c||""===c)&&k.ueLogError&&k.ueLogError({message:"Invalid ClientId"},{logLevel:"FATAL",attribution:"PageRefreshAPI",message:"Invalid ClientId passed to getHandlerInstance of dpRefreshHandler"});a[c]||(a[c]=new q(c,f));!l&&d&&(f=d.config,l=new b(g,f.atf.marker,f.cf.marker),l.init(d.storeID,d.productGroupID));return a[c]}}});"use strict";h.when("A","page-refresh-handler").register("dp-refresh-handler",
function(d,c){function e(b,f,a){this.featureTriggeringRefresh=b.featureName;this.deviceType=(this.deviceTypeStateData=d.state("detail-page-device-type"))&&this.deviceTypeStateData.deviceType?this.deviceTypeStateData.deviceType:"web";this.pageRefreshUrl=f&&f.pageRefreshUrl?f.pageRefreshUrl:"/gp/twister/ajaxv2";this.clientId="PageRefresh_"+this.deviceType+"_Client";this.DPRefreshHandler=c.getHandlerInstance(this.clientId,this.pageRefreshUrl,a)}e.prototype={doPageRefresh:function(b,c,a,g){try{this.DPRefreshHandler.doPageRefresh(b,
c,a,g)}catch(l){k.ueLogError&&k.ueLogError(l,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the doPageRefresh method triggered by - "+this.featureTriggeringRefresh})}},createCustomParamsMap:function(b,c){var a={};try{a=this.DPRefreshHandler.createCustomParamsMap(b,c)}catch(g){k.ueLogError&&k.ueLogError(g,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the createCustompParamsMap method triggered by - "+this.featureTriggeringRefresh})}return a},
addParams:function(b){return b&&"object"==typeof b?this.DPRefreshHandler.addParams(b):!1},removeParams:function(b){return b&&"object"==typeof b?this.DPRefreshHandler.removeParams(b):!1},startMeasurement:function(b,c,a,g,l,d){try{this.DPRefreshHandler.startMeasurement(b,c,a,g,l,d)}catch(e){k.ueLogError&&k.ueLogError(e,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}},stampImageLoad:function(b){try{this.DPRefreshHandler.stampImageLoad(b)}catch(c){k.ueLogError&&
k.ueLogError(c,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}},stampFeature:function(b,c){try{this.DPRefreshHandler.stampFeature(b,c)}catch(a){k.ueLogError&&k.ueLogError(a,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}}};return e});h.when("A","jQuery","dp-interactive-page-refresh-handler",
"dp-click-to-ci-utils").register("alt-page-refresh-ajax-scope",function(d,c,e,b){return function(c,a,g,l,q){this.scopeName=a;this.url=g;this.customPageTypeId=l;this.customTags=q;this.requestIdAvailable=!1;ues("t0",a,k.newTwisterInteractionStartTime);ues("ctb",a,"1");this.signalMarker=function(a){!this.markers[a]||0>=this.markers[a].conditions||0===--this.markers[a].conditions&&"function"==typeof this.markers[a].handler&&this.markers[a].handler()};this.addlongPoleTag=function(a,b){a=a.toLowerCase();
this.markers[a]&&0==this.markers[a].conditions&&0==this.markers[a].conditions&&k.ue&&"function"===typeof ue.tag&&ue.tag(b)};this.markClickToCI=function(){var a=this,g=e.getClickToCIMetric();g&&g.then(function(g){uet("fn",a.scopeName,void 0,g.interactiveTime);a.requestIdAvailable&&uex("ld",lScopeName);b.logCounter("TTISuccessCountForTwisterUpdate")}).catch(function(a){b.logCounter("TTIFailureCountForTwisterUpdate")})};this.postData=function(){var a=this.scopeName,b=this.customPageTypeId,g=this.customTags;
c.ajax({url:this.url,dataType:"text",timeout:4E4,error:function(){},success:function(c,l,d){c=c.trim();ues("id",a,c);this.requestIdAvailable=!0;var f;void 0!==b&&(f=k.ue_pti,k.ue_pti=b);if(void 0!==g)for(c=0;c<g.length;c++)ue.tag(g[c]);uex("ld",a);void 0!==b&&(k.ue_pti=f)}})};var h=this;this.markers={image:{conditions:1,handler:function(){uet("ne",a);h.signalMarker("af")}},af:{conditions:Twister.atfMarkerCount?Twister.atfMarkerCount:2,handler:function(){d.trigger("PageRefresh:ATF");uet("af",a);uet("cf",
a);h.signalMarker("cf");e.updateCriticalFeatures();h.markClickToCI()}},cf:{conditions:Twister.cfMarkerCount?Twister.cfMarkerCount:2,handler:function(){d.trigger("PageRefresh:CF");uet("cf",a);h.postData()}}}}});h.when("A","jQuery","alt-page-refresh-ajax-scope").register("alt-page-refresh-measurement",function(d,c,e){return function(b,c,a){this.atfMarker=c;this.cfMarker=a;this.scopeCount={};this.ajaxScopes={};this.url="";this.init=function(a,b){this.url="/gp/twister/dynamic-update/ajax-measurement.html/?s\x3d"+
a+"\x26pgid\x3d"+b+"\x26deviceType\x3d"+Twister.deviceType;Twister.isInstaTwisterEnabled&&(this.url+="\x26ptd\x3d"+Twister.productTypeName)};this.start=function(a,c,d,f,h,m){if(k.ue){this.scopeCount[a]||(this.scopeCount[a]=0);var n=a+(this.scopeCount[a]+1);this.scopeCount[a]++;var r=this.url;c&&(r+="\x26dimensionType\x3d"+c);"undefined"!==typeof d&&(r+="\x26dimensionCount\x3d"+d);"undefined"!==typeof f&&(r+="\x26dimensionsDisplayType\x3d"+f);this.ajaxScopes[a]=new e(b,n,r,h,m)}};this.stampImageLoad=
function(a){this.ajaxScopes[a]&&(this.ajaxScopes[a].signalMarker("image"),Twister.cfImageLongPollTag&&this.ajaxScopes[a].addlongPoleTag("cf",Twister.cfImageLongPollTag))};this.stampFeature=function(a,b){this.ajaxScopes[b]&&(a===this.atfMarker&&this.ajaxScopes[b].signalMarker("af"),a===this.cfMarker&&(this.ajaxScopes[b].signalMarker("cf"),Twister.cfHtmlLongPollTag&&this.ajaxScopes[b].addlongPoleTag("cf",Twister.cfHtmlLongPollTag)))};this.stampCustomMetrics=function(a,b){this.ajaxScopes[b]&&uet(a,this.ajaxScopes[b].scopeName)}}});
h.when("A","ready").register("page-refresh-state",function(d){var c=d.state("page-refresh-data");d=d.state("detail-page-device-type");var e={};"undefined"!==typeof c&&(e.pageRefreshUrlParams=c.pageRefreshUrlParams);"undefined"!==typeof d&&(e.deviceType=d.deviceType);return{pageRefreshData:e}});h.when("A","jQuery","dp-js-logger").register("web-ajax-utility",function(d,c,e){function b(a,b,c,d){this.scope=a;this.url=b;this.options=c;this.status=0;this.selected=!1;this.error=this.successData=this.xhr=
this._status=void 0;this.chunks=[];this.doNotAbort=d||!1}var f=new e("WebAjaxUtility");b._objects={};b.prototype._callback=function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1);"function"===typeof a&&a.apply(self,b)};b.prototype._canAbort=function(){return!this.doNotAbort&&1===this.status};b.prototype._isAborted=function(){return 3===this.status};b.prototype._getUrl=function(){return this.url};b.prototype._abort=function(){if(1===this.status)try{this.ajaxRequestRefence.abort(),this.status=
3}catch(a){f.logFatal(a,{message:" Could not abort ajax request."})}};b.prototype._flushChunkData=function(){var a=this;a.chunks.length&&c.map(a.chunks,function(b){a._callback(a.options.chunk,b)})};b.prototype._request=function(){var a=this;a.ajaxRequestRefence=d.get(a.url,{params:a.options.params,success:function(b,c,f){a.status=4;a.successData=b;a._status=c;a.xhr=f;a.selected&&a._callback(a.options.success,b,c,f);d.trigger("TwisterRefresh:Success")},error:function(b,c,d){a.status=2;a.xhr=b;a._status=
c;a.error=d;a.selected&&a._callback(a.options.error,b,c,d)},abort:function(b){a.status=3;a.xhr=b;a.selected&&a._callback(a.options.abort,b)},chunk:function(b){b&&(a.chunks.push(b),a.selected&&a._callback(a.options.chunk,b))},timeout:a.options.timeout||4E4})};b.prototype.getContent=function(){b._abortRequestsExcept(this);this.selected=!0;0===this.status?(this.status=1,this._request()):1===this.status?this._flushChunkData():4===this.status&&(this._flushChunkData(),this._callback(this.options.success,
this.successData,this._status,this.xhr),d.trigger("a:pageUpdate"),d.trigger("TwisterRefresh:Success"))};b._abortRequestsExcept=function(a){c.each(b._objects[a.scope],function(b,c){c._canAbort()&&b!==a._getUrl()&&c._abort()})};b.getInstance=function(a,c,d,f){if(!a||!c||"object"!==typeof d)throw"Incorrect parameter passed.";b._objects[a]=b._objects[a]||{};var e=b._objects[a][c];e&&e._isAborted()&&(delete b._objects[a][c],e=void 0);e||(b._objects[a][c]=new b(a,c,d,f,this));return b._objects[a][c]};return b});
h.when("A").register("state-aware-critical-features",function(d){return function(){var c=[];this.add=function(d,b){for(var f=d.featureName,a=!1,g=0;g<c.length;g++)if(c[g].featureName===f){a=!0;break}if(a)throw"Critical Feature "+d.featureName+" already registered for State Aware Messaging!";d={};d.featureName=f;d.callback=b;c.push(d)};this.getAllCriticalFeatures=function(){return c}}});h.when("A","state-aware-parameter-handler").register("state-aware-feature-consolidator",function(d,c){return{getStateAwareParameters:function(){return c.getStateAwareParameters()}}});
h.when("A","state-aware-critical-features","state-aware-parameters").register("state-aware-parameter-handler",function(d,c,e){return new function(){var b=new c,d=new e;this.registerCriticalFeature=function(a,c){try{if("function"===typeof c)b.add(a,c);else throw"callback needs to be a function!";}catch(d){k.ueLogError&&k.ueLogError(d,{logLevel:"ERROR",attribution:a.featureName,message:"StateAwareExceptionMessaging:- This error is caused by the feature "+a.featureName+" while registering itself as a critical feature for State Aware Messaging. "+
d})}};this.getStateAwareParameters=function(){for(var a=b.getAllCriticalFeatures(),c=0;c<a.length;c++){var e=a[c],h=e.featureName,e=e.callback.apply();try{d.putParameters(h,e)}catch(n){k.ueLogError&&k.ueLogError(n,{logLevel:"ERROR",attribution:h,message:"StateAwareMessaging:- This error is caused by the feature "+h+" while injecting state aware parameters. "+n})}}return d.getAllStateAwareParameters()}}});h.when("A").register("state-aware-parameters",function(){return function(){var d={};this.putParameters=
function(c,e){var b=!0;for(feature in d)if(d.hasOwnProperty(feature)&&c!==feature){var f=this.getParameters(feature);if(b){var b=e,a=!1;for(paramKey in b)if(b.hasOwnProperty(paramKey)&&f.hasOwnProperty(paramKey)){a=!0;break}b=!a}}if(b)for(paramKey in e)e.hasOwnProperty(paramKey)&&(f=e[paramKey],d[c]||(d[c]={}),d[c][paramKey]=f);else throw"Duplicate Parameters found for other Critical Feature!";};this.getParameters=function(c){return d[c]};this.getAllStateAwareParameters=function(){var c={},e;for(e in d)if(d.hasOwnProperty(e)){var b=
this.getParameters(e),f;for(f in b)b.hasOwnProperty(f)&&(c[f]=b[f])}return c}}});h.when("A").register("page-refresh-utils",function(d){var c=d.$,e={intermediateEOS:1,EOS:1};return{fadeInFeatures:function(b){c.each(b,function(a,c){"#"!==c[0]&&(b[a]="#"+c)});var d=b.join(",");c(d).addClass("js-feature-refresh-overlay");c(d).css("opacity",.5)},refreshFeature:function(b){var d=b.Value;b=b.FeatureName;if(!e[b]){var a,g;try{b&&d&&d.content&&(g=d.content[b],"undefined"!==typeof g&&(a=c("#"+b),a.html(g),
a.removeClass("js-feature-refresh-overlay"),a.css("opacity","")))}catch(h){d={message:"Error in feature"+(b||"NoFeatureName"),logLevel:"FATAL"},k.ueLogError&&k.ueLogError(h,d)}}},removeOverlayForAllFeatures:function(b){b=c("body").find(".js-feature-refresh-overlay");for(var d=0;d<b.length;d++){var a=b[d];c(a).removeClass("js-feature-refresh-overlay");c(a).css("opacity","")}}}})});