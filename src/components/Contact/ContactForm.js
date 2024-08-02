"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setError(false);
		setSuccess(false);

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(
				(result) => {
					setSuccess(true);
					form.current.reset();
				},
				(error) => {
					setError(true);
				}
			);
	};

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
		>
			Hi, I am{" "}
			<input
				type="text"
				placeholder="your name"
				{...register("name", { required: true, maxLength: 80 })}
				className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
				name="user_name"
			/>
			and I want to discuss our project with you. You can email me at
			<input
				type="email"
				placeholder="your@email"
				{...register("email", {})}
				className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
				name="user_email"
			/>
			or reach out to me on
			<input
				type="tel"
				placeholder="your phone"
				{...register("phone number", {})}
				className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
				name="user_phone"
			/>
			Here are some details: <br />
			<textarea
				{...register("project details", {})}
				placeholder="My project is about..."
				rows={3}
				className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
				name="user_message"
			/>
			<button
				type="submit"
				value="send"
				className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
			>
				Send
			</button>
			{success && (
				<span className="text-green-500 font-semibold">
					Your message has been successfully sent!
				</span>
			)}
			{error && (
				<span className="text-red-500 font-semibold">
					Something went wrong!!!
				</span>
			)}
		</form>
	);
}
