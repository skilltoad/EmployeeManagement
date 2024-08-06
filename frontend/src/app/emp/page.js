"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../style/style.css";

const EmpInfo = () => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData
      ? JSON.parse(storedData)
      : {
          firstName: "",
          lastName: "",
          middleName: "",
          dob: "",
          gender: "",
        };
  });
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="Main">
      <h2>Employment Information</h2>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="fname"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lname"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="middleName">Middle Name:</label>
      <input
        type="text"
        id="mname"
        name="middleName"
        value={formData.middleName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="dob"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="gender">Gender:</label>
      <input
        type="radio"
        id="male"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
        required
      />
      Male
      <input
        type="radio"
        id="female"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
      />
      Female
      <input
        type="radio"
        id="non-binary"
        name="gender"
        value="Non-Binary"
        checked={formData.gender === "Non-Binary"}
        onChange={handleChange}
      />
      Non-Binary
      <input
        type="radio"
        id="prefer-not-to-say"
        name="gender"
        value="Prefer not to say"
        checked={formData.gender === "Prefer not to say"}
        onChange={handleChange}
      />
      Prefer not to say
      <br />
      <Link href={"../contact"}>
        <button type="submit" style={{ marginTop: "10px" }}>
          Next
        </button>
      </Link>
    </div>
  );
};
export default EmpInfo;
