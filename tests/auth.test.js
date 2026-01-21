// auth.test.js – integration test stubs for auth routes
// Requires a test DB and Jest to run.

describe('POST /api/signup', () => {
  it('returns 400 when fields are missing', async () => { /* ... */ });
  it('returns 400 when password is shorter than 8 chars', async () => { /* ... */ });
  it('returns 201 on valid signup', async () => { /* ... */ });
});

describe('POST /api/login', () => {
  it('returns 401 for unknown email', async () => { /* ... */ });
  it('returns 401 for wrong password', async () => { /* ... */ });
  it('returns 200 with JWT token on success', async () => { /* ... */ });
});
