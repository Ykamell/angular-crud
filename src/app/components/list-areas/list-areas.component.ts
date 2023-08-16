import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list-areas',
  templateUrl: './list-areas.component.html',
  styleUrls: ['./list-areas.component.css']
})
export class ListAreasComponent implements OnInit {

  faEdit = faEdit;
  faTrashCan = faTrashCan

  data: Array<any> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAreaData();
  }

  getAreaData() {
    this.apiService.getAreasData().subscribe((data: any) => {
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

  deleteAreaItem(post: any) {
    this.apiService.deleteAreaData(post.id)
      .subscribe(() => {
        this.data = this.data.filter(item => item.id !== post.id);
      });
  }


}
