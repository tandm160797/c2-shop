import { createSelector } from 'reselect';

const i18nState = (state) => state.i18n;

const getLanguage = createSelector(i18nState, (i18n) => i18n.language);

export { getLanguage };
