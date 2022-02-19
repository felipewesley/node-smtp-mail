const routeRegister = require('../helpers/route-register');
const controller = require("../controllers/main-controller");

/**
 * Sub-rotas registradas para o entrypoint "main"
 */
const router = routeRegister("../controllers/main-controller");

// Rotas
router.get('/', (req, res, next) => controller(req, res, next).main);

module.exports = router;