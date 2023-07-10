const express = require("express");
const router = express.Router();
const validateBody = require("../../middlewares/validateBody");
const { schemas } = require("../../models/user");
const authenticate = require("../../middlewares/authenticate");
const ctrl = require("../../controllers/auth");
const upload = require("../../middlewares/upload");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  upload.single("avatar"),
  ctrl.register
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.verifyEmailSchema),
  ctrl.resendVerifyEmail
);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("logout", authenticate, ctrl.logout);

router.patch(
  "/:id/subscription",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
