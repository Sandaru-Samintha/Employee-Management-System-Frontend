function saveEmployee(){
    let name=$('#exampleFormControlInput2').val(); //get value from input field
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();
    //console.log(name);


    //send the http request in to backend using ejections
    $.ajax( {
        method:"POST",
        contentType:"application/json" , //content tye we communicate with json type
        url:"http://localhost:8080/api/v1/employee/saveEmployee", //this is the url of when pass the data in backend
        async:true,
        data:JSON.stringify( {   //when pass the values from to the backend getting frontend
            "empID":" ",
            "empName":name,
            "empAddress":address,
            "empMNumber":number
        }),
        success:function(data){
        alert("Successfully saved employee")
        },
        error:function(xhr,exception){
            alert("Error")
        }


    })
}