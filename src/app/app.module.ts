import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CadastrosComponent } from './components/pages/cadastros/cadastros.component';
import { ObstetriciaComponent } from './components/pages/obstetricia/obstetricia.component';
import { PacientesComponent } from './components/pages/pacientes/pacientes.component';
import { GinecologiaComponent } from './components/pages/ginecologia/ginecologia.component';
import { MessagesComponent } from './components/messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocomplete, MatAutocompleteModule} from '@angular/material/autocomplete';
import { UrgenciasComponent } from './components/pages/urgencias/urgencias.component';
import {MatTableModule} from '@angular/material/table';
import { TablePatientsComponent } from './components/pages/table-patients/table-patients.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CadastrosComponent,
    ObstetriciaComponent,
    PacientesComponent,
    GinecologiaComponent,
    MessagesComponent,
    UrgenciasComponent,
    TablePatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
