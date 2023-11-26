import Image from "next/image";
import burger from '../../../../public/img/burger.png'
import { FaRegEdit } from 'react-icons/fa';

const FreeCard = () => {
  return (
    <div className="relative mt-14 w-[200px] h-44  rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4 mx-4 text-white" style={
      {
        
background: 'linear-gradient(139deg, #D9D9D9 -10.23%, #9400D3 -10.22%, #0C37B9 -10.21%, #02113F 105.78%)',
      }
    }>
      <Image
      src={burger}
      alt="burger"
      width={40}
      height={40}
      className=' mx-auto mt-5'
      />
      <h1 className="text-center font-medium text-lg my-3">Shawarma 27</h1>
      <div className="flex flex-row mx-auto w-fit">
        <FaRegEdit className="w-6 h-6 self-center "/>
        <p className="font-light my-auto ml-2">Edit Profile</p>


      </div>
    </div>
  );
};

export default FreeCard;
