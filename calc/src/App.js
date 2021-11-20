import React, {useEffect, useState} from 'react'
import './App.css'
import store from './store'
import result from './store'


// class App extends React.Component{

//   constructor(){
//     super()
//     this.state = {
//       out: '170',
//       val: ''
//     }

//   }
//   getResult (){
//     let result =  this.state.out * this.state.val
//     return result
//   }

//   getInput(){ 
    
//   }

//   render() {
//     return(
//       <div className = "container">
//         <div className = "output">
//           <input type = "text" placeholder = "Почасовая ставка" />
//           <input type = "text" placeholder = "Количество рабочих часов в месяц" defaultValue = {this.state.out} />
//         </div>
//         <div className buttons>
//           <button onClick = { () => {}}>Расчитать</button>
//         </div>
//         {<h3>Ваша зарпалата за {this.state.out} часов составляет: {this.getResult()}</h3>}
//       </div>
//     )
//   }
// }

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
        break
        case 'mounth': 
        if (totalHours){
          setSalaryPerHour(mounthSalary / totalHours)
        }
        break
        case 'year':
          setMounthSalary(yearPerSalary / 12)
          setSalaryPerHour(yearPerSalary / 12 / totalHours)
          break
          default: 
          break
        }
        setActiveInput(null)
  }, 
    [salaryPerHour, totalHours, mounthSalary, yearPerSalary]
  )

  return(
  <div className = "container">
  <div className = "output">
    <input type = "text" placeholder = "Почасовая ставка" value = {salaryPerHour} onChange = {(event) => {
        setActiveInput('salaryPerHour')
        setSalaryPerHour(Number(event.target.value))
      }
    }/>
    <input type = "text" placeholder = "Количество рабочих часов в месяц" value = {totalHours} onChange = {(event) => {
      setActiveInput('totalHours')
      setTotalHours(Number(event.target.value))
      }
    }/>
    <input type = "text" placeholder = "Зарплата в месяц" value = {mounthSalary} onChange = {(event) => {
        setActiveInput('mounth')
        setMounthSalary(Number(event.target.value))
      }
    }/>
    <input type = "text" placeholder = "Зарплата в год" value = {yearPerSalary} onChange = {(event) => {
        setActiveInput('year')
        setYearPerSalary(Number(event.target.value))
      }
    }/>
  </div>
  </div>
)
}

export default App