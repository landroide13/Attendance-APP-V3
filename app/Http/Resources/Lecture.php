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
            'user_id' => $this->user_id,
            'tutor' => $this->user,
            'attendance' => $this-> attendance,
            'enrols' => $this -> enrols
        ];
    }
}
