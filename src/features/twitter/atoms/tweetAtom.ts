import {atom} from "recoil";
import { Tweet } from "../../../models/Tweet";

export const userState = atom<string>({
    key: 'userAtom',
    default: '',
});

export const tweetState = atom<Tweet[]>({
    key: 'tweetAtom',
    default: [],
});

export const isLoadingState = atom<boolean>({
    key: 'isLoadingAtom',
    default: false,
});

export const deleteConfirmDialogState = atom<string>({
    key: 'deleteConfirmDialogAtom',
    default: '',
});

export const inputFocusState = atom<boolean>({
    key: 'inputFocusAtom',
    default: false,
});