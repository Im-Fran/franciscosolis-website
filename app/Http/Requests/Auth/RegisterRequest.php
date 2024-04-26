<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class RegisterRequest extends FormRequest {

    public function rules(): array {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rules\Unique::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ];
    }

    public function authorize(): bool {
        return auth()->guest();
    }
}