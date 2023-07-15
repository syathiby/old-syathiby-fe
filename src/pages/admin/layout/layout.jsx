import { useState } from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const LayoutAdmin = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-1">
      <Navbar onSidebarToggle={handleSidebarToggle} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="p-4 sm:ml-64">
            <div className="p-4 mt-16">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )

}

export default LayoutAdmin