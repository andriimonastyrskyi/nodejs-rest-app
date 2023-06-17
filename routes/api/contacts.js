const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAll);
router.get("/:contactId", ctrl.getContactById);
router.post("/", validateBody(schemas.addSchema), ctrl.add);
router.delete("/:contactId", ctrl.deleteContact);
router.put("/:contactId", validateBody(schemas.addSchema), ctrl.update);

module.exports = router;
