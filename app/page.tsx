import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';
import { Terminal, Database, Cpu, Cloud } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12 sm:pt-32">
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
          Based in Rio Rancho, NM
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
          I build full-stack systems that power <span className="text-blue-600">computational chemistry, semiconductor manufacturing, and national security</span>.
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
          I am an experienced Integration, Yield, Quality, and Systems Engineer with a background in Chemical Engineering. 
          I specialize in automating ETL pipelines, building cloud applications, and 
          turning complex manufacturing data into actionable insights.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
           <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
             <Terminal size={18} /> Python & Bash
           </div>
           <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
             <Cloud size={18} /> AWS & GCP
           </div>
           <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
             <Database size={18} /> SQL & ETL
           </div>
           <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
             <Cpu size={18} /> Semiconductor Mfg
           </div>
        </div>
      </section>

      <hr className="my-12 border-gray-100" />

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            My journey began in <strong>Chemical Engineering</strong> at the University of New Mexico, but I quickly realized my passion lay at the intersection of process engineering, regulatory compliance, and data-driven technology. I am dedicated to building robust data models and automating complex workflows to solve critical challenges in waste management, product yield, and manufacturing.
          </p>
          <p className="mb-6">
            Currently, I serve as an Acceptable Knowledge Scientist at <strong>Los Alamos National Laboratory</strong>. In this role, I bridge the operational, regulatory, and scientific domains by analyzing waste characterization data and modernizing reporting workflows using VBA, Python, and cloud technologies. Recently, I collaborated with an Oracle developer team and waste Subject Matter Experts (SMEs) to design and deploy an AI chatbot for a lab pack database, streamlining workflows to re-home unspent chemicals and reduce waste. Serving as the technical liaison, I guided edge-case testing and ensured the application strictly adhered to RCRA and CFR regulations. To further support environmental compliance, I maintain rigorous safety credentials, including OSHA 40-Hour HAZWOPER, Radiological Worker II, and Advanced Mixed Waste Shipper certifications.
          </p>
          <p className="mb-6">
            Previously, as a Material Quality Systems Engineer at <strong>Samsung Semiconductor</strong>, I operated as a "Super User," bridging the gap between materials engineering and manufacturing systems. I developed Python-based cloud applications and automated critical ETL processes for raw material data, reducing manual processing by over <strong>1,000 hours annually</strong>.
          </p>
          <p className="mb-6">
            Prior to that, as a Yield Engineer at <strong>Intel Corporation</strong>, I leveraged SQL, Python, and JSL to certify a $3.5 billion high-volume manufacturing factory and lead cross-departmental defect reduction task forces.
          </p>
          <p>
            Whether I am collaborating with cross-functional teams, presenting scientific results, or developing programmatic solutions to optimize critical processes, I am passionate about leveraging data to drive continuous improvement and ensure operational safety.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

    </main>
  );
}
