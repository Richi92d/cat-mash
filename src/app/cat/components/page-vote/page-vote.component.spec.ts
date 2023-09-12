import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVoteComponent } from './page-vote.component';

describe('PageVoteComponent', () => {
  let component: PageVoteComponent;
  let fixture: ComponentFixture<PageVoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageVoteComponent]
    });
    fixture = TestBed.createComponent(PageVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
