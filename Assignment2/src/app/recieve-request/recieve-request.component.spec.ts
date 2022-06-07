import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveRequestComponent } from './recieve-request.component';

describe('RecieveRequestComponent', () => {
  let component: RecieveRequestComponent;
  let fixture: ComponentFixture<RecieveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieveRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
