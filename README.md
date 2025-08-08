# QuizMaster Pro

This repository contains a minimal skeleton for the QuizMaster Pro platform.

- `backend` - Spring Boot application with sample REST endpoints and simple
  in-memory H2-backed `User` and `Category` APIs.
- `frontend` - React + TypeScript application with a basic entry point and forms
  to add and list users and categories.

Both modules are placeholders for future development.

## Development Status

### Completed Pages
- Basic user list and creation form in the React frontend interacting with the `User` API.
- Simple login page posting to a backend `/api/auth/login` endpoint.
- Category list and creation form interacting with the `Category` API.
- Question list and creation form interacting with the `Question` API.
- Exam list and creation form interacting with the `Exam` API.
- Landing page with a minimalist Apple-inspired hero section.
- Pricing page showing sample subscription tiers.

### Pages to Develop
- Public: Authentication (registration).
- Admin: Dashboard, User Management, Category Management, Question Bank, Exam Creation, Results & Analytics.
- User: Exam Portal, Exam Interface, Results page.

This list follows the high-level requirements for QuizMaster Pro and will expand as the platform evolves.
