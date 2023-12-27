<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentUpdate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            
            'first_name' => ['min:3', 'max:255'],
            'last_name' => ['min:3', 'max:255'],
            'parent_email' => [ 'email', 'max:255'],
            'parent_phone' => [ 'min:3'],
            'parent_name' => [ 'min:3', 'max:255'],
            'parent_2_name' => ['string'],
            'parent_2_phone' => ['string'],
            'parent_2_email' => ['string'],
            'gender' => ['string'],
            'school_thoughts' => ['string'],
            'student_studying' => ['string'],
            'aditional_info' => ['string'],
            'birth_date' => ['string'],
           
        ];
    }
}
