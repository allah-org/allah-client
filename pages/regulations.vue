<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- 頁面標題 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">{{ $t('regulations.title') }}</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">{{ $t('regulations.subtitle') }}</p>
      </div>

      <!-- 法規概覽 -->
      <div class="bg-gray-800 rounded-lg p-8 mb-8">
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
      <div class="space-y-8">
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

      <!-- 法規趨勢 -->
      <div class="bg-gray-800 rounded-lg p-8 mt-8">
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
</script>
