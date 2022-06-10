import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuModule } from './shared/menu/menu.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCarroComponent } from './cadastro-carro/cadastro-carro.component';
import { CadastroCarroModule } from './cadastro-carro/cadastro-carro.module';
import { HomePainelComponent } from './home-painel/home-painel.component';
import { HomePainelModule } from './home-painel/home-painel.module';
import { FormCarComponent } from './form-car/form-car.component';
import { FormCarModule } from './form-car/form-car.module';
import { FormCarService } from './form-car/form-car.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCarroComponent,
    HomePainelComponent,
    FormCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroCarroModule,
    HomePainelModule,
    FormsModule,
    HttpClientModule,
    FormCarModule,
    ReactiveFormsModule,
    MenuModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [FormCarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
