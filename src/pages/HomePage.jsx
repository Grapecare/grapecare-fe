import React from 'react'
import HomeNav from '../components/HomeNav'
import doctors from '../assets/images/doctors.svg'
import { Button, Image } from '@chakra-ui/react'
import Mask from '../assets/images/Mask.png'
import { useNavigate } from 'react-router-dom'
import CareCard from '../components/CareCard'
import Footer from '../components/Footer'
import bloodbank from '../assets/images/BloodBank.svg'
import savesoul from '../assets/images/savesoul.svg'
import healthplan from '../assets/images/healthplan.svg'
import teleconsult from '../assets/images/teleconsult.svg'


const cardData = [
  {
    title:'Blood Bank',
    subTitle:'Saving lives faster—instantly link donors to hospitals and patients in need with our real-time blood donation network',
    btnTitle:'Donate Blood',
    icon:bloodbank
  },
  {
    title:'Save-a-Soul',
    subTitle:'Real stories, real impact. We share urgent medical cases to show how your support transforms lives—bringing hope and life-changing care to those in need',
    btnTitle:'Donate Now',
    icon: savesoul
  },
  {
    title:'Health Plans',
    subTitle:'Health plans designed for your hustle—flexible, affordable coverage for freelancers, entrepreneurs, and those transitioning between jobs.',
    btnTitle:'Read More',
    icon: healthplan
  },
  {
    title:'TeleConsulting',
    subTitle:'Consult trusted doctors anytime for urgent needs, chronic care, or quick advice. Fast, reliable, and designed for your schedule, because quality care should adapt to your life.',
    btnTitle:'Book Consultation',
    icon: teleconsult
  },
]

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='font-sans'>
      <HomeNav />
      <div className='px-4 md:px-10 mb-20'>
        <div className='flex flex-col md:flex-row gap-10 pt-2.5 mb-10'>
          <div className='w-full md:w-1/2 flex items-center'>
            <div className='w-full md:w-4/5'>
              <div className='w-full flex justify-center md:justify-start'>
                <h3 className='bg-[#DCF1FF] rounded-[20px] text-[#EA1D78] text-center text-base font-medium py-2 px-5 w-fit'>Our Misson</h3>
              </div>
              <h1 className='text-[#333333] font-bold text-base md:text-[60px] text-center md:text-start'>Connecting Communities to Care</h1>
              <div className='mb-6 hidden md:flex justify-center md:justify-end'>
                <svg width="239" height="11" viewBox="0 0 239 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.34577 0.155848L2.57858 1.33065C2.17483 1.41289 1.80634 1.61783 1.52348 1.91745L0.54563 2.95325C-0.230624 3.7755 -0.171362 5.07728 0.676389 5.82561L1.39104 6.45644C1.75648 6.77902 2.22714 6.95703 2.71459 6.95703H5.92318H10.6428C10.8928 6.95703 11.1405 7.00389 11.3732 7.09519L15.5216 8.72268C15.9101 8.87509 16.3365 8.90216 16.7412 8.80011L23.8083 7.01776C23.9682 6.97743 24.1325 6.95703 24.2974 6.95703H31.4127H36.8448C36.9991 6.95703 37.1529 6.97489 37.3031 7.01024L45.1812 8.86467C45.4401 8.92563 45.7087 8.93431 45.971 8.89019L57.169 7.00741C57.3676 6.97402 57.5701 6.97082 57.7697 6.99792L72.1959 8.95703H83.8855C84.0221 8.95703 84.1584 8.97104 84.2922 8.99882L93.301 10.8699C93.5774 10.9273 93.8629 10.9256 94.1387 10.8647L102.57 9.00402C102.712 8.97279 102.855 8.95688 103 8.95754C104.774 8.96568 108.145 9.07333 109.014 9.45703C109.89 9.84359 119.3 8.08211 124.363 7.06075C124.699 6.99293 125.046 7.01208 125.372 7.11688L130.494 8.76083C130.891 8.88842 131.319 8.88842 131.716 8.76083L136.772 7.13804C137.14 7.0199 137.534 7.01095 137.907 7.11227L144.442 8.88711C144.613 8.93352 144.789 8.95703 144.966 8.95703H159.251C159.368 8.95703 159.484 8.94684 159.599 8.92657L170.583 6.98749C170.698 6.96722 170.814 6.95703 170.931 6.95703H185.216C185.393 6.95703 185.569 6.98054 185.74 7.02695L192.244 8.79354C192.636 8.90001 193.051 8.88459 193.434 8.74936L197.763 7.22109C198.243 7.05148 198.77 7.07157 199.236 7.27727L202.429 8.68635C202.827 8.862 203.271 8.90311 203.695 8.80343L211.119 7.05588C211.395 6.99073 211.683 6.98534 211.962 7.04007L221.254 8.86285C221.57 8.92472 221.895 8.90966 222.204 8.81892L228.255 7.03836C228.438 6.98442 228.629 6.95703 228.82 6.95703H237.307C238.331 6.95703 238.604 5.54382 237.653 5.16239L237.464 5.08661C236.824 4.8297 236.758 3.94946 237.352 3.59955C238.018 3.20794 237.836 2.19963 237.075 2.06539L233.839 1.49408C233.7 1.46945 233.558 1.45971 233.417 1.46503L207.683 2.43164C207.245 2.44811 206.813 2.31989 206.454 2.06676L204.897 0.966747C204.437 0.642075 203.862 0.526159 203.312 0.647449L195.751 2.31592C195.336 2.4076 194.902 2.36441 194.513 2.19262L193.516 1.75264C193.084 1.56176 192.597 1.53025 192.144 1.66369L190.315 2.20196C189.763 2.36412 189.169 2.28147 188.683 1.97509L186.113 0.354637C185.706 0.0981849 185.221 -0.00314872 184.746 0.0691978L170.159 2.2892C169.473 2.39352 168.783 2.13536 168.334 1.60695L168.054 1.27751C167.619 0.765275 166.955 0.505918 166.288 0.587155L152.59 2.25499C152.017 2.32471 151.665 1.6458 152.053 1.21838C152.443 0.788262 152.084 0.105744 151.509 0.182694L135.188 2.3655C134.745 2.4248 134.294 2.33373 133.909 2.10684L131.77 0.84853C131.342 0.596588 130.836 0.512988 130.349 0.614008L122.596 2.22435C121.902 2.36851 121.183 2.13448 120.707 1.60922L119.914 0.734354C119.473 0.247588 118.821 0.00850287 118.17 0.0947326L108.082 1.43041C107.949 1.44811 107.813 1.45224 107.679 1.44274L94.1711 0.488859C93.8744 0.467904 93.5767 0.513405 93.2998 0.622046L89.1698 2.2423C88.8125 2.38249 88.4224 2.41688 88.046 2.34138L76.6168 0.0484914C76.3169 -0.0116796 76.0072 -0.00224787 75.7115 0.0760612L71.1745 1.2775C70.7357 1.39372 70.2703 1.35717 69.855 1.17386L68.9565 0.777273C68.4904 0.57157 67.9634 0.551476 67.483 0.721091L65.9553 1.26051C65.6333 1.37421 65.2761 1.24058 65.1078 0.94344C64.9464 0.658566 64.6101 0.522412 64.296 0.614828L62.2334 1.22171C61.8339 1.33926 61.4337 1.0398 61.4337 0.623383C61.4337 0.262711 61.1287 -0.0227758 60.7688 0.00104979L39.1315 1.43352C38.8966 1.44907 38.6607 1.42302 38.4348 1.35655L35.7209 0.558001C35.4939 0.491218 35.2569 0.465236 35.0208 0.481264L21.1117 1.42571C20.8622 1.44266 20.6505 1.24482 20.6505 0.994729C20.6505 0.718634 20.395 0.513405 20.1254 0.572902L16.8253 1.30116C16.4626 1.3812 16.119 1.10513 16.119 0.733729C16.119 0.345764 15.7461 0.0667603 15.3739 0.176273L12.0809 1.14518C11.4213 1.33926 10.7083 1.18093 10.1928 0.725921L10.0685 0.616196C9.59824 0.20107 8.96044 0.030638 8.34577 0.155848Z" fill="#004475"/>
                </svg>
              </div>
              <div className='mb-6 md:hidden flex justify-center md:justify-end'>
                <svg width="154" height="11" viewBox="0 0 154 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.32724 0.201928L2.13636 1.21267C1.67481 1.35888 1.28196 1.66754 1.03071 2.0814L0.290489 3.30066C-0.128228 3.99035 -0.0915134 4.8641 0.383586 5.51624L0.821347 6.11712C1.19779 6.63383 1.79856 6.93945 2.43785 6.93945H3.97028H6.68674C7.05423 6.93945 7.41462 7.0407 7.72833 7.23209L9.67948 8.4224C10.2134 8.74814 10.869 8.80533 11.4513 8.57697L15.2746 7.07752C15.5073 6.98628 15.755 6.93945 16.0049 6.93945H20.3621H23.6502C23.8847 6.93945 24.1174 6.9807 24.3377 7.06132L28.8809 8.7243C29.2636 8.86439 29.68 8.88421 30.0743 8.78112L36.6612 7.05893C36.9618 6.98036 37.2765 6.97287 37.5804 7.03705L46.3847 8.8963C46.5206 8.92499 46.6591 8.93945 46.7979 8.93945H53.9236C54.1323 8.93945 54.3397 8.97212 54.5383 9.03625L59.7972 10.7347C60.2087 10.8676 60.6521 10.8636 61.0611 10.7233L65.9437 9.04774C66.1526 8.97604 66.3719 8.93874 66.5928 8.94219C67.7693 8.96057 69.7374 9.07654 70.2662 9.43945C70.8048 9.80912 76.3626 8.21441 79.6943 7.1811C80.1906 7.02719 80.7255 7.06921 81.1904 7.30125L83.5792 8.49362C84.1416 8.77433 84.8032 8.77433 85.3656 8.49362L87.6558 7.35049C88.1785 7.08961 88.7891 7.07027 89.3272 7.29754L92.8416 8.78187C93.0879 8.88587 93.3525 8.93945 93.6198 8.93945H102.416C102.595 8.93945 102.773 8.91545 102.946 8.8681L109.711 7.01081C109.883 6.96345 110.062 6.93945 110.24 6.93945H119.037C119.304 6.93945 119.569 6.99304 119.815 7.09704L123.285 8.56273C123.849 8.80067 124.49 8.76778 125.026 8.47345L126.741 7.53199C127.402 7.16863 128.212 7.20891 128.835 7.63613L129.883 8.35574C130.417 8.72196 131.095 8.80734 131.703 8.58488L135.568 7.16993C135.977 7.02037 136.423 7.00813 136.839 7.13508L142.029 8.71809C142.496 8.86071 143 8.82716 143.444 8.62378L146.729 7.12078C146.991 7.0013 147.274 6.93945 147.562 6.93945H152.439C153.426 6.93945 153.767 5.62873 152.93 5.1062C152.398 4.77445 152.319 4.02052 152.781 3.59742C153.331 3.0943 153.111 2.18266 152.393 1.98537L150.708 1.52277C150.507 1.4676 150.298 1.44565 150.09 1.4578L134.236 2.3838C133.634 2.419 133.048 2.18014 132.641 1.73382L132.347 1.41111C131.81 0.821308 130.974 0.607087 130.219 0.866011L126.42 2.16965C125.926 2.33939 125.38 2.265 124.949 1.96908C124.47 1.64051 123.854 1.58728 123.326 1.82887L123.19 1.89112C122.468 2.22141 121.617 2.07255 121.05 1.51679L120.229 0.711589C119.739 0.23095 119.037 0.0353424 118.368 0.193451L110.013 2.17082C109.343 2.32947 108.649 2.02037 108.319 1.41583C108.001 0.833772 107.344 0.523042 106.692 0.646427L98.6262 2.17353C98.0769 2.27753 97.6599 1.68741 97.9414 1.20441C98.2257 0.716641 97.798 0.122618 97.2452 0.237575L87.6602 2.23102C87.0309 2.3619 86.377 2.18233 85.9028 1.74838L85.3305 1.22465C84.8 0.739244 84.0498 0.575935 83.3656 0.796922L79.7348 1.96958C78.8854 2.24391 77.9596 1.88976 77.5101 1.11858C77.0995 0.414014 76.2849 0.0502235 75.4862 0.214681L69.8462 1.37593C69.6417 1.41802 69.432 1.42785 69.2245 1.40507L61.1089 0.513883C60.6694 0.465627 60.2264 0.564332 59.849 0.794571L57.9256 1.96793C57.4343 2.26764 56.8378 2.34121 56.2884 2.16982L49.8283 0.154518C49.3828 0.0155329 48.9027 0.0367272 48.4711 0.214431L46.2608 1.12464C45.7838 1.32106 45.2399 1.2635 44.8146 0.971608L44.6312 0.845756C44.2682 0.596599 43.7958 0.57311 43.4098 0.785022L42.7015 1.17393C42.4472 1.31354 42.1284 1.19363 42.0291 0.921082C41.9345 0.661533 41.6387 0.537791 41.3875 0.652721L40.465 1.07484C40.0922 1.24538 39.6681 0.972998 39.6681 0.563111C39.6681 0.229521 39.3795 -0.0308421 39.0477 0.00331974L25.6393 1.38368C25.2846 1.4202 24.9266 1.36123 24.6023 1.21287L23.4097 0.667203C23.0839 0.518111 22.724 0.459304 22.3676 0.496931L13.8811 1.393C13.646 1.41782 13.4411 1.23348 13.4411 0.997038C13.4411 0.723791 13.1722 0.531744 12.9137 0.620434L11.1988 1.20893C10.8696 1.3219 10.527 1.07728 10.527 0.729227C10.527 0.35983 10.1448 0.114356 9.80884 0.268048L8.14585 1.02894C7.62379 1.26781 7.00573 1.10601 6.66767 0.641985C6.36195 0.222348 5.82219 0.0451462 5.32724 0.201928Z" fill="#004475"/>
                </svg>
              </div>
              <p className='text-[#141219] text-base md:text-[22px] text-center md:text-start'>Donate blood, access health plans, give compassionately, and consult trusted doctors—all in one place.</p>
              <div className='flex justify-center md:justify-start  gap-7 mt-5 md:mt-10'>
                <Button bg='#EA1D78' color='white'
                  _hover={{
                    border: 'none',
                  }}
                  onClick={() => navigate('/signup')}
                >Get Started</Button>
                <Button bg='#fff' color='#EA1D78' variant='outline' 
                  border='1px solid #EA1D78'
                  _hover={{
                    border: 'none',
                  }}
                  onClick={() => navigate('/signup')}
                >Contact Us</Button>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <Image src={doctors} alt="doctors" width={'100%'} />
          </div>
        </div>
        <div className='flex justify-center mb-10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full border border-[#33333333] rounded-[10px] py-3 md:py-10 px-2 md:px-5 shadow-[0_4px_10px_#0000001A]'>
            <div className='bg-[#EEF8FF] flex gap-3 md:flex-col items-center justify-start md:justify-center px-1.5 md:px-2.5 py-1.5 md:py-4 border border-[#002D5133] rounded-[5px]'>
              <h3 className='text-[#333333] font-semibold text-base md:text-xl'>10+</h3>
              <p className='text-[#333333] md:text-base text-sm'>Donation Campaigns</p>
            </div>
            <div className='bg-[#EEF8FF] flex gap-3 md:flex-col items-center justify-start md:justify-center px-1.5 md:px-2.5 py-1.5 md:py-4 border border-[#002D5133] rounded-[5px]'>
              <h3 className='text-[#333333] font-semibold text-base md:text-xl'>100+</h3>
              <p className='text-[#333333] md:text-base text-sm'>Certified Doctors</p>
            </div>
            <div className='bg-[#EEF8FF] flex gap-3 md:flex-col items-center justify-start md:justify-center px-1.5 md:px-2.5 py-1.5 md:py-4 border border-[#002D5133] rounded-[5px]'>
              <h3 className='text-[#333333] font-semibold text-base md:text-xl'>20+</h3>
              <p className='text-[#333333] md:text-base text-sm'>Licensed Blood Bank</p>
            </div>
            <div className='bg-[#EEF8FF] flex gap-3 md:flex-col items-center justify-start md:justify-center px-1.5 md:px-2.5 py-1.5 md:py-4 border border-[#002D5133] rounded-[5px]'>
              <h3 className='text-[#333333] font-semibold text-base md:text-xl'>15+</h3>
              <p className='text-[#333333] md:text-base text-sm'>Affordable HMO</p>
            </div>
          </div>
        </div>
        <div className='mb-20'>
          <div className='flex flex-col items-center mb-4 w-full md:mb-10'>
            <h1 className='text-center text-lg md:text-[30px] text-[#004475] mb-2'>The GrapeCare Causes </h1>
            <p className="text-center text-base text-[#141219E5] md:text-xl w-full md:w-4/5">Bridging care with blood donations, accessible health coverage, heartfelt giving, and expert teleconsulting. Because every community deserves wellness.     </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {
              cardData.map((current,index)=>(
                <CareCard
                  key={index}
                  title={current.title}
                  subTitle={current.subTitle}
                  btnTitle={current.btnTitle}
                  icon={current.icon}
                />
              ))
            }
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex items-center">
              <div className="w-full md:w-4/5 pb-5">
                <h2 className="text-[#004475] text-2xl md:text-3xl text-center md:text-start mb-4 font-medium">Are you a certified doctor looking to expand your reach?</h2>
                <h3 className="text-[#333333CC] text-lg md:text-xl mb-4 font-medium text-center md:text-start">Your medical expertise transforms lives.</h3>
                <p className="text-[#333333CC] text-sm md:text-lg mb-10 w-full md:max-w-4/5 text-center md:text-start">Join our trusted network of doctors providing vital care to those in need. Enjoy flexible schedules, competitive compensation, 
                  and the profound satisfaction of making a difference.
                </p>
                <div className='flex justify-center md:justify-start'>
                  <Button 
                    size='lg'
                    color="#fff"
                    bg='#EA1D78'
                    _hover={{ bg: '#EA1D781A', border: 'none' }}
                    _active={{ bg: '#EA1D7833' }}
                    px={'50px'}
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image src={Mask} alt="doctors" width={'100%'}/>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage