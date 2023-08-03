import React from 'react'
import styles from './index.less'
function Single(props) {
    let {price,data={}} = props
    if(price > 0){
        data = {name:"工商银行",num:"1.34%",mudle:"金融行业"}
    }else{
        data = {name:"汽车整车",num:"-51.34%",mudle:"金龙汽车"}
    }
    return(
        <div className={styles.single}>
            <div className={styles.title}>
                {data.name}
            </div>
            <div className={price>0?styles.redText:styles.greenText}>
                {data.num}
            </div>
            <div className={styles.mudle}>
                {data.mudle}
            </div>
        </div>
    )
}
export default Single