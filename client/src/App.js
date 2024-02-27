import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllR from './AllR';
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <Router >
   <Navbar />
   <AllR/>
   </Router >
    </div>
  );
}

export default App;
