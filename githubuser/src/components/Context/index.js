import React from 'react';
import GithubList from '../GithubList';

// this is setup our provider and consumer
const GithubContext = React.createContext();

const Provider = GithubContext.Provider;
const Consumer = GithubContext.Consumer;