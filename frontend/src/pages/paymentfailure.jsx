import Navbar from '../components/Navbar/navbar';
import { FaTimesCircle } from 'react-icons/fa';

const PaymentFailure = () => {
    return (
        <div>
            <Navbar />
            <div className="text-red-500 text-6xl flex justify-center items-center h-screen">
                <FaTimesCircle />
            </div>
        </div>
    );
}

export default PaymentFailure;
