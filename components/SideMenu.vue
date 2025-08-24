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
  { name: t('menu.globalTrends'), path: '/trends/global', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: t('menu.gamingTrends'), path: '/trends/gaming', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
  { name: t('menu.techTrends'), path: '/trends/tech', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { name: t('menu.aiTrends'), path: '/trends/ai', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { name: t('menu.privacy'), path: '/privacy', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
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
    class="fixed top-0 left-0 h-full w-80 bg-gray-800 transform transition-transform duration-300 ease-in-out z-50"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- 選單標題 -->
    <div class="flex items-center justify-between p-6 border-b border-gray-700">
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

    <!-- 選單項目 -->
    <nav class="p-4">
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

    <!-- 語言選擇 -->
    <div class="border-t border-gray-700 p-4">
      <h3 class="text-gray-400 text-xs font-semibold mb-3 uppercase tracking-wider">{{ $t('menu.language') }}</h3>
      <div class="space-y-2">
        <button 
          v-for="lang in languages" 
          :key="lang.code"
          @click="switchLanguage(lang.code)"
          class="flex items-center space-x-3 w-full p-2 rounded-lg transition-colors"
          :class="locale === lang.code 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
        >
          <span class="text-lg">{{ lang.flag }}</span>
          <span class="text-sm">{{ lang.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
