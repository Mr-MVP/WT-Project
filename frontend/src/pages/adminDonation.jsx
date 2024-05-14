import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';
import Navbar from '../components/Navbar/navbar';

const AdminDonation = () => {
    const { user } = useAuthContext();
    const [donationList, setDonationList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDonations();
    }, []);

    const fetchDonations = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/donation/donations`, {
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

    const updateDonation = async (donationId, usage) => {
        try {
            setLoading(true);
            await axios.post(`/api/donation/update/${donationId}`,
                { usage },
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
            console.error('Error updating donation:', error);
            setError('Error updating donation');
            setLoading(false);
        }
    }

    const handleUsageChange = (donationId, usage) => {
        const updatedDonationList = donationList.map(donation => {
            if (donation._id === donationId) {
                return { ...donation, usage };
            }
            return donation;
        });
        setDonationList(updatedDonationList);
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                <div className="w-full lg:w-1/2 p-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-semibold mb-8 text-center">Donation Page</h1>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">All Donations</h2>
                        {donationList.length > 0 ? (
                            <ul>
                                {donationList.map((donation, index) => (
                                    <div key={index} className="border-b border-gray-200 mb-4 pb-4">
                                        <div><span className="font-semibold">Amount:</span> {donation.amount}</div>
                                        <div><span className="font-semibold">Resource:</span> {donation.resource}</div>
                                        <div><span className="font-semibold">Description:</span> {donation.usage}</div>
                                        <div><span className="font-semibold">By:</span> {donation.userId.email}</div>
                                        <div><span className="font-semibold">At:</span> {new Date(donation.date).toLocaleDateString()}</div>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                placeholder="Enter new usage"
                                                value={donation.usage || ''}
                                                onChange={(e) => handleUsageChange(donation._id, e.target.value)}
                                                className="border border-gray-300 rounded-md py-1 px-2"
                                            />
                                            <button
                                                onClick={() => updateDonation(donation._id, donation.usage)}
                                                disabled={loading}
                                                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-1 px-4"
                                            >
                                                Update Usage
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        ) : (
                            <p>No donations found.</p>
                        )}
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdminDonation;
