export interface Tag {
  id: string
  title: string
  color: string
}

export interface Task {
  id: string
  title: string
  description: string
  tags: Tag[]
  expirationDate: Date
  startDate: Date
}
export interface ColumnTask extends Task {
  columnId: string
}

export interface Column {
  id: string
  title: string
  tasks: Task[]
}

export interface Project {
  id: string
  title: string
  columns: Column[]
}
