import Entry from '../components/Entry.jsx'
import './CourseResources.css'

const menuItems = [
  {
    label: '> 1 level',
    children: [
      { label: '> 2 level', children: [
        { label: '> 3 level' },
      ]},
    ],
  },
]

function CourseResources() {
  return (
    <div className="course-resources">
      <h1>课程资源</h1>
      {menuItems.map((item) => (
        <Entry
          key={item.label}
          label={item.label}
          children={item.children}
        />
      ))}
    </div>
  )
}

export default CourseResources
