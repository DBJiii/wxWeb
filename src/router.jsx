import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import CourseResources from './pages/CourseResources.jsx'
import DeepKnowledge from './pages/DeepKnowledge.jsx'
import ScienceNews from './pages/ScienceNews.jsx'
import KnowledgeQA from './pages/KnowledgeQA.jsx'

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
