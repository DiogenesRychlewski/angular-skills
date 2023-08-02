import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() card;

  count: number = 1;
  array: any = [];

  constructor(
    private api: CardService
    ) { }

  ngOnInit() {
    this.array.push(this.card)
  }

  onLike(id: number, likes: number){
    // TODO: incrementar o like, salvar via rest
    this.count++;
    likes = this.count;
    this.array.filter(function(obj) {
      obj.likes = likes
      return obj
    })
    
    // NÃO ENTENDI COMO ESPECIFICAR A ROTA PARA ENVIO / SALVAMENTO VIA REST, ESTA SERIA A FUNCAO QUE CHAMARIA NA card.service.ts:
    // this.api.postCard(id, likes).subscribe(res => {
    //  console.log(res)
    //})
    
  
  }

  onShare(card: any){
    window.open("https://www.linkedin.com/in/diógenes-rychlewski-ab4b1718a/", '_blank');
  }

}
