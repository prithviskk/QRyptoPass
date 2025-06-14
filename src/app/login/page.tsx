"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [role, setRole] = useState("buyer");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    region: "",
    organization: "",
  });

  const toggleMode = () => setIsSignIn((prev) => !prev);

  const primaryColor = "bg-[#8C5D64] hover:bg-[#5E3A43]";

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isSignIn && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Submitted", { ...formData, role });
    // TODO: Send data to backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#DADADA] to-[#5E3A43] py-8 px-8">
    {/* Desktop/Tablet: Two-panel layout */}
    <div className="hidden sm:block relative w-[1000px] h-[900px] rounded-xl shadow-lg overflow-hidden bg-white">
      <div className="relative w-full h-full overflow-hidden flex">
        {/* Title Card */}
        <div
          className={`
            absolute top-0 left-0 w-1/2 h-full
            bg-gradient-to-b from-[#8C5B64] to-[#2E151B]
            text-white
            flex flex-col justify-center items-center
            px-10
            transition-transform duration-900 ease-in-out
            shadow-lg
            select-none
            z-10
            ${isSignIn ? "translate-x-0 " : "translate-x-full"}
          `}
        >
          <h2 className="text-4xl font-bold mb-4">{isSignIn ? "Welcome Back!" : "Hello, Friend!"}</h2>
          <p className="mb-6 max-w-xs text-center">
            {isSignIn
              ? "To keep connected with us please login with your personal info"
              : "Enter your personal details and start your journey with us"}
          </p>
          <Button
            variant="outline"
            className="bg-[#995555] hover:bg-[#C96B84] transition-colors"
            onClick={toggleMode}
          >
            {isSignIn ? "SIGN UP" : "SIGN IN"}
          </Button>
        </div>
        {/* Form Card */}
        <div
          className={`
            w-1/2 h-full
            bg-white
            p-10
            overflow-y-auto
            transition-transform duration-900 ease-in-out
            shadow-lg
            ${isSignIn ? "translate-x-full z-10" : "translate-x-0 z-20"}
          `}
        >
            <div className="flex"></div>
            <CardHeader>
              <CardTitle className="text-2xl mb-6 flex justify-center ">{isSignIn ? "Sign In" : "Create Account"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-7 mb-4">
                <Button variant="outline" className="flex items-center gap-2">
    <FcGoogle size={20} />
    Google
  </Button>
  <Button variant="outline" className="flex items-center gap-2">
    <FaFacebookF size={20} />
    Facebook
  </Button>
</div>
              <div className="relative mb-4">
    <hr className="border-gray-300" />
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">or</span>
  </div>

              <form onSubmit={handleSubmit}>
                {!isSignIn && (
                  <>
                    <div className="mb-4 grid gap-2">
                      <Label>Role</Label>
                      <Select
                        onValueChange={(value) => setRole(value)}
                        defaultValue="buyer"
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buyer">Buyer</SelectItem>
                          <SelectItem value="seller">Seller</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4">
                      <div className=" grid gap-2">
                        <Label>Username</Label>
                        <Input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Username"
                          required
                        />
                      </div>
                      <div className=" grid gap-2">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className=" grid gap-2">
                        <Label>Password</Label>
                        <Input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className=" grid gap-2">
                        <Label>Retype Password</Label>
                        <Input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Retype Password"
                          required
                        />
                      </div>

                      {role === "buyer" ? (
                        <>
                          <div className=" grid gap-2">
                            <Label>Age</Label>
                            <Input
                              type="number"
                              name="age"
                              value={formData.age}
                              onChange={handleChange}
                              placeholder="Age"
                              required
                            />
                          </div>
                          <div className=" grid gap-2">
                            <Label>Region</Label>
                            <Input
                              type="text"
                              name="region"
                              value={formData.region}
                              onChange={handleChange}
                              placeholder="Region"
                              required
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" grid gap-2">
                            <Label>Organization Name / Theatre Name</Label>
                            <Input
                              type="text"
                              name="organization"
                              value={formData.organization}
                              onChange={handleChange}
                              placeholder="Organization or Theatre"
                              required
                            />
                          </div>
                          <div>
                            <Label>Region</Label>
                            <Input
                              type="text"
                              name="region"
                              value={formData.region}
                              onChange={handleChange}
                              placeholder="Region"
                              required
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}

                {isSignIn && (
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Password</Label>
                      <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="text-sm text-right text-gray-500 cursor-pointer hover:underline">
                      Forgot your password?
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className={`mt-6 w-full ${primaryColor}`}
                >
                  {isSignIn ? "SIGN IN" : "SIGN UP"}
                </Button>
              </form>
            </CardContent>
          </div>
        </div>
      </div>
    

     {/* Mobile: Single form layout */}
    <div className="block sm:hidden w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-2xl mb-6 flex justify-center ">
          {isSignIn ? "Sign In" : "Create Account"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-4 mb-4">
          <Button variant="outline" className="flex items-center gap-2">
            <FcGoogle size={20} />
            Google
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FaFacebookF size={20} />
            Facebook
          </Button>
        </div>
        <div className="relative mb-4">
          <hr className="border-gray-300" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">or</span>
        </div>
        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <>
              <div className="mb-4 grid gap-2">
                <Label>Role</Label>
                <Select
                  onValueChange={(value) => setRole(value)}
                  defaultValue="buyer"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="seller">Seller</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Username</Label>
                  <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Retype Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Retype Password"
                    required
                  />
                </div>
                {role === "buyer" ? (
                  <>
                    <div className="grid gap-2">
                      <Label>Age</Label>
                      <Input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Age"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Region</Label>
                      <Input
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        placeholder="Region"
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid gap-2">
                      <Label>Organization Name / Theatre Name</Label>
                      <Input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Organization or Theatre"
                        required
                      />
                    </div>
                    <div>
                      <Label>Region</Label>
                      <Input
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        placeholder="Region"
                        required
                      />
                    </div>
                  </>
                )}
              </div>
            </>
          )}
          {isSignIn && (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="text-sm text-right text-gray-500 cursor-pointer hover:underline">
                Forgot your password?
              </div>
            </div>
          )}
          <Button
            type="submit"
            className={`mt-6 w-full ${primaryColor}`}
          >
            {isSignIn ? "SIGN IN" : "SIGN UP"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          {isSignIn ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-[#995555] font-semibold cursor-pointer"
                onClick={() => setIsSignIn(false)}
              >
                Create account
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-[#995555] font-semibold cursor-pointer"
                onClick={() => setIsSignIn(true)}
              >
                Sign in
              </span>
            </>
          )}
        </div>
      </CardContent>
    </div>
  </div>
  );
}
