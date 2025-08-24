<script setup>
useHead({
  title: '隱私權聲明 - BTT 菠菜天眼通',
  meta: [
    { name: 'description', content: 'BTT 菠菜天眼通隱私權政策與使用條款' },
    { property: 'og:title', content: '隱私權聲明 - BTT 菠菜天眼通' },
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-gray-600 to-gray-800 p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-2">隱私權聲明</h1>
        <p class="text-gray-100">我們重視您的隱私權，請詳閱以下條款</p>
      </div>
    </div>

    <!-- 主要內容 -->
    <div class="max-w-4xl mx-auto p-6">
      <div class="bg-gray-800 rounded-lg p-8 space-y-8">
        <!-- 資料收集 -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
            <svg class="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            資料收集與使用
          </h2>
          <div class="text-gray-300 space-y-4">
            <p>我們收集的資料類型包括：</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>您主動提供的資訊（如聯繫資訊、評論內容）</li>
              <li>網站使用情況的技術資訊（如IP位址、瀏覽器類型）</li>
              <li>Cookie和類似技術收集的資訊</li>
            </ul>
            <p>這些資料用於：</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>提供和改善我們的服務</li>
              <li>回應您的查詢和請求</li>
              <li>分析網站使用情況以優化用戶體驗</li>
            </ul>
          </div>
        </section>

        <!-- 資料保護 -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
            <svg class="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            資料保護措施
          </h2>
          <div class="text-gray-300 space-y-4">
            <p>我們採取以下措施保護您的個人資料：</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>使用SSL加密技術保護資料傳輸</li>
              <li>限制員工對個人資料的存取權限</li>
              <li>定期更新安全措施和系統</li>
              <li>遵循業界最佳實務標準</li>
            </ul>
          </div>
        </section>

        <!-- Cookie政策 -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
            <svg class="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h6a2 2 0 002-2V8M7 8h10M7 8l1 10m8-10l-1 10"></path>
            </svg>
            Cookie使用政策
          </h2>
          <div class="text-gray-300 space-y-4">
            <p>我們使用Cookie來：</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>記住您的偏好設定</li>
              <li>分析網站流量和使用模式</li>
              <li>提供個人化內容</li>
              <li>確保網站安全性</li>
            </ul>
            <p>您可以透過瀏覽器設定管理Cookie偏好。</p>
          </div>
        </section>

        <!-- 第三方服務 -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
            <svg class="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
            第三方服務
          </h2>
          <div class="text-gray-300 space-y-4">
            <p>我們可能使用以下第三方服務：</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Google Analytics（網站分析）</li>
              <li>Google Sheets（資料儲存）</li>
              <li>電子郵件服務提供商</li>
            </ul>
            <p>這些服務有各自的隱私政策，我們建議您詳閱相關條款。</p>
          </div>
        </section>

        <!-- 用戶權利 -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
            <svg class="w-6 h-6 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            您的權利
          </h2>
          <div class="text-gray-300 space-y-4">
            <p>您有權：</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>查詢我們持有的您的個人資料</li>
              <li>要求更正不正確的資料</li>
              <li>要求刪除您的個人資料</li>
              <li>限制資料處理</li>
              <li>資料可攜權</li>
            </ul>
            <p>如需行使這些權利，請聯繫我們：<a href="mailto:allah2truth@gmail.com" class="text-blue-400 hover:text-blue-300 underline">allah2truth@gmail.com</a></p>
          </div>
        </section>

        <!-- 聯繫資訊 -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
            <svg class="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            聯繫我們
          </h2>
          <div class="text-gray-300 space-y-4">
            <p>如果您對此隱私權聲明有任何疑問，請聯繫：</p>
            <div class="bg-gray-700 rounded-lg p-4">
              <p><strong>BTT 菠菜天眼通</strong></p>
              <p>電子郵件：<a href="mailto:allah2truth@gmail.com" class="text-blue-400 hover:text-blue-300 underline">allah2truth@gmail.com</a></p>
            </div>
          </div>
        </section>

        <!-- 更新日期 -->
        <section class="border-t border-gray-700 pt-6">
          <p class="text-gray-400 text-sm">
            最後更新日期：{{ new Date().toLocaleDateString('zh-TW') }}
          </p>
          <p class="text-gray-400 text-sm mt-2">
            我們保留隨時修改此隱私權聲明的權利。任何變更將在此頁面公布。
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
