//const { createServer } = require('http')
//const { parse } = require('url')
//const next = require('next')

import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

//require('reflect-metadata')
//const { createConnection } = require('typeorm')

import "reflect-metadata"; // Required for TypeORM decorators
import { initDB } from './initDB';
 
const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

async function connectDatabase() {
    try {
      const connection = await initDB(); // Establish connection using ormconfig.json
      console.log("Database connected successfully!");
      connection.close();
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
}
  
connectDatabase(); // Call the connection function
 
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)
 
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})