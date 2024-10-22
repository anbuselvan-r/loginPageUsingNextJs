import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {/*sign in section*/}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold"><span className="text-green-600">Mahadhi</span> Technologies</div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2">Sign in to Account</h2>
              <div className="border-2 w-10 border-green-600 inline-block mb-2"></div>
              {/* social login section */}
              <div className="flex justify-center my-2">
                <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">or user your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items- mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items- mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className="flex w-64 justify-between mb-5">
                  <label className="flex items-center text-xs"> <input type="checkbox" name="remember" className="mr-1" />Remember me</label>
                  <a href="#" className="text-xs">Forgot Password ?</a>
                </div>
                <a href="" className="border-2 bg-green-600 text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-gray-500 hover:text-black">Sign Up</a>
              </div>
            </div>
          </div>
          {/*sign up section*/}
          <div className="w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Fill up personal information with us and start journey with us.</p>
            <a href="" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-600">Sign Up</a>
          </div>
        </div>
      </main>
    </div>
  );
}
