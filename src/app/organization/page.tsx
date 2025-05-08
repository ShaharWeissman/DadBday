"use client";
import { orgTreeData } from "@/data/orgData";
import ProfilePlaceholder from "@/app/components/ui/ProfilePlaceholder";

interface OrgMember {
  id: number;
  name: string;
  role: string;
  level: number;
  parentId: number | null;
  children?: OrgMember[];
  imageSrc?: string;
  imageAlt?: string;
  gallery?: string[];
}

export default function Organization() {
  const renderMemberCard = (member: OrgMember) => {
    return (
      <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
        <div className="w-24 h-24 mb-4 relative">
          {member.imageSrc ? (
            <img
              src={member.imageSrc}
              alt={member.imageAlt || member.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <ProfilePlaceholder name={member.name} />
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
        <p className="text-gray-400 text-center">{member.role}</p>
      </div>
    );
  };

  const renderLevel = (members: OrgMember[], isRoot: boolean = false) => {
    return (
      <div className={`flex ${isRoot ? 'justify-center' : 'justify-around'} gap-4 md:gap-8 flex-wrap relative`}>
        {members.map((member, index) => (
          <div key={member.id} className="flex flex-col items-center relative">
            {/* Vertical line from parent */}
            {!isRoot && (
              <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-gray-600 transform -translate-x-1/2" />
            )}
            {/* Horizontal connecting line between siblings */}
            {index > 0 && !isRoot && (
              <div className="absolute -top-16 -left-full w-full h-0.5 bg-gray-600" />
            )}
            {renderMemberCard(member)}
            {member.children && member.children.length > 0 && (
              <div className="mt-16 w-full">
                {/* Container line above children */}
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gray-600 transform -translate-x-1/2" />
                  <div className="absolute -top-8 left-0 right-0 h-0.5 bg-gray-600" />
                </div>
                {renderLevel(member.children)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#1B2431] py-20 px-4">
      <div className="max-w-7xl mx-auto pt-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            הארגון שלנו
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
הכירו את האנשים שמניעים את החברה קדימה, אחורה, ולפעמים פשוט מסובבים אותה במעגלים
          </p>
        </div>

        {/* Org Tree */}
        <div className="relative">
          {renderLevel(orgTreeData, true)}
        </div>
      </div>
    </div>
  );
}
