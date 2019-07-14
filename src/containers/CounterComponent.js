import React, {Component} from 'react';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {incrementCount, decrementCount,addname} from '../actions/index';

class CounterComponent extends Component{

handleBtnActionIncrement = () => {
  this.props.onIncrementClick(this.props.count)
}

handleBtnActionDecrement = () => {
  this.props.onDecrementClick(this.props.count)
}
handleBtnActionButton = () => {
  this.props.addname(this.props.nom)
}


render() {
  const {count,nom}=this.props
  return(
   <div>
<div>
      <h1>Count: {count}</h1>
      {nom}
      <Button action={this.handleBtnActionIncrement} buttonTitle = "+" />
    
      <Button action={this.handleBtnActionDecrement} buttonTitle = "-" />
    </div>

    </div>
  )
}
}


const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    nom:state.counter.nom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (count) => {  
      dispatch(incrementCount(count))
    },
    onDecrementClick: (count) => {
      if(count !== 0) 
      dispatch(decrementCount(count))
    },
    addname: () => {
      dispatch(addname())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);