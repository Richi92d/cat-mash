import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-template-cat-homepage',
  templateUrl: './template-cat-homepage.component.html',
  styleUrls: ['./template-cat-homepage.component.scss']
})
export class TemplateCatHomepageComponent {

  @Output() public emitClickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  goToVotePage(event: MouseEvent) {
    this.emitClickEvent.emit(event)
  }
}
