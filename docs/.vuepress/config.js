const path = require('path')
module.exports = {
    // base: process.env.NODE_ENV === 'dev' ? '' : '/vuepress-blog/',
    base:'/vuepress-blog/',
    title:'笔记本',
    description:'冰冻三尺非一日之寒，滴水石穿非一日之功。',
    // 导航栏
    themeConfig:{
        nav:[
            {text:'主页',link:'/'},
            {text:'前端',
                items:[
                    {text:'Vue',link:'/frontend/vue/vue'},
                    {text:'React',link:'/frontend/react/react'},
                    {text:'Webpack',link:'/frontend/webpack/webpack'}
                ]
            },
            {text:'后台',
                items:[
                    {text:'Node',link:'/backend/node/node'}
                ]
            },
            {text:'其他',
                items:[
                    {text:'Docker',link:'/others/docker/docker'},
                    {text:'Nginx',link:'/others/nginx/nginx'},
                    {text:'SEO',link:'/others/seo/seo'} 
                ]
            },
            {text:'关于作者',link:'/myself/about'},
            {text:'GitHub',link:'https://github.com/zq981604786/vueprss-blog'},
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
        sidebar:{
            '/frontend/vue/':[
                'vue'
            ],
            '/frontend/react/':[
                'react'
            ],
            '/frontend/webpack/':[
                'webpack'
            ],
            '/backend/node/':[
                'node'
            ],
            '/others/docker/':[
                'docker'
            ],
            '/others/nginx/':[
                'nginx'
            ],
            '/others/seo/':[
                'seo',
                'first'
            ]
        }
        
    },
    plugins:[
        ['@vuepress/back-to-top'],
        ['@vuepress/blog'],
        ['@vuepress/nprogress']
    ],
    markdown: {
        lineNumbers: true,  // 代码显示行号
    },
}