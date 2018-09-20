if (self.CavalryLogger) { CavalryLogger.start_js(["GUp1N"]); }

__d("FBRTCCallabilityStore",["FBRTCDispatcher","RTCCallabilityStore"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("RTCCallabilityStore"))(b("FBRTCDispatcher"))}),null);
__d("ChatVideoCallButton.react",["cx","fbt","invariant","Bootloader","ChatConfig","CurrentUser","FantaAvailableStatus","FBIDCheck","FBRTCCallabilityStore","FBRTCCore","ImmutableObject","Keys","LayerFadeOnHide","Link.react","M4IconCamcorder.bs","M4IconPhone.bs","MercuryIDs","MessengerParticipants.bs","RTWebLoggingCallType","RTWebLoggingSurface","RTWebUserActionLogger","gkx","immutable","MercuryThreadIDMap","MessengerRTCFunnelLogger","ReactComponentWithPureRenderMixin","React","RTCCallState","TrackingNodes","FBRTCLogger","VideoCallTypedLogger","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("M4IconCamcorder.bs").jsComponent,k=b("M4IconPhone.bs").jsComponent,l=b("MercuryThreadIDMap").get(),m=b("FBRTCLogger").Trigger;a=b("React").PropTypes;var n=b("ChatConfig").get("chat_tab_m4_header"),o={isCallable:!1,user:null};c=b("React").createClass({displayName:"ChatVideoCallButton",mixins:[b("ReactComponentWithPureRenderMixin")],_subscription:null,_rtcStoreSubscription:null,propTypes:{isAudio:a.bool,isGroupChat:a.bool,onRTCNuxCloseButtonClick:a.func.isRequired,rtcNuxShown:a.bool.isRequired,threadID:a.string,thread:a.object,viewer:a.string.isRequired,shown:a.bool,rtcCallData:a.object,color:a.string},getDefaultProps:function(){return{shown:!0,rtcCallData:{call_state:"NO_ONGOING_CALL"}}},getInitialState:function(){return babelHelpers["extends"]({},o)},componentDidMount:function(){var a=this.props,c=a.isAudio;a=a.isGroupChat;a=[b("RTWebUserActionLogger").getCallType(a),b("RTWebUserActionLogger").getAudioVideoComponent(c)];c=a[0];a=a[1];b("RTWebUserActionLogger").logPreCallImpression({callType:c,surface:b("RTWebLoggingSurface").CHAT_TAB,component:a});this.setState({isCallable:this._getIsCallable(),user:this._computeParticipant()});this._rtcStoreSubscription=b("FBRTCCallabilityStore").addListener(function(a){this.setState({isCallable:this._getIsCallable(),user:this._computeParticipant()})}.bind(this))},componentDidUpdate:function(){if(!this._subscription){var a=this._getParticipantID();this.state.user&&this.state.user.id!==a&&this.setState({user:this._computeParticipant()})}a=this._getIsCallable();a!==this.state.isCallable&&this.setState({isCallable:a})},componentWillUnmount:function(){this._subscription&&b("MessengerParticipants.bs").removeCallback(this._subscription),this._rtcStoreSubscription&&this._rtcStoreSubscription.remove()},_getParticipantID:function(){var a=b("MercuryIDs").getUserIDFromThreadID(this.props.threadID);if(a===this.props.viewer||!b("FBIDCheck").isUser_deprecated(a))return null;a&&b("FBIDCheck").isUser_deprecated(a)||i(0,undefined);return b("MercuryIDs").getParticipantIDFromUserID(a)},_computeParticipant:function(){var a=this._getParticipantID(),c=null;if(a){var d=b("MessengerParticipants.bs").getNow(a);this._subscription&&b("MessengerParticipants.bs").removeCallback(this._subscription);d?(this._subscription=null,c=d):this._subscription=b("MessengerParticipants.bs").getMulti([a],function(b){this._subscription=null,this.setState({user:b[a]})}.bind(this))}return c},_getIsCallable:function(){if(!this.props.threadID)return!1;if(this.props.isGroupChat)return!0;var a=b("MercuryIDs").getUserIDFromThreadID(this.props.threadID);if(a===this.props.viewer||!b("FBIDCheck").isUser_deprecated(a))return!1;a&&b("FBIDCheck").isUser_deprecated(a)||i(0,undefined);return!b("FBRTCCallabilityStore").isBlocked(a,this.props.thread)&&b("FBRTCCallabilityStore").isCallable(a,this.props.thread)},getTooltipLabel:function(){if(this.props.isGroupChat)return this.props.isAudio?h._("Start a group call"):h._("Start a group video chat");var a=this.state.user;return!a||!a.fbid?undefined:this.props.isAudio?b("FBRTCCallabilityStore").voiceCallButtonTooltip(a.fbid,a.short_name,this.state.isCallable,this.props.thread):b("FBRTCCallabilityStore").callButtonTooltip(a.fbid,a.short_name,this.state.isCallable,this.props.thread)},render:function(){if(!this.props.shown||n&&!this.state.isCallable)return null;var a=b("TrackingNodes").getTrackingInfo(this.props.isAudio?b("TrackingNodes").types.VIDEOCHAT:b("TrackingNodes").types.VOICECHAT),c=JSON.stringify({videochat:"call_clicked_bhat_tab"}),d=this.props.threadID&&b("FantaAvailableStatus").isAvailable(this.props.thread,this.props.threadID);d=d&&this.state.isCallable;return b("React").createElement("div",null,b("React").createElement(b("Link.react"),{"aria-label":this.getTooltipLabel(),className:"button _3olv"+(!n&&this.props.isAudio?" _2fpc":"")+(!n&&!this.props.isAudio?" _2fpd":"")+(this.state.isCallable?" enabled":""),"data-ft":a,"data-gt":c,"data-hover":"tooltip","data-tooltip-content":this.getTooltipLabel(),"data-tooltip-position":"above",onClick:this._handleClick,onKeyUp:this._handleKeyUp,ref:"button"},n?this.props.isAudio?b("React").createElement(k,{color:this.props.color,filled:!0}):b("React").createElement(j,{color:this.props.color,filled:!0}):null),b("React").createElement("div",{className:d&&!this.props.isAudio?"_18pe":""}),b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"right",behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},contextRef:function(){return this.refs.button}.bind(this),onCloseButtonClick:this.props.onRTCNuxCloseButtonClick,shown:this.props.rtcNuxShown,width:"auto"},h._("You can now make a group call.")))},_handleClick:function(a){a.preventDefault(),this._startCall()},_handleKeyUp:function(a){a.preventDefault();if(a.keyCode!==b("Keys").RETURN)return;a.target&&(a.target instanceof HTMLElement||i(0,undefined),a.target.blur());this._startCall()},_startCall:function(){b("MessengerRTCFunnelLogger").startFunnel("ChatTab");if(!this.state.isCallable){b("MessengerRTCFunnelLogger").endFunnel("callee_not_callable");return}this.props.onRTCNuxCloseButtonClick();this._initiateCall()},_initiateCall:function(){__p&&__p();var a=this.props,c=a.isAudio,d=a.isGroupChat;a=a.threadID;!a&&i(0,undefined);if(d){d=b("RTWebUserActionLogger").getAudioVideoComponent(c);b("RTWebUserActionLogger").logPreCallClick({callType:b("RTWebLoggingCallType").MW,surface:b("RTWebLoggingSurface").CHAT_TAB,component:d});b("MercuryIDs").isLocalThread(a)?l.getServerIDFromClientID(a,function(a){return this._initiateGroupCall(a)}.bind(this)):(b("MessengerRTCFunnelLogger").appendAction("start_in_group_thread"),this._initiateGroupCall(b("MercuryIDs").getThreadFBIDFromThreadID(a)))}else{d=this.state.user&&this.state.user.fbid;if(!d)return;a=c?"chattab_audio_button":"chattab_video_button";b("MessengerRTCFunnelLogger").appendAction("start_in_p2p_thread");b("FBRTCCore").startOutgoingCall(d,a,!!c);new(b("VideoCallTypedLogger"))().setEvent("chat_tab_call_click").log()}},_initiateGroupCall:function(a){__p&&__p();var c=this.props,d=c.isAudio;c=c.rtcCallData;c=c?c:{};var e=c.call_state;c=c.server_info_data;if(e!=="NO_ONGOING_CALL"&&c){b("MessengerRTCFunnelLogger").appendAction("join_existing_call");b("FBRTCCore").startGroupCall({conferenceName:"GROUP:"+a,hasVideo:!d,serverInfoData:c,trigger:e!==b("RTCCallState").AUDIO_GROUP_CALL?d?m.MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_AUDIO_BUTTON:m.MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_VIDEO_BUTTON:d?m.MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_AUDIO_BUTTON:m.MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_VIDEO_BUTTON});return}b("Bootloader").loadModules(["FBRTCSupport","MessengerState.bs","MessengerParticipantsFetcher.bs","FBRTCUnsupportedBrowserMessage","MessengerRTCGroupCallParticipantsPickerDialogController"],function(c,d,e,f,g){__p&&__p();if(!c.isGroupCallWebtrcSupported()){b("MessengerRTCFunnelLogger").endFunnel("unsupported_browser");f.showForOutgoingGroupCall();return}d.getThreadMeta(b("CurrentUser").getID(),this.props.threadID,function(c){var d=c.participants?c.participants.filter(function(a){return a!==b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer)}.bind(this)).map(function(a){return b("MercuryIDs").getUserIDFromParticipantID(a)}):[];d.length>0&&e.fetch({ids:d}).done(function(d){b("MessengerRTCFunnelLogger").appendAction("render_participant_picker"),g.render({participants:b("immutable").Map(d.map(function(a){return[a.id,new(b("ImmutableObject"))(a)]})),thread:c,viewerID:this.props.viewer,trigger:this.props.isAudio?m.MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:m.MULTIWAY_THREAD_HEADER_VIDEO_BUTTON,conferenceName:"GROUP:"+a,hasVideo:!this.props.isAudio})}.bind(this))}.bind(this))}.bind(this),"ChatVideoCallButton.react")}});e.exports=c}),null);