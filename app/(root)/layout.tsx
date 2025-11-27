import SideBar from "@/components/SideBar";
import Image from "next/image";
import MobileNav from "@/components/MobileNavbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = { firstName: "Neath" , lastName: "PcY"};
  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={LoggedIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image 
            src="/icons/logo.png"
            alt="logo"
            width={30}
            height={30}/>
            <div>
              <MobileNav user={LoggedIn}></MobileNav>
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
