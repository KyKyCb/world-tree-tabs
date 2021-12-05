import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import asyncChangeData from '../redux/actions/dataAction';
import useCollapseChildren from '../utils/useCollapseChildren/useCollapseChildren';

import './App.css';

import Button from './Button/Button';
import Tree from './Tree/Tree';

function App() {
    const dispatch = useDispatch()
    const state = useSelector( state => state )

    const [isShow, handleStatus] = useCollapseChildren()

    const onClickHandler = ()=>{
        handleStatus()

        if(!state.continents.length && !isShow){
            dispatch(asyncChangeData())
        }
    }

    useEffect(()=>{
        if(state.error){
            toast.error('Whoops! Something went wrong!')
        }
    }, [state.error])

    return (
        <div className="App">
            <Button
                name={'world'}
                onClick={onClickHandler}
            />
            {isShow && <Tree/>}
            
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar ={true}
                newestOnTop={false}
                closeOnClick ={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
