const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('db connected')
}).catch(() => {
    console.log('db not connected')
})