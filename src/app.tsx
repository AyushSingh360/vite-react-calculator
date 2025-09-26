import React from 'react';
import Calculator from './components/Calculator';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" 
         style={{ backgroundColor: 'var(--color-primary)' }}>
      <ThemeToggle />
      <Calculator />
    </div>
  );
}

export default App;
