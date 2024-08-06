"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import EmployeeService from "../services/page";
import "../style/style.css";

const Dashboard = () => {
  const router = useRouter();
  const SearchParams=useSearchParams();
  const id=SearchParams.get("employeeId");
  console.log(id);
  
  
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    dob: "",
    gender: "",
    personalEmailId: "",
    workEmailId: "",
    phone: "",
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactPhone: "",
    department: "",
    jobTitle: "",
    startDate: "",
    managerName: "",
    previousEmployer: "",
  });


  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setEmployee({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          middleName: response.data.middleName,
          dob: response.data.dob,
          gender: response.data.gender,
          personalEmailId: response.data.personalEmailId,
          workEmailId: response.data.workEmailId,
          phone: response.data.phone,
          emergencyContactName: response.data.emergencyContactName,
          emergencyContactRelation: response.data.emergencyContactRelation,
          emergencyContactPhone: response.data.emergencyContactPhone,
          department: response.data.department,
          jobTitle: response.data.jobTitle,
          startDate: response.data.startDate,
          managerName: response.data.managerName,
          previousEmployer: response.data.previousEmployer,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="Main">
      <h2 style={{ textAlign: "center" }}>Employee Details</h2>
      <h3>Personal Information</h3>
      <hr></hr>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>First Name: </th>
            <td></td>
            <td>{employee.firstName}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Last Name: </th>
            <td></td>
            <td>{employee.lastName}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Middle Name: </th>
            <td></td>
            <td>{employee.middleName}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Date of Birth : </th>
            <td></td>
            <td>{employee.dob}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Gender: </th>
            <td></td>
            <td>{employee.gender}</td>
          </tr>
        </thead>
      </table>

      <h3>Contact Information</h3>
      <hr></hr>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Personal Email Address: </th>
            <td></td>
            <td>{employee.personalEmailId}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Work Email Address: </th>
            <td></td>
            <td>{employee.workEmailId}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Phone Number: </th>
            <td></td>
            <td>{employee.phone}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Emergency Contact Name: </th>
            <td></td>
            <td>{employee.emergencyContactName}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>
              Emergency Contact Relationship:{" "}
            </th>
            <td></td>
            <td>{employee.emergencyContactRelation}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>
              Emergency Contact Phone Number:{" "}
            </th>
            <td></td>
            <td>{employee.emergencyContactPhone}</td>
          </tr>
        </thead>
      </table>

      <h3>Employment Information</h3>
      <hr></hr>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Department: </th>
            <td></td>
            <td>{employee.department}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Job Title: </th>
            <td></td>
            <td>{employee.jobTitle}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Start Date: </th>
            <td></td>
            <td>{employee.startDate}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Manager Name: </th>
            <td></td>
            <td>{employee.managerName}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Previous Employer: </th>
            <td></td>
            <td>{employee.previousEmployer}</td>
          </tr>
        </thead>
      </table>
      <Link href={"../ListEmployee"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Dashboard;
