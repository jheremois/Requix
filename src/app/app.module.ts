import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { UserService } from "./services/userservice/user.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UserComponent } from './components/user/user.component';
import { UserviewComponent } from './pages/userview/userview.component';
import { BuscausuarioComponent } from './pages/buscausuario/buscausuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SectionComponent,
    CreateFormComponent,
    UserslistComponent,
    UserComponent,
    UserviewComponent,
    BuscausuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
