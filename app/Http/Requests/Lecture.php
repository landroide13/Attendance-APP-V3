<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Lecture extends FormRequest
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
            'lecture_name' => ['required', 'min:4', 'max:100'],
            'description' => ['max:100'],
            'term_id' =>['required']
        ];
    }
}
