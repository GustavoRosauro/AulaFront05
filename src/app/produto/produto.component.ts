import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../Model/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produto: Produto;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.produto = new Produto();
  }
  numero: String = '0';

  ngOnInit() {
    this.numero = this.route.snapshot.paramMap.get("id");
    this.http.get<Produto>(`/produto/${this.numero}`).subscribe(result =>{
       this.produto = result;
    })
  }

}
