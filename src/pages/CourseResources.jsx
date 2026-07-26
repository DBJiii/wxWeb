import Entry from '../components/Entry.jsx'
import courseData from '../data/courses.js'
import './CourseResources.css'

function CourseResources() {
  return (
    <div className="course-resources">
      <h1 className="course-resources-title">课程资源</h1>
      <div className="course-resources-list">
        {courseData.map((item, i) => (
          <div
            key={item.id}
            className="animate-entry"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <Entry
              title={item.title}
              items={item.children}
              url={item.url}
              level={1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseResources
