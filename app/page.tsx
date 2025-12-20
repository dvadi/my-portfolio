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
          Based in Austin, TX
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
          I build full-stack systems that power <span className="text-blue-600">computational chemistry, semiconductor manufacturing, and national security</span>.
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
          I am an experienced Integration, Yield, Quality, and Systems Engineer with a background in Chemical and Bioengineering Engineering. 
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
            My journey began in <strong>Chemical Engineering</strong>, at the University of New Mexico, but I quickly realized that my interest not only lied in chemical engineering they were also in leveraging new technologies to develop data driven solutions.
          </p>
          <p className="mb-6">
            Currently, I work as an Acceptable Knowledge Scientist (Engineer) at the <strong>United States Department of Energy (DOE)</strong>.
          </p>
          <p className="mb-6">
            In my previous role as a Material Quality Systems Engineer at <strong>Samsung Semiconductor</strong>, I operated as a "Super User"; bridging the gap between material engineering teams and manufacturing systems. I developed cloud applications that reduced manual data processing by over <strong>1,000 hours annually</strong>  and automated critical ETL processes for raw material data.
          </p>
          <p className="mb-6">
            Additionaly, I worked at <strong>Intel Corporation</strong>, I worked as a Module (Process) & Integration Yield Engineer, using SQL and Python to certify one of Intel Corporations first high volume manufacturing advanced packaging factories and lead defect reduction task forces.
          </p>
          <p>
            I am passionate about using technology and data to automate complex workflows, optimize product yield, and improve quality.
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