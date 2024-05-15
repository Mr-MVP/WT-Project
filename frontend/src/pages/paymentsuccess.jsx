import Navbar from '../components/Navbar/navbar';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccess = () => {
    return (
        <div>
            <Navbar />
            <div className="text-green-500 text-6xl flex justify-center items-center h-screen">
                <FaCheckCircle />
            </div>
        </div>
    );
}

export default PaymentSuccess;