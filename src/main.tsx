
import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router';
import router from './router/router.ts';
import './index.css'



const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
  <RouterProvider router={router} />
)