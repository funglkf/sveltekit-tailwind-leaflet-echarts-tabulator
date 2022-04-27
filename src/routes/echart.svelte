<script>
	import { echarts } from '$lib/echarts';

	const option = {
		legend: {},
		tooltip: {
			trigger: 'axis',
			showContent: false
		},
		dataset: {
			source: [
				['product', '2012', '2013', '2014', '2015', '2016', '2017'],
				['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
				['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
				['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
				['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
			]
		},
		xAxis: { type: 'category' },
		yAxis: { gridIndex: 0 },
		grid: { top: '10%', left: '10%', right: '40%' },
		series: [
			{
				type: 'line',
				smooth: true,
				seriesLayoutBy: 'row',
				emphasis: { focus: 'series' }
			},
			{
				type: 'line',
				smooth: true,
				seriesLayoutBy: 'row',
				emphasis: { focus: 'series' }
			},
			{
				type: 'line',
				smooth: true,
				seriesLayoutBy: 'row',
				emphasis: { focus: 'series' }
			},
			{
				type: 'line',
				smooth: true,
				seriesLayoutBy: 'row',
				emphasis: { focus: 'series' }
			},
			{
				type: 'pie',
				id: 'pie',
				radius: '20%',
				center: ['75%', '40%'],
				emphasis: {
					focus: 'self'
				},
				label: {
					formatter: '{b}:\n {@2012}'
				},
				encode: {
					itemName: 'product',
					value: '2012',
					tooltip: '2012'
				}
			}
		]
	};

	function updateAxisPointer(event) {
		const xAxisInfo = event.axesInfo[0];
		if (xAxisInfo) {
			const dimension = xAxisInfo.value + 1;
			this.setOption({
				series: {
					id: 'pie',
					label: {
						formatter: '{b}:\n {@[' + dimension + ']}'
					},
					encode: {
						value: dimension,
						tooltip: dimension
					}
				}
			});
		}
	}
</script>

<h1 class="px-6 text-lg font-semibold">I am title</h1>
<div
	class="w-full h-noHeader-noFooter-noTitle"
	use:echarts={{ option: option, onUpdateAxisPointer: updateAxisPointer }}
/>
