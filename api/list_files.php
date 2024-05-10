<?php 
require_once 'utils.php';

date_default_timezone_set('Asia/Bangkok');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(list_files($dir));
}
?>