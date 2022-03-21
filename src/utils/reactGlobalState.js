import {createGlobalState} from 'react-hooks-global-state';

const initialStates= {
    click:false,
}

export const {useGlobalState}=createGlobalState(initialStates);