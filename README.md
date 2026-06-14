# 山东师范大学学生飞跃手册网页

这是一个纯静态网页项目，用于搭建“山东师范大学学生飞跃手册”的信息架构和展示页面。当前版本只放置目录、路线、时间线、文章占位和案例占位，不包含真实学生投稿。

## 目录

```text
sdnu-feiyue-manual/
  index.html
  css/styles.css
  js/main.js
  assets/cover.png
  content/articles/
  content/cases/
  templates/article-template.md
  templates/case-template.md
```

## 使用

直接用浏览器打开 `index.html`。

## 后续维护

- 真实文章可放入 `content/articles/`。
- 学生案例可放入 `content/cases/`。
- 页面列表目前写在 `js/main.js` 中，后续可以改成读取 JSON 或接入静态站点生成器。
- 投稿格式参考 `templates/` 下的 Markdown 模板。

## 参考来源

- 上海交通大学生存手册目录结构：`https://github.com/SurviveSJTU/SurviveSJTUManual/blob/master/SUMMARY.md`
- 深圳大学飞跃手册路径与案例组织方式：`https://szu-feiyue.github.io/`

本项目没有复制上述站点正文内容，只参考了目录型知识库和学生经验库的组织思路。
