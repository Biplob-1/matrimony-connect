import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const CheckoutForm = ({ biodataId }) => {
    const biodataDetail = useLoaderData();
    console.log(biodataDetail)
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const navigate =useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setError(error.message);
      setProcessing(false);
      return;
    }

    try {
      const paymentData = {
        biodataId,
        name: biodataDetail.name,
        mobileNumber: biodataDetail.mobileNumber,
        userEmail: user.email,
        amount: 5, 
        customerEmail: biodataDetail.email,
      };

      const response = await axiosSecure.post('/payment', paymentData);

      const { clientSecret } = response.data;

      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id
      });

      if (confirmError) {
        console.error(confirmError);
        setError(confirmError.message);
        setProcessing(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        alert("Payment successful and request sent");
        const paymentInfo = {
            paymentIntentId: paymentIntent.id,
            amount: paymentIntent.amount,
            currency: paymentIntent.currency,
            userEmail: user.email,
            biodataId: biodataId,
            type: 'pending',
            status: paymentIntent.status,
            name: biodataDetail.name,
            mobileNumber: biodataDetail.mobileNumber,
            customerEmail: biodataDetail.contactEmail,
            createdAt: new Date(),
          };
          console.log('alll biodatatatatat:',biodataDetail);
          console.log(biodataDetail.mobileNumber);
          console.log(biodataDetail.contactEmail);
          console.log(biodataDetail.name);
          console.log(paymentInfo);
          const response = await axiosSecure.post('/insertPayment', paymentInfo);

          navigate('/UserDashboard/contact-request');
        
      } else {
        alert("Payment failed");
      }
    } catch (error) {
      console.error("Error during payment or request:", error);
      setError("Payment or request failed");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <label className="block text-sm font-medium text-gray-700">Biodata ID</label>
          <input
            type="text"
            value={biodataId}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Card Details</label>
          <div className="mt-1 border border-gray-300 rounded-md shadow-sm px-3 py-2">
            <CardElement />
          </div>
        </div>
        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {processing ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

const Checkout = () => {
  const { biodataId } = useLoaderData();

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm biodataId={biodataId} />
    </Elements>
  );
};

export default Checkout;
