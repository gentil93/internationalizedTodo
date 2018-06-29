import React from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import about from '../about/about'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { translator } from '../internationalization/stringParser'

class Todo extends React.Component {
    render() {
        const { locale } = this.props
        return (
            <div>
                <PageHeader name={translator('tasks', locale)} small={translator('register', locale)}></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    locale: state.app.locale
})


const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)