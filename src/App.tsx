
import { Fragment } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import { router } from "./routes";
import { myTheme } from './themeManagment';
import { Fallback } from './pages'
import { ModalsProvider } from '@mantine/modals';


function App() {



  return (
    <MantineProvider theme={{ ...myTheme }} withCssVariables >
    <Notifications/>
      <Fragment>
         <ModalsProvider>
            <RouterProvider router={router} fallbackElement={<Fallback />} />
        </ModalsProvider>
      </Fragment>
  </MantineProvider>
  );
}
 
export default App
