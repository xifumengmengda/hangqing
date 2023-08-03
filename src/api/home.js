import {stringify} from 'qs'
import request from "../utils/request";
import {alltabrankZdfTop} from './constant'

// 涨幅榜
export function alltabrankTopzdf (params = {}) {
  return request({
    url: `${alltabrankZdfTop}?${stringify(params)}`,
    method: "get"
  });
}
