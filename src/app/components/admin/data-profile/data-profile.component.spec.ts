import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProfilComponent } from './data-profil.component';

describe('DataProfilComponent', () => {
  let component: DataProfilComponent;
  let fixture: ComponentFixture<DataProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
