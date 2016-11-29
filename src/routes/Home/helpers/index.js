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
export function generateTodo (todoMenuFields, userId) {
  const { t_id, name, description, category, priority, date, time } = todoMenuFields
  return {
    t_id,
    name,
    description,
    category,
    priority,
    dateDue: unixTime(date, time),
    user: userId,
    subtasks: [],
    status: 'INCOMPLETE'
  }
}
