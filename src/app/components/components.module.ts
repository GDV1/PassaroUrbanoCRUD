// Default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';


@NgModule({
  declarations: [ 
    LoginComponent, 
    ListaProdutosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    ListaProdutosComponent
  ]
})
export class ComponentsModule { }
