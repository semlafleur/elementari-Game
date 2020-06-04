import React from 'react';
import { combineReducers } from 'redux';




const changeLevel = (state = undefined, action) => {
    switch (action.type) {
        case 'SETDIFFICULT':
            return action.value;
    }
};
const allReducers = combineReducers({
    changeLevel : changeLevel
});

export default allReducers;
