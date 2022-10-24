import request from "@/unit/request";

export function getLast() {
  return request({
    url: `/v1/Course/Last`,
    method: "Get",
  });
}

export function getCourse(seq) {
  return request({
    url: `/v1/Course/${seq}`,
    method: "Get",
  });
}
