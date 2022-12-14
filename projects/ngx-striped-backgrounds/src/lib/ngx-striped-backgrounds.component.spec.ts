import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStripedBackgroundsComponent } from './ngx-striped-backgrounds.component';

describe('NgxStripedBackgroundsComponent', () => {
  let component: NgxStripedBackgroundsComponent;
  let fixture: ComponentFixture<NgxStripedBackgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStripedBackgroundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxStripedBackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
