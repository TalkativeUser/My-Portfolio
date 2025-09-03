import reduxIcon from "../../assets/react-icon-28.jpg";
import Tilt from 'react-vanilla-tilt'

//  important notic 
//  عشان العنصر tilt  يتحرك كويس ويعمل الانيميشن بتاعه بشكل كويس لازم الاب بتاع ال  tilt  ياخد الخاصيتين دول  [transform-style:preserve-3d] [perspective:1000px]

export default function ProjectCard({ productName }: { productName: string }) {
  return (
    <Tilt options={{speed:400 , max:40 }} style={{ }} className=" [transform-style:preserve-3d] [perspective:1000px]"  >
  <div className="bg-white rounded-xl overflow-hidden container  ">
      <div className="card relative group ">
        <div className="imgBx overflow-hidden ">
              <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s"
                    alt="project image"
                    className=" w-full object-cover  group-hover:scale-[1.2] transition-all duration-300 "
                    style={{ aspectRatio: "4/2.3" }}
                  />
        </div>
    

        <div className="projDetails px-4 rounded-lg bg-white   ">
          <h3 className="mt-4 mb-2 text-xl font-bold  ">{productName}</h3>
          <p className="mb-3">
            This project is a modern, fully functional e-commerce website built
            using React and Tailwind CSS. Designed with a seamless user
            experience in mind, the platform includes all essential features
            needed for a smooth online shopping experience.
          </p>

          <div className="techStackIcons  pb-1  flex gap-3 ">
            <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
            <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
            <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
            <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
            <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
            <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
            <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
          </div>

          <div className="details flex justify-end ">
            <div className="mb-3 py-1  flex items-center  ">
              <h5 className="font-medium me-1 ">View Details </h5>
              <svg
                className="w-6 h-7 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
          </div>



        </div>
      </div>
    </div>
    </Tilt>
  
  );
}

