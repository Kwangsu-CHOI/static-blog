import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
	return (
		<section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
			<div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
				<h2 className="flex justify-center items-center font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left ml-3">
					Dream Big, Work Hard, Achieve More!
				</h2>
			</div>

			<div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
				<p className="font-medium mt-4 text-lg">
					Experienced professional with a diverse academic background
					encompassing International Finance, Accounting (Master&apos;s), and IT
					(Master&apos;s).
					<br />
					Published a research paper on UX/UI focusing on user accessibility
					during master studies.
					<br />
					Possesses 3 years of experience as an Online Sales Administrator,
					adept at managing online-based sales platforms such as Naver Market
					and Coupang.
					<br />
					Known for rapid learning and fostering effective team communication to
					drive collaborative success.
				</p>
			</div>
		</section>
	);
};

export default AboutCoverSection;
