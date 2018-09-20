if (self.CavalryLogger) { CavalryLogger.start_js(["8C\/Pa"]); }

__d("FBLoadShimmer.react",["cx","LoadingMarker.react","React","gkx","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.className,d=a.height,e=a.style,f=a.width,g=a.disableAnimation;a=babelHelpers.objectWithoutProperties(a,["className","height","style","width","disableAnimation"]);var h="_1tt";g&&(h=b("joinClasses")(h,"_300z"));g=b("React").createElement("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(c,h),style:babelHelpers["extends"]({height:d!=null?d+"px":undefined,width:f!=null?f+"px":undefined},e)}));return b("React").createElement(b("LoadingMarker.react"),null,g)}e.exports=a}),null);
__d("AbstractActionList.react",["React","ReactFragment"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("React").createElement("span",{"aria-hidden":"true"}," \xb7 ");g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=!0,c=b("React").Children.map(this.props.children,function(c){if(!c)return c;if(a){a=!1;return c}return b("ReactFragment").create({BULLET:h,child:c})});return b("React").createElement("div",this.props,c)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("ActionList.react",["AbstractActionList.react","React","joinClasses"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("AbstractActionList.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"fsm fwn fcg")}),this.props.children)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("GamingDestinationRHCEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",CLICK:"click",TAB_CLICK:"tab_click"})}),null);
__d("GamingDestinationRHCTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationRHCLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationRHCLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationRHCLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setDefaultTab=function(a){this.$1.default_tab=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setPageletID=function(a){this.$1.pagelet_id=a;return this};a.prototype.setRhcSection=function(a){this.$1.rhc_section=a;return this};a.prototype.setTabName=function(a){this.$1.tab_name=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={default_tab:!0,event:!0,pagelet_id:!0,rhc_section:!0,tab_name:!0,vc:!0};e.exports=a}),null);
__d("GamesUnifiedRHCLoggerContainer.react",["DOMContainer.react","GamingDestinationRHCEvents","GamingDestinationRHCTypedLogger","OnVisible.react","React","ShimButton.react","once"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=b("once")(function(){this.$2(b("GamingDestinationRHCEvents").IMPRESSION)}.bind(this)),this.$3=b("once")(function(){this.$2(b("GamingDestinationRHCEvents").CLICK)}.bind(this)),c}a.prototype.$2=function(event){new(b("GamingDestinationRHCTypedLogger"))().setEvent(event).setRhcSection(this.props.rhcSection).setDefaultTab(this.props.defaultTab).setTabName(this.props.tabName).setPageletID(this.props.pageletID).log()};a.prototype.render=function(){var a=b("React").createElement(b("ShimButton.react"),{onClick:this.$3},b("React").createElement(b("DOMContainer.react"),null,this.props.child));this.props.shouldLogImpression&&(a=b("React").createElement(b("OnVisible.react"),{buffer:1,onVisible:this.$1},a));return a};a.defaultProps={shouldLogImpression:!0};e.exports=a}),null);
__d("SRLayout.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a){return b("React").createElement("div",{className:b("joinClasses")(a.className,"_5aj7")},a.children)}e.exports=a}),null);
__d("SRLayoutColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a){return b("React").createElement("div",{className:b("joinClasses")(a.className,"_4bl7")},a.children)}e.exports=a}),null);
__d("SRLayoutFillColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a){return b("React").createElement("div",{className:b("joinClasses")(a.className,"_4bl9")},a.children)}e.exports=a}),null);
__d("ChatSidebarAdminedPage.react",["cx","Bootloader","React","SplitImage.react","SRLayout.react","SRLayoutColumn.react","SRLayoutFillColumn.react","SRLink.react","SRXUIBadge.react","emptyFunction","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$3=function(){var a=this.props,c=a.slot,d=a.slotOffset,e=a.totalSlots;b("Bootloader").loadModules(["MessengerChatSidebarSlotsTypedLogger"],function(a){new a().setSlotClicked(d+c).setSlotsVisibleBeforeScrolling(e).setRelativeSlotClicked(this.props.slot).setSidebarSection("admined_pages").log()}.bind(this),"ChatSidebarAdminedPage.react")}.bind(this),this.$2=function(){var a=String(this.props.page.id);b("gkx")("AT4T9LO8V3BIOVcGOYPKxxsCiNDzy0HHXFfwezwsUTXaZjtufQoUfjAr_b0uxP3zESohJEtycMUpu9xvYr512cum")||b("gkx")("AT4Aq9ewKIFTl67cxoDAodIE6NOyKQZWxOTK7vUN4WSVpVwOKKYWwQCOkB7MMU0feig4qnlFrIZeyqu4hV61bOjlQn8Q2DP89kXsLrKS2wNNWQ")?b("Bootloader").loadModules(["ChatSidebarHoverCardV2","MessengerChatSidebarSlotsTypedLogger"],function(b,c){b.show(a,this.$1)}.bind(this),"ChatSidebarAdminedPage.react"):b("Bootloader").loadModules(["MessengerChatSidebarSlotsTypedLogger"],b("emptyFunction"),"ChatSidebarAdminedPage.react");this.props.onMouseEnter&&this.props.onMouseEnter(a)}.bind(this),c}a.prototype.render=function(){var a=9,c=this.props.page,d=c.imgSrc,e=[];d!=null&&(e=[d]);return b("React").createElement("li",{className:"_12um _42fz","data-id":c.id,ref:function(a){this.$1=a}.bind(this),onMouseOver:this.$2,onClick:this.$3},b("React").createElement("div",{className:"_55ln"},b("React").createElement("div",{className:"_55lp"},b("React").createElement(b("SRLayout.react"),null,b("React").createElement(b("SRLayoutColumn.react"),null,b("React").createElement(b("SRLink.react"),{href:c.uri},b("React").createElement("div",{className:"_55lq"},b("React").createElement(b("SplitImage.react"),{size:c.imgSize,srcs:e})))),b("React").createElement(b("SRLayoutFillColumn.react"),null,b("React").createElement(b("SRLink.react"),{className:"_224p",href:c.uri},b("React").createElement("div",{className:"_55lr"},c.name))),b("React").createElement(b("SRLayoutColumn.react"),{className:"_3p8_"},b("React").createElement("div",{className:"_5bon"},b("React").createElement(b("SRXUIBadge.react"),{className:"_4fsv",count:c.badgingCount,maxcount:a})))))))};e.exports=a}),null);
__d("ChatSidebarPageListContainer.react",["cx","ChatSidebarAdminedPage.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.adminedPages.length;return b("React").createElement("ul",{className:"_4kqp"},a.adminedPages.map(function(d,e){return b("React").createElement(b("ChatSidebarAdminedPage.react"),{key:d.id,page:d,slot:e,slotOffset:0,totalSlots:c,onMouseEnter:a.onMouseEnter})}))}e.exports=a}),null);
__d("ChatSidebarPageListContainerWrapper.react",["cx","fbt","Arbiter","ChatOptions","ChatSidebarHeader.react","ChatSidebarPageListContainer.react","ChatSidebarSections","React","SRLink.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={hideAdminedPages:this.props.hideAdminedPagesInitial},b}a.prototype.componentDidMount=function(){b("Arbiter").subscribe("chat/option-changed",function(a,c){a=c.name;a==="hide_admined_pages"&&this.setState({hideAdminedPages:b("ChatOptions").getSetting("hide_admined_pages")})}.bind(this)),b("Arbiter").subscribe("sidebar/typeahead/active",function(a,b){this.setState({hideAdminedPages:b})}.bind(this))};a.prototype.render=function(){var a=3;if(this.props.adminedPages.length===0||this.state.hideAdminedPages)return null;var c=null;this.props.adminedPages.length>=a&&(c=b("React").createElement(b("SRLink.react"),{className:"_2l56",target:"_blank",href:this.props.yourPagesURI},h._("SEE ALL")));return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("ChatSidebarHeader.react"),{className:"_4kqp",key:b("ChatSidebarSections").ADMINED_PAGES},b("React").createElement("div",{className:"_ohe lfloat"},h._("YOUR PAGES")),b("React").createElement("div",{className:"_ohf rfloat"},c)),b("React").createElement(b("ChatSidebarPageListContainer.react"),{adminedPages:this.props.adminedPages,key:"pages_section"}))};e.exports=a}),null);
__d("SRFunctionRef",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a}e.exports=a}),null);
__d("ChatSidebar.react",["BaseChatSidebar.react","ChatSidebarOrderedList.react","React","SRFunctionRef"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").createElement(b("BaseChatSidebar.react"),{initialState:a.initialState,root:a.root,heightOffset:0},b("SRFunctionRef")(function(a){var c=a.computedState,d=a.hide;a=a.onMouseEnterItem;return b("React").createElement(b("ChatSidebarOrderedList.react"),{adminedPages:c.adminedPages,marketplaceThreads:c.marketplaceThreads,availableUsers:c.availableUsers,groups:c.groups,hide:d,isAfterDomLoad:c.isAfterDomLoad,isSidebar:!0,isUserOffline:c.isUserOffline,maxItemSlots:c.maxItemSlots+1,nearby:c.nearby,offlineUsers:c.offlineUsers,onMouseEnterItem:a,pageListModule:c.pageListModule,pymmList:c.pymmList,topUsers:c.topUsers,usersDetailedData:c.usersDetailedData,workOthers:c.workOthers})}))}e.exports=a}),null);
__d("ScriptPathState",["Arbiter"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j,k=100,l={setIsUIPageletRequest:function(a){i=a},setUserURISampleRate:function(a){j=a},reset:function(){g=null,h=!1,i=!1},_shouldUpdateScriptPath:function(){return h&&!i},_shouldSendURI:function(){return Math.random()<j},getParams:function(){var a={};l._shouldUpdateScriptPath()?l._shouldSendURI()&&g!==null&&(a.user_uri=g.substring(0,k)):a.no_script_path=1;return a}};b("Arbiter").subscribe("pre_page_transition",function(a,b){h=!0,g=b.to.getUnqualifiedURI().toString()});e.exports=a.ScriptPathState=l}),null);
__d("goOrReplace",[],(function(a,b,c,d,e,f){function a(a,b,c){c?a.replace(b):a.href==b?a.reload():a.href=b}e.exports=a}),null);
__d("AjaxPipeRequest",["invariant","Arbiter","AsyncRequest","AsyncRequestConfig","BigPipe","ContextualComponent","CSS","DOM","Env","PageEvents","PageletGK","PageletSet","PageNavigationStageLogger","ScriptPathState","URI","containsNode","ge","goOrReplace","performance","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("PageletGK").destroyDomAfterEventHandler,i,j=0;function k(a,c){__p&&__p();var d=b("ge")(a);if(!d)return;c||(d.style.minHeight="100px");c=b("PageletSet").getPageletIDs();for(var e=0;e<c.length;e++){var f=c[e];if(b("PageletSet").hasPagelet(f)){var g=b("PageletSet").getPagelet(f);b("containsNode")(d,g.getRoot())&&b("PageletSet").removePagelet(f)}}b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,{canvasID:a});function i(a){var c=b("ContextualComponent").forNode(a);c&&c.unmount();b("DOM").empty(a)}h?(b("Arbiter").inform("pagelet/destroy",{id:null,root:d}),i(d)):(i(d),b("Arbiter").inform("pagelet/destroy",{id:null,root:d}))}function l(a,c){a=b("ge")(a);a&&!c&&(a.style.minHeight="100px")}function c(a,c,d){"use strict";__p&&__p();this._allowIrrelevantRequests=!1;this._canvas_id=a;this._uri=c;this._query_data=d;a=new(b("AsyncRequest"))();a.disableInteractionServerTracing();a.setReplaceTransportMarkers(!1);this._request=a;this._allow_cross_page_transition=!0;this._arbiter=new(b("Arbiter"))();this._requestID=j++}c.prototype.getArbiter=function(){"use strict";return this._arbiter};c.prototype.setData=function(a){"use strict";this._query_data=a;return this};c.prototype.getData=function(){"use strict";return this._query_data};c.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allow_cross_page_transition=a;return this};c.prototype.setAppend=function(a){"use strict";this._append=a;return this};c.prototype._getAsyncRequestType=function(){"use strict";return b("AsyncRequestConfig").useFetchStreamAjaxPipeTransport?"useFetchWithIframeFallback":"useIframeTransport"};c.prototype.send=function(){"use strict";__p&&__p();this._arbiter.inform(b("PageEvents").AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:b("performanceAbsoluteNow")()},"persistent");var a={ajaxpipe:1,ajaxpipe_token:b("Env").ajaxpipe_token};Object.assign(a,b("ScriptPathState").getParams());b("ScriptPathState").reset();var c=this._request;if(c==null)return this;c.setOption(this._getAsyncRequestType(),!0).delayPreDisplayJS().setURI(this._uri).setData(Object.assign(a,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);this._automatic?this._relevantRequest=i:i=this._request;if(this._isQuickling){a=b("performance").clearResourceTimings||b("performance").webkitClearResourceTimings;a&&a.call(b("performance"))}c.send();return this};c.prototype._preBootloadFirstResponse=function(a){"use strict";return!1};c.prototype._fireDomContentCallback=function(){"use strict";var a=this._request;a&&a.cavalry&&a.cavalry.setTimeStamp("t_domcontent");this._arbiter.inform(b("PageEvents").AJAXPIPE_DOMREADY,!0,"state")};c.prototype._fireOnloadCallback=function(){"use strict";window.console&&console.timeStamp&&console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.AJAXPIPE_ONLOAD"}');var a=this._request;a!=null&&a.cavalry&&(a.cavalry.setTimeStamp("t_hooks"),a.cavalry.setTimeStamp("t_layout"),a.cavalry.setTimeStamp("t_onload"));this._arbiter.inform(b("PageEvents").AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:b("performanceAbsoluteNow")()},"state")};c.prototype._isRelevant=function(a){"use strict";return this._request===i||this._automatic&&this._relevantRequest===i||this._jsNonBlock||i!=null&&i.getAllowIrrelevantRequests()};c.prototype._preBootloadHandler=function(a){"use strict";var c=this._request,d=a.getPayload();if(!d||d.redirect||!this._isRelevant(a))return!1;var e=!1;a.is_first&&(!this._append&&!this._displayCallback&&k(this._canvas_id,this._constHeight),e=this._preBootloadFirstResponse(a),c!=null||g(0,undefined),this.pipe=new(b("BigPipe"))({config:d.bigPipeConfig,arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:c.lid,rid:this._requestID,isAjax:!0,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:b("PageEvents").AJAXPIPE_DOMREADY,onloadEvt:b("PageEvents").AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests}),this.pipe.setPageID(c.lid));return e};c.prototype._redirect=function(c){"use strict";__p&&__p();if(c.redirect){if(c.force||!this.isPageActive(c.redirect)){var d=["ajaxpipe","ajaxpipe_token"].concat(this.getSanitizedParameters());b("PageNavigationStageLogger").setCookieForNavigation(c.redirect);b("PageNavigationStageLogger").setNote("ajaxpipe_redirect");b("PageNavigationStageLogger").updateCookie();b("goOrReplace")(window.location,new(b("URI"))(c.redirect).removeQueryData(d),!0)}else{d=a.PageTransitions;d.go(c.redirect,!0)}return!0}else return!1};c.prototype.isPageActive=function(a){"use strict";return!0};c.prototype.getSanitizedParameters=function(){"use strict";return[]};c.prototype._versionCheck=function(a){"use strict";return!0};c.prototype._onInitialResponse=function(a){"use strict";var b=a.getPayload();if(!this._isRelevant(a))return!1;if(!b)return!0;return this._redirect(b)||!this._versionCheck(b)?!1:!0};c.prototype._processFirstResponse=function(a){"use strict";this._arbiter.inform(b("PageEvents").AJAXPIPE_FIRST_RESPONSE,{lid:this.pipe.lid,quickling:!!this._isQuickling});a=a.getPayload();var c=b("ge")(this._canvas_id);a=a.canvas_class;c!=null&&a!=null&&b("CSS").setClass(c,a)};c.prototype.setFirstResponseCallback=function(a){"use strict";this._firstResponseCallback=a;return this};c.prototype.setFirstResponseHandler=function(a){"use strict";this._processFirstResponse=a;return this};c.prototype._onResponse=function(a){"use strict";__p&&__p();var c=a.payload;if(!this._isRelevant(a))return b("AsyncRequest").suppressOnloadToken;a.is_first&&(this._processFirstResponse(a),this._firstResponseCallback&&this._firstResponseCallback(),c.provides=c.provides||[],c.provides.push("uipage_onload"));if(c){if("content"in c.content){this._append&&(c.append=this._canvas_id);var d=c.content.content;delete c.content.content;c.content[this._canvas_id]=d}this.pipe.onPageletArrive(c)}a.is_last&&l(this._canvas_id,this._constHeight);return b("AsyncRequest").suppressOnloadToken};c.prototype.setNectarModuleDataSafe=function(a){"use strict";this._request!=null&&this._request.setNectarModuleDataSafe(a);return this};c.prototype.setFinallyHandler=function(a){"use strict";this._request!=null&&this._request.setFinallyHandler(a);return this};c.prototype.setErrorHandler=function(a){"use strict";this._request!=null&&this._request.setErrorHandler(a);return this};c.prototype.setTransportErrorHandler=function(a){"use strict";this._request!=null&&this._request.setTransportErrorHandler(a);return this};c.prototype.setResetHandler=function(a){"use strict";this._resetHandler=a;return this};c.prototype.abort=function(){"use strict";this._request!=null&&this._request.abort();this._reset();return this};c.prototype.abandon=function(){"use strict";this._request!=null&&this._request.abandon();this._reset();return this};c.prototype._reset=function(){"use strict";i==this._request&&(i=null),this._request=null,this._resetHandler&&this._resetHandler()};c.prototype.setJSNonBlock=function(a){"use strict";this._jsNonBlock=a;return this};c.prototype.setAutomatic=function(a){"use strict";this._automatic=a;return this};c.prototype.setDisplayCallback=function(a){"use strict";this._displayCallback=a;return this};c.prototype.setConstHeight=function(a){"use strict";this._constHeight=a;return this};c.prototype.setAllowIrrelevantRequests=function(a){"use strict";this._allowIrrelevantRequests=a;return this};c.prototype.getAsyncRequest=function(){"use strict";return this._request};c.getCurrentRequest=function(){"use strict";return i};c.setCurrentRequest=function(a){"use strict";i=a};c.clearCanvas=k;e.exports=c}),null);
__d("UIPageletContentCache",[],(function(a,b,c,d,e,f){a={cache:{},getContent:function(a){return a in this.cache?this.cache[a]:null},setContent:function(a,b){this.cache[a]=b}};e.exports=a}),null);
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","UIPageletContentCache","URI","emptyFunction","ge","isElementNode"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d){"use strict";__p&&__p();var e=a&&b("isElementNode")(a)?a.id:a;this._id=e||null;this._element=b("ge")(a||b("DOM").create("div"));this._src=c||null;this._context_data=d||{};this._data={};this._handler=b("emptyFunction");this._request=null;this._use_ajaxpipe=!1;this._use_post_request=!1;this._is_bundle=!0;this._allow_cross_page_transition=!1;this._append=!1;this._cache_content=!1;this._content_cache_key=""}g.prototype.getElement=function(){"use strict";return this._element};g.prototype.setHandler=function(a){"use strict";this._handler=a;return this};g.prototype.go=function(a,b){"use strict";arguments.length>=2||typeof a==="string"?(this._src=a,this._data=b||{}):arguments.length==1&&(this._data=a);this.refresh();return this};g.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allow_cross_page_transition=a;return this};g.prototype.setBundleOption=function(a){"use strict";this._is_bundle=a;return this};g.prototype.setErrorHandler=function(a){"use strict";this._errorHandler=a;return this};g.prototype.setTransportErrorHandler=function(a){"use strict";this.transportErrorHandler=a;return this};g.prototype.refresh=function(){"use strict";__p&&__p();if(this._use_ajaxpipe)b("ScriptPathState").setIsUIPageletRequest(!0),this._request=new(b("AjaxPipeRequest"))(this._id,this._src),this._request.setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler),this._errorHandler&&this._request.setErrorHandler(this._errorHandler),this.transportErrorHandler&&this._request.setTransportErrorHandler(this.transportErrorHandler),this._allowIrrelevantRequests!=null&&this._request.setAllowIrrelevantRequests(this._allowIrrelevantRequests);else{if(this._cache_content){var a=b("UIPageletContentCache").getContent(this._content_cache_key);if(a!==null){this.handleContent(a);return this}}var c=function(a){this._request=null;a=b("HTML")(a.getPayload());this.handleContent(a);this._cache_content&&b("UIPageletContentCache").setContent(this._content_cache_key,a)}.bind(this),d=this._displayCallback,e=this._finallyHandler;this._request=new(b("AsyncRequest"))(this._src).setMethod("GET").setReadOnly(!0).setOption("bundle",this._is_bundle).setHandler(function(a){d?d(c.bind(null,a)):c(a),e&&e(a)});this._errorHandler&&this._request.setErrorHandler(this._errorHandler);this.transportErrorHandler&&this._request.setTransportErrorHandler(this.transportErrorHandler);this._use_post_request&&this._request.setMethod("POST")}a=babelHelpers["extends"]({},this._context_data,this._data);this._actorID&&(a[b("ActorURI").PARAMETER_ACTOR]=this._actorID);this._request.setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(a)}).send();return this};g.prototype.handleContent=function(a){"use strict";this._append?b("DOM").appendContent(this._element,a):b("DOM").setContent(this._element,a),this._handler()};g.prototype.cancel=function(){"use strict";this._request&&this._request.abort()};g.prototype.abandon=function(){"use strict";this._request&&this._request.abandon()};g.prototype.setUseAjaxPipe=function(a){"use strict";this._use_ajaxpipe=!!a;return this};g.prototype.setUsePostRequest=function(a){"use strict";this._use_post_request=!!a;return this};g.prototype.setAppend=function(a){"use strict";this._append=!!a;return this};g.prototype.setJSNonBlock=function(a){"use strict";this._jsNonblock=!!a;return this};g.prototype.setAutomatic=function(a){"use strict";this._automatic=!!a;return this};g.prototype.setDisplayCallback=function(a){"use strict";this._displayCallback=a;return this};g.prototype.setConstHeight=function(a){"use strict";this._constHeight=!!a;return this};g.prototype.setFinallyHandler=function(a){"use strict";this._finallyHandler=a;return this};g.prototype.setAllowIrrelevantRequests=function(a){"use strict";this._allowIrrelevantRequests=a;return this};g.prototype.setActorID=function(a){"use strict";this._actorID=a;return this};g.prototype.setCacheContent=function(a){"use strict";this._cache_content=a;return this};g.prototype.setContentCacheKey=function(a){"use strict";this._content_cache_key=a;return this};g.appendToInline=function(a,c){"use strict";a=b("ge")(a);c=b("ge")(c);if(a&&c){while(c.firstChild)b("DOM").appendContent(a,c.firstChild);b("DOM").remove(c)}};g.loadFromEndpoint=function(a,c,d,e){"use strict";__p&&__p();e=e||{};var f="/ajax/pagelet/generic.php/"+a;e.intern&&(f="/intern"+f);e.query&&(f=f+"?"+e.query);f=new(b("URI"))(f.replace(/\/+/g,"/"));e.subdomain&&f.setSubdomain(e.subdomain);var h=!1,i="";e.contentCacheKey&&(h=!0,i=a+","+String(e.contentCacheKey));a=new g(c,f,d).setUseAjaxPipe(e.usePipe).setBundleOption(e.bundle!==!1).setAppend(e.append).setJSNonBlock(e.jsNonblock).setAutomatic(e.automatic).setDisplayCallback(e.displayCallback).setConstHeight(e.constHeight).setAllowCrossPageTransition(e.crossPage).setFinallyHandler(e.finallyHandler||b("emptyFunction")).setErrorHandler(e.errorHandler).setTransportErrorHandler(e.transportErrorHandler).setAllowIrrelevantRequests(e.allowIrrelevantRequests).setActorID(e.actorID).setCacheContent(h).setContentCacheKey(i).setUsePostRequest(e.usePostRequest);e.handler&&a.setHandler(e.handler);a.go();return a};g.loadFromEndpointBatched=function(a,c,d){"use strict";__p&&__p();var e=a.slice(0,d),f=a.slice(d);if(f.length>0){a=e[e.length-1];var h=b("emptyFunction");a.options&&a.options.finallyHandler&&(h=a.options.finallyHandler);a.options=babelHelpers["extends"]({},a.options,{finallyHandler:function(){h(),window.setTimeout(function(){g.loadFromEndpointBatched(f,c,d)},1)}})}e.forEach(function(a){g.loadFromEndpoint(a.controller,a.target_element,a.data,babelHelpers["extends"]({},a.options,c,{bundle:!0}))})};e.exports=g}),null);
__d("XPageAdminHomePagePanelSaveSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/homepage_panel/save_settings/",{selected_id:{type:"FBID"},collapse_state:{type:"Int"},refresh_panel:{type:"Bool",defaultValue:!1},click_target:{type:"String"}})}),null);
__d("PageHomepagePanelPagelet",["AsyncRequest","DOM","UIPagelet","URI","XPageAdminHomePagePanelSaveSettingsController","$"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="homepage_panel_pagelet_content";a={init:function(a){var c=b("XPageAdminHomePagePanelSaveSettingsController").getURIBuilder().setBool("refresh_panel",!0).getURI();c.addQueryData(b("URI").getRequestURI().getQueryData());new(b("AsyncRequest"))().setURI(c).setStatusElement(a).setErrorHandler(function(a){b("DOM").setContent(b("$")(g),"")}).send()},initWithAjax:function(){b("UIPagelet").loadFromEndpoint("PageHomepagePanelPagelet",g,{content_only:!0},{usePipe:!0,allowIrrelevantRequests:!0,displayCallback:function(a){return a()}})}};e.exports=a}),null);
__d("ProfileLink.react",["Link.react","React","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=new(b("URI"))("/ajax/hovercard/user.php").setQueryData({id:this.props.uid});return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,{"data-hovercard":a,href:this.props.href||"/"+this.props.uid}),this.props.children)};function a(){g.apply(this,arguments)}a.propTypes={href:c.string,uid:c.string.isRequired};e.exports=a}),null);
__d("LineClamp.react",["cx","DOMContainer.react","Locale","React","ReactDOM","getElementText","getVendorPrefixedName","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("getVendorPrefixedName")("lineClamp");c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={enableTooltip:!1},this.$2=function(a){a=b("ReactDOM").findDOMNode(a);a instanceof HTMLElement&&(this.innerElement=a,this.$3())}.bind(this),this.$4=function(a){a=b("ReactDOM").findDOMNode(a);a instanceof HTMLElement&&(this.rootElement=a,this.$3())}.bind(this),c}a.prototype.$1=function(){var a;this.props.lineHeight&&!this.props.customEllipsisDisableGradient&&(a={bottom:this.props.lineHeight+"px"});var c;this.props.customEllipsis&&this.props.customEllipsisDisableGradient?c=b("Locale").isRTL()?"_1osp":"_1osq":c=b("Locale").isRTL()?"_4ik3 _2k5c":"_4ik3"+(this.props.enableCustomizedStyleForEllipsis?" _6q5n":"")+(this.props.enableCustomizedStyleForEllipsis?"":" _2k5d");return b("React").createElement("div",{style:a,className:c,key:"ellipsis"},this.props.customEllipsis?this.props.customEllipsis:"\u2026")};a.prototype.$3=function(){__p&&__p();if(!this.props.enableTooltipOnOverflow)return;if(!this.rootElement)return;var a=this.rootElement,b;!1;if(this.$5())b=a.scrollHeight>a.offsetHeight;else{if(!this.innerElement)return;b=this.innerElement.offsetHeight>a.offsetHeight}this.state.enableTooltip!==b&&this.setState({enableTooltip:b})};a.prototype.$5=function(){return!!i&&!this.props.disableNative};a.prototype.componentDidMount=function(){this.$3()};a.prototype.componentDidUpdate=function(){this.$3()};a.prototype.render=function(){var a=this.$5(),c=b("joinClasses")(this.props.className,"_4ik4"+(a?" _4ik5":"")),d=this.props.hasXHPChildren?b("React").createElement(b("DOMContainer.react"),null,this.props.children):this.props.children,e={};this.props.lineHeight&&(e={lineHeight:this.props.lineHeight+"px"},this.props.fitHeightToShorterText?e=babelHelpers["extends"]({},e,{maxHeight:this.props.lineHeight*this.props.lines}):e=babelHelpers["extends"]({},e,{height:this.props.lineHeight*this.props.lines}));a?e[i]=this.props.lines:(c=b("joinClasses")(c,"clearfix"),this.props.customEllipsisDisableGradient?d=[b("React").createElement("div",{className:"_1osu",key:"spacer"}),this.$1(),b("React").createElement("div",{className:"_1osv",key:"inner",ref:this.$2},this.props.children)]:d=[b("React").createElement("div",{className:"_4ik6",key:"inner",ref:this.$2},d),this.$1()]);var f={};this.props.enableTooltipOnOverflow&&(f["data-hover"]="tooltip",this.state.enableTooltip&&(f["data-tooltip-content"]=a?b("getElementText")(this.rootElement):b("getElementText")(this.innerElement)));return b("React").createElement("div",babelHelpers["extends"]({},f,{className:c,ref:this.$4,style:e}),d)};e.exports=a}),null);
__d("VideoChainingCaller",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INTERNAL:"internal",WWW_FEED_PIVOTS:"www_feed_pivots",WWW_FEED_SNOWLIFT:"www_feed_snowlift",MISC_PHOTO_SET:"misc_photo_set",MOBILE:"mobile",SEARCH:"search",WWW_FEED_RHC:"www_feed_rhc",WWW_NOTIFICATION:"www_notification",WWW_PERMALINK:"www_permalink",WWW_PERMALINK_RHC:"www_permalink_rhc",WWW_PERMALINK_RHC_FROM_NOTIFICATION:"www_permalink_rhc_from_notification",MY_VIDEO_CHANNELS_ENT_QUERY:"my_video_channels_ent_query",TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:"top_followed_video_channels_ent_query",BADGE:"badge",PAGINATION:"pagination",SUBTITLE:"subtitle",CHANNEL_VIEW_FROM_UNKNOWN:"channel_view_from_unknown",CHANNEL_VIEW_FROM_NEWSFEED:"channel_view_from_newsfeed",CHANNEL_VIEW_FROM_EXPLOREFEED:"channel_view_from_explorefeed",LIVE_INDEXER_FROM_EXPLOREFEED:"live_indexer_from_explorefeed",LIVE_INDEXER_FROM_NEWSFEED:"live_indexer_from_newsfeed",NN_INDEXER_FROM_NEWSFEED:"nn_indexer_from_newsfeed",CHANNEL_VIEW_FROM_SEARCH:"channel_view_from_search",CHANNEL_VIEW_FROM_NEWSFEED_PIVOT:"channel_view_from_newsfeed_pivot",NEWSFEED_PIVOT_INLINE:"newsfeed_pivot_inline",MOBILE_NEWSFEED_PIVOT_INLINE:"mobile_newsfeed_pivot_inline",CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:"channel_view_from_page_call_to_action",CHANNEL_VIEW_FROM_PAGE_TIMELINE:"channel_view_from_page_timeline",CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:"channel_view_from_page_timeline_featured",CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB:"channel_view_from_page_video_tab",CHANNEL_VIEW_FROM_PAGE_HOME_HERO:"channel_view_from_page_home_hero",CHANNEL_VIEW_FROM_USER_TIMELINE:"channel_view_from_user_timeline",CHANNEL_VIEW_FROM_USER_VIDEO_TAB:"channel_view_from_user_video_tab",CHANNEL_VIEW_FROM_GROUP_TIMELINE:"channel_view_from_group_timeline",CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB:"channel_view_from_group_video_tab",CHANNEL_VIEW_FROM_VIDEO_PAGE_SPOTLIGHT:"channel_view_from_video_page_spotlight",CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_LIST:"channel_view_from_video_page_video_list",CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_TAB:"channel_view_from_video_page_video_tab",CHANNEL_VIEW_FROM_SAVED_STORY:"channel_view_from_saved_story",SAVED_STORY_INLINE:"saved_story_inline",CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:"channel_view_from_shared_with_you_story",SHARED_WITH_YOU_STORY_INLINE:"shared_with_you_story_inline",CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:"channel_view_from_latest_from_your_channels_story",LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:"latest_from_your_channels_story_inline",CHANNEL_VIEW_FROM_CHANNEL_PIVOT:"channel_view_from_channel_pivot",CHANNEL_PIVOT_INLINE:"channel_pivot_inine",CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:"channel_view_from_recommended_channel_story",RECOMMENDED_CHANNEL_STORY_INLINE:"recommended_channel_story_inline",CHANNEL_VIEW_FROM_VIDEO_HOME:"channel_view_from_video_home",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_CHANNEL_SEE_ALL:"video_home_channel_see_all",SOCIAL_PLAYER_UP_NEXT:"social_player_up_next",CHANNEL_VIEW_FROM_CASTING:"channel_view_from_casting",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_HERO:"video_home_hero",FEED_SURVEY_SWIPE:"feed_survey_swipe",FEED_PIVOTS_INLINE:"feed_pivots_inline",CHANNEL_VIEW_FROM_FEED_PIVOTS:"channel_view_from_feed_pivots",VIDEO_SETS_CACHE_REFRESH:"video_sets_cache_refresh",VIDEO_SETS_CACHE_CHECK:"video_sets_cache_check",DUMMY_STORY_RECOMMENDED_VIDEOS:"dummy_story_recommended_videos",DUMMY_STORY_FRIENDS_ENJOYING:"dummy_story_friends_enjoying",LIVE_EVENT_VIDEO_SET:"live_event_video_set",LIVE_VIDEOS_SET:"live_videos_set",SINGLE_CREATOR_VIDEO_SET:"single_creator_video_set",FRT_TOOL:"frt_tool",DUMMY_STORY_FRIENDS_ENJOYING_NOW:"dummy_story_friends_enjoying_now",DUMMY_STORY_DUMMY_ACTION:"dummy_story_dummy_action",OCULUS_VIDEO:"oculus_video",TRENDING_DEMOGRAPHICS_LIVE:"trending_demographics_live",LIVE_MAP:"live_map",UNCONNECTED_LIVE_VIDEO:"unconnected_live_video",PROFILE_VIDEO_GALLERY:"profile_video_gallery",CHANNEL_VIEW_FROM_PLAYLIST:"channel_view_from_playlist",OCULUS_SOCIAL_HUB:"oculus_social_hub",AKIRA:"akira",IS_LIVE_VIDEO_CHAINING:"is_live_video_chaining",IS_LIVE_VIDEO_CHAINING_OTHERS:"is_live_video_chaining_others",VIDEO_CREATOR_CHAINING:"video_creator_chaining",TAHOE:"tahoe",LIVING_ROOM:"living_room",SHOWS_COVER_TRAILER:"shows_cover_trailer",SHOWS_EPISODES_TAB:"shows_episodes_tab",SHOWS_PLAYLISTS_TAB:"shows_playlists_tab",SHOWS_HOME_TAB:"shows_home_tab",SHOWS_MORE_VIDEOS_TAB:"shows_more_videos_tab",SHOW_EPISODE_FEED_RECOMMENDATIONS:"show_episode_feed_recommendations",PARENT_PAGE_TIMELINE:"parent_page_timeline",WATCH_WATCHLIST_TAB:"watch_watchlist_tab",WATCH_FEED_TAB:"watch_feed_tab",WATCH_INJECTION:"watch_injection",WATCH_TOPIC_FEED:"watch_topic_feed",WATCH_SECTION_SEE_ALL:"watch_section_see_all",SOCIAL_PLAYER_FROM_VIDEO_HOME:"social_player_from_video_home",WNS:"wns",EXPLORE_FEED_DEEP_DIVE:"explore_feed_deep_dive",VOYAGER:"voyager",UNKNOWN:"unknown"})}),null);
__d("Dimensions",[],(function(a,b,c,d,e,f){"use strict";a={get:function(a){return{fontScale:1,height:550,width:310,scale:2.5}}};e.exports=a}),null);
__d("PixelRatio",["Dimensions"],(function(a,b,c,d,e,f){"use strict";var g={get:function(){return b("Dimensions").get("window").scale},getFontScale:function(){return b("Dimensions").get("window").fontScale||g.get()},getPixelSizeForLayoutSize:function(a){return Math.round(a*g.get())},roundToNearestPixel:function(a){var b=g.get();return Math.round(a*b)/b},startDetecting:function(){}};e.exports=g}),null);