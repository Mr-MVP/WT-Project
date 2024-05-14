import donation from "../models/donation.js";
import User from "../models/user.js";

const acceptDonation = async (req, res) => {
    const { amount, resource } = req.body;
    const userId = req.user._id;

    const existingUser = await User.findById(userId)

    if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
    }
    try {
        const newDonation = new donation({
            userId,
            amount,
            resource,
        });
        await newDonation.save();
        res.status(201).json(newDonation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateDonation = async (req, res) => {
    const { donationId } = req.params;
    const { usage } = req.body;

    const existingDonation = await donation.findById(donationId);

    if (!existingDonation) {
        return res.status(404).json({ error: "Donation not found" });
    }
    try {
        existingDonation.usage = usage;
        await existingDonation.save();
        res.status(200).json(existingDonation);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAllDonations = async (req, res) => {
    try {
        const donations = await donation.find().populate('userId', 'email');
        console.log(donations)
        res.json(donations);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get donations.' });
    }
}

const getUserDonations = async (req, res) => {
    const userId = req.user._id;
    try {
        const donations = await donation.find({ userId });
        res.json(donations);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get donations.' });
    }
}

export default { acceptDonation, updateDonation, getAllDonations, getUserDonations };