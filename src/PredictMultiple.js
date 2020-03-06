import React, { useEffect, useState } from 'react'
import ReactEcharts from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'

// import 'echarts/lib/chart/map'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'

function PredictMultiple ({ data }) {

  const [line, setLine] = useState([])
  const [Datalegend, setDataLegend] = useState([])
  
  useEffect(() => {
    var tmp = [];
    var tmpl = [];
    data.yAxis.map(n => {
      tmpl.push(n.legend)
      if(n.type == 'predict'){
        tmp.push({
            name: n.legend,
            type: 'line',
            smooth: true,
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    },
                    label : {show: true}
                }
            }, 
            data: n.data,
        })
      }else{
        tmp.push({
            name: n.legend,
            type: 'line',
            smooth: true,
            data: n.data,
            itemStyle : { normal: {label : {show: true}}}
        })
      }
      setLine(tmp)
      setDataLegend(tmpl)
    })
  }, [])
  
  const getOption = () => {
    return {
      // color: colors,

      // tooltip: {
      //     trigger: 'none',
      //     axisPointer: {
      //         type: 'cross'
      //     }
      // },
      // title: {
      //   left: 'center',
      //   text: data.title,
      // },
      legend: {
          data: Datalegend,
          bottom: 0
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
      },
      grid: {
          top: 30,
          bottom: "16%"
      },
      xAxis: [
          {
              type: 'category',
              axisTick: {
                  alignWithLabel: true
              },
              axisLine: {
                  onZero: false,
                  lineStyle: {
                      // color: colors[1]
                  }
              },
              axisLabel: {
                show: true,
                 textStyle: {
                   fontSize : 15      //更改坐标轴文字大小
                 },
                //  interval: 0,
                 rotate: 60,
              },
              data: data.xAxis
          }
      ],
      yAxis: [
          {
              type: 'value',
              axisLabel: {
                show: true,
                 textStyle: {
                   fontSize : 15      //更改坐标轴文字大小
                 }
              },
          }
      ],
      series: line
    }
  }
  return (
    <ReactEcharts
      echarts={echarts}
      option={getOption()}
      lazyUpdate={true}
      onEvents={{
        click (e) {
          // onClick(e.name)
        }
      }}
      style={{height: "700px"}}
    />
  )
}

export default PredictMultiple
