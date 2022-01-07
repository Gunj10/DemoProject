import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public loginForm: FormGroup;
  employees: Employee[] = [];
  employee: Employee = new Employee();
  dataSource: any;
  firstName: string;
  lastName: string;
  address: any;
  phone: number;
  username: any;
  password: any

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : [''],
      password : ['']
    })
  }

  showEmployeeRecords(){
    this.employeeService.getEmployeeRecords().subscribe (res => {
      const user = res.find((a:any) => {
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
    if (user) {
      this.router.navigate(['home']);
      this.toastr.success('Login successfully');
      console.log ('login successfull')
    } else {
      this.toastr.error('Incorrect Username or Password');
      console.log ('login failed')
    }
    this.employee = res;
    this.dataSource = res;
   });
  }
}
