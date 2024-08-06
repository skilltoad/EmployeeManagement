"use client";
import React, { useEffect,useState } from "react";
import Link from "next/link";
import "../style/style.css"
const ContactInfo = () => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData
      ? JSON.parse(storedData)
      : {
          personalEmailId: "",
          workEmailId: "",
          phone: "",
          emergencyContactName: "",
          emergencyContactRelation: "",
          emergencyContactPhone: "",
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
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="personalEmailId">Personal Email Address:</label>
        <input
          type="email"
          id="personalEmail"
          name="personalEmailId"
          value={formData.personalEmailId}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="workEmailId">Work Email Address:</label>
        <input
          type="email"
          id="workEmail"
          name="workEmailId"
          value={formData.workEmailId}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
        <input
          type="text"
          id="emergencyContactName"
          name="emergencyContactName"
          value={formData.emergencyContactName}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="emergencyContactRelation">
          Emergency Contact Relation:
        </label>
        <input
          type="text"
          id="emergencyContactRelation"
          name="emergencyContactRelation"
          value={formData.emergencyContactRelation}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="emergencyContactPhone">
          Emergency Contact Phone Number:
        </label>
        <input
          type="tel"
          id="emergencyContactPhone"
          name="emergencyContactPhone"
          value={formData.emergencyContactPhone}
          onChange={handleChange}
          required
        />
        <br />
        
        <Link href={"../additional"}>
          <button type="submit">Next</button>
        </Link>
        <Link href={"../emp"}>
          <button style={{ marginLeft: '10px' }}>Previous</button>
        </Link>
      </form>
    </div>
  );
};

export default ContactInfo;
