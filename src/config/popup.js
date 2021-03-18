import {LoginForm, SignForm} from "../components/Forms";

const LOGIN = 'login';

export const POPUP_TYPES = {
    LOGIN: LOGIN
}

export const popups = {
    [POPUP_TYPES.LOGIN]: LoginForm,
    registration: SignForm,
}

