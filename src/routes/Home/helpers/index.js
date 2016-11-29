// Returns the unix time (milliseconds since 1970)
// (date : Date, and time : Date): number
export function unixTime (date, time) {
  return (date && time)
    ? (new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
      time.getMilliseconds()
    )).getTime()
    : null
}

export function getDateTime (dateDue) {
  if (dateDue) {
    let date = new Date()
    date.setTime(dateDue)
    return {
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      time: date
    }
  }
  return {
    date: null,
    time: null
  }
}

// Returns a new todo given the todoMenu fields and the user id
export function generateTodo (todoMenuFields, user = '57a7bd24-ddf0-5c24-9091-ba331e486dc7') {
  const { t_id, name, description, category, priority, date, time, addToGCalendar } = todoMenuFields
  return {
    t_id,
    name,
    description,
    category,
    priority,
    addToGCalendar,
    dateDue: unixTime(date, time),
    user,
    subtasks: [],
    status: 'INCOMPLETE'
  }
}
