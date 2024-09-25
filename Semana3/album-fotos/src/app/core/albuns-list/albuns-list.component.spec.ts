import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunsListComponent } from './albuns-list.component';

describe('AlbunsListComponent', () => {
  let component: AlbunsListComponent;
  let fixture: ComponentFixture<AlbunsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbunsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbunsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
