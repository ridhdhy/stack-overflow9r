import React, { useState } from "react";
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from "react-redux";

import './AskQuestion.css'
import { askQuestion } from "../../actions/question";


  const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionBody, setQuestionBody] = useState("");
    const [questionTags, setQuestionTags] = useState("");
  
    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer));
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault()
      //  console.log(User)
      // console.log({ questionTitle, questionBody,questionTags})
      // if (User) {
        // if (questionTitle && questionBody && questionTags) {
          dispatch(askQuestion({
                questionTitle,
                questionBody,
                questionTags,
                userPosted: User.result.name,
                userId: User?.result._id
              },
              navigate
            )
          )
        // } 
        // else alert("Please enter all the fields");
      // } else alert("Login to ask question");
    }
  
    const handleEnter = (e) => {
      if (e.key === "Enter") {
        setQuestionBody(questionBody + "\n");
      }
    };
    
    return (
  <div className='ask-question'>
<div className="ask-ques-container">
<h1>Ask a public Question</h1>
{/* <h1>{questionBody}</h1> */}

<form onSubmit={handleSubmit}>
    <div className="ask-form-container">
        <label htmlFor="ask-ques-title">
         <h4>Title</h4>
         <p>Be specific and imagine you're asking a question to another person</p>
         <input type='text' id='ask-ques-title'  onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }} placeholder='e.g is tjere an R functionfor finding the index of an element in a vector?'></input>
        </label>
        <label htmlFor="ask-ques-body">
         <h4>Body</h4>
         <p>Include all the information someone would need to answer your question</p>
         <textarea name="" id="ask-ques-body" onChange={(e) => {
                  setQuestionBody(e.target.value);
                }} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
         
        </label>
        <label htmlFor="ask-ques-tags">
         <h4>tags</h4>
         <p>Add up to 5 tags to describe what your question is about</p>
         <input type='text' id='ask-ques-tags' onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }} placeholder='{xml typescript wordpress}' ></input>
        </label>
    </div>
    <input type="submit" value='Reivew your question' className='review-btn'/>
</form>
</div>
        </div>
  
  )
};

export default AskQuestion;
