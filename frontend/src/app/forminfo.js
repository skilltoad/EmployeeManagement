"use client"
import React, { useState } from 'react';
import EmpInfo from './emp/page';
import ContactInfo from './contact/page';
// import AddInfo from './additional/page';
// import UploadPhoto from './photo/page';

const FormContainer = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mname: "",
    dob: "",
    gen: "",
    personalEmail: '',
    workEmail: '',
    phoneNumber: '',
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactPhone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <EmpInfo formData={formData} handleChange={handleChange} />
      <ContactInfo formData={formData} handleChange={handleChange} />
      {/* <AddInfo formData={formData} handleChange={handleChange} />
      <UploadPhoto formData={formData} handleChange={handleChange} /> */}
    </div>
  );
};

export default FormContainer;
