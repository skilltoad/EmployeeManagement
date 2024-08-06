"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EmployeeService from "../services/page";
import "../style/style.css";
const UploadPhoto = () => {
  const [photo, setPhoto] = useState(null);
  const [empData, setEmpData] = useState({});
  const router = useRouter();

  const retrievePhotoFromStorage = () => {
    const storedPhoto = localStorage.getItem("uploadedPhoto");
    if (storedPhoto) {
      setPhoto(storedPhoto);
    }
  };
  useEffect(() => {
    retrievePhotoFromStorage();
    const storedEmpData = localStorage.getItem("formData");
    if (storedEmpData) {
      setEmpData(JSON.parse(storedEmpData));
    }
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo) {
      console.log("Photo uploaded:", photo);
    } else {
      console.log("Please select a photo.");
    }
    const employee = {
      firstName: empData.firstName,
      lastName: empData.lastName,
      middleName: empData.middleName,
      dob: empData.dob,
      gender: empData.gender,
      personalEmailId: empData.personalEmailId,
      workEmailId: empData.workEmailId,
      phone: empData.phone,
      emergencyContactName: empData.emergencyContactName,
      emergencyContactRelation: empData.emergencyContactRelation,
      emergencyContactPhone: empData.emergencyContactPhone,
      department: empData.department,
      jobTitle: empData.jobTitle,
      startDate: empData.startDate,
      managerName: empData.managerName,
      previousEmployer: empData.previousEmployer,
    };
    EmployeeService.createEmployee(employee)
      .then((response) => {
        console.log(response);
        router.push("/ListEmployee");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Main">
      <h2>Upload Photo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="photo">Upload Employee Image:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handlePhotoChange}
          required
          style={{ display: "none" }}
        />
        <button
          type="button"
          onClick={() => document.getElementById("photo").click()}
        >
          Choose File
        </button>
        {photo && (
          <div>
            <h3>Uploaded Photo</h3>
            <img src={photo} alt="Uploaded" style={{ maxWidth: "300px" }} />
          </div>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>{" "}
        <Link href={"../additional"}>
          <button style={{ marginLeft: "10px" }}>Previous</button>
        </Link>
      </form>
    </div>
  );
};

export default UploadPhoto;
