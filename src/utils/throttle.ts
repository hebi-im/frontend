/* eslint-disable func-names, consistent-return */

// Generic throttle function with explicit type annotations
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => ReturnType<T> | void {
  let lastCall = 0

  return function (...args: Parameters<T>): ReturnType<T> | void {
    const now = Date.now()

    if (now - lastCall < delay) {
      return
    }

    lastCall = now
    return func(...args) as ReturnType<T>
  }
}

export default throttle
