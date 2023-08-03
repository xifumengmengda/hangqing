import React, { useEffect, useState } from 'react'
import {
    InsertRowBelowOutlined,
    BankOutlined,
    ContainerOutlined,
    HomeOutlined,
    TeamOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Modal } from 'antd';
import classnames from 'classnames';
import style from './index.less'
import map from './image/test.png'
import topRight from './image/top-right.png'
import warn from './image/warn.png'

function Test(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const styleIcon = {fontSize:15}
    const iconDom = (ComponentName,number,text)=>{
        return(
            <div className={style.icon}>
                <div className={style.iconleft}>
                    <div className={style.innerBox}>
                        {ComponentName}
                    </div>
                </div>
                <div className={style.iconright}>
                    <div className={style.number}>
                    {number}
                    </div>
                    <div className={style.text}>
                    {text}
                    </div>
                </div>
            </div>
        )
    }
    const showModal = () => {
    setIsModalOpen(true);
    };
    const handleOk = () => {
    setIsModalOpen(false);
    };
    const handleCancel = () => {
    setIsModalOpen(false);
    };
    return (
        <div className={style.boxDashbord}>
            <div className={style.topText}>
            寨子坪社区数字一体化数据看板
            </div>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.top}>
                        <div className={style.topLeft}>
                            <div className={style.title}>
                                社区概况
                            </div>
                            <div className={style.content}>
                                开州区寨子坪社区简介，开州区寨子坪社区简介，开州区
                                寨子坪社区简介，开州区寨子坪社区简介，开州区寨子坪
                                社区简介，开州区寨子坪社区简介开州区寨子坪社区简介
                                开州区寨子坪社区简介开州区寨子坪社区简介开州区寨子
                                坪社区简介开州区寨子坪社区简介开州区寨子坪社区简介
                                开州区寨子坪社区简介
                            </div>
                            <div className={style.listicon}>
                                {iconDom(<InsertRowBelowOutlined style={styleIcon} />,"2222222","网格数量")}
                                {iconDom(<BankOutlined style={styleIcon} />,"1111","小区数量")}
                                {iconDom(<ContainerOutlined style={styleIcon} />,"1111","楼栋数量")}
                                {iconDom(<HomeOutlined style={styleIcon} />,"1111","房屋数量")}
                                {iconDom(<TeamOutlined style={styleIcon} />,"1111","人口数量")}
                                {iconDom(<VideoCameraOutlined style={styleIcon} />,"1111","设备数量")}
                            </div>
                        </div>
                        <div className={style.topRight}>
                            <img src={map} className={style.map}/>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.title}>
                            预警中心
                        </div>
                        <div className={classnames(style.row,style.header)}>
                            <div className={style.t}>告警类型</div>
                            <div className={style.t}>告警时间</div>
                            <div className={style.t}>告警地点</div>
                            <div className={style.t}>设备名称</div>
                            <div className={style.t}>操作</div>
                        </div>
                        <div className={style.row}>
                            <div className={style.t}>高空抛物</div>
                            <div className={style.t}>2023-12-13 13:12:!2</div>
                            <div className={style.t}>云玺台C区</div>
                            <div className={style.t}>2懂A区低空</div>
                            <div onClick={()=>{showModal()}} className={classnames(style.t,style.tblub)}>详情</div>
                        </div>
                        <div className={style.row}>
                            <div className={classnames(style.t,style.tred)}>消防设施</div>
                            <div className={style.t}>2023-12-13 13:12:!2</div>
                            <div className={style.t}>云玺台C区</div>
                            <div className={style.t}>2懂A区低空</div>
                            <div onClick={()=>{showModal()}} className={classnames(style.t,style.tblub)}>详情</div>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.title}>
                    重点对象信息
                    </div>
                    <div className={style.zd}>
                        <div className={classnames(style.item)}>
                            <div className={classnames(style.zdText,style.leftAl)}>弱势群体</div>
                            <div className={classnames(style.zdRed,style.leftAl)}>155</div>
                            <div className={classnames(style.zdText,style.leftAl)}>犯罪前科人员</div>
                            <div className={classnames(style.zdRed,style.leftAl)}>155</div>
                            <div className={classnames(style.zdText,style.leftAl)}>上访人员</div>
                            <div className={classnames(style.zdRed,style.leftAl)}>155</div>

                            <div className={classnames(style.zdText,style.leftAl)}>学校</div>
                            <div className={classnames(style.zdBlue,style.leftAl)}>155</div>
                            <div className={classnames(style.zdText,style.leftAl)}>医疗机构</div>
                            <div className={classnames(style.zdBlue,style.leftAl)}>155</div>
                            <div className={classnames(style.zdText,style.leftAl)}>银行金融机构</div>
                            <div className={classnames(style.zdBlue,style.leftAl)}>155</div>
                        </div>
                        <div className={style.item}>
                            <img src={topRight} className={style.tr}/>
                        </div>
                        <div className={style.item}>
                            <div className={classnames(style.zdText,style.rightAl)}>弱势群体</div>
                            <div className={classnames(style.zdRed,style.rightAl)}>155</div>
                            <div className={classnames(style.zdText,style.rightAl)}>犯罪前科人员</div>
                            <div className={classnames(style.zdRed,style.rightAl)}>155</div>
                            <div className={classnames(style.zdText,style.rightAl)}>上访人员</div>
                            <div className={classnames(style.zdRed,style.rightAl)}>155</div>

                            <div className={classnames(style.zdText,style.rightAl)}>学校</div>
                            <div className={classnames(style.zdBlue,style.rightAl)}>155</div>
                            <div className={classnames(style.zdText,style.rightAl)}>医疗机构</div>
                            <div className={classnames(style.zdBlue,style.rightAl)}>155</div>
                            <div className={classnames(style.zdText,style.rightAl)}>银行金融机构</div>
                            <div className={classnames(style.zdBlue,style.rightAl)}>155</div>
                        </div>
                    </div>
                    <div className={style.list}>
                        <div className={style.box}>
                            <div className={style.time}>
                            2023-12-13
                            </div>
                            <div className={style.desc}>
                            网格员xxx提交了对涉毒人员张**的上访记录
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.time}>
                            2023-12-13
                            </div>
                            <div className={style.desc}>
                            网格员xxx提交了对涉毒人员张**的上访记录
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.time}>
                            2023-12-13
                            </div>
                            <div className={style.desc}>
                            网格员xxx提交了对涉毒人员张**的上访记录
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.time}>
                            2023-12-13
                            </div>
                            <div className={style.desc}>
                            网格员xxx提交了对涉毒人员张**的上访记录
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.time}>
                            2023-12-13
                            </div>
                            <div className={style.desc}>
                            网格员xxx提交了对涉毒人员张**的上访记录
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.time}>
                            2023-12-13
                            </div>
                            <div className={style.desc}>
                            网格员xxx提交了对涉毒人员张**的上访记录
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal 
                title="详情" 
                footer={null} 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
                // className="wrapContainerClassName"
                // style={{backgroundColor:"#102952"}}
            >
                <div className='indexRowText'>
                    <div className='indexRowTextLeft'>社区名称:</div>
                    <div className='indexRowTextRight'>寨子坪社区</div>
                </div>
                <div className='indexRowText'>
                    <div className='indexRowTextLeft'>网格:</div>
                    <div className='indexRowTextRight'>A12</div>
                </div>
                <div className='indexRowText'>
                    <div className='indexRowTextLeft'>小区/村:</div>
                    <div className='indexRowTextRight'>云玺台C区</div>
                </div>
                <div className='indexRowText'>
                    <div className='indexRowTextLeft'>设备名称:</div>
                    <div className='indexRowTextRight'>A栋1单元高区</div>
                </div>
                <div className='indexRowText'>
                    <div className='indexRowTextLeft'>记录时间:</div>
                    <div className='indexRowTextRight'>2023-12-12 12:12:12</div>
                </div>
                <div className='indexRowText'>
                    <div className='indexRowTextLeft'>记录方式:</div>
                    <div className='indexRowTextRight'>摄像头抓拍</div>
                </div>
                <div className='indexRowText'>
                    <div className='indexRowTextLeft'>操作人:</div>
                    <div className='indexRowTextRight'>超级管理员</div>
                </div>
                <div className='indexRowText'>
                    <div className='indexRowTextLeft'>异常图片:</div>
                    <div className='indexRowTextRight indexRowTextRightImg'>
                        <img src={warn} className='indexRowTextRightImgItem indexRowTextRightImgItemMargin'/>
                        <img src={warn} className='indexRowTextRightImgItem'/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Test;