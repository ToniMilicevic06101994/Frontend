if (self.CavalryLogger) { CavalryLogger.start_js(["AsiVU"]); }

__d("ChatOpenTab",["csx","Bootloader","ContextualThing","CurrentUser","Event","MercuryIDs","MercuryParticipantTypes","Parent","WorkplaceChatHelper","gkx","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null;b("requireWeak")("FantaTabsReactApp",function(a){return h=a});b("requireWeak")("FantaTabsSlimApp",function(a){return h=a});function i(a,c,d,e){b("Event").listen(a,"click",function(f){(l.canOpenTab()||b("CurrentUser").isWorkUser()&&b("WorkplaceChatHelper").suppressChatIfActiveOnDesktop()&&b("gkx")("AT7jinnyRPDg4OtD2DVZhvkvAcwN4UEfD67JxgYKN8ktNW7yrzWDgUhjX86ZgaJp_pMk__upuP12-9rZjDRDprZwcbUv5zDffty-rkNZ2YUXjQ"))&&(e(c,d),a.removeAttribute("ajaxify"),a.removeAttribute("rel"),f.preventDefault())})}function j(a,c,d,e){b("Event").listen(a,"click",function(a){l.canOpenTab()&&e(c,d)})}function k(a){a=b("ContextualThing").getContext(a);return a&&b("Parent").bySelector(a,"._3qw")!==null}var l={canOpenTab:function(){return h&&!h.isHidden()},listenOpenEmptyTabDEPRECATED:function(a,b){i(a,null,b,this._loadAndOpenEmptyFantaTab)},listenOpenThreadDEPRECATED:function(a,b,c){i(a,b,c,function(a,b){return this.loadAndOpenFantaTab(a,b,c)}.bind(this))},listenOpenUserTabDEPRECATED:function(a,c,d){k(a)||i(a,c,d,function(a){return this.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").USER,d)}.bind(this))},listenOpenUserTabPersistentEventDEPRECATED:function(a,c,d){k(a)||j(a,c,d,function(a){return this.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").USER,d)}.bind(this))},listenOpenPageTabDEPRECATED:function(a,c,d,e){k(a)||i(a,c,e,function(a){return this.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").PAGE,e)}.bind(this))},listenOpenPageTabPersistentEventDEPRECATED:function(a,c,d,e){k(a)||j(a,c,e,function(a){return this.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").PAGE,e)}.bind(this))},loadAndOpenFantaTab:function(a,c,d){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions"],function(e,f){if(c===b("MercuryParticipantTypes").USER||c===b("MercuryParticipantTypes").PAGE){var g=b("MercuryIDs").getThreadIDFromUserID(a);f.openTab(g,[d]);e.logUserClickOpen(d,a)}else f.openTab(a,[d]),e.logClickOpen(d,a)},"ChatOpenTab")},_loadAndOpenEmptyFantaTab:function(){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions","MessengerState.bs"],function(a,c,d){d=d.createNewLocalThreadGenerateID(b("CurrentUser").getID());c.openNewMessageTab(d,"jewel_new_message");a.logClickOpen("EmptyTab")},"ChatOpenTab")}};e.exports=l}),null);
__d("EmoticonEmojiList",[],(function(a,b,c,d,e,f){e.exports={names:{":)":"slightsmile",":-)":"slightsmile",":]":"slightsmile","=)":"smile","(:":"slightsmile","(=":"smile",":(":"frown",":-(":"frown",":[":"frown","=(":"frown",")=":"frown",";-P":"winktongue",";P":"winktongue",";-p":"winktongue",";p":"winktongue",":poop:":"poop",":P":"tongue",":-P":"tongue",":-p":"tongue",":p":"tongue","=P":"tongue","=p":"tongue","=D":"grin",":-D":"slightgrin",":D":"slightgrin",":o":"gasp",":-O":"gasp",":O":"gasp",":-o":"gasp",";)":"wink",";-)":"wink","8-)":"glasses","8)":"glasses","B-)":"glasses","B)":"glasses",">:(":"grumpy",">:-(":"grumpy",":/":"unsure",":-/":"unsure",":\\":"unsure",":-\\":"unsure","=/":"unsure","=\\":"unsure",":'(":"cry",":'-(":"cry",":\u2019(":"cry",":\u2019-(":"cry","3:)":"devil","3:-)":"devil","O:)":"angel","O:-)":"angel","0:)":"angel","0:-)":"angel",":*":"kiss",":-*":"kiss",";-*":"winkkiss",";*":"winkkiss","<3":"heart","&lt;3":"heart","\u2665":"heart","^_^":"kiki","^~^":"kiki","-_-":"expressionless",":-|":"squint",":|":"squint",">:o":"upset",">:O":"upset",">:-O":"upset",">:-o":"upset",">_<":"persevere",">.<":"persevere",'<(")':"penguin",O_O:"flushface",o_o:"flushface","0_0":"flushface",T_T:"crying","T-T":"crying",ToT:"crying","T.T":"crying","-3-":"flushkiss","'-_-":"sweating","\u2019-_-":"sweating","(y)":"like",":like:":"like","(Y)":"like","(n)":"dislike","(N)":"dislike"},emote2emojis:{slightsmile:"1f642",smile:"1f60a",frown:"1f61e",winktongue:"1f61c",poop:"1f4a9",tongue:"1f61b",slightgrin:"1f600",grin:"1f603",gasp:"1f62e",wink:"1f609",glasses:"1f60e",grumpy:"1f620",unsure:"1f615",cry:"1f622",devil:"1f608",angel:"1f607",kiss:"1f617",winkkiss:"1f618",heart:"2764",kiki:"1f60a",expressionless:"1f611",squint:"1f610",upset:"1f620",persevere:"1f623",penguin:"1f427",flushface:"1f633",crying:"1f62d",flushkiss:"1f61a",sweating:"1f613",like:"f0000",dislike:"1f44e"},symbols:{slightsmile:":)",smile:"=)",frown:":(",winktongue:";-P",poop:":poop:",tongue:":P",slightgrin:":D",grin:"=D",gasp:":o",wink:";)",glasses:"8-)",grumpy:">:(",unsure:":/",cry:":'(",devil:"3:)",angel:"O:)",kiss:":*",winkkiss:";*",heart:"<3",kiki:"^_^",expressionless:"-_-",squint:":-|",upset:">:o",persevere:">_<",penguin:'<(")',flushface:"O_O",crying:"T_T",flushkiss:"-3-",sweating:"'-_-",like:"(y)",dislike:"(n)"},regexp:/(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/,noncapturingRegexp:/(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/}}),null);
__d("MessengerHotlikeEmoji.bs",[],(function(a,b,c,d,e,f){"use strict";var g="f0000";function a(a){return a===g}f.hotlike_key=g;f.isMessengerHotlike=a}),null);
__d("Utf16",[],(function(a,b,c,d,e,f){a={decode:function(a){switch(a.length){case 1:return a.charCodeAt(0);case 2:return 65536|(a.charCodeAt(0)-55296)*1024|a.charCodeAt(1)-56320;default:return null}},encode:function(a){if(a<65536)return String.fromCharCode(a);else return String.fromCharCode(55296+(a-65536>>10))+String.fromCharCode(56320+a%1024)}};e.exports=a}),null);
__d("messengerIterateEmoji",["MessengerSupportedEmoji","ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e){__p&&__p();var f=String(a);while(f){a=b("ifRequired")("MessengerSupportedEmojiUtils",function(a){return a.getEmojiMatchObj(f)},function(){return b("MessengerSupportedEmoji").getEmojiMatchObj(f)});if(a){var g=a.offset+a.length,h=f.substr(0,a.is_supported?a.offset:g);d(h);a.is_supported&&c(a.emoji_str,a.emoji_key,e);h=f.substr(g);f=h}else break}d(f)}e.exports=a}),null);
__d("messengerIterateEmoticons",["EmoticonEmojiList"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e){var f,g,h;a=String(a);while(a){var i=b("EmoticonEmojiList").regexp.exec(a);if(i)f=i.index+i[1].length,g=a.substr(0,f),i=i[2],f=a.substr(f+i.length),h=b("EmoticonEmojiList").names[i],d(g),c(i,h,e),a=f;else break}d(a)}e.exports=a}),null);
__d("MessengerTextWithEmoticons.react",["cx","fbt","BaseTextWithDecoration.react","EmojiImageURL","EmoticonEmojiList","FBEmojiUtils","Image.react","MessengerHotlikeEmoji.bs","React","gkx","messengerIterateEmoji","messengerIterateEmoticons"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;function j(a,c,d,e){var f=e?128:16;a=!a&&!b("MessengerHotlikeEmoji.bs").isMessengerHotlike(d)?b("EmojiImageURL").getFBEmojiURL(b("FBEmojiUtils").resolveAliasFromKey(d)||d,f):b("EmojiImageURL").getMessengerURL(d,f);d=e?"_1ift _5m3a":"_1ift _2560";return b("React").createElement(b("Image.react"),{alt:c,className:d,src:a})}function k(a,c,d){var e=d?128:16,f=b("EmoticonEmojiList").emote2emojis[c],g=f?b("MessengerHotlikeEmoji.bs").isMessengerHotlike(f)?b("EmojiImageURL").getMessengerURL(f,e):b("EmojiImageURL").getFBEmojiURL(f,e):null;if(g){f=String.fromCodePoint(parseInt(f,e));e=d?"_1ift _5m3a":"_1ift _2560";return b("React").createElement(b("Image.react"),{alt:f,className:e,src:g})}d=h._("{emoticonName} emoticon",[h._param("emoticonName",c)]);return b("React").createElement("span",{"aria-label":d},a)}function l(a,b,c){return function(d,e,f){var g=function(c,d,a){e(b(c,d,a))};a(String(d),g,f,c)}}i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.shouldComponentUpdate=function(a){return a.text!==this.props.text};a.prototype.render=function(){var a=[l(b("messengerIterateEmoji"),j.bind(null,!!this.props.forceMessengerEmoji),this.props.customSize),l(b("messengerIterateEmoticons"),k,this.props.customSize)];return b("React").createElement(b("BaseTextWithDecoration.react"),babelHelpers["extends"]({},this.props,{text:this.props.text,decorators:a}))};function a(){i.apply(this,arguments)}a.propTypes={text:c.string,customSize:c.bool,forceMessengerEmoji:c.bool};e.exports=a}),null);
__d("MessengerTextWithEntities.react",["BaseTextWithEntities.react","Link.react","MessengerTextWithEmoticons.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){return a.replace(/<3\b|&hearts;/g,"\u2665")}c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){if(this.props.renderEmoticons||this.props.renderEmoji)return b("React").createElement(b("MessengerTextWithEmoticons.react"),{text:a,customSize:this.props.customSize,renderEmoticons:this.props.renderEmoticons,renderEmoji:this.props.renderEmoji});else return h(a)}.bind(this),this.$2=function(a,c){if(this.props.interpolator)return this.props.interpolator(a,c);else return b("React").createElement(b("Link.react"),{href:c.entity},a)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("BaseTextWithEntities.react"),babelHelpers["extends"]({},this.props,{aggregatedRanges:this.props.aggregatedRanges,imageRanges:this.props.imageRanges,metaRanges:this.props.metaRanges,rangeRenderer:this.$2,ranges:this.props.ranges,text:this.props.text,textRenderer:this.$1}))};e.exports=a}),null);
__d("AbstractBadge.react",["cx","invariant","React","formatNumber","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;function j(a){return parseInt(a,10)===a}i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=this.props,c=a.count,d=a.maxcount,e=a.label;a=babelHelpers.objectWithoutProperties(a,["count","maxcount","label"]);j(c)||h(0,undefined);j(d)||h(0,undefined);var f="_51lp"+(c>d?" _51lr":"")+(!this.props.allowZero&&c===0?" hidden_elem":"");e=e?b("React").createElement("span",{className:"accessible_elem","aria-hidden":c?"false":"true"},"\xa0",e):null;c=b("formatNumber").withMaxLimit(c,d);e!==null&&(c=b("React").createElement("span",{"aria-hidden":"true"},c));return b("React").createElement("span",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,f)}),c,e)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={className:c.string,count:c.number.isRequired,maxcount:c.number,label:c.string};a.defaultProps={maxcount:20};e.exports=a}),null);
__d("XUIBadge.react",["cx","AbstractBadge.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.type;a="_5ugh"+(a==="regular"?" _5ugf":"")+(a==="special"?" _5ugg":"");return b("React").createElement(b("AbstractBadge.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a),type:null}))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={type:c.oneOf(["regular","special"]),allowZero:c.bool};a.defaultProps={type:"regular"};e.exports=a}),null);
__d("ChatNotificationConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NORMAL:0,NO_USER_MESSAGE_NOTIFICATION:1})}),null);
__d("ChatBehavior",["Arbiter","ArbiterMixin","AvailableList","AvailableListConstants","ChatNotificationConstants","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("AvailableList").getWebChatNotification&&b("AvailableList").getWebChatNotification(),i=!1,j=!0;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.ON_CHANGED="changed",b}a.prototype.notifiesUserMessages=function(){"use strict";return h!==b("ChatNotificationConstants").NO_USER_MESSAGE_NOTIFICATION};a.prototype.ignoresRemoteTabRaise=function(){"use strict";return i};a.prototype.showsTabUnreadUI=function(){"use strict";return j};var k=new a();function l(){k.inform(k.ON_CHANGED)}b("AvailableList").subscribe&&b("AvailableList").subscribe(b("AvailableListConstants").ON_CHAT_NOTIFICATION_CHANGED,function(){var a=h,c=b("AvailableList").getWebChatNotification();h=c;a!=c&&l()});b("Arbiter").subscribe("chat/set_does_page_occlude_tabs",function(a,b){i=!!b,l()});b("Arbiter").subscribe("chat/set_show_tab_unread_ui",function(a,b){j=!!b,l()});e.exports=k}),null);
__d("MessengerHotLikePreviewEvents",["mixInEventEmitter"],(function(a,b,c,d,e,f){"use strict";a={START:"start",STOP:"stop",STOP_EMOJI:"stop_emoji",POP:"pop",REMOVE:"remove",FINISH_ANIMATION:"finish_animation",FINISH_EMOJI_ANIMATION:"finish_emoji_animation"};b("mixInEventEmitter")(a,{start:!0,stop:!0,stop_emoji:!0,pop:!0,remove:"remove",finish_animation:"finish_animation",finish_emoji_animation:"finish_emoji_animation"});e.exports=a}),null);
__d("MessengerHotLikeUtils",["EmojiLikeConstants","StickerAssetType","StickerConstants","XStickerAssetController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={SizeTimes:{small:1e3,medium:2e3,large:3e3},getStickerIDForTime:function(a){var c=b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID;switch(!0){case a<this.SizeTimes.small:c=b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID;break;case a<this.SizeTimes.medium:c=b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID;break;case a<this.SizeTimes.large:c=b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID;break}return c},getEmojiSizeForTime:function(a){var c=b("EmojiLikeConstants").size.SMALL;a<this.SizeTimes.small?c=b("EmojiLikeConstants").size.SMALL:a<this.SizeTimes.medium?c=b("EmojiLikeConstants").size.MEDIUM:a<this.SizeTimes.large&&(c=b("EmojiLikeConstants").size.LARGE);return c},getMetadataForHotLike:function(a){__p&&__p();var c;switch(a){case b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID:c=120;break;case b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID:c=84;break;case b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID:c=35;break;case b("EmojiLikeConstants").size.LARGE:c=64;break;case b("EmojiLikeConstants").size.MEDIUM:c=64;break;case b("EmojiLikeConstants").size.SMALL:c=32;break}return c?{height:c,width:c}:undefined},getPreviewURI:function(){return b("XStickerAssetController").getURIBuilder().setInt("sticker_id",b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID).setEnum("image_type",b("StickerAssetType").IMAGE).getURI().toString()},getURIWithID:function(a){return b("XStickerAssetController").getURIBuilder().setInt("sticker_id",a).setEnum("image_type",b("StickerAssetType").IMAGE).getURI().toString()},getCustomEmojiFromThread:function(a){return a&&a.custom_like_icon}};e.exports=a}),null);
__d("MessengerReactionsContextualDialog.react",["cx","AccessibleLayer","ContextualLayerAutoFlipHorizontal","ContextualLayerHideOnScrollOut","ContextualLayerUpdateOnScroll","LayerHideOnEscape","ReactAbstractContextualDialog","ReactLayer"],(function(a,b,c,d,e,f,g){"use strict";a=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({addedBehaviors:[b("ContextualLayerAutoFlipHorizontal"),b("ContextualLayerHideOnScrollOut"),b("ContextualLayerUpdateOnScroll"),b("LayerHideOnEscape"),b("AccessibleLayer")],displayName:"MessengerReactionsContextualDialog",shouldSetARIAProperties:!1,theme:{wrapperClassName:"_4owc"}}));e.exports=a}),null);
__d("LinkReact.bs",["Link.react","ReasonReact.bs","bs_js_null_undefined"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){d={"aria-label":b("bs_js_null_undefined").fromOption(d),"data-ft":b("bs_js_null_undefined").fromOption(f),"data-hover":b("bs_js_null_undefined").fromOption(g),"data-tooltip-content":b("bs_js_null_undefined").fromOption(h),"data-tooltip-alignh":b("bs_js_null_undefined").fromOption(i),"data-tooltip-position":b("bs_js_null_undefined").fromOption(j),className:b("bs_js_null_undefined").fromOption(e),href:b("bs_js_null_undefined").fromOption(k),linkRef:b("bs_js_null_undefined").fromOption(l),onClick:b("bs_js_null_undefined").fromOption(m),onMouseDown:b("bs_js_null_undefined").fromOption(n),onMouseEnter:b("bs_js_null_undefined").fromOption(o),role:b("bs_js_null_undefined").fromOption(p),rel:b("bs_js_null_undefined").fromOption(q),style:b("bs_js_null_undefined").fromOption(r),tabIndex:b("bs_js_null_undefined").fromOption(s),target:b("bs_js_null_undefined").fromOption(t),title:b("bs_js_null_undefined").fromOption(u)};a&&(d["aria-expanded"]=a[0]);c&&(d["aria-hidden"]=c[0]);return b("ReasonReact.bs").wrapJsForReason(b("Link.react"),d,v)}f.make=a}),null);
__d("MessengerContactActions.bs",[],(function(a,b,c,d,e,f){"use strict";a={ADD_OWNER:"ADD_OWNER",FREE_CALL:"FREE_CALL",MESSAGE:"MESSAGE",PROFILE:"PROFILE",REMOVE:"REMOVE",REMOVE_OWNER:"REMOVE_OWNER",SELECT:"SELECT"};f.actions=a}),null);
__d("MessengerReactionsUtil.bs",["EmojiFormat.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=[[128525],[128518],[128558],[128546],[128544],[128077],[128078]];var g={};c.forEach(function(a,c){g[b("EmojiFormat.bs").codeArrayToUnicode(a)]=c+1|0;return 0});function a(a,b){a=g[a];b=g[b];if(a!==undefined)if(b!==undefined)return a-b|0;else return-1;else if(b!==undefined)return 1;else return 0}d=c.map(b("EmojiFormat.bs").codeArrayToUnicode);f.reactionsSortOrder=c;f.orderMap=g;f.sortFunction=a;f.defaultReactions=d}),null);
__d("ReasonBootloadOnRender.react",["LoadOnRender.react","React","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){b("promiseDone")(this.props.loader.load(),a)}.bind(this),c}a.prototype.render=function(){"use strict";return b("React").createElement(b("LoadOnRender.react"),{placeholder:this.props.placeholder,loader:this.$1,component:this.props.component})};e.exports=a}),null);
__d("ReasonResource",["Promise","JSResourceReference","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(h,b("JSResourceReference"));g&&g.prototype;h.prototype.load=function(){return new(b("Promise"))(function(a){b("promiseDone")(this.getFullComponent(),function(b){a(b.jsComponent)})}.bind(this))};h.prototype.getFullComponent=function(){return this.__reference.load()};h.prototype.setResourceReference=function(a){this.__reference=a;return this};function h(){g.apply(this,arguments)}function a(a){return new h(a.getModuleId()).setResourceReference(a)}e.exports=a}),null);
__d("MercuryThreadTitle.react",["fbt","MercuryIDs","MercuryParticipantListRenderer","MessengerParticipants.bs","MessengerTextWithEmoticons.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.$1=!1,this.state={participantNames:""},b}a.prototype.componentDidMount=function(){this.$1=!0,this.$2(this.props)};a.prototype.componentWillUnmount=function(){this.$1=!1};a.prototype.UNSAFE_componentWillReceiveProps=function(a){this.$2(a)};a.prototype.render=function(){return b("React").createElement("span",{className:this.props.className},this.props.thread.name?this.$3():this.state.participantNames,this.props.children)};a.prototype.getTitle=function(){return this.state.participantNames};a.prototype.$3=function(){var a=this.props.thread,c=this.props.maxTitle?this.props.maxTitle<a.name.length?a.name.slice(0,this.props.maxTitle)+"...":a.name:a.name;c=b("React").createElement(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:c});return!a.unread_count||!this.props.showUnreadCount?c:this.$4(c,a.unread_count)};a.prototype.$2=function(a){__p&&__p();if(a.thread.name)return;this.setState({participantNames:""});var c=b("MercuryIDs").getParticipantIDFromUserID(a.viewer),d=a.thread.participants||[];d.length>1&&(d=d.filter(function(a){return a!=c}));b("MessengerParticipants.bs").getMulti(d,function(c){__p&&__p();if(!this.$1)return;var e=d.map(function(a){return c[a]}),f=a.thread.custom_nickname?{}:null,g=b("MessengerTextWithEmoticons.react");if(f)for(var h in a.thread.custom_nickname)f[h]=b("React").createElement(g,{renderEmoticons:!0,renderEmoji:!0,text:a.thread.custom_nickname[h]});g=new(b("MercuryParticipantListRenderer"))().setUseShortName(a.useShortName).setUseAndSeparator(a.useAndSeparator).setIsNewThread(a.isNewThread).setNickname(f).renderParticipantList(e);f=a.showUnreadCount&&a.thread.unread_count?this.$4(g,a.thread.unread_count):g;this.setState({participantNames:f})}.bind(this))};a.prototype.$4=function(a,b){return g._("{conversation-title} ({unread-count})",[g._param("conversation-title",a),g._param("unread-count",b)])};a.propTypes={className:c.string,isNewThread:c.bool,maxTitle:c.number,showUnreadCount:c.bool,thread:c.object.isRequired,useAndSeparator:c.bool,useShortName:c.bool,viewer:c.string.isRequired};a.defaultProps={isNewThread:!1,showUnreadCount:!1,useShortName:!1,useAndSeparator:!1};e.exports=a}),null);
__d("getThreadTypeNameFromThreadType",["MessagingThreadType"],(function(a,b,c,d,e,f){"use strict";function a(a){for(var c in b("MessagingThreadType"))if(b("MessagingThreadType")[c]===a)return c;return""}e.exports=a}),null);
__d("MercuryTriodeSourceUtil",["MercurySourceType","MessengerEnvironment"],(function(a,b,c,d,e,f){"use strict";a={getMercuryTriodeSource:function(){return b("MessengerEnvironment").messengerdotcom?b("MercurySourceType").MESSENGER_WEB:b("MercurySourceType").TITAN_WEB}};e.exports=a}),null);
__d("getURLRanges",["UnicodeUtils","URI","URLScraper"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c){__p&&__p();c===void 0&&(c=0);var d=a.substr(c),e=b("URLScraper").match(d);if(!e)return[];var f=e;/^[a-z][a-z0-9\-+.]+:\/\//i.test(e)||(f="http://"+e);if(!b("URI").isValidURI(f))return[];var h=d.indexOf(e);d=b("UnicodeUtils").strlen(d.substr(0,h));c+=d;h=e.length;d=[{offset:c,length:e.length,entity:{url:f}}];return d.concat(g(a,c+h))}e.exports=g}),null);
__d("P2PActions",["ChatOpenTab","ChatOpenTabEventLogger","FantaTabActions","P2PActionConstants","P2PDispatcher","ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={updateCreditCards:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARDS_UPDATED,data:a})},updateCreditCardsError:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARDS_UPDATED_ERROR})},updatePaymentMethods:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_METHODS_UPDATED,data:a})},updatePaymentMethodsError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_METHODS_UPDATED_ERROR,data:a})},ignoreCreditCardChannelEvents:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHANNEL_EVENTS_IGNORED})},allowCreditCardChannelEvents:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHANNEL_EVENTS_ALLOWED})},creditCardSaving:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_SAVING})},addCreditCard:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_ADDED,data:a})},addCreditCardError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_ADDED_ERROR,data:a})},addCreditCardErrorCleared:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_ADDED_ERROR_CLEARED})},updatePresetCreditCard:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PRESET_CREDIT_CARD_UPDATED,data:a})},updatePresetCreditCardError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PRESET_CREDIT_CARD_UPDATED_ERROR,data:a})},updateCreditCard:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_UPDATED,data:a})},updateCreditCardError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_UPDATED_ERROR,data:a})},deleteCreditCard:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_DELETED,data:a})},deleteCreditCardError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_DELETED_ERROR,data:a})},verifyCreditCard:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_VERIFIED,data:a})},verifyCreditCardError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CREDIT_CARD_VERIFIED_ERROR,data:a})},updateTransfers:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").TRANSFERS_UPDATED,data:a})},updateTransfersError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").TRANSFERS_UPDATED_ERROR,data:a})},updateNUXTransfers:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").NUX_TRANSFERS_UPDATED,data:a})},transferAdded:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").TRANSFER_ADDED,data:a})},transferAddedError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").TRANSFER_ADDED_ERROR,data:a})},transferUpdated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").TRANSFER_UPDATED,data:a})},transferUpdatedError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").TRANSFER_UPDATED_ERROR,data:a})},transferAccepted:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").TRANSFER_ACCEPTED})},transferDeclined:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").TRANSFER_DECLINED,data:a})},chatSendViewOpened:function(a){function c(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHAT_SEND_VIEW_OPENED,data:a})}b("ChatOpenTab").canOpenTab()&&!a.fromChatTab?(a.fromChatTab||(b("FantaTabActions").openTab(a.threadID),b("ChatOpenTabEventLogger").logAutoOpen("p2pAction",a.threadID)),c()):(b("ifRequired")("MessengerActions",function(b){return b.selectThread(a.threadID)}),c())},chatSendViewClosed:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHAT_SEND_VIEW_CLOSED,data:a})},binNumberValidated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").BIN_NUMBER_VALIDATED,data:a})},binNumberValidatedError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").BIN_NUMBER_VALIDATED_ERROR,data:a})},friendsListUpdated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").FRIENDS_LIST_UPDATED,data:a})},userEligibilityUpdated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").USER_ELIGIBILITY_UDPATED,data:a})},showDialog:function(a,c){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").DIALOG_SHOWN,data:{dialogClass:a,dialogProps:c}})},hideDialog:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").DIALOG_CLOSED})},bannerStatesUpdated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").BANNER_STATES_UPDATED,data:a})},bannerDismissed:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").BANNER_DISMISSED,data:a})},bannerCompleted:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").BANNER_COMPLETED,data:a})},moneypennyTransferCreated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").MONEYPENNY_TRANSFER_CREATED,data:a})},moneypennyTransferCreatedError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").MONEYPENNY_TRANSFER_CREATED_ERROR,data:a})},addPlatformContext:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PLATFORM_CONTEXT_ADDED,data:a})},addPlatformContextError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PLATFORM_CONTEXT_ADDED_ERROR,data:a})},clearPlatformContextSaveErrors:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PLATFORM_CONTEXT_SAVE_ERRORS_CLEARED,data:a})},platformContextBannerDismissed:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PLATFORM_CONTEXT_BANNER_DISMISSED,data:a})},platformContextProductItemSold:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD,data:a})},platformContextChanged:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PLATFORM_CONTEXT_CHANGED,data:a})},extensiveTransferDetailsLoaded:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").EXTENSIVE_TRANSFER_DETAILS_UPDATED,data:a})},updateAddresses:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").ADDRESSES_UPDATED,data:a})},addressSaving:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").ADDRESS_SAVING})},addAddress:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").ADDRESS_ADDED,data:a})},addAddressError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").ADDRESS_ADDED_ERROR,data:a})},addAddressErrorCleared:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").ADDRESS_ADDED_ERROR_CLEARED})},checkoutCartInitiated:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_CART_INITIATED})},checkoutCartCreated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_CART_CREATED,data:a})},checkoutShippingOptionSelected:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_SHIPPING_OPTION_SELECTED,data:a})},checkoutAddressSelected:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_ADDRESS_SELECTED,data:a})},checkoutCreditCardSelected:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_CREDIT_CARD_SELECTED,data:a})},checkoutAddressFormToggled:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_ADDRESS_FORM_TOGGLED,data:a})},checkoutCreditCardFormToggled:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_CREDIT_CARD_FORM_TOGGLED,data:a})},checkoutAddressEditOptionsToggled:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_ADDRESS_EDIT_OPTIONS_TOGGLED,data:a})},checkoutCreditCardEditOptionsToggled:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_CREDIT_CARD_EDIT_OPTIONS_TOGGLED,data:a})},checkoutPaymentMethodEditOptionsToggled:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_PAYMENT_METHOD_EDIT_OPTIONS_TOGGLED,data:a})},checkoutPaymentMethodSelected:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_PAYMENT_METHOD_SELECTED,data:a})},checkoutPaymentMethodConfigured:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_PAYMENT_METHOD_CONFIGURED,data:a})},checkoutPaymentMethodConfirmed:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_PAYMENT_METHOD_CONFIRMED,data:a})},checkoutCreditCardFormValidated:function(a,c){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_CREDIT_CARD_FORM_VALIDATED,data:{isValid:a,formData:c}})},checkoutAddressFormValidated:function(a,c){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_ADDRESS_FORM_VALIDATED,data:{isValid:a,formData:c}})},checkoutEditCompleted:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_EDIT_COMPLETED})},checkoutProcessing:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_PROCESSING,data:a})},checkoutBuyerProfileUpdated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_BUYER_PROFILE_UPDATED,data:a})},checkoutManualPaymentReceiptUpdated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").CHECKOUT_MANUAL_PAYMENT_RECEIPT_UPDATED,data:a})},paymentRequestInitiated:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_INITIATED})},paymentRequestInitiatedComplete:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_INITIATED_COMPLETE})},paymentRequestCreated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_CREATED,data:a})},paymentRequestCreatedError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_CREATED_ERROR,data:a})},paymentRequestUpdated:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_UPDATED,data:a})},paymentRequestDeclineInitiated:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_DECLINE_INITIATED})},paymentRequestDeclined:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_DECLINED,data:a})},paymentRequestDeclineError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_DECLINE_ERROR,data:a})},paymentRequestCancelInitiated:function(){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_CANCEL_INITIATED})},paymentRequestCanceled:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_CANCELED,data:a})},paymentRequestCancelError:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUEST_CANCEL_ERROR,data:a})},paymentRequestsFetched:function(a){b("P2PDispatcher").dispatch({type:b("P2PActionConstants").PAYMENT_REQUESTS_FETCHED,data:a})}};e.exports=a}),null);
__d("StickersDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationDispatcher"))({strict:!1})}),null);
__d("StickersActions",["StickersDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("keyMirror")({ADD_RECENT_STICKER:null,HIDE_FLYOUT:null,LOAD_RECENT_STICKERS:null,SELECT_STORE_PACK:null,SELECT_TRAY_PACK:null,SHOW_FLYOUT:null,TRAY_LOADED:null});a={Types:g,addRecentSticker:function(a){b("StickersDispatcher").dispatch({type:g.ADD_RECENT_STICKER,sticker:a})},hideStickerFlyout:function(){b("StickersDispatcher").dispatch({type:g.HIDE_FLYOUT})},loadRecentStickers:function(a){b("StickersDispatcher").dispatch({type:g.LOAD_RECENT_STICKERS,stickers:a})},selectStorePack:function(a){b("StickersDispatcher").dispatch({type:g.SELECT_STORE_PACK,packID:a})},selectTrayPack:function(a){b("StickersDispatcher").dispatch({type:g.SELECT_TRAY_PACK,packID:a})},showStickerFlyout:function(a){b("StickersDispatcher").dispatch({type:g.SHOW_FLYOUT,threadID:a})},trayLoaded:function(){b("StickersDispatcher").dispatch({type:g.TRAY_LOADED})}};e.exports=a}),null);
__d("isWebGLEnabled",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null;function h(){try{var a=document.createElement("canvas");return Boolean(window.WebGLRenderingContext)&&Boolean(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(a){return!1}}function a(){g===null&&(g=h());return g}e.exports=a}),null);
__d("MercuryTimePassed",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TODAY:0,WEEK_AGO:1,MONTH_AGO:2,CURRENT_YEAR:3,OTHER_YEAR:4})}),null);
__d("MercuryTimestamp",["fbt","MercuryTimePassed","formatDate"],(function(a,b,c,d,e,f,g){__p&&__p();a=864e5;var h=6*a,i={getFormatedTimestamp:function(a){var b=a/1e3;return i.getFormattedTimestampByBucket(b,this.getTimeBucket(a))},getAbsoluteTimestamp:function(a){if(a==null)return null;else{a=i.getFormatedTimestamp(a);return a.absolute}},getRelativeTimestamp:function(a){a=i.getFormatedTimestamp(a);return a.relative},getFormattedTimestampByBucket:function(a,c){switch(c){case b("MercuryTimePassed").TODAY:return{absolute:g._("Today"),relative:b("formatDate")(a,"g:ia")};case b("MercuryTimePassed").WEEK_AGO:return{absolute:b("formatDate")(a,"l"),relative:b("formatDate")(a,"D")};case b("MercuryTimePassed").CURRENT_YEAR:return{absolute:b("formatDate")(a,"F j"),relative:b("formatDate")(a,"M j")};default:return{absolute:b("formatDate")(a,"F j, Y"),relative:b("formatDate")(a,"n/j/y")}}},getTimeBucket:function(a){__p&&__p();a=new Date(a);var c=new Date();c=new Date(c.getFullYear(),c.getMonth(),c.getDate());if(c<a)return b("MercuryTimePassed").TODAY;else if(c-h<a)return b("MercuryTimePassed").WEEK_AGO;else if(c.getFullYear()===a.getFullYear())return b("MercuryTimePassed").CURRENT_YEAR;else return b("MercuryTimePassed").OTHER_YEAR},getPreciseTimestamp:function(a){return b("formatDate")(new Date(a),i.getPreciseFormat(a))},getPreciseFormat:function(a){a=i.getTimeBucket(a);switch(a){case b("MercuryTimePassed").TODAY:return"g:ia";case b("MercuryTimePassed").WEEK_AGO:return"l g:ia";case b("MercuryTimePassed").CURRENT_YEAR:return"F jS, g:ia";case b("MercuryTimePassed").OTHER_YEAR:default:return"F j, Y g:i a"}}};e.exports=i}),null);