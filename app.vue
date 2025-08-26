<script setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'zh-TW',
  },
  charset: 'utf-8',
  title: 'BTT 菠菜天眼通 - 天眼通',
  meta: [
    {name: 'description', content: 'BTT 菠菜天眼通提供專業的菠菜資訊整合服務，包含商務刊登、人才招募、資料整合等功能。'},
    {name: 'keywords', content: '菠菜,天眼通,商務刊登,人才招募,資訊整合,BTT,菠菜天眼通'},
    {name: 'author', content: 'BTT Team'},
    {name: 'robots', content: 'index, follow'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
    {property: 'og:title', content: '天眼通 - BTT 菠菜天眼通'},
    {property: 'og:description', content: '提供專業的菠菜資訊整合服務，包含商務刊登、人才招募、資料整合等功能。'},
    {property: 'og:type', content: 'website'},
    {property: 'og:url', content: 'https://btt.zeusoftech.com'},
    {property: 'og:site_name', content: 'BTT 菠菜天眼通'},
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
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
  <NuxtLoadingIndicator/>
  <!-- 現代化版型 -->
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <!-- 主要內容區域 -->
    <div class="pb-20">
      <NuxtPage/>
    </div>

    <!-- 底部導航 - 固定在底部 -->
    <NavBar/>

    <!-- 側邊選單 -->
    <SideMenu/>

    <IframeModal/>
  </div>
</template>

<style>
html, body, #__nuxt {
  height: 100vh;
  height: -webkit-fill-available; /* 手機瀏覽器優化 */
  margin: 0;
  padding: 0;
  background: #111827; /* 現代化深色背景 */
  color: #ffffff;
  color-scheme: dark;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

/* 現代化滾動條 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #374151;
}

::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>
