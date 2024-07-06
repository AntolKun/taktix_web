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

	const isLoginPage = pathname === "/login";

	return (
		<main className="flex">
			{!isLoginPage && <Sidebar />}
			<div className="flex-grow">
				{!isLoginPage && <Header />}
				{children}
			</div>
		</main>
	);
}
