import * as React from 'react';
import Nav from './components/Nav';
import About from './sections/About';
import Landing from './sections/Landing';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import SectionTitle from './components/SectionTitle';

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
        <main className='bg-slate-50'>
            <Nav setScroll={setScroll} />
            <Landing fullName={fullName} />
            <SectionTitle title={'WORK.'} />
            <Portfolio setScroll={setScroll} />
            <SectionTitle title={'ABOUT ME.'} />
            <About />
            <SectionTitle title={'CONTACT ME.'} />
            <Contact />
        </main>
    );
}

export default App;
