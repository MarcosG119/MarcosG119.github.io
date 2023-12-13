import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.tsx';
import WorkExperience from './pages/work-experience/WorkExperience.tsx'
import Resume from './pages/resume/Resume.tsx';
import Hobbies from './pages/hobbies/Hobbies.tsx';
import AboutMe from './pages/about-me/AboutMe.tsx';
import ContactMe from './pages/contact-me/ContactMe.tsx';
import Projects from './pages/projects/Projects.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/work-experience/",
                element: <WorkExperience />
            },
            {
                path: "/resume/",
                element: <Resume />
            },
            {
                path: "/hobbies/",
                element: <Hobbies />
            },
            {
                path: "/about-me/",
                element: <AboutMe />
            },
            {
                path: "/contact/",
                element: <ContactMe />
            },
            {
                path: "/projects/",
                element: <Projects />
            }
        ]

    },
    {
        path: "/projects",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/work-experience/",
                element: <WorkExperience />
            },
            {
                path: "/resume/",
                element: <Resume />
            },
            {
                path: "/hobbies/",
                element: <Hobbies />
            },
            {
                path: "/about-me/",
                element: <AboutMe />
            },
            {
                path: "/contact/",
                element: <ContactMe />
            },
            {
                path: "/projects/",
                element: <Projects />
            }
        ]

    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
