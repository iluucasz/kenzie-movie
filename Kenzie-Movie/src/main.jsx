import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/userContext.jsx";
import { ReviewProvider } from "./providers/reviewContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ReviewProvider>
					<App />
				</ReviewProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
