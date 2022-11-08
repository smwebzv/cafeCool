const DailyReportsReducer = (state, {type, payload}, props) => {
    switch (type) {
      case "setDailyList":
        return{
            ...state,
            dailyList: payload
        }
      case "removeDailyItem": 
      const newList = state.dailyList.slice();
      delete newList[payload];
        return{
            ...state,
            dailyList: newList
        }

      case "addNewDailyItem": 
        return{
            ...state,
            dailyList: [...state.dailyList, payload]
        }
      case "updateDailyItem": 
      const updatedItem = state.dailyList.slice();
      updatedItem[payload.indx]=payload.data
      return{
          ...state,
          dailyList: updatedItem
      }
      case "setDailyReport":
        return{
            ...state,
            dailyReport: payload
      }
    }
    
  
  }
  
  export default DailyReportsReducer;