import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserPresentationComponent } from './teaser-presentation.component';

describe('TeaserPresentationComponent', () => {
  let component: TeaserPresentationComponent;
  let fixture: ComponentFixture<TeaserPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaserPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
