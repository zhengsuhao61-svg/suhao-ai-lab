# 郑苏昊的个人网站

这是一个用于学习 Codex、React 和前端开发的个人网站练手项目。

## 技术栈

- React + Vite
- React Router
- JavaScript

## 本地运行

```bash
npm install
npm run dev
```

## 常用命令

```bash
npm run lint
npm run build
npm run preview
```

## 部署

Vercel 可以直接导入项目，构建命令使用 `npm run build`，输出目录使用 `dist`。

GitHub Pages 已配置自动部署。把代码推送到 GitHub 的 `main` 分支后，GitHub Actions 会自动运行：

```bash
npm run build:github
```

构建后会生成 `dist/index.html` 和 `dist/404.html`，用于支持 React Router 页面刷新。仓库名为 `suhao-ai-lab` 时，发布地址通常是：

```text
https://你的GitHub用户名.github.io/suhao-ai-lab/
```

## 目录结构

```text
src/
  components/   可复用组件
  pages/        页面组件
  App.jsx       路由配置
  main.jsx      应用入口
  styles.css    全局样式
```
