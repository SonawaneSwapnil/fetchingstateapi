import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecord,
  updateRecord,
  deleteRecord,
} from "../../service/action/action.js";

import {
  getDistrict,
  getDivisions,
  getState,
  getTaluka,
  getVillage,
} from "../../service/Service.js";
export default function Registration() {
  const { reset } = useForm();
  const postalData = useSelector((state) => state.postalData);

  const dispatch = useDispatch();
  const [stateData, setStateData] = useState();
  const [divisionData, setDivision] = useState();
  const [districtData, setDistrict] = useState();
  const [talukaData, setTaluka] = useState();
  const [villageData, setVilage] = useState();
  const [btnText, setBtnText] = useState("Submit");

  const [formData, setFormData] = useState({
    id: "",
    stateId: "",
    state: "",
    divisionId: "",
    division: "",
    districtId: "",
    district: "",
    talukaId: "",
    taluka: "",
    villageId: "",
    village: "",
  });

  const resetForm = () => {
    setFormData({
      id: "",
      stateId: "",
      state: "",
      divisionId: "",
      division: "",
      districtId: "",
      district: "",
      talukaId: "",
      taluka: "",
      villageId: "",
      village: "",
    });
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    if (btnText == "Submit") {
      dispatch(addRecord(formData));
      setBtnText("Submit");
    } else {
      dispatch(updateRecord(formData));
      setBtnText("Submit");
    }

    resetForm();
  };
  useEffect(() => {
    getAllState();
  }, []);

  const handleFormData = (name, value) => {
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const getAllState = () => {
    getState().then((res) => {
      setStateData(res.data.responseData);
    });
  };

  const getAllDivisions = (val) => {
    const selectedState = stateData.filter((res) => {
      return res.id == val;
    });
    handleFormData("state", selectedState[0].state);
    handleFormData("stateId", val);
    getDivisions(val).then((res) => {
      setDivision(res.data.responseData);
    });
  };

  const getAllDistrict = (val) => {
    const selectedDivision = divisionData.filter((res) => {
      return res.id == val;
    });
    handleFormData("division", selectedDivision[0].division);
    handleFormData("divisionId", val);
    getDistrict(val).then((res) => {
      setDistrict(res.data.responseData);
    });
  };

  const getAllTaluka = (val) => {
    const selectedDistrict = districtData.filter((res) => {
      return res.id == val;
    });
    handleFormData("district", selectedDistrict[0].district);
    handleFormData("districtId", val);
    getTaluka(val).then((res) => {
      setTaluka(res.data.responseData);
    });
  };
  const getAllVillage = (val) => {
    const selectedTaluka = talukaData.filter((res) => {
      return res.id == val;
    });
    handleFormData("taluka", selectedTaluka[0].taluka);
    handleFormData("talukaId", val);
    getVillage(val).then((res) => {
      setVilage(res.data.responseData);
    });
  };

  const onVillageSelected = (val) => {
    const selectedVillage = villageData.filter((res) => {
      return res.id == val;
    });
    handleFormData("village", selectedVillage[0].name);
    handleFormData("villageId", val);
    if (btnText == "Submit") {
      handleFormData("id", Date.now().toString());
    }
  };
  const onEdit = (item) => {
    resetForm();
    setBtnText("Update");
    // handleFormData("id", item.id);
    getState().then((res) => {
      setStateData(res.data.responseData);
    });
    getDivisions(item.stateId).then((res) => {
      setDivision(res.data.responseData);
    });
    getDistrict(item.divisionId).then((res) => {
      setDistrict(res.data.responseData);
    });
    getTaluka(item.districtId).then((res) => {
      setTaluka(res.data.responseData);
    });
    getVillage(item.talukaId).then((res) => {
      setVilage(res.data.responseData);
    });
    console.log("onedit item id=>", item.id);
    setFormData(item);
  };
  const handleDelete = (item) => {
    // const Delete = list.filtered((li) => li.id !== id);
    // setList(Delete);
    dispatch(deleteRecord(item.id));
  };
  return (
    <div className="container-fluid my-3 mx-3">
      <div className="row my-3">
        <h3 className="col-md-12 text-center ">Register</h3>
        <hr />
      </div>

      <div className="row">
        <div className="col-md-3">
          <form onSubmit={onSubmitClick}>
            <div className="mb-3 my-2">
              <label for="text" className="">
                Select State
              </label>
              <div className="dropdown mt-2">
                <select
                  name="stateId"
                  class="form-select"
                  aria-label="Default select example"
                  required
                  value={formData.stateId}
                  onChange={(e) => getAllDivisions(e.target.value)}
                >
                  <option value="">Select State</option>
                  {stateData &&
                    stateData.map((item, i) => (
                      <option value={item.id} key={i}>
                        {item.state}
                      </option>
                    ))}
                </select>
              </div>

              <label for=" division " className=" mt-3">
                Select Division
              </label>
              <div className="dropdown mt-2 ">
                <select
                  name="divisionId"
                  class="form-select"
                  aria-label="Default select example"
                  required
                  value={formData.divisionId}
                  onChange={(e) => getAllDistrict(e.target.value)}
                >
                  <option value="">Select Division</option>
                  {divisionData &&
                    divisionData.map((item, i) => (
                      <option value={item.id} key={i}>
                        {item.division}
                      </option>
                    ))}
                </select>
              </div>
              <label for="district" className="mt-3">
                Select District
              </label>
              <div className="dropdown mt-2 ">
                <select
                  name="districtId"
                  required
                  value={formData.districtId}
                  onChange={(e) => {
                    getAllTaluka(e.target.value);
                  }}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="" selected>
                    Open this select menu
                  </option>
                  {districtData &&
                    districtData.map((item, i) => (
                      <option value={item.id}>{item.district}</option>
                    ))}
                </select>
                {/* {errors.district && (
                  <span style={{ color: "red" }}>
                    {errors.district.message}
                  </span>
                )} */}
              </div>

              <label for="taluka" className="mt-3">
                Select Taluka
              </label>
              <div className="dropdown mt-2 ">
                <select
                  name="talukaId"
                  value={formData.talukaId}
                  className="form-select"
                  aria-label="Default select example"
                  required
                  onChange={(e) => getAllVillage(e.target.value)}
                >
                  <option value="" selected>
                    Open this select menu
                  </option>
                  {talukaData &&
                    talukaData.map((item, i) => (
                      <option value={item.id}>{item.taluka}</option>
                    ))}
                </select>
                {/* {errors.taluka && (
                  <span style={{ color: "red" }}>{errors.taluka.message}</span>
                )} */}
              </div>
              <label for="village" className="mt-3">
                Select Village
              </label>
              <div className="dropdown mt-2 ">
                <select
                  value={formData.villageId}
                  required
                  onChange={(e) => onVillageSelected(e.target.value)}
                  name="villageId"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Open this select State</option>
                  {villageData &&
                    villageData.map((item, i) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </select>
                {/* {errors.village && (
                  <span style={{ color: "red" }}>{errors.village.message}</span>
                )} */}
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6 my-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-secondary "
                >
                  Clear
                </button>
              </div>
              <div className="col-md-6 my-2">
                <button
                  type="submit"
                  className="btn btn-primary "
                  // onClick={() => dispatch(addRecord)}
                >
                  {btnText}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-9">
          <div className="table-responsive">
            <table className="table table-striped table-bordered border border-3 table-hover">
              <thead className="bg-info ">
                <tr>
                  <th>SR.no</th>
                  <th>ID</th>
                  <th>State</th>
                  <th>Division</th>
                  <th>District</th>
                  <th>Taluka</th>
                  <th>Village</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {postalData &&
                  postalData.map((item, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item.id}</td>
                      <td>{item.state}</td>
                      <td>{item.division}</td>
                      <td>{item.district}</td>
                      <td>{item.taluka}</td>
                      <td>{item.village}</td>
                      <td>
                        <i
                          class="fa-solid fa-pen-to-square mx-2"
                          onClick={() => onEdit(item)}
                        ></i>
                        <i
                          class="fa-solid fa-trash"
                          onClick={() => handleDelete(item)}
                        ></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
