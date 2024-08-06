package net.javauides.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "middle_name")
    private String middleName;
    @Column(name = "date_of_birth")
    private String dob;
    @Column(name = "gender")
    private String gender;

    @Column(name = "personal_email_id")
    private String personalEmailId;
    @Column(name = "work_email_id")
    private String workEmailId;
    @Column(name = "phone_no")
    private String phone;
    @Column(name = "emergency_contact")
    private String emergencyContactName;
    @Column(name = "emergency_contact_relation")
    private String emergencyContactRelation;
    @Column(name = "emergency_contact_phone_no")
    private String emergencyContactPhone;

    @Column(name = "department")
    private String department;
    @Column(name = "job_title")
    private String jobTitle;
    @Column(name = "start_date")
    private String startDate;
    @Column(name = "manager_name")
    private String managerName;
    @Column(name = "previous_employer")
    private String previousEmployer;
}