<script setup>
// 直接使用靜態資料
const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1kWLg0gFgcmfZx86DjxSiKw0BYq9zKW0LdQ5OPDi2cWM/'
</script>

<template>
  <div class="min-h-screen bg-black text-[#ffffffff] font-mono">
    <!-- 標題列 -->
    <div class="p-4">
      <div class="flex justify-between items-center">
        <span class="text-white text-xl font-bold">【獵才通】</span>
        <span class="text-white text-lg">BTT - HR</span>
      </div>
    </div>

    <!-- 卡片式佈局 -->
    <div class="p-4 space-y-4">
      <!-- 卡片標題 -->
      <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-bold">獵才範例</span>
          <span class="text-green-400 text-sm">已驗證</span>
        </div>
        
        <!-- 內容區域 -->
        <div class="mb-3">
          <!-- 圖片和文字並排 -->
          <div class="flex gap-4">
            <!-- Logo 圖片 -->
            <div class="flex-shrink-0">
              <img 
                src="https://ik.imagekit.io/ox48qyxas/business/btt_logo.png?updatedAt=1754217902580"
                alt="天眼通範例 Logo"
                class="w-32 h-32 object-contain rounded"
              />
            </div>
            
            <!-- 文字描述 -->
            <div class="flex-1">
              <div class="text-gray-300 text-sm whitespace-pre-line">
                範例招聘文案<br>
                工作類型: 遠程 | 全職<br>
                職位需求: <br>
                1. 後端工程師 2名<br>
                2. 前端工程師 3名<br>
                3. UI/UX設計師 1名<br>
                需要刊登服務 請Email聯繫
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <a
              :href="`mailto:${CONTACT_EMAIL}?subject=獵才刊登`"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            獵才刊登
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
