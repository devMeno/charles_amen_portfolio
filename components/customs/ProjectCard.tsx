import React from 'react';
import {ExternalLink} from "lucide-react";
import Badge from "@/components/customs/Badge";

interface CardProps {
    src?: string,
    enterpriseName?: string,
    description?: string
    link?: string
}

const ProjectCard:React.FC<CardProps> = ({description, enterpriseName, link, src}) => {
    return (
        <div className={'w-full flex flex-col lg:flex-row gap-2 md:gap-3 lg:gap-4 p-4 hover:bg-white/10 hover:backdrop-blur-none cursor-target'}>
            <img src={src} className='w-full lg:w-1/2' alt="" />
            <div className={'w-full lg:w-1/2 flex flex-col gap-2'}>
                <a href={link} target='_blank' className={'flex text-white text-[20px] flex items-center gap-1'}>{enterpriseName} <ExternalLink size={16}/></a>
                <span className='text-[14px]'>{description}</span>
                
            </div>
        </div>
    );
};

export default ProjectCard;