// Site Configuration
// Nugentrix - Software Engineering & Strategic Staffing

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Nugentrix - Software Engineering & Staffing Solutions",
  siteDescription: "Nugentrix delivers end-to-end software development services and connects organizations with elite tech talent. We build robust, scalable software and find the right people to maintain it.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "NUGENTRIX",
  heroImage: "/hero-tech.png",
  heroImageAlt: "Nugentrix Technology Solutions",
  overlayText: "Building the Future with Code & Talent",
  brandName: "Nugentrix",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Where Engineering",
  titleLine2: "Meets Talent",
  description: "Nugentrix is led by a seasoned technology professional with 15 years of hands-on experience in Java development, UI design, and DevOps. Our founder's expertise spans Kubernetes, Docker, cloud infrastructure, and modern software architecture. We believe that world-class software isn't just about code—it's about the people who write it. Nugentrix occupies the vital space where technical engineering meets strategic human capital, solving both challenges for businesses in a rapidly evolving digital landscape.",
  portfolioImages: [
    { src: "/grid-1.jpg", alt: "Software Development Team" },
    { src: "/grid-2.jpg", alt: "Cloud Infrastructure" },
    { src: "/grid-3.jpg", alt: "React Development" },
    { src: "/grid-4.jpg", alt: "Quality Assurance" },
    { src: "/grid-5.jpg", alt: "AI & Machine Learning" },
  ],
  accentText: "Mississauga, Ontario · Canada",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Our Capabilities",
  titleRegular: "How We",
  titleItalic: "Deliver",
  viewAllText: "Start a Project",
  viewAllHref: "#contact",
  viewProjectText: "Learn More",
  projects: [
    {
      id: 1,
      title: "Enterprise Java Architecture",
      category: "Backend Engineering",
      year: "Java · Spring Boot",
      image: "/project-1.jpg",
      description: "We design and build high-performance microservices and monolithic Java systems using Spring Boot, Hibernate, and REST APIs. Our 15+ years of Java expertise ensures clean, maintainable, and scalable codebases that grow with your business.",
    },
    {
      id: 2,
      title: "Modern Frontend Development",
      category: "UI Engineering",
      year: "React · TypeScript",
      image: "/project-2.jpg",
      description: "From responsive dashboards to complex single-page applications, we build modern React and TypeScript frontends that deliver exceptional user experiences. We focus on performance, accessibility, and maintainability.",
    },
    {
      id: 3,
      title: "DevOps & Cloud Infrastructure",
      category: "Cloud & DevOps",
      year: "K8s · Docker · CI/CD",
      image: "/project-3.jpg",
      description: "We implement complete DevOps pipelines — from containerization with Docker and Kubernetes orchestration to automated CI/CD with Jenkins, GitHub Actions, and cloud deployments on AWS and Azure.",
    },
    {
      id: 4,
      title: "Strategic Tech Staffing",
      category: "Talent Acquisition",
      year: "Permanent · Contract",
      image: "/project-4.jpg",
      description: "Our staffing practice connects organizations with elite Java developers, DevOps engineers, cloud architects, and full-stack developers. We screen for both technical excellence and cultural fit, ensuring long-term success.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What We Offer",
  titleLine1: "Our",
  titleLine2Italic: "Services",
  description: "Backed by 15 years of hands-on experience in Java, UI development, and DevOps, we bring a DevOps mindset to everything we do—valuing efficiency, collaboration, and continuous improvement. Our expertise in Kubernetes, Docker, and cloud technologies ensures your projects are built on solid foundations.",
  services: [
    {
      iconName: "Code",
      title: "Software Engineering",
      description: "End-to-end development services specializing in Java, React.js, Python, and UI development. With 15 years of experience, we build high-performance systems with modern architecture.",
    },
    {
      iconName: "Users",
      title: "Strategic Staffing",
      description: "Connect with elite tech talent for permanent, temporary, or contract positions. We find the right technical and cultural fit for your team, leveraging our industry expertise.",
    },
    {
      iconName: "Cloud",
      title: "DevOps Solutions",
      description: "Expert cloud infrastructure, CI/CD pipelines, containerization with Kubernetes and Docker, and automated deployment strategies for scalable, reliable operations.",
    },
    {
      iconName: "CheckCircle",
      title: "Testing & QA",
      description: "Comprehensive testing services including automated testing with Playwright, functional testing, and quality assurance for reliable software delivery.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Why Nugentrix",
  titleRegular: "15 Years of",
  titleItalic: "Expertise",
  statsLabel: "Our Strengths",
  stats: [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 4, suffix: "+", label: "Core Technologies" },
    { value: 2, suffix: "", label: "Service Pillars" },
    { value: 100, suffix: "%", label: "Client Focus" },
  ],
  featureCards: [
    {
      image: "/feature-1.jpg",
      imageAlt: "Technical Excellence",
      title: "Deep Technical Expertise",
      description: "15 years of hands-on experience in Java development, UI/UX design, DevOps practices, Kubernetes, Docker, and cloud infrastructure. We bring battle-tested knowledge to every project.",
    },
    {
      image: "/feature-2.jpg",
      imageAlt: "Cultural Fit",
      title: "Perfect Cultural Fit",
      description: "We don't just fill seats—we find professionals who align with your company's values and work culture. Our staffing approach ensures long-term success for both parties.",
    },
  ],
  wideImage: "/wide-office.jpg",
  wideImageAlt: "Nugentrix Modern Office",
  wideTitle: "Your Growth Partner",
  wideDescription: "From startups to enterprises, we provide the technical foundation and human capital you need to succeed in the digital age. Based in Mississauga, Ontario, serving clients across Canada and North America.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Client Stories",
  titleRegular: "What Our",
  titleItalic: "Clients Say",
  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO, TechVentures Inc.",
      image: "/avatar-1.jpg",
      quote: "Nugentrix transformed our development process. Their team delivered a scalable Java platform that reduced our deployment time by 60%. Exceptional technical expertise!",
    },
    {
      id: 2,
      name: "Michael Roberts",
      role: "VP Engineering, DataFlow Systems",
      image: "/avatar-2.jpg",
      quote: "The staffing solutions from Nugentrix are unmatched. They found us senior React developers who integrated seamlessly with our team. Highly recommended!",
    },
    {
      id: 3,
      name: "Jennifer Walsh",
      role: "Director of HR, CloudScale Solutions",
      image: "/avatar-3.jpg",
      quote: "Working with Nugentrix for our DevOps transformation was a game-changer. Their expertise in Kubernetes and CI/CD pipelines accelerated our cloud migration.",
    },
    {
      id: 4,
      name: "David Park",
      role: "CEO, InnovateTech Startup",
      image: "/avatar-4.jpg",
      quote: "From initial consultation to project delivery, Nugentrix demonstrated professionalism and technical excellence. They're our go-to partner for all software needs.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently",
  titleItalic: "Asked",
  ctaText: "Still have questions?",
  ctaButtonText: "Get in Touch",
  ctaHref: "#contact",
  faqs: [
    {
      id: "faq-1",
      question: "What technologies does Nugentrix specialize in?",
      answer: "We specialize in Java, React.js, Python, UI/UX development, Shell scripting, and DevOps solutions. Our founder brings 15 years of hands-on experience with Kubernetes, Docker, cloud technologies (AWS, Azure), and enterprise software architecture.",
    },
    {
      id: "faq-2",
      question: "How does your staffing process work?",
      answer: "Our staffing process begins with understanding your technical requirements and company culture. We then source, screen, and present qualified candidates. We offer permanent, temporary, and contract staffing solutions to meet your specific needs.",
    },
    {
      id: "faq-3",
      question: "What types of projects do you handle?",
      answer: "We handle end-to-end software development projects including web applications, mobile apps, cloud migrations, DevOps implementations with Kubernetes and Docker, and legacy system modernization. We also provide ongoing maintenance and support services.",
    },
    {
      id: "faq-4",
      question: "Do you offer remote development services?",
      answer: "Yes, we offer both on-site and remote development services. Our team is equipped to work seamlessly with distributed teams and can adapt to your preferred working model.",
    },
    {
      id: "faq-5",
      question: "What is your project delivery methodology?",
      answer: "We follow Agile methodologies with a DevOps mindset, emphasizing continuous integration, automated testing, and frequent deliveries. With 15 years of experience in the industry, we ensure transparency, flexibility, and high-quality outcomes.",
    },
    {
      id: "faq-6",
      question: "Where is Nugentrix based and do you serve clients outside Canada?",
      answer: "Nugentrix is headquartered in Mississauga, Ontario, Canada. We proudly serve clients across Canada and North America. Our team also has remote capabilities, allowing us to support clients globally with flexible engagement models.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "NUGENTRIX",
  contactLabel: "Get in Touch",
  email: "info@nugentrix.com",
  locationText: "30 Eglinton Ave W, Suite 400\nMississauga, Ontario L5R 3E7\nCanada",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ],
  socialLabel: "Connect With Us",
  socialLinks: [
    { iconName: "Linkedin", href: "https://linkedin.com/company/nugentrix", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:info@nugentrix.com", label: "Email" },
  ],
  tagline: "Building the future together.\nSoftware Engineering & Strategic Staffing.",
  copyright: "© 2026 Nugentrix. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
};
