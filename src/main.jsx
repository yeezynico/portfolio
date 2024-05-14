import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import Text from './components/contact';

import App from './App';

const Appe = () => {
  return (
    <div>
      <App />
      <Text />
    </div>
  );
}

createRoot(document.getElementById('nav')).render(<Appe />);