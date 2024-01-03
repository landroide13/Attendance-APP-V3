<?php

namespace App\Http\Resources;

use App\Http\Resources\User as UserRersource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Lecture extends JsonResource
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
            'lecture_name' => $this->lecture_name,
            'description' => $this->description,
            'tutors' => $this-> tutors,
            'students' => $this-> students,
            'term' => $this-> term,
            'attendance' => $this-> attendance, 
            'attendance' => Attendance::collection($this->whenLoaded('attendance'))
        ];
    }
}
