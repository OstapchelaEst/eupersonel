import { useState } from 'react'

interface Props {
  delay?: number
}

export const useCopyToClipboard = (props?: Props) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = (text: string) => {
    try {
      if (isCopied) return

      navigator.clipboard.writeText(text)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, props?.delay ?? 2000)
    } catch (error) {
      console.error(error)
      setIsCopied(false)
    }
  }

  return { handleCopy, isCopied }
}
