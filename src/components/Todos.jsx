import React from 'react'
import './Todos.css'
const data =
[
    {
        name : "javascript"
    },
    {
        name : "React"
    },
    {
        name : "Docker"
    },
    {
        name : "Kubernetes"
    }
]
const Todos = () => {
  
  return (
    <>
      <div className ="card">
      {data.map((item) => (
        <div className="courses-container">
          <div className="course">
            <div className="course-preview">
              <h6>Course</h6>
              <h2>{item.name}</h2>
              <a href="#">View all chapters <i className="fas fa-chevron-right"></i></a>
            </div>
            <div className="course-info">
              <div className="progress-container">
                <div className="progress"></div>
                <span className="progress-text">
                  6/9 Challenges
                </span>
              </div>
              <h6>Chapter 4</h6>
              <h2>Callbacks & Closures</h2>
              <button className="btn">Continue</button>
            </div>
          </div>
        </div>
      ))}  
      
      </div>
    </>
  )
}

export default Todos