import donation from "../models/donation.js";
import User from "../models/user.js";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const acceptDonation = async (req, res) => {
    const { amount, resource, contact, address, comment, donationType } = req.body;
    const userId = req.user._id;
    console.log(userId)

    const existingUser = await User.findById(userId)

    if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
    }

    try {
        if (donationType === "monetary" && amount > 0) {
            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}/donation/success`,
                cancel_url: `${process.env.CLIENT_URL}/donation/cancel`,
                customer_email: existingUser.email,
                client_reference_id: userId.toString(),
                line_items: [
                    {
                        price_data: {
                            currency: 'inr',
                            unit_amount: amount * 100,
                            product_data: {
                                name: 'Donation',
                                description: 'Donation to help the needy',
                            },
                        },
                        quantity: 1
                    }
                ]
            });
            const newDonation = new donation({
                userId,
                amount,
                resource,
                contact,
                address,
                comment,
                donationType,
                sessionId: session.id
            });
            await newDonation.save();
            return res.status(200).json({ success: true, message: "Succesfully donated", session });
        } else {
            const newDonation = new donation({
                userId,
                amount,
                resource,
                contact,
                address,
                comment,
                donationType
            });
            await newDonation.save();
            return res.status(200).json(newDonation);
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const updateDonation = async (req, res) => {
    const { donationId } = req.params;
    const { usage } = req.body;

    try {
        const existingDonation = await donation.findById(donationId);
        if (!existingDonation) {
            return res.status(404).json({ error: "Donation not found" });
        }
        existingDonation.usage = usage;
        await existingDonation.save();
        return res.status(200).json(existingDonation);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const getAllDonations = async (req, res) => {
    try {
        const donations = await donation.find().populate('userId', 'email');
        console.log(donations)
        return res.json(donations);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get donations.' });
    }
}

const getUserDonations = async (req, res) => {
    const userId = req.user._id;
    try {
        const donations = await donation.find({ userId });
        return res.json(donations);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get donations.' });
    }
}

export default { acceptDonation, updateDonation, getAllDonations, getUserDonations };
