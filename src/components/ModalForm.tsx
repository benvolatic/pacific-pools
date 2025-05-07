"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    // TODO: Hook this up to EmailJS, Formspree, etc.
    alert("Form submitted! (You will connect it to real email soon)");

    onClose(); // Close modal after submit
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Request a Free Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full border p-3 rounded"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border p-3 rounded"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border p-3 rounded"
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Jobsite Address"
                required
                className="w-full border p-3 rounded"
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full border p-3 rounded h-24"
                onChange={handleChange}
              />
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#0D3B66] text-white rounded hover:bg-[#0a2a4d]"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
