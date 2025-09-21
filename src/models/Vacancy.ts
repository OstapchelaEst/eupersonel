import mongoose, { Schema, Model, InferSchemaType } from 'mongoose'

const VacancySchema = new Schema({
  title: {
    pl: { type: String, required: true },
    en: { type: String, required: true },
  },
  description: {
    pl: { type: String, required: true },
    en: { type: String, required: true },
  },
  location: {
    pl: { type: String, required: true },
    en: { type: String, required: true },
  },
  salary: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

export type IVacancy = InferSchemaType<typeof VacancySchema>

const Vacancy: Model<IVacancy> =
  mongoose.models.Vacancy || mongoose.model<IVacancy>('Vacancy', VacancySchema)

export default Vacancy
