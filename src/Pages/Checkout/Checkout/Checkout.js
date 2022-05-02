import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: 'Maryam Mahdi',
    //     email: 'maryam@maryam.com',
    //     address: 'Bangladesh',
    //     phone: '019123456789'
    // });
    // const handleFormInputChange = (event) => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        // console.log(order);
        // axios diye evabe data post korte hoi
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response; // destructred, it can be write - respoonse.data
                if (data.insertedId) {
                    toast('Your order is booked');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='name' required disabled readOnly />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' required disabled readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;