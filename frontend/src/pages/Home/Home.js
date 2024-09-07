import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Counter from '../../components/Counter/Counter'
import DepartmentMenu from '../../components/Departments/Department'
export default function Home() {
  return (
    <>
      <HeroSection />
      <Counter />
      <DepartmentMenu/>
    </>
  )
}
