$(document).ready(() => {
    $("#submit-set-pass").click((e) => {
        e.preventDefault()
        let token =  $('input[name="csrfmiddlewaretoken"]').attr('value')
        let password = $('#password').val()
        console.log(password)
        axios.post('/chat/auth/', {
            "password": password,
            "room_name": roomName,
            "type": "set_pass"
        },{
            headers: {
                'X-CSRFToken': token
            }
        }).then((res) => console.log(res)).catch((err) => {
            console.error(err.response)
            alert(err.response.data.msg)
        })
    })

    $("#submit-get-pass").click((e) => {
        e.preventDefault()
        let token =  $('input[name="csrfmiddlewaretoken"]').attr('value')
        let password = $('#password').val()
        console.log(password)
        axios.post('/chat/auth/', {
                "password": password,
                "room_name": roomName,
                "type": "get_pass"
        }, {
            headers: {
                'X-CSRFToken': token
            }
        }).then(res => {
            console.log(res)
        }).catch(err => alert(err.response.data.msg))
    })
})