import { Component, signal } from '@angular/core';

type City = '北京' | '上海' | '深圳' | '杭州';

@Component({
  selector: 'app-city-comparison',
  standalone: true,
  template: `
    <section class="py-16 bg-slate-50 border-y border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-slate-900">区域对标</h2>
          <p class="mt-4 text-slate-600">杭州与国内主要 AI 高地的横向对比与错位竞争。</p>
        </div>

        <div class="flex justify-center mb-8 overflow-x-auto">
          <div class="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex">
            @for(city of cities; track city) {
              <button 
                (click)="activeCity.set(city)"
                [class]="activeCity() === city 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'"
                class="px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap">
                {{city}}
              </button>
            }
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden min-h-[400px]">
          <div class="grid md:grid-cols-2 h-full">
            <!-- Left: Stats/Tags -->
            <div class="p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-center">
              <h3 class="text-3xl font-bold mb-2">{{activeCity()}}</h3>
              <div class="text-blue-400 font-medium mb-6 text-lg">{{getSubtitle(activeCity())}}</div>
              
              <div class="space-y-6">
                <div>
                  <div class="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-2">核心优势</div>
                  <p class="text-lg leading-relaxed">{{getStrength(activeCity())}}</p>
                </div>
                
                <div>
                  <div class="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-2">杭州的启示</div>
                  <div class="p-4 rounded-lg bg-white/10 border border-white/10 text-white italic">
                    "{{getTakeaway(activeCity())}}"
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Details -->
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <h4 class="text-xl font-bold text-slate-900 mb-6">关键特征</h4>
              <ul class="space-y-4">
                @for(trait of getTraits(activeCity()); track trait) {
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-slate-700">{{trait}}</span>
                  </li>
                }
              </ul>
              
              @if (activeCity() === '杭州') {
                 <div class="mt-8 p-4 bg-blue-50 rounded-lg text-blue-800 text-sm">
                   <strong>自省：</strong> 擅长“0到1”的商业模式与产品化，但需补足“0到1”的原始科学创新能力。
                 </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CityComparisonComponent {
  cities: City[] = ['北京', '上海', '深圳', '杭州'];
  activeCity = signal<City>('杭州');

  getSubtitle(city: City): string {
    const map: Record<City, string> = {
      '北京': '创新策源地 & 基础科研',
      '上海': '工业底座 & 高端制造',
      '深圳': '硬件产业链 & 全球市场',
      '杭州': '数字经济 & 应用枢纽'
    };
    return map[city];
  }

  getStrength(city: City): string {
    const map: Record<City, string> = {
      '北京': '顶级高校院所集中，大模型数量多，算法框架强。形成了从“论文-平台-企业”的完整创新链条。',
      '上海': '拥有完备的制造业基础（汽车、集成电路）。AI 与工业互联网、芯片制造融合更深，具备“软硬结合”特征。',
      '深圳': '拥有完整的“硬件+终端+机器人”闭环。从芯片到整机到全球市场的供应链控制力极强。',
      '杭州': '“场景+应用”敏捷落地。依托阿里生态与安防双龙头，是“互联网+AI”商业模式的最佳试验场。'
    };
    return map[city];
  }

  getTakeaway(city: City): string {
    const map: Record<City, string> = {
      '北京': '学上游与基础。需加强原创研究与标准制定。',
      '上海': '学硬科技承载力。需扎根工业场景与流程制造。',
      '深圳': '学硬件链条与全球化。需打通出海与供应链。',
      '杭州': '巩固平台优势，发力具身智能。'
    };
    return map[city];
  }

  getTraits(city: City): string[] {
    const map: Record<City, string[]> = {
      '北京': [
        'AI 融资项目全国第一 (38/100)',
        '主打“科研+平台+生态”',
        '政务、医疗、自动驾驶场景丰富'
      ],
      '上海': [
        'AI 融资项目全国第二',
        '资本输出能力强 (80% 异地投)',
        '主打“工业+硬科技”'
      ],
      '深圳': [
        '本地国资参与度最高，小而精',
        '华为、腾讯、大疆、比亚迪坐镇',
        '聚焦具身智能与智能终端'
      ],
      '杭州': [
        '本地国资覆盖率极高 (90%)',
        '依赖阿里系与安防双龙头',
        '聚焦“服务+安防+终端”'
      ]
    };
    return map[city];
  }
}