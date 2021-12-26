import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
	it("Test product card", () => {
		const data = {
			title: "A",
			thumbnail: {
				path: "http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada",
				extension: "jpg",
			},
			prices: [{ price: 1 }],
			description: "An app of comics",
		};
		render(<Product data={data} />);
		expect(screen.queryByText(/comics/i)).toBeInTheDocument();
	});
});
