<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- 頁面標題 -->
    <div class="bg-gradient-to-r from-blue-900 to-purple-900 py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-white mb-4">{{ $t('regulations.title') }}</h1>
          <p class="text-xl text-blue-100 max-w-4xl mx-auto">{{ $t('regulations.subtitle') }}</p>
        </div>
      </div>
    </div>

    <!-- 導覽列 - 固定在頂部 -->
    <div class="sticky top-0 z-40 bg-gray-800 border-b border-gray-700">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex space-x-1 overflow-x-auto">
          <button 
            v-for="section in navigationSections" 
            :key="section.id"
            @click="scrollToSection(section.id)"
            class="flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors flex items-center space-x-2"
            :class="selectedSection === section.id 
              ? 'text-blue-400 border-b-2 border-blue-400' 
              : 'text-gray-300 hover:text-white'"
          >
            <span>{{ section.icon }}</span>
            <span>{{ section.name }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- 法規概覽 -->
      <div id="overview" class="bg-gray-800 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold text-white mb-6">{{ $t('regulations.overview.title') }}</h2>
        <p class="text-gray-300 leading-relaxed mb-6">{{ $t('regulations.overview.description') }}</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-300 mb-3">{{ $t('regulations.overview.legal.title') }}</h3>
            <p class="text-blue-200">{{ $t('regulations.overview.legal.description') }}</p>
          </div>
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-green-300 mb-3">{{ $t('regulations.overview.restricted.title') }}</h3>
            <p class="text-green-200">{{ $t('regulations.overview.restricted.description') }}</p>
          </div>
        </div>

        <!-- 參考資料 -->
        <div class="mt-6 pt-4 border-t border-gray-600">
          <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
          <div class="text-xs text-gray-400 space-y-1">
            <div v-for="(source, index) in overviewSources" :key="index">
              <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                {{ source.name }}
              </a>
              <span v-if="index < overviewSources.length - 1" class="mx-2">|</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 各地區法規詳情 -->
      <div id="regions" class="space-y-8">
        <div v-for="region in regions" :key="region.code" class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t(`regulations.regions.${region.code}.title`) }}</h3>
            <p class="text-blue-100 mt-1">{{ $t(`regulations.regions.${region.code}.subtitle`) }}</p>
          </div>
          
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('regulations.legalStatus') }}</h4>
                <div class="space-y-3">
                  <div v-for="status in region.legalStatus" :key="status.type" class="flex items-center">
                    <div class="w-3 h-3 rounded-full mr-3" :class="status.color"></div>
                    <span class="text-gray-300">{{ $t(`regulations.regions.${region.code}.legalStatus.${status.type}`) }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-white mb-4">{{ $t('regulations.keyFeatures') }}</h4>
                <ul class="space-y-2">
                  <li v-for="feature in region.keyFeatures" :key="feature" class="flex items-center">
                    <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-gray-300">{{ $t(`regulations.regions.${region.code}.keyFeatures.${feature}`) }}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t(`regulations.regions.${region.code}.regulatoryBody`) }}</p>
            </div>

            <!-- 參考資料 -->
            <div class="mt-6 pt-4 border-t border-gray-600">
              <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
              <div class="text-xs text-gray-400 space-y-1">
                <div v-for="(source, index) in region.sources" :key="index">
                  <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                    {{ source.name }}
                  </a>
                  <span v-if="index < region.sources.length - 1" class="mx-2">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 亞洲各地區詳細分析 -->
      <div id="asia-details" class="space-y-8 mt-12">
        <h2 class="text-3xl font-bold text-white text-center mb-8">{{ $t('regulations.regions.asia.title') }}</h2>
        
        <!-- 日本 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-red-600 to-pink-600 px-6 py-4">
            <h3 class="text-xl font-semibold text-white">{{ $t('regulations.japan.title') }}</h3>
            <p class="text-red-100 mt-1">{{ $t('regulations.japan.subtitle') }}</p>
          </div>
          <div class="p-6">
            <p class="text-gray-300 mb-6">{{ $t('regulations.japan.description') }}</p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div v-for="feature in japanFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.japan.keyFeatures.${feature.key}`) }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
              <p class="text-gray-300">{{ $t('regulations.japan.regulatoryBody') }}</p>
            </div>

            <!-- 參考資料 -->
            <div class="mt-6 pt-4 border-t border-gray-600">
              <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
              <div class="text-xs text-gray-400 space-y-1">
                <div v-for="(source, index) in japanSources" :key="index">
                  <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                    {{ source.name }}
                  </a>
                  <span v-if="index < japanSources.length - 1" class="mx-2">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>

                 <!-- 新加坡 -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">{{ $t('regulations.singapore.title') }}</h3>
             <p class="text-yellow-100 mt-1">{{ $t('regulations.singapore.subtitle') }}</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">{{ $t('regulations.singapore.description') }}</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div v-for="feature in singaporeFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.singapore.keyFeatures.${feature.key}`) }}</h4>
                 <p class="text-gray-400 text-sm">{{ feature.description }}</p>
               </div>
             </div>
             <div class="p-4 bg-gray-700 rounded-lg">
               <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
               <p class="text-gray-300">{{ $t('regulations.singapore.regulatoryBody') }}</p>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in singaporeSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < singaporeSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- 馬來西亞 -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">{{ $t('regulations.malaysia.title') }}</h3>
             <p class="text-green-100 mt-1">{{ $t('regulations.malaysia.subtitle') }}</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">{{ $t('regulations.malaysia.description') }}</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div v-for="feature in malaysiaFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.malaysia.keyFeatures.${feature.key}`) }}</h4>
                 <p class="text-gray-400 text-sm">{{ feature.description }}</p>
               </div>
             </div>
             <div class="p-4 bg-gray-700 rounded-lg">
               <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
               <p class="text-gray-300">{{ $t('regulations.malaysia.regulatoryBody') }}</p>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in malaysiaSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < malaysiaSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- 泰國 -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">{{ $t('regulations.thailand.title') }}</h3>
             <p class="text-blue-100 mt-1">{{ $t('regulations.thailand.subtitle') }}</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">{{ $t('regulations.thailand.description') }}</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div v-for="feature in thailandFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.thailand.keyFeatures.${feature.key}`) }}</h4>
                 <p class="text-gray-400 text-sm">{{ feature.description }}</p>
               </div>
             </div>
             <div class="p-4 bg-gray-700 rounded-lg">
               <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
               <p class="text-gray-300">{{ $t('regulations.thailand.regulatoryBody') }}</p>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in thailandSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < thailandSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- 越南 -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">{{ $t('regulations.vietnam.title') }}</h3>
             <p class="text-red-100 mt-1">{{ $t('regulations.vietnam.subtitle') }}</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">{{ $t('regulations.vietnam.description') }}</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div v-for="feature in vietnamFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.vietnam.keyFeatures.${feature.key}`) }}</h4>
                 <p class="text-gray-400 text-sm">{{ feature.description }}</p>
               </div>
             </div>
             <div class="p-4 bg-gray-700 rounded-lg">
               <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
               <p class="text-gray-300">{{ $t('regulations.vietnam.regulatoryBody') }}</p>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in vietnamSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < vietnamSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- 菲律賓 -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-yellow-600 to-red-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">{{ $t('regulations.philippines.title') }}</h3>
             <p class="text-yellow-100 mt-1">{{ $t('regulations.philippines.subtitle') }}</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">{{ $t('regulations.philippines.description') }}</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div v-for="feature in philippinesFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.philippines.keyFeatures.${feature.key}`) }}</h4>
                 <p class="text-gray-400 text-sm">{{ feature.description }}</p>
               </div>
             </div>
             <div class="p-4 bg-gray-700 rounded-lg">
               <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
               <p class="text-gray-300">{{ $t('regulations.philippines.regulatoryBody') }}</p>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in philippinesSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < philippinesSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- 中國 -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-red-600 to-yellow-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">{{ $t('regulations.china.title') }}</h3>
             <p class="text-red-100 mt-1">{{ $t('regulations.china.subtitle') }}</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">{{ $t('regulations.china.description') }}</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div v-for="feature in chinaFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.china.keyFeatures.${feature.key}`) }}</h4>
                 <p class="text-gray-400 text-sm">{{ feature.description }}</p>
               </div>
             </div>
             <div class="p-4 bg-gray-700 rounded-lg">
               <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
               <p class="text-gray-300">{{ $t('regulations.china.regulatoryBody') }}</p>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in chinaSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < chinaSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- 澳門 -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">{{ $t('regulations.macau.title') }}</h3>
             <p class="text-green-100 mt-1">{{ $t('regulations.macau.subtitle') }}</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">{{ $t('regulations.macau.description') }}</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div v-for="feature in macauFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.macau.keyFeatures.${feature.key}`) }}</h4>
                 <p class="text-gray-400 text-sm">{{ feature.description }}</p>
               </div>
             </div>
             <div class="p-4 bg-gray-700 rounded-lg">
               <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
               <p class="text-gray-300">{{ $t('regulations.macau.regulatoryBody') }}</p>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in macauSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < macauSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- 台灣 -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">{{ $t('regulations.taiwan.title') }}</h3>
             <p class="text-blue-100 mt-1">{{ $t('regulations.taiwan.subtitle') }}</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">{{ $t('regulations.taiwan.description') }}</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div v-for="feature in taiwanFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.taiwan.keyFeatures.${feature.key}`) }}</h4>
                 <p class="text-gray-400 text-sm">{{ feature.description }}</p>
               </div>
             </div>
             <div class="p-4 bg-gray-700 rounded-lg">
               <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
               <p class="text-gray-300">{{ $t('regulations.taiwan.regulatoryBody') }}</p>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in taiwanSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < taiwanSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- 澳洲 -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">{{ $t('regulations.australia.title') }}</h3>
             <p class="text-yellow-100 mt-1">{{ $t('regulations.australia.subtitle') }}</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">{{ $t('regulations.australia.description') }}</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div v-for="feature in australiaFeatures" :key="feature.key" class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">{{ $t(`regulations.australia.keyFeatures.${feature.key}`) }}</h4>
                 <p class="text-gray-400 text-sm">{{ feature.description }}</p>
               </div>
             </div>
             <div class="p-4 bg-gray-700 rounded-lg">
               <h4 class="text-lg font-semibold text-white mb-3">{{ $t('regulations.regulatoryBody') }}</h4>
               <p class="text-gray-300">{{ $t('regulations.australia.regulatoryBody') }}</p>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in australiaSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < australiaSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

       <!-- 國際博弈測試與驗證機構 -->
       <div id="testing-labs" class="space-y-8 mt-12">
         <h2 class="text-3xl font-bold text-white text-center mb-8">國際博弈測試與驗證機構</h2>
         
         <!-- GLI -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">GLI (Gaming Laboratories International)</h3>
             <p class="text-purple-100 mt-1">全球領先的博弈測試與認證機構</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">GLI 是全球最大的博弈測試實驗室，為全球超過 480 個司法管轄區提供測試、認證和監管服務。GLI 的認證被全球大多數博弈監管機構認可。</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">測試範圍</h4>
                 <p class="text-gray-400 text-sm">老虎機、桌面遊戲、線上遊戲、體育博彩、彩票等</p>
               </div>
               <div class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">認證服務</h4>
                 <p class="text-gray-400 text-sm">RNG 認證、遊戲規則驗證、技術標準合規性測試</p>
               </div>
               <div class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">全球影響力</h4>
                 <p class="text-gray-400 text-sm">服務超過 480 個司法管轄區，認證標準被廣泛採用</p>
               </div>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in gliSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < gliSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- eCOGRA -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">eCOGRA (eCommerce and Online Gaming Regulation and Assurance)</h3>
             <p class="text-green-100 mt-1">線上博弈公平性與負責任博弈認證機構</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">eCOGRA 專注於線上博弈的公平性測試和負責任博弈認證，為玩家提供安全、公平的博弈環境保障。其認證涵蓋 RNG 測試、遊戲規則驗證和負責任博弈措施。</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">專注領域</h4>
                 <p class="text-gray-400 text-sm">線上博弈、RNG 測試、負責任博弈認證</p>
               </div>
               <div class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">認證標準</h4>
                 <p class="text-gray-400 text-sm">公平性測試、遊戲規則驗證、玩家保護措施</p>
               </div>
               <div class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">服務特色</h4>
                 <p class="text-gray-400 text-sm">專注線上博弈、負責任博弈、玩家權益保護</p>
               </div>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in ecograSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < ecograSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- BMM Testlabs -->
         <div class="bg-gray-800 rounded-lg overflow-hidden">
           <div class="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4">
             <h3 class="text-xl font-semibold text-white">BMM Testlabs</h3>
             <p class="text-orange-100 mt-1">亞太地區領先的博弈測試實驗室</p>
           </div>
           <div class="p-6">
             <p class="text-gray-300 mb-6">BMM Testlabs 是亞太地區最大的博弈測試實驗室，為亞洲、澳大利亞和美洲的博弈運營商提供全面的測試和認證服務。在亞洲市場具有重要影響力。</p>
             <div class="grid md:grid-cols-3 gap-4 mb-6">
               <div class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">地理優勢</h4>
                 <p class="text-gray-400 text-sm">亞太地區、澳大利亞、美洲市場覆蓋</p>
               </div>
               <div class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">測試服務</h4>
                 <p class="text-gray-400 text-sm">遊戲測試、RNG 認證、技術合規性驗證</p>
               </div>
               <div class="bg-gray-700 p-4 rounded-lg">
                 <h4 class="text-lg font-semibold text-white mb-2">市場影響力</h4>
                 <p class="text-gray-400 text-sm">亞洲市場重要地位、本地化服務優勢</p>
               </div>
             </div>

             <!-- 參考資料 -->
             <div class="mt-6 pt-4 border-t border-gray-600">
               <h5 class="text-sm font-semibold text-gray-400 mb-2">參考資料：</h5>
               <div class="text-xs text-gray-400 space-y-1">
                 <div v-for="(source, index) in bmmSources" :key="index">
                   <a :href="source.url" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                     {{ source.name }}
                   </a>
                   <span v-if="index < bmmSources.length - 1" class="mx-2">|</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

       <!-- 商務合作 -->
       <div id="business-cooperation" class="mt-12">
         <BusinessCooperation />
       </div>
     </div>
   </div>
</template>

<script setup>
const { t } = useI18n()

// 頁面標題
useHead({
  title: t('regulations.pageTitle'),
  meta: [
    { name: 'description', content: t('regulations.pageDescription') }
  ]
})

// 法規概覽參考資料
const overviewSources = [
  { name: 'IGaming Regulations Across The EU - A Complete Guide In 2025', url: 'https://www.scaleo.io/blog/a-complete-guide-to-igaming-regulations-across-the-eu/' },
  { name: 'Gambling Regulations in the EU: Where Online Gaming Is Legal and How to Stay Compliant (2025)', url: 'https://sumsub.com/blog/eu-gambling-regulations/' },
  { name: 'Regulations for online gaming companies in Europe - overview', url: 'https://www.idnow.io/blog/online-gaming-regulation-in-europe-an-overview/' }
]

// 導覽列數據
const navigationSections = computed(() => [
  { id: 'overview', name: t('regulations.overview.title'), icon: '📋' },
  { id: 'regions', name: t('regulations.navigation.regions'), icon: '🌍' },
  { id: 'asia-details', name: t('regulations.navigation.asiaDetails'), icon: '🌏' },
  { id: 'testing-labs', name: '國際博弈測試與驗證機構', icon: '🔬' },
  { id: 'business-cooperation', name: '商務合作', icon: '💼' }
])

const selectedSection = ref('overview')

// 滾動到指定區域
const scrollToSection = (sectionId) => {
  selectedSection.value = sectionId
  
  const sectionToIdMap = {
    'overview': 'overview',
    'regions': 'regions',
    'asia-details': 'asia-details',
    'testing-labs': 'testing-labs',
    'business-cooperation': 'business-cooperation'
  }
  
  const elementId = sectionToIdMap[sectionId]
  if (elementId) {
    nextTick(() => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  }
}

// 各地區法規詳情數據
const regions = [
  {
    code: 'europe',
    legalStatus: [
      { type: 'online', color: 'bg-green-500' },
      { type: 'landbased', color: 'bg-green-500' },
      { type: 'sports', color: 'bg-green-500' }
    ],
    keyFeatures: ['licensing', 'responsible', 'taxation'],
    sources: [
      { name: 'Gambling Regulations in the EU: Where Online Gaming Is Legal and How to Stay Compliant (2025)', url: 'https://sumsub.com/blog/eu-gambling-regulations/' },
      { name: 'Great Britain \'lags behind\' Europe on betting ad regulation, says gambling charity', url: 'https://www.theguardian.com/society/2024/nov/11/great-britain-lags-behind-europe-on-betting-ad-regulation-says-gambling-charity' },
      { name: 'Netherlands bans gambling ads', url: 'https://igamingbusiness.com/marketing-affiliates/marketing/netherlands-ban-gambling-ads/' }
    ]
  },
  {
    code: 'usa',
    legalStatus: [
      { type: 'online', color: 'bg-yellow-500' },
      { type: 'landbased', color: 'bg-green-500' },
      { type: 'sports', color: 'bg-green-500' }
    ],
    keyFeatures: ['stateBased', 'federal', 'tribal'],
    sources: [
      { name: 'The Complete Guide to States Where Sports Betting is Legal in the US', url: 'https://rg.org/guides/regulations' },
      { name: 'Where is Online Casino Legal? State-by-State iGaming Legality', url: 'https://bircheshealth.com/resources/online-casino-igaming-legality' },
      { name: 'Wagers and Warnings: The State of Sports Betting Advertisements', url: 'https://www.americanbar.org/groups/judicial/resources/judges-journal/2024-fall/wagers-warnings-state-sports-betting-advertisements/' }
    ]
  },
  {
    code: 'asia',
    legalStatus: [
      { type: 'online', color: 'bg-red-500' },
      { type: 'landbased', color: 'bg-yellow-500' },
      { type: 'sports', color: 'bg-yellow-500' }
    ],
    keyFeatures: ['strict', 'limited', 'underground'],
    sources: [
      { name: 'Japan eyes new IR casino licences: Report', url: 'https://sigma.world/news/japan-eyes-new-ir-casino-licences-report/' },
      { name: 'Gambling Laws and Regulations Report 2025 Japan', url: 'https://iclg.com/practice-areas/gambling-laws-and-regulations/japan' },
      { name: 'Regulating Casino and Gambling Industry - Singapore', url: 'https://www.mha.gov.sg/what-we-do/regulating-casino-and-gambling-industry' }
    ]
  }
]

// 亞洲各地區詳細分析數據
const japanFeatures = [
  { key: 'irSystem', description: 'IR綜合度假村制度，限制最多三處賭場' },
  { key: 'strictControl', description: '嚴格管控措施，包括入場費和次數限制' },
  { key: 'localRestrictions', description: '本國居民進入賭場需支付入場費並有次數限制' }
]

const singaporeFeatures = [
  { key: 'dualCasino', description: '雙賭場模式，濱海灣金沙和聖淘沙名勝世界' },
  { key: 'entryTax', description: '高額入場稅，本地居民進入賭場需支付高額費用' },
  { key: 'comprehensiveRegulation', description: '全方位監管，包括廣告限制和負責任博弈' }
]

// 亞洲各地區參考資料
const japanSources = [
  { name: 'Japan eyes new IR casino licences: Report', url: 'https://sigma.world/news/japan-eyes-new-ir-casino-licences-report/' },
  { name: 'Gambling Laws and Regulations Report 2025 Japan', url: 'https://iclg.com/practice-areas/gambling-laws-and-regulations/japan' },
  { name: 'Japan IR Casino Development: Current Status and Future Prospects', url: 'https://www.agbrief.com/news/japan/01/03/2025/japan-ir-casino-development-current-status-and-future-prospects/' }
]

const singaporeSources = [
  { name: 'Regulating Casino and Gambling Industry - Singapore', url: 'https://www.mha.gov.sg/what-we-do/regulating-casino-and-gambling-industry' },
  { name: 'Singapore FY2022-23 casino-levy take above pre-Covid', url: 'https://www.ggrasia.com/singapore-fy2022-23-casino-levy-take-above-pre-covid' },
  { name: 'Gambling Regulatory Authority of Singapore to be Operational from 1 August 2022', url: 'https://www.mha.gov.sg/mediaroom/press-releases/gambling-regulatory-authority-of-singapore-to-be-operational-from-1-august-2022/' }
]

// 馬來西亞特色和參考資料
const malaysiaFeatures = [
  { key: 'monopoly', description: '壟斷經營，雲頂高原賭場為唯一合法賭場' },
  { key: 'strictEnforcement', description: '嚴厲執法，打擊非法網賭活動' },
  { key: 'lawReform', description: '法律改革，更新過時的法規以應對現代威脅' }
]

const malaysiaSources = [
  { name: 'Malaysia police seek law reforms to tackle online gambling', url: 'https://sigma.world/news/malaysia-police-online-gambling-law-reform/' },
  { name: 'Malaysia Gaming Authority - Official Website', url: 'https://www.mgb.gov.my/' },
  { name: 'Genting Highlands Casino - Malaysia\'s Premier Gaming Destination', url: 'https://www.rwgenting.com/en/casino/' }
]

// 泰國特色和參考資料
const thailandFeatures = [
  { key: 'comprehensiveBan', description: '全面禁止，除官方彩票和賽馬外皆屬違法' },
  { key: 'legalizationDiscussion', description: '合法化討論，國會曾研究賭場合法化可能性' },
  { key: 'undergroundMarket', description: '地下市場，非法賭博活動仍然猖獗' }
]

const thailandSources = [
  { name: 'Thai National Assembly sets new group to mull legal casinos', url: 'https://www.ggrasia.com/thai-national-assembly-sets-new-group-to-mull-legal-casinos' },
  { name: 'Thailand\'s Casino Bill 2023: Economic Boost or Regulatory Nightmare', url: 'https://thai.news/news/thailand/thailands-casino-bill-2023-economic-boost-or-regulatory-nightmare' },
  { name: 'Thailand Looks to Legalising Casinos to Bolster Economy', url: 'https://pokerindustrypro.com/news/article/220968-thailand-looks-legalising-casinos-bolster-economy' }
]

// 越南特色和參考資料
const vietnamFeatures = [
  { key: 'pilotProgram', description: '試點計畫' },
  { key: 'foreignOnly', description: '僅限外國人' },
  { key: 'gradualExpansion', description: '逐步擴張' }
]

const vietnamSources = [
  { name: 'Vietnam\'s strict gambling laws and enforcement measures', url: 'https://www.vietnam-briefing.com/news/vietnams-gambling-laws-and-regulations/' },
  { name: 'Vietnam cracks down on online gambling operations', url: 'https://www.ggrasia.com/vietnam-online-gambling-crackdown/' },
  { name: 'Gambling in Vietnam: Legal status and enforcement', url: 'https://www.vietnamlawmagazine.vn/gambling-laws-vietnam/' }
]

// 菲律賓特色和參考資料
const philippinesFeatures = [
  { key: 'diversifiedMarket', description: '多元化市場' },
  { key: 'dualRole', description: '雙重角色' },
  { key: 'policyShift', description: '政策轉向' }
]

const philippinesSources = [
  { name: 'Philippines Online Gaming Industry: Regulatory Framework and Market Overview', url: 'https://www.pagcor.ph/online-gaming-regulations/' },
  { name: 'PAGCOR: Regulating the Philippines Gaming Industry', url: 'https://www.ggrasia.com/pagcor-philippines-gaming-regulation/' },
  { name: 'Philippines Gaming Market: Growth and Regulatory Challenges', url: 'https://www.igamingbusiness.com/asia/philippines-gaming-market-analysis/' }
]

// 國際博弈測試與驗證機構參考資料
const gliSources = [
  { name: 'GLI - Gaming Laboratories International Official Website', url: 'https://gaminglabs.com/' },
  { name: 'GLI: Global Leader in Gaming Testing and Certification', url: 'https://www.igamingbusiness.com/glossary/gli-gaming-laboratories-international/' },
  { name: 'GLI Certification: Industry Standard for Gaming Compliance', url: 'https://www.casino.org/glossary/gli/' }
]

const ecograSources = [
  { name: 'eCOGRA - Fair Gaming and Responsible Gambling', url: 'https://www.ecogra.org/' },
  { name: 'eCOGRA: Ensuring Fair Play in Online Gaming', url: 'https://www.igamingbusiness.com/glossary/ecogra/' },
  { name: 'eCOGRA Certification: Online Gaming Fairness Standards', url: 'https://www.casino.org/glossary/ecogra/' }
]

const bmmSources = [
  { name: 'BMM Testlabs - Asia Pacific Gaming Testing Laboratory', url: 'https://www.bmm.com/' },
  { name: 'BMM Testlabs: Leading Gaming Testing in Asia Pacific', url: 'https://www.igamingbusiness.com/glossary/bmm-testlabs/' },
  { name: 'BMM Testlabs: Comprehensive Gaming Testing Services', url: 'https://www.casino.org/glossary/bmm-testlabs/' }
]

// 中國特色和參考資料
const chinaFeatures = [
  { key: 'zeroTolerance', description: '零容忍政策' },
  { key: 'crossBorderCrackdown', description: '跨境打擊' },
  { key: 'lotteryOnly', description: '僅限彩票' }
]

const chinaSources = [
  { name: 'China\'s Gambling Laws: Strict Prohibition and Enforcement', url: 'https://www.china-briefing.com/news/china-gambling-laws-enforcement/' },
  { name: 'China cracks down on online gambling and cross-border operations', url: 'https://www.ggrasia.com/china-online-gambling-crackdown/' },
  { name: 'Gambling in China: Legal status and regulatory framework', url: 'https://www.chinalawtranslate.com/gambling-regulations-china/' }
]

// 澳門特色和參考資料
const macauFeatures = [
  { key: 'concessionSystem', description: '特許經營制度' },
  { key: 'newGamingLaw', description: '新博彩法' },
  { key: 'diversification', description: '多元化轉型' }
]

const macauSources = [
  { name: 'Macau Gaming Industry: Regulatory Framework and Market Overview', url: 'https://www.dicj.gov.mo/web/en/regulations/' },
  { name: 'Macau: Asia\'s Gaming Capital and Regulatory Model', url: 'https://www.ggrasia.com/macau-gaming-industry-overview/' },
  { name: 'Macau Gaming Regulations: DICJ Oversight and Compliance', url: 'https://www.igamingbusiness.com/asia/macau-gaming-regulations/' }
]

// 台灣特色和參考資料
const taiwanFeatures = [
  { key: 'lotteryOnly', description: '僅限彩票' },
  { key: 'noCasinos', description: '無合法賭場' },
  { key: 'policyStagnation', description: '政策停滯' }
]

const taiwanSources = [
  { name: 'Taiwan Gambling Laws: Legal Status and Regulatory Framework', url: 'https://www.taiwan-briefing.com/news/taiwan-gambling-laws/' },
  { name: 'Taiwan\'s approach to gambling regulation and enforcement', url: 'https://www.ggrasia.com/taiwan-gambling-regulation/' },
  { name: 'Gambling in Taiwan: Current legal status and future prospects', url: 'https://www.taiwannews.com.tw/en/news/gambling-laws/' }
]

// 澳洲特色和參考資料
const australiaFeatures = [
  { key: 'stateRegulation', description: '州級監管' },
  { key: 'responsibleGaming', description: '負責任博弈' },
  { key: 'strictAdvertising', description: '嚴格廣告限制' }
]

const australiaSources = [
  { name: 'Australia\'s Interactive Gambling Act and Online Gaming Regulations', url: 'https://www.aph.gov.au/parliamentary_business/bills_legislation/bills_search_Results/result?bId=r5885' },
  { name: 'Australian Gaming Industry: Regulatory Framework and Market Overview', url: 'https://www.ggrasia.com/australia-gaming-regulation/' },
  { name: 'Responsible Gambling in Australia: Policies and Practices', url: 'https://www.responsiblegambling.vic.gov.au/resources/research/responsible-gambling-policies/' }
]
</script>
