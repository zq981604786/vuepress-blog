(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{219:function(t,e,n){"use strict";n.r(e);var a=n(18),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"安装webpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装webpack"}},[t._v("#")]),t._v(" 安装webpack")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("npm init -y\nnpm i webpack-cli  webpack --save-dev\n\n\nnpx webpack index.js\n\nwebpack是一个模块打包工具\n \n// CommonJS   let header = require('./header.js')   module.exports = header\n// Es module  import headr from './header.js'       export default header\n\npackage.json 中的private:true,不会发布到node中\n\nnpm i webpack webpack-cli -g\nwebpack -v 查看版本号   最好不要全局安装，会导致其他版本的webpack无法运行\n\nnpm info webpack 查看版本号\n\nnpx运行当前目录下的文件\nnpx webpack --config webpackconfig.js  改变webpack默认打包配置文件\nwebpack-cli 的作用是在命令行中使用webpack的命令\n")])])]),n("h1",{attrs:{id:"webpack配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack配置"}},[t._v("#")]),t._v(" webpack配置")]),t._v(" "),n("p",[t._v("module.exports = {")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("## mode:'production', // development\n## entry:'' //入口简写\n")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("## output:{\n\t## filename:'',\n\t## path:path.reslove(__driname,'')\n}，\nmodule:{\n\trules:[\n\t\t{\n\t\t\ttest:/\\.jpg$/,\n\t\t\tuse:{\n\t\t\t\tloader:'file-loader'\n\t\t\t}\n\t\t}\n\t]\n}\n")])])]),n("p",[t._v("}")]),t._v(" "),n("h1",{attrs:{id:"打包过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包过程"}},[t._v("#")]),t._v(" 打包过程")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("hash 本次打包唯一一个哈希值\nversion webpack 的版本\ntime 时间\nbuilt\nbundle 打包出的文件\nchunk 和 chunks放置的是id和名字\nEntrypoint 整个打包文件入口文件\n")])])]),n("h2",{attrs:{id:"webpack实践-loader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack实践-loader"}},[t._v("#")]),t._v(" webpack实践   loader")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("loader让webpack识别文件，在module下面的rules中配置  //file-loader,url-loader，直接将图标加载在js中，将图片转为base64。仅适用于图标较小的，否则会影响js加载\nmodule:{\n\trules:[\n\t\t{\n\t\t\ttest:/\\.jpg$/,\n\t\t\tuse:{\n\t\t\t\tloader:'url-loader'\n\t\t\t},\n\t\t\toptions:{\n\t\t\t\tname:'[name].[ext]' // 采用之前的名字和后缀 placeholder占位符\n\t\t\t\toutputPath:'images/' // 输出目录\n\t\t\t\tlimit:2048 // 如果图标小于2kb，则直接放在js中\n\t\t\t}\n\t\t}\n\t]\n}\n\nstyle-loader  将css解析挂在在页面 \ncss-loader  分析多个css直接的关系\nsass-loader\npostcss-loader 自动添加厂商的前缀，以便兼容各个浏览器\n\tpostcss.config.js\n\t\tmodule.exports = {\n\t\t\tplugins:[\n\t\t\t\trequire('autoprefixer')\n\t\t\t]\n\t\t}\nloader有执行顺序，从上到下，从右到左\n")])])]),n("p",[t._v("​")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("use:['style-loader',{\n                    loader:'css-loader',\n                    options:{\n                        importLoaders:2  //使用这个确保在js中引入的css中的其他css也使用sass或postcss-loader\n\t\t\t\t\t\tmodules:true  // 是的css模块化，css只在当前引入页面生效  import style from './index'    img.classList.add(style.avter)\n                    }\n                }]   \n\n打包字体\n")])])]),n("h2",{attrs:{id:"plugins-让webpack运行到某个时刻的时候，做一些事情，类似于生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugins-让webpack运行到某个时刻的时候，做一些事情，类似于生命周期"}},[t._v("#")]),t._v(" plugins  让webpack运行到某个时刻的时候，做一些事情，类似于生命周期")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("npm i html-webpack-plugin  // 热更新,会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入html文件中    打包之后运行的\nlet HtmlWebpackPlugin = require('html-webpack-plugin')\nplugins:[new HtmlWebpackPlugin({\n\ttemplate:'' //默认生成模板地址地址\n\t)]\n\t\nnpm i clean-webpack-plugin -d 清除生成的打包文件\nlet CleanWebpackPlugin = reuqire('clean-webpack-plugin')\nplugins:[new CleanWebpackPlguin(['dist'])] // 帮助我们删除dist目录下的所有东西   打包之前运行的\n")])])]),n("h2",{attrs:{id:"output-entry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-entry"}},[t._v("#")]),t._v(" output entry")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("entry:{\n\tmain:'./index.js',\n\tsub:'./index.js'\n}\noutput:{\n\tfilename:'[name].js',\n\tpublicPath:'http://cdn.com.cd' //打包文件加一个路径\n}\n")])])]),n("h2",{attrs:{id:"sourcemap-是一个映射关系，出说那块代码报错-看源代码哪错了，而不是打包之后的代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap-是一个映射关系，出说那块代码报错-看源代码哪错了，而不是打包之后的代码"}},[t._v("#")]),t._v(" sourceMap  是一个映射关系，出说那块代码报错  看源代码哪错了，而不是打包之后的代码")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("在开发者模式下默认是配置好的 mode:'development'\ndevtool:'none'\ndevtool:'source-map'\ndevtool:'inline-source-map'  //隐藏.map.js文件，直接打包在js文件中  好烦性能  具体的位置，具体到列\ndevtool:'cheap-inline-source-map'  //只需要告诉具体的行，不需要具体的列\ndevtool:'cheap-module-source-map' //模块中的错误\ndevtool:'eval' //直接执行，针对比较复杂的情况下，这个有可能不全面\n\n推荐使用 development\ndevtool:'cheap-module-eval-source-map'\n\n//线上的代码\ndevtool:'cheap-module-source-map'\n")])])]),n("h2",{attrs:{id:"webpackdevserve"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpackdevserve"}},[t._v("#")]),t._v(" webpackDevServe")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("1.\"dev\":\"webpack -watch\"  // 不是http\n2. 在使用ajax请求的时候，需要http请求\n配置:\n\tdevServer:{\n\t\tcontentBase:'./dist' //启动一个服务器\n\t\topen:true //在启动的时候自动打开浏览器\n\t\tproxy:{\n\t\t\t'/api':'http://localhost:3000'\n\t\t}，\n\t\thot:true,\n\t\thotOnly:true  //即便hrm没有生效，也不让浏览器刷新\n\t}\n\tnpm i webpack-dev-server\n\t\"start\":\"webpack-dev-server\"\n\t\n\tconst webpack = require('webpack')\n\tplugins:[\n\t\tnew webpackHotModuleReplacementPlugin()  //配置devserver的hot，之后，webapck的hrm实现\n\t]\n\t\n\timport number from './numver'\n\tif(module.hot){\n\t\tmodule.hot.accept('./number',() => {  //监控变化\n\t\t\tnumber()  // 如果number发生了变化，则执行number，重新渲染\n\t\t})\n\t}\n")])])]),n("p",[t._v("​")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("\t// 自己写一个devserver\n\tnpm i webpack-dev-middleware express\n\tconst express = require('express')\n\tconst webpack = require('webpack')\n\tcont webpackDevMiddleware = require('webpack-dev-milldleware')\n\tconst config = require('./webpack.config.js')\n\tconst complier = webpack(config)\n\tconst app = express()\n\t\n\tapp.use(webpackDevMiddleware(complier,{\n\t\tpublicPath:config.output.publicPath\n\t}))\n\tapp.listen(3000)\n")])])]),n("p",[t._v("​\t\t\n​")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("\tbebel安装\n\tnpm i babel-loader @babel/core\n\texclude:'/node_modules'  //如果在这里面，则不使用babel。排除在外\n\tnpm i @bebel/preset-env   //包含了es6转es5的规则\n\tmodule:{\n\t\trules:[\n\t\t\t{\n\t\t\t\ttest:/\\.js$/,\n\t\t\t\texclude:'/node_modules',\n\t\t\t\tloader:'babel-loader',\n\t\t\t\toptions:{\n\t\t\t\t\tpresets:['@babel/preset-env']\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n\t\n\t如何在低版本浏览器运行  @babel/polyfill\n\timport '@babel/polyfill'   //在需要的地方引入，但是打包之后的文件会过大\n\t{\n\t\ttest:/\\.js$/,\n\t\texclude:'/node_modules',\n\t\tloader:'babel-loader',\n\t\toptions:{\n\t\t\tpresets:[\n\t\t\t\t['@babel/preset-env',{useBuiltIns:'usage'},targets:{chrome:'67'}]  // 当我用babel/polyfill的时候，根据业务 代码来跟进加什么         targets 运行在谷歌版本大于67的\n\t\t\t\t]\n\t\t}\n\t}\n\t\n\t@babel/plugin-transform-runtime\n\t@babel/runtime\n\toptions:{\n\t\t\"plugins\":[\n\t\t\t[\"@babel/plugin-transform-runtime\",{\n\t\t\t\t\"corejs\":2,    //如果是2 还需要安装   @babel/runtime-corejs2\n\t\t\t\t\"helpers\":true,\n\t\t\t\t\"regenerator\":true,\n\t\t\t\t\"useESModules\":false\n\t\t\t}]\n\t\t]\n\t}\n\t\n\t.babelrc\n\t\t把options中的内容放在这里面。则上面不写options\n\t\t{useBuiltIns:'usage'}//按需引入\n")])])]),n("p",[t._v("​")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("\tbabel配置react    //babrlrc的执行顺序是从下到上，从右到左\n\t@babel/preset-react\n")])])]),n("p",[t._v("​")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("\tTree Shaking  //把用到的打包，没用到的不打包。  只支持esModule模块。  import * from ''\n\tplugins:[\n\t\toptimization:{\n\t\t\tusedExports:true\n\t\t}\n\t]\n\t在package.json中配置\n\tsideEffects:false     \n\tsideEffects:[\"@babel/polly-fill\"]\n\tsideEffects:[\n\t\t\"*.css\"\n\t]\n\t在mode：'productes'中tree shaking默认被配置好\n")])])]),n("p",[t._v("​\t\t\n​")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("\t创建 \n\twebpack.dev.js  //开发环境\n\twebpack.prod.js // 生成环境\n\t\n\tpackage.json\n\tscripts:{\n\t\t\"dev\":'webpack-dev-server --config webpack.dev.js'\n\t\t\"build\":\"webpack --config webpack.prod.js\"\n\t}\n\t\n\twebpack.common.js\n\tmodule.exports = {\n\t\t\n\t}\n\t\n\tnpm i webpack-merge //将webpack模块合并\n\tconst merge = require('webpack-merge')\n\tconst commonConfig = require('./weboack.common.js')\n\tconst devConfig = {}\n\t\n\tmodule.exports = merge(commonConfig,devconfig)\n")])])]),n("p",[t._v("​\t\t\nwebpack code splitting 代码分割  通过合理的代码分割，可以使得代码更加优化")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("npm i loadsh\nimport _ from lodash\nentry:{\n\tloadh:'./loadsh'\n}\n\nloadsh是有缓存的，当页面逻辑发生变化，只需要重新加载main.js\noptimization{\n\tsplitChunks:{\n\t\tchunks:'all'\n\t}\n}\n\nbabel-plugin-dynamic-import-webpack\n代码分割和webpack无关，webpack实现代码分割\n1.同步代码：只需要在webpack.common.js中做optimization配置\n2.异步代码：无需做任何配置，自动进行代码分割\n例: function get(){\n\treturn import('loadsh').then(({default:_}) => {\n\t\tlet ele = document.createElement('div')\n\t\tele.innerHTML = _.join(['dell','lee'],'-')\n\t\treturn ele\n\t})\n}\nget().then(ele => {\n\tdocument.body.appendChild(ele)\n})\n")])])]),n("h2",{attrs:{id:"vue中配置webpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue中配置webpack"}},[t._v("#")]),t._v(" vue中配置webpack")])])}),[],!1,null,null,null);e.default=s.exports}}]);