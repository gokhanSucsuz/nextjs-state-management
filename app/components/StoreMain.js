"use client";
import { Provider } from "react-redux";
import { store } from "../store";
import { UserProvider } from "../context/userContext";

const StoreMain = ({ children }) => {
	return (
		<Provider store={store}>
			<UserProvider>{children}</UserProvider>
		</Provider>
	);
};

export default StoreMain;
