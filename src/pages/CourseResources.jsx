import Entry from '../components/Entry.jsx'
import courseData from '../data/courses.js'
import './CourseResources.css'

function CourseResources() {
  return (
    <div className="course-resources">
      <h1 className="course-resources-title">课程资源</h1>
      <div className="course-resources-list">
        {courseData.map((item) => (
          <Entry
            key={item.id}
            title={item.title}
            items={item.children}
            url={item.url}
            level={1}
          />
        ))}
      </div>
    </div>
  )
}

export default CourseResources
