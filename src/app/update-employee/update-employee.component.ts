import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee()
  employeeId!: number

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId']
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data
      this.employee.dateOfBirth = this.employee.dateOfBirth.split(".").reverse().join("-")
    }, error => console.log(error))
  }

  goToEmployeeList() {
    this.router.navigate(['/employees'])
  }

  onSubmit() {
    if (this.validateEmployeeAge(this.employee.dateOfBirth) || this.isNegativeDepartmentId(this.employee.departmentId)) {
      return
    }
    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(data =>
      this.goToEmployeeList()
    )
  }

  validateEmployeeAge(dateOfBirth: string) {
    return this.employeeService.validateEmployeeAge(dateOfBirth)
  }

  isNegativeDepartmentId(departmentId: number) {
    return departmentId < 0
  }
}
