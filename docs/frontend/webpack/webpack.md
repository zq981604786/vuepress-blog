# 安装webpack
	npm init -y
	npm i webpack-cli  webpack --save-dev
	

	npx webpack index.js
	
	webpack是一个模块打包工具
	 
	// CommonJS   let header = require('./header.js')   module.exports = header
	// Es module  import headr from './header.js'       export default header
	
	package.json 中的private:true,不会发布到node中
	
	npm i webpack webpack-cli -g
	webpack -v 查看版本号   最好不要全局安装，会导致其他版本的webpack无法运行
	
	npm info webpack 查看版本号
	
	npx运行当前目录下的文件
	npx webpack --config webpackconfig.js  改变webpack默认打包配置文件
	webpack-cli 的作用是在命令行中使用webpack的命令

# webpack配置

module.exports = {

	## mode:'production', // development
	## entry:'' //入口简写

<!-- 	## entry:{ 
		## main:''
	} -->
	## output:{
		## filename:'',
		## path:path.reslove(__driname,'')
	}，
	module:{
		rules:[
			{
				test:/\.jpg$/,
				use:{
					loader:'file-loader'
				}
			}
		]
	}
}

# 打包过程

	hash 本次打包唯一一个哈希值
	version webpack 的版本
	time 时间
	built
	bundle 打包出的文件
	chunk 和 chunks放置的是id和名字
	Entrypoint 整个打包文件入口文件

## webpack实践   loader

	loader让webpack识别文件，在module下面的rules中配置  //file-loader,url-loader，直接将图标加载在js中，将图片转为base64。仅适用于图标较小的，否则会影响js加载
	module:{
		rules:[
			{
				test:/\.jpg$/,
				use:{
					loader:'url-loader'
				},
				options:{
					name:'[name].[ext]' // 采用之前的名字和后缀 placeholder占位符
					outputPath:'images/' // 输出目录
					limit:2048 // 如果图标小于2kb，则直接放在js中
				}
			}
		]
	}
	
	style-loader  将css解析挂在在页面 
	css-loader  分析多个css直接的关系
	sass-loader
	postcss-loader 自动添加厂商的前缀，以便兼容各个浏览器
		postcss.config.js
			module.exports = {
				plugins:[
					require('autoprefixer')
				]
			}
	loader有执行顺序，从上到下，从右到左


​	

	use:['style-loader',{
	                    loader:'css-loader',
	                    options:{
	                        importLoaders:2  //使用这个确保在js中引入的css中的其他css也使用sass或postcss-loader
							modules:true  // 是的css模块化，css只在当前引入页面生效  import style from './index'    img.classList.add(style.avter)
	                    }
	                }]   
	
	打包字体

## plugins  让webpack运行到某个时刻的时候，做一些事情，类似于生命周期

	npm i html-webpack-plugin  // 热更新,会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入html文件中    打包之后运行的
	let HtmlWebpackPlugin = require('html-webpack-plugin')
	plugins:[new HtmlWebpackPlugin({
		template:'' //默认生成模板地址地址
		)]
		
	npm i clean-webpack-plugin -d 清除生成的打包文件
	let CleanWebpackPlugin = reuqire('clean-webpack-plugin')
	plugins:[new CleanWebpackPlguin(['dist'])] // 帮助我们删除dist目录下的所有东西   打包之前运行的

## output entry

	entry:{
		main:'./index.js',
		sub:'./index.js'
	}
	output:{
		filename:'[name].js',
		publicPath:'http://cdn.com.cd' //打包文件加一个路径
	}

## sourceMap  是一个映射关系，出说那块代码报错  看源代码哪错了，而不是打包之后的代码

	在开发者模式下默认是配置好的 mode:'development'
	devtool:'none'
	devtool:'source-map'
	devtool:'inline-source-map'  //隐藏.map.js文件，直接打包在js文件中  好烦性能  具体的位置，具体到列
	devtool:'cheap-inline-source-map'  //只需要告诉具体的行，不需要具体的列
	devtool:'cheap-module-source-map' //模块中的错误
	devtool:'eval' //直接执行，针对比较复杂的情况下，这个有可能不全面
	
	推荐使用 development
	devtool:'cheap-module-eval-source-map'
	
	//线上的代码
	devtool:'cheap-module-source-map'

## webpackDevServe

	1."dev":"webpack -watch"  // 不是http
	2. 在使用ajax请求的时候，需要http请求
	配置:
		devServer:{
			contentBase:'./dist' //启动一个服务器
			open:true //在启动的时候自动打开浏览器
			proxy:{
				'/api':'http://localhost:3000'
			}，
			hot:true,
			hotOnly:true  //即便hrm没有生效，也不让浏览器刷新
		}
		npm i webpack-dev-server
		"start":"webpack-dev-server"
		
		const webpack = require('webpack')
		plugins:[
			new webpackHotModuleReplacementPlugin()  //配置devserver的hot，之后，webapck的hrm实现
		]
		
		import number from './numver'
		if(module.hot){
			module.hot.accept('./number',() => {  //监控变化
				number()  // 如果number发生了变化，则执行number，重新渲染
			})
		}


​		

		// 自己写一个devserver
		npm i webpack-dev-middleware express
		const express = require('express')
		const webpack = require('webpack')
		cont webpackDevMiddleware = require('webpack-dev-milldleware')
		const config = require('./webpack.config.js')
		const complier = webpack(config)
		const app = express()
		
		app.use(webpackDevMiddleware(complier,{
			publicPath:config.output.publicPath
		}))
		app.listen(3000)


​		
​		

		bebel安装
		npm i babel-loader @babel/core
		exclude:'/node_modules'  //如果在这里面，则不使用babel。排除在外
		npm i @bebel/preset-env   //包含了es6转es5的规则
		module:{
			rules:[
				{
					test:/\.js$/,
					exclude:'/node_modules',
					loader:'babel-loader',
					options:{
						presets:['@babel/preset-env']
					}
				}
			]
		}
		
		如何在低版本浏览器运行  @babel/polyfill
		import '@babel/polyfill'   //在需要的地方引入，但是打包之后的文件会过大
		{
			test:/\.js$/,
			exclude:'/node_modules',
			loader:'babel-loader',
			options:{
				presets:[
					['@babel/preset-env',{useBuiltIns:'usage'},targets:{chrome:'67'}]  // 当我用babel/polyfill的时候，根据业务 代码来跟进加什么         targets 运行在谷歌版本大于67的
					]
			}
		}
		
		@babel/plugin-transform-runtime
		@babel/runtime
		options:{
			"plugins":[
				["@babel/plugin-transform-runtime",{
					"corejs":2,    //如果是2 还需要安装   @babel/runtime-corejs2
					"helpers":true,
					"regenerator":true,
					"useESModules":false
				}]
			]
		}
		
		.babelrc
			把options中的内容放在这里面。则上面不写options
			{useBuiltIns:'usage'}//按需引入


​		

		babel配置react    //babrlrc的执行顺序是从下到上，从右到左
		@babel/preset-react


​		

		Tree Shaking  //把用到的打包，没用到的不打包。  只支持esModule模块。  import * from ''
		plugins:[
			optimization:{
				usedExports:true
			}
		]
		在package.json中配置
		sideEffects:false     
		sideEffects:["@babel/polly-fill"]
		sideEffects:[
			"*.css"
		]
		在mode：'productes'中tree shaking默认被配置好


​		
​		

		创建 
		webpack.dev.js  //开发环境
		webpack.prod.js // 生成环境
		
		package.json
		scripts:{
			"dev":'webpack-dev-server --config webpack.dev.js'
			"build":"webpack --config webpack.prod.js"
		}
		
		webpack.common.js
		module.exports = {
			
		}
		
		npm i webpack-merge //将webpack模块合并
		const merge = require('webpack-merge')
		const commonConfig = require('./weboack.common.js')
		const devConfig = {}
		
		module.exports = merge(commonConfig,devconfig)


​		
webpack code splitting 代码分割  通过合理的代码分割，可以使得代码更加优化

	npm i loadsh
	import _ from lodash
	entry:{
		loadh:'./loadsh'
	}
	
	loadsh是有缓存的，当页面逻辑发生变化，只需要重新加载main.js
	optimization{
		splitChunks:{
			chunks:'all'
		}
	}
	
	babel-plugin-dynamic-import-webpack
	代码分割和webpack无关，webpack实现代码分割
	1.同步代码：只需要在webpack.common.js中做optimization配置
	2.异步代码：无需做任何配置，自动进行代码分割
	例: function get(){
		return import('loadsh').then(({default:_}) => {
			let ele = document.createElement('div')
			ele.innerHTML = _.join(['dell','lee'],'-')
			return ele
		})
	}
	get().then(ele => {
		document.body.appendChild(ele)
	})

## vue中配置webpack