import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphsComponent } from './giphs.component';

describe('GiphsComponent', () => {
  let component: GiphsComponent;
  let fixture: ComponentFixture<GiphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
