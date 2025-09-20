import { ref, nextTick } from 'vue'

export interface UseModalReturn {
  /** Whether modal is open */
  isOpen: Ref<boolean>
  /** Open the modal */
  open: () => Promise<void>
  /** Close the modal */
  close: () => Promise<void>
  /** Toggle the modal */
  toggle: () => Promise<void>
}

export function useModal(initialState = false): UseModalReturn {
  const isOpen = ref(initialState)

  const open = async() => {
    isOpen.value = true
    await nextTick()
  }

  const close = async() => {
    isOpen.value = false
    await nextTick()
  }

  const toggle = async() => {
    if (isOpen.value) {
      await close()
    } else {
      await open()
    }
  }

  return {
    isOpen: readonly(isOpen),
    open,
    close,
    toggle
  }
}
