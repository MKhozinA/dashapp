import { createBrowserRouter, useLoaderData } from "react-router-dom";
import IndexPage from './pages/Home';
import AboutPage from './pages/About';
import JobsPage from "./pages/Jobs";
import SupportPage from "./pages/Support";

export let router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <IndexPage />;
    }
  },
  {
    path: "/about",
    Component() {
      return <AboutPage />;
    }
  },
  {
    path: "/jobs",
    Component() {
      return <JobsPage  />;
    }
  },
  {
    path: "/support",
    Component() {
      return <SupportPage />;
    }
  }
]);
