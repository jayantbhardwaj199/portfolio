import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersecondComponent } from './headersecond.component';

describe('HeadersecondComponent', () => {
  let component: HeadersecondComponent;
  let fixture: ComponentFixture<HeadersecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
