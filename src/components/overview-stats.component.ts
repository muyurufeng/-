import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-stats',
  standalone: true,
  template: `
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900">结构画像：“三高一低”</h2>
          <p class="mt-4 text-lg text-slate-600">
            对 478 家本土 AI 企业的分析显示，呈现出以阿里生态为核心、服务型模式主导的“金字塔”结构。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- High Concentration -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">头部高集聚</h3>
            <p class="text-slate-600 text-sm mb-3">前 50 名中阿里系占 12 家，生态依赖度较高。</p>
            <div class="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded inline-block">风险：生态单一</div>
          </div>

          <!-- High Service % -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">高服务占比</h3>
            <p class="text-slate-600 text-sm mb-3">90% 以上为服务/平台型企业，纯硬科技少。</p>
             <div class="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">特征：数字服务强</div>
          </div>

          <!-- High Growth/Burn -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 text-rose-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">高成长性</h3>
            <p class="text-slate-600 text-sm mb-3">64% 企业营收 5 亿以下，多数处于早期阶段。</p>
             <div class="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded inline-block">需求：长期资本</div>
          </div>

          <!-- Low Industrial Pen -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-red-400">
            <div class="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-4 text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10"/><path d="M6 18h12"/><path d="M6 14h12"/><path d="M6 10V2"/><path d="M18 10V2"/><path d="M10 6h4"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">低工业渗透</h3>
            <p class="text-slate-600 text-sm mb-3">工业类 AI 企业仅占 12.3%，重资产制造欠缺。</p>
             <div class="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded inline-block">关键短板</div>
          </div>
        </div>

        <!-- Strengths vs Weaknesses Summary -->
         <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span class="w-2 h-8 bg-green-500 rounded mr-3"></span>
                关键优势 (长板)
              </h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-slate-900">中游平台实力</h4>
                    <p class="text-sm text-slate-600">阿里云、钉钉、蚂蚁提供世界级 PaaS 和模型能力，技术-平台一体化。</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-slate-900">应用场景丰富</h4>
                    <p class="text-sm text-slate-600">城市大脑、电商、安防（海康/大华）提供了完备的数据-算法-业务闭环。</p>
                  </div>
                </li>
                 <li class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-slate-900">算力成本优势</h4>
                    <p class="text-sm text-slate-600">依托智算中心与“算力成本洼地”政策，模型训练与调用成本具有竞争力。</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span class="w-2 h-8 bg-red-500 rounded mr-3"></span>
                核心短板 (劣势)
              </h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-slate-900">上游硬件薄弱</h4>
                    <p class="text-sm text-slate-600">缺乏全国级 GPU/芯片龙头，光通信与核心零部件制造链条偏离本地。</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-slate-900">工业底座偏薄</h4>
                    <p class="text-sm text-slate-600">重资产制造与流程工业基础不厚，“AI+工业”场景抓手有限。</p>
                  </div>
                </li>
                 <li class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-slate-900">硬科技深度不足</h4>
                    <p class="text-sm text-slate-600">相比北京，顶级原创算法与基础研究存在差距；开源社区影响力有待提升。</p>
                  </div>
                </li>
              </ul>
            </div>
         </div>
      </div>
    </section>
  `
})
export class OverviewStatsComponent {}