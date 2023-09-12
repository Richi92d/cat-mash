import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVoteComponent } from './template-vote.component';

describe('TemplateVoteComponent', () => {
  let component: TemplateVoteComponent;
  let fixture: ComponentFixture<TemplateVoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateVoteComponent]
    });
    fixture = TestBed.createComponent(TemplateVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
