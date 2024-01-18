import {ReactNode} from "react";
import NavBar from "../components/NavBar";
import {kanit, inter} from "./fonts";

import "./globals.css";

interface LayoutProps {
	children: ReactNode;
}

export const metadata = {
	title: {
		default: "Indie Gamer",
		template: "%s | Indie Gamer",
	},
};

export default function RootLayout({children}: LayoutProps) {
	return (
		<html lang={"en"} className={`${kanit.variable} ${inter.variable}`}>
			<body className={"px-4 py-2 flex flex-col min-h-screen bg-orange-50"}>
				<header>
					<NavBar />
				</header>
				<main className="py-3 grow">{children}</main>
				<footer className={"text-center text-xs border-t py-3 text-slate-500"}>
					Game data and images courtesy of{" "}
					<a
						href="http://rawg.io"
						className={"text-orange-800 hover:underline "}
						target="_blank">
						RAWG
					</a>
				</footer>
			</body>
		</html>
	);
}
