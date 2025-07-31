<template>
  <div
    flex="~ row"
    justify-evenly items-center
    py3 px3
    border="t base"
    bg-gray-700
  >
    <NuxtLink v-slot="{ isActive }" to="/" :title="$t('Home')">
      <div
        text-sm font-bold
        :class="isActive ? 'text-green-400' : 'text-white'"
        hover:text-green-400
      >
        (T)天眼
      </div>
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/movie" :title="$t('Movies')">
      <div
        text-sm font-bold
        :class="isActive ? 'text-green-400' : 'text-white'"
        hover:text-green-400
      >
        (B)商務
      </div>
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/tv" :title="$t('TV Shows')">
      <div
        text-sm font-bold
        :class="isActive ? 'text-green-400' : 'text-white'"
        hover:text-green-400
      >
        (H)獵才
      </div>
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/search" :title="$t('Search')">
      <div
        text-sm font-bold
        :class="isActive ? 'text-green-400' : 'text-white'"
        hover:text-green-400
      >
        (C)聯繫
      </div>
    </NuxtLink>
  </div>
</template>
