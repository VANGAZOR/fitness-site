import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      (
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        error maxime optio? Cupiditate delectus at facilis quos numquam nisi!
        Deserunt ea explicabo fugiat autem, veniam culpa cupiditate beatae illum
        aut? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis error maxime optio? Cupiditate delectus at facilis quos
        numquam nisi! Deserunt ea explicabo fugiat autem, veniam culpa
        cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis error maxime optio? Cupiditate delectus
        at facilis quos numquam nisi! Deserunt ea explicabo fugiat autem, veniam
        culpa cupiditate beatae illum aut?
      </div>
      )
    </div>
  );
}

export default App;
