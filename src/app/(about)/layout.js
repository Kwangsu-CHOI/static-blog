import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
	"Living in Melbourne, Australia 🐨",
	"Blogging🗒️ about travel✈️, food🍲, activities🚙 in AU, and coding </>",
	"Information for Korean stuff",
	"like K-pop, K-food",
	"Recommend me anytime if you find anything interesting or a good spot to visit!",
];

export default function AboutLayout({ children }) {
	return (
		<main className="w-full flex flex-col items-center justify-between">
			<InsightRoll insights={insights} />
			{children}
		</main>
	);
}
