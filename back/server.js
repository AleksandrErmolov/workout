import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'
import path from 'path'

import userRoutes from './routes/userRouters.js'


dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5001

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
