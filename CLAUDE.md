# Baby-AI Project: Complete Setup with Unit Testing

## 1. Create Comprehensive CLAUDE.md

- Document project: TypeScript baby advice website with week-specific guidance
- Include precise age calculation, LLM integration, and testing requirements
- Development commands, build processes, and testing workflows

## 2. Unit Testing Strategy for Baby-AI

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

## 3. Highly Specific Age Calculation System

- Week-specific for 0-52 weeks with comprehensive test coverage
- Month-specific for 1-3 years with edge case testing
- Day precision for newborns with boundary testing

## 4. Data Privacy & Security (with Testing)

- Client-side processing with unit tests for data handling
- API integration testing (mocked for unit tests)
- Privacy compliance validation

## 5. Testing Documentation in CLAUDE.md

- **Test commands**: `npm run test`, `npm run test:watch`, `npm run test:coverage`
- **Testing philosophy**: All age calculations must have 100% test coverage
- **Test structure**: Organized by feature with clear naming conventions
- **Mocking strategy**: Mock LLM API calls for consistent testing

## 6. Development Workflow

- Tests run on every commit (can be added to git hooks later)
- Coverage reports generated automatically
- Clear testing guidelines for future features
- Use semantic commit messages including semantic emojis

This ensures the critical age calculation logic is thoroughly tested while setting up a solid foundation for future end-to-end testing.