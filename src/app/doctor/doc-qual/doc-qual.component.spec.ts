import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocQualComponent } from './doc-qual.component';

describe('DocQualComponent', () => {
  let component: DocQualComponent;
  let fixture: ComponentFixture<DocQualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocQualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocQualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
