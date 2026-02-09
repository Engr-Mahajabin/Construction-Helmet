import Image from "next/image";
import { teamMembers } from "@/data/Team";

export default function ExpertTeam() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
            {/* Header Section */}
            <div className="text-center mb-16">
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-gray-500">
                    expert team
                </span>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase tracking-tight">
                    The Experts Bringing <br /> Your Design To Life
                </h2>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.id} className="group cursor-pointer">
                        {/* Image Container */}
                        <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Member Info */}
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg uppercase tracking-wider">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}