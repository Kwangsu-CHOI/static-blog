import React from "react";

const InsightRoll = ({ insights }) => {
	return (
		<div className="w-full bg-[#3b93ff] dark:bg-[#7bb3f7] text-light dark:text-dark whitespace-nowrap overflow-hidden">
			<div className="animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
				{insights.map((text) => (
					<div key={insights.id}>
						{text} <span className="px-4">|</span>{" "}
					</div>
				))}
			</div>
		</div>
	);
};

export default InsightRoll;
