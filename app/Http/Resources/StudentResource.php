<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
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
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'parent_email' => $this->parent_email,
            'parent_phone' => $this->parent_phone, 
            'parent_2_name' => $this -> parent_2_name,
            'parent_2_email' => $this -> parent_2_email,
            'parent_2_phone' => $this -> parent_2_phone, 
            'gender' => $this->gender,
            //'attendance' => $this -> attendance,
            'subjects' => $this -> lectures,
            'school_thoughts' => $this -> school_thoughts,
            'student_studying' => $this -> student_studying,
            'aditional_info' => $this -> aditional_info,
            'birth_date' => $this -> birth_date
        ];
    }
}
