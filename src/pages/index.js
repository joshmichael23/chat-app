import { Phone } from '../../components/phone';
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main> 
          
          <Phone/>
          <section>
            <h1>Simple booking</h1>
            <p>
              Stay in touch with our dog walkers through the chat interface. This makes it easy to
              discuss arrangements and make bookings. Once the walk has been completed you can rate
              your walker and book again all through the chat.
            </p>
          </section>
      </main>
      <div className="background"></div>
      <div className="background2"></div>
    </>
  )
}
