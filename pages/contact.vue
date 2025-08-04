<script setup>
// 使用 constants 中的配置
import { SPREADSHEET_URL, CONTACT_EMAIL } from '~/constants/config'

useHead({
  title: '聯繫我們 - BTT 菠菜天眼通',
  meta: [
    { name: 'description', content: 'BTT 菠菜天眼通客服支援，專業服務諮詢。' },
    { property: 'og:title', content: '聯繫我們 - BTT 菠菜天眼通' },
  ]
})
</script>

<template>
  <div class="min-h-screen bg-black text-[#ffffffff] font-mono">
    <!-- 標題列 -->
    <div class="p-4">
      <div class="flex justify-between items-center">
        <span class="text-white text-xl font-bold">【聯繫我們】</span>
        <span class="text-white text-lg">BTT - Contact</span>
      </div>
    </div>

    <!-- 卡片式佈局 -->
    <div class="p-4 space-y-4">
      <!-- 主要聯繫方式 -->
      <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-bold">📧 主要聯繫</span>
          <span class="text-green-400 text-sm">聯繫方式</span>
        </div>
        
        <div class="mb-3">
          <div class="flex gap-4">
            <!-- Logo 圖片 -->
            <div class="flex-shrink-0">
              <img 
                src="https://ik.imagekit.io/ox48qyxas/business/btt_logo.png?updatedAt=1754217902580"
                alt="BTT Logo"
                loading="lazy"
                class="w-32 h-32 object-contain rounded"
              />
            </div>
            
            <!-- 聯繫資訊 -->
            <div class="flex-1">
              <div class="text-gray-300 text-sm whitespace-pre-line">
                客服信箱<br>
                {{ CONTACT_EMAIL }}
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <a
              :href="`mailto:${CONTACT_EMAIL}`"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            發送郵件
          </a>
        </div>
      </div>

      <!-- 服務項目 -->
      <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-bold">🛠️ 服務項目</span>
          <span class="text-green-400 text-sm">專業服務</span>
        </div>
        
        <div class="mb-3">
          <div class="flex gap-4">
            <!-- 服務圖示 -->
            <div class="flex-shrink-0">
              <div class="w-32 h-32 bg-gray-700 rounded flex items-center justify-center">
                <span class="text-4xl">⚙️</span>
              </div>
            </div>
            
            <!-- 服務說明 -->
            <div class="flex-1">
              <div class="text-gray-300 text-sm whitespace-pre-line">
                商務刊登<br>
                獵才刊登<br>
                <span class="text-red-400">(免費刊登期限：<br>
                 2025年12月31日前)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <a
              :href="`mailto:${CONTACT_EMAIL}?subject=服務諮詢`"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            服務諮詢
          </a>
        </div>
      </div>

      <!-- 資料連結 -->
      <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-bold">📊 資料連結</span>
          <span class="text-green-400 text-sm">自由評論</span>
        </div>
        
        <div class="mb-3">
          <div class="flex gap-4">
            <!-- 資料圖示 -->
            <div class="flex-shrink-0">
              <div class="w-32 h-32 bg-gray-700 rounded flex items-center justify-center">
                <span class="text-4xl">📈</span>
              </div>
            </div>
            
            <!-- 資料說明 -->
            <div class="flex-1">
              <div class="text-gray-300 text-sm whitespace-pre-line">
                菠菜天眼通試算表<br>
                各地區分頁資訊<br>
                自由評論區<br>
                AI總結分析
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <a
              :href="SPREADSHEET_URL"
              target="_blank"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            查看試算表
          </a>
        </div>
      </div>

      <!-- 隱私規範 -->
      <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-bold">🔒 隱私規範</span>
          <span class="text-green-400 text-sm">嚴格保護</span>
        </div>
        
        <div class="mb-3">
          <div class="flex gap-4">
            <!-- 隱私圖示 -->
            <div class="flex-shrink-0">
              <div class="w-32 h-32 bg-gray-700 rounded flex items-center justify-center">
                <span class="text-4xl">🛡️</span>
              </div>
            </div>
            
            <!-- 隱私說明 -->
            <div class="flex-1">
              <div class="text-gray-300 text-sm whitespace-pre-line">
                個人隱私嚴格保護<br>
                評論涉及違反隱私<br>
                版主將適度修正<br>
                資料僅供參考<br>
                請自行判斷風險
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <a
              :href="`mailto:${CONTACT_EMAIL}?subject=隱私問題`"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            隱私問題
          </a>
          <a
              :href="`mailto:${CONTACT_EMAIL}?subject=內容修正`"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            內容修正
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
