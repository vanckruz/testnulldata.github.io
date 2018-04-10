import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailWorkerComponent } from './datail-worker.component';

describe('DatailWorkerComponent', () => {
  let component: DatailWorkerComponent;
  let fixture: ComponentFixture<DatailWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
