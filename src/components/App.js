import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer, useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';

import asyncChangeData from '../redux/actions/dataAction';
import { globalParams } from '../redux/actions/generateAction';
import { switchDataType } from '../redux/actions/switchDataAction';
import useCollapseChildren from '../utils/useCollapseChildren/useCollapseChildren';

import './App.css';

import Button from './Button/Button';
import Form from './Form/Form';
import Tree from './Tree/Tree';

function App() {
    const dispatch = useDispatch()

    const worldData = useSelector( state => state.worldData )
    const genData = useSelector( state => state.genData )
    
    const renderType = useSelector( state => state.renderType.isWorld)

    const [isShow, handleStatus] = useCollapseChildren()

    const onClickHandler = ()=>{

        if(!worldData.continents.length && !isShow && renderType){
            dispatch(asyncChangeData())

            handleStatus()
        }
        if(!renderType){
            dispatch(asyncChangeData())
        }

        handleStatus()
    }

    const changeRenderType = ()=>{
        dispatch(switchDataType())
        if(isShow){
            handleStatus()
        }
    }

    const onSubmitForm = (params)=>{
        dispatch(globalParams(params))
    }

    return (
        <div className="App">
            
            <CSSTransition in={!renderType} timeout={500} className="form-transition">
                <div className='app__form-container'>
                    <Form
                        onSubmit={onSubmitForm}
                    />
                </div>
            </CSSTransition>
            
            <div className="app__switcher-container">
                <div>
                {renderType ?
                    <Button
                        name={'world'}
                        onClick={onClickHandler}
                    />
                    :
                    <Button
                        name={'Generated data'}
                        onClick={onClickHandler}
                    />
                }

                <Tree
                    isShow = {isShow}
                    isWorldRender = {renderType}
                />
                </div>

                <Button
                    name={renderType ? 'Switch to generate data' : 'Switch to world data'}
                    onClick={changeRenderType}
                />
            </div>

            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar ={false}
                newestOnTop={false}
                closeOnClick ={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {worldData.isLoading && <div id={'overlay'}></div>}
        </div>
    );
}

export default App;
