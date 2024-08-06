package net.javauides.springboot.controller;

import net.javauides.springboot.exception.ResourceNotFoundException;
import net.javauides.springboot.model.Employee;
import net.javauides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable  long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id));
        return ResponseEntity.ok(employee);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails) {
        Employee updateEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setMiddleName(employeeDetails.getMiddleName());
        updateEmployee.setDob(employeeDetails.getDob());
        updateEmployee.setGender(employeeDetails.getGender());

        updateEmployee.setPersonalEmailId(employeeDetails.getPersonalEmailId());
        updateEmployee.setWorkEmailId(employeeDetails.getWorkEmailId());
        updateEmployee.setPhone(employeeDetails.getPhone());
        updateEmployee.setEmergencyContactName(employeeDetails.getEmergencyContactName());
        updateEmployee.setEmergencyContactRelation(employeeDetails.getEmergencyContactRelation());
        updateEmployee.setEmergencyContactPhone(employeeDetails.getEmergencyContactPhone());

        updateEmployee.setDepartment(employeeDetails.getDepartment());
        updateEmployee.setJobTitle(employeeDetails.getJobTitle());
        updateEmployee.setStartDate(employeeDetails.getStartDate());
        updateEmployee.setManagerName(employeeDetails.getManagerName());
        employeeDetails.setPreviousEmployer(employeeDetails.getPreviousEmployer());


        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}