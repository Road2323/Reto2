// SCRIPT ORTHESIS //

consultarOrthesis();
function crearOrthesis(){
    event.preventDefault();
    const json = {};
    json["id"] = parseInt(document.getElementById("orthesisId").value);
    json["brand"] = document.getElementById("orthesisBrand").value;
    json["model"] = parseInt(document.getElementById("orthesisModel").value);
    json["category_id"] = parseInt(document.getElementById("orthesisCategory_Id").value);
    json["name"] = document.getElementById("orthesisName").value;
    console.log(json)

    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/orthesis/orthesis',
        data: json,
        type: "POST",
        dataType: 'json',
        complete : function(){
            alert("Orthesis Created");
            limpiarCampos();
            location.reload();
        }
    })
}

function limpiarCampos(){
    document.getElementById("orthesisId").value = '';
    document.getElementById("orthesisBrand").value = '';
    document.getElementById("orthesisModel").value = '';
    document.getElementById("orthesisCategory_Id").value = '';
    document.getElementById("orthesisName").value = '';
}

function seleccionarOrthesis(elemento){
    orthesis = elemento.parentElement.parentElement;
    document.getElementById("orthesisId").value = orthesis.cells[0].innerHTML; 
    document.getElementById("orthesisBrand").value = orthesis.cells[1].innerHTML;
    document.getElementById("orthesisModel").value = orthesis.cells[2].innerHTML;
    document.getElementById("orthesisCategory_Id").value = orthesis.cells[3].innerHTML;
    document.getElementById("orthesisName").value = orthesis.cells[4].innerHTML;
}

function consultarOrthesis(){
    const table = document.getElementById("listaOrthesis").getElementsByTagName('tbody')[0];
    console.log(table)
    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/orthesis/orthesis',
        data: null,
        type: "GET",
        dataType: 'json',
        success: function(data){
            data.items.map( item => {
                const newOrthesis = table.insertRow();
                newOrthesis.insertCell(0).innerHTML = item.id;
                newOrthesis.insertCell(1).innerHTML = item.brand;
                newOrthesis.insertCell(2).innerHTML = item.model;
                newOrthesis.insertCell(3).innerHTML = item.category_id;
                newOrthesis.insertCell(4).innerHTML = item.name;
                newOrthesis.insertCell(5).innerHTML = `
                <button onClick="seleccionarOrthesis(this)">Select</button>
                <button onClick="eliminarOrthesis(${item.id})">Remove</button>
                `;
            })
        },
        error: function(error){
            alert("Error Load");
            console.log(error);
        },
        complete : function(){
            alert("Loaded OK");
        }
    })
}

function editarOrthesis(){
    const json = {};
    json["id"] = parseInt(document.getElementById("orthesisId").value);
    json["brand"] = document.getElementById("orthesisBrand").value;
    json["model"] = parseInt(document.getElementById("orthesisModel").value);
    json["category_id"] = parseInt(document.getElementById("orthesisCategory_Id").value);
    json["name"] = document.getElementById("orthesisName").value;

    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/orthesis/orthesis',
        data: json,
        type: "PUT",
        dataType: 'json',
        complete : function(){
            alert("Edited Orthesis");
            limpiarCampos();
            location.reload();
        }
    })
}

function eliminarOrthesis(id){
    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/orthesis/orthesis/'+id,
        data: null,
        type: "DELETE",
        dataType: 'json',
        complete : function(){
            alert("Removed Orthesis");
            location.reload();
        }
    })
}
// SCRIPT CLIENT //

consultarClient();
function crearClient(){
    event.preventDefault();
    const json = {};
    json["id"] = parseInt(document.getElementById("clientId").value);
    json["name"] = document.getElementById("clientName").value;
    json["email"] = document.getElementById("clientEmail").value;
    json["age"] = parseInt(document.getElementById("clientAge").value);
    
    console.log(json)

    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        data: json,
        type: "POST",
        dataType: 'json',
        complete : function(){
            alert("Client Created");
            limpiarCampos();
            location.reload();
        }
    })
}

function limpiarCampos(){
    document.getElementById("clientId").value = '';
    document.getElementById("clientName").value = '';
    document.getElementById("clientEmail").value = '';
    document.getElementById("clientAge").value = '';
   
}

function seleccionarClient(elemento){
    client = elemento.parentElement.parentElement;
    document.getElementById("clientId").value = client.cells[0].innerHTML; 
    document.getElementById("clientName").value = client.cells[1].innerHTML;
    document.getElementById("clientEmail").value = client.cells[2].innerHTML;
    document.getElementById("clientAge").value = client.cells[3].innerHTML;
   
}
function consultarClient(){
    const table = document.getElementById("listaClient").getElementsByTagName('tbody')[0];
    console.log(table)
    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        data: null,
        type: "GET",
        dataType: 'json',
        success: function(data){
            data.items.map( item => {
                const newClient = table.insertRow();
                newClient.insertCell(0).innerHTML = item.id;
                newClient.insertCell(1).innerHTML = item.name;
                newClient.insertCell(2).innerHTML = item.email;
                newClient.insertCell(3).innerHTML = item.age;
                newClient.insertCell(4).innerHTML = `
                <button onClick="seleccionarClient(this)">Select</button>
                <button onClick="eliminarClient(${item.id})">Remove</button>
                `;
            })
        },
        error: function(error){
            alert("Error Load");
            console.log(error);
        },
        complete : function(){
            alert("Loaded OK");
        }
    })
}

function editarClient(){
    const json = {};
    json["id"] = parseInt(document.getElementById("clientId").value);
    json["name"] = document.getElementById("clientName").value;
    json["email"] = parseInt(document.getElementById("clientEmail").value);
    json["age"] = parseInt(document.getElementById("clientAge").value);
    

    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        data: json,
        type: "PUT",
        dataType: 'json',
        complete : function(){
            alert("Edited Client");
            limpiarCampos();
            location.reload();
        }
    })
}

function eliminarClient(id){
    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/'+id,
        data: null,
        type: "DELETE",
        dataType: 'json',
        complete : function(){
            alert("Removed Client");
            location.reload();
        }
    })
}
// SCRIPT MESSAGE //

consultarMessage();
function crearMessage(){
    event.preventDefault();
    const json = {};
    json["id"] = parseInt(document.getElementById("messageId").value);
    json["messagetext"] = document.getElementById("messageText").value;
    console.log(json)

    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        data: json,
        type: "POST",
        dataType: 'json',
        complete : function(){
            alert("Message Created");
            limpiarCampos();
            location.reload();
        }
    })
}

function limpiarCampos(){
    document.getElementById("messageId").value = '';
    document.getElementById("messageText").value = '';
}

function seleccionarMessage(elemento){
    message = elemento.parentElement.parentElement;
    document.getElementById("messageId").value = message.cells[0].innerHTML; 
    document.getElementById("messageText").value = message.cells[1].innerHTML;
}

function consultarMessage(){
    const table = document.getElementById("listaMessage").getElementsByTagName('tbody')[0];
    console.log(table)
    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        data: null,
        type: "GET",
        dataType: 'json',
        success: function(data){
            data.items.map( item => {
                const newMessage = table.insertRow();
                newMessage.insertCell(0).innerHTML = item.id;
                newMessage.insertCell(1).innerHTML = item.messagetext;
                newMessage.insertCell(2).innerHTML = `
                <button onClick="seleccionarMessage(this)">Select</button>
                <button onClick="eliminarMessage(${item.id})">Remove</button>
                `;
            })
        },
        error: function(error){
            alert("Error Load");
            console.log(error);
        },
    })
}

function editarMessage(){
    const json = {};
    json["id"] = parseInt(document.getElementById("messageId").value);
    json["messagetext"] = document.getElementById("messageText").value;

    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        data: json,
        type: "PUT",
        dataType: 'json',
        complete : function(){
            alert("Edited Message");
            limpiarCampos();
            location.reload();
        }
    })
}

function eliminarMessage(id){
    $.ajax({
        url: 'https://g93c9e93d7b3ceb-of3y6er19kfw9cax.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message/'+id,
        data: null,
        type: "DELETE",
        dataType: 'json',
        complete : function(){
            alert("Removed Message");
            location.reload();
        }
    })
}