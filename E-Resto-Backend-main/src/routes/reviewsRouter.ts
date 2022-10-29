import {Router} from 'express'
import { deleteReview, editReview, getReviewById, getReviews, postReview } from '../controllers/reviewController';

const reviewRouter= Router();

reviewRouter.get('/review', getReviews)
reviewRouter.get('/review/:id',getReviewById)
reviewRouter.post('/review',postReview)
reviewRouter.put('/review/:id',editReview)
reviewRouter.delete('/review/:id',deleteReview)

export default reviewRouter;