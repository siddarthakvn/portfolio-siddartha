export const personalInfo = {
  name: "KVN Sai Siddartha",
  title: "Embedded Systems & Robotics Engineer",
  subtitle: "Building Autonomous Systems for Real-World Impact",
  email: "siddarthakvn@gmail.com",
  phone: "+91-9603273815",
  github: "https://github.com/siddarthakvn",
  linkedin: "https://www.linkedin.com/in/siddartha-kvns-9a115b293",
  tagline: "Precision Engineering • Autonomous Robotics • IoT Innovation",
  bio: "Developing intelligent embedded systems and autonomous robots with expertise in microcontroller interfacing, real-time sensor fusion, and ML-powered decision systems. Currently building next-gen navigation and environmental sensing solutions at Tropoleap India."
};

export const experience = [
  {
    id: 1,
    company: "Tropoleap India",
    role: "Embedded Engineer Intern",
    duration: "July 2025 – Present",
    location: "On-site",
    type: "Internship",
    achievements: [
      "Developing real-time last-mile navigation system using ESP32 with precise geo-coordinate mapping, targeting 30-40% improvement in delivery accuracy",
      "Building custom VOC detection SMD module (electronic nose) with ppm-level sensitivity for environmental and medical screening",
      "Designed and tested custom PCBs, improving hardware reliability by 25% through iterative validation",
      "Integrated multiple sensors with microcontrollers, implementing real-time data acquisition and filtering, improving reading stability by 20-30%",
      "Developed IoT connectivity using Firebase and Blynk for secure remote monitoring and device control"
    ],
    technologies: ["ESP32", "PCB Design", "Firebase", "Blynk", "Sensor Integration", "IoT"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Hexapod Robot",
    category: "Autonomous Robotics",
    description: "18-DOF autonomous hexapod with advanced gait control and ROS2 integration for complex terrain navigation.",
    fullDescription: "Developing an 18-DOF hexapod robot using Arduino Due, MG996R servos, and dual PCA9685 drivers. Implementing inverse kinematics-based gait control (tripod, ripple, wave) with precise servo synchronization across all 6 legs. Building complete ROS2 + Gazebo simulation pipeline with URDF modeling and autonomous behavior.",
    technologies: ["Arduino Due", "ROS2", "Gazebo", "Inverse Kinematics", "PCA9685", "URDF", "C++"],
    highlights: [
      "18 degrees of freedom with coordinated multi-servo control",
      "Custom 5000 mAh Li-ion battery pack for stable power",
      "Multiple gait patterns: tripod, ripple, and wave locomotion",
      "Complete simulation environment with physics modeling",
      "Remote teleoperation capabilities"
    ],
    status: "In Development",
    github: "#"
  },
  {
    id: 2,
    title: "Smart Dustbin (Trash to Treasure)",
    category: "AI + IoT",
    description: "ML-powered waste segregation system with automated classification and reward ecosystem using ESP32-CAM.",
    fullDescription: "Developed ESP32-CAM-based waste-segregation system using custom ML model for real-time object classification. Implemented complete reward ecosystem with QR code generation, MongoDB Atlas cloud logging, and user point tracking integrated with mobile app workflow.",
    technologies: ["ESP32-CAM", "Machine Learning", "MongoDB Atlas", "Computer Vision", "Servo Control"],
    highlights: [
      "Real-time waste classification using custom ML model",
      "Automated servo-controlled bin selection",
      "Cloud-based user reward and tracking system",
      "QR code generation for user engagement",
      "Fail-safe manual override and status indicators"
    ],
    status: "Completed",
    github: "#",
    achievements: ["Selected as Finalist – PALS Innowah"]
  },
  {
    id: 3,
    title: "Fogponics IoT System",
    category: "Agricultural IoT",
    description: "Intelligent vertical farming system with automated nutrient delivery and real-time environmental monitoring.",
    fullDescription: "Built IoT-enabled fogponics system using ESP32, pH, TDS, and DHT22 sensors with ultrasonic fogger. Mounted on custom hexagonal vertical structure for maximum space efficiency. Real-time sensing, automated fog-cycle control, and nutrient calibration with ThingSpeak data visualization.",
    technologies: ["ESP32", "ThingSpeak", "pH Sensor", "TDS Sensor", "DHT22", "IoT", "Control Systems"],
    highlights: [
      "Custom hexagonal vertical structure for space optimization",
      "Real-time environmental and nutrient monitoring",
      "Automated fog-cycle and nutrient calibration",
      "Cloud-based graphical monitoring and analytics",
      "Improved nutrient absorption and faster growth rates"
    ],
    status: "Completed",
    github: "#",
    achievements: ["Winner – EPICS Cohorts Hackathon, IEEE"]
  },
  {
    id: 4,
    title: "Obstacle Avoiding Bot",
    category: "Autonomous Navigation",
    description: "Fully autonomous robot with 360° environmental scanning and dynamic path planning algorithms.",
    fullDescription: "Developed fully autonomous robot using Arduino Uno with Parallax shield for stable servo and sensor interfacing. Designed rotating ultrasonic scanning mechanism for 360° environmental mapping with custom decision-making algorithm for optimal path selection.",
    technologies: ["Arduino Uno", "Ultrasonic Sensors", "Servo Control", "Path Planning", "Real-time Processing"],
    highlights: [
      "360° environmental scanning capability",
      "Dynamic path planning and decision-making",
      "Optimized servo synchronization for stable operation",
      "Real-time obstacle detection and avoidance",
      "Custom algorithm for movement optimization"
    ],
    status: "Completed",
    github: "#"
  },
  {
    id: 5,
    title: "Warehouse Automation Robot",
    category: "Industrial Robotics",
    description: "Intelligent warehouse navigation and inventory management system for automated logistics.",
    fullDescription: "Developing autonomous warehouse robot for inventory management and material transport with advanced navigation and object recognition capabilities.",
    technologies: ["Embedded Systems", "Computer Vision", "Navigation", "Automation"],
    highlights: [
      "Autonomous navigation in warehouse environments",
      "Inventory tracking and management",
      "Object recognition and handling",
      "Real-time path optimization"
    ],
    status: "In Development",
    github: "#",
    achievements: ["Regional Finalist – NXP AIM India 2025"]
  }
];

export const skills = {
  "Core Expertise": [
    { name: "Embedded Systems Design", level: 90, icon: "microchip" },
    { name: "Robotics & Automation", level: 85, icon: "robot" },
    { name: "IoT Architecture", level: 88, icon: "network" },
    { name: "PCB Design & Testing", level: 80, icon: "circuit" }
  ],
  "Programming": [
    { name: "C/C++", level: 90, icon: "code" },
    { name: "Python", level: 85, icon: "python" },
    { name: "Arduino Framework", level: 92, icon: "microcontroller" }
  ],
  "Hardware": [
    { name: "ESP32/ESP8266", level: 95, icon: "esp32" },
    { name: "Arduino Ecosystem", level: 95, icon: "arduino" },
    { name: "Sensor Integration", level: 90, icon: "sensor" },
    { name: "Servo Control Systems", level: 88, icon: "motor" }
  ],
  "Tools & Frameworks": [
    { name: "ROS2 & Gazebo", level: 75, icon: "ros" },
    { name: "EasyEDA & Proteus", level: 85, icon: "pcb" },
    { name: "Firebase & Blynk", level: 80, icon: "cloud" },
    { name: "OpenCV", level: 70, icon: "vision" }
  ],
  "Emerging Tech": [
    { name: "Machine Learning Integration", level: 70, icon: "ai" },
    { name: "Computer Vision", level: 75, icon: "camera" },
    { name: "Edge AI", level: 65, icon: "chip" }
  ]
};

export const education = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "BVR Institute of Technology",
    location: "Narsapur, Medak",
    duration: "2023 – Present",
    cgpa: "8.33",
    highlights: [
      "Specialization in Embedded Systems and Robotics",
      "Active member of technical clubs and hackathon teams",
      "Led Arduino Day 2025 as Head Organizer"
    ]
  }
];

export const achievements = [
  {
    title: "Winner – EPICS Cohorts Hackathon",
    organization: "IEEE",
    project: "Fogponics IoT System",
    year: "2024"
  },
  {
    title: "Regional Finalist – NXP AIM India",
    organization: "NXP Semiconductors",
    project: "Warehouse Automation Robot",
    year: "2025"
  },
  {
    title: "Finalist – PALS Innowah",
    organization: "PALS",
    project: "Trash to Treasure (Smart Dustbin)",
    year: "2024"
  }
];

export const certifications = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft + LinkedIn Learning",
    year: "2024"
  },
  {
    title: "Embedded Systems: Introduction to IoT",
    issuer: "HCL",
    year: "2024"
  },
  {
    title: "PCB Design from Concept to Creation",
    issuer: "AICTE IDEA Lab",
    year: "2024"
  }
];

export const responsibilities = [
  {
    role: "Head Organizer",
    event: "Arduino Day 2025",
    description: "Led event planning, workshop conduction, logistics coordination, and project evaluation for 100+ participants"
  },
  {
    role: "Technical Volunteer",
    team: "eBAJA Team",
    description: "Supported technical sessions, workshop management, and event operations"
  }
];

export const stats = [
  { label: "Projects Completed", value: "10+", icon: "project" },
  { label: "PCBs Designed", value: "15+", icon: "pcb" },
  { label: "Lines of Code", value: "50K+", icon: "code" },
  { label: "Hardware Prototypes", value: "20+", icon: "prototype" }
];
