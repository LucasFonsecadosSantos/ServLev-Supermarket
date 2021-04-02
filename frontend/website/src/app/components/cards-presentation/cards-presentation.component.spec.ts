import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPresentationComponent } from './cards-presentation.component';

describe('CardsPresentationComponent', () => {
  let component: CardsPresentationComponent;
  let fixture: ComponentFixture<CardsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
