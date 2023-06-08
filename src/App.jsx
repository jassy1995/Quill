import { Outlet } from '@tanstack/router';
import Navbar from './components/navbar/Index';


function App() {

  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
