## 步骤
1. readme.md
2. nodejs(v12.22.12)
3. pnpm 初始化
4. git .gitignore
5. 安装webpack webpack-cli
6. 项目结构
   1. config                 webpack配置
   2. envs                   环境变量
   3. public                 静态资源
   4. scripts                脚本
   5. src                    源代码

7. webpack-merge
8. html-webpack-plugin
9. Cleaning up the /dist folder
10. webpack基本配置
11. copy-webpack-plugin



## 概念
[Module API](https://webpack.js.org/api/module-methods/)
[loader system](https://webpack.js.org/concepts/loaders/)
[Code Splitting](https://webpack.js.org/guides/code-splitting/)

## 功能
1. 项目结构
2. 输出管理
3. 开发服务器
4. ES6 语法转换
5. 资源管理
6. 代码分割
7. 代码压缩
8. TreeShaking
9. 静态资源 copy-webpack-plugin

## 
1. 开发服务器配置
2. import()代码分割和preload/prefetch以及懒加载
3. 输出管理
4. 资源管理
5. 输出文件名与浏览器缓存
6. webpack配置中的环境变量 env 
7. Content Security Policies 防止XSS
8. require,require.context
9. HMR实现
10. TreeShaking实现
11. 集成babel或者swc处理js
12. css处理，全局css
13. 环境变量
14. 项目规范
15. 多页应用：app内嵌h5页面实现落地页，活动页时，不用区域业务不关联。可以使用多页应用分别实现不用页面的业务，复用工程化代码，从而拥有了单页应用同样的开发体验，比如组件化，路由，状态管理，css预处理，代码编译，浏览器兼容处理等