import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Counter from '../../components/Counter/Counter'
import DepartmentMenu from '../../components/Departments/Department'
import Review from '../../components/Review/Review'
export default function Home() {
  return (
    <>
      <HeroSection />
      <Counter />
      <DepartmentMenu/>
      <Review></Review>
    </>
  )
}
