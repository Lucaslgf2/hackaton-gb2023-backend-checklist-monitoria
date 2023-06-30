import { cloneDeep } from 'lodash'
import winston from 'winston'

const level = process.env.NEW_RELIC_LOG_LEVEL ?? 'info'

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white'
}

const transports = [
  new winston.transports.Console({ level })
]

const replacer = (_key: string, value: any): any => {
  if (value) {
    const items = ['httpRequest', 'httpResponse']
    const keys = Object.keys(value)
    const keysFilter = keys.filter(key => (items.includes(key)))
    if (keysFilter.length > 0) {
      const newValue = cloneDeep(value)
      for (const item of items) {
        if (newValue[item]) {
          const keysItem = Object.keys(newValue[item])
          for (const keyItem of keysItem) {
            if (typeof newValue[item][keyItem] === 'object') {
              newValue[item][keyItem] = JSON.stringify(newValue[item][keyItem]).replaceAll('"', '')
            }
          }
        }
      }
      return newValue
    }
    return value
  }
}

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.json({ replacer })
)

winston.addColors(colors)
console.log(`Starting winston with ${level}`)
const loggerWinston = winston.createLogger({
  level,
  levels,
  transports,
  format
})

export default loggerWinston
