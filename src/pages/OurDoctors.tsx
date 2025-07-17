
import Book from "../components/Book";
import MobileLink from "../components/MobileLink";
import TeamCarousel from "../components/TeamCarousel";

export default function OurDoctors() {
  return (
    <div className=" bg-black">
      <TeamCarousel />
      <Book />
      <MobileLink />
    </div>
  );
}