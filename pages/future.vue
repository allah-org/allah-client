<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- 頁面標題 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">{{ $t('future.title') }}</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">{{ $t('future.subtitle') }}</p>
      </div>

      <!-- 未來趨勢概覽 -->
      <div class="bg-gray-800 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('future.overview.title') }}</h2>
        <p class="text-gray-300 leading-relaxed mb-6">{{ $t('future.overview.description') }}</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-300 mb-3">{{ $t('future.overview.technology.title') }}</h3>
            <p class="text-blue-200">{{ $t('future.overview.technology.description') }}</p>
          </div>
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-green-300 mb-3">{{ $t('future.overview.regulation.title') }}</h3>
            <p class="text-green-200">{{ $t('future.overview.regulation.description') }}</p>
          </div>
        </div>
      </div>

      <!-- 各地區未來趨勢詳情 -->
      <div class="space-y-8">
        <div v-for="region in regions" :key="region.code" class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t(`future.regions.${region.code}.title`) }}</h3>
            <p class="text-purple-100 mt-1">{{ $t(`future.regions.${region.code}.subtitle`) }}</p>
          </div>
          
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('future.keyTrends') }}</h4>
                <div class="space-y-3">
                  <div v-for="trend in region.keyTrends" :key="trend.type" class="flex items-center">
                    <div class="w-3 h-3 rounded-full mr-3" :class="trend.color"></div>
                    <span class="text-gray-300">{{ $t(`future.regions.${region.code}.keyTrends.${trend.type}`) }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('future.keyFeatures') }}</h4>
                <ul class="space-y-2">
                  <li v-for="feature in region.keyFeatures" :key="feature" class="flex items-start">
                    <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-gray-300">{{ $t(`future.regions.${region.code}.keyFeatures.${feature}`) }}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('future.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t(`future.regions.${region.code}.regulatoryBody`) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 未來趨勢預測 -->
      <div class="bg-gray-800 rounded-lg p-8 mt-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('future.predictions.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="prediction in predictions" :key="prediction.id" class="text-center">
            <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="prediction.icon"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t(`future.predictions.${prediction.id}.title`) }}</h3>
            <p class="text-gray-300">{{ $t(`future.predictions.${prediction.id}.description`) }}</p>
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
  title: t('future.pageTitle'),
  meta: [
    { name: 'description', content: t('future.pageDescription') }
  ]
})

const mainTrends = [
  {
    id: 'virtualReality',
    impacts: ['immersive', 'social', 'accessibility'],
    milestones: [
      { year: '2025', id: 'mainstream' },
      { year: '2027', id: 'standard' },
      { year: '2030', id: 'dominant' }
    ]
  },
  {
    id: 'artificialIntelligence',
    impacts: ['personalization', 'automation', 'analytics'],
    milestones: [
      { year: '2024', id: 'integration' },
      { year: '2026', id: 'advanced' },
      { year: '2028', id: 'ubiquitous' }
    ]
  },
  {
    id: 'blockchain',
    impacts: ['transparency', 'security', 'decentralization'],
    milestones: [
      { year: '2025', id: 'adoption' },
      { year: '2027', id: 'regulation' },
      { year: '2029', id: 'maturity' }
    ]
  }
]

const techPredictions = [
  { id: 'quantum', adoption: 78, icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { id: 'biometrics', adoption: 92, icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { id: 'edgeComputing', adoption: 85, icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { id: '5g', adoption: 95, icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0' },
  { id: 'iot', adoption: 88, icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'cloud', adoption: 96, icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' }
]

const marketPredictions = [
  { id: 'marketExpansion', probability: 95 },
  { id: 'regulationHarmonization', probability: 78 },
  { id: 'crossBorderIntegration', probability: 82 },
  { id: 'sustainableGaming', probability: 88 },
  { id: 'socialGaming', probability: 92 }
]

const regions = [
  {
    code: 'northAmerica',
    title: 'North America',
    subtitle: 'Leading the digital transformation in the region',
    keyTrends: [
      { type: 'digitalTransformation', color: 'bg-blue-500' },
      { type: 'cloudComputing', color: 'bg-purple-500' },
      { type: 'cyberSecurity', color: 'bg-red-500' }
    ],
    keyFeatures: ['strong regulatory framework', 'advanced infrastructure', 'innovative startups'],
    regulatoryBody: 'North American regulatory bodies'
  },
  {
    code: 'europe',
    title: 'Europe',
    subtitle: 'Focusing on privacy and sustainability',
    keyTrends: [
      { type: 'privacyFocus', color: 'bg-purple-500' },
      { type: 'sustainability', color: 'bg-green-500' },
      { type: 'regulatoryHarmonization', color: 'bg-blue-500' }
    ],
    keyFeatures: ['strict data protection laws', 'sustainable initiatives', 'harmonized regulations'],
    regulatoryBody: 'European regulatory bodies'
  },
  {
    code: 'asiaPacific',
    title: 'Asia Pacific',
    subtitle: 'Emerging markets with rapid growth',
    keyTrends: [
      { type: 'digitalInclusion', color: 'bg-green-500' },
      { type: 'cloudAdoption', color: 'bg-purple-500' },
      { type: 'regulatoryInnovation', color: 'bg-blue-500' }
    ],
    keyFeatures: ['fast-growing markets', 'regulatory flexibility', 'digital innovation'],
    regulatoryBody: 'Asian regulatory bodies'
  }
]

const predictions = [
  { id: 'aiAdvancement', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'blockchainExpansion', icon: 'M9 5l7 7-7 7' },
  { id: 'quantumComputing', icon: 'M5 3l4 4H5V3zm4 6H2v4h7V9zm4 0h7v4H9V9z' }
]
</script>
