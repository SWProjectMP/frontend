import { RouterProvider } from "react-router-dom";
import router from "./libs/router";

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
