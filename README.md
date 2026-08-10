# 龚志路的个人主页

这是 [Ruyi-LimX.github.io](https://ruyi-limx.github.io/) 的静态源码。页面以白色为主，按个人简历组织实习、项目、竞赛、教育、技能与联系方式，并为后续项目图片和视频保留了独立区域。

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>。

## 上传图片与视频

建议将媒体文件放到以下目录：

- `assets/images/`：项目封面、真机照片和个人照
- `assets/videos/`：项目演示视频

推荐使用 WebP/JPEG 图片和 H.264 MP4 视频。图片应提前压缩；视频不自动播放，并建议保留一个 16:9 封面图。

### 图片替换示例

在 `index.html` 的 `PROJECT IMAGE` 占位处，将 `.media-placeholder` 替换为：

```html
<img
  src="assets/images/robot-project.webp"
  width="1600"
  height="900"
  loading="lazy"
  alt="在此写清楚机器人、任务和场景"
/>
```

### 视频替换示例

在 `index.html` 的 `DEMO VIDEO` 占位处，将 `.media-placeholder` 替换为：

```html
<video controls preload="metadata" playsinline poster="assets/images/vla-demo-poster.webp">
  <source src="assets/videos/vla-demo.mp4" type="video/mp4" />
  当前浏览器不支持 HTML5 视频。
</video>
```

若视频较大，建议先压缩或使用外部视频平台，再在主页中嵌入或链接，避免 GitHub 仓库和页面加载压力。

## 内容与隐私

当前内容依据用户提供的简历整理。公开页面保留了校内邮箱作为职业联系方式；未公开手机号、微信号和简历证件照。

## 文件说明

- `index.html`：页面内容与语义结构
- `styles.css`：白色视觉系统与响应式布局
- `script.js`：仅更新页脚年份
- `favicon.svg`：网站图标

页面不使用第三方 JavaScript、统计或追踪代码。
