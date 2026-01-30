import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import OmniLanding from "./pages/OmniLanding"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OmniLanding />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App