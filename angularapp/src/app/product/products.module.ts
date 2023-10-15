import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';


const prodRoutes: Routes =[
  { path:'',component: ProductComponent , children: [ 
      {path : 'laptop', component: LaptopComponent},
      {path: 'tv', component: TvComponent},
      {path: 'mobile', component: MobileComponent},
      {path: 'washingmachine', component:  WashingMachineComponent}
  ] }
  
]
@NgModule({
  declarations: [
    ProductComponent,
    MobileComponent,
    LaptopComponent,
    TvComponent,
    WashingMachineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes)
  ],
  exports: [RouterModule] 
})
export class ProductsModule {
  constructor() {
    console.log('ProductsModule called');
  } 
 }
