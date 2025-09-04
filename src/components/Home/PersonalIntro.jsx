import profilepicture from '../../assets/fototessera.jpg'

 export const PersonalIntro = () => {
  return (
<div className='flex flex-row justify-center align-center items-center mt-20'>
  <div className='flex flex-row justify-center items-center mr-55 w-2/3 relative'> 
    <img src={profilepicture} alt="Giú Eminente" className="w-60 h-60 object-cover rounded-full [mask:radial-gradient(circle,black_25%,rgba(0,0,0,0.8)_55%,rgba(0,0,0,0.3)_70%,transparent_90%)]" />
    <div className="absolute inset-0 w-60 h-60 bg-gradient-radial from-transparent via-transparent to-teal-500/20"></div> 
  </div>
    <div className="flex flex-col  mt-25 ml-18 text-blue-950 dark:text-gray-200">
        <p className=' mb-3'>Hi everybody, I am</p>
      <h2 className="text-3xl mb-2 font-semibold">Giú Eminente</h2>
      <h3 className="text-2xl font-bold">Creative Full-Stack Developer</h3>
      <p className="mt-5 w-4/5">I'm a web developer with a passion for creating beautiful and functional websites finding the more efficient tools to do it.</p>    
    </div>
    </div>
  )
}
