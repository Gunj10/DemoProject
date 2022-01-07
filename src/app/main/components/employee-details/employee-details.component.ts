import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'phone', 'username', 'password', 'function' ];
  employees: Employee[] = [];
  employee: Employee = new Employee();
  dataSource: any;
  submitted = false;
  update = false;

  constructor( private employeeService: EmployeeService,private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.showResults();
  }

  showResults() {
    this.employeeService.getEmployeeRecords().subscribe(res => {
      this.employees = res;
      this.dataSource = this.employees;
    });
  }
  registerForm = this.formBuilder.group({
    firstName: new FormControl(this.employee.firstName, [
      Validators.required,
      Validators.minLength(4)
    ]),
    lastName: new FormControl(this.employee.lastName, [
      Validators.required,
      Validators.minLength(4)
    ]),
    address: new FormControl(this.employee.address, [
      Validators.required,
      Validators.minLength(4)
    ]),
    phone: new FormControl(this.employee.phone, [
      Validators.required,
      Validators.minLength(9)
    ]),
    username: new FormControl(this.employee.username, [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl(this.employee.password, [
      Validators.required,
      Validators.minLength(4)
    ]),
  })
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  showEmployeeRecords() {
    this.employeeService.getEmployeeRecords().subscribe(res => {
      this.employees = res;
      this.dataSource = res;
      this.resetEmployee();
    });
  }

  resetEmployee(){
    this.submitted = false;
    this.update = false;
    this.registerForm.reset();
  }


  deleteEmployee(id: number){
    this.employeeService.deleteEmployeeRecords(id).subscribe(res => {
      this.toastr.success('Record Deleted!', 'ID ' + id + ' deleted successfully');
      this.showEmployeeRecords();
      this.resetEmployee();
    })
  }
  onSubmit() {
    this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      this.employee = this.registerForm.value;
      this.addEmployee();
  }
  addEmployee(){
    this.employeeService.addEmployeeRecords(this.employee).subscribe(res => {
      this.toastr.success('Record Added successfully');
      this.showEmployeeRecords();
      this.resetEmployee();
    })
  }
  updateEmployee(employee: any){
    this.update = true;
    this.loadEmployee(employee);
    this.employee = employee;
  }
  loadEmployee(employee: any) {
      this.registerForm = this.formBuilder.group({
        firstName: new FormControl(employee.firstName),
        lastName: new FormControl(employee.lastName),
        address: new FormControl(employee.address),
        phone: new FormControl(employee.phone),
        username: new FormControl(employee.username),
        password: new FormControl(employee.password)
      });
  }

  updateEmployeeRecordWithId() {
    const id = this.employee.id;
    this.employee = this.registerForm.value;
    this.employee.id = id;
    console.log(this.employee);
    this.employeeService.updateEmployeeRecords(this.employee).subscribe(res => {
      this.toastr.success('Record with id ' + res.id + ' updated Successfully');
      this.showEmployeeRecords();
      this.resetEmployee();
    });
  }

  onBack(){
    this.router.navigate(['home'])
  }

}
