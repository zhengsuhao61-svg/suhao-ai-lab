# 郑苏昊的个人网站

这是一个用于学习 React、Codex、Node.js、Express 和 SQLite 的个人全栈网站项目。

## 技术栈

- 前端：React + Vite + React Router
- 后端：Express
- 数据库：SQLite

## 项目结构

```text
src/
  components/        可复用前端组件
  pages/             页面组件
  App.jsx            路由配置
  main.jsx           前端入口
  styles.css         全局样式
backend/
  .env.example       后端环境变量示例
  db.js              SQLite 初始化与数据库操作
  server.js          Express 服务入口
scripts/
  create-spa-fallback.mjs
```

## 本地开发

1. 安装前端依赖

```bash
npm install
```

2. 安装后端依赖

```bash
cd backend
npm install
```

3. 启动后端

```bash
cd backend
npm run dev
```

4. 另开一个终端启动前端

```bash
npm run dev
```

开发环境地址：

- 前端：`http://localhost:5173`
- 后端：`http://localhost:3001`
- 后端测试接口：`http://localhost:3001/api/test`

开发环境下，Vite 会将 `/api` 请求代理到后端。

## 生产环境启动流程

这个项目已经整理为“前端先构建，后端再托管前端静态文件”的模式。

1. 安装前端依赖

```bash
npm install
```

2. 安装后端依赖

```bash
cd backend
npm install
```

3. 构建前端

```bash
npm run build
```

4. 启动生产服务

```bash
npm start
```

启动后，Express 会：

- 提供 `/api/*` 后端接口
- 自动托管 `dist/` 中的前端静态文件
- 支持 React Router 的页面刷新访问

## 环境变量

后端支持以下环境变量，示例见 [backend/.env.example](C:/Users/30386/Desktop/AI/suhao-ai-lab/backend/.env.example)：

- `PORT`：后端服务端口，默认 `3001`
- `DB_PATH`：SQLite 数据库文件路径，默认 `backend/data.sqlite`
- `FRONTEND_DIST_PATH`：前端构建目录路径，默认 `../dist`

说明：

- 当前项目没有引入 `dotenv`
- 本地开发时可以直接使用系统环境变量
- 部署到平台时，请在平台的环境变量面板中设置这些值

## 数据库说明

服务启动时会自动：

- 创建 SQLite 数据库文件
- 创建 `messages` 表

表结构：

```text
id INTEGER PRIMARY KEY AUTOINCREMENT
name TEXT NOT NULL
content TEXT NOT NULL
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
```

## 已有接口

- `GET /api/test`
- `POST /api/messages`
- `GET /api/messages`

## 部署说明

### 方案一：GitHub Pages

当前仓库已经保留 GitHub Pages 工作流，但这个方案只能部署前端静态页面。

适合：

- 首页展示
- 关于我
- 项目展示
- 留言页面外观

不适合：

- Express 接口
- SQLite 数据库存储
- 在线留言提交
- 后台留言查看

GitHub Pages 构建命令：

```bash
npm run build:github
```

### 方案二：完整全栈部署

如果要让留言系统在线可用，需要部署到支持 Node.js 的平台，并保证 SQLite 文件可持久化保存。

上线前请确认：

1. 已安装前后端依赖
2. `npm run build` 成功
3. `npm start` 可以正常启动
4. 平台支持 Node.js
5. 平台支持持久化存储 SQLite 文件
6. 已配置 `PORT`、`DB_PATH`、`FRONTEND_DIST_PATH` 等环境变量

### 方案三：Railway

当前项目已经补充 Railway 部署配置文件 [railway.toml](C:/Users/30386/Desktop/AI/suhao-ai-lab/railway.toml)。

推荐部署方式：

1. 从 GitHub 仓库导入当前项目
2. 使用 Railway 自动读取 `railway.toml`
3. 为服务添加一个 Volume
4. 将 Volume 挂载到：

```text
/data
```

5. 在服务环境变量中设置：

```text
DB_PATH=/data/data.sqlite
FRONTEND_DIST_PATH=../dist
```

说明：

- `railway.toml` 已指定构建命令和启动命令
- 健康检查路径为 `/api/test`
- SQLite 需要依赖 Railway Volume 才能持久化
- 如果不挂载 Volume，部署重启后留言数据可能丢失

Railway 相关依据：

- Railway 支持通过 `railway.toml`/`railway.json` 定义 build 和 deploy 配置
- Railway Volume 可提供持久化目录，并可通过绝对挂载路径读写数据

来源：
[Railway Config as Code](https://docs.railway.com/config-as-code/reference)
[Railway Volumes](https://docs.railway.com/volumes)

## 常用命令

```bash
npm run dev
npm run dev:backend
npm run lint
npm run build
npm start
```
