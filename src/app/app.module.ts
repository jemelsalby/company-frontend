import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';



const routes:Routes=[
  {
path:"",component:AdminloginComponent
  },
  {
    path:"emplogin",component:EmployeeloginComponent
      },
      {
        path:"seclogin",component:SecurityloginComponent
          },
          {
            path:"adminhome",component:AdminComponent
              },
              {
                path:"addemp",component:AddemployeeComponent
                  },
                  {
                    path:"viewemp",component:EmployeeviewComponent
                      },
                      {
                        path:"searchemp",component:SearchemployeeComponent
                          }


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    SecurityloginComponent,
    AdminComponent,
    AdminNavbarComponent,
    AddemployeeComponent,
    EmployeeviewComponent,
    SearchemployeeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
RouterModule.forRoot(routes),
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
