import React, { useState } from "react";
import axios from "axios";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

interface LoginFormProps {
  onClose: () => void;
}

export function LoginForm({ onClose }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado de carga

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const url = isRegister ? "/api/register" : "/api/login";
    try {
      const response = await axios.post(url, { email, password });
      setMessage(response.data.message);
      if (isRegister) {
        setUserNumber(response.data.userNumber);
      } else {
        onClose();
      }
    } catch (error: any) {
      setMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center">
          {isRegister ? (
            <>
              <FaUserPlus className="mr-4" size={24} />
              Create an account
            </>
          ) : (
            <>
              <FaSignInAlt className="mr-4" size={24} />
              Login
            </>
          )}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <AiOutlineMail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={24}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-12 pr-4 py-2 border rounded w-full focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="relative">
            <AiOutlineLock
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={24}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-12 pr-4 py-2 border rounded w-full focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-secondary rounded flex items-center justify-center disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters
                className="animate-spin mr-2"
                size={24}
              />
            ) : isRegister ? (
              <>
                <FaUserPlus className="mr-4" size={24} />
                Register
              </>
            ) : (
              <>
                <FaSignInAlt className="mr-4" size={24} />
                Login
              </>
            )}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        {userNumber !== null && isRegister && (
          <p className="mt-4 text-center">
            You are the person number {userNumber}
          </p>
        )}
        <div className="flex flex-col items-center mt-4 space-y-4">
          <button
            onClick={onClose}
            className="mt-4 text-center text-secondary hover:underline flex items-center"
          >
            Close
          </button>
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="mt-4 text-center text-secondary hover:underline flex items-center"
          >
            {isRegister ? (
              <>
                Already have an account?{" "}
                <FaSignInAlt className="inline ml-2" size={24} />
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <FaUserPlus className="inline ml-2" size={24} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
