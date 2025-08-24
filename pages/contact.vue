<script setup>
// 使用 constants 中的配置
import { SPREADSHEET_URL, CONTACT_EMAIL } from '~/constants/config'

useHead({
  title: 'BTT 菠菜天眼通 - 聯繫我們',
  meta: [
    { name: 'description', content: 'BTT 菠菜天眼通客服支援，專業服務諮詢。' },
    { property: 'og:title', content: 'BTT 菠菜天眼通 - 聯繫我們' },
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">聯繫我們</h1>
        <p class="text-indigo-100">專業服務團隊為您提供全方位支援</p>
      </div>
    </div>

    <!-- 主要內容 -->
    <div class="max-w-4xl mx-auto p-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 左側：聯繫資訊 -->
        <div class="space-y-6">
          <!-- 主要聯繫方式 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <svg class="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <h2 class="text-xl font-semibold text-white">主要聯繫</h2>
            </div>
            
            <div class="flex items-center space-x-4 mb-4">
              <img 
                src="https://ik.imagekit.io/ox48qyxas/business/btt_logo.png?updatedAt=1754217902580"
                alt="BTT Logo"
                loading="lazy"
                class="w-16 h-16 object-contain rounded-lg bg-gray-700 p-2"
              />
              <div>
                <h3 class="text-white font-medium">BTT 菠菜天眼通</h3>
                <p class="text-gray-300 text-sm">專業資訊整合平台</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center text-gray-300">
                <svg class="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
                {{ CONTACT_EMAIL }}
              </div>
              
              <a
                :href="`mailto:${CONTACT_EMAIL}`"
                class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                發送郵件
              </a>
            </div>
          </div>

          <!-- 服務項目 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <svg class="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
              <h2 class="text-xl font-semibold text-white">服務項目</h2>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-medium">商務刊登</h3>
                  <p class="text-gray-300 text-sm">企業資訊發布與推廣</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-medium">獵才刊登</h3>
                  <p class="text-gray-300 text-sm">人才招募與職缺發布</p>
                </div>
              </div>
              
              <div class="bg-red-900/20 border border-red-700 rounded-lg p-3">
                <p class="text-red-300 text-sm">
                  <strong>免費刊登期限：</strong>2025年12月31日前
                </p>
              </div>
              
              <a
                :href="`mailto:${CONTACT_EMAIL}?subject=服務諮詢`"
                class="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                服務諮詢
              </a>
            </div>
          </div>
        </div>

        <!-- 右側：資料與隱私 -->
        <div class="space-y-6">
          <!-- 資料連結 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <svg class="w-6 h-6 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              <h2 class="text-xl font-semibold text-white">資料連結</h2>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-medium">菠菜天眼通試算表</h3>
                  <p class="text-gray-300 text-sm">完整的資料庫與分析工具</p>
                </div>
              </div>
              
              <ul class="text-gray-300 text-sm space-y-1 ml-11">
                <li>• 各地區分頁資訊</li>
                <li>• 自由評論區</li>
                <li>• AI總結分析</li>
                <li>• 即時數據更新</li>
              </ul>
              
              <a
                :href="SPREADSHEET_URL"
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                查看試算表
              </a>
            </div>
          </div>

          <!-- 隱私規範 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <svg class="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <h2 class="text-xl font-semibold text-white">隱私規範</h2>
            </div>
            
            <div class="space-y-4">
              <div class="bg-purple-900/20 border border-purple-700 rounded-lg p-4">
                <ul class="text-purple-200 text-sm space-y-2">
                  <li>• 個人隱私嚴格保護</li>
                  <li>• 評論涉及違反隱私，版主將適度修正</li>
                  <li>• 資料僅供參考，請自行判斷風險</li>
                  <li>• 遵循相關法規與最佳實務</li>
                </ul>
              </div>
              
              <div class="flex flex-wrap gap-3">
                <a
                  :href="`mailto:${CONTACT_EMAIL}?subject=隱私問題`"
                  class="inline-flex items-center px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                >
                  隱私問題
                </a>
                <a
                  :href="`mailto:${CONTACT_EMAIL}?subject=內容修正`"
                  class="inline-flex items-center px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                >
                  內容修正
                </a>
                <NuxtLink
                  to="/privacy"
                  class="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm"
                >
                  隱私權聲明
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
