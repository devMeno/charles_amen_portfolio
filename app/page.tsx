import LiquidEther from "@/components/LiquidEther";
import {Github, Linkedin, Instagram, Mail} from "lucide-react";
import ExperienceCard from "@/components/customs/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
        <div className={'lg:flex justify-center mx-auto gap-4 h-screen'}>
            <div className={'w-[90%] mx-auto lg:w-1/3 lg:mx-0 py-[100px] flex flex-col justify-between'}>
              <div className={'flex flex-col'}>
                  <span className={'text-[40px] md:text-[50px] font-bold text-white'}>Charles Amen</span>
                  <span className={'text-[22px] md:text-[25px] font-medium mb-4 text-white'}>Ingénieur Logiciel <span className="text-[18px] text-[20px]">(en devenir)</span></span>
                  <span className={'w-2/3'}>I build accessible, pixel-perfect digital experiences for the web.</span>
              </div>
              <div className={'mt-10 flex gap-2'}>
                  <a href="https://github.com/devMeno" target="_blank" className={'size-[45px] flex justify-center items-center cursor-target'}>
                      <Github size={30} className={'hover:text-white'}/>
                  </a>
                  <a href="https://www.linkedin.com/in/charles-amen-lokonon-1168a023b/" target="_blank" className={'size-[45px] flex justify-center items-center cursor-target'}>
                      <Linkedin size={30} className={'hover:text-white'} />
                  </a>
                  <a href="https://www.instagram.com/meno.lokonon/" target="_blank" className={'size-[45px] flex justify-center items-center cursor-target'}>
                      <Instagram size={30} className={'hover:text-white'}/>
                  </a>
                  <a href="mailto:charlesamenlokonon@gmail.com" target="_blank" className={'size-[45px] flex justify-center items-center cursor-target'}>
                      <Mail size={30} className={'hover:text-white'}/>
                  </a>
              </div>
            </div>
            <div className={'w-[90%] mx-auto lg:w-1/3 lg:mx-0 flex flex-col gap-10 pb-10 lg:py-[100px] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'}>
                <div className={'flex flex-col gap-[2px] lg:px-4'}>
                    <span>
                        Passionné par la tchnologie et les innovations numériques, je suis actuellement développeur particulièrement interessé par la création d'interfaces accessibles alliant beau design et ingénieurie robuste.
                        La création d'expériences non seulement esthétiques mais aussi et surtout performantes est ce pour quoi je travaille et essaie de m'améliorer chaque jour.
                    </span><br/>
                    <span>
                        Présentement, je suis développeur à BANCA ENGINEERING, une entreprise de BTP spécialisée dans l'audit. J'y suis chargé de la conception, du développement, du déploiement et de la maintenance d'applications de gestion des ressources humaines et des marchés publics entre autres, contribuant ainsi de façon très active à la transition numérique de ladite entreprise.
                        J'ai également pour mission gestion de tous les aspects techniques relatifs à une plateforme devant interconnecter les acteurs du BTP.
                    </span><br/>
                </div>
                <div className={'flex flex-col gap-4 pb-10'}>
                    <span className={'text-[22px] font-semibold ml-4 text-white'}>Mon expérience</span>

                    <div>

                      <div className="group relative flex gap-x-5">

                          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                              <div className="relative z-10 size-6 flex justify-center items-center">
                                <img 
                                    src={'/images/logos/banca.png'}
                                    alt="Logo RightCom"
                                    className="w-full"
                                />
                              </div>
                          </div>



                          <div className="grow pb-8 group-last:pb-0">
                              <h3 className="mb-1">
                                  Depuis septembre 2025
                              </h3>

                              <p className="cursor-target py-2 w-fit font-semibold hover:text-white">
                                  Développeur fullstack & mobile à BANCA ENGINEERING
                              </p>

                              {/*<p className="mt-1">
                                  The company has high expectations and using OKRs there is a mutual understanding of expectations and performance.
                              </p>*/}

                              <ul className="list-disc ms-6 mt-3 space-y-1.5">
                                  <li className="ps-1">
                                        Développement d'application web de gestion RH.
                                  </li>
                                  <li className="ps-1">
                                        Maintenance d'une application mobile et ajout de fonctionnalités.
                                  </li>
                                  <li className="ps-1">
                                        Fourniture de manuels d'utilisation détaillés.
                                  </li>
                                  <li className="ps-1">
                                        Collaboration avec les utilisateurs en vue de l'amélioration continue des solutions.
                                  </li>
                              </ul>
                          </div>

                      </div>



                      <div className="group relative flex gap-x-5">

                          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                              <div className="relative z-10 size-6 flex justify-center items-center">
                                <img 
                                    src={'/images/logos/intside.png'}
                                    alt="Logo Intside"
                                    className="w-full"
                                />
                              </div>
                          </div>



                          <div className="grow pb-8 group-last:pb-0">
                              <h3 className="mb-1">
                                    Janvier - Mars 2025
                              </h3>

                              <p className="cursor-target py-2 w-fit font-semibold hover:text-white">
                                    Développeur frontend à Intside
                              </p>

                              <p className="mt-1">
                                  En tant que développeur frontend, j’ai participé à la réalisation sur mesure de projets pour les clients. En collaboration avec les équipes de designers et de développeurs backend, j'ai contribué au développement de fonctionnalités côté client et intégré des maquettes Figma.
                              </p>

                          </div>

                      </div>



                      <div className="group relative flex gap-x-5">

                          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                              <div className="relative z-10 size-6 flex justify-center items-center">
                                <img 
                                    src={'/images/logos/rightcom.png'}
                                    alt="Logo RightCom"
                                    className="w-full"
                                />
                              </div>
                          </div>



                          <div className="grow pb-8 group-last:pb-0">
                                <h3 className="mb-1">
                                    Janvier - Juillet 2024
                                </h3>

                                <p className="cursor-target py-2 w-fit font-semibold hover:text-white">
                                    Développeur frontend stagiaire à RightCom
                                </p>

                                <p className="mt-1">
                                        Au cours de cette expérience, j’ai découvert et perfectionné des pratiques de développement, tout en apportant un soutein dans l’analyse métier. Ce
                                        stage m’a permis de travailler sur des produits variés et d’acquérir une
                                        expérience précieuse en gestion des tâches et en méthodologie Agile.
                                </p>

                                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                                    <li className="ps-1">
                                            Développement de fonctionnalités côté client.
                                    </li>
                                    <li className="ps-1">
                                            Intégration de templates de mails avec JSREPORT.
                                    </li>
                                    <li className="ps-1">
                                            Réalisation de tests, débogage puis maintenance du code frontend de plusieurs produits.
                                    </li>
                                    <li className="ps-1">
                                            Partcipation aux différentes activités entrant dans le processus de développement logiciel suivant la méthodologie Agile (Sprint planning, Sprint retrospective, Code review, Daily scrum).
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <span className={'text-[22px] font-semibold ml-4 text-white'}>Quelques-uns de mes projets</span>

                    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                        <ExperienceCard
                            description="Interface d’une boutique de fleurs en ligne, réalisée pour mettre en pratique l’intégration front-end et le design d’une interface moderne, responsive et agréable à naviguer."
                            enterpriseName="Flower shop"
                            src="/images/projects/Flower_shop.png"
                            link="https://flower-shop-phi-ruddy.vercel.app/"
                        />
                        <ExperienceCard
                            description="Site vitrine de vente de chiens et accessoires, conçu pour offrir une interface simple et attrayante."
                            enterpriseName="Monito"
                            src="/images/projects/Monito.png"
                            link="https://pet-commerce-platform.vercel.app/"
                        />
                        <ExperienceCard
                            description="Landing page moderne, créée pour capter l’attention dès le premier regard et présenter clairement un service ou un produit à travers un design épuré"
                            enterpriseName="Navytech"
                            src="/images/projects/Navytech.png"
                            link="https://navytech-landing-page.vercel.app/"
                        />
                    </div>
                </div>

                
          </div>

      </div>
  );
}
