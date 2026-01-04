import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Home from './components/HomePage/HomePage.tsx'
import HeaderPage from './components/layouts/HeaderPage.tsx'
import Learning from './components/Learning.tsx'
import Other from './components/Other.tsx'

import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<HeaderPage />}>
                <Route index element={<Home />} />
                <Route path="learning" element={<Learning />} />
                <Route path="other" element={<Other />} />
            </Route>
        </Routes>
    </BrowserRouter>,
)
