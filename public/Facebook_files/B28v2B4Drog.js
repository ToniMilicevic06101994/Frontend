if (self.CavalryLogger) { CavalryLogger.start_js(["2gNYY"]); }

__d("KeyframesSchemaLayerMutator",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(a){var b=this.bb.__offset(this.bb_pos,42);if(b===0)return!1;this.bb.writeInt32(this.bb_pos+b,a);return!0};function a(a){this.$1=a}a.prototype.mutateSubdocumentIndex=function(a){if(!g.call(this.$1,a))throw new Error("Tried to mutate the subdocument index of a layer that did not have this field already set. This operation is not yet supported.")};e.exports=a}),null);
__d("KeyframesPlugin",["KeyframesSchemaLayerMutator"],(function(a,b,c,d,e,f){"use strict";function a(a,c){this.data=a,this.mutableLayer=new(b("KeyframesSchemaLayerMutator"))(c)}a.prototype.animationDidLoad=function(){};a.prototype.animationWillRepeat=function(a,b){};a.prototype.animationWillRenderLayer=function(a,b){};a.prototype.render=function(a,b){};e.exports=a}),null);
__d("KeyframesPluginRandomSubdocument",["invariant","KeyframesPlugin","randomShuffle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;function i(a){var b=[];for(var c=a.subdocumentIndicesLength()-1;0<=c;c--){var d=a.subdocumentIndices(c);d!=null||g(0,undefined);b.unshift(d)}return b}c=babelHelpers.inherits(a,b("KeyframesPlugin"));h=c&&c.prototype;function a(a,c){h.constructor.call(this,a,c),this.$KeyframesPluginRandomSubdocument1=i(a),this.$KeyframesPluginRandomSubdocument2=b("randomShuffle")(this.$KeyframesPluginRandomSubdocument1.slice(0))}a.prototype.animationDidLoad=function(){this.$KeyframesPluginRandomSubdocument3()};a.prototype.animationWillRepeat=function(){this.$KeyframesPluginRandomSubdocument3()};a.prototype.$KeyframesPluginRandomSubdocument3=function(){this.$KeyframesPluginRandomSubdocument2.length||(this.$KeyframesPluginRandomSubdocument2=b("randomShuffle")(this.$KeyframesPluginRandomSubdocument1.slice(0))),this.mutableLayer.mutateSubdocumentIndex(this.$KeyframesPluginRandomSubdocument2.pop())};e.exports=a}),null);
__d("KeyframesPluginRandomSubdocumentSchema",[],(function(a,b,c,d,e,f){__p&&__p();function g(){this.bb=null,this.bb_pos=0}g.prototype.__init=function(a,b){this.bb_pos=a;this.bb=b;return this};g.getRootAsPluginRandomSubdocument=function(a,b){return(b||new g()).__init(a.readInt32(a.position())+a.position(),a)};g.prototype.subdocumentIndices=function(a){var b=this.bb.__offset(this.bb_pos,4);return b?this.bb.readInt32(this.bb.__vector(this.bb_pos+b)+a*4):0};g.prototype.subdocumentIndicesLength=function(){var a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__vector_len(this.bb_pos+a):0};g.prototype.subdocumentIndicesArray=function(){var a=this.bb.__offset(this.bb_pos,4);return a?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+a),this.bb.__vector_len(this.bb_pos+a)):null};g.startPluginRandomSubdocument=function(a){a.startObject(1)};g.addSubdocumentIndices=function(a,b){a.addFieldOffset(0,b,0)};g.createSubdocumentIndicesVector=function(a,b){a.startVector(4,b.length,4);for(var c=b.length-1;c>=0;c--)a.addInt32(b[c]);return a.endVector()};g.startSubdocumentIndicesVector=function(a,b){a.startVector(4,b,4)};g.endPluginRandomSubdocument=function(a){a=a.endObject();return a};g.finishPluginRandomSubdocumentBuffer=function(a,b){a.finish(b)};e.exports=g}),null);