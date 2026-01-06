getEmployees();

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
        alert("Successfully saved employee");
        getEmployees();
        },
        error:function(xhr,exception){
            alert("Error");
        }
    });
}

function updateEmployee(){
    let empID=$('#exampleFormControlInput1').val();
    let name=$('#exampleFormControlInput2').val(); //get value from input field
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();
    //console.log(name);

    //send the http request in to backend using ejections
    $.ajax( {
        method:"PUT",
        contentType:"application/json" , //content tye we communicate with json type
        url:"http://localhost:8080/api/v1/employee/updateEmployee", //this is the url of when pass the data in backend
        async:true,
        data:JSON.stringify( {   //when pass the values from to the backend getting frontend
            "empID":empID,
            "empName":name,
            "empAddress":address,
            "empMNumber":number
        }),
        success:function(data){
        alert("Successfully updated employee");
        getEmployees();
        },
        error:function(xhr,exception){
            alert("Error");
        }
    });
}

function deleteEmployee(){
    let empID=$('#exampleFormControlInput1').val();
    //send the http request in to backend using ejections we can use ajax we import in j query library in js folder (jquery-3.7.1.js)
    $.ajax( {
        method:"DELETE",
        contentType:"application/json" , //content tye we communicate with json type
        url:"http://localhost:8080/api/v1/employee/deleteEmployee/"+empID, //this is the url of when pass the data in backend
        async:true,
        success:function(data){
        alert("Successfully deleted employee"); // Fixed alert message
        getEmployees();
        },
        error:function(xhr,exception){
            alert("Error");
        }
    });
}

function getEmployees(){
    //send the http request in to backend using ejections
    $.ajax( {
        method:"GET",
        contentType:"application/json" , //content tye we communicate with json type
        url:"http://localhost:8080/api/v1/employee/getAllEmployee", //this is the url of when pass the data in backend
        async:true,
        success:function(data){
        if(data.code==="00") //when code 00 means the message is success response in backend
        {
            $('#empTable').empty(); //first empTable should be clear because some data in the table || මුලින්ම table එක clear  කරගෙන ඉන්න ඕනේ මොනාහරි data තියනවනම් ඒව අයින් කරන්න ඕනේ
            for(let emp of data.content){  //data.content  කියල ගහන්නේ අපි එවන response එකේ content එකේ තමා employee ගේ details ටික තියෙන්නේ
                 let empID = emp.empID;
                 let name = emp.empName;
                 let address = emp.empAddress;
                 let number = emp.empMNumber;

                 //then put the each data in the row
                 // Fixed: Added proper backticks for template literal and corrected table structure
                 var row = `<tr>
                               <td>${empID}</td>
                               <td>${name}</td>
                               <td>${address}</td>
                               <td>${number}</td>
                            </tr>`;
                 // Fixed: Appending to correct table body selector
                 $('#empTable').append(row);
            }
        }
        },
        error:function(xhr,exception){
            alert("Error");
        }
    });
}

//අපේ table එකෙ row click කරන කොට ඒ details  අදාල  id එක එක්ක form එකට වැටෙන විදිහට හදාගන්න function  එක
$(document).ready(function(){
    $(document).on('click','#empTable tr', function (){
        var col0 =$(this).find('td:eq(0)').text();
        var col1 =$(this).find('td:eq(1)').text();
        var col2 =$(this).find('td:eq(2)').text();
        var col3 =$(this).find('td:eq(3)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);
    })


})

