'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useTranslations } from 'next-intl'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { updateVacancy } from '@/lib/vacancies'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  _id: z.string(),
  title: z.object({
    pl: z.string().min(1, 'Pole jest wymagane.'),
    en: z.string().min(1, 'Field is required.'),
  }),
  description: z.object({
    pl: z.string().min(1, 'Pole jest wymagane.'),
    en: z.string().min(1, 'Field is required.'),
  }),
  location: z.object({
    pl: z.string().min(1, 'Pole jest wymagane.'),
    en: z.string().min(1, 'Field is required.'),
  }),
  salary: z.string().min(1, 'Pole jest wymagane.'),
})

type FormValues = z.infer<typeof formSchema>

export function EditVacancyModal({ vacancy }: { vacancy: FormValues }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const t = useTranslations('Vacancies')

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: vacancy,
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true)
      await updateVacancy(values._id, values)

      setOpen(false)
      toast.error('Вакансия успешно обновлена!')
    } catch (error) {
      toast.error('Ошибка при обновлении вакансии!')
      console.error('Failed to update vacancy:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="w-full"
        >
          {t('edit')}
        </Button>
      </DialogTrigger>
      <DialogContent className={cn({ 'pointer-events-none': isLoading })}>
        <DialogHeader>
          <DialogTitle>{t('edit')}</DialogTitle>
          <DialogDescription>Edytuj dane na dwóch językach.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title.pl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tytuł (PL)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Frontend Developer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title.en"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title (EN)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Frontend Developer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location.pl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lokalizacja (PL)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Warszawa"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location.en"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location (EN)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Warsaw"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pensja / Salary</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="10000 - 15000 PLN"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="description.pl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opis (PL)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Opis stanowiska..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description.en"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (EN)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Job description..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full"
            >
              Zapisz zmiany
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
