import React from 'react'

import styles from './index.less'

import classnames from 'classnames'

function TemplateList(props) {
    return(
        <div className = {styles.list}>
            <div className = {styles.single}>
                <div className={styles.topText}>
                    <span className={styles.name}>东风汽车</span> 
                    <span className={styles.code}>000543</span> 
                    <span className={styles.price}>45.2</span> 
                    <span className={styles.up}>0.22%</span>
                </div>
                <div className={styles.centerText}>
                    
                    明日A股四大看点，{new Date().getTime()}超千家上市公司披露中报明日A股四大看点，超千家上市公司披露中报
                    明日A股四大看点，超千家上市公司披露中报明日A股四大看点，超千家上市公司披露中报
                    明日A股四大看点，超千家上市公司披露中报明日A股四大看点，超千家上市公司披露中报
                </div>
                <div className={styles.buttomText}>
                    <span className={styles.owner}>上交所股票</span> <span className={styles.time}>11-30</span> 
                </div>
            </div>

            <div className = {styles.single}>
                <div className={styles.topText}>
                    <span className={styles.name}>东风汽车</span> 
                    <span className={styles.code}>000543</span> 
                    <span className={styles.price}>85.2</span> 
                    <span className={styles.up}>1.58%</span>
                </div>
                <div className={styles.centerText}>
                    明日A股四大看点，超千家上市公司披露中报明日A股四大看点，超千家上市公司披露中报
                </div>
                <div className={styles.buttomText}>
                    <span className={styles.owner}>上交所股票</span> <span className={styles.time}>11-10</span> 
                </div>
            </div>

            <div className = {styles.single}>
                <div className={styles.topText}>
                    <span className={styles.name}>东风汽车</span> 
                    <span className={styles.code}>000543</span> 
                    <span className={styles.price}>85.2</span> 
                    <span className={styles.up}>1.58%</span>
                </div>
                <div className={styles.centerText}>
                    明日A股四大看点，超千家上市公司披露中报明日A股四大看点，超千家上市公司披露中报
                </div>
                <div className={styles.buttomText}>
                    <span className={styles.owner}>上交所股票</span> <span className={styles.time}>11-10</span> 
                </div>
            </div>



        </div>
    )
}

export default TemplateList