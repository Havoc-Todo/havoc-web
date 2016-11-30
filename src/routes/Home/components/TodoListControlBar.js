import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import { setTodoListSort, setTodoListFilter } from '../actions/todoListControls'

const TodoListControlBar = ({ todoFilter, todoSort, handleFilterChange, handleSortChange }) =>
  <Toolbar style={{ backgroundColor: 'rgb(226, 226, 225)' }}>
    <ToolbarGroup firstChild>
      <DropDownMenu value={todoFilter} onChange={handleFilterChange}>
        <MenuItem value={'incomplete'} primaryText='View Incomplete' />
        <MenuItem value={'complete'} primaryText='View Complete' />
        <MenuItem value={'all'} primaryText='View All' />
      </DropDownMenu>
    </ToolbarGroup>
    <ToolbarGroup>
      <DropDownMenu value={todoSort} onChange={handleSortChange}>
        <MenuItem value={'priority'} primaryText='Sort By Priority' />
        <MenuItem value={'date'} primaryText='Sort By Date' />
      </DropDownMenu>
    </ToolbarGroup>
  </Toolbar>

TodoListControlBar.propTypes = {
  todoFilter: PropTypes.string.isRequired,
  todoSort: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    todoFilter: state.todoApp.controls.filter,
    todoSort: state.todoApp.controls.sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilterChange: (event, index, value) => {
      dispatch(setTodoListFilter(value))
    },
    handleSortChange: (event, index, value) => {
      dispatch(setTodoListSort(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListControlBar)
