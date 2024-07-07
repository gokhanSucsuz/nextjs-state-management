"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [myName, setMyName] = useState("defaultName");
	const changeName = (newName) => {
		setMyName(newName);
	};
	return (
		<UserContext.Provider value={{ myName, changeName }}>
			{children}
		</UserContext.Provider>
	);
};
