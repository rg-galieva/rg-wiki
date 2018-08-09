const Human = (state) => ({
    getGreetings: () => console.log("I am Human. My name is:", state.name + " " + state.surname)
})

const Robot = (state) => ({
    getModel: () => console.log("I am Robot. My model is:", state.model)
});


const Posthuman = ({superPowers}) => ({
    getSuperPowers: () => console.log("I have super powers: ", superPowers)
});

const kate = () => {
    const state = {
        name: 'Kate',
        model: 'XR656',
        surname: 'Perry'
    };

    return Object.assign({}, Human(state), Robot(state))
};

kate().getGreetings();
kate().getModel();

