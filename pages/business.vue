<script setup>
// 使用 constants 中的配置
import { SPREADSHEET_URL, CONTACT_EMAIL } from '~/constants/config'

useHead({
  title: '商務通 - BTT 菠菜天眼通',
  meta: [
    { name: 'description', content: 'BTT 商務通提供專業的商務刊登服務，包含遊戲開發、技術合作等商務機會。' },
    { property: 'og:title', content: '商務通 - BTT 菠菜天眼通' },
  ]
})
</script>

<template>
  <div class="min-h-screen bg-black text-[#ffffffff] font-mono">
    <!-- 標題列 -->
    <div class="p-4">
      <div class="flex justify-between items-center">
        <span class="text-white text-xl font-bold">【商務通】</span>
        <span class="text-white text-lg">BTT - Business</span>
      </div>
    </div>

    <!-- 卡片式佈局 -->
    <div class="p-4 space-y-4">
      <!-- PAN 游戏源码卡片 -->
      <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-bold">PAN 游戏源码</span>
          <span class="text-green-400 text-sm">已驗證</span>
        </div>
        
        <!-- 內容區域 -->
        <div class="mb-3">
          <!-- 圖片和文字並排 -->
          <div class="flex gap-4">
            <!-- Logo 圖片 -->
            <div class="flex-shrink-0">
              <img 
                src="https://ik.imagekit.io/ox48qyxas/business/pan_logo.png?updatedAt=1754217902580"
                alt="PAN 游戏源码 Logo"
                loading="lazy"
                class="w-32 h-32 object-contain rounded"
              />
            </div>
            
            <!-- 文字描述 -->
            <div class="flex-1">
              <div class="text-gray-300 text-sm whitespace-pre-line">
                知名 BC 游戏源码贩售<br>
                可控洗分<br>
                支援二开<br>
                可预约指定品牌
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <a
              href="https://t.me/pangamesoft_channel"
              target="_blank"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            Pan TG頻道
          </a>
          <a
              href="https://t.me/pangamesoft"
              target="_blank"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            Pan TG業務號
          </a>
          <a
              href="https://www.youtube.com/@pangamesoft"
              target="_blank"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            Pan YT頻道
          </a>
        </div>
      </div>

      <!-- SPARK 原創遊戲開發卡片 -->
      <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-bold">SPARK 原創遊戲開發</span>
          <span class="text-green-400 text-sm">已驗證</span>
        </div>
        
        <!-- 內容區域 -->
        <div class="mb-3">
          <!-- 圖片和文字並排 -->
          <div class="flex gap-4">
            <!-- Logo 圖片 -->
            <div class="flex-shrink-0">
              <img 
                src="https://ik.imagekit.io/ox48qyxas/business/spark_logo_iron.png?updatedAt=1754217919105"
                alt="SPARK 原創遊戲開發 Logo"
                loading="lazy"
                class="w-32 h-32 object-contain rounded"
              />
            </div>
            
            <!-- 文字描述 -->
            <div class="flex-1">
              <div class="text-gray-300 text-sm whitespace-pre-line">
                業界高品質拉霸<br>
                遊戲製作團隊<br>
                媲美PG, PP, JILI 的視覺水準
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <a
              href="mailto:sparkgametech@gmail.com"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            Email
          </a>
          <a
              href="#"
              target="_blank"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            Spark YT頻道
          </a>
        </div>
      </div>

      <!-- 商務範例卡片 -->
      <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-bold">商務範例</span>
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
                alt="商務範例 Logo"
                loading="lazy"
                class="w-32 h-32 object-contain rounded"
              />
            </div>
            
            <!-- 文字描述 -->
            <div class="flex-1">
              <div class="text-gray-300 text-sm whitespace-pre-line">
                商務範例文案<br>
                需要刊登服務 請Email聯繫
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <a
              :href="`mailto:${CONTACT_EMAIL}?subject=商務刊登`"
              class="text-blue-400 text-sm bg-blue-900/20 px-2 py-1 rounded"
          >
            商務刊登
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
