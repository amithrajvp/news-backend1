const express = require('express');
const router = express.Router();
const { getAllAuthors, getAuthorsById, AddAuthors, UpdateAuthors, DeleteAuthors } = require('../controllers/authorcontroller');

// GET all authors
router.get('/', getAllAuthors);

// GET author by ID
router.get('/:id', getAuthorsById);

// POST new author
router.post('/', AddAuthors);

// PUT update author
router.put('/:id', UpdateAuthors);

// DELETE author
router.delete('/:id', DeleteAuthors);

module.exports = router;
