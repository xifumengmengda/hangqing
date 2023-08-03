import React from 'react'
import { LeftOutline } from 'antd-mobile-icons'

import styles from './index.less'
function Head(props) {
    const {rightShow = false,rightComponent=null,leftClick,leftShow=true,title=""} = props
    return(
        <div className = {styles.headContail}>
            <div className={styles.left} onClick={leftClick&&leftClick}>
                {
                    leftShow?<LeftOutline color="#fff" onClick={leftClick&&leftClick}/>:null
                }
                
            </div>
            <div className={styles.center}>
                {title}
            </div>
            <div className={styles.right}>
                {
                    rightShow?(rightComponent?rightComponent:null):null
                }
            </div>
            
            
        </div>
    )
}
export default Head