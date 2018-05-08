const HomeController = require('../controllers/home')

module.exports = (servidor) => {
    servidor.get("/", HomeController.index)
}