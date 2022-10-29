import request from "@/unit/request";

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
getCourse