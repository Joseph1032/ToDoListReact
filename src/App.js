import React from 'react';
import Input from './Input'
import TaskList from './TaskList'
import {generate as id} from 'shortid'
import './App.css'

export default React.createClass({
  getInitialState () {
    return {
      items: []
    }
  },
  updateList(task){
     this.setState({
      items: [...this.state.items, {
        title: task,
        id: "id" + id()
      }]
     })
  },
  destroyItem(id) {
    this.setState({
      items: this.state.items.filter(item=>{
        return item.id !== id
      })
    })
  },
  render() {
    return (
      <div id="container">
        <h1>todos</h1> 
        <Input updateList={this.updateList}/>
        <TaskList destroyItem={this.destroyItem} items={this.state.items}/>

      </div>
    )
  }
})