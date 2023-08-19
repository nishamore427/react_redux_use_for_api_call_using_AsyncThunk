import logo from './logo.svg';
import {Provider as ReduxProvider} from 'react-redux'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import './App.css';
import Layout from './component/Layout';
import Homepage from './component/Homepage';
import Contact from './component/Contact';
import NotFound from './component/NotFound';
import {store} from './store'

function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path ="/" element = {<Layout />}>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path = "*" element={<NotFound/>}/>
        </Route>
      )
  )

  return (
    <div>
    <ReduxProvider store = {store}>
    <RouterProvider router = {router} />
    </ReduxProvider>
     
    </div>
  );
}

export default App;
