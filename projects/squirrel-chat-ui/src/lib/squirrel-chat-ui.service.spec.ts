import { TestBed } from '@angular/core/testing';

import { SquirrelChatUiService } from './squirrel-chat-ui.service';

describe('SquirrelChatUiService', () => {
  let service: SquirrelChatUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquirrelChatUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
