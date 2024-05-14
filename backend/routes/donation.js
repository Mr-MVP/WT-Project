import pkg from '../controllers/donation.js';
import { Router } from 'express'
const { acceptDonation, updateDonation, getAllDonations, getUserDonations } = pkg;
import isAdmin from '../middlewares/isadmin.js';
import requireAuth from '../middlewares/requireAuth.js';


const router = Router()

router.post('/donate', requireAuth, acceptDonation)

router.post('/update/:donationId', requireAuth, isAdmin, updateDonation)

router.get('/donations', requireAuth, isAdmin, getAllDonations)

router.get('/userdonations', requireAuth, getUserDonations)

export default router;