(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema2"],{"08a3":function(e,a,t){e.exports=t.p+"img/55.908952f4.svg"},"159b":function(e,a,t){var s=t("da84"),i=t("fdbc"),o=t("17c2"),n=t("9112");for(var r in i){var c=s[r],l=c&&c.prototype;if(l&&l.forEach!==o)try{n(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(e,a,t){"use strict";var s=t("b727").forEach,i=t("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}},"20aa":function(e,a,t){e.exports=t.p+"img/52.655cb437.svg"},"45d5":function(e,a,t){e.exports=t.p+"img/62.45a4597c.png"},"4a16":function(e,a,t){e.exports=t.p+"img/51.5c8b6c22.svg"},5530:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("b64b"),t("a4d3"),t("4de4"),t("e439"),t("159b"),t("dbb4");function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}},5765:function(e,a,t){"use strict";t("5c0a")},"5c0a":function(e,a,t){},"61a3":function(e,a,t){e.exports=t.p+"img/53.a5069050.svg"},7195:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"slyder-f"},[t("div",{staticClass:"slyder-f__btn pe-3",on:{click:e.clickAnterior}},[t("i",{staticClass:"fas fa-chevron-left"})]),t("div",{staticClass:"slyder-f__main",attrs:{id:"slyder-f-"+e.mainId}},[e.elements.length&&e.rendered?t("ScrollHorizontal",{attrs:{selectedId:"sl-"+e.selected,row:""}},e._l(e.elements,(function(a,s){return t("div",{directives:[{name:"child",rawName:"v-child",value:a.elm,expression:"item.elm"}],key:"sl-key-"+a.id,staticClass:"slyder-f__slyde",class:e.columnas,attrs:{id:"sl-"+a.id}})})),0):e._e()],1),t("div",{staticClass:"slyder-f__btn ps-3",on:{click:e.clickSiguiente}},[t("i",{staticClass:"fas fa-chevron-right"})]),t("div",{staticClass:"hidden-slot"},[e._t("default")],2)])},i=[],o=(t("d81d"),t("fb6a"),t("a965")),n=t("f480"),r={props:{datos:{type:Array,default:function(){return[]}}},data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:"0"}},methods:{getId:function(e){return e<0?null:"sl-"+this.mainId+e+1}}},c={name:"SlyderF",components:{ScrollHorizontal:o["a"]},mixins:[n["a"],r],props:{columnas:{type:String,default:""}},methods:{clickAnterior:function(){var e=this.elements.map((function(e){return e.id})),a=e.indexOf(this.selected);a>0&&(this.selected=e[a-1])},clickSiguiente:function(){var e=this.elements.map((function(e){return e.id})),a=document.querySelector("#slyder-f-"+this.mainId),t=window.getComputedStyle(a),s=parseFloat(t.width),i=document.querySelector("#sl-".concat(this.elements[0].id)),o=window.getComputedStyle(i),n=parseFloat(o.width),r=Math.round(s/n),c=r>1?e.slice(0,e.length-(r-1)):e,l=c.indexOf(this.selected);l<c.length-1&&(this.selected=c[l+1])}}},l=c,d=t("2877"),u=Object(d["a"])(l,s,i,!1,null,null,null);a["a"]=u.exports},"7db0":function(e,a,t){"use strict";var s=t("23e7"),i=t("b727").find,o=t("44d2"),n="find",r=!0;n in[]&&Array(1)[n]((function(){r=!1})),s({target:"Array",proto:!0,forced:r},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(n)},"9a47":function(e,a,t){e.exports=t.p+"img/57.f1d35128.png"},a15b:function(e,a,t){"use strict";var s=t("23e7"),i=t("44ad"),o=t("fc6a"),n=t("a640"),r=[].join,c=i!=Object,l=n("join",",");s({target:"Array",proto:!0,forced:c||!l},{join:function(e){return r.call(o(this),void 0===e?",":e)}})},a640:function(e,a,t){"use strict";var s=t("d039");e.exports=function(e,a){var t=[][e];return!!t&&s((function(){t.call(null,a||function(){throw 1},1)}))}},a965:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[t("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":e.itemFullWidth},{row:e.row}],style:[{transform:"translate("+e.scrollVal+"px,0px)"}]},[e._t("default")],2)])},i=[],o=(t("7db0"),t("b64b"),t("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(e){e.length&&this.scroll()}},mounted:function(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var e,a=this,t=null===(e=this.ids.find((function(e){return e.id===a.selectedId})))||void 0===e?void 0:e.id,s=document.getElementById(t);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==s){var i=!1,o=this.$refs.hContainer,n=s.offsetWidth*this.ids.length,r=i?s.offsetLeft-o.offsetLeft:s.offsetLeft,c=o.offsetWidth/s.offsetWidth;c>1&&n-r<o.offsetWidth&&(r=n-o.offsetWidth),this.scrollVal=1===this.ids.length?0:-r}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(e){return{id:e.elm.id,key:e.key}})))}}}),n=o,r=(t("5765"),t("2877")),c=Object(r["a"])(n,s,i,!1,null,"00fad11c",null);a["a"]=c.exports},b64b:function(e,a,t){var s=t("23e7"),i=t("7b0b"),o=t("df75"),n=t("d039"),r=n((function(){o(1)}));s({target:"Object",stat:!0,forced:r},{keys:function(e){return o(i(e))}})},b924:function(e,a,t){e.exports=t.p+"img/59.e96a27ae.svg"},bae9:function(e,a,t){e.exports=t.p+"img/56.b80687f3.png"},cade:function(e,a,t){e.exports=t.p+"img/50.5728372d.svg"},d81d:function(e,a,t){"use strict";var s=t("23e7"),i=t("b727").map,o=t("1dde"),n=o("map");s({target:"Array",proto:!0,forced:!n},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},dafa:function(e,a,t){e.exports=t.p+"img/58.89f2daf4.svg"},dbb4:function(e,a,t){var s=t("23e7"),i=t("83ab"),o=t("56ef"),n=t("fc6a"),r=t("06cf"),c=t("8418");s({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var a,t,s=n(e),i=r.f,l=o(s),d={},u=0;while(l.length>u)t=i(s,a=l[u++]),void 0!==t&&c(d,a,t);return d}})},e439:function(e,a,t){var s=t("23e7"),i=t("d039"),o=t("fc6a"),n=t("06cf").f,r=t("83ab"),c=i((function(){n(1)})),l=!r||c;s({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(e,a){return n(o(e),a)}})},f1af:function(e,a,t){e.exports=t.p+"img/54.fe786d98.svg"},f480:function(e,a,t){"use strict";var s=t("5530");t("d81d"),t("a15b");a["a"]={data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}},watch:{menuState:function(){this.domUpdated()}},created:function(){window.addEventListener("resize",this.domUpdated)},mounted:function(){var e=this;this.$nextTick((function(){e.crearElementos()}))},computed:{menuState:function(){return this.$store.getters.isMenuOpen},navObj:function(){if(!this.elements.length||!this.secuencial)return{};var e=this.elements.map((function(e){return e.id})),a=e.indexOf(this.selected);if(a<0)return{};var t={};return 0===a?t.next=e[a+1]:(a+1===e.length||(t.next=e[a+1]),t.back=e[a-1]),t}},beforeDestroy:function(){window.removeEventListener("resize",this.domUpdated)},updated:function(){var e=this;this.$nextTick((function(){e.getStateStr()!=e.stateStr&&e.crearElementos()}))},methods:{crearElementos:function(){var e=this;return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((function(a,t){var i=a.data&&a.data.attrs?a.data.attrs:[];return Object(s["a"])({id:e.mainId+t+1,elm:a.elm},i)})),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight:function(e){return this.$refs[e][0].scrollHeight+"px"},getStateStr:function(){return this.$slots.default.map((function(e){return e.elm.outerHTML})).join("")},domUpdated:function(){var e=this;this.rendered=!1,setTimeout((function(){e.rendered=!0}),100)}}}},fd11:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e._m(0),e._m(1),s("Separador"),e._m(2),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-down"}},[e._v("Los requerimientos de tránsito para la realización de un procedimiento de imposición de comparendo, se hacen a partir de la autoridad operativa de tránsito (funcionarios de policía con facultades de tránsito – Ditra y agentes de tránsito de las diferentes secretarías). ")]),e._m(3),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-down"}},[e._v("En cualquier caso, a todo implicado en un suceso de contravención al tránsito debe realizársele el procedimiento que se describe a continuación, según el artículo 135 del Código Nacional de Tránsito Terrestre:")]),s("div",{staticClass:"row bg9 align-items-center pt-3 mb-4"},[s("div",{staticClass:"col-lg-12 col-12 px-lg-5 px-4 up"},[s("div",{staticClass:"row justify-content-center align-items-center"},[e._m(4),s("div",{staticClass:"col-md-11 col-lg-8 mb-4 mb-md-0 up",attrs:{"data-aos":"fade-left"}},[s("SlyderF",{staticClass:"text-center pb-4",attrs:{columnas:"col-lg-6","data-aos":"fade-right"}},[s("div",{staticClass:"tarjeta bgcard ts h-100 p-4"},[s("div",{staticClass:"row justify-content-center align-items-center mb-3"},[s("div",{staticClass:"col-auto bgn p-2"},[s("h5",{staticClass:"mb-0 mx-1",attrs:{"data-aos":"fade-down"}},[e._v("1 ")])])]),s("p",{staticClass:"mb-0"},[e._v("La autoridad de tránsito ordenará detener la marcha del vehículo y le extenderá al conductor la orden de comparendo instando al infractor a presentarse ante la autoridad de tránsito competente dentro de los cinco (5) días hábiles siguientes. ")])]),s("div",{staticClass:"tarjeta bgcard ts h-100 p-4"},[s("div",{staticClass:"row justify-content-center align-items-center mb-3"},[s("div",{staticClass:"col-auto bgn p-2"},[s("h5",{staticClass:"mb-0 mx-1",attrs:{"data-aos":"fade-down"}},[e._v("2 ")])])]),s("p",{staticClass:"mb-0"},[e._v("La orden de comparendo deberá estar firmada por el conductor, de ser posible. Si el conductor se negara a firmar o a presentar la licencia, firmará por él un testigo, el cual deberá identificarse con el número de su cédula de ciudadanía o pasaporte, dirección de domicilio y teléfono. ")])]),s("div",{staticClass:"tarjeta bgcard ts h-100 p-4"},[s("div",{staticClass:"row justify-content-center align-items-center mb-3"},[s("div",{staticClass:"col-auto bgn p-2"},[s("h5",{staticClass:"mb-0 mx-1",attrs:{"data-aos":"fade-down"}},[e._v("3 ")])])]),s("p",{staticClass:"mb-0"},[e._v("Las autoridades competentes podrán contratar servicios de medios técnicos y tecnológicos para evidenciar la comisión de infracciones o contravenciones, vehículo, fecha, lugar y hora. Se enviará, entonces, por correo dentro de los tres (3) días hábiles siguientes a la infracción y sus soportes al propietario, obligado al pago de la multa.")])]),s("div",{staticClass:"tarjeta bgcard ts h-100 p-4"},[s("div",{staticClass:"row justify-content-center align-items-center mb-3"},[s("div",{staticClass:"col-auto bgn p-2"},[s("h5",{staticClass:"mb-0 mx-1",attrs:{"data-aos":"fade-down"}},[e._v("4")])])]),s("p",{staticClass:"mb-0"},[e._v("Para el servicio público, además, se enviará por correo dentro de este mismo término, copia del comparendo y sus soportes a la empresa a la cual se encuentre vinculado y a la Superintendencia de Puertos y Transporte. ")])]),s("div",{staticClass:"tarjeta bgcard ts h-100 p-4"},[s("div",{staticClass:"row justify-content-center align-items-center mb-3"},[s("div",{staticClass:"col-auto bgn p-2"},[s("h5",{staticClass:"mb-0 mx-1",attrs:{"data-aos":"fade-down"}},[e._v("5 ")])])]),s("p",{staticClass:"mb-0"},[e._v("El Ministerio de Transporte determinará las características técnicas del formulario de comparendo único nacional, así como su sistema de reparto. Allí se informará al conductor su derecho a nombrar un apoderado si así lo desea y que, en la audiencia, se decretarán o practicarán las pruebas que solicite. ")])]),s("div",{staticClass:"tarjeta bgcard ts h-100 p-4"},[s("div",{staticClass:"row justify-content-center align-items-center mb-3"},[s("div",{staticClass:"col-auto bgn p-2"},[s("h5",{staticClass:"mb-0 mx-1",attrs:{"data-aos":"fade-down"}},[e._v("6")])])]),s("p",{staticClass:"mb-0"},[e._v("La autoridad de tránsito entregará al funcionario competente o a la entidad que aquel encargue para su recaudo, dentro de las doce (12) horas siguientes, la copia de la orden de comparendo, so pena de incurrir en causal de mala conducta.")])])])],1)])])]),s("Separador"),e._m(5),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-down"}},[e._v("Las señales corporales de la autoridad de tránsito de control operativo, se encuentran enmarcadas jurídicamente en el artículo 116 del Código Nacional de Tránsito (Ley 769 de 2002), el cual establece que las autoridades encargadas de controlar el tránsito deben hacer las señales como se ilustra en la siguiente infografía:")]),s("img",{staticClass:"img-a img-t mb-5",attrs:{"data-aos":"zoom-in",src:t("dafa"),alt:"Se muestra a un agente del tránsito asumiendo tres posturas corporales: Postura 1, Agente con sus brazos extendidos hacia abajo sobre su tronco: indica que está cerrada la circulación y el conductor deberá detenerse. Postura 2, Agente con sus brazos extendidos hacia los lados a la altura de sus hombros y palmas de sus manos hacia abajo: indica que está previniendo el cambio de vía libre a cerrada o viceversa. Postura 3, Agente con sus brazos extendidos hacia los lados formando una U recta y las palmas de sus manos hacia afuera: es una señal ejecutiva para detener el flujo vehicular. Se adicionan dos recuadros informativos así: Recuadro 1, Regular: cuando la autoridad de tránsito se desplaza desde el frente de una calle al de la otra, cada vez que autoriza el paso, ubicándose en la prolongación de la línea del andén, dejando libre la circulación de la otra vía. Recuadro 2, Dirigir: cuando la autoridad Encauza, enfoca o agiliza la movilidad hacia un determinado espacio de la vía. Se realiza en forma eventual, como solución temporal al represamiento o congestión vehicular."}}),s("Separador"),e._m(6),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-down"}},[e._v("Los procedimientos de registro en escenarios de tránsito pueden ser frente a: ")]),e._m(7),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-down"}},[e._v("Dichos procedimientos determinan qué hace frente a la imposición de una orden de comparendo único nacional, según el artículo 136 de la Ley 769 de 2002, así:")]),s("div",{staticClass:"row bg9 align-items-center pt-3 mb-4"},[s("div",{staticClass:"col-lg-12 col-12 px-lg-5 px-4 up"},[s("div",{staticClass:"row justify-content-center align-items-center"},[e._m(8),s("div",{staticClass:"col-md-11 col-lg-8 mb-4 mb-md-0 up pb-2",attrs:{"data-aos":"fade-left"}},[s("div",{staticClass:"tarjeta tarjeta-verde bgw p-4",attrs:{"data-aos":"fade-left"}},[s("SlyderA",{attrs:{tipo:"b"}},[s("div",{staticClass:"row justify-content-center mt-3"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"bg12 px-4 brad"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-auto my-3"},[s("div",{staticClass:"bg13 j p-2"},[s("h3",{staticClass:"mb-0 px-1"},[e._v("1 ")])])]),s("div",{staticClass:"col-lg-11 my-3"},[s("p",{attrs:{"data-aos":"fade-down"}},[e._v("Si el inculpado acepta la comisión de la infracción, podrá: ")]),s("ul",{staticClass:"lista-ul fa-ul"},[s("li",[s("i",{staticClass:"fas fa-chevron-right"}),s("p",{staticClass:"mb-0"},[e._v("Pagar el 100 % del valor de la multa dentro de los tres días hábiles siguientes a la orden de comparendo, sin necesidad de otra actuación administrativa. ")])]),s("li",[s("i",{staticClass:"fas fa-chevron-right"}),s("p",{staticClass:"mb-0"},[e._v("Cancelar el 50 % del valor de la multa al organismo de tránsito y 25 % al centro integral de atención al cual estará obligado a ir para tomar un curso en la escuela que allí funciona sobre las normas de tránsito. ")])])])])])])])]),s("div",{staticClass:"row justify-content-center mt-3"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"bg12 px-4 brad"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-auto my-3"},[s("div",{staticClass:"bg13 j p-2"},[s("h3",{staticClass:"mb-0 px-1"},[e._v(" 2 ")])])]),s("div",{staticClass:"col-lg-11 my-3"},[s("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[e._v("Si la multa es rechazada, el inculpado deberá comparecer ante funcionario en audiencia pública para que este decrete las pruebas conducentes que le sean solicitadas y las de oficio que considere útiles. En caso de no comparecer sin justa causa comprobada, la autoridad de tránsito dentro de los diez días siguientes continuará el proceso, entendiéndose que queda vinculado, fallándose en audiencia pública y notificándose en estrados. En caso de ser declarado contraventor, se le impondrá el 100 % de la sanción prevista en el Código.")])])])])])]),s("div",{staticClass:"row justify-content-center mt-3"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"bg12 px-4 brad"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-auto my-3"},[s("div",{staticClass:"bg13 j p-2"},[s("h3",{staticClass:"mb-0 px-1"},[e._v("3 ")])])]),s("div",{staticClass:"col-lg-11 my-3"},[s("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[e._v("Los organismos de tránsito podrán celebrar acuerdos para el recaudo de las multas. Los recursos generados, podrán ser distribuidos entre: a) el organismo de tránsito que ejecuta el recaudo, b) el organismo de tránsito donde se cometió la infracción, y c) el tercero particular o público en quien éste delegue el recaudo, previo descuento del 10 % que se destinará específicamente por el organismo de tránsito que conoció la infracción para campañas de educación vial y peatonal, en cualquiera de las siguientes formas: ")])])])])])]),s("div",{staticClass:"row justify-content-center mt-3"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"bg12 px-4 brad"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-auto my-3"},[s("div",{staticClass:"bg13 j p-2"},[s("h3",{staticClass:"mb-0 px-1"},[e._v("4 ")])])]),s("div",{staticClass:"col-lg-11 my-3"},[s("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[e._v("Pagar el 50 % del valor en los cinco días siguientes a la orden de comparendo, siempre y cuando asista a un curso sobre normas de tránsito en un Organismo de Tránsito, Centro de Enseñanza Automovilística o Centro Integral de Atención. Si el curso se realiza ante un organismo de diferente jurisdicción donde se cometió la infracción, a éste se le cancelará un 25 % del valor y el excedente, al organismo de tránsito de la jurisdicción donde se cometió la infracción.")])])])])])]),s("div",{staticClass:"row justify-content-center mt-3"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"bg12 px-4 brad"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-auto my-3"},[s("div",{staticClass:"bg13 j p-2"},[s("h3",{staticClass:"mb-0 px-1"},[e._v("5 ")])])]),s("div",{staticClass:"col-lg-11 my-3"},[s("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[e._v("Cancelar el 75 % del valor en los veinte días siguientes a la orden de comparendo, siempre y cuando asista a un curso sobre normas de tránsito en un Organismo de Tránsito, Centro de Enseñanza Automovilística o Centro Integral de atención. Si el curso se realiza ante un organismo de diferente jurisdicción donde se cometió la infracción, a este se le pagará un 25 % del valor y el excedente al organismo de tránsito de la jurisdicción donde se cometió la infracción. ")])])])])])])])],1)])])])])],1)],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-principal color-acento-contenido"},[t("div",{staticClass:"titulo-principal__numero"},[t("span",[e._v("2")])]),t("h1",[e._v("Aplicación de la norma en tránsito y transporte")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"bg14"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col my-3"},[s("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[e._v("La aplicación de la norma es el procedimiento que realizan las autoridades de control operativo del tránsito cuando observan una infracción de tránsito y realizan una orden de comparendo único nacional, o cuando observan una infracción de transporte y diligencian un formato de informe único de infracción de transporte. ")])]),s("div",{staticClass:"col-lg-auto my-3"},[s("img",{staticClass:"img-a img-t",attrs:{"data-aos":"zoom-in",src:t("cade"),alt:""}})])]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"fade-down"}},[s("div",{staticClass:"titulo-sexto color-acento-contenido"},[s("h5",[e._v("Figura 1.")]),s("span",[e._v("Tipo de documento según infracción ")])]),s("div",{staticClass:"bgfig p-4"},[s("img",{staticClass:"img-a img-t",attrs:{"data-aos":"zoom-in",src:t("4a16"),alt:"Esquema de recuadros que muestra los tipos de documento, según infracción: Recuadro 1: Infracción de tránsito, se diligencia un comparendo único nacional. Recuadro 2: Infracción de transporte, se diligencia un formato único de infracción. "}})])])]),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-down"}},[e._v("La movilidad de los actores viales (conductor, pasajero, peatón) requiere un conjunto de reglas de circulación, claras y específicas, las cuales se encuentran establecidas en orden jerárquico como lo establece la teoría pura del derecho, que para el caso se encuentra en cabeza de la Constitución Política de Colombia que como norma de normas, establece en el artículo 24 la libre locomoción que dentro del país está regulada a través de la Ley 769 de 2002 y el Código Nacional de Tránsito que determina normas de comportamiento vial para conductores, pasajeros y peatones. ")]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"fade-down"}},[s("div",{staticClass:"titulo-sexto color-acento-contenido"},[s("h5",[e._v("Figura 2.")]),s("span",[e._v("Jerarquía de las normas")])]),s("img",{staticClass:"img-a img-t",attrs:{"data-aos":"zoom-in",src:t("20aa"),alt:"Esquema piramidal con tres niveles que expone el orden jerárquico de las normas, así: Primer nivel o nivel superior: Constitución política y tratados internacionales. Segundo nivel o nivel medio: Decretos legislativos, que vincula leyes orgánicas, ordinarias, reglamentos de congreso, decretos de urgencia. Tercer nivel o nivel inferior: Presidenciales como Decreto supremo, resolución suprema, resoluciones ministeriales, directoriales, jefatoriales, ordenanzas, acuerdos, sentencias."}})])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col my-3"},[s("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[e._v("Con base en lo anterior, "),s("b",{staticClass:"tg"},[e._v("es necesario entender que en Colombia existe un ordenamiento jurídico que reglamenta el comportamiento de todos y cada uno de los actores viales, al igual que normas de transporte de personas o cosas de un punto a otro")]),e._v(", por lo cual podemos simplificar este apartado normativo como se ilustra en la siguiente infografía: ")])]),s("div",{staticClass:"col-lg-auto my-3"},[s("img",{staticClass:"img-a img-t",attrs:{"data-aos":"zoom-in",src:t("61a3"),alt:""}})])]),s("img",{staticClass:"img-a img-t mb-5",attrs:{"data-aos":"zoom-in",src:t("f1af"),alt:'Esquema gráfico que expone las disposiciones constitucionales y de ley sobre el tránsito y el transporte en Colombia. La síntesis general del esquema gráfico refuerza que "Art. 24. Todo colombiano, con las limitaciones que establezca la ley, tiene derecho a circular libremente por el territorio nacional".'}}),s("p",{attrs:{"data-aos":"fade-down"}},[e._v("Así las cosas, es importante tener en cuenta que el marco jurídico es extremadamente extenso respecto a temas relacionados con tránsito y el transporte, y son frecuentemente objeto de actualizaciones y ajustes, motivo por el cual es necesario mantenerse informado de las normas y sus actualizaciones. ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_1","data-aos":"zoom-in-left"}},[t("h2",[e._v("2.1 Requerir preventivamente presuntos implicados en sucesos de incumplimiento a las normas de tránsito")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-lg-9 my-3"},[s("div",{staticClass:"bg8 p-4 mb-4 j"},[s("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[e._v("La imposición de un comparendo está considerada como una clase de sanción que una vez impuesta a una persona se debe hacer el trámite de pago, sin embargo, el mismo Código Nacional de Tránsito Terrestre (Ley 769 de 2002) establece que este es un medio de notificación formal a un presunto contraventor en la norma de tránsito por una posible comisión de una infracción. ")])]),s("p",{attrs:{"data-aos":"fade-down"}},[s("mark",{staticClass:"t2"},[e._v("En este sentido, el procedimiento se considera como la parte inicial de un proceso al que la persona debe comparecer y para demostrar el no cometimiento de la falta que se le acusa por el agente, todo enmarcado en los escenarios de prevención hacia la accidentalidad y la mitigación de comportamientos riesgosos en la vía.")])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-auto my-3"},[s("img",{staticClass:"img-a img-t",attrs:{"data-aos":"zoom-in",src:t("08a3"),alt:""}})]),s("div",{staticClass:"col my-3 j"},[s("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[e._v("Siendo así, los requerimientos que se deben realizar de manera preventiva con los presuntos sujetos implicados en los sucesos de tránsito son aquellos que en el trasegar del ámbito laboral del agente sea sorprendido realizando la acción típica establecida en la norma y este de lugar a la imposición de un comparendo. ")])])])]),s("div",{staticClass:"col-lg-3 my-3 d-none d-lg-block"},[s("img",{staticClass:"img-a img-t",attrs:{"data-aos":"zoom-in",src:t("bae9"),alt:""}})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"col-md-6 col-lg-4 mb-4 mb-md-0 up d-none d-lg-block",attrs:{"data-aos":"fade-right"}},[s("img",{attrs:{src:t("9a47"),alt:""}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_2","data-aos":"zoom-in-left"}},[t("h2",[e._v("2.2 Señales corporales")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_3","data-aos":"zoom-in-left"}},[t("h2",[e._v("2.3 Procedimiento de registro en escenarios de tránsito")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-4 col-md-6 mb-4 up"},[s("div",{staticClass:"tarjeta h-100 p-4 bg15"},[s("img",{staticClass:"mb-3 inv",staticStyle:{width:"90px"},attrs:{src:t("b924"),alt:""}}),s("p",[e._v("Una infracción de tránsito a través del registro de la orden de comparendo")])])]),s("div",{staticClass:"col-lg-4 col-md-6 mb-4 up"},[s("div",{staticClass:"tarjeta h-100 p-4 bg15"},[s("img",{staticClass:"mb-3 inv",staticStyle:{width:"90px"},attrs:{src:t("b924"),alt:""}}),s("p",[e._v("Una infracción de transporte con el diligenciamiento del informe único de infracción de transporte o, ")])])]),s("div",{staticClass:"col-lg-4 col-md-6 mb-4 up"},[s("div",{staticClass:"tarjeta h-100 p-4 bg15"},[s("img",{staticClass:"mb-3 inv",staticStyle:{width:"90px"},attrs:{src:t("b924"),alt:""}}),s("p",[e._v("La atención de un accidente de tránsito, y el registro y diligenciamiento del informe policial de accidente de tránsito IPAT")])])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"col-md-6 col-lg-4 mb-4 mb-md-0 up d-none d-lg-block",attrs:{"data-aos":"fade-right"}},[s("img",{attrs:{src:t("45d5"),alt:""}})])}],o=t("7195"),n={name:"Tema2",components:{SlyderF:o["a"]},data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},r=n,c=t("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=tema2.678e1bf0.js.map