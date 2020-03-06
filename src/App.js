import React, { Suspense, useState  } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import predictData from './data/predictData'
import { PickerView, WhiteSpace,  } from 'antd-mobile';

import 'antd-mobile/lib/picker-view/style/css';  
import 'antd-mobile/lib/white-space/style/css';  

import './App.css'

dayjs.extend(relativeTime)

// const Map = React.lazy(() => import('./Map'))
const Predict = React.lazy(() => import('./Predict'))
const PredictMultiple = React.lazy(() => import('./PredictMultiple'))


function Header ({ province }) {
  return (
    <header>
    </header>
  )
}


function App () {

  const [sp, setSP] = useState(['全国'])

  const province = '湖北'
  const season = [
    {
      label: '全国',
      value: '全国',
      children: [
        {label:'新增确诊+新增出院',value:'新增确诊+新增出院'},
        {label:'新增确诊',value:'新增确诊'},
        {label:'现有确诊+现有疑似+现有重症',value:'现有确诊+现有疑似+现有重症'},
        {label:'现有确诊+累计出院+现有重症',value:'现有确诊+累计出院+现有重症'},
        {label:'累计确诊+累计出院+累计死亡',value:'累计确诊+累计出院+累计死亡'},
      ],
    },
    {
      label: '全国除湖北',
      value: '全国除湖北',
      children: [
        {label:'新增确诊+新增出院',value:'新增确诊+新增出院'},
        {label:'新增确诊',value:'新增确诊'},
        {label:'现有确诊+现有疑似+现有重症',value:'现有确诊+现有疑似+现有重症'},
        {label:'现有确诊+累计出院+现有重症',value:'现有确诊+累计出院+现有重症'},
        {label:'累计确诊+累计出院+累计死亡',value:'累计确诊+累计出院+累计死亡'},
      ],
    },
    {
      label: '湖北',
      value: '湖北',
      children: [
        {label:'新增确诊+新增出院',value:'新增确诊+新增出院'},
        {label:'新增确诊',value:'新增确诊'},
        {label:'现有确诊+现有疑似+现有重症',value:'现有确诊+现有疑似+现有重症'},
        {label:'现有确诊+累计出院+现有重症',value:'现有确诊+累计出院+现有重症'},
        {label:'累计确诊+累计出院+累计死亡',value:'累计确诊+累计出院+累计死亡'},
      ],
    },
    {
      label: '湖北除武汉',
      value: '湖北除武汉',
      children: [
        {label:'新增确诊+新增出院',value:'新增确诊+新增出院'},
        {label:'新增确诊',value:'新增确诊'},
        {label:'现有确诊+现有疑似+现有重症',value:'现有确诊+现有疑似+现有重症'},
        {label:'现有确诊+累计出院+现有重症',value:'现有确诊+累计出院+现有重症'},
        {label:'累计确诊+累计出院+累计死亡',value:'累计确诊+累计出院+累计死亡'},
      ],
    }
    ,
    {
      label: '武汉',
      value: '武汉',
      children: [
        {label:'新增确诊+新增出院',value:'新增确诊+新增出院'},
        {label:'新增确诊',value:'新增确诊'},
        {label:'现有确诊+现有疑似+现有重症',value:'现有确诊+现有疑似+现有重症'},
        {label:'现有确诊+累计出院+现有重症',value:'现有确诊+累计出院+现有重症'},
        {label:'累计确诊+累计出院+累计死亡',value:'累计确诊+累计出院+累计死亡'},
      ],
    }
  ];

  const dataselect = [
    {
      label: '全国', value: '全国',
    },
    {
      label: '全国除湖北', value: '全国除湖北',
    },
    {
      label: '湖北', value: '湖北',
    },
    {
      label: '湖北除武汉', value: '湖北除武汉',
    },
    {
      label: '武汉', value: '武汉',
    },
  ]

  const datasource = {
      '全国':  [
          '新增确诊',
          '新增确诊+新增出院',
          '现有确诊+现有疑似+现有重症',
          '现有确诊+累计出院+现有重症',
          '累计确诊+累计出院+累计死亡',
        ],
      '全国除湖北': [
          '新增确诊',
          '新增确诊+新增出院',
          '现有确诊+现有疑似+现有重症',
          '现有确诊+累计出院+现有重症',
          '累计确诊+累计出院+累计死亡',
        ],
      '湖北': [
          '新增确诊',
          '新增确诊+新增出院',
          '现有确诊+现有疑似+现有重症',
          '现有确诊+累计出院+现有重症',
          '累计确诊+累计出院+累计死亡',
        ],
      '湖北除武汉': [
          '新增确诊',
          '新增确诊+新增出院',
          '现有确诊+现有疑似+现有重症',
          '现有确诊+累计出院+现有重症',
          '累计确诊+累计出院+累计死亡',
        ],
      '武汉': [
          '新增确诊',
          '新增确诊+新增出院',
          '现有确诊+现有疑似+现有重症',
          '现有确诊+累计出院+现有重症',
          '累计确诊+累计出院+累计死亡',
        ],
      }

  return (
    <div>
      <Header province={province} />
      {/* 实时数据 */}
      <div className="card" id='Trends'>
      <PickerView
          data={dataselect}
          onChange={(v) => {console.log(v); setSP(v)}}
          value={sp}
          // cascade={false}
          cols={1}
      />
      </div>
      <div>
      {

datasource[sp].map((v) => 
 <div className="card" id='Trends' key={v}>
        <h2>{v}</h2>
        <WhiteSpace />
        <WhiteSpace />
        <div>
          <img src={require('./images/' + sp + '_' + v + '_02-14_03-29.png')}
                alt=""
              //  style={{ width: '100%', verticalAlign: 'top' }}
                style={{ width: '100%'}}
                onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                }}/>
        </div> 
        </div>

)
      
      }
      </div>
      
      {/* </div> */}
      
      {/* <div className="card" id='Trends'>
        <h2>湖北趋势</h2>
        <div>
          <img src={require('./images/hbp.png')}
                alt=""
              //  style={{ width: '100%', verticalAlign: 'top' }}
                style={{ width: '100%'}}
                onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                }}/>
        </div>
      </div>
      <div className="card" id='Trends'>
        <h2>全国趋势</h2>
        <div>
          <img src={require('./images/allp.png')}
                alt=""
              //  style={{ width: '100%', verticalAlign: 'top' }}
                style={{ width: '100%'}}
                onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                }}/>
        </div>
      </div> */}


      {/* 预测 */}
      {/* <div className="card" id='Trends'>
        <h2>武汉：新增确诊+新增治愈趋势预测</h2>
        <div>
          <img src={require('./images/wuhan.png')}
                alt=""
              //  style={{ width: '100%', verticalAlign: 'top' }}
                style={{ width: '100%'}}
                onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                }}/>
        </div>
        <div style={{border:'1px solid #000'}}>
            <p className="title">
              &nbsp;&nbsp;&nbsp;&nbsp;武汉治愈人数近期不断增加，显示了治愈能力不断提高，随着确诊人数的不断下降，治愈数量将于三月中旬趋于平缓。
            </p>
        </div>
      </div> */}
      {/* <div className="card" id='Trends'>
        <h2>武汉治愈趋势预测</h2>
        <div>
          <img src={require('./images/wuhan-c.png')}
                alt=""
              //  style={{ width: '100%', verticalAlign: 'top' }}
                style={{ width: '100%'}}
                onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                }}/>
        </div>
        <div style={{border:'1px solid #000'}}>
            <p className="title">
              &nbsp;&nbsp;&nbsp;&nbsp;武汉治愈人数近期不断增加，显示了治愈能力不断提高；随着确诊人数的不断下降，治愈数量将于三月中旬开始趋于平缓，四月初期进一步稳定。
            </p>
        </div>
      </div>
      <div className="card" id='Trends'>
        <h2>湖北（除武汉）治愈趋势预测</h2>
        <div>
          <img src={require('./images/hbewh.jpg')}
                alt=""
              //  style={{ width: '100%', verticalAlign: 'top' }}
                style={{ width: '100%'}}
                onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                }}/>
        </div>
        <div style={{border:'1px solid #000'}}>
            <p className="title">
              &nbsp;&nbsp;&nbsp;&nbsp;湖北（不包括武汉）的治愈人数随着确诊人数的不断下降，将于三月上旬趋于平缓，三月中旬进一步稳定。
            </p>
        </div>
      </div>
      <div className="card" id='Trends'>
        <h2>全国（除湖北）治愈趋势预测</h2>
        <div>
          <img src={require('./images/allehb.jpg')}
                alt=""
              //  style={{ width: '100%', verticalAlign: 'top' }}
                style={{ width: '100%'}}
                onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                }}/>
        </div>
        <div style={{border:'1px solid #000'}}>
            <p className="title">
              &nbsp;&nbsp;&nbsp;&nbsp;全国（不包括湖北）的治愈人数随着确诊人数的不断下降，将于三月上旬趋于平缓，三月中旬进一步稳定。
            </p>
        </div>
      </div>
      <div className="card" id='Trends'>
        <h2>全国治愈趋势预测</h2>
        <div>
          <img src={require('./images/all.jpg')}
                alt=""
              //  style={{ width: '100%', verticalAlign: 'top' }}
                style={{ width: '100%'}}
                onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                }}/>
        </div>
        <div style={{border:'1px solid #000'}}>
            <p className="title">
              &nbsp;&nbsp;&nbsp;&nbsp;全国的治愈人数随着确诊人数的不断下降，将于三月下旬开始趋于平缓，四月中旬进一步稳定。
            </p>
        </div>
      </div> */}
      <div className="card" id="Predict">
        {/* <h2> 确诊</h2> */}

        {/* <div height="500px">
          <Suspense fallback={<div className="loading">正在加载中...</div>}>
            <PredictMultiple data={{
              // "title": "确诊",
              "xAxis": predictData.confirmd_now_xAxis, 
              "yAxis": [
                {
                  "legend": "武汉上限", 
                  "type": "predict",
                  "data": predictData.confirmd_now_wuhan_predict_up,
                },
                // {
                //   "legend": "湖北上限", 
                //   "type": "predict",
                //   "data": predictData.confirmd_now_hubei_predict_up,
                // },
                // {
                //   "legend": "全国上限", 
                //   "type": "predict",
                //   "data": predictData.confirmd_now_all_predict_up,
                // },
                {
                  "legend": "武汉下限", 
                  "type": "predict",
                  "data": predictData.confirmd_now_wuhan_predict_down,
                },
                // {
                //   "legend": "湖北下限", 
                //   "type": "predict",
                //   "data": predictData.confirmd_now_hubei_predict_down,
                // },
                // {
                //   "legend": "全国下限", 
                //   "type": "predict",
                //   "data": predictData.confirmd_now_all_predict_down,
                // },
                {
                  "legend": "武汉", 
                  "type": "true",
                  "data": predictData.confirmd_now_wuhan,
                },
                // {
                //   "legend": "湖北", 
                //   "type": "true",
                //   "data": predictData.confirmd_now_hubei,
                // },
                // {
                //   "legend": "全国", 
                //   "type": "true",
                //   "data": predictData.confirmd_now_all,
                // },
                // {
                //   "legend": "湖北", 
                //   "type": "predict",
                //   "data": predictData.confirmd_hubei_predict,
                // },
                // {
                //   "legend": "湖北", 
                //   "type": "true",
                //   "data": predictData.confirmd_hubei,
                // },
                // {
                //   "legend": "全国", 
                //   "type": "predict",
                //   "data": predictData.confirmd_all_predict,
                // },
                // {
                //   "legend": "全国", 
                //   "type": "true",
                //   "data": predictData.confirmd_all,
                // },
              ]
              }}/>
          </Suspense>
        </div> */}
      </div>
      {/* <div className="card" id="Predict"></div>
        <h2> 疑似</h2>
        <div height="500px">
        <Suspense fallback={<div className="loading">正在加载中...</div>}>
          <PredictMultiple data={{
            // "title": "确诊",
            "xAxis": predictData.suspected_xAxis, 
            "yAxis": [
              {
                "legend": "武汉", 
                "type": "predict",
                "data": predictData.suspected_wuhan_predict,
              },
              {
                "legend": "武汉", 
                "type": "true",
                "data": predictData.suspected_wuhan,
              },
              {
                "legend": "湖北", 
                "type": "predict",
                "data": predictData.suspected_hubei_predict,
              },
              {
                "legend": "湖北", 
                "type": "true",
                "data": predictData.suspected_hubei,
              },
              {
                "legend": "全国", 
                "type": "predict",
                "data": predictData.suspected_all_predict,
              },
              {
                "legend": "全国", 
                "type": "true",
                "data": predictData.suspected_all,
              },
            ]
            }}/>
        </Suspense>
        </div>
        <h2> 治愈</h2>
        <div height="500px">
        <Suspense fallback={<div className="loading">正在加载中...</div>}>
          <PredictMultiple data={{
            // "title": "确诊",
            "xAxis": predictData.cured_xAxis, 
            "yAxis": [
              {
                "legend": "武汉", 
                "type": "predict",
                "data": predictData.cured_wuhan_predict,
              },
              {
                "legend": "武汉", 
                "type": "true",
                "data": predictData.cured_wuhan,
              },
              {
                "legend": "湖北", 
                "type": "predict",
                "data": predictData.cured_hubei_predict,
              },
              {
                "legend": "湖北", 
                "type": "true",
                "data": predictData.cured_hubei,
              },
              {
                "legend": "全国", 
                "type": "predict",
                "data": predictData.cured_all_predict,
              },
              {
                "legend": "全国", 
                "type": "true",
                "data": predictData.cured_all,
              },
            ]
            }}/>
        </Suspense>
        </div>
        <h2> 重症</h2>
        <div height="500px">
        <Suspense fallback={<div className="loading">正在加载中...</div>}>
          <PredictMultiple data={{
            // "title": "确诊",
            "xAxis": predictData.serious_xAxis, 
            "yAxis": [
              {
                "legend": "武汉", 
                "type": "predict",
                "data": predictData.serious_wuhan_predict,
              },
              {
                "legend": "武汉", 
                "type": "true",
                "data": predictData.serious_wuhan,
              },
              {
                "legend": "湖北", 
                "type": "predict",
                "data": predictData.serious_hubei_predict,
              },
              {
                "legend": "湖北", 
                "type": "true",
                "data": predictData.serious_hubei,
              },
              {
                "legend": "全国", 
                "type": "predict",
                "data": predictData.serious_all_predict,
              },
              {
                "legend": "全国", 
                "type": "true",
                "data": predictData.serious_all,
              },
            ]
            }}/>
        </Suspense>
        </div> */}
      {/* <NavFab/> */}
      {/* </div> */}
    </div>
  );
}

export default App;
