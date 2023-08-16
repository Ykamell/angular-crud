import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  submitted = false;
  postId?: any;

  newEmployee = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    birthday: new FormControl([Validators.required]),
    idNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(7)
    ]),
    salario: new FormControl('', [Validators.required]),
    estado: new FormControl('Activo'),
    area: new FormControl('', [
      Validators.required,
      Validators.maxLength(2)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  })


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }

  saveEmployee() {
    this.submitted = true;

    if (this.newEmployee.invalid) {
      return;
    }

    this.apiService.postData(this.newEmployee.value).subscribe((data: any) => {
      console.log(data);
    })
  }

}
