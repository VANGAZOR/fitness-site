import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorAdidas from "@/assets/SponsorAdidas.svg";
import SponsorNike from "@/assets/SponsorNike.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1050px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            className="md:-mt-20"
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="Текст главной страницы" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              commodi ipsum ex ut, quibusdam sunt magni mollitia eos eius
              deserunt, molestias, qui alias fugiat accusantium consectetur
              sapiente! Enim, consectetur quibusdam!
            </p>
          </motion.div>
          {/* actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.15, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-8 flex items-center gap-8 "
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink
              className="test-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="Графика на главной" />
        </div>
      </motion.div>
      {/* спонсоры */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorForbes} alt="Лого форбса" />
              <img src={SponsorRedBull} alt="Лого редбула" />
              <img src={SponsorFortune} alt="Лого фортуны" />
              <img src={SponsorAdidas} alt="Лого адидаса" className=" h-16" />
              <img src={SponsorNike} alt="Лого найка" className=" h-16" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
