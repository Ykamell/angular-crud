import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  faEdit = faEdit;
  faTrashCan = faTrashCan

  data: Array<any> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getData().subscribe((data: any) => {
      console.log(data)
      Object.keys(data).forEach((key) => {
        this.data.push({
          id: key,
          data: data[key]
        })
      })

      Object.values(data);

      console.log(this.data);
    })
  }

  deleteItem(post: any) {
    this.apiService.deleteData(post.id)
      .subscribe(() => {
        this.data = this.data.filter(item => item.id !== post.id);
      });
  }

}
