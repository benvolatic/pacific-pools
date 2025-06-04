"use client";

import { useState } from "react";
import HeroImage1 from "../assets/HeroImage1.jpg"; // replace/add more as needed

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xblylozk", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white text-[#0D3B66]">
      <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
      <p className="text-lg text-center mb-10">
        Send us a message and we'll get back to you shortly!
      </p>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
        {/* Left image */}
        <div className="flex-1 hidden md:block">
          <img
            src={HeroImage1}
            alt="Pool example"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Jobsite Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded h-28"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#0D3B66] text-white rounded hover:bg-[#0a2a4d]"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Right image */}
        <div className="flex-1 hidden md:block">
          <img
            src={HeroImage1}
            alt="Another angle"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
