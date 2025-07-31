<script setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  charset: 'utf-8',
  title: 'BTT 菠菜天眼通',
  meta: [
    { name: 'description', content: 'BTT 菠菜資訊網站' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/webp',
      href: '/movies.webp',
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator />
  <!-- PTT 風格佈局 -->
  <div h-full w-full font-sans grid="~ rows-[auto_1fr_auto]" of-hidden view-transition-app transition duration-0>
    <!-- 頂部藍底標題 -->
    <div bg-blue-950 text-white p-3 border-b border-blue-950>
      <div flex="~ justify-between items-center">
        <h1 text-2xl text-yellow-200>菠菜天眼通</h1>
        <div text-lg text-gray-400>聯繫我們</div>
      </div>
    </div>
    
    <!-- 中間黑底內容 -->
    <div id="app-scroller" of-x-hidden of-y-auto relative bg-black text-white p-4>
      <NuxtPage />
    </div>
    
    <!-- 底部灰底導航 -->
    <NavBar bg-gray-700 text-white border-t border-gray-600 />
    
    <IframeModal />
    <PhotoModal />
  </div>
</template>

<style>
html, body, #__nuxt {
  height: 100vh;
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
