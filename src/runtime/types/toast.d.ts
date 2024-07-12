export type Status = 'success' | 'warning' | 'error' | 'error'

export interface Toast {
  id: string
  title: string
  color?: string
  description?: string
  icon?: string
  opacity?: number
  status: Status
  timeout: number
  // closeButton?:
  click?: () => void
}
