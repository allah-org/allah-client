<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- 頁面標題 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">{{ $t('copyright.title') }}</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">{{ $t('copyright.subtitle') }}</p>
      </div>

      <!-- 版權概覽 -->
      <div class="bg-gray-800 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('copyright.overview.title') }}</h2>
        <p class="text-gray-300 leading-relaxed mb-6">{{ $t('copyright.overview.description') }}</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-300 mb-3">{{ $t('copyright.overview.intellectual.title') }}</h3>
            <p class="text-blue-200">{{ $t('copyright.overview.intellectual.description') }}</p>
          </div>
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-green-300 mb-3">{{ $t('copyright.overview.legal.title') }}</h3>
            <p class="text-green-200">{{ $t('copyright.overview.legal.description') }}</p>
          </div>
        </div>
      </div>

      <!-- 各地區版權詳情 -->
      <div class="space-y-8">
        <div v-for="region in regions" :key="region.code" class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t(`copyright.regions.${region.code}.title`) }}</h3>
            <p class="text-orange-100 mt-1">{{ $t(`copyright.regions.${region.code}.subtitle`) }}</p>
          </div>
          
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('copyright.copyrightLaws') }}</h4>
                <div class="space-y-3">
                  <div v-for="law in region.copyrightLaws" :key="law.type" class="flex items-center">
                    <div class="w-3 h-3 rounded-full mr-3" :class="law.color"></div>
                    <span class="text-gray-300">{{ $t(`copyright.regions.${region.code}.copyrightLaws.${law.type}`) }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('copyright.keyFeatures') }}</h4>
                <ul class="space-y-2">
                  <li v-for="feature in region.keyFeatures" :key="feature" class="flex items-start">
                    <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-gray-300">{{ $t(`copyright.regions.${region.code}.keyFeatures.${feature}`) }}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('copyright.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t(`copyright.regions.${region.code}.regulatoryBody`) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 版權保護趨勢 -->
      <div class="bg-gray-800 rounded-lg p-8 mt-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('copyright.protection.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="protection in protections" :key="protection.id" class="text-center">
            <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="protection.icon"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t(`copyright.protection.${protection.id}.title`) }}</h3>
            <p class="text-gray-300">{{ $t(`copyright.protection.${protection.id}.description`) }}</p>
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
  title: t('copyright.pageTitle'),
  meta: [
    { name: 'description', content: t('copyright.pageDescription') }
  ]
})

const protectedItems = ['originalContent', 'designs', 'software', 'databases', 'multimedia']
const excludedItems = ['facts', 'ideas', 'methods', 'systems', 'publicDomain']

const usageTerms = [
  { id: 'personalUse' },
  { id: 'educationalUse' },
  { id: 'commercialUse' },
  { id: 'attribution' }
]

const infringementSteps = [
  { id: 'identification', number: 1 },
  { id: 'notification', number: 2 },
  { id: 'investigation', number: 3 },
  { id: 'resolution', number: 4 }
]

const regions = [
  {
    code: 'us',
    title: 'United States',
    subtitle: 'Strong protection for intellectual property',
    copyrightLaws: [
      { type: 'copyright', color: 'bg-blue-500' },
      { type: 'trademark', color: 'bg-purple-500' },
      { type: 'patent', color: 'bg-green-500' }
    ],
    keyFeatures: ['Broad protection for original works', 'Strong enforcement', 'Extensive damages'],
    regulatoryBody: 'United States Copyright Office'
  },
  {
    code: 'eu',
    title: 'European Union',
    subtitle: 'Broad and harmonized protection',
    copyrightLaws: [
      { type: 'copyright', color: 'bg-blue-500' },
      { type: 'trademark', color: 'bg-purple-500' },
      { type: 'design', color: 'bg-pink-500' }
    ],
    keyFeatures: ['Harmonized protection across member states', 'Broad scope of protection', 'Strong enforcement'],
    regulatoryBody: 'European Union'
  },
  {
    code: 'jp',
    title: 'Japan',
    subtitle: 'Traditional and modern protection',
    copyrightLaws: [
      { type: 'copyright', color: 'bg-blue-500' },
      { type: 'trademark', color: 'bg-purple-500' },
      { type: 'design', color: 'bg-pink-500' }
    ],
    keyFeatures: ['Traditional copyright system', 'Modern digital protection', 'Strong enforcement'],
    regulatoryBody: 'Japan'
  }
]

const protections = [
  { id: 'dmca', icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12z' },
  { id: 'copyright', icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12z' },
  { id: 'trademark', icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12z' },
  { id: 'patent', icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12z' },
  { id: 'design', icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12z' }
]
</script>
