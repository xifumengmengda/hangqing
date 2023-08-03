import React from 'react'
import styles from './index.less'
function Main(props) {
    let {price,data={}} = props
    if(price > 0){
        data = {name:"上证指数",price:"3425.13",add:"+22.13",num:"1.34%"}
    }else{
        data = {name:"创业板指",price:"3425.13",add:"+11.11",num:"11.25%"}
    }
    return(
        <div className={price>0?styles.mainRed:styles.mainGreen}>
            <div className={styles.title}>
                {data.name}
            </div>
            <div className={price>0?styles.redText:styles.greenText}>
                {data.price}
            </div>
            <div className={price>0?styles.redButtomText:styles.greenButtomText}>
                <span className={styles.left}>{data.add}</span>
                <span>{data.num}</span>
            </div>
        </div>
    )
}
export default Main