import { isExpiry } from "./verify";
export default {
  name: "pageMixin",
  computed: {
    getParams() {
      return function (params, num = true) {
        let query = "";
        for (let [key, value] of Object.entries(params)) {
          if (typeof value == "number" && value == 0) {
            continue;
          }
          if (typeof value == "string" && value == "") {
            continue;
          }
          if (query == "") {
            query += `?${key}=${value}`;
          } else {
            query += `&${key}=${value}`;
          }
        }
        return query;
      };
    },
  },
  methods: {
    setUser(user) {
      return new Promise((resolve, reject) => {
        var data = JSON.stringify(user);
        localStorage.setItem("userInfo", data);
        resolve(true);
      });
    },
    getUser() {
      var data = localStorage.getItem("userInfo");
      return JSON.parse(data);
    },
    verify() {
      return isExpiry();
    },
    clear() {
      localStorage.clear();
    },
    encoded(val) {
      return window.btoa(val);
    },
    decoded(val) {
      return window.atob(val);
    },
  },
};
