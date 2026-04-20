import { Router } from "express";
import {
  deletePedido,
  getPedidos,
  getRelatorio,
  patchStatus,
  postPedido,
  putPedido,
  cancelar,
} from "../controllers/PedidoController.js";

const router = Router();

router.get("/", getPedidos);
router.post("/", postPedido);
router.delete("/:id", deletePedido);
router.patch("/:id", patchStatus);
router.put("/:id", putPedido);

router.get("/relatorio", getRelatorio);
router.patch("/:id/cancelar", cancelar);

export const pedidoRoutes = router;
