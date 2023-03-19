import { AR, UR, DR } from "../constant/constant";
export const addRecord = (data) => {
  return {
    type: AR,
    data: data,
  };
};

export const updateRecord = (data) => {
  console.log("action==>", data);
  return {
    type: UR,
    data: data,
  };
};

export const deleteRecord = (data) => {
  return {
    type: DR,
    id: data,
  };
};
