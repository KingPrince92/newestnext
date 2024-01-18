import Link from "next/link";

export default function NavBar() {
	return (
		<nav>
			<ul className={"flex gap-2"}>
				<li>
					<Link
						href="/"
						className={"text-orange-800 hover:underline bold font-kanit"}>
						Indie Gamer
					</Link>
				</li>
				<li className={"ml-auto"}>
					<Link
						href="/about"
						className={"text-orange-800 hover:underline font-kanit"}
						prefetch={false}>
						About
					</Link>
				</li>
				<li>
					<Link
						href="/reviews"
						className={"text-orange-800 hover:underline font-kanit "}>
						Reviews
					</Link>
				</li>
			</ul>
		</nav>
	);
}
