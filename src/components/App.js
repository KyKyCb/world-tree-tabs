import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer, useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';

import asyncChangeData from '../redux/actions/dataAction';
import useCollapseChildren from '../utils/useCollapseChildren/useCollapseChildren';

import './App.css';

import Button from './Button/Button';
import Tree from './Tree/Tree';

function App() {
    const dispatch = useDispatch()
    const state = useSelector( state => state )

    const [isShow, handleStatus] = useCollapseChildren()
    const [toastId, setToastId] = useState('')

    const onClickHandler = ()=>{
        handleStatus()

        if(!state.continents.length && !isShow){
            dispatch(asyncChangeData())
        }
    }

    useEffect(()=>{
        if(state.isLoading){
            setToastId(toast.loading('Waiting data...'))
        }
        if(!state.isLoading && !state.error){
            toast.update(toastId, { render: "All is good", type: "success", isLoading: false, autoClose: 1000 })
        }
        if(state.error){
            toast.update(toastId, { render: "Whoops! Something went wrong!", type: "error", isLoading: false, autoClose: 1000 })
        }

    }, [state.isLoading, state.error])

    return (
        <div className="App">
            <Button
                name={'world'}
                onClick={onClickHandler}
            />

            <Tree
                isShow = {isShow}
            />
            
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

            {state.isLoading && <div id={'overlay'}></div>}
        </div>
    );
}

export default App;
