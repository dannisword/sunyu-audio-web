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
      var data = JSON.stringify(user);
      localStorage.setItem("userInfo", data);
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
