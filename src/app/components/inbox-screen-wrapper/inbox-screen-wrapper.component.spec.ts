import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxScreenWrapperComponent } from './inbox-screen-wrapper.component';

describe('InboxScreenWrapperComponent', () => {
  let component: InboxScreenWrapperComponent;
  let fixture: ComponentFixture<InboxScreenWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxScreenWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxScreenWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
