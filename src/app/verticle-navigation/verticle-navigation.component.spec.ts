import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticleNavigationComponent } from './verticle-navigation.component';

describe('VerticleNavigationComponent', () => {
  let component: VerticleNavigationComponent;
  let fixture: ComponentFixture<VerticleNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticleNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticleNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
