import React  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'
import moment from 'moment'
import { translator } from '../internationalization/stringParser' 

const TodoList = props => {
    const renderRows = () => {
        const locale = props.locale
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>{new moment(todo.createdAt).locale(locale).format('LLL')}</td>
                <td>
                    <IconButton style="success" icon='check' hide={todo.done}
                    onClick={() => props.markAsDone(todo)}></IconButton>
                    <IconButton style="warning" icon='undo' hide={!todo.done}
                    onClick={() => props.markAsPending(todo)}></IconButton>
                    <IconButton style="danger" icon='trash-o' hide={!todo.done}
                    onClick={() => props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))     
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>{translator('description', props.locale)}</th>
                    <th>{translator('date', props.locale)}</th>
                    <th className='tableActions'>{translator('actions', props.locale)}</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list,
    locale: state.app.locale
})

const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)