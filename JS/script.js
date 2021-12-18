new Choicses('#model', {
    searchEnabled: false,
    itemSelectText: ''
})

new Choices('#color', {
    searchEnabled: false,
    itemSelectText: ''
})

$('#form-order').on('submit', function(event){
    event.preventDefault();
    

    $.ajax ({
        url:'https://jsonplaceholder.typicode.com/posts', 
        method:'POST',
        dataType:'html',
        data: $('#form-order').serailize(),
        succsess:function(data){
            console.log(data);
            $('#form-order').html('Спасибо! Ваша заявка успешно отправлена!');
            $('#form-submit').hide();
        }
    })
})