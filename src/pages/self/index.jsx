import React from 'react'
import Head from '../components/Head/index'
import styles from './index.less'
import { SearchOutline } from 'antd-mobile-icons';  // 加载 JS
import zhengu from "../../assets/zhengu.png"
import xinwen from "../../assets/xinwen.png"
import gonggao from "../../assets/gonggao.png"
import yanbao from "../../assets/yanbao.png"
import none from "../../assets/none.png"

import SelfList from './selfList'

import classnames from 'classnames'

function Self(props) {
    return(
        <div className = {styles.selfContail}>
            <div className={styles.head}>
                <Head rightShow={false} 
                leftShow = {false}
                title="自选"
                leftClick = {()=>{
                    // alert(99)
                    props.history.goBack();
                }}
                rightComponent = {<SearchOutline color="#fff" onClick={()=>{
                    props.history.push({ pathname : '/search',state:{ p: '6666666666'} })
                }}/>}
                />
            </div>
            <div className={styles.bodyContail}>
                <div className={styles.headTop}>
                    <div className={styles.headLeft}>
                        <div className={styles.top}>
                            <span className={classnames(`${styles.first} ${styles.red}`)}>沪</span>
                            <span className={styles.red}>2215.12</span>
                        </div>
                        <div className={styles.buttom}>
                            <span className={classnames(`${styles.first} ${styles.green}`)}>+22.33</span>
                            <span className={styles.green}>1.34%</span>
                        </div>
                    </div>

                    <div className={styles.headRight}>
                        <div className={styles.firstIcon}>
                            <img src={zhengu} alt="" className={styles.icon}/>
                            <div>
                                诊股
                            </div>
                        </div>
                        <div className={styles.firstIcon} 
                        onClick={()=>{
                            props.history.push({ pathname : '/news',state:{ p: '6666666666'} })
                        }}
                        >
                            <img src={xinwen} alt="" className={styles.icon}/>
                            <div>
                                新闻
                            </div>
                        </div>
                        <div className={styles.firstIcon}>
                            <img src={gonggao} alt="" className={styles.icon}/>
                            <div>
                                公告
                            </div>
                        </div>
                        <div className={styles.firstIcon}>
                            <img src={yanbao} alt="" className={styles.icon}/>
                            <div>
                                研报
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.cutline}>

                </div>

                {/* 底部显示列表 */}
                {
                    false?
                    <div className={styles.headButtom}>
                        <img src={none} alt="" className={styles.noneImg}/> 
                        <div className={styles.noneText}>
                            暂无股票 点击添加
                        </div>
                    </div>:
                    <SelfList />
                }
                

            </div>
            
        </div>
    )
}

export default Self