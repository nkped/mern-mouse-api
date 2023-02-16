import express from 'express'
import { createPost, getOnePost, getAllPosts, deletePost, updatePost } from '../controllers/post_c.js'



const router = express.Router()

router.get('/', getAllPosts)
router.get('/:id', getOnePost)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)


export default router

