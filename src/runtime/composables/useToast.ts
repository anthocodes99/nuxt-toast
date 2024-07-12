import type { Toast } from '../types/toast'
import { useState } from '#imports'

export function useToast() {
  const toasts = useState<Toast[]>('toasts', () => [])

  function _remove(id: Toast['id']) {
    const idx = toasts.value.findIndex(toast => toast.id == id)
    toasts.value.splice(idx, 1)
  }

  function add(toast: Partial<Toast>) {
    const id = new Date().getTime().toString()

    function close() {
      _remove(id)
    }

    const body = {
      id,
      close,
      ...toast,
    }

    toasts.value.push(body as Toast)
  }

  function toast(title: string, description: string) {

  }

  function info(title: string, description: string) {
    const body = {
      title,
      description,
      timeout: 3000,
    }
    add(body)
  }

  function success(title: string, description: string) {

  }

  function warning(title: string, description: string) {

  }

  function error(title: string, description: string) {

  }

  return {
    state: toasts,
    toast,
    info,
    success,
    warning,
    error,
  }
}
