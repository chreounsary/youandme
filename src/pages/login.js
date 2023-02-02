import { useFormik } from 'formik';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validationSchema: LoginSchemaValidate,
    onSubmit
  });

  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      role: values.role,
      callbackUrl: "/frontend/profile"
    })
    console.log(status);
    if (status.ok)router.push(status.url);
  }


  async function handleGoogleLogIn(params) {
    signIn('google', {callbackUrl: "http://localhost:3000"})
  }

  async function handleGitHubLogIn(params) {
    signIn('github', {callbackUrl: "http://localhost:3000"})
  }

  async function handleFacebookLogIn(params) {
    signIn('facebook', {callbackUrl: "http://localhost:3000"})
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
      <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">  
        <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div class="rounded-xl bg-white shadow-xl">
                  <div class="p-6 sm:p-16">
                      <div class="space-y-4">
                        <img src="https://plus-skill-web3.web.app/img/logo/logo-plus_skill.png" loading="lazy" class="w-10" alt="tailus logo"/>
                        <h2 class="mb-8 text-2xl text-cyan-900 font-bold">Sign in to your account</h2>
                      </div>
                      <div class="mt-16 grid space-y-4">
                        <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                          <input 
                          type="email" 
                          placeholder="Email"
                          autoComplete="email"
                          required
                          {...formik.getFieldProps('email')}
                          value={formik.values.email}
                          class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                        </div>
                        <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                          <input 
                          type="password" 
                          placeholder="Password"
                          {...formik.getFieldProps('password')}
                          value={formik.values.password}
                          class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                        </div>
                        <button
                          type='submit'
                          class="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                          login
                        </button>
                          
                          <button  onClick={handleGoogleLogIn} class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                              <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo"/>
                              <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                          </button>
                          <button onClick={handleGitHubLogIn} class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                              </svg>
                              <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                            </div>
                          </button>
                          <button onClick={handleFacebookLogIn} class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                              <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" class="absolute left-0 w-5" alt="Facebook logo"/>
                              <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                            </div>
                          </button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </form>
  );
}
export default Login;

export async function getServerSideProps ({req, res, next}){
  const session = await getSession({req});
  console.log(session, 'session');
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
