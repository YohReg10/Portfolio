import React from 'react';

export const SkillsTree = () => {
  return (
    <div className="w-full px-4 m-auto flex justify-center items-start h-auto">
      <div className="relative">
        
        {/* Racine */}
        <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-700 mt-60"></div>
        
        {/* Ligne verticale */}
        <div className="absolute left-1/2 top-full h-[660px] w-1 bg-gray-700 transform -translate-x-1/2"></div>

        {/* Branche attachée à la ligne verticale 1 */}
        <div className="absolute left-1/2 top-[120px] w-[100px] h-1 bg-gray-700 transform -translate-x-1/2 -translate-x-[100px] mt-[240px]">
          
          {/* Boîte de dialogue attachée à la branche 1 */}
            <div className="absolute left-1/2 top-[-50px] w-[200px] bg-gray-300 text-black p-4 transform -translate-x-1/2 -translate-x-[250px] shadow-lg">
            <p className="whitespace-normal break-words">
                mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmssssssssssssssssssssssssssssssssssssssssssss
            </p>
            </div>
        </div>

        {/* Branche attachée à la ligne verticale 2 */}
        <div className="absolute left-1/2 top-[200px] w-[100px] h-1 bg-gray-700 transform -translate-x-1/2 -translate-x-[0px] mt-[240px]"></div>

        {/* Branche attachée à la ligne verticale 3 */}
        <div className="absolute left-1/2 top-[400px] w-[100px] h-1 bg-gray-700 transform -translate-x-1/2 -translate-x-[100px] mt-[240px]"></div>

        {/* Branche attachée à la ligne verticale 4 */}
        <div className="absolute left-1/2 top-[480px] w-[100px] h-1 bg-gray-700 transform -translate-x-1/2 -translate-x-[0px] mt-[240px]"></div>
        
      </div>
    </div>
  );
};
