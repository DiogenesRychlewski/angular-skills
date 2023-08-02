import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(private http: HttpClient) {

  }
//POSSÍVEL POST DO HTTP CLIENT
  postCard(id: number, likes: number) {
    let params = {id: id, likes: likes}
    console.log("params: ", params)
    return this.http.post<any>('/api/skills', params);
  }

}