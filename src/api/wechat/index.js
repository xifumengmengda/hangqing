import request from "../../utils/request";
import {stringify} from 'qs'

export function getListBrowserid (browserid) { // date=2021-04-21
  return request({
    url: `${process.env.API_HOST}/StockSsm/selectByBrowserid?id=${browserid}`,
    method: "get"
  });
}

export function getUserToken (browserid) { //
  return request({
    url: `${process.env.API_HOST}/StockSsm/wx/getWxUserInfo?code=${browserid}`,
    method: "get"
  });
}

export function getWxAuthCode (type="") { //
  return request({
    url: `${process.env.API_HOST}/StockSsm/wx/getCode?type=${type}`,
    method: "get"
  });
}

export function updateUrlTimeByBrowserid (browserid,time) { //
  return request({
    url: `${process.env.API_HOST}/StockSsm/updateUrlTimeByBrowserid?id=${browserid}&time=${time}`,
    method: "get"
  });
}

export function saveUserInfo (params) { //
  return request({
    url: `${process.env.API_HOST}/StockSsm/saveUserInfo?${stringify(params)}`,
    method: "get"
  });
}

export function getListArticle (params) { //
  console.log("process",process,`${process.env.API_HOST}/StockSsm/selectArticleByPaging?${stringify(params)}`);
  return request({
    url: `${process.env.API_HOST}/StockSsm/selectArticleByPaging?${stringify(params)}`,
    method: "get"
  });
}
