import radiqlImg1 from '/Radiql/Images/radiQL_Logo2.png';
import radiqlImg2 from '/Radiql/Images/about1.png';
import radiqlImg3 from '/Radiql/Images/readme-logo.png';
import radiqlImg4 from '/Radiql/Images/1-1.gif';
import radiqlImg5 from '/Radiql/Images/1-2.gif';
import radiqlImg6 from '/Radiql/Images/1-3.gif';
import radiqlImg7 from '/Radiql/Images/2-1.gif';
import radiqlImg8 from '/Radiql/Images/2-2.gif';
import tDImg1 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.55.19 PM.png';
import tDImg2 from '/TwinsDimension/Images/Screen Shot 2023-03-19 at 2.03.05 AM.png';
import tDImg3 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.49.49 PM.png';
import tDImg4 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.50.15 PM.png';
import tDImg5 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.52.21 PM.png';
import tDImg6 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.52.42 PM.png';
import tDImg7 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.53.39 PM.png';
import tDImg8 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.53.52 PM.png';
import tDImg9 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.54.09 PM.png';
import tDImg10 from '/TwinsDimension/Images/Screen Shot 2023-03-18 at 8.55.02 PM.png';
import tDImg11 from '/TwinsDimension/Images/Screen Shot 2023-03-19 at 2.04.07 AM.png';

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
            radiqlImg4,
            radiqlImg5,
            radiqlImg6,
            radiqlImg7,
            radiqlImg8,
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
