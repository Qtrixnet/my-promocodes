import './app.scss';
import { useEffect } from 'react';
import { useContainerQuery } from 'react-container-query';
import breakPoints from '../../utils/break-points';
import { useDispatch } from 'react-redux';
import { setContainerViewport } from '../../services/actions/container-query';
import Header from '../header/header';
import TabsList from '../tabs-list/tabs-list';
import NotesList from '../notes-list/notes-list';
import Instruction from '../instruction/instruction';
import StepCard from '../step-card/step-card';
import StepsList from '../steps-list/steps-list';
import cn from 'classnames';
import RedirectBanner from '../redirect-banner/redirect-banner';

function App() {
    const dispatch = useDispatch();
    const [viewport, containerRef] = useContainerQuery(breakPoints);

    useEffect(() => {
        dispatch(setContainerViewport(viewport));
    }, [viewport, dispatch])

    return (
        <div className={`app app_${cn(viewport)}`} ref={containerRef}>
            <Header/>
            <TabsList/>
            <StepsList/>
            <NotesList/>
            <Instruction/>
            <RedirectBanner/>
        </div>
    );
}

export default App;
