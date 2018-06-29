require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('../../node_modules/font-awesome/css/font-awesome.min.css')
require('../template/custom.css')

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import { changeLocale } from './appActions'

class App extends React.Component {
    componentDidMount() {
        const { changeLocale } = this.props
        let language = window.navigator.language
        if(language == 'en-US' || language == 'pt-BR') {
            changeLocale(language)
        } else {
            changeLocale('en-US')
        }
    }
    render() {
        return (
            <div className='container'>
                <Menu />
                <Routes />
            </div>
        )
    }
}


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeLocale
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
