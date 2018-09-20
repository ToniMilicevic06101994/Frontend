if (self.CavalryLogger) { CavalryLogger.start_js(["Lh3HQ"]); }

__d("ChannelConnectionEvents",[],(function(a,b,c,d,e,f){e.exports={CONNECTED:"chat-connection/connected",RECONNECTING:"chat-connection/reconnecting",SHUTDOWN:"chat-connection/shutdown",MUTE_WARNING:"chat-connection/mute",UNMUTE_WARNING:"chat-connection/unmute"}}),null);
__d("ChannelConnection",["Arbiter","ArbiterMixin","ChannelConnectionEvents","ChannelConstants","ChannelManager","JSLogger","Run","SystemEvents","Visibility","clearTimeout","mixin","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("JSLogger").create("channel_connection"),i=null,j=null,k=null,l=null,m=0;b("ChannelManager").startChannelManager();c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.CONNECTED=b("ChannelConnectionEvents").CONNECTED,this.RECONNECTING=b("ChannelConnectionEvents").RECONNECTING,this.SHUTDOWN=b("ChannelConnectionEvents").SHUTDOWN,this.MUTE_WARNING="chat-connection/mute",this.UNMUTE_WARNING="chat-connection/unmute",this.unmuteWarning=p,c}a.prototype.disconnected=function(){"use strict";return l===n.SHUTDOWN||l===n.RECONNECTING&&!j&&m>1};a.prototype.isShutdown=function(){"use strict";return l===n.SHUTDOWN};a.prototype.reconnect=function(a){"use strict";if(b("ChannelManager").state==="ping"||b("ChannelManager").state==="pull"||b("ChannelManager").isShutdown())return;h.log("reconnect",{now:a});n.inform(n.RECONNECTING,0);a?(i!==null&&(b("clearTimeout")(i),i=null),b("ChannelManager").enterState("ping!")):i||(i=b("setTimeoutAcrossTransitions")(function(){b("ChannelManager").enterState("ping!"),i=null},b("ChannelConstants").CHANNEL_MANUAL_RECONNECT_DEFER_MSEC));b("ChannelManager").resetDelay()};a.prototype.mockAfterLoad=function(){"use strict";t(),u()};var n=new a();b("Run").onBeforeUnload(function(){});function o(){j&&(b("clearTimeout")(j),j=null)}function p(){o(),h.log("unmute_warning"),n.inform(n.UNMUTE_WARNING)}function q(a){o(),j=b("setTimeoutAcrossTransitions")(p,a),h.log("mute_warning",{time:a}),n.inform(n.MUTE_WARNING)}function r(){k&&(b("clearTimeout")(k),k=null)}function s(a,c){__p&&__p();r();if(a===b("ChannelConstants").ON_ENTER_STATE&&(c.nextState||c.state)==="pull"){if(l!==n.CONNECTED){h.log("connected");var d=!l;l=n.CONNECTED;m=0;n.inform(n.CONNECTED,{init:d})}}else a===b("ChannelConstants").ON_ENTER_STATE&&((c.nextState||c.state)==="ping"||!c.nextState&&c.state==="idle")?k=b("setTimeoutAcrossTransitions")(function(){var b=null;c.state==="idle"&&!c.nextState||(b=c.delay||0);h.log("reconnecting",{delay:b});n.disconnected()&&h.log("reconnecting_ui",{delay:b});l=n.RECONNECTING;c.state==="idle"&&m++;m>1?n.inform(n.RECONNECTING,b):!c.nextState&&c.state==="idle"&&s(a,c)},500):a===b("ChannelConstants").ON_SHUTDOWN&&(h.log("shutdown",{reason:c.reason}),l=n.SHUTDOWN,m=0,n.inform(n.SHUTDOWN,c.reason))}function t(){b("ChannelManager").isShutdown()?s(b("ChannelConstants").ON_SHUTDOWN,b("ChannelManager")._shutdownHint):s(b("ChannelConstants").ON_ENTER_STATE,{state:b("ChannelManager").state,nextState:b("ChannelManager").nextState,delay:0}),b("Visibility").addListener(b("Visibility").VISIBLE,n.reconnect)}b("Run").onAfterLoad(t);function u(){b("Arbiter").subscribe([b("ChannelConstants").ON_ENTER_STATE,b("ChannelConstants").ON_SHUTDOWN],s),b("Arbiter").subscribe(b("ChannelConstants").ATTEMPT_RECONNECT,function(){n.disconnected()&&n.reconnect()}),b("SystemEvents").subscribe(b("SystemEvents").TIME_TRAVEL,function(){n.reconnect(),q(b("ChannelConstants").MUTE_WARNING_TIME_MSEC)}),b("Run").onBeforeUnload(r,!1)}b("Run").onAfterLoad(u);b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.channel_connected=!n.disconnected()});e.exports=n}),3);
__d("WorkDoNotDisturbSettingsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:WorkDoNotDisturbSettingsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:WorkDoNotDisturbSettingsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WorkDoNotDisturbSettingsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setOption=function(a){this.$1.option=a;return this};a.prototype.setSource=function(a){this.$1.source=a;return this};c={event:!0,option:!0,source:!0};e.exports=a}),null);
__d("MNCommerceActionTypes",["keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirrorRecursive")({RECEIPT:{LOADED:null,LOAD_ERROR:null,RELOAD:null},SHIPMENT:{LOADED:null,LOAD_ERROR:null,RELOAD:null},DIALOG:{SHOW:null,HIDE:null},RETAIL_ITEM:{LOADED:null,LOAD_ERROR:null,RELOAD:null},PROMOTION_STATE:{LOADED:null,LOAD_ERROR:null,RELOAD:null},TRANSACTION_INVOICE:{LOADED:null,LOAD_ERROR:null,RELOAD:null},BOT_REVIEW_STATE:{LOADED:null,LOAD_ERROR:null,RELOAD:null}});e.exports=a}),null);
__d("WorkChatCustomMenuItem",["cx","CSS","DOM","MenuItem","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=["href","rel","ajaxify","target","accesskey"];function j(a,c){var d={};i.forEach(function(a){c[a]&&(d[a]=c[a])});b("DOM").setAttributes(a,d)}c=babelHelpers.inherits(a,b("MenuItem"));h=c&&c.prototype;function a(a){h.constructor.call(this,a)}a.prototype._renderItemContent=function(){__p&&__p();this._anchor=b("DOM").create(this._data.renderas==="label"?"label":"a",{className:"_54nc"+(this._data.icon?" _54nu":"")});if(this._data.children){var a=this._data.icon?b("React").cloneElement(this._data.icon,{className:b("joinClasses")(this._data.icon.props.className,"mrs")}):null;b("ReactDOM").render(b("React").createElement("div",null,a,b("React").createElement("div",{className:"_54nh"},this._data.children)),this._anchor);this._data.label=this._anchor.innerText||this._anchor.textContent}else{a=b("DOM").create("div",null,b("DOM").create("div",{className:"_54nh"},this._data.markup||this._data.label));this._data.icon&&b("DOM").prependContent(a,this._data.icon);b("DOM").setContent(this._anchor,a)}this._data.href||(this._data.href="#");this.isDisabled()||j(this._anchor,this._data);b("DOM").setAttributes(this._anchor,this.__getAttributesFromData());this._anchor.setAttribute("role",this._ARIARole);return this._anchor};a.prototype.render=function(){var a=h.render.call(this);b("CSS").addClass(a,"_1ydp");this._disabled&&b("CSS").addClass(a,"_5arm");return a};e.exports=a}),null);
__d("MNCommerceDialogStateStore",["FluxStore","MessengerDispatcher","MNCommerceActionTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("MessengerDispatcher")),this.$MNCommerceDialogStateStore1=null,this.$MNCommerceDialogStateStore2=null}a.prototype.__onDispatch=function(a){__p&&__p();var c=a.type;switch(c){case b("MNCommerceActionTypes").DIALOG.SHOW:this.$MNCommerceDialogStateStore1=a.dialogContainer;this.$MNCommerceDialogStateStore2=a.state;this.__emitChange();break;case b("MNCommerceActionTypes").DIALOG.HIDE:this.$MNCommerceDialogStateStore1=null;this.$MNCommerceDialogStateStore2=null;this.__emitChange();break}};a.prototype.getDialogContainer=function(){return this.$MNCommerceDialogStateStore1};a.prototype.getState=function(){return this.$MNCommerceDialogStateStore2};a.__moduleID=e.id;e.exports=new a()}),null);
__d("PureStoreBasedStateMixin",["invariant","FluxMixinLegacyInstrumentation","StoreBasedStateMixinHelper","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("FluxMixinLegacyInstrumentation").addInstrumentation({_callCalculateState:function(){return this.constructor.calculateState()},getInitialState:function(){this._onInitialStateForInstrumentation&&this._onInitialStateForInstrumentation();return this._callCalculateState()},UNSAFE_componentWillMount:function(){__p&&__p();this.constructor.calculateState||g(0,undefined);this._recalculateStateID=null;var a=function(){if(this.isMounted()){var a=this._collectStoreEmitsForInstrumentation?this._collectStoreEmitsForInstrumentation():null,b=this._callCalculateState();this.setState(this._logStoreEmitsForInstrumentation!=null?function(){a!=null&&this._logStoreEmitsForInstrumentation&&this._logStoreEmitsForInstrumentation(a);return b}.bind(this):b)}this._recalculateStateID=null}.bind(this);this._mixin=new(b("StoreBasedStateMixinHelper"))(c);this._mixin.subscribeCallback(function(){this._recalculateStateID===null&&(this._recalculateStateID=b("setImmediate")(a))}.bind(this),this._addStoreEmitForInstrumentation)},componentWillUnmount:function(){this._mixin.release(),this._mixin=null}})}.bind(this);e.exports=a}),null);
__d("MNCommerceDialogContainer.react",["MNCommerceDialogStateStore","PureStoreBasedStateMixin","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"MNCommerceDialogContainer",mixins:[b("PureStoreBasedStateMixin")(b("MNCommerceDialogStateStore"))],statics:{calculateState:function(){var a=b("MNCommerceDialogStateStore").getDialogContainer();return{dialogContainer:a}}},render:function(){var a=this.state.dialogContainer;return!a?null:b("React").createElement(a,null)}});e.exports=a}),null);
__d("P2PDialogStore",["EventEmitter","P2PActionConstants","P2PDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={};c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){g.constructor.call(this),b("P2PDispatcher").register(this.onEventDispatched.bind(this)),h={dialogClass:null,dialogProps:null}}a.prototype.getState=function(){return h};a.prototype.onEventDispatched=function(a){__p&&__p();var c=a.type;a=a.data;switch(c){case b("P2PActionConstants").DIALOG_SHOWN:h.dialogClass=a.dialogClass;h.dialogProps=a.dialogProps;this.emit("change");break;case b("P2PActionConstants").DIALOG_CLOSED:h.dialogClass=null;h.dialogProps=null;this.emit("change");break}};e.exports=new a()}),null);
__d("P2PDialogContainer.react",["P2PDialogStore","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state=b("P2PDialogStore").getState(),this.onDialogStoreChange=function(){this.setState(b("P2PDialogStore").getState())}.bind(this),c}a.prototype.componentDidMount=function(){this.dialogStoreSub=b("P2PDialogStore").addListener("change",this.onDialogStoreChange)};a.prototype.componentWillUnmount=function(){this.dialogStoreSub&&(this.dialogStoreSub.remove(),this.dialogStoreSub=null)};a.prototype.render=function(){if(!this.state.dialogClass)return null;var a=this.state.dialogClass;return b("React").createElement(a,babelHelpers["extends"]({},this.state.dialogProps,{key:"dialog"}))};e.exports=a}),null);
__d("PagesPlatformActionConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BOOKING_REQUEST_ACCEPT_ERROR:"booking_request_accept_error",BOOKING_REQUEST_ACCEPT_INITIATED:"booking_request_accept_initiated",BOOKING_REQUEST_ACCEPTED:"booking_request_accepted",BOOKING_REQUEST_CREATED:"booking_request_created",BOOKING_REQUEST_DECLINE_ERROR:"booking_request_decline_error",BOOKING_REQUEST_DECLINE_INITIATED:"booking_request_decline_initiated",BOOKING_REQUEST_DECLINED:"booking_request_declined",BOOKING_REQUEST_RESCHEDULE_INITIATED:"booking_request_reschedule_initiated",BOOKING_REQUEST_RESCHEULED:"booking_request_reschedule",DIALOG_CLOSED:"dialog_closed",DIALOG_SHOWN:"dialog_shown",NEW_TIME_CHOSEN:"new_time_chosen"});e.exports=a}),null);
__d("PagesPlatformRequestDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Dispatcher_DEPRECATED"))()}),null);
__d("PagesPlatformDialogStore",["EventEmitter","PagesPlatformActionConstants","PagesPlatformRequestDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={};c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){g.constructor.call(this),b("PagesPlatformRequestDispatcher").register(this.onEventDispatched.bind(this)),h={dialogClass:null,dialogProps:null}}a.prototype.getState=function(){return h};a.prototype.onEventDispatched=function(a){__p&&__p();var c=a.type;a=a.data;switch(c){case b("PagesPlatformActionConstants").DIALOG_SHOWN:h.dialogClass=a.dialogClass;h.dialogProps=a.dialogProps;this.emit("change");break;case b("PagesPlatformActionConstants").DIALOG_CLOSED:h.dialogClass=null;h.dialogProps=null;this.emit("change");break}};e.exports=new a()}),null);
__d("PagesPlatformDialogContainer.react",["PagesPlatformDialogStore","PureStoreBasedStateMixin","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"PagesPlatformDialogContainer",mixins:[b("PureStoreBasedStateMixin")(b("PagesPlatformDialogStore"))],statics:{calculateState:function(){return b("PagesPlatformDialogStore").getState()}},render:function(){if(!this.state.dialogClass)return null;var a=this.state.dialogClass;return b("React").createElement(a,babelHelpers["extends"]({},this.state.dialogProps,{key:"dialog"}))}});e.exports=a}),null);
__d("PhotoUtils",["Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getImagesFromData:function(a){var b=[];for(var c in a)c.indexOf("image")===0&&b.push(a[c]);return b},getFBIDFromData:function(a){return a&&a.id},getOriginalImageFromData:function(a){return a.original||a.download_image},getDownloadURLFromData:function(a){a=this.getOriginalImageFromData(a);if(!a)return null;a=new(b("URI"))(a.uri);a.addQueryData({dl:1});return a},getPermalinkFromData:function(a){return a.permalink},canViewerMakeCoverPhoto:function(a){return!!a.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function(a){return new(b("URI"))("/profile.php").addQueryData({preview_cover:g.getFBIDFromData(a)})},preload:function(a,c,d){var e=a.getDimensions();for(var f=0;f<c.length;++f){var g=e.getBestFitImageFromPhoto(c[f],e.getMaxStageDimensions()),h=new Image();d&&b("Event").listen(h,"load",d.bind(null,c[f]));a.getLogger().log(g.uri);h.src=g.uri}}};e.exports=g}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";if(!this.props.open)return null;var a="_n3";this.props.className&&(a+=" "+this.props.className);return b("React").createElement(b("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},b("React").createElement("div",{className:a,onClick:this.props.onClick,role:"presentation"},this.props.children))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$3=function(){this.setState({loading:!1})}.bind(this),this.state={loading:!0}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.src!==this.props.src&&this.setState({loading:!0})};a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:"_4-od"},this.$1(),this.$2())};a.prototype.$1=function(){"use strict";return!this.state.loading?null:b("React").createElement(b("XUISpinner.react"),{className:"_enh",size:"large"})};a.prototype.$2=function(){"use strict";return b("React").createElement("div",{className:this.state.loading?"_eni":""},b("React").createElement(b("Image.react"),{onLoad:this.$3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};e.exports=a}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:a.object.isRequired,useWidth:a.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function(){return{currentActiveSection:this.sections.NONE,active:!0}},componentDidMount:function(){this._onMouseEnter()},componentWillUnmount:function(){this.props.fadeInNOut&&clearTimeout(this.timer)},_onMouseMove:function(event){var a=b("ReactDOM").findDOMNode(this),c=b("Vector").getEventPosition(event.nativeEvent),d=b("Vector").getElementPosition(a);a=this.props.useWidth?this.props.stageDimensions.x:b("Vector").getElementDimensions(a).x;this.props.fadeInNOut&&(this._isMouseOverActionBars(c)?clearTimeout(this.timer):this._onMouseEnter());c=c.x-d.x;d=c/a;b("Locale").isRTL()?c=d>1-this.PAGE_TO_PREV_PERCENTAGE:c=d<this.PAGE_TO_PREV_PERCENTAGE;c?this.setState({currentActiveSection:this.sections.BACKWARD}):this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function(event){var a=this.state.currentActiveSection==this.sections.FORWARD,c=event.target;b("Parent").bySelector(c,"._51an")||this.props.onClick&&this.props.onClick(a,event)},_isMouseOverActionBars:function(a){return a.y<70||a.y>this.props.stageDimensions.y-70},_onMouseEnter:function(){this.setState({active:!0}),this.props.fadeInNOut&&(clearTimeout(this.timer),this.timer=setTimeout(this._onMouseLeave,1e3))},_onMouseLeave:function(){this.setState({active:!1})},makeActive:function(){this._onMouseEnter()},render:function(){var a="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");this.props.className&&(a=b("joinClasses")(a,this.props.className));var c={};this.props.stageDimensions&&(c={height:this.props.stageDimensions.y},this.props.useWidth&&(c.width=this.props.stageDimensions.x));return b("React").createElement("div",{className:a,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:c},this.props.children,b("React").createElement("div",{className:"_4-og"},b("React").createElement("span",{className:"_4-oh"}),this.props.media,b("React").createElement("div",{className:"_4-oi"})))}});e.exports=c}),null);
__d("DialogFitHeight",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractDialogFitHeight"));g&&g.prototype;a.prototype.getHeightProperty=function(){"use strict";return"height"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("StickersStateStore",["FluxReduceStore","StickersActions","StickersConfig","StickersDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return b("immutable").Map({recentStickers:[],recentStickersLoaded:!1,showFlyout:!1,storePackID:null,threadID:null,trayLoaded:!1,trayPackID:null})};a.prototype.reduce=function(a,c){__p&&__p();var d=c;c=b("StickersActions").Types;switch(d.type){case c.ADD_RECENT_STICKER:var e=[d.sticker];a.get("recentStickers").forEach(function(a){if(a.id===d.sticker.id)return;e.push(a)});return a.set("recentStickers",e.splice(0,b("StickersConfig").max_mru_stickers));case c.HIDE_FLYOUT:return a.set("showFlyout",!1);case c.LOAD_RECENT_STICKERS:return a.set("recentStickersLoaded",!0).set("recentStickers",d.stickers);case c.SELECT_STORE_PACK:return a.set("storePackID",d.packID);case c.SELECT_TRAY_PACK:return a.set("trayPackID",d.packID).set("trayLoaded",!0);case c.SHOW_FLYOUT:return a.set("showFlyout",!0).set("threadID",d.threadID);case c.TRAY_LOADED:return a.set("trayLoaded",!0);default:return a}};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("StickersDispatcher"))}),null);
__d("StickersStoreController",["cx","Bootloader","DialogFitHeight","DOM","LayerAutoFocus","LayerFadeOnHide","LayerHideOnEscape","PureStoreBasedStateMixin","React","ReactDOM","StickersActions","StickersDispatcher","StickersStateStore","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","isSocialPlugin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=688,i=320,j=null,k=b("React").createClass({displayName:"StoreLayer",mixins:[b("PureStoreBasedStateMixin")(b("StickersStateStore"))],propTypes:{isComposer:a.bool,onToggle:a.func.isRequired,shown:a.bool.isRequired},getDefaultProps:function(){return{isComposer:!1}},statics:{calculateState:function(){return{packID:b("StickersStateStore").getState().get("storePackID")}}},getInitialState:function(){return{renderStore:function(){return b("React").createElement("div",{className:"_5r5e"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))}}},UNSAFE_componentWillMount:function(){b("StickersDispatcher").explicitlyRegisterStores([b("StickersStateStore")])},shouldComponentUpdate:function(a){return!!a.shown},componentDidMount:function(){b("Bootloader").loadModules(["StickersStore.react","react-relay/classic/container/RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(a,c,d,e){this.setState({renderStore:function(){var f=this.state.packID?new e({packID:this.state.packID}):new d();return b("React").createElement(c,{Component:a,route:f,renderFetched:function(c){return b("React").createElement(a,babelHelpers["extends"]({},c,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),"StickersStoreController")},_onToggle:function(a){b("requestAnimationFrame")(function(){return this.props.onToggle(a)}.bind(this))},render:function(){var a=b("isSocialPlugin")()&&document.body.offsetWidth<h?i:h;return b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogFitHeight:b("DialogFitHeight"),LayerAutoFocus:b("LayerAutoFocus"),LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},onToggle:this._onToggle,shown:this.props.shown,width:a},b("React").createElement(b("XUIDialogBody.react"),{className:"_5rq- autofocus"},this.state.renderStore()))}}),l=function(a){j||(j=b("DOM").create("div"),b("DOM").appendContent(document.body,j)),b("ReactDOM").render(b("React").createElement(k,{isComposer:a,onToggle:n,shown:!0}),j)},m=function(){if(!j)return;b("ReactDOM").render(b("React").createElement(k,{shown:!1,onToggle:n}),j)},n=function(a){a?l():m()};c={showStore:function(a,c){b("StickersActions").selectStorePack(a),l(!!c)}};e.exports=c}),null);
__d("FBPaymentsDialogStore",["FBPaymentsDialogActions","FBPaymentsDispatcher","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("FBPaymentsDispatcher")),this.$FBPaymentsDialogStore1={dialogClass:null,dialogProps:null}}a.prototype.__onDispatch=function(a){var c=a.type;a=a.data;switch(c){case b("FBPaymentsDialogActions").types.SHOW_DIALOG:this.$FBPaymentsDialogStore1={dialogClass:a.dialogClass,dialogProps:a.dialogProps};this.__emitChange();break;case b("FBPaymentsDialogActions").types.HIDE_DIALOG:this.$FBPaymentsDialogStore1={dialogClass:null,dialogProps:null};this.__emitChange();break}};a.prototype.getState=function(){return this.$FBPaymentsDialogStore1};a.__moduleID=e.id;e.exports=new a()}),null);
__d("FBPaymentsDialogContainer.react",["FBPaymentsDialogStore","FBPaymentsDispatcher","FluxContainer","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.calculateState=function(){return b("FBPaymentsDialogStore").getState()};a.getStores=function(){return[b("FBPaymentsDialogStore")]};a.prototype.UNSAFE_componentWillMount=function(){b("FBPaymentsDispatcher").explicitlyRegisterStore(b("FBPaymentsDialogStore"))};a.prototype.render=function(){if(!this.state.dialogClass)return null;var a=this.state.dialogClass;return b("React").createElement(a,babelHelpers["extends"]({},this.state.dialogProps,{key:"dialog"}))};function a(){g.apply(this,arguments)}e.exports=b("FluxContainer").create(a)}),null);
__d("WorkNuxID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DO_NOT_DISTURB_PROMOTION_NUX_ID:6237,WORK_CHAT_DOWNLOAD_UPSELL_BANNER:5468})}),null);
__d("WorkUserDoNotDisturbSettingsEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",TURN_OFF:"turn_off",TURN_ON:"turn_on"})}),null);
__d("WorkUserDoNotDisturbSettingsSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BLUE_BAR_MODERN_MENU:"blue_bar_modern_menu",BOOKMARK_NAV_MENU:"bookmark_nav_menu",WORKPLACE_CHAT_MENU:"workplace_chat_menu"})}),null);
__d("create-react-class",["create-react-class/factory","react"],(function(a,b,c,d,e,f){"use strict";if(typeof b("react")==="undefined")throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");a=new(b("react").Component)().updater;e.exports=b("create-react-class/factory")(b("react").Component,b("react").isValidElement,a)}),null);
__d("createReactClass_DEPRECATED",["create-react-class"],(function(a,b,c,d,e,f){"use strict";e.exports=b("create-react-class")}),null);