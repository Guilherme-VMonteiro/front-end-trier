import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuButtonComponent } from './sub-menu-button.component';

describe('SubMenuButtonComponent', () => {
  let component: SubMenuButtonComponent;
  let fixture: ComponentFixture<SubMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubMenuButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
