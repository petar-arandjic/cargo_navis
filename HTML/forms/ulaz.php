<div class="ulaz_fartura_forma" id="ulaz_fartura_forma">
		<div class="ul_f_background"></div>
		<div class="ul_f_container">
			<div class="ul_f_header"></div>
			<div class="ul_f_content">
				<div class="ul_faktura" id="ulaz_prov">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Provajder:</p>
						</div>
					</div>
					<!--
					<input type="text" name="Provajder" class="fakture_ulaz" id="ulaz_provajder" placeholder="Provajder">
					-->
					<input type="text" name="Provajder" id="ulaz_provajder" class="input_place fakture_ulaz" autocomplete="off" onfocus="load_autoComplete(`ulaz_provajder`, 1, `autocomplete_container_prov2`)" oninput="load_autoComplete(`ulaz_provajder`, 1, `autocomplete_container_prov2`)" onblur="hide_autoComplete(`autocomplete_container_prov2`)" oninput="marked_element = 0" placeholder="Ime Provajdera">
					
					<div id="autocomplete_container_prov2">
					</div>
				</div>
				<div class="ul_faktura">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Broj Fakture:</p>
						</div>
					</div>
					<input type="text" name="broj_fakture_ulaz" class="fakture_ulaz" id="broj_fakture_ulaz" placeholder="Broj Fakture" style="text-transform: uppercase;">
				</div>
				<!--------------->
				<div class="ul_faktura" id="ul_f_2">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Datum Fakture:</p>
						</div>
					</div>
					<input type="date" name="datum_fakture_ulaz" class="fakture_ulaz" id="datum_fakture_ulaz">
				</div>
				<!--------------->
				<div class="ul_faktura" id="ul_f_3">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Iznos u stranoj valuti:</p>
						</div>
					</div>
					<input type="number" name="broj_fakture_ulaz" class="fakture_ulaz" id="iznos_s_fakture_ulaz" oninput="calculate_domaca_valuta(true)">
					<select id="valuta_fakture_izlaz" onchange="change_valute();">
						<option>EUR</option>
						<option>USD</option>
						<option>KM</option>
					</select>
				</div>
				<!--------------->
				<div class="ul_faktura" id="ul_f_4">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Iznos u domacoj valuti:</p>
						</div>
					</div>
					<input type="number" name="iznos_domaca_valuta" class="fakture_ulaz" id="iznos_domaca_valuta" oninput="calculate_domaca_valuta(false)">
				</div>
				<div class="ul_faktura" id="ul_f_5">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Kurs:</p>
						</div>
					</div>
					<input type="number" name="kurs" class="fakture_ulaz" id="kurs" oninput="change_valute()">
				</div>
				<div id="ul_f_form_buttons" class="form_buttons">
					<button type="button" class="save_button" id="ul_f_save_button" onclick="ulaz_faktura();"
					.>Sacuvaj</button>
					<button type="button" class="form_exit" id="ul_f_form_exit" onclick="show_form('ulaz_fartura_forma'); reset_ulazna_faktura_form();">x</button>
				</div>
			</div>
		</div>
	</div>