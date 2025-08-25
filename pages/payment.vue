<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- 頁面標題 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">{{ $t('payment.title') }}</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">{{ $t('payment.subtitle') }}</p>
      </div>

      <!-- 金流概覽 -->
      <div class="bg-gray-800 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('payment.overview.title') }}</h2>
        <p class="text-gray-300 leading-relaxed mb-6">{{ $t('payment.overview.description') }}</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-300 mb-3">{{ $t('payment.overview.legal.title') }}</h3>
            <p class="text-blue-200">{{ $t('payment.overview.legal.description') }}</p>
          </div>
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-green-300 mb-3">{{ $t('payment.overview.underground.title') }}</h3>
            <p class="text-green-200">{{ $t('payment.overview.underground.description') }}</p>
          </div>
        </div>
      </div>

      <!-- 各地區金流詳情 -->
      <div class="space-y-8">
        <div v-for="region in regions" :key="region.code" class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t(`payment.regions.${region.code}.title`) }}</h3>
            <p class="text-green-100 mt-1">{{ $t(`payment.regions.${region.code}.subtitle`) }}</p>
          </div>
          
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('payment.paymentMethods') }}</h4>
                <div class="space-y-3">
                  <div v-for="method in region.paymentMethods" :key="method.type" class="flex items-center">
                    <div class="w-3 h-3 rounded-full mr-3" :class="method.color"></div>
                    <span class="text-gray-300">{{ $t(`payment.regions.${region.code}.paymentMethods.${method.type}`) }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('payment.keyFeatures') }}</h4>
                <ul class="space-y-2">
                  <li v-for="feature in region.keyFeatures" :key="feature" class="flex items-start">
                    <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-gray-300">{{ $t(`payment.regions.${region.code}.keyFeatures.${feature}`) }}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('payment.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t(`payment.regions.${region.code}.regulatoryBody`) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 金流趨勢 -->
      <div class="bg-gray-800 rounded-lg p-8 mt-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('payment.trends.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="trend in futureTrends" :key="trend.id" class="text-center">
            <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="trend.icon"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t(`payment.trends.${trend.id}.title`) }}</h3>
            <p class="text-gray-300">{{ $t(`payment.trends.${trend.id}.description`) }}</p>
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
  title: t('payment.pageTitle'),
  meta: [
    { name: 'description', content: t('payment.pageDescription') }
  ]
})

const traditionalMethods = [
  { id: 'bankTransfer', percentage: 35, icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
  { id: 'creditCard', percentage: 28, icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
  { id: 'cash', percentage: 22, icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' }
]

const digitalMethods = [
  { id: 'mobilePayment', percentage: 45, icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { id: 'cryptocurrency', percentage: 18, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'ewallet', percentage: 37, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' }
]

const regions = [
  { code: 'northAmerica', flag: '🇺🇸', adoptionRate: 78, volume: '$850B' },
  { code: 'europe', flag: '🇪🇺', adoptionRate: 82, volume: '$720B' },
  { code: 'asia', flag: '🌏', adoptionRate: 65, volume: '$680B' },
  { code: 'latinAmerica', flag: '🌎', adoptionRate: 45, volume: '$320B' },
  { code: 'africa', flag: '🌍', adoptionRate: 38, volume: '$180B' },
  { code: 'oceania', flag: '🌏', adoptionRate: 71, volume: '$150B' }
]

const futureTrends = [
  { id: 'blockchain', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'ai', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { id: 'biometrics', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { id: 'quantum', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' }
]
</script>
