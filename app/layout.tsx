/** @format */

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header/header"
import Profile from "./assets/img/profile_picture.jpg"
import Image from "next/image"
import Link from "next/link"
import { FaFilePdf, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex md:w-[90%]  md:h-[90vh] border border-red-500 overflow-hidden">
					<Header />
					<div className=" relative hidden md:block shadow-[0px_0px_20px_7px_#1a202c] z-50 overflow-hidden">
						<Image src={Profile} alt="muhammed" className="  h-[80%] z-5" />
						<div className=" absolute bottom-0 left-0 right-0 bg-white h-[20%] shadow-[0px_-38px_80px_116px_#FFFFFF]">
							<div className="absolute bottom-[160px] left-0">
								<h1 className="font-anton font-bold text-[#5dc4ef] text-4xl absolute bottom-8 left-4">
									AMATOV
								</h1>
								<h1 className="font-anton font-bold text-[#caa138] text-4xl  absolute bottom-[-20px] left-24">
									{" "}
									MUHAMMED
								</h1>
							</div>
							<nav>
								<ul className="flex items-center justify-center gap-5 pt-12">
									<li className="text-4xl bg-white text-black transition-colors duration-300 ease-in-out rounded-full p-2 hover:text-white hover:bg-blue-600 hover:shadow-lg">
										<Link href="https://t.me/muhammetnazar_05">
											<FaTelegram />
										</Link>
									</li>
									<li className="text-4xl bg-white text-black transition-colors duration-300 ease-in-out rounded-full p-2 hover:text-white hover:bg-blue-600 hover:shadow-lg">
										<Link href="https://www.linkedin.com/in/muhammednazar-amatov-a23718310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
											<FaLinkedin />
										</Link>
									</li>
									<li className="text-4xl bg-white text-black transition-colors duration-300 ease-in-out rounded-full p-2 hover:text-white hover:bg-blue-600 hover:shadow-lg">
										<Link href="https://github.com/muhammet2005">
											<FaGithub />
										</Link>
									</li>
									<button className="text-4xl bg-white text-black transition-colors duration-300 ease-in-out rounded-full p-2 hover:text-white hover:bg-blue-600 hover:shadow-lg">
										<FaFilePdf />
									</button>
								</ul>
							</nav>
						</div>
					</div>

					{children}
				</div>
			</body>
		</html>
	)
}
