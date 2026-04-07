import type { Request, Response } from "express";
import { PedidoModel, type INovoItemPedido } from "../models/Pedido.js";

export const getPedidos = async (req: Request, res: Response) => {
  try {
    const pedidos = await PedidoModel.listarTodos();
    return res.json(pedidos);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ error: "ocorreu um erro ao listar os pedidos." });
  }
};

export const postPedido = async (req: Request, res: Response) => {
  const itens: INovoItemPedido[] = req.body.itens;

  if (!itens || !Array.isArray(itens)) {
    return res.status(400).json({ error: "formato de itens invalido" });
  }

  try {
    const novoPedido = await PedidoModel.criar(itens);
    return res.status(201).json(novoPedido);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ error: "erro inesperado ao processar o pedido" });
  }
};

export const deletePedido = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const sucesso = await PedidoModel.deletar(id);
    if (!sucesso) {
      return res.status(404).json({
        error: "Pedido não encontrado",
      });
    }
    return res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ error: "Ocorreu um erro inesperado ao deletar o pedido." });
  }
};
