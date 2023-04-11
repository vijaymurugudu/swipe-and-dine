import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeffinComponent } from './teffin.component';

describe('TeffinComponent', () => {
  let component: TeffinComponent;
  let fixture: ComponentFixture<TeffinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeffinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeffinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
