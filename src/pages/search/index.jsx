import React from 'react'
import styles from './index.less'

import { SearchOutline } from 'antd-mobile-icons';  // 加载 JS

function Search(props){
    let showList = []
    for (let index = 0; index < 50; index++) {
        showList.push(
            <div className={styles.historySingle}>
                <div className={styles.left}>
                    <div className={styles.name}>
                        贝通信
                    </div>
                    <div className={styles.code}>
                        600111
                    </div>
                </div>
                <div className={styles.right}>
                    <span className={styles.spanFloat}> {index % 2 === 0 ? "+":"-"}</span>
                </div>
            </div>
        )
    }
    return(
        <div className={styles.searchBody}>
            <div className={styles.headTop }>
                <div className={styles.inputStyle }>
                    <span className={styles.icon}>
                    <SearchOutline size="xs" color="#283039"/>
                    </span>
                    
                    <input 
                        onChange={(e)=>{
                            console.log(e.target.value);
                        }}
                        style={{
                            background: '#FAF9FB',
                            width:'600px',
                            height:'60px',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            color:'#283039',
                            border:0,
                        }}
                        placeholder="请输入股票代码/简拼"
                    />
                </div>
                <div className={styles.cancel } onClick={()=>{
                    props.history.goBack();
                }}>
                    取消
                </div>
            </div>

            <div className={styles.cutline1}>

            </div>

            <div>
                <div className={styles.remengegu}>
                    <div className={styles.title}>
                        热门个股
                    </div>

                    <div className={styles.single}>
                        <div className={styles.data}>
                            贝通信
                        </div>
                        <div className={styles.data}>
                            贝通信
                        </div>
                        <div className={styles.data}>
                            贝通信
                        </div>
                        <div className={styles.data}>
                            贝通信
                        </div>
                        <div className={styles.data}>
                            贝通信
                        </div>
                        <div className={styles.data}>
                            贝通信
                        </div>
                        <div className={styles.data}>
                            贝通信
                        </div>
                        <div className={styles.data}>
                            贝通信
                        </div>
                        <div className={styles.data}>
                            贝通信
                        </div>
                        <div className={styles.data}>
                            贝通信
                        </div>
                    </div>
                </div>

                <div className={styles.cutline}>

                </div>

                <div className={styles.lishisousuo}>
                    <div className={styles.title}>
                        历史搜索
                    </div>
                </div>

                <div className={styles.historyList}>
                    <div className={styles.historySingle}>
                        <div className={styles.left}>
                            <div className={styles.name}>
                                贝通信
                            </div>
                            <div className={styles.code}>
                                600111
                            </div>
                        </div>
                        <div className={styles.right}>
                            <span className={styles.spanFloat}>+</span>
                        </div>
                    </div>
                    {showList}
                </div>

                <div className={styles.buttomText}>
                    清空历史搜索记录
                </div>
            </div>
        </div>
    )
}

export default Search;