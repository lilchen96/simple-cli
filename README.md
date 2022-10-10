## simple-web-project

#### 基于 esbuild 和 http-server 实现的简单 web 项目初始模板。实现了打包和运行。

##### 1. 安装依赖

`pnpm install`

##### 2. 命令

`pnpm run dev`：启动本地 http 服务，监听文件变更自动打包（无热更新，需手动刷新页面）

`pnpm run build`：项目打包，打包文件位于`dist/*`
