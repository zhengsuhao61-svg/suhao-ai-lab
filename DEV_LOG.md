## 阶段 1：项目初始化

### 🎯 目标
创建一个基于 React + Vite 的个人网站基础项目

### 🧠 技术
React + Vite + npm

### 📁 文件变更
- 初始化 Vite 项目结构
- 生成 package.json
- 创建 src 目录
- 创建基础入口文件（main.jsx / App.jsx）
- 安装项目依赖 node_modules

### ✅ 结果
成功运行 React + Vite 项目，可以通过 npm run dev 正常启动开发服务器

---

## 阶段 2：多页面路由系统（已完成）

### 🎯 目标
实现 React Router 多页面个人网站结构

### 🧠 技术
React Router + React + Vite

### 📁 文件变更
- 创建 pages/ 目录
- 创建 Home.jsx
- 创建 About.jsx
- 创建 Projects.jsx
- 创建 Message.jsx
- 更新 App.jsx（路由配置）
- 更新 main.jsx（BrowserRouter 配置）
- 创建 components/Navbar.jsx（顶部导航栏）
- 创建 components/Layout.jsx（页面布局）
- 更新 styles.css（基础页面样式）
- 移除未使用的 UI 图标库与 Tailwind/PostCSS 配置，保持阶段 2 代码简洁

### ✅ 结果
项目具备多页面切换能力，可以通过顶部导航栏访问首页、关于我、项目展示、留言板页面。

---

## 阶段 3：科技风 UI 系统升级（已完成）

### 🎯 目标
在不改变路由结构和功能范围的前提下，将个人网站升级为深色科技风视觉风格

### 🧠 技术
React + Vite + CSS

### 📁 文件变更
- 更新 styles.css（深色科技风主题、背景网格、卡片样式、hover 动效）
- 更新 Navbar.jsx（科技风导航栏与站点标识）
- 更新 Home.jsx（首页重点视觉升级）
- 更新 About.jsx（卡片化内容布局）
- 更新 Projects.jsx（项目展示卡片）
- 更新 Message.jsx（留言板静态卡片）

### ✅ 结果
网站保持原有页面和路由结构，视觉升级为科技风，并具备基础 hover 交互效果。

---

## 阶段 4：动态背景与视觉增强（已完成）

### 🎯 目标
在不改变页面结构和功能的前提下，增加科技风动态视觉效果

### 🧠 技术
React + Vite + CSS 动画

### 📁 文件变更
- 更新 styles.css（动态星空、背景网格漂移、渐变光效、页面入场动画）
- 增强 hover 效果（导航、卡片、首页技术标签）
- 增强首页视觉（发光标题、状态点脉冲、面板扫描光）

### ✅ 结果
网站保留原有功能和路由结构，新增动态背景与轻量动画效果，不引入后端或复杂依赖。

---

## 阶段 5：留言板功能（已完成）

### 🎯 目标
实现一个无需后端的本地留言板功能

### 🧠 技术
React + Vite + localStorage

### 📁 文件变更
- 更新 Message.jsx（添加留言表单、留言列表、本地保存、删除留言）
- 更新 styles.css（留言板表单、列表、按钮和响应式样式）
- 使用 localStorage 保存留言数据，刷新页面后自动恢复

### ✅ 结果
留言板支持添加、显示、删除留言，数据保存在当前浏览器 localStorage 中，刷新页面不会丢失。

---

## 阶段 6：部署准备（已完成）

### 🎯 目标
确保 React + Vite 项目可以上线部署

### 🧠 技术
React + Vite + 静态部署

### 📁 文件变更
- 更新 package.json（build 后自动生成 SPA fallback，新增 build:github）
- 更新 vite.config.js（明确构建输出资源目录并关闭 sourcemap）
- 更新 main.jsx（根据 Vite base 支持部署子路径）
- 新增 scripts/create-spa-fallback.mjs（复制 dist/index.html 为 dist/404.html）
- 新增 vercel.json（Vercel SPA rewrite）
- 新增 public/.nojekyll（GitHub Pages 静态资源兼容）
- 新增 .github/workflows/deploy.yml（GitHub Pages 自动部署）
- 更新 README.md（补充部署说明）

### ✅ 结果
项目可以生成可部署的 dist 目录，并兼容 Vercel 与 GitHub Pages 的基础静态部署场景。

---

## 阶段7：后端基础搭建

### 🎯 目标

为网站建立 Node.js + Express 后端服务

### 🧠 技术

Node.js
Express

### 📁 文件变更

- 新增 backend/ 目录
- 新增 backend/server.js
- 新增 backend/package.json
- 新增 backend/package-lock.json
- 安装 backend/node_modules 依赖
- 修改 vite.config.js（新增 /api 代理配置）
- 修改 README.md（补充后端启动与联调说明）

### ✅ 结果

后端成功运行
可通过 /api/test 访问测试接口

---

## 阶段8：SQLite数据库接入

### 🎯 目标

建立留言系统数据库

### 🧠 技术

SQLite
sqlite3

### 📁 文件变更

- 安装 backend/sqlite3 依赖
- 新增 backend/db.js
- 修改 backend/server.js（服务启动时自动初始化数据库）
- 修改 backend/package.json
- 修改 backend/package-lock.json
- 修改 README.md（补充数据库说明）

### ✅ 结果

数据库成功创建
messages表成功创建

---

## 阶段9：留言提交系统

### 🎯 目标

实现留言提交

### 🧠 技术

React
Express
SQLite

### 📁 文件变更

- 安装 axios
- 修改 backend/db.js（新增留言写入方法）
- 修改 backend/server.js（新增 POST /api/messages 接口与参数校验）
- 修改 src/pages/Message.jsx（改为提交到后端数据库）
- 修改 src/styles.css（增加提交状态与反馈样式）
- 修改 README.md（补充留言提交说明）

### ✅ 结果

访客可提交留言
留言保存到数据库

---

## 阶段10：后台留言管理

### 🎯 目标

查看访客留言

### 🧠 技术

React
Express
SQLite

### 📁 文件变更

- 修改 backend/db.js（新增读取全部留言的方法）
- 修改 backend/server.js（新增 GET /api/messages 接口）
- 新增 src/pages/AdminMessages.jsx
- 修改 src/App.jsx（新增后台留言路由）
- 修改 src/components/Navbar.jsx（新增后台入口）
- 修改 src/styles.css（补充留言列表展示样式）
- 修改 README.md（补充后台留言查看说明）

### ✅ 结果

管理员可查看所有留言

---

## 阶段11：留言系统安全优化

### 🎯 目标

防止恶意刷留言和无效数据

### 🧠 技术

Express
SQLite

### 📁 文件变更

- 修改 backend/server.js（新增服务端校验、字符清洗与频率限制）
- 修改 src/pages/Message.jsx（同步前端输入长度限制与提示）

### ✅ 结果

无效数据会被拦截
正常留言可继续提交

---

## 阶段12：全栈网站部署准备

### 🎯 目标

确保前后端项目可部署上线

### 🧠 技术

React
Express
SQLite

### 📁 文件变更

- 修改 backend/db.js（支持环境变量数据库路径）
- 修改 backend/server.js（支持生产环境托管 dist 静态文件）
- 修改 package.json（补充根目录启动与前后端脚本）
- 修改 .gitignore（忽略本地 SQLite 数据库文件）
- 新增 backend/.env.example
- 修改 README.md（重写为全栈部署说明）

### ✅ 结果

项目具备完整部署说明
前后端生产启动路径已整理
无阻塞问题

---

## 阶段13：Railway部署配置准备

### 🎯 目标

为全栈网站接入 Railway 部署配置，准备公网可访问的留言系统

### 🧠 技术

Railway
Express
SQLite

### 📁 文件变更

- 新增 railway.toml（Railway 构建、启动、健康检查配置）
- 新增 .env.example（根目录部署变量示例）
- 修改 README.md（补充 Railway 部署说明和 Volume 挂载路径）

### ✅ 结果

仓库已具备 Railway 所需基础配置
SQLite 已有明确持久化挂载方案

---

## 阶段14：推送项目到 GitHub

### 🎯 目标

将当前全栈项目最新代码推送到 GitHub，供 Railway 导入部署

### 🧠 技术

Git
GitHub

### 📁 文件变更

- 提交当前项目全部阶段 7-13 的代码与部署配置
- 推送到 GitHub 仓库 `main` 分支

### ✅ 结果

GitHub 仓库已更新为最新全栈版本
Railway 可直接从 GitHub 导入当前项目

---

## 阶段15：授权 Railway 访问 GitHub 仓库

### 🎯 目标

让 Railway 获得指定 GitHub 仓库访问权限

### 🧠 技术

Railway
GitHub App

### 📁 文件变更

- 无本地代码变更
- 完成 Railway GitHub App 仓库授权

### ✅ 结果

Railway 已获得 `suhao-ai-lab` 仓库访问权限

---

## 阶段16：在 Railway 创建项目并导入仓库

### 🎯 目标

从 GitHub 仓库创建 Railway 服务并触发首次部署

### 🧠 技术

Railway
GitHub Repository

### 📁 文件变更

- 无本地代码变更
- 在 Railway 中创建项目并导入 GitHub 仓库

### ✅ 结果

Railway 服务已创建
首次部署已启动

---

## 阶段17：修复 Railway 健康检查失败

### 🎯 目标

修复 Railway 首次部署后的健康检查失败问题

### 🧠 技术

Railway
Express

### 📁 文件变更

- 修改 package.json（根启动命令改为直接运行 backend/server.js）
- 修改 railway.toml（启动命令改为直接运行 backend/server.js）
- 修改 backend/server.js（显式监听 0.0.0.0）
- 修改 backend/db.js（启动前自动创建数据库目录）

### ✅ 结果

本地已验证健康检查链路正常
准备推送修复并触发 Railway 重新部署

---

## 阶段18：修复 Railway 运行时依赖问题

### 🎯 目标

解决 Railway 重新部署后仍无法通过健康检查的问题

### 🧠 技术

Railway
Node.js
Express
SQLite

### 📁 文件变更

- 修改 railway.toml（简化构建命令）
- 修改 package.json / package-lock.json（将 Express 和 sqlite3 提升到根项目依赖）

### ✅ 结果

本地已按 Railway 运行方式重新验证通过
准备再次推送并触发 Railway 重部署

---

## 阶段19：切换为 Docker 部署以修复 sqlite3 兼容问题

### 🎯 目标

解决 Railway 运行环境与 sqlite3 原生模块的系统库不兼容问题

### 🧠 技术

Docker
Railway
Node.js
SQLite

### 📁 文件变更

- 新增 Dockerfile
- 新增 .dockerignore
- 修改 railway.toml（切换为 Dockerfile 构建）
- 修改 README.md（补充 Docker 部署说明）

### ✅ 结果

部署策略已从 Railpack 调整为 Docker
准备重新推送并在 Railway 上验证 sqlite3 兼容性问题是否解决

### 补充修复记录

- 根据 Railway Deploy Logs 确认部署失败根因不是环境变量，而是 `sqlite3` 原生模块加载时报错：`GLIBC_2.38 not found`
- 修改 `Dockerfile`，安装 `python3`、`make`、`g++`
- 修改 `Dockerfile`，启用 `npm install --build-from-source`，强制在镜像内源码编译 `sqlite3`
- 目标是让 Railway 运行时与 `sqlite3` 二进制产物保持一致，避免再次因系统库不兼容导致服务启动即崩溃
- 继续排查公网访问 `Cannot GET /` 问题，确认根因是 `Dockerfile` 中写死的 `FRONTEND_DIST_PATH=../dist`
- 在 Railway 容器中该路径会从 `/app` 解析到错误的 `/dist`，导致后端找不到前端构建产物
- 删除 `Dockerfile` 中的 `FRONTEND_DIST_PATH`，改为使用 `backend/server.js` 的默认前端目录解析逻辑
