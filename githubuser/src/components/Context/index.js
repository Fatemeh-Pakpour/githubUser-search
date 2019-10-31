import React from 'react';
import GithubList from '../GithubList';

// this is setup our provider and consumer
const GithubContext = React.createContext();

export const Provider = GithubContext.Provider;
export const Consumer = GithubContext.Consumer;