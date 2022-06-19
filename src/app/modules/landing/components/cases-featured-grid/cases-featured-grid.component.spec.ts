import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesFeaturedGridComponent } from './cases-featured-grid.component';

describe('CasesFeaturedGridComponent', () => {
  let component: CasesFeaturedGridComponent;
  let fixture: ComponentFixture<CasesFeaturedGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesFeaturedGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesFeaturedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
