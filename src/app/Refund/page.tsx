import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const CancellationsRefunds = () => {
    return (
        <>
        <Navbar />
            <div className='max-w-5xl mx-auto pb-10 px-5'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 text-center py-10'>Cancellations & Refunds</h1>
                <p className='text-gray-700 text-sm text-center pb-5'>Last updated on 15 August 2024</p>

                <section className='pb-10'>
                    <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                        Refund Policy
                    </h2>
                    <table className='w-full text-left border-collapse'>
                        <thead>
                            <tr>
                                <th className='border-b py-2 font-semibold text-gray-800'>Scenario</th>
                                <th className='border-b py-2 font-semibold text-gray-800'>Refund</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-700'>
                            <tr>
                                <td className='border-b py-2 '>
                                    Cancellations initiated by customer before 72 hours of the scheduled activity;
                                    cancellation owing to unfavorable weather conditions; cancellation due to VIP movement;
                                    cancellations initiated by paraBooking owing to unforeseen circumstances
                                </td>
                                <td className='border-b py-2 w-1/3'>100% of the booking amount</td>
                            </tr>
                            <tr>
                                <td className='border-b py-2'>
                                    Cancellations initiated by customer between 72 hours and 24 hours before the scheduled activity
                                </td>
                                <td className='border-b py-2 w-1/3'>50% of the booking amount</td>
                            </tr>
                            <tr>
                                <td className='border-b py-2'>
                                    Cancellations initiated by customer less than 24 hours before scheduled;
                                    or no-shows
                                </td>
                                <td className='border-b py-2 w-1/3'>No Refunds</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className='pb-10'>
                    <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                        Cancellation Policy
                    </h2>
                    <p className='text-gray-700 text-base ml-4'>
                        To cancel the flight, you may initiate it by going to <strong>My Accounts</strong> or drop an email with the booking details to <a href='mailto:manu@skycandy.in' className='text-blue-500 underline'>manu@skycandy.in</a>.
                    </p>
                </section>

                <section className='pb-10'>
                    <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                        Reporting Time
                    </h2>
                    <p className='text-gray-700 text-base ml-4'>
                        Reporting time shall be 30 mins prior to the pickup time chosen at the time of booking, beyond which the no-show condition will be applicable.
                    </p>
                </section>

                <section className='pb-10'>
                    <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                        Rescheduling
                    </h2>
                    <p className='text-gray-700 text-base ml-4'>
                        If you want to change the slot or the date of the flight, you can write to <a href='mailto:manu@skycandy.in' className='text-blue-500 underline'>manu@skycandy.in</a> 72 hours prior to the booked flight slot, after which no rescheduling shall be entertained. The passenger may reschedule the flight only once.
                    </p>
                    <p className='text-gray-700 text-base ml-4'>
                        In case of unforeseen circumstances, i.e., weather, VVIP movement, and events, rescheduling will be done according to the will of the customer in conjunction with the availability of the pilots.
                    </p>
                </section>

                <section className='pb-10'>
                    <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                        Refund Processing Time
                    </h2>
                    <p className='text-gray-700 text-base ml-4'>
                        Once the cancellation request is received, you will receive an email notification. We will also notify you of the approval or rejection of your refund request within 3 days, and the same shall be processed within 7 days.
                    </p>
                </section>

                <section className='pb-10'>
                    <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                        Non-Refundable Products
                    </h2>
                    <ul className='text-gray-700 text-base flex flex-col gap-3 ml-4 list-disc'>
                        <li>Consumable items (like food products)</li>
                        <li>Gift Cards</li>
                        <li>Personalised or custom-made products</li>
                        <li>Digital or downloadable products</li>
                        <li>Insurance, purchased wholly or as a part or a component of another product (like paragliding, trekking, etc.)</li>
                        <li>Any merchandise, unless received in a defective condition</li>
                    </ul>
                </section>

                <section className='pb-10'>
                    <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                        Late or Missing Refunds
                    </h2>
                    <p className='text-gray-700 text-base ml-4'>
                        If you don’t receive a refund within 8 days from the date of request, check your bank account, then contact your credit card company, as it may take some time before your refund is officially posted. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at <a href='mailto:manu@skycandy.in' className='text-blue-500 underline'>manu@skycandy.in</a>.
                    </p>
                </section>
            </div>
        <Footer />
        </>
    );
};

export default CancellationsRefunds;
