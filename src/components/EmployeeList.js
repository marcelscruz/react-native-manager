import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { FlatList } from 'react-native'
import { employeesFetch } from '../actions'
import ListItem from './ListItem'

class EmployeeList extends Component {
  componentDidMount() {
    this.createDataSource()
  }
  createDataSource() {
    this.props.employeesFetch()
  }
  renderRow(employee) {
    return <ListItem employee={employee} />
  }
  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={employee => employee.uid}
      />
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })
  return { employees }
}
export default connect(
  mapStateToProps,
  { employeesFetch },
)(EmployeeList)
