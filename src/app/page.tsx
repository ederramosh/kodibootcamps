
import NavBarTestbed from "@/components/NavBarTestbed";
import Dashboard from "@/components/Dashboard";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <>
      <ToastContainer />
      <NavBarTestbed/>
      <Dashboard/>
    </>
  );
}
