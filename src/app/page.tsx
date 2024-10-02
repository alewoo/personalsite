import ProfileSection from "./components/ProfileSection";
import TabSection from "./components/TabSection";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <div className="w-full max-w-4xl">
      <ProfileSection />
      <TabSection />
      <SocialLinks />
    </div>
  );
}
