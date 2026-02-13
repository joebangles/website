import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Home from './components/HomePage/HomePage.tsx'
import SitePage from './components/layouts/SitePage.tsx'
import Learning from './components/Learning/Learning.tsx'
import Other from './components/Other.tsx'

import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<SitePage />}>
                <Route index element={<Home />} />
                <Route path="learning" element={<Learning />} />
                <Route path="other" element={<Other />} />
            </Route>
        </Routes>
    </BrowserRouter>,
)