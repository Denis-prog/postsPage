// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): {
  (...args: Parameters<T>): void
  cancel: () => void
} {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const debounced = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args)
      timeoutId = null
    }, delay)
  } as {
    (...args: Parameters<T>): void
    cancel: () => void
  }

  debounced.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  return debounced
}
