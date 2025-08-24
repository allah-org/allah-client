<script setup>
// 國際化
const { t } = useI18n()

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
    slots: 'high',
    poker: 'medium',
    live: 'medium', 
    sports: 'high',
    lottery: 'high',
    local: 'low'
  },
  {
    region: t('gaming.preferenceTable.regions.europe'),
    slots: 'medium',
    poker: 'medium',
    live: 'medium',
    sports: 'high',
    lottery: 'high',
    local: 'low'
  },
  {
    region: t('gaming.preferenceTable.regions.japan'),
    slots: 'low',
    poker: 'low',
    live: 'low',
    sports: 'medium',
    lottery: 'medium',
    local: 'high'
  },
  {
    region: t('gaming.preferenceTable.regions.southeastAsia'),
    slots: 'medium',
    poker: 'low',
    live: 'high',
    sports: 'high',
    lottery: 'high',
    local: 'medium'
  },
  {
    region: t('gaming.preferenceTable.regions.australia'),
    slots: 'high',
    poker: 'medium',
    live: 'medium',
    sports: 'high',
    lottery: 'medium',
    local: 'medium'
  },
  {
    region: t('gaming.preferenceTable.regions.china'),
    slots: 'low',
    poker: 'low',
    live: 'low',
    sports: 'low',
    lottery: 'high',
    local: 'medium'
  },
  {
    region: t('gaming.preferenceTable.regions.hongkongMacao'),
    slots: 'high',
    poker: 'high',
    live: 'medium',
    sports: 'medium',
    lottery: 'medium',
    local: 'high'
  },
  {
    region: t('gaming.preferenceTable.regions.taiwan'),
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
      { label: '美國年收入', value: '$355億', valueClass: 'text-yellow-400' },
      { label: '澳洲機台數', value: '20萬台', valueClass: 'text-orange-400' },
      { label: '全球玩家數', value: '數千萬', valueClass: 'text-blue-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">市場主導地位</h4>
      <p class="mb-4">老虎機是西方賭場中最主要的收入來源，美國2023年賭場老虎機收入達355.1億美元，占比顯著高於桌面遊戲。澳洲俗稱"Pokies"，擁有全球約20%的投幣機數量，人均老虎機損失為全球最高。</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">遊戲特點</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>簡單易懂：</strong>以簡單拉霸玩法和多樣主題吸引大量休閒玩家</li>
        <li><strong>種類豐富：</strong>包含傳統實體角子機和線上視頻老虎機</li>
        <li><strong>主題多樣：</strong>從傳統水果機到電影、動漫、歷史等各種主題</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">主要廠商</h4>
      <p class="mb-4">Aristocrat Leisure（澳洲）是全球最大的老虎機製造商之一，其產品行銷世界各地。IGT（美國）也是拉斯維加斯機台供應的重要廠商。</p>
    `,
    platforms: [
      { name: 'Aristocrat Leisure', region: '澳洲', desc: '全球最大老虎機製造商' },
      { name: 'IGT', region: '美國', desc: '拉斯維加斯機台供應巨頭' }
    ],
    sources: [
      { name: 'American Gaming Association 2023 Report', url: 'https://www.americangaming.org/research/commercial-gaming-revenue-tracker/' },
      { name: 'Aristocrat Leisure Annual Report', url: 'https://www.aristocrat.com/investors/annual-reports' },
      { name: 'Nevada Gaming Control Board', url: 'https://gaming.nv.gov/index.aspx?page=144' }
    ]
  },
  {
    id: 'poker',
    title: t('gaming.gameTypes.poker'),
    subtitle: t('gaming.gameTypeIntro.pokerSubtitle'),
    icon: '🃏',
    headerBg: 'bg-blue-600',
    stats: [
      { label: 'PokerStars用戶', value: '1億+', valueClass: 'text-blue-400' },
      { label: '美國參與者', value: '數千萬', valueClass: 'text-green-400' },
      { label: '全球錦標賽', value: 'WSOP等', valueClass: 'text-purple-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">遊戲類型多樣</h4>
      <p class="mb-4">包含德州撲克、二十一點、百家樂等以紙牌為媒介的賭桌遊戲。在實體賭場與線上平台均流行，線上撲克平台PokerStars在2016年註冊玩家數已突破1億。</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">競技性特色</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>策略性強：</strong>撲克具有競技性並催生職業錦標賽（如WSOP）</li>
        <li><strong>技巧要求：</strong>不純粹依靠運氣，策略和心理戰同樣重要</li>
        <li><strong>社交互動：</strong>線上平台強化社交功能，吸引年輕玩家</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">地區偏好差異</h4>
      <p class="mb-4">此類遊戲在西方市場受歡迎，亞洲市場則更偏好百家樂等簡單牌戲。世界撲克大賽等賽事舉世聞名。</p>
    `,
    platforms: [
      { name: 'PokerStars', region: '全球', desc: '全球最大線上撲克室' },
      { name: 'World Poker Tour', region: '國際', desc: '頂級撲克賽事品牌' }
    ],
    sources: [
      { name: 'PokerStars Company Reports', url: 'https://www.pokerstars.com/poker/company-info/' },
      { name: 'Global Poker Market Research', url: 'https://www.grandviewresearch.com/industry-analysis/online-poker-market' },
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
      { label: 'Evolution市佔率', value: '45%', valueClass: 'text-red-400' },
      { label: '主要市場', value: '亞洲', valueClass: 'text-orange-400' },
      { label: '日活用戶', value: '數十萬', valueClass: 'text-yellow-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">技術創新</h4>
      <p class="mb-4">透過直播技術，由真人莊家主持的線上賭場遊戲，如真人輪盤、真人百家樂等。這類遊戲在亞洲線上市場特別盛行，因為玩家能透過直播感受真實賭桌氛圍，提升信任感。</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">市場領導</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>Evolution Gaming：</strong>主導此領域，據報導其2025年占全球真人娛樂場市場約45%份額</li>
        <li><strong>亞洲偏好：</strong>各大線上博弈平台普遍提供真人娛樂場頻道</li>
        <li><strong>技術要求：</strong>需要高品質直播技術和專業荷官</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">用戶體驗</h4>
      <p class="mb-4">真人娛樂場遊戲每日活躍玩家以數十萬計，特別在亞洲。高清直播和多角度攝影大幅提升了線上博弈的真實感。</p>
    `,
    platforms: [
      { name: 'Evolution Gaming', region: '瑞典', desc: '全球真人娛樂場龍頭，市佔45%' },
      { name: 'Playtech', region: '英國', desc: '真人遊戲和系統技術領先' }
    ],
    sources: [
      { name: 'Evolution Gaming Annual Report 2023', url: 'https://www.evolution.com/investors/reports-and-presentations' },
      { name: 'Live Casino Market Analysis', url: 'https://www.technavio.com/report/live-casino-market-industry-analysis' },
      { name: 'Asian Gaming Market Report', url: 'https://www.businesswire.com/news/home/20230915005426/en/' }
    ]
  },
  {
    id: 'sports',
    title: t('gaming.gameTypes.sports'),
    subtitle: t('gaming.gameTypeIntro.sportsSubtitle'),
    icon: '⚽',
    headerBg: 'bg-green-600',
    stats: [
      { label: '美國投注額', value: '$1198億', valueClass: 'text-green-400' },
      { label: '美國年收益', value: '$109億', valueClass: 'text-blue-400' },
      { label: '年增長率', value: '+44.5%', valueClass: 'text-purple-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">爆發性成長</h4>
      <p class="mb-4">對體育賽事或電子競技比賽結果進行投注。美國在2023年合法體育投注量達1198.4億美元，產生收益109.2億美元，年增長高達44.5%。</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">全球市場</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>歐美傳統：</strong>英國有深厚體育博彩文化（足球投注、賽馬等）</li>
        <li><strong>亞洲熱潮：</strong>泰國約63%成年人參與某種形式賭博，其中非法足球博彩金額估計每年達2,704億泰銖</li>
        <li><strong>電競新興：</strong>近年電子競技博彩興起，吸引年輕族群</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">技術發展</h4>
      <p class="mb-4">全世界約有數億人曾進行體育投注，即時投注、直播整合、AI賠率計算等技術創新讓體育博彩體驗更加豐富。</p>
    `,
    platforms: [
      { name: 'Bet365', region: '英國', desc: '全球最大的線上體育博彩公司之一' },
      { name: 'DraftKings', region: '美國', desc: '新興體育及電競投注平台' }
    ],
    sources: [
      { name: 'AGA Commercial Gaming Revenue Report 2023', url: 'https://www.americangaming.org/research/state-gaming-map/' },
      { name: 'Sports Betting Statistics Thailand', url: 'https://www.bangkokpost.com/business/2234567/illegal-football-betting' },
      { name: 'UK Gambling Commission Statistics', url: 'https://www.gamblingcommission.gov.uk/statistics-and-research' }
    ]
  },
  {
    id: 'lottery',
    title: t('gaming.gameTypes.lottery'),
    subtitle: t('gaming.gameTypeIntro.lotterySubtitle'),
    icon: '🎫',
    headerBg: 'bg-purple-600',
    stats: [
      { label: '全球參與者', value: '42億人', valueClass: 'text-purple-400' },
      { label: '中國銷售額', value: '¥6235億', valueClass: 'text-red-400' },
      { label: '美國州政府收入', value: '$244億', valueClass: 'text-green-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">最普及的博弈形式</h4>
      <p class="mb-4">由官方或民間機構發行的彩票、對獎券，以及類似賓果遊戲。這是全球參與人數最多的博弈形式之一，每年約有42億人至少玩一次彩票。</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">各國表現</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>中國：</strong>2024年彩票銷售額高達人民幣6235億元（約858億美元），創歷史新高</li>
        <li><strong>美國：</strong>45個州營運官方彩票，2021年各州從彩票中獲得收入達244億美元</li>
        <li><strong>泰國：</strong>有高達2,750萬人購買政府彩票</li>
        <li><strong>英國：</strong>每月約有45%的成年人參與某種形式的博弈（多為彩票投注）</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">特點優勢</h4>
      <p class="mb-4">購買門檻低、合法且接受度高是彩票受歡迎的主要原因。數位化趨勢讓線上彩票平台興起。</p>
    `,
    platforms: [
      { name: 'Powerball', region: '美國', desc: '聯合彩券系統，常創上億美元頭獎' },
      { name: 'China Sports Lottery', region: '中國', desc: '世界最大彩票發行系統之一' }
    ],
    sources: [
      { name: 'China Lottery Sales Report 2024', url: 'https://www.cwl.gov.cn/c/2024/12/03/532187.shtml' },
      { name: 'US State Lottery Revenue Data', url: 'https://www.naspl.org/content.aspx?id=20' },
      { name: 'Global Lottery Market Analysis', url: 'https://www.statista.com/outlook/amo/games/lottery/worldwide' }
    ]
  },
  {
    id: 'local',
    title: t('gaming.gameTypes.local'),
    subtitle: t('gaming.gameTypeIntro.localSubtitle'),
    icon: '🏮',
    headerBg: 'bg-orange-600',
    stats: [
      { label: '日本柏青哥投注', value: '¥14.6兆', valueClass: 'text-orange-400' },
      { label: '柏青哥玩家數', value: '780萬', valueClass: 'text-red-400' },
      { label: '台灣麻將玩家', value: '400萬+', valueClass: 'text-yellow-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">文化根基深厚</h4>
      <p class="mb-4">各地區特殊的傳統或流行博彩遊戲，往往具有深厚的文化背景和固定玩家群。這些遊戲反映了當地的歷史傳統和社會習俗。</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">主要類型</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>日本柏青哥：</strong>2022年遊戲投入總額約達14.6兆日圓，玩家約780萬人，一度超越澳門、拉斯維加斯收益總和</li>
        <li><strong>台灣麻將：</strong>推估約有4-5百萬人經常參與，被視為技藝和運氣兼備的博弈</li>
        <li><strong>菲律賓鬥雞：</strong>傳統鬥雞賭博（Sabong），觀眾與投注者達百萬級</li>
        <li><strong>中國推筒子：</strong>民間的撲克牌推筒子等，在當地具有文化根基</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">現代發展</h4>
      <p class="mb-4">傳統遊戲逐漸數位化，如線上麻將、模擬柏青哥等，結合現代技術同時保持文化特色。</p>
    `,
    platforms: [
      { name: 'Maruhan', region: '日本', desc: '日本最大柏青哥廳連鎖' },
      { name: 'Sega Sammy', region: '日本', desc: '日本柏青哥機台龍頭' }
    ],
    sources: [
      { name: 'Japan Pachinko Association Report 2022', url: 'https://www.p-world.co.jp/news/2023/1/25/news4535.htm' },
      { name: 'Taiwan Mahjong Culture Research', url: 'https://www.taipeitimes.com/News/taiwan/archives/2023/05/15/2003800234' },
      { name: 'Asia Pacific Gaming Market Analysis', url: 'https://www.grandviewresearch.com/industry-analysis/asia-pacific-gambling-market' }
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
          <div class="bg-gray-700 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-yellow-400 mb-1">${{ $t('gaming.revenueStats.slotsRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.slotsUS') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-blue-400 mb-1">${{ $t('gaming.revenueStats.pokerRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.pokerGlobal') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-red-400 mb-1">${{ $t('gaming.revenueStats.liveRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.liveGlobal') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2023') }}</div>
          </div>
        </div>
        
        <!-- 第2行：中等收入 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="bg-gray-700 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-green-400 mb-1">${{ $t('gaming.revenueStats.sportsRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.sportsUS') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.growth44') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-purple-400 mb-1">${{ $t('gaming.revenueStats.lotteryRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.lotteryChina') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2024') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-400 mb-1">${{ $t('gaming.revenueStats.pachinkoRevenue') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.pachinkoJP') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2022') }}</div>
          </div>
        </div>
        
        <!-- 第3行：市場數據 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div class="bg-gray-700 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-indigo-400 mb-1">${{ $t('gaming.revenueStats.globalMarket') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.totalMarketSize') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2023') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-pink-400 mb-1">{{ $t('gaming.revenueStats.onlinePenetration') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.onlineGambling') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.globalAverage') }}</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-cyan-400 mb-1">{{ $t('gaming.revenueStats.mobileShare') }}</div>
            <div class="text-white font-medium text-sm mb-1">{{ $t('gaming.revenueStats.mobileGambling') }}</div>
            <div class="text-gray-400 text-xs">{{ $t('gaming.revenueStats.year2023') }}</div>
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
                <th class="text-left p-4 text-gray-300 font-medium">地區</th>
                <th class="text-center p-4 text-gray-300 font-medium">🎰 老虎機</th>
                <th class="text-center p-4 text-gray-300 font-medium">🃏 撲克類</th>
                <th class="text-center p-4 text-gray-300 font-medium">🎲 真人娛樂場</th>
                <th class="text-center p-4 text-gray-300 font-medium">⚽ 體育博彩</th>
                <th class="text-center p-4 text-gray-300 font-medium">🎫 彩票</th>
                <th class="text-center p-4 text-gray-300 font-medium">🏮 地方特色</th>
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
              <div v-html="type.content" class="text-gray-300 text-sm leading-relaxed"></div>
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
      <div id="business-section" class="bg-gray-800 rounded-lg p-8 mt-8">
        <h3 class="text-xl font-semibold text-white mb-6">{{ $t('gaming.businessAdvice.title') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-700 rounded-lg p-6">
            <div class="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white mb-2">{{ $t('gaming.businessAdvice.originalDev.title') }}</h4>
            <p class="text-gray-400 text-sm mb-4">{{ $t('gaming.businessAdvice.originalDev.desc') }}</p>
            <ul class="text-xs text-gray-400 space-y-1 mb-4">
              <li>• {{ $t('gaming.businessAdvice.originalDev.feature1') }}</li>
              <li>• {{ $t('gaming.businessAdvice.originalDev.feature2') }}</li>
              <li>• {{ $t('gaming.businessAdvice.originalDev.feature3') }}</li>
              <li>• {{ $t('gaming.businessAdvice.originalDev.feature4') }}</li>
            </ul>
            <div class="pt-3 border-t border-gray-600">
              <div class="text-xs text-gray-400 mb-1">{{ $t('gaming.businessAdvice.originalDev.contact') }}:</div>
              <a href="mailto:sparkgametech@gmail.com" class="text-yellow-400 hover:text-yellow-300 text-sm">
                sparkgametech@gmail.com
              </a>
            </div>
          </div>

          <div class="bg-gray-700 rounded-lg p-6">
            <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white mb-2">{{ $t('gaming.businessAdvice.reverseDev.title') }}</h4>
            <p class="text-gray-400 text-sm mb-4">{{ $t('gaming.businessAdvice.reverseDev.desc') }}</p>
            <ul class="text-xs text-gray-400 space-y-1 mb-4">
              <li>• {{ $t('gaming.businessAdvice.reverseDev.feature1') }}</li>
              <li>• {{ $t('gaming.businessAdvice.reverseDev.feature2') }}</li>
              <li>• {{ $t('gaming.businessAdvice.reverseDev.feature3') }}</li>
              <li>• {{ $t('gaming.businessAdvice.reverseDev.feature4') }}</li>
            </ul>
            <div class="pt-3 border-t border-gray-600">
              <div class="text-xs text-gray-400 mb-1">{{ $t('gaming.businessAdvice.reverseDev.contact') }}:</div>
              <a href="https://merchant.jiligamesoft.com" target="_blank" class="text-green-400 hover:text-green-300 text-sm">
                merchant.jiligamesoft.com
              </a>
            </div>
          </div>

          <div class="bg-gray-700 rounded-lg p-6">
            <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white mb-2">{{ $t('gaming.businessAdvice.slotResources.title') }}</h4>
            <p class="text-gray-400 text-sm mb-4">{{ $t('gaming.businessAdvice.slotResources.desc') }}</p>
            <ul class="text-xs text-gray-400 space-y-1 mb-4">
              <li>• {{ $t('gaming.businessAdvice.slotResources.feature1') }}</li>
              <li>• {{ $t('gaming.businessAdvice.slotResources.feature2') }}</li>
              <li>• {{ $t('gaming.businessAdvice.slotResources.feature3') }}</li>
              <li>• {{ $t('gaming.businessAdvice.slotResources.feature4') }}</li>
            </ul>
            <div class="pt-3 border-t border-gray-600">
              <div class="text-xs text-gray-400 mb-1">{{ $t('gaming.businessAdvice.slotResources.contact') }}:</div>
              <a href="https://t.me/pangamesoft_channel/56" target="_blank" class="text-purple-400 hover:text-purple-300 text-sm">
                t.me/pangamesoft_channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
