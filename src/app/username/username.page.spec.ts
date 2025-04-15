import { UsernameService } from './username.service';

describe('UsernameService', () => {
  let service: UsernameService;

  beforeEach(() => {
    service = new UsernameService();
  });

  it('should generate a username that includes base', () => {
    const base = 'test';
    const username = service.generateUsername(base);
    expect(username).toContain(base);
  });

  it('should add something before and after the base', () => {
    const base = 'user';
    const result = service.generateUsername(base);
    expect(result.length).toBeGreaterThan(base.length);
  });
});
