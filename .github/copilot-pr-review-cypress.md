# GitHub Copilot PR Review Instructions for Cypress Tests

## Purpose

This file provides instructions for GitHub Copilot to review pull requests (PRs) that include Cypress end-to-end (E2E) tests.

## Review Checklist

- Ensure all new or updated Cypress tests are clear, maintainable, and follow best practices.
- Verify that test descriptions (`describe`, `it`) are meaningful and accurately describe the test's purpose.
- Check that API requests (e.g., `cy.request`) validate both status codes and response structure.
- Confirm that selectors used in tests are robust and not prone to breakage.
- Ensure that test data is handled safely and does not leak sensitive information.
- Validate that any custom commands or utilities are well-documented and reusable.
- Confirm that all tests pass locally and in CI before merging.

## Example Comments

- "Consider using data-\* attributes for more stable selectors."
- "Add assertions for error cases, not just success."
- "Test description could be more specific."

## Resources

- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Cypress API Docs](https://docs.cypress.io/api/table-of-contents)

---

_This file is intended for use by GitHub Copilot and human reviewers to ensure high-quality Cypress E2E test contributions._
