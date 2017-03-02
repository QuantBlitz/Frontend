const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT
const env = process.env.NODE_ENV

const staticPath = path.join(__dirname, 'static')

// Server-side rendering for React
if (env === 'production') {
  app.get('*', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    })
  })
}

app.listen(port || 8080, () => console.log('λ CORS-enabled server'))
