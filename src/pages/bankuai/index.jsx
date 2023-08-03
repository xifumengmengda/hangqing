import React from 'react'
import Head from '../components/Head/index'
import styles from './index.less'

import classnames from 'classnames'

// import history from 'history/createBrowserHistory'

function BanKuai(props) {
    console.log(props.location.state.title)
    let title = '板块'
    if(props.location.state.title){
        title = props.location.state.title
    }
    // 模拟数据

    let showRightList = [];
    let showLeftList = [];
    for (let index = 0; index < 500; index++) {
        showLeftList.push(
            <div className={styles.leftName} key={index+"line"}>
                        <div className ={styles.name}>
                        东风汽车
                        </div>
                        <div className ={styles.code}>
                        000543
                        </div>
                    </div>
        );
        showRightList.push(
            <div className={styles.rightName} key={index+"list"}>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.red}`)}>
                            5.12%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.green}`)}>
                            0.55%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.black}`)}>
                            车辆工程
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.green}`)}>
                            0.22%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.red}`)}>
                            2.58%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.green}`)}>
                            0.87%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.black}`)}>
                            584.6亿
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.black}`)}>
                            1568.9万
                            </div>
                        </div>
                    </div>
        );

        
    }
    return(
        <div className = {styles.bankuaiContail}>
            <div className={styles.head}>
                <Head rightShow={false} 
                leftShow = {true}
                title={title}
                leftClick = {()=>{
                    props.history.goBack();
                }}
                />
            </div>
            <div className={styles.bodyContail}>
                
                <div className={styles.leftListStyle}>
                    <div className={styles.leftTitle}>
                        股票名字
                    </div>
                    {showLeftList}
                </div>

                <div className={styles.rightListStyle}>
                    <div className={styles.rightTitle}>
                        <div className={styles.title}>
                            <div className={styles.showtext}>
                            涨幅
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={styles.showtext}>
                            涨速
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={styles.showtext}>
                            领涨股
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={styles.showtext}>
                            五日涨幅
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={styles.showtext}>
                            最新
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={styles.showtext}>
                            换手
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={styles.showtext}>
                            金额
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={styles.showtext}>
                            总手
                            </div>
                        </div>
                    </div>
                    {showRightList}
                </div>

            </div>
            {/* 
            <div className={styles.tac}>
                <div className={styles.title}>
                    <div className={styles.leftName}>
                        股票名字
                    </div>
                    <div className={styles.rightList}>
                        <div className={styles.rightName}>
                            <div className={styles.fontshow}>
                                涨幅
                            </div>
                        </div>
                        <div className={styles.rightName}>
                            <div className={styles.fontshow}>
                                涨速
                            </div>
                        </div>
                        <div className={styles.rightName}>
                            <div className={styles.fontshow}>
                                领涨股
                            </div>
                        </div>
                        <div className={styles.rightName}>
                            <div className={styles.fontshow}>
                                五日涨幅
                            </div>
                        </div>
                        <div className={styles.rightName}>
                            <div className={styles.fontshow}>
                                最新
                            </div>
                        </div>
                        <div className={styles.rightName}>
                            <div className={styles.fontshow}>
                                换手
                            </div>
                        </div>
                        <div className={styles.rightName}>
                            <div className={styles.fontshow}>
                                金额
                            </div>
                        </div>
                        <div className={styles.rightName}>
                            <div className={styles.fontshow}>
                                总手
                                <div></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> 
            */}
        </div>
    )
}

export default BanKuai