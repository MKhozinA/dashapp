import { createBrowserRouter, useLoaderData } from "react-router-dom";
import IndexPage from './pages/Home';
import AboutPage from './pages/About';
import SupportPage from "./pages/Support";
import BeritaPage from "./pages/Berita";
import LoginPage from "./pages/Login";
import { DashboardLayout } from "./pages/DashboardPage";
import DataAlumniPage from "./pages/DataAlumni";
import LowonganPekerjaanPage from "./pages/LowonganPekerjaan";
import { MainDashboardPage } from "./pages/MainDashboardPage";
import RegisterPage from "./pages/Register";
import { AdminDataAlumniPage } from "./pages/Admindataalumni";
import { AdminBeritaPage } from "./pages/Adminberita";
import { AdminLowonganPage } from "./pages/Adminlowongan";

export const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <IndexPage />;
    }
  },
  {
    path: "/login",
    Component() {
      return <LoginPage />;
    }
  },
  {
    path: "/register",
    Component() {
      return <RegisterPage />;
    }
  },
  {
    path: "/berita",
    Component() {
      return <BeritaPage />;
    }
  },
  {
    path: "/dataalumni",
    Component() {
      return <DataAlumniPage />;
    }
  },
  {
    path: "/lowonganpekerjaan",
    Component() {
      return <LowonganPekerjaanPage />;
    }
  },
  {
    path: "/about",
    Component() {
      return <AboutPage />;
    }
  },
  {
    path: "/support",
    Component() {
      return <SupportPage />;
    }
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/maindashboard",
        element: <MainDashboardPage />
      },
      {
        path: "/admindataalumni",
        element:  <AdminDataAlumniPage />
      },
      {
        path: "/adminberita",
        element:  <AdminBeritaPage />
      },
      {
        path: "/adminlowongan",
        element:  <AdminLowonganPage />
      },
    ]
  }
]);
