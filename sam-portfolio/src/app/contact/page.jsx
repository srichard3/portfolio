'use client'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const text = 'Say Hello!'

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        () => {
          setError(true)
        }
      )
  }

  return (
    <motion.div
      className='h-full overflow-auto'
      initial={{ x: '200vh' }}
      animate={{ x: '0%' }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <div className='h-full w-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center relative z-10'>
        {/* GREETING */}
        <div className='h-1/4 w-full text-accent flex items-center justify-center text-3xl my-16 sm:text-4xl md:text-5xl lg:text-6xl'>
          <div>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.18
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* EMAIL FORM */}
        <div className='w-full h-full flex items-center justify-center'>
          <form
            onSubmit={sendEmail}
            ref={form}
            className='w-5/6 h-5/6 bg-neutral-800 rounded-xl text-xl flex flex-col gap-2 justify-center p-6 sm:p-12 md:p-16 lg:p-20'
          >
            {/* MESSAGE */}
            <span className='text-base font-mono text-neutral-400'>
              Dear Sam,
            </span>
            <textarea
              rows={3}
              className='text-sm placeholder:font-mono placeholder:text-neutral-500 text-neutral-400 h-40 md:h-60 lg:h-80 bg-neutral-800 border-2 border-neutral-500 rounded-md p-3 mb-4 transition duration-300 ease-in-out transform hover:bg-neutral-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-accent/50'
              name='message'
              placeholder='// message'
            />
            {/* EMAIL ADDRESS */}
            <span className='text-base font-mono text-neutral-400'>
              My email address is:
            </span>
            <input
              name='email'
              type='text'
              className='text-sm placeholder:font-mono placeholder:text-neutral-500 text-neutral-400 bg-neutral-800 border-2 border-neutral-500 rounded-md p-4 mb-4 h-10 md:h-12 transition duration-300 ease-in-out transform hover:bg-neutral-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-accent/50'
              placeholder='// email'
            />
            {/* NAME */}
            <span className='text-base font-mono text-neutral-400'>
              Regards,
            </span>
            <input
              name='from_name'
              type='text'
              className='text-sm placeholder:font-mono placeholder:text-neutral-500 text-neutral-400 bg-neutral-800 border-2 border-neutral-500 rounded-md p-4 mb-4 h-10 md:h-12 transition duration-300 ease-in-out transform hover:bg-neutral-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-accent/50'
              placeholder='// name'
            />
            {/* SEND BUTTON */}
            <button className='w-1/2 sm:w-1/4 text-sm sm:text-xl bg-gradient-to-br from-neutral-600 to-neutral-900 rounded-full font-semibold text-neutral-400 p-4 transition duration-300 ease-in-out transform hover:from-accent/30 hover:to-accent/60 hover:text-white hover:shadow-lg hover:scale-105'>
              Send
            </button>

            {/* SUCCESS/ERROR RESPONSES */}
            {success && (
              <span className='font-mono text-sm text-green-600 opacity-60'>
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className='font-mono text-sm text-it text-red/60 opacity-60'>
                Something went wrong!
              </span>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactPage
