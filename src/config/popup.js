import {LoginForm, SignForm} from "../components/Forms";

const LOGIN = 'login';
const REGISTRATION = 'registration';

export const POPUP_TYPES = {
    LOGIN: LOGIN,
    REGISTRATION: REGISTRATION
};

export const popups = {
    [POPUP_TYPES.LOGIN]: LoginForm,
    [POPUP_TYPES.REGISTRATION]: SignForm,
};

