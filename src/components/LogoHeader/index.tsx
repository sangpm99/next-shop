"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LogoHeader = () => {
  const router = useRouter();

  return (
    <Image
      priority={true}
      src="/logo.png"
      alt="Logo"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100px", height: "auto" }}
      className="cursor-pointer"
      onClick={() => router.push("/")}
    ></Image>
  );
};

export default LogoHeader;
