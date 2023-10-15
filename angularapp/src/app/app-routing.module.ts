import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PipeComponent } from './pipe/pipe.component';


const routes : Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'}, // localhost:4200
  {path: 'login', component: LoginComponent}, 
  { path: 'about-us', component: AboutusComponent}, // localhost:4200/about-us
  { path: 'contact-us', component: ContactusComponent},
  {path: 'product', loadChildren: './product/products.module#ProductsModule'},
  { path: 'posts', component: PostlistComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  { path: 'pipe', component: PipeComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log(`app rotuing module called.`);
    
  }
}


