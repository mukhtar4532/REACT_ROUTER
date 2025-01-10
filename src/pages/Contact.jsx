import React from "react";
import { Form, useNavigate } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    console.log(res);
    const data = Object.fromEntries(res);
    console.log(data);

    return null;
  } catch (error) {
    console.log(error);
  }
};

export const Contact = () => {
  const navigate = useNavigate();

  // const handleFormSubmission = async (formData) => {
  //   // Process form data here
  //   console.log("Form Data Submitted:", Object.fromEntries(formData));
  //   alert("Your message has been sent successfully!");
  //   navigate("/"); // Redirect after submission (if needed)
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <Form
          method="post"
          action="/contact"
          className="space-y-4"
          // onSubmit={(event) => {
          //   event.preventDefault();
          //   handleFormSubmission(new FormData(event.target));
          // }}
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-medium py-2 rounded hover:bg-red-600 transition-colors">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};
