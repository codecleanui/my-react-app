
import { Fragment } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from "./routes";
import { Fallback } from './pages'
import { ModalsProvider } from '@mantine/modals';
import MantineProvider from './mantine/provider';


function App() {



  return (
    <MantineProvider  >
      <Fragment>
         <ModalsProvider>
            <RouterProvider router={router} fallbackElement={<Fallback />} />
        </ModalsProvider>
      </Fragment>
  </MantineProvider>
  );
}
 
export default App
