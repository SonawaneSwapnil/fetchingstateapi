import axios from "axios";

const Base_url = "http://awsmaster.mahamining.com/master";

export async function getState() {
  try {
    const response = await axios.get(Base_url + "/states/GetState");
    return await response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getDivisions(id) {
  try {
    const response = await axios.get(Base_url + "/divisions/" + id);
    return await response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getDistrict(id) {
  try {
    const response = await axios.get(
      Base_url + "/districts/GetDistrictByDivisionId?UserId=1&DivisionId=" + id
    );
    return await response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getTaluka(id) {
  try {
    const response = await axios.get(
      Base_url + "/talukas/GetTalukaByDistrictId/" + id
    );
    return await response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getVillage(id) {
  try {
    const response = await axios.get(
      Base_url + "/villages/GetVillagesByCriteria/" + id
    );
    return await response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
