import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UnathorizedComponent } from './unathorized/unathorized.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthGuard } from './guards/AuthGuard';
import { Role } from './models/role';
//import { Role } from './models/Role';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  { path: 'profile',
    component: ProfileComponent},

  { path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.Admin]}
    },
  

  { path: 'detail/:id',
    component: DetailComponent,
    }
  ,

  {path: '404', component: NotfoundComponent},
  {path: '401', component: UnathorizedComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DetailComponent,
    LoginComponent,
    NotfoundComponent,
    ProfileComponent,
    RegisterComponent,
    UnathorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
