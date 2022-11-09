export default {
      dailyList: [],
      dailyReport: sessionStorage.getItem("dailyReport")
      ? JSON.parse(sessionStorage.getItem("dailyReport"))
      : [],
};