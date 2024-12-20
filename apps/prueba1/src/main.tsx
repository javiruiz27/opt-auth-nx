import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AppStarter } from './AppStarter';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppStarter />
    </BrowserRouter>
  </StrictMode>
);
