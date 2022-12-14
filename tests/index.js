const { QuickLogger } = require('../main')

const logger = new QuickLogger({
    driver: "chalk" // or cli-color
})
// Or if you want a specific name use:
// const logger = new QuickLogger({
//    name: "Logger",
//    driver: "chalk" // or cli-color
// })

logger.log("Hello, World!") // output: [Logger] => Hello, World!
logger.warn("This a Warn") // output: [Logger WARN] => This a Warn
logger.error("This a Error") // [Logger ERROR] => This a Error
logger.debug("This a Debug") // [Logger DEBUG] => This a Debug