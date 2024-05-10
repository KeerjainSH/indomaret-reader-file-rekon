<?php
$dir = "/Applications/XAMPP/xamppfiles/htdocs/demo";

function list_files($dir) {
    $files = scandir($dir);
    $data = [];

    if ($files) {
        foreach($files as $file) {
            $filePath = $dir . '/' . $file;
            
            if (is_file($filePath)) {
                $fileInfo = stat($filePath);

                $fileObject = new stdClass();
                $fileObject->filename = $file;
                $fileObject->size_in_byte = $fileInfo['size'];
                $fileObject->lastModified = date("Y-m-d H:i:s", $fileInfo['mtime']);
                                
                $data[] = $fileObject;
            }
        }
    }

    return $data;
}

function upload_file($file, $upload_dir, $allowed_types) {
    $error = "";
    $file_name = $file['name'];
    // $file_size = $file['size'];
    $file_tmp = $file['tmp_name'];
    $file_type = $file['type'];

    $target_file = $upload_dir . "/". basename($file_name);

    if(file_exists($target_file)) {
        unlink($target_file);
    }

    if(!in_array($file_type, $allowed_types)) {
        $error = "File type is not allowed";
    }

    if(empty($error)) {
        if(!move_uploaded_file($file_tmp, $target_file)) {
            $error = "Error uploading file";
        }
    }

    return $error;
}
?>
