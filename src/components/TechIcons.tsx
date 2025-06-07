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
    SiGo,
    SiSqlite,
    SiPostgresql,
    SiNextdotjs,
    SiAndroid,
    SiIos,
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
                    <div key={tech} className='group relative'>
                        <SiReact
                            className={`${fontSize} font-bold text-sky-500`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-sky-500 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Redux' ? (
                    <div key={tech} className='group relative'>
                        <SiRedux
                            className={`${fontSize} font-bold text-violet-400`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-violet-400 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'TailwindCSS' ? (
                    <div key={tech} className='group relative'>
                        <SiTailwindcss
                            className={`${fontSize} font-bold text-sky-300`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-sky-300 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'TypeScript' ? (
                    <div key={tech} className='group relative'>
                        <SiTypescript
                            className={`${fontSize} font-bold text-blue-600`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-blue-600 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Javascript' ? (
                    <div key={tech} className='group relative'>
                        <SiJavascript
                            className={`${fontSize} font-bold text-yellow-300`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-yellow-300 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'MongoDB' ? (
                    <div key={tech} className='group relative'>
                        <SiMongodb
                            className={`${fontSize} font-bold text-green-500`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-green-500 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'AmazonDynamoDB' ? (
                    <div key={tech} className='group relative'>
                        <SiAmazondynamodb
                            className={`${fontSize} font-bold text-orange-500`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-orange-500 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Stripe' ? (
                    <div key={tech} className='group relative'>
                        <SiStripe
                            className={`${fontSize} font-bold text-purple-400`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-purple-400 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Paypal' ? (
                    <div key={tech} className='group relative'>
                        <SiPaypal
                            className={`${fontSize} font-bold text-sky-500`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-sky-500 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Sass' ? (
                    <div key={tech} className='group relative'>
                        <SiSass
                            className={`${fontSize} font-bold text-pink-300`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-pink-300 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Node' ? (
                    <div key={tech} className='group relative'>
                        <SiNodedotjs
                            className={`${fontSize} font-bold text-green-700`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-green-700 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Express' ? (
                    <div key={tech} className='group relative'>
                        <SiExpress
                            className={`${fontSize} font-bold text-green-900`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-green-900 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'GraphQL' ? (
                    <div key={tech} className='group relative'>
                        <SiGraphql
                            className={`${fontSize} font-bold text-pink-600`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-pink-600 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>) : tech === 'Go' ? (
                        <div key={tech} className='group relative'>
                            <SiGo
                                className={`${fontSize} font-bold text-blue-600`}
                            />
                            <span
                                className='group-hover:opacity-100 top-0 transition-opacity bg-blue-600 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                            >
                                {tech}
                            </span>
                        </div>
                    
                ) : tech === 'SQLite' ? (
                    <div key={tech} className='group relative'>
                        <SiSqlite
                            className={`${fontSize} font-bold text-purple-600`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity  bg-purple-600 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Postgres' ? (
                    <div key={tech} className='group relative'>
                        <SiPostgresql
                            className={`${fontSize} font-bold text-blue-600`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-blue-600 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>  
                ) : tech === 'NextJS' ? (
                    <div key={tech} className='group relative'>
                        <SiNextdotjs
                            className={`${fontSize} font-bold text-green-600`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-green-600 px-1 text-sm lg:text-lg text-black rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'Android' ? (
                    <div key={tech} className='group relative'>
                        <SiAndroid
                            className={`${fontSize} font-bold text-green-500`}
                        />
                        <span
                            className='group-hover:opacity-100 top-0 transition-opacity bg-green-500 px-1 text-sm lg:text-lg text-black rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'
                        >
                            {tech}
                        </span>
                    </div>
                ) : tech === 'iOS' ? (
                    <div key={tech} className='group relative'>
                        <SiIos
                            className={`${fontSize} font-bold text-blue-300 `}
                        />
                        <span
                            className='group-hover:opacity-100 transition-opacity top-0 bg-blue-300 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
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
