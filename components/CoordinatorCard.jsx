"use client";

import Image from "next/image";
import Link from "next/link";

const CoordinatorCard = ({ name, role, image, linkedin }) => {
    return (
        <Link href={linkedin} target="_blank" className="group relative max-w-[18rem] h-[18rem] md:w-[18rem] md:h-[22rem] rounded-3xl border border-white/25 bg-white/5 backdrop-blur-2xl hover:shadow-[0_0_25px_rgba(64,255,170,0.35)] duration-300 flex flex-col items-center justify-between p-4">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="text-center mt-3">
                <p className="text-white font-semibold text-sm md:text-base">
                    {name}
                </p>
                <p className="text-[#40ffaa] text-sm md:text-base">
                    {role}
                </p>
            </div>
        </Link>
    );
};

export default CoordinatorCard;
