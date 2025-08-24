<script setup>
// 使用 constants 中的配置
import { SPREADSHEET_URL } from '~/constants/config'

useHead({
  title: 'BTT 菠菜天眼通 - 天眼通',
  meta: [
    { name: 'description', content: 'BTT 菠菜天眼通首頁，提供完整的使用說明與功能導覽。' },
    { property: 'og:title', content: 'BTT 菠菜天眼通 - 天眼通' },
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

// 滾動到指定地區
const scrollToRegion = (regionCode) => {
  selectedRegion.value = regionCode
  
  // 地區代碼對應到章節ID的映射
  const regionToSectionMap = {
    'global': 'overview',
    'europe': 'europe-section',
    'usa': 'usa-section', 
    'japan': 'japan-section',
    'korea': 'southeast-asia-section', // 韓國歸類到東南亞
    'china': 'china-section',
    'taiwan': 'taiwan-section'
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
const marketData = [
  {
    name: '美國',
    marketSize: '$1,100億美元',
    growth: '+10.2%',
    growthClass: 'text-green-400',
    penetration: '25%',
    penetrationPercent: 25,
    penetrationColor: 'bg-blue-400',
    flagColor: 'bg-blue-500',
    features: '體育博彩合法化推動，傳統賭場+線上快速成長'
  },
  {
    name: '歐洲',
    marketSize: '$1,334億美元',
    growth: '+5%',
    growthClass: 'text-green-400',
    penetration: '39%',
    penetrationPercent: 39,
    penetrationColor: 'bg-purple-400',
    flagColor: 'bg-purple-500',
    features: '線上佔比最高，各國法規不一但趨向開放'
  },
  {
    name: '日本',
    marketSize: '$1,020億美元',
    growth: '-5%',
    growthClass: 'text-red-400',
    penetration: '~0%',
    penetrationPercent: 0,
    penetrationColor: 'bg-gray-400',
    flagColor: 'bg-red-500',
    features: '柏青哥主導，線上賭博禁止，大型賭場尚未營運'
  },
  {
    name: '東南亞',
    marketSize: '$90億美元',
    growth: '+30%',
    growthClass: 'text-green-400',
    penetration: '15%',
    penetrationPercent: 15,
    penetrationColor: 'bg-yellow-400',
    flagColor: 'bg-yellow-500',
    features: '菲律賓、新加坡領軍，疫情後強勁反彈'
  },
  {
    name: '澳洲',
    marketSize: '$210億美元',
    growth: '+25%',
    growthClass: 'text-green-400',
    penetration: '30%',
    penetrationPercent: 30,
    penetrationColor: 'bg-orange-400',
    flagColor: 'bg-orange-500',
    features: '全球人均最高消費，博彩機是主要收入來源'
  },
  {
    name: '中國大陸',
    marketSize: '$816億美元',
    growth: '+36.5%',
    growthClass: 'text-green-400',
    penetration: '0%',
    penetrationPercent: 0,
    penetrationColor: 'bg-gray-400',
    flagColor: 'bg-red-600',
    features: '僅官方彩票合法，龐大地下市場與境外消費'
  },
  {
    name: '台灣',
    marketSize: '$19.4億美元',
    growth: '+15%',
    growthClass: 'text-green-400',
    penetration: '0%',
    penetrationPercent: 0,
    penetrationColor: 'bg-gray-400',
    flagColor: 'bg-blue-600',
    features: '公益彩券與運彩為主，無合法賭場'
  }
]

// 詳細地區分析數據
const detailedRegions = [
  {
    id: 'usa',
    title: '美國',
    subtitle: '體育博彩合法化推動的成熟市場',
    icon: '🇺🇸',
    headerBg: 'bg-blue-600',
    stats: [
      { label: '商業博奕收入', value: '$666.5億', valueClass: 'text-blue-400' },
      { label: '含部族賭場總收入', value: '$1,100億', valueClass: 'text-green-400' },
      { label: '線上滲透率', value: '25%', valueClass: 'text-purple-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">市場規模與成長</h4>
      <p class="mb-4">2023年美國商業博奕總營收達666.5億美元，較2022年成長10.2%，連續第三年刷新紀錄。若加計部族賭場，全美總博彩收入接近1,100億美元。</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">主要業者與平台</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>實體賭場:</strong> 美高梅國際(MGM)、凱撒娛樂(Caesars)、永利渡假村(Wynn)等大型集團主導</li>
        <li><strong>線上體育博彩:</strong> FanDuel市佔約40%，DraftKings約30%，合計逾七成市場</li>
        <li><strong>線上賭場:</strong> BetMGM、DraftKings、FanDuel等在少數合法州經營iGaming</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">近三年營收趨勢</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>體育博彩爆發:</strong> 2023年達110億美元，較前一年增46%</li>
        <li><strong>角子機穩定:</strong> 2023年營收355億美元，占商業博彩過半</li>
        <li><strong>線上賭場成長:</strong> iGaming營收61.7億美元，年增23%</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">法規環境</h4>
      <p class="mb-4">2018年最高法院推翻PASPA後，30多州已合法化體育投注，約7州開放線上賭場。各州推出自我排除機制等負責任博彩措施。</p>
    `,
    sources: [
      'American Gaming Association - Commercial Gaming Revenue Tracker 2023',
      'americangaming.org - Annual Commercial Gaming Revenue Reports'
    ]
  },
  {
    id: 'europe',
    title: '歐洲',
    subtitle: '全球線上滲透率最高的成熟市場',
    icon: '🇪🇺',
    headerBg: 'bg-purple-600',
    stats: [
      { label: '2024年總收入', value: '€1,234億', valueClass: 'text-purple-400' },
      { label: '線上佔比', value: '39%', valueClass: 'text-green-400' },
      { label: '年增長率', value: '+5%', valueClass: 'text-blue-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">市場規模與成長</h4>
      <p class="mb-4">歐洲2024年博彩總收入達1,234億歐元，線上佔比39%為全球最高。英國(308億歐元)、義大利(255億)、法國(178億)、德國(177億)為主要市場。</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">主要玩家與平台</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>跨國集團:</strong> Flutter Entertainment、Entain、Bet365等主導多國市場</li>
        <li><strong>國營企業:</strong> 法國FDJ、北歐Veikkaus、Svenska Spel等壟斷本國彩票</li>
        <li><strong>區域業者:</strong> 義大利Lottomatica、德國地方彩票公司等</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">線上市場領先</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>北歐最高:</strong> 瑞典線上佔比68.3%，芬蘭、丹麥達68%</li>
        <li><strong>英國發達:</strong> 線上GGR達111億歐元，占全英36%</li>
        <li><strong>南歐較低:</strong> 西班牙僅14.2%，義大利21.7%，仍以實體為主</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-4">法規環境</h4>
      <p class="mb-4">27國採多執照制允許線上博奕，英國監管最完善。各國強調防制洗錢和負責任博彩，制定嚴格年齡限制和廣告規範。</p>
    `,
    sources: [
      'European Gaming & Betting Association (EGBA) - Market Report 2024',
      'H2 Gambling Capital - European Market Analysis',
      'Individual national gaming authorities reports'
    ]
  },
  {
    id: 'japan',
    title: '日本',
    subtitle: '柏青哥主導的特殊市場，線上博奕全禁',
    icon: '🇯🇵',
    headerBg: 'bg-red-600',
    stats: [
      { label: '柏青哥投注額', value: '¥15.7兆', valueClass: 'text-red-400' },
      { label: '市場趨勢', value: '緩步下滑', valueClass: 'text-orange-400' },
      { label: '線上滲透率', value: '0%', valueClass: 'text-gray-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">市場特色</h4>
      <p class="mb-4">日本博奕以柏青哥為核心，2023年投注額達15.7兆日圓（約1,100億美元），但僅為20年前高峰期的一半。</p>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>柏青哥衰退:</strong> 遊戲廳數量降至6,839家，較巔峰期減少近半</li>
        <li><strong>公營賭事:</strong> 競馬投注額3.5兆日圓，彩票約1兆日圓</li>
        <li><strong>法規嚴格:</strong> 線上賭博全面禁止，僅有限例外項目</li>
        <li><strong>未來發展:</strong> 大阪IR賭場預計2029年開幕</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">玩家特性</h4>
      <p class="mb-4">約770萬柏青哥玩家以中年男性為主力，競馬和彩票也有固定族群。由於無合法賭場，高端玩家多前往澳門、韓國等地。</p>
    `,
    sources: [
      'Asia Gaming Brief - Pachinko market analysis 2023',
      'Yano Research Institute - Japan Gaming Market Reports',
      'Japan Racing Association (JRA) - Annual Reports'
    ]
  },
  {
    id: 'southeast-asia',
    title: '東南亞',
    subtitle: '快速成長的新興市場，菲律賓與新加坡領軍',
    icon: '🌏',
    headerBg: 'bg-yellow-600',
    stats: [
      { label: '菲律賓GGR', value: '₱3,723億', valueClass: 'text-yellow-400' },
      { label: '新加坡賭場收入', value: 'S$52.5億', valueClass: 'text-green-400' },
      { label: '年增長率', value: '+30%', valueClass: 'text-green-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">菲律賓市場</h4>
      <p class="mb-4">2024年菲律賓博奕收入創歷史新高，達3,723億披索（約68億美元），年增30.5%。電子遊戲場快速擴張，幾乎追平傳統賭場。</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">新加坡市場</h4>
      <p class="mb-4">兩大綜合度假村2023年營收52.5億新幣，人均年賭博支出逾2,100歐元，全球領先。</p>
      
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>政策分化:</strong> 新菲積極發展，泰國嚴禁但有鬆動跡象</li>
        <li><strong>主要業者:</strong> 濱海灣金沙、雲頂集團、NagaCorp等</li>
        <li><strong>法規變化:</strong> 菲律賓2024年關停POGO業務，專注本地市場</li>
      </ul>
    `,
    sources: [
      'PAGCOR - Philippines Gaming Revenue Reports 2024',
      'Singapore Pools - Annual Gaming Statistics',
      'Casinova - Singapore gambling revenue analysis'
    ]
  },
  {
    id: 'australia',
    title: '澳洲',
    subtitle: '全球人均最高博彩消費，博彩機主導市場',
    icon: '🇦🇺',
    headerBg: 'bg-orange-600',
    stats: [
      { label: '年度總損失', value: 'A$320億', valueClass: 'text-orange-400' },
      { label: '人均損失', value: 'A$1,555', valueClass: 'text-red-400' },
      { label: '博彩機佔比', value: '49%', valueClass: 'text-yellow-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">市場特色</h4>
      <p class="mb-4">澳洲2022-23財年賭博總損失320億澳元，人均1,555澳元為全球最高。博彩機(Pokies)是最大收入來源。</p>
      
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>博彩機主導:</strong> 約20萬台撲克機貢獻158億澳元，占總損失49%</li>
        <li><strong>體育投注:</strong> 線上體育賭博合法且發達，但禁止線上賭場</li>
        <li><strong>主要業者:</strong> 皇冠度假、星際娛樂、Sportsbet等</li>
        <li><strong>監管趨嚴:</strong> 加強反洗錢，考慮更嚴格的廣告限制</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">玩家行為</h4>
      <p class="mb-4">72.8%的成年人參與博彩，彩票最普及，博彩機深植社區文化，體育投注在年輕男性中受歡迎。</p>
    `,
    sources: [
      'The Guardian - Australia gambling losses report 2023',
      'Queensland Government Statistician - Gambling Statistics',
      'Australian Communications and Media Authority - Gaming Reports'
    ]
  },
  {
    id: 'china',
    title: '中國大陸',
    subtitle: '嚴格管制下的彩票市場，龐大地下賭博流向境外',
    icon: '🇨🇳',
    headerBg: 'bg-red-700',
    stats: [
      { label: '彩票銷售額', value: '¥5,797億', valueClass: 'text-red-400' },
      { label: '年增長率', value: '+36.5%', valueClass: 'text-green-400' },
      { label: '線上滲透率', value: '0%', valueClass: 'text-gray-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">官方市場</h4>
      <p class="mb-4">2023年中國彩票銷售額達5,797億人民幣，創歷史新高，體彩和福彩平分秋色。</p>
      
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>政策嚴格:</strong> 除國家彩票外，其他賭博形式一律禁止</li>
        <li><strong>雙頭運營:</strong> 體育彩票和福利彩票由官方機構壟斷</li>
        <li><strong>線上限制:</strong> 2015年起基本停止網售彩票</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">地下市場</h4>
      <p class="mb-4">龐大的地下賭博需求流向境外，澳門、菲律賓等地過去高度依賴中國客源。政府持續打擊跨境賭博。</p>
    `,
    sources: [
      'Xinhua - China lottery sales statistics 2023',
      'China Ministry of Finance - Lottery Administration Reports',
      'ASGAM - Mainland China lottery market analysis'
    ]
  },
  {
    id: 'taiwan',
    title: '台灣',
    subtitle: '有限開放的彩券市場，運彩快速成長',
    icon: '🇹🇼',
    headerBg: 'bg-blue-700',
    stats: [
      { label: '運彩銷售額', value: 'NT$643億', valueClass: 'text-blue-400' },
      { label: '公益彩券', value: 'NT$1,450億', valueClass: 'text-green-400' },
      { label: '年增長率', value: '+15%', valueClass: 'text-green-400' }
    ],
    content: `
      <h4 class="text-lg font-semibold text-white mb-3">合法市場</h4>
      <p class="mb-4">台灣博奕以公益彩券和運動彩券為主，2024年運彩銷售643億台幣創新高。</p>
      
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>政府專營:</strong> 台灣彩券公司(富邦金控)獨家發行公益彩券</li>
        <li><strong>運彩成長:</strong> 台灣運彩公司(台新金控)經營，開辦以來最高紀錄</li>
        <li><strong>通路普及:</strong> 便利商店為主要銷售點</li>
      </ul>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">法規環境</h4>
      <p class="mb-4">賭場仍未開放，雖有離島博弈條例但多次公投未過。線上賭博屬違法，但仍有地下市場存在。</p>
    `,
    sources: [
      'Public Gaming Research Institute - Taiwan Sports Lottery Report 2024',
      'Taiwan Lottery Company - Annual Sales Statistics',
      'Taiwan Sports Lottery Corporation - Gaming Revenue Reports'
    ]
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">全球趨勢</h1>
        <p class="text-blue-100">即時掌握全球市場動態與趨勢分析</p>
      </div>
    </div>

    <!-- 地區選單 -->
    <div class="bg-gray-800 border-b border-gray-700">
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
          <h3 class="text-2xl font-semibold text-white mb-4">全球博奕市場概況</h3>
          <p class="text-gray-300 max-w-4xl mx-auto">
            2023年全球博奕市場總毛收入約達5,360億美元，相比2022年成長約13.1%。
            線上博奕約佔24.6%，金額約1,320億美元，顯示數位化進程明顯加快。
          </p>
        </div>

        <!-- 全球統計卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-gray-700 rounded-lg p-6 text-center">
            <div class="text-3xl font-bold text-green-400 mb-2">$5,360億</div>
            <div class="text-white font-medium mb-1">2023年全球總收入</div>
            <div class="text-gray-400 text-sm">↗ +13.1% YoY</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-6 text-center">
            <div class="text-3xl font-bold text-blue-400 mb-2">24.6%</div>
            <div class="text-white font-medium mb-1">線上博奕佔比</div>
            <div class="text-gray-400 text-sm">$1,320億美元</div>
          </div>
          <div class="bg-gray-700 rounded-lg p-6 text-center">
            <div class="text-3xl font-bold text-purple-400 mb-2">$5,730億</div>
            <div class="text-white font-medium mb-1">2024年預期收入</div>
            <div class="text-gray-400 text-sm">↗ +7% 成長率</div>
          </div>
        </div>

        <!-- 全球數據來源 -->
        <div class="mt-6 pt-4 border-t border-gray-600">
          <h5 class="text-sm font-semibold text-gray-400 mb-2">全球市場數據來源：</h5>
          <ul class="text-xs text-gray-500 space-y-1">
            <li>• H2 Gambling Capital - Global Gambling Industry Report 2023</li>
            <li>• American Gaming Association (AGA) - Commercial Gaming Revenue Reports</li>
            <li>• European Gaming & Betting Association (EGBA) - Market Analysis 2024</li>
          </ul>
        </div>
      </div>

      <!-- 各地區市場對比表格 -->
      <div class="bg-gray-800 rounded-lg p-8 mb-8">
        <h3 class="text-xl font-semibold text-white mb-6">各地區市場規模對比 (2023年)</h3>
        
        <!-- 桌面版表格 -->
        <div class="hidden lg:block overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-600">
                <th class="text-left p-4 text-gray-300 font-medium">地區</th>
                <th class="text-left p-4 text-gray-300 font-medium">市場規模</th>
                <th class="text-left p-4 text-gray-300 font-medium">年增長率</th>
                <th class="text-left p-4 text-gray-300 font-medium">線上滲透率</th>
                <th class="text-left p-4 text-gray-300 font-medium">主要特色</th>
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
                <span class="text-gray-400">市場規模:</span>
                <span class="text-gray-300">{{ region.marketSize }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">年增長率:</span>
                <span :class="region.growthClass">{{ region.growth }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">線上滲透率:</span>
                <span class="text-gray-300">{{ region.penetration }}</span>
              </div>
              <div>
                <span class="text-gray-400">特色:</span>
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
              <div v-html="region.content" class="text-gray-300 text-sm leading-relaxed"></div>
            </div>

            <!-- 數據來源 -->
            <div v-if="region.sources" class="mt-6 pt-4 border-t border-gray-600">
              <h5 class="text-sm font-semibold text-gray-400 mb-2">數據來源：</h5>
              <ul class="text-xs text-gray-500 space-y-1">
                <li v-for="source in region.sources" :key="source">• {{ source }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 快速連結 -->
      <div class="bg-gray-800 rounded-lg p-6 mt-8">
        <h3 class="text-xl font-semibold text-white mb-4">更多資訊</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            :href="SPREADSHEET_URL"
            target="_blank"
            class="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <div>
              <div class="text-white font-medium">菠菜天眼通試算表</div>
              <div class="text-gray-400 text-sm">查看完整數據與評論</div>
            </div>
          </a>
          
          <a
            href="mailto:allah2truth@gmail.com"
            class="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <div>
              <div class="text-white font-medium">聯繫BTT站長</div>
              <div class="text-gray-400 text-sm">市場分析與商務合作</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
