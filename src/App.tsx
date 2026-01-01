import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
// import "mapbox-gl/dist/mapbox-gl.css";


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App