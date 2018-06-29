import React from 'react'
import PageHeader from '../template/pageHeader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { translator } from '../internationalization/stringParser'

class About extends React.Component {
    render() {
        const { locale } = this.props
        return (
            <div>
                <PageHeader name={translator('about', locale)} small={translator('us', locale)}></PageHeader>
        
                <p>Lorem ipsum dolor sit amet...</p>
                <p>Lorem ipsum dolor sit amet...</p>
                <p>Lorem ipsum dolor sit amet...</p>
        
            </div>
        )
    }
}


const mapStateToProps = state => ({
    locale: state.app.locale
})


const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(About)