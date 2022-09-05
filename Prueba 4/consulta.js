fetch('https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=spyder',{
    method: 'GET',
    headers:{
		'Content-Type' : 'application/json'
	}
}).catch((error) =>{
    console.error(error)
})
.then((response)=>{
    console.log(response)
})