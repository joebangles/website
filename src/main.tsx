import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

import Home from './components/HomePage/HomePage.tsx'
import SitePage from './components/layouts/SitePage.tsx'
import CourseMapPage from './components/CourseMapPage/CourseMapPage.tsx'
import Other from './components/Other.tsx'
import CourseList from './components/CourseList/CourseList.tsx'

import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<SitePage />}>
                <Route index element={<Home />} />
                <Route path="course-map" element={<CourseMapPage />} />
                <Route path="course-list" element={<CourseList />} />
                <Route path="other" element={<Other />} />
            </Route>
        </Routes>
    </BrowserRouter>,
)