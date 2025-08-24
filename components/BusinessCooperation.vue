<template>
  <div id="business-section" class="bg-gray-800 rounded-lg p-8 mt-8">
    <h3 class="text-xl font-semibold text-white mb-6">{{ $t('quickLinks.title') }}</h3>
    <ClientOnly>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="card in businessCards" 
          :key="card.title"
          class="bg-gray-700 rounded-lg p-6"
        >
          <!-- 圖標 -->
          <div :class="`w-12 h-12 ${card.iconBg} rounded-full flex items-center justify-center mb-4`">
            <svg v-if="card.icon === 'yellow'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <svg v-else-if="card.icon === 'green'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <svg v-else-if="card.icon === 'purple'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            <svg v-else-if="card.icon === 'blue'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>

          <!-- 標題和描述 -->
          <h4 class="text-lg font-semibold text-white mb-2">{{ card.title }}</h4>
          <p class="text-gray-400 text-sm mb-4">{{ card.description }}</p>

          <!-- 功能列表 (僅商務建議卡片) -->
          <ul v-if="card.type === 'business-advice' && card.features" class="text-xs text-gray-400 space-y-1 mb-4">
            <li v-for="feature in card.features" :key="feature">• {{ feature }}</li>
          </ul>

          <!-- 聯繫資訊或連結 -->
          <div v-if="card.type === 'business-advice'" class="pt-3 border-t border-gray-600">
            <div class="text-xs text-gray-400 mb-1">{{ card.contact.label }}:</div>
            <a 
              :href="card.contact.url" 
              :target="card.contact.type === 'email' ? '_self' : '_blank'"
              :class="`${card.iconColor} hover:opacity-80 text-sm`"
            >
              {{ card.contact.value }}
            </a>
          </div>

          <!-- 連結卡片 -->
          <div v-else-if="card.type === 'link'" class="pt-3 border-t border-gray-600">
            <a 
              :href="card.url" 
              :target="card.external ? '_blank' : '_self'"
              class="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm"
            >
              <span>{{ $t('quickLinks.viewMore') }}</span>
              <svg v-if="card.external" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
const { t } = useI18n()
const { businessCards } = useBusinessCooperation()
</script>
