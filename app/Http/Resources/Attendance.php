<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Attendance extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'enrol_student_id' => $this->enrol_student_id,
            'student' => $this -> enrol($this->id),
            'status' => $this-> status -> name,
            'date' => $this-> created_at ->format('Y-m-d')
        ];
    }
}
