import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from '../sala';

import { SalaService } from '../sala.service';

@Component({
  selector: 'app-criar-sala',
  templateUrl: './criar-sala.component.html',
  styleUrls: ['./criar-sala.component.css']
})
export class CriarSalaComponent implements OnInit{

  sala: Sala = new Sala();
  submitted =false;

  constructor(private salaService:SalaService, private router: Router){}

  ngOnInit(): void {}

  newSala():void{
    this.submitted=false;
    this.sala= new Sala();
  }

  save(){
    this.salaService.createSala(this.sala)
    .subscribe(data =>console.log(data),
    error=> console.log(error));
    this.sala= new Sala();
    this.gotoList;
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/salas'])
  }
}
