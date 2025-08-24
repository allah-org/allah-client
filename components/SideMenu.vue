<script setup>
const isOpen = ref(false)
const { $bus } = useNuxtApp()

// 監聽選單開關事件
onMounted(() => {
  $bus.on('toggle-side-menu', () => {
    isOpen.value = !isOpen.value
  })
})

const { t, locale, setLocale } = useI18n()

const menuItems = computed(() => [
  { name: t('menu.globalTrends'), path: '/', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: t('menu.gamingTrends'), path: '/gaming', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
  { name: t('menu.techSpecs'), path: '/tech', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { name: t('menu.regulations'), path: '/regulations', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { name: t('menu.paymentChannels'), path: '/payment', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
  { name: t('menu.futureTrends'), path: '/future', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { name: t('menu.copyright'), path: '/copyright', icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: t('menu.privacy'), path: '/privacy', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
])

const languages = [
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
]

const switchLanguage = async (langCode) => {
  await setLocale(langCode)
  closeMenu()
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <!-- 背景遮罩 -->
  <div 
    v-show="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
    @click="closeMenu"
  ></div>

  <!-- 側邊選單 -->
  <div 
    class="fixed top-0 left-0 h-full w-80 bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 flex flex-col"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- 選單標題 -->
    <div class="flex items-center justify-between p-6 border-b border-gray-700 flex-shrink-0">
      <h2 class="text-xl font-bold text-white">{{ $t('menu.title') }}</h2>
      <button 
        @click="closeMenu"
        class="p-2 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- 多語言選擇區域 -->
    <div class="p-4 border-b border-gray-700 flex-shrink-0">
      <select 
        :value="locale"
        @change="switchLanguage($event.target.value)"
        class="w-full px-4 py-3 bg-gray-700/50 border-0 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-gray-700 transition-all duration-200 shadow-lg backdrop-blur-sm hover:bg-gray-700/70"
      >
        <option 
          v-for="lang in languages" 
          :key="lang.code"
          :value="lang.code"
          class="bg-gray-800 text-white py-2"
        >
          {{ lang.flag }} {{ lang.name }}
        </option>
      </select>
    </div>

    <!-- 選單項目 - 可滾動區域 -->
    <nav class="flex-1 overflow-y-auto p-4">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <NuxtLink 
            :to="item.path"
            @click="closeMenu"
            class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"></path>
            </svg>
            <span>{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
