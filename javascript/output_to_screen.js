function what_to_run(s1){
	switch (s1) {
		case 0:
			load_to_screen();
			break;
		case 1:
			change_content();
			break;
		case 2:
			//console.log("switch")
			output_provajders();
			break;
		case 3:
			output_containers();
			break;
		default:
			console.log("data recived")
			break;
	}
	glob_var()
}
function glob_var(){
	//set variables for auto complete
	var cur_data = new Array();
	ser_val = [];
	for(let i = 0; i < server_response[0].length; i++){
		cur_data.push(server_response[0][i].qkomitent);
	}
	ser_val[0] = cur_data;
	cur_data = []
	for(let i = 0; i < server_response[1].length; i++){
		cur_data.push(server_response[1][i].provajeri_name);
	}
	ser_val[1] = cur_data;
	console.log(ser_val)
}
//load main table to screen
function load_to_screen(){
	var table = document.getElementById('main_table_container_child');

	table.innerHTML = '';

	for(var i = 0; i < server_response[0].length; i++){
		var date = server_response[0][i].job_date.slice(0,-9)
		date = date.split("-").reverse().join("-");
		//console.log(date);
		//console.log("212")
		table.innerHTML += `
			<tr id='${i}' class="table_rows">
				<td width="15%" id=id${i} class="j_id">${i+1}</td>
				<td width="40%">${server_response[0][i].qkomitent}</td>
				<td width="40%">${date}</td>
			</tr>
		`
	}
	v = document.getElementsByClassName("j_id")
	current_job_id = v[start_data].innerHTML;

	add_event_table();
}
//add click event to every row of table
function add_event_table(){

	var table = document.getElementsByClassName("table_rows")
	
	table[start_data].style.backgroundColor = '#dddddd';

	change_content();

	for(var i = 0; i < table.length; i++){
		table[i].addEventListener("click", function(){
			
			//change color of clicked row
			for(var b = 0; b < table.length; b++){
				table[b].style.backgroundColor = 'white'
			}
			table[this.id].style.backgroundColor = '#dddddd';

			start_data = this.id;

			//restart counter;
			current_factura.length = 0;

			//current_factura[0] for ulazne fakture, currant_factura[1] for izlazne fakture
			current_factura = [0,0];
			//get job id
			current_job_id = document.getElementById(`id${start_data}`).innerHTML

			document.getElementById("prov_note_text").value = "";

  			change_content();
		});
	}
}
//print data to end user and run function that do the same for other data
function change_content(){
	var date = server_response[0][start_data].port_from_date.split("-").reverse().join("-");
	var date2 = server_response[0][start_data].port_to_date.split("-").reverse().join("-");
	document.getElementById("paritet").innerHTML = server_response[0][start_data].paritet;
	document.getElementById("bl").innerHTML = server_response[0][start_data].bl2 + "   " + server_response[0][start_data].bl;
	document.getElementById("port_from").innerHTML = server_response[0][start_data].port_from;
	document.getElementById("port_from_date").innerHTML = date;
	document.getElementById("port_to").innerHTML = server_response[0][start_data].port_to;
	document.getElementById("port_to_date").innerHTML = date2;
	
	output_provajders();
	output_containers();
	print_ulazne_fakture();
	print_izlazne_faktura();
}
//output provajders
function output_provajders(){

	console.log("provajderi")

	provajderi_con = document.getElementById("con_child_provajder_table_child");

	provajderi_con.innerHTML = '';

	for(var i = 0; i < server_response[1].length; i++){
		if (server_response[1][i].jobs_id == server_response[0][start_data].id) {
			provajderi_con.innerHTML += `
				<tr>
					<td style="width: 45%">${server_response[1][i].provajeri_name}</td>
					<td style="width: 20%">${server_response[1][i].dogovorena_cijena}</td>
					<td style="width: 20%">${server_response[1][i].valuta_placanja}</td>
					<td style="width: 5%" id="prov_${i}" class="provajderi_table_button1" data-prov_id=${server_response[1][i].id} onclick="show_provajde(${i})"><img src="img/icons/question.svg" height="10%;"></td>
					<td style="width: 5%" class="provajderi_table_button1" data-prov_id=${server_response[1][i].id}><img src="img/icons/file.svg" height="10%;"></td>
					<td style="width: 5%" class="provajderi_table_button3" data-prov_id=${server_response[1][i].id}><img src="img/icons/delete.svg" height="10%;"></td>
				</tr>
			`
		}
	}
	//add click event to table elements
	delete_provaiders()
}
//output containers
function output_containers(){

	container_con = document.getElementById("container_table_content_child");

	container_con.innerHTML = '';

	var con_counter = 0;

	for(var i = 0; i < server_response[2].length; i++){
		if (server_response[2][i].jobs_id == server_response[0][start_data].id) {
			container_con.innerHTML +=`
				<tr>
					<td style="width: 45%">${server_response[2][i].container_id}</td>
					<td style="width: 50%">${server_response[2][i].container_type}</td>
					<td style="width: 5%" class="provajderi_table_button2" data-con_id=${server_response[2][i].id}><img src="img/icons/delete.svg" height="10%;"></td>
				</tr>
			`
			con_counter++;
		}
	}
	delete_containers();
	//document.getElementById("con_amount").innerHTML = con_counter;
}
//output ulazne fakture 
function print_ulazne_fakture(){
	//provera dali ima faktura za ovaj odredjeni posao
	var container = document.getElementById("in_f");
	var counter = 0
	var numb_of_fak = 0;

	for(let i = 0; i < server_response[3].length; i++){
		if (server_response[3][i].id_jobs == server_response[0][start_data].id) {
			numb_of_fak++;
		}
	}

	container.innerHTML = "";

	for(let i = 0; i < server_response[3].length; i++){
		var date = server_response[3][i].datum_fakture.split("-").reverse().join("-");
		if (server_response[3][i].id_jobs == server_response[0][start_data].id) {
			counter++
			container.innerHTML += `
				<div class="in_f1" id="">
						<div class="in_out_header">
							<button class="in_f_left" onclick="arrow_in_fakture(false, 'in_f1', 0);"><</button>
							<button class="in_f_right" onclick="arrow_in_fakture(true, 'in_f1', 0)">></button>
							<div class="in_out_header_child">
								<h3 style="text-align: center;">Ulazne Fakture ${counter}/${numb_of_fak}</h3>
							</div>
						</div>
						<div class="in_out_content_child">
							<p style="float: left;">Provajder:</p>
							<p style="float: right;">${server_response[3][i].ulaz_provajder}</p>
							<div style="clear:both;"></div>

							<p style="float: left;">Broj Fakture:</p>
							<p style="float: right;">${server_response[3][i].broj_fakture}</p>
							<div style="clear:both;"></div>

							<p style="float: left;">Datum Fakture:</p>
							<p style="float: right;">${date}</p>
							<div style="clear:both;"></div>

							<p style="float: left;">Valuta Placanja:</p>
							<p style="float: right;">${server_response[3][i].valuta_placanja}</p>
							<div style="clear:both;"></div>

							<p style="float: left;">Iznos (EUR/USD):</p>
							<p style="float: right;">${server_response[3][i].iznos_s_val}</p>
							<div style="clear:both;"></div>

							<p style="float: left;">Iznos (KM):</p>
							<p style="float: right;">${server_response[3][i].iznos}</p>

							<button class="fakture_button" onclick="show_form('ulaz_fartura_forma');">DODAJ NOVU FAKTURU</button>
							<button class="fakture_button_delete" onclick="get_delete('fakture_ulaz',${server_response[3][i].id})"><img src="img/icons/trash_w.svg" width="60%"></button>
						</div>
					</div>
			`
			show_in_fakture("in_f1");
		}
	}
	if (counter == 0) {
		container.innerHTML = `
		<button id="in_f_button" onclick="show_form('ulaz_fartura_forma');">
			<strong>DODAJ ULAZNU FAKTURU</strong>
		</button>
		`
	}
}
//output izlazne fakture
function print_izlazne_faktura(){
	//provera dali ima faktura za ovaj odredjeni posao
	var container = document.getElementById("out_f");
	var counter = 0
	var numb_of_fak = 0;

	for(let i = 0; i < server_response[4].length; i++){
		if (server_response[4][i].jobs_id == server_response[0][start_data].id) {
			numb_of_fak++;
		}
	}

	container.innerHTML = "";

	for(let i = 0; i < server_response[4].length; i++){
		var date = server_response[4][i].datum_fakture.split("-").reverse().join("-");
		if (server_response[4][i].jobs_id == server_response[0][start_data].id) {
			counter++
			container.innerHTML += `
				<div class="out_f1">
					<div class="in_out_header">
						<button class="in_f_left" onclick="arrow_in_fakture(false, 'out_f1', 1);"><</button>
						<button class="in_f_right" onclick="arrow_in_fakture(true, 'out_f1', 1)">></button>
						<div class="in_out_header_child">
							<h3 style="text-align: center;">Izlazne Fakture ${counter}/${numb_of_fak}</h3>
						</div>
					</div>
					<div class="in_out_content_child">
						<p style="float: left;">Broj Fakture:</p>
						<p style="float: right;">${server_response[4][i].broj_fakture}</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Datum Fakture:</p>
						<p style="float: right;">${date}</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Iznos (KM):</p>
						<p style="float: right;">${server_response[4][i].iznos}</p>
						<div style="clear:both;"></div>

						<button class="fakture_button" onclick="show_form('izlazna_fartura_forma');">DODAJ NOVU FAKTURU</button>
						<button class="fakture_button_delete" onclick="get_delete('izlazne_fakture',${server_response[4][i].id})"><img src="img/icons/trash_w.svg" width="60%"></button>
					</div>
				</div>
			`
			show_in_fakture("out_f1");
		}
	}
	if (counter == 0) {
		container.innerHTML = `
		<button id="out_f_button" onclick="show_form('izlazna_fartura_forma');">
			<strong>DODAJ IZLAZNU FAKTURU</strong>
		</button>
		`
	}
}
//show first faktura while others stay hidden
function show_in_fakture(div_id){
	var fakture = document.getElementsByClassName(div_id);
	fakture[0].style.display = 'block';
}
//script to make fakture arrows working
function arrow_in_fakture(s, div_id, b){
	var fakture = document.getElementsByClassName(div_id);
	if (s == false) {
		if (current_factura[b] > 0) {
			fakture[current_factura[b]].style.display = 'none';
			current_factura[b] = current_factura[b] - 1;
			fakture[current_factura[b]].style.display = 'block';		
		}
	}else{
		if (current_factura[b] < fakture.length - 1) {
			fakture[current_factura[b]].style.display = 'none';
			current_factura[b] = current_factura[b] + 1;
			fakture[current_factura[b]].style.display = 'block'
		}
	}
}