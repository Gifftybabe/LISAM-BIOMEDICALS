import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Your <br />
              Partner in
              <br /> Fertility Success
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>
              Providing Quality IVF Consumables, Expert Consultations,
            </span>
            <span>and Technical Support to Nurture New Beginnings.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1} end={100} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">IVF consumables</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={3950} end={5000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Client consultations</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={99} /> <span>%</span>
              </span>
              <span className="secondaryText">Clients Satisfaction</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-sam.webp" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
