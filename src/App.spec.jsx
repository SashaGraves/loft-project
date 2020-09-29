import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App.js";


jest.mock("component/pages/Login/Login.js", () => () => <div>Login content</div> );
jest.mock("component/pages/Map/Map.js", () => () => <div>Map content</div>);
jest.mock("component/pages/SignUp/SignUp.js", () => () => <div>SignUp content</div>);
jest.mock("component/pages/Profile/Profile.js", () => () => <div>Profile content</div>);



describe("App", () => {
    it("renders correctly", () => {
        const { container } = render(<App />);
        expect(container.innerHTML).toMatch("Login content");
    });
});
