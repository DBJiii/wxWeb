const FEED = {
  name: 'Nature',
  url: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.nature.com%2Flatest-news.rss',
}

export async function fetchNews({ signal } = {}) {
  const res = await fetch(FEED.url, { signal, headers: { Accept: 'application/json' } })
  if (!res.ok) return []
  const json = await res.json()
  if (json.status !== 'ok' || !Array.isArray(json.items)) return []

  return json.items
    .map((item) => {
      const image = item.enclosure?.link || item.thumbnail || ''
      if (!image) return null

      return {
        id: item.guid || item.link || '',
        title: (item.title || '').replace(/<!\[CDATA\[|\]\]>/g, '').trim() || '无标题',
        image,
        description: (item.description || '')
          .replace(/<[^>]*>/g, '')
          .replace(/<!\[CDATA\[|\]\]>/g, '')
          .trim()
          .slice(0, 250),
        url: item.link || '#',
        source: 'Nature',
        date: item.pubDate
          ? new Date(item.pubDate).toISOString().slice(0, 10)
          : '',
      }
    })
    .filter(Boolean)
}
