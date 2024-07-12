export interface Toast {
  id: string
  title: string
  color?: string
  description?: string
  icon?: string
  opacity?: number
  timeout: number
  // closeButton?:
  click?: () => void
}
