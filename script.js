const root = document.documentElement;
root.classList.add("js");

const translations = {
  en: {
    "a11y.skip": "Skip to content",
    "nav.focus": "Focus",
    "nav.system": "System",
    "nav.connect": "Connect",
    "hero.eyebrow": "ROBOT LEARNING / FIELD NOTES",
    "hero.titleLead": "Building robots that",
    "hero.titleAccent": "learn from reality.",
    "hero.lede":
      "I explore vision-language-action systems, real-robot learning, and responsive control—connecting data, post-training, deployment, and recovery.",
    "hero.primaryCta": "Explore the focus",
    "hero.sequenceData": "DATA",
    "hero.sequencePolicy": "POLICY",
    "hero.sequenceAction": "ACTION",
    "hero.sequenceFeedback": "FEEDBACK",
    "hero.live": "LIVE",
    "hero.visualSense": "Sense",
    "hero.visualAdapt": "Adapt",
    "hero.visualImprove": "Improve",
    "focus.title": "The problems I care about.",
    "focus.intro":
      "Robot intelligence is a system problem. I focus on the interfaces where models meet data, control, and the physical world.",
    "focus.vlaTitle": "VLA post-training",
    "focus.vlaBody":
      "Turning mixed-quality experience, language, and metadata into controllable behavior—not just a better offline loss.",
    "focus.robotTitle": "Real-robot learning",
    "focus.robotBody":
      "Designing deployment loops that collect failure, intervention, correction, and recovery as useful supervision.",
    "focus.controlTitle": "Responsive control",
    "focus.controlBody":
      "Co-designing action chunks, inference, and execution so intelligence remains useful under real latency constraints.",
    "focus.dataTitle": "Dataset systems",
    "focus.dataBody":
      "Building auditable data pipelines where prompts, labels, provenance, and model-facing transforms stay aligned.",
    "system.title": "A loop, not a one-shot training run.",
    "system.intro":
      "The useful unit of progress is the full cycle from training to deployment and back to better data.",
    "system.trainTitle": "Train a strong prior",
    "system.trainBody": "Start with broad behavior coverage and explicit conditioning.",
    "system.deployTitle": "Deploy in the real system",
    "system.deployBody": "Measure task success, latency, instability, and edge cases.",
    "system.diagnoseTitle": "Diagnose failure structure",
    "system.diagnoseBody": "Separate perception, intent, action, and control failures.",
    "system.recoverTitle": "Learn from correction",
    "system.recoverBody": "Turn intervention and recovery into the next training signal.",
    "system.panelKicker": "OPERATING PRINCIPLES",
    "system.panelTitle":
      "Deployment is not the end of training. It is where the missing curriculum appears.",
    "system.principleA": "Evidence before claims.",
    "system.principleB": "Recovery is a first-class capability.",
    "system.principleC": "Latency is part of the policy.",
    "now.title": "Currently exploring",
    "now.topicOne": "Metadata-conditioned policies",
    "now.topicTwo": "Failure & recovery data",
    "now.topicThree": "RTC & action chunking",
    "now.topicFour": "Real-robot post-training",
    "connect.title": "Follow the work as it becomes public.",
    "connect.body": "GitHub is the canonical place for future code, experiments, and technical notes.",
    "footer.note": "Built with semantic HTML, CSS, and a little JavaScript. No trackers.",
    "footer.back": "Back to top ↑",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    languageLabel: "中文",
    languageAria: "切换为中文",
  },
  zh: {
    "a11y.skip": "跳到正文",
    "nav.focus": "方向",
    "nav.system": "闭环",
    "nav.connect": "联系",
    "hero.eyebrow": "机器人学习 / 现场笔记",
    "hero.titleLead": "让机器人从",
    "hero.titleAccent": "真实世界中持续学习。",
    "hero.lede":
      "我关注视觉-语言-动作系统、真实机器人学习与响应式控制，把数据、后训练、部署和恢复连接成闭环。",
    "hero.primaryCta": "查看研究方向",
    "hero.sequenceData": "数据",
    "hero.sequencePolicy": "策略",
    "hero.sequenceAction": "动作",
    "hero.sequenceFeedback": "反馈",
    "hero.live": "运行中",
    "hero.visualSense": "感知",
    "hero.visualAdapt": "适应",
    "hero.visualImprove": "迭代",
    "focus.title": "我关注的问题。",
    "focus.intro": "机器人智能是一个系统问题。我关注模型与数据、控制和物理世界真正相接的界面。",
    "focus.vlaTitle": "VLA 后训练",
    "focus.vlaBody": "把混合质量经验、语言和元数据转化为可控行为，而不只是在离线指标上优化损失。",
    "focus.robotTitle": "真实机器人学习",
    "focus.robotBody": "设计可收集失败、干预、纠正和恢复数据的部署闭环，让现场经验成为有效监督。",
    "focus.controlTitle": "响应式控制",
    "focus.controlBody": "协同设计动作分块、推理与执行，使模型在真实延迟约束下仍然有效。",
    "focus.dataTitle": "数据集系统",
    "focus.dataBody": "构建可审计的数据管线，让提示词、标签、来源与模型侧变换始终对齐。",
    "system.title": "持续闭环，而不是一次训练。",
    "system.intro": "真正有用的进步单位，是从训练到部署、再回到更好数据的完整循环。",
    "system.trainTitle": "训练强初始策略",
    "system.trainBody": "从广泛的行为覆盖和显式条件控制开始。",
    "system.deployTitle": "部署到真实系统",
    "system.deployBody": "测量任务成功率、延迟、不稳定性与边界情况。",
    "system.diagnoseTitle": "诊断失败结构",
    "system.diagnoseBody": "区分感知、意图、动作生成与控制执行问题。",
    "system.recoverTitle": "从纠正中学习",
    "system.recoverBody": "把人工干预与恢复轨迹转化为下一轮训练信号。",
    "system.panelKicker": "工作原则",
    "system.panelTitle": "部署不是训练的终点，而是缺失课程真正出现的地方。",
    "system.principleA": "证据先于结论。",
    "system.principleB": "恢复能力是一等能力。",
    "system.principleC": "延迟本身就是策略的一部分。",
    "now.title": "正在探索",
    "now.topicOne": "元数据条件策略",
    "now.topicTwo": "失败与恢复数据",
    "now.topicThree": "RTC 与动作分块",
    "now.topicFour": "真实机器人后训练",
    "connect.title": "关注接下来公开的工作。",
    "connect.body": "后续代码、实验与技术笔记将以 GitHub 为准。",
    "footer.note": "使用语义化 HTML、CSS 和少量 JavaScript 构建，不含统计追踪。",
    "footer.back": "返回顶部 ↑",
    themeLight: "切换到浅色主题",
    themeDark: "切换到深色主题",
    languageLabel: "EN",
    languageAria: "Switch to English",
  },
};

const themeToggle = document.querySelector("[data-theme-toggle]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-language-label]");

function preferredTheme() {
  const storedTheme = localStorage.getItem("ruyi-theme");
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function currentLanguage() {
  const storedLanguage = localStorage.getItem("ruyi-language");
  if (storedLanguage === "zh" || storedLanguage === "en") return storedLanguage;
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

let activeLanguage = currentLanguage();

function applyTheme(theme) {
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#0b0e13" : "#f1f2ed";
  const label = theme === "dark" ? translations[activeLanguage].themeLight : translations[activeLanguage].themeDark;
  themeToggle.setAttribute("aria-label", label);
}

function applyLanguage(language) {
  activeLanguage = language;
  root.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[language][key];
    if (value) element.textContent = value;
  });

  languageLabel.textContent = translations[language].languageLabel;
  languageToggle.setAttribute("aria-label", translations[language].languageAria);
  applyTheme(root.dataset.theme);
}

applyTheme(preferredTheme());
applyLanguage(activeLanguage);

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("ruyi-theme", nextTheme);
  applyTheme(nextTheme);
});

languageToggle.addEventListener("click", () => {
  const nextLanguage = activeLanguage === "en" ? "zh" : "en";
  localStorage.setItem("ruyi-language", nextLanguage);
  applyLanguage(nextLanguage);
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const header = document.querySelector("[data-header]");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

// Keep the first screen readable even when background tabs throttle observers.
document.querySelectorAll(".hero .reveal").forEach((element) => element.classList.add("is-visible"));

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );

  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    observer.observe(element);
  });
}
