$(document).ready(function(){
	$.getJSON("http://json-data.herokuapp.com/forms" ,function(formData){


var htmlStr = ''

data.forEach(function(field){
	if (field.type === 'text' || field.type = 'email' || field.type === 'tel'){
		htmlStr += `<i class ="fa ${field.icon}"" aria-hidde ="true"></i>
		<input type="${field.type}" placeholder="${field.label}" id="$field.id}" />` 
	}

	if (field.type === 'select'){
		htmlStr += `<select id=${field.id}"">
			<option value =''>${field.label}</option> `

			field.options.forEach(function(option){
				htmlStr += `<option value` 
			})

	}
	if (field.type === 'textarea'){

	}
	
})



	})
})







formHTML += `<input class = "fa ${field.icon} />  <input type = "${field.type}" placeholder=${field.label} id="${field.id}"`