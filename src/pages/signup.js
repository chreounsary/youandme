import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { getSession } from "next-auth/react";
import { LockClosedIcon } from '@heroicons/react/20/solid'
// import { signupValidate } from '../lib/validate'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const roles = [
  { name: 'Teacher' },
  { name: 'Student' },
]
const Signup = () => {
  const [selected, setSelected] = useState(roles[0])
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '',
      password: '',
    },
    // validate: signupValidate,
    onSubmit
  })

  async function onSubmit(values) {
    console.log(values);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    };
    await fetch('http://localhost:3000/api/auth/signup', options)
      .then((data) =>{
        if(data.status == 201)router.push('http://localhost:3000/profile')
      })
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Name"
                {...formik.getFieldProps('name')}
                value={formik.values.name}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                {...formik.getFieldProps('email')}
                value={formik.values.email}
              />
              {formik.errors.email? <div className="text-rose-500"> {formik.errors.email}</div> :''}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                {...formik.getFieldProps('password')}
              />
            </div>
            <br/>
            <div className="flex justify-left">
              <div className="form-check form-check-inline">
                <input 
                {...formik.getFieldProps('role')} 
                className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="teacher" id="inlineRadio1" value="teacher"/>
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Teacher</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="student" id="inlineRadio2" value="student"/>
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio20">Student</label>
              </div>
          </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

export async function getServerSideProps ({req, res, next}){
  const session = await getSession({req});
  if (session) {
    return{
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {session}
  }
}
