import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Step1 from './components/Content/Steps/Step1/Step1';
import Step2 from "./components/Content/Steps/Stap2/Step2";
import Step3 from './components/Content/Steps/Step3/Step3';

const App = () => {
    return (
        <div className="App">
            <React.Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/*'} element={<Navigate to='/main'/>}/>
                    <Route path={'/main'} element={<Main/>}/>
                    <Route path={'/step1'} element={<Step1/>}/>
                    <Route path={'/step2'} element={<Step2/>}/>
                    <Route path={'/step3'} element={<Step3/>}/>
                </Routes>
            </React.Suspense>
        </div>
    );
}

export default App;
