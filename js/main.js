const paths = [
  {
    title: "海外申请",
    key: "留学",
    icon: "海",
    color: "#245b8d",
    desc: "语言考试、选校定位、套磁、文书、网申、奖学金和签证。",
    tags: ["语言", "选校", "文书", "签证"]
  },
  {
    title: "保研与夏令营",
    key: "保研",
    icon: "保",
    color: "#236052",
    desc: "排名、科研、竞赛、夏令营、预推免、面试和导师沟通。",
    tags: ["排名", "夏令营", "面试", "导师"]
  },
  {
    title: "考研备考",
    key: "考研",
    icon: "研",
    color: "#ba5141",
    desc: "择校、公共课、专业课、复试、调剂和二战决策。",
    tags: ["择校", "初试", "复试", "调剂"]
  },
  {
    title: "就业与实习",
    key: "就业",
    icon: "职",
    color: "#7b4aa2",
    desc: "简历、项目、笔试、面试、实习转正、校招和教师招聘。",
    tags: ["简历", "实习", "校招", "教招"]
  },
  {
    title: "科研与竞赛",
    key: "科研",
    icon: "科",
    color: "#b6842f",
    desc: "进组、论文、竞赛、项目管理、学术规范和推荐信积累。",
    tags: ["进组", "论文", "竞赛", "推荐信"]
  },
  {
    title: "校园生存",
    key: "生活",
    icon: "生",
    color: "#2c6d73",
    desc: "选课、绩点、转专业、双学位、住宿、通勤和信息源。",
    tags: ["选课", "绩点", "校区", "信息源"]
  }
];

const articles = [
  ["留学", "海外申请总览：从定位到签证", ["路线图", "待征集"]],
  ["留学", "语言考试与时间规划", ["IELTS/TOEFL", "待征集"]],
  ["留学", "文书、推荐信与材料清单", ["材料", "待征集"]],
  ["保研", "保研资格与排名规则整理", ["政策", "待征集"]],
  ["保研", "夏令营申请材料准备", ["夏令营", "待征集"]],
  ["保研", "预推免面试复盘合集", ["面试", "待征集"]],
  ["考研", "山师学生考研择校方法", ["择校", "待征集"]],
  ["考研", "公共课与专业课复习节奏", ["备考", "待征集"]],
  ["考研", "复试、调剂与二战决策", ["复试", "待征集"]],
  ["就业", "简历与项目经历打磨", ["简历", "待征集"]],
  ["就业", "互联网、国企与事业单位路径", ["校招", "待征集"]],
  ["就业", "师范生教招与编制考试", ["教招", "待征集"]],
  ["科研", "如何进入课题组", ["科研入门", "待征集"]],
  ["科研", "本科生论文与竞赛复盘", ["竞赛", "待征集"]],
  ["科研", "学术诚信与引用规范", ["规范", "待征集"]],
  ["生活", "长清湖与千佛山校区信息源", ["校区", "待征集"]],
  ["生活", "选课、绩点与转专业经验", ["选课", "待征集"]],
  ["生活", "奖助学金与校园资源", ["资源", "待征集"]]
].map(([category, title, tags], index) => ({
  id: index + 1,
  category,
  title,
  tags,
  status: "待征集",
  desc: "预留文章位。后续可将 Markdown 放入 content/articles，并在此处补充摘要。"
}));

const cases = [
  ["留学", "海外硕士申请案例"],
  ["留学", "海外博士申请案例"],
  ["保研", "本校保研案例"],
  ["保研", "外校推免案例"],
  ["考研", "一战上岸案例"],
  ["考研", "调剂成功案例"],
  ["就业", "企业校招案例"],
  ["就业", "教师招聘案例"],
  ["科研", "本科科研进组案例"],
  ["科研", "竞赛项目案例"],
  ["生活", "转专业案例"],
  ["生活", "奖学金申请案例"]
].map(([category, title], index) => ({
  id: index + 1,
  category,
  title,
  status: "空位"
}));

const timelines = [
  {
    title: "大一",
    items: ["确认培养方案与绩点规则", "尝试社团、竞赛和科研信息源", "建立课程笔记与简历草稿"]
  },
  {
    title: "大二",
    items: ["稳定专业课成绩", "进入项目或课题组", "确定保研、考研、留学或就业主线"]
  },
  {
    title: "大三",
    items: ["完成语言/科研/实习关键材料", "准备夏令营、网申或秋招", "沉淀推荐人和项目证明"]
  },
  {
    title: "大四",
    items: ["提交申请或参加初试/校招", "复试、签证、调剂或 offer 决策", "向手册贡献复盘"]
  }
];

const pathGrid = document.querySelector("#pathGrid");
const articleGrid = document.querySelector("#articleGrid");
const caseGrid = document.querySelector("#caseGrid");
const timelineGrid = document.querySelector("#timelineGrid");
const searchInput = document.querySelector("#searchInput");
const copyStatus = document.querySelector("#copyStatus");

let activeFilter = "all";

function renderPaths() {
  pathGrid.innerHTML = paths.map((path) => `
    <article class="path-card">
      <header>
        <h3>${path.title}</h3>
        <span class="path-icon" style="background:${path.color}">${path.icon}</span>
      </header>
      <p>${path.desc}</p>
      <div class="tag-row">
        ${path.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
  timelineGrid.innerHTML = timelines.map((period) => `
    <article class="timeline-card">
      <h3>${period.title}</h3>
      <ol>
        ${period.items.map((item) => `<li>${item}</li>`).join("")}
      </ol>
    </article>
  `).join("");
}

function renderArticles() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = articles.filter((article) => {
    const text = [article.category, article.title, ...article.tags].join(" ").toLowerCase();
    const filterMatch = activeFilter === "all" || article.category === activeFilter;
    const searchMatch = !query || text.includes(query);
    return filterMatch && searchMatch;
  });

  articleGrid.innerHTML = visible.length ? visible.map((article) => `
    <article class="article-card">
      <div class="article-meta">
        <span class="tag">${article.category}</span>
        <span class="status">${article.status}</span>
      </div>
      <h3>${article.title}</h3>
      <p>${article.desc}</p>
      <div class="tag-row">
        ${article.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </article>
  `).join("") : `<p class="empty">没有匹配的占位条目。</p>`;
}

function renderCases() {
  caseGrid.innerHTML = cases.map((item) => `
    <article class="case-card">
      <div class="case-meta">
        <span class="tag">${item.category}</span>
        <span class="status">${item.status}</span>
      </div>
      <h3>${item.title}</h3>
      <p>等待真实学生复盘。</p>
    </article>
  `).join("");
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activeFilter = button.dataset.filter;
    renderArticles();
  });
});

searchInput.addEventListener("input", renderArticles);

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const template = document.querySelector(`#${button.dataset.template}`).innerText;
    try {
      await navigator.clipboard.writeText(template);
      copyStatus.textContent = "模板已复制。";
    } catch {
      copyStatus.textContent = "浏览器未允许复制，可直接选中模板文本。";
    }
  });
});

renderPaths();
renderTimeline();
renderArticles();
renderCases();
