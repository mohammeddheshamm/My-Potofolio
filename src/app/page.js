import Image from "next/image";
import Link from "next/link";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import PersonalInfo from "./components/PersonalInfo";

function Home() {
  return (
    <div className="bg-zinc-900 h-screen w-full pl-8">
      <main>
        <PersonalInfo />
      </main>
    </div>
  );
}

export default Home;