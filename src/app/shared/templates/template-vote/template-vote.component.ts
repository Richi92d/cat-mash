import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from 'src/app/cat/interface/cat.interface';

@Component({
  selector: 'app-template-vote',
  templateUrl: './template-vote.component.html',
  styleUrls: ['./template-vote.component.scss']
})
export class TemplateVoteComponent {

  @Input() public twoCats: Cat[] = [];
  @Output() public emitVote: EventEmitter<string> = new EventEmitter<string>();

  voteForThisCat(id: string) {
    this.emitVote.emit(id);
  }

}
