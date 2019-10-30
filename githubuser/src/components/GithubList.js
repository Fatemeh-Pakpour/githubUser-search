import React from 'react';

    const GithubList = props => {
        // const results = props.data;
        // console.log(results);
        // let githubUsers;
        // if (results.length > 0){
        //     githubUsers = results.map(github => 
        //       <Gif login={github.login} 
        //           key ={github.id}
        //       />
        //   )
        // } else { githubUsers = <NoGif/>}
        
        return (
            <ul>{props.login}</ul>
        )
    }



export default GithubList;