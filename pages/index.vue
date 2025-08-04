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
</script>

<template>
  <div class="min-h-screen bg-black text-[#ffffffff] font-mono">
    <!-- 標題列 -->
    <div class="p-4">
      <div class="flex justify-between items-center">
        <span class="text-white text-xl font-bold">【天眼通】</span>
        <span class="text-white text-lg">BTT - Home</span>
      </div>
    </div>

    <!-- 表格標題 -->
    <div class="p-4">
      <div class="grid grid-cols-12 gap-4 text-xl">
        <div class="col-span-1 text-white">號</div>
        <div class="col-span-3 text-white">分類</div>
        <div class="col-span-8 text-white">標題</div>
      </div>
    </div>

    <!-- 表格內容 -->
    <div class="p-4 space-y-1">
      <!-- Spreadsheet -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">1</div>
        <div class="col-span-3 text-white">資料連結</div>
        <div class="col-span-8">
          <a
              :href="SPREADSHEET_URL"
              target="_blank"
              class="text-blue-400 hover:text-blue-300 underline"
          >
            📊 菠菜天眼通試算表
          </a>
        </div>
      </div>

      <!-- 使用規則 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">2</div>
        <div class="col-span-3 text-white">使用規則</div>
        <div class="col-span-8">請至試算表填寫</div>
      </div>

      <!-- 新增公司 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">3</div>
        <div class="col-span-3 text-white">新增公司</div>
        <div class="col-span-8">各地區分頁A欄最末列</div>
      </div>

      <!-- 新增評論 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">4</div>
        <div class="col-span-3 text-white">新增評論</div>
        <div class="col-span-8">自由評論區H,I,J,K,L欄</div>
      </div>

      <!-- 每日新評論 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">5</div>
        <div class="col-span-3 text-white">每日新文</div>
        <div class="col-span-8">昨日新文 淡紅背景顯示</div>
      </div>

      <!-- 討論度高的公司 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">6</div>
        <div class="col-span-3 text-white">討論熱度</div>
        <div class="col-span-8">熱度B欄</div>
      </div>

      <!-- 快速了解公司 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">7</div>
        <div class="col-span-3 text-white">快速了解</div>
        <div class="col-span-8">AI總結C欄</div>
      </div>

      <!-- 功能許願 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">8</div>
        <div class="col-span-3 text-white">功能許願</div>
        <div class="col-span-8">許願頁</div>
      </div>

      <!-- 建議與除錯 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">9</div>
        <div class="col-span-3 text-white">建議除錯</div>
        <div class="col-span-8">說明錯誤 排期修正</div>
      </div>

      <!-- 規範 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">10</div>
        <div class="col-span-3 text-white">隱私規範</div>
        <div class="col-span-8">版主將適度修正</div>
      </div>

      <!-- 招募格聯繫 -->
      <div class="grid grid-cols-12 gap-4 text-lg hover:bg-green-900/20">
        <div class="col-span-1 text-white">11</div>
        <div class="col-span-3 text-white">商務獵才</div>
        <div class="col-span-8">
          <a
              href="mailto:allah2truth@gmail.com"
              class="text-blue-400 hover:text-blue-300 underline"
          >
            BTT站長
          </a></div>
      </div>
    </div>
  </div>
</template>
