import { useState, useEffect } from 'react'
import WikiEntry from '../components/WikiEntry.jsx'
import { fetchNews } from '../services/newsService.js'
import './ScienceNews.css'

function ScienceNews() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchNews({ signal: controller.signal })
        if (!cancelled) setItems(data)
      } catch (err) {
        if (!cancelled && err.name !== 'AbortError') {
          setError('新闻加载失败，请稍后重试')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
      controller.abort()
    }
  }, [])

  return (
    <div className="science-news">
      <h1 className="science-news-title">科学资讯</h1>

      {loading && (
        <div className="science-news-status">
          <span className="science-news-spinner" />
          正在加载最新资讯…
        </div>
      )}

      {error && (
        <div className="science-news-status science-news-error">{error}</div>
      )}

      {!loading && !error && items.length === 0 && (
        <div className="science-news-status">暂无新闻</div>
      )}

      <div className="science-news-list">
        {items.map((item) => (
          <WikiEntry
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            url={item.url}
            defaultExpanded
          />
        ))}
      </div>

      {!loading && items.length > 0 && (
        <p className="science-news-source">数据来源：Nature News</p>
      )}
    </div>
  )
}

export default ScienceNews
