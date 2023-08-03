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
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import style from './index.less'
import map from './image/map.png'
import warn from './image/warn.png'
const ERROR_CODE_LOGIN_REPEATLOGIN = 2001; //设备已登录，重复登录

function Hourse(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const szIP = "222.182.201.76";
        const szPort = '80';
        const szUsername = "admin"
        const szPassword = "jkyxt12345"
        const szDeviceIdentify = szIP + "_" + szPort;
        const getChannelInfo = () => {
            // 模拟通道
            window.WebVideoCtrl.I_GetAnalogChannelInfo(szDeviceIdentify, {
                success: function (xmlDoc) {
                    console.log("模拟通道", xmlDoc);
                    console.log(szDeviceIdentify + " 获取模拟通道成功！");
                },
                error: function (oError) {
                    console.log(szDeviceIdentify + " 获取模拟通道失败！", oError.errorCode, oError.errorMsg);
                }
            });
            // 数字通道
            window.WebVideoCtrl.I_GetDigitalChannelInfo(szDeviceIdentify, {
                success: function (xmlDoc) {
                    console.log("数字通道", xmlDoc);

                    // if ("false" == online) {// 过滤禁用的数字通道
                    //     return true;
                    // }
                    console.log(szDeviceIdentify + " 获取数字通道成功！");
                },
                error: function (oError) {
                    console.log(szDeviceIdentify + " 获取数字通道失败！", oError.errorCode, oError.errorMsg);
                }
            });
            // 零通道
            window.WebVideoCtrl.I_GetZeroChannelInfo(szDeviceIdentify, {
                success: function (xmlDoc) {
                    console.log("零通道", xmlDoc);
                    console.log(szDeviceIdentify + " 获取零通道成功！");
                },
                error: function (oError) {
                    console.log(szDeviceIdentify + " 获取零通道失败！", oError.errorCode, oError.errorMsg);
                }
            });
        }

        window?.WebVideoCtrl?.I_Login(szIP, 1, szPort, szUsername, szPassword, {
            timeout: 3000,
            success: function (xmlDoc) {
                console.log(szDeviceIdentify + " 登录成功！");

                // setTimeout(function () {
                //     setTimeout(function () {
                //         getChannelInfo();
                //     }, 1000);
                // }, 10);
            },
            error: function (oError) {
                if (ERROR_CODE_LOGIN_REPEATLOGIN === 2001) {
                    console.log(szDeviceIdentify + " 已登录过！");
                } else {
                    console.log(szDeviceIdentify + " 登录失败！", oError.errorCode, oError.errorMsg);
                }
            }
        });
    }, [])


    const styleIcon = { fontSize: 15 }
    const iconDom = (ComponentName, number, text) => {
        return (
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
    const getOption = (type = 'people') => {
        const list = {
            people: [
                { value: 1048, name: '老年' },
                { value: 735, name: '中年' },
                { value: 580, name: '青年' },
                { value: 484, name: '少年' },
                { value: 300, name: '儿童' },
                { value: 450, name: '新生儿' },
            ],
            person: [
                { value: 1048, name: '犯罪前科' },
                { value: 735, name: '弱势群体' },
                { value: 580, name: '涉毒人员' },
                { value: 484, name: '上访人员' },
                { value: 300, name: '涉恐人员' },
                { value: 450, name: '涉稳人员' },
            ],
        }
        const title = {
            people: "常驻人口",
            person: "重点人员",
        }
        const option = {
            // title: {
            //   text: 'Referer of a Website',
            //   subtext: 'Fake Data',
            //   left: 'center'
            // },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: title[type],
                    type: 'pie',
                    radius: '50%',
                    data: list[type],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return option
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
                云玺台C区数据看板
            </div>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.top}>
                        <div className={style.topLeft}>
                            <div className={classnames(style.topcontent, style.lineBorder)}>
                                <div className={classnames(style.title)}>
                                    小区介绍
                                </div>
                                <div className={style.content}>
                                    开州区寨子坪社区简介，开州区寨子坪社区简介，开州区
                                    寨子坪社区简介，开州区寨子坪社区简介，开州区寨子坪
                                    社区简介，开州区寨子坪社区简介开州区寨子坪社区简介
                                    开州区寨子坪社区简介开州区寨子坪社区简介开州区寨子
                                    坪社区简介开州区寨子坪社区简介开州区寨子坪社区简介
                                    开州区寨子坪社区简介
                                </div>
                            </div>
                            <div className={classnames(style.toplisticon, style.lineBorder)} style={{ marginTop: 15 }}>
                                <div className={style.title}>
                                    小区概况
                                </div>
                                <div className={style.listicon}>
                                    {iconDom(<InsertRowBelowOutlined style={styleIcon} />, "6", "楼栋数量")}
                                    {iconDom(<BankOutlined style={styleIcon} />, "644", "房屋数量")}
                                    {iconDom(<ContainerOutlined style={styleIcon} />, "86", "出租房屋")}
                                    {iconDom(<HomeOutlined style={styleIcon} />, "2122", "常住人口")}
                                    {iconDom(<TeamOutlined style={styleIcon} />, "266", "租赁人员")}
                                    {iconDom(<VideoCameraOutlined style={styleIcon} />, "14", "重点人员")}
                                </div>
                            </div>

                        </div>
                        <div className={classnames(style.topRight, style.lineBorder)}>
                            <img src={map} className={style.map} />
                        </div>

                        <div className={style.rightTtt}>
                            <div className={classnames(style.rightTop, style.lineBorder)}>
                                <div className={style.title}>
                                    常驻人口
                                </div>
                                <div className={style.charts}>
                                    <ReactEcharts
                                        option={getOption('people')}
                                        notMerge={true}
                                        lazyUpdate={true}
                                        // onEvents={onEvents}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                            </div>
                            <div className={classnames(style.rightTop, style.lineBorder)} style={{ marginTop: 5 }}>
                                <div className={style.title}>
                                    重点人员
                                </div>
                                <div className={style.charts}>
                                    <ReactEcharts
                                        option={getOption('person')}
                                        notMerge={true}
                                        lazyUpdate={true}
                                        // onEvents={onEvents}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={style.bottom}>
                        <div className={classnames(style.bottomLeft, style.lineBorder)}>
                            <div className={style.title}>
                                告警预览
                            </div>
                            <div className={style.preview}>
                                <img src={warn} className={style.warn} style={{ marginRight: 10 }} />
                                <img src={warn} className={style.warn} />
                            </div>
                        </div>
                        <div className={classnames(style.bottomRight, style.lineBorder)}>
                            <div className={style.title}>
                                告警中心
                            </div>
                            <div className={classnames(style.row, style.header)}>
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
                                <div onClick={() => { showModal() }} className={classnames(style.t, style.tblub)}>详情</div>
                            </div>
                            <div className={style.row}>
                                <div className={classnames(style.t, style.tred)}>消防设施</div>
                                <div className={style.t}>2023-12-13 13:12:!2</div>
                                <div className={style.t}>云玺台C区</div>
                                <div className={style.t}>2懂A区低空</div>
                                <div onClick={() => { showModal() }} className={classnames(style.t, style.tblub)}>详情</div>
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
                        <img src={warn} className='indexRowTextRightImgItem indexRowTextRightImgItemMargin' />
                        <img src={warn} className='indexRowTextRightImgItem' />
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default Hourse;