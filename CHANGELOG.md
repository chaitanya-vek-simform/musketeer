# Changelog

## [1.0.0] – 2026-01-23

### Added
- Product listing page with live client-side search (#3)
- Login and signup pages with bcrypt + JWT authentication (#9)
- Shopping cart with localStorage persistence (#11)
- GitHub Actions CI pipeline (test + lint) (#7)
- XSS sanitization for all user-controlled inputs (#hotfix)

### Fixed
- Mobile navigation links hidden on small screens (#5)
- Cart link missing `id` attribute (#5)

### Security
- All user input now passes through `sanitize()` before DOM insertion
- `.env` is git-ignored; `.env.example` added with safe placeholder values
- Backend auth uses `bcryptjs` with 12 salt rounds and short-lived JWTs
