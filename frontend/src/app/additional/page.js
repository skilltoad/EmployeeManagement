"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../style/style.css"
const AddnInfo = () => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData
      ? JSON.parse(storedData)
      : {
          department: "",
          jobTitle: "",
          startDate: "",
          managerName: "",
          previousEmployer: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Main">
      <h2>Additional Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="managerName">Manager Name:</label>
        <input
          type="text"
          id="managerName"
          name="managerName"
          value={formData.managerName}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="previousEmployer">Previous Employer:</label>
        <input
          type="text"
          id="previousEmployer"
          name="previousEmployer"
          value={formData.previousEmployer}
          onChange={handleChange}
        />
        <br />
        <Link href={"../photo"}>
          <button type="submit">Next</button>
        </Link>
        <Link href={"../contact"}>
          <button style={{ marginLeft: '10px' }}>Previous</button>
        </Link>
        
      </form>
    </div>
  );
};

export default AddnInfo;
