import { Code, Smartphone, ShoppingCart, Rocket } from '@lucide/astro';

export interface ProcessStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  icon: any; // Using 'any' for the Lucide icon component
  color: string;
  description: string;
  longDescription: string;
  features: string[];
  process: ProcessStep[];
  technologies: string[];
  caseStudies: CaseStudy[];
}

export interface ServiceMap {
  [key: string]: Service;
}

export const servicesData: ServiceMap = {
  'web-applications': {
    id: 'web-applications',
    title: 'Web Applications',
    icon: Code,
    color: '#00ffff',
    description:
      'We build responsive, high-performance web applications using modern technologies that deliver exceptional user experiences.',
    longDescription:
      'Our web application development services focus on creating scalable, responsive, and high-performance solutions that solve real business problems. We leverage cutting-edge technologies and frameworks to build applications that are not only visually stunning but also functionally robust.',
    features: [
      'Custom web application development',
      'Progressive Web Apps (PWAs)',
      'Single Page Applications (SPAs)',
      'Web portals and dashboards',
      'Content Management Systems',
      'API development and integration',
    ],
    process: [
      {
        title: 'Discovery',
        description:
          'We start by understanding your business goals, target audience, and technical requirements to create a solid foundation for your project.',
      },
      {
        title: 'Planning',
        description:
          'Our team develops a detailed project roadmap, including architecture design, technology stack selection, and milestone planning.',
      },
      {
        title: 'Development',
        description:
          'Using agile methodologies, we build your application with regular sprints and continuous feedback loops to ensure alignment with your vision.',
      },
      {
        title: 'Testing',
        description:
          'Rigorous quality assurance testing ensures your application is bug-free, secure, and performs optimally across all devices and browsers.',
      },
      {
        title: 'Deployment',
        description:
          'We handle the deployment process, ensuring a smooth transition to production environments with minimal downtime.',
      },
      {
        title: 'Maintenance',
        description:
          "Our support doesn't end at launch. We provide ongoing maintenance, updates, and performance optimization.",
      },
    ],
    technologies: [
      'React',
      'Next.js',
      'Tanstack Start',
      'Node.js',
      'TypeScript',
      'GraphQL',
      'MongoDB',
      'MySql',
      'PostgreSQL',
      'Coolify',
    ],
    caseStudies: [
      {
        title: 'DashboardX',
        description: 'Analytics dashboard with real-time data visualization and reporting.',
        image: '/placeholder.svg?height=300&width=500',
      },
      {
        title: 'CryptoTracker',
        description: 'Real-time cryptocurrency tracking platform with custom alerts.',
        image: '/placeholder.svg?height=300&width=500',
      },
    ],
  },
  'mobile-applications': {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    icon: Smartphone,
    color: '#ff00ff',
    description:
      'Native and cross-platform mobile apps that provide seamless experiences across iOS and Android devices.',
    longDescription:
      'Our mobile application development services deliver intuitive, high-performance apps that engage users and drive business growth. We create mobile experiences that stand out in crowded app stores.',
    features: [
      'Cross-platform development',
      'Mobile app UI/UX design',
      'App store optimization',
      'Push notification systems',
      'Offline functionality',
      'Integration with device features',
    ],
    process: [
      {
        title: 'Research',
        description:
          'We analyze your target audience, competitors, and market trends to identify opportunities for your mobile app.',
      },
      {
        title: 'Prototyping',
        description:
          'Interactive prototypes help visualize the user experience and flow before development begins.',
      },
      {
        title: 'Development',
        description:
          'Our developers build your app using the most appropriate technologies for your specific requirements.',
      },
      {
        title: 'Quality Assurance',
        description:
          'Comprehensive testing across multiple devices and operating systems ensures your app works flawlessly.',
      },
      {
        title: 'Deployment',
        description:
          'We handle the submission process to app stores, ensuring compliance with all guidelines and requirements.',
      },
      {
        title: 'Analytics & Updates',
        description:
          'Post-launch support includes monitoring user behavior, gathering feedback, and implementing updates.',
      },
    ],
    technologies: ['React Native', 'Expo', 'Redux', 'MobX', 'AppCenter', 'TestFlight'],
    caseStudies: [
      {
        title: 'FitTrack Pro',
        description: 'Fitness tracking app with social features and personalized workout plans.',
        image: '/placeholder.svg?height=300&width=500',
      },
      {
        title: 'TravelCompanion',
        description: 'Travel planning and itinerary management app with local recommendations.',
        image: '/placeholder.svg?height=300&width=500',
      },
    ],
  },
  'e-commerce-solutions': {
    id: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    icon: ShoppingCart,
    color: '#ffff00',
    description:
      'Custom online stores that convert visitors into customers with seamless shopping experiences.',
    longDescription:
      'Our e-commerce development services help businesses establish powerful online stores that drive sales and provide exceptional shopping experiences. We focus on creating custom solutions that reflect your brand identity while optimizing for conversions and customer retention.',
    features: [
      'Custom e-commerce development',
      'Shopify development',
      'Product catalog management',
      'Payment gateway integration',
      'Inventory management systems',
      'Order processing automation',
      'Customer account management',
    ],
    process: [
      {
        title: 'Strategy',
        description:
          'We develop a comprehensive e-commerce strategy aligned with your business goals and target audience.',
      },
      {
        title: 'Design',
        description:
          'Our designers create visually appealing storefronts that enhance your brand and optimize the shopping experience.',
      },
      {
        title: 'Development',
        description:
          'We build your e-commerce platform with a focus on performance, security, and scalability.',
      },
      {
        title: 'Integration',
        description:
          'Seamless integration with payment gateways, shipping providers, and other third-party services.',
      },
      {
        title: 'Testing',
        description:
          'Rigorous testing of the entire purchase flow ensures a smooth customer experience from browsing to checkout.',
      },
      {
        title: 'Launch & Growth',
        description:
          'Post-launch support includes optimization for conversion rates, SEO, and ongoing feature enhancements.',
      },
    ],
    technologies: ['Shopify', 'Stripe', 'PayPal', 'Mailchimp', 'Google Analytics', 'Posthog'],
    caseStudies: [
      {
        title: 'FashionFusion Store',
        description: 'A custom Shopify store with unique product customization features.',
        image: '/placeholder.svg?height=300&width=500',
      },
      {
        title: 'EcoShop',
        description: 'Sustainable products marketplace with carbon footprint tracking.',
        image: '/placeholder.svg?height=300&width=500',
      },
    ],
  },
  consulting: {
    id: 'consulting',
    title: 'Consulting',
    icon: Rocket,
    color: '#ffffff',
    description:
      'Expert technical consulting for application development, system design, and architecture optimization.',
    longDescription:
      'Our technical consulting services provide expert guidance for businesses looking to optimize their application development processes, system architecture, and technical infrastructure. We help you make informed decisions that drive efficiency, scalability, and innovation.',
    features: [
      'Application development strategy',
      'System architecture design',
      'Technical infrastructure planning',
      'Code quality assessment',
      'Performance optimization',
      'Scalability planning',
      'Technology stack evaluation',
    ],
    process: [
      {
        title: 'Discovery',
        description:
          'We conduct a thorough analysis of your current technical infrastructure, codebase, and development processes.',
      },
      {
        title: 'Assessment',
        description:
          'Our experts identify bottlenecks, technical debt, and opportunities for optimization in your systems.',
      },
      {
        title: 'Strategy Development',
        description:
          'We create a tailored technical strategy that addresses your specific challenges and aligns with your business goals.',
      },
      {
        title: 'Architecture Planning',
        description:
          'Our team designs scalable, maintainable system architectures that support your long-term vision.',
      },
      {
        title: 'Implementation Guidance',
        description:
          'We provide expert guidance during implementation to ensure best practices are followed.',
      },
      {
        title: 'Continuous Improvement',
        description:
          'Ongoing technical reviews and optimization recommendations keep your systems performing at their best.',
      },
    ],
    technologies: [
      'Docker',
      'Microservices Architecture',
      'CI/CD Pipelines',
      'GraphQL',
      'REST API Design',
      'Database Optimization',
      'Serverless Architecture',
      'System Monitoring Tools',
    ],
    caseStudies: [
      {
        title: 'FinTech Platform',
        description:
          'System architecture redesign for a financial technology platform handling millions of transactions.',
        image: '/placeholder.svg?height=300&width=500',
      },
      {
        title: 'Healthcare API',
        description:
          'API design and optimization for a healthcare data exchange platform with strict security requirements.',
        image: '/placeholder.svg?height=300&width=500',
      },
    ],
  },
};
