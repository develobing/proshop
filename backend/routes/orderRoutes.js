import express from 'express';
import {
  getOrders,
  getOrderById,
  getMyOrders,
  addOrderItems,
  updateOrderToPaid,
  updateOrderToDelivered,
} from '../controllers/orderController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.route('/').get(protect, admin, getOrders).post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
