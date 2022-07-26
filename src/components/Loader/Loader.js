import {
    LoaderContainer,
    LoaderSpinner,
} from './Loader.styled';
import {GiSpinningBlades} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

export default function Loader() {
    return (
        <IconContext.Provider value={{color: '#de14b9'}}>
            <div role='alert'>
                <LoaderContainer>
                    <LoaderSpinner>
                        <GiSpinningBlades size='90' />
                    </LoaderSpinner>
                    Loading ...
                </LoaderContainer>
            </div>
        </IconContext.Provider>
    )
};