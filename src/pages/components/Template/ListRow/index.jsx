import React from 'react'
import styles from './index.less'
function ListRow(props) {
    let {price,data={},type=""} = props
    let numrad = parseFloat(Math.random() * 100).toFixed(2)

    let numradddddd = parseFloat(Math.random() * 100).toFixed(2)
    if(numradddddd < 50){
        numradddddd = "-" + numradddddd 
    }
    if(price > 0){
        data = {name:"工商银行",code:"000543",num:numradddddd+"%",price:numrad}
    }else{
        data = {name:"工商银行",code:"000543",num:numradddddd+"%",price:numrad}
    }
    return(
        <div className={styles.rowTitleBangDan}>
            <div className={styles.leftText}>
                <div className={styles.name}>
                {data.name}
                </div>
                <div className={styles.code}>
                {data.code}
                </div>
            </div>
            <div className={price>0?styles.centerRedText:styles.centerGreenText}>
                {data.price}
            </div>
            {
                type==='chengjiaoe'? // 成交额列表展示黑色字体
                <div className={styles.rightBlackText}>
                    {data.num}
                </div>
                :
                <div className={price>0?styles.rightRedText:styles.rightGreenText}>
                    {data.num}
                </div>

            }
            
        </div>
    )
}
export default ListRow