import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';
import Navbar from '../components/Navbar/navbar';
import srcimg from "../assets/orphans.jpg";
import { Player } from '@lottiefiles/react-lottie-player';

const Donation = () => {
    const { user } = useAuthContext();
    const [donation, setDonation] = useState(0);
    const [donationlist, setDonationList] = useState([]);
    const [resource, setResource] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchDonations();
    }, []);


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
                { amount: donation, resource },
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

    return (
        <div>
            <Navbar />
            <div className='bg-white flex justify-center items-center h-screen'>
                <div className='lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2'>
                    <h1 className="text-3xl font-semibold mb-10 text-center">Your help matters !!!</h1>
                    <form onSubmit={addDonation}>
                        <div className="mb-4">
                            <label htmlFor="donation" className="block text-sm font-medium text-gray-700">Donation Amount</label>
                            <input type="number" id="donation" placeholder="100" value={donation} onChange={(e) => setDonation(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="resource" className="block text-sm font-medium text-gray-700">Resource</label>
                            <input type="text" id="resource" placeholder="Resource" value={resource} onChange={(e) => setResource(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                        </div>
                        <button type="submit" disabled={loading} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mb-4">Donate</button>
                    </form>
                    {error && <p>{error}</p>}
                </div>
                <div className='w-1/2 h-screen hidden lg:block p-10'>
                    <Player
                        src="https://lottie.host/0db3f8cd-d45c-4149-8cb6-7079f59e3cc6/62GdmMBgNo.json"
                        className="player"
                        loop
                        autoplay
                    />
                </div>
            </div>
            <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                <div className="w-full lg:w-1/2 p-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-semibold mb-8 text-center">Donation Page</h1>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Your Donations</h2>
                        {donationlist.length > 0 ? (
                            <ul>
                                {donationlist.map((donation, index) => (
                                    <div key={index} className="border-b border-gray-200 mb-4 pb-4">
                                        <div><span className="font-semibold">Amount:</span> {donation.amount}</div>
                                        <div><span className="font-semibold">Resource:</span> {donation.resource}</div>
                                        <div><span className="font-semibold">Description:</span> {donation.usage}</div>
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
        </div>
    );
}

export default Donation;
