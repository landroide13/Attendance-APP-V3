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
            'lecture_id' => $this-> lecture_id,
            'student_id' => $this-> student_id,
            'status' => $this-> status -> name,
            'attendance_time' => $this -> attendance_time,  
        ];
    } 
}
