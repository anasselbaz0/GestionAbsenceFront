import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencesEtudiantsComponent } from './absences-etudiants.component';

describe('AbsencesEtudiantsComponent', () => {
  let component: AbsencesEtudiantsComponent;
  let fixture: ComponentFixture<AbsencesEtudiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsencesEtudiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsencesEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
