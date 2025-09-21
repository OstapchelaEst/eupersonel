'use client'

import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { deleteVacancy } from '@/lib/vacancies'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

export const DeleteVacancyModal = ({ vacancyId }: { vacancyId: string }) => {
  const t = useTranslations('Vacancies')

  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    try {
      setIsLoading(true)
      await deleteVacancy(vacancyId)

      toast.success('Вакансия удалена!')
    } catch (error) {
      console.error('Error deleting vacancy:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="lg"
          className="w-full"
        >
          {t('delete')}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={cn({ 'pointer-events-none': isLoading })}>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('confirm_delete_title')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('confirm_delete_description')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>
            {t('confirm_delete_cancel')}
          </AlertDialogCancel>
          <Button
            asChild
            variant="destructive"
          >
            <AlertDialogAction
              disabled={isLoading}
              onClick={handleDelete}
            >
              {t('confirm_delete_action')}
            </AlertDialogAction>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
