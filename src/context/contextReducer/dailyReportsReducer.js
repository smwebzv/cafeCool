const DailyReportsReducer = (state, {type, data}) => {
    switch (type) {
      case "setDailyList":
        return{
            ...state,
            dailyList: data
        }
      case "removeDailyItem": 
      const newList = state.dailyList.slice();
      delete newList[data];
        return{
            ...state,
            dailyList: newList
        }
    }
  
  }
  
  export default DailyReportsReducer;