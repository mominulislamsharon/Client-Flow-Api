import express from "express";
import { PaymentController } from "./payment.controller.js";

const router = express.Router();

router.post("/", PaymentController.createPayment);
router.get("/project/:projectId", PaymentController.getPaymentsByProject);


export const PaymentRoutes = router;