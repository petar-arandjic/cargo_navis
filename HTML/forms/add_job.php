<div id="add_job_form">
		<div id="job_background">	
		</div>
		<div id="job_form">
			<div class="form_header">
			</div>
			<form class="form_content">
				<!--             -->
				<div class="div_input">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>Komitent:</p>
						</div>
						<div class="div_input_h_p_child" id="inp_par">
							<p>Paritet:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="text" name="paritet" class="div_input_c_i" autocomplete="off" placeholder="Komitent" id="komitent">
						<select class="paritet_form" id="paritet_form">
							<option>DAB</option>
							<option>FOB</option>
							<option>CIF</option>
						</select>
					</div>
				</div>
				<!--             -->
				<div class="div_input" id="inp_bl">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>B/L:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="text" name="bl" class="div_input_c_i" autocomplete="off" placeholder="B/L" id="bl_form">
					</div>
				</div>
				<!--             -->
				<div class="div_input" id="inp_port_from">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>Luka Polazak:</p>
						</div>
						<div class="div_input_h_p_child" id="port_from_date_p">
							<p>Datum Polaska:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="text" name="port_from" class="div_input_c_i" autocomplete="off" placeholder="Luka Polazak" id="port_from_form">
						<input type="date" name="port_from_date" id="port_from_date_form">
					</div>
				</div>
				<!--             -->
				<div class="div_input" id="inp_port_to">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>Luka Dolaska:</p>
						</div>
						<div class="div_input_h_p_child" id="port_to_date_p">
							<p>Datum Dolaska:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="text" name="port_to" class="div_input_c_i" autocomplete="off" placeholder="Luka Polazak" id="port_to_form">
						<input type="date" name="port_to_date" id="port_to_date_form">
					</div>
				</div>
				<!--             -->
				<div class="div_input" id="neg_prices">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>Dogovorena Cijena Ulaz:</p>
						</div>
						<div class="div_input_h_p_child" id="neg_price_out_p">
							<p>Dogovorena Cijena Izlaz:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="number" name="neg_price_in" class="div_input_c_i" autocomplete="off" placeholder="Cijena Ulaz" id="neg_price_in">
						<input type="number" name="port_to" class="div_input_c_i" autocomplete="off" placeholder="Cijena Izlaz" id="neg_price_out">
					</div>
				</div>
				<!--             -->
				<div id="form_buttons" class="form_buttons">
					<button type="button" class="save_button" id="save_button" onclick="send_form_data();">Dalje -></button>
					<button type="button" class="form_exit" id="form_exit" onclick="show_form('add_job_form')">x</button>
				</div>
			</form>
			<?php
			//include forms for provajder and container
			include "add_job_forms/provajderi_form.php";
			include "add_job_forms/containers_form.php";
			?>
		</div>
	</div>

