import { Component } from '@angular/core';

@Component({
  selector: 'app-strategy-roadmap',
  standalone: true,
  template: `
    <section class="py-16 bg-slate-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold">战略路线图：“强链补链”</h2>
          <p class="mt-4 text-slate-400 max-w-2xl mx-auto">
            未来方向（未来3-5年）：从单纯的应用堆叠走向硬件、开源、具身智能的系统性布局。
          </p>
        </div>

        <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          
          <!-- Step 1: Upstream -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-blue-500 font-bold">1</div>
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800 border border-slate-700 shadow-xl">
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-bold text-lg text-blue-400">上游：硬科技补短</h3>
                <span class="text-xs font-mono text-slate-500">目标：算力与关键器件</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                利用“算力成本洼地”政策，吸引 GPU/NPU 设计企业。
                鼓励本地智算中心优先采用国产芯片方案，倒逼生态优化。
                打造杭州版“软硬一体”基础设施。
              </p>
            </div>
          </div>

          <!-- Step 2: Midstream -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-emerald-500 font-bold">2</div>
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800 border border-slate-700 shadow-xl">
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-bold text-lg text-emerald-400">中游：开源生态</h3>
                <span class="text-xs font-mono text-slate-500">目标：开发者心智</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                鼓励阿里/蚂蚁/中控开放内部成熟框架。
                奖励本地团队参与算子库、编译器等基础工具开源。
                在开发者心中确立“杭州/杭系框架”的底层选项地位。
              </p>
            </div>
          </div>

          <!-- Step 3: Downstream -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-purple-500 font-bold">3</div>
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800 border border-slate-700 shadow-xl">
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-bold text-lg text-purple-400">下游：具身智能</h3>
                <span class="text-xs font-mono text-slate-500">目标：机器人与工业</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                把宇树、Rokid、零跑等“星星”连成“星系”。
                建立人形机器人测试区与“AI 工业样板间”。
                为具身智能大模型提供真实的工业场景数据与试错场地。
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class StrategyRoadmapComponent {}