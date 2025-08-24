<script setup>
useHead({
  title: 'AI趨勢 - BTT 菠菜天眼通',
  meta: [
    { name: 'description', content: '人工智慧發展趨勢與AI技術應用分析' },
    { property: 'og:title', content: 'AI趨勢 - BTT 菠菜天眼通' },
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
    <div class="bg-gradient-to-r from-yellow-600 to-orange-600 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">AI趨勢</h1>
        <p class="text-yellow-100">探索人工智慧的最新發展與應用趨勢</p>
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
              ? 'text-yellow-400 border-b-2 border-yellow-400' 
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
          <div class="w-16 h-16 mx-auto mb-4 bg-yellow-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">{{ getCurrentRegionName() }} AI發展地圖</h3>
          <p class="text-gray-400">AI技術發展地圖組件將在此處顯示</p>
        </div>
      </div>

      <!-- AI趨勢數據卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">AI應用領域</h4>
            <span class="text-green-400 text-sm">↗ +35%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">自然語言處理</span>
              <span class="text-yellow-400">98%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">電腦視覺</span>
              <span class="text-yellow-400">94%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">機器學習</span>
              <span class="text-yellow-400">91%</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">AI模型發展</h4>
            <span class="text-green-400 text-sm">↗ +42%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">大型語言模型</span>
              <span class="text-green-400">+28.5%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">多模態模型</span>
              <span class="text-green-400">+22.3%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">生成式AI</span>
              <span class="text-green-400">+31.7%</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">投資與研發</h4>
            <span class="text-green-400 text-sm">↗ +58%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">研發投資</span>
              <span class="text-yellow-400">$125B</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">新創公司</span>
              <span class="text-yellow-400">2.8K</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">專利申請</span>
              <span class="text-yellow-400">45.2K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
