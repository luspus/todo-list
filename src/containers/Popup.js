import React, { Component } from 'react'
import {connect} from 'react-redux'
import {saveUserName} from '../actions'

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            check: false,
        }
    }
    onChangeVal (e) {
        this.setState({name: e.target.value})
    }
    onCheck() {
        this.setState({ check: !this.state.check })
    }
    onHandleClick () {
        sessionStorage.setItem('rememberme', this.state.check);
        this.props.saveUserName(this.state.name)
        if(this.state.check) sessionStorage.setItem('name', this.state.name);
    }
    render() {
        const s = this.state
        return (
            <div className='popup'>
                <label htmlFor={'name'}>What is your name? </label>
                <input type='text' className='name' onChange={(e) => this.onChangeVal(e)} />
                <div className={s.name.length > 0 ? 'check' :'check disabled'} >
                    <input type='checkbox' disabled={s.name.length > 0 ? false : true} onClick={this.onCheck.bind(this)}/>
                    <span>Remember me</span>
                </div>
                <input type='button' value={'Ok'} onClick={this.onHandleClick.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    name: state.todos.name
})

const mapDispatchToProps = dispatch => ({
    saveUserName: (name) => dispatch(saveUserName(name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Popup)
