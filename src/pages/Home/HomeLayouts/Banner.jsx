import React from "react";
import { motion } from "framer-motion";
import team1 from "../../../assets/team/team1.jpg";
import team2 from "../../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex justify-center items-center flex-col gap-12">
          <div className="">
            <motion.img
              animate={{ y: [100, 50, 100] }}
              transition={{
                duration: 5,
                delay: 1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src={team1}
              className="max-w-sm w-64 shadow-2xl border-l-4 border-b-4 rounded-bl-none rounded-t-3xl rounded-br-3xl border-blue-800"
            />
          </div>
          <div className="">
            <motion.img
              animate={{ x: [70, 90, 70] }}
              transition={{
                duration: 5,
                delay: 1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src={team2}
              className="max-w-sm w-64 shadow-2xl border-l-4 border-b-4 rounded-bl-none rounded-t-3xl rounded-br-3xl border-blue-800"
            />
          </div>
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: [0, 20, 0] }}
            transition={{
              duration: 5,
              delay: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#641e16", "#cb4335", "#e74c3c", "#ec7063"] }}
              transition={{
                duration: 2,
                delay: 1,
                ease: "easeOut",
                repeat: Infinity,
              }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
