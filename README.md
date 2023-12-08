# Front-end Developer Technical Test

## Overview
This test aims to evaluate the candidate's skills in React, TypeScript, data handling, and integration with third-party libraries. The primary focus is on writing clean, maintainable, and type-safe code, with efficient data processing and rendering capabilities.

## Requirements

### Framework and Language
- **Framework**: React
- **Language**: TypeScript

### Data Fetching and Processing
- Implement functionality to fetch user data from the provided endpoint: `https://jsonplaceholder.typicode.com/users`

### Ag-Grid Integration
- Create a React component to integrate Ag-Grid for displaying the fetched data.
- Reference: [Ag-Grid Documentation](https://www.ag-grid.com/)

### Column Customisation
- **ID Column**: Should be hidden from view.
- **Email Column**: Should contain `mailto` links, allowing direct email composition on click.
- **Address Column**: Style with a blue background and white text.
- **Website Column**: Display data as clickable links to actual websites.
- **Company Column**: Group the data. More info at [Ag-Grid Column Groups](https://www.ag-grid.com/react-data-grid/column-groups/).

### Unit Testing
- Write basic unit tests to ensure the grid renders correctly.

### Bonus (Optional)
- Design the component to be configurable for handling data and columns of various shapes and formats.
- Extend unit tests to cover more scenarios.

## Aim of Exercise
The exercise is designed to assess your abilities in:
- React and TypeScript usage.
- Data handling and processing.
- Integration with third-party libraries, particularly Ag-Grid.
- Emphasis on clean code, maintainability, type safety, and efficient data rendering.
