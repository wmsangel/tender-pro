<?php
$xml = simplexml_load_string(file_get_contents('https://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=01/06/2022&date_req2=01/06/2022&VAL_NM_RQ=R01235'));
echo json_encode($xml);