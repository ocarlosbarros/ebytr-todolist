import React, { createContext } from 'react';
import getCurrentDate from '../utils';

const defaultValue = {
    task: {
        name:'',
        description:'',
        status: 'pendente',
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
    }
}

const TaskContext = createContext(defaultValue);

export default TaskContext;
