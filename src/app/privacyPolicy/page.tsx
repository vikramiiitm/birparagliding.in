import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
   <>
   <Navbar />

          <div>
              <div className='max-w-5xl mx-auto pb-10 px-5'>
                  <h1 className='text-3xl md:text-4xl font-bold text-gray-900 text-center py-10'>Privacy Statement</h1>

                  <section className='pb-10'>
                      <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                          SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION?
                      </h2>
                      <ol className='text-gray-700 text-base flex flex-col gap-5 ml-4'>
                          <li>
                              When you book paragliding from our website, as part of the booking process, we collect the personal information you give us such as your name, age, gender, address, phone number, email address, etc.
                          </li>
                          <li>
                              When you visit our website, we also automatically receive your computer’s internet protocol (IP) address to provide us with information that helps us learn about your browser and operating system.
                          </li>
                          <li>
                              <strong>Email & SMS:</strong> With your permission, we send you emails and SMSs regarding the booking status, payment status, flight insurance, rescheduling of timing slots/date, cancellation of the flight, refund (in case of cancellation), and other updates.
                          </li>
                      </ol>
                  </section>

                  <section className='pb-10'>
                      <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                          SECTION 2 – CONSENT
                      </h2>
                      <div className='text-gray-700 text-base flex flex-col gap-5 ml-4'>
                          <h3 className='font-semibold'>How do you get my consent?</h3>
                          <p>
                              When you provide us with personal information to complete a transaction, verify your credit/debit card or any other online payment method, book the flight, buy insurance, or cancel the flight, we imply that you consent to our collecting it and using it for that specific reason only.
                          </p>
                          <p>
                              A copy of your photographs and videos of the flight are stored in our system and can be used for marketing purposes.
                          </p>
                          <h3 className='font-semibold'>How do I withdraw my consent?</h3>
                          <p>
                              If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use, or disclosure of your information, at any time, by contacting us at manu@skycandy.in.
                          </p>
                      </div>
                  </section>

                  <section className='pb-10'>
                      <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                          SECTION 3 – DISCLOSURE
                      </h2>
                      <p className='text-gray-700 text-base ml-4'>
                          We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
                      </p>
                  </section>

                  <section className='pb-10'>
                      <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                          SECTION 4 – PAYMENT
                      </h2>
                      <p className='text-gray-700 text-base ml-4'>
                          We use Razorpay and Paytm for processing payments. We/Razorpay/Paytm do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.
                      </p>
                      <p className='text-gray-700 text-base ml-4 mt-4'>
                          Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
                      </p>
                      <p className='text-gray-700 text-base ml-4 mt-4'>
                          For more insight, you may also want to read the terms and conditions of Razorpay at{' '}
                          <a href='https://razorpay.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 underline'>
                              https://razorpay.com
                          </a>{' '}
                          .
                      </p>
                  </section>

                  <section className='pb-10'>
                      <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                          SECTION 5 – THIRD-PARTY SERVICES
                      </h2>
                      <p className='text-gray-700 text-base ml-4'>
                          In general, the third-party providers used by us will only collect, use, and disclose your information to the extent necessary to allow them to perform the services they provide to us.
                      </p>
                      <p className='text-gray-700 text-base ml-4 mt-4'>
                          However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand how your personal information will be handled by these providers.
                      </p>
                      <p className='text-gray-700 text-base ml-4 mt-4'>
                          In particular, remember that certain providers may be located in or have facilities in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
                      </p>
                      <p className='text-gray-700 text-base ml-4 mt-4'>
                          Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
                      </p>

                      <h3 className='font-semibold text-lg md:text-xl mt-5'>Links</h3>
                      <p className='text-gray-700 text-base ml-4 mt-4'>
                          When you click on links on our website, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
                      </p>

                      <h3 className='font-semibold text-lg md:text-xl mt-5'>Reviews</h3>
                      <p className='text-gray-700 text-base ml-4 mt-4'>
                          When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                      </p>
                      <p className='text-gray-700 text-base ml-4'>
                          We have partnered with CusRev (an independent third-party organization) to provide a service whereby customers may leave reviews about the items and services they have purchased on the site. A single review reminder for each order is sent when the service has been delivered. If you don’t wish to receive these reminder emails, you can simply unsubscribe by pressing the unsubscribe button in the email. Please see Cusrev’s Privacy Policy for more details on how they store and use your data.
                      </p>

                      <h3 className='font-semibold text-lg md:text-xl mt-5'>Newsletters & Marketing Emails</h3>
                      <p className='text-gray-700 text-base ml-4 mt-4'>
                          We use Mailchimp for our newsletter service. There is a subscription form on our home page and a tick box opt-in on the checkout page. All newsletters have an unsubscribe button should you wish to stop receiving them. Please see Mailchimp’s (Intuit’s) Privacy Policy for more details on how they store and use your data.
                      </p>
                  </section>

                  <section className='pb-10'>
                      <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                          SECTION 6 – SECURITY
                      </h2>
                      <p className='text-gray-700 text-base ml-4'>
                          To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed.
                      </p>
                  </section>

                  <section className='pb-10'>
                      <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                          SECTION 7 – COOKIES
                      </h2>
                      <p className='text-gray-700 text-base ml-4'>
                          We use cookies to maintain the session of the user. It is not used to personally identify you on other websites.
                      </p>
                  </section>

                  <section className='pb-10'>
                      <h2 className='text-lg md:text-2xl text-start py-5 font-bold text-gray-900'>
                          SECTION 8 – AGE OF CONSENT
                      </h2>
                      <p className='text-gray-700 text-base ml-4'>
                          By using this site, you represent that you are at least the age of majority in your state or province of residence or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                      </p>
                  </section>
                  <section className='pb-10 flex flex-col gap-4'>
                      <h2 className='text-lg md:text-2xl text-start py-2 font-bold text-gray-900'>

                          SECTION 9 – CHANGES TO THIS PRIVACY POLICY
                      </h2>
                      <p className='text-gray-700 text-base ml-4'>
                          We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
                      </p>
                      <p className='text-gray-700 text-base ml-4'>
                          If our website is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to give services to you.
                      </p>
                      <h2 className='text-lg md:text-2xl text-start py-2 font-bold text-gray-900'> QUESTIONS AND CONTACT INFORMATION</h2>
                      <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <a href='mailto:manu@skycandy.in' className='text-blue-500 underline'>manu@skycandy.in</a></p>
                  </section>
              </div>
          </div>
   <Footer />

   </>
  )
}

export default page