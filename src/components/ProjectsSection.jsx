import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Plus } from "lucide-react";


const categories = ["All", "Web", "Mobile App", "Blockchain"];

const projects = [
  {
    id: 1,
    title: "Grow Your Newsletter",
    description: "SaaS Email Newsletter platform by using next14, typescript, AWS SES, AstraDb, Stripe and Tailwind.",
    image: "/projects/beehiiv.png",
    tags: ["NextJs", "Node","TailwindCSS","AWS SES", "AstraDb"],
    category: "Web",
    demoUrl: "https://www.beehiiv.com/",
    githubUrl: "https://github.com/segsy/mailstrap",
  },
  {
    id: 2,
    title: "Bitsliced market",
    description: " Bitsliced market built with React, node and web3",
    image: "/projects/Screenshot_19.png",
    tags: ["React", "Node","Web3"],
    category:"Web",
    demoUrl: "https://bitsliced.io/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Bitsliced market",
    description: "Bitsliced market built with  react,Node and web3",
    image: "/projects/Screenshot_19.png",
    tags: ["React", "Node","Web3"],
    category:"Blockchain",
    demoUrl: "https://bitsliced.io/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Upbots Crypto Trading Bots",
    description: "Upbots Crypto Trading Bots built using Vue,Nest,Web3,TailwindCSS and Go",
    image: "/projects/Screenshot_6.png",
    tags: ["Vue", "Nest","Web3","TailwindCSS","Go"],
    category:"Web",
    demoUrl: "https://upbots.com/",
    githubUrl: "#",
  },
   {
    id: 5,
    title: "Upbots Crypto Trading Bots",
    description: "Upbots Crypto Trading Bots built using Vue,Nest,Web3,TailwindCSS and Go",
    image: "/projects/Screenshot_6.png",
    tags: ["Vue", "Nest","Web3","TailwindCSS","Go"],
    category:"Blockchain",
    demoUrl: "https://upbots.com/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Wagerr sportsbook",
    description: "Wagerr sportsbook built using PHP,Laravel,Angular and Web3.",
    image: "/projects/Screenshot_2.png",
    tags: ["PHP","Laravel","Angular","Web3"],
    category: "Web",
    demoUrl: "https://wagerr.com/",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Wagerr sportsbook",
    description: "Wagerr sportsbook built using PHP,Laravel,Angular and Web3.",
    image: "/projects/Screenshot_2.png",
    tags: ["PHP","Laravel","Angular","Web3"],
    category: "Blockchain",
    demoUrl: "https://wagerr.com/",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Cropper",
    description: "Cropper built using Next,TailwindCSS,Node,Solana and Web3",
    image: "/projects/Cropper.png",
    tags: ["Next","TailwindCSS","Node","Solana","Web3"],
    category: "Web",
    demoUrl: "https://app.cropper.finance/",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Cropper",
    description: "Cropper built using Next,TailwindCSS,Node,Solana and Web3",
    image: "/projects/Cropper.png",
    tags: ["Next","TailwindCSS","Node","Solana","Web3"],
    category: "Blockchain",
    demoUrl: "https://app.cropper.finance/",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Trustpad built with Next,Node,Web3,TailwindCSS and EtherJS",
    image: "/projects/Trustpad.png",
    tags: ["Next","Node","Web3","TailwindCSS","EtherJS"],
    category: "Web",
    demoUrl: "https://trustpad.io/",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "Tangibler",
    description: "Tangible built with Next,Node,EtherJS and TailwindCSS.",
    image: "/projects/Tangible.png",
    tags: ["Next","Node","EtherJS","TailwindCSS"],
    category: "Web",
    demoUrl: "https://www.tangible.store/",
    githubUrl: "#",
  },
   {
    id: 12,
    title: "Tangibler",
    description: "Tangible built with Next,Node,EtherJS and TailwindCSS.",
    image: "/projects/Tangible.png",
    tags: ["Next","Node","EtherJS","TailwindCSS"],
    category: "Blockchain",
    demoUrl: "https://www.tangible.store/",
    githubUrl: "#",
  },
  {
    id: 13,
    title: "Growwork",
    description: "Growwork built using Vue,Node and Firebase.",
    image: "/projects/Growwork.png",
    tags: ["Vue","Node","Firebase"],
    category: "Web",
    demoUrl: "https://growrk.com",
    githubUrl: "#",
  },
  {
    id: 14,
    title: "FilesDNA",
    description: "FilesDNA built using React,Canvas,Node,Sails and Stripe",
    image: "/projects/FilesDNA.png",
    tags: ["React","Canvas","Node","Sails","Stripe"],
    category: "Web",
    demoUrl: "https://www.filesdna.com/",
    githubUrl: "#",
  },
  {
    id: 15,
    title: "Prestige",
    description: "Prestige built using Nuxt,Node,MongoDB.",
    image: "/projects/Prestige.png",
    tags: ["Nuxt","Node","MongoDB"],
    category: "Web",
    demoUrl: "https://prestige.cars/",
    githubUrl: "#",
  },
  {
    id: 16,
    title: "Snap",
    description: "Snap built using PHP,Laravel,jQuery,Vev.",
    image: "/projects/Snap.png",
    tags: ["PHP","Laravel","jQuery","Vev"],
    category: "Web",
    demoUrl: "https://www.snapkitchen.com/",
    githubUrl: "#",
  },
  {
    id: 17,
    title: "Profiticemr",
    description: "Profiticemr built using PHP,Laravel and Angular.",
    image: "/projects/Profiticemr.png",
    tags: ["PHP","Laravel","Angular"],
    category: "Web",
    demoUrl: "https://app.profiticemr.com/",
    githubUrl: "#",
  },
  {
    id: 18,
    title: "Imprevo",
    description: "Imprevo built using PHP,Laravel,jQuery.",
    image: "/projects/Imprevo.png",
    tags: ["PHP","Laravel","jQuery"],
    category: "Web",
    demoUrl: "https://imprevo.hu/",
    githubUrl: "#",
  },
  {
    id: 19,
    title: "Ioffset",
    description: "Ioffset built using Next,Node and MySQL.",
    image: "/projects/Ioffset.png",
    tags: ["Next","Node","MySQL"],
    category: "Web",
    demoUrl: "https://ioffset.io/",
    githubUrl: "#",
  },
  {
    id: 20,
    title: "Horselinc",
    description: "Horselinc built using Angular,Node,Serverless,Firebase .",
    image: "/projects/Horselinc.png",
    tags: ["Angular","Node","Serverless","Firebase"],
    category: "Web",
    demoUrl: "https://www.horselinc.com/",
    githubUrl: "#",
  },
  {
    id: 21,
    title: "RenderfyAI",
    description: "RenderfyAI built using PHP,Laravel,JavaScript and MySQL.",
    image: "/projects/renderfy.png",
    tags: ["PHP","Laravel","JavaScript","MySQL"],
    category: "Web",
    demoUrl: "https://renderfyai.com",
    githubUrl: "#",
  },

  {
    id: 22,
    title: "Elo - Effortlessly Order",
    description: "Elo built using Node,React,Solidity, and Etherjs.",
    image: "/projects/elocoin.png",
    tags: ["React","React","Node","Solidity","Etherjs"],
    category: "Web",
    demoUrl: "https://elo-coin-pc9g.vercel.app/",
    githubUrl: "https://github.com/segsy/Elo-coin",
  },
  {
    id: 23,
    title: "Streaming Studio Conference application",
    description: "Streaming Studio Conference application built using Next.js,TypeScript,Clerk,getstream,shadcn,Tailwind CSS.",
    image: "/projects/Yoom.png",
    tags: ["Nextjs","TypeScript","Clerk","getStream","shadcn","Tailwind CSS"],
    category: "Web",
    demoUrl: "https://streaming-studio-d7bebd.netlify.app/",
    githubUrl: "https://github.com/segsy/streaming-studio",
  },
  {
    id: 24,
    title: "AI Saas Companion",
    description: "AI Saas Companion built using Next.js,TypeScript,Clerk,sentry,vapi,shadcn,Tailwind CSS.",
    image: "/projects/aisaascompanion.png",
    tags: ["Nextjs","TypeScript","Clerk","Sentry","vapi","shadcn","Tailwind CSS"],
    category: "Web",
    demoUrl: "https://ai-saas-companion2.vercel.app/",
    githubUrl: "https://github.com/segsy/AI-Saas-Companion2",
  },
  {
    id: 25,
    title: "Calendra",
    description: "Calendra full-stack Calendly clone from scratch using Next.js 15, Clerk for authentication, Tailwind CSS, and a modern tech stack. built using Next.js,TypeScript,Clerk,Neondb,drizzleorm,shadcn,Tailwind CSS.",
    image: "/projects/calendra.png",
    tags: ["Nextjs","TypeScript","Clerk","neondb","drizzleorm","shadcn","Tailwind CSS"],
    category: "Web",
    demoUrl: "https://calendra-ruddy.vercel.app/",
    githubUrl: "https://github.com/segsy/calendra.git",
  },
  {
    id: 26,
    title: "Blended Soul",
    description: "Blended Soul built using Java,Kotlin,PHP and Laravel .",
    image: "/projects/BlendedSoul.png",
    tags: ["Java","Kotlin","PHP","Laravel"],
    category: "Mobile App",
    demoUrl: "https://www.https://play.google.com/store/apps/details?id=tv.creativelab.meapp.com/",
    githubUrl: "#",
  },
  {
    id: 27,
    title: "Stop Guessing",
    description: "Stop Guessing built using React Native, Stripe and  Firebase .",
    image: "/projects/Stopguessing.png",
    tags: ["React Native","Stripe","Firebase"],
    category: "Mobile App",
    demoUrl: "https://play.google.com/store/apps/details?id=com.stopguessing",
    githubUrl: "#",
  },
  {
    id: 28,
    title: "Female Fitness - Women Workout",
    description: "Female Fitness - Women Workout built using React Native,Node and MongoDB .",
    image: "/projects/FemaleFitness.png",
    tags: ["React Native","Node","MongoDB"],
    category: "Mobile App",
    demoUrl: "https://play.google.com/store/apps/details?id=net.female.fitness.women.workout",
    githubUrl: "#",
  },
  {
    id: 29,
    title: "Penny Watchers",
    description: "Penny Watchers built using React Native and ASP.net .",
    image: "/projects/Screenshot_12.png",
    tags: ["React Native","ASP.net"],
    category: "Mobile App",
    demoUrl: "https://apps.apple.com/us/app/pennywatchers/id790781808",
    githubUrl: "#",
  },
  {
    id: 30,
    title: "Food Delivery & Alcohol",
    description: "Food Delivery & Alcohol built using React Native and Node .",
    image: "/projects/FoodDelivery.png",
    tags: ["React Native","Node"],
    category: "Mobile App",
    demoUrl: "https://play.google.com/store/apps/details?id=com.seven.eleven.phoenix&hl=en_US&gl=US",
    githubUrl: "#",
  },
  {
    id: 31,
    title: "Bill Kill",
    description: "Bill Kill built using React Native and Go .",
    image: "/projects/BillKill.png",
    tags: ["React Native","Go"],
    category: "Mobile App",
    demoUrl: "https://play.google.com/store/apps/details?id=digital.snowball.billkill&hl=no&gl=US&hsCtaTracking=379ca7b1-afa9-4d8a-8d2e-25ba5fb0aada%7C0192f93b-4fb5-4918-9b48-f35a64320aa3",
    githubUrl: "#",
  },
   {
    id: 32,
    title: "YesStyle - Fashion & Beauty",
    description: "YesStyle - Fashion & Beauty built using React Native and Node .",
    image: "/projects/FashionBeauty.png",
    tags: ["React Native","Node"],
    category: "Mobile App",
    demoUrl: "https://play.google.com/store/apps/details?id=com.yesstyle.android",
    githubUrl: "#",
  },
    {
    id: 33,
    title: "Skylar App",
    description: "Skylar App built using React Native, Node,MongoDB and Twilio .",
    image: "/projects/Skylar.png",
    tags: ["React Native","Node","MongoDB","Twilio"],
    category: "Mobile App",
    demoUrl: "https://play.google.com/store/apps/details?id=com.skylar&pli=1",
    githubUrl: "#",
  },
  {
    id: 34,
    title: "SALT - Christian Dating App",
    description: "SALT - Christian Dating App built using React Native,Node and AgoraSDK",
    image: "/projects/ChristianDating.png",
    tags: ["React Native","Node","AgoraSDK"],
    category: "Mobile App",
    demoUrl: "https://play.google.com/store/apps/details?id=com.besalt.app",
    githubUrl: "#",
  },
  {
    id: 35,
    title: "Live Me - Video Chat online",
    description: "Live Me - Video Chat online built using React Native,Node,WebRTC and Firebase",
    image: "/projects/LiveMe.png",
    tags: ["React Native","Node","WebRTC","Firebase"],
    category: "Mobile App",
    demoUrl: "https://play.google.com/store/apps/details?id=com.video18.dating&hl=en_US&gl=US",
    githubUrl: "#",
  },
  
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [modalImage, setModalImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);


  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore a selection of my projects categorized by platform and
          technology focus.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                activeTab === cat
                  ? "bg-primary text-white"
                  : "bg-secondary text-blue/70 hover:text-black"
              } transition-colors duration-300`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition relative"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative h-48 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition">
    {/* View image modal */}
    <button
      onClick={() => setModalImage(project.image)}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      title="Preview Image"
    >
      <Plus size={28} className="text-white" />
    </button>

    {/* Open live site */}
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      title="Open Demo"
    >
      <ExternalLink size={28} className="text-white" />
    </a>
  </div>
</div>


              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

               <div
  onClick={() => setSelectedProject(project)}
  className="cursor-pointer"
  title="Click to view details"
>
  <h3 className="text-xl font-semibold mb-1 hover:text-primary transition">
    {project.title}
  </h3>
  <p className="text-muted-foreground text-sm mb-4">
    {project.description}
  </p>
</div>


                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative max-w-3xl mx-auto p-4">
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-2 right-2 text-white bg-black/40 p-1 rounded-full"
              >
                ✕
              </button>
              <img
                src={modalImage}
                alt="Expanded project"
                className="rounded-lg max-h-[80vh] w-auto object-contain"
              />
            </div>
          </div>
        )}

        {selectedProject && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 max-w-lg w-full relative text-left">
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-2 text-primary">
        {selectedProject.title}
      </h2>

      <p className="text-muted-foreground mb-4">{selectedProject.description}</p>

      <div className="rounded overflow-hidden mb-4">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="rounded object-cover w-full h-auto"
        />
      </div>

      <div className="flex gap-4 mt-2">
        <a
          href={selectedProject.demoUrl}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Visit Live Demo
        </a>
        <a
          href={selectedProject.githubUrl}
          target="_blank"
          className="text-gray-600 hover:underline"
        >
          View GitHub
        </a>
      </div>
    </div>
  </div>
)}


        {/* Footer CTA */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/segsy"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
