import {stringify} from 'qs'
import request from "../../utils/request";

// 获取龙虎榜列表
export function getLhbList (params = {}) { // date=2021-04-21
  return request({
    url: `/cgi/cgi-bin/longhubang/lhbDetail?${stringify(params)}`,
    method: "get"
  });
}

// 获取股票指定时间段数据
export function getStocksortDetail (params = {}) { // code=cn_002617&start=20220701&end=20220705
    return request({
      url: `/hisHq?${stringify(params)}`,
      method: "get"
    });
  }
