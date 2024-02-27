import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Question from './pages/Question/Question'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Question/DisplayQuestion'
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";

const AllR = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/Auth' element={<Auth />} />
      <Route exact path='/AskQuestion' element={<AskQuestion />} />
      <Route exact path='/Question' element={<Question />} />
      <Route exact path='/Questions/:id' element={<DisplayQuestion />} />
      <Route exact path="/Tags" element={<Tags/>} />
      <Route exact path="/Users" element={<Users/>} />
      <Route exact path="/Users/:id" element={<UserProfile/>} />
     
    </Routes>
  )
}

export default AllR
