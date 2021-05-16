import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'http://localhost:3000/api/jokenpos'

  constructor(private http : HttpClient) { }

  getResult(choiceP1: string, choiceP2: string): Observable<Result>{
    return this.http.get<Result>(`${this.url}?player1=${choiceP1}&player2=${choiceP2}`);
  }
}
