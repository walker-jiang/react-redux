# antd-redux

A react boilerplate built with redux and ant-design.

Using restful API powered by leancloud.

### 初衷

  中小型管理后台在工作室内部日常项目中已然标配, 并且大多数由后端负责，使用的模板良莠不齐，没有规范，甚至引入各种前端bug，不能保证开发效率。

  Ant Design是蚂蚁金服为中后台开发的前端解决方案，同样是为了解决集团内的这类问题。
  
  管理后台的前端需求较为集中，大多为表单，图表，展示列表等业务组件，提高开发效率的关键是高效方便地配置与调动这些组件，减少与业务逻辑代码的耦合，让后端开发专注于后台逻辑的实现。

### 原则

- 贴合业务，适应灵活的业务需求
- 方便配置，尽可能发挥 JSX 的优越性
- 封装React路由，抽象成数据结构代码
- 友好的状态展示，如各类请求的 message，process 等
- 每个 JSX 文件包含一个主组件

### 架构

|结构|选型|
|---|---|
|View层|React|
|路由|React-Router|
|UI组件|Ant.design|
|HTTP|[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)|
|数据层|Redux|
|Middleware|[redux-logger](https://github.com/fcomb/redux-logger) [redux-thunk](https://github.com/gaearon/redux-thunk)|

### Dev

1. `npm install`
2. `npm run dev` 使用 dora 作为本地开发的 web 服务器监听 8001
3. 登录账号: guest guest

### Usage

build完成后在项目入口文件中引入两个文件. 默认 webpack 配置将第三方库单独打包到 `vendor.bundle.js` 中, 部分非系统核心库采用 amd 方式在使用的时候异步引入.
```
  <script src="./vendor.bundle.js"></script>
  <script src="./index.js"></script>
```

### 目录结构

- actions
- components
- config
  - app.js
  - ...
- constants
  - actions.js
  - ...
- reducers
  - auth.reducer.js
  - message.reducer.js
- routes
- lib
- index.jsx
- router.jsx
- store.js

### 核心State

  - message: 全局消息通知, 即 ant-design 的 message 组件

    ```
     {
        "message": {},
        "notification": {}
     }
    ```

  - login
  - loading

### 语法特性

项目中尝试性地通过 babel 引入 ES6/ES7 新特性和实用的语法糖, 旨在编写可读性好,简洁优雅的代码.

ES6:
 - Class
 - Arrow function
 - Module
 - let / const
 - Destructuring assignment
 - Spread operator

ES7:
 - Property initializer
 - Decorator


### 参考文献

  [Best practice on handling data flow for login / signup pages with redirect](https://github.com/reactjs/redux/issues/297)
  [flux-standard-action](https://github.com/acdlite/flux-standard-action)
