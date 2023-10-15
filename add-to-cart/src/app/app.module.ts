import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { ParentComponent } from './parent and child/parent/parent.component';
import { ChildComponent } from './parent and child/child/child.component';
import { Comp1Component } from './subj/comp1/comp1.component';
import { Comp2Component } from './subj/comp2/comp2.component';
import { Comp3Component } from './subj/comp3/comp3.component';
import { Comp4Component } from './subj/comp4/comp4.component';
import { CustomDirective } from './custom.directive';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    CustomDirective,
    PipeComponent,
    FilterPipe,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
