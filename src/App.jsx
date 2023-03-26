import { RouterProvider } from "react-router-dom";
import router from "./libs/router";
import "virtual:svg-icons-register";

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
