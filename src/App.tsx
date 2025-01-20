import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom'
import {RootLayout} from './components/layouts/RootLayout'
//import DashboardLoading from './components/splash/dashboardloading'
//import SettingsLoading from './components/splash/settingloading'
//import BillingLoading from './components/splash/billingloading'
//import ProjectLoading from './components/splash/projectloading'
import TemplateGalleryLoading from './components/splash/templateloading'
//import APIDocumentationLoading from './components/splash/apiloading'
import { useSelector } from 'react-redux'
import LoginPage from './pages/loginpage'
import Dashboard from './pages/dashboard'
import ProjectPage from './pages/projectpage'
import GeneratePage from './pages/generatepage'
import SettingsPage from './pages/settingpage'
import ApiDocumentation from './pages/apipage'
import BillingPage from './pages/billingpage'
import PricingPage from './pages/pricingpage'
export default function App() {
  const isAuthenticated = useSelector((state: { authState: { isAuthenticated: boolean } }) => state.authState.isAuthenticated)
  console.log(isAuthenticated)
  // ProtectedRoute Component
  const ProtectedRoute = ({ isAuthenticated, children }: { isAuthenticated: boolean, children: React.ReactNode }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  const router= createBrowserRouter([
    {
      path: '/',
      element:<ProtectedRoute isAuthenticated={isAuthenticated}><RootLayout/></ProtectedRoute>,
      children:[
        {
          index: true,
          element: <Dashboard/>
        },
        {
          path: 'projects',
          element: <ProjectPage/>
        },
        {
          path: 'templates',
          element: <TemplateGalleryLoading/>
        },
        {
          path: 'profile',
          element: <p>profile</p>
        },
        {
          path: 'settings',
          element: <SettingsPage/>
        },
        {
          path: 'api',
          element: <ApiDocumentation/>
        },
        {
          path: 'billing',
          element: <BillingPage/>
        },
        {
          path: 'generate',
          element:<GeneratePage/>
        }
      ]
    },
    {
      path:'pricing',
      element:<PricingPage/>
    },
    {
      path: 'login',
      element: <LoginPage/>
    },
  ])
  return (
    <><RouterProvider router={router}/></>
  )
}
