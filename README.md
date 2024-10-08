# arlink-analytics

ARlink Analytics is a React component wrapper that provides easy integration with ARlink analytics for your web application. It automatically tracks page visits and sends analytics data to the AO network.

## Installation

You can install arlink-analytics using npm, yarn, or bun:

```bash
npm install arlink-analytics
# or
yarn add arlink-analytics
# or
bun add arlink-analytics
```

## Usage

To use arlink-analytics in your React project, follow these steps:

1. Import the `AnalyticsWrapper` component in your main App file:

```javascript
import  AnalyticsWrapper  from 'arlink-analytics/src/AnalyticsWrapper';
```

2. Wrap your routes with the `AnalyticsWrapper` component and pass the `processId`:

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  AnalyticsWrapper  from 'arlink-analytics/src/AnalyticsWrapper';

function App() {
  return (
    <Router>
      <AnalyticsWrapper processId="your-process-id-here">
        <Routes>
          {/* Your routes here */}
        </Routes>
      </AnalyticsWrapper>
    </Router>
  );
}
```

Replace `"your-process-id-here"` with the process ID generated by ARlink or ARlink analytics viewer.

## Example

Here's a complete example of how to integrate arlink-analytics into your React application:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  AnalyticsWrapper  from 'arlink-analytics/src/AnalyticsWrapper';

import { AnalyticsDashboardComponent } from './components/analytics-dashboard';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <AnalyticsWrapper processId="KgeRB6uIOmh-zFj2JUIpPvaVcY_CKBvwzpAMPWyi2pI">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<AnalyticsDashboardComponent />} />
        </Routes>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
```

## Viewing Analytics

To view your analytics:

1. Go to the ARlink analytics viewer.
2. Paste your Process ID (PID) into the viewer.
3. You will be able to see analytics data for your application.

## Features

- Automatic page visit tracking
- Integration with ARlink network
- Easy setup with React Router
- Supports multiple pages/routes

## Dependencies

This package requires the following peer dependencies:

- react
- react-router-dom
- @permaweb/aoconnect
- arweave
- warp-arbundles

Make sure these are installed in your project.

## License

[MIT License](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any problems or have any questions, please open an issue in the GitHub repository.

---

Happy coding with ARlink Analytics!
