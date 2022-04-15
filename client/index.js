console.log('Hell oo');

axios.get('http://localhost:3000/data')
    .then(resp=>{
        console.log(resp.data);
    })