import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { appRoutes } from './app/pages/app-routes.ts';

const App: () => JSX.Element = () => <RouterProvider router={appRoutes} />;

export default App;
