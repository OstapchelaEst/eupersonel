'use server'

import Vacancy from '@/models/Vacancy'
import dbConnect from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'

import { getAuthStatus } from '@/app/actions/auth'

export async function getVacancies() {
  try {
    await dbConnect()
    const vacancies = await Vacancy.find({}).sort({ createdAt: 'desc' })
    return JSON.parse(JSON.stringify(vacancies))
  } catch (error) {
    console.debug('Erorr getting vacancies:', error)
    return []
  }
}

export async function createVacancy(data: {
  title: { pl: string; en: string }
  description: { pl: string; en: string }
  location: { pl: string; en: string }
  salary: string
}) {
  const isAuthenticated = await getAuthStatus()

  if (!isAuthenticated) return

  await dbConnect()
  await Vacancy.create(data)
  revalidatePath('/vacancies')
}

export async function updateVacancy(
  id: string,
  data: {
    title: { pl: string; en: string }
    description: { pl: string; en: string }
    location: { pl: string; en: string }
    salary: string
  }
) {
  const isAuthenticated = await getAuthStatus()

  if (!isAuthenticated) throw Error('Unauthorized')

  await dbConnect()
  await Vacancy.findByIdAndUpdate(id, data)
  revalidatePath('/vacancies')
}

export async function deleteVacancy(id: string) {
  const isAuthenticated = await getAuthStatus()

  if (!isAuthenticated) throw Error('Unauthorized')

  await dbConnect()
  await Vacancy.findByIdAndDelete(id)
  revalidatePath('/vacancies')
}

