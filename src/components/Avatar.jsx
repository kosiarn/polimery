import avatarImage from "../assets/avatar_generic.jpg";
import React from 'react';

const Avatar = ({ avatarLink, personnelPageLink, name, title, showNameCard, role }) => {
	const AvatarDiv = (
		<div 
			className="min-w-32 min-h-54 md:w-64 md:h-108 aspect-64/108  md:max-w-64 md:max-h-108  h-fit w-fit flex flex-col justify-end px-[4px] md:px-[16px] py-[8px]" 
			style={{
				backgroundImage: avatarLink == null ? `url(${avatarImage.src})` : `url(${avatarLink})`, 
				backgroundSize: 'cover', 
				backgroundPosition: 'center'
			}} 
		>
			<div className={`w-full md:min-w-[120px] max-h-[64px] md:max-h-none py-[8px] md:py-[16px] flex flex-col justify-center items-center bg-black/75 ${showNameCard ? "visible" : "invisible"}`}>
				<p className="text-white font-regular text-[10px] md:text-[16px]">{title}</p>
				<p className="text-white font-regular text-[10px] md:text-[16px] w-max-32 md:w-max64">{name}</p>
			{role && <p className="text-mist-500 text-center font-regular text-[10px] md:text-[16px] p-[4px] max-w-24 max-h-[32px] md:max-w-[220px] md:max-h-none truncate md:text-wrap">{role}</p>}
			</div>
		</div>
	);
	
	if (personnelPageLink) {
		return (
			<a href={`${personnelPageLink}`} className={"w-fit h-fit flex flex-col items-center justify-center"}>
				{AvatarDiv}
			</a>
		);
	} else {
		return <div className={"w-fit h-fit flex flex-col items-center justify-center"}>{AvatarDiv}</div>;
	}
};

export default Avatar;
