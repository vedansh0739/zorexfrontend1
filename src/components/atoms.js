// src/atoms.js
import { atom } from 'recoil';

export const selectedNamesState = atom({
  key: 'selectedNamesState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const pdfUrlsState = atom({
  key: 'pdfUrlsState',
  default: [],
});

export const currentPdfState = atom({
  key: 'currentPdfState',
  default: null,
});
