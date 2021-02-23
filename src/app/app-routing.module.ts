// Default
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: '', redirectTo:'login', pathMatch: 'full',}
  { path: 'produtos', component: ListaProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
