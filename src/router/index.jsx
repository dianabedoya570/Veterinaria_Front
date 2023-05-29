import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Login,
  OwnersRegister,
  Owners,
  Pets,
  PetsRegister,
  Users,
  ConsultationNew,
  FollowPet,
  Vacunacion,
  Desparasitacion,
  WaitingRoom,
  Hospitalization,
  GeneralLoby,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/loby",
    element: <GeneralLoby />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/owners",
    element: <Owners />,
  },
  {
    path: "/owners-register",
    element: <OwnersRegister />,
  },
  {
    path: "/pets-register",
    element: <PetsRegister />,
  },
  {
    path: "/pets/:id",
    element: <Pets />,
  },
  {
    path: "/new-consultation",
    element: <ConsultationNew />,
  },
  {
    path: "/follow",
    element: <FollowPet />,
  },
  {
    path: "/vacunacion",
    element: <Vacunacion />,
  },
  {
    path: "/desparasitacion",
    element: <Desparasitacion />,
  },
  {
    path: "/waitingroom",
    element: <WaitingRoom />,
  },
  {
    path: "/hospitalization",
    element: <Hospitalization />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
