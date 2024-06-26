import React from 'react'

export default function Footer() {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='mb-2 text-xs'>
                &copy; 2024 Scott McMahon. All Rights Reserved.
            </small>
            <p className='text-xs'>
                <span className='font-semibold'>About this website:</span> built with React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend.
            </p>
            <p className='text-xs'>
                <span className='font-semibold'>Hosted on Amazon Web Services using ECS</span>
            </p>
        </footer>
    )
}
