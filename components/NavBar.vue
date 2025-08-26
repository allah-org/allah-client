<script setup>
const { $bus } = useNuxtApp()
const { t } = useI18n()

const toggleSideMenu = () => {
  $bus.emit('toggle-side-menu')
}
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 py-3 z-50">
    <div class="flex justify-between items-center max-w-md mx-auto">
      <!-- 左邊：選單 -->
      <button 
        type="button"
        @click="toggleSideMenu"
        class="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <span class="text-xs text-gray-300">{{ t('navbar.menu') }}</span>
      </button>

      <!-- 中間：主頁 -->
      <NuxtLink 
        to="/" 
        class="flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-2xl hover:shadow-3xl border-2 border-blue-300 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 relative z-10"
      >
        <img 
          src="/eyes.png" 
          alt="EYES Logo"
          class="w-10 h-10 object-contain"
        />
      </NuxtLink>

      <!-- 右邊：聯繫我們 -->
      <NuxtLink 
        to="/contact" 
        class="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span class="text-xs text-gray-300">{{ t('navbar.contact') }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
