<script setup>
// 使用 constants 中的配置


useHead({
  title: 'BTT 菠菜天眼通 - 天眼通',
  meta: [
    { name: 'description', content: 'BTT 菠菜天眼通首頁，提供完整的使用說明與功能導覽。' },
    { property: 'og:title', content: 'BTT 菠菜天眼通 - 天眼通' },
  ]
})

// 地區選單數據 - 按市場規模排序
const { t } = useI18n()

const regions = computed(() => [
  { code: 'global', name: t('navigation.global') },
  { code: 'europe', name: t('navigation.europe') },
  { code: 'usa', name: t('navigation.usa') },
  { code: 'japan', name: t('navigation.japan') },
  { code: 'china', name: t('navigation.china') },
  { code: 'australia', name: t('navigation.australia') },
  { code: 'korea', name: t('navigation.southeast') },
  { code: 'taiwan', name: t('navigation.taiwan') },
  { code: 'business', name: t('navigation.business') }
])

const selectedRegion = ref('global')

const getCurrentRegionName = () => {
  const region = regions.value.find(r => r.code === selectedRegion.value)
  return region ? region.name : t('navigation.global')
}

// 滾動到指定地區
const scrollToRegion = (regionCode) => {
  selectedRegion.value = regionCode
  
  // 地區代碼對應到章節ID的映射
  const regionToSectionMap = {
    'global': 'overview',
    'europe': 'europe-section',
    'usa': 'usa-section', 
    'japan': 'japan-section',
    'china': 'china-section',
    'australia': 'australia-section',
    'korea': 'southeast-asia-section',
    'taiwan': 'taiwan-section',
    'business': 'business-section'
  }
  
  const sectionId = regionToSectionMap[regionCode]
  if (sectionId) {
    // 使用 nextTick 確保 DOM 更新後再滾動
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

// 展開的地區ID
const expandedRegions = ref([])

// 切換地區展開狀態
const toggleRegion = (regionId) => {
  if (expandedRegions.value.includes(regionId)) {
    expandedRegions.value = expandedRegions.value.filter(id => id !== regionId)
  } else {
    expandedRegions.value.push(regionId)
  }
}

// 市場數據對比表格
const marketData = computed(() => [
  {
    name: t('marketData.europe.name'),
    marketSize: t('marketData.europe.marketSize') + ' ' + t('marketData.europe.marketSizeUnit'),
    growth: t('marketData.europe.growth'),
    growthClass: 'text-green-400',
    penetration: '39%',
    penetrationPercent: 39,
    penetrationColor: 'bg-purple-400',
    flagColor: 'bg-purple-500',
    features: t('marketData.europe.features')
  },
  {
    name: t('marketData.usa.name'),
    marketSize: t('marketData.usa.marketSize') + ' ' + t('marketData.usa.marketSizeUnit'),
    growth: t('marketData.usa.growth'),
    growthClass: 'text-green-400',
    penetration: '25%',
    penetrationPercent: 25,
    penetrationColor: 'bg-blue-400',
    flagColor: 'bg-blue-500',
    features: t('marketData.usa.features')
  },
  {
    name: t('marketData.japan.name'),
    marketSize: t('marketData.japan.marketSize') + ' ' + t('marketData.japan.marketSizeUnit'),
    growth: t('marketData.japan.growth'),
    growthClass: 'text-red-400',
    penetration: '~0%',
    penetrationPercent: 0,
    penetrationColor: 'bg-gray-400',
    flagColor: 'bg-red-500',
    features: t('marketData.japan.features')
  },
  {
    name: t('marketData.china.name'),
    marketSize: t('marketData.china.marketSize') + ' ' + t('marketData.china.marketSizeUnit'),
    growth: t('marketData.china.growth'),
    growthClass: 'text-green-400',
    penetration: '0%',
    penetrationPercent: 0,
    penetrationColor: 'bg-gray-400',
    flagColor: 'bg-red-600',
    features: t('marketData.china.features')
  },
  {
    name: t('marketData.australia.name'),
    marketSize: t('marketData.australia.marketSize') + ' ' + t('marketData.australia.marketSizeUnit'),
    growth: t('marketData.australia.growth'),
    growthClass: 'text-green-400',
    penetration: '30%',
    penetrationPercent: 30,
    penetrationColor: 'bg-orange-400',
    flagColor: 'bg-orange-500',
    features: t('marketData.australia.features')
  },
  {
    name: t('marketData.southeast.name'),
    marketSize: t('marketData.southeast.marketSize') + ' ' + t('marketData.southeast.marketSizeUnit'),
    growth: t('marketData.southeast.growth'),
    growthClass: 'text-green-400',
    penetration: '15%',
    penetrationPercent: 15,
    penetrationColor: 'bg-yellow-400',
    flagColor: 'bg-yellow-500',
    features: t('marketData.southeast.features')
  },
  {
    name: t('marketData.taiwan.name'),
    marketSize: t('marketData.taiwan.marketSize') + ' ' + t('marketData.taiwan.marketSizeUnit'),
    growth: t('marketData.taiwan.growth'),
    growthClass: 'text-green-400',
    penetration: '0%',
    penetrationPercent: 0,
    penetrationColor: 'bg-gray-400',
    flagColor: 'bg-blue-600',
    features: t('marketData.taiwan.features')
  }
])

// 詳細地區分析數據 - 按市場規模排序
const detailedRegions = computed(() => [
  {
    id: 'europe',
    title: t('regions.europe.title'),
    subtitle: t('regions.europe.subtitle'),
    icon: '🇪🇺',
    headerBg: 'bg-purple-600',
    stats: [
      { label: t('regionStats.europe.stats.totalRevenue'), value: '€' + t('regionStats.europe.totalRevenue'), valueClass: 'text-purple-400' },
      { label: t('regionStats.europe.stats.onlineShare'), value: t('regionStats.europe.onlineShare'), valueClass: 'text-green-400' },
      { label: t('regionStats.europe.stats.growthRate'), value: t('regionStats.europe.growthRate'), valueClass: 'text-blue-400' }
    ],
    
    sources: [
      { name: 'European Gaming & Betting Association (EGBA) - Market Report 2024', url: 'https://www.egba.eu' },
      { name: 'H2 Gambling Capital - European Market Analysis', url: 'https://h2gc.com' },
    ]
  },
  {
    id: 'usa',
    title: t('regions.usa.title'),
    subtitle: t('regions.usa.subtitle'),
    icon: '🇺🇸',
    headerBg: 'bg-blue-600',
    stats: [
      { label: t('regionStats.usa.stats.commercialRevenue'), value: '$' + t('regionStats.usa.commercialRevenue'), valueClass: 'text-blue-400' },
      { label: t('regionStats.usa.stats.totalRevenue'), value: '$' + t('regionStats.usa.totalRevenue'), valueClass: 'text-green-400' },
      { label: t('regionStats.usa.stats.onlinePenetration'), value: t('regionStats.usa.onlinePenetration'), valueClass: 'text-purple-400' }
    ],
    
    sources: [
      { name: 'American Gaming Association - Commercial Gaming Revenue Tracker 2023', url: 'https://www.americangaming.org' },
      { name: 'americangaming.org - Annual Commercial Gaming Revenue Reports', url: 'https://www.americangaming.org/research' }
    ]
  },
  {
    id: 'japan',
    title: t('regions.japan.title'),
    subtitle: t('regions.japan.subtitle'),
    icon: '🇯🇵',
    headerBg: 'bg-red-600',
    stats: [
      { label: t('regionStats.japan.stats.pachinkoWagering'), value: '¥' + t('regionStats.japan.pachinkoWagering'), valueClass: 'text-red-400' },
      { label: t('regionStats.japan.stats.marketTrend'), value: t('regionStats.japan.marketTrend'), valueClass: 'text-orange-400' },
      { label: t('regionStats.japan.stats.onlinePenetration'), value: t('regionStats.japan.onlinePenetration'), valueClass: 'text-gray-400' }
    ],
    
    sources: [
      { name: 'Asia Gaming Brief - Pachinko market analysis 2023', url: 'https://agbrief.com' },
      { name: 'Yano Research Institute - Japan Gaming Market Reports', url: 'https://www.yanoresearch.com' },
      { name: 'Japan Racing Association (JRA) - Annual Reports', url: 'https://www.jra.go.jp' }
    ]
  },
  {
    id: 'china',
    title: t('regions.china.title'),
    subtitle: t('regions.china.subtitle'),
    icon: '🇨🇳',
    headerBg: 'bg-red-700',
    stats: [
      { label: t('regionStats.china.stats.lotterySales'), value: '¥' + t('regionStats.china.lotterySales'), valueClass: 'text-red-400' },
      { label: t('regionStats.china.stats.growthRate'), value: t('regionStats.china.growthRate'), valueClass: 'text-green-400' },
      { label: t('regionStats.china.stats.onlinePenetration'), value: t('regionStats.china.onlinePenetration'), valueClass: 'text-gray-400' }
    ],
    
    sources: [
      { name: 'Xinhua - China lottery sales statistics 2023', url: 'http://www.xinhuanet.com' },
      { name: 'China Ministry of Finance - Lottery Administration Reports', url: 'http://www.mof.gov.cn' },
      { name: 'ASGAM - Mainland China lottery market analysis', url: 'https://asgam.com' }
    ]
  },
  {
    id: 'australia',
    title: t('regions.australia.title'),
    subtitle: t('regions.australia.subtitle'),
    icon: '🇦🇺',
    headerBg: 'bg-orange-600',
    stats: [
      { label: t('regionStats.australia.stats.totalLoss'), value: 'A$' + t('regionStats.australia.totalLoss'), valueClass: 'text-orange-400' },
      { label: t('regionStats.australia.stats.perCapitaLoss'), value: 'A$' + t('regionStats.australia.perCapitaLoss'), valueClass: 'text-red-400' },
      { label: t('regionStats.australia.stats.pokiesShare'), value: t('regionStats.australia.pokiesShare'), valueClass: 'text-yellow-400' }
    ],
    
    sources: [
      { name: 'The Guardian - Australia gambling losses report 2023', url: 'https://www.theguardian.com/australia-news' },
      { name: 'Queensland Government Statistician - Gambling Statistics', url: 'https://www.qgso.qld.gov.au' },
      { name: 'Australian Communications and Media Authority - Gaming Reports', url: 'https://www.acma.gov.au' }
    ]
  },
  {
    id: 'southeast-asia',
    title: t('regions.southeast.title'),
    subtitle: t('regions.southeast.subtitle'),
    icon: 'EA',
    headerBg: 'bg-yellow-600',
    stats: [
      { label: t('regionStats.southeast.stats.philippinesGGR'), value: '₱' + t('regionStats.southeast.philippinesGGR'), valueClass: 'text-yellow-400' },
      { label: t('regionStats.southeast.stats.singaporeRevenue'), value: 'S$' + t('regionStats.southeast.singaporeRevenue'), valueClass: 'text-green-400' },
      { label: t('regionStats.southeast.stats.growthRate'), value: t('regionStats.southeast.growthRate'), valueClass: 'text-green-400' }
    ],
    
    sources: [
      { name: 'PAGCOR - Philippines Gaming Revenue Reports 2024', url: 'https://www.pagcor.ph' },
      { name: 'Singapore Pools - Annual Gaming Statistics', url: 'https://www.singaporepools.com.sg' },
      { name: 'Casinova - Singapore gambling revenue analysis', url: 'https://casinova.org' }
    ]
  },
  {
    id: 'taiwan',
    title: t('regions.taiwan.title'),
    subtitle: t('regions.taiwan.subtitle'),
    icon: '🇹🇼',
    headerBg: 'bg-blue-700',
    stats: [
      { label: t('regionStats.taiwan.stats.sportsLottery'), value: 'NT$' + t('regionStats.taiwan.sportsLottery'), valueClass: 'text-blue-400' },
      { label: t('regionStats.taiwan.stats.publicLottery'), value: 'NT$' + t('regionStats.taiwan.publicLottery'), valueClass: 'text-green-400' },
      { label: t('regionStats.taiwan.stats.growthRate'), value: t('regionStats.taiwan.growthRate'), valueClass: 'text-green-400' }
    ],
    sources: [
      { name: 'Public Gaming Research Institute - Taiwan Sports Lottery Report 2024', url: 'https://publicgaming.com' },
      { name: 'Taiwan Lottery Company - Annual Sales Statistics', url: 'https://www.taiwanlottery.com.tw' },
      { name: 'Taiwan Sports Lottery Corporation - Gaming Revenue Reports', url: 'https://www.sportslottery.com.tw' }
    ]
  }
])
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">{{ $t('page.title') }}</h1>
        <p class="text-blue-100">{{ $t('page.subtitle') }}</p>
      </div>
    </div>

    <!-- 地區選單 - 固定在頂部 -->
    <div class="sticky top-0 z-40 bg-gray-800 border-b border-gray-700">
      <div class="max-w-4xl mx-auto px-6">
        <div class="flex space-x-1 overflow-x-auto">
          <button 
            v-for="region in regions" 
            :key="region.code"
            @click="scrollToRegion(region.code)"
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
    <div class="max-w-7xl mx-auto p-6">
      <!-- 全球市場概況 -->
      <div id="overview" class="bg-gray-800 rounded-lg p-8 mb-8">
        <div class="text-center mb-8">
          <div class="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-white mb-4">{{ $t('global.overview') }}</h3>
          <p class="text-gray-300 max-w-4xl mx-auto">
            {{ $t('global.description') }}
          </p>
        </div>

        <!-- 全球統計卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-gray-700 rounded-lg p-6 text-center">
            <div class="text-3xl font-bold text-green-400 mb-2">${{ $t('globalStats.totalRevenue') }}</div>
            <div class="text-white font-medium mb-1">{{ $t('globalStats.totalRevenueDesc') }}</div>
            <div class="text-gray-400 text-sm">↗ {{ $t('globalStats.growthYoY') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-6 text-center">
            <div class="text-3xl font-bold text-blue-400 mb-2">{{ $t('globalStats.onlineShare') }}</div>
            <div class="text-white font-medium mb-1">{{ $t('globalStats.onlineShareDesc') }}</div>
            <div class="text-gray-400 text-sm">{{ $t('globalStats.onlineShareValue') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-6 text-center">
            <div class="text-3xl font-bold text-purple-400 mb-2">${{ $t('globalStats.expectedRevenue') }}</div>
            <div class="text-white font-medium mb-1">{{ $t('globalStats.expectedRevenueDesc') }}</div>
            <div class="text-gray-400 text-sm">↗ {{ $t('globalStats.growthValue') }} {{ $t('globalStats.growthRate') }}</div>
          </div>
        </div>

        <!-- 全球數據來源 -->
        <div class="mt-6 pt-4 border-t border-gray-600">
          <h5 class="text-sm font-semibold text-gray-400 mb-2">{{ $t('global.dataSources') }}</h5>
          <ul class="text-xs text-gray-500 space-y-1">
            <li>• <a href="https://h2gc.com" target="_blank" class="text-blue-400 hover:text-blue-300 underline">H2 Gambling Capital - Global Gambling Industry Report 2023</a></li>
            <li>• <a href="https://www.americangaming.org" target="_blank" class="text-blue-400 hover:text-blue-300 underline">American Gaming Association (AGA) - Commercial Gaming Revenue Reports</a></li>
            <li>• <a href="https://www.egba.eu" target="_blank" class="text-blue-400 hover:text-blue-300 underline">European Gaming & Betting Association (EGBA) - Market Analysis 2024</a></li>
          </ul>
        </div>
      </div>

      <!-- 各地區市場對比表格 -->
      <div class="bg-gray-800 rounded-lg p-8 mb-8">
        <h3 class="text-xl font-semibold text-white mb-6">{{ $t('table.comparison') }}</h3>
        
        <!-- 桌面版表格 -->
        <div class="hidden lg:block overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-600">
                <th class="text-left p-4 text-gray-300 font-medium">{{ $t('table.region') }}</th>
                <th class="text-left p-4 text-gray-300 font-medium">{{ $t('table.marketSize') }}</th>
                <th class="text-left p-4 text-gray-300 font-medium">{{ $t('table.growthRate') }}</th>
                <th class="text-left p-4 text-gray-300 font-medium">
                  {{ $t('table.onlinePenetration') }}
                  <span 
                    class="ml-1 text-xs text-blue-400 cursor-help" 
                    :title="$t('table.onlinePenetrationTooltip')"
                  >
                    ⓘ
                  </span>
                </th>
                <th class="text-left p-4 text-gray-300 font-medium">{{ $t('table.features') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="region in marketData" :key="region.name" class="border-b border-gray-700 hover:bg-gray-700/50">
                <td class="p-4">
                  <div class="flex items-center space-x-3">
                    <div :class="region.flagColor" class="w-3 h-3 rounded-full"></div>
                    <span class="text-white font-medium">{{ region.name }}</span>
                  </div>
                </td>
                <td class="p-4 text-gray-300">{{ region.marketSize }}</td>
                <td class="p-4">
                  <span :class="region.growthClass">{{ region.growth }}</span>
                </td>
                <td class="p-4">
                  <div class="flex items-center space-x-2">
                    <div class="w-20 bg-gray-600 rounded-full h-2">
                      <div :class="region.penetrationColor" :style="`width: ${region.penetrationPercent}%`" class="h-2 rounded-full"></div>
                    </div>
                    <span class="text-gray-300 text-xs">{{ region.penetration }}</span>
                  </div>
                </td>
                <td class="p-4 text-gray-400 text-xs">{{ region.features }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 手機版卡片 -->
        <div class="lg:hidden space-y-4">
          <div v-for="region in marketData" :key="region.name" class="bg-gray-700 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-3">
              <div :class="region.flagColor" class="w-3 h-3 rounded-full"></div>
              <span class="text-white font-medium">{{ region.name }}</span>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-400">{{ $t('table.marketSize') }}:</span>
                <span class="text-gray-300">{{ region.marketSize }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ $t('table.growthRate') }}:</span>
                <span :class="region.growthClass">{{ region.growth }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">
                  {{ $t('table.onlinePenetration') }}
                  <span 
                    class="ml-1 text-xs text-blue-400 cursor-help" 
                    :title="$t('table.onlinePenetrationTooltip')"
                  >
                    ⓘ
                  </span>
                  :
                </span>
                <span class="text-gray-300">{{ region.penetration }}</span>
              </div>
              <div>
                <span class="text-gray-400">{{ $t('table.features') }}:</span>
                <span class="text-gray-300 text-xs block mt-1">{{ region.features }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 地區詳細分析 -->
      <div class="space-y-8">
        <div v-for="region in detailedRegions" :key="region.id" :id="region.id + '-section'" class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="p-6 border-b border-gray-700">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div :class="region.headerBg" class="w-12 h-12 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">{{ region.icon }}</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">{{ region.title }}</h3>
                  <p class="text-gray-400">{{ region.subtitle }}</p>
                </div>
              </div>
              <button 
                @click="toggleRegion(region.id)"
                class="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <svg 
                  class="w-5 h-5 text-gray-300 transition-transform" 
                  :class="expandedRegions.includes(region.id) ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div v-show="expandedRegions.includes(region.id)" class="p-6">
            <!-- 關鍵數據 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div v-for="stat in region.stats" :key="stat.label" class="bg-gray-700 rounded-lg p-4">
                <div :class="stat.valueClass" class="text-2xl font-bold mb-1">{{ stat.value }}</div>
                <div class="text-gray-300 text-sm">{{ stat.label }}</div>
              </div>
            </div>

            <!-- 詳細內容 -->
            <div class="prose prose-invert max-w-none">
              <div class="text-gray-300 text-sm leading-relaxed">
                <!-- 歐洲 -->
                <div v-if="region.id === 'europe'">
                  <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regionStats.europe.content.marketSize') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.europe.content.marketSizeDesc') }}</p>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('regionStats.europe.content.mainPlayers') }}</h4>
                  <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>{{ $t('regionStats.europe.content.crossBorder') }}</strong> {{ $t('regionStats.europe.content.crossBorderDesc') }}</li>
                    <li><strong>{{ $t('regionStats.europe.content.stateOwned') }}</strong> {{ $t('regionStats.europe.content.stateOwnedDesc') }}</li>
                    <li><strong>{{ $t('regionStats.europe.content.regional') }}</strong> {{ $t('regionStats.europe.content.regionalDesc') }}</li>
                  </ul>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('regionStats.europe.content.onlineMarket') }}</h4>
                  <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>{{ $t('regionStats.europe.content.nordic') }}</strong> {{ $t('regionStats.europe.content.nordicDesc') }}</li>
                    <li><strong>{{ $t('regionStats.europe.content.uk') }}</strong> {{ $t('regionStats.europe.content.ukDesc') }}</li>
                    <li><strong>{{ $t('regionStats.europe.content.southEurope') }}</strong> {{ $t('regionStats.europe.content.southEuropeDesc') }}</li>
                  </ul>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('regionStats.europe.content.regulations') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.europe.content.regulationsDesc') }}</p>
                </div>

                <!-- 美國 -->
                <div v-if="region.id === 'usa'">
                  <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regionStats.usa.content.marketSize') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.usa.content.marketSizeDesc') }}</p>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('regionStats.usa.content.mainPlayers') }}</h4>
                  <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>{{ $t('regionStats.usa.content.physicalCasinos') }}</strong> {{ $t('regionStats.usa.content.physicalCasinosDesc') }}</li>
                    <li><strong>{{ $t('regionStats.usa.content.onlineSports') }}</strong> {{ $t('regionStats.usa.content.onlineSportsDesc') }}</li>
                    <li><strong>{{ $t('regionStats.usa.content.onlineCasino') }}</strong> {{ $t('regionStats.usa.content.onlineCasinoDesc') }}</li>
                  </ul>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('regionStats.usa.content.recentTrends') }}</h4>
                  <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>{{ $t('regionStats.usa.content.sportsBoom') }}</strong> {{ $t('regionStats.usa.content.sportsBoomDesc') }}</li>
                    <li><strong>{{ $t('regionStats.usa.content.slotsStable') }}</strong> {{ $t('regionStats.usa.content.slotsStableDesc') }}</li>
                    <li><strong>{{ $t('regionStats.usa.content.onlineGrowth') }}</strong> {{ $t('regionStats.usa.content.onlineGrowthDesc') }}</li>
                  </ul>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('regionStats.usa.content.regulations') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.usa.content.regulationsDesc') }}</p>
                </div>

                <!-- 日本 -->
                <div v-if="region.id === 'japan'">
                  <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regionStats.japan.content.marketFeatures') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.japan.content.marketFeaturesDesc') }}</p>
                  <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>{{ $t('regionStats.japan.content.pachinkoDecline') }}</strong> {{ $t('regionStats.japan.content.pachinkoDeclineDesc') }}</li>
                    <li><strong>{{ $t('regionStats.japan.content.publicGaming') }}</strong> {{ $t('regionStats.japan.content.publicGamingDesc') }}</li>
                    <li><strong>{{ $t('regionStats.japan.content.strictRegulations') }}</strong> {{ $t('regionStats.japan.content.strictRegulationsDesc') }}</li>
                    <li><strong>{{ $t('regionStats.japan.content.futureDevelopment') }}</strong> {{ $t('regionStats.japan.content.futureDevelopmentDesc') }}</li>
                  </ul>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-6">{{ $t('regionStats.japan.content.playerCharacteristics') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.japan.content.playerCharacteristicsDesc') }}</p>
                </div>

                <!-- 中國 -->
                <div v-if="region.id === 'china'">
                  <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regionStats.china.content.officialMarket') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.china.content.officialMarketDesc') }}</p>
                  
                  <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>{{ $t('regionStats.china.content.strictPolicy') }}</strong> {{ $t('regionStats.china.content.strictPolicyDesc') }}</li>
                    <li><strong>{{ $t('regionStats.china.content.dualOperation') }}</strong> {{ $t('regionStats.china.content.dualOperationDesc') }}</li>
                    <li><strong>{{ $t('regionStats.china.content.onlineRestrictions') }}</strong> {{ $t('regionStats.china.content.onlineRestrictionsDesc') }}</li>
                  </ul>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-6">{{ $t('regionStats.china.content.undergroundMarket') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.china.content.undergroundMarketDesc') }}</p>
                </div>

                <!-- 澳洲 -->
                <div v-if="region.id === 'australia'">
                  <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regionStats.australia.content.marketFeatures') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.australia.content.marketFeaturesDesc') }}</p>
                  
                  <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>{{ $t('regionStats.australia.content.pokiesDominance') }}</strong> {{ $t('regionStats.australia.content.pokiesDominanceDesc') }}</li>
                    <li><strong>{{ $t('regionStats.australia.content.sportsBetting') }}</strong> {{ $t('regionStats.australia.content.sportsBettingDesc') }}</li>
                    <li><strong>{{ $t('regionStats.australia.content.mainOperators') }}</strong> {{ $t('regionStats.australia.content.mainOperatorsDesc') }}</li>
                    <li><strong>{{ $t('regionStats.australia.content.stricterRegulations') }}</strong> {{ $t('regionStats.australia.content.stricterRegulationsDesc') }}</li>
                  </ul>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-6">{{ $t('regionStats.australia.content.playerBehavior') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.australia.content.playerBehaviorDesc') }}</p>
                </div>

                <!-- 東南亞 -->
                <div v-if="region.id === 'southeast-asia'">
                  <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regionStats.southeast.content.philippinesMarket') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.southeast.content.philippinesMarketDesc') }}</p>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-6">{{ $t('regionStats.southeast.content.singaporeMarket') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.southeast.content.singaporeMarketDesc') }}</p>
                  
                  <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>{{ $t('regionStats.southeast.content.policyDivergence') }}</strong> {{ $t('regionStats.southeast.content.policyDivergenceDesc') }}</li>
                    <li><strong>{{ $t('regionStats.southeast.content.mainOperators') }}</strong> {{ $t('regionStats.southeast.content.mainOperatorsDesc') }}</li>
                    <li><strong>{{ $t('regionStats.southeast.content.regulatoryChanges') }}</strong> {{ $t('regionStats.southeast.content.regulatoryChangesDesc') }}</li>
                  </ul>
                </div>

                <!-- 台灣 -->
                <div v-if="region.id === 'taiwan'">
                  <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regionStats.taiwan.content.legalMarket') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.taiwan.content.legalMarketDesc') }}</p>
                  
                  <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>{{ $t('regionStats.taiwan.content.governmentMonopoly') }}</strong> {{ $t('regionStats.taiwan.content.governmentMonopolyDesc') }}</li>
                    <li><strong>{{ $t('regionStats.taiwan.content.sportsGrowth') }}</strong> {{ $t('regionStats.taiwan.content.sportsGrowthDesc') }}</li>
                    <li><strong>{{ $t('regionStats.taiwan.content.channelPopularity') }}</strong> {{ $t('regionStats.taiwan.content.channelPopularityDesc') }}</li>
                  </ul>
                  
                  <h4 class="text-lg font-semibold text-white mb-3 mt-6">{{ $t('regionStats.taiwan.content.regulatoryEnvironment') }}</h4>
                  <p class="mb-4">{{ $t('regionStats.taiwan.content.regulatoryEnvironmentDesc') }}</p>
                </div>
              </div>
            </div>

            <!-- 數據來源 -->
            <div v-if="region.sources" class="mt-6 pt-4 border-t border-gray-600">
              <h5 class="text-sm font-semibold text-gray-400 mb-2">{{ $t('dataSources') }}</h5>
              <ul class="text-xs text-gray-500 space-y-1">
                <li v-for="source in region.sources" :key="source.name">
                  • 
                  <a 
                    v-if="source.url" 
                    :href="source.url" 
                    target="_blank" 
                    class="text-blue-400 hover:text-blue-300 underline"
                  >
                    {{ source.name }}
                  </a>
                  <span v-else class="text-gray-500">{{ source.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 商務合作 -->
      <BusinessCooperation />
    </div>
  </div>
</template>
