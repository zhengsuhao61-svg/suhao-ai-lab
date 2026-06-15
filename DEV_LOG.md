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
