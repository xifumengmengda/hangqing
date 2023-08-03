import React,{useState,useEffect} from 'react'
import { Table , Input , Spin  } from "antd";
import localforage from "localforage";
import moment from 'moment'
// import {dataList , detailData , dataSource , mockCnList} from './mockData'
import { getLhbList , getStocksortDetail } from '../../api/pc'

import styles from './index.less'
function Template(props){

    const { inputDate } = props

    const [ source , setSource] = useState([])

    const [ loading , setLoading] = useState(true)

    const columns = [
        {
            title: '股票代码',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: '股票名字',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '当天涨幅',
            dataIndex: 'dangtianup',
            key: 'dangtianup',
        },
        {
            title: '当天收盘价',
            dataIndex: 'shoupanjia',
            key: 'shoupanjia',
        },
        {
            title: '第二天开盘价',
            dataIndex: 'diertianstartptice',
            key: 'diertianstartptice',
        },
        {
            title: '第二天开盘价涨幅',
            dataIndex: 'diertianstartpticepercent',
            key: 'diertianstartpticepercent',
            render:(text)=>{
                let style = geiStyle(text)
                return (
                    <div style={style}>
                        {text>0?`高开${text}`:text}
                    </div>
                )
            }
        },
        {
            title: '第二天收盘价',
            dataIndex: 'diertianendptice',
            key: 'diertianendptice',
        },
        {
            title: '第二天收盘价涨幅',
            dataIndex: 'diertianendpticepercent',
            key: 'diertianendpticepercent',
        },
        // {
        //     title: '上榜理由',
        //     dataIndex: 'shangbangreson',
        //     key: 'shangbangreson',
        // },
        // {
        //     title: '所属板块',
        //     dataIndex: 'suoshubankuai',
        //     key: 'suoshubankuai',
        // },

        {
            title: '第三天开盘价',
            dataIndex: 'disantianstartptice',
            key: 'disantianstartptice',
        },
        {
            title: '第三天开盘价相对第一天收盘价涨幅',
            dataIndex: 'disantianxiangduidiyitianshoupan',
            key: 'disantianxiangduidiyitianshoupan',
            render:(text)=>{
                let style = geiStyle(text)
                return (
                    <div style={style}>
                        {text}
                    </div>
                )
            }
        },
        {
            title: '第三天收盘价',
            dataIndex: 'disantianshoupanjia',
            key: 'disantianshoupanjia',
        },
        {
            title: '第三天收盘价相对第一天收盘价涨幅',
            dataIndex: 'disantianshoupanxiangdui',
            key: 'disantianshoupanxiangdui',
            render:(text)=>{
                let style = geiStyle(text)
                return (
                    <div style={style}>
                        {text}
                    </div>
                )
            }
        },
        {
            title: '实际收益',
            dataIndex: 'shijishouyi',
            key: 'shijishouyi',
            render:(text,record)=>{
                // 开盘卖出收益
                let start111 = parseFloat((record.disantianstartptice - record.diertianstartptice) / record.diertianstartptice).toFixed(4)
                let start222 = parseFloat((record.disantianshoupanjia - record.diertianstartptice) / record.diertianstartptice).toFixed(4)
                let style111 = geiStyle(start111)
                let style222 = geiStyle(start222)
                return (
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        开盘卖出收益
                        <div style={style111}>{parseFloat(start111*100).toFixed(2)}%</div>
                        收盘卖出收益
                        <div style={style222}>{parseFloat(start222*100).toFixed(2)}%</div>
                    </div>
                )
            }
        },
        {
            title: '机构/营业部名称',
            dataIndex: 'jgyyb',
            key: 'jgyyb',
            with:230,
            render:(text)=>{
                return (
                    <div className = {styles.yybtext} title={text}>
                        {text}
                    </div>
                )
            }
        },
    ];

    const geiStyle = (text)=>{
        let style = {
            color: "#000",
            fontSize: 12,
            fontWeight: 400
        }
        if(text > 0.1){ // 高于10个点收益
            style={
                color: "#ff0000",
                fontSize: 28,
                fontWeight: 800
            }
        }else if(text > 0.05){ // 高于5个点收益
            style={
                color: "#ff0000",
                fontSize: 20,
                fontWeight: 800
            }
        }else if(text > 0.02){ // 高于2个点收益
            style={
                color: "#cfa0a0",
                fontSize: 12,
                fontWeight: 800
            }
        }

        return style
    }
    useEffect(()=>{
        // 默认当前日期
        let now = moment().format("YYYY-MM-DD")
    },[])

    useEffect(()=>{
        if(inputDate.length === 10){
            setTimeout(() => {
                getListObj()
            }, parseInt(Math.random()*50)); // 做一个异步加载
            
        }
        
    },[inputDate])

    const getListObj = async ()=>{
        
        // 网络获取龙虎榜股票数据
        let params1 = {date:inputDate} 
        let resList = await getLhbList(params1)

        // 首先遍历出所有的龙虎榜股票代码以及名字列表
        let nameandcodelist = []
        let datalonghulist = resList?.data?.all || []
        console.log("获取的龙虎榜数据",resList);
        let jg = resList?.data?.jg || [] // 机构
        let yyb = resList?.data?.yyb || [] // 营业部
        datalonghulist.forEach(iii=>{
            if(Array.isArray(iii) && iii.length === 8){
                nameandcodelist.push({code:iii[0],name:iii[1]}) // 此刻code是sh或者sz开头的
            }
        })

        
        let handCodelist = nameandcodelist.map(ddd=> `cn_${ddd.code.substring(2)}`) // 批量处理code去掉原本的前缀 然后再加上处理后请求接口的前缀

        // 接口10个10个一起请求不会报错
        // 处理请求的代码格式
        let strArrayCode = handCodelist.join(",")
        // 处理日期格式 第二天以及第三天
        let diertianFormat = addDays(inputDate)
        let disantianFormat = addDays(diertianFormat)

        // 开始时间 inputDate  结束时间disantianFormat
        let reqArray = []
        handCodelist.forEach(qqq=>{
            let ppppp = {
                code:qqq,
                start:moment(inputDate).format("YYYYMMDD"),
                end:disantianFormat,
            }
            reqArray.push(getStocksortDetail(ppppp))
        })
        Promise.all(reqArray).then(resArray=>{
            let arraySource =[]
            console.log("获取的详情数据",resArray);
            resArray.forEach((llll,soutIndex)=>{
                let dasdasd = llll[0] // 单个请求取第一个
                let single = { // 最终组装的数据
                    code: '',
                    name: "",
                    shoupanjia: 0,
                    jgyyb:"",
                    dangtiandate:"",
                    dangtianup:0,
                    diertianstartptice:0,
                    diertianstartpticepercent:0,
                    diertianendptice:0,
                    diertianendpticepercent:0,
                    shangbangreson:"",
                    suoshubankuai:"",
                    disantianstartptice:0,
                    disantianxiangduidiyitianshoupan:0,
                    disantianshoupanjia:0,
                    disantianshoupanxiangdui:0
                }
                single.name = nameandcodelist[soutIndex].name
                single.code = nameandcodelist[soutIndex].code

                single.shangbangreson = '上榜理由...'
                single.suoshubankuai = '所属板块...'
                
                if(dasdasd && dasdasd.status === 0){// 说明请求成功
                    let hq = dasdasd.hq || []
                    if(hq.length === 3){
                        single.shoupanjia = hq[2][2] // 取第一天的收盘价
                        single.dangtiandate = hq[2][0]// 取第一天的时间
                        single.dangtianup =  hq[2][4]// 取第一天的涨幅

                        single.diertianstartptice =  hq[1][1]// 取第二天开盘价
                        single.diertianstartpticepercent = ( (parseFloat(hq[1][1]) - parseFloat(hq[2][2])) / parseFloat(hq[2][2]) ).toFixed(4)
                        single.diertianendptice = hq[1][2]
                        single.diertianendpticepercent = ( (parseFloat(hq[1][2]) - parseFloat(hq[2][2])) / parseFloat(hq[2][2]) ).toFixed(4)
                        
                        single.disantianstartptice = hq[0][1]
                        single.disantianxiangduidiyitianshoupan = ( (parseFloat(hq[0][1]) - parseFloat(hq[2][2])) / parseFloat(hq[2][2]) ).toFixed(4)
                        
                        single.disantianshoupanjia = hq[0][2]
                        single.disantianshoupanxiangdui = ( (parseFloat(hq[0][2]) - parseFloat(hq[2][2])) / parseFloat(hq[2][2]) ).toFixed(4)
                    }
                    
                
                }
                if(single.disantianxiangduidiyitianshoupan > 0 && single.disantianshoupanxiangdui > 0){ // 排查出整收益
                    // 筛选实际收益
                    let start111 = parseFloat((single.disantianstartptice - single.diertianstartptice) / single.diertianstartptice).toFixed(4)
                    let start222 = parseFloat((single.disantianshoupanjia - single.diertianstartptice) / single.diertianstartptice).toFixed(4)
                    if(start111 > 0.02 || start222 > 0.02){
                        // 这儿处理机构信息最优

                        // 遍历机构或者营业部
                        let dartList = []
                        jg.forEach(dddd=>{
                            if(dddd.length ===9 && dddd[0] === single.code){ // 说明是满足的机构
                                dartList.push("机构专用席位")
                            }
                        })
                        yyb.forEach(dddd=>{
                            if(dddd.length ===5 && dddd[2] && dddd[2].indexOf(single.code) > -1 ){ // 说明是满足的营业部
                                dartList.push(dddd[1])
                            }
                        })
                        single.jgyyb = dartList.join(",")

                        arraySource.push(single)
                    }
                    
                }
                
            })

            // 遍历出当天所有上榜的机构存储起来
            let emJg = arraySource.map(oooo=>oooo.jgyyb)
            localforage.setItem(inputDate,{jgyyb:emJg.join(",")})
            
            setSource(arraySource)
            setLoading(false)
        })

    }

    const addDays = str =>{
        let date = moment(str);
        while (true) {
            date = date.add(1,"d"); // 循环加1  直到不是星期天或者星期六
            let dddddd =date.day()
            if(dddddd !== 0 && dddddd !== 6){
                break
            }
        }
        // console.log(date.format("YYYYMMDD"),"是星期",date.day());
        return date.format("YYYYMMDD")
    }
    
    return(
        <div className = {styles.sigleData}>
            <div className = {styles.longhubangtitle}>
                龙虎榜日期{ source[0]?.dangtiandate || inputDate}
            </div>
            <Spin tip="数据处理中..." spinning={loading}>
                <Table dataSource={source} columns={columns} pagination={false}/>
            </Spin>
            
        </div>
    )
}

export default Template;