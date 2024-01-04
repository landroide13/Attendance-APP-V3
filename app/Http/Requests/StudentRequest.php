<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
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
            'first_name' => ['required', 'min:3', 'max:255'],
            'last_name' => ['required', 'min:3', 'max:255'],
            'parent_email' => ['required', 'email', 'max:255', 'unique:students'],
            'parent_phone' => ['required', 'min:3'],
            'parent_name' => ['required', 'min:3', 'max:255'], 
            'parent_2_name' => ['string'],
            'parent_2_phone' => ['string'],
            'parent_2_email' => ['string'],
            'gender' => ['required'],
            'school_thoughts' => ['max:255'],
            'student_studying' => ['max:255'],
            'aditional_info' => ['max:255'],
            'birth_date' => ['max:255'],
        ];
    }
}
