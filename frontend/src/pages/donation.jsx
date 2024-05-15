import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import srcimg from "../assets/disabled2.jpg";

const Donation = () => {
    const { user } = useAuthContext();
    const [donation, setDonation] = useState(0);
    const [donationlist, setDonationList] = useState([]);
    const [resource, setResource] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [donationType, setDonationType] = useState('monetary');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const [contact, setContact] = useState('');
    useEffect(() => {
        fetchDonations();
    }, []);

    const handleDonationTypeChange = (event) => {
        setDonationType(event.target.value);
    };

    const fetchDonations = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/donation/userdonations`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            setDonationList(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching donations:', error);
            setError('Error fetching donations');
            setLoading(false);
        }
    };

    const addDonation = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('/api/donation/donate',
                {
                    amount: donationType === 'monetary' ? donation : null,
                    resource: donationType === 'material' ? resource : null,
                    address,
                    contact,
                    donationType,
                    comment
                },
                {
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            fetchDonations();
            setLoading(false);
        } catch (error) {
            console.error('Error adding donation:', error);
            setError('Error adding donation');
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div>
            <Navbar />
            <div className='mt-20'>
                <div className='flex justify-between items-center p-6'>
                    <div className='w-full lg:w-1/2 p-6 rounded-lg bg-gray-200 flex flex-col justify-between border border-blue-800'>
                        <div className='w-full h-full'>
                            <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Your Help Matters !!!</h2>
                            <form onSubmit={addDonation}>
                                <div className="mb-4">
                                    <label htmlFor="donationType" className="block mb-1 text-sm font-medium text-gray-700">Select Donation Type:</label>
                                    <select id="donationType" value={donationType} onChange={handleDonationTypeChange} className="w-full border rounded-md p-2">
                                        <option value="monetary">Monetary</option>
                                        <option value="material">Material</option>
                                    </select>
                                </div>
                                {donationType === 'monetary' ? (
                                    <div>
                                        <div className="mb-4">
                                            <label htmlFor="donation" className="block text-sm font-medium text-gray-700">Donation Amount</label>
                                            <input type="number" id="donation" placeholder="100" value={donation} onChange={(e) => setDonation(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="mb-4">
                                            <label htmlFor="resource" className="block text-sm font-medium text-gray-700">Resource</label>
                                            <input type="text" id="resource" placeholder="Resource" value={resource} onChange={(e) => setResource(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                            <input type="text" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact No.</label>
                                            <input type="text" id="contact" placeholder="987654310" value={contact} onChange={(e) => setContact(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                                        </div>
                                    </div>
                                )}
                                <div className='mb-4'>
                                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comments</label>
                                    <input type="text" id="comment" placeholder="Add any comments here..." value={comment} onChange={(e) => setComment(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                                </div>
                                <button type="submit" disabled={loading} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mb-4">Donate</button>
                            </form>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-6">
                        <img src={srcimg} alt="Donation Image" className="max-w-full h-auto rounded-lg" />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center p-6'>
                <div className='w-full lg:w-1/2 p-6 rounded-lg flex flex-col justify-between'>
                    <div className='border bg-yellow-50 border-blue-700 p-6 mb-5'>
                        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">What we do ?</h2>
                        <p>
                            Udaan currently operates 102 projects in 19 states and 80 districts, including Mumbai, Pune, Bangalore, Kolkata, and Chennai. With your support, we address children’s critical needs by working with parents, teachers, Anganwadi workers, communities, district and state-level governments as well as the children themselves. We work on changing behaviours and practices at the grassroots level and influencing public policy at a systemic level – thereby creating an ecosystem where children are made the nation’s priority.
                        </p>
                    </div>
                    <div className='border bg-yellow-50 border-blue-700 p-6'>
                        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Our Impact in 2022-23:</h2>
                        <p>
                            <li><b>13,54,730</b> children impacted overall</li>
                            <li><b>2,14,537</b> children in school</li>
                            <li>Over <b>30,000</b> children re-enrolled in school through Udaan’s Academic and Psychosocial Support Centres</li>
                            <li><b>600+</b> kitchen gardens set up across 7 states, as a sustainable solution towards nutrition</li>
                            <li><b>6,471</b> children protected from child labour/ marriage/ trafficking</li>
                            <li>Every contribution you make helps us ensure that India’s children can attend school, receive proper nutrition and healthcare, and remain protected from abuse and exploitation. Join us in creating happier childhoods for India’s children.</li>
                        </p>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 mt-8 w-1/2">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-500">Past Contributions</h2>
                    {donationlist.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                            {donationlist.map((donation, index) => (
                                <div key={index} className="bg-white rounded-md shadow-md p-4">
                                    <p className="font-semibold">Contributed: {donationType === 'monetary' ? donation.amount : donation.resource}</p>
                                    <p><span className='font-semibold'>Date: </span>{formatDate(donation.date)}</p>
                                    <p><span className='font-semibold'>Note: </span>{donation.comment}</p>
                                    <p><span className='font-semibold'>Usage: </span>{donation.usage === '' ? "Not Yet Verified" : donation.usage}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No past contributions found.</p>
                    )}
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Donation;
