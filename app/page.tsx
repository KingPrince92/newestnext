// const HomePage: React.FC = () => {};
// FC stands for Functional Component. Compiler can still render component without strict typing.

// import Heading from "../components/Heading";

import Heading from "@/components/Heading";
import {getFeaturedReview} from "@/lib/reviews";
import Link from "next/link";

export default async function HomePage() {
	const review = await getFeaturedReview();

	console.log("[HomePage] rendering");
	return (
		<>
			<Heading>Indie Gamer</Heading>
			<p className={"pb-3"}>Only the best indie games, reviewed for you.</p>

			<div
				className={
					"bg-white border rounded shadow w-80 sm:w-full hover:shadow-xl "
				}>
				<Link
					href={`/reviews/${review.slug}`}
					className={"flex flex-col sm:flex-row"}>
					<img
						src={review.image}
						alt=""
						width="320"
						height="180"
						className={"rounded-t sm:rounded-l sm:rounded-r-none"}
					/>
					<h2 className={"font-kanit font-semibold py-1 text-center sm:px-2"}>
						{review.title}
					</h2>
				</Link>
			</div>
		</>
	);
}
