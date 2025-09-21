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
import { PlusCircle } from 'lucide-react'
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
import { createVacancy } from '@/lib/vacancies'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

const formSchema = z.object({
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

export function CreateVacancyModal() {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const t = useTranslations('Vacancies')
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: { pl: '', en: '' },
      description: { pl: '', en: '' },
      location: { pl: '', en: '' },
      salary: '',
    },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true)
      await createVacancy(values)

      form.reset()
      setOpen(false)
      toast.success('Вакансия успешно создана!', {
        position: 'top-center',
      })
    } catch (error) {
      console.error('Failed to create vacancy:', error)
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
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" /> {t('add_new')}
        </Button>
      </DialogTrigger>
      <DialogContent className={cn({ 'pointer-events-none': isLoading })}>
        <DialogHeader>
          <DialogTitle>{t('add_new')}</DialogTitle>
          <DialogDescription>
            Wypełnij dane na dwóch językach, aby utworzyć nową ofertę pracy.
          </DialogDescription>
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
              Utwórz
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
