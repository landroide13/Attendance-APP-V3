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
            'parent_name' => ['min:3', 'max:255'],
            'parent_2_name' => ['min:3'],
            'parent_2_phone' => ['min:3'],
            'parent_2_email' => ['email', 'max:255'],
            'gender' => ['required'],
            'school_thoughts' => ['required'],
            'student_studying' => ['required'],
            'aditional_info' => ['max:255'],
            'birth_date' => ['required']
        ];
    }
}
