<?php

namespace App\Domain\Customer\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'address' => 'required',
            'postcode' => 'required|integer',
            'city' => 'required',
            'state' => 'required',
            'country_id' => 'required',
            'phone' => 'required',
            'email' => 'email|required',
        ];
    }
}
