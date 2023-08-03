import React from 'react'
import styles from './index.less'

import classnames from 'classnames'

// import history from 'history/createBrowserHistory'

function SelfList(props) {
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
                            3432
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.green}`)}>
                            0.22%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.black}`)}>
                            0.22%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.green}`)}>
                            0.22%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.red}`)}>
                            34.52万
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.black}`)}>
                            0.22%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.red}`)}>
                            0.22%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.red}`)}>
                            3432
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.green}`)}>
                            3432
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.red}`)}>
                            3432
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.red}`)}>
                            3432
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.red}`)}>
                            3432
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.red}`)}>
                            3432
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.green}`)}>
                            0.22%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.green}`)}>
                            0.22%
                            </div>
                        </div>
                        <div className={styles.title}>
                            <div className={classnames(`${styles.showText} ${styles.black}`)}>
                            3234亿
                            </div>
                        </div>
                    </div>
        );

        
    }
    return(   
        <div className={styles.selfListContail}>
            
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
                        最新价
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        涨跌幅
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        涨跌
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        涨速
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        总手
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        换手
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        量比
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        现手
                        </div>
                    </div>

                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        昨收
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        开盘
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        最高
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        市盈(动)
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        市净率
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        委比
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        振幅
                        </div>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.showtext}>
                        总市值
                        </div>
                    </div>

                </div>
                {showRightList}
            </div>

        </div>
    )
}

export default SelfList