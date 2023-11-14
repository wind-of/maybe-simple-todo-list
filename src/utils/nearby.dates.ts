export function getNearbyWeeks() {
  const date = new Date()
  const [year, month, day, weekDay] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getDay()
  ]
  const newDate = day - weekDay + 1
  const previous = new Date(year, month, newDate - 7, 0, 0, 0, 0)
  const current = new Date(year, month, newDate, 0, 0, 0, 0)
  const next = new Date(year, month, newDate + 7, 0, 0, 0, 0)

  return { previous, current, next }
}

export function getNearbyMonth() {
  const date = new Date()
  const [year, month] = [date.getFullYear(), date.getMonth()]
  const previous = new Date(year, month - 1, 1, 0, 0, 0, 0)
  const current = new Date(year, month, 1, 0, 0, 0, 0)
  const next = new Date(year, month + 1, 1, 0, 0, 0, 0)

  return { previous, current, next }
}

export function getNearbyYears() {
  const date = new Date()
  const [year] = [date.getFullYear()]
  const previous = new Date(year - 1, 0, 1, 0, 0, 0, 0)
  const current = new Date(year, 0, 1, 0, 0, 0, 0)
  const next = new Date(year + 1, 0, 1, 0, 0, 0, 0)

  return { previous, current, next }
}

export function getNearbyDays() {
  const date = new Date()
  const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()]
  const previous = new Date(year, month, day - 1, 0, 0, 0, 0)
  const current = new Date(year, month, day, 0, 0, 0, 0)
  const next = new Date(year, month, day + 1, 0, 0, 0, 0)

  return { previous, current, next }
}
