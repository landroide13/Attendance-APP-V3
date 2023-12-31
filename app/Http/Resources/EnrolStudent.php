<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EnrolStudent extends JsonResource
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
            'student' => $this->student,
            'lecture' => $this->lecture_tutor,
           
            'attendance' => Attendance::collection($this->whenLoaded('attendance')),
        ];
    }
}
