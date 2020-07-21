const INITIAL_STATE = {
  experiences: [
    {
      where: 'Budapest',
      what: 'Software developer',
      company: 'Epam Systems',
      when: '2018 DEC - 2020 MAR',
      skills: [
        'ReactJs',
        'JavaScript',
        'Java',
        'Figma',
        'GIT',
        'Jira',
        'Selenium',
        'Test Automation',
        'Agile',
        'CI / CD',
      ],
    },
    {
      where: 'Budapest',
      what: 'Software engineer in test',
      company: 'TND Tech',
      when: '2017 JUN - 2018 JUN',
      skills: [
        'JavaScript',
        'Java',
        'Selenium',
        'UI Testing',
        'Manual Testing',
        'Test Automation',
      ],
    },
  ],
};

const experienceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default experienceReducer;
