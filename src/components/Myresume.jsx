
import { Mail, Phone, MapPin, Calendar, User, Globe } from "lucide-react";


export const Myresume = () => {

    
  return (
    <section id="about" className="py-24 px-4 bg-background text-white">
      <div className="container mx-auto max-w-5xl">

        
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Blockchain Specialist & Full Stack Expert
        </p>

        {/* Profile + Info */}
        

       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="/profile.jpg" // <-- Replace with your actual image path
              alt="Profile"
              className="rounded-full w-56 h-56 object-cover shadow-xl border-4 border-primary"
            />
          </div>

          {/* Personal Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <Info label="Birthday" icon={<Calendar size={16} />} value="17 August" />
              <Info label="Website" icon={<Globe size={16} />} value="https://github.com/segsy" />
              <Info label="Phone" icon={<Phone size={16} />} value="+2348121724280" />
              <Info label="City" icon={<MapPin size={16} />} value="Lagos, Nigeria" />
           {/*    <Info label="Age" icon={<User size={16} />} value="35" /> */}
              <Info label="Degree" icon={<User size={16} />} value="Bachelor" />
              <Info label="Email" icon={<Mail size={16} />} value="segsywealthprosperity@gmail.com" />
              <Info label="Full Time Job" icon={<User size={16} />} value="Available" />
            </div>
          </div>
        </div>

        {/* Technical Skills */}
<div className="mt-16">
  <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
  <ul className="flex flex-wrap gap-4 text-muted-foreground text-sm">
    <li className="bg-secondary px-3 py-1 rounded-full">
      12+ years In Backend Development: Php, Codeigniter and Laravel
    </li>
    <li className="bg-secondary px-3 py-1 rounded-full">
       12+ years of experience in front end development using HTML/HTML5, XHTML, CSS2/CSS3, JavaScript/Typescript, Bootstrap, jQuery, Ajax, JSON, 
       and XML and IDE tools like VSCode, WebStorm, Sublime text, and Eclipse
    </li>
    <li className="bg-secondary px-3 py-1 rounded-full">
      7+ years of experience in React/Next, Redux, Next.js, Redux-Thunk, and Redux-Saga
    </li>
    <li className="bg-secondary px-3 py-1 rounded-full">
      3 years of experience in Vue.js, VueX, Vuetify.js, Nuxt.js, and Element UI Library
    </li>
    <li className="bg-secondary px-3 py-1 rounded-full">
      5 years of experience in back end development in Node.js/Express/Nest
    </li>
    <li className="bg-secondary px-3 py-1 rounded-full">
      6+ years of experience in developing Restful Web Services and Micro Services using Node/Golang
    </li>
    <li className="bg-secondary px-3 py-1 rounded-full">
       5 years of experience in hybrid mobile app development by using React Native
    </li>
    <li className="bg-secondary px-3 py-1 rounded-full">
      4 years of experience by using Solidity, Web3, Hardhat, Truffle, and Openzeppelin in Blockchain Development
    </li>
    
  </ul>
</div>


        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {[
              "Time Management",
              "Excellent Communication",
              "Self-management",
              "Mentorship",
              "Self-organization",
              "Product Thinking",
              "Adaptability",
              "Problem-solving",
              "Teamwork",
              "Creativity",
              "Leadership",
              "Interpersonal Skills",
              "Work Ethic",
              "Attention to Detail",
            ].map((skill, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-secondary rounded-full border border-white/10"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Info = ({ label, value, icon }) => (
  <div className="flex items-center gap-2">
    <div className="text-primary">{icon}</div>
    <div>
      <span className="block text-white font-medium">{label}</span>
      <span className="text-muted-foreground">{value}</span>
    </div>
  </div>
);
