import React, { useState, useEffect } from 'react'
import { Table, Input } from "antd";
import moment from 'moment'
import { dataList, detailData, dataSource } from './mockData'
import { getLhbList } from '../../api/pc'

import { columns , yuceshuju } from './option'

import Template from './template'
import localforage from "localforage";

import styles from './index.less'

function Pc(props) {
    const [inputDate, setInputDate] = useState("")
    const [hisDate, setHisDate] = useState("")
    const [timeList, setTimeList] = useState([])
    const [moremengt, setMoremengt] = useState([])

    const [chooseList, setChooseList] = useState([])
    useEffect(() => {
        // 默认5天前日期
        // let now = moment().subtract(15, "d").format("YYYY-MM-DD")
        // setInputDate(now)
        getLocal()

    }, [])

    useEffect(() => {
        if (inputDate.length === 10) {
            // 计算时间列表
            addDays(inputDate)
        }

    }, [inputDate])

    useEffect(() => {
        if (hisDate.length === 10) {
            getList()
        }

    }, [hisDate])

    const getList = async()=>{
        let params1 = {date:hisDate} 
        let resList = await getLhbList(params1)
        let jg = resList?.data?.jg || [] // 机构
        let yyb = resList?.data?.yyb || [] // 营业部

        let arrayList = []
        jg.forEach(dddd=>{
            let single = {
                name:"",
                code:"",
                part:"",
                depat:"",
            }
            if(dddd.length ===9){
                single.name = dddd[1]
                single.code = dddd[0]
                single.part = dddd[3]
                single.depat = "机构专用席位"
                arrayList.push(single)
            }
        })
        yyb.forEach(dddd=>{
            let colsi = arrayList.map(rrrrrrrrr=>rrrrrrrrr.code)
            if(dddd.length ===5 && dddd[2] && colsi.indexOf(dddd[2]) >-1 ){ // 说明机构榜包含或者已经处理过了
                arrayList.forEach(ggggg=>{
                    if(ggggg.code === dddd[2]){
                        ggggg.depat = ggggg.depat+","+dddd[1] //更新营业部字段
                    }
                })
            }else{ // 说明没有包含
                let single = {
                    name:dddd[3],
                    code:dddd[2],
                    part:"",
                    depat:dddd[1],
                }
                arrayList.push(single)
            }
        })
        // 筛选出前面的那些机构或者营业部
        let aaaaa = arrayList.filter(hhhh=>{
            if(!hhhh.code){
                return false
            }else if(
                hhhh?.depat?.indexOf("中国国际金融") > -1 || hhhh?.depat?.indexOf("华泰证券") > -1 ||
                hhhh?.depat?.indexOf("东方财富证券拉萨") > -1 || hhhh?.depat?.indexOf("华鑫证券") > -1 ||
                hhhh?.depat?.indexOf("深股通") > -1 || hhhh?.depat?.indexOf("招商证券交易单元") > -1 ||
                hhhh?.depat?.indexOf("开源证券") > -1 || hhhh?.depat?.indexOf("中信证券") > -1 ||
                hhhh?.depat?.indexOf("中国银河证券") > -1 || hhhh?.depat?.indexOf("摩根大通证券") > -1 ||
                hhhh?.depat?.indexOf("光大证券") > -1 || hhhh?.depat?.indexOf("沪股通") > -1 ||
                hhhh?.depat?.indexOf("财通证券") > -1 || hhhh?.depat?.indexOf("东亚前海") > -1 ||
                hhhh?.depat?.indexOf("国盛证券") > -1 || hhhh?.depat?.indexOf("国泰君安") > -1
            ){
                return true
            }
            return false
        })
        console.log("得到的列表",aaaaa);
        setChooseList(aaaaa)

    }

    const getLocal = async () => {
        let now = moment().subtract(30, "d").format("YYYY-MM-DD")
        let date = moment(now);
        let list = []

        while (true) {
            date = date.add(1, "d"); // 循环加1  排除星期天以及星期六
            let dddddd = date.day()
            if (date.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")) {
                // console.log("计算的时间列表", list);
                getDDDDD(list)
                return
            }
            if (dddddd !== 0 && dddddd !== 6) {
                list.push(date.format("YYYY-MM-DD"))
            }
        }
    }

    const getDDDDD = async (list) => {
        let jglistPromise = []
        let jglist = []

        list.forEach(eee => {
            jglistPromise.push(localforage.getItem(eee))
        })
        Promise.all(jglistPromise).then(res => {
            // console.log(res);
            res.forEach(dsadsad => {
                if (dsadsad && dsadsad.jgyyb) {
                    jglist.push(dsadsad.jgyyb)
                }
            })
            let arr = jglist.join().split(',')
            // console.log(arr);

            // 第一种统计方法
            /** 
            let b = {};
            const reduce = (arr, fn, initial) => {
                return (function reduceOne(index, value) {
                    if (index > arr.length - 1) return value;
                    return reduceOne(index + 1, fn(value, arr[index], index, arr));
                })(0, initial);
            }
            let tatal = reduce(arr, function(s, s1, idx) {
                s[s1] = (s[s1] + 1) || 1;
                return s;
                }, b);
            console.log(tatal);
            */

            function getCount(arr) {
                var obj = {},
                    k, arr1 = [];
                for (var i = 0, len = arr.length; i < len; i++) {
                    k = arr[i];
                    if (obj[k])
                        obj[k]++;
                    else
                        obj[k] = 1;
                }
                console.log(obj)
                //保存结果{el-'元素',count-出现次数}
                for (var o in obj) {
                    if(o){
                        arr1.push({
                            el: o,
                            count: obj[o]
                        });
                    }
                    
                }
                setMoremengt(arr1.sort((a,b)=>{return b.count - a.count}))
            }
        
            getCount(arr)

        })
    }

    

    const addDays = str => {
        let date = moment(str);
        let list = []
        while (true) {
            date = date.add(1, "d"); // 循环加1  排除星期天以及星期六
            let dddddd = date.day()
            if (date.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")) {
                setTimeList(list)
                console.log("计算时间...", list);
                return
            }
            if (dddddd !== 0 && dddddd !== 6) {
                list.push(date.format("YYYY-MM-DD"))
            }


        }
    }
    return (
        <div className={styles.pcContail}>
            <div style={{ display:"flex" , alignItems: "center" }}>
                <span>查看人气龙虎榜</span>
                <Input
                    placeholder="输入2022-07-22格式"
                    onChange={(e) => {
                        setInputDate(e?.target?.value)
                    }}
                />
                <span style={{ marginLeft:20 }}>查看指定日期龙虎榜</span>
                <Input
                    placeholder="输入2022-07-22格式"
                    onChange={(e) => {
                        setHisDate(e?.target?.value)
                    }}
                />
            </div>
            
            {/* 
            {
                timeList.map((i,index)=>{
                    return <Template inputDate={i} key={index}/>
                })
            } 
            */}
            <Template inputDate={inputDate} />
            <div style={{ display:"flex" }}>
                <Table dataSource={moremengt} columns={columns} pagination={false}/>
                <div style={{ marginLeft:20 , borderLeft: "1px solid", paddingLeft: 10 }}>
                    <Table dataSource={chooseList} columns={yuceshuju} pagination={false}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Pc;