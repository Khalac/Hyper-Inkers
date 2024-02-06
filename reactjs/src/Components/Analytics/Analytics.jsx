// AnalyticsProvider.jsx
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

const AnalyticsProvider = ({ children }) => {
  return (
    <Analytics id="prj_2vMidn4ekHghh1T8l34Fnag5jfQv">
      {children}
    </Analytics>
  );
};

export default AnalyticsProvider;
