import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ListAreasComponent } from './components/list-areas/list-areas.component';
import { CreateAreaComponent } from './components/create-area/create-area.component';
import { MenuComponent } from './components/menu/menu.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { UpdateAreaComponent } from './components/update-area/update-area.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    ListAreasComponent,
    CreateAreaComponent,
    MenuComponent,
    UpdateEmployeeComponent,
    UpdateAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
