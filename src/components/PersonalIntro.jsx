import profilepicture from '../assets/fototessera.jpg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.svg'
const PersonalIntro = () => {
  return (
    <div className='flex flex-row justify-center align-center'>
    <div className="flex flex-col  mt-25 ml-15 text-blue-950">
        <p className=' mb-3'>Hi everybody, I am</p>
      <h2 className="text-3xl mb-2 font-semibold">Giú Eminente</h2>
      <h3 className="text-2xl font-bold">Creative Full-Stack Developer</h3>
      <p className="mt-5 w-4/5">I'm a web developer with a passion for creating beautiful and functional websites finding the more efficient tools to do it.</p>
      <div className=" flex flex-col mt-4"> 

        <h3>Let's Connect:</h3>
        <div className="flex space-x-4">       
        <a href="https://www.linkedin.com/in/gi%C3%BA-eminente-145530225" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
         <img src={linkedin} alt="linkedin icon" className='w-10 h-10'/>
        </a>
        <a href="https://github.com/JungleGiu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
         <img src={github} alt="github icon" className='w-10 h-10'/>
        </a>
        </div>
      </div>
    </div>
    <div className='flex flex-row justify-center items-center mr-50 w-2/3'>
     <img src={profilepicture} alt="Giú Eminente" className="w-60 h-60 object-cover rounded-full " />
     </div>
    </div>
  )
}

export default PersonalIntro