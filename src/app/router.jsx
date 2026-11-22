import { createBrowserRouter } from "react-router-dom";

import SiteLayout from "../components/layout/SiteLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CoursesPage from "../pages/CoursesPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import ServicesPage from "../pages/ServicesPage";
import StudentWorkPage from "../pages/StudentWorkPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";


const pages = [
  { index: true, element: <HomePage /> },
  { path: "about", element: <AboutPage /> },
  { path: "courses", element: <CoursesPage /> },
  { path: "courses/:slug", element: <CourseDetailsPage /> },
  { path: "services", element: <ServicesPage /> },
  { path: "student-work", element: <StudentWorkPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "*", element: <NotFoundPage /> },
];
export const router = createBrowserRouter([
  { path: "/en", element: <SiteLayout />, children: pages },
  { path: "/", element: <SiteLayout />, children: pages },
]);
