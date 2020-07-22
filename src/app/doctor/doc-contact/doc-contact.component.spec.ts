import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocContactComponent } from './doc-contact.component';

describe('DocContactComponent', () => {
  let component: DocContactComponent;
  let fixture: ComponentFixture<DocContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
