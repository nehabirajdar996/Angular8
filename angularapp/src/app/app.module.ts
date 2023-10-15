import { BrowserModule } from '@angular/platform-browser';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { ComponentComponent } from './component/component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordGenComponent } from './password-gen/password-gen.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './custom.directive';
import { NgforAssignComponent } from './ngfor-assign/ngfor-assign.component';
import { StrucralDirectiveAssignComponent } from './strucral-directive-assign/strucral-directive-assign.component';
import { SwitchcaseAssignmentComponent } from './switchcase-assignment/switchcase-assignment.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormEXAComponent } from './form-exa/form-exa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgforAssignComponent } from './ngfor-assign/ngfor-assign.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { FormAssignComponent } from './form-assign/form-assign.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AssignmentReactiveformComponent } from './assignment-reactiveform/assignment-reactiveform.component';
import { NewreactiveformComponent } from './newreactiveform/newreactiveform.component';
import { Service2Component } from './service2/service2.component';
import { Service1Component } from './service1/service1.component';
import { MyserviceService } from './service/myservice.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import { DropdownBindingComponent } from './dropdown-binding/dropdown-binding.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { Copm1Component } from './copm1/copm1.component';
import { Copm2Component } from './copm2/copm2.component';
import { Copm3Component } from './copm3/copm3.component';
import { Copm4Component } from './copm4/copm4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostlistComponent } from './postlist/postlist.component';
import { SpaceComponent } from './space/space.component';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './filter.pipe';
import { HooksComponent } from './hooks/hooks.component';
import { GetAPIComponent } from './get-api/get-api.component';
import { HeadersInterceptorService } from './interceptor/headers-interceptor.service';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ParentComponent } from './parent and child/parent/parent.component';
import { ChildComponent } from './parent and child/child/child.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    ComponentComponent,
    DataBindingComponent,
    PasswordGenComponent,
    NgifComponent,
    NgForComponent,
    NgswitchComponent,
    NgStyleComponent,
    NgclassComponent,
    CustomDirective,
    NgforAssignComponent,
    StrucralDirectiveAssignComponent,
    SwitchcaseAssignmentComponent,
    TemplateformComponent,
    FormEXAComponent,
    FormAssignComponent,
    ReactiveformComponent,
    AssignmentReactiveformComponent,
    NewreactiveformComponent,
    Service2Component,
    Service1Component,
    PostComponent,
    TodoComponent,
    DropdownBindingComponent,
    RapidapiComponent,
    Copm1Component,
    Copm2Component,
    Copm3Component,
    Copm4Component,
    AboutusComponent,
    ContactusComponent,
   
    PagenotfoundComponent,
    LoginComponent,
     
    PostdetailsComponent,
    PostlistComponent,
    SpaceComponent,
    PipeComponent,
    FilterPipe,
    HooksComponent,
    GetAPIComponent,
    RxjsComponent,
    ParentComponent,
    ChildComponent,
    UserComponent,
    UsersComponent,
    AddUserComponent,
   
    // NgforAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(){
  console.log(`app module called.`);
  
}
 }

