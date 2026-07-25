import Card from '../components/Card.jsx'
import coursesImg from '../assets/courses.webp'
import deepImg from '../assets/deep.webp'
import newsImg from '../assets/news.webp'
import qaImg from '../assets/qa.webp'
import './Home.css'

const cards = [
  { image: coursesImg, title: '课程资源', to: '/courses' },
  { image: deepImg,    title: '知识深入', to: '/deep' },
  { image: newsImg,    title: '科学资讯', to: '/news' },
  { image: qaImg,      title: '知识问答', to: '/qa' },
]

function Home() {
  return (
    <div className="home">
      <div className="home-grid">
        {cards.map((card) => (
          <Card key={card.to} image={card.image} title={card.title} to={card.to} />
        ))}
      </div>
    </div>
  )
}

export default Home
