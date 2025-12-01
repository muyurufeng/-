import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <header class="relative overflow-hidden bg-white border-b border-slate-200">
      <div class="absolute inset-0 bg-slate-50 opacity-50">
        <!-- Abstract background pattern -->
        <svg class="absolute right-0 top-0 h-full w-1/2 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="text-center">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
            2024-2025 产业分析报告
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            杭州人工智能产业 <br class="hidden sm:block" />
            <span class="gradient-text">生态画像</span>
          </h1>
          <p class="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed font-light">
            “中游算法与应用强、算力和数据基础扎实，但上游硬件与下游工业场景偏弱。”
          </p>
          <div class="mt-10 flex justify-center gap-4">
             <div class="flex items-center gap-2 text-sm text-slate-500">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span> 中游强劲
             </div>
             <div class="flex items-center gap-2 text-sm text-slate-500">
                <span class="w-2 h-2 rounded-full bg-amber-500"></span> 硬件偏弱
             </div>
             <div class="flex items-center gap-2 text-sm text-slate-500">
                <span class="w-2 h-2 rounded-full bg-green-500"></span> 应用驱动
             </div>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeroComponent {}