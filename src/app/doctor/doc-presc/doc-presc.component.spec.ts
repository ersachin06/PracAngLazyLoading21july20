import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPrescComponent } from './doc-presc.component';

describe('DocPrescComponent', () => {
  let component: DocPrescComponent;
  let fixture: ComponentFixture<DocPrescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocPrescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPrescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
