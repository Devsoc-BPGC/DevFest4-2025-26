"use client";

import BlurText from "@/components/BlurText";
import CoordinatorCard from "@/components/CoordinatorCard";
import { coordinators } from "@/components/coordis";

const Coordinators = () => {
    return (
        <div className="mt-24">
            <div className="mb-14">
                <BlurText
                    text="Coordinators"
                    delay={40}
                    animateBy="letters"
                    direction="top"
                    className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-10"
                />
            </div>
            <div className="relative flex justify-center w-full max-w-7xl rounded-3xl border border-white/25 bg-white/5 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.75)] py-4 px-4 md:px-2 py-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coordinators.map((person) => (
                    <CoordinatorCard key={person.name} {...person} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Coordinators;
