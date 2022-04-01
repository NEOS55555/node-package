import BIZ from "./biz";
import API from "./api";
import SYS from "./sys";
import MGP from "./mgp";
export default {
  ...API,
  ...BIZ,
  ...SYS,
  ...MGP,
};
