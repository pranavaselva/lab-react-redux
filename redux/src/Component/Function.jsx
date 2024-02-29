


function Function(state= 0, action){


    switch(action.type){

        case "DECREMENT" :
            if(state > 0){
                return state - 1;
            } else{
                return state;
            }

        case "INCREMENT" :
            return state + 1;  
            
        default :
            return state;    

    }
}

export default Function;