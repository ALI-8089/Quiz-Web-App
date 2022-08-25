/* eslint-disable no-restricted-globals */
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import './sample.css'
import axios from 'axios'
import { serverUrl } from '../../constants/constant'
function Test() {
  const [quest, setQuest] = useState([])
  const [oneQuestion, setOneQuestion] = useState({})
  const [options, setOptions] = useState([])
  const [noOfQuest, setNoOfQuest] = useState()
  const [explanation , setExplanation] = useState()
  const [showExplanation, setShowExplanation] = useState(false)
  const [answer, setAnswer] = useState("")
  const no = useRef(0)
  const attent = useRef([])
  const [submit ,setSubmit] = useState(false)
  const [ ans,setAns] =useState(false)
  // const [attent , setAttent] = useState([])
 
  const changeQuest = (operator ) => {
   

    
    if (operator === +1) {
      if (noOfQuest - 1 > no.current) {
        no.current = no.current + 1

       
        setSubmit("")
        setAns(false)
        setOneQuestion(quest[no.current])
        setOptions(quest[no.current].options)
        setShowExplanation(false)
        setAnswer(quest[no.current].answer)
        setExplanation(quest[no.current].explanation)

      } else {
        console.log('hi')
      }
    } else {
      if (no.current > 0) {
        no.current = no.current - 1
        setAns(false)
        setSubmit("")
        setOneQuestion(quest[no.current])
        setOptions(quest[no.current].options)
        setAnswer(oneQuestion.anwser)
        setShowExplanation(false)
        setExplanation(quest[no.current].explanation)
      } else {
        console.log('hello')
      }
    }
  }
const isAnwser = (userAns,index)=>{
 
  setSubmit(index)
  if(userAns === answer){
   attent.current = [...attent.current,[{value:index}]]
setAns(true)
}else{
  setAns(false)
  attent.current = [...attent.current,[{value:index}]]

}
}

 
  useEffect(() => {
    (async function () {
      const response = await axios.get(`${serverUrl}/test`)
      const noOfQuest = response.data[0].questions
      setQuest(response.data[0].questions)
      setOneQuestion(response.data[0].questions[0])
      setOptions(response.data[0].questions[0].options)
      setNoOfQuest(noOfQuest.length)
      setAnswer(response.data[0].questions[0].answer)
      setExplanation(response.data[0].questions[0].explanation)
    })()
  }, [])

  return (
    <section className="container-md   ">
      <div className="row  bg-light my-5 rounded d-flex justify-content-around py-md-5 ">
        <h1 className="text-center">Maths Quiz</h1>

        <div className="col-10 col-md-7    p-3">
          <div className="row border border-primary rounded border-2 ">
            <label htmlFor="" className="fw-bold">
              Question {no.current + 1}
            </label>

            <p>{oneQuestion && oneQuestion.question}</p>
          </div>
          <div className="row  ">
            {options &&
              options.map((obj, index) => (
                <span onClick={()=>isAnwser(obj,index)}  className={(submit===index && ans )? "border border-2 border-success ans" :(submit===index && !ans) ? "border border-2 border-danger" :" shadow-sm ans" } key={index}  >
                  {obj}
                </span>
              ))}
          </div>

          <div className="row d-flex justify-content-evenly m-3">
            <button
              onClick={() => changeQuest(-1)}
              className="col-3 col-md-2 btn  btn-outline-dark border-0 shadow "
            >
              Prev
            </button>
            <button
              onClick={() => changeQuest(+1)}
              className="col-3 col-md-2 btn btn-outline-dark border-0 shadow "
            > 
              Next
            </button>
          </div>
          <div className="row shadow">
            {showExplanation && (
              <div className="col  ">
                <label className="fw-bold"> Explanation </label>
                <p>
                 {explanation}
                </p>
              </div>
             )}
          </div>
        </div>

        <div className="col-10  col-md-4 my-3 p-2 shadow-sm">
          <div className="row d-flex justify-content-around mb-3 my-3 px-3">
            <h6 className="col mt-2 fw-bold text-start">Question {no.current+1}/{noOfQuest}</h6>
            <button onClick={()=>setShowExplanation(true)} className="col border-0 btn bg-transparant text-end"> Need Help ?</button>
          </div>
          <div className="row">
            
              {quest.map((obj,index)=>(
              
                <span className={ no.current===index && attent.current[no.current] ? "col circle text-white bg-primary text-center"  :"  col circle  text-white  bg-secondary text-center"}>{index+1}</span>

              ))}
             
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Test
