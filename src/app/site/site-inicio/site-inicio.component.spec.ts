import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInicioComponent } from './site-inicio.component';

describe('SiteInicioComponent', () => {
  let component: SiteInicioComponent;
  let fixture: ComponentFixture<SiteInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
