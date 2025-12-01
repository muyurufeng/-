import { Component } from '@angular/core';
import { HeroComponent } from './components/hero.component';
import { OverviewStatsComponent } from './components/overview-stats.component';
import { CityComparisonComponent } from './components/city-comparison.component';
import { InvestmentChartsComponent } from './components/investment-chart.component';
import { StrategyRoadmapComponent } from './components/strategy-roadmap.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    OverviewStatsComponent,
    CityComparisonComponent,
    InvestmentChartsComponent,
    StrategyRoadmapComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-hero />
      
      <main class="flex-grow">
        <app-overview-stats />
        <app-city-comparison />
        <app-investment-charts />
        <app-strategy-roadmap />
      </main>

      <footer class="bg-slate-50 border-t border-slate-200 py-12">
        <div class="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2025 杭州人工智能产业分析报告可视化。</p>
          <p class="mt-2">数据来源：公开投融资与企业分析（2024-2025）</p>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {}