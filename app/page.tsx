import LiquidEther from "@/components/LiquidEther";
import {Github, Linkedin, Instagram, Mail} from "lucide-react";
import ExperienceCard from "@/components/customs/ExperienceCard";

export default function Home() {
  return (
      <div className={'flex justify-center mx-auto gap-4 h-screen'}>
          <div className={'w-1/3 py-[100px] flex flex-col justify-between'}>
              <div className={'flex flex-col'}>
                  <span className={'text-[50px] font-bold text-white'}>Charles Amen</span>
                  <span className={'text-[25px] font-semibold mb-4 text-white'}>Software Engineer</span>
                  <span className={'w-2/3'}>I build accessible, pixel-perfect digital experiences for the web.</span>
              </div>
              <div className={'flex gap-2'}>
                  <div className={'size-[45px] flex justify-center items-center cursor-target'}>
                      <Github size={30} className={'hover:text-white'}/>
                  </div>
                  <div className={'size-[45px] flex justify-center items-center cursor-target'}>
                      <Linkedin size={30} className={'hover:text-white'} />
                  </div>
                  <div className={'size-[45px] flex justify-center items-center cursor-target'}>
                      <Instagram size={30} className={'hover:text-white'}/>
                  </div>
                  <div className={'size-[45px] flex justify-center items-center cursor-target'}>
                      <Mail size={30} className={'hover:text-white'}/>
                  </div>
              </div>
          </div>
          <div className={'w-1/3 flex flex-col gap-10 py-[100px] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'}>
              <div className={'flex flex-col gap-[2px] px-4'}>
                  <span>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</span><br/>
                  <span>Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.</span><br/>
                  <span>In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.</span><br/>
                  <span>In my spare time, I’m usually climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</span>
              </div>
              <div className={'flex flex-col gap-4'}>
                  <span className={'text-[22px] font-semibold ml-4'}>Mon expérience</span>
                  <ExperienceCard/>
                  <ExperienceCard/>
                  <ExperienceCard/>
              </div>
              <div className={'flex flex-col gap-4'}>
                  <span className={'text-[22px] font-semibold ml-4'}>Mes projets</span>
                  <ExperienceCard/>
              </div>
          </div>
      </div>
  );
}
