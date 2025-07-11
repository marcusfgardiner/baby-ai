# Baby-AI Project: Complete Setup with Unit Testing

## 1. Create Comprehensive CLAUDE.md

- Document project: TypeScript baby advice website with week-specific guidance
- Include precise age calculation, LLM integration, and testing requirements
- Development commands, build processes, and testing workflows

## 2. Vite + TypeScript Template Setup

- Use `npm create vite@latest . -- --template vanilla-ts`
- Install dependencies and configure Airbnb ESLint
- Set up professional code formatting

## 3. Unit Testing Framework Setup

### Testing Stack:

- **Vitest** (Vite's native test runner - faster than Jest)
- **@testing-library/dom** for DOM testing utilities
- **@testing-library/user-event** for user interaction testing
- **@vitest/coverage-v8** for code coverage reports

### Test Configuration:

- Configure `vitest.config.ts` with TypeScript support
- Set up test scripts in `package.json`
- Configure coverage thresholds and reporting

## 4. Unit Testing Strategy for Baby-AI

### Core Functions to Test:

- **Age calculation functions** (critical accuracy)
  - Date of birth to weeks/months/days
  - Edge cases: leap years, timezone handling
  - Boundary conditions: newborn vs infant vs toddler
- **Input validation**
  - Date validation (no future dates, reasonable age ranges)
  - Form field validation and sanitization
- **LLM prompt generation**
  - Age-specific context injection
  - Safety disclaimer inclusion
  - Prompt formatting and structure

### Test Categories:

- **Pure functions**: Age calculations, date utilities
- **Input validation**: Form validation logic
- **Data transformation**: User input to LLM prompts
- **Safety checks**: Medical disclaimer display, age-appropriate warnings

## 5. Highly Specific Age Calculation System

- Week-specific for 0-52 weeks with comprehensive test coverage
- Month-specific for 1-3 years with edge case testing
- Day precision for newborns with boundary testing

## 6. Data Privacy & Security (with Testing)

- Client-side processing with unit tests for data handling
- API integration testing (mocked for unit tests)
- Privacy compliance validation

## 7. Testing Documentation in CLAUDE.md

- **Test commands**: `npm run test`, `npm run test:watch`, `npm run test:coverage`
- **Testing philosophy**: All age calculations must have 100% test coverage
- **Test structure**: Organized by feature with clear naming conventions
- **Mocking strategy**: Mock LLM API calls for consistent testing

## 8. Development Workflow

- Tests run on every commit (can be added to git hooks later)
- Coverage reports generated automatically
- Clear testing guidelines for future features

This ensures the critical age calculation logic is thoroughly tested while setting up a solid foundation for future end-to-end testing.