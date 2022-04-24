import * as charts from 'echarts';

export function echarts(node, { option, onUpdateAxisPointer = null }) {
	// const chart = charts.init(node);   // use canvas to render
	const chart = charts.init(node, null, { renderer: 'svg' });
	if (onUpdateAxisPointer) {
		chart.on('updateAxisPointer', onUpdateAxisPointer);
	}
	chart.setOption(option);
}
