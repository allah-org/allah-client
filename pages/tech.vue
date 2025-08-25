<script setup>
// 國際化
const { t, locale } = useI18n()

useHead({
  title: 'BTT 菠菜天眼通 - 技術規格',
  meta: [
    { name: 'description', content: '博弈產業技術架構與職能需求分析' },
    { property: 'og:title', content: 'BTT 菠菜天眼通 - 技術規格' },
  ]
})

// 技術職能選單數據
const techRoles = computed(() => [
  { code: 'overview', name: t('tech.sections.overview'), icon: '🏗️' },
  { code: 'director', name: t('tech.roles.director.title'), icon: '👨‍💼' },
  { code: 'product', name: t('tech.roles.product.title'), icon: '🎮' },
  { code: 'frontend', name: t('tech.roles.frontend.title'), icon: '💻' },
  { code: 'backend', name: t('tech.roles.backend.title'), icon: '⚙️' },
  { code: 'mathematics', name: t('tech.roles.mathematics.title'), icon: '📊' },
  { code: 'art', name: t('tech.roles.art.title'), icon: '🎨' },
  { code: 'audio', name: t('tech.roles.audio.title'), icon: '🎵' },
  { code: 'bottlenecks', name: t('tech.sections.bottlenecks'), icon: '⚠️' },
  { code: 'development', name: t('tech.sections.development'), icon: '🔄' },
  { code: 'business', name: t('tech.sections.business'), icon: '💼' }
])

const selectedRole = ref('overview')
const expandedRoles = ref(['overview', 'director', 'product', 'frontend', 'backend', 'mathematics', 'art', 'audio']) // 默認展開所有職位

// 展開/折疊技術職能
const toggleRole = (roleId) => {
  const index = expandedRoles.value.indexOf(roleId)
  if (index > -1) {
    expandedRoles.value.splice(index, 1)
  } else {
    expandedRoles.value.push(roleId)
  }
}

// 滾動到指定職能區段
const scrollToRole = (roleCode) => {
  selectedRole.value = roleCode
  
  const roleToSectionMap = {
    'overview': 'overview-section',
    'director': 'director-section',
    'product': 'product-section',
    'frontend': 'frontend-section',
    'backend': 'backend-section',
    'mathematics': 'mathematics-section',
    'art': 'art-section',
    'audio': 'audio-section',
    'bottlenecks': 'bottlenecks-section',
    'development': 'development-section',
    'business': 'business-section'
  }
  
  const sectionId = roleToSectionMap[roleCode]
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

// 技術職能詳細數據
const roleDetails = computed(() => [
  {
    id: 'director',
    title: t('tech.roles.director.title'),
    subtitle: t('tech.roles.director.subtitle'),
    icon: t('tech.roles.director.icon'),
    headerBg: t('tech.roles.director.headerBg'),
    stats: [
      { label: t('tech.roles.director.stats.0.label'), value: t('tech.roles.director.stats.0.value'), valueClass: t('tech.roles.director.stats.0.valueClass') },
      { label: t('tech.roles.director.stats.1.label'), value: t('tech.roles.director.stats.1.value'), valueClass: t('tech.roles.director.stats.1.valueClass') },
      { label: t('tech.roles.director.stats.2.label'), value: t('tech.roles.director.stats.2.value'), valueClass: t('tech.roles.director.stats.2.valueClass') }
    ],
    skills: t('tech.roles.director.skills'),
    tools: t('tech.roles.director.tools'),
    challenges: t('tech.roles.director.challenges'),
    description: t('tech.roles.director.description')
  },
  {
    id: 'product',
    title: t('tech.roles.product.title'),
    subtitle: t('tech.roles.product.subtitle'),
    icon: t('tech.roles.product.icon'),
    headerBg: t('tech.roles.product.headerBg'),
    stats: [
      { label: t('tech.roles.product.stats.0.label'), value: t('tech.roles.product.stats.0.value'), valueClass: t('tech.roles.product.stats.0.valueClass') },
      { label: t('tech.roles.product.stats.1.label'), value: t('tech.roles.product.stats.1.value'), valueClass: t('tech.roles.product.stats.1.valueClass') },
      { label: t('tech.roles.product.stats.2.label'), value: t('tech.roles.product.stats.2.value'), valueClass: t('tech.roles.product.stats.2.valueClass') }
    ],
    skills: t('tech.roles.product.skills'),
    tools: t('tech.roles.product.tools'),
    challenges: t('tech.roles.product.challenges'),
    description: t('tech.roles.product.description')
  },
  {
    id: 'frontend',
    title: t('tech.roles.frontend.title'),
    subtitle: t('tech.roles.frontend.subtitle'),
    icon: t('tech.roles.frontend.icon'),
    headerBg: t('tech.roles.frontend.headerBg'),
    stats: [
      { label: t('tech.roles.frontend.stats.0.label'), value: t('tech.roles.frontend.stats.0.value'), valueClass: t('tech.roles.frontend.stats.0.valueClass') },
      { label: t('tech.roles.frontend.stats.1.label'), value: t('tech.roles.frontend.stats.1.value'), valueClass: t('tech.roles.frontend.stats.1.valueClass') },
      { label: t('tech.roles.frontend.stats.2.label'), value: t('tech.roles.frontend.stats.2.value'), valueClass: t('tech.roles.frontend.stats.2.valueClass') }
    ],
    skills: t('tech.roles.frontend.skills'),
    tools: t('tech.roles.frontend.tools'),
    challenges: t('tech.roles.frontend.challenges'),
    description: t('tech.roles.frontend.description')
  },
  {
    id: 'backend',
    title: t('tech.roles.backend.title'),
    subtitle: t('tech.roles.backend.subtitle'),
    icon: t('tech.roles.backend.icon'),
    headerBg: t('tech.roles.backend.headerBg'),
    stats: [
      { label: t('tech.roles.backend.stats.0.label'), value: t('tech.roles.backend.stats.0.value'), valueClass: t('tech.roles.backend.stats.0.valueClass') },
      { label: t('tech.roles.backend.stats.1.label'), value: t('tech.roles.backend.stats.1.value'), valueClass: t('tech.roles.backend.stats.1.valueClass') },
      { label: t('tech.roles.backend.stats.2.label'), value: t('tech.roles.backend.stats.2.value'), valueClass: t('tech.roles.backend.stats.2.valueClass') }
    ],
    skills: t('tech.roles.backend.skills'),
    tools: t('tech.roles.backend.tools'),
    challenges: t('tech.roles.backend.challenges'),
    description: t('tech.roles.backend.description')
  },
  {
    id: 'mathematics',
    title: t('tech.roles.mathematics.title'),
    subtitle: t('tech.roles.mathematics.subtitle'),
    icon: t('tech.roles.mathematics.icon'),
    headerBg: t('tech.roles.mathematics.headerBg'),
    stats: [
      { label: t('tech.roles.mathematics.stats.0.label'), value: t('tech.roles.mathematics.stats.0.value'), valueClass: t('tech.roles.mathematics.stats.0.valueClass') },
      { label: t('tech.roles.mathematics.stats.1.label'), value: t('tech.roles.mathematics.stats.1.value'), valueClass: t('tech.roles.mathematics.stats.1.valueClass') },
      { label: t('tech.roles.mathematics.stats.2.label'), value: t('tech.roles.mathematics.stats.2.value'), valueClass: t('tech.roles.mathematics.stats.2.valueClass') }
    ],
    skills: t('tech.roles.mathematics.skills'),
    tools: t('tech.roles.mathematics.tools'),
    challenges: t('tech.roles.mathematics.challenges'),
    description: t('tech.roles.mathematics.description')
  },
  {
    id: 'art',
    title: t('tech.roles.art.title'),
    subtitle: t('tech.roles.art.subtitle'),
    icon: t('tech.roles.art.icon'),
    headerBg: t('tech.roles.art.headerBg'),
    stats: [
      { label: t('tech.roles.art.stats.0.label'), value: t('tech.roles.art.stats.0.value'), valueClass: t('tech.roles.art.stats.0.valueClass') },
      { label: t('tech.roles.art.stats.1.label'), value: t('tech.roles.art.stats.1.value'), valueClass: t('tech.roles.art.stats.1.valueClass') },
      { label: t('tech.roles.art.stats.2.label'), value: t('tech.roles.art.stats.2.value'), valueClass: t('tech.roles.art.stats.2.valueClass') }
    ],
    skills: t('tech.roles.art.skills'),
    tools: t('tech.roles.art.tools'),
    challenges: t('tech.roles.art.challenges'),
    description: t('tech.roles.art.description')
  },
  {
    id: 'audio',
    title: t('tech.roles.audio.title'),
    subtitle: t('tech.roles.audio.subtitle'),
    icon: t('tech.roles.audio.icon'),
    headerBg: t('tech.roles.audio.headerBg'),
    stats: [
      { label: t('tech.roles.audio.stats.0.label'), value: t('tech.roles.audio.stats.0.value'), valueClass: t('tech.roles.audio.stats.0.valueClass') },
      { label: t('tech.roles.audio.stats.1.label'), value: t('tech.roles.audio.stats.1.value'), valueClass: t('tech.roles.audio.stats.1.valueClass') },
      { label: t('tech.roles.audio.stats.2.label'), value: t('tech.roles.audio.stats.2.value'), valueClass: t('tech.roles.audio.stats.2.valueClass') }
    ],
    skills: t('tech.roles.audio.skills'),
    tools: t('tech.roles.audio.tools'),
    challenges: t('tech.roles.audio.challenges'),
    description: t('tech.roles.audio.description')
  }
])

// 技術瓶頸數據
const bottlenecksData = computed(() => [
  {
    title: t('tech.bottlenecks.items.0.title'),
    description: t('tech.bottlenecks.items.0.description')
  },
  {
    title: t('tech.bottlenecks.items.1.title'),
    description: t('tech.bottlenecks.items.1.description')
  },
  {
    title: t('tech.bottlenecks.items.2.title'),
    description: t('tech.bottlenecks.items.2.description')
  },
  {
    title: t('tech.bottlenecks.items.3.title'),
    description: t('tech.bottlenecks.items.3.description')
  }
])

// 開發流程數據
const developmentStages = computed(() => [
  {
    title: t('tech.development.stages.0.title'),
    description: t('tech.development.stages.0.description')
  },
  {
    title: t('tech.development.stages.1.title'),
    description: t('tech.development.stages.1.description')
  },
  {
    title: t('tech.development.stages.2.title'),
    description: t('tech.development.stages.2.description')
  },
  {
    title: t('tech.development.stages.3.title'),
    description: t('tech.development.stages.3.description')
  },
  {
    title: t('tech.development.stages.4.title'),
    description: t('tech.development.stages.4.description')
  },
  {
    title: t('tech.development.stages.5.title'),
    description: t('tech.development.stages.5.description')
  }
])
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">{{ t('tech.title') }}</h1>
        <p class="text-purple-100">{{ t('tech.subtitle') }}</p>
      </div>
    </div>

    <!-- 技術職能選單 -->
    <div class="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex space-x-1 overflow-x-auto py-2">
          <button 
            v-for="role in techRoles" 
            :key="role.code"
            @click="scrollToRole(role.code)"
            class="flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="selectedRole === role.code 
              ? 'text-white bg-purple-600' 
              : 'text-gray-300 hover:text-white hover:bg-gray-700'"
          >
            <span class="mr-2">{{ role.icon }}</span>
            {{ role.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- 主要內容 -->
    <div class="max-w-6xl mx-auto p-6">
      <!-- 概觀區段 -->
      <div id="overview-section" class="bg-gray-800 rounded-lg p-8 mb-8">
        <div class="text-center mb-8">
          <div class="w-20 h-20 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ t('tech.overview.title') }}</h2>
          <p class="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">{{ t('tech.overview.description') }}</p>
        </div>

        <!-- 技術架構說明 -->
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-white mb-4">{{ t('tech.overview.architecture') }}</h3>
            <p class="text-gray-300 leading-relaxed">現代博弈平台通常採用客戶端－伺服器架構，包括前端UI、遊戲引擎、API整合、支付網關、安全層與資料庫等核心模組。</p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-white mb-4">{{ t('tech.overview.components') }}</h3>
            <p class="text-gray-300 leading-relaxed">平台架構設計注重可擴展性、安全性和效能，確保在高併發環境下穩定運行，同時滿足各地區的法規要求。</p>
          </div>
        </div>
      </div>

      <!-- 技術職能詳細內容 -->
      <div v-for="role in roleDetails" :key="role.id" :id="`${role.id}-section`" class="bg-gray-800 rounded-lg p-8 mb-8">
        <!-- 職能標題與統計 -->
        <div :class="`${role.headerBg} rounded-lg p-6 mb-6`">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-4">
              <span class="text-4xl">{{ role.icon }}</span>
              <div>
                <h2 class="text-2xl font-bold text-white">{{ role.title }}</h2>
                <p class="text-white/80">{{ role.subtitle }}</p>
              </div>
            </div>
            <button 
              @click="toggleRole(role.id)"
              class="text-white hover:text-white/80 transition-colors"
            >
              <svg v-if="expandedRoles.includes(role.id)" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>

          <!-- 技能統計 -->
          <div class="flex flex-wrap gap-3">
            <div v-for="stat in role.stats" :key="stat.label" class="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full">
              <span :class="`text-sm font-medium ${stat.valueClass}`">{{ stat.value }}</span>
              <span class="text-white/60 text-xs">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- 展開的詳細內容 -->
        <div v-if="expandedRoles.includes(role.id)" class="space-y-6">
          <!-- 主要技能 -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-3">主要技能</h4>
            <p class="text-gray-300 leading-relaxed">{{ role.skills }}</p>
          </div>

          <!-- 常用工具 -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-3">常用工具</h4>
            <p class="text-gray-300 leading-relaxed">{{ role.tools }}</p>
          </div>

          <!-- 面臨挑戰 -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-3">面臨挑戰</h4>
            <p class="text-gray-300 leading-relaxed">{{ role.challenges }}</p>
          </div>

          <!-- 職能說明 -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-3">職能說明</h4>
            <p class="text-gray-300 leading-relaxed">{{ role.description }}</p>
          </div>
        </div>
      </div>

      <!-- 技術瓶頸分析 -->
      <div id="bottlenecks-section" class="bg-gray-800 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-white mb-6">{{ t('tech.bottlenecks.title') }}</h2>
        <p class="text-gray-300 mb-8 text-lg">{{ t('tech.bottlenecks.description') }}</p>
        
        <div class="space-y-4">
          <div v-for="bottleneck in bottlenecksData" :key="bottleneck.title" class="border-l-4 border-red-400 pl-4 py-2">
            <h3 class="text-lg font-semibold text-white mb-2">{{ bottleneck.title }}</h3>
            <p class="text-gray-300">{{ bottleneck.description }}</p>
          </div>
        </div>
      </div>

      <!-- 開發流程 -->
      <div id="development-section" class="bg-gray-800 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-white mb-6">{{ t('tech.development.title') }}</h2>
        <p class="text-gray-300 mb-8 text-lg">{{ t('tech.development.description') }}</p>
        
        <div class="relative">
          <!-- 流程線 -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>
          
          <div class="space-y-6">
            <div v-for="(stage, index) in developmentStages" :key="stage.title" class="relative flex items-start">
              <!-- 流程點 -->
              <div class="absolute left-6 w-3 h-3 bg-purple-500 rounded-full border-2 border-gray-800 z-10"></div>
              
              <div class="ml-12 flex-1">
                <div class="flex items-center mb-2">
                  <span class="text-lg font-bold text-purple-400 mr-3">{{ index + 1 }}</span>
                  <h3 class="text-lg font-semibold text-white">{{ stage.title }}</h3>
                </div>
                <p class="text-gray-300">{{ stage.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 商務合作 -->
      <div id="business-section">
        <BusinessCooperation />
      </div>
    </div>
  </div>
</template>
