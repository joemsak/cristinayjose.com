import React, { Suspense } from "react"

import LanguageSwitcher from "./components/LanguageSwitcher"
import Announcement from "./components/Announcement"
import Photos from "./components/Photos"
import RsvpForm from "./components/RsvpForm"

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <LanguageSwitcher />
      <Announcement />
      <Photos />
      <RsvpForm />
    </Suspense>
  )
}

export default App
