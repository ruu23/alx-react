import React from 'react'
import CourseListRow from './CourseListRow'

export default function CourseList() {
  return (
    <table>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true}/>
        <CourseListRow textFirstCell="Course name" isHeader={true}/>
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false}/>
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false}/>
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false}/>
      </tbody>
    </table>
  )
}
