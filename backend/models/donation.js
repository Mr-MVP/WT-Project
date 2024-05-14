import { Schema, model } from 'mongoose'

const donationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        default: 0
    },
    resource: {
        type: String,
        default: ""
    },
    usage: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const donation = model('Donation', donationSchema);

export default donation;
