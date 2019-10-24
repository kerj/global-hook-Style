export const addToCounter = (store, amount) => {
    const counter = store.state.counter + amount;
    store.setState({ counter });
}

export const increaseAmount = (store, increase) => {
    const amount = store.state.amount + increase;
    store.setState({ amount });
}

export const decreaseAmount = (store, decrease) => {
    const amount = store.state.amount - decrease;
    store.setState({ amount });
}

export const resetAmount = (store, reset) => {
    const amount = reset;
    store.setState({ amount });
}

export const showAdvancedSettings = (store) => {
    const setting = !store.state.setting;
    store.setState({setting});
}