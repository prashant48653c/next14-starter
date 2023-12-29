 'use client'
import Image from 'next/image'
import {motion} from 'framer-motion'
const Home = () => {
  return <section style={{
    height:"90vh"
  }} className="w-full px-14  bg-slate-700  flex justify-between items-center pt-11 ">

      <div className="max-w-80">
      <h1 className="font-semibold text-2xl">No Fikar <br />
Kar Froker</h1>
<h4 >Introducing the world's first social-food delivery app!</h4>
    <p>Get delicious food at unbeatable prices, curated by our expert Food Brokers (Frokers). Satisfy your cravings with short videos and exciting features. Order now!</p>
   
    <button type="button" className="text-white my-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact</button>
      </div>

      <motion.div initial={{opacity:0}}  transition={{ ease: "anticipate", repeat: Infinity, opacity:{repeat:0}, duration: 1 }} animate={{y:-10}}  whileInView={{opacity:1}}   >
      <Image
      src="/hero.svg"
      width={400}
      height={400}
      alt="Picture of the hero section"
    />
      </motion.div>


  </section>;
};

export default Home;