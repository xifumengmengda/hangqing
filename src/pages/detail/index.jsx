import React , { useState , useEffect , useCallback  }from 'react'
import { InfiniteScroll , PullToRefresh , Collapse } from 'antd-mobile'
import {
    getListArticle,
} from "../../api/wechat"
import moment from "moment"
import { debounce } from "lodash"

import styles from './index.less'

function Detail(props){
    const [refreshing, setRefreshing] = useState(true)
    const [page, setPage] = useState({page_size:20,page_num:1})
    const [hasMore, setHasMore] = useState(true)
    const [listData, setListData] = useState([])
    const [typeLoad, setTypeLoad] = useState("up") // 下拉刷新还是上拉加载更多

    const [openKey, setOpenKey] = useState(["0"])

    useEffect(()=>{
        getDebounce()
    },[])

    const getDebounce = debounce(loadMore, 500);

    function loadMore() {
        if (refreshing) {
            setRefreshing(false)
            getListArticle(page).then(append=>{
                if (append?.obj?.length > 0) {
                    
                    const p = {page_size:20,page_num:page.page_num+1}
                    setPage(p)
                    setListData(val => [...val, ...append.obj])
                }
                setHasMore(append?.obj?.length > 0)
                setRefreshing(true)
            })
        }
        
        
    }
    const titleDom = (item,index)=>{
        const a_title = item.a_title
        const time = moment(item.a_time).format("YYYY-MM-DD HH:ss:mm")
        return (
            <div className={styles["listRow"]} onClick={()=>{collapseItemClick(item,index)}}>
                <p>{a_title}</p>
                <p>{time}</p>
            </div>
        )
    }
    const collapseItemClick =((item,index)=>{
        if(openKey[0] === ""+index){
            setOpenKey([""])
        }else{
            setOpenKey([""+index])
        }
        
    })
    return(
        <div className={styles["listArticle"]}>
            <PullToRefresh
            onRefresh={() => {
                setTypeLoad("down")
                getDebounce()
            }}
            >
                <Collapse defaultActiveKey={openKey} activeKey={openKey}>
                    {
                        listData.map((item,index)=>{
                            return (
                                <Collapse.Panel key={index} title={titleDom(item,index)}>
                                    <div dangerouslySetInnerHTML={ {__html:item.a_content}} />
                                </Collapse.Panel>
                            )
                        })
                    }
                </Collapse>
            </PullToRefresh>
            
            {/* <InfiniteScroll loadMore={getDebounce()} hasMore={hasMore} /> */}
            
            
        </div>
    )
}

export default Detail;