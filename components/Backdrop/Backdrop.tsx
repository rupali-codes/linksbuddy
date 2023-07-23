import { FC } from 'react'
import { createPortal } from 'react-dom'

export const Backdrop: FC<{
  onClick: (() => void) | undefined
  className?: string | undefined
}> = (props) => {
  const { onClick, className } = props

  const overlayRoot = document.getElementById('overlay-root')

  if (!overlayRoot) {
    return null
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-50 h-full w-full cursor-pointer bg-black/80 ${className}`}
      onClick={onClick}
    ></div>,
    overlayRoot
  )
}
