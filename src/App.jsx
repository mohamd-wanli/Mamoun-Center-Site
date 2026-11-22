import { RouterProvider } from "./i18n/navigation.jsx";
import { router } from "./app/router";

export default function App() {
    return <RouterProvider router={router} />;
}
