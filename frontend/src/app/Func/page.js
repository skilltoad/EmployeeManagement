"use client";
import EmpInfo from "../emp/page";
import ListEmployee from "../ListEmployee/page"
import { useState } from "react";
import "../style/style.css"
const App = () => {
//   const initialFormData = {
//     firstName: "",
//     lname: "",
//     mname: "",
//     dob: "",
//     gen: "",
//     personalEmail: "",
//     workEmail: "",
//     phoneNumber: "",
//     emergencyContactName: "",
//     emergencyContactRelation: "",
//     emergencyContactPhone: "",
//   };
//   console.log(initialFormData);
//   const [formData, setFormData] = useState(initialFormData);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

  // const [formData, setFormData] = useState({
  //     firstName: "",
  //     lname: "",
  //     mname: "",
  //     dob: "",
  //     gen: "",
  //   });
  return (
    <>
      {/* <h1>App</h1> */}
      {/* <EmpInfo setFormData={setFormData} formData={formData}></EmpInfo> */}
      {/* <EmpInfo formData={formData} handleChange={handleChange} /> */}
      {/* `<ListEmployee></ListEmployee> */}
        <EmpInfo></EmpInfo>`
      {/* <AddInfo></AddInfo> */}
      {/* <UploadPhoto></UploadPhoto> */}
    </>
  );
};
export default App;
