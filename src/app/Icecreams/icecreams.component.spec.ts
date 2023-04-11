import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamsComponent } from './icecreams.component';

describe('IcecreamsComponent', () => {
  let component: IcecreamsComponent;
  let fixture: ComponentFixture<IcecreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcecreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcecreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
