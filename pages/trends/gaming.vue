<script setup>
// 國際化
const { t, locale } = useI18n()

useHead({
  title: 'BTT 菠菜天眼通 - 遊戲趨勢',
  meta: [
    { name: 'description', content: '全球博弈遊戲類型趨勢分析與市場動態' },
    { property: 'og:title', content: 'BTT 菠菜天眼通 - 遊戲趨勢' },
  ]
})

// 遊戲類型選單數據
const gameTypes = computed(() => [
  { code: 'slots', name: t('gaming.gameTypes.slots'), icon: '🎰' },
  { code: 'poker', name: t('gaming.gameTypes.poker'), icon: '🃏' },
  { code: 'live', name: t('gaming.gameTypes.live'), icon: '🎲' },
  { code: 'sports', name: t('gaming.gameTypes.sports'), icon: '⚽' },
  { code: 'lottery', name: t('gaming.gameTypes.lottery'), icon: '🎫' },
  { code: 'local', name: t('gaming.gameTypes.local'), icon: '🏮' },
  { code: 'business', name: t('gaming.gameTypes.business'), icon: '💼' }
])

const selectedType = ref('slots')
const expandedTypes = ref(['slots']) // 默認展開老虎機

// 展開/折疊遊戲類型
const toggleType = (typeId) => {
  const index = expandedTypes.value.indexOf(typeId)
  if (index > -1) {
    expandedTypes.value.splice(index, 1)
  } else {
    expandedTypes.value.push(typeId)
  }
}

// 滾動到指定類型
const scrollToType = (typeCode) => {
  selectedType.value = typeCode
  
  const typeToSectionMap = {
    'slots': 'slots-section',
    'poker': 'poker-section',
    'live': 'live-section',
    'sports': 'sports-section',
    'lottery': 'lottery-section',
    'local': 'local-section',
    'business': 'business-section'
  }
  
  const sectionId = typeToSectionMap[typeCode]
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



// 偏好程度數據
const preferenceData = computed(() => [
  {
    region: t('gaming.preferenceTable.regions.northAmerica'),
    regionKey: 'gaming.preferenceTable.regions.northAmerica',
    slots: 'high',
    poker: 'medium',
    live: 'medium', 
    sports: 'high',
    lottery: 'high',
    local: 'low'
  },
  {
    region: t('gaming.preferenceTable.regions.europe'),
    regionKey: 'gaming.preferenceTable.regions.europe',
    slots: 'medium',
    poker: 'medium',
    live: 'medium',
    sports: 'high',
    lottery: 'high',
    local: 'low'
  },
  {
    region: t('gaming.preferenceTable.regions.japan'),
    regionKey: 'gaming.preferenceTable.regions.japan',
    slots: 'low',
    poker: 'low',
    live: 'low',
    sports: 'medium',
    lottery: 'medium',
    local: 'high'
  },
  {
    region: t('gaming.preferenceTable.regions.southeastAsia'),
    regionKey: 'gaming.preferenceTable.regions.southeastAsia',
    slots: 'medium',
    poker: 'low',
    live: 'high',
    sports: 'high',
    lottery: 'high',
    local: 'medium'
  },
  {
    region: t('gaming.preferenceTable.regions.australia'),
    regionKey: 'gaming.preferenceTable.regions.australia',
    slots: 'high',
    poker: 'medium',
    live: 'medium',
    sports: 'high',
    lottery: 'medium',
    local: 'medium'
  },
  {
    region: t('gaming.preferenceTable.regions.china'),
    regionKey: 'gaming.preferenceTable.regions.china',
    slots: 'low',
    poker: 'low',
    live: 'low',
    sports: 'low',
    lottery: 'high',
    local: 'medium'
  },
  {
    region: t('gaming.preferenceTable.regions.hongkongMacao'),
    regionKey: 'gaming.preferenceTable.regions.hongkongMacao',
    slots: 'high',
    poker: 'high',
    live: 'medium',
    sports: 'medium',
    lottery: 'medium',
    local: 'high'
  },
  {
    region: t('gaming.preferenceTable.regions.taiwan'),
    regionKey: 'gaming.preferenceTable.regions.taiwan',
    slots: 'low',
    poker: 'low',
    live: 'low',
    sports: 'medium',
    lottery: 'high',
    local: 'medium'
  }
])

// 遊戲類型詳細數據
const gameTypeDetails = computed(() => [
  {
    id: 'slots',
    title: t('gaming.gameTypes.slots'),
    subtitle: t('gaming.gameTypeIntro.slotsSubtitle'),
    icon: '🎰',
    headerBg: 'bg-yellow-600',
    stats: [
      { label: t('gaming.gameTypeIntro.stats.usRevenue'), value: t('gaming.gameTypeIntro.stats.usRevenueValue'), valueClass: 'text-yellow-400' },
      { label: t('gaming.gameTypeIntro.stats.australiaMachines'), value: t('gaming.gameTypeIntro.stats.australiaMachinesValue'), valueClass: 'text-orange-400' },
      { label: t('gaming.gameTypeIntro.stats.globalPlayers'), value: t('gaming.gameTypeIntro.stats.globalPlayersValue'), valueClass: 'text-blue-400' }
    ],
    platforms: [
      { name: t('gaming.gameTypeIntro.platformsData.aristocrat.name'), region: t('gaming.gameTypeIntro.platformsData.aristocrat.region'), desc: t('gaming.gameTypeIntro.platformsData.aristocrat.desc') },
      { name: t('gaming.gameTypeIntro.platformsData.igt.name'), region: t('gaming.gameTypeIntro.platformsData.igt.region'), desc: t('gaming.gameTypeIntro.platformsData.igt.desc') }
    ],
    sources: [
      { name: 'Casinos won over $66 billion in 2023, their best year ever', url: 'https://www.wtae.com/article/casino-revenue-nevada-pennsylvania-atlantic-city/46871078' },
      { name: 'Australia has the highest gambling losses per capita of any country', url: 'https://www.aph.gov.au/DocumentStore.ashx?id=b8a7e64a-d173-4d88-8d05-1e19cad22003&subId=728729' },
      { name: 'Australians lead the world when it comes to gambling', url: 'https://www.abc.net.au/news/2024-09-03/why-australia-is-addicted-to-gambling/104299376' }
    ]
  },
  {
    id: 'poker',
    title: t('gaming.gameTypes.poker'),
    subtitle: t('gaming.gameTypeIntro.pokerSubtitle'),
    icon: '🃏',
    headerBg: 'bg-blue-600',
    stats: [
      { label: t('gaming.gameTypeIntro.stats.pokerStarsUsers'), value: t('gaming.gameTypeIntro.stats.pokerStarsUsersValue'), valueClass: 'text-blue-400' },
      { label: t('gaming.gameTypeIntro.stats.usParticipants'), value: t('gaming.gameTypeIntro.stats.usParticipantsValue'), valueClass: 'text-green-400' },
      { label: t('gaming.gameTypeIntro.stats.globalTournaments'), value: t('gaming.gameTypeIntro.stats.globalTournamentsValue'), valueClass: 'text-purple-400' }
    ],
    platforms: [
      { name: t('gaming.gameTypeIntro.platformsData.pokerstars.name'), region: t('gaming.gameTypeIntro.platformsData.pokerstars.region'), desc: t('gaming.gameTypeIntro.platformsData.pokerstars.desc') },
      { name: t('gaming.gameTypeIntro.platformsData.wpt.name'), region: t('gaming.gameTypeIntro.platformsData.wpt.region'), desc: t('gaming.gameTypeIntro.platformsData.wpt.desc') }
    ],
    sources: [
      { name: 'PokerStars surpasses 100 million player milestone', url: 'https://igamingbusiness.com/casino-games/pokerstars-surpasses-100-million-player-milestone/' },
      { name: 'Casinos won over $66 billion in 2023, their best year ever', url: 'https://www.wtae.com/article/casino-revenue-nevada-pennsylvania-atlantic-city/46871078' },
      { name: 'World Series of Poker Statistics', url: 'https://www.wsop.com/news/' }
    ]
  },
  {
    id: 'live',
    title: t('gaming.gameTypes.live'),
    subtitle: t('gaming.gameTypeIntro.liveSubtitle'),
    icon: '🎲',
    headerBg: 'bg-red-600',
    stats: [
      { label: t('gaming.gameTypeIntro.stats.evolutionMarket'), value: t('gaming.gameTypeIntro.stats.evolutionMarketValue'), valueClass: 'text-red-400' },
      { label: t('gaming.gameTypeIntro.stats.mainMarket'), value: t('gaming.gameTypeIntro.stats.mainMarketValue'), valueClass: 'text-orange-400' },
      { label: t('gaming.gameTypeIntro.stats.dailyUsers'), value: t('gaming.gameTypeIntro.stats.dailyUsersValue'), valueClass: 'text-yellow-400' }
    ],
    platforms: [
      { name: t('gaming.gameTypeIntro.platformsData.evolution.name'), region: t('gaming.gameTypeIntro.platformsData.evolution.region'), desc: t('gaming.gameTypeIntro.platformsData.evolution.desc') },
      { name: t('gaming.gameTypeIntro.platformsData.playtech.name'), region: t('gaming.gameTypeIntro.platformsData.playtech.region'), desc: t('gaming.gameTypeIntro.platformsData.playtech.desc') }
    ],
    sources: [
      { name: 'Competition Is Getting Fierce – Is Evolution Gaming Still the King of Live Casino', url: 'https://www.pokertube.com/article/competition-is-getting-fierce-is-evolution-gaming-still-the-king-of-live-casino' },
      { name: 'Thailand\'s Underground Gambling Economy Reaches 1.1 Trillion Baht, Report Reveals', url: 'https://www.nationthailand.com/business/economy/40048904' },
      { name: 'Differences Between the UK and Australian Gambling Industries', url: 'https://www.primedope.com/differences-between-the-uk-and-australian-gambling-industries/' }
    ]
  },
  {
    id: 'sports',
    title: t('gaming.gameTypes.sports'),
    subtitle: t('gaming.gameTypeIntro.sportsSubtitle'),
    icon: '⚽',
    headerBg: 'bg-green-600',
    stats: [
      { label: t('gaming.gameTypeIntro.stats.usWagering'), value: t('gaming.gameTypeIntro.stats.usWageringValue'), valueClass: 'text-green-400' },
      { label: t('gaming.gameTypeIntro.stats.usRevenueSports'), value: t('gaming.gameTypeIntro.stats.usRevenueSportsValue'), valueClass: 'text-blue-400' },
      { label: t('gaming.gameTypeIntro.stats.growthRate'), value: t('gaming.gameTypeIntro.stats.growthRateValue'), valueClass: 'text-purple-400' }
    ],
    platforms: [
      { name: t('gaming.gameTypeIntro.platformsData.bet365.name'), region: t('gaming.gameTypeIntro.platformsData.bet365.region'), desc: t('gaming.gameTypeIntro.platformsData.bet365.desc') },
      { name: t('gaming.gameTypeIntro.platformsData.draftkings.name'), region: t('gaming.gameTypeIntro.platformsData.draftkings.region'), desc: t('gaming.gameTypeIntro.platformsData.draftkings.desc') }
    ],
    sources: [
      { name: 'Casinos won over $66 billion in 2023, their best year ever', url: 'https://www.wtae.com/article/casino-revenue-nevada-pennsylvania-atlantic-city/46871078' },
      { name: 'Thailand\'s Underground Gambling Economy Reaches 1.1 Trillion Baht, Report Reveals', url: 'https://www.nationthailand.com/business/economy/40048904' },
      { name: 'Differences Between the UK and Australian Gambling Industries', url: 'https://www.primedope.com/differences-between-the-uk-and-australian-gambling-industries/' }
    ]
  },
  {
    id: 'lottery',
    title: t('gaming.gameTypes.lottery'),
    subtitle: t('gaming.gameTypeIntro.lotterySubtitle'),
    icon: '🎫',
    headerBg: 'bg-purple-600',
    stats: [
      { label: t('gaming.gameTypeIntro.stats.globalParticipants'), value: t('gaming.gameTypeIntro.stats.globalParticipantsValue'), valueClass: 'text-purple-400' },
      { label: t('gaming.gameTypeIntro.stats.chinaSales'), value: t('gaming.gameTypeIntro.stats.chinaSalesValue'), valueClass: 'text-red-400' },
      { label: t('gaming.gameTypeIntro.stats.usStateRevenue'), value: t('gaming.gameTypeIntro.stats.usStateRevenueValue'), valueClass: 'text-green-400' }
    ],
    platforms: [
      { name: t('gaming.gameTypeIntro.platformsData.powerball.name'), region: t('gaming.gameTypeIntro.platformsData.powerball.region'), desc: t('gaming.gameTypeIntro.platformsData.powerball.desc') },
      { name: t('gaming.gameTypeIntro.platformsData.chinaSportsLottery.name'), region: t('gaming.gameTypeIntro.platformsData.chinaSportsLottery.region'), desc: t('gaming.gameTypeIntro.platformsData.chinaSportsLottery.desc') }
    ],
    sources: [
      { name: 'Lottery sales in China reached $85.8B in 2024, hitting 40-year high', url: 'https://agbrief.com/news/china/05/03/2025/lottery-sales-in-china-reached-85-8b-in-2024-hitting-40-year-high/' },
      { name: 'How do taxes on lotteries, casinos, sports betting, and other types of state-sanctioned gambling work?', url: 'https://taxpolicycenter.org/briefing-book/how-do-taxes-lotteries-casinos-sports-betting-and-other-types-state-sanctioned' },
      { name: 'National Lottery sales reach £8.19bn in 2022-23', url: 'https://igamingbusiness.com/finance/national-lottery-sales-reach-8-19bn-in-2022-23/' }
    ]
  },
  {
    id: 'local',
    title: t('gaming.gameTypes.local'),
    subtitle: t('gaming.gameTypeIntro.localSubtitle'),
    icon: '🏮',
    headerBg: 'bg-orange-600',
    stats: [
      { label: t('gaming.gameTypeIntro.stats.pachinkoWagering'), value: t('gaming.gameTypeIntro.stats.pachinkoWageringValue'), valueClass: 'text-orange-400' },
      { label: t('gaming.gameTypeIntro.stats.pachinkoPlayers'), value: t('gaming.gameTypeIntro.stats.pachinkoPlayersValue'), valueClass: 'text-red-400' },
      { label: t('gaming.gameTypeIntro.stats.taiwanMahjong'), value: t('gaming.gameTypeIntro.stats.taiwanMahjongValue'), valueClass: 'text-yellow-400' }
    ],
    platforms: [
      { name: t('gaming.gameTypeIntro.platformsData.maruhan.name'), region: t('gaming.gameTypeIntro.platformsData.maruhan.region'), desc: t('gaming.gameTypeIntro.platformsData.maruhan.desc') },
      { name: t('gaming.gameTypeIntro.platformsData.segaSammy.name'), region: t('gaming.gameTypeIntro.platformsData.segaSammy.region'), desc: t('gaming.gameTypeIntro.platformsData.segaSammy.desc') }
    ],
    sources: [
      { name: 'Pachinko - Wikipedia', url: 'https://en.wikipedia.org/wiki/Pachinko' },
      { name: 'New Taiwanese Party Fights Stigma Around Game of Mahjong', url: 'https://www.gamblingnews.com/news/new-taiwanese-party-fights-stigma-around-game-of-mahjong/' },
      { name: 'Population of Pachinko/Pachi-Slot Players for 2019 Estimated at 7.8 Million', url: 'https://www.yanoresearch.com/en/press-release/show/press_id/2453' }
    ]
  }
])

// 偏好程度樣式
const getPreferenceClass = (level) => {
  switch (level) {
    case 'high':
      return 'bg-green-500 text-white'
    case 'medium':
      return 'bg-yellow-500 text-white'
    case 'low':
      return 'bg-gray-500 text-white'
    default:
      return 'bg-gray-400 text-white'
  }
}

const getPreferenceText = (level) => {
  const { locale } = useI18n()
  
  if (locale.value === 'en') {
    // 英文版用縮寫
    switch (level) {
      case 'high':
        return 'H'
      case 'medium':
        return 'M'
      case 'low':
        return 'L'
      default:
        return '-'
    }
  } else {
    // 中文版用完整詞
    switch (level) {
      case 'high':
        return t('gaming.preferenceTable.high')
      case 'medium':
        return t('gaming.preferenceTable.medium')
      case 'low':
        return t('gaming.preferenceTable.low')
      default:
        return '-'
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">{{ $t('gaming.title') }}</h1>
        <p class="text-purple-100">{{ $t('gaming.subtitle') }}</p>
      </div>
    </div>

    <!-- 遊戲類型選單 - 固定在頂部 -->
    <div class="sticky top-0 z-40 bg-gray-800 border-b border-gray-700">
      <div class="max-w-4xl mx-auto px-6">
        <div class="flex space-x-1 overflow-x-auto">
          <button 
            v-for="type in gameTypes" 
            :key="type.code"
            @click="scrollToType(type.code)"
            class="flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors flex items-center space-x-2"
            :class="selectedType === type.code 
              ? 'text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-300 hover:text-white'"
          >
            <span>{{ type.icon }}</span>
            <span>{{ type.name }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 主要內容 -->
    <div class="max-w-7xl mx-auto p-6">
      <!-- 全球博弈遊戲類型概況 -->
      <div id="overview" class="bg-gray-800 rounded-lg p-8 mb-8">
        <div class="text-center mb-8">
          <div class="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-white mb-4">{{ $t('gaming.overview') }}</h3>
          <p class="text-gray-300 max-w-4xl mx-auto">
            {{ $t('gaming.description') }}
          </p>
        </div>

        <!-- 全球統計卡片 -->
        <!-- 第1行：前3大年收入 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-green-400">
            <div class="text-2xl font-bold text-yellow-400 mb-1">${{ $t('gaming.revenueStats.slotsRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.slotsUS') }}</div>
            <div class="text-green-400 text-xs font-medium">{{ $t('gaming.revenueStats.slotsType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-green-400">
            <div class="text-2xl font-bold text-blue-400 mb-1">${{ $t('gaming.revenueStats.pokerRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.pokerGlobal') }}</div>
            <div class="text-green-400 text-xs font-medium">{{ $t('gaming.revenueStats.pokerType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-blue-400">
            <div class="text-2xl font-bold text-red-400 mb-1">${{ $t('gaming.revenueStats.liveRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.liveGlobal') }}</div>
            <div class="text-blue-400 text-xs font-medium">{{ $t('gaming.revenueStats.liveType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2023') }}</div>
          </div>
        </div>
        
        <!-- 第2行：中等收入 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-green-400">
            <div class="text-2xl font-bold text-green-400 mb-1">${{ $t('gaming.revenueStats.sportsRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.sportsUS') }}</div>
            <div class="text-green-400 text-xs font-medium">{{ $t('gaming.revenueStats.sportsType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.growth44') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-purple-400">
            <div class="text-2xl font-bold text-purple-400 mb-1">${{ $t('gaming.revenueStats.lotteryRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.lotteryChina') }}</div>
            <div class="text-purple-400 text-xs font-medium">{{ $t('gaming.revenueStats.lotteryType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2024') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-blue-400">
            <div class="text-2xl font-bold text-orange-400 mb-1">¥{{ $t('gaming.revenueStats.pachinkoRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.pachinkoJP') }}</div>
            <div class="text-blue-400 text-xs font-medium">{{ $t('gaming.revenueStats.pachinkoType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2022') }}</div>
          </div>
        </div>
        
        <!-- 第3行：市場數據 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-green-400">
            <div class="text-2xl font-bold text-indigo-400 mb-1">${{ $t('gaming.revenueStats.globalMarket') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.totalMarketSize') }}</div>
            <div class="text-green-400 text-xs font-medium">{{ $t('gaming.revenueStats.globalMarketType') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-blue-400">
            <div class="text-2xl font-bold text-pink-400 mb-1">{{ $t('gaming.revenueStats.onlinePenetration') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.onlineGambling') }}</div>
            <div class="text-blue-400 text-xs font-medium">{{ $t('gaming.revenueStats.onlinePenetrationType') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center border-l-4 border-blue-400">
            <div class="text-2xl font-bold text-cyan-400 mb-1">{{ $t('gaming.revenueStats.mobileShare') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.mobileGambling') }}</div>
            <div class="text-blue-400 text-xs font-medium">{{ $t('gaming.revenueStats.mobileShareType') }}</div>
          </div>
        </div>
      </div>

      <!-- 地區偏好對比表格 -->
      <div class="bg-gray-800 rounded-lg p-8 mb-8">
        <h3 class="text-xl font-semibold text-white mb-6">{{ $t('gaming.preferenceTable.title') }}</h3>
        
        <!-- 桌面版表格 -->
        <div class="hidden lg:block overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-600">
                <th class="text-left p-4 text-gray-300 font-medium">{{ $t('gaming.preferenceTable.region') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">🎰 {{ $t('gaming.gameTypes.slots') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">🃏 {{ $t('gaming.gameTypes.poker') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">🎲 {{ $t('gaming.gameTypes.live') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">⚽ {{ $t('gaming.gameTypes.sports') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">🎫 {{ $t('gaming.gameTypes.lottery') }}</th>
                <th class="text-center p-4 text-gray-300 font-medium">🏮 {{ $t('gaming.gameTypes.local') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in preferenceData" :key="row.region" class="border-b border-gray-700 hover:bg-gray-700/50">
                <td class="p-4 text-white font-medium">{{ row.region }}</td>
                <td class="p-4 text-center">
                  <span :class="getPreferenceClass(row.slots)" class="px-2 py-1 rounded text-xs">
                    {{ getPreferenceText(row.slots) }}
                  </span>
                </td>
                <td class="p-4 text-center">
                  <span :class="getPreferenceClass(row.poker)" class="px-2 py-1 rounded text-xs">
                    {{ getPreferenceText(row.poker) }}
                  </span>
                </td>
                <td class="p-4 text-center">
                  <span :class="getPreferenceClass(row.live)" class="px-2 py-1 rounded text-xs">
                    {{ getPreferenceText(row.live) }}
                  </span>
                </td>
                <td class="p-4 text-center">
                  <span :class="getPreferenceClass(row.sports)" class="px-2 py-1 rounded text-xs">
                    {{ getPreferenceText(row.sports) }}
                  </span>
                </td>
                <td class="p-4 text-center">
                  <span :class="getPreferenceClass(row.lottery)" class="px-2 py-1 rounded text-xs">
                    {{ getPreferenceText(row.lottery) }}
                  </span>
                </td>
                <td class="p-4 text-center">
                  <span :class="getPreferenceClass(row.local)" class="px-2 py-1 rounded text-xs">
                    {{ getPreferenceText(row.local) }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 手機版卡片 -->
        <div class="lg:hidden space-y-4">
          <div v-for="row in preferenceData" :key="row.region" class="bg-gray-700 rounded-lg p-4">
            <h4 class="text-white font-medium mb-3">{{ row.region }}</h4>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="flex justify-between">
                <span>🎰 老虎機:</span>
                <span :class="getPreferenceClass(row.slots)" class="px-2 py-1 rounded">
                  {{ getPreferenceText(row.slots) }}
                </span>
              </div>
              <div class="flex justify-between">
                <span>🃏 撲克類:</span>
                <span :class="getPreferenceClass(row.poker)" class="px-2 py-1 rounded">
                  {{ getPreferenceText(row.poker) }}
                </span>
              </div>
              <div class="flex justify-between">
                <span>🎲 真人娛樂場:</span>
                <span :class="getPreferenceClass(row.live)" class="px-2 py-1 rounded">
                  {{ getPreferenceText(row.live) }}
                </span>
              </div>
              <div class="flex justify-between">
                <span>⚽ 體育博彩:</span>
                <span :class="getPreferenceClass(row.sports)" class="px-2 py-1 rounded">
                  {{ getPreferenceText(row.sports) }}
                </span>
              </div>
              <div class="flex justify-between">
                <span>🎫 彩票:</span>
                <span :class="getPreferenceClass(row.lottery)" class="px-2 py-1 rounded">
                  {{ getPreferenceText(row.lottery) }}
                </span>
              </div>
              <div class="flex justify-between">
                <span>🏮 地方特色:</span>
                <span :class="getPreferenceClass(row.local)" class="px-2 py-1 rounded">
                  {{ getPreferenceText(row.local) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 遊戲類型詳細介紹 -->
      <div class="space-y-8 mb-8">
        <h3 class="text-2xl font-semibold text-white mb-6">{{ $t('gaming.gameTypeIntro.title') }}</h3>
        <div v-for="type in gameTypeDetails" :key="type.id" :id="type.id + '-section'" class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="p-6 border-b border-gray-700">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div :class="type.headerBg" class="w-12 h-12 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">{{ type.icon }}</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">{{ type.title }}</h3>
                  <p class="text-gray-400">{{ type.subtitle }}</p>
                </div>
              </div>
              <button 
                @click="toggleType(type.id)"
                class="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <svg 
                  class="w-5 h-5 text-gray-300 transition-transform" 
                  :class="expandedTypes.includes(type.id) ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div v-show="expandedTypes.includes(type.id)" class="p-6">
            <!-- 關鍵數據 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div v-for="stat in type.stats" :key="stat.label" class="bg-gray-700 rounded-lg p-4">
                <div :class="stat.valueClass" class="text-2xl font-bold mb-1">{{ stat.value }}</div>
                <div class="text-gray-300 text-sm">{{ stat.label }}</div>
              </div>
            </div>

            <!-- 詳細內容 -->
            <div class="prose prose-invert max-w-none mb-6">
              <!-- 老虎機內容 -->
              <div v-if="type.id === 'slots'" class="text-gray-300 text-sm leading-relaxed">
                <h4 class="text-lg font-semibold text-white mb-3">{{ $t('gaming.gameTypeIntro.slots.marketDominance.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.slots.marketDominance.content') }}</p>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.slots.gameFeatures.title') }}</h4>
                <ul class="list-disc list-inside mb-4 space-y-1">
                  <li><strong>{{ $t('gaming.gameTypeIntro.slots.gameFeatures.simple') }}：</strong>{{ $t('gaming.gameTypeIntro.slots.gameFeatures.simpleDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.slots.gameFeatures.variety') }}：</strong>{{ $t('gaming.gameTypeIntro.slots.gameFeatures.varietyDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.slots.gameFeatures.themes') }}：</strong>{{ $t('gaming.gameTypeIntro.slots.gameFeatures.themesDesc') }}</li>
                </ul>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.slots.majorVendors.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.slots.majorVendors.content') }}</p>
              </div>

              <!-- 撲克類內容 -->
              <div v-if="type.id === 'poker'" class="text-gray-300 text-sm leading-relaxed">
                <h4 class="text-lg font-semibold text-white mb-3">{{ $t('gaming.gameTypeIntro.poker.gameTypes.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.poker.gameTypes.content') }}</p>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.poker.competitive.title') }}</h4>
                <ul class="list-disc list-inside mb-4 space-y-1">
                  <li><strong>{{ $t('gaming.gameTypeIntro.poker.competitive.strategic') }}：</strong>{{ $t('gaming.gameTypeIntro.poker.competitive.strategicDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.poker.competitive.skillBased') }}：</strong>{{ $t('gaming.gameTypeIntro.poker.competitive.skillBasedDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.poker.competitive.social') }}：</strong>{{ $t('gaming.gameTypeIntro.poker.competitive.socialDesc') }}</li>
                </ul>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.poker.regional.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.poker.regional.content') }}</p>
              </div>

              <!-- 真人娛樂場內容 -->
              <div v-if="type.id === 'live'" class="text-gray-300 text-sm leading-relaxed">
                <h4 class="text-lg font-semibold text-white mb-3">{{ $t('gaming.gameTypeIntro.live.innovation.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.live.innovation.content') }}</p>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.live.marketLeader.title') }}</h4>
                <ul class="list-disc list-inside mb-4 space-y-1">
                  <li><strong>{{ $t('gaming.gameTypeIntro.live.marketLeader.evolution') }}：</strong>{{ $t('gaming.gameTypeIntro.live.marketLeader.evolutionDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.live.marketLeader.asiaPreference') }}：</strong>{{ $t('gaming.gameTypeIntro.live.marketLeader.asiaPreferenceDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.live.marketLeader.techRequirement') }}：</strong>{{ $t('gaming.gameTypeIntro.live.marketLeader.techRequirementDesc') }}</li>
                </ul>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.live.userExperience.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.live.userExperience.content') }}</p>
              </div>

              <!-- 體育博彩內容 -->
              <div v-if="type.id === 'sports'" class="text-gray-300 text-sm leading-relaxed">
                <h4 class="text-lg font-semibold text-white mb-3">{{ $t('gaming.gameTypeIntro.sports.explosiveGrowth.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.sports.explosiveGrowth.content') }}</p>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.sports.globalMarket.title') }}</h4>
                <ul class="list-disc list-inside mb-4 space-y-1">
                  <li><strong>{{ $t('gaming.gameTypeIntro.sports.globalMarket.westernTradition') }}：</strong>{{ $t('gaming.gameTypeIntro.sports.globalMarket.westernTraditionDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.sports.globalMarket.asianTrend') }}：</strong>{{ $t('gaming.gameTypeIntro.sports.globalMarket.asianTrendDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.sports.globalMarket.esportsRising') }}：</strong>{{ $t('gaming.gameTypeIntro.sports.globalMarket.esportsRisingDesc') }}</li>
                </ul>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.sports.techDevelopment.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.sports.techDevelopment.content') }}</p>
              </div>

              <!-- 彩票內容 -->
              <div v-if="type.id === 'lottery'" class="text-gray-300 text-sm leading-relaxed">
                <h4 class="text-lg font-semibold text-white mb-3">{{ $t('gaming.gameTypeIntro.lottery.mostPopular.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.lottery.mostPopular.content') }}</p>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.lottery.countryPerformance.title') }}</h4>
                <ul class="list-disc list-inside mb-4 space-y-1">
                  <li><strong>{{ $t('gaming.gameTypeIntro.lottery.countryPerformance.china') }}：</strong>{{ $t('gaming.gameTypeIntro.lottery.countryPerformance.chinaDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.lottery.countryPerformance.usa') }}：</strong>{{ $t('gaming.gameTypeIntro.lottery.countryPerformance.usaDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.lottery.countryPerformance.thailand') }}：</strong>{{ $t('gaming.gameTypeIntro.lottery.countryPerformance.thailandDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.lottery.countryPerformance.uk') }}：</strong>{{ $t('gaming.gameTypeIntro.lottery.countryPerformance.ukDesc') }}</li>
                </ul>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.lottery.advantages.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.lottery.advantages.content') }}</p>
              </div>

              <!-- 地方特色內容 -->
              <div v-if="type.id === 'local'" class="text-gray-300 text-sm leading-relaxed">
                <h4 class="text-lg font-semibold text-white mb-3">{{ $t('gaming.gameTypeIntro.local.culturalRoots.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.local.culturalRoots.content') }}</p>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.local.majorTypes.title') }}</h4>
                <ul class="list-disc list-inside mb-4 space-y-1">
                  <li><strong>{{ $t('gaming.gameTypeIntro.local.majorTypes.pachinko') }}：</strong>{{ $t('gaming.gameTypeIntro.local.majorTypes.pachinkoDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.local.majorTypes.mahjong') }}：</strong>{{ $t('gaming.gameTypeIntro.local.majorTypes.mahjongDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.local.majorTypes.cockfighting') }}：</strong>{{ $t('gaming.gameTypeIntro.local.majorTypes.cockfightingDesc') }}</li>
                  <li><strong>{{ $t('gaming.gameTypeIntro.local.majorTypes.tuiTongZi') }}：</strong>{{ $t('gaming.gameTypeIntro.local.majorTypes.tuiTongZiDesc') }}</li>
                </ul>
                
                <h4 class="text-lg font-semibold text-white mb-3 mt-4">{{ $t('gaming.gameTypeIntro.local.modernDevelopment.title') }}</h4>
                <p class="mb-4">{{ $t('gaming.gameTypeIntro.local.modernDevelopment.content') }}</p>
              </div>
            </div>

            <!-- 主要平台 -->
            <div v-if="type.platforms" class="mt-6 pt-4 border-t border-gray-600">
              <h5 class="text-sm font-semibold text-gray-400 mb-2">{{ $t('gaming.gameTypeIntro.platforms') }}：</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div v-for="platform in type.platforms" :key="platform.name" class="bg-gray-700 rounded p-3">
                  <div class="font-medium text-white">{{ platform.name }}</div>
                  <div class="text-xs text-gray-400">{{ platform.region }} - {{ platform.desc }}</div>
                </div>
              </div>
            </div>

            <!-- 參考資料 -->
            <div v-if="type.sources" class="mt-6 pt-4 border-t border-gray-600">
              <h5 class="text-sm font-semibold text-gray-400 mb-2">{{ $t('gaming.gameTypeIntro.sources') }}：</h5>
              <div class="text-xs text-gray-400 space-y-1">
                <div v-for="(source, index) in type.sources" :key="index">
                  <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                    {{ source.name }}
                  </a>
                  <span v-if="index < type.sources.length - 1" class="mx-2">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 商務應用建議 -->
      <BusinessCooperation />
    </div>
  </div>
</template>
