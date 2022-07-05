import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import { requestApi } from '../services/serviceApi';

function OverView(){
    const [taskList, setTaskList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const requestTask = async () => {
            const tasks = await requestApi();
            setTaskList(tasks);
            setLoading(false);
        }
        requestTask()
            .catch(console.error);
    }, []);

 if(isLoading) return <p>Loading</p> 

 return (
    <>
    <Header />
    <TaskList tasks={taskList} /> 
    </>
 )   
}

export default OverView;