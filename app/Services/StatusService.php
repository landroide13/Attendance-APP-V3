<?php

namespace App\Services;

use App\Models\Status;

class StatusService
{
    public function store(array $details):Status
    {
        $status = Status::create([
            'name' => $details['name'],
        ]);

        return $status;
    }

    public function update(array $details):Status
    {
        $status = Status::update([
            'name' => $details['name'],
        ]);

        return $status;
    }
    

}