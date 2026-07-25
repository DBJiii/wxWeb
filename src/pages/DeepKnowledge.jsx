import WikiEntry from '../components/WikiEntry.jsx'
import cabbageImg from '../assets/cabbage.webp'
import halochromismImg from '../assets/Halochromism.webp'
import ionicCrystalImg from '../assets/Ionic crystal.webp'
import aconitumImg from '../assets/Aconitum carmichaelii.webp'
import hydrogenImg from '../assets/Hydrogen.webp'
import './DeepKnowledge.css'

const wikiEntries = [
  {
    id: 'cabbage',
    title: '紫甘蓝 — 天然 pH 指示剂',
    image: cabbageImg,
    description: '紫甘蓝汁液富含花青素，在不同酸碱环境中会呈现从红到绿再到黄的颜色变化，是一种天然的酸碱指示剂，常用于化学启蒙实验。',
    url: 'https://zh.wikipedia.org/wiki/花青素',
  },
  {
    id: 'halochromism',
    title: '卤色现象 (Halochromism)',
    image: halochromismImg,
    description: '卤色现象是指物质在接触不同 pH 环境时发生颜色变化的能力。这一特性广泛应用于 pH 试纸、指示剂染料和智能包装材料中。',
    url: 'https://en.wikipedia.org/wiki/Halochromism',
  },
  {
    id: 'ionic-crystal',
    title: '离子晶体的结构与性质',
    image: ionicCrystalImg,
    description: '离子晶体由正负离子通过静电作用有序排列而成，具有高熔点、硬而脆、熔融态导电等特性。NaCl 是最典型的离子晶体代表。',
    url: 'https://zh.wikipedia.org/wiki/离子晶体',
  },
  {
    id: 'aconitum',
    title: '乌头 (Aconitum carmichaelii)',
    image: aconitumImg,
    description: '乌头为毛茛科植物，其块根入药称"附子"，具有回阳救逆、温中散寒之效。因含乌头碱类剧毒成分，须经严格炮制后方可入药，体现了中药"以毒攻毒"的辩证思想。',
    url: 'https://zh.wikipedia.org/wiki/乌头',
  },
  {
    id: 'hydrogen',
    title: '氢 — 宇宙最丰富的元素',
    image: hydrogenImg,
    description: '氢是原子序数为 1 的化学元素，占宇宙普通物质的约 75%。作为最轻的元素，它在恒星核聚变、水的构成以及清洁能源（氢燃料电池）中扮演着核心角色。',
    url: 'https://zh.wikipedia.org/wiki/氢',
  },
]

function DeepKnowledge() {
  return (
    <div className="deep-knowledge">
      <h1 className="deep-knowledge-title">知识深入</h1>
      <div className="deep-knowledge-list">
        {wikiEntries.map((entry) => (
          <WikiEntry
            key={entry.id}
            title={entry.title}
            image={entry.image}
            description={entry.description}
            url={entry.url}
            defaultExpanded
          />
        ))}
      </div>
    </div>
  )
}

export default DeepKnowledge
