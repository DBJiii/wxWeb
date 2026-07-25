# wxWeb

Science education platform built with React + Vite.

## Pages

| Page | Path | Description |
|---|---|---|
| 课程资源 | `/courses` | Hierarchical catalog of learning resources (CS, Math, AI, Physics) |
| 知识深入 | `/deep` | Expandable wiki-style entries on chemistry topics |
| 科学资讯 | `/news` | Latest science news from Nature, displayed as wiki entries |
| 知识问答 | `/qa` | Q&A (coming soon) |

## Tech Stack

- **React 19** with React Router 7
- **Vite** for build tooling
- **Bootstrap 5** + React Bootstrap
- News fetched client-side from [rss2json](https://rss2json.com/) API

## Getting Started

```bash
npm install
npm run dev      # Start dev server at localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build
```
