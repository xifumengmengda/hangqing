import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { SearchOutline } from 'antd-mobile-icons';  // 加载 JS
import classnames from 'classnames'
import Head from '../components/Head/index'
import Main from '../components/Template/Main'
import Single from '../components/Template/Single'
import ListRow from '../components/Template/ListRow'

import {alltabrankTopzdf} from '../../api/home'


import styles from './index.less'
function Home(props){
    const [type,setType] = useState("up")
    const changTypeList=(type)=>{
        setType(type)
    }
    useEffect(()=>{
        // let params = {type:"zdf",order:"top",data:"9999"}
        // alltabrankTopzdf(params).then((res)=>{
        //     console.log(res);
        // })
    },[])
    return(
        <div className = {styles.homeContail}>
            <div className={styles.head}>
                <Head rightShow={false} 
                title={"行情"}
                leftShow = {true}
                leftClick = {()=>{
                    // alert(99)
                }}
                rightComponent = {<SearchOutline color="#fff"/>}/>
            </div>
            
            <div className={styles.contail}>
                <div className={styles.cmain}>
                    <Main price = {1}/>
                    <Main price = {-11}/>
                    <Main price = {1}/>
                    <Main price = {-11}/>
                    <Main price = {1}/>
                    <Main price = {-11}/>
                </div>
                
            </div>

            {/* 分割线 */}
            <div className={styles.cutline}>
                    
            </div>

            {/* 行业板块 */}
            <div className = {styles.hangyebankuai}>
                <div className={styles.rowtitle}>
                    <div className={styles.left}>
                        行业板块
                    </div>
                    <div className={styles.right} onClick={()=>{
                        // props.location.query.aa
                        // props.history.push({ pathname : '/bankuai',query:{ aa: '66666'} })
                        // 加密传参 props.location.state.aa
                        props.history.push({ pathname : '/bankuai',state:{ title: '行业板块'} }) 
                    }}>
                        更多<SearchOutline type="right" color="#333" size="xs"/>
                    </div>
                </div>
                <div className={styles.csingle}>
                    <Single price = {1}/>
                    <Single price = {-1}/>
                    <Single price = {1}/>
                </div>
                <div className={styles.csingle}>
                    <Single price = {1}/>
                    <Single price = {-1}/>
                    <Single price = {1}/>
                </div>
            </div>

            {/* 分割线 */}
            <div className={styles.cutline}>
                    
            </div>

            {/* 概念板块 */}
            <div className = {styles.hangyebankuai}>
                <div className={styles.rowtitle}>
                    <div className={styles.left}>
                    概念板块
                    </div>
                    <div className={styles.right} onClick={()=>{
                        // props.location.query.aa
                        // props.history.push({ pathname : '/bankuai',query:{ aa: '66666'} })
                        // 加密传参 props.location.state.aa
                        props.history.push({ pathname : '/bankuai',state:{ title: '概念板块'} }) 
                    }}>
                        更多<SearchOutline type="right" color="#333" size="xs"/>
                    </div>
                </div>
                <div className={styles.csingle}>
                    <Single price = {1}/>
                    <Single price = {-1}/>
                    <Single price = {1}/>
                </div>
                <div className={styles.csingle}>
                    <Single price = {1}/>
                    <Single price = {-1}/>
                    <Single price = {1}/>
                </div>
            </div>

            {/* 分割线 */}
            <div className={styles.cutline}>
                    
            </div>

            {/* 热门榜单 */}
            <div className={styles.rowtitle}>
                <div className={styles.left}>
                热门榜单
                </div>
                <div className={styles.right}>
                </div>
            </div>

            <div className={styles.btnRow}>
                <div className={type==="up"?styles.btnStyleChoose:styles.btnStyleNone} onClick={()=>{changTypeList('up')}}>
                    涨幅榜
                </div>
                <div className={type==="down"?styles.btnStyleChoose:styles.btnStyleNone} onClick={()=>{changTypeList('down')}}>
                    跌幅榜
                </div>
                <div className={type==="kuaisu"?styles.btnStyleChoose:styles.btnStyleNone} onClick={()=>{changTypeList('kuaisu')}}>
                    快速涨幅
                </div>
                <div className={type==="chengjiaoe"?styles.btnStyleChoose:styles.btnStyleNone} onClick={()=>{changTypeList('chengjiaoe')}}>
                    成交额
                </div>
            </div>

            <div className={styles.rowTitleBangDan}>
                <div className={styles.leftText}>
                    股票名称
                </div>
                <div className={styles.centerText}>
                    最新价
                </div>
                <div className={styles.rightText}>
                    涨幅
                </div>
            </div>

            <div className={styles.list}>
                <ListRow price = {1} type={type}/>
                <ListRow price = {-1} type={type}/>
                <ListRow price = {-1} type={type}/>
                <ListRow price = {1} type={type}/>
            </div>
            
        </div>
    )
}

export default Home;