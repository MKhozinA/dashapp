import { Navigate, createBrowserRouter, useLoaderData } from "react-router-dom";
import IndexPage from './pages/Alumni/Home';
import AboutPage from './pages/Alumni/About';
import SupportPage from "./pages/Alumni/Support";
import BeritaPage from "./pages/Alumni/Berita";
import LoginPage from "./pages/Login";
import { DashboardLayout } from "./pages/Admin/DashboardPage";
import DataAlumniPage from "./pages/Alumni/DataAlumni";
import LowonganPekerjaanPage from "./pages/Alumni/LowonganPekerjaan";
import { MainDashboardPage } from "./pages/Admin/MainDashboardPage";
import RegisterPage from "./pages/Register";
import { AdminDataAlumniPage } from "./pages/Admin/Admindataalumni";
import { AdminBeritaPage } from "./pages/Admin/Adminberita";
import { AdminLowonganPage } from "./pages/Admin/Adminlowongan";
import AkunSayaPage from "./pages/Alumni/AkunSaya";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/homepage",
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
    path: "/support",
    Component() {
      return <SupportPage />;
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
    path: "/alumni/berita",
    Component() {
      return <BeritaPage />;
    }
  },
  {
    path: "/alumni/dataalumni",
    Component() {
      return <DataAlumniPage />;
    }
  },
  {
    path: "/alumni/lowonganpekerjaan",
    Component() {
      return <LowonganPekerjaanPage />;
    }
  },
  {
    path: "/akunsaya",
    Component() {
      return <AkunSayaPage />;
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
        path: "/admin/alumni",
        element: <AdminDataAlumniPage />
      },
      {
        path: "/admin/berita",
        element: <AdminBeritaPage />
      },
      {
        path: "/admin/lowongan",
        element: <AdminLowonganPage />
      },
    ]
  }
]);
