import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenericComponent } from './my-generic.component';

describe('MyGenericComponent', () => {
  let component: MyGenericComponent;
  let fixture: ComponentFixture<MyGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
