import React from 'react';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
  processId: string;
}

declare const AnalyticsWrapper: React.FC<AnalyticsWrapperProps>;

export default AnalyticsWrapper;