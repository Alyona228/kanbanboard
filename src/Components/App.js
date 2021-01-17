import React from 'react'
import '../styles/App.css'
import Board from './Board.js'
import Footer from './Footer.js'
import Header from './Header.js'
import Ready from './Ready.js'
import Finish from './Finish.js'
import Progress from './Progress'

export default class App extends React.Component {
  state = {
    text: 'nj ntrcn',
    showInput: false,
    newText: '',
    tasks: [
      'Купить хлеб',
      'Найти мышку',
      'Найти кошку',
      'Полечить Серёжу',
      'Сделать уколы',
      'Найти клад',
      'Помыть посуду',
      'Выпить виски))',
      'Закончить проект!',
    ],
    hasSelect: false,
    hasInput: true,
    readyArray: [],
    progressArray: [],
    finishArray: [],
    boards: ['Backlog', 'Ready', 'In Progress', 'Finished'],
  }

  iii = () => {
    this.setState({
      text: '',
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.state.tasks.push(this.state.text)
      this.iii()
    }
  }

  handleClickAdd = () => {
    this.setState({
      showInput: true,
    })
  }
  handleClickSelect = () => {
    this.setState({
      hasSelect: true,
    })
  }
  handleChangeSelect = (e) => {
    let tasks = [...this.state.tasks]
    let readyArray = [...this.state.readyArray]
    readyArray.push(e.target.value)
    tasks = tasks.filter((item) => !readyArray.includes(item))
    this.setState({
      readyArray,
      tasks,
    })
  }
  deletFinish = () => {
    let finishArray = [...this.state.finishArray]
    finishArray = finishArray.splice(0, finishArray.length - 1)
    this.setState({
      finishArray: finishArray,
    })
    console.log(finishArray)
  }
  handleChangeProgress = (e) => {
    let readyArray = [...this.state.readyArray]
    let progressArray = [...this.state.progressArray]
    progressArray.push(e.target.value)
    readyArray = readyArray.filter((item) => !progressArray.includes(item))
    this.setState({
      progressArray: progressArray,
      readyArray: readyArray,
    })
  }
  handleChangeFinish = (e) => {
    let finishArray = [...this.state.finishArray]
    let progressArray = [...this.state.progressArray]
    finishArray.push(e.target.value)
    progressArray = progressArray.filter((item) => !finishArray.includes(item))
    this.setState({
      progressArray: progressArray,
      finishArray: finishArray,
    })
  }
  render() {
    return (
      <div className='App'>
        <div>
          <Header />
          <div className='body__boards'>
            <Board
              showInput={this.state.showInput}
              hasInput={this.state.hasInput}
              title={this.state.boards[0]}
              tasks={this.state.tasks}
              handleClickAdd={this.handleClickAdd}
              iii={this.iii}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              ttt={this.state.text}
            />

            <Ready
              title={this.state.boards[1]}
              tasks={this.state.tasks}
              hasSelect={this.state.hasSelect}
              readyArray={this.state.readyArray}
              showInput={this.state.showInput}
              onClickSelect={this.handleClickSelect}
              onChangeSelect={this.handleChangeSelect}
              onClickAdd={this.handleClickAdd}
            />
            <Progress
              title={this.state.boards[2]}
              tasks={this.state.progressArray}
              readyArray={this.state.readyArray}
              handleClickAdd={this.handleClickAdd}
              onChangeProgress={this.handleChangeProgress}
            />
            <Finish
              title={this.state.boards[3]}
              tasks={this.state.tasks}
              onChangeFinish={this.handleChangeFinish}
              progress={this.state.progressArray}
              finishArray={this.state.finishArray}
              deletFinish={this.deletFinish}
            />
          </div>
        </div>
        <Footer a={this.state.tasks.length} f={this.state.finishArray.length} />
      </div>
    )
  }
}
