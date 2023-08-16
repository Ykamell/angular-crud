import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ListAreasComponent } from './components/list-areas/list-areas.component';
import { CreateAreaComponent } from './components/create-area/create-area.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { UpdateAreaComponent } from './components/update-area/update-area.component';

const routes: Routes = [
  { path: 'list-employees', component: ListEmployeesComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'edit-employee/:id', component: UpdateEmployeeComponent },
  { path: 'edit-area/:id', component: UpdateAreaComponent },
  { path: 'list-areas', component: ListAreasComponent },
  { path: 'create-area', component: CreateAreaComponent },
  { path: '', redirectTo: 'list-employees', pathMatch: 'full' },
  { path: '**', redirectTo: 'list-employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
