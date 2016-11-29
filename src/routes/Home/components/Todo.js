import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import { grey400 } from 'material-ui/styles/colors'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'

const Todo = ({ onClick, name, category, t_id, deleteTodo, handleEdit, fields }) => {
  const iconButtonElement = (
    <IconButton
      touch
      tooltip='more'
      tooltipPosition='bottom-left' >
      <MoreVertIcon color={grey400} />
    </IconButton>)

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem onClick={handleEdit}>Edit</MenuItem>
      <MenuItem onClick={() => deleteTodo(t_id)}>Delete</MenuItem>
    </IconMenu>)

  return (
    <ListItem
      primaryText={name}
      secondaryText={category}
      leftAvatar={<Avatar icon={<FileFolder />} />}
      rightIconButton={rightIconMenu}
      onClick={onClick} />)
}

Todo.propTypes = {
  fields: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  t_id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}

export default Todo
