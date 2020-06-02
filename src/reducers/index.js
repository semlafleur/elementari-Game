import React from 'react';
import { combineReducers } from 'redux';




const changeLevel = (state = undefined, action) => {
    switch (action.type) {
        case 'SIMPLE':
            return action.name;
        case 'MEDIUM':
            return action.name;
        case 'HARD':
            return action.name;

    }
}
const allReducers = combineReducers({
    changeLevel : changeLevel
});

export default allReducers;