<?php

namespace App\Services;

use App\Jobs\GenerateAttendanceReport;


class ReportServiceCSV {

    public function generateCsv(string $filePath)
    {
        GenerateAttendanceReport::dispatch($filePath);
    }


}










