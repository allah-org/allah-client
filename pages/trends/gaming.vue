<script setup>
useHead({
  title: '遊戲趨勢 - BTT 菠菜天眼通',
  meta: [
    { name: 'description', content: '遊戲產業趨勢分析與市場動態' },
    { property: 'og:title', content: '遊戲趨勢 - BTT 菠菜天眼通' },
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
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">遊戲趨勢</h1>
        <p class="text-purple-100">掌握遊戲產業最新動態與市場趨勢</p>
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
              ? 'text-purple-400 border-b-2 border-purple-400' 
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
          <div class="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">{{ getCurrentRegionName() }} 遊戲市場地圖</h3>
          <p class="text-gray-400">遊戲產業地圖組件將在此處顯示</p>
        </div>
      </div>

      <!-- 遊戲趨勢數據卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">熱門遊戲類型</h4>
            <span class="text-green-400 text-sm">↗ +18%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">MOBA</span>
              <span class="text-purple-400">92%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">FPS</span>
              <span class="text-purple-400">87%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">RPG</span>
              <span class="text-purple-400">75%</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">平台收益</h4>
            <span class="text-green-400 text-sm">↗ +15%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">手機遊戲</span>
              <span class="text-green-400">+12.8%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">PC遊戲</span>
              <span class="text-green-400">+8.5%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">主機遊戲</span>
              <span class="text-green-400">+5.2%</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-white">玩家活躍度</h4>
            <span class="text-green-400 text-sm">↗ +22%</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-300">日活躍用戶</span>
              <span class="text-purple-400">45.2M</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">月活躍用戶</span>
              <span class="text-purple-400">128.7M</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">平均遊戲時長</span>
              <span class="text-purple-400">2.3h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
