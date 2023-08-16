import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.css']
})
export class CreateAreaComponent implements OnInit {
  submitted = false;
  postId?: any;

  newArea = new FormGroup({
    codigo: new FormControl('', [
      Validators.required,
      Validators.maxLength(2),
    ]),
    nombre: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    lider: new FormControl([
      Validators.required,
      Validators.maxLength(7),
    ]),
    estado: new FormControl('Activo')
  })


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }

  saveArea() {
    this.submitted = true;

    if (this.newArea.invalid) {
      return;
    }

    this.apiService.postAreaData(this.newArea.value).subscribe((data: any) => {
      console.log(data);
    })
  }

}
