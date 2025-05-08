"use client";
import { orgTreeData } from "@/data/orgData";
import ProfilePlaceholder from "@/app/components/ui/ProfilePlaceholder";

interface OrgMember {
  id: number;
  name: string;
  role: string;
  roleEn?: string;
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
      <div className="flex flex-col items-center p-4 bg-gray-800/90 rounded-lg shadow-xl w-48 transition-all hover:scale-105 hover:z-10 border border-blue-500/30 backdrop-blur-sm hover:shadow-blue-500/20 hover:shadow-2xl">
        <div className="w-24 h-24 mb-3 relative overflow-hidden rounded-full ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-800/50">
          {member.imageSrc ? (
            <img
              src={member.imageSrc}
              alt={member.imageAlt || member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <ProfilePlaceholder name={member.name} />
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-1 text-center mt-2">{member.name}</h3>
        <p className="text-sm text-blue-200 text-center px-2 font-medium">{member.role}</p>
        {member.roleEn && (
          <p className="text-sm text-gray-400 text-center px-2 mt-1 italic">{member.roleEn}</p>
        )}
      </div>
    );
  };

  // Function to render the founders side by side
  const renderFounders = () => {
    const founders = orgTreeData.filter(member => member.level === 0);
    
    return (
      <div className="flex justify-center gap-24 mb-16 relative">
        {founders.map((founder) => (
          <div key={founder.id} className="flex flex-col items-center transform hover:-translate-y-1 transition-all duration-300">
            {renderMemberCard(founder)}
            {founder.children && founder.children.length > 0 && (
              <div className="absolute bottom-0 left-1/2 w-1 h-10 bg-blue-400 transform translate-y-10 rounded-full" />
            )}
          </div>
        ))}
        {/* No connecting line between founders */}
      </div>
    );
  };

  // Function to render children recursively
  const renderChildren = (member: OrgMember, depth: number = 1) => {
    if (!member.children || member.children.length === 0) return null;
    
    const maxDepth = 5; // Increased to ensure all levels are visible
    const widthClass = depth === 1 ? "w-full" : "w-auto";
    const gapClass = depth === 1 ? "gap-8" : depth === 2 ? "gap-6" : "gap-4";
    
    return (
      <div className={`flex flex-col items-center ${widthClass}`}>
        <div className={`flex justify-center ${gapClass} relative`}>
          {member.children.map((child, index, array) => {
            const isFirst = index === 0;
            const isLast = index === array.length - 1;
            
            return (
              <div key={child.id} className="flex flex-col items-center relative group">
                {/* Vertical line from parent */}
                <div className="h-10 w-1 bg-blue-400 mb-3 rounded-full group-hover:bg-blue-300 transition-colors duration-300" />
                
                {/* Horizontal connecting lines between siblings */}
                {array.length > 1 && (
                  <>
                    {isFirst && (
                      <div className="absolute top-0 left-1/2 w-full h-1 bg-blue-400 rounded-full" />
                    )}
                    {isLast && (
                      <div className="absolute top-0 right-1/2 w-full h-1 bg-blue-400 rounded-full" />
                    )}
                    {!isFirst && !isLast && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400 rounded-full" />
                    )}
                  </>
                )}
                
                {renderMemberCard(child)}
                
                {/* Always render next level if children exist */}
                {child.children && child.children.length > 0 && renderChildren(child, depth + 1)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="relative z-10">הארגון שלנו</span>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-400/30 -skew-y-1 z-0"></div>
          </h1>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
            הכירו את האנשים שמניעים את החברה קדימה, אחורה, ולפעמים פשוט מסובבים אותה במעגלים
          </p>
        </div>

        {/* Org Tree Container */}
        <div className="bg-[#1B2431] rounded-3xl p-10 shadow-2xl mx-auto max-w-6xl overflow-hidden border border-blue-500/20 relative backdrop-blur-sm">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Founders Level */}
            {renderFounders()}
            
            {/* Second Level - Children of Araleh */}
            {orgTreeData[1].children && orgTreeData[1].children.length > 0 && (
              <div className="mt-8">
                {renderChildren(orgTreeData[1])}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
