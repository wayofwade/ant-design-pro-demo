/**
 * echart的例子
 */
 import React, { useEffect } from 'react'
 const echarts = require('echarts')

/*  require('echarts/lib/component/title')
 require('echarts/lib/component/tooltip')
 require('echarts/lib/component/legend')
 require('echarts/lib/chart/pie') */
 
 
 const SimplePie: React.FC = React.memo(
   () => {

     useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('main'));
        // 配置
        myChart.setOption({
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
          });
     }, [])

     return <div id="main" style={{ height: 230 }} />
   },
 )
 
 export default SimplePie
 