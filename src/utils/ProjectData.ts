import radiqlImg1 from '/Radiql/Images/radiQL_Logo2.webp';
import radiqlImg2 from '/Radiql/Images/about1.webp';
import radiqlImg3 from '/Radiql/Images/readme-logo.webp';
import radiqlVid1 from '/Radiql/Videos/Radiql1-1.webm';
import radiqlVid2 from '/Radiql/Videos/Radiql1-2.webm';
import radiqlVid3 from '/Radiql/Videos/Radiql1-3.webm';
import radiqlVid4 from '/Radiql/Videos/Radiql1-4.webm';
import radiqlVid5 from '/Radiql/Videos/Radiql1-5.webm';
import tDImg1 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.55.19 PM.webp';
import tDImg2 from '/TwinsDimension/Images/Screen Shot 2023-03-19 at 2.03.05 AM.webp';
import tDImg3 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.49.49 PM.webp';
import tDImg4 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.50.15 PM.webp';
import tDImg5 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.52.21 PM.webp';
import tDImg6 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.52.42 PM.webp';
import tDImg7 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.53.39 PM.webp';
import tDImg8 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.53.52 PM.webp';
import tDImg9 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.54.09 PM.webp';
import tDImg10 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 8.55.02 PM.webp';
import tDImg11 from '/TwinsDimension/Images/Screen Shot 2023-03-19 at 2.04.07 AM.webp';

export interface Project {
    title: string;
    description: string;
    image?: string;
    website: string;
    github?: string;
    technologies: string[];
    article?: string;
    media?: string[];
}

export const projectData: Project[] = [
    {
        title: 'radiQL',
        description: 'GraphQL Migration Aid & Visualizer',
        website: 'www.google.com',
        github: 'https://github.com/oslabs-beta/radiQL',
        technologies: [
            'TypeScript',
            'React',
            'TailwindCSS',
            'AmazonDynamoDB',
            'Node',
            'Express',
            'GraphQL',
        ],
        article: 'http://www.medium.com/radiql',
        media: [
            radiqlVid1,
            radiqlVid2,
            radiqlVid3,
            radiqlVid4,
            radiqlVid5,
            radiqlImg1,
            radiqlImg2,
            radiqlImg3,
        ],
    },
    {
        title: 'Twins Dimension',
        description: 'E-Commerce - Custom 3-D Printed Collectables',
        website: 'https://twinsdimension.herokuapp.com',
        technologies: [
            'TypeScript',
            'React',
            'TailwindCSS',
            'Redux',
            'MongoDB',
            'Stripe',
            'Paypal',
            'Node',
            'Express',
        ],
        github: 'https://github.com/JordanOBL/RyansCollectables',
        media: [
            tDImg1,
            tDImg2,
            tDImg3,
            tDImg4,
            tDImg5,
            tDImg6,
            tDImg7,
            tDImg8,
            tDImg9,
            tDImg10,
            tDImg11,
        ],
    },
];

// List of nouns
export const nounList: string[] = [
    'Adventurer',
    'Snowboarder',
    'Twin',
    'Weim Owner',
    'Student Helicopter Pilot',
    'Skateboarder',
    'MTBiker',
    'Climber',
    'Surfer',
    'Hiker',
    'Camper',
];
