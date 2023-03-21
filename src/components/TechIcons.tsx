import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiRedux,
    SiJavascript,
    SiMongodb,
    SiAmazondynamodb,
    SiStripe,
    SiPaypal,
    SiSass,
    SiNodedotjs,
    SiExpress,
    SiGraphql,
} from 'react-icons/si';

interface Props {
    techArray: string[];
    fontSize: string;
}

const TechIcons = ({ techArray, fontSize }: Props) => {
    return (
        <>
            {techArray.map((tech) => {
                return tech === 'React' ? (
                    <div key={tech} className='group'>
                        <SiReact
                            className={`${fontSize} font-bold text-sky-500`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-sky-500 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Redux' ? (
                    <div key={tech} className='group'>
                        <SiRedux
                            className={`${fontSize} font-bold text-violet-400`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-violet-400 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'TailwindCSS' ? (
                    <div key={tech} className='group'>
                        <SiTailwindcss
                            className={`${fontSize} font-bold text-sky-300`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-sky-300 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'TypeScript' ? (
                    <div key={tech} className='group'>
                        <SiTypescript
                            className={`${fontSize} font-bold text-blue-600`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-blue-600 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Javascript' ? (
                    <div key={tech} className='group'>
                        <SiJavascript
                            className={`${fontSize} font-bold text-yellow-300`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-yellow-300 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'MongoDB' ? (
                    <div key={tech} className='group'>
                        <SiMongodb
                            className={`${fontSize} font-bold text-green-500`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-green-500 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'AmazonDynamoDB' ? (
                    <div key={tech} className='group'>
                        <SiAmazondynamodb
                            className={`${fontSize} font-bold text-orange-500`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-orange-500 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Stripe' ? (
                    <div key={tech} className='group'>
                        <SiStripe
                            className={`${fontSize} font-bold text-purple-400`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-purple-400 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Paypal' ? (
                    <div key={tech} className='group'>
                        <SiPaypal
                            className={`${fontSize} font-bold text-sky-500`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-sky-500 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Sass' ? (
                    <div key={tech} className='group'>
                        <SiSass
                            className={`${fontSize} font-bold text-pink-300`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-pink-300 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Node' ? (
                    <div key={tech} className='group'>
                        <SiNodedotjs
                            className={`${fontSize} font-bold text-green-700`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-green-700 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Express' ? (
                    <div key={tech} className='group'>
                        <SiExpress
                            className={`${fontSize} font-bold text-green-900`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-green-900 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'GraphQL' ? (
                    <div key={tech} className='group'>
                        <SiGraphql
                            className={`${fontSize} font-bold text-pink-600`}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity bg-pink-600 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : (
                    <div key={tech}></div>
                );
            })}
        </>
    );
};

export default TechIcons;
