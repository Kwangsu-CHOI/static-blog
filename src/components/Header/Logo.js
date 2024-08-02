import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.png";
import logo from "@/public/logo1.svg";

const Logo = () => {
	return (
		<Link href="/" className="flex items-center text-dark dark:text-light">
			<div className=" w-12 md:w-16 rounded-full overflow-hidden border border-white  mr-2 md:mr-4">
				<Image
					src={logo}
					alt="CodeBucks logo"
					className="w-full h-auto rounded-full"
					sizes="15vw"
					priority
				/>
			</div>
			<span className="font-bold dark:font-semibold text-lg md:text-xl">
				CHOI's BLOG
			</span>
		</Link>
	);
};

export default Logo;