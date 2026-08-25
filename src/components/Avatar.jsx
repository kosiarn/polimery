import avatarImage from "../assets/avatar_generic.jpg";
import React from 'react';

const Avatar = ({ avatarLink, personnelPageLink, name, title, showNameCard }) => {
	const AvatarDiv = (
		<div 
			className="w-64 h-108 flex flex-row items-end px-[16px] py-[32px]" 
			style={{
				backgroundImage: avatarLink == null ? `url(${avatarImage.src})` : `url(${avatarLink})`, 
				backgroundSize: 'cover', 
				backgroundPosition: 'center'
			}} 
		>
		{ showNameCard && (
			<div className="w-full py-[16px] flex flex-col justify-center items-center bg-black/50">
				<p className="text-white font-regular text-[20px]">{title}</p>
				<p className="text-white font-regular text-[20px]">{name}</p>
			</div>) }
		</div>
	);
	
	if (personnelPageLink) {
		return (
			<a href={`${personnelPageLink}`} className={"w-fit h-fit"}>
				{AvatarDiv}
			</a>
		);
	} else {
		return <div className={"w-fit h-fit"}>{AvatarDiv}</div>;
	}
};

export default Avatar;
