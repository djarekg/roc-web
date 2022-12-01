import { type NavRoute } from './nav-route';

export const navRoutes: NavRoute[] = [
  {
    children: [
      {
        name: 'Prescriber',
        relativeUrl: '/prescriber',
      },
      {
        name: 'Prescriber Delegate',
        relativeUrl: '/prescriber-delegate',
      },
      {
        name: 'Patient',
        relativeUrl: '/patient',
      },
      {
        name: 'Lab',
        relativeUrl: '/lab',
      },
      {
        name: 'Institution',
        relativeUrl: '/institution',
      },
      {
        name: 'Lab User',
        relativeUrl: '/lab-user',
      },
      {
        name: 'Lab Kit Order',
        relativeUrl: 'lab-kit-order',
      },
      {
        name: 'Lab Test',
        relativeUrl: 'lab-test',
      },
    ],
    name: 'Stakeholder',
  },
  {
    name: 'Administrators',
    relativeUrl: '/admin',
  },
];
