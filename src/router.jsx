import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const CourseResources = lazy(() => import('./pages/CourseResources.jsx'))
const DeepKnowledge = lazy(() => import('./pages/DeepKnowledge.jsx'))
const ScienceNews = lazy(() => import('./pages/ScienceNews.jsx'))
const KnowledgeQA = lazy(() => import('./pages/KnowledgeQA.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <CourseResources /> },
      { path: 'deep', element: <DeepKnowledge /> },
      { path: 'news', element: <ScienceNews /> },
      { path: 'qa', element: <KnowledgeQA /> },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
