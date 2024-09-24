import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("index", {titleotitulo: "My website with Node"}));
router.get("/about", (req, res) => res.render("about", {titleotitulo: "About Me"}));
router.get("/contact", (req, res) => res.render("contact", {titleotitulo: "Contact Me", numbero: 955929603}));

export default router;
