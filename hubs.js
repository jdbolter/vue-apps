import { p as pushScopeId, a as popScopeId } from "./vendor.js";
import "three";
var NetworkedHelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "\na[data-v-1580acae] {\n  color: #b542b9;\n}\nbutton[data-v-1580acae] {\n  width: 150px;\n}\n.fade[data-v-1580acae] {\n  color: #9803a5;\n  /* transition: color 1s; */\n}\n.fade[data-v-1580acae]:hover {\n  color: #a78e06;\n}\n";
pushScopeId("data-v-1580acae");
popScopeId();
var top = "/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n";
var room = `
@import url('https://fonts.googleapis.com/css2?family=Buenard&family=Montserrat:wght@100&family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap');
/* Now, our styles */
#room {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #f2e6e5;
    /* margin: 30px; */
    border: 5px;
    border-radius: 10px;
    border-color: red;
    /* position: absolute; */
    display: block;
    /* background-color: transparent;   */
    background-color: black; 
 }
#room.darkwall {
    background-color: transparent;  
}
#room.lightwall {
    background-color: transparent;  
    color: #1f1d1d;
}
#room.whitewall{
  background-color: white;  
  color: #1f1d1d;
  border-radius: 0px;
}
#room h2{
  font-size: 1.5em;
  font-weight: bold;

}
#room .headline{
  font-size: 4em;
}
#room .center {
  margin: 30px;
  padding-left: 25px;
  }
#room .postertitle  {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
#room .spacer {
    /* margin-left: 25px;
    margin-right: 25px; */
    margin: 25px;
    }
#room .squareoff {
    text-align: justify;
    }
.column {
      float: left;
      width: 50%;
      padding: 10px;
    }
/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
    }
/* JP */
/* adding margin only to the side */
#room .spacer-side {
    margin-left: 25px;
    margin-right: 25px;
    }
.lgquote{
      font-family: 'Roboto', sans-serif;
      font-size: 5rem;
      font-weight: 900;
      color: #8E9097;
    }
/*font styles*/
.oblique {
      font-style:italic;
    }
.quote {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      color: #DCDCDC;
    }
.keyPoint {
      color: #78cfa8;
      font-weight: bold;
    }
.largerText{
      font-size: 3em;
    }
/*sizing image*/
.full {
      padding: 0;
      margin:0;
      width: 100%;
      height: auto;
    }
img.centerImg {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
/* label vue-app */
.labelTitle {
      font-size:1.2em;
      font-weight: bold;
      line-height: 1.6;
    }
.labelLgTitle{
      font-size:6em;
      font-weight: bold;
    }
.labelLgBody{
      font-size:5em;
    }
/* History Gallery */
#room h2.history_title {
  text-align: left;
  font-size: 2rem;
  float: left;
  padding-bottom: 10px;
}
.history_subtitle{
  background-color: #E3E3E3;
  padding: 0 6px;
  display: inline;
  float: right;
}
.history_spacer-side{
  margin: 20px 60px;
}
.history_year{
  font-size: 2rem;
  font-weight: 100;
  opacity: 0.8;
  float: right;
  /* text-align: right;
  position: absolute;
  top: 30px;
  left:465px; */
  font-family: 'Montserrat', sans-serif;
}
.history_hr{
  clear: both;
  border: 2px solid #E3E3E3;
  background-color: #E3E3E3;
}
.history_hr2{

  border: 0;
  border-bottom: 3px dotted #E3E3E3;
  padding-top:9px;
}
#room.ivorywall{
  background: #F9EFE4;
  color:#42487C;
  font-family: 'Buenard', serif;
  border-radius: 0;
}
/* title vue-app */
.titleStyle {
  font-size: 2em;
  font-weight: bold;
  padding: 5px;
  text-shadow: 1px 0 2px black, 1px 0 4px white, 0 1px 2px black, 0 1px 4px white, -1px 0 2px black, -1px 0 4px white, 0 -1px  2px black, 0 -1px  4px white;
}
.alink {
  color: #fdfd96;
  text-decoration: underline;
}
.alinklink {
  color:#fdfd96;
}
.alink:hover {
  color: white;
  background:#78cfa8;
}`;
async function logAndFollow(id, url) {
  await window.APP.scene.systems["data-logging"].logClick(id, url);
  if (url.length > 0) {
    window.open(url, "_blank");
  }
}
window.APP.utils.followLinkClick = function(event) {
  var url = "";
  event.preventDefault();
  if (event.target instanceof HTMLElement) {
    if (event.target instanceof HTMLAnchorElement) {
      url = event.target.href;
    } else if (event.target instanceof HTMLSpanElement) {
      let child = event.target.childNodes[0];
      if (child instanceof HTMLAnchorElement) {
        url = child.href;
      }
    }
    logAndFollow(event.target.id, url);
  }
};
var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "\na[data-v-fd77e8fe] {\n  color: #b542b9;\n}\nbutton[data-v-fd77e8fe] {\n  width: 150px;\n}\n.fade[data-v-fd77e8fe] {\n  color: #9803a5;\n  /* transition: color 1s; */\n}\n.fade[data-v-fd77e8fe]:hover {\n  color: #06a71b;\n}\n";
pushScopeId("data-v-fd77e8fe");
popScopeId();
var App_vue_vue_type_style_index_0_scoped_true_lang$1 = "\n#edit[data-v-6a6efdc8] {\n  color: #bea7d1;\n}\n#edit.upclose[data-v-6a6efdc8] {\n  color: #cc0a0a;\n}\n";
pushScopeId("data-v-6a6efdc8");
popScopeId();
var App_vue_vue_type_style_index_0_scoped_true_lang = "\nbutton[data-v-f3c1f56a] {\n    width: 120px;\n    color: -internal-light-dark(black, white);\n    text-indent: 0px;\n    text-align: center;\n    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));\n    margin: 0em;\n    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));\n    border-radius: 2px;\n}\n.fakeButton[data-v-f3c1f56a] {\n  color: #9803a5;\n  background: #a78e06;\n  /* transition: color 1s; */\n}\n.fakeButton[data-v-f3c1f56a]:hover {\n  color: #a78e06;\n  background: #9803a5;\n}\n";
pushScopeId("data-v-f3c1f56a");
popScopeId();
