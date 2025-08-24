import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Start from "./pages/Start";



function App() {
 const routes = createBrowserRouter([
  {
    path: "/", element: <Layout />,children: [

      { index: true, element: <Start /> },      
      { path: "portfolio", element: <Portfolio/>},
      { path: "about", element: <About/> },
      { path: "contact", element: <Contact/> },
    ],
  },
]);
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    
    </>
  )
}
export default App
