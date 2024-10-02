import Image from "next/image";
import profilePic from "../imgs/pfp.jpg";

export default function ProfileSection() {
  return (
    <div className="flex items-center mb-12">
      <div className="relative mr-8">
        <div className="absolute inset-0 bg-blue-600 opacity-50 blur-2xl rounded-full"></div>
        <Image
          src={profilePic}
          alt="Alex Wang"
          width={200}
          height={200}
          className="rounded-full relative z-10"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-2">Alex Wang</h1>
        <p className="text-blue-400">
          software engineer, designer, entrepreneur
        </p>
      </div>
    </div>
  );
}
