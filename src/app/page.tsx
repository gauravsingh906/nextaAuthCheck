'use client'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Login Button */}
        <div className="mb-8 text-center">
          <Link href="/login">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Go to Login Page
            </button>
          </Link>
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700">Login Function</h2>
            <p className="text-gray-600">
              Authenticates users by verifying credentials and returning an authentication token.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-green-700">Registration Function</h2>
            <p className="text-gray-600">
              Registers new users by storing their information and hashed password.
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-yellow-700">Password Reset Function</h2>
            <p className="text-gray-600">
              Allows users to reset their password by generating a reset token and updating the password.
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-purple-700">Session Management</h2>
            <p className="text-gray-600">
              Manages user sessions and keeps track of authentication state.
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-red-700">Authorization Middleware</h2>
            <p className="text-gray-600">
              Protects routes and resources from unauthorized access based on tokens or user roles.
            </p>
          </div>

          <div className="bg-teal-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-teal-700">Logout Function</h2>
            <p className="text-gray-600">
              Ends the user session and clears authentication tokens.
            </p>
          </div>

          <div className="bg-orange-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-orange-700">Email Verification</h2>
            <p className="text-gray-600">
              Confirms the user’s email address by sending a verification link or code and validating it.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
