"use client";

import { useState } from "react";
import Abbotproject2 from "../assets/Abottproject2.jpeg";
import CompletedPool1Jump from "../assets/CompletedPool1Jump.jpeg";
import Covingtonservice from "../assets/Covingtonservice.jpg";
import Davisproject6 from "../assets/Davisproject6.jpg";
import GuestHouse17 from "../assets/GuestHouse-17.jpeg";
import HeroImage2 from "../assets/HeroImage2.jpg";

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

      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-6">
        {/* Left side image column */}
        <div className="flex-1 hidden md:flex flex-col gap-4">
          {[Abbotproject2, CompletedPool1Jump, Covingtonservice].map(
            (src, i) => (
              <img
                key={i}
                src={src}
                alt={`left-${i}`}
                className="rounded-lg w-full object-cover max-h-52"
              />
            )
          )}
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

        {/* Right side image column */}
        <div className="flex-1 hidden md:flex flex-col gap-4">
          {[Davisproject6, GuestHouse17, HeroImage2].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`right-${i}`}
              className="rounded-lg w-full object-cover max-h-52"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
