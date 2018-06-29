import React from 'react'
import Todo from '../todo/todo';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { translator } from '../internationalization/stringParser'
import { changeLocale } from '../main/appActions'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { changeLocale } = this.props 
        changeLocale(event.target.value)
    }
    render() {
        const { locale } = this.props
        return (
            <nav className='navbar navbar-inverse bg-inverse'>
                <div className='container'>
                    
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'>
                            <i className='fa fa-calendar-check-o'></i> TodoApp
                        </a>
                    </div>
        
                    <div id='navbar' className='navbar-collapse collapse'>
                        <ul className="nav navbar-nav">
                            <li><a href='#/todos'>{translator('tasks', locale)}</a></li>
                            <li><a href='#/about'>{translator('about', locale)}</a></li>
                            <li>
                              
                            </li>
                        </ul>
                        <select 
                            style={selectorStyle}
                            onChange={this.handleChange}
                            value={locale}>
                                <option value="en-US">english</option>
                                <option value="pt-BR">português</option>
                        </select>
                    </div>
        
                    
                </div>
                
            </nav>
        )
    }
}
const selectorStyle = {
    float: 'right'
}

const mapStateToProps = state => ({
    locale: state.app.locale
})


const mapDispatchToProps = dispatch => bindActionCreators({
    changeLocale
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)