import React , { useEffect , useState }from 'react'

import { Toast } from 'antd-mobile';  // 加载 JS

import { 
    getQueryString , 
} from "../../utils/common"


function HandUrl(props){

    // const [loading , setLoading] = useState(true)
    const uuidUnique = getQueryString("uuid_unique")
    useEffect(()=>{
        // getWxAuthCode(fromType)
        if (uuidUnique) {
            localStorage.setItem("uuid_key", uuidUnique);// 将发送消息的用户的id存储到本地
        }
        window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx749e159d150abfae&redirect_uri=http%3A%2F%2Fapp.wxhomifi.com&response_type=code&scope=snsapi_userinfo&state=wxai#wechat_redirect`
    },[])

    // if(loading){
    //     return (
    //         <ActivityIndicator toast size="large" text="正在加载" />
    //     )
    // }
    
    return(
        <div>
            获取中...
        </div>
    )
}

export default HandUrl;