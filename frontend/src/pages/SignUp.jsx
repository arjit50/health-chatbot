import React, { useState } from "react";

const SignUp = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // ✅ Email Regex Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // remove error instantly while typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ✅ Form Validation
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("✅ Valid Signup Details:", form);
  };

  return (
    <div className="
      min-h-screen w-full flex items-center justify-center
      bg-gradient-to-br from-[#020f0b] via-[#061716] to-[#000c08]
    ">

      {/* Card */}
      <div className="
        w-full max-w-md p-10 rounded-2xl
        bg-[#0b1412]/90 backdrop-blur-md
        border border-[#163c30]
        shadow-xl
      ">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white">
          Create Account
        </h2>
        <p className="text-center text-gray-400 mt-1">
          Start your journey today
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 mt-8">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="
                w-full px-4 py-3 rounded-lg bg-[#101b19]
                text-white outline-none
                border border-[#1f3f36]
                focus:border-[#2dbf8c]
                transition
              "
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="
                w-full px-4 py-3 rounded-lg bg-[#101b19]
                text-white outline-none
                border border-[#1f3f36]
                focus:border-[#2dbf8c]
                transition
              "
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="
                w-full px-4 py-3 rounded-lg bg-[#101b19]
                text-white outline-none
                border border-[#1f3f36]
                focus:border-[#2dbf8c]
                transition
              "
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-lg
              bg-gradient-to-r from-[#1ea978] to-[#2ed89c]
              text-black font-semibold
              hover:brightness-110 transition
              shadow-sm
            "
          >
            Create Account
          </button>

        </form>

      </div>
    </div>
  );
};

export default SignUp;
