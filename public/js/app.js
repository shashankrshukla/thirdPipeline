const weatherForm = document.querySelector('button')
// const search = document.querySelector('input')
// const messageOne = document.querySelector('#message-1')
// const messageTwo = document.querySelector('#message-2')



const fetching = (location) => {
    //const location = search.value


    const messageOne = document.querySelector('#message-1')
    const messageTwo = document.querySelector('#message-2')

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {

        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast

                //let stateObj = { id: "100" };
                window.history.replaceState(null,
                    "", "?address=" + location);

            }
        })
    })
}


const searchAddress = (new URLSearchParams(window.location.search)).get('address')

if (searchAddress) {
        fetching(searchAddress)
}

weatherForm.addEventListener('click', () => {
    //e.preventDefault()

    const search = document.querySelector('input')
    fetching(search.value)
})


