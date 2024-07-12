import type { Toast, Status } from '../types/toast'
import { useState } from '#imports'

export function useToast() {
  const toasts = useState<Toast[]>('toasts', () => [])

  function _remove(id: Toast['id']) {
    const idx = toasts.value.findIndex(toast => toast.id == id)
    toasts.value.splice(idx, 1)
  }

  function _add(toast: Partial<Toast>) {
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

    setTimeout(() => _remove(id), toast.timeout ?? 5000)
  }

  function toast(toast: Partial<Toast>) {
    _add(toast)
  }

  function info(title: string, description: string) {
    const body = {
      title,
      description,
      status: 'info' as Status,
    }
    _add(body)
  }

  function success(title: string, description: string) {
    const body = {
      title,
      description,
      status: 'success' as Status,
    }
    _add(body)
  }

  function warning(title: string, description: string) {
    const body = {
      title,
      description,
      status: 'warning' as Status,
    }
    _add(body)
  }

  function error(title: string, description: string) {
    const body = {
      title,
      description,
      status: 'error' as Status,
    }
    _add(body)
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
