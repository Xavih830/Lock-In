import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Dashboard from '@/pages/Dashboard'
import FocusSession from '@/pages/FocusSession'
import Community from '@/pages/Community'
import Subscription from '@/pages/Subscription'
import Navbar from '@/components/Navbar'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/focus" element={<FocusSession />} />
          <Route path="/community" element={<Community />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}