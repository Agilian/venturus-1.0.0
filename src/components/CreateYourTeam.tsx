import React, { useEffect, useState, memo  } from "react";
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Dustbin } from './Dustbin';
import { DustbinInside } from './DustbinInside';

import { Box } from './Box';

import "../styles/components/create-your-team.css";
import Title from "./Title";
import Search from "./Search";

import ReactDOM from 'react-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const CreateYourTeam: React.FC =  memo(function Container() {

  function checkOnline(url:any, error:any, ok:any) {
    console.log(url);
    try {
        var scriptElem = document.createElement('script');
        scriptElem.type = 'text/javascript';
        scriptElem.onerror = function(){error();};
        scriptElem.onload = function(){ok();};
        scriptElem.src = url;
        document.getElementsByTagName("body")[0].appendChild(scriptElem);
    } catch(err) {
        error(err);
    }
  };

  const [site, setSite] = useState("http://www.");
  const [validation, setValidation] = useState("");
  useEffect(() => {
    setValidation(validation);
  }, [validation]);
  
  return (
    <div className="create-your-team">

      <Formik
       initialValues={{ teamName: '', sitewww:'http://www.', site:'', validation: '', type: '', description1:''}}
       validate={values => {
         const errors = { teamName: '',  sitewww:'', site:'',validation: '', type: '',  description1:'' };
         if (values.teamName=== '') {
           errors.teamName = 'Required';
         } 
         if(values.site ===''){
          errors.site = 'Required';
         }else{
           let sitePing = values.sitewww.concat(values.site);
           console.log(sitePing);
           checkOnline(sitePing, function() { setValidation('site fora do ar') }, function(){  setValidation('site validado') });
         }
         if(values.sitewww ===''){
          errors.sitewww = 'Required';
         }
         if(values.validation ===''){
          errors.validation = 'Required';
         }
         if(values.type ===''){
          errors.type = 'Required';
         }
         if(values.description1 ===''){
          errors.description1 = 'Required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        console.log("its working2");
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ values }) => (
          <Form>
            <Title myTitle="Create Your Team" />
            <div className="div1">
              <div className="div2">TEAM INFORMATION</div>
              <div className="grid-container">
                <div className="grid-item">
                  <label>
                    <div>Team Name:</div>
                    <Field type="text" name="teamName" className="input" id="teamName"/>
                    <ErrorMessage name="teamName" component="div" />
                  </label>
                </div>
                <div className="grid-item">
                  <label>
                    <div>Team Website:</div>
                    <Field type="text" name="sitewww" className="input" id="sitewww"/>
                    <Field type="text" name="site" className="input" id="site"/>
                    <Field type="text" name="validation" className="input" value={validation} id="validation"/>
                  </label>
                </div>
                <div className="grid-item">
                  <label>
                    <div>Description:</div>
                    <Field type="text" name="description1" className="input" id="input-description"/>
                    <ErrorMessage name="description1" component="div" />
                  </label>
                </div>
                <div className="grid-item">
                  <div>Team Type:</div>
                  <label> <Field type="radio" name="type" value="Real" /> Real </label>
                  <label> <Field type="radio" name="type" value="Fantasy" /> Fantasy </label>
                <div>
                  <label>
                    <div>Tags:</div>
                    <textarea className="input" id="input-tags" name="tag" > </textarea>
                  </label>
                </div>
                </div>
          </div>

          <div className="div2">CONFIGURE SQUAD</div>

          <div className="grid-container2">
            <div className="grid-item2">
              <label>Formation:</label>
                <select id="formation" name="formation" >
                  <option value="3223">3 - 2 - 2 - 3</option>
                  <option value="3231">3 - 2 - 3 - 1</option>
                  <option value="343">3 - 4 - 3</option>
                  <option value="352">3 - 5 - 2</option>

                  <option value="4231">4 - 2 - 3 - 1</option>
                  <option value="4311">4 - 3 - 1 - 1</option>
                  <option value="432">4 - 3 - 2</option>
                  <option value="442">4 - 4 - 2</option>
                  <option value="451">4 - 5 - 1</option>
                  <option value="541">5 - 4 -1</option>
                </select>
            </div>
            <DndProvider backend={HTML5Backend}>
            <div className="grid-item2">
              <label>
                <div>Search Players:</div>
                <Search />
                <div className="App">
                  <div style={{ overflow: 'hidden', clear: 'both' }}>
                  </div>
                </div>
              </label>
            </div>

            <div className="grid-item2">
              <div  className="fild" style={{ overflow: 'hidden', clear: 'both' }}>
              <Dustbin />
              

              </div>
              <li>
                <ul>teste1</ul>
                <ul>teste2</ul>
                <ul>teste3</ul>
                <ul>teste1</ul>
                <DustbinInside />
              </li>
            </div>
            </DndProvider>
            <div className="grid-item2">
              <div className="jogador">

              </div>
            </div>
            <div id="divBtSave" className="grid-item2">
              <button type="submit" onClick={validateForm} id="btSave">Save</button>
            </div>
          </div>
        </div>
        </Form>
       )}
     </Formik>

     

    </div>
    
  );
});

function ValidateLinkForCreate(props :any) {
  if (  props.n==='' || props.s==='' || props.d==='' || props.t==='' || props.f==='') {
    return <Link to ={"/"} > Complete o Formulário  </Link>
  }else{
    return <Link to ={"/"+props.n+"/"  + props.s + "/" + props.d + "/" + props.t + "/" + props.f + "/"} > link  </Link>
  }
}

const validateForm = () => {
  console.log("its working");
}

export default CreateYourTeam;