import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import AppLayout from './hoc/AppLayout'
import Account from './pages/Account'
import Dashboard from './pages/Dashboard'
import NewTask from './pages/NewTask'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="account" element={<Account />} />
      <Route path="new-task" element={<NewTask />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App