import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TemplateComponent } from './template/template.component';
import { EditComponent } from './edit/edit.component';
import { CreateTempComponent } from './create-temp/create-temp.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'}, // localhost:4200
  {path:'login', component:LoginPageComponent},
  {path: 'dashboard', component: DashboardComponent,children:[{path:'temp',component:TemplateComponent}]},
  {path:'temp' , component:TemplateComponent ,children:[{path:'edit',component:EditComponent}]},
  {path:'edit',component:EditComponent},
  {path:'create',component:CreateTempComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
