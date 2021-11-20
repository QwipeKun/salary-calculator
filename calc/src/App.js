import React from 'react'
import './App.css'
import store from './store'
import result from './store'
class App extends React.Component{

  constructor(){
    super()
    this.state = {
      out: '170',
      val: ''
    }

  }
  getResult (){
    let result =  this.state.out * this.state.val
    return result
  }

  getInput(){ 
    
  }

  render() {
    return(
      <div className = "container">
        <div className = "output">
          <input type = "text" placeholder = "Почасовая ставка" />
          <input type = "text" placeholder = "Количество рабочих часов в месяц" defaultValue = {this.state.out} />
        </div>
        <div className buttons>
          <button onClick = { () => {}}>Расчитать</button>
        </div>
        {<h3>Ваша зарпалата за {this.state.out} часов составляет: {this.getResult()}</h3>}
      </div>
    )
  }
}

export default App