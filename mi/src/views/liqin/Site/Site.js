import React, { Component } from 'react'
import SiteUI from './SiteUI.js'
import { connect } from 'react-redux'


class Site extends Component  {
    render() {
        return(
            <SiteUI></SiteUI>
        )
    }
}

const mapStateToProps = (state) => {
    // return 的对象是给到UI组件的props
        return {

        }
}
const mapDispatchToProps = (dispath) => {
    return {
        onClick: () => {
            console.log(111111111)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Site);