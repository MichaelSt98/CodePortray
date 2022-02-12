import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyableComponent } from './copyable.component';

describe('CopyableComponent', () => {
  let component: CopyableComponent;
  let fixture: ComponentFixture<CopyableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyableComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
