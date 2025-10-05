// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { FileText, ArrowRight, Video } from "lucide-react"; // Added Video icon
// import profile from '../components/new_profile.jpeg'
// // import FO1 from './pdfs'

// // Import your images from the assets folder
// import researchImg from "@/assets/ResearchPaper.jpg";
// import platinumImg from "@/assets/LeadPlatinum.jpeg";
// import firmImg from "@/assets/Internship.jpg";
// import empowermentImg from "@/assets/community.jpg";
// import communityImg from "@/assets/club.jpg";
// import martialArtsImg from "@/assets/martialArts.jpg";

// const Index = () => {
//   // NEW: Updated this array to include 'modalLinks' for the new pop-up style.
//   // You can add or remove links for each card. Just update the URL to your PDF file.
//   const activityCards = [
//     {
//       title: "Research Paper",
//       imgSrc: researchImg,
//       description: "Implemented lean manufacturing principles at a diamond processing unit.",
//       modalLinks: [
//         { label: "View Paper", icon: <FileText size={48} />, url: "/pdfs/research-paper.pdf" },
//       ]
//     },
//     {
//       title: "Lead Platinum",
//       imgSrc: platinumImg,
//       description: "A study of precious metal manufacturing processes.",
//       modalLinks: [
//         { label: "View Report", icon: <FileText size={48} />, url: "/pdfs/lead-platinum-report.pdf" },
//       ]
//     },
//     {
//       title: "Firm Observation",
//       imgSrc: firmImg,
//       description: "Internship focused on the valves production process at Larsen & Toubro.",
//       modalLinks: [
//         { label: "View Certificate", icon: <FileText size={48} />, url: "./pdfs/firmObservation1.pdf" },
//         { label: "View Certificate", icon: <FileText size={48} />, url: "./pdfs/firmObservation2.pdf" },
//       ]
//     },
//     {
//       title: "Livelihood Empowerment",
//       imgSrc: empowermentImg,
//       description: "Community-focused projects to support and empower local groups.",
//       modalLinks: [
//         { label: "Project Details", icon: <FileText size={48} />, url: "#" }, // Update this URL
//       ]
//     },
//     {
//       title: "Community Initiatives",
//       imgSrc: communityImg,
//       description: "Led donation drives and social initiatives as Director of the Interact Club.",
//       modalLinks: [
//         { label: "View Certificate", icon: <FileText size={48} />, url: "/pdfs/community-cert.pdf" },
//       ]
//     },
//     {
//       title: "Martial Arts",
//       imgSrc: martialArtsImg,
//       description: "Achieved Black Belt (3rd Dan) and multiple interschool competition medals.",
//       modalLinks: [
//         { label: "View Certificates", icon: <FileText size={48} />, url: "/pdfs/karate-certs.pdf" },
//         { label: "Watch Videos", icon: <Video size={48} />, url: "#" }, // You can link to a video here
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <main className="container mx-auto px-4 py-12 md:py-20">
        
//         {/* Section 1: Rehaan's Profile Card */}
//         <Card className="max-w-4xl mx-auto p-6 md:p-8 shadow-lg">
//            <div className="grid md:grid-cols-3 gap-6 items-center">
//              <div className="flex justify-center md:col-span-1">
//                <img
//                  src={profile}
//                  alt="Rehaan Kothari"
//                  className="w-48 h-56 object-contain rounded-lg border-slate-200"
//                />
//              </div>
//              <div className="md:col-span-2 text-center md:text-left">
//                <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
//                  Rehaan Kothari
//                </h1>
//                <p className="mt-2 text-lg text-slate-600">
//                  Aspiring Mechanical Engineer
//                </p>
//                <p className="mt-4 text-slate-700">
//                  Hi, I’m Rehaan Kothari, a curiosity is my Superpower! I think the world is a giant puzzle that yet to be solved. Math and physics are my favourite my favourite instruments  and would like to experiment, investigate and develop projects. When I’m not solving I kick goals or practice my martial arts moves! I think curiosity fuels creativity and that’s the reason every project is exciting. Take a look at my researches, experiences and projects.
//                </p>
//                <Button className="mt-6">
//                  <FileText className="mr-2 h-4 w-4" />
//                  View Resume
//                </Button>
//              </div>
//            </div>
//          </Card>

//         {/* Section 2: Activity Cards */}
//         <div className="max-w-5xl mx-auto mt-16 md:mt-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {activityCards.map((card, index) => (
//               <Dialog key={index}>
//                 <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
//                   <div
//                     style={{ backgroundImage: `url(${card.imgSrc})` }}
//                     className="h-64 bg-cover bg-center relative group"
//                   >
//                     <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 text-white">
//                       <h3 className="text-xl font-bold">{card.title}</h3>
//                       <p className="mt-1 text-sm opacity-90">{card.description}</p>
//                       <DialogTrigger asChild>
//                         <Button variant="outline" className="mt-4 w-fit bg-transparent text-white border-white hover:bg-white hover:text-black">
//                           Details <ArrowRight className="ml-2 h-4 w-4" />
//                         </Button>
//                       </DialogTrigger>
//                     </div>
//                   </div>
//                 </Card>
//                 {/* NEW: This is the updated pop-up content */}
//                 <DialogContent className="sm:max-w-md">
//                   <DialogHeader>
//                     <DialogTitle className="text-2xl text-center">{card.title}</DialogTitle>
//                   </DialogHeader>
//                   <div className="flex justify-center items-center gap-8 py-8">
//                     {card.modalLinks.map((link, linkIndex) => (
//                       <a 
//                         key={linkIndex} 
//                         href={link.url} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="flex flex-col items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
//                       >
//                         {link.icon}
//                         <span className="font-semibold">{link.label}</span>
//                       </a>
//                     ))}
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Index;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, ArrowRight, Video } from "lucide-react"; // Added Video icon
import profile from '../components/new_profile.jpeg'
// import FO1 from './pdfs'

// Import your images from the assets folder
import researchImg from "@/assets/ResearchPaper.jpg";
import platinumImg from "@/assets/LeadPlatinum.jpeg";
import firmImg from "@/assets/Internship.jpg";
import empowermentImg from "@/assets/community.jpg";
import communityImg from "@/assets/club.jpg";
import martialArtsImg from "@/assets/martialArts.jpg";

const Index = () => {
  // NEW: Updated this array to include 'modalLinks' for the new pop-up style.
  // You can add or remove links for each card. Just update the URL to your PDF file.
  const activityCards = [
    {
      title: "Research Paper",
      imgSrc: researchImg,
      description: "Implemented lean manufacturing principles at a diamond processing unit.",
      modalLinks: [
        { label: "View Paper", icon: <FileText size={48} />, url: "/pdfs/research-paper.pdf" },
      ]
    },
    {
      title: "Lead Platinum",
      imgSrc: platinumImg,
      description: "A study of precious metal manufacturing processes.",
      modalLinks: [
        { label: "View Report", icon: <FileText size={48} />, url: "/pdfs/lead-platinum-report.pdf" },
      ]
    },
    {
      title: "Firm Observation",
      imgSrc: firmImg,
      description: "Internship focused on the valves production process at Larsen & Toubro.",
      modalLinks: [
        { label: "View Certificate", icon: <FileText size={48} />, url: "/pdfs/firmObservation1.pdf" },
        { label: "View Certificate", icon: <FileText size={48} />, url: "/pdfs/firmObservation2.pdf" },
      ]
    },
    {
      title: "Livelihood Empowerment",
      imgSrc: empowermentImg,
      description: "Community-focused projects to support and empower local groups.",
      modalLinks: [
        { label: "Project Details", icon: <FileText size={48} />, url: "#" }, // Update this URL
      ]
    },
    {
      title: "Community Initiatives",
      imgSrc: communityImg,
      description: "Led donation drives and social initiatives as Director of the Interact Club.",
      modalLinks: [
        { label: "View Certificate", icon: <FileText size={48} />, url: "/pdfs/community-cert.pdf" },
      ]
    },
    {
      title: "Martial Arts",
      imgSrc: martialArtsImg,
      description: "Achieved Black Belt (3rd Dan) and multiple interschool competition medals.",
      modalLinks: [
        { label: "View Certificates", icon: <FileText size={48} />, url: "/pdfs/karate-certs.pdf" },
        { label: "Watch Videos", icon: <Video size={48} />, url: "#" }, // You can link to a video here
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto px-4 py-12 md:py-20">
        
        {/* Section 1: Rehaan's Profile Card */}
        <Card className="max-w-4xl mx-auto p-6 md:p-8 shadow-lg">
           <div className="grid md:grid-cols-3 gap-6 items-center">
             <div className="flex justify-center md:col-span-1">
               <img
                 src={profile}
                 alt="Rehaan Kothari"
                 className="w-48 h-56 object-contain rounded-lg border-slate-200"
               />
             </div>
             <div className="md:col-span-2 text-center md:text-left">
               <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                 Rehaan Kothari
               </h1>
               <p className="mt-2 text-lg text-slate-600">
                 Aspiring Mechanical Engineer
               </p>
               <p className="mt-4 text-slate-700">
                 Hi, I’m Rehaan Kothari, a curiosity is my Superpower!
 I think the world is a giant puzzle that yet to be solved.
 Math and physics are my favourite my favourite instruments  and would like to experiment, investigate and develop projects.
 When I’m not solving I kick goals or practice my martial arts moves!
 I think curiosity fuels creativity and that’s the reason every project is exciting.
 Take a look at my researches, experiences and projects.
               </p>
               <Button className="mt-6">
                 <FileText className="mr-2 h-4 w-4" />
                 View Resume
               </Button>
             </div>
           </div>
         </Card>

        {/* Section 2: Activity Cards */}
        <div className="max-w-5xl mx-auto mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activityCards.map((card, index) => (
              <Dialog key={index}>
                <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div
                    style={{ backgroundImage: `url(${card.imgSrc})` }}
                    className="h-64 bg-cover bg-center relative group"
                  >
                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 text-white">
                      <h3 className="text-xl font-bold">{card.title}</h3>
                      <p className="mt-1 text-sm opacity-90">{card.description}</p>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="mt-4 w-fit bg-transparent text-white border-white hover:bg-white hover:text-black">
                          Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                    </div>
                  </div>
                </Card>
                {/* NEW: This is the updated pop-up content */}
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center">{card.title}</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center items-center gap-8 py-8">
                    {card.modalLinks.map((link, linkIndex) => (
                      <a 
                        key={linkIndex} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        {link.icon}
                        <span className="font-semibold">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;