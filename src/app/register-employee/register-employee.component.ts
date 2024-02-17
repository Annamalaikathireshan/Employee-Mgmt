import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
// import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';



@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
 registerForm!: FormGroup; // Define employeeForm as a FormGroup
  //title:'Employee-app' | undefined;
  submitted = false;
  jobTitle = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]);
  employeeId = new FormControl('',[Validators.required, Validators.pattern('[0-9]{8}')]);
  contactNumber = new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]);
  department = new FormControl('',Validators.required);
  salary = new FormControl('',[Validators.required, Validators.min(0)]);
  email = new FormControl('',[Validators.required, Validators.email]);
  gender = new FormControl('',[Validators.required]);

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      employeeId1: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      contactNumber1: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      jobTitle1: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      hireDate: ['', Validators.required]
    });
  }
  /*onSubmit() {
    this.submitted = true

    if(this.registerForm.invalid){
      return
    }

    alert("Success")
  }*/

  registerSubmitted(){
    // this.submitted=true;
    console.log(this.email.errors);

  }
}

