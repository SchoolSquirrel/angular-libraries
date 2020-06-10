import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquirrelChatUiComponent } from './squirrel-chat-ui.component';

describe('SquirrelChatUiComponent', () => {
  let component: SquirrelChatUiComponent;
  let fixture: ComponentFixture<SquirrelChatUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquirrelChatUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquirrelChatUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
