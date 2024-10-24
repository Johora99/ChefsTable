
import './style.css';
import bg from '../assets/banner.png'
export default function Banner() {
  return (
    <div className="container w-11/12 mx-auto">
      <div className='rounded-3xl' style={{
        backgroundImage:`url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:'center',
        objectFit:'cover',
      }}>
      <div className='text-center py-12 px-5 lg:px-0 lg:py-28'>
        <h1 className='text-white text-3xl lg:text-5xl font-bold leading-[45px] lg:leading-[76px]'>Discover an exceptional cooking <br className='hidden lg:block' /> class tailored for you!</h1>
        <p className='text-white text-base lg:text-lg font-normal mt-5 lg:mt-8 mb-8 lg:mb-12'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding  <br className='hidden lg:block' /> problems to become an exceptionally well world-class Programmer.</p>
        <button className='text-lg lg:text-xl text-customPurple font-semibold bg-springGreen rounded-full py-2 px-5 lg:py-4 lg:px-8 mr-3 border-[1px] border-springGreen mb-3 lg:mb-0'>Explore Now</button> <br className='lg:hidden' />
        <button className='text-lg lg:text-xl text-white font-semibold bg-transparent border-[1px] border-white rounded-full py-2 lg:py-4 px-5 lg:px-8'>Our Feedback</button>
      </div>
      </div>
    </div>
  )
}
