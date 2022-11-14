import request from "@/unit/request";

/**
 * 
 * @param {*} userSeq 
 * @returns 
 */
export function getUser(userSeq) {
  return request({
    url: `/v1/User/${userSeq}`,
    method: "Get",
  });
}
/**
 * 最新上架
 * @param {*} params
 * @returns
 */
export function getLast(params) {
  return request({
    url: `/v1/Course/Last${params}`,
    method: "Get",
  });
}
/**
 * 繼續看
 * @param {*} params
 * @returns
 */
export function getHalf(params) {
  return request({
    url: `/v1/Course/Half${params}`,
    method: "Get",
  });
}
/**
 * 全部課程
 * @param {*} params
 * @returns
 */
export function getMine(params) {
  return request({
    url: `/v1/Course/Mine${params}`,
    method: "Get",
  });
}
/**
 *
 * @param {*} seq
 * @returns
 */
export function getCourse(seq) {
  return request({
    url: `/v1/Course/${seq}`,
    method: "Get",
  });
}

/**
 *
 * @param {*} courseSeq
 * @returns
 */
export function getViewHistories(courseSeq) {
  return request({
    url: `/v1/Course/ViewHistories/${courseSeq}`,
    method: "GET",
  });
}
/**
 * 
 * @param {*} courseSeq 
 * @param {*} appendixSeq 
 * @returns 
 */
export function getViewHistory(courseSeq, appendixSeq) {
  return request({
    url: `/v1/Course/ViewHistory/${courseSeq}/${appendixSeq}`,
    method: "GET",
  });
}
/**
 * 觀看紀錄
 * @param {*} data
 * @returns
 */
export function setViewHistory(data) {
  return request({
    url: `/v1/Course/ViewHistory`,
    method: "POST",
    data,
  });
}
