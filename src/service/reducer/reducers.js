import { AR, UR, DR } from "../constant/constant";

export default function postalData(state = [], action) {
  switch (action.type) {
    case AR:
      return [...state, action.data];
    case UR:
      console.log("reducers==>", action.data);
      return state.map((item) => {
        console.log("item", item.id);
        console.log("action", action.data.id);
        if (item.id == action.data.id) {
          return {
            ...state,
            id: action.data.id,
            stateId: action.data.stateId,
            state: action.data.state,
            divisionId: action.data.divisionId,
            division: action.data.division,
            districtId: action.data.districtId,
            district: action.data.district,
            talukaId: action.data.talukaId,
            taluka: action.data.taluka,
            villageId: action.data.villageId,
            village: action.data.village,
          };
        } else return item;
      });
    case DR:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
