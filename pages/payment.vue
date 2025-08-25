<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-blue-600 to-green-600 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">{{ $t('payment.title') }}</h1>
        <p class="text-blue-100">{{ $t('payment.subtitle') }}</p>
      </div>
    </div>

    <!-- 支付方式選單 - 固定在頂部 -->
    <div class="sticky top-0 z-40 bg-gray-800 border-b border-gray-700">
      <div class="max-w-4xl mx-auto px-6">
        <div class="flex space-x-1 overflow-x-auto">
          <button 
            v-for="method in paymentMethods" 
            :key="method.code"
            @click="scrollToMethod(method.code)"
            class="flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors flex items-center space-x-2"
            :class="selectedMethod === method.code 
              ? 'text-blue-400 border-b-2 border-blue-400' 
              : 'text-gray-300 hover:text-white'"
          >
            <span>{{ method.icon }}</span>
            <span>{{ method.name }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 主要內容 -->
    <div class="max-w-7xl mx-auto p-6">
      <!-- 金流概覽 -->
      <div id="overview" class="bg-gray-800 rounded-lg p-8 mb-8">
        <div class="text-center mb-8">
          <div class="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-white mb-4">{{ $t('payment.overview.title') }}</h3>
          <p class="text-gray-300 max-w-4xl mx-auto">
            {{ $t('payment.overview.description') }}
          </p>
        </div>

        <!-- 全球統計卡片 -->
        <!-- 第1行：前3大支付方式 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-blue-400">
            <div class="text-2xl font-bold text-blue-400 mb-1">${{ $t('payment.revenueStats.bankTransferRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('payment.revenueStats.bankTransferGlobal') }}</div>
            <div class="text-blue-400 text-xs font-medium">{{ $t('payment.revenueStats.bankTransferType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('payment.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-green-400">
            <div class="text-2xl font-bold text-green-400 mb-1">${{ $t('payment.revenueStats.creditCardRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('payment.revenueStats.creditCardGlobal') }}</div>
            <div class="text-green-400 text-xs font-medium">{{ $t('payment.revenueStats.creditCardType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('payment.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-purple-400">
            <div class="text-2xl font-bold text-purple-400 mb-1">${{ $t('payment.revenueStats.mobilePaymentRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('payment.revenueStats.mobilePaymentGlobal') }}</div>
            <div class="text-purple-400 text-xs font-medium">{{ $t('payment.revenueStats.mobilePaymentType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('payment.revenueStats.year2023') }}</div>
          </div>
        </div>
        
        <!-- 第2行：中等收入 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-yellow-400">
            <div class="text-2xl font-bold text-yellow-400 mb-1">${{ $t('payment.revenueStats.cashRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('payment.revenueStats.cashUnderground') }}</div>
            <div class="text-yellow-400 text-xs font-medium">{{ $t('payment.revenueStats.cashType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('payment.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-orange-400">
            <div class="text-2xl font-bold text-orange-400 mb-1">${{ $t('payment.revenueStats.cryptoRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('payment.revenueStats.cryptoGlobal') }}</div>
            <div class="text-orange-400 text-xs font-medium">{{ $t('payment.revenueStats.cryptoType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('payment.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-indigo-400">
            <div class="text-2xl font-bold text-indigo-400 mb-1">${{ $t('payment.revenueStats.ewalletRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('payment.revenueStats.ewalletGlobal') }}</div>
            <div class="text-indigo-400 text-xs font-medium">{{ $t('payment.revenueStats.ewalletType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('payment.revenueStats.year2023') }}</div>
          </div>
        </div>
        
        <!-- 第3行：市場數據 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-green-400">
            <div class="text-2xl font-bold text-green-400 mb-1">${{ $t('payment.revenueStats.globalMarket') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('payment.revenueStats.totalMarketSize') }}</div>
            <div class="text-green-400 text-xs font-medium">{{ $t('payment.revenueStats.globalMarketType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('payment.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-blue-400">
            <div class="text-2xl font-bold text-blue-400 mb-1">{{ $t('payment.revenueStats.digitalPenetration') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('payment.revenueStats.digitalPayment') }}</div>
            <div class="text-blue-400 text-xs font-medium">{{ $t('payment.revenueStats.digitalPenetrationType') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-blue-400">
            <div class="text-2xl font-bold text-cyan-400 mb-1">{{ $t('payment.revenueStats.mobileShare') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('payment.revenueStats.mobilePayment') }}</div>
            <div class="text-blue-400 text-xs font-medium">{{ $t('payment.revenueStats.mobileShareType') }}</div>
          </div>
        </div>
      </div>

      <!-- 各地區金流詳情 -->
      <div class="bg-gray-800 rounded-lg p-8 mb-8">
        <h3 class="text-xl font-semibold text-white mb-6">{{ $t('payment.regions.title') }}</h3>
        
        <!-- 桌面版表格 -->
        <div class="hidden lg:block overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-600">
                <th class="text-left p-4 text-gray-300 font-medium">{{ $t('payment.regions.region') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">{{ $t('payment.regions.adoptionRate') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">{{ $t('payment.regions.volume') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">{{ $t('payment.regions.paymentMethods') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">{{ $t('payment.regions.keyFeatures') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">{{ $t('payment.regions.regulatoryBody') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="region in regions" :key="region.code" class="border-b border-gray-700 hover:bg-gray-700/50">
                <td class="p-4 text-white font-medium">{{ $t(`payment.regions.${region.code}.title`) }}</td>
                <td class="p-4 text-center">
                  <span class="px-2 py-1 rounded text-xs" :class="region.adoptionRate >= 70 ? 'bg-green-500 text-white' : region.adoptionRate >= 50 ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'">
                    {{ region.adoptionRate }}%
                  </span>
                </td>
                <td class="p-4 text-center text-gray-300">{{ region.volume }}</td>
                <td class="p-4 text-center text-gray-300">
                  <div class="space-y-1">
                    <div v-for="method in region.paymentMethods" :key="method.type" class="flex items-center justify-center">
                      <div class="w-2 h-2 rounded-full mr-2" :class="method.color"></div>
                      <span class="text-xs">{{ $t(`payment.regions.${region.code}.paymentMethods.${method.type}`) }}</span>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-center text-gray-300">
                  <ul class="text-xs space-y-1">
                    <li v-for="feature in region.keyFeatures" :key="feature">• {{ $t(`payment.regions.${region.code}.keyFeatures.${feature}`) }}</li>
                  </ul>
                </td>
                <td class="p-4 text-center text-gray-300 text-xs">{{ $t(`payment.regions.${region.code}.regulatoryBody`) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 手機版卡片 -->
        <div class="lg:hidden space-y-4">
          <div v-for="region in regions" :key="region.code" class="bg-gray-700 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-white font-medium">{{ $t(`payment.regions.${region.code}.title`) }}</h4>
              <span class="text-2xl">{{ region.flag }}</span>
            </div>
            <div class="grid grid-cols-2 gap-4 text-xs">
              <div class="text-center">
                <div class="text-gray-400 mb-1">{{ $t('payment.regions.adoptionRate') }}</div>
                <span class="px-2 py-1 rounded" :class="region.adoptionRate >= 70 ? 'bg-green-500 text-white' : region.adoptionRate >= 50 ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'">
                  {{ region.adoptionRate }}%
                </span>
              </div>
              <div class="text-center">
                <div class="text-gray-400 mb-1">{{ $t('payment.regions.volume') }}</div>
                <div class="text-white font-medium">{{ region.volume }}</div>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-gray-600">
              <div class="text-gray-400 mb-2">{{ $t('payment.regions.paymentMethods') }}:</div>
              <div class="flex flex-wrap gap-2">
                <span v-for="method in region.paymentMethods" :key="method.type" class="text-xs text-gray-300">
                  {{ $t(`payment.regions.${region.code}.paymentMethods.${method.type}`) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 支付方式詳細介紹 -->
      <div class="space-y-8 mb-8">
        <h3 class="text-2xl font-semibold text-white mb-6">{{ $t('payment.methodIntro.title') }}</h3>
        <div v-for="method in paymentMethodDetails" :key="method.id" :id="method.id + '-section'" class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="p-6 border-b border-gray-700">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div :class="method.headerBg" class="w-12 h-12 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">{{ method.icon }}</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">{{ method.title }}</h3>
                  <p class="text-gray-400">{{ method.subtitle }}</p>
                </div>
              </div>
              <button 
                @click="toggleMethod(method.id)"
                class="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <svg 
                  class="w-5 h-5 text-gray-300 transition-transform" 
                  :class="expandedMethods.includes(method.id) ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div v-show="expandedMethods.includes(method.id)" class="p-6">
            <!-- 關鍵數據 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div v-for="stat in method.stats" :key="stat.label" class="bg-gray-700 rounded-lg p-4">
                <div :class="stat.valueClass" class="text-2xl font-bold mb-1">{{ stat.value }}</div>
                <div class="text-gray-300 text-sm">{{ stat.label }}</div>
              </div>
            </div>

            <!-- 詳細內容 -->
            <div class="prose prose-invert max-w-none mb-6">
              <div class="text-gray-300 text-sm leading-relaxed">
                <h4 class="text-lg font-semibold text-white mb-3">{{ $t(`payment.methodIntro.${method.id}.overview.title`) }}</h4>
                <p class="mb-4">{{ $t(`payment.methodIntro.${method.id}.overview.content`) }}</p>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t(`payment.methodIntro.${method.id}.advantages.title`) }}</h4>
                <ul class="list-disc list-inside mb-4 space-y-1">
                  <li><strong>{{ $t(`payment.methodIntro.${method.id}.advantages.security`) }}：</strong>{{ $t(`payment.methodIntro.${method.id}.advantages.securityDesc`) }}</li>
                  <li><strong>{{ $t(`payment.methodIntro.${method.id}.advantages.convenience`) }}：</strong>{{ $t(`payment.methodIntro.${method.id}.advantages.convenienceDesc`) }}</li>
                  <li><strong>{{ $t(`payment.methodIntro.${method.id}.advantages.global`) }}：</strong>{{ $t(`payment.methodIntro.${method.id}.advantages.globalDesc`) }}</li>
                </ul>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t(`payment.methodIntro.${method.id}.challenges.title`) }}</h4>
                <p class="mb-4">{{ $t(`payment.methodIntro.${method.id}.challenges.content`) }}</p>
              </div>
            </div>

            <!-- 主要平台 -->
            <div v-if="method.platforms" class="mt-6 pt-4 border-t border-gray-600">
              <h5 class="text-sm font-semibold text-gray-400 mb-2">{{ $t('payment.methodIntro.platforms') }}：</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div v-for="platform in method.platforms" :key="platform.name" class="bg-gray-700 rounded p-3">
                  <div class="font-medium text-white">{{ platform.name }}</div>
                  <div class="text-xs text-gray-400">{{ platform.region }} - {{ platform.desc }}</div>
                </div>
              </div>
            </div>

            <!-- 參考資料 -->
            <div v-if="method.sources" class="mt-6 pt-4 border-t border-gray-600">
              <h5 class="text-sm font-semibold text-gray-400 mb-2">{{ $t('payment.methodIntro.sources') }}：</h5>
              <div class="text-xs text-gray-400 space-y-1">
                <div v-for="(source, index) in method.sources" :key="index">
                  <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                    {{ source.name }}
                  </a>
                  <span v-if="index < method.sources.length - 1" class="mx-2">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 金流趨勢 -->
      <div class="bg-gray-800 rounded-lg p-8 mt-8 mb-8">
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

      <!-- 商務合作建議 -->
      <div id="business-cooperation">
        <BusinessCooperation />
      </div>
    </div>
  </div>
</template>

<script setup>
// 國際化
const { t, locale } = useI18n()

useHead({
  title: 'BTT 菠菜天眼通 - 金流管道',
  meta: [
    { name: 'description', content: '全球博弈產業金流與支付系統分析報告' },
    { property: 'og:title', content: 'BTT 菠菜天眼通 - 金流管道' },
  ]
})

// 支付方式選單數據
const paymentMethods = computed(() => [
  { code: 'bankTransfer', name: t('payment.methods.bankTransfer'), icon: '🏦' },
  { code: 'creditCard', name: t('payment.methods.creditCard'), icon: '💳' },
  { code: 'cash', name: t('payment.methods.cash'), icon: '💵' },
  { code: 'mobilePayment', name: t('payment.methods.mobilePayment'), icon: '📱' },
  { code: 'cryptocurrency', name: t('payment.methods.cryptocurrency'), icon: '₿' },
  { code: 'ewallet', name: t('payment.methods.ewallet'), icon: '💼' },
  { code: 'underground', name: t('payment.methods.underground'), icon: '🌐' },
  { code: 'business', name: t('payment.methods.business'), icon: '🤝' }
])

const selectedMethod = ref('bankTransfer')
const expandedMethods = ref(['bankTransfer']) // 默認展開銀行轉帳

// 展開/折疊支付方式
const toggleMethod = (methodId) => {
  const index = expandedMethods.value.indexOf(methodId)
  if (index > -1) {
    expandedMethods.value.splice(index, 1)
  } else {
    expandedMethods.value.push(methodId)
  }
}

// 滾動到指定支付方式
const scrollToMethod = (methodCode) => {
  selectedMethod.value = methodCode
  
  const methodToSectionMap = {
    'bankTransfer': 'bankTransfer-section',
    'creditCard': 'creditCard-section',
    'cash': 'cash-section',
    'mobilePayment': 'mobilePayment-section',
    'cryptocurrency': 'cryptocurrency-section',
    'ewallet': 'ewallet-section',
    'underground': 'underground-section',
    'business': 'business-cooperation'
  }
  
  const sectionId = methodToSectionMap[methodCode]
  if (sectionId) {
    nextTick(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  }
}

// 支付方式詳細數據
const paymentMethodDetails = computed(() => [
  {
    id: 'bankTransfer',
    title: t('payment.methods.bankTransfer'),
    subtitle: t('payment.methodIntro.bankTransferSubtitle'),
    icon: '🏦',
    headerBg: 'bg-blue-600',
    stats: [
      { label: t('payment.methodIntro.stats.globalVolume'), value: t('payment.methodIntro.stats.bankTransferVolume'), valueClass: 'text-blue-400' },
      { label: t('payment.methodIntro.stats.adoptionRate'), value: t('payment.methodIntro.stats.bankTransferRate'), valueClass: 'text-green-400' },
      { label: t('payment.methodIntro.stats.security'), value: t('payment.methodIntro.stats.bankTransferSecurity'), valueClass: 'text-purple-400' }
    ],
    platforms: [
      { name: t('payment.methodIntro.platformsData.swift.name'), region: t('payment.methodIntro.platformsData.swift.region'), desc: t('payment.methodIntro.platformsData.swift.desc') },
      { name: t('payment.methodIntro.platformsData.sepa.name'), region: t('payment.methodIntro.platformsData.sepa.region'), desc: t('payment.methodIntro.platformsData.sepa.desc') }
    ],
    sources: [
      { name: 'SWIFT Annual Review 2023', url: 'https://www.swift.com/our-solutions/compliance-and-shared-services/business-intelligence/our-reports/annual-review' },
      { name: 'SEPA Statistics', url: 'https://www.ecb.europa.eu/paym/sepa/statistics/html/index.en.html' },
      { name: 'Global Banking Statistics', url: 'https://www.bis.org/statistics/' }
    ]
  },
  {
    id: 'creditCard',
    title: t('payment.methods.creditCard'),
    subtitle: t('payment.methodIntro.creditCardSubtitle'),
    icon: '💳',
    headerBg: 'bg-green-600',
    stats: [
      { label: t('payment.methodIntro.stats.usRevenue'), value: t('payment.methodIntro.stats.creditCardRevenue'), valueClass: 'text-green-400' },
      { label: t('payment.methodIntro.stats.globalUsage'), value: t('payment.methodIntro.stats.creditCardUsage'), valueClass: 'text-blue-400' },
      { label: t('payment.methodIntro.stats.convenience'), value: t('payment.methodIntro.stats.creditCardConvenience'), valueClass: 'text-yellow-400' }
    ],
    platforms: [
      { name: t('payment.methodIntro.platformsData.visa.name'), region: t('payment.methodIntro.platformsData.visa.region'), desc: t('payment.methodIntro.platformsData.visa.desc') },
      { name: t('payment.methodIntro.platformsData.mastercard.name'), region: t('payment.methodIntro.platformsData.mastercard.region'), desc: t('payment.methodIntro.platformsData.mastercard.desc') }
    ],
    sources: [
      { name: 'Visa Annual Report 2023', url: 'https://investor.visa.com/financial-information/annual-reports' },
      { name: 'Mastercard Annual Report 2023', url: 'https://investor.mastercard.com/financial-information/annual-reports' },
      { name: 'Global Credit Card Statistics', url: 'https://www.statista.com/outlook/dmo/fintech/digital-payments/credit-card-payments/worldwide' }
    ]
  },
  {
    id: 'cash',
    title: t('payment.methods.cash'),
    subtitle: t('payment.methodIntro.cashSubtitle'),
    icon: '💵',
    headerBg: 'bg-yellow-600',
    stats: [
      { label: t('payment.methodIntro.stats.undergroundVolume'), value: t('payment.methodIntro.stats.cashVolume'), valueClass: 'text-yellow-400' },
      { label: t('payment.methodIntro.stats.anonymity'), value: t('payment.methodIntro.stats.cashAnonymity'), valueClass: 'text-gray-400' },
      { label: t('payment.methodIntro.stats.regulatory'), value: t('payment.methodIntro.stats.cashRegulatory'), valueClass: 'text-red-400' }
    ],
    platforms: [
      { name: t('payment.methodIntro.platformsData.local.name'), region: t('payment.methodIntro.platformsData.local.region'), desc: t('payment.methodIntro.platformsData.local.desc') },
      { name: t('payment.methodIntro.platformsData.underground.name'), region: t('payment.methodIntro.platformsData.underground.region'), desc: t('payment.methodIntro.platformsData.underground.desc') }
    ],
    sources: [
      { name: 'Underground Economy Report 2023', url: 'https://www.worldbank.org/en/topic/financialsector/brief/underground-economy' },
      { name: 'Cash Usage Statistics', url: 'https://www.federalreserve.gov/paymentsystems/fedcash_annual.htm' },
      { name: 'Global Cash Circulation', url: 'https://www.bis.org/publ/qtrpdf/r_qt2303.htm' }
    ]
  },
  {
    id: 'mobilePayment',
    title: t('payment.methods.mobilePayment'),
    subtitle: t('payment.methodIntro.mobilePaymentSubtitle'),
    icon: '📱',
    headerBg: 'bg-purple-600',
    stats: [
      { label: t('payment.methodIntro.stats.asiaAdoption'), value: t('payment.methodIntro.stats.mobilePaymentAdoption'), valueClass: 'text-purple-400' },
      { label: t('payment.methodIntro.stats.growthRate'), value: t('payment.methodIntro.stats.mobilePaymentGrowth'), valueClass: 'text-green-400' },
      { label: t('payment.methodIntro.stats.convenience'), value: t('payment.methodIntro.stats.mobilePaymentConvenience'), valueClass: 'text-blue-400' }
    ],
    platforms: [
      { name: t('payment.methodIntro.platformsData.alipay.name'), region: t('payment.methodIntro.platformsData.alipay.region'), desc: t('payment.methodIntro.platformsData.alipay.desc') },
      { name: t('payment.methodIntro.platformsData.wechat.name'), region: t('payment.methodIntro.platformsData.wechat.region'), desc: t('payment.methodIntro.platformsData.wechat.desc') }
    ],
    sources: [
      { name: 'Alipay Annual Report 2023', url: 'https://www.alibabagroup.com/en/ir/reports' },
      { name: 'WeChat Pay Statistics', url: 'https://www.tencent.com/en-us/investors.html' },
      { name: 'Global Mobile Payment Trends', url: 'https://www.statista.com/outlook/dmo/fintech/digital-payments/mobile-payments/worldwide' }
    ]
  },
  {
    id: 'cryptocurrency',
    title: t('payment.methods.cryptocurrency'),
    subtitle: t('payment.methodIntro.cryptocurrencySubtitle'),
    icon: '₿',
    headerBg: 'bg-orange-600',
    stats: [
      { label: t('payment.methodIntro.stats.marketCap'), value: t('payment.methodIntro.stats.cryptoMarketCap'), valueClass: 'text-orange-400' },
      { label: t('payment.methodIntro.stats.anonymity'), value: t('payment.methodIntro.stats.cryptoAnonymity'), valueClass: 'text-green-400' },
      { label: t('payment.methodIntro.stats.volatility'), value: t('payment.methodIntro.stats.cryptoVolatility'), valueClass: 'text-red-400' }
    ],
    platforms: [
      { name: t('payment.methodIntro.platformsData.bitcoin.name'), region: t('payment.methodIntro.platformsData.bitcoin.region'), desc: t('payment.methodIntro.platformsData.bitcoin.desc') },
      { name: t('payment.methodIntro.platformsData.ethereum.name'), region: t('payment.methodIntro.platformsData.ethereum.region'), desc: t('payment.methodIntro.platformsData.ethereum.desc') }
    ],
    sources: [
      { name: 'Bitcoin Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf' },
      { name: 'Ethereum Foundation', url: 'https://ethereum.org/en/whitepaper/' },
      { name: 'Global Crypto Market Data', url: 'https://coinmarketcap.com/' }
    ]
  },
  {
    id: 'ewallet',
    title: t('payment.methods.ewallet'),
    subtitle: t('payment.methodIntro.ewalletSubtitle'),
    icon: '💼',
    headerBg: 'bg-indigo-600',
    stats: [
      { label: t('payment.methodIntro.stats.globalUsers'), value: t('payment.methodIntro.stats.ewalletUsers'), valueClass: 'text-indigo-400' },
      { label: t('payment.methodIntro.stats.transactionVolume'), value: t('payment.methodIntro.stats.ewalletVolume'), valueClass: 'text-green-400' },
      { label: t('payment.methodIntro.stats.security'), value: t('payment.methodIntro.stats.ewalletSecurity'), valueClass: 'text-blue-400' }
    ],
    platforms: [
      { name: t('payment.methodIntro.platformsData.paypal.name'), region: t('payment.methodIntro.platformsData.paypal.region'), desc: t('payment.methodIntro.platformsData.paypal.desc') },
      { name: t('payment.methodIntro.platformsData.skrill.name'), region: t('payment.methodIntro.platformsData.skrill.region'), desc: t('payment.methodIntro.platformsData.skrill.desc') }
    ],
    sources: [
      { name: 'PayPal Annual Report 2023', url: 'https://investor.pypl.com/financial-information/annual-reports' },
      { name: 'Skrill Statistics', url: 'https://www.skrill.com/en/about-us/' },
      { name: 'Global E-Wallet Market', url: 'https://www.statista.com/outlook/dmo/fintech/digital-payments/e-wallets/worldwide' }
    ]
  },
  {
    id: 'underground',
    title: t('payment.methods.underground'),
    subtitle: t('payment.methodIntro.undergroundSubtitle'),
    icon: '🌐',
    headerBg: 'bg-red-600',
    stats: [
      { label: t('payment.methodIntro.stats.estimatedVolume'), value: t('payment.methodIntro.stats.undergroundVolume'), valueClass: 'text-red-400' },
      { label: t('payment.methodIntro.stats.riskLevel'), value: t('payment.methodIntro.stats.undergroundRisk'), valueClass: 'text-orange-400' },
      { label: t('payment.methodIntro.stats.regulatory'), value: t('payment.methodIntro.stats.undergroundRegulatory'), valueClass: 'text-yellow-400' }
    ],
    platforms: [
      { name: t('payment.methodIntro.platformsData.hawala.name'), region: t('payment.methodIntro.platformsData.hawala.region'), desc: t('payment.methodIntro.platformsData.hawala.desc') },
      { name: t('payment.methodIntro.platformsData.underground.name'), region: t('payment.methodIntro.platformsData.underground.region'), desc: t('payment.methodIntro.platformsData.underground.desc') }
    ],
    sources: [
      { name: 'Underground Banking Report', url: 'https://www.fatf-gafi.org/publications/methodsandtrends/documents/underground-banking.html' },
      { name: 'Hawala System Analysis', url: 'https://www.worldbank.org/en/topic/financialsector/brief/hawala' },
      { name: 'Global Underground Economy', url: 'https://www.imf.org/en/Publications/WP/Issues/2018/12/13/The-Global-Underground-Economy-46396' }
    ]
  }
])

// 各地區金流詳情
const regions = [
  { 
    code: 'northAmerica', 
    flag: '🇺🇸', 
    adoptionRate: 78, 
    volume: '$850B',
    paymentMethods: [
      { type: 'bankTransfer', color: 'bg-blue-500' },
      { type: 'creditCard', color: 'bg-green-500' },
      { type: 'mobilePayment', color: 'bg-purple-500' }
    ],
    keyFeatures: ['digitalFirst', 'strongRegulation', 'highSecurity']
  },
  { 
    code: 'europe', 
    flag: '🇪🇺', 
    adoptionRate: 82, 
    volume: '$720B',
    paymentMethods: [
      { type: 'bankTransfer', color: 'bg-blue-500' },
      { type: 'creditCard', color: 'bg-green-500' },
      { type: 'ewallet', color: 'bg-purple-500' }
    ],
    keyFeatures: ['unifiedStandards', 'gdprCompliance', 'crossBorder']
  },
  { 
    code: 'asia', 
    flag: '🌏', 
    adoptionRate: 65, 
    volume: '$680B',
    paymentMethods: [
      { type: 'mobilePayment', color: 'bg-purple-500' },
      { type: 'bankTransfer', color: 'bg-blue-500' },
      { type: 'ewallet', color: 'bg-green-500' }
    ],
    keyFeatures: ['mobileFirst', 'rapidGrowth', 'localInnovation']
  },
  { 
    code: 'latinAmerica', 
    flag: '🌎', 
    adoptionRate: 45, 
    volume: '$320B',
    paymentMethods: [
      { type: 'bankTransfer', color: 'bg-blue-500' },
      { type: 'mobilePayment', color: 'bg-purple-500' },
      { type: 'cash', color: 'bg-yellow-500' }
    ],
    keyFeatures: ['growingDigital', 'regulatoryDevelopment', 'financialInclusion']
  },
  { 
    code: 'africa', 
    flag: '🌍', 
    adoptionRate: 38, 
    volume: '$180B',
    paymentMethods: [
      { type: 'mobilePayment', color: 'bg-purple-500' },
      { type: 'bankTransfer', color: 'bg-blue-500' },
      { type: 'cash', color: 'bg-yellow-500' }
    ],
    keyFeatures: ['mobileMoney', 'financialInclusion', 'leapfrogging']
  },
  { 
    code: 'oceania', 
    flag: '🌏', 
    adoptionRate: 71, 
    volume: '$150B',
    paymentMethods: [
      { type: 'bankTransfer', color: 'bg-blue-500' },
      { type: 'creditCard', color: 'bg-green-500' },
      { type: 'mobilePayment', color: 'bg-purple-500' }
    ],
    keyFeatures: ['advancedInfrastructure', 'strongRegulation', 'highAdoption']
  }
]

// 未來趨勢
const futureTrends = [
  { id: 'blockchain', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'ai', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { id: 'biometrics', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { id: 'quantum', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' }
]
</script>
