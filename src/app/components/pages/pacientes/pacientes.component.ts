import { Paciente } from 'src/app/Paciente';
import { Component, OnInit, NgModule, Input, Output } from '@angular/core';
import { PacienteService } from 'src/app/paciente.service';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/messages.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { MatFormField } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  genero: string = 'Masculino'
  //@Input() pacientes?: Paciente[] = [];
  @Output() pacientes: Paciente[] = [];
  metaPage?: Paciente[] = [];
  pacienteForm!: FormGroup;

  length = 0;
  pageSize = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  MatFormField = MatFormField
  totalSize = 0;
  currentPage = 0;
  pageEvent = 0;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  //pageEvent: PageEvent;
  @Output() patients:any = [];


  constructor (
    private pacienteService: PacienteService,
    private router: Router,
    private messageService: MessagesService
    ) { }

  ngOnInit(): void {

    //this.patients.push({"nome":"Vinicius","email":"vinicius_carvalho@hotmail.com"})

    this.patients = [{
      'nome': 'Vinicius',
      'email': 'vinicius_carvalho@hotmail.com',
      'telefone': '99999999',
      'idade': 38,
      'sexo': 'Masculino',
      'peso': 96,
      'altura': 1.72
    }]

    this.patients.push(this.patients)

    /*
    this.pacienteService.getPacientes().subscribe((item) => {
        this.pacientes = item.data;

    })
     */

    this.pacienteForm = new FormGroup({
      nome: new FormControl(),
      email: new FormControl(),
      telefone: new FormControl(),
      idade: new FormControl(),
      sexo: new FormControl(),
      peso: new FormControl(),
      altura: new FormControl()
    })

  }
  get nome() {
      return this.pacienteForm.get('nome')
  }
  get email() {
      return this.pacienteForm.get('email')
  }
  get telefone() {
    return this.pacienteForm.get('telefone')
  }
  get idade() {
    return this.pacienteForm.get('idade')
  }
  get sexo() {
    return this.pacienteForm.get('sexo')
  }
  get peso() {
    return this.pacienteForm.get('peso')
  }
  get altura() {
    return this.pacienteForm.get('altura')
  }
  /*
  async onSubmit() {
    if (this.pacienteForm.invalid) {
      return
    }
    const newPaciente: Paciente = this.pacienteForm.value;

    await this.pacienteService
              .createPaciente(newPaciente)
              .subscribe((item) => this.pacientes?.push(item.data));
              this.messageService.add('Paciente Adicionado com Sucesso')
              this.pacienteForm.reset();
  }
  */
  public applyFilter(event: any) {
    //return console.log();
  }
}
