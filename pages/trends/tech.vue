<script setup>
useHead({
  title: '技術趨勢 - BTT 菠菜天眼通',
  meta: [
    { name: 'description', content: '最新技術趨勢分析與科技發展動態' },
    { property: 'og:title', content: '技術趨勢 - BTT 菠菜天眼通' },
  ]
})

// 地區選單數據
const regions = [
  { code: 'global', name: '全球' },
  { code: 'europe', name: '歐洲' },
  { code: 'usa', name: '美國' },
  { code: 'japan', name: '日本' },
  { code: 'korea', name: '韓國' },
  { code: 'china', name: '中國' },
  { code: 'taiwan', name: '台灣' }
]

const selectedRegion = ref('global')

const getCurrentRegionName = () => {
  const region = regions.find(r => r.code === selectedRegion.value)
  return region ? region.name : '全球'
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-green-600 to-blue-600 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">技術趨勢</h1>
        <p class="text-green-100">追蹤最新科技發展與技術創新趨勢</p>
      </div>
    </div>

    <!-- 地區選單 -->
    <div class="bg-gray-800 border-b border-gray-700">
      <div class="max-w-4xl mx-auto px-6">
        <div class="flex space-x-1 overflow-x-auto">
          <button 
            v-for="region in regions" 
            :key="region.code"
            @click="selectedRegion = region.code"
            class="flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors"
            :class="selectedRegion === region.code 
              ? 'text-green-400 border-b-2 border-green-400' 
              : 'text-gray-300 hover:text-white'"
          >
            {{ region.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- 主要內容 -->
    <div class="max-w-4xl mx-auto p-6">
      <!-- 地圖區域佔位 -->
      <div class="bg-gray-800 rounded-lg p-8 mb-8">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">{{ getCurrentRegionName() }} 技術發展地圖</h3>
          <p class="text-gray-400">技術創新地圖組件將在此處顯示</p>
        </div>
      </div>

      <!-- 技術趨勢數據卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">熱門技術</h4>
            <span class="text-green-400 text-sm">↗ +25%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">雲端運算</span>
              <span class="text-green-400">95%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">微服務</span>
              <span class="text-green-400">88%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">容器化</span>
              <span class="text-green-400">82%</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">程式語言</h4>
            <span class="text-green-400 text-sm">↗ +10%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">JavaScript</span>
              <span class="text-green-400">92%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">Python</span>
              <span class="text-green-400">89%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">TypeScript</span>
              <span class="text-green-400">76%</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">開發框架</h4>
            <span class="text-green-400 text-sm">↗ +16%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">React</span>
              <span class="text-green-400">85%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">Vue.js</span>
              <span class="text-green-400">72%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">Next.js</span>
              <span class="text-green-400">68%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
