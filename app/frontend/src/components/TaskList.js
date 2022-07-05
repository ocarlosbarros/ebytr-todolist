import React from 'react';

function TaskList({ tasks }){
    return(
        <ul>
            { tasks.map((item, index ) => <li key={`${item.name+index}`}>{ item.name }</li>)}
        </ul>
    );
}

export default TaskList;