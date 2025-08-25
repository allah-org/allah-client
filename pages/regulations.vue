<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-blue-900 to-purple-900 py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-white mb-4">{{ $t('regulations.title') }}</h1>
          <p class="text-xl text-blue-100 max-w-4xl mx-auto">{{ $t('regulations.subtitle') }}</p>
        </div>
      </div>
    </div>

    <!-- 導覽列 - 固定在頂部 -->
    <div class="sticky top-0 z-40 bg-gray-800 border-b border-gray-700">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex space-x-1 overflow-x-auto">
          <button 
            v-for="section in navigationSections" 
            :key="section.id"
            @click="scrollToSection(section.id)"
            class="flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors flex items-center space-x-2"
            :class="selectedSection === section.id 
              ? 'text-blue-400 border-b-2 border-blue-400' 
              : 'text-gray-300 hover:text-white'"
          >
            <span>{{ section.icon }}</span>
            <span>{{ section.name }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-8">

      <!-- 法規概覽 -->
      <div id="overview" class="bg-gray-800 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('regulations.overview.title') }}</h2>
        <p class="text-gray-300 leading-relaxed mb-6">{{ $t('regulations.overview.description') }}</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-300 mb-3">{{ $t('regulations.overview.legal.title') }}</h3>
            <p class="text-blue-200">{{ $t('regulations.overview.legal.description') }}</p>
          </div>
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-green-300 mb-3">{{ $t('regulations.overview.restricted.title') }}</h3>
            <p class="text-green-200">{{ $t('regulations.overview.restricted.description') }}</p>
          </div>
        </div>
      </div>

      <!-- 各地區法規詳情 -->
      <div id="regions" class="space-y-8">
        <div v-for="region in regions" :key="region.code" class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t(`regulations.regions.${region.code}.title`) }}</h3>
            <p class="text-blue-100 mt-1">{{ $t(`regulations.regions.${region.code}.subtitle`) }}</p>
          </div>
          
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('regulations.legalStatus') }}</h4>
                <div class="space-y-3">
                  <div v-for="status in region.legalStatus" :key="status.type" class="flex items-center">
                    <div class="w-3 h-3 rounded-full mr-3" :class="status.color"></div>
                    <span class="text-gray-300">{{ $t(`regulations.regions.${region.code}.legalStatus.${status.type}`) }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('regulations.keyFeatures') }}</h4>
                <ul class="space-y-2">
                  <li v-for="feature in region.keyFeatures" :key="feature" class="flex items-start">
                    <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-gray-300">{{ $t(`regulations.regions.${region.code}.keyFeatures.${feature}`) }}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t(`regulations.regions.${region.code}.regulatoryBody`) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 亞洲各地區詳細分析 -->
      <div id="asia-details" class="space-y-8 mt-12">
        <h2 class="text-3xl font-bold text-white text-center mb-8">{{ $t('regulations.regions.asia.title') }}</h2>
        
        <!-- 日本 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-red-600 to-pink-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.japan.title') }}</h3>
            <p class="text-red-100 mt-1">{{ $t('regulations.japan.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.japan.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in japanFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.japan.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.japan.regulatoryBody') }}</p>
            </div>
          </div>
        </div>

        <!-- 新加坡 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.singapore.title') }}</h3>
            <p class="text-yellow-100 mt-1">{{ $t('regulations.singapore.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.singapore.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in singaporeFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.singapore.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.singapore.regulatoryBody') }}</p>
            </div>
          </div>
        </div>

        <!-- 馬來西亞 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.malaysia.title') }}</h3>
            <p class="text-green-100 mt-1">{{ $t('regulations.malaysia.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.malaysia.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in malaysiaFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.malaysia.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.malaysia.regulatoryBody') }}</p>
            </div>
          </div>
        </div>

        <!-- 泰國 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.thailand.title') }}</h3>
            <p class="text-blue-100 mt-1">{{ $t('regulations.thailand.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.thailand.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in thailandFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.thailand.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.thailand.regulatoryBody') }}</p>
            </div>
          </div>
        </div>

        <!-- 越南 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.vietnam.title') }}</h3>
            <p class="text-red-100 mt-1">{{ $t('regulations.vietnam.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.vietnam.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in vietnamFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.vietnam.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.vietnam.regulatoryBody') }}</p>
            </div>
          </div>
        </div>

        <!-- 菲律賓 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.philippines.title') }}</h3>
            <p class="text-purple-100 mt-1">{{ $t('regulations.philippines.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.philippines.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in philippinesFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.philippines.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.philippines.regulatoryBody') }}</p>
            </div>
          </div>
        </div>

        <!-- 中國大陸 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-red-700 to-red-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.china.title') }}</h3>
            <p class="text-red-100 mt-1">{{ $t('regulations.china.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.china.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in chinaFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.china.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.china.regulatoryBody') }}</p>
            </div>
          </div>
        </div>

        <!-- 澳門 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.macau.title') }}</h3>
            <p class="text-yellow-100 mt-1">{{ $t('regulations.macau.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.macau.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in macauFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.macau.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.macau.regulatoryBody') }}</p>
            </div>
          </div>
        </div>

        <!-- 台灣 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.taiwan.title') }}</h3>
            <p class="text-blue-100 mt-1">{{ $t('regulations.taiwan.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.taiwan.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in taiwanFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.taiwan.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.taiwan.regulatoryBody') }}</p>
            </div>
          </div>
        </div>

        <!-- 澳洲 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.australia.title') }}</h3>
            <p class="text-green-100 mt-1">{{ $t('regulations.australia.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.australia.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in australiaFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.australia.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.australia.regulatoryBody') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 國際博弈測試與認證機構 -->
      <div id="testing-labs" class="bg-gray-800 rounded-lg p-8 mt-12">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('regulations.testingLabs.title') }}</h2>
        <p class="text-gray-300 mb-8">{{ $t('regulations.testingLabs.description') }}</p>
        
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-white mb-4">{{ $t('regulations.testingLabs.bmm.title') }}</h3>
            <p class="text-gray-300">{{ $t('regulations.testingLabs.bmm.description') }}</p>
          </div>
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-white mb-4">{{ $t('regulations.testingLabs.gli.title') }}</h3>
            <p class="text-gray-300">{{ $t('regulations.testingLabs.gli.description') }}</p>
          </div>
        </div>
        
        <div class="space-y-6">
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.testingLabs.functions.title') }}</h3>
            <p class="text-gray-300">{{ $t('regulations.testingLabs.functions.description') }}</p>
          </div>
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.testingLabs.reputation.title') }}</h3>
            <p class="text-gray-300">{{ $t('regulations.testingLabs.reputation.description') }}</p>
          </div>
        </div>
      </div>

      <!-- 法規趨勢 -->
      <div id="trends" class="bg-gray-800 rounded-lg p-8 mt-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('regulations.trends.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="trend in trends" :key="trend.id" class="text-center">
            <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="trend.icon"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.trends.${trend.id}.title`) }}</h3>
            <p class="text-gray-300">{{ $t(`regulations.trends.${trend.id}.description`) }}</p>
          </div>
        </div>
      </div>

      <!-- 結論 -->
      <div id="conclusion" class="bg-gray-800 rounded-lg p-8 mt-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('regulations.conclusion.title') }}</h2>
        <p class="text-gray-300 mb-6">{{ $t('regulations.conclusion.description') }}</p>
        <p class="text-gray-300">{{ $t('regulations.conclusion.future') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()

// 頁面標題
useHead({
  title: t('regulations.pageTitle'),
  meta: [
    { name: 'description', content: t('regulations.pageDescription') }
  ]
})

// 導覽列數據
const navigationSections = computed(() => [
  { id: 'overview', name: t('regulations.overview.title'), icon: '📋' },
  { id: 'regions', name: t('regulations.navigation.regions'), icon: '🌍' },
  { id: 'asia-details', name: t('regulations.navigation.asiaDetails'), icon: '🌏' },
  { id: 'testing-labs', name: t('regulations.testingLabs.title'), icon: '🔬' },
  { id: 'trends', name: t('regulations.trends.title'), icon: '📈' },
  { id: 'conclusion', name: t('regulations.conclusion.title'), icon: '🎯' }
])

const selectedSection = ref('overview')

// 滾動到指定區域
const scrollToSection = (sectionId) => {
  selectedSection.value = sectionId
  
  const sectionToIdMap = {
    'overview': 'overview',
    'regions': 'regions',
    'asia-details': 'asia-details',
    'testing-labs': 'testing-labs',
    'trends': 'trends',
    'conclusion': 'conclusion'
  }
  
  const elementId = sectionToIdMap[sectionId]
  if (elementId) {
    nextTick(() => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  }
}

const regions = [
  {
    code: 'europe',
    legalStatus: [
      { type: 'online', color: 'bg-green-500' },
      { type: 'landbased', color: 'bg-green-500' },
      { type: 'sports', color: 'bg-green-500' }
    ],
    keyFeatures: ['licensing', 'responsible', 'taxation']
  },
  {
    code: 'usa',
    legalStatus: [
      { type: 'online', color: 'bg-yellow-500' },
      { type: 'landbased', color: 'bg-green-500' },
      { type: 'sports', color: 'bg-green-500' }
    ],
    keyFeatures: ['stateBased', 'federal', 'tribal']
  },
  {
    code: 'asia',
    legalStatus: [
      { type: 'online', color: 'bg-red-500' },
      { type: 'landbased', color: 'bg-yellow-500' },
      { type: 'sports', color: 'bg-yellow-500' }
    ],
    keyFeatures: ['strict', 'limited', 'underground']
  }
]

const trends = [
  { id: 'digitalization', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'harmonization', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { id: 'compliance', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
]

// 亞洲各地區詳細分析
const japanFeatures = [
  { key: 'irSystem', description: 'IR綜合度假村制度，限制最多三處賭場' },
  { key: 'strictControl', description: '嚴格管控措施，包括入場費和次數限制' },
  { key: 'localRestrictions', description: '本國居民進入賭場需支付入場費並有次數限制' }
]

const singaporeFeatures = [
  { key: 'dualCasino', description: '雙賭場模式，濱海灣金沙和聖淘沙名勝世界' },
  { key: 'entryTax', description: '高額入場稅，本地居民進入賭場需支付高額費用' },
  { key: 'comprehensiveRegulation', description: '全方位監管，包括廣告限制和負責任博弈' }
]

const malaysiaFeatures = [
  { key: 'monopoly', description: '壟斷經營，雲頂高原賭場為唯一合法賭場' },
  { key: 'strictEnforcement', description: '嚴厲執法，打擊非法網賭活動' },
  { key: 'lawReform', description: '法律改革，更新過時的法規以應對現代威脅' }
]

const thailandFeatures = [
  { key: 'comprehensiveBan', description: '全面禁止，除官方彩票和賽馬外皆屬違法' },
  { key: 'legalizationDiscussion', description: '合法化討論，國會曾研究賭場合法化可能性' },
  { key: 'undergroundMarket', description: '地下市場，非法賭博活動仍然猖獗' }
]

const vietnamFeatures = [
  { key: 'pilotProgram', description: '試點計畫，允許特定賭場限時接納本國公民' },
  { key: 'foreignOnly', description: '僅限外國人，賭場主要服務外國遊客' },
  { key: 'gradualExpansion', description: '逐步擴張，考慮擴大本國人賭博試點' }
]

const philippinesFeatures = [
  { key: 'diversifiedMarket', description: '多元化市場，包括實體賭場、彩票、賽馬等' },
  { key: 'dualRole', description: '雙重角色，PAGCOR既是監管者也是營運者' },
  { key: 'policyShift', description: '政策轉向，計劃轉型為純監管機構' }
]

const chinaFeatures = [
  { key: 'zeroTolerance', description: '零容忍政策，對賭博採取最嚴格的禁止措施' },
  { key: 'crossBorderCrackdown', description: '跨境打擊，嚴厲打擊跨境賭博活動' },
  { key: 'lotteryOnly', description: '僅限彩票，除國家發行彩票外一切賭博皆非法' }
]

const macauFeatures = [
  { key: 'concessionSystem', description: '特許經營制度，六家博企持有賭場特許權' },
  { key: 'newGamingLaw', description: '新博彩法，2022年重新招標並頒布新法規' },
  { key: 'diversification', description: '多元化轉型，減少對VIP博彩的依賴' }
]

const taiwanFeatures = [
  { key: 'lotteryOnly', description: '僅限彩票，公益彩券和運動彩券為唯一合法博弈' },
  { key: 'noCasinos', description: '無合法賭場，現行法律禁止賭場營業' },
  { key: 'policyStagnation', description: '政策停滯，博弈合法化討論長期停滯' }
]

const australiaFeatures = [
  { key: 'stateRegulation', description: '州級監管，各州和領地有自己的博弈法規' },
  { key: 'responsibleGaming', description: '負責任博弈，強調玩家保護和成癮防治' },
  { key: 'strictAdvertising', description: '嚴格廣告限制，對博弈廣告和營銷有嚴格規定' }
]
</script>
