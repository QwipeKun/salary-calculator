import React, {useEffect, useState} from 'react'
import './App.css' 

function App() {
  let [salaryPerHour, setSalaryPerHour] = useState(0)
  let [totalHours, setTotalHours] = useState(170) 
  let [mounthSalary, setMounthSalary] = useState(0)
  let [yearPerSalary, setYearPerSalary] = useState(0)
  let [activeInput, setActiveInput] = useState(null) 
  
  useEffect(() => {
    const activeLocalInput = activeInput
    switch(activeInput){
      case 'salaryPerHour': 
      case 'totalHours':
        setMounthSalary(salaryPerHour * totalHours)
        setYearPerSalary((salaryPerHour * totalHours) * 12)
        break
        case 'mounthSalary': 
        if (totalHours){
          setSalaryPerHour(Math.ceil(mounthSalary / totalHours))
          setYearPerSalary(mounthSalary * 12)
        }
        break
        case 'yearPerSalary':
          setMounthSalary(Math.ceil(yearPerSalary / 12))
          setSalaryPerHour(Math.ceil(yearPerSalary / 12 / totalHours))
          break
          default: 
          break
        }
        setActiveInput(null)
  }, 
    [salaryPerHour, totalHours, mounthSalary, yearPerSalary]
  )

  return(
  
  <div className = "mainContainer">
    <div className = "header">
      Расчитай свою зарпалату
    </div>
      <div className = "container">
        <div className = "items">
        <div className = "textInput1">Почасовая ставка</div>
        <input className = "fieldInput" type = "text" placeholder = "Почасовая ставка" value = {salaryPerHour} onChange = {(event) => {
            setActiveInput('salaryPerHour')
            setSalaryPerHour(Number(event.target.value))
          }
        }/>
        <div className = "textInput">Количество рабочих часов в месяц</div>
        <input className = "fieldInput" type = "text"  placeholder = "Количество рабочих часов в месяц" value = {totalHours} onChange = {(event) => {
          setActiveInput('totalHours')
          setTotalHours(Number(event.target.value))
          }
        }/>
        <div className = "textInput">Зарплата в месяц</div>
        <input className = "fieldInput" type = "text" placeholder = "Зарплата в месяц" value = {mounthSalary} onChange = {(event) => {
            setActiveInput('mounthSalary')
            setMounthSalary(Number(event.target.value))
          }
        }/>
        <div className = "textInput">Зарплата за год</div>
        <input className = "fieldInput" type = "text" placeholder = "Зарплата в год" value = {yearPerSalary} onChange = {(event) => {
            setActiveInput('yearPerSalary')
            setYearPerSalary(Number(event.target.value))
          }
        }/>
      </div>
    </div>
  </div>
)
}

export default App