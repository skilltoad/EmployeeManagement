"use client";
import React, { useState, useEffect } from "react";
import EmployeeService from "../services/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../style/style.css"
const ListEmployee = (SearchParams) => {
  
  const [employees, setEmployees] = useState([]);
  const router=useRouter();
  
  
  useEffect(() => {
    EmployeeService.getAllEmployees().then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const handleLocalStorage=()=>{
    localStorage.clear();
    router.push('/emp');
  }

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then((response) =>{
     getAllEmployees();
     
    }).catch(error =>{
        console.log(error);
    })
    window.location.reload(); 
 }

  return (
    <div className="container">
      <h2 className="text-center">Employee Details</h2>
      
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Middle Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Personal Email</th>
            <th>Work Email</th>
            <th>Phone Number</th>
            <th>Emergency Contact Name</th>
            <th>Emergency Contact Relation</th>
            <th>Emergency Contact Phone</th>
            <th>department</th>
            <th>Job Title</th>
            <th>Start Date</th>
            <th>Manager Name</th>
            <th>Previous Employer</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => 
                <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.middleName}</td>
                <td>{employee.dob}</td>
                <td>{employee.gender}</td>
                <td>{employee.personalEmailId}</td>
                <td>{employee.workEmailId}</td>
                <td>{employee.phone}</td>
                <td>{employee.emergencyContactName}</td>
                <td>{employee.emergencyContactRelation}</td>
                <td>{employee.emergencyContactPhone}</td>
                <td>{employee.department}</td>
                <td>{employee.jobTitle}</td>
                <td>{employee.startDate}</td>
                <td>{employee.managerName}</td>
                <td>{employee.previousEmployer}</td>
                <td><button className="Action"><Link href={{
                  pathname:"../Dashboard",
                  query: { employeeId: employee.id }
                }}>View</Link></button><button className="Action" onClick = {() => deleteEmployee(employee.id)} >Delete</button></td>
                
                </tr>
            )
          }
        </tbody>
      </table>
        <button onClick={handleLocalStorage} style={{marginTop: '10px', float:'right'}}>Add Employee</button>
      
    </div>
  );
};

export default ListEmployee;
