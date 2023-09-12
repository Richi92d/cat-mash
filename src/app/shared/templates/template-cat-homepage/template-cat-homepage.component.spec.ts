import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCatHomepageComponent } from './template-cat-homepage.component';

describe('TemplateCatHomepageComponent', () => {
  let component: TemplateCatHomepageComponent;
  let fixture: ComponentFixture<TemplateCatHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCatHomepageComponent]
    });
    fixture = TestBed.createComponent(TemplateCatHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
