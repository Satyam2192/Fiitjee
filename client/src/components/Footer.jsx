import logo from './logo.svg';
import Logo from '../assets/logo.jpg'
import Student from '../assets//student-img.png'
import AIR from '../assets/air.png'
import Example from './carousel';

function Footer() {
  const lowernav = [
    {name: 'mission'},
    {name: 'course'},
    {name: 'result'},
    {name: 'tesimonials'},
    {name: 'media'},
    {name: 'about ipec'},
    {name: 'why ipec'},
    {name: 'registration form'},
    {name: 'home'},
    {name: 'contact us'}
  ]

  const footerlinks1 = [
    { name: 'ipec edge' },
    { name: 'Video' },
    { name: 'ipec Centers' },
    { name: 'business partners' },
    { name: 'iit-jee', colorChange: true },
    { name: 'medical', colorChange: true },
    { name: 'foundation', colorChange: true },
    { name: 'results', colorChange: true },
  ]
  const footerlinks2 = [
    { name: 'Terms & Conditions' },
    { name: 'Refund Policy' },
    { name: 'Privacy Policy' },
    { name: 'Transfer Policy' },
    { name: 'Facilitation Policy' },
    { name: 'Corporate Policies' },
    { name: 'CSR Policy' },
    { name: 'Modes of Payment' },
  ]  

  return (
    <div className='min-h-screen'>

      {/* top nav */}
      <div className='h-[85px] bg-white flex items-center justify-between px-8'>
        <div className='h-[75px] w-auto'>
          <img src={Logo} alt="logo" className='h-[75px]' />
        </div>
        <div className='flex items-center gap-4 text-[12px]'>
          <div className='relative flex items-center gap-4 font-bold text-red-700'>
            <div className="duration-200 scale-100 scale-105 linear">RESGISTER FOR NTA</div>
            <div>VMC CENTERS</div>
            <span className='absolute w-[2px] h-[20px] text-red-700 bg-red-700 left-[58%] top-0'></span>
          </div>
          <div className='px-3 py-1 bg-yellow-400 rounded'>ADMISSION TEST RESULT</div>
        </div>
      </div>

      {/* lower nav */}
      <div className='h-[35px] bg-[#E9ECF5] flex gap-6 items-center justify-center px-auto'>
        {lowernav.map(navItem => 
          <div className="text-sm text-[#1f1d5a] font-medium uppercase cursor-pointer">{navItem.name}</div>
        )}  
      </div>

      {/* <Example /> */}


      {/* experience */}
      <div className='my-10'>
        <h1 className='text-3xl text-[#1f1d5a] font-bold text-center'>OUR TRAILBLAZERS SHARE THEIR EXPERIENCE</h1>
        <div className='flex items-center justify-center py-8'> 
          <div className='grid grid-cols-3 gap-8'>

            {/* student air card comp*/}
            <div className="relative w-[353px] rounded-[28px] bg-white border mt-5 shadow-lg">
              
              <div className='m-2'>
                <div className='relative bg-[#E9ECF5] rounded-[20px] m-3 p-3 text-sm'>
                  "Everything at VMC is designed to give JEE aspirants 
                  an edge. Be it the faculty, the study material, stress free learning
                  environment & value-based pedagogy  everything is designed to 
                  power you to deliver peak performance in JEE. "
                  <img src={AIR} alt="air" className='absolute h-[97px] w-[97px] right-10 top-[85%]' />
                </div>

                <img src={Student} alt="student" className='absolute h-[140px] w-[104px] bottom-10 left-5' />

                <div className='text-[#1f1d5a] m-3 text-sm flex flex-col justify-end items-end mt-20 mb-16'>
                  <div className='font-bold'>Paarth Agarwal</div>
                  <div>2 Year classroom programme</div>
                  <div>enrollment number</div>
                  <div>1900910130086</div>
                </div>
                
              </div>
              
              <div className='absolute w-full flex bottom-0 items-center bg-yellow-400 text-center font-bold justify-center rounded-b-[28px] h-[40px]'>
                JEE ADVANCED 2022
              </div>
            
            </div>

            <div className="relative w-[353px] rounded-[28px] bg-white border mt-5 shadow-xl">
              
              <div className='m-2'>
                <div className='relative bg-[#E9ECF5] rounded-[20px] m-3 p-3 text-sm'>
                  "Everything at VMC is designed to give JEE aspirants 
                  an edge. Be it the faculty, the study material, stress free learning
                  environment & value-based pedagogy  everything is designed to 
                  power you to deliver peak performance in JEE. "
                  <img src={AIR} alt="air" className='absolute h-[97px] w-[97px] right-10 top-[85%]' />
                </div>

                <img src={Student} alt="student" className='absolute h-[140px] w-[104px] bottom-10 left-5' />

                <div className='text-[#1f1d5a] m-3 text-sm flex flex-col justify-end items-end mt-20 mb-16'>
                  <div className='font-bold'>Paarth Agarwal</div>
                  <div>2 Year classroom programme</div>
                  <div>enrollment number</div>
                  <div>1900910130086</div>
                </div>
                
              </div>
              
              <div className='absolute w-full flex bottom-0 items-center bg-yellow-400 text-center font-bold justify-center rounded-b-[28px] h-[40px]'>
                JEE ADVANCED 2022
              </div>
            
            </div>

            <div className="relative w-[353px] rounded-[28px] bg-white border mt-5 shadow-xl">
              
              <div className='m-2'>
                <div className='relative bg-[#E9ECF5] rounded-[20px] m-3 p-3 text-sm'>
                  "Everything at VMC is designed to give JEE aspirants 
                  an edge. Be it the faculty, the study material, stress free learning
                  environment & value-based pedagogy  everything is designed to 
                  power you to deliver peak performance in JEE. "
                  <img src={AIR} alt="air" className='absolute h-[97px] w-[97px] right-10 top-[85%]' />
                </div>

                <img src={Student} alt="student" className='absolute h-[140px] w-[104px] bottom-10 left-5' />

                <div className='text-[#1f1d5a] m-3 text-sm flex flex-col justify-end items-end mt-20 mb-16'>
                  <div className='font-bold'>Paarth Agarwal</div>
                  <div>2 Year classroom programme</div>
                  <div>enrollment number</div>
                  <div>1900910130086</div>
                </div>
                
              </div>
              
              <div className='absolute w-full flex bottom-0 items-center bg-yellow-400 text-center font-bold justify-center rounded-b-[28px] h-[40px]'>
                JEE ADVANCED 2022
              </div>
            
            </div>
                
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-[#343362] w-full">
        {/* upper foot */}
        <div className="flex items-center justify-center py-8">

        <div className="grid max-w-3xl grid-cols-3 text-white">
        
          <div className="col-span-2">
            <h1 className="mb-4 text-xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3 text-md">
            <div>

              {footerlinks1.map(footLink => <div className={`my-3 text-sm uppercase cursor-pointer ${footLink.colorChange && 'text-yellow-400'}`}>{footLink.name}</div>)}
            </div>
            <div>

              {footerlinks2.map(footLink => <div className="my-3 text-sm uppercase cursor-pointer">{footLink.name}</div>)}
            </div>
            </div>
          </div>
          
          <div className="">
            <h1 className="mb-4 text-xl font-bold">Contact</h1>
            <div className="my-4">
              Ipec Classes
              Aggrawal Corporate Heights,
              drd Floor, Plot no. A-7,
              xxtaji Subhash Place,
              Opposite xxzirpur Depot,
              Rohini, Delhi 
            </div>
            <div className="my-4">
              <div>9818xxx768 / 8585xxx897 </div>
              <div>support@ipec.com</div>
            </div>  
            <div className="pt-4 border-t border-white">
              Social Media
            </div>
            
          </div>
          
          {/* <div className=""></div> */}
        </div>
        </div>
        {/* lower foot */}
        <div className="bg-[#1F1E5A] h-[35px] text-white flex items-center justify-center text-sm">© 2023 IPEC Classes | All Rights Reserved</div>
      </div>
      
    </div>
  );
}

export default Footer;
