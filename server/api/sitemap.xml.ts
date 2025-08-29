export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml')
  
  const baseUrl = 'https://eye.zeusoftech.com'
  const currentDate = new Date().toISOString()
  
  // 可以從數據庫或文件系統動態獲取頁面
  const pages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/business', priority: '0.8', changefreq: 'weekly' },
    { path: '/hr', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact', priority: '0.6', changefreq: 'monthly' },
    // 未來可以輕鬆添加更多頁面
  ]
  
  const sitemapUrls = pages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapUrls}
</urlset>`
}) 