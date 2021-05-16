import { Component } from '@angular/core';
import { Player } from './models/player';
import { AppService } from './services/app.service';
import { Result } from './models/result';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokenpo-ui';
  p1: Player = new Player();
  p2: Player = new Player();
  result: String = '';
  imgResult: String = '../assets/jokenpo.png';
  messageResult: String = '';

  constructor(private appService: AppService, private toastr: ToastrService) {}

  setChoice(player: Player, choice: string) {
    player.choice = choice;
  }

  setResult(resp: Result) {
    this.result = resp.data;

    if (this.result === 'p1') {
      this.messageResult = 'O jogador 1 venceu!';
      this.imgResult = `../assets/${this.p1.choice}.png`;
      return;
    } else if(this.result === 'p2') {
      this.messageResult = 'O jogador 2 venceu!';
      this.imgResult = `../assets/${this.p2.choice}.png`;
    } else {
      this.messageResult = 'A partida empatou!';
      this.imgResult = `../assets/equal.png`;
    }
  }

  getResult() {
    this.appService.getResult(this.p1.choice, this.p2.choice)
    .subscribe(
      resp => this.setResult(resp),
      error => this.toastr.error(error.error,'Erro'))
  }

}
