import * as React from 'react';
import * as Scroll from 'react-scroll';
import Nav from './components/Nav';
import About from './sections/About';
import Landing from './sections/Landing';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import SectionTitle from './components/SectionTitle';

//react scroll elements
const Element = Scroll.Element;

//Name state
const fullName = {
    first: 'Jordan',
    last: 'Williams',
};

function App() {
    //sett scroll behavior when menu is open on mobile or tablet
    const body: HTMLBodyElement = document.querySelector('body')!;

    const [scroll, setScroll] = React.useState<boolean>(true);
    scroll === true
        ? (body.style.overflow = 'scroll')
        : (body.style.overflow = 'hidden');

    return (
        <main className='bg-slate-50 w-screen'>
            <Nav setScroll={setScroll} />
            <Element name='HOME.'>
                <Landing fullName={fullName} />
            </Element>

            <Element name='WORK.'>
                <SectionTitle title={'WORK'} />
                <Portfolio setScroll={setScroll} />
            </Element>
            <Element name='ABOUT.'>
                <SectionTitle title={'ABOUT'} />
                <About />
            </Element>
            <Element name='CONTACT.'>
                <SectionTitle title={'CONTACT'} />
                <Contact />
            </Element>
        </main>
    );
}

export default App;
