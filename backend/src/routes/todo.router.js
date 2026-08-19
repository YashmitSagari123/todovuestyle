import express from "express";

import {getAllTodos, getTodo, createNewTodo} from "../controllers/todos.controller.js"

const router = express.Router();

router.get("/", getAllTodos);
router.get("/:id", getTodo);
router.post("/", createNewTodo);

export default router;
