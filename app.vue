<script setup>
import '@unocss/reset/tailwind.css'
import { SPREADSHEET_URL, CONTACT_EMAIL } from '~/constants/config'

useHead({
  htmlAttrs: {
    lang: 'zh-TW',
  },
  charset: 'utf-8',
  title: '天眼通 - BTT 菠菜天眼通',
  meta: [
    { name: 'description', content: 'BTT 菠菜天眼通提供專業的菠菜資訊整合服務，包含商務刊登、人才招募、資料整合等功能。' },
    { name: 'keywords', content: '菠菜,天眼通,商務刊登,人才招募,資訊整合,BTT' },
    { name: 'author', content: 'BTT Team' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
    { property: 'og:title', content: '天眼通 - BTT 菠菜天眼通' },
    { property: 'og:description', content: '提供專業的菠菜資訊整合服務，包含商務刊登、人才招募、資料整合等功能。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://btt.zeusoftech.com' },
    { property: 'og:site_name', content: 'BTT 菠菜天眼通' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/webp',
      href: '/favicon.ico',
    },
    {
      rel: 'sitemap',
      type: 'application/xml',
      href: '/api/sitemap.xml',
    },
    {
      rel: 'canonical',
      href: 'https://btt.zeusoftech.com',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BTT 菠菜天眼通",
        "description": "專業的菠菜資訊整合平台",
        "url": "https://btt.zeusoftech.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "allah2truth@gmail.com",
          "contactType": "customer service"
        }
      })
    }
  ]
})
</script>

<template>
  <NuxtLoadingIndicator />
  <!-- 單一滾動容器佈局 -->
  <div class="fixed inset-0 font-sans flex flex-col">
    <!-- 頂部藍底標題 - 固定高度 -->
    <div class="bg-blue-950 text-white p-3 border-b border-blue-950 flex-shrink-0">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl text-yellow-200 cursor-pointer hover:text-yellow-100">
          <a :href="SPREADSHEET_URL" target="_blank">菠菜天眼通</a>
        </h1>
        <div class="text-lg text-gray-400 cursor-pointer hover:text-gray-300">
          <a :href="`mailto:${CONTACT_EMAIL}`">聯繫我們</a>
        </div>
      </div>
    </div>

    <!-- 中間黑底內容 - 自動填充剩餘空間，只有這裡滾動 -->
    <div class="flex-1 overflow-auto bg-black text-white p-4">
      <NuxtPage />
    </div>

    <!-- 底部灰底導航 - 固定高度 -->
    <NavBar class="bg-gray-700 text-white border-t border-gray-600 flex-shrink-0" />

    <IframeModal />
    <PhotoModal />
  </div>
</template>

<style>
html, body, #__nuxt {
  height: 100vh;
  height: -webkit-fill-available; /* 手機瀏覽器優化 */
  margin: 0;
  padding: 0;
  background: #000;
  color: #00ff00;
  color-scheme: dark;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  line-height: 1.4;
}

/* PTT 風格的滾動條 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #333;
}

::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
