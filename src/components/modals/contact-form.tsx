'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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
import { cn } from '@/lib/utils'
import { CONTACTS } from '@/utils/constants'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string().email({
    message: 'Nieprawidłowy adres e-mail.',
  }),
  message: z.string().min(10, {
    message: 'Wiadomość musi mieć co najmniej 10 znaków.',
  }),
})

export function ContactFormModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.debug('Contacts form values', values)
      toast.success('Wysłano pomyślnie!', {
        description:
          'Twoja wiadomość została odebrana. Skontaktujemy się z Tobą w najbliższym czasie.',
        position: 'top-center',
        duration: 5000,
      })

      setOpen(false)
      form.reset()
    } catch (error) {
      console.error('Błąd podczas wysyłania formularza:', error)
      toast.error('Wystąpił błąd podczas wysyłania formularza.', {
        description: 'Spróbuj ponownie lub wybierz inny sposób kontaktu.',
        position: 'top-center',
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn(
          'sm:max-w-[625px] overflow-hidden overflow-y-auto max-h-[90vh]',
          {
            'pointer-events-none': isLoading,
          }
        )}
      >
        <DialogHeader>
          <DialogTitle>Skontaktuj się z nami</DialogTitle>
          <DialogDescription className="text-base">
            Możesz również skontaktować się z nami telefonicznie{' '}
            <a
              className="text-brand hover:underline"
              href={`tel:${CONTACTS.PHONE}`}
            >
              {CONTACTS.PHONE}
            </a>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="*:text-base">
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base! h-12"
                      placeholder="Twój e-mail"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="*:text-base">
                  <FormLabel>Wiadomość</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Wpisz swoją wiadomość..."
                      className="resize-none text-base! min-h-40"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isLoading}
              type="submit"
              size="xl"
              className="w-full"
            >
              Wyślij
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
