const express = require('express');
const router = express.Router();

const { getAllArticles, getArticlesById, AddArticles, UpdateArticles, DeleteArticles } = require('../controllers/articlescontroller');

// GET all articles
router.get('/', getAllArticles);

// GET article by ID
router.get('/:id', getArticlesById);

// POST new article
router.post('/', AddArticles);

// PUT update article
router.put('/:id', UpdateArticles);

// DELETE article
router.delete('/:id', DeleteArticles);

module.exports = router;
