import * as charts from 'echarts';

export function echarts(node, geojson) {
	//const chart = charts.init(node); // use canvas to render
	const chart = charts.init(node, null, { renderer: 'svg' });
	//https://echarts.apache.org/examples/data/asset/geo/HK.json
	var option;

	chart.showLoading();
	chart.hideLoading();
	charts.registerMap('HK', geojson);
	chart.setOption(
		(option = {
			// title: {
			// 	text: 'Population Density of Hong Kong (2011)'
			// },
			tooltip: {
				trigger: 'item',
				formatter: '{b}<br/>{c} (p / km2)'
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				left: 'right',
				top: 'center',
				feature: {
					dataView: { readOnly: false },
					restore: {},
					saveAsImage: {}
				}
			},
			visualMap: {
				min: 800,
				max: 50000,
				text: ['High', 'Low'],
				realtime: false,
				calculable: true,
				inRange: {
					color: ['lightskyblue', 'yellow', 'orangered']
				}
			},
			series: [
				{
					name: '香港18区人口密度',
					type: 'map',
					map: 'HK',
					label: {
						show: true
					},
					data: [
						{ name: 'Central & Western', value: 20057.34 },
						{ name: 'Wan Chai', value: 15477.48 },
						{ name: 'Eastern', value: 31686.1 },
						{ name: 'Southern', value: 6992.6 },
						{ name: 'Yau Tsim Mong', value: 44045.49 },
						{ name: 'Sham Shui Po', value: 40689.64 },
						{ name: 'Kowloon City', value: 37659.78 },
						{ name: 'Wong Tai Sin', value: 45180.97 },
						{ name: 'Kwun Tong', value: 55204.26 },
						{ name: 'Kwai Tsing', value: 21900.9 },
						{ name: 'Tsuen Wan', value: 4918.26 },
						{ name: 'Tuen Mun', value: 5881.84 },
						{ name: 'Yuen Long', value: 4178.01 },
						{ name: 'North', value: 2227.92 },
						{ name: 'Tai Po', value: 2180.98 },
						{ name: 'Sha Tin', value: 9172.94 },
						{ name: 'Sai Kung', value: 3368 },
						{ name: 'Islands', value: 806.98 }
					]
				}
			]
		})
	);

	chart.setOption(option);
}
