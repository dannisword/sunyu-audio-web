import moment from "moment";
/**
 * 逾期
 * @returns 
 */
export function isExpiry() {
  const data = localStorage.getItem("userInfo");
  const user = JSON.parse(data);
  if (user == null || user.expiration == null) {
    return true;
  }
  const exp = moment().diff(user.expiration, "minute");
  return exp > 0 ? true : false;
}
