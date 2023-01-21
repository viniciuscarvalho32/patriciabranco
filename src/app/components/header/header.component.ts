import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  colorObstetricia = "";
  colorGinecologia = "";
  colorPacientes = "";
  valorCampo = "";
  constructor() { }

  ngOnInit(): void {
  }

  clickObs() {
    this.colorObstetricia = "black";
    this.colorGinecologia = "";
  }
  clickGin() {
    this.colorGinecologia = "black";
    this.colorObstetricia = "";
  }
  clickPac() {
    this.colorPacientes = "black";
    this.colorGinecologia = "";
    this.colorObstetricia = "";
  }
}
