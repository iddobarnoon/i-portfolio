import { useEffect, useRef } from 'react';
import { portfolioMarkup, initializePortfolio } from './portfolio';

export default function App() {
  const root = useRef(null);
  useEffect(() => initializePortfolio(root.current), []);
  return <div ref={root} dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />;
}
