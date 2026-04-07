import { Router } from "express";
import {
  deletePedido,
  getPedidos,
  postPedido,
} from "../controllers/PedidoController.js";

const router = Router();
router.get("/", getPedidos);
router.post("/", postPedido);
router.delete("/:id", deletePedido);

export const pedidosRoutes = router;
