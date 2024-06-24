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
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:gap-20 items-center'>
        {/* Greeting */}
        <div className='h-1/4 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
          <div className=''>
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
        {/* Email Form */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className='h-4/6 lg:h-5/6 lg:w-1/2 bg-neutral-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'
        >
          {/* Message */}
          <span>Dear Sam,</span>
          <textarea
            rows={6}
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
            name='message'
          />
          {/* Email Address */}
          <span>My email address is:</span>
          <input
            name='email'
            type='text'
            className='bg-transparent border-b-2 border-b-black outline-none'
          />
          <span>Regards,</span>
          <input
            name='from_name'
            type='text'
            className='bg-transparent border-b-2 border-b-black outline-none'
          />
          {/* Send Button */}
          <button className='bg-gradient-to-r from-blue-400 to-blue-500 rounded font-semibold text-gray-600 p-4'>
            Send
          </button>
          {/* Success/Error Message */}
          {success && (
            <span className='text-green-600 font-semibold'>
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className='text-red-600 font-semibold'>
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage
