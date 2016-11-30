import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionSchedule from 'material-ui/svg-icons/action/schedule'
import { grey400 } from 'material-ui/styles/colors'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'

const Todo = ({ onClick, name, priority, status, t_id, completeTodo, deleteTodo, handleEdit, fields }) => {
  const iconButtonElement = (
    <IconButton
      touch
      tooltip='more'
      tooltipPosition='bottom-left' >
      <MoreVertIcon color={grey400} />
    </IconButton>)

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem onClick={() => completeTodo(t_id)}>Done</MenuItem>
      <MenuItem onClick={handleEdit}>Edit</MenuItem>
      <MenuItem onClick={() => deleteTodo(t_id)}>Delete</MenuItem>
    </IconMenu>)
  
  const priorityText = (() => {
    switch (priority) {
      case 'NONE': return ''
      case 'LOW': return <span style={{ color: 'grey' }}>LOW</span>
      case 'MEDIUM': return <span style={{ color: 'rgb(255, 216, 0)' }}>MEDIUM</span>
      case 'HIGH': return <span style={{ color: 'red' }}>HIGH</span>
      default: 'wth are you'
    }
  })()

  const icon = (() => {
    switch (status) {
      case 'INCOMPLETE': return <ActionSchedule />
      case 'DONE': return <ActionDone />
      default: return <ActionDone />
    }
  })()

  return (
    <ListItem
      primaryText={name}
      secondaryText={priorityText}
      leftAvatar={<Avatar icon={icon} />}
      rightIconButton={rightIconMenu}
      onClick={onClick} />)
}

Todo.propTypes = {
  fields: PropTypes.any,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  t_id: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}

export default Todo
