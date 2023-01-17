import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sala } from '../Sala';
import { SalaService } from '../sala.service';

@Component({
  selector: 'app-lista-sala',
  templateUrl: './lista-sala.component.html',
  styleUrls: ['./lista-sala.component.css']
})
export class ListaSalaComponent implements OnInit{

  salas!:Observable<Sala[]>;

  constructor(private salaService: SalaService, private router: Router){}

  ngOnInit() {
    this.reloadData;
  }

  public reloadData(){
    this.salas = this.salaService.getSalasList()
  }

  public deletaSala(id:number){
    this.salaService.deleteSala(id).subscribe(() =>{
      console.log()
      this.reloadData;
    },
    console.error()

    )
  }

  public atualizarSala(id:number){
    this.router.navigate(['atualizar',id]);
  }

  public detalhesSala(id:number){
    this.router.navigate(['detalhes',id]);
  }
}
