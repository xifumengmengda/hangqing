import React from 'react'
import { Tabs } from 'antd-mobile';

import TemplateList from './templateList'
import Head from '../components/Head/index'
import styles from './index.less'

import classnames from 'classnames'

const tabs = [
    { title: '新闻' },
    { title: '公告' },
    { title: '研报' },
  ];
function News(props) {
    return(
        <div className = {styles.newsContail}>
            <div className={styles.head}>
                <Head rightShow={false} 
                leftShow = {true}
                title="自选股新闻"
                leftClick = {()=>{
                    props.history.goBack();
                }}
                />
            </div>
            <div className={styles.bodyContail}>
                <Tabs tabs={tabs} initialPage={0} 
                tabBarActiveTextColor="#333333"
                tabBarInactiveTextColor="#333333"
                tabBarUnderlineStyle={{width:'35px',marginLeft:'50px',background:'#E93030',height:'4px',border:"0px #E93030 solid;"}}
                animated={false} useOnPan={false}>
                    <div>
                        <TemplateList />
                    </div>
                    <div>
                        <TemplateList />
                    </div>
                    <div>
                        <TemplateList />
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default News