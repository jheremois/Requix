import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { UserviewComponent } from "./pages/userview/userview.component";
import { BuscausuarioComponent } from "./pages/buscausuario/buscausuario.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserviewComponent},
  {path: 'ansu/:un', component: BuscausuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
