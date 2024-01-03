 
import Image from 'next/image'
 
const Home = () => {
  return <section style={{
    height:"90vh"
  }} className="w-full px-14  bg-slate-700  flex justify-between items-center pt-11 ">

      <div className="max-w-80">
      <h1 className="font-semibold text-2xl">About <br />
Us</h1>
 
    <p>Welcome to a culinary revolution at your fingertips! In a world where convenience meets gastronomy, our food delivery app is your passport to a seamless dining experience. Designed with the modern food lover in mind, our app is not just a delivery service—it's a culinary adventure brought directly to your doorstep.</p>
   
    <button type="button" className="text-white my-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
Buy now
</button>

      </div>

      <div initial={{opacity:0}}  transition={{ ease: "anticipate", repeat: Infinity, opacity:{repeat:0}, duration: 1 }} animate={{y:-10}}       >
      <Image
      src="/food.svg"
      width={400}
      height={400}
      alt="Picture of the hero section"
    />
      </div>


  </section>;
};

export default Home;