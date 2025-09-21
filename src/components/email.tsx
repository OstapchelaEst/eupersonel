'use client'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'
import { CONTACTS } from '@/utils/constants'
import { MdEmail } from 'react-icons/md'
import { TbCopyCheck } from 'react-icons/tb'
import { toast } from 'sonner'

export const Email = () => {
  const { handleCopy, isCopied } = useCopyToClipboard()

  return (
    <button
      className={cn('cursor-pointer icon_hover', {
        'pointer-events-none': isCopied,
      })}
      onClick={() => {
        handleCopy(CONTACTS.EMAIL)

        toast.success('Copied to clipboard', {
          duration: 5000,
          description: 'Successful copy to clipboard',
          position: 'top-center',
        })
      }}
    >
      {!isCopied && <MdEmail />}
      {isCopied && <TbCopyCheck className="text-brand" />}
    </button>
  )
}
