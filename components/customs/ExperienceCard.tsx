import React from 'react';
import {ExternalLink} from "lucide-react";
import Badge from "@/components/customs/Badge";

const ExperienceCard = () => {
    return (
        <div className={'w-full flex p-4 hover:bg-white/10 hover:backdrop-blur-none cursor-target'}>
            <div className={'w-2/7 text-[12px] mt-1'}>
                <span>march 2025 - june 2026</span>
            </div>
            <div className={'w-5/7 flex flex-col gap-2'}>
                <span className={'text-white flex gap-2'}>Développeur frontend * <a href="#" className={'flex items-center gap-1'}>RightCom <ExternalLink size={16}/></a></span>
                <span>In my spare time, I’m usually climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</span>
                <div className={'flex gap-2'}>
                    <Badge/>
                    <Badge/>
                    <Badge/>
                    <Badge/>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;