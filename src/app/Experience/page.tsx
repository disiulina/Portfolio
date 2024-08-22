import { BentoGridDemo } from "./Experience"; 
import { DockDemo } from "./Dock";

export default function SkillPage() {
  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col items-center bg-black text-white py-10">
      <h1 className="text-6xl font-bold mb-10">Experience</h1>
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-100 text-black p-8 m-4 rounded-lg flex-1">
          <div className="flex items-center">
            <img src="/images/PPUH.png" alt="Logo 1" className="w-12 h-12 mr-4" />
            <p className="text-lg font-semibold">General Election Committee of Informatics Undergraduate Student Association</p>
          </div>
        </div>
        <div className="bg-gray-100 text-black p-8 m-4 rounded-lg flex-1 mt-4 md:mt-0">
          <div className="flex items-center">
            <img src="/images/PMK.png" alt="Logo 2" className="w-12 h-12 mr-4" />
            <p className="text-lg font-semibold">PMK Telkom University Bible Camp 2023 committee</p>
          </div>
        </div>
      </div>
    </div>
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 ">My Projects</h1>
      <BentoGridDemo />
      <DockDemo />
        </div>
      </div>

      
      
    </div>
  
  );
}
