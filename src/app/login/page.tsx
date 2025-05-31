"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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

  const primaryColor = "bg-[#DA7B93] hover:bg-[#C96B84]";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignIn && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Submitted", { ...formData, role });
    // TODO: Send data to backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2F4454] to-[#1C3334] p-6">
      <div className="relative w-full max-w-4xl h-[600px] rounded-xl shadow-lg overflow-hidden bg-white">
        {/* Wrapper for panels */}
        <div className="relative w-full h-full overflow-hidden">

          {/* Title Card */}
          <div
            className={`
              absolute top-0 w-1/2 h-full
              bg-gradient-to-b from-[#DA7B93] to-[#376E6F]
              text-white
              flex flex-col justify-center items-center
              px-10
              transition-transform duration-900 ease-in-out
              shadow-lg
              select-none
              ${isSignIn ? "translate-x-0 z-20" : "translate-x-full z-10"}
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
              className="border-white text-white hover:bg-white hover:text-[#2E151B] transition-colors"
              onClick={toggleMode}
            >
              {isSignIn ? "SIGN UP" : "SIGN IN"}
            </Button>
          </div>

          {/* Form Card */}
          <div
            className={`
              absolute top-0 w-1/2 h-full
              bg-white
              p-10
              overflow-y-auto
              transition-transform duration-900 ease-in-out
              shadow-lg
              ${isSignIn ? "translate-x-full z-10" : "translate-x-0 z-20"}
            `}
          >
            <CardHeader>
              <CardTitle className="text-2xl mb-6">{isSignIn ? "Sign In" : "Create Account"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Button variant="outline">Google</Button>
                <Button variant="outline">Facebook</Button>
              </div>
              <Separator className="mb-4" />

              <form onSubmit={handleSubmit}>
                {!isSignIn && (
                  <>
                    <div className="mb-4">
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
                      <div>
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
                      <div>
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
                      <div>
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
                      <div>
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
                          <div>
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
                      ) : (
                        <>
                          <div>
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
                    <div>
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
                    <div>
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
    </div>
  );
}
