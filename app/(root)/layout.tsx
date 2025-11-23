import SideBar from "@/components/ui/SideBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = { firstName: "Neath" , lastName: "PcY"};
  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={LoggedIn} />
        {children}
    </main>
  );
}
