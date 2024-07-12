"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	const isRegisterPage = pathname === "/register";

	return (
		<main className="flex">
			{!isRegisterPage && <Sidebar />}
			<div className="flex-grow">
				{!isRegisterPage && <Header />}
				{children}
			</div>
		</main>
	);
}
