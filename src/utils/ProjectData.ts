import radiqlImg1 from '/Radiql/Images/radiQL_Logo2.webp';
import radiqlImg2 from '/Radiql/Images/about1.webp';
import radiqlImg3 from '/Radiql/Images/readme-logo.webp';
import radiqlVid1 from '/Radiql/Videos/Radiql1-1.webm';
import radiqlVid2 from '/Radiql/Videos/Radiql1-2.webm';
import radiqlVid3 from '/Radiql/Videos/Radiql1-3.webm';
import radiqlVid4 from '/Radiql/Videos/Radiql1-4.webm';
import radiqlVid5 from '/Radiql/Videos/Radiql1-5.webm';
import ttlogo from '/TrailTasks/logo.png';
import tt0 from '/TrailTasks/bg.png';
import tt1 from '/TrailTasks/1.jpg';
import tt2 from '/TrailTasks/2.jpg';
import tt3 from '/TrailTasks/3.jpg';
import tt4 from '/TrailTasks/4.jpg';
import tt5 from '/TrailTasks/5.jpg';
import tt6 from '/TrailTasks/6.jpg';
import tt7 from '/TrailTasks/7.jpg';
import tt8 from '/TrailTasks/8.jpg';
import tt9 from '/TrailTasks/9.jpg';
import tt10 from '/TrailTasks/10.jpg';
import tt11 from '/TrailTasks/11.jpg';
import tt12 from '/TrailTasks/12.jpg';
import tt13 from '/TrailTasks/13.jpg';
import tt14 from '/TrailTasks/14.jpg';

import ew1 from '/EastWestSolutions/bg.png';

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
        title: 'Trail Tasks',
        description: 'Trail Tasks App transforms your daily productivity into a rewarding virtual hiking adventure of all 63 National Parks using the proven Pomodoro technique',
        website: 'https://trailtasks.app',
        github: 'https://github.com/JordanOBL',
        technologies: [
            'React',
            'Android',
            'iOS',
            'TypeScript',
            'Go',
            'SQLite',
            'Postgres',
            'Node',
        ],
        media: [
            ttlogo,
            tt0,
            tt1,
            tt2,
            tt3,
            tt4,
            tt5,
            tt6,
            tt7,
            tt8,
            tt9,
            tt10,
            tt11,
            tt12,
            tt13,
            tt14,
            
        ],
    },
    {
        title: 'radiQL',
        description: 'GraphQL Migration Aid & Visualizer',
        website: 'https://radiql.herokuapp.com',
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
        article:
            'https://medium.com/@rjiang12/radiql-the-one-step-solution-for-setting-up-graphql-on-a-postgres-database-3b622ba2e6ec',
        media: [
            radiqlImg1,
            radiqlImg2,
            radiqlImg3,
            radiqlVid1,
            radiqlVid2,
            radiqlVid3,
            radiqlVid4,
            radiqlVid5,
        ],
    },
    {
        title: 'EastWest Solutions',
        description: 'Strategic consulting for business, leadership, and career growth.',
        website: 'https://eastwestsolutions.us',
        technologies: [
            'TypeScript',
            'React',
            'NextJS',
            'TailwindCSS',
            'Stripe',
        ],
        github: 'https://github.com/JordanOBL',
        media: [
            ew1, 
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
