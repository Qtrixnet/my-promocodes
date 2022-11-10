import {setContainerViewportAction} from "../reducers/container-query";

export const setContainerViewport = status => dispatch => dispatch(setContainerViewportAction(status));
