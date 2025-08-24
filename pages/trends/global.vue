<script setup>
useHead({
  title: '全球趨勢 - BTT 菠菜天眼通',
  meta: [
    { name: 'description', content: '全球市場趨勢分析與數據視覺化' },
    { property: 'og:title', content: '全球趨勢 - BTT 菠菜天眼通' },
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
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">全球趨勢</h1>
        <p class="text-blue-100">即時掌握全球市場動態與趨勢分析</p>
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
              ? 'text-blue-400 border-b-2 border-blue-400' 
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
          <div class="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">{{ getCurrentRegionName() }} 趨勢地圖</h3>
          <p class="text-gray-400">地圖組件將在此處顯示</p>
        </div>
      </div>

      <!-- 趨勢數據卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">熱門關鍵字</h4>
            <span class="text-green-400 text-sm">↗ +12%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">區塊鏈</span>
              <span class="text-blue-400">85%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">AI技術</span>
              <span class="text-blue-400">72%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">元宇宙</span>
              <span class="text-blue-400">68%</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">市場指數</h4>
            <span class="text-red-400 text-sm">↘ -3%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">科技股</span>
              <span class="text-green-400">+2.4%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">金融股</span>
              <span class="text-red-400">-1.2%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">能源股</span>
              <span class="text-green-400">+0.8%</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">社群熱度</h4>
            <span class="text-green-400 text-sm">↗ +8%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">討論數</span>
              <span class="text-blue-400">12.5K</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">分享數</span>
              <span class="text-blue-400">3.2K</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">關注數</span>
              <span class="text-blue-400">8.7K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
