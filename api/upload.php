<?php
require_once 'utils.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_FILES['file'])) {
        $file = $_FILES['file'];
        $file_type = $file['file']['type'];

        $allowed_types = ['text/csv', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        $msg = upload_file($file, $dir, $allowed_types);

        $res = new stdClass();
        $res->message = $msg == "" ? "Upload Success": $msg;
        $res->status = "success";
        $res->type = $file_type;
    }

    echo json_encode($res);
}
?>
