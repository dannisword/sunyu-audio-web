import router from "./router";
import { isExpiry } from "@/unit/verify";

router.beforeEach(async (to, from, next) => {
  const exp = isExpiry();
  //console.log(to);

  if (to.name != "Dashboard" && exp == true) {
    //next(`/Dashboard?redirect=/AllClass`);
    next();
  } else {
    next();
  }
});
