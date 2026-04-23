# Exploration Notes

## Observations

- Login requires predefined credentials
- Product list is static
- Cart updates instantly after adding items

## Potential Risk Areas

- Login validation
- Cart state consistency
- Checkout form validation

## Questions

- **Q:** What happens if checkout info is incomplete?
  **A:** The system blocks progression and displays a validation error (e.g., "Error: First Name is required"). Validation is applied one field at a time.

- **Q:** Is session maintained after refresh?
  **A:** Yes. The user remains logged in after page refresh and navigation. Session is cleared only after logout.
