

import React, { useEffect, useState} from 'react';
import "../styles/components/my-teams.css";
import ElementListComponent from "./ElementListComponent";
import Title from "./Title";
import { Link } from "react-router-dom";

import { useLocalStorage } from './useLocalStorage';

interface IMyProps {
  location: any,
}

const MyTeams: React.FC<IMyProps> = (props: IMyProps) => {
  const [state, setState] = useLocalStorage('storage30', ' ');

/* 
  const [x, setX] = useState('');
  const [split, setSplit] = useState([]);

  const [split1, setSplit1] = useState('');
  const [split1x, setSplit1x] = useState([]);
  const [split1x1, setSplit1x1] = useState('');

  const [split2, setSplit2] = useState('');
  const [split2x, setSplit2x] = useState([]);
  const [split2x2, setSplit2x2] = useState('');
  
 */

  //let x = '';
  let split = [];
  let split1 = '';
  let split1x = [];
  const [split1x1, setSplit1x1] = useState('');
  let split2 = '';
  let split2x = [];
  const [split2x2, setSplit2x2] = useState('');
  const [x, setX] = useState('');
  
  const addOnArray = (loc :any , stat :any) =>{
  setX(loc+'&'+state) ;
  console.log("#################################" + x);
  console.log("777777777777777777777777777777777" + loc);
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" + stat);
  setState(loc);
}

/* 
useEffect(() => {
  console.log(state);
  console.log((x.split("&")));
  setSplit(x.split("&") as any); //   divido o grande array  e chamo de array 'split'                   //split = x.split("&");
  console.log(split[0]);
  setSplit1(split[0] as string);          //pego a infomações do time 1  e converto para string jogando no   'split1'   //split1 = split[0].toString();
  console.log(setSplit1);
  setSplit1x(split1.split("/") as any);                                                                        //split1x = split1.split("/");
  setSplit1x1(split1x[0] as any);                                                                       //split1x1 = split1x[0].toString();
  
  setSplit2(split[1] as any);                     //split2 = split[0].toString();
  setSplit2x(split2.split("/") as any);          //split2x = split2.split("/");
  setSplit2x2(split2x[0] as any);                //split2x2 = split2x[0].toString();

}, [state ]);
 */

useEffect(() => {
  //console.log(state);
  //console.log((x.split("&")));
  split = x.split("&");
  console.log(split[0]);
  console.log(split[1]);
  split1 = split[0].toString();
  console.log(split1);
  split1x = split1.split("/");
  console.log(split1x);
  //setSplit1x1(split1x[0].toString());
  //varrer array da linha de cima aqui
                const results = split1x;
                for (var i = 0; i < results.length-6; i++) {
                  if(results.length < 3){

                  }else{
                    console.log(split1x[i+1]);
                    setSplit1x1(split1x[i+1].toString());
                    
                  }
                }
  console.log(split1x1);
  

  if(split.length>1){
    split2 = split[1].toString();
    split2x = split2.split("/");
    setSplit2x2(split2x[0].toString());
                  const results2 = split2x;
                  for (var i = 0; i < results2.length-6; i++) {
                    if(results2.length < 3){
  
                    }else{
                      console.log(split2x[i+1]);
                      setSplit2x2(split2x[i+1].toString());
                      
                    }
                  }
  }
  addOnArray(props.location , state)

}, [state ]);

  return (

<div className="my-teams" >
      <div className="titles">
                <div className='App'>
                  <button className="displayBlock" onClick={() => (addOnArray(props.location , state))}>
                    Change state!
                  </button>
                </div>
        <Title myTitle="My Teams" />
        <Link to="/teams/create" className="create-team-plus">
          +
        </Link>
      </div>
      <div className="my-teams-list">
        <ElementListComponent name={split1x1} description={''}/>
        <ElementListComponent name={split2x2} description={''}/>

      </div>
    </div>



  );
};

export default MyTeams;


/*
import React, {Component, useReducer, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStorageState } from 'react-storage-hooks';
import "../styles/components/my-teams.css";
import ElementListComponent from "./ElementListComponent";
import Title from "./Title";


interface IMyProps {
  location: any,
}

const MyTeams: React.FC<IMyProps> = (props: IMyProps) => {
  const { goBack } = useHistory();

  const LoadAllTeamsAndAddNew = (props :any) => {
    const [books, dispatch] = useReducer(bookReducer, [], () =>{
      const localData = localStorage.getItem('books');
      return localData ? JSON.parse(localData) : []
    });
    useEffect(()=>{
      localStorage.setItem('books', JSON.stringfy(books))
    },[books]);
    return(
      <LoadAllTeamsAndAddNew.Provider value={{books, dispatch}}>
        {props.children}
        </LoadAllTeamsAndAddNew.Provider>
    )

  }



  return (
    <div className="my-teams">
      <div className="titles">
        <Title myTitle="My Teams" />
        <Link to="/teams/create" className="create-team-plus">
          +
        </Link>
      </div>
      <div className="my-teams-list">
        <LoadAllTeamsAndAddNew location={props.location} />
      </div>
    </div>
  );
};

export default MyTeams;
*/