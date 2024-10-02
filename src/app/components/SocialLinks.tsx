import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300"
      >
        GitHub
      </a>
    </div>
  );
}
