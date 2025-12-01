import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

declare var d3: any;

@Component({
  selector: 'app-investment-charts',
  standalone: true,
  template: `
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900">资本流向与项目分布</h2>
          <p class="mt-4 text-slate-600">
            2024-2025 投融资数据显示：北京是技术源头，杭州是关键的转化枢纽。
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Chart 1: Project Count -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900 mb-6">AI 融资 Top100 项目区域分布</h3>
            <div #projectChart class="w-full h-[300px]"></div>
            <div class="mt-4 text-sm text-slate-500 text-center">
              北京主导创新源头；杭州位列第三，转化能力强。
            </div>
          </div>

          <!-- Chart 2: Local Capital Support -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900 mb-6">本地国资参与率</h3>
            <div #capitalChart class="w-full h-[300px]"></div>
            <div class="mt-4 text-sm text-slate-500 text-center">
              杭州国资对本地项目支持力度极大 (90%)，政府战略介入深。
            </div>
          </div>
        </div>

        <!-- Key Insight Box -->
        <div class="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100 flex gap-4 items-start">
           <div class="p-2 bg-indigo-100 rounded-lg text-indigo-600">
             <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
           </div>
           <div>
             <h4 class="font-bold text-indigo-900">投资趋势：“转化枢纽”</h4>
             <p class="text-indigo-800 text-sm mt-1">
               杭州已成为长三角的 AI 转化枢纽。虽然北京是技术源头，但杭州凭借应用落地能力，吸引了上海、深圳、苏州的大量资本（异地投资活跃），将技术转化为商业成功。
             </p>
           </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class InvestmentChartsComponent implements AfterViewInit {
  @ViewChild('projectChart') projectChartRef!: ElementRef;
  @ViewChild('capitalChart') capitalChartRef!: ElementRef;

  ngAfterViewInit() {
    this.renderProjectChart();
    this.renderCapitalChart();
  }
  
  @HostListener('window:resize')
  onResize() {
    this.renderProjectChart();
    this.renderCapitalChart();
  }

  renderProjectChart() {
    if (typeof d3 === 'undefined') return;

    const element = this.projectChartRef.nativeElement;
    d3.select(element).selectAll('*').remove();

    const data = [
      { city: '北京', value: 38, color: '#94a3b8' },
      { city: '上海', value: 20, color: '#cbd5e1' },
      { city: '杭州', value: 10, color: '#3b82f6' }, // Highlight
      { city: '深圳', value: 7, color: '#cbd5e1' },
      { city: '苏州', value: 5, color: '#e2e8f0' }
    ];

    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = element.clientWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.3)
      .domain(data.map(d => d.city));

    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 40]);

    // Bars
    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => x(d.city))
      .attr('width', x.bandwidth())
      .attr('y', (d: any) => y(d.value))
      .attr('height', (d: any) => height - y(d.value))
      .attr('fill', (d: any) => d.color)
      .attr('rx', 4);

    // Labels
    svg.selectAll('.label')
      .data(data)
      .enter().append('text')
      .attr('x', (d: any) => x(d.city)! + x.bandwidth() / 2)
      .attr('y', (d: any) => y(d.value) - 5)
      .attr('text-anchor', 'middle')
      .text((d: any) => d.value)
      .style('font-size', '12px')
      .style('fill', '#475569');

    // Axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('fill', '#64748b');
      
    // Remove axis lines for cleaner look
    svg.selectAll('.domain').remove();
    svg.selectAll('line').remove();
  }

  renderCapitalChart() {
    if (typeof d3 === 'undefined') return;

    const element = this.capitalChartRef.nativeElement;
    d3.select(element).selectAll('*').remove();

    // Data from PDF Page 7
    const data = [
      { city: '南京/合肥', value: 100, color: '#cbd5e1' },
      { city: '杭州', value: 90.0, color: '#3b82f6' }, // Highlight
      { city: '深圳', value: 85.7, color: '#94a3b8' },
      { city: '北京', value: 65.8, color: '#cbd5e1' },
      { city: '上海', value: 60.0, color: '#e2e8f0' }
    ];

    const margin = { top: 20, right: 50, bottom: 20, left: 100 };
    const width = element.clientWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleBand()
      .range([0, height])
      .padding(0.3)
      .domain(data.map(d => d.city));

    const x = d3.scaleLinear()
      .range([0, width])
      .domain([0, 100]);

    // Bars
    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('y', (d: any) => y(d.city))
      .attr('height', y.bandwidth())
      .attr('x', 0)
      .attr('width', (d: any) => x(d.value))
      .attr('fill', (d: any) => d.color)
      .attr('rx', 4);

    // Labels inside or right of bar
    svg.selectAll('.label')
      .data(data)
      .enter().append('text')
      .attr('y', (d: any) => y(d.city)! + y.bandwidth() / 2 + 4)
      .attr('x', (d: any) => x(d.value) + 10)
      .text((d: any) => d.value + '%')
      .style('font-size', '12px')
      .style('fill', '#475569');

    // Axis
    svg.append('g')
      .call(d3.axisLeft(y).tickSize(0))
      .selectAll('text')
      .style('fill', '#475569')
      .style('font-size', '12px');
      
    svg.selectAll('.domain').remove();
  }
}