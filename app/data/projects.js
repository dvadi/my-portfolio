// app/data/projects.js
export const projects = [
  {
    title: "Transportation API Dashboard",
    description: "Automated pipeline that fetches data from Transportation.gov via Python and visualizes trends in Looker Studio.",
    tech: ["Python", "Looker Studio", "API Integration"],
    link: "https://lookerstudio.google.com/embed/reporting/9cf75f12-0d44-41f7-bd4d-dccdc1154ded/page/45nhF", 
    image: "/transportation.png"
  },
  {
    title: "AI Wafer Defect Detection",
    description: "An end-to-end Computer Vision pipeline that detects and classifies semiconductor manufacturing defects (WM-811K dataset) with 93% accuracy. Features a custom CNN architecture and 'Explainable AI' (Grad-CAM) to visualize failure patterns.",
    tech: ["Python", "TensorFlow", "Computer Vision", "Streamlit"],
    // Replace these with your actual links once deployed
    demoLink: "https://wafer-defect-demo.streamlit.app/", 
    repoLink: "https://github.com/dvadi/wafer-demo",
    // You'll want to take a screenshot of your Grad-CAM result for this
    image: "/images/wafer-heatmap-demo.png" 
  },
  {
    title: "Migo - Gigs (iOS App)",
    description: "A mobile platform connecting users with local gig opportunities. Published iOS app developed using Swift and Firebase",
    tech: ["iOS", "Swift", "Xcode", "NoSQL", "App Store"],
    link: "https://apps.apple.com/app/migo-gigs/id6756591237",
    image: "/migo.png"
  },
  {
    title: "Migo - Gigs (Android App)",
    description: "A mobile platform connecting users with local gig opportunities. Published ndroid app developed using React Native framework, JSX, StyleSheet, and Firebase",
    tech: ["React Native", "JSX", "StyleSheet", "NoSQL"],
    link: "https://apps.apple.com/app/migo-gigs/id6756591237",
    image: "/migo.png"
  },
  
];