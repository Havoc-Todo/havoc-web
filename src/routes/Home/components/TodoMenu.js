import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import './Main.scss'


let TodoMenu = ({
  submitText, cancelText,
  category, name, description, priority, date, time,
  handleCategoryChange, handleNameChange, handleDescriptionChange,
  handlePriorityChange, handleDateChange, handleTimeChange,
  handleCancel, handleSubmit
}) => {
  return (
    <div className='fill-scroll'>
      <div className='todo-menu'>
        <SelectField
          value={category}
          onChange={handleCategoryChange}
          floatingLabelText='Category'>
          <MenuItem value={'school'} primaryText='School' />
          <MenuItem value={'work'} primaryText='Work' />
        </SelectField>
        <TextField
          value={name}
          onChange={handleNameChange}
          hintText='Task Name'
          floatingLabelText='Task Name' />
        <TextField
          value={description}
          onChange={handleDescriptionChange}
          hintText='Description'
          floatingLabelText='Description' />
        <SelectField
          value={priority}
          onChange={handlePriorityChange}
          floatingLabelText='Priority' >
          <MenuItem value={'NONE'} primaryText='None' />
          <MenuItem value={'LOW'} primaryText='Low' />
          <MenuItem value={'MEDIUM'} primaryText='Medium' />
          <MenuItem value={'HIGH'} primaryText='High' />
        </SelectField>
        <DatePicker
          value={date}
          onChange={handleDateChange}
          floatingLabelText='Due Date'
          hintText='Due Date' />
        <TimePicker
          value={time}
          onChange={handleTimeChange}
          floatingLabelText='Due Time'
          hintText='Due Time' />
        <RaisedButton
          label={submitText || 'Submit'}
          primary
          onTouchTap={handleSubmit} />
        <FlatButton
          label={cancelText || 'Cancel'}
          secondary
          onTouchTap={handleCancel} />
      </div>
    </div>
  )
}

TodoMenu.propTypes = {
  submitText              : PropTypes.string.isRequired,
  cancelText              : PropTypes.string.isRequired,
  category                : PropTypes.string.isRequired,
  name                    : PropTypes.string.isRequired,
  description             : PropTypes.string.isRequired,
  priority                : PropTypes.string.isRequired,
  date                    : PropTypes.instanceOf(Date),
  time                    : PropTypes.instanceOf(Date),
  handleCategoryChange    : PropTypes.func.isRequired,
  handleNameChange        : PropTypes.func.isRequired,
  handleDescriptionChange : PropTypes.func.isRequired,
  handlePriorityChange    : PropTypes.func.isRequired,
  handleDateChange        : PropTypes.func.isRequired,
  handleTimeChange        : PropTypes.func.isRequired,
  handleCancel            : PropTypes.func.isRequired,
  handleSubmit            : PropTypes.func.isRequired
}

export default TodoMenu
